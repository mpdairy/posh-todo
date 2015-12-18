// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh_todo.tasks');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh_todo.db');
goog.require('posh_todo.util');
goog.require('posh_todo.components');
posh_todo.tasks.task = (function posh_todo$tasks$task(conn,task_id){
var task__$1 = cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","done","task/done",-886317915),new cljs.core.Keyword("task","pinned","task/pinned",-1211221984)], null),task_id));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.checkbox,conn,task_id,new cljs.core.Keyword("task","done","task/done",-886317915),new cljs.core.Keyword("task","done","task/done",-886317915).cljs$core$IFn$_invoke$arity$1(task__$1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.editable_label,conn,task_id,new cljs.core.Keyword("task","name","task/name",1848772036)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.stage_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X?"], null),((function (task__$1){
return (function (){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),task_id], null)], null));
});})(task__$1))
], null)], null);
});
posh_todo.tasks.add_task_BANG_ = (function posh_todo$tasks$add_task_BANG_(conn,category_id,task_name){
return posh_todo.util.new_entity_BANG_.call(null,conn,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("task","name","task/name",1848772036),task_name,new cljs.core.Keyword("task","category","task/category",-597104427),category_id,new cljs.core.Keyword("task","done","task/done",-886317915),false], null));
});
posh_todo.tasks.task_panel = (function posh_todo$tasks$task_panel(conn,category_id){
var c = cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("task","_category","task/_category",-631269818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)], null),category_id));
var cat_name = new cljs.core.Keyword("category","name","category/name",1793490219).cljs$core$IFn$_invoke$arity$1(c);
var tasks = new cljs.core.Keyword("task","_category","task/_category",-631269818).cljs$core$IFn$_invoke$arity$1(c);
cljs.core.println.call(null,"TASK PANEL: ",category_id);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Add new task to \"",cat_name,"\": ",cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.add_box,conn,cljs.core.partial.call(null,posh_todo.tasks.add_task_BANG_,conn,category_id)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category_id], null))], null),(function (){var iter__17504__auto__ = ((function (c,cat_name,tasks){
return (function posh_todo$tasks$task_panel_$_iter__21726(s__21727){
return (new cljs.core.LazySeq(null,((function (c,cat_name,tasks){
return (function (){
var s__21727__$1 = s__21727;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21727__$1);
if(temp__4425__auto__){
var s__21727__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21727__$2)){
var c__17502__auto__ = cljs.core.chunk_first.call(null,s__21727__$2);
var size__17503__auto__ = cljs.core.count.call(null,c__17502__auto__);
var b__21729 = cljs.core.chunk_buffer.call(null,size__17503__auto__);
if((function (){var i__21728 = (0);
while(true){
if((i__21728 < size__17503__auto__)){
var t = cljs.core._nth.call(null,c__17502__auto__,i__21728);
cljs.core.chunk_append.call(null,b__21729,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.tasks.task,conn,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t)], null)));

var G__21730 = (i__21728 + (1));
i__21728 = G__21730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21729),posh_todo$tasks$task_panel_$_iter__21726.call(null,cljs.core.chunk_rest.call(null,s__21727__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21729),null);
}
} else {
var t = cljs.core.first.call(null,s__21727__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.tasks.task,conn,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t)], null)),posh_todo$tasks$task_panel_$_iter__21726.call(null,cljs.core.rest.call(null,s__21727__$2)));
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

//# sourceMappingURL=tasks.js.map