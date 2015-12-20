(ns posh-todo.components
  (:require [posh.core :as p]
            [posh-todo.db :as db :refer [conn]]
            [reagent.core :as r]
            [posh-todo.util :as util]))

;;; General Purpose Components

;;;;; input box that sends the value of the text back to add-fn

(defn add-box [conn add-fn]
  (let [edit (r/atom "")]
    (fn [conn add-fn]
      [:span
       [:input
        {:type "text"
         :value @edit
         :onChange #(reset! edit (-> % .-target .-value))}]
       [:button
        {:onClick #(when-not (empty? @edit)
                     (add-fn @edit)
                     (reset! edit ""))}
        "Add"]])))

;;;;; edit box

(defn edit-box [conn edit-id id attr]
  (let [edit @(p/pull conn [:edit/val] edit-id)]
    [:span
     [:input
      {:type "text"
       :value (:edit/val edit)
       :onChange #(p/transact! conn [[:db/add edit-id :edit/val (-> % .-target .-value)]])}]
     [:button
      {:onClick #(p/transact! conn [[:db/add id attr (:edit/val edit)]
                                    [:db.fn/retractEntity edit-id]])}
      "Done"]
     [:button
      {:onClick #(p/transact! conn [[:db.fn/retractEntity edit-id]])}
      "Cancel"]]))

(defn editable-label [conn id attr]
  (let [val  (attr @(p/pull conn [attr] id))
        edit @(p/q conn '[:find ?edit .
                          :in $ ?id ?attr
                          :where
                          [?edit :edit/id ?id]
                          [?edit :edit/attr ?attr]]
                   id attr)]
    (if-not edit
      [:span val
       [:button
        {:onClick #(util/new-entity! conn {:edit/id id :edit/val val :edit/attr attr})}
        "Edit"]]
      [edit-box conn edit id attr])))

;;; check box

(defn checkbox [conn id attr checked?]
  [:input
      {:type "checkbox"
       :checked checked?
       :onChange #(p/transact! conn [[:db/add id attr (not checked?)]])}])

;; stage button

(defn stage-button [stages finish-fn]
  (let [stage (r/atom 0)]
    (fn [stages finish-fn]
      (when (= @stage (count stages))
        (do (finish-fn)
            (reset! stage 0)))
      [:button
       {:onClick    #(swap! stage inc)
        :onMouseOut #(reset! stage 0)}
       (nth stages @stage)])))



