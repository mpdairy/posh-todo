// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17797__auto__ = [];
var len__17790__auto___27269 = arguments.length;
var i__17791__auto___27270 = (0);
while(true){
if((i__17791__auto___27270 < len__17790__auto___27269)){
args__17797__auto__.push((arguments[i__17791__auto___27270]));

var G__27271 = (i__17791__auto___27270 + (1));
i__17791__auto___27270 = G__27271;
continue;
} else {
}
break;
}

var argseq__17798__auto__ = ((((2) < args__17797__auto__.length))?(new cljs.core.IndexedSeq(args__17797__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17798__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27261_27272 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27262_27273 = null;
var count__27263_27274 = (0);
var i__27264_27275 = (0);
while(true){
if((i__27264_27275 < count__27263_27274)){
var k_27276 = cljs.core._nth.call(null,chunk__27262_27273,i__27264_27275);
e.setAttribute(cljs.core.name.call(null,k_27276),cljs.core.get.call(null,attrs,k_27276));

var G__27277 = seq__27261_27272;
var G__27278 = chunk__27262_27273;
var G__27279 = count__27263_27274;
var G__27280 = (i__27264_27275 + (1));
seq__27261_27272 = G__27277;
chunk__27262_27273 = G__27278;
count__27263_27274 = G__27279;
i__27264_27275 = G__27280;
continue;
} else {
var temp__4425__auto___27281 = cljs.core.seq.call(null,seq__27261_27272);
if(temp__4425__auto___27281){
var seq__27261_27282__$1 = temp__4425__auto___27281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27261_27282__$1)){
var c__17535__auto___27283 = cljs.core.chunk_first.call(null,seq__27261_27282__$1);
var G__27284 = cljs.core.chunk_rest.call(null,seq__27261_27282__$1);
var G__27285 = c__17535__auto___27283;
var G__27286 = cljs.core.count.call(null,c__17535__auto___27283);
var G__27287 = (0);
seq__27261_27272 = G__27284;
chunk__27262_27273 = G__27285;
count__27263_27274 = G__27286;
i__27264_27275 = G__27287;
continue;
} else {
var k_27288 = cljs.core.first.call(null,seq__27261_27282__$1);
e.setAttribute(cljs.core.name.call(null,k_27288),cljs.core.get.call(null,attrs,k_27288));

var G__27289 = cljs.core.next.call(null,seq__27261_27282__$1);
var G__27290 = null;
var G__27291 = (0);
var G__27292 = (0);
seq__27261_27272 = G__27289;
chunk__27262_27273 = G__27290;
count__27263_27274 = G__27291;
i__27264_27275 = G__27292;
continue;
}
} else {
}
}
break;
}

var seq__27265_27293 = cljs.core.seq.call(null,children);
var chunk__27266_27294 = null;
var count__27267_27295 = (0);
var i__27268_27296 = (0);
while(true){
if((i__27268_27296 < count__27267_27295)){
var ch_27297 = cljs.core._nth.call(null,chunk__27266_27294,i__27268_27296);
e.appendChild(ch_27297);

var G__27298 = seq__27265_27293;
var G__27299 = chunk__27266_27294;
var G__27300 = count__27267_27295;
var G__27301 = (i__27268_27296 + (1));
seq__27265_27293 = G__27298;
chunk__27266_27294 = G__27299;
count__27267_27295 = G__27300;
i__27268_27296 = G__27301;
continue;
} else {
var temp__4425__auto___27302 = cljs.core.seq.call(null,seq__27265_27293);
if(temp__4425__auto___27302){
var seq__27265_27303__$1 = temp__4425__auto___27302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27265_27303__$1)){
var c__17535__auto___27304 = cljs.core.chunk_first.call(null,seq__27265_27303__$1);
var G__27305 = cljs.core.chunk_rest.call(null,seq__27265_27303__$1);
var G__27306 = c__17535__auto___27304;
var G__27307 = cljs.core.count.call(null,c__17535__auto___27304);
var G__27308 = (0);
seq__27265_27293 = G__27305;
chunk__27266_27294 = G__27306;
count__27267_27295 = G__27307;
i__27268_27296 = G__27308;
continue;
} else {
var ch_27309 = cljs.core.first.call(null,seq__27265_27303__$1);
e.appendChild(ch_27309);

var G__27310 = cljs.core.next.call(null,seq__27265_27303__$1);
var G__27311 = null;
var G__27312 = (0);
var G__27313 = (0);
seq__27265_27293 = G__27310;
chunk__27266_27294 = G__27311;
count__27267_27295 = G__27312;
i__27268_27296 = G__27313;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27258){
var G__27259 = cljs.core.first.call(null,seq27258);
var seq27258__$1 = cljs.core.next.call(null,seq27258);
var G__27260 = cljs.core.first.call(null,seq27258__$1);
var seq27258__$2 = cljs.core.next.call(null,seq27258__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27259,G__27260,seq27258__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17648__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17649__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17645__auto__,prefer_table__17646__auto__,method_cache__17647__auto__,cached_hierarchy__17648__auto__,hierarchy__17649__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17645__auto__,prefer_table__17646__auto__,method_cache__17647__auto__,cached_hierarchy__17648__auto__,hierarchy__17649__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17649__auto__,method_table__17645__auto__,prefer_table__17646__auto__,method_cache__17647__auto__,cached_hierarchy__17648__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27314 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27314.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27314.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27314.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27314);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27315,st_map){
var map__27320 = p__27315;
var map__27320__$1 = ((((!((map__27320 == null)))?((((map__27320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27320):map__27320);
var container_el = cljs.core.get.call(null,map__27320__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27320,map__27320__$1,container_el){
return (function (p__27322){
var vec__27323 = p__27322;
var k = cljs.core.nth.call(null,vec__27323,(0),null);
var v = cljs.core.nth.call(null,vec__27323,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27320,map__27320__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27324,dom_str){
var map__27327 = p__27324;
var map__27327__$1 = ((((!((map__27327 == null)))?((((map__27327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27327):map__27327);
var c = map__27327__$1;
var content_area_el = cljs.core.get.call(null,map__27327__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27329){
var map__27332 = p__27329;
var map__27332__$1 = ((((!((map__27332 == null)))?((((map__27332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27332):map__27332);
var content_area_el = cljs.core.get.call(null,map__27332__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__){
return (function (state_27375){
var state_val_27376 = (state_27375[(1)]);
if((state_val_27376 === (1))){
var inst_27360 = (state_27375[(7)]);
var inst_27360__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27361 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27362 = ["10px","10px","100%","68px","1.0"];
var inst_27363 = cljs.core.PersistentHashMap.fromArrays(inst_27361,inst_27362);
var inst_27364 = cljs.core.merge.call(null,inst_27363,style);
var inst_27365 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27360__$1,inst_27364);
var inst_27366 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27360__$1,msg);
var inst_27367 = cljs.core.async.timeout.call(null,(300));
var state_27375__$1 = (function (){var statearr_27377 = state_27375;
(statearr_27377[(8)] = inst_27365);

(statearr_27377[(9)] = inst_27366);

(statearr_27377[(7)] = inst_27360__$1);

return statearr_27377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27375__$1,(2),inst_27367);
} else {
if((state_val_27376 === (2))){
var inst_27360 = (state_27375[(7)]);
var inst_27369 = (state_27375[(2)]);
var inst_27370 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27371 = ["auto"];
var inst_27372 = cljs.core.PersistentHashMap.fromArrays(inst_27370,inst_27371);
var inst_27373 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27360,inst_27372);
var state_27375__$1 = (function (){var statearr_27378 = state_27375;
(statearr_27378[(10)] = inst_27369);

return statearr_27378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27375__$1,inst_27373);
} else {
return null;
}
}
});})(c__23342__auto__))
;
return ((function (switch__23230__auto__,c__23342__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto____0 = (function (){
var statearr_27382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27382[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto__);

(statearr_27382[(1)] = (1));

return statearr_27382;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto____1 = (function (state_27375){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_27375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e27383){if((e27383 instanceof Object)){
var ex__23234__auto__ = e27383;
var statearr_27384_27386 = state_27375;
(statearr_27384_27386[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27387 = state_27375;
state_27375 = G__27387;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto__ = function(state_27375){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto____1.call(this,state_27375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__))
})();
var state__23344__auto__ = (function (){var statearr_27385 = f__23343__auto__.call(null);
(statearr_27385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_27385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__))
);

return c__23342__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27389 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__27389,(0),null);
var ln = cljs.core.nth.call(null,vec__27389,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27392 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27392,(0),null);
var file_line = cljs.core.nth.call(null,vec__27392,(1),null);
var file_column = cljs.core.nth.call(null,vec__27392,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27392,file_name,file_line,file_column){
return (function (p1__27390_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27390_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27392,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16732__auto__ = file_line;
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
var and__16720__auto__ = cause;
if(cljs.core.truth_(and__16720__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16720__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27395 = figwheel.client.heads_up.ensure_container.call(null);
var map__27395__$1 = ((((!((map__27395 == null)))?((((map__27395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27395):map__27395);
var content_area_el = cljs.core.get.call(null,map__27395__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__){
return (function (state_27443){
var state_val_27444 = (state_27443[(1)]);
if((state_val_27444 === (1))){
var inst_27426 = (state_27443[(7)]);
var inst_27426__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27427 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27428 = ["0.0"];
var inst_27429 = cljs.core.PersistentHashMap.fromArrays(inst_27427,inst_27428);
var inst_27430 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27426__$1,inst_27429);
var inst_27431 = cljs.core.async.timeout.call(null,(300));
var state_27443__$1 = (function (){var statearr_27445 = state_27443;
(statearr_27445[(7)] = inst_27426__$1);

(statearr_27445[(8)] = inst_27430);

return statearr_27445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27443__$1,(2),inst_27431);
} else {
if((state_val_27444 === (2))){
var inst_27426 = (state_27443[(7)]);
var inst_27433 = (state_27443[(2)]);
var inst_27434 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27435 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27436 = cljs.core.PersistentHashMap.fromArrays(inst_27434,inst_27435);
var inst_27437 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27426,inst_27436);
var inst_27438 = cljs.core.async.timeout.call(null,(200));
var state_27443__$1 = (function (){var statearr_27446 = state_27443;
(statearr_27446[(9)] = inst_27437);

(statearr_27446[(10)] = inst_27433);

return statearr_27446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27443__$1,(3),inst_27438);
} else {
if((state_val_27444 === (3))){
var inst_27426 = (state_27443[(7)]);
var inst_27440 = (state_27443[(2)]);
var inst_27441 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27426,"");
var state_27443__$1 = (function (){var statearr_27447 = state_27443;
(statearr_27447[(11)] = inst_27440);

return statearr_27447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27443__$1,inst_27441);
} else {
return null;
}
}
}
});})(c__23342__auto__))
;
return ((function (switch__23230__auto__,c__23342__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23231__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23231__auto____0 = (function (){
var statearr_27451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27451[(0)] = figwheel$client$heads_up$clear_$_state_machine__23231__auto__);

(statearr_27451[(1)] = (1));

return statearr_27451;
});
var figwheel$client$heads_up$clear_$_state_machine__23231__auto____1 = (function (state_27443){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_27443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e27452){if((e27452 instanceof Object)){
var ex__23234__auto__ = e27452;
var statearr_27453_27455 = state_27443;
(statearr_27453_27455[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27456 = state_27443;
state_27443 = G__27456;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23231__auto__ = function(state_27443){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23231__auto____1.call(this,state_27443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23231__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23231__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__))
})();
var state__23344__auto__ = (function (){var statearr_27454 = f__23343__auto__.call(null);
(statearr_27454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_27454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__))
);

return c__23342__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (1))){
var inst_27478 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(2),inst_27478);
} else {
if((state_val_27489 === (2))){
var inst_27480 = (state_27488[(2)]);
var inst_27481 = cljs.core.async.timeout.call(null,(400));
var state_27488__$1 = (function (){var statearr_27490 = state_27488;
(statearr_27490[(7)] = inst_27480);

return statearr_27490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(3),inst_27481);
} else {
if((state_val_27489 === (3))){
var inst_27483 = (state_27488[(2)]);
var inst_27484 = figwheel.client.heads_up.clear.call(null);
var state_27488__$1 = (function (){var statearr_27491 = state_27488;
(statearr_27491[(8)] = inst_27483);

return statearr_27491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(4),inst_27484);
} else {
if((state_val_27489 === (4))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27488__$1,inst_27486);
} else {
return null;
}
}
}
}
});})(c__23342__auto__))
;
return ((function (switch__23230__auto__,c__23342__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto____0 = (function (){
var statearr_27495 = [null,null,null,null,null,null,null,null,null];
(statearr_27495[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto__);

(statearr_27495[(1)] = (1));

return statearr_27495;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto____1 = (function (state_27488){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_27488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e27496){if((e27496 instanceof Object)){
var ex__23234__auto__ = e27496;
var statearr_27497_27499 = state_27488;
(statearr_27497_27499[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27500 = state_27488;
state_27488 = G__27500;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__))
})();
var state__23344__auto__ = (function (){var statearr_27498 = f__23343__auto__.call(null);
(statearr_27498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_27498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__))
);

return c__23342__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map