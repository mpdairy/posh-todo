(ns posh-todo.core
  (:require [reagent.core :as r]
            [posh.reagent :as p]
            [datascript.core :as d]
            [posh-todo.db :as db :refer [conn]]
            [posh-todo.util :as util :refer [tempid]]
            [posh-todo.categories :as cats]
            [posh-todo.dashboard :as dash]
            [posh-todo.components :as comp]
            [posh.lib.update :as u]))

(enable-console-print!)

;;; setup

(db/populate! conn)

(p/posh! conn)

;(p/pull conn '[*] [:task/name "Mop Floors"])
(defn testdog [conn]
  (let [floors @(p/pull conn '[*] [:task/name "Mop Floors"])]
    [:div
     {:on-click
      #(p/transact! conn [[:db/add (:db/id floors) :task/done (not (:task/done floors))]])}
     "Hey guys"
     (pr-str floors)
     ])

  )

(defn app [conn todo-id]
  (let [todo @(p/pull conn '[:todo/name] [:todo/name "Matt's List"])]
    [:div
     [testdog conn]
     [:h1 (:todo/name todo)]
     [dash/dashboard-button conn todo-id]
     [cats/category-menu conn todo-id]
     [cats/add-new-category conn todo-id]
     [cats/category-panel conn todo-id]
     [:div 
      {:on-click #(println
                   "cache: "
                   ;;(:cache @(p/get-posh-atom conn))
                   (u/update-q-with-dbvarmap-debug
                    @(p/get-posh-atom conn)
                    '[:q
                      [:find ?cat ?cat_name ?task_cat
                       :in $ ?t
                       :where
                       [?t :task/category ?task_cat]
                       [?task_cat :category/todo ?todo]
                       [?cat :category/todo ?todo]
                       [?cat :category/name ?cat_name]]
                      ([:db :conn0] 5)]))}
      "hey"]]))


(defn start [conn]
  (let [todo-id (d/q '[:find ?todo . :where [?todo :todo/name _]] @conn)]
    (r/render-component
     [app conn todo-id]
     (.getElementById js/document "app"))))

(start conn)

