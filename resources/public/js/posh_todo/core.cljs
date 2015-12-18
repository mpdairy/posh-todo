(ns posh-todo.core
  (:require [reagent.core :as r]
            [posh.core :as p]
            [datascript.core :as d]
            [posh-todo.db :as db :refer [conn]]
            [posh-todo.util :as util :refer [tempid]]
            [posh-todo.categories :as cats]
            [posh-todo.dashboard :as dash]
            [posh-todo.components :as comp]))

(enable-console-print!)

;;; setup

(db/populate! conn)

(p/posh! conn)

(defn app [conn todo-id]
  (let [todo @(p/pull conn '[:todo/name] todo-id)]
    [:div
     [:h1 (:todo/name todo)]
     [dash/dashboard-button conn todo-id]
     [cats/category-menu conn todo-id]
     [cats/add-new-category conn todo-id]
     [cats/category-panel conn todo-id]]))


(defn start [conn]
  (let [todo-id (d/q '[:find ?todo . :where [?todo :todo/name _]] @conn)]
    (r/render-component
     [app conn todo-id]
     (.getElementById js/document "app"))))

(start conn)

