(ns posh-todo.tasks
  (:require [posh.reagent :as p]
            [posh-todo.db :as db :refer [conn]]
            [posh-todo.util :as util]
            [posh-todo.components :as comp]))

(defn task [conn task-id]
  (let [task @(p/pull conn '[:task/done :task/pinned] task-id)]
    [:span [comp/checkbox conn task-id :task/done (:task/done task)]
     [comp/editable-label conn task-id :task/name]
     [comp/stage-button ["X" "X?"]
      (fn [] (p/transact! conn [[:db.fn/retractEntity task-id]]))]]))

(defn add-task!
  [conn category-id task-name]
  (util/new-entity! conn {:task/name task-name
                          :task/category category-id
                          :task/done false}))

(defn task-panel [conn category-id]
  (let [c @(p/pull conn
                   '[:category/name {:task/_category [:db/id]}]
                   category-id)
        cat-name (:category/name c)
        tasks (:task/_category c)]
    (println "TASK PANEL: " category-id)
    [:div
     [:div "Add new task to \"" cat-name "\": "
      ^{:key category-id} [comp/add-box conn (partial add-task! conn category-id)]]
     (for [t tasks]
       ^{:key (:db/id t)} [:div [task conn (:db/id t)]])]))
