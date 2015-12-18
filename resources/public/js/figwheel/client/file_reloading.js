// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16732__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16732__auto__){
return or__16732__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16732__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26175_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26175_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26180 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26181 = null;
var count__26182 = (0);
var i__26183 = (0);
while(true){
if((i__26183 < count__26182)){
var n = cljs.core._nth.call(null,chunk__26181,i__26183);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26184 = seq__26180;
var G__26185 = chunk__26181;
var G__26186 = count__26182;
var G__26187 = (i__26183 + (1));
seq__26180 = G__26184;
chunk__26181 = G__26185;
count__26182 = G__26186;
i__26183 = G__26187;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26180);
if(temp__4425__auto__){
var seq__26180__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26180__$1)){
var c__17535__auto__ = cljs.core.chunk_first.call(null,seq__26180__$1);
var G__26188 = cljs.core.chunk_rest.call(null,seq__26180__$1);
var G__26189 = c__17535__auto__;
var G__26190 = cljs.core.count.call(null,c__17535__auto__);
var G__26191 = (0);
seq__26180 = G__26188;
chunk__26181 = G__26189;
count__26182 = G__26190;
i__26183 = G__26191;
continue;
} else {
var n = cljs.core.first.call(null,seq__26180__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26192 = cljs.core.next.call(null,seq__26180__$1);
var G__26193 = null;
var G__26194 = (0);
var G__26195 = (0);
seq__26180 = G__26192;
chunk__26181 = G__26193;
count__26182 = G__26194;
i__26183 = G__26195;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26234_26241 = cljs.core.seq.call(null,deps);
var chunk__26235_26242 = null;
var count__26236_26243 = (0);
var i__26237_26244 = (0);
while(true){
if((i__26237_26244 < count__26236_26243)){
var dep_26245 = cljs.core._nth.call(null,chunk__26235_26242,i__26237_26244);
topo_sort_helper_STAR_.call(null,dep_26245,(depth + (1)),state);

var G__26246 = seq__26234_26241;
var G__26247 = chunk__26235_26242;
var G__26248 = count__26236_26243;
var G__26249 = (i__26237_26244 + (1));
seq__26234_26241 = G__26246;
chunk__26235_26242 = G__26247;
count__26236_26243 = G__26248;
i__26237_26244 = G__26249;
continue;
} else {
var temp__4425__auto___26250 = cljs.core.seq.call(null,seq__26234_26241);
if(temp__4425__auto___26250){
var seq__26234_26251__$1 = temp__4425__auto___26250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26234_26251__$1)){
var c__17535__auto___26252 = cljs.core.chunk_first.call(null,seq__26234_26251__$1);
var G__26253 = cljs.core.chunk_rest.call(null,seq__26234_26251__$1);
var G__26254 = c__17535__auto___26252;
var G__26255 = cljs.core.count.call(null,c__17535__auto___26252);
var G__26256 = (0);
seq__26234_26241 = G__26253;
chunk__26235_26242 = G__26254;
count__26236_26243 = G__26255;
i__26237_26244 = G__26256;
continue;
} else {
var dep_26257 = cljs.core.first.call(null,seq__26234_26251__$1);
topo_sort_helper_STAR_.call(null,dep_26257,(depth + (1)),state);

var G__26258 = cljs.core.next.call(null,seq__26234_26251__$1);
var G__26259 = null;
var G__26260 = (0);
var G__26261 = (0);
seq__26234_26241 = G__26258;
chunk__26235_26242 = G__26259;
count__26236_26243 = G__26260;
i__26237_26244 = G__26261;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26238){
var vec__26240 = p__26238;
var x = cljs.core.nth.call(null,vec__26240,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26240,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26240,x,xs,get_deps__$1){
return (function (p1__26196_SHARP_){
return clojure.set.difference.call(null,p1__26196_SHARP_,x);
});})(vec__26240,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26274 = cljs.core.seq.call(null,provides);
var chunk__26275 = null;
var count__26276 = (0);
var i__26277 = (0);
while(true){
if((i__26277 < count__26276)){
var prov = cljs.core._nth.call(null,chunk__26275,i__26277);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26278_26286 = cljs.core.seq.call(null,requires);
var chunk__26279_26287 = null;
var count__26280_26288 = (0);
var i__26281_26289 = (0);
while(true){
if((i__26281_26289 < count__26280_26288)){
var req_26290 = cljs.core._nth.call(null,chunk__26279_26287,i__26281_26289);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26290,prov);

var G__26291 = seq__26278_26286;
var G__26292 = chunk__26279_26287;
var G__26293 = count__26280_26288;
var G__26294 = (i__26281_26289 + (1));
seq__26278_26286 = G__26291;
chunk__26279_26287 = G__26292;
count__26280_26288 = G__26293;
i__26281_26289 = G__26294;
continue;
} else {
var temp__4425__auto___26295 = cljs.core.seq.call(null,seq__26278_26286);
if(temp__4425__auto___26295){
var seq__26278_26296__$1 = temp__4425__auto___26295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26278_26296__$1)){
var c__17535__auto___26297 = cljs.core.chunk_first.call(null,seq__26278_26296__$1);
var G__26298 = cljs.core.chunk_rest.call(null,seq__26278_26296__$1);
var G__26299 = c__17535__auto___26297;
var G__26300 = cljs.core.count.call(null,c__17535__auto___26297);
var G__26301 = (0);
seq__26278_26286 = G__26298;
chunk__26279_26287 = G__26299;
count__26280_26288 = G__26300;
i__26281_26289 = G__26301;
continue;
} else {
var req_26302 = cljs.core.first.call(null,seq__26278_26296__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26302,prov);

var G__26303 = cljs.core.next.call(null,seq__26278_26296__$1);
var G__26304 = null;
var G__26305 = (0);
var G__26306 = (0);
seq__26278_26286 = G__26303;
chunk__26279_26287 = G__26304;
count__26280_26288 = G__26305;
i__26281_26289 = G__26306;
continue;
}
} else {
}
}
break;
}

var G__26307 = seq__26274;
var G__26308 = chunk__26275;
var G__26309 = count__26276;
var G__26310 = (i__26277 + (1));
seq__26274 = G__26307;
chunk__26275 = G__26308;
count__26276 = G__26309;
i__26277 = G__26310;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26274);
if(temp__4425__auto__){
var seq__26274__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26274__$1)){
var c__17535__auto__ = cljs.core.chunk_first.call(null,seq__26274__$1);
var G__26311 = cljs.core.chunk_rest.call(null,seq__26274__$1);
var G__26312 = c__17535__auto__;
var G__26313 = cljs.core.count.call(null,c__17535__auto__);
var G__26314 = (0);
seq__26274 = G__26311;
chunk__26275 = G__26312;
count__26276 = G__26313;
i__26277 = G__26314;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26274__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26282_26315 = cljs.core.seq.call(null,requires);
var chunk__26283_26316 = null;
var count__26284_26317 = (0);
var i__26285_26318 = (0);
while(true){
if((i__26285_26318 < count__26284_26317)){
var req_26319 = cljs.core._nth.call(null,chunk__26283_26316,i__26285_26318);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26319,prov);

var G__26320 = seq__26282_26315;
var G__26321 = chunk__26283_26316;
var G__26322 = count__26284_26317;
var G__26323 = (i__26285_26318 + (1));
seq__26282_26315 = G__26320;
chunk__26283_26316 = G__26321;
count__26284_26317 = G__26322;
i__26285_26318 = G__26323;
continue;
} else {
var temp__4425__auto___26324__$1 = cljs.core.seq.call(null,seq__26282_26315);
if(temp__4425__auto___26324__$1){
var seq__26282_26325__$1 = temp__4425__auto___26324__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26282_26325__$1)){
var c__17535__auto___26326 = cljs.core.chunk_first.call(null,seq__26282_26325__$1);
var G__26327 = cljs.core.chunk_rest.call(null,seq__26282_26325__$1);
var G__26328 = c__17535__auto___26326;
var G__26329 = cljs.core.count.call(null,c__17535__auto___26326);
var G__26330 = (0);
seq__26282_26315 = G__26327;
chunk__26283_26316 = G__26328;
count__26284_26317 = G__26329;
i__26285_26318 = G__26330;
continue;
} else {
var req_26331 = cljs.core.first.call(null,seq__26282_26325__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26331,prov);

var G__26332 = cljs.core.next.call(null,seq__26282_26325__$1);
var G__26333 = null;
var G__26334 = (0);
var G__26335 = (0);
seq__26282_26315 = G__26332;
chunk__26283_26316 = G__26333;
count__26284_26317 = G__26334;
i__26285_26318 = G__26335;
continue;
}
} else {
}
}
break;
}

var G__26336 = cljs.core.next.call(null,seq__26274__$1);
var G__26337 = null;
var G__26338 = (0);
var G__26339 = (0);
seq__26274 = G__26336;
chunk__26275 = G__26337;
count__26276 = G__26338;
i__26277 = G__26339;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26344_26348 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26345_26349 = null;
var count__26346_26350 = (0);
var i__26347_26351 = (0);
while(true){
if((i__26347_26351 < count__26346_26350)){
var ns_26352 = cljs.core._nth.call(null,chunk__26345_26349,i__26347_26351);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26352);

var G__26353 = seq__26344_26348;
var G__26354 = chunk__26345_26349;
var G__26355 = count__26346_26350;
var G__26356 = (i__26347_26351 + (1));
seq__26344_26348 = G__26353;
chunk__26345_26349 = G__26354;
count__26346_26350 = G__26355;
i__26347_26351 = G__26356;
continue;
} else {
var temp__4425__auto___26357 = cljs.core.seq.call(null,seq__26344_26348);
if(temp__4425__auto___26357){
var seq__26344_26358__$1 = temp__4425__auto___26357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26344_26358__$1)){
var c__17535__auto___26359 = cljs.core.chunk_first.call(null,seq__26344_26358__$1);
var G__26360 = cljs.core.chunk_rest.call(null,seq__26344_26358__$1);
var G__26361 = c__17535__auto___26359;
var G__26362 = cljs.core.count.call(null,c__17535__auto___26359);
var G__26363 = (0);
seq__26344_26348 = G__26360;
chunk__26345_26349 = G__26361;
count__26346_26350 = G__26362;
i__26347_26351 = G__26363;
continue;
} else {
var ns_26364 = cljs.core.first.call(null,seq__26344_26358__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26364);

var G__26365 = cljs.core.next.call(null,seq__26344_26358__$1);
var G__26366 = null;
var G__26367 = (0);
var G__26368 = (0);
seq__26344_26348 = G__26365;
chunk__26345_26349 = G__26366;
count__26346_26350 = G__26367;
i__26347_26351 = G__26368;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16732__auto__ = goog.require__;
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26369__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26370__i = 0, G__26370__a = new Array(arguments.length -  0);
while (G__26370__i < G__26370__a.length) {G__26370__a[G__26370__i] = arguments[G__26370__i + 0]; ++G__26370__i;}
  args = new cljs.core.IndexedSeq(G__26370__a,0);
} 
return G__26369__delegate.call(this,args);};
G__26369.cljs$lang$maxFixedArity = 0;
G__26369.cljs$lang$applyTo = (function (arglist__26371){
var args = cljs.core.seq(arglist__26371);
return G__26369__delegate(args);
});
G__26369.cljs$core$IFn$_invoke$arity$variadic = G__26369__delegate;
return G__26369;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26373 = cljs.core._EQ_;
var expr__26374 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26373.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26374))){
var path_parts = ((function (pred__26373,expr__26374){
return (function (p1__26372_SHARP_){
return clojure.string.split.call(null,p1__26372_SHARP_,/[\/\\]/);
});})(pred__26373,expr__26374))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26373,expr__26374){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26376){if((e26376 instanceof Error)){
var e = e26376;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26376;

}
}})());
});
;})(path_parts,sep,root,pred__26373,expr__26374))
} else {
if(cljs.core.truth_(pred__26373.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26374))){
return ((function (pred__26373,expr__26374){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26373,expr__26374){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26373,expr__26374))
);

return deferred.addErrback(((function (deferred,pred__26373,expr__26374){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26373,expr__26374))
);
});
;})(pred__26373,expr__26374))
} else {
return ((function (pred__26373,expr__26374){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26373,expr__26374))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26377,callback){
var map__26380 = p__26377;
var map__26380__$1 = ((((!((map__26380 == null)))?((((map__26380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26380):map__26380);
var file_msg = map__26380__$1;
var request_url = cljs.core.get.call(null,map__26380__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26380,map__26380__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26380,map__26380__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__){
return (function (state_26404){
var state_val_26405 = (state_26404[(1)]);
if((state_val_26405 === (7))){
var inst_26400 = (state_26404[(2)]);
var state_26404__$1 = state_26404;
var statearr_26406_26426 = state_26404__$1;
(statearr_26406_26426[(2)] = inst_26400);

(statearr_26406_26426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (1))){
var state_26404__$1 = state_26404;
var statearr_26407_26427 = state_26404__$1;
(statearr_26407_26427[(2)] = null);

(statearr_26407_26427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (4))){
var inst_26384 = (state_26404[(7)]);
var inst_26384__$1 = (state_26404[(2)]);
var state_26404__$1 = (function (){var statearr_26408 = state_26404;
(statearr_26408[(7)] = inst_26384__$1);

return statearr_26408;
})();
if(cljs.core.truth_(inst_26384__$1)){
var statearr_26409_26428 = state_26404__$1;
(statearr_26409_26428[(1)] = (5));

} else {
var statearr_26410_26429 = state_26404__$1;
(statearr_26410_26429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (6))){
var state_26404__$1 = state_26404;
var statearr_26411_26430 = state_26404__$1;
(statearr_26411_26430[(2)] = null);

(statearr_26411_26430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (3))){
var inst_26402 = (state_26404[(2)]);
var state_26404__$1 = state_26404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26404__$1,inst_26402);
} else {
if((state_val_26405 === (2))){
var state_26404__$1 = state_26404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26404__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26405 === (11))){
var inst_26396 = (state_26404[(2)]);
var state_26404__$1 = (function (){var statearr_26412 = state_26404;
(statearr_26412[(8)] = inst_26396);

return statearr_26412;
})();
var statearr_26413_26431 = state_26404__$1;
(statearr_26413_26431[(2)] = null);

(statearr_26413_26431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (9))){
var inst_26390 = (state_26404[(9)]);
var inst_26388 = (state_26404[(10)]);
var inst_26392 = inst_26390.call(null,inst_26388);
var state_26404__$1 = state_26404;
var statearr_26414_26432 = state_26404__$1;
(statearr_26414_26432[(2)] = inst_26392);

(statearr_26414_26432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (5))){
var inst_26384 = (state_26404[(7)]);
var inst_26386 = figwheel.client.file_reloading.blocking_load.call(null,inst_26384);
var state_26404__$1 = state_26404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26404__$1,(8),inst_26386);
} else {
if((state_val_26405 === (10))){
var inst_26388 = (state_26404[(10)]);
var inst_26394 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26388);
var state_26404__$1 = state_26404;
var statearr_26415_26433 = state_26404__$1;
(statearr_26415_26433[(2)] = inst_26394);

(statearr_26415_26433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (8))){
var inst_26390 = (state_26404[(9)]);
var inst_26384 = (state_26404[(7)]);
var inst_26388 = (state_26404[(2)]);
var inst_26389 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26390__$1 = cljs.core.get.call(null,inst_26389,inst_26384);
var state_26404__$1 = (function (){var statearr_26416 = state_26404;
(statearr_26416[(9)] = inst_26390__$1);

(statearr_26416[(10)] = inst_26388);

return statearr_26416;
})();
if(cljs.core.truth_(inst_26390__$1)){
var statearr_26417_26434 = state_26404__$1;
(statearr_26417_26434[(1)] = (9));

} else {
var statearr_26418_26435 = state_26404__$1;
(statearr_26418_26435[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23342__auto__))
;
return ((function (switch__23230__auto__,c__23342__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23231__auto__ = null;
var figwheel$client$file_reloading$state_machine__23231__auto____0 = (function (){
var statearr_26422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26422[(0)] = figwheel$client$file_reloading$state_machine__23231__auto__);

(statearr_26422[(1)] = (1));

return statearr_26422;
});
var figwheel$client$file_reloading$state_machine__23231__auto____1 = (function (state_26404){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_26404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e26423){if((e26423 instanceof Object)){
var ex__23234__auto__ = e26423;
var statearr_26424_26436 = state_26404;
(statearr_26424_26436[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26437 = state_26404;
state_26404 = G__26437;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23231__auto__ = function(state_26404){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23231__auto____1.call(this,state_26404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23231__auto____0;
figwheel$client$file_reloading$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23231__auto____1;
return figwheel$client$file_reloading$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__))
})();
var state__23344__auto__ = (function (){var statearr_26425 = f__23343__auto__.call(null);
(statearr_26425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_26425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__))
);

return c__23342__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26438,callback){
var map__26441 = p__26438;
var map__26441__$1 = ((((!((map__26441 == null)))?((((map__26441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26441):map__26441);
var file_msg = map__26441__$1;
var namespace = cljs.core.get.call(null,map__26441__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26441,map__26441__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26441,map__26441__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26443){
var map__26446 = p__26443;
var map__26446__$1 = ((((!((map__26446 == null)))?((((map__26446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26446):map__26446);
var file_msg = map__26446__$1;
var namespace = cljs.core.get.call(null,map__26446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16720__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16720__auto__){
var or__16732__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
var or__16732__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16732__auto____$1)){
return or__16732__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16720__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26448,callback){
var map__26451 = p__26448;
var map__26451__$1 = ((((!((map__26451 == null)))?((((map__26451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26451):map__26451);
var file_msg = map__26451__$1;
var request_url = cljs.core.get.call(null,map__26451__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26451__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23342__auto___26539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___26539,out){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___26539,out){
return (function (state_26521){
var state_val_26522 = (state_26521[(1)]);
if((state_val_26522 === (1))){
var inst_26499 = cljs.core.nth.call(null,files,(0),null);
var inst_26500 = cljs.core.nthnext.call(null,files,(1));
var inst_26501 = files;
var state_26521__$1 = (function (){var statearr_26523 = state_26521;
(statearr_26523[(7)] = inst_26499);

(statearr_26523[(8)] = inst_26501);

(statearr_26523[(9)] = inst_26500);

return statearr_26523;
})();
var statearr_26524_26540 = state_26521__$1;
(statearr_26524_26540[(2)] = null);

(statearr_26524_26540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26522 === (2))){
var inst_26504 = (state_26521[(10)]);
var inst_26501 = (state_26521[(8)]);
var inst_26504__$1 = cljs.core.nth.call(null,inst_26501,(0),null);
var inst_26505 = cljs.core.nthnext.call(null,inst_26501,(1));
var inst_26506 = (inst_26504__$1 == null);
var inst_26507 = cljs.core.not.call(null,inst_26506);
var state_26521__$1 = (function (){var statearr_26525 = state_26521;
(statearr_26525[(10)] = inst_26504__$1);

(statearr_26525[(11)] = inst_26505);

return statearr_26525;
})();
if(inst_26507){
var statearr_26526_26541 = state_26521__$1;
(statearr_26526_26541[(1)] = (4));

} else {
var statearr_26527_26542 = state_26521__$1;
(statearr_26527_26542[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26522 === (3))){
var inst_26519 = (state_26521[(2)]);
var state_26521__$1 = state_26521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26521__$1,inst_26519);
} else {
if((state_val_26522 === (4))){
var inst_26504 = (state_26521[(10)]);
var inst_26509 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26504);
var state_26521__$1 = state_26521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26521__$1,(7),inst_26509);
} else {
if((state_val_26522 === (5))){
var inst_26515 = cljs.core.async.close_BANG_.call(null,out);
var state_26521__$1 = state_26521;
var statearr_26528_26543 = state_26521__$1;
(statearr_26528_26543[(2)] = inst_26515);

(statearr_26528_26543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26522 === (6))){
var inst_26517 = (state_26521[(2)]);
var state_26521__$1 = state_26521;
var statearr_26529_26544 = state_26521__$1;
(statearr_26529_26544[(2)] = inst_26517);

(statearr_26529_26544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26522 === (7))){
var inst_26505 = (state_26521[(11)]);
var inst_26511 = (state_26521[(2)]);
var inst_26512 = cljs.core.async.put_BANG_.call(null,out,inst_26511);
var inst_26501 = inst_26505;
var state_26521__$1 = (function (){var statearr_26530 = state_26521;
(statearr_26530[(12)] = inst_26512);

(statearr_26530[(8)] = inst_26501);

return statearr_26530;
})();
var statearr_26531_26545 = state_26521__$1;
(statearr_26531_26545[(2)] = null);

(statearr_26531_26545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23342__auto___26539,out))
;
return ((function (switch__23230__auto__,c__23342__auto___26539,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto____0 = (function (){
var statearr_26535 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26535[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto__);

(statearr_26535[(1)] = (1));

return statearr_26535;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto____1 = (function (state_26521){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_26521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e26536){if((e26536 instanceof Object)){
var ex__23234__auto__ = e26536;
var statearr_26537_26546 = state_26521;
(statearr_26537_26546[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26547 = state_26521;
state_26521 = G__26547;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto__ = function(state_26521){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto____1.call(this,state_26521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___26539,out))
})();
var state__23344__auto__ = (function (){var statearr_26538 = f__23343__auto__.call(null);
(statearr_26538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___26539);

return statearr_26538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___26539,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26548,opts){
var map__26552 = p__26548;
var map__26552__$1 = ((((!((map__26552 == null)))?((((map__26552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26552):map__26552);
var eval_body__$1 = cljs.core.get.call(null,map__26552__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26552__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16720__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16720__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16720__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26554){var e = e26554;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26555_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26555_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26560){
var vec__26561 = p__26560;
var k = cljs.core.nth.call(null,vec__26561,(0),null);
var v = cljs.core.nth.call(null,vec__26561,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26562){
var vec__26563 = p__26562;
var k = cljs.core.nth.call(null,vec__26563,(0),null);
var v = cljs.core.nth.call(null,vec__26563,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26567,p__26568){
var map__26815 = p__26567;
var map__26815__$1 = ((((!((map__26815 == null)))?((((map__26815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26815):map__26815);
var opts = map__26815__$1;
var before_jsload = cljs.core.get.call(null,map__26815__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26815__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26815__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26816 = p__26568;
var map__26816__$1 = ((((!((map__26816 == null)))?((((map__26816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26816):map__26816);
var msg = map__26816__$1;
var files = cljs.core.get.call(null,map__26816__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26816__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26816__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26969){
var state_val_26970 = (state_26969[(1)]);
if((state_val_26970 === (7))){
var inst_26832 = (state_26969[(7)]);
var inst_26831 = (state_26969[(8)]);
var inst_26830 = (state_26969[(9)]);
var inst_26833 = (state_26969[(10)]);
var inst_26838 = cljs.core._nth.call(null,inst_26831,inst_26833);
var inst_26839 = figwheel.client.file_reloading.eval_body.call(null,inst_26838,opts);
var inst_26840 = (inst_26833 + (1));
var tmp26971 = inst_26832;
var tmp26972 = inst_26831;
var tmp26973 = inst_26830;
var inst_26830__$1 = tmp26973;
var inst_26831__$1 = tmp26972;
var inst_26832__$1 = tmp26971;
var inst_26833__$1 = inst_26840;
var state_26969__$1 = (function (){var statearr_26974 = state_26969;
(statearr_26974[(7)] = inst_26832__$1);

(statearr_26974[(8)] = inst_26831__$1);

(statearr_26974[(9)] = inst_26830__$1);

(statearr_26974[(11)] = inst_26839);

(statearr_26974[(10)] = inst_26833__$1);

return statearr_26974;
})();
var statearr_26975_27061 = state_26969__$1;
(statearr_26975_27061[(2)] = null);

(statearr_26975_27061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (20))){
var inst_26873 = (state_26969[(12)]);
var inst_26881 = figwheel.client.file_reloading.sort_files.call(null,inst_26873);
var state_26969__$1 = state_26969;
var statearr_26976_27062 = state_26969__$1;
(statearr_26976_27062[(2)] = inst_26881);

(statearr_26976_27062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (27))){
var state_26969__$1 = state_26969;
var statearr_26977_27063 = state_26969__$1;
(statearr_26977_27063[(2)] = null);

(statearr_26977_27063[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (1))){
var inst_26822 = (state_26969[(13)]);
var inst_26819 = before_jsload.call(null,files);
var inst_26820 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26821 = (function (){return ((function (inst_26822,inst_26819,inst_26820,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26564_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26564_SHARP_);
});
;})(inst_26822,inst_26819,inst_26820,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26822__$1 = cljs.core.filter.call(null,inst_26821,files);
var inst_26823 = cljs.core.not_empty.call(null,inst_26822__$1);
var state_26969__$1 = (function (){var statearr_26978 = state_26969;
(statearr_26978[(13)] = inst_26822__$1);

(statearr_26978[(14)] = inst_26820);

(statearr_26978[(15)] = inst_26819);

return statearr_26978;
})();
if(cljs.core.truth_(inst_26823)){
var statearr_26979_27064 = state_26969__$1;
(statearr_26979_27064[(1)] = (2));

} else {
var statearr_26980_27065 = state_26969__$1;
(statearr_26980_27065[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (24))){
var state_26969__$1 = state_26969;
var statearr_26981_27066 = state_26969__$1;
(statearr_26981_27066[(2)] = null);

(statearr_26981_27066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (39))){
var inst_26923 = (state_26969[(16)]);
var state_26969__$1 = state_26969;
var statearr_26982_27067 = state_26969__$1;
(statearr_26982_27067[(2)] = inst_26923);

(statearr_26982_27067[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (46))){
var inst_26964 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_26983_27068 = state_26969__$1;
(statearr_26983_27068[(2)] = inst_26964);

(statearr_26983_27068[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (4))){
var inst_26867 = (state_26969[(2)]);
var inst_26868 = cljs.core.List.EMPTY;
var inst_26869 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26868);
var inst_26870 = (function (){return ((function (inst_26867,inst_26868,inst_26869,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26565_SHARP_){
var and__16720__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26565_SHARP_);
if(cljs.core.truth_(and__16720__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26565_SHARP_));
} else {
return and__16720__auto__;
}
});
;})(inst_26867,inst_26868,inst_26869,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26871 = cljs.core.filter.call(null,inst_26870,files);
var inst_26872 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26873 = cljs.core.concat.call(null,inst_26871,inst_26872);
var state_26969__$1 = (function (){var statearr_26984 = state_26969;
(statearr_26984[(12)] = inst_26873);

(statearr_26984[(17)] = inst_26869);

(statearr_26984[(18)] = inst_26867);

return statearr_26984;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26985_27069 = state_26969__$1;
(statearr_26985_27069[(1)] = (16));

} else {
var statearr_26986_27070 = state_26969__$1;
(statearr_26986_27070[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (15))){
var inst_26857 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_26987_27071 = state_26969__$1;
(statearr_26987_27071[(2)] = inst_26857);

(statearr_26987_27071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (21))){
var inst_26883 = (state_26969[(19)]);
var inst_26883__$1 = (state_26969[(2)]);
var inst_26884 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26883__$1);
var state_26969__$1 = (function (){var statearr_26988 = state_26969;
(statearr_26988[(19)] = inst_26883__$1);

return statearr_26988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26969__$1,(22),inst_26884);
} else {
if((state_val_26970 === (31))){
var inst_26967 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26969__$1,inst_26967);
} else {
if((state_val_26970 === (32))){
var inst_26923 = (state_26969[(16)]);
var inst_26928 = inst_26923.cljs$lang$protocol_mask$partition0$;
var inst_26929 = (inst_26928 & (64));
var inst_26930 = inst_26923.cljs$core$ISeq$;
var inst_26931 = (inst_26929) || (inst_26930);
var state_26969__$1 = state_26969;
if(cljs.core.truth_(inst_26931)){
var statearr_26989_27072 = state_26969__$1;
(statearr_26989_27072[(1)] = (35));

} else {
var statearr_26990_27073 = state_26969__$1;
(statearr_26990_27073[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (40))){
var inst_26944 = (state_26969[(20)]);
var inst_26943 = (state_26969[(2)]);
var inst_26944__$1 = cljs.core.get.call(null,inst_26943,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26945 = cljs.core.get.call(null,inst_26943,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26946 = cljs.core.not_empty.call(null,inst_26944__$1);
var state_26969__$1 = (function (){var statearr_26991 = state_26969;
(statearr_26991[(21)] = inst_26945);

(statearr_26991[(20)] = inst_26944__$1);

return statearr_26991;
})();
if(cljs.core.truth_(inst_26946)){
var statearr_26992_27074 = state_26969__$1;
(statearr_26992_27074[(1)] = (41));

} else {
var statearr_26993_27075 = state_26969__$1;
(statearr_26993_27075[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (33))){
var state_26969__$1 = state_26969;
var statearr_26994_27076 = state_26969__$1;
(statearr_26994_27076[(2)] = false);

(statearr_26994_27076[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (13))){
var inst_26843 = (state_26969[(22)]);
var inst_26847 = cljs.core.chunk_first.call(null,inst_26843);
var inst_26848 = cljs.core.chunk_rest.call(null,inst_26843);
var inst_26849 = cljs.core.count.call(null,inst_26847);
var inst_26830 = inst_26848;
var inst_26831 = inst_26847;
var inst_26832 = inst_26849;
var inst_26833 = (0);
var state_26969__$1 = (function (){var statearr_26995 = state_26969;
(statearr_26995[(7)] = inst_26832);

(statearr_26995[(8)] = inst_26831);

(statearr_26995[(9)] = inst_26830);

(statearr_26995[(10)] = inst_26833);

return statearr_26995;
})();
var statearr_26996_27077 = state_26969__$1;
(statearr_26996_27077[(2)] = null);

(statearr_26996_27077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (22))){
var inst_26887 = (state_26969[(23)]);
var inst_26883 = (state_26969[(19)]);
var inst_26886 = (state_26969[(24)]);
var inst_26891 = (state_26969[(25)]);
var inst_26886__$1 = (state_26969[(2)]);
var inst_26887__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26886__$1);
var inst_26888 = (function (){var all_files = inst_26883;
var res_SINGLEQUOTE_ = inst_26886__$1;
var res = inst_26887__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26887,inst_26883,inst_26886,inst_26891,inst_26886__$1,inst_26887__$1,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26566_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26566_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26887,inst_26883,inst_26886,inst_26891,inst_26886__$1,inst_26887__$1,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26889 = cljs.core.filter.call(null,inst_26888,inst_26886__$1);
var inst_26890 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26891__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26890);
var inst_26892 = cljs.core.not_empty.call(null,inst_26891__$1);
var state_26969__$1 = (function (){var statearr_26997 = state_26969;
(statearr_26997[(23)] = inst_26887__$1);

(statearr_26997[(24)] = inst_26886__$1);

(statearr_26997[(25)] = inst_26891__$1);

(statearr_26997[(26)] = inst_26889);

return statearr_26997;
})();
if(cljs.core.truth_(inst_26892)){
var statearr_26998_27078 = state_26969__$1;
(statearr_26998_27078[(1)] = (23));

} else {
var statearr_26999_27079 = state_26969__$1;
(statearr_26999_27079[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (36))){
var state_26969__$1 = state_26969;
var statearr_27000_27080 = state_26969__$1;
(statearr_27000_27080[(2)] = false);

(statearr_27000_27080[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (41))){
var inst_26944 = (state_26969[(20)]);
var inst_26948 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26949 = cljs.core.map.call(null,inst_26948,inst_26944);
var inst_26950 = cljs.core.pr_str.call(null,inst_26949);
var inst_26951 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26950)].join('');
var inst_26952 = figwheel.client.utils.log.call(null,inst_26951);
var state_26969__$1 = state_26969;
var statearr_27001_27081 = state_26969__$1;
(statearr_27001_27081[(2)] = inst_26952);

(statearr_27001_27081[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (43))){
var inst_26945 = (state_26969[(21)]);
var inst_26955 = (state_26969[(2)]);
var inst_26956 = cljs.core.not_empty.call(null,inst_26945);
var state_26969__$1 = (function (){var statearr_27002 = state_26969;
(statearr_27002[(27)] = inst_26955);

return statearr_27002;
})();
if(cljs.core.truth_(inst_26956)){
var statearr_27003_27082 = state_26969__$1;
(statearr_27003_27082[(1)] = (44));

} else {
var statearr_27004_27083 = state_26969__$1;
(statearr_27004_27083[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (29))){
var inst_26887 = (state_26969[(23)]);
var inst_26883 = (state_26969[(19)]);
var inst_26886 = (state_26969[(24)]);
var inst_26891 = (state_26969[(25)]);
var inst_26923 = (state_26969[(16)]);
var inst_26889 = (state_26969[(26)]);
var inst_26919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26922 = (function (){var all_files = inst_26883;
var res_SINGLEQUOTE_ = inst_26886;
var res = inst_26887;
var files_not_loaded = inst_26889;
var dependencies_that_loaded = inst_26891;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26883,inst_26886,inst_26891,inst_26923,inst_26889,inst_26919,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26921){
var map__27005 = p__26921;
var map__27005__$1 = ((((!((map__27005 == null)))?((((map__27005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27005):map__27005);
var namespace = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26883,inst_26886,inst_26891,inst_26923,inst_26889,inst_26919,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26923__$1 = cljs.core.group_by.call(null,inst_26922,inst_26889);
var inst_26925 = (inst_26923__$1 == null);
var inst_26926 = cljs.core.not.call(null,inst_26925);
var state_26969__$1 = (function (){var statearr_27007 = state_26969;
(statearr_27007[(28)] = inst_26919);

(statearr_27007[(16)] = inst_26923__$1);

return statearr_27007;
})();
if(inst_26926){
var statearr_27008_27084 = state_26969__$1;
(statearr_27008_27084[(1)] = (32));

} else {
var statearr_27009_27085 = state_26969__$1;
(statearr_27009_27085[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (44))){
var inst_26945 = (state_26969[(21)]);
var inst_26958 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26945);
var inst_26959 = cljs.core.pr_str.call(null,inst_26958);
var inst_26960 = [cljs.core.str("not required: "),cljs.core.str(inst_26959)].join('');
var inst_26961 = figwheel.client.utils.log.call(null,inst_26960);
var state_26969__$1 = state_26969;
var statearr_27010_27086 = state_26969__$1;
(statearr_27010_27086[(2)] = inst_26961);

(statearr_27010_27086[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (6))){
var inst_26864 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_27011_27087 = state_26969__$1;
(statearr_27011_27087[(2)] = inst_26864);

(statearr_27011_27087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (28))){
var inst_26889 = (state_26969[(26)]);
var inst_26916 = (state_26969[(2)]);
var inst_26917 = cljs.core.not_empty.call(null,inst_26889);
var state_26969__$1 = (function (){var statearr_27012 = state_26969;
(statearr_27012[(29)] = inst_26916);

return statearr_27012;
})();
if(cljs.core.truth_(inst_26917)){
var statearr_27013_27088 = state_26969__$1;
(statearr_27013_27088[(1)] = (29));

} else {
var statearr_27014_27089 = state_26969__$1;
(statearr_27014_27089[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (25))){
var inst_26887 = (state_26969[(23)]);
var inst_26903 = (state_26969[(2)]);
var inst_26904 = cljs.core.not_empty.call(null,inst_26887);
var state_26969__$1 = (function (){var statearr_27015 = state_26969;
(statearr_27015[(30)] = inst_26903);

return statearr_27015;
})();
if(cljs.core.truth_(inst_26904)){
var statearr_27016_27090 = state_26969__$1;
(statearr_27016_27090[(1)] = (26));

} else {
var statearr_27017_27091 = state_26969__$1;
(statearr_27017_27091[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (34))){
var inst_26938 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
if(cljs.core.truth_(inst_26938)){
var statearr_27018_27092 = state_26969__$1;
(statearr_27018_27092[(1)] = (38));

} else {
var statearr_27019_27093 = state_26969__$1;
(statearr_27019_27093[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (17))){
var state_26969__$1 = state_26969;
var statearr_27020_27094 = state_26969__$1;
(statearr_27020_27094[(2)] = recompile_dependents);

(statearr_27020_27094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (3))){
var state_26969__$1 = state_26969;
var statearr_27021_27095 = state_26969__$1;
(statearr_27021_27095[(2)] = null);

(statearr_27021_27095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (12))){
var inst_26860 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_27022_27096 = state_26969__$1;
(statearr_27022_27096[(2)] = inst_26860);

(statearr_27022_27096[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (2))){
var inst_26822 = (state_26969[(13)]);
var inst_26829 = cljs.core.seq.call(null,inst_26822);
var inst_26830 = inst_26829;
var inst_26831 = null;
var inst_26832 = (0);
var inst_26833 = (0);
var state_26969__$1 = (function (){var statearr_27023 = state_26969;
(statearr_27023[(7)] = inst_26832);

(statearr_27023[(8)] = inst_26831);

(statearr_27023[(9)] = inst_26830);

(statearr_27023[(10)] = inst_26833);

return statearr_27023;
})();
var statearr_27024_27097 = state_26969__$1;
(statearr_27024_27097[(2)] = null);

(statearr_27024_27097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (23))){
var inst_26887 = (state_26969[(23)]);
var inst_26883 = (state_26969[(19)]);
var inst_26886 = (state_26969[(24)]);
var inst_26891 = (state_26969[(25)]);
var inst_26889 = (state_26969[(26)]);
var inst_26894 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26896 = (function (){var all_files = inst_26883;
var res_SINGLEQUOTE_ = inst_26886;
var res = inst_26887;
var files_not_loaded = inst_26889;
var dependencies_that_loaded = inst_26891;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26883,inst_26886,inst_26891,inst_26889,inst_26894,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26895){
var map__27025 = p__26895;
var map__27025__$1 = ((((!((map__27025 == null)))?((((map__27025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27025):map__27025);
var request_url = cljs.core.get.call(null,map__27025__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26883,inst_26886,inst_26891,inst_26889,inst_26894,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26897 = cljs.core.reverse.call(null,inst_26891);
var inst_26898 = cljs.core.map.call(null,inst_26896,inst_26897);
var inst_26899 = cljs.core.pr_str.call(null,inst_26898);
var inst_26900 = figwheel.client.utils.log.call(null,inst_26899);
var state_26969__$1 = (function (){var statearr_27027 = state_26969;
(statearr_27027[(31)] = inst_26894);

return statearr_27027;
})();
var statearr_27028_27098 = state_26969__$1;
(statearr_27028_27098[(2)] = inst_26900);

(statearr_27028_27098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (35))){
var state_26969__$1 = state_26969;
var statearr_27029_27099 = state_26969__$1;
(statearr_27029_27099[(2)] = true);

(statearr_27029_27099[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (19))){
var inst_26873 = (state_26969[(12)]);
var inst_26879 = figwheel.client.file_reloading.expand_files.call(null,inst_26873);
var state_26969__$1 = state_26969;
var statearr_27030_27100 = state_26969__$1;
(statearr_27030_27100[(2)] = inst_26879);

(statearr_27030_27100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (11))){
var state_26969__$1 = state_26969;
var statearr_27031_27101 = state_26969__$1;
(statearr_27031_27101[(2)] = null);

(statearr_27031_27101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (9))){
var inst_26862 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_27032_27102 = state_26969__$1;
(statearr_27032_27102[(2)] = inst_26862);

(statearr_27032_27102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (5))){
var inst_26832 = (state_26969[(7)]);
var inst_26833 = (state_26969[(10)]);
var inst_26835 = (inst_26833 < inst_26832);
var inst_26836 = inst_26835;
var state_26969__$1 = state_26969;
if(cljs.core.truth_(inst_26836)){
var statearr_27033_27103 = state_26969__$1;
(statearr_27033_27103[(1)] = (7));

} else {
var statearr_27034_27104 = state_26969__$1;
(statearr_27034_27104[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (14))){
var inst_26843 = (state_26969[(22)]);
var inst_26852 = cljs.core.first.call(null,inst_26843);
var inst_26853 = figwheel.client.file_reloading.eval_body.call(null,inst_26852,opts);
var inst_26854 = cljs.core.next.call(null,inst_26843);
var inst_26830 = inst_26854;
var inst_26831 = null;
var inst_26832 = (0);
var inst_26833 = (0);
var state_26969__$1 = (function (){var statearr_27035 = state_26969;
(statearr_27035[(7)] = inst_26832);

(statearr_27035[(32)] = inst_26853);

(statearr_27035[(8)] = inst_26831);

(statearr_27035[(9)] = inst_26830);

(statearr_27035[(10)] = inst_26833);

return statearr_27035;
})();
var statearr_27036_27105 = state_26969__$1;
(statearr_27036_27105[(2)] = null);

(statearr_27036_27105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (45))){
var state_26969__$1 = state_26969;
var statearr_27037_27106 = state_26969__$1;
(statearr_27037_27106[(2)] = null);

(statearr_27037_27106[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (26))){
var inst_26887 = (state_26969[(23)]);
var inst_26883 = (state_26969[(19)]);
var inst_26886 = (state_26969[(24)]);
var inst_26891 = (state_26969[(25)]);
var inst_26889 = (state_26969[(26)]);
var inst_26906 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26908 = (function (){var all_files = inst_26883;
var res_SINGLEQUOTE_ = inst_26886;
var res = inst_26887;
var files_not_loaded = inst_26889;
var dependencies_that_loaded = inst_26891;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26883,inst_26886,inst_26891,inst_26889,inst_26906,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26907){
var map__27038 = p__26907;
var map__27038__$1 = ((((!((map__27038 == null)))?((((map__27038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27038):map__27038);
var namespace = cljs.core.get.call(null,map__27038__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27038__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26883,inst_26886,inst_26891,inst_26889,inst_26906,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26909 = cljs.core.map.call(null,inst_26908,inst_26887);
var inst_26910 = cljs.core.pr_str.call(null,inst_26909);
var inst_26911 = figwheel.client.utils.log.call(null,inst_26910);
var inst_26912 = (function (){var all_files = inst_26883;
var res_SINGLEQUOTE_ = inst_26886;
var res = inst_26887;
var files_not_loaded = inst_26889;
var dependencies_that_loaded = inst_26891;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26883,inst_26886,inst_26891,inst_26889,inst_26906,inst_26908,inst_26909,inst_26910,inst_26911,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26887,inst_26883,inst_26886,inst_26891,inst_26889,inst_26906,inst_26908,inst_26909,inst_26910,inst_26911,state_val_26970,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26913 = setTimeout(inst_26912,(10));
var state_26969__$1 = (function (){var statearr_27040 = state_26969;
(statearr_27040[(33)] = inst_26911);

(statearr_27040[(34)] = inst_26906);

return statearr_27040;
})();
var statearr_27041_27107 = state_26969__$1;
(statearr_27041_27107[(2)] = inst_26913);

(statearr_27041_27107[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (16))){
var state_26969__$1 = state_26969;
var statearr_27042_27108 = state_26969__$1;
(statearr_27042_27108[(2)] = reload_dependents);

(statearr_27042_27108[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (38))){
var inst_26923 = (state_26969[(16)]);
var inst_26940 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26923);
var state_26969__$1 = state_26969;
var statearr_27043_27109 = state_26969__$1;
(statearr_27043_27109[(2)] = inst_26940);

(statearr_27043_27109[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (30))){
var state_26969__$1 = state_26969;
var statearr_27044_27110 = state_26969__$1;
(statearr_27044_27110[(2)] = null);

(statearr_27044_27110[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (10))){
var inst_26843 = (state_26969[(22)]);
var inst_26845 = cljs.core.chunked_seq_QMARK_.call(null,inst_26843);
var state_26969__$1 = state_26969;
if(inst_26845){
var statearr_27045_27111 = state_26969__$1;
(statearr_27045_27111[(1)] = (13));

} else {
var statearr_27046_27112 = state_26969__$1;
(statearr_27046_27112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (18))){
var inst_26877 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
if(cljs.core.truth_(inst_26877)){
var statearr_27047_27113 = state_26969__$1;
(statearr_27047_27113[(1)] = (19));

} else {
var statearr_27048_27114 = state_26969__$1;
(statearr_27048_27114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (42))){
var state_26969__$1 = state_26969;
var statearr_27049_27115 = state_26969__$1;
(statearr_27049_27115[(2)] = null);

(statearr_27049_27115[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (37))){
var inst_26935 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_27050_27116 = state_26969__$1;
(statearr_27050_27116[(2)] = inst_26935);

(statearr_27050_27116[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (8))){
var inst_26843 = (state_26969[(22)]);
var inst_26830 = (state_26969[(9)]);
var inst_26843__$1 = cljs.core.seq.call(null,inst_26830);
var state_26969__$1 = (function (){var statearr_27051 = state_26969;
(statearr_27051[(22)] = inst_26843__$1);

return statearr_27051;
})();
if(inst_26843__$1){
var statearr_27052_27117 = state_26969__$1;
(statearr_27052_27117[(1)] = (10));

} else {
var statearr_27053_27118 = state_26969__$1;
(statearr_27053_27118[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23230__auto__,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto____0 = (function (){
var statearr_27057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27057[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto__);

(statearr_27057[(1)] = (1));

return statearr_27057;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto____1 = (function (state_26969){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_26969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e27058){if((e27058 instanceof Object)){
var ex__23234__auto__ = e27058;
var statearr_27059_27119 = state_26969;
(statearr_27059_27119[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27120 = state_26969;
state_26969 = G__27120;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto__ = function(state_26969){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto____1.call(this,state_26969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23344__auto__ = (function (){var statearr_27060 = f__23343__auto__.call(null);
(statearr_27060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_27060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__,map__26815,map__26815__$1,opts,before_jsload,on_jsload,reload_dependents,map__26816,map__26816__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23342__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27123,link){
var map__27126 = p__27123;
var map__27126__$1 = ((((!((map__27126 == null)))?((((map__27126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27126):map__27126);
var file = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27126,map__27126__$1,file){
return (function (p1__27121_SHARP_,p2__27122_SHARP_){
if(cljs.core._EQ_.call(null,p1__27121_SHARP_,p2__27122_SHARP_)){
return p1__27121_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27126,map__27126__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27132){
var map__27133 = p__27132;
var map__27133__$1 = ((((!((map__27133 == null)))?((((map__27133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27133):map__27133);
var match_length = cljs.core.get.call(null,map__27133__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27133__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27128_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27128_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27135 = [];
var len__17790__auto___27138 = arguments.length;
var i__17791__auto___27139 = (0);
while(true){
if((i__17791__auto___27139 < len__17790__auto___27138)){
args27135.push((arguments[i__17791__auto___27139]));

var G__27140 = (i__17791__auto___27139 + (1));
i__17791__auto___27139 = G__27140;
continue;
} else {
}
break;
}

var G__27137 = args27135.length;
switch (G__27137) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27135.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27142_SHARP_,p2__27143_SHARP_){
return cljs.core.assoc.call(null,p1__27142_SHARP_,cljs.core.get.call(null,p2__27143_SHARP_,key),p2__27143_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27144){
var map__27147 = p__27144;
var map__27147__$1 = ((((!((map__27147 == null)))?((((map__27147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27147):map__27147);
var f_data = map__27147__$1;
var file = cljs.core.get.call(null,map__27147__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27149,files_msg){
var map__27156 = p__27149;
var map__27156__$1 = ((((!((map__27156 == null)))?((((map__27156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27156):map__27156);
var opts = map__27156__$1;
var on_cssload = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27158_27162 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27159_27163 = null;
var count__27160_27164 = (0);
var i__27161_27165 = (0);
while(true){
if((i__27161_27165 < count__27160_27164)){
var f_27166 = cljs.core._nth.call(null,chunk__27159_27163,i__27161_27165);
figwheel.client.file_reloading.reload_css_file.call(null,f_27166);

var G__27167 = seq__27158_27162;
var G__27168 = chunk__27159_27163;
var G__27169 = count__27160_27164;
var G__27170 = (i__27161_27165 + (1));
seq__27158_27162 = G__27167;
chunk__27159_27163 = G__27168;
count__27160_27164 = G__27169;
i__27161_27165 = G__27170;
continue;
} else {
var temp__4425__auto___27171 = cljs.core.seq.call(null,seq__27158_27162);
if(temp__4425__auto___27171){
var seq__27158_27172__$1 = temp__4425__auto___27171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27158_27172__$1)){
var c__17535__auto___27173 = cljs.core.chunk_first.call(null,seq__27158_27172__$1);
var G__27174 = cljs.core.chunk_rest.call(null,seq__27158_27172__$1);
var G__27175 = c__17535__auto___27173;
var G__27176 = cljs.core.count.call(null,c__17535__auto___27173);
var G__27177 = (0);
seq__27158_27162 = G__27174;
chunk__27159_27163 = G__27175;
count__27160_27164 = G__27176;
i__27161_27165 = G__27177;
continue;
} else {
var f_27178 = cljs.core.first.call(null,seq__27158_27172__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27178);

var G__27179 = cljs.core.next.call(null,seq__27158_27172__$1);
var G__27180 = null;
var G__27181 = (0);
var G__27182 = (0);
seq__27158_27162 = G__27179;
chunk__27159_27163 = G__27180;
count__27160_27164 = G__27181;
i__27161_27165 = G__27182;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27156,map__27156__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27156,map__27156__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map