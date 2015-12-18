// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27503 = cljs.core._EQ_;
var expr__27504 = (function (){var or__16732__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27503.call(null,"true",expr__27504))){
return true;
} else {
if(cljs.core.truth_(pred__27503.call(null,"false",expr__27504))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27504)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27506__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27507__i = 0, G__27507__a = new Array(arguments.length -  0);
while (G__27507__i < G__27507__a.length) {G__27507__a[G__27507__i] = arguments[G__27507__i + 0]; ++G__27507__i;}
  args = new cljs.core.IndexedSeq(G__27507__a,0);
} 
return G__27506__delegate.call(this,args);};
G__27506.cljs$lang$maxFixedArity = 0;
G__27506.cljs$lang$applyTo = (function (arglist__27508){
var args = cljs.core.seq(arglist__27508);
return G__27506__delegate(args);
});
G__27506.cljs$core$IFn$_invoke$arity$variadic = G__27506__delegate;
return G__27506;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27509){
var map__27512 = p__27509;
var map__27512__$1 = ((((!((map__27512 == null)))?((((map__27512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27512):map__27512);
var message = cljs.core.get.call(null,map__27512__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27512__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16732__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16720__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16720__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16720__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23342__auto___27674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___27674,ch){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___27674,ch){
return (function (state_27643){
var state_val_27644 = (state_27643[(1)]);
if((state_val_27644 === (7))){
var inst_27639 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27645_27675 = state_27643__$1;
(statearr_27645_27675[(2)] = inst_27639);

(statearr_27645_27675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (1))){
var state_27643__$1 = state_27643;
var statearr_27646_27676 = state_27643__$1;
(statearr_27646_27676[(2)] = null);

(statearr_27646_27676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (4))){
var inst_27596 = (state_27643[(7)]);
var inst_27596__$1 = (state_27643[(2)]);
var state_27643__$1 = (function (){var statearr_27647 = state_27643;
(statearr_27647[(7)] = inst_27596__$1);

return statearr_27647;
})();
if(cljs.core.truth_(inst_27596__$1)){
var statearr_27648_27677 = state_27643__$1;
(statearr_27648_27677[(1)] = (5));

} else {
var statearr_27649_27678 = state_27643__$1;
(statearr_27649_27678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (15))){
var inst_27603 = (state_27643[(8)]);
var inst_27618 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27603);
var inst_27619 = cljs.core.first.call(null,inst_27618);
var inst_27620 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27619);
var inst_27621 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27620)].join('');
var inst_27622 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27621);
var state_27643__$1 = state_27643;
var statearr_27650_27679 = state_27643__$1;
(statearr_27650_27679[(2)] = inst_27622);

(statearr_27650_27679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (13))){
var inst_27627 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27651_27680 = state_27643__$1;
(statearr_27651_27680[(2)] = inst_27627);

(statearr_27651_27680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (6))){
var state_27643__$1 = state_27643;
var statearr_27652_27681 = state_27643__$1;
(statearr_27652_27681[(2)] = null);

(statearr_27652_27681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (17))){
var inst_27625 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27653_27682 = state_27643__$1;
(statearr_27653_27682[(2)] = inst_27625);

(statearr_27653_27682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (3))){
var inst_27641 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27643__$1,inst_27641);
} else {
if((state_val_27644 === (12))){
var inst_27602 = (state_27643[(9)]);
var inst_27616 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27602,opts);
var state_27643__$1 = state_27643;
if(cljs.core.truth_(inst_27616)){
var statearr_27654_27683 = state_27643__$1;
(statearr_27654_27683[(1)] = (15));

} else {
var statearr_27655_27684 = state_27643__$1;
(statearr_27655_27684[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (2))){
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27643__$1,(4),ch);
} else {
if((state_val_27644 === (11))){
var inst_27603 = (state_27643[(8)]);
var inst_27608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27609 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27603);
var inst_27610 = cljs.core.async.timeout.call(null,(1000));
var inst_27611 = [inst_27609,inst_27610];
var inst_27612 = (new cljs.core.PersistentVector(null,2,(5),inst_27608,inst_27611,null));
var state_27643__$1 = state_27643;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27643__$1,(14),inst_27612);
} else {
if((state_val_27644 === (9))){
var inst_27603 = (state_27643[(8)]);
var inst_27629 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27630 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27603);
var inst_27631 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27630);
var inst_27632 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27631)].join('');
var inst_27633 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27632);
var state_27643__$1 = (function (){var statearr_27656 = state_27643;
(statearr_27656[(10)] = inst_27629);

return statearr_27656;
})();
var statearr_27657_27685 = state_27643__$1;
(statearr_27657_27685[(2)] = inst_27633);

(statearr_27657_27685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (5))){
var inst_27596 = (state_27643[(7)]);
var inst_27598 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27599 = (new cljs.core.PersistentArrayMap(null,2,inst_27598,null));
var inst_27600 = (new cljs.core.PersistentHashSet(null,inst_27599,null));
var inst_27601 = figwheel.client.focus_msgs.call(null,inst_27600,inst_27596);
var inst_27602 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27601);
var inst_27603 = cljs.core.first.call(null,inst_27601);
var inst_27604 = figwheel.client.autoload_QMARK_.call(null);
var state_27643__$1 = (function (){var statearr_27658 = state_27643;
(statearr_27658[(8)] = inst_27603);

(statearr_27658[(9)] = inst_27602);

return statearr_27658;
})();
if(cljs.core.truth_(inst_27604)){
var statearr_27659_27686 = state_27643__$1;
(statearr_27659_27686[(1)] = (8));

} else {
var statearr_27660_27687 = state_27643__$1;
(statearr_27660_27687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (14))){
var inst_27614 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27661_27688 = state_27643__$1;
(statearr_27661_27688[(2)] = inst_27614);

(statearr_27661_27688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (16))){
var state_27643__$1 = state_27643;
var statearr_27662_27689 = state_27643__$1;
(statearr_27662_27689[(2)] = null);

(statearr_27662_27689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (10))){
var inst_27635 = (state_27643[(2)]);
var state_27643__$1 = (function (){var statearr_27663 = state_27643;
(statearr_27663[(11)] = inst_27635);

return statearr_27663;
})();
var statearr_27664_27690 = state_27643__$1;
(statearr_27664_27690[(2)] = null);

(statearr_27664_27690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (8))){
var inst_27602 = (state_27643[(9)]);
var inst_27606 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27602,opts);
var state_27643__$1 = state_27643;
if(cljs.core.truth_(inst_27606)){
var statearr_27665_27691 = state_27643__$1;
(statearr_27665_27691[(1)] = (11));

} else {
var statearr_27666_27692 = state_27643__$1;
(statearr_27666_27692[(1)] = (12));

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
});})(c__23342__auto___27674,ch))
;
return ((function (switch__23230__auto__,c__23342__auto___27674,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23231__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23231__auto____0 = (function (){
var statearr_27670 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27670[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23231__auto__);

(statearr_27670[(1)] = (1));

return statearr_27670;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23231__auto____1 = (function (state_27643){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_27643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e27671){if((e27671 instanceof Object)){
var ex__23234__auto__ = e27671;
var statearr_27672_27693 = state_27643;
(statearr_27672_27693[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27694 = state_27643;
state_27643 = G__27694;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23231__auto__ = function(state_27643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23231__auto____1.call(this,state_27643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23231__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23231__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___27674,ch))
})();
var state__23344__auto__ = (function (){var statearr_27673 = f__23343__auto__.call(null);
(statearr_27673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___27674);

return statearr_27673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___27674,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27695_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27695_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27702 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27702){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27700 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27701 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27700,_STAR_print_newline_STAR_27701,base_path_27702){
return (function() { 
var G__27703__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27704__i = 0, G__27704__a = new Array(arguments.length -  0);
while (G__27704__i < G__27704__a.length) {G__27704__a[G__27704__i] = arguments[G__27704__i + 0]; ++G__27704__i;}
  args = new cljs.core.IndexedSeq(G__27704__a,0);
} 
return G__27703__delegate.call(this,args);};
G__27703.cljs$lang$maxFixedArity = 0;
G__27703.cljs$lang$applyTo = (function (arglist__27705){
var args = cljs.core.seq(arglist__27705);
return G__27703__delegate(args);
});
G__27703.cljs$core$IFn$_invoke$arity$variadic = G__27703__delegate;
return G__27703;
})()
;})(_STAR_print_fn_STAR_27700,_STAR_print_newline_STAR_27701,base_path_27702))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27701;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27700;
}}catch (e27699){if((e27699 instanceof Error)){
var e = e27699;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27702], null));
} else {
var e = e27699;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27702))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27706){
var map__27713 = p__27706;
var map__27713__$1 = ((((!((map__27713 == null)))?((((map__27713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27713):map__27713);
var opts = map__27713__$1;
var build_id = cljs.core.get.call(null,map__27713__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27713,map__27713__$1,opts,build_id){
return (function (p__27715){
var vec__27716 = p__27715;
var map__27717 = cljs.core.nth.call(null,vec__27716,(0),null);
var map__27717__$1 = ((((!((map__27717 == null)))?((((map__27717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27717):map__27717);
var msg = map__27717__$1;
var msg_name = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27716,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27716,map__27717,map__27717__$1,msg,msg_name,_,map__27713,map__27713__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27716,map__27717,map__27717__$1,msg,msg_name,_,map__27713,map__27713__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27713,map__27713__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27723){
var vec__27724 = p__27723;
var map__27725 = cljs.core.nth.call(null,vec__27724,(0),null);
var map__27725__$1 = ((((!((map__27725 == null)))?((((map__27725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27725):map__27725);
var msg = map__27725__$1;
var msg_name = cljs.core.get.call(null,map__27725__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27724,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27727){
var map__27737 = p__27727;
var map__27737__$1 = ((((!((map__27737 == null)))?((((map__27737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27737):map__27737);
var on_compile_warning = cljs.core.get.call(null,map__27737__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27737__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27737,map__27737__$1,on_compile_warning,on_compile_fail){
return (function (p__27739){
var vec__27740 = p__27739;
var map__27741 = cljs.core.nth.call(null,vec__27740,(0),null);
var map__27741__$1 = ((((!((map__27741 == null)))?((((map__27741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27741):map__27741);
var msg = map__27741__$1;
var msg_name = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27740,(1));
var pred__27743 = cljs.core._EQ_;
var expr__27744 = msg_name;
if(cljs.core.truth_(pred__27743.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27744))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27743.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27744))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27737,map__27737__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__,msg_hist,msg_names,msg){
return (function (state_27960){
var state_val_27961 = (state_27960[(1)]);
if((state_val_27961 === (7))){
var inst_27884 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27884)){
var statearr_27962_28008 = state_27960__$1;
(statearr_27962_28008[(1)] = (8));

} else {
var statearr_27963_28009 = state_27960__$1;
(statearr_27963_28009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (20))){
var inst_27954 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27964_28010 = state_27960__$1;
(statearr_27964_28010[(2)] = inst_27954);

(statearr_27964_28010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (27))){
var inst_27950 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27965_28011 = state_27960__$1;
(statearr_27965_28011[(2)] = inst_27950);

(statearr_27965_28011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (1))){
var inst_27877 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27877)){
var statearr_27966_28012 = state_27960__$1;
(statearr_27966_28012[(1)] = (2));

} else {
var statearr_27967_28013 = state_27960__$1;
(statearr_27967_28013[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (24))){
var inst_27952 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27968_28014 = state_27960__$1;
(statearr_27968_28014[(2)] = inst_27952);

(statearr_27968_28014[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (4))){
var inst_27958 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27960__$1,inst_27958);
} else {
if((state_val_27961 === (15))){
var inst_27956 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27969_28015 = state_27960__$1;
(statearr_27969_28015[(2)] = inst_27956);

(statearr_27969_28015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (21))){
var inst_27915 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27970_28016 = state_27960__$1;
(statearr_27970_28016[(2)] = inst_27915);

(statearr_27970_28016[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (31))){
var inst_27939 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27939)){
var statearr_27971_28017 = state_27960__$1;
(statearr_27971_28017[(1)] = (34));

} else {
var statearr_27972_28018 = state_27960__$1;
(statearr_27972_28018[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (32))){
var inst_27948 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27973_28019 = state_27960__$1;
(statearr_27973_28019[(2)] = inst_27948);

(statearr_27973_28019[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (33))){
var inst_27937 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27974_28020 = state_27960__$1;
(statearr_27974_28020[(2)] = inst_27937);

(statearr_27974_28020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (13))){
var inst_27898 = figwheel.client.heads_up.clear.call(null);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(16),inst_27898);
} else {
if((state_val_27961 === (22))){
var inst_27919 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27920 = figwheel.client.heads_up.append_message.call(null,inst_27919);
var state_27960__$1 = state_27960;
var statearr_27975_28021 = state_27960__$1;
(statearr_27975_28021[(2)] = inst_27920);

(statearr_27975_28021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (36))){
var inst_27946 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27976_28022 = state_27960__$1;
(statearr_27976_28022[(2)] = inst_27946);

(statearr_27976_28022[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (29))){
var inst_27930 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27977_28023 = state_27960__$1;
(statearr_27977_28023[(2)] = inst_27930);

(statearr_27977_28023[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (6))){
var inst_27879 = (state_27960[(7)]);
var state_27960__$1 = state_27960;
var statearr_27978_28024 = state_27960__$1;
(statearr_27978_28024[(2)] = inst_27879);

(statearr_27978_28024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (28))){
var inst_27926 = (state_27960[(2)]);
var inst_27927 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27928 = figwheel.client.heads_up.display_warning.call(null,inst_27927);
var state_27960__$1 = (function (){var statearr_27979 = state_27960;
(statearr_27979[(8)] = inst_27926);

return statearr_27979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(29),inst_27928);
} else {
if((state_val_27961 === (25))){
var inst_27924 = figwheel.client.heads_up.clear.call(null);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(28),inst_27924);
} else {
if((state_val_27961 === (34))){
var inst_27941 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(37),inst_27941);
} else {
if((state_val_27961 === (17))){
var inst_27906 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27980_28025 = state_27960__$1;
(statearr_27980_28025[(2)] = inst_27906);

(statearr_27980_28025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (3))){
var inst_27896 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27896)){
var statearr_27981_28026 = state_27960__$1;
(statearr_27981_28026[(1)] = (13));

} else {
var statearr_27982_28027 = state_27960__$1;
(statearr_27982_28027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (12))){
var inst_27892 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27983_28028 = state_27960__$1;
(statearr_27983_28028[(2)] = inst_27892);

(statearr_27983_28028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (2))){
var inst_27879 = (state_27960[(7)]);
var inst_27879__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27960__$1 = (function (){var statearr_27984 = state_27960;
(statearr_27984[(7)] = inst_27879__$1);

return statearr_27984;
})();
if(cljs.core.truth_(inst_27879__$1)){
var statearr_27985_28029 = state_27960__$1;
(statearr_27985_28029[(1)] = (5));

} else {
var statearr_27986_28030 = state_27960__$1;
(statearr_27986_28030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (23))){
var inst_27922 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27922)){
var statearr_27987_28031 = state_27960__$1;
(statearr_27987_28031[(1)] = (25));

} else {
var statearr_27988_28032 = state_27960__$1;
(statearr_27988_28032[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (35))){
var state_27960__$1 = state_27960;
var statearr_27989_28033 = state_27960__$1;
(statearr_27989_28033[(2)] = null);

(statearr_27989_28033[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (19))){
var inst_27917 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27917)){
var statearr_27990_28034 = state_27960__$1;
(statearr_27990_28034[(1)] = (22));

} else {
var statearr_27991_28035 = state_27960__$1;
(statearr_27991_28035[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (11))){
var inst_27888 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27992_28036 = state_27960__$1;
(statearr_27992_28036[(2)] = inst_27888);

(statearr_27992_28036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (9))){
var inst_27890 = figwheel.client.heads_up.clear.call(null);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(12),inst_27890);
} else {
if((state_val_27961 === (5))){
var inst_27881 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27960__$1 = state_27960;
var statearr_27993_28037 = state_27960__$1;
(statearr_27993_28037[(2)] = inst_27881);

(statearr_27993_28037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (14))){
var inst_27908 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27908)){
var statearr_27994_28038 = state_27960__$1;
(statearr_27994_28038[(1)] = (18));

} else {
var statearr_27995_28039 = state_27960__$1;
(statearr_27995_28039[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (26))){
var inst_27932 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27932)){
var statearr_27996_28040 = state_27960__$1;
(statearr_27996_28040[(1)] = (30));

} else {
var statearr_27997_28041 = state_27960__$1;
(statearr_27997_28041[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (16))){
var inst_27900 = (state_27960[(2)]);
var inst_27901 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27902 = figwheel.client.format_messages.call(null,inst_27901);
var inst_27903 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27904 = figwheel.client.heads_up.display_error.call(null,inst_27902,inst_27903);
var state_27960__$1 = (function (){var statearr_27998 = state_27960;
(statearr_27998[(9)] = inst_27900);

return statearr_27998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(17),inst_27904);
} else {
if((state_val_27961 === (30))){
var inst_27934 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27935 = figwheel.client.heads_up.display_warning.call(null,inst_27934);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(33),inst_27935);
} else {
if((state_val_27961 === (10))){
var inst_27894 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27999_28042 = state_27960__$1;
(statearr_27999_28042[(2)] = inst_27894);

(statearr_27999_28042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (18))){
var inst_27910 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27911 = figwheel.client.format_messages.call(null,inst_27910);
var inst_27912 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27913 = figwheel.client.heads_up.display_error.call(null,inst_27911,inst_27912);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(21),inst_27913);
} else {
if((state_val_27961 === (37))){
var inst_27943 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_28000_28043 = state_27960__$1;
(statearr_28000_28043[(2)] = inst_27943);

(statearr_28000_28043[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (8))){
var inst_27886 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(11),inst_27886);
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
});})(c__23342__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23230__auto__,c__23342__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto____0 = (function (){
var statearr_28004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28004[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto__);

(statearr_28004[(1)] = (1));

return statearr_28004;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto____1 = (function (state_27960){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_27960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e28005){if((e28005 instanceof Object)){
var ex__23234__auto__ = e28005;
var statearr_28006_28044 = state_27960;
(statearr_28006_28044[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28045 = state_27960;
state_27960 = G__28045;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto__ = function(state_27960){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto____1.call(this,state_27960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__,msg_hist,msg_names,msg))
})();
var state__23344__auto__ = (function (){var statearr_28007 = f__23343__auto__.call(null);
(statearr_28007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_28007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__,msg_hist,msg_names,msg))
);

return c__23342__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23342__auto___28108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___28108,ch){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___28108,ch){
return (function (state_28091){
var state_val_28092 = (state_28091[(1)]);
if((state_val_28092 === (1))){
var state_28091__$1 = state_28091;
var statearr_28093_28109 = state_28091__$1;
(statearr_28093_28109[(2)] = null);

(statearr_28093_28109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (2))){
var state_28091__$1 = state_28091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28091__$1,(4),ch);
} else {
if((state_val_28092 === (3))){
var inst_28089 = (state_28091[(2)]);
var state_28091__$1 = state_28091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28091__$1,inst_28089);
} else {
if((state_val_28092 === (4))){
var inst_28079 = (state_28091[(7)]);
var inst_28079__$1 = (state_28091[(2)]);
var state_28091__$1 = (function (){var statearr_28094 = state_28091;
(statearr_28094[(7)] = inst_28079__$1);

return statearr_28094;
})();
if(cljs.core.truth_(inst_28079__$1)){
var statearr_28095_28110 = state_28091__$1;
(statearr_28095_28110[(1)] = (5));

} else {
var statearr_28096_28111 = state_28091__$1;
(statearr_28096_28111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (5))){
var inst_28079 = (state_28091[(7)]);
var inst_28081 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28079);
var state_28091__$1 = state_28091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28091__$1,(8),inst_28081);
} else {
if((state_val_28092 === (6))){
var state_28091__$1 = state_28091;
var statearr_28097_28112 = state_28091__$1;
(statearr_28097_28112[(2)] = null);

(statearr_28097_28112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (7))){
var inst_28087 = (state_28091[(2)]);
var state_28091__$1 = state_28091;
var statearr_28098_28113 = state_28091__$1;
(statearr_28098_28113[(2)] = inst_28087);

(statearr_28098_28113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (8))){
var inst_28083 = (state_28091[(2)]);
var state_28091__$1 = (function (){var statearr_28099 = state_28091;
(statearr_28099[(8)] = inst_28083);

return statearr_28099;
})();
var statearr_28100_28114 = state_28091__$1;
(statearr_28100_28114[(2)] = null);

(statearr_28100_28114[(1)] = (2));


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
});})(c__23342__auto___28108,ch))
;
return ((function (switch__23230__auto__,c__23342__auto___28108,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23231__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23231__auto____0 = (function (){
var statearr_28104 = [null,null,null,null,null,null,null,null,null];
(statearr_28104[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23231__auto__);

(statearr_28104[(1)] = (1));

return statearr_28104;
});
var figwheel$client$heads_up_plugin_$_state_machine__23231__auto____1 = (function (state_28091){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_28091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e28105){if((e28105 instanceof Object)){
var ex__23234__auto__ = e28105;
var statearr_28106_28115 = state_28091;
(statearr_28106_28115[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28116 = state_28091;
state_28091 = G__28116;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23231__auto__ = function(state_28091){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23231__auto____1.call(this,state_28091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23231__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23231__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___28108,ch))
})();
var state__23344__auto__ = (function (){var statearr_28107 = f__23343__auto__.call(null);
(statearr_28107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___28108);

return statearr_28107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___28108,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__){
return (function (state_28137){
var state_val_28138 = (state_28137[(1)]);
if((state_val_28138 === (1))){
var inst_28132 = cljs.core.async.timeout.call(null,(3000));
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(2),inst_28132);
} else {
if((state_val_28138 === (2))){
var inst_28134 = (state_28137[(2)]);
var inst_28135 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28137__$1 = (function (){var statearr_28139 = state_28137;
(statearr_28139[(7)] = inst_28134);

return statearr_28139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28137__$1,inst_28135);
} else {
return null;
}
}
});})(c__23342__auto__))
;
return ((function (switch__23230__auto__,c__23342__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23231__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23231__auto____0 = (function (){
var statearr_28143 = [null,null,null,null,null,null,null,null];
(statearr_28143[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23231__auto__);

(statearr_28143[(1)] = (1));

return statearr_28143;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23231__auto____1 = (function (state_28137){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_28137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e28144){if((e28144 instanceof Object)){
var ex__23234__auto__ = e28144;
var statearr_28145_28147 = state_28137;
(statearr_28145_28147[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28148 = state_28137;
state_28137 = G__28148;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23231__auto__ = function(state_28137){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23231__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23231__auto____1.call(this,state_28137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23231__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23231__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__))
})();
var state__23344__auto__ = (function (){var statearr_28146 = f__23343__auto__.call(null);
(statearr_28146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_28146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__))
);

return c__23342__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28149){
var map__28156 = p__28149;
var map__28156__$1 = ((((!((map__28156 == null)))?((((map__28156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28156):map__28156);
var ed = map__28156__$1;
var formatted_exception = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28158_28162 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28159_28163 = null;
var count__28160_28164 = (0);
var i__28161_28165 = (0);
while(true){
if((i__28161_28165 < count__28160_28164)){
var msg_28166 = cljs.core._nth.call(null,chunk__28159_28163,i__28161_28165);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28166);

var G__28167 = seq__28158_28162;
var G__28168 = chunk__28159_28163;
var G__28169 = count__28160_28164;
var G__28170 = (i__28161_28165 + (1));
seq__28158_28162 = G__28167;
chunk__28159_28163 = G__28168;
count__28160_28164 = G__28169;
i__28161_28165 = G__28170;
continue;
} else {
var temp__4425__auto___28171 = cljs.core.seq.call(null,seq__28158_28162);
if(temp__4425__auto___28171){
var seq__28158_28172__$1 = temp__4425__auto___28171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28158_28172__$1)){
var c__17535__auto___28173 = cljs.core.chunk_first.call(null,seq__28158_28172__$1);
var G__28174 = cljs.core.chunk_rest.call(null,seq__28158_28172__$1);
var G__28175 = c__17535__auto___28173;
var G__28176 = cljs.core.count.call(null,c__17535__auto___28173);
var G__28177 = (0);
seq__28158_28162 = G__28174;
chunk__28159_28163 = G__28175;
count__28160_28164 = G__28176;
i__28161_28165 = G__28177;
continue;
} else {
var msg_28178 = cljs.core.first.call(null,seq__28158_28172__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28178);

var G__28179 = cljs.core.next.call(null,seq__28158_28172__$1);
var G__28180 = null;
var G__28181 = (0);
var G__28182 = (0);
seq__28158_28162 = G__28179;
chunk__28159_28163 = G__28180;
count__28160_28164 = G__28181;
i__28161_28165 = G__28182;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28183){
var map__28186 = p__28183;
var map__28186__$1 = ((((!((map__28186 == null)))?((((map__28186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28186):map__28186);
var w = map__28186__$1;
var message = cljs.core.get.call(null,map__28186__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16720__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16720__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16720__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28194 = cljs.core.seq.call(null,plugins);
var chunk__28195 = null;
var count__28196 = (0);
var i__28197 = (0);
while(true){
if((i__28197 < count__28196)){
var vec__28198 = cljs.core._nth.call(null,chunk__28195,i__28197);
var k = cljs.core.nth.call(null,vec__28198,(0),null);
var plugin = cljs.core.nth.call(null,vec__28198,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28200 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28194,chunk__28195,count__28196,i__28197,pl_28200,vec__28198,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28200.call(null,msg_hist);
});})(seq__28194,chunk__28195,count__28196,i__28197,pl_28200,vec__28198,k,plugin))
);
} else {
}

var G__28201 = seq__28194;
var G__28202 = chunk__28195;
var G__28203 = count__28196;
var G__28204 = (i__28197 + (1));
seq__28194 = G__28201;
chunk__28195 = G__28202;
count__28196 = G__28203;
i__28197 = G__28204;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28194);
if(temp__4425__auto__){
var seq__28194__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28194__$1)){
var c__17535__auto__ = cljs.core.chunk_first.call(null,seq__28194__$1);
var G__28205 = cljs.core.chunk_rest.call(null,seq__28194__$1);
var G__28206 = c__17535__auto__;
var G__28207 = cljs.core.count.call(null,c__17535__auto__);
var G__28208 = (0);
seq__28194 = G__28205;
chunk__28195 = G__28206;
count__28196 = G__28207;
i__28197 = G__28208;
continue;
} else {
var vec__28199 = cljs.core.first.call(null,seq__28194__$1);
var k = cljs.core.nth.call(null,vec__28199,(0),null);
var plugin = cljs.core.nth.call(null,vec__28199,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28209 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28194,chunk__28195,count__28196,i__28197,pl_28209,vec__28199,k,plugin,seq__28194__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28209.call(null,msg_hist);
});})(seq__28194,chunk__28195,count__28196,i__28197,pl_28209,vec__28199,k,plugin,seq__28194__$1,temp__4425__auto__))
);
} else {
}

var G__28210 = cljs.core.next.call(null,seq__28194__$1);
var G__28211 = null;
var G__28212 = (0);
var G__28213 = (0);
seq__28194 = G__28210;
chunk__28195 = G__28211;
count__28196 = G__28212;
i__28197 = G__28213;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28214 = [];
var len__17790__auto___28217 = arguments.length;
var i__17791__auto___28218 = (0);
while(true){
if((i__17791__auto___28218 < len__17790__auto___28217)){
args28214.push((arguments[i__17791__auto___28218]));

var G__28219 = (i__17791__auto___28218 + (1));
i__17791__auto___28218 = G__28219;
continue;
} else {
}
break;
}

var G__28216 = args28214.length;
switch (G__28216) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28214.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17797__auto__ = [];
var len__17790__auto___28225 = arguments.length;
var i__17791__auto___28226 = (0);
while(true){
if((i__17791__auto___28226 < len__17790__auto___28225)){
args__17797__auto__.push((arguments[i__17791__auto___28226]));

var G__28227 = (i__17791__auto___28226 + (1));
i__17791__auto___28226 = G__28227;
continue;
} else {
}
break;
}

var argseq__17798__auto__ = ((((0) < args__17797__auto__.length))?(new cljs.core.IndexedSeq(args__17797__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17798__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28222){
var map__28223 = p__28222;
var map__28223__$1 = ((((!((map__28223 == null)))?((((map__28223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28223):map__28223);
var opts = map__28223__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28221){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28221));
});

//# sourceMappingURL=client.js.map