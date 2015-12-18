(ns posh-todo.db
  (:require [datascript.core :as d]
            [posh-todo.util :as util :refer [tempid]]))

(def schema {:task/category         {:db/valueType :db.type/ref}
             :category/todo         {:db/valueType :db.type/ref}
             :todo/display-category {:db/valueType :db.type/ref}
             :action/editing        {:db/cardinality :db.cardinality/many}})

(def conn (d/create-conn schema))

(defn populate! [conn]
  (let [todo-id    (util/new-entity! conn {:todo/name "Matt's List" :todo/listing :all})
        at-home    (util/new-entity! conn {:category/name "At Home" :category/todo todo-id})
        work-stuff (util/new-entity! conn {:category/name "Work Stuff" :category/todo todo-id})
        hobby      (util/new-entity! conn {:category/name "Hobby" :category/todo todo-id})]
    (d/transact!
     conn
     [{:db/id (tempid)
       :task/name "Clean Dishes"
       :task/done true
       :task/category at-home}
      {:db/id (tempid)
       :task/name "Mop Floors"
       :task/done true
       :task/pinned true
       :task/category at-home}
      {:db/id (tempid)
       :task/name "Draw a picture of a cat"
       :task/done false
       :task/category hobby}
      {:db/id (tempid)
       :task/name "Compose opera"
       :task/done true
       :task/category hobby}
      {:db/id (tempid)
       :task/name "stock market library"
       :task/done false
       :task/pinned true
       :task/category work-stuff}])))

