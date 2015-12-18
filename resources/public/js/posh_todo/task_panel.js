// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh_todo.task_panel');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh_todo.db');
goog.require('posh_todo.util');
posh_todo.task_panel.task = (function posh_todo$task_panel$task(conn,task_id){
var task__$1 = cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","done","task/done",-886317915),new cljs.core.Keyword("task","pinned","task/pinned",-1211221984)], null),task_id));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.checkbox,conn,task_id,new cljs.core.Keyword("task","done","task/done",-886317915),new cljs.core.Keyword("task","done","task/done",-886317915).cljs$core$IFn$_invoke$arity$1(task__$1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.editable_label,conn,task_id,new cljs.core.Keyword("task","name","task/name",1848772036)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.delete_button,conn,task_id], null)], null);
});
posh_todo.task_panel.add_task_BANG_ = (function posh_todo$task_panel$add_task_BANG_(conn,category_id,task_name){
return posh_todo.util.new_entity_BANG_.call(null,conn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("task","name","task/name",1848772036),task_name,new cljs.core.Keyword("task","category","task/category",-597104427),category_id], null));
});
posh_todo.task_panel.task_panel = (function posh_todo$task_panel$task_panel(conn,category_id){
var c = cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("task","_category","task/_category",-631269818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)], null),category_id));
var cat_name = new cljs.core.Keyword("category","name","category/name",1793490219).cljs$core$IFn$_invoke$arity$1(c);
var tasks = new cljs.core.Keyword("task","_category","task/_category",-631269818).cljs$core$IFn$_invoke$arity$1(c);
cljs.core.println.call(null,"TASK PANEL: ",category_id);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Add new task to \"",cat_name,"\": ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp.add_box,conn,cljs.core.partial.call(null,posh_todo.task_panel.add_task_BANG_,conn,category_id)], null)], null),(function (){var iter__17504__auto__ = ((function (c,cat_name,tasks){
return (function posh_todo$task_panel$task_panel_$_iter__35030(s__35031){
return (new cljs.core.LazySeq(null,((function (c,cat_name,tasks){
return (function (){
var s__35031__$1 = s__35031;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35031__$1);
if(temp__4425__auto__){
var s__35031__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35031__$2)){
var c__17502__auto__ = cljs.core.chunk_first.call(null,s__35031__$2);
var size__17503__auto__ = cljs.core.count.call(null,c__17502__auto__);
var b__35033 = cljs.core.chunk_buffer.call(null,size__17503__auto__);
if((function (){var i__35032 = (0);
while(true){
if((i__35032 < size__17503__auto__)){
var t = cljs.core._nth.call(null,c__17502__auto__,i__35032);
cljs.core.chunk_append.call(null,b__35033,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.task_panel.task,conn,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t)], null)));

var G__35034 = (i__35032 + (1));
i__35032 = G__35034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35033),posh_todo$task_panel$task_panel_$_iter__35030.call(null,cljs.core.chunk_rest.call(null,s__35031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35033),null);
}
} else {
var t = cljs.core.first.call(null,s__35031__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.task_panel.task,conn,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t)], null)),posh_todo$task_panel$task_panel_$_iter__35030.call(null,cljs.core.rest.call(null,s__35031__$2)));
}
} else {
return null;
}
break;
}
});})(c,cat_name,tasks))
,null,null));
});})(c,cat_name,tasks))
;
return iter__17504__auto__.call(null,tasks);
})()], null);
});

//# sourceMappingURL=task_panel.js.map