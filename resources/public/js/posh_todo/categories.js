// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh_todo.categories');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh_todo.components');
goog.require('posh_todo.tasks');
goog.require('posh_todo.dashboard');
goog.require('posh_todo.util');
posh_todo.categories.delete_category = (function posh_todo$categories$delete_category(conn,category_id){
var category = cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","name","category/name",1793490219)], null),category_id));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.stage_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("Delete \""),cljs.core.str(new cljs.core.Keyword("category","name","category/name",1793490219).cljs$core$IFn$_invoke$arity$1(category)),cljs.core.str("\" Category")].join(''),"This will delete all its tasks, ok?"], null),((function (category){
return (function (){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),category_id], null)], null));
});})(category))
], null);
});
posh_todo.categories.category_panel = (function posh_todo$categories$category_panel(conn,todo_id){
var c = cljs.core.deref.call(null,posh.core.q.call(null,conn,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("todo","display-category","todo/display-category",-158855546),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null)], null),todo_id));
if(cljs.core.not.call(null,c)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.dashboard.dashboard,conn,todo_id], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.editable_label,conn,c,new cljs.core.Keyword("category","name","category/name",1793490219)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.categories.delete_category,conn,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.tasks.task_panel,conn,c], null)], null);
}
});
posh_todo.categories.add_category_BANG_ = (function posh_todo$categories$add_category_BANG_(conn,todo_id,category_name){
return posh_todo.util.new_entity_BANG_.call(null,conn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("category","name","category/name",1793490219),category_name,new cljs.core.Keyword("category","todo","category/todo",-895201156),todo_id], null));
});
posh_todo.categories.add_new_category = (function posh_todo$categories$add_new_category(conn,todo_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Add new category: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.add_box,conn,cljs.core.partial.call(null,posh_todo.categories.add_category_BANG_,conn,todo_id)], null)], null);
});
posh_todo.categories.category_item = (function posh_todo$categories$category_item(conn,todo_id,category){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),todo_id,new cljs.core.Keyword("todo","display-category","todo/display-category",-158855546),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(category)], null)], null));
})], null),new cljs.core.Keyword("category","name","category/name",1793490219).cljs$core$IFn$_invoke$arity$1(category)," (",cljs.core.count.call(null,new cljs.core.Keyword("task","_category","task/_category",-631269818).cljs$core$IFn$_invoke$arity$1(category)),")"], null);
});
posh_todo.categories.category_menu = (function posh_todo$categories$category_menu(conn,todo_id){
var cats = cljs.core.sort_by.call(null,new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.Keyword("category","_todo","category/_todo",1969802336).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("category","_todo","category/_todo",1969802336),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("task","_category","task/_category",-631269818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)], null)], null)], null),todo_id))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var iter__17504__auto__ = ((function (cats){
return (function posh_todo$categories$category_menu_$_iter__21188(s__21189){
return (new cljs.core.LazySeq(null,((function (cats){
return (function (){
var s__21189__$1 = s__21189;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21189__$1);
if(temp__4425__auto__){
var s__21189__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21189__$2)){
var c__17502__auto__ = cljs.core.chunk_first.call(null,s__21189__$2);
var size__17503__auto__ = cljs.core.count.call(null,c__17502__auto__);
var b__21191 = cljs.core.chunk_buffer.call(null,size__17503__auto__);
if((function (){var i__21190 = (0);
while(true){
if((i__21190 < size__17503__auto__)){
var c = cljs.core._nth.call(null,c__17502__auto__,i__21190);
cljs.core.chunk_append.call(null,b__21191,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.categories.category_item,conn,todo_id,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(c)], null)));

var G__21192 = (i__21190 + (1));
i__21190 = G__21192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21191),posh_todo$categories$category_menu_$_iter__21188.call(null,cljs.core.chunk_rest.call(null,s__21189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21191),null);
}
} else {
var c = cljs.core.first.call(null,s__21189__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.categories.category_item,conn,todo_id,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(c)], null)),posh_todo$categories$category_menu_$_iter__21188.call(null,cljs.core.rest.call(null,s__21189__$2)));
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
})()], null);
});

//# sourceMappingURL=categories.js.map