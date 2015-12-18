(ns posh-todo.dashboard
  (:require [posh.core :as p]
            [posh-todo.db :as db :refer [conn]]
            [posh-todo.util :as util]
            [posh-todo.tasks :as tasks]
            [posh-todo.components :as comp]))


(defn dashboard-category [conn todo-id category]
  [:div
   [:button
    {:onClick #(p/transact!
                conn
                [[:db/add todo-id :todo/display-category (:db/id category)]])}
    (:category/name category)] " (" (count (:task/_category category)) ")"])

(defn delete-listed [conn tasks]
  [comp/stage-button
   ["Delete Listed" "Are you sure?" "They'll be gone forever, ok?"]
   #(p/transact! conn (map (fn [t] [:db.fn/retractEntity t]) tasks))])

(defn category-select [conn task-id]
  (let [cats @(p/q conn
                   '[:find ?cat ?cat_name ?task_cat :in $ ?t
                     :where
                     [?t :task/category ?task_cat]
                     [?task_cat :category/todo ?todo]
                     [?cat :category/todo ?todo]
                     [?cat :category/name ?cat_name]]
                   task-id)]
    [:span
     [:select {:on-change #(p/transact!
                            conn
                            [[:db/add task-id :task/category
                              (cljs.reader/read-string (.. % -target -value))]])
               :default-value (nth (first cats) 2)}
      (for [c cats]
        ^{:key (first c)} [:option {:value (first c)} (second c)])]]))

(defn dash-task [conn task-id]
  (let [task @(p/pull conn '[:db/id :task/done :task/pinned :task/name
                             {:task/category [:db/id :category/name]}]
                      task-id)]
    [:span
     [comp/checkbox conn task-id :task/done (:task/done task)]
     [comp/editable-label conn task-id :task/name]
     [comp/stage-button ["X" "X?"]
      (fn [] (p/transact! conn [[:db.fn/retractEntity task-id]]))]
     [category-select conn task-id]]))

(defn task-list [conn todo-id]
  (let [listing (-> @(p/pull conn [:todo/listing] todo-id)
                    :todo/listing)
        tasks   (case listing
                  :all     @(p/q conn
                                 '[:find [?t ...]
                                   :in $ ?todo
                                   :where
                                   [?c :category/todo ?todo]
                                   [?t :task/category ?c]]
                                 todo-id)
                  @(p/q conn
                        '[:find [?t ...]
                          :in $ ?todo ?done
                          :where
                          [?c :category/todo ?todo]
                          [?t :task/category ?c]
                          [?t :task/done ?done]]
                        todo-id (= listing :done)))]
    [:div
     [:h3 (case listing
            :all "All Tasks"
            :done "Completed Tasks"
            :not-done "Uncompleted Tasks")]
     (if-not (empty? tasks)
       [:div
        (for [t tasks]
          ^{:key t} [:div [dash-task conn t]])
        [delete-listed conn tasks]]
       [:div "None"])]))

(defn change-listing! [conn todo-id v]
  (p/transact! conn [[:db/add todo-id :todo/listing v]]))

(defn listing-buttons [conn todo-id]
  [:div
   [:button
    {:on-click #(change-listing! conn todo-id :all)}
    "All"]
   [:button
    {:on-click #(change-listing! conn todo-id :done)}
    "Checked"]
   [:button
    {:on-click #(change-listing! conn todo-id :not-done)}
    "Un-checked"]])

(defn dashboard [conn todo-id]
  (let [cats (->> @(p/pull conn
                           '[{:category/_todo [:db/id :category/name {:task/_category [:db/id]}]}]
                           todo-id)
                  :category/_todo
                  (sort-by :category/name))]
    [:div
     [:h2 "DASHBOARD: "] [listing-buttons conn todo-id]
     [task-list conn todo-id]]))

(defn dashboard-button [conn todo-id]
  (let [current-category (-> @(p/pull conn [:todo/display-category] todo-id)
                             :todo/display-category
                             :db/id)]
    [:button
     {:onClick #(p/transact!
                 conn
                 (if current-category
                   [[:db/retract todo-id :todo/display-category current-category]
                    [:db/add todo-id :todo/listing :all]]
                   []))}
     "Dashboard"]))
