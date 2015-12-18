// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27199_27213 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27200_27214 = null;
var count__27201_27215 = (0);
var i__27202_27216 = (0);
while(true){
if((i__27202_27216 < count__27201_27215)){
var f_27217 = cljs.core._nth.call(null,chunk__27200_27214,i__27202_27216);
cljs.core.println.call(null,"  ",f_27217);

var G__27218 = seq__27199_27213;
var G__27219 = chunk__27200_27214;
var G__27220 = count__27201_27215;
var G__27221 = (i__27202_27216 + (1));
seq__27199_27213 = G__27218;
chunk__27200_27214 = G__27219;
count__27201_27215 = G__27220;
i__27202_27216 = G__27221;
continue;
} else {
var temp__4425__auto___27222 = cljs.core.seq.call(null,seq__27199_27213);
if(temp__4425__auto___27222){
var seq__27199_27223__$1 = temp__4425__auto___27222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27199_27223__$1)){
var c__17535__auto___27224 = cljs.core.chunk_first.call(null,seq__27199_27223__$1);
var G__27225 = cljs.core.chunk_rest.call(null,seq__27199_27223__$1);
var G__27226 = c__17535__auto___27224;
var G__27227 = cljs.core.count.call(null,c__17535__auto___27224);
var G__27228 = (0);
seq__27199_27213 = G__27225;
chunk__27200_27214 = G__27226;
count__27201_27215 = G__27227;
i__27202_27216 = G__27228;
continue;
} else {
var f_27229 = cljs.core.first.call(null,seq__27199_27223__$1);
cljs.core.println.call(null,"  ",f_27229);

var G__27230 = cljs.core.next.call(null,seq__27199_27223__$1);
var G__27231 = null;
var G__27232 = (0);
var G__27233 = (0);
seq__27199_27213 = G__27230;
chunk__27200_27214 = G__27231;
count__27201_27215 = G__27232;
i__27202_27216 = G__27233;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27234 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16732__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27234);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27234)))?cljs.core.second.call(null,arglists_27234):arglists_27234));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27203 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27204 = null;
var count__27205 = (0);
var i__27206 = (0);
while(true){
if((i__27206 < count__27205)){
var vec__27207 = cljs.core._nth.call(null,chunk__27204,i__27206);
var name = cljs.core.nth.call(null,vec__27207,(0),null);
var map__27208 = cljs.core.nth.call(null,vec__27207,(1),null);
var map__27208__$1 = ((((!((map__27208 == null)))?((((map__27208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27208):map__27208);
var doc = cljs.core.get.call(null,map__27208__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27208__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27235 = seq__27203;
var G__27236 = chunk__27204;
var G__27237 = count__27205;
var G__27238 = (i__27206 + (1));
seq__27203 = G__27235;
chunk__27204 = G__27236;
count__27205 = G__27237;
i__27206 = G__27238;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27203);
if(temp__4425__auto__){
var seq__27203__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27203__$1)){
var c__17535__auto__ = cljs.core.chunk_first.call(null,seq__27203__$1);
var G__27239 = cljs.core.chunk_rest.call(null,seq__27203__$1);
var G__27240 = c__17535__auto__;
var G__27241 = cljs.core.count.call(null,c__17535__auto__);
var G__27242 = (0);
seq__27203 = G__27239;
chunk__27204 = G__27240;
count__27205 = G__27241;
i__27206 = G__27242;
continue;
} else {
var vec__27210 = cljs.core.first.call(null,seq__27203__$1);
var name = cljs.core.nth.call(null,vec__27210,(0),null);
var map__27211 = cljs.core.nth.call(null,vec__27210,(1),null);
var map__27211__$1 = ((((!((map__27211 == null)))?((((map__27211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27211):map__27211);
var doc = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27243 = cljs.core.next.call(null,seq__27203__$1);
var G__27244 = null;
var G__27245 = (0);
var G__27246 = (0);
seq__27203 = G__27243;
chunk__27204 = G__27244;
count__27205 = G__27245;
i__27206 = G__27246;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map