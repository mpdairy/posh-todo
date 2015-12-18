// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh.pull_pattern_gen');
goog.require('cljs.core');
posh.pull_pattern_gen.reverse_lookup_QMARK_ = (function posh$pull_pattern_gen$reverse_lookup_QMARK_(attr){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,attr)),"_")){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.namespace.call(null,attr)),cljs.core.str("/"),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,cljs.core.rest.call(null,cljs.core.name.call(null,attr))))].join(''));
} else {
return null;
}
});
posh.pull_pattern_gen.pull_list;
posh.pull_pattern_gen.pull_datom = (function posh$pull_pattern_gen$pull_datom(k,ent_id){
var temp__4423__auto__ = posh.pull_pattern_gen.reverse_lookup_QMARK_.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),rk,ent_id], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ent_id,k], null);
}
});
posh.pull_pattern_gen.pull_map = (function posh$pull_pattern_gen$pull_map(m,ent_id){
if(cljs.core.empty_QMARK_.call(null,m)){
return cljs.core.PersistentVector.EMPTY;
} else {
var vec__17843 = cljs.core.first.call(null,m);
var k = cljs.core.nth.call(null,vec__17843,(0),null);
var v = cljs.core.nth.call(null,vec__17843,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.pull_pattern_gen.pull_datom.call(null,k,ent_id)], null),posh.pull_pattern_gen.pull_list.call(null,v,new cljs.core.Symbol(null,"_","_",-1201019570,null)),posh$pull_pattern_gen$pull_map.call(null,cljs.core.rest.call(null,m),ent_id));
}
});
posh.pull_pattern_gen.pull_list = (function posh$pull_pattern_gen$pull_list(ls,ent_id){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,ls),new cljs.core.Symbol(null,"*","*",345799209,null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ent_id], null),posh$pull_pattern_gen$pull_list.call(null,cljs.core.rest.call(null,ls),ent_id));
} else {
if(((cljs.core.first.call(null,ls) instanceof cljs.core.Keyword)) && (cljs.core.not_EQ_.call(null,cljs.core.first.call(null,ls),new cljs.core.Keyword("db","id","db/id",-1388397098)))){
return cljs.core.cons.call(null,posh.pull_pattern_gen.pull_datom.call(null,cljs.core.first.call(null,ls),ent_id),posh$pull_pattern_gen$pull_list.call(null,cljs.core.rest.call(null,ls),ent_id));
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,ls))){
return cljs.core.concat.call(null,posh.pull_pattern_gen.pull_map.call(null,cljs.core.first.call(null,ls),ent_id),posh$pull_pattern_gen$pull_list.call(null,cljs.core.rest.call(null,ls),ent_id));
} else {
return posh$pull_pattern_gen$pull_list.call(null,cljs.core.rest.call(null,ls),ent_id);

}
}
}
}
});
posh.pull_pattern_gen.pull_pattern_gen = (function posh$pull_pattern_gen$pull_pattern_gen(ls,ent_id){
var p = posh.pull_pattern_gen.pull_list.call(null,ls,ent_id);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], true),p))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
} else {
return p;
}
});

//# sourceMappingURL=pull_pattern_gen.js.map