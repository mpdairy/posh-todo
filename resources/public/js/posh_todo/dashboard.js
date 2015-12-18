// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh_todo.dashboard');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh_todo.components');
goog.require('posh_todo.tasks');
goog.require('posh_todo.db');
goog.require('posh_todo.util');
posh_todo.dashboard.dashboard_category = (function posh_todo$dashboard$dashboard_category(conn,todo_id,category){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),todo_id,new cljs.core.Keyword("todo","display-category","todo/display-category",-158855546),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(category)], null)], null));
})], null),new cljs.core.Keyword("category","name","category/name",1793490219).cljs$core$IFn$_invoke$arity$1(category)], null)," (",cljs.core.count.call(null,new cljs.core.Keyword("task","_category","task/_category",-631269818).cljs$core$IFn$_invoke$arity$1(category)),")"], null);
});
posh_todo.dashboard.delete_listed = (function posh_todo$dashboard$delete_listed(conn,tasks){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.stage_button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Delete Listed","Are you sure?","They'll be gone forever, ok?"], null),(function (){
return posh.core.transact_BANG_.call(null,conn,cljs.core.map.call(null,(function (t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),t], null);
}),tasks));
})], null);
});
posh_todo.dashboard.category_select = (function posh_todo$dashboard$category_select(conn,task_id){
var cats = cljs.core.deref.call(null,posh.core.q.call(null,conn,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?cat","?cat",-1179002074,null),new cljs.core.Symbol(null,"?cat_name","?cat_name",-596725899,null),new cljs.core.Symbol(null,"?task_cat","?task_cat",-1058331520,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","category","task/category",-597104427),new cljs.core.Symbol(null,"?task_cat","?task_cat",-1058331520,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?task_cat","?task_cat",-1058331520,null),new cljs.core.Keyword("category","todo","category/todo",-895201156),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?cat","?cat",-1179002074,null),new cljs.core.Keyword("category","todo","category/todo",-895201156),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?cat","?cat",-1179002074,null),new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.Symbol(null,"?cat_name","?cat_name",-596725899,null)], null)], null),task_id));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cats){
return (function (p1__21157_SHARP_){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),task_id,new cljs.core.Keyword("task","category","task/category",-597104427),cljs.reader.read_string.call(null,p1__21157_SHARP_.target.value)], null)], null));
});})(cats))
,new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.nth.call(null,cljs.core.first.call(null,cats),(2))], null),(function (){var iter__17504__auto__ = ((function (cats){
return (function posh_todo$dashboard$category_select_$_iter__21162(s__21163){
return (new cljs.core.LazySeq(null,((function (cats){
return (function (){
var s__21163__$1 = s__21163;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21163__$1);
if(temp__4425__auto__){
var s__21163__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21163__$2)){
var c__17502__auto__ = cljs.core.chunk_first.call(null,s__21163__$2);
var size__17503__auto__ = cljs.core.count.call(null,c__17502__auto__);
var b__21165 = cljs.core.chunk_buffer.call(null,size__17503__auto__);
if((function (){var i__21164 = (0);
while(true){
if((i__21164 < size__17503__auto__)){
var c = cljs.core._nth.call(null,c__17502__auto__,i__21164);
cljs.core.chunk_append.call(null,b__21165,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,c)], null),cljs.core.second.call(null,c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,c)], null)));

var G__21166 = (i__21164 + (1));
i__21164 = G__21166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21165),posh_todo$dashboard$category_select_$_iter__21162.call(null,cljs.core.chunk_rest.call(null,s__21163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21165),null);
}
} else {
var c = cljs.core.first.call(null,s__21163__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,c)], null),cljs.core.second.call(null,c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,c)], null)),posh_todo$dashboard$category_select_$_iter__21162.call(null,cljs.core.rest.call(null,s__21163__$2)));
}
} else {
return null;
}
break;
}
});})(cats))
,null,null));
});})(cats))
;
return iter__17504__auto__.call(null,cats);
})()], null)], null);
});
posh_todo.dashboard.dash_task = (function posh_todo$dashboard$dash_task(conn,task_id){
var task = cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("task","done","task/done",-886317915),new cljs.core.Keyword("task","pinned","task/pinned",-1211221984),new cljs.core.Keyword("task","name","task/name",1848772036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("task","category","task/category",-597104427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("category","name","category/name",1793490219)], null)], null)], null),task_id));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.checkbox,conn,task_id,new cljs.core.Keyword("task","done","task/done",-886317915),new cljs.core.Keyword("task","done","task/done",-886317915).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.editable_label,conn,task_id,new cljs.core.Keyword("task","name","task/name",1848772036)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.stage_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X?"], null),((function (task){
return (function (){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),task_id], null)], null));
});})(task))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.dashboard.category_select,conn,task_id], null)], null);
});
posh_todo.dashboard.task_list = (function posh_todo$dashboard$task_list(conn,todo_id){
var listing = new cljs.core.Keyword("todo","listing","todo/listing",85796127).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","listing","todo/listing",85796127)], null),todo_id)));
var tasks = (function (){var G__21173 = (((listing instanceof cljs.core.Keyword))?listing.fqn:null);
switch (G__21173) {
case "all":
return cljs.core.deref.call(null,posh.core.q.call(null,conn,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("category","todo","category/todo",-895201156),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","category","task/category",-597104427),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null)], null),todo_id));

break;
default:
return cljs.core.deref.call(null,posh.core.q.call(null,conn,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"?done","?done",-2025334257,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("category","todo","category/todo",-895201156),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","category","task/category",-597104427),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","done","task/done",-886317915),new cljs.core.Symbol(null,"?done","?done",-2025334257,null)], null)], null),todo_id,cljs.core._EQ_.call(null,listing,new cljs.core.Keyword(null,"done","done",-889844188))));

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(function (){var G__21174 = (((listing instanceof cljs.core.Keyword))?listing.fqn:null);
switch (G__21174) {
case "all":
return "All Tasks";

break;
case "done":
return "Completed Tasks";

break;
case "not-done":
return "Uncompleted Tasks";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(listing)].join('')));

}
})()], null),((!(cljs.core.empty_QMARK_.call(null,tasks)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__17504__auto__ = ((function (listing,tasks){
return (function posh_todo$dashboard$task_list_$_iter__21175(s__21176){
return (new cljs.core.LazySeq(null,((function (listing,tasks){
return (function (){
var s__21176__$1 = s__21176;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21176__$1);
if(temp__4425__auto__){
var s__21176__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21176__$2)){
var c__17502__auto__ = cljs.core.chunk_first.call(null,s__21176__$2);
var size__17503__auto__ = cljs.core.count.call(null,c__17502__auto__);
var b__21178 = cljs.core.chunk_buffer.call(null,size__17503__auto__);
if((function (){var i__21177 = (0);
while(true){
if((i__21177 < size__17503__auto__)){
var t = cljs.core._nth.call(null,c__17502__auto__,i__21177);
cljs.core.chunk_append.call(null,b__21178,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.dashboard.dash_task,conn,t], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__21181 = (i__21177 + (1));
i__21177 = G__21181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21178),posh_todo$dashboard$task_list_$_iter__21175.call(null,cljs.core.chunk_rest.call(null,s__21176__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21178),null);
}
} else {
var t = cljs.core.first.call(null,s__21176__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.dashboard.dash_task,conn,t], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),posh_todo$dashboard$task_list_$_iter__21175.call(null,cljs.core.rest.call(null,s__21176__$2)));
}
} else {
return null;
}
break;
}
});})(listing,tasks))
,null,null));
});})(listing,tasks))
;
return iter__17504__auto__.call(null,tasks);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.dashboard.delete_listed,conn,tasks], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"None"], null))], null);
});
posh_todo.dashboard.change_listing_BANG_ = (function posh_todo$dashboard$change_listing_BANG_(conn,todo_id,v){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),todo_id,new cljs.core.Keyword("todo","listing","todo/listing",85796127),v], null)], null));
});
posh_todo.dashboard.listing_buttons = (function posh_todo$dashboard$listing_buttons(conn,todo_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return posh_todo.dashboard.change_listing_BANG_.call(null,conn,todo_id,new cljs.core.Keyword(null,"all","all",892129742));
})], null),"All"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return posh_todo.dashboard.change_listing_BANG_.call(null,conn,todo_id,new cljs.core.Keyword(null,"done","done",-889844188));
})], null),"Checked"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return posh_todo.dashboard.change_listing_BANG_.call(null,conn,todo_id,new cljs.core.Keyword(null,"not-done","not-done",-469594038));
})], null),"Un-checked"], null)], null);
});
posh_todo.dashboard.dashboard = (function posh_todo$dashboard$dashboard(conn,todo_id){
var cats = cljs.core.sort_by.call(null,new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.Keyword("category","_todo","category/_todo",1969802336).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("category","_todo","category/_todo",1969802336),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("task","_category","task/_category",-631269818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)], null)], null)], null),todo_id))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"DASHBOARD: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.dashboard.listing_buttons,conn,todo_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.dashboard.task_list,conn,todo_id], null)], null);
});
posh_todo.dashboard.dashboard_button = (function posh_todo$dashboard$dashboard_button(conn,todo_id){
var current_category = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("todo","display-category","todo/display-category",-158855546).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","display-category","todo/display-category",-158855546)], null),todo_id))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (current_category){
return (function (){
return posh.core.transact_BANG_.call(null,conn,(cljs.core.truth_(current_category)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),todo_id,new cljs.core.Keyword("todo","display-category","todo/display-category",-158855546),current_category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),todo_id,new cljs.core.Keyword("todo","listing","todo/listing",85796127),new cljs.core.Keyword(null,"all","all",892129742)], null)], null):cljs.core.PersistentVector.EMPTY));
});})(current_category))
], null),"Dashboard"], null);
});

//# sourceMappingURL=dashboard.js.map