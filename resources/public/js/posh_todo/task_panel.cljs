(ns posh-todo.task-panel
  (:require [posh.core :as p]
            [posh-todo.db :as db :refer [conn]]
            [posh-todo.util :as util]))

(defn task [conn task-id]
  (let [task @(p/pull conn '[:task/done :task/pinned] task-id)]
    [:div [comp/checkbox conn task-id :task/done (:task/done task)]
     [comp/editable-label conn task-id :task/name]
     [comp/delete-button conn task-id]]))

(defn add-task!
  [conn category-id task-name]
  (util/new-entity! conn {:task/name task-name :task/category category-id}))

(defn task-panel [conn category-id]
  (let [c @(p/pull conn
                   '[:category/name {:task/_category [:db/id]}]
                   category-id)
        cat-name (:category/name c)
        tasks (:task/_category c)]
    (println "TASK PANEL: " category-id)
    [:div
     [:div "Add new task to \"" cat-name "\": "
      [comp/add-box conn (partial add-task! conn category-id)]]
     (for [t tasks]
       ^{:key (:db/id t)} [task conn (:db/id t)])]))
