// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh_todo.util');
goog.require('cljs.core');
goog.require('datascript.core');
posh_todo.util.pairmap = (function posh_todo$util$pairmap(pair){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__22249){
var vec__22250 = p__22249;
var a = cljs.core.nth.call(null,vec__22250,(0),null);
var b = cljs.core.nth.call(null,vec__22250,(1),null);
return cljs.core.PersistentArrayMap.fromArray([a,b], true, false);
}),pair));
});
posh_todo.util.ents = (function posh_todo$util$ents(db,ids){
return cljs.core.map.call(null,cljs.core.partial.call(null,datascript.core.entity,db),ids);
});
posh_todo.util.new_entity_BANG_ = (function posh_todo$util$new_entity_BANG_(conn,varmap){
return new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(datascript.core.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,varmap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1)], null))], null))).call(null,(-1));
});
posh_todo.util.tempid = (function (){var n = cljs.core.atom.call(null,(0));
return ((function (n){
return (function (){
return cljs.core.swap_BANG_.call(null,n,cljs.core.dec);
});
;})(n))
})();

//# sourceMappingURL=util.js.map