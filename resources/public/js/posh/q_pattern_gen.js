// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh.q_pattern_gen');
goog.require('cljs.core');
posh.q_pattern_gen.take_until = (function posh$q_pattern_gen$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__16732__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__16732__auto__){
return or__16732__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),posh$q_pattern_gen$take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
posh.q_pattern_gen.rest_at = (function posh$q_pattern_gen$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__16732__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__16732__auto__){
return or__16732__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__17842 = rest_at_QMARK_;
var G__17843 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__17842;
ls = G__17843;
continue;
}
break;
}
});
posh.q_pattern_gen.split_list_at = (function posh$q_pattern_gen$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,ls),posh.q_pattern_gen.take_until.call(null,split_at_QMARK_,posh.q_pattern_gen.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))], true, false),posh$q_pattern_gen$split_list_at.call(null,split_at_QMARK_,posh.q_pattern_gen.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
posh.q_pattern_gen.query_to_map = (function posh$q_pattern_gen$query_to_map(query){
return posh.q_pattern_gen.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
});
posh.q_pattern_gen.clause_item = (function posh$q_pattern_gen$clause_item(varmap,item){
if((item instanceof cljs.core.Symbol)){
var or__16732__auto__ = varmap.call(null,item);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
} else {
return item;
}
});
posh.q_pattern_gen.pattern_from_clause = (function posh$q_pattern_gen$pattern_from_clause(varmap,clause){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,posh.q_pattern_gen.clause_item,varmap),clause));
});
posh.q_pattern_gen.patterns_from_where = (function posh$q_pattern_gen$patterns_from_where(varmap,where){
return cljs.core.map.call(null,cljs.core.partial.call(null,posh.q_pattern_gen.pattern_from_clause,varmap),where);
});
posh.q_pattern_gen.deep_list_QMARK_ = (function posh$q_pattern_gen$deep_list_QMARK_(x){
if(cljs.core.list_QMARK_.call(null,x)){
return true;
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
if(cljs.core.empty_QMARK_.call(null,x)){
return false;
} else {
var or__16732__auto__ = posh$q_pattern_gen$deep_list_QMARK_.call(null,cljs.core.first.call(null,x));
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return posh$q_pattern_gen$deep_list_QMARK_.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,x)));
}
}
} else {
return null;
}
}
});
posh.q_pattern_gen.q_pattern_gen = (function posh$q_pattern_gen$q_pattern_gen(query,vars){
var qm = posh.q_pattern_gen.query_to_map.call(null,query);
var simple_query_QMARK_ = cljs.core.not.call(null,posh.q_pattern_gen.deep_list_QMARK_.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var varmap = (cljs.core.truth_((function (){var and__16720__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(and__16720__auto__)){
return (cljs.core.count.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm)) > (1));
} else {
return and__16720__auto__;
}
})())?cljs.core.zipmap.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm)),vars):cljs.core.PersistentArrayMap.EMPTY);
if(simple_query_QMARK_){
return posh.q_pattern_gen.patterns_from_where.call(null,varmap,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
}
});

//# sourceMappingURL=q_pattern_gen.js.map