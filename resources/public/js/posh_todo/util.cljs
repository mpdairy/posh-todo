(ns posh-todo.util
  (:require [datascript.core :as d]))

;;; util
(defn pairmap [pair] (apply merge (map (fn [[a b]] {a b}) pair)))

(defn ents [db ids] (map (partial d/entity db) ids))

(defn new-entity! [conn varmap]
  ((:tempids (d/transact! conn [(merge varmap {:db/id -1})])) -1))

;;; setup

(def tempid (let [n (atom 0)] (fn [] (swap! n dec))))
