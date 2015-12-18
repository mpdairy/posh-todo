// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh_todo.core');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh_todo.components');
goog.require('reagent.core');
goog.require('posh_todo.categories');
goog.require('posh_todo.dashboard');
goog.require('datascript.core');
goog.require('posh_todo.db');
goog.require('posh_todo.util');
cljs.core.enable_console_print_BANG_.call(null);
posh_todo.db.populate_BANG_.call(null,posh_todo.db.conn);
posh.core.posh_BANG_.call(null,posh_todo.db.conn);
posh_todo.core.app = (function posh_todo$core$app(conn,todo_id){
var todo = cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","name","todo/name",1848785027)], null),todo_id));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword("todo","name","todo/name",1848785027).cljs$core$IFn$_invoke$arity$1(todo)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.dashboard.dashboard_button,conn,todo_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.categories.category_menu,conn,todo_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.categories.add_new_category,conn,todo_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.categories.category_panel,conn,todo_id], null)], null);
});
posh_todo.core.start = (function posh_todo$core$start(conn){
var todo_id = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","name","todo/name",1848785027),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),cljs.core.deref.call(null,conn));
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.core.app,conn,todo_id], null),document.getElementById("app"));
});
posh_todo.core.start.call(null,posh_todo.db.conn);

//# sourceMappingURL=core.js.map