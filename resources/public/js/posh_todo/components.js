// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh_todo.components');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh_todo.db');
goog.require('reagent.core');
goog.require('posh_todo.util');
posh_todo.components.add_box = (function posh_todo$components$add_box(conn,add_fn){
var edit = reagent.core.atom.call(null,"");
return ((function (edit){
return (function (conn__$1,add_fn__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,edit),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (edit){
return (function (p1__21142_SHARP_){
return cljs.core.reset_BANG_.call(null,edit,p1__21142_SHARP_.target.value);
});})(edit))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (edit){
return (function (){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,edit))){
return null;
} else {
add_fn__$1.call(null,cljs.core.deref.call(null,edit));

return cljs.core.reset_BANG_.call(null,edit,"");
}
});})(edit))
], null),(function (){var or__16732__auto__ = new cljs.core.Keyword(null,"button-text","button-text",-1800441720).cljs$core$IFn$_invoke$arity$1(posh_todo.components.options);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return "Add";
}
})()], null)], null);
});
;})(edit))
});
posh_todo.components.edit_box = (function posh_todo$components$edit_box(conn,edit_id,id,attr){
var edit = cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edit","val","edit/val",123487430)], null),edit_id));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("edit","val","edit/val",123487430).cljs$core$IFn$_invoke$arity$1(edit),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (edit){
return (function (p1__21143_SHARP_){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),edit_id,new cljs.core.Keyword("edit","val","edit/val",123487430),p1__21143_SHARP_.target.value], null)], null));
});})(edit))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (edit){
return (function (){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,attr,new cljs.core.Keyword("edit","val","edit/val",123487430).cljs$core$IFn$_invoke$arity$1(edit)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),edit_id], null)], null));
});})(edit))
], null),"Done"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (edit){
return (function (){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),edit_id], null)], null));
});})(edit))
], null),"Cancel"], null)], null);
});
posh_todo.components.editable_label = (function posh_todo$components$editable_label(conn,id,attr){
var val = attr.call(null,cljs.core.deref.call(null,posh.core.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null),id)));
var edit = cljs.core.deref.call(null,posh.core.q.call(null,conn,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?edit","?edit",469506609,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?edit","?edit",469506609,null),new cljs.core.Keyword("edit","id","edit/id",-1385685942),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?edit","?edit",469506609,null),new cljs.core.Keyword("edit","attr","edit/attr",-613482967),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null)], null)], null),id,attr));
if(cljs.core.not.call(null,edit)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),val,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (val,edit){
return (function (){
return posh_todo.util.new_entity_BANG_.call(null,conn,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edit","id","edit/id",-1385685942),id,new cljs.core.Keyword("edit","val","edit/val",123487430),val,new cljs.core.Keyword("edit","attr","edit/attr",-613482967),attr], null));
});})(val,edit))
], null),"Edit"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_todo.components.edit_box,conn,edit,id,attr], null);
}
});
posh_todo.components.checkbox = (function posh_todo$components$checkbox(conn,id,attr,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
return posh.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,attr,cljs.core.not.call(null,checked_QMARK_)], null)], null));
})], null)], null);
});
posh_todo.components.stage_button = (function posh_todo$components$stage_button(stages,finish_fn){
var stage = reagent.core.atom.call(null,(0));
return ((function (stage){
return (function (stages__$1,finish_fn__$1){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,stage),cljs.core.count.call(null,stages__$1))){
finish_fn__$1.call(null,posh_todo.components.stage_id);

cljs.core.reset_BANG_.call(null,stage,(0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (stage){
return (function (){
return cljs.core.swap_BANG_.call(null,stage,cljs.core.inc);
});})(stage))
,new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),((function (stage){
return (function (){
return cljs.core.reset_BANG_.call(null,stage,(0));
});})(stage))
], null),cljs.core.nth.call(null,stages__$1,cljs.core.deref.call(null,stage))], null);
});
;})(stage))
});

//# sourceMappingURL=components.js.map