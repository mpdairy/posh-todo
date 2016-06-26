(defproject posh-todo "0.1.0-SNAPSHOT"
  :description "An example of a Todo using Posh"
  :url "http://github.com/mpdairy/posh/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies  [[org.clojure/clojure "1.8.0"]
                  [org.clojure/clojurescript "1.7.228"]
                  [org.clojure/core.match "0.3.0-alpha4"]
                  [datascript "0.15.0"]
                  [posh "0.5"]
                  [reagent "0.6.0-rc"]
                  [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]]
  :plugins [[lein-cljsbuild "1.1.3"]]
  :cljsbuild {
              :builds [ {:id "posh-todo" 
                         :source-paths ["src/"]
                         :figwheel false
                         :compiler {:main "posh-todo.core"
                                    :asset-path "js"
                                    :output-to "resources/public/js/main.js"
                                    :output-dir "resources/public/js"} } ]
              })
