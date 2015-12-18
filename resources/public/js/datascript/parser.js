// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc;

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__17387__auto__ = (((_ == null))?null:_);
var m__17388__auto__ = (datascript.parser._collect[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,_,pred,acc);
} else {
var m__17388__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__17387__auto__ = (((_ == null))?null:_);
var m__17388__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,_,acc);
} else {
var m__17388__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__17387__auto__ = (((_ == null))?null:_);
var m__17388__auto__ = (datascript.parser._postwalk[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,_,f);
} else {
var m__17388__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__20822_SHARP_,p2__20821_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__20821_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__20822_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__17797__auto__ = [];
var len__17790__auto___20829 = arguments.length;
var i__17791__auto___20830 = (0);
while(true){
if((i__17791__auto___20830 < len__17790__auto___20829)){
args__17797__auto__.push((arguments[i__17791__auto___20830]));

var G__20831 = (i__17791__auto___20830 + (1));
i__17791__auto___20830 = G__20831;
continue;
} else {
}
break;
}

var argseq__17798__auto__ = ((((2) < args__17797__auto__.length))?(new cljs.core.IndexedSeq(args__17797__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17798__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__20826){
var vec__20827 = p__20826;
var acc = cljs.core.nth.call(null,vec__20827,(0),null);
var acc__$1 = (function (){var or__16732__auto__ = acc;
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__20827,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__20827,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq20823){
var G__20824 = cljs.core.first.call(null,seq20823);
var seq20823__$1 = cljs.core.next.call(null,seq20823);
var G__20825 = cljs.core.first.call(null,seq20823__$1);
var seq20823__$2 = cljs.core.next.call(null,seq20823__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__20824,G__20825,seq20823__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__16732__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__16732__auto__){
return or__16732__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__20838){
var vec__20839 = p__20838;
var k = cljs.core.nth.call(null,vec__20839,(0),null);
var v = cljs.core.nth.call(null,vec__20839,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__20832_SHARP_){
return datascript$parser$postwalk.call(null,p1__20832_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__20833_SHARP_){
return datascript$parser$postwalk.call(null,p1__20833_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__16732__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20844,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20846 = k20844;
switch (G__20846) {
default:
return cljs.core.get.call(null,self__.__extmap,k20844,else__17349__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Placeholder{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20843){
var self__ = this;
var G__20843__$1 = this;
return (new cljs.core.RecordIter((0),G__20843__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20843){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20847 = cljs.core.keyword_identical_QMARK_;
var expr__20848 = k__17354__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20843),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20843){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Placeholder(G__20843,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20840){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20841,acc20842){
var self__ = this;
var ___19770__auto____$1 = this;
return acc20842;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20842){
var self__ = this;
var ___19770__auto____$1 = this;
return acc20842;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__20845){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__20845),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20855,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20857 = (((k20855 instanceof cljs.core.Keyword))?k20855.fqn:null);
switch (G__20857) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20855,else__17349__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Variable{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20854){
var self__ = this;
var G__20854__$1 = this;
return (new cljs.core.RecordIter((0),G__20854__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20854){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20858 = cljs.core.keyword_identical_QMARK_;
var expr__20859 = k__17354__auto__;
if(cljs.core.truth_(pred__20858.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__20859))){
return (new datascript.parser.Variable(G__20854,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20854),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20854){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__20854,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20851){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f20851),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20852,acc20853){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20852,self__.symbol,acc20853);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20853){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20853,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__20856){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__20856),null,cljs.core.dissoc.call(null,G__20856,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20866,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20868 = (((k20866 instanceof cljs.core.Keyword))?k20866.fqn:null);
switch (G__20868) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20866,else__17349__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.SrcVar{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20865){
var self__ = this;
var G__20865__$1 = this;
return (new cljs.core.RecordIter((0),G__20865__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20865){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20869 = cljs.core.keyword_identical_QMARK_;
var expr__20870 = k__17354__auto__;
if(cljs.core.truth_(pred__20869.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__20870))){
return (new datascript.parser.SrcVar(G__20865,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20865),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20865){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__20865,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20862){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f20862),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20863,acc20864){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20863,self__.symbol,acc20864);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20864){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20864,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__20867){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__20867),null,cljs.core.dissoc.call(null,G__20867,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20877,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20879 = k20877;
switch (G__20879) {
default:
return cljs.core.get.call(null,self__.__extmap,k20877,else__17349__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20876){
var self__ = this;
var G__20876__$1 = this;
return (new cljs.core.RecordIter((0),G__20876__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20876){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20880 = cljs.core.keyword_identical_QMARK_;
var expr__20881 = k__17354__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20876),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20876){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__20876,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20873){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20874,acc20875){
var self__ = this;
var ___19770__auto____$1 = this;
return acc20875;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20875){
var self__ = this;
var ___19770__auto____$1 = this;
return acc20875;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__20878){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__20878),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20888,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20890 = k20888;
switch (G__20890) {
default:
return cljs.core.get.call(null,self__.__extmap,k20888,else__17349__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.RulesVar{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20887){
var self__ = this;
var G__20887__$1 = this;
return (new cljs.core.RecordIter((0),G__20887__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20887){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20891 = cljs.core.keyword_identical_QMARK_;
var expr__20892 = k__17354__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20887),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20887){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.RulesVar(G__20887,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20884){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20885,acc20886){
var self__ = this;
var ___19770__auto____$1 = this;
return acc20886;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20886){
var self__ = this;
var ___19770__auto____$1 = this;
return acc20886;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__20889){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__20889),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20899,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20901 = (((k20899 instanceof cljs.core.Keyword))?k20899.fqn:null);
switch (G__20901) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20899,else__17349__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Constant{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20898){
var self__ = this;
var G__20898__$1 = this;
return (new cljs.core.RecordIter((0),G__20898__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20898){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20902 = cljs.core.keyword_identical_QMARK_;
var expr__20903 = k__17354__auto__;
if(cljs.core.truth_(pred__20902.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__20903))){
return (new datascript.parser.Constant(G__20898,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20898),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20898){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__20898,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20895){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f20895),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20896,acc20897){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20896,self__.value,acc20897);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20897){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20897,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__20900){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__20900),null,cljs.core.dissoc.call(null,G__20900,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20910,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20912 = (((k20910 instanceof cljs.core.Keyword))?k20910.fqn:null);
switch (G__20912) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20910,else__17349__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20909){
var self__ = this;
var G__20909__$1 = this;
return (new cljs.core.RecordIter((0),G__20909__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20909){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20913 = cljs.core.keyword_identical_QMARK_;
var expr__20914 = k__17354__auto__;
if(cljs.core.truth_(pred__20913.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__20914))){
return (new datascript.parser.PlainSymbol(G__20909,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20909),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20909){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__20909,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20906){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f20906),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20907,acc20908){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20907,self__.symbol,acc20908);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20908){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20908,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__20911){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__20911),null,cljs.core.dissoc.call(null,G__20911,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__16732__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
var or__16732__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__16732__auto____$1)){
return or__16732__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20921,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20923 = (((k20921 instanceof cljs.core.Keyword))?k20921.fqn:null);
switch (G__20923) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20921,else__17349__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.RuleVars{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20920){
var self__ = this;
var G__20920__$1 = this;
return (new cljs.core.RecordIter((0),G__20920__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20920){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20924 = cljs.core.keyword_identical_QMARK_;
var expr__20925 = k__17354__auto__;
if(cljs.core.truth_(pred__20924.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__20925))){
return (new datascript.parser.RuleVars(G__20920,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20924.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__20925))){
return (new datascript.parser.RuleVars(self__.required,G__20920,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20920),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20920){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__20920,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20917){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f20917),datascript.parser.postwalk.call(null,self__.free,f20917),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20918,acc20919){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20918,self__.free,datascript.parser.collect.call(null,pred20918,self__.required,acc20919));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20919){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20919,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__20922){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__20922),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__20922),null,cljs.core.dissoc.call(null,G__20922,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__20929 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__20929,(0),null);
var rest = cljs.core.nth.call(null,vec__20929,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20934,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20936 = k20934;
switch (G__20936) {
default:
return cljs.core.get.call(null,self__.__extmap,k20934,else__17349__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20933){
var self__ = this;
var G__20933__$1 = this;
return (new cljs.core.RecordIter((0),G__20933__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20933){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20937 = cljs.core.keyword_identical_QMARK_;
var expr__20938 = k__17354__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20933),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20933){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__20933,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20930){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20931,acc20932){
var self__ = this;
var ___19770__auto____$1 = this;
return acc20932;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20932){
var self__ = this;
var ___19770__auto____$1 = this;
return acc20932;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__20935){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__20935),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20945,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20947 = (((k20945 instanceof cljs.core.Keyword))?k20945.fqn:null);
switch (G__20947) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20945,else__17349__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.BindScalar{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20944){
var self__ = this;
var G__20944__$1 = this;
return (new cljs.core.RecordIter((0),G__20944__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20944){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20948 = cljs.core.keyword_identical_QMARK_;
var expr__20949 = k__17354__auto__;
if(cljs.core.truth_(pred__20948.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__20949))){
return (new datascript.parser.BindScalar(G__20944,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20944),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20944){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__20944,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20941){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f20941),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20942,acc20943){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20942,self__.variable,acc20943);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20943){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20943,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__20946){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__20946),null,cljs.core.dissoc.call(null,G__20946,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20956,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20958 = (((k20956 instanceof cljs.core.Keyword))?k20956.fqn:null);
switch (G__20958) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20956,else__17349__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.BindTuple{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20955){
var self__ = this;
var G__20955__$1 = this;
return (new cljs.core.RecordIter((0),G__20955__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20955){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20959 = cljs.core.keyword_identical_QMARK_;
var expr__20960 = k__17354__auto__;
if(cljs.core.truth_(pred__20959.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__20960))){
return (new datascript.parser.BindTuple(G__20955,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20955),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20955){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__20955,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20952){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f20952),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20953,acc20954){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20953,self__.bindings,acc20954);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20954){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20954,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__20957){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__20957),null,cljs.core.dissoc.call(null,G__20957,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20967,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20969 = (((k20967 instanceof cljs.core.Keyword))?k20967.fqn:null);
switch (G__20969) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20967,else__17349__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.BindColl{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20966){
var self__ = this;
var G__20966__$1 = this;
return (new cljs.core.RecordIter((0),G__20966__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20966){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20970 = cljs.core.keyword_identical_QMARK_;
var expr__20971 = k__17354__auto__;
if(cljs.core.truth_(pred__20970.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__20971))){
return (new datascript.parser.BindColl(G__20966,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20966),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20966){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__20966,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20963){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f20963),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20964,acc20965){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20964,self__.binding,acc20965);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20965){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20965,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__20968){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__20968),null,cljs.core.dissoc.call(null,G__20968,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_binding;
datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__16720__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__16720__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__16720__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__16732__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__16720__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__16720__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__16720__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__16732__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
var or__16732__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__16732__auto____$1)){
return or__16732__auto____$1;
} else {
var or__16732__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__16732__auto____$2)){
return or__16732__auto____$2;
} else {
var or__16732__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16732__auto____$3)){
return or__16732__auto____$3;
} else {
var or__16732__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__16732__auto____$4)){
return or__16732__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__17387__auto__ = (((this$ == null))?null:this$);
var m__17388__auto__ = (datascript.parser._find_vars[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,this$);
} else {
var m__17388__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20978,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20980 = (((k20978 instanceof cljs.core.Keyword))?k20978.fqn:null);
switch (G__20980) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20978,else__17349__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Aggregate{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20977){
var self__ = this;
var G__20977__$1 = this;
return (new cljs.core.RecordIter((0),G__20977__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20977){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20981 = cljs.core.keyword_identical_QMARK_;
var expr__20982 = k__17354__auto__;
if(cljs.core.truth_(pred__20981.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__20982))){
return (new datascript.parser.Aggregate(G__20977,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20981.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__20982))){
return (new datascript.parser.Aggregate(self__.fn,G__20977,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20977),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20977){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__20977,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20974){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f20974),datascript.parser.postwalk.call(null,self__.args,f20974),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20975,acc20976){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20975,self__.args,datascript.parser.collect.call(null,pred20975,self__.fn,acc20976));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20976){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20976,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__20979){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__20979),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__20979),null,cljs.core.dissoc.call(null,G__20979,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k20989,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__20991 = (((k20989 instanceof cljs.core.Keyword))?k20989.fqn:null);
switch (G__20991) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20989,else__17349__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Pull{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20988){
var self__ = this;
var G__20988__$1 = this;
return (new cljs.core.RecordIter((0),G__20988__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20988){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__20992 = cljs.core.keyword_identical_QMARK_;
var expr__20993 = k__17354__auto__;
if(cljs.core.truth_(pred__20992.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__20993))){
return (new datascript.parser.Pull(G__20988,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20992.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__20993))){
return (new datascript.parser.Pull(self__.source,G__20988,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20992.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__20993))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__20988,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20988),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20988){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__20988,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20985){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f20985),datascript.parser.postwalk.call(null,self__.variable,f20985),datascript.parser.postwalk.call(null,self__.pattern,f20985),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20986,acc20987){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20986,self__.pattern,datascript.parser.collect.call(null,pred20986,self__.variable,datascript.parser.collect.call(null,pred20986,self__.source,acc20987)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20987){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc20987,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__20990){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__20990),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__20990),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__20990),null,cljs.core.dissoc.call(null,G__20990,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__17387__auto__ = (((this$ == null))?null:this$);
var m__17388__auto__ = (datascript.parser.find_elements[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,this$);
} else {
var m__17388__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21000,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21002 = (((k21000 instanceof cljs.core.Keyword))?k21000.fqn:null);
switch (G__21002) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21000,else__17349__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.FindRel{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20999){
var self__ = this;
var G__20999__$1 = this;
return (new cljs.core.RecordIter((0),G__20999__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__20999){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21003 = cljs.core.keyword_identical_QMARK_;
var expr__21004 = k__17354__auto__;
if(cljs.core.truth_(pred__21003.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__21004))){
return (new datascript.parser.FindRel(G__20999,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__20999),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__20999){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__20999,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f20996){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f20996),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred20997,acc20998){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred20997,self__.elements,acc20998);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc20998){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc20998,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__21001){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__21001),null,cljs.core.dissoc.call(null,G__21001,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21011,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21013 = (((k21011 instanceof cljs.core.Keyword))?k21011.fqn:null);
switch (G__21013) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21011,else__17349__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.FindColl{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21010){
var self__ = this;
var G__21010__$1 = this;
return (new cljs.core.RecordIter((0),G__21010__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21010){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21014 = cljs.core.keyword_identical_QMARK_;
var expr__21015 = k__17354__auto__;
if(cljs.core.truth_(pred__21014.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__21015))){
return (new datascript.parser.FindColl(G__21010,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21010),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21010){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__21010,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21007){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f21007),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21008,acc21009){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21008,self__.element,acc21009);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21009){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21009,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__21012){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__21012),null,cljs.core.dissoc.call(null,G__21012,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21022,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21024 = (((k21022 instanceof cljs.core.Keyword))?k21022.fqn:null);
switch (G__21024) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21022,else__17349__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.FindScalar{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21021){
var self__ = this;
var G__21021__$1 = this;
return (new cljs.core.RecordIter((0),G__21021__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21021){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21025 = cljs.core.keyword_identical_QMARK_;
var expr__21026 = k__17354__auto__;
if(cljs.core.truth_(pred__21025.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__21026))){
return (new datascript.parser.FindScalar(G__21021,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21021),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21021){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__21021,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21018){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f21018),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21019,acc21020){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21019,self__.element,acc21020);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21020){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21020,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__21023){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__21023),null,cljs.core.dissoc.call(null,G__21023,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21033,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21035 = (((k21033 instanceof cljs.core.Keyword))?k21033.fqn:null);
switch (G__21035) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21033,else__17349__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.FindTuple{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21032){
var self__ = this;
var G__21032__$1 = this;
return (new cljs.core.RecordIter((0),G__21032__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21032){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21036 = cljs.core.keyword_identical_QMARK_;
var expr__21037 = k__17354__auto__;
if(cljs.core.truth_(pred__21036.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__21037))){
return (new datascript.parser.FindTuple(G__21032,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21032),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21032){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__21032,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21029){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f21029),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21030,acc21031){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21030,self__.elements,acc21031);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21031){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21031,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__21034){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__21034),null,cljs.core.dissoc.call(null,G__21034,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__21041 = form;
var fn = cljs.core.nth.call(null,vec__21041,(0),null);
var args = cljs.core.nthnext.call(null,vec__21041,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16720__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16720__auto__)){
return args_STAR_;
} else {
return and__16720__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__21043 = form;
var _ = cljs.core.nth.call(null,vec__21043,(0),null);
var fn = cljs.core.nth.call(null,vec__21043,(1),null);
var args = cljs.core.nthnext.call(null,vec__21043,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16720__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16720__auto__)){
return args_STAR_;
} else {
return and__16720__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__21045 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__21045,(0),null);
var pattern = cljs.core.nth.call(null,vec__21045,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__16732__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
})();
if(cljs.core.truth_((function (){var and__16720__auto__ = src_STAR_;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__16720__auto____$1)){
return pattern_STAR_;
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__16732__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
var or__16732__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__16732__auto____$1)){
return or__16732__auto____$1;
} else {
var or__16732__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__16732__auto____$2)){
return or__16732__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__21047 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__21047__$1 = (((G__21047 == null))?null:(new datascript.parser.FindRel(G__21047,null,null,null)));
return G__21047__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__21049 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__21049__$1 = (((G__21049 == null))?null:(new datascript.parser.FindColl(G__21049,null,null,null)));
return G__21049__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__21051 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__21051__$1 = (((G__21051 == null))?null:(new datascript.parser.FindScalar(G__21051,null,null,null)));
return G__21051__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__21053 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__21053__$1 = (((G__21053 == null))?null:(new datascript.parser.FindTuple(G__21053,null,null,null)));
return G__21053__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__16732__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
var or__16732__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__16732__auto____$1)){
return or__16732__auto____$1;
} else {
var or__16732__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__16732__auto____$2)){
return or__16732__auto____$2;
} else {
var or__16732__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__16732__auto____$3)){
return or__16732__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__16732__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__16732__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return datascript.parser.parse_rules_var.call(null,form);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__16732__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21058,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21060 = (((k21058 instanceof cljs.core.Keyword))?k21058.fqn:null);
switch (G__21060) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21058,else__17349__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Pattern{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21057){
var self__ = this;
var G__21057__$1 = this;
return (new cljs.core.RecordIter((0),G__21057__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21057){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21061 = cljs.core.keyword_identical_QMARK_;
var expr__21062 = k__17354__auto__;
if(cljs.core.truth_(pred__21061.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__21062))){
return (new datascript.parser.Pattern(G__21057,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21061.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__21062))){
return (new datascript.parser.Pattern(self__.source,G__21057,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21057),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21057){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__21057,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21054){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f21054),datascript.parser.postwalk.call(null,self__.pattern,f21054),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21055,acc21056){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21055,self__.pattern,datascript.parser.collect.call(null,pred21055,self__.source,acc21056));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21056){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21056,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__21059){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__21059),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__21059),null,cljs.core.dissoc.call(null,G__21059,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21069,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21071 = (((k21069 instanceof cljs.core.Keyword))?k21069.fqn:null);
switch (G__21071) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21069,else__17349__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Predicate{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21068){
var self__ = this;
var G__21068__$1 = this;
return (new cljs.core.RecordIter((0),G__21068__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21068){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21072 = cljs.core.keyword_identical_QMARK_;
var expr__21073 = k__17354__auto__;
if(cljs.core.truth_(pred__21072.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__21073))){
return (new datascript.parser.Predicate(G__21068,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21072.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__21073))){
return (new datascript.parser.Predicate(self__.fn,G__21068,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21068),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21068){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__21068,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21065){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f21065),datascript.parser.postwalk.call(null,self__.args,f21065),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21066,acc21067){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21066,self__.args,datascript.parser.collect.call(null,pred21066,self__.fn,acc21067));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21067){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21067,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__21070){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__21070),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__21070),null,cljs.core.dissoc.call(null,G__21070,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21080,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21082 = (((k21080 instanceof cljs.core.Keyword))?k21080.fqn:null);
switch (G__21082) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21080,else__17349__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Function{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21079){
var self__ = this;
var G__21079__$1 = this;
return (new cljs.core.RecordIter((0),G__21079__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21079){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21083 = cljs.core.keyword_identical_QMARK_;
var expr__21084 = k__17354__auto__;
if(cljs.core.truth_(pred__21083.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__21084))){
return (new datascript.parser.Function(G__21079,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21083.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__21084))){
return (new datascript.parser.Function(self__.fn,G__21079,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21083.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__21084))){
return (new datascript.parser.Function(self__.fn,self__.args,G__21079,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21079),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21079){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__21079,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21076){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f21076),datascript.parser.postwalk.call(null,self__.args,f21076),datascript.parser.postwalk.call(null,self__.binding,f21076),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21077,acc21078){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21077,self__.binding,datascript.parser.collect.call(null,pred21077,self__.args,datascript.parser.collect.call(null,pred21077,self__.fn,acc21078)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21078){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21078,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__21081){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__21081),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__21081),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__21081),null,cljs.core.dissoc.call(null,G__21081,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21091,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21093 = (((k21091 instanceof cljs.core.Keyword))?k21091.fqn:null);
switch (G__21093) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21091,else__17349__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21090){
var self__ = this;
var G__21090__$1 = this;
return (new cljs.core.RecordIter((0),G__21090__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21090){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21094 = cljs.core.keyword_identical_QMARK_;
var expr__21095 = k__17354__auto__;
if(cljs.core.truth_(pred__21094.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__21095))){
return (new datascript.parser.RuleExpr(G__21090,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21094.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__21095))){
return (new datascript.parser.RuleExpr(self__.source,G__21090,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21094.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__21095))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__21090,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21090),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21090){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__21090,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21087){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f21087),datascript.parser.postwalk.call(null,self__.name,f21087),datascript.parser.postwalk.call(null,self__.args,f21087),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21088,acc21089){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21088,self__.args,datascript.parser.collect.call(null,pred21088,self__.name,datascript.parser.collect.call(null,pred21088,self__.source,acc21089)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21089){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21089,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__21092){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__21092),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__21092),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__21092),null,cljs.core.dissoc.call(null,G__21092,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21102,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21104 = (((k21102 instanceof cljs.core.Keyword))?k21102.fqn:null);
switch (G__21104) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21102,else__17349__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Not{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21101){
var self__ = this;
var G__21101__$1 = this;
return (new cljs.core.RecordIter((0),G__21101__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21101){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21105 = cljs.core.keyword_identical_QMARK_;
var expr__21106 = k__17354__auto__;
if(cljs.core.truth_(pred__21105.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__21106))){
return (new datascript.parser.Not(G__21101,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21105.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__21106))){
return (new datascript.parser.Not(self__.source,G__21101,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21105.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__21106))){
return (new datascript.parser.Not(self__.source,self__.vars,G__21101,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21101),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21101){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__21101,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21098){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f21098),datascript.parser.postwalk.call(null,self__.vars,f21098),datascript.parser.postwalk.call(null,self__.clauses,f21098),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21099,acc21100){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21099,self__.clauses,datascript.parser.collect.call(null,pred21099,self__.vars,datascript.parser.collect.call(null,pred21099,self__.source,acc21100)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21100){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21100,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__21103){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__21103),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__21103),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__21103),null,cljs.core.dissoc.call(null,G__21103,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21113,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21115 = (((k21113 instanceof cljs.core.Keyword))?k21113.fqn:null);
switch (G__21115) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21113,else__17349__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Or{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21112){
var self__ = this;
var G__21112__$1 = this;
return (new cljs.core.RecordIter((0),G__21112__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21112){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21116 = cljs.core.keyword_identical_QMARK_;
var expr__21117 = k__17354__auto__;
if(cljs.core.truth_(pred__21116.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__21117))){
return (new datascript.parser.Or(G__21112,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21116.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__21117))){
return (new datascript.parser.Or(self__.source,G__21112,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21116.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__21117))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__21112,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21112),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21112){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__21112,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21109){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f21109),datascript.parser.postwalk.call(null,self__.rule_vars,f21109),datascript.parser.postwalk.call(null,self__.clauses,f21109),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21110,acc21111){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21110,self__.clauses,datascript.parser.collect.call(null,pred21110,self__.rule_vars,datascript.parser.collect.call(null,pred21110,self__.source,acc21111)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21111){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21111,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__21114){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__21114),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__21114),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__21114),null,cljs.core.dissoc.call(null,G__21114,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21124,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21126 = (((k21124 instanceof cljs.core.Keyword))?k21124.fqn:null);
switch (G__21126) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21124,else__17349__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.And{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21123){
var self__ = this;
var G__21123__$1 = this;
return (new cljs.core.RecordIter((0),G__21123__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21123){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21127 = cljs.core.keyword_identical_QMARK_;
var expr__21128 = k__17354__auto__;
if(cljs.core.truth_(pred__21127.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__21128))){
return (new datascript.parser.And(G__21123,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21123),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21123){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__21123,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21120){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f21120),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21121,acc21122){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21121,self__.clauses,acc21122);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21122){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21122,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__21125){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__21125),null,cljs.core.dissoc.call(null,G__21125,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_clause;

datascript.parser.parse_clauses;
datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__16732__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
var or__16732__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16732__auto____$1)){
return or__16732__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__21132 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21132,(0),null);
var next_form = cljs.core.nth.call(null,vec__21132,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__21134 = form;
var fn = cljs.core.nth.call(null,vec__21134,(0),null);
var args = cljs.core.nthnext.call(null,vec__21134,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__16732__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__16720__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16720__auto__)){
return args_STAR_;
} else {
return and__16720__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__21136 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__21136,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__21136,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__21139 = form;
var call = cljs.core.nth.call(null,vec__21139,(0),null);
var binding = cljs.core.nth.call(null,vec__21139,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__21140 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__21140,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__21140,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__21143 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21143,(0),null);
var next_form = cljs.core.nth.call(null,vec__21143,(1),null);
var vec__21144 = next_form;
var name = cljs.core.nth.call(null,vec__21144,(0),null);
var args = cljs.core.nthnext.call(null,vec__21144,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_21147 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_21147)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_21147)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__21150 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21150,(0),null);
var next_form = cljs.core.nth.call(null,vec__21150,(1),null);
var vec__21151 = next_form;
var sym = cljs.core.nth.call(null,vec__21151,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__21151,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__21154 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21154,(0),null);
var next_form = cljs.core.nth.call(null,vec__21154,(1),null);
var vec__21155 = next_form;
var sym = cljs.core.nth.call(null,vec__21155,(0),null);
var vars = cljs.core.nth.call(null,vec__21155,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__21155,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__16720__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16720__auto__)){
return clauses_STAR_;
} else {
return and__16720__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__21164 = clause;
var map__21164__$1 = ((((!((map__21164 == null)))?((((map__21164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21164):map__21164);
var map__21165 = cljs.core.get.call(null,map__21164__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__21165__$1 = ((((!((map__21165 == null)))?((((map__21165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21165):map__21165);
var required = cljs.core.get.call(null,map__21165__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__21165__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__21164__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__21168_21172 = cljs.core.seq.call(null,clauses);
var chunk__21169_21173 = null;
var count__21170_21174 = (0);
var i__21171_21175 = (0);
while(true){
if((i__21171_21175 < count__21170_21174)){
var clause_21176__$1 = cljs.core._nth.call(null,chunk__21169_21173,i__21171_21175);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_21176__$1], null),form);

var G__21177 = seq__21168_21172;
var G__21178 = chunk__21169_21173;
var G__21179 = count__21170_21174;
var G__21180 = (i__21171_21175 + (1));
seq__21168_21172 = G__21177;
chunk__21169_21173 = G__21178;
count__21170_21174 = G__21179;
i__21171_21175 = G__21180;
continue;
} else {
var temp__4425__auto___21181 = cljs.core.seq.call(null,seq__21168_21172);
if(temp__4425__auto___21181){
var seq__21168_21182__$1 = temp__4425__auto___21181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21168_21182__$1)){
var c__17535__auto___21183 = cljs.core.chunk_first.call(null,seq__21168_21182__$1);
var G__21184 = cljs.core.chunk_rest.call(null,seq__21168_21182__$1);
var G__21185 = c__17535__auto___21183;
var G__21186 = cljs.core.count.call(null,c__17535__auto___21183);
var G__21187 = (0);
seq__21168_21172 = G__21184;
chunk__21169_21173 = G__21185;
count__21170_21174 = G__21186;
i__21171_21175 = G__21187;
continue;
} else {
var clause_21188__$1 = cljs.core.first.call(null,seq__21168_21182__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_21188__$1], null),form);

var G__21189 = cljs.core.next.call(null,seq__21168_21182__$1);
var G__21190 = null;
var G__21191 = (0);
var G__21192 = (0);
seq__21168_21172 = G__21189;
chunk__21169_21173 = G__21190;
count__21170_21174 = G__21191;
i__21171_21175 = G__21192;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__21195 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21195,(0),null);
var next_form = cljs.core.nth.call(null,vec__21195,(1),null);
var vec__21196 = next_form;
var sym = cljs.core.nth.call(null,vec__21196,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__21196,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__21199 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21199,(0),null);
var next_form = cljs.core.nth.call(null,vec__21199,(1),null);
var vec__21200 = next_form;
var sym = cljs.core.nth.call(null,vec__21200,(0),null);
var vars = cljs.core.nth.call(null,vec__21200,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__21200,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__16720__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16720__auto__)){
return clauses_STAR_;
} else {
return and__16720__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__16732__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
var or__16732__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__16732__auto____$1)){
return or__16732__auto____$1;
} else {
var or__16732__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__16732__auto____$2)){
return or__16732__auto____$2;
} else {
var or__16732__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__16732__auto____$3)){
return or__16732__auto____$3;
} else {
var or__16732__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__16732__auto____$4)){
return or__16732__auto____$4;
} else {
var or__16732__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__16732__auto____$5)){
return or__16732__auto____$5;
} else {
var or__16732__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__16732__auto____$6)){
return or__16732__auto____$6;
} else {
var or__16732__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__16732__auto____$7)){
return or__16732__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__16732__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21206,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21208 = (((k21206 instanceof cljs.core.Keyword))?k21206.fqn:null);
switch (G__21208) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21206,else__17349__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21205){
var self__ = this;
var G__21205__$1 = this;
return (new cljs.core.RecordIter((0),G__21205__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21205){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21209 = cljs.core.keyword_identical_QMARK_;
var expr__21210 = k__17354__auto__;
if(cljs.core.truth_(pred__21209.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__21210))){
return (new datascript.parser.RuleBranch(G__21205,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21209.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__21210))){
return (new datascript.parser.RuleBranch(self__.vars,G__21205,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21205),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21205){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__21205,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21202){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f21202),datascript.parser.postwalk.call(null,self__.clauses,f21202),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21203,acc21204){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21203,self__.clauses,datascript.parser.collect.call(null,pred21203,self__.vars,acc21204));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21204){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21204,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__21207){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__21207),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__21207),null,cljs.core.dissoc.call(null,G__21207,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21217,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21219 = (((k21217 instanceof cljs.core.Keyword))?k21217.fqn:null);
switch (G__21219) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21217,else__17349__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Rule{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21216){
var self__ = this;
var G__21216__$1 = this;
return (new cljs.core.RecordIter((0),G__21216__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21216){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21220 = cljs.core.keyword_identical_QMARK_;
var expr__21221 = k__17354__auto__;
if(cljs.core.truth_(pred__21220.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__21221))){
return (new datascript.parser.Rule(G__21216,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21220.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__21221))){
return (new datascript.parser.Rule(self__.name,G__21216,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21216),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21216){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__21216,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21213){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f21213),datascript.parser.postwalk.call(null,self__.branches,f21213),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21214,acc21215){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21214,self__.branches,datascript.parser.collect.call(null,pred21214,self__.name,acc21215));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21215){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21215,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__21218){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__21218),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__21218),null,cljs.core.dissoc.call(null,G__21218,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__21224_SHARP_){
return (p1__21224_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__21225_SHARP_){
return (p1__21225_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__21228 = form;
var head = cljs.core.nth.call(null,vec__21228,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__21228,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__21229 = head;
var name = cljs.core.nth.call(null,vec__21229,(0),null);
var vars = cljs.core.nthnext.call(null,vec__21229,(1));
var name_STAR_ = (function (){var or__16732__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__16732__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__21236 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__21238 = null;
var count__21239 = (0);
var i__21240 = (0);
while(true){
if((i__21240 < count__21239)){
var b = cljs.core._nth.call(null,chunk__21238,i__21240);
var vars_21242 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_21242))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_21242)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__21243 = seq__21236;
var G__21244 = chunk__21238;
var G__21245 = count__21239;
var G__21246 = (i__21240 + (1));
seq__21236 = G__21243;
chunk__21238 = G__21244;
count__21239 = G__21245;
i__21240 = G__21246;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21236);
if(temp__4425__auto__){
var seq__21236__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21236__$1)){
var c__17535__auto__ = cljs.core.chunk_first.call(null,seq__21236__$1);
var G__21247 = cljs.core.chunk_rest.call(null,seq__21236__$1);
var G__21248 = c__17535__auto__;
var G__21249 = cljs.core.count.call(null,c__17535__auto__);
var G__21250 = (0);
seq__21236 = G__21247;
chunk__21238 = G__21248;
count__21239 = G__21249;
i__21240 = G__21250;
continue;
} else {
var b = cljs.core.first.call(null,seq__21236__$1);
var vars_21251 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_21251))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_21251)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__21252 = cljs.core.next.call(null,seq__21236__$1);
var G__21253 = null;
var G__21254 = (0);
var G__21255 = (0);
seq__21236 = G__21252;
chunk__21238 = G__21253;
count__21239 = G__21254;
i__21240 = G__21255;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__17504__auto__ = (function datascript$parser$parse_rules_$_iter__21265(s__21266){
return (new cljs.core.LazySeq(null,(function (){
var s__21266__$1 = s__21266;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21266__$1);
if(temp__4425__auto__){
var s__21266__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21266__$2)){
var c__17502__auto__ = cljs.core.chunk_first.call(null,s__21266__$2);
var size__17503__auto__ = cljs.core.count.call(null,c__17502__auto__);
var b__21268 = cljs.core.chunk_buffer.call(null,size__17503__auto__);
if((function (){var i__21267 = (0);
while(true){
if((i__21267 < size__17503__auto__)){
var vec__21271 = cljs.core._nth.call(null,c__17502__auto__,i__21267);
var name = cljs.core.nth.call(null,vec__21271,(0),null);
var branches = cljs.core.nth.call(null,vec__21271,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__21267,vec__21271,name,branches,c__17502__auto__,size__17503__auto__,b__21268,s__21266__$2,temp__4425__auto__){
return (function (p1__21256_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__21256_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__21256_SHARP_),null,null,null));
});})(i__21267,vec__21271,name,branches,c__17502__auto__,size__17503__auto__,b__21268,s__21266__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__21268,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__21273 = (i__21267 + (1));
i__21267 = G__21273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21268),datascript$parser$parse_rules_$_iter__21265.call(null,cljs.core.chunk_rest.call(null,s__21266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21268),null);
}
} else {
var vec__21272 = cljs.core.first.call(null,s__21266__$2);
var name = cljs.core.nth.call(null,vec__21272,(0),null);
var branches = cljs.core.nth.call(null,vec__21272,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__21272,name,branches,s__21266__$2,temp__4425__auto__){
return (function (p1__21256_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__21256_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__21256_SHARP_),null,null,null));
});})(vec__21272,name,branches,s__21266__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__21265.call(null,cljs.core.rest.call(null,s__21266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17504__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17346__auto__,k__17347__auto__){
var self__ = this;
var this__17346__auto____$1 = this;
return cljs.core._lookup.call(null,this__17346__auto____$1,k__17347__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17348__auto__,k21278,else__17349__auto__){
var self__ = this;
var this__17348__auto____$1 = this;
var G__21280 = (((k21278 instanceof cljs.core.Keyword))?k21278.fqn:null);
switch (G__21280) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21278,else__17349__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17360__auto__,writer__17361__auto__,opts__17362__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var pr_pair__17363__auto__ = ((function (this__17360__auto____$1){
return (function (keyval__17364__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,cljs.core.pr_writer,""," ","",opts__17362__auto__,keyval__17364__auto__);
});})(this__17360__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17361__auto__,pr_pair__17363__auto__,"#datascript.parser.Query{",", ","}",opts__17362__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21277){
var self__ = this;
var G__21277__$1 = this;
return (new cljs.core.RecordIter((0),G__21277__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17344__auto__){
var self__ = this;
var this__17344__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17340__auto__){
var self__ = this;
var this__17340__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17350__auto__){
var self__ = this;
var this__17350__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17341__auto__){
var self__ = this;
var this__17341__auto____$1 = this;
var h__17167__auto__ = self__.__hash;
if(!((h__17167__auto__ == null))){
return h__17167__auto__;
} else {
var h__17167__auto____$1 = cljs.core.hash_imap.call(null,this__17341__auto____$1);
self__.__hash = h__17167__auto____$1;

return h__17167__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17342__auto__,other__17343__auto__){
var self__ = this;
var this__17342__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16720__auto__ = other__17343__auto__;
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = (this__17342__auto____$1.constructor === other__17343__auto__.constructor);
if(and__16720__auto____$1){
return cljs.core.equiv_map.call(null,this__17342__auto____$1,other__17343__auto__);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17355__auto__,k__17356__auto__){
var self__ = this;
var this__17355__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__17356__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17355__auto____$1),self__.__meta),k__17356__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17356__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17353__auto__,k__17354__auto__,G__21277){
var self__ = this;
var this__17353__auto____$1 = this;
var pred__21281 = cljs.core.keyword_identical_QMARK_;
var expr__21282 = k__17354__auto__;
if(cljs.core.truth_(pred__21281.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__21282))){
return (new datascript.parser.Query(G__21277,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21281.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__21282))){
return (new datascript.parser.Query(self__.find,G__21277,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21281.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__21282))){
return (new datascript.parser.Query(self__.find,self__.with$,G__21277,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21281.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__21282))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__21277,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17354__auto__,G__21277),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17358__auto__){
var self__ = this;
var this__17358__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17345__auto__,G__21277){
var self__ = this;
var this__17345__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__21277,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17351__auto__,entry__17352__auto__){
var self__ = this;
var this__17351__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17352__auto__)){
return cljs.core._assoc.call(null,this__17351__auto____$1,cljs.core._nth.call(null,entry__17352__auto__,(0)),cljs.core._nth.call(null,entry__17352__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17351__auto____$1,entry__17352__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__19767__auto__,f21274){
var self__ = this;
var this__19767__auto____$1 = this;
var new__19768__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f21274),datascript.parser.postwalk.call(null,self__.with$,f21274),datascript.parser.postwalk.call(null,self__.in$,f21274),datascript.parser.postwalk.call(null,self__.where,f21274),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__19767__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__19769__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__19768__auto__,meta__19769__auto__);
} else {
return new__19768__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___19770__auto__,pred21275,acc21276){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect.call(null,pred21275,self__.where,datascript.parser.collect.call(null,pred21275,self__.in$,datascript.parser.collect.call(null,pred21275,self__.with$,datascript.parser.collect.call(null,pred21275,self__.find,acc21276))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___19770__auto__,acc21276){
var self__ = this;
var ___19770__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21276,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__17380__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__17380__auto__,writer__17381__auto__){
return cljs.core._write.call(null,writer__17381__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__21279){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__21279),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__21279),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__21279),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__21279),null,cljs.core.dissoc.call(null,G__21279,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__21285 = parsed;
var G__21286 = q;
var G__21287 = cljs.core.next.call(null,qs);
parsed = G__21285;
key = G__21286;
qs = G__21287;
continue;
} else {
var G__21288 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__21289 = key;
var G__21290 = cljs.core.next.call(null,qs);
parsed = G__21288;
key = G__21289;
qs = G__21290;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_21297 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_21298 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_21299 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_21300 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_21301 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_21297,with_vars_21298),clojure.set.union.call(null,where_vars_21300,in_vars_21299));
var shared_21302 = clojure.set.intersection.call(null,find_vars_21297,with_vars_21298);
if(cljs.core.empty_QMARK_.call(null,unknown_21301)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_21301)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_21301,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_21302)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_21302)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_21302,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_21303 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_21304 = datascript.parser.collect.call(null,((function (in_vars_21303){
return (function (p1__21291_SHARP_){
return (p1__21291_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_21303))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_21305 = datascript.parser.collect.call(null,((function (in_vars_21303,in_sources_21304){
return (function (p1__21292_SHARP_){
return (p1__21292_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_21303,in_sources_21304))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__16720__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_21303);
if(cljs.core.truth_(and__16720__auto__)){
var and__16720__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_21304);
if(cljs.core.truth_(and__16720__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_21305);
} else {
return and__16720__auto____$1;
}
} else {
return and__16720__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_21306 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_21306))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_21307 = datascript.parser.collect.call(null,(function (p1__21293_SHARP_){
return (p1__21293_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_21308 = datascript.parser.collect.call(null,((function (in_sources_21307){
return (function (p1__21294_SHARP_){
return (p1__21294_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_21307))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_21309 = clojure.set.difference.call(null,where_sources_21308,in_sources_21307);
if(cljs.core.empty_QMARK_.call(null,unknown_21309)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_21309)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_21309,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__21295_SHARP_){
return (p1__21295_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__21296_SHARP_){
return (p1__21296_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map