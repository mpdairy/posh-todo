// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23387 = [];
var len__17790__auto___23393 = arguments.length;
var i__17791__auto___23394 = (0);
while(true){
if((i__17791__auto___23394 < len__17790__auto___23393)){
args23387.push((arguments[i__17791__auto___23394]));

var G__23395 = (i__17791__auto___23394 + (1));
i__17791__auto___23394 = G__23395;
continue;
} else {
}
break;
}

var G__23389 = args23387.length;
switch (G__23389) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23387.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23390 = (function (f,blockable,meta23391){
this.f = f;
this.blockable = blockable;
this.meta23391 = meta23391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23392,meta23391__$1){
var self__ = this;
var _23392__$1 = this;
return (new cljs.core.async.t_cljs$core$async23390(self__.f,self__.blockable,meta23391__$1));
});

cljs.core.async.t_cljs$core$async23390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23392){
var self__ = this;
var _23392__$1 = this;
return self__.meta23391;
});

cljs.core.async.t_cljs$core$async23390.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23391","meta23391",-298201288,null)], null);
});

cljs.core.async.t_cljs$core$async23390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23390";

cljs.core.async.t_cljs$core$async23390.cljs$lang$ctorPrWriter = (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async23390");
});

cljs.core.async.__GT_t_cljs$core$async23390 = (function cljs$core$async$__GT_t_cljs$core$async23390(f__$1,blockable__$1,meta23391){
return (new cljs.core.async.t_cljs$core$async23390(f__$1,blockable__$1,meta23391));
});

}

return (new cljs.core.async.t_cljs$core$async23390(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23399 = [];
var len__17790__auto___23402 = arguments.length;
var i__17791__auto___23403 = (0);
while(true){
if((i__17791__auto___23403 < len__17790__auto___23402)){
args23399.push((arguments[i__17791__auto___23403]));

var G__23404 = (i__17791__auto___23403 + (1));
i__17791__auto___23403 = G__23404;
continue;
} else {
}
break;
}

var G__23401 = args23399.length;
switch (G__23401) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23399.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23406 = [];
var len__17790__auto___23409 = arguments.length;
var i__17791__auto___23410 = (0);
while(true){
if((i__17791__auto___23410 < len__17790__auto___23409)){
args23406.push((arguments[i__17791__auto___23410]));

var G__23411 = (i__17791__auto___23410 + (1));
i__17791__auto___23410 = G__23411;
continue;
} else {
}
break;
}

var G__23408 = args23406.length;
switch (G__23408) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23406.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23413 = [];
var len__17790__auto___23416 = arguments.length;
var i__17791__auto___23417 = (0);
while(true){
if((i__17791__auto___23417 < len__17790__auto___23416)){
args23413.push((arguments[i__17791__auto___23417]));

var G__23418 = (i__17791__auto___23417 + (1));
i__17791__auto___23417 = G__23418;
continue;
} else {
}
break;
}

var G__23415 = args23413.length;
switch (G__23415) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23413.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23420 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23420);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23420,ret){
return (function (){
return fn1.call(null,val_23420);
});})(val_23420,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23421 = [];
var len__17790__auto___23424 = arguments.length;
var i__17791__auto___23425 = (0);
while(true){
if((i__17791__auto___23425 < len__17790__auto___23424)){
args23421.push((arguments[i__17791__auto___23425]));

var G__23426 = (i__17791__auto___23425 + (1));
i__17791__auto___23425 = G__23426;
continue;
} else {
}
break;
}

var G__23423 = args23421.length;
switch (G__23423) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23421.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17635__auto___23428 = n;
var x_23429 = (0);
while(true){
if((x_23429 < n__17635__auto___23428)){
(a[x_23429] = (0));

var G__23430 = (x_23429 + (1));
x_23429 = G__23430;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23431 = (i + (1));
i = G__23431;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23435 = (function (alt_flag,flag,meta23436){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23436 = meta23436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23437,meta23436__$1){
var self__ = this;
var _23437__$1 = this;
return (new cljs.core.async.t_cljs$core$async23435(self__.alt_flag,self__.flag,meta23436__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23437){
var self__ = this;
var _23437__$1 = this;
return self__.meta23436;
});})(flag))
;

cljs.core.async.t_cljs$core$async23435.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23435.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23436","meta23436",-1262727411,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23435";

cljs.core.async.t_cljs$core$async23435.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async23435");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23435 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23435(alt_flag__$1,flag__$1,meta23436){
return (new cljs.core.async.t_cljs$core$async23435(alt_flag__$1,flag__$1,meta23436));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23435(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23441 = (function (alt_handler,flag,cb,meta23442){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23442 = meta23442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23443,meta23442__$1){
var self__ = this;
var _23443__$1 = this;
return (new cljs.core.async.t_cljs$core$async23441(self__.alt_handler,self__.flag,self__.cb,meta23442__$1));
});

cljs.core.async.t_cljs$core$async23441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23443){
var self__ = this;
var _23443__$1 = this;
return self__.meta23442;
});

cljs.core.async.t_cljs$core$async23441.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23442","meta23442",-190767330,null)], null);
});

cljs.core.async.t_cljs$core$async23441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23441";

cljs.core.async.t_cljs$core$async23441.cljs$lang$ctorPrWriter = (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async23441");
});

cljs.core.async.__GT_t_cljs$core$async23441 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23441(alt_handler__$1,flag__$1,cb__$1,meta23442){
return (new cljs.core.async.t_cljs$core$async23441(alt_handler__$1,flag__$1,cb__$1,meta23442));
});

}

return (new cljs.core.async.t_cljs$core$async23441(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23444_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23444_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23445_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23445_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16732__auto__ = wport;
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23446 = (i + (1));
i = G__23446;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16732__auto__ = ret;
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16720__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16720__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16720__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17797__auto__ = [];
var len__17790__auto___23452 = arguments.length;
var i__17791__auto___23453 = (0);
while(true){
if((i__17791__auto___23453 < len__17790__auto___23452)){
args__17797__auto__.push((arguments[i__17791__auto___23453]));

var G__23454 = (i__17791__auto___23453 + (1));
i__17791__auto___23453 = G__23454;
continue;
} else {
}
break;
}

var argseq__17798__auto__ = ((((1) < args__17797__auto__.length))?(new cljs.core.IndexedSeq(args__17797__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17798__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23449){
var map__23450 = p__23449;
var map__23450__$1 = ((((!((map__23450 == null)))?((((map__23450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23450):map__23450);
var opts = map__23450__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23447){
var G__23448 = cljs.core.first.call(null,seq23447);
var seq23447__$1 = cljs.core.next.call(null,seq23447);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23448,seq23447__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23455 = [];
var len__17790__auto___23505 = arguments.length;
var i__17791__auto___23506 = (0);
while(true){
if((i__17791__auto___23506 < len__17790__auto___23505)){
args23455.push((arguments[i__17791__auto___23506]));

var G__23507 = (i__17791__auto___23506 + (1));
i__17791__auto___23506 = G__23507;
continue;
} else {
}
break;
}

var G__23457 = args23455.length;
switch (G__23457) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23455.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23342__auto___23509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___23509){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___23509){
return (function (state_23481){
var state_val_23482 = (state_23481[(1)]);
if((state_val_23482 === (7))){
var inst_23477 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23483_23510 = state_23481__$1;
(statearr_23483_23510[(2)] = inst_23477);

(statearr_23483_23510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (1))){
var state_23481__$1 = state_23481;
var statearr_23484_23511 = state_23481__$1;
(statearr_23484_23511[(2)] = null);

(statearr_23484_23511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (4))){
var inst_23460 = (state_23481[(7)]);
var inst_23460__$1 = (state_23481[(2)]);
var inst_23461 = (inst_23460__$1 == null);
var state_23481__$1 = (function (){var statearr_23485 = state_23481;
(statearr_23485[(7)] = inst_23460__$1);

return statearr_23485;
})();
if(cljs.core.truth_(inst_23461)){
var statearr_23486_23512 = state_23481__$1;
(statearr_23486_23512[(1)] = (5));

} else {
var statearr_23487_23513 = state_23481__$1;
(statearr_23487_23513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (13))){
var state_23481__$1 = state_23481;
var statearr_23488_23514 = state_23481__$1;
(statearr_23488_23514[(2)] = null);

(statearr_23488_23514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (6))){
var inst_23460 = (state_23481[(7)]);
var state_23481__$1 = state_23481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23481__$1,(11),to,inst_23460);
} else {
if((state_val_23482 === (3))){
var inst_23479 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23481__$1,inst_23479);
} else {
if((state_val_23482 === (12))){
var state_23481__$1 = state_23481;
var statearr_23489_23515 = state_23481__$1;
(statearr_23489_23515[(2)] = null);

(statearr_23489_23515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (2))){
var state_23481__$1 = state_23481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23481__$1,(4),from);
} else {
if((state_val_23482 === (11))){
var inst_23470 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23470)){
var statearr_23490_23516 = state_23481__$1;
(statearr_23490_23516[(1)] = (12));

} else {
var statearr_23491_23517 = state_23481__$1;
(statearr_23491_23517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (9))){
var state_23481__$1 = state_23481;
var statearr_23492_23518 = state_23481__$1;
(statearr_23492_23518[(2)] = null);

(statearr_23492_23518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (5))){
var state_23481__$1 = state_23481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23493_23519 = state_23481__$1;
(statearr_23493_23519[(1)] = (8));

} else {
var statearr_23494_23520 = state_23481__$1;
(statearr_23494_23520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (14))){
var inst_23475 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23495_23521 = state_23481__$1;
(statearr_23495_23521[(2)] = inst_23475);

(statearr_23495_23521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (10))){
var inst_23467 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23496_23522 = state_23481__$1;
(statearr_23496_23522[(2)] = inst_23467);

(statearr_23496_23522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (8))){
var inst_23464 = cljs.core.async.close_BANG_.call(null,to);
var state_23481__$1 = state_23481;
var statearr_23497_23523 = state_23481__$1;
(statearr_23497_23523[(2)] = inst_23464);

(statearr_23497_23523[(1)] = (10));


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
});})(c__23342__auto___23509))
;
return ((function (switch__23230__auto__,c__23342__auto___23509){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_23501 = [null,null,null,null,null,null,null,null];
(statearr_23501[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_23501[(1)] = (1));

return statearr_23501;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_23481){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_23481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e23502){if((e23502 instanceof Object)){
var ex__23234__auto__ = e23502;
var statearr_23503_23524 = state_23481;
(statearr_23503_23524[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23525 = state_23481;
state_23481 = G__23525;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_23481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_23481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___23509))
})();
var state__23344__auto__ = (function (){var statearr_23504 = f__23343__auto__.call(null);
(statearr_23504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___23509);

return statearr_23504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___23509))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23709){
var vec__23710 = p__23709;
var v = cljs.core.nth.call(null,vec__23710,(0),null);
var p = cljs.core.nth.call(null,vec__23710,(1),null);
var job = vec__23710;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23342__auto___23892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___23892,res,vec__23710,v,p,job,jobs,results){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___23892,res,vec__23710,v,p,job,jobs,results){
return (function (state_23715){
var state_val_23716 = (state_23715[(1)]);
if((state_val_23716 === (1))){
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23715__$1,(2),res,v);
} else {
if((state_val_23716 === (2))){
var inst_23712 = (state_23715[(2)]);
var inst_23713 = cljs.core.async.close_BANG_.call(null,res);
var state_23715__$1 = (function (){var statearr_23717 = state_23715;
(statearr_23717[(7)] = inst_23712);

return statearr_23717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23715__$1,inst_23713);
} else {
return null;
}
}
});})(c__23342__auto___23892,res,vec__23710,v,p,job,jobs,results))
;
return ((function (switch__23230__auto__,c__23342__auto___23892,res,vec__23710,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0 = (function (){
var statearr_23721 = [null,null,null,null,null,null,null,null];
(statearr_23721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__);

(statearr_23721[(1)] = (1));

return statearr_23721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1 = (function (state_23715){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_23715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e23722){if((e23722 instanceof Object)){
var ex__23234__auto__ = e23722;
var statearr_23723_23893 = state_23715;
(statearr_23723_23893[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23894 = state_23715;
state_23715 = G__23894;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = function(state_23715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1.call(this,state_23715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___23892,res,vec__23710,v,p,job,jobs,results))
})();
var state__23344__auto__ = (function (){var statearr_23724 = f__23343__auto__.call(null);
(statearr_23724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___23892);

return statearr_23724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___23892,res,vec__23710,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23725){
var vec__23726 = p__23725;
var v = cljs.core.nth.call(null,vec__23726,(0),null);
var p = cljs.core.nth.call(null,vec__23726,(1),null);
var job = vec__23726;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17635__auto___23895 = n;
var __23896 = (0);
while(true){
if((__23896 < n__17635__auto___23895)){
var G__23727_23897 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23727_23897) {
case "compute":
var c__23342__auto___23899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23896,c__23342__auto___23899,G__23727_23897,n__17635__auto___23895,jobs,results,process,async){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (__23896,c__23342__auto___23899,G__23727_23897,n__17635__auto___23895,jobs,results,process,async){
return (function (state_23740){
var state_val_23741 = (state_23740[(1)]);
if((state_val_23741 === (1))){
var state_23740__$1 = state_23740;
var statearr_23742_23900 = state_23740__$1;
(statearr_23742_23900[(2)] = null);

(statearr_23742_23900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (2))){
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23740__$1,(4),jobs);
} else {
if((state_val_23741 === (3))){
var inst_23738 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23740__$1,inst_23738);
} else {
if((state_val_23741 === (4))){
var inst_23730 = (state_23740[(2)]);
var inst_23731 = process.call(null,inst_23730);
var state_23740__$1 = state_23740;
if(cljs.core.truth_(inst_23731)){
var statearr_23743_23901 = state_23740__$1;
(statearr_23743_23901[(1)] = (5));

} else {
var statearr_23744_23902 = state_23740__$1;
(statearr_23744_23902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (5))){
var state_23740__$1 = state_23740;
var statearr_23745_23903 = state_23740__$1;
(statearr_23745_23903[(2)] = null);

(statearr_23745_23903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (6))){
var state_23740__$1 = state_23740;
var statearr_23746_23904 = state_23740__$1;
(statearr_23746_23904[(2)] = null);

(statearr_23746_23904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (7))){
var inst_23736 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23747_23905 = state_23740__$1;
(statearr_23747_23905[(2)] = inst_23736);

(statearr_23747_23905[(1)] = (3));


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
});})(__23896,c__23342__auto___23899,G__23727_23897,n__17635__auto___23895,jobs,results,process,async))
;
return ((function (__23896,switch__23230__auto__,c__23342__auto___23899,G__23727_23897,n__17635__auto___23895,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0 = (function (){
var statearr_23751 = [null,null,null,null,null,null,null];
(statearr_23751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__);

(statearr_23751[(1)] = (1));

return statearr_23751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1 = (function (state_23740){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_23740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e23752){if((e23752 instanceof Object)){
var ex__23234__auto__ = e23752;
var statearr_23753_23906 = state_23740;
(statearr_23753_23906[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23907 = state_23740;
state_23740 = G__23907;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = function(state_23740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1.call(this,state_23740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__;
})()
;})(__23896,switch__23230__auto__,c__23342__auto___23899,G__23727_23897,n__17635__auto___23895,jobs,results,process,async))
})();
var state__23344__auto__ = (function (){var statearr_23754 = f__23343__auto__.call(null);
(statearr_23754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___23899);

return statearr_23754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(__23896,c__23342__auto___23899,G__23727_23897,n__17635__auto___23895,jobs,results,process,async))
);


break;
case "async":
var c__23342__auto___23908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23896,c__23342__auto___23908,G__23727_23897,n__17635__auto___23895,jobs,results,process,async){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (__23896,c__23342__auto___23908,G__23727_23897,n__17635__auto___23895,jobs,results,process,async){
return (function (state_23767){
var state_val_23768 = (state_23767[(1)]);
if((state_val_23768 === (1))){
var state_23767__$1 = state_23767;
var statearr_23769_23909 = state_23767__$1;
(statearr_23769_23909[(2)] = null);

(statearr_23769_23909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (2))){
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(4),jobs);
} else {
if((state_val_23768 === (3))){
var inst_23765 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23767__$1,inst_23765);
} else {
if((state_val_23768 === (4))){
var inst_23757 = (state_23767[(2)]);
var inst_23758 = async.call(null,inst_23757);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23758)){
var statearr_23770_23910 = state_23767__$1;
(statearr_23770_23910[(1)] = (5));

} else {
var statearr_23771_23911 = state_23767__$1;
(statearr_23771_23911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (5))){
var state_23767__$1 = state_23767;
var statearr_23772_23912 = state_23767__$1;
(statearr_23772_23912[(2)] = null);

(statearr_23772_23912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (6))){
var state_23767__$1 = state_23767;
var statearr_23773_23913 = state_23767__$1;
(statearr_23773_23913[(2)] = null);

(statearr_23773_23913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (7))){
var inst_23763 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23774_23914 = state_23767__$1;
(statearr_23774_23914[(2)] = inst_23763);

(statearr_23774_23914[(1)] = (3));


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
});})(__23896,c__23342__auto___23908,G__23727_23897,n__17635__auto___23895,jobs,results,process,async))
;
return ((function (__23896,switch__23230__auto__,c__23342__auto___23908,G__23727_23897,n__17635__auto___23895,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0 = (function (){
var statearr_23778 = [null,null,null,null,null,null,null];
(statearr_23778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__);

(statearr_23778[(1)] = (1));

return statearr_23778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1 = (function (state_23767){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_23767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e23779){if((e23779 instanceof Object)){
var ex__23234__auto__ = e23779;
var statearr_23780_23915 = state_23767;
(statearr_23780_23915[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23916 = state_23767;
state_23767 = G__23916;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = function(state_23767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1.call(this,state_23767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__;
})()
;})(__23896,switch__23230__auto__,c__23342__auto___23908,G__23727_23897,n__17635__auto___23895,jobs,results,process,async))
})();
var state__23344__auto__ = (function (){var statearr_23781 = f__23343__auto__.call(null);
(statearr_23781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___23908);

return statearr_23781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(__23896,c__23342__auto___23908,G__23727_23897,n__17635__auto___23895,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23917 = (__23896 + (1));
__23896 = G__23917;
continue;
} else {
}
break;
}

var c__23342__auto___23918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___23918,jobs,results,process,async){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___23918,jobs,results,process,async){
return (function (state_23803){
var state_val_23804 = (state_23803[(1)]);
if((state_val_23804 === (1))){
var state_23803__$1 = state_23803;
var statearr_23805_23919 = state_23803__$1;
(statearr_23805_23919[(2)] = null);

(statearr_23805_23919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (2))){
var state_23803__$1 = state_23803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23803__$1,(4),from);
} else {
if((state_val_23804 === (3))){
var inst_23801 = (state_23803[(2)]);
var state_23803__$1 = state_23803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23803__$1,inst_23801);
} else {
if((state_val_23804 === (4))){
var inst_23784 = (state_23803[(7)]);
var inst_23784__$1 = (state_23803[(2)]);
var inst_23785 = (inst_23784__$1 == null);
var state_23803__$1 = (function (){var statearr_23806 = state_23803;
(statearr_23806[(7)] = inst_23784__$1);

return statearr_23806;
})();
if(cljs.core.truth_(inst_23785)){
var statearr_23807_23920 = state_23803__$1;
(statearr_23807_23920[(1)] = (5));

} else {
var statearr_23808_23921 = state_23803__$1;
(statearr_23808_23921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (5))){
var inst_23787 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23803__$1 = state_23803;
var statearr_23809_23922 = state_23803__$1;
(statearr_23809_23922[(2)] = inst_23787);

(statearr_23809_23922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (6))){
var inst_23789 = (state_23803[(8)]);
var inst_23784 = (state_23803[(7)]);
var inst_23789__$1 = cljs.core.async.chan.call(null,(1));
var inst_23790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23791 = [inst_23784,inst_23789__$1];
var inst_23792 = (new cljs.core.PersistentVector(null,2,(5),inst_23790,inst_23791,null));
var state_23803__$1 = (function (){var statearr_23810 = state_23803;
(statearr_23810[(8)] = inst_23789__$1);

return statearr_23810;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23803__$1,(8),jobs,inst_23792);
} else {
if((state_val_23804 === (7))){
var inst_23799 = (state_23803[(2)]);
var state_23803__$1 = state_23803;
var statearr_23811_23923 = state_23803__$1;
(statearr_23811_23923[(2)] = inst_23799);

(statearr_23811_23923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (8))){
var inst_23789 = (state_23803[(8)]);
var inst_23794 = (state_23803[(2)]);
var state_23803__$1 = (function (){var statearr_23812 = state_23803;
(statearr_23812[(9)] = inst_23794);

return statearr_23812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23803__$1,(9),results,inst_23789);
} else {
if((state_val_23804 === (9))){
var inst_23796 = (state_23803[(2)]);
var state_23803__$1 = (function (){var statearr_23813 = state_23803;
(statearr_23813[(10)] = inst_23796);

return statearr_23813;
})();
var statearr_23814_23924 = state_23803__$1;
(statearr_23814_23924[(2)] = null);

(statearr_23814_23924[(1)] = (2));


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
});})(c__23342__auto___23918,jobs,results,process,async))
;
return ((function (switch__23230__auto__,c__23342__auto___23918,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0 = (function (){
var statearr_23818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__);

(statearr_23818[(1)] = (1));

return statearr_23818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1 = (function (state_23803){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_23803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e23819){if((e23819 instanceof Object)){
var ex__23234__auto__ = e23819;
var statearr_23820_23925 = state_23803;
(statearr_23820_23925[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23926 = state_23803;
state_23803 = G__23926;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = function(state_23803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1.call(this,state_23803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___23918,jobs,results,process,async))
})();
var state__23344__auto__ = (function (){var statearr_23821 = f__23343__auto__.call(null);
(statearr_23821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___23918);

return statearr_23821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___23918,jobs,results,process,async))
);


var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__,jobs,results,process,async){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__,jobs,results,process,async){
return (function (state_23859){
var state_val_23860 = (state_23859[(1)]);
if((state_val_23860 === (7))){
var inst_23855 = (state_23859[(2)]);
var state_23859__$1 = state_23859;
var statearr_23861_23927 = state_23859__$1;
(statearr_23861_23927[(2)] = inst_23855);

(statearr_23861_23927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (20))){
var state_23859__$1 = state_23859;
var statearr_23862_23928 = state_23859__$1;
(statearr_23862_23928[(2)] = null);

(statearr_23862_23928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (1))){
var state_23859__$1 = state_23859;
var statearr_23863_23929 = state_23859__$1;
(statearr_23863_23929[(2)] = null);

(statearr_23863_23929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (4))){
var inst_23824 = (state_23859[(7)]);
var inst_23824__$1 = (state_23859[(2)]);
var inst_23825 = (inst_23824__$1 == null);
var state_23859__$1 = (function (){var statearr_23864 = state_23859;
(statearr_23864[(7)] = inst_23824__$1);

return statearr_23864;
})();
if(cljs.core.truth_(inst_23825)){
var statearr_23865_23930 = state_23859__$1;
(statearr_23865_23930[(1)] = (5));

} else {
var statearr_23866_23931 = state_23859__$1;
(statearr_23866_23931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (15))){
var inst_23837 = (state_23859[(8)]);
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23859__$1,(18),to,inst_23837);
} else {
if((state_val_23860 === (21))){
var inst_23850 = (state_23859[(2)]);
var state_23859__$1 = state_23859;
var statearr_23867_23932 = state_23859__$1;
(statearr_23867_23932[(2)] = inst_23850);

(statearr_23867_23932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (13))){
var inst_23852 = (state_23859[(2)]);
var state_23859__$1 = (function (){var statearr_23868 = state_23859;
(statearr_23868[(9)] = inst_23852);

return statearr_23868;
})();
var statearr_23869_23933 = state_23859__$1;
(statearr_23869_23933[(2)] = null);

(statearr_23869_23933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (6))){
var inst_23824 = (state_23859[(7)]);
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23859__$1,(11),inst_23824);
} else {
if((state_val_23860 === (17))){
var inst_23845 = (state_23859[(2)]);
var state_23859__$1 = state_23859;
if(cljs.core.truth_(inst_23845)){
var statearr_23870_23934 = state_23859__$1;
(statearr_23870_23934[(1)] = (19));

} else {
var statearr_23871_23935 = state_23859__$1;
(statearr_23871_23935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (3))){
var inst_23857 = (state_23859[(2)]);
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23859__$1,inst_23857);
} else {
if((state_val_23860 === (12))){
var inst_23834 = (state_23859[(10)]);
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23859__$1,(14),inst_23834);
} else {
if((state_val_23860 === (2))){
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23859__$1,(4),results);
} else {
if((state_val_23860 === (19))){
var state_23859__$1 = state_23859;
var statearr_23872_23936 = state_23859__$1;
(statearr_23872_23936[(2)] = null);

(statearr_23872_23936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (11))){
var inst_23834 = (state_23859[(2)]);
var state_23859__$1 = (function (){var statearr_23873 = state_23859;
(statearr_23873[(10)] = inst_23834);

return statearr_23873;
})();
var statearr_23874_23937 = state_23859__$1;
(statearr_23874_23937[(2)] = null);

(statearr_23874_23937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (9))){
var state_23859__$1 = state_23859;
var statearr_23875_23938 = state_23859__$1;
(statearr_23875_23938[(2)] = null);

(statearr_23875_23938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (5))){
var state_23859__$1 = state_23859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23876_23939 = state_23859__$1;
(statearr_23876_23939[(1)] = (8));

} else {
var statearr_23877_23940 = state_23859__$1;
(statearr_23877_23940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (14))){
var inst_23839 = (state_23859[(11)]);
var inst_23837 = (state_23859[(8)]);
var inst_23837__$1 = (state_23859[(2)]);
var inst_23838 = (inst_23837__$1 == null);
var inst_23839__$1 = cljs.core.not.call(null,inst_23838);
var state_23859__$1 = (function (){var statearr_23878 = state_23859;
(statearr_23878[(11)] = inst_23839__$1);

(statearr_23878[(8)] = inst_23837__$1);

return statearr_23878;
})();
if(inst_23839__$1){
var statearr_23879_23941 = state_23859__$1;
(statearr_23879_23941[(1)] = (15));

} else {
var statearr_23880_23942 = state_23859__$1;
(statearr_23880_23942[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (16))){
var inst_23839 = (state_23859[(11)]);
var state_23859__$1 = state_23859;
var statearr_23881_23943 = state_23859__$1;
(statearr_23881_23943[(2)] = inst_23839);

(statearr_23881_23943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (10))){
var inst_23831 = (state_23859[(2)]);
var state_23859__$1 = state_23859;
var statearr_23882_23944 = state_23859__$1;
(statearr_23882_23944[(2)] = inst_23831);

(statearr_23882_23944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (18))){
var inst_23842 = (state_23859[(2)]);
var state_23859__$1 = state_23859;
var statearr_23883_23945 = state_23859__$1;
(statearr_23883_23945[(2)] = inst_23842);

(statearr_23883_23945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (8))){
var inst_23828 = cljs.core.async.close_BANG_.call(null,to);
var state_23859__$1 = state_23859;
var statearr_23884_23946 = state_23859__$1;
(statearr_23884_23946[(2)] = inst_23828);

(statearr_23884_23946[(1)] = (10));


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
});})(c__23342__auto__,jobs,results,process,async))
;
return ((function (switch__23230__auto__,c__23342__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0 = (function (){
var statearr_23888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__);

(statearr_23888[(1)] = (1));

return statearr_23888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1 = (function (state_23859){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_23859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e23889){if((e23889 instanceof Object)){
var ex__23234__auto__ = e23889;
var statearr_23890_23947 = state_23859;
(statearr_23890_23947[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23948 = state_23859;
state_23859 = G__23948;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__ = function(state_23859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1.call(this,state_23859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__,jobs,results,process,async))
})();
var state__23344__auto__ = (function (){var statearr_23891 = f__23343__auto__.call(null);
(statearr_23891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_23891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__,jobs,results,process,async))
);

return c__23342__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23949 = [];
var len__17790__auto___23952 = arguments.length;
var i__17791__auto___23953 = (0);
while(true){
if((i__17791__auto___23953 < len__17790__auto___23952)){
args23949.push((arguments[i__17791__auto___23953]));

var G__23954 = (i__17791__auto___23953 + (1));
i__17791__auto___23953 = G__23954;
continue;
} else {
}
break;
}

var G__23951 = args23949.length;
switch (G__23951) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23949.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23956 = [];
var len__17790__auto___23959 = arguments.length;
var i__17791__auto___23960 = (0);
while(true){
if((i__17791__auto___23960 < len__17790__auto___23959)){
args23956.push((arguments[i__17791__auto___23960]));

var G__23961 = (i__17791__auto___23960 + (1));
i__17791__auto___23960 = G__23961;
continue;
} else {
}
break;
}

var G__23958 = args23956.length;
switch (G__23958) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23956.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23963 = [];
var len__17790__auto___24016 = arguments.length;
var i__17791__auto___24017 = (0);
while(true){
if((i__17791__auto___24017 < len__17790__auto___24016)){
args23963.push((arguments[i__17791__auto___24017]));

var G__24018 = (i__17791__auto___24017 + (1));
i__17791__auto___24017 = G__24018;
continue;
} else {
}
break;
}

var G__23965 = args23963.length;
switch (G__23965) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23963.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23342__auto___24020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___24020,tc,fc){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___24020,tc,fc){
return (function (state_23991){
var state_val_23992 = (state_23991[(1)]);
if((state_val_23992 === (7))){
var inst_23987 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_23993_24021 = state_23991__$1;
(statearr_23993_24021[(2)] = inst_23987);

(statearr_23993_24021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (1))){
var state_23991__$1 = state_23991;
var statearr_23994_24022 = state_23991__$1;
(statearr_23994_24022[(2)] = null);

(statearr_23994_24022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (4))){
var inst_23968 = (state_23991[(7)]);
var inst_23968__$1 = (state_23991[(2)]);
var inst_23969 = (inst_23968__$1 == null);
var state_23991__$1 = (function (){var statearr_23995 = state_23991;
(statearr_23995[(7)] = inst_23968__$1);

return statearr_23995;
})();
if(cljs.core.truth_(inst_23969)){
var statearr_23996_24023 = state_23991__$1;
(statearr_23996_24023[(1)] = (5));

} else {
var statearr_23997_24024 = state_23991__$1;
(statearr_23997_24024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (13))){
var state_23991__$1 = state_23991;
var statearr_23998_24025 = state_23991__$1;
(statearr_23998_24025[(2)] = null);

(statearr_23998_24025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (6))){
var inst_23968 = (state_23991[(7)]);
var inst_23974 = p.call(null,inst_23968);
var state_23991__$1 = state_23991;
if(cljs.core.truth_(inst_23974)){
var statearr_23999_24026 = state_23991__$1;
(statearr_23999_24026[(1)] = (9));

} else {
var statearr_24000_24027 = state_23991__$1;
(statearr_24000_24027[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (3))){
var inst_23989 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23991__$1,inst_23989);
} else {
if((state_val_23992 === (12))){
var state_23991__$1 = state_23991;
var statearr_24001_24028 = state_23991__$1;
(statearr_24001_24028[(2)] = null);

(statearr_24001_24028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (2))){
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23991__$1,(4),ch);
} else {
if((state_val_23992 === (11))){
var inst_23968 = (state_23991[(7)]);
var inst_23978 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23991__$1,(8),inst_23978,inst_23968);
} else {
if((state_val_23992 === (9))){
var state_23991__$1 = state_23991;
var statearr_24002_24029 = state_23991__$1;
(statearr_24002_24029[(2)] = tc);

(statearr_24002_24029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (5))){
var inst_23971 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23972 = cljs.core.async.close_BANG_.call(null,fc);
var state_23991__$1 = (function (){var statearr_24003 = state_23991;
(statearr_24003[(8)] = inst_23971);

return statearr_24003;
})();
var statearr_24004_24030 = state_23991__$1;
(statearr_24004_24030[(2)] = inst_23972);

(statearr_24004_24030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (14))){
var inst_23985 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_24005_24031 = state_23991__$1;
(statearr_24005_24031[(2)] = inst_23985);

(statearr_24005_24031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (10))){
var state_23991__$1 = state_23991;
var statearr_24006_24032 = state_23991__$1;
(statearr_24006_24032[(2)] = fc);

(statearr_24006_24032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (8))){
var inst_23980 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
if(cljs.core.truth_(inst_23980)){
var statearr_24007_24033 = state_23991__$1;
(statearr_24007_24033[(1)] = (12));

} else {
var statearr_24008_24034 = state_23991__$1;
(statearr_24008_24034[(1)] = (13));

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
});})(c__23342__auto___24020,tc,fc))
;
return ((function (switch__23230__auto__,c__23342__auto___24020,tc,fc){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_24012 = [null,null,null,null,null,null,null,null,null];
(statearr_24012[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_24012[(1)] = (1));

return statearr_24012;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_23991){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_23991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e24013){if((e24013 instanceof Object)){
var ex__23234__auto__ = e24013;
var statearr_24014_24035 = state_23991;
(statearr_24014_24035[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24036 = state_23991;
state_23991 = G__24036;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_23991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_23991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___24020,tc,fc))
})();
var state__23344__auto__ = (function (){var statearr_24015 = f__23343__auto__.call(null);
(statearr_24015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___24020);

return statearr_24015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___24020,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__){
return (function (state_24100){
var state_val_24101 = (state_24100[(1)]);
if((state_val_24101 === (7))){
var inst_24096 = (state_24100[(2)]);
var state_24100__$1 = state_24100;
var statearr_24102_24123 = state_24100__$1;
(statearr_24102_24123[(2)] = inst_24096);

(statearr_24102_24123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (1))){
var inst_24080 = init;
var state_24100__$1 = (function (){var statearr_24103 = state_24100;
(statearr_24103[(7)] = inst_24080);

return statearr_24103;
})();
var statearr_24104_24124 = state_24100__$1;
(statearr_24104_24124[(2)] = null);

(statearr_24104_24124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (4))){
var inst_24083 = (state_24100[(8)]);
var inst_24083__$1 = (state_24100[(2)]);
var inst_24084 = (inst_24083__$1 == null);
var state_24100__$1 = (function (){var statearr_24105 = state_24100;
(statearr_24105[(8)] = inst_24083__$1);

return statearr_24105;
})();
if(cljs.core.truth_(inst_24084)){
var statearr_24106_24125 = state_24100__$1;
(statearr_24106_24125[(1)] = (5));

} else {
var statearr_24107_24126 = state_24100__$1;
(statearr_24107_24126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (6))){
var inst_24083 = (state_24100[(8)]);
var inst_24080 = (state_24100[(7)]);
var inst_24087 = (state_24100[(9)]);
var inst_24087__$1 = f.call(null,inst_24080,inst_24083);
var inst_24088 = cljs.core.reduced_QMARK_.call(null,inst_24087__$1);
var state_24100__$1 = (function (){var statearr_24108 = state_24100;
(statearr_24108[(9)] = inst_24087__$1);

return statearr_24108;
})();
if(inst_24088){
var statearr_24109_24127 = state_24100__$1;
(statearr_24109_24127[(1)] = (8));

} else {
var statearr_24110_24128 = state_24100__$1;
(statearr_24110_24128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (3))){
var inst_24098 = (state_24100[(2)]);
var state_24100__$1 = state_24100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24100__$1,inst_24098);
} else {
if((state_val_24101 === (2))){
var state_24100__$1 = state_24100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24100__$1,(4),ch);
} else {
if((state_val_24101 === (9))){
var inst_24087 = (state_24100[(9)]);
var inst_24080 = inst_24087;
var state_24100__$1 = (function (){var statearr_24111 = state_24100;
(statearr_24111[(7)] = inst_24080);

return statearr_24111;
})();
var statearr_24112_24129 = state_24100__$1;
(statearr_24112_24129[(2)] = null);

(statearr_24112_24129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (5))){
var inst_24080 = (state_24100[(7)]);
var state_24100__$1 = state_24100;
var statearr_24113_24130 = state_24100__$1;
(statearr_24113_24130[(2)] = inst_24080);

(statearr_24113_24130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (10))){
var inst_24094 = (state_24100[(2)]);
var state_24100__$1 = state_24100;
var statearr_24114_24131 = state_24100__$1;
(statearr_24114_24131[(2)] = inst_24094);

(statearr_24114_24131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (8))){
var inst_24087 = (state_24100[(9)]);
var inst_24090 = cljs.core.deref.call(null,inst_24087);
var state_24100__$1 = state_24100;
var statearr_24115_24132 = state_24100__$1;
(statearr_24115_24132[(2)] = inst_24090);

(statearr_24115_24132[(1)] = (10));


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
});})(c__23342__auto__))
;
return ((function (switch__23230__auto__,c__23342__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23231__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23231__auto____0 = (function (){
var statearr_24119 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24119[(0)] = cljs$core$async$reduce_$_state_machine__23231__auto__);

(statearr_24119[(1)] = (1));

return statearr_24119;
});
var cljs$core$async$reduce_$_state_machine__23231__auto____1 = (function (state_24100){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_24100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e24120){if((e24120 instanceof Object)){
var ex__23234__auto__ = e24120;
var statearr_24121_24133 = state_24100;
(statearr_24121_24133[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24134 = state_24100;
state_24100 = G__24134;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23231__auto__ = function(state_24100){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23231__auto____1.call(this,state_24100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23231__auto____0;
cljs$core$async$reduce_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23231__auto____1;
return cljs$core$async$reduce_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__))
})();
var state__23344__auto__ = (function (){var statearr_24122 = f__23343__auto__.call(null);
(statearr_24122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_24122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__))
);

return c__23342__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24135 = [];
var len__17790__auto___24187 = arguments.length;
var i__17791__auto___24188 = (0);
while(true){
if((i__17791__auto___24188 < len__17790__auto___24187)){
args24135.push((arguments[i__17791__auto___24188]));

var G__24189 = (i__17791__auto___24188 + (1));
i__17791__auto___24188 = G__24189;
continue;
} else {
}
break;
}

var G__24137 = args24135.length;
switch (G__24137) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24135.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__){
return (function (state_24162){
var state_val_24163 = (state_24162[(1)]);
if((state_val_24163 === (7))){
var inst_24144 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24164_24191 = state_24162__$1;
(statearr_24164_24191[(2)] = inst_24144);

(statearr_24164_24191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (1))){
var inst_24138 = cljs.core.seq.call(null,coll);
var inst_24139 = inst_24138;
var state_24162__$1 = (function (){var statearr_24165 = state_24162;
(statearr_24165[(7)] = inst_24139);

return statearr_24165;
})();
var statearr_24166_24192 = state_24162__$1;
(statearr_24166_24192[(2)] = null);

(statearr_24166_24192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (4))){
var inst_24139 = (state_24162[(7)]);
var inst_24142 = cljs.core.first.call(null,inst_24139);
var state_24162__$1 = state_24162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24162__$1,(7),ch,inst_24142);
} else {
if((state_val_24163 === (13))){
var inst_24156 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24167_24193 = state_24162__$1;
(statearr_24167_24193[(2)] = inst_24156);

(statearr_24167_24193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (6))){
var inst_24147 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
if(cljs.core.truth_(inst_24147)){
var statearr_24168_24194 = state_24162__$1;
(statearr_24168_24194[(1)] = (8));

} else {
var statearr_24169_24195 = state_24162__$1;
(statearr_24169_24195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (3))){
var inst_24160 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24162__$1,inst_24160);
} else {
if((state_val_24163 === (12))){
var state_24162__$1 = state_24162;
var statearr_24170_24196 = state_24162__$1;
(statearr_24170_24196[(2)] = null);

(statearr_24170_24196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (2))){
var inst_24139 = (state_24162[(7)]);
var state_24162__$1 = state_24162;
if(cljs.core.truth_(inst_24139)){
var statearr_24171_24197 = state_24162__$1;
(statearr_24171_24197[(1)] = (4));

} else {
var statearr_24172_24198 = state_24162__$1;
(statearr_24172_24198[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (11))){
var inst_24153 = cljs.core.async.close_BANG_.call(null,ch);
var state_24162__$1 = state_24162;
var statearr_24173_24199 = state_24162__$1;
(statearr_24173_24199[(2)] = inst_24153);

(statearr_24173_24199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (9))){
var state_24162__$1 = state_24162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24174_24200 = state_24162__$1;
(statearr_24174_24200[(1)] = (11));

} else {
var statearr_24175_24201 = state_24162__$1;
(statearr_24175_24201[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (5))){
var inst_24139 = (state_24162[(7)]);
var state_24162__$1 = state_24162;
var statearr_24176_24202 = state_24162__$1;
(statearr_24176_24202[(2)] = inst_24139);

(statearr_24176_24202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (10))){
var inst_24158 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24177_24203 = state_24162__$1;
(statearr_24177_24203[(2)] = inst_24158);

(statearr_24177_24203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (8))){
var inst_24139 = (state_24162[(7)]);
var inst_24149 = cljs.core.next.call(null,inst_24139);
var inst_24139__$1 = inst_24149;
var state_24162__$1 = (function (){var statearr_24178 = state_24162;
(statearr_24178[(7)] = inst_24139__$1);

return statearr_24178;
})();
var statearr_24179_24204 = state_24162__$1;
(statearr_24179_24204[(2)] = null);

(statearr_24179_24204[(1)] = (2));


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
});})(c__23342__auto__))
;
return ((function (switch__23230__auto__,c__23342__auto__){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_24183 = [null,null,null,null,null,null,null,null];
(statearr_24183[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_24183[(1)] = (1));

return statearr_24183;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_24162){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_24162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e24184){if((e24184 instanceof Object)){
var ex__23234__auto__ = e24184;
var statearr_24185_24205 = state_24162;
(statearr_24185_24205[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24206 = state_24162;
state_24162 = G__24206;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_24162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_24162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__))
})();
var state__23344__auto__ = (function (){var statearr_24186 = f__23343__auto__.call(null);
(statearr_24186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_24186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__))
);

return c__23342__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17387__auto__ = (((_ == null))?null:_);
var m__17388__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,_);
} else {
var m__17388__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17387__auto__ = (((m == null))?null:m);
var m__17388__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17388__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17387__auto__ = (((m == null))?null:m);
var m__17388__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,m,ch);
} else {
var m__17388__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17387__auto__ = (((m == null))?null:m);
var m__17388__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,m);
} else {
var m__17388__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24428 = (function (mult,ch,cs,meta24429){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24429 = meta24429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24430,meta24429__$1){
var self__ = this;
var _24430__$1 = this;
return (new cljs.core.async.t_cljs$core$async24428(self__.mult,self__.ch,self__.cs,meta24429__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24430){
var self__ = this;
var _24430__$1 = this;
return self__.meta24429;
});})(cs))
;

cljs.core.async.t_cljs$core$async24428.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24428.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24428.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24428.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24428.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24428.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24429","meta24429",-741039783,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24428";

cljs.core.async.t_cljs$core$async24428.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async24428");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24428 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24428(mult__$1,ch__$1,cs__$1,meta24429){
return (new cljs.core.async.t_cljs$core$async24428(mult__$1,ch__$1,cs__$1,meta24429));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24428(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23342__auto___24649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___24649,cs,m,dchan,dctr,done){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___24649,cs,m,dchan,dctr,done){
return (function (state_24561){
var state_val_24562 = (state_24561[(1)]);
if((state_val_24562 === (7))){
var inst_24557 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24563_24650 = state_24561__$1;
(statearr_24563_24650[(2)] = inst_24557);

(statearr_24563_24650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (20))){
var inst_24462 = (state_24561[(7)]);
var inst_24472 = cljs.core.first.call(null,inst_24462);
var inst_24473 = cljs.core.nth.call(null,inst_24472,(0),null);
var inst_24474 = cljs.core.nth.call(null,inst_24472,(1),null);
var state_24561__$1 = (function (){var statearr_24564 = state_24561;
(statearr_24564[(8)] = inst_24473);

return statearr_24564;
})();
if(cljs.core.truth_(inst_24474)){
var statearr_24565_24651 = state_24561__$1;
(statearr_24565_24651[(1)] = (22));

} else {
var statearr_24566_24652 = state_24561__$1;
(statearr_24566_24652[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (27))){
var inst_24509 = (state_24561[(9)]);
var inst_24504 = (state_24561[(10)]);
var inst_24433 = (state_24561[(11)]);
var inst_24502 = (state_24561[(12)]);
var inst_24509__$1 = cljs.core._nth.call(null,inst_24502,inst_24504);
var inst_24510 = cljs.core.async.put_BANG_.call(null,inst_24509__$1,inst_24433,done);
var state_24561__$1 = (function (){var statearr_24567 = state_24561;
(statearr_24567[(9)] = inst_24509__$1);

return statearr_24567;
})();
if(cljs.core.truth_(inst_24510)){
var statearr_24568_24653 = state_24561__$1;
(statearr_24568_24653[(1)] = (30));

} else {
var statearr_24569_24654 = state_24561__$1;
(statearr_24569_24654[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (1))){
var state_24561__$1 = state_24561;
var statearr_24570_24655 = state_24561__$1;
(statearr_24570_24655[(2)] = null);

(statearr_24570_24655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (24))){
var inst_24462 = (state_24561[(7)]);
var inst_24479 = (state_24561[(2)]);
var inst_24480 = cljs.core.next.call(null,inst_24462);
var inst_24442 = inst_24480;
var inst_24443 = null;
var inst_24444 = (0);
var inst_24445 = (0);
var state_24561__$1 = (function (){var statearr_24571 = state_24561;
(statearr_24571[(13)] = inst_24445);

(statearr_24571[(14)] = inst_24443);

(statearr_24571[(15)] = inst_24444);

(statearr_24571[(16)] = inst_24442);

(statearr_24571[(17)] = inst_24479);

return statearr_24571;
})();
var statearr_24572_24656 = state_24561__$1;
(statearr_24572_24656[(2)] = null);

(statearr_24572_24656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (39))){
var state_24561__$1 = state_24561;
var statearr_24576_24657 = state_24561__$1;
(statearr_24576_24657[(2)] = null);

(statearr_24576_24657[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (4))){
var inst_24433 = (state_24561[(11)]);
var inst_24433__$1 = (state_24561[(2)]);
var inst_24434 = (inst_24433__$1 == null);
var state_24561__$1 = (function (){var statearr_24577 = state_24561;
(statearr_24577[(11)] = inst_24433__$1);

return statearr_24577;
})();
if(cljs.core.truth_(inst_24434)){
var statearr_24578_24658 = state_24561__$1;
(statearr_24578_24658[(1)] = (5));

} else {
var statearr_24579_24659 = state_24561__$1;
(statearr_24579_24659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (15))){
var inst_24445 = (state_24561[(13)]);
var inst_24443 = (state_24561[(14)]);
var inst_24444 = (state_24561[(15)]);
var inst_24442 = (state_24561[(16)]);
var inst_24458 = (state_24561[(2)]);
var inst_24459 = (inst_24445 + (1));
var tmp24573 = inst_24443;
var tmp24574 = inst_24444;
var tmp24575 = inst_24442;
var inst_24442__$1 = tmp24575;
var inst_24443__$1 = tmp24573;
var inst_24444__$1 = tmp24574;
var inst_24445__$1 = inst_24459;
var state_24561__$1 = (function (){var statearr_24580 = state_24561;
(statearr_24580[(13)] = inst_24445__$1);

(statearr_24580[(14)] = inst_24443__$1);

(statearr_24580[(15)] = inst_24444__$1);

(statearr_24580[(18)] = inst_24458);

(statearr_24580[(16)] = inst_24442__$1);

return statearr_24580;
})();
var statearr_24581_24660 = state_24561__$1;
(statearr_24581_24660[(2)] = null);

(statearr_24581_24660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (21))){
var inst_24483 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24585_24661 = state_24561__$1;
(statearr_24585_24661[(2)] = inst_24483);

(statearr_24585_24661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (31))){
var inst_24509 = (state_24561[(9)]);
var inst_24513 = done.call(null,null);
var inst_24514 = cljs.core.async.untap_STAR_.call(null,m,inst_24509);
var state_24561__$1 = (function (){var statearr_24586 = state_24561;
(statearr_24586[(19)] = inst_24513);

return statearr_24586;
})();
var statearr_24587_24662 = state_24561__$1;
(statearr_24587_24662[(2)] = inst_24514);

(statearr_24587_24662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (32))){
var inst_24503 = (state_24561[(20)]);
var inst_24501 = (state_24561[(21)]);
var inst_24504 = (state_24561[(10)]);
var inst_24502 = (state_24561[(12)]);
var inst_24516 = (state_24561[(2)]);
var inst_24517 = (inst_24504 + (1));
var tmp24582 = inst_24503;
var tmp24583 = inst_24501;
var tmp24584 = inst_24502;
var inst_24501__$1 = tmp24583;
var inst_24502__$1 = tmp24584;
var inst_24503__$1 = tmp24582;
var inst_24504__$1 = inst_24517;
var state_24561__$1 = (function (){var statearr_24588 = state_24561;
(statearr_24588[(20)] = inst_24503__$1);

(statearr_24588[(22)] = inst_24516);

(statearr_24588[(21)] = inst_24501__$1);

(statearr_24588[(10)] = inst_24504__$1);

(statearr_24588[(12)] = inst_24502__$1);

return statearr_24588;
})();
var statearr_24589_24663 = state_24561__$1;
(statearr_24589_24663[(2)] = null);

(statearr_24589_24663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (40))){
var inst_24529 = (state_24561[(23)]);
var inst_24533 = done.call(null,null);
var inst_24534 = cljs.core.async.untap_STAR_.call(null,m,inst_24529);
var state_24561__$1 = (function (){var statearr_24590 = state_24561;
(statearr_24590[(24)] = inst_24533);

return statearr_24590;
})();
var statearr_24591_24664 = state_24561__$1;
(statearr_24591_24664[(2)] = inst_24534);

(statearr_24591_24664[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (33))){
var inst_24520 = (state_24561[(25)]);
var inst_24522 = cljs.core.chunked_seq_QMARK_.call(null,inst_24520);
var state_24561__$1 = state_24561;
if(inst_24522){
var statearr_24592_24665 = state_24561__$1;
(statearr_24592_24665[(1)] = (36));

} else {
var statearr_24593_24666 = state_24561__$1;
(statearr_24593_24666[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (13))){
var inst_24452 = (state_24561[(26)]);
var inst_24455 = cljs.core.async.close_BANG_.call(null,inst_24452);
var state_24561__$1 = state_24561;
var statearr_24594_24667 = state_24561__$1;
(statearr_24594_24667[(2)] = inst_24455);

(statearr_24594_24667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (22))){
var inst_24473 = (state_24561[(8)]);
var inst_24476 = cljs.core.async.close_BANG_.call(null,inst_24473);
var state_24561__$1 = state_24561;
var statearr_24595_24668 = state_24561__$1;
(statearr_24595_24668[(2)] = inst_24476);

(statearr_24595_24668[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (36))){
var inst_24520 = (state_24561[(25)]);
var inst_24524 = cljs.core.chunk_first.call(null,inst_24520);
var inst_24525 = cljs.core.chunk_rest.call(null,inst_24520);
var inst_24526 = cljs.core.count.call(null,inst_24524);
var inst_24501 = inst_24525;
var inst_24502 = inst_24524;
var inst_24503 = inst_24526;
var inst_24504 = (0);
var state_24561__$1 = (function (){var statearr_24596 = state_24561;
(statearr_24596[(20)] = inst_24503);

(statearr_24596[(21)] = inst_24501);

(statearr_24596[(10)] = inst_24504);

(statearr_24596[(12)] = inst_24502);

return statearr_24596;
})();
var statearr_24597_24669 = state_24561__$1;
(statearr_24597_24669[(2)] = null);

(statearr_24597_24669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (41))){
var inst_24520 = (state_24561[(25)]);
var inst_24536 = (state_24561[(2)]);
var inst_24537 = cljs.core.next.call(null,inst_24520);
var inst_24501 = inst_24537;
var inst_24502 = null;
var inst_24503 = (0);
var inst_24504 = (0);
var state_24561__$1 = (function (){var statearr_24598 = state_24561;
(statearr_24598[(27)] = inst_24536);

(statearr_24598[(20)] = inst_24503);

(statearr_24598[(21)] = inst_24501);

(statearr_24598[(10)] = inst_24504);

(statearr_24598[(12)] = inst_24502);

return statearr_24598;
})();
var statearr_24599_24670 = state_24561__$1;
(statearr_24599_24670[(2)] = null);

(statearr_24599_24670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (43))){
var state_24561__$1 = state_24561;
var statearr_24600_24671 = state_24561__$1;
(statearr_24600_24671[(2)] = null);

(statearr_24600_24671[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (29))){
var inst_24545 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24601_24672 = state_24561__$1;
(statearr_24601_24672[(2)] = inst_24545);

(statearr_24601_24672[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (44))){
var inst_24554 = (state_24561[(2)]);
var state_24561__$1 = (function (){var statearr_24602 = state_24561;
(statearr_24602[(28)] = inst_24554);

return statearr_24602;
})();
var statearr_24603_24673 = state_24561__$1;
(statearr_24603_24673[(2)] = null);

(statearr_24603_24673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (6))){
var inst_24493 = (state_24561[(29)]);
var inst_24492 = cljs.core.deref.call(null,cs);
var inst_24493__$1 = cljs.core.keys.call(null,inst_24492);
var inst_24494 = cljs.core.count.call(null,inst_24493__$1);
var inst_24495 = cljs.core.reset_BANG_.call(null,dctr,inst_24494);
var inst_24500 = cljs.core.seq.call(null,inst_24493__$1);
var inst_24501 = inst_24500;
var inst_24502 = null;
var inst_24503 = (0);
var inst_24504 = (0);
var state_24561__$1 = (function (){var statearr_24604 = state_24561;
(statearr_24604[(20)] = inst_24503);

(statearr_24604[(30)] = inst_24495);

(statearr_24604[(21)] = inst_24501);

(statearr_24604[(10)] = inst_24504);

(statearr_24604[(12)] = inst_24502);

(statearr_24604[(29)] = inst_24493__$1);

return statearr_24604;
})();
var statearr_24605_24674 = state_24561__$1;
(statearr_24605_24674[(2)] = null);

(statearr_24605_24674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (28))){
var inst_24520 = (state_24561[(25)]);
var inst_24501 = (state_24561[(21)]);
var inst_24520__$1 = cljs.core.seq.call(null,inst_24501);
var state_24561__$1 = (function (){var statearr_24606 = state_24561;
(statearr_24606[(25)] = inst_24520__$1);

return statearr_24606;
})();
if(inst_24520__$1){
var statearr_24607_24675 = state_24561__$1;
(statearr_24607_24675[(1)] = (33));

} else {
var statearr_24608_24676 = state_24561__$1;
(statearr_24608_24676[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (25))){
var inst_24503 = (state_24561[(20)]);
var inst_24504 = (state_24561[(10)]);
var inst_24506 = (inst_24504 < inst_24503);
var inst_24507 = inst_24506;
var state_24561__$1 = state_24561;
if(cljs.core.truth_(inst_24507)){
var statearr_24609_24677 = state_24561__$1;
(statearr_24609_24677[(1)] = (27));

} else {
var statearr_24610_24678 = state_24561__$1;
(statearr_24610_24678[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (34))){
var state_24561__$1 = state_24561;
var statearr_24611_24679 = state_24561__$1;
(statearr_24611_24679[(2)] = null);

(statearr_24611_24679[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (17))){
var state_24561__$1 = state_24561;
var statearr_24612_24680 = state_24561__$1;
(statearr_24612_24680[(2)] = null);

(statearr_24612_24680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (3))){
var inst_24559 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24561__$1,inst_24559);
} else {
if((state_val_24562 === (12))){
var inst_24488 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24613_24681 = state_24561__$1;
(statearr_24613_24681[(2)] = inst_24488);

(statearr_24613_24681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (2))){
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24561__$1,(4),ch);
} else {
if((state_val_24562 === (23))){
var state_24561__$1 = state_24561;
var statearr_24614_24682 = state_24561__$1;
(statearr_24614_24682[(2)] = null);

(statearr_24614_24682[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (35))){
var inst_24543 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24615_24683 = state_24561__$1;
(statearr_24615_24683[(2)] = inst_24543);

(statearr_24615_24683[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (19))){
var inst_24462 = (state_24561[(7)]);
var inst_24466 = cljs.core.chunk_first.call(null,inst_24462);
var inst_24467 = cljs.core.chunk_rest.call(null,inst_24462);
var inst_24468 = cljs.core.count.call(null,inst_24466);
var inst_24442 = inst_24467;
var inst_24443 = inst_24466;
var inst_24444 = inst_24468;
var inst_24445 = (0);
var state_24561__$1 = (function (){var statearr_24616 = state_24561;
(statearr_24616[(13)] = inst_24445);

(statearr_24616[(14)] = inst_24443);

(statearr_24616[(15)] = inst_24444);

(statearr_24616[(16)] = inst_24442);

return statearr_24616;
})();
var statearr_24617_24684 = state_24561__$1;
(statearr_24617_24684[(2)] = null);

(statearr_24617_24684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (11))){
var inst_24462 = (state_24561[(7)]);
var inst_24442 = (state_24561[(16)]);
var inst_24462__$1 = cljs.core.seq.call(null,inst_24442);
var state_24561__$1 = (function (){var statearr_24618 = state_24561;
(statearr_24618[(7)] = inst_24462__$1);

return statearr_24618;
})();
if(inst_24462__$1){
var statearr_24619_24685 = state_24561__$1;
(statearr_24619_24685[(1)] = (16));

} else {
var statearr_24620_24686 = state_24561__$1;
(statearr_24620_24686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (9))){
var inst_24490 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24621_24687 = state_24561__$1;
(statearr_24621_24687[(2)] = inst_24490);

(statearr_24621_24687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (5))){
var inst_24440 = cljs.core.deref.call(null,cs);
var inst_24441 = cljs.core.seq.call(null,inst_24440);
var inst_24442 = inst_24441;
var inst_24443 = null;
var inst_24444 = (0);
var inst_24445 = (0);
var state_24561__$1 = (function (){var statearr_24622 = state_24561;
(statearr_24622[(13)] = inst_24445);

(statearr_24622[(14)] = inst_24443);

(statearr_24622[(15)] = inst_24444);

(statearr_24622[(16)] = inst_24442);

return statearr_24622;
})();
var statearr_24623_24688 = state_24561__$1;
(statearr_24623_24688[(2)] = null);

(statearr_24623_24688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (14))){
var state_24561__$1 = state_24561;
var statearr_24624_24689 = state_24561__$1;
(statearr_24624_24689[(2)] = null);

(statearr_24624_24689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (45))){
var inst_24551 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24625_24690 = state_24561__$1;
(statearr_24625_24690[(2)] = inst_24551);

(statearr_24625_24690[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (26))){
var inst_24493 = (state_24561[(29)]);
var inst_24547 = (state_24561[(2)]);
var inst_24548 = cljs.core.seq.call(null,inst_24493);
var state_24561__$1 = (function (){var statearr_24626 = state_24561;
(statearr_24626[(31)] = inst_24547);

return statearr_24626;
})();
if(inst_24548){
var statearr_24627_24691 = state_24561__$1;
(statearr_24627_24691[(1)] = (42));

} else {
var statearr_24628_24692 = state_24561__$1;
(statearr_24628_24692[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (16))){
var inst_24462 = (state_24561[(7)]);
var inst_24464 = cljs.core.chunked_seq_QMARK_.call(null,inst_24462);
var state_24561__$1 = state_24561;
if(inst_24464){
var statearr_24629_24693 = state_24561__$1;
(statearr_24629_24693[(1)] = (19));

} else {
var statearr_24630_24694 = state_24561__$1;
(statearr_24630_24694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (38))){
var inst_24540 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24631_24695 = state_24561__$1;
(statearr_24631_24695[(2)] = inst_24540);

(statearr_24631_24695[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (30))){
var state_24561__$1 = state_24561;
var statearr_24632_24696 = state_24561__$1;
(statearr_24632_24696[(2)] = null);

(statearr_24632_24696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (10))){
var inst_24445 = (state_24561[(13)]);
var inst_24443 = (state_24561[(14)]);
var inst_24451 = cljs.core._nth.call(null,inst_24443,inst_24445);
var inst_24452 = cljs.core.nth.call(null,inst_24451,(0),null);
var inst_24453 = cljs.core.nth.call(null,inst_24451,(1),null);
var state_24561__$1 = (function (){var statearr_24633 = state_24561;
(statearr_24633[(26)] = inst_24452);

return statearr_24633;
})();
if(cljs.core.truth_(inst_24453)){
var statearr_24634_24697 = state_24561__$1;
(statearr_24634_24697[(1)] = (13));

} else {
var statearr_24635_24698 = state_24561__$1;
(statearr_24635_24698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (18))){
var inst_24486 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24636_24699 = state_24561__$1;
(statearr_24636_24699[(2)] = inst_24486);

(statearr_24636_24699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (42))){
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24561__$1,(45),dchan);
} else {
if((state_val_24562 === (37))){
var inst_24520 = (state_24561[(25)]);
var inst_24433 = (state_24561[(11)]);
var inst_24529 = (state_24561[(23)]);
var inst_24529__$1 = cljs.core.first.call(null,inst_24520);
var inst_24530 = cljs.core.async.put_BANG_.call(null,inst_24529__$1,inst_24433,done);
var state_24561__$1 = (function (){var statearr_24637 = state_24561;
(statearr_24637[(23)] = inst_24529__$1);

return statearr_24637;
})();
if(cljs.core.truth_(inst_24530)){
var statearr_24638_24700 = state_24561__$1;
(statearr_24638_24700[(1)] = (39));

} else {
var statearr_24639_24701 = state_24561__$1;
(statearr_24639_24701[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (8))){
var inst_24445 = (state_24561[(13)]);
var inst_24444 = (state_24561[(15)]);
var inst_24447 = (inst_24445 < inst_24444);
var inst_24448 = inst_24447;
var state_24561__$1 = state_24561;
if(cljs.core.truth_(inst_24448)){
var statearr_24640_24702 = state_24561__$1;
(statearr_24640_24702[(1)] = (10));

} else {
var statearr_24641_24703 = state_24561__$1;
(statearr_24641_24703[(1)] = (11));

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
});})(c__23342__auto___24649,cs,m,dchan,dctr,done))
;
return ((function (switch__23230__auto__,c__23342__auto___24649,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23231__auto__ = null;
var cljs$core$async$mult_$_state_machine__23231__auto____0 = (function (){
var statearr_24645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24645[(0)] = cljs$core$async$mult_$_state_machine__23231__auto__);

(statearr_24645[(1)] = (1));

return statearr_24645;
});
var cljs$core$async$mult_$_state_machine__23231__auto____1 = (function (state_24561){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_24561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e24646){if((e24646 instanceof Object)){
var ex__23234__auto__ = e24646;
var statearr_24647_24704 = state_24561;
(statearr_24647_24704[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24705 = state_24561;
state_24561 = G__24705;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23231__auto__ = function(state_24561){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23231__auto____1.call(this,state_24561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23231__auto____0;
cljs$core$async$mult_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23231__auto____1;
return cljs$core$async$mult_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___24649,cs,m,dchan,dctr,done))
})();
var state__23344__auto__ = (function (){var statearr_24648 = f__23343__auto__.call(null);
(statearr_24648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___24649);

return statearr_24648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___24649,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24706 = [];
var len__17790__auto___24709 = arguments.length;
var i__17791__auto___24710 = (0);
while(true){
if((i__17791__auto___24710 < len__17790__auto___24709)){
args24706.push((arguments[i__17791__auto___24710]));

var G__24711 = (i__17791__auto___24710 + (1));
i__17791__auto___24710 = G__24711;
continue;
} else {
}
break;
}

var G__24708 = args24706.length;
switch (G__24708) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24706.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17387__auto__ = (((m == null))?null:m);
var m__17388__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,m,ch);
} else {
var m__17388__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17387__auto__ = (((m == null))?null:m);
var m__17388__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,m,ch);
} else {
var m__17388__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17387__auto__ = (((m == null))?null:m);
var m__17388__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,m);
} else {
var m__17388__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17387__auto__ = (((m == null))?null:m);
var m__17388__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,m,state_map);
} else {
var m__17388__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17387__auto__ = (((m == null))?null:m);
var m__17388__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,m,mode);
} else {
var m__17388__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17797__auto__ = [];
var len__17790__auto___24723 = arguments.length;
var i__17791__auto___24724 = (0);
while(true){
if((i__17791__auto___24724 < len__17790__auto___24723)){
args__17797__auto__.push((arguments[i__17791__auto___24724]));

var G__24725 = (i__17791__auto___24724 + (1));
i__17791__auto___24724 = G__24725;
continue;
} else {
}
break;
}

var argseq__17798__auto__ = ((((3) < args__17797__auto__.length))?(new cljs.core.IndexedSeq(args__17797__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17798__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24717){
var map__24718 = p__24717;
var map__24718__$1 = ((((!((map__24718 == null)))?((((map__24718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24718):map__24718);
var opts = map__24718__$1;
var statearr_24720_24726 = state;
(statearr_24720_24726[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24718,map__24718__$1,opts){
return (function (val){
var statearr_24721_24727 = state;
(statearr_24721_24727[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24718,map__24718__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24722_24728 = state;
(statearr_24722_24728[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24713){
var G__24714 = cljs.core.first.call(null,seq24713);
var seq24713__$1 = cljs.core.next.call(null,seq24713);
var G__24715 = cljs.core.first.call(null,seq24713__$1);
var seq24713__$2 = cljs.core.next.call(null,seq24713__$1);
var G__24716 = cljs.core.first.call(null,seq24713__$2);
var seq24713__$3 = cljs.core.next.call(null,seq24713__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24714,G__24715,G__24716,seq24713__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24892 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24893){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24893 = meta24893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24894,meta24893__$1){
var self__ = this;
var _24894__$1 = this;
return (new cljs.core.async.t_cljs$core$async24892(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24893__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24894){
var self__ = this;
var _24894__$1 = this;
return self__.meta24893;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24892.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24892.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24893","meta24893",-77103806,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24892";

cljs.core.async.t_cljs$core$async24892.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async24892");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24892 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24892(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24893){
return (new cljs.core.async.t_cljs$core$async24892(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24893));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24892(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23342__auto___25055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___25055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___25055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24992){
var state_val_24993 = (state_24992[(1)]);
if((state_val_24993 === (7))){
var inst_24910 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
var statearr_24994_25056 = state_24992__$1;
(statearr_24994_25056[(2)] = inst_24910);

(statearr_24994_25056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (20))){
var inst_24922 = (state_24992[(7)]);
var state_24992__$1 = state_24992;
var statearr_24995_25057 = state_24992__$1;
(statearr_24995_25057[(2)] = inst_24922);

(statearr_24995_25057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (27))){
var state_24992__$1 = state_24992;
var statearr_24996_25058 = state_24992__$1;
(statearr_24996_25058[(2)] = null);

(statearr_24996_25058[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (1))){
var inst_24898 = (state_24992[(8)]);
var inst_24898__$1 = calc_state.call(null);
var inst_24900 = (inst_24898__$1 == null);
var inst_24901 = cljs.core.not.call(null,inst_24900);
var state_24992__$1 = (function (){var statearr_24997 = state_24992;
(statearr_24997[(8)] = inst_24898__$1);

return statearr_24997;
})();
if(inst_24901){
var statearr_24998_25059 = state_24992__$1;
(statearr_24998_25059[(1)] = (2));

} else {
var statearr_24999_25060 = state_24992__$1;
(statearr_24999_25060[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (24))){
var inst_24966 = (state_24992[(9)]);
var inst_24952 = (state_24992[(10)]);
var inst_24945 = (state_24992[(11)]);
var inst_24966__$1 = inst_24945.call(null,inst_24952);
var state_24992__$1 = (function (){var statearr_25000 = state_24992;
(statearr_25000[(9)] = inst_24966__$1);

return statearr_25000;
})();
if(cljs.core.truth_(inst_24966__$1)){
var statearr_25001_25061 = state_24992__$1;
(statearr_25001_25061[(1)] = (29));

} else {
var statearr_25002_25062 = state_24992__$1;
(statearr_25002_25062[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (4))){
var inst_24913 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
if(cljs.core.truth_(inst_24913)){
var statearr_25003_25063 = state_24992__$1;
(statearr_25003_25063[(1)] = (8));

} else {
var statearr_25004_25064 = state_24992__$1;
(statearr_25004_25064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (15))){
var inst_24939 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
if(cljs.core.truth_(inst_24939)){
var statearr_25005_25065 = state_24992__$1;
(statearr_25005_25065[(1)] = (19));

} else {
var statearr_25006_25066 = state_24992__$1;
(statearr_25006_25066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (21))){
var inst_24944 = (state_24992[(12)]);
var inst_24944__$1 = (state_24992[(2)]);
var inst_24945 = cljs.core.get.call(null,inst_24944__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24946 = cljs.core.get.call(null,inst_24944__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24947 = cljs.core.get.call(null,inst_24944__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24992__$1 = (function (){var statearr_25007 = state_24992;
(statearr_25007[(13)] = inst_24946);

(statearr_25007[(12)] = inst_24944__$1);

(statearr_25007[(11)] = inst_24945);

return statearr_25007;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24992__$1,(22),inst_24947);
} else {
if((state_val_24993 === (31))){
var inst_24974 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
if(cljs.core.truth_(inst_24974)){
var statearr_25008_25067 = state_24992__$1;
(statearr_25008_25067[(1)] = (32));

} else {
var statearr_25009_25068 = state_24992__$1;
(statearr_25009_25068[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (32))){
var inst_24951 = (state_24992[(14)]);
var state_24992__$1 = state_24992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24992__$1,(35),out,inst_24951);
} else {
if((state_val_24993 === (33))){
var inst_24944 = (state_24992[(12)]);
var inst_24922 = inst_24944;
var state_24992__$1 = (function (){var statearr_25010 = state_24992;
(statearr_25010[(7)] = inst_24922);

return statearr_25010;
})();
var statearr_25011_25069 = state_24992__$1;
(statearr_25011_25069[(2)] = null);

(statearr_25011_25069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (13))){
var inst_24922 = (state_24992[(7)]);
var inst_24929 = inst_24922.cljs$lang$protocol_mask$partition0$;
var inst_24930 = (inst_24929 & (64));
var inst_24931 = inst_24922.cljs$core$ISeq$;
var inst_24932 = (inst_24930) || (inst_24931);
var state_24992__$1 = state_24992;
if(cljs.core.truth_(inst_24932)){
var statearr_25012_25070 = state_24992__$1;
(statearr_25012_25070[(1)] = (16));

} else {
var statearr_25013_25071 = state_24992__$1;
(statearr_25013_25071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (22))){
var inst_24951 = (state_24992[(14)]);
var inst_24952 = (state_24992[(10)]);
var inst_24950 = (state_24992[(2)]);
var inst_24951__$1 = cljs.core.nth.call(null,inst_24950,(0),null);
var inst_24952__$1 = cljs.core.nth.call(null,inst_24950,(1),null);
var inst_24953 = (inst_24951__$1 == null);
var inst_24954 = cljs.core._EQ_.call(null,inst_24952__$1,change);
var inst_24955 = (inst_24953) || (inst_24954);
var state_24992__$1 = (function (){var statearr_25014 = state_24992;
(statearr_25014[(14)] = inst_24951__$1);

(statearr_25014[(10)] = inst_24952__$1);

return statearr_25014;
})();
if(cljs.core.truth_(inst_24955)){
var statearr_25015_25072 = state_24992__$1;
(statearr_25015_25072[(1)] = (23));

} else {
var statearr_25016_25073 = state_24992__$1;
(statearr_25016_25073[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (36))){
var inst_24944 = (state_24992[(12)]);
var inst_24922 = inst_24944;
var state_24992__$1 = (function (){var statearr_25017 = state_24992;
(statearr_25017[(7)] = inst_24922);

return statearr_25017;
})();
var statearr_25018_25074 = state_24992__$1;
(statearr_25018_25074[(2)] = null);

(statearr_25018_25074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (29))){
var inst_24966 = (state_24992[(9)]);
var state_24992__$1 = state_24992;
var statearr_25019_25075 = state_24992__$1;
(statearr_25019_25075[(2)] = inst_24966);

(statearr_25019_25075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (6))){
var state_24992__$1 = state_24992;
var statearr_25020_25076 = state_24992__$1;
(statearr_25020_25076[(2)] = false);

(statearr_25020_25076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (28))){
var inst_24962 = (state_24992[(2)]);
var inst_24963 = calc_state.call(null);
var inst_24922 = inst_24963;
var state_24992__$1 = (function (){var statearr_25021 = state_24992;
(statearr_25021[(15)] = inst_24962);

(statearr_25021[(7)] = inst_24922);

return statearr_25021;
})();
var statearr_25022_25077 = state_24992__$1;
(statearr_25022_25077[(2)] = null);

(statearr_25022_25077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (25))){
var inst_24988 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
var statearr_25023_25078 = state_24992__$1;
(statearr_25023_25078[(2)] = inst_24988);

(statearr_25023_25078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (34))){
var inst_24986 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
var statearr_25024_25079 = state_24992__$1;
(statearr_25024_25079[(2)] = inst_24986);

(statearr_25024_25079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (17))){
var state_24992__$1 = state_24992;
var statearr_25025_25080 = state_24992__$1;
(statearr_25025_25080[(2)] = false);

(statearr_25025_25080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (3))){
var state_24992__$1 = state_24992;
var statearr_25026_25081 = state_24992__$1;
(statearr_25026_25081[(2)] = false);

(statearr_25026_25081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (12))){
var inst_24990 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24992__$1,inst_24990);
} else {
if((state_val_24993 === (2))){
var inst_24898 = (state_24992[(8)]);
var inst_24903 = inst_24898.cljs$lang$protocol_mask$partition0$;
var inst_24904 = (inst_24903 & (64));
var inst_24905 = inst_24898.cljs$core$ISeq$;
var inst_24906 = (inst_24904) || (inst_24905);
var state_24992__$1 = state_24992;
if(cljs.core.truth_(inst_24906)){
var statearr_25027_25082 = state_24992__$1;
(statearr_25027_25082[(1)] = (5));

} else {
var statearr_25028_25083 = state_24992__$1;
(statearr_25028_25083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (23))){
var inst_24951 = (state_24992[(14)]);
var inst_24957 = (inst_24951 == null);
var state_24992__$1 = state_24992;
if(cljs.core.truth_(inst_24957)){
var statearr_25029_25084 = state_24992__$1;
(statearr_25029_25084[(1)] = (26));

} else {
var statearr_25030_25085 = state_24992__$1;
(statearr_25030_25085[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (35))){
var inst_24977 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
if(cljs.core.truth_(inst_24977)){
var statearr_25031_25086 = state_24992__$1;
(statearr_25031_25086[(1)] = (36));

} else {
var statearr_25032_25087 = state_24992__$1;
(statearr_25032_25087[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (19))){
var inst_24922 = (state_24992[(7)]);
var inst_24941 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24922);
var state_24992__$1 = state_24992;
var statearr_25033_25088 = state_24992__$1;
(statearr_25033_25088[(2)] = inst_24941);

(statearr_25033_25088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (11))){
var inst_24922 = (state_24992[(7)]);
var inst_24926 = (inst_24922 == null);
var inst_24927 = cljs.core.not.call(null,inst_24926);
var state_24992__$1 = state_24992;
if(inst_24927){
var statearr_25034_25089 = state_24992__$1;
(statearr_25034_25089[(1)] = (13));

} else {
var statearr_25035_25090 = state_24992__$1;
(statearr_25035_25090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (9))){
var inst_24898 = (state_24992[(8)]);
var state_24992__$1 = state_24992;
var statearr_25036_25091 = state_24992__$1;
(statearr_25036_25091[(2)] = inst_24898);

(statearr_25036_25091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (5))){
var state_24992__$1 = state_24992;
var statearr_25037_25092 = state_24992__$1;
(statearr_25037_25092[(2)] = true);

(statearr_25037_25092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (14))){
var state_24992__$1 = state_24992;
var statearr_25038_25093 = state_24992__$1;
(statearr_25038_25093[(2)] = false);

(statearr_25038_25093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (26))){
var inst_24952 = (state_24992[(10)]);
var inst_24959 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24952);
var state_24992__$1 = state_24992;
var statearr_25039_25094 = state_24992__$1;
(statearr_25039_25094[(2)] = inst_24959);

(statearr_25039_25094[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (16))){
var state_24992__$1 = state_24992;
var statearr_25040_25095 = state_24992__$1;
(statearr_25040_25095[(2)] = true);

(statearr_25040_25095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (38))){
var inst_24982 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
var statearr_25041_25096 = state_24992__$1;
(statearr_25041_25096[(2)] = inst_24982);

(statearr_25041_25096[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (30))){
var inst_24946 = (state_24992[(13)]);
var inst_24952 = (state_24992[(10)]);
var inst_24945 = (state_24992[(11)]);
var inst_24969 = cljs.core.empty_QMARK_.call(null,inst_24945);
var inst_24970 = inst_24946.call(null,inst_24952);
var inst_24971 = cljs.core.not.call(null,inst_24970);
var inst_24972 = (inst_24969) && (inst_24971);
var state_24992__$1 = state_24992;
var statearr_25042_25097 = state_24992__$1;
(statearr_25042_25097[(2)] = inst_24972);

(statearr_25042_25097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (10))){
var inst_24898 = (state_24992[(8)]);
var inst_24918 = (state_24992[(2)]);
var inst_24919 = cljs.core.get.call(null,inst_24918,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24920 = cljs.core.get.call(null,inst_24918,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24921 = cljs.core.get.call(null,inst_24918,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24922 = inst_24898;
var state_24992__$1 = (function (){var statearr_25043 = state_24992;
(statearr_25043[(7)] = inst_24922);

(statearr_25043[(16)] = inst_24919);

(statearr_25043[(17)] = inst_24921);

(statearr_25043[(18)] = inst_24920);

return statearr_25043;
})();
var statearr_25044_25098 = state_24992__$1;
(statearr_25044_25098[(2)] = null);

(statearr_25044_25098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (18))){
var inst_24936 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
var statearr_25045_25099 = state_24992__$1;
(statearr_25045_25099[(2)] = inst_24936);

(statearr_25045_25099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (37))){
var state_24992__$1 = state_24992;
var statearr_25046_25100 = state_24992__$1;
(statearr_25046_25100[(2)] = null);

(statearr_25046_25100[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24993 === (8))){
var inst_24898 = (state_24992[(8)]);
var inst_24915 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24898);
var state_24992__$1 = state_24992;
var statearr_25047_25101 = state_24992__$1;
(statearr_25047_25101[(2)] = inst_24915);

(statearr_25047_25101[(1)] = (10));


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
});})(c__23342__auto___25055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23230__auto__,c__23342__auto___25055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23231__auto__ = null;
var cljs$core$async$mix_$_state_machine__23231__auto____0 = (function (){
var statearr_25051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25051[(0)] = cljs$core$async$mix_$_state_machine__23231__auto__);

(statearr_25051[(1)] = (1));

return statearr_25051;
});
var cljs$core$async$mix_$_state_machine__23231__auto____1 = (function (state_24992){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_24992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e25052){if((e25052 instanceof Object)){
var ex__23234__auto__ = e25052;
var statearr_25053_25102 = state_24992;
(statearr_25053_25102[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25103 = state_24992;
state_24992 = G__25103;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23231__auto__ = function(state_24992){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23231__auto____1.call(this,state_24992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23231__auto____0;
cljs$core$async$mix_$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23231__auto____1;
return cljs$core$async$mix_$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___25055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23344__auto__ = (function (){var statearr_25054 = f__23343__auto__.call(null);
(statearr_25054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___25055);

return statearr_25054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___25055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17387__auto__ = (((p == null))?null:p);
var m__17388__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17388__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17387__auto__ = (((p == null))?null:p);
var m__17388__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,p,v,ch);
} else {
var m__17388__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25104 = [];
var len__17790__auto___25107 = arguments.length;
var i__17791__auto___25108 = (0);
while(true){
if((i__17791__auto___25108 < len__17790__auto___25107)){
args25104.push((arguments[i__17791__auto___25108]));

var G__25109 = (i__17791__auto___25108 + (1));
i__17791__auto___25108 = G__25109;
continue;
} else {
}
break;
}

var G__25106 = args25104.length;
switch (G__25106) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25104.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17387__auto__ = (((p == null))?null:p);
var m__17388__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,p);
} else {
var m__17388__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17387__auto__ = (((p == null))?null:p);
var m__17388__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17387__auto__)]);
if(!((m__17388__auto__ == null))){
return m__17388__auto__.call(null,p,v);
} else {
var m__17388__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17388__auto____$1 == null))){
return m__17388__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25112 = [];
var len__17790__auto___25237 = arguments.length;
var i__17791__auto___25238 = (0);
while(true){
if((i__17791__auto___25238 < len__17790__auto___25237)){
args25112.push((arguments[i__17791__auto___25238]));

var G__25239 = (i__17791__auto___25238 + (1));
i__17791__auto___25238 = G__25239;
continue;
} else {
}
break;
}

var G__25114 = args25112.length;
switch (G__25114) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25112.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16732__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16732__auto__)){
return or__16732__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16732__auto__,mults){
return (function (p1__25111_SHARP_){
if(cljs.core.truth_(p1__25111_SHARP_.call(null,topic))){
return p1__25111_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25111_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16732__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25115 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25116){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25116 = meta25116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25117,meta25116__$1){
var self__ = this;
var _25117__$1 = this;
return (new cljs.core.async.t_cljs$core$async25115(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25116__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25117){
var self__ = this;
var _25117__$1 = this;
return self__.meta25116;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25115.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25115.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25115.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25115.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25115.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25116","meta25116",-1790818748,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25115";

cljs.core.async.t_cljs$core$async25115.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async25115");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25115 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25115(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25116){
return (new cljs.core.async.t_cljs$core$async25115(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25116));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25115(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23342__auto___25241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___25241,mults,ensure_mult,p){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___25241,mults,ensure_mult,p){
return (function (state_25189){
var state_val_25190 = (state_25189[(1)]);
if((state_val_25190 === (7))){
var inst_25185 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25191_25242 = state_25189__$1;
(statearr_25191_25242[(2)] = inst_25185);

(statearr_25191_25242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (20))){
var state_25189__$1 = state_25189;
var statearr_25192_25243 = state_25189__$1;
(statearr_25192_25243[(2)] = null);

(statearr_25192_25243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (1))){
var state_25189__$1 = state_25189;
var statearr_25193_25244 = state_25189__$1;
(statearr_25193_25244[(2)] = null);

(statearr_25193_25244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (24))){
var inst_25168 = (state_25189[(7)]);
var inst_25177 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25168);
var state_25189__$1 = state_25189;
var statearr_25194_25245 = state_25189__$1;
(statearr_25194_25245[(2)] = inst_25177);

(statearr_25194_25245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (4))){
var inst_25120 = (state_25189[(8)]);
var inst_25120__$1 = (state_25189[(2)]);
var inst_25121 = (inst_25120__$1 == null);
var state_25189__$1 = (function (){var statearr_25195 = state_25189;
(statearr_25195[(8)] = inst_25120__$1);

return statearr_25195;
})();
if(cljs.core.truth_(inst_25121)){
var statearr_25196_25246 = state_25189__$1;
(statearr_25196_25246[(1)] = (5));

} else {
var statearr_25197_25247 = state_25189__$1;
(statearr_25197_25247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (15))){
var inst_25162 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25198_25248 = state_25189__$1;
(statearr_25198_25248[(2)] = inst_25162);

(statearr_25198_25248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (21))){
var inst_25182 = (state_25189[(2)]);
var state_25189__$1 = (function (){var statearr_25199 = state_25189;
(statearr_25199[(9)] = inst_25182);

return statearr_25199;
})();
var statearr_25200_25249 = state_25189__$1;
(statearr_25200_25249[(2)] = null);

(statearr_25200_25249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (13))){
var inst_25144 = (state_25189[(10)]);
var inst_25146 = cljs.core.chunked_seq_QMARK_.call(null,inst_25144);
var state_25189__$1 = state_25189;
if(inst_25146){
var statearr_25201_25250 = state_25189__$1;
(statearr_25201_25250[(1)] = (16));

} else {
var statearr_25202_25251 = state_25189__$1;
(statearr_25202_25251[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (22))){
var inst_25174 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
if(cljs.core.truth_(inst_25174)){
var statearr_25203_25252 = state_25189__$1;
(statearr_25203_25252[(1)] = (23));

} else {
var statearr_25204_25253 = state_25189__$1;
(statearr_25204_25253[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (6))){
var inst_25168 = (state_25189[(7)]);
var inst_25170 = (state_25189[(11)]);
var inst_25120 = (state_25189[(8)]);
var inst_25168__$1 = topic_fn.call(null,inst_25120);
var inst_25169 = cljs.core.deref.call(null,mults);
var inst_25170__$1 = cljs.core.get.call(null,inst_25169,inst_25168__$1);
var state_25189__$1 = (function (){var statearr_25205 = state_25189;
(statearr_25205[(7)] = inst_25168__$1);

(statearr_25205[(11)] = inst_25170__$1);

return statearr_25205;
})();
if(cljs.core.truth_(inst_25170__$1)){
var statearr_25206_25254 = state_25189__$1;
(statearr_25206_25254[(1)] = (19));

} else {
var statearr_25207_25255 = state_25189__$1;
(statearr_25207_25255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (25))){
var inst_25179 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25208_25256 = state_25189__$1;
(statearr_25208_25256[(2)] = inst_25179);

(statearr_25208_25256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (17))){
var inst_25144 = (state_25189[(10)]);
var inst_25153 = cljs.core.first.call(null,inst_25144);
var inst_25154 = cljs.core.async.muxch_STAR_.call(null,inst_25153);
var inst_25155 = cljs.core.async.close_BANG_.call(null,inst_25154);
var inst_25156 = cljs.core.next.call(null,inst_25144);
var inst_25130 = inst_25156;
var inst_25131 = null;
var inst_25132 = (0);
var inst_25133 = (0);
var state_25189__$1 = (function (){var statearr_25209 = state_25189;
(statearr_25209[(12)] = inst_25131);

(statearr_25209[(13)] = inst_25155);

(statearr_25209[(14)] = inst_25133);

(statearr_25209[(15)] = inst_25130);

(statearr_25209[(16)] = inst_25132);

return statearr_25209;
})();
var statearr_25210_25257 = state_25189__$1;
(statearr_25210_25257[(2)] = null);

(statearr_25210_25257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (3))){
var inst_25187 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25189__$1,inst_25187);
} else {
if((state_val_25190 === (12))){
var inst_25164 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25211_25258 = state_25189__$1;
(statearr_25211_25258[(2)] = inst_25164);

(statearr_25211_25258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (2))){
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25189__$1,(4),ch);
} else {
if((state_val_25190 === (23))){
var state_25189__$1 = state_25189;
var statearr_25212_25259 = state_25189__$1;
(statearr_25212_25259[(2)] = null);

(statearr_25212_25259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (19))){
var inst_25170 = (state_25189[(11)]);
var inst_25120 = (state_25189[(8)]);
var inst_25172 = cljs.core.async.muxch_STAR_.call(null,inst_25170);
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25189__$1,(22),inst_25172,inst_25120);
} else {
if((state_val_25190 === (11))){
var inst_25130 = (state_25189[(15)]);
var inst_25144 = (state_25189[(10)]);
var inst_25144__$1 = cljs.core.seq.call(null,inst_25130);
var state_25189__$1 = (function (){var statearr_25213 = state_25189;
(statearr_25213[(10)] = inst_25144__$1);

return statearr_25213;
})();
if(inst_25144__$1){
var statearr_25214_25260 = state_25189__$1;
(statearr_25214_25260[(1)] = (13));

} else {
var statearr_25215_25261 = state_25189__$1;
(statearr_25215_25261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (9))){
var inst_25166 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25216_25262 = state_25189__$1;
(statearr_25216_25262[(2)] = inst_25166);

(statearr_25216_25262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (5))){
var inst_25127 = cljs.core.deref.call(null,mults);
var inst_25128 = cljs.core.vals.call(null,inst_25127);
var inst_25129 = cljs.core.seq.call(null,inst_25128);
var inst_25130 = inst_25129;
var inst_25131 = null;
var inst_25132 = (0);
var inst_25133 = (0);
var state_25189__$1 = (function (){var statearr_25217 = state_25189;
(statearr_25217[(12)] = inst_25131);

(statearr_25217[(14)] = inst_25133);

(statearr_25217[(15)] = inst_25130);

(statearr_25217[(16)] = inst_25132);

return statearr_25217;
})();
var statearr_25218_25263 = state_25189__$1;
(statearr_25218_25263[(2)] = null);

(statearr_25218_25263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (14))){
var state_25189__$1 = state_25189;
var statearr_25222_25264 = state_25189__$1;
(statearr_25222_25264[(2)] = null);

(statearr_25222_25264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (16))){
var inst_25144 = (state_25189[(10)]);
var inst_25148 = cljs.core.chunk_first.call(null,inst_25144);
var inst_25149 = cljs.core.chunk_rest.call(null,inst_25144);
var inst_25150 = cljs.core.count.call(null,inst_25148);
var inst_25130 = inst_25149;
var inst_25131 = inst_25148;
var inst_25132 = inst_25150;
var inst_25133 = (0);
var state_25189__$1 = (function (){var statearr_25223 = state_25189;
(statearr_25223[(12)] = inst_25131);

(statearr_25223[(14)] = inst_25133);

(statearr_25223[(15)] = inst_25130);

(statearr_25223[(16)] = inst_25132);

return statearr_25223;
})();
var statearr_25224_25265 = state_25189__$1;
(statearr_25224_25265[(2)] = null);

(statearr_25224_25265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (10))){
var inst_25131 = (state_25189[(12)]);
var inst_25133 = (state_25189[(14)]);
var inst_25130 = (state_25189[(15)]);
var inst_25132 = (state_25189[(16)]);
var inst_25138 = cljs.core._nth.call(null,inst_25131,inst_25133);
var inst_25139 = cljs.core.async.muxch_STAR_.call(null,inst_25138);
var inst_25140 = cljs.core.async.close_BANG_.call(null,inst_25139);
var inst_25141 = (inst_25133 + (1));
var tmp25219 = inst_25131;
var tmp25220 = inst_25130;
var tmp25221 = inst_25132;
var inst_25130__$1 = tmp25220;
var inst_25131__$1 = tmp25219;
var inst_25132__$1 = tmp25221;
var inst_25133__$1 = inst_25141;
var state_25189__$1 = (function (){var statearr_25225 = state_25189;
(statearr_25225[(12)] = inst_25131__$1);

(statearr_25225[(14)] = inst_25133__$1);

(statearr_25225[(17)] = inst_25140);

(statearr_25225[(15)] = inst_25130__$1);

(statearr_25225[(16)] = inst_25132__$1);

return statearr_25225;
})();
var statearr_25226_25266 = state_25189__$1;
(statearr_25226_25266[(2)] = null);

(statearr_25226_25266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (18))){
var inst_25159 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25227_25267 = state_25189__$1;
(statearr_25227_25267[(2)] = inst_25159);

(statearr_25227_25267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (8))){
var inst_25133 = (state_25189[(14)]);
var inst_25132 = (state_25189[(16)]);
var inst_25135 = (inst_25133 < inst_25132);
var inst_25136 = inst_25135;
var state_25189__$1 = state_25189;
if(cljs.core.truth_(inst_25136)){
var statearr_25228_25268 = state_25189__$1;
(statearr_25228_25268[(1)] = (10));

} else {
var statearr_25229_25269 = state_25189__$1;
(statearr_25229_25269[(1)] = (11));

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
});})(c__23342__auto___25241,mults,ensure_mult,p))
;
return ((function (switch__23230__auto__,c__23342__auto___25241,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_25233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25233[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_25233[(1)] = (1));

return statearr_25233;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_25189){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_25189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e25234){if((e25234 instanceof Object)){
var ex__23234__auto__ = e25234;
var statearr_25235_25270 = state_25189;
(statearr_25235_25270[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25271 = state_25189;
state_25189 = G__25271;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_25189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_25189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___25241,mults,ensure_mult,p))
})();
var state__23344__auto__ = (function (){var statearr_25236 = f__23343__auto__.call(null);
(statearr_25236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___25241);

return statearr_25236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___25241,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25272 = [];
var len__17790__auto___25275 = arguments.length;
var i__17791__auto___25276 = (0);
while(true){
if((i__17791__auto___25276 < len__17790__auto___25275)){
args25272.push((arguments[i__17791__auto___25276]));

var G__25277 = (i__17791__auto___25276 + (1));
i__17791__auto___25276 = G__25277;
continue;
} else {
}
break;
}

var G__25274 = args25272.length;
switch (G__25274) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25272.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25279 = [];
var len__17790__auto___25282 = arguments.length;
var i__17791__auto___25283 = (0);
while(true){
if((i__17791__auto___25283 < len__17790__auto___25282)){
args25279.push((arguments[i__17791__auto___25283]));

var G__25284 = (i__17791__auto___25283 + (1));
i__17791__auto___25283 = G__25284;
continue;
} else {
}
break;
}

var G__25281 = args25279.length;
switch (G__25281) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25279.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25286 = [];
var len__17790__auto___25357 = arguments.length;
var i__17791__auto___25358 = (0);
while(true){
if((i__17791__auto___25358 < len__17790__auto___25357)){
args25286.push((arguments[i__17791__auto___25358]));

var G__25359 = (i__17791__auto___25358 + (1));
i__17791__auto___25358 = G__25359;
continue;
} else {
}
break;
}

var G__25288 = args25286.length;
switch (G__25288) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25286.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23342__auto___25361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___25361,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___25361,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25327){
var state_val_25328 = (state_25327[(1)]);
if((state_val_25328 === (7))){
var state_25327__$1 = state_25327;
var statearr_25329_25362 = state_25327__$1;
(statearr_25329_25362[(2)] = null);

(statearr_25329_25362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (1))){
var state_25327__$1 = state_25327;
var statearr_25330_25363 = state_25327__$1;
(statearr_25330_25363[(2)] = null);

(statearr_25330_25363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (4))){
var inst_25291 = (state_25327[(7)]);
var inst_25293 = (inst_25291 < cnt);
var state_25327__$1 = state_25327;
if(cljs.core.truth_(inst_25293)){
var statearr_25331_25364 = state_25327__$1;
(statearr_25331_25364[(1)] = (6));

} else {
var statearr_25332_25365 = state_25327__$1;
(statearr_25332_25365[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (15))){
var inst_25323 = (state_25327[(2)]);
var state_25327__$1 = state_25327;
var statearr_25333_25366 = state_25327__$1;
(statearr_25333_25366[(2)] = inst_25323);

(statearr_25333_25366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (13))){
var inst_25316 = cljs.core.async.close_BANG_.call(null,out);
var state_25327__$1 = state_25327;
var statearr_25334_25367 = state_25327__$1;
(statearr_25334_25367[(2)] = inst_25316);

(statearr_25334_25367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (6))){
var state_25327__$1 = state_25327;
var statearr_25335_25368 = state_25327__$1;
(statearr_25335_25368[(2)] = null);

(statearr_25335_25368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (3))){
var inst_25325 = (state_25327[(2)]);
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25327__$1,inst_25325);
} else {
if((state_val_25328 === (12))){
var inst_25313 = (state_25327[(8)]);
var inst_25313__$1 = (state_25327[(2)]);
var inst_25314 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25313__$1);
var state_25327__$1 = (function (){var statearr_25336 = state_25327;
(statearr_25336[(8)] = inst_25313__$1);

return statearr_25336;
})();
if(cljs.core.truth_(inst_25314)){
var statearr_25337_25369 = state_25327__$1;
(statearr_25337_25369[(1)] = (13));

} else {
var statearr_25338_25370 = state_25327__$1;
(statearr_25338_25370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (2))){
var inst_25290 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25291 = (0);
var state_25327__$1 = (function (){var statearr_25339 = state_25327;
(statearr_25339[(7)] = inst_25291);

(statearr_25339[(9)] = inst_25290);

return statearr_25339;
})();
var statearr_25340_25371 = state_25327__$1;
(statearr_25340_25371[(2)] = null);

(statearr_25340_25371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (11))){
var inst_25291 = (state_25327[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25327,(10),Object,null,(9));
var inst_25300 = chs__$1.call(null,inst_25291);
var inst_25301 = done.call(null,inst_25291);
var inst_25302 = cljs.core.async.take_BANG_.call(null,inst_25300,inst_25301);
var state_25327__$1 = state_25327;
var statearr_25341_25372 = state_25327__$1;
(statearr_25341_25372[(2)] = inst_25302);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25327__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (9))){
var inst_25291 = (state_25327[(7)]);
var inst_25304 = (state_25327[(2)]);
var inst_25305 = (inst_25291 + (1));
var inst_25291__$1 = inst_25305;
var state_25327__$1 = (function (){var statearr_25342 = state_25327;
(statearr_25342[(10)] = inst_25304);

(statearr_25342[(7)] = inst_25291__$1);

return statearr_25342;
})();
var statearr_25343_25373 = state_25327__$1;
(statearr_25343_25373[(2)] = null);

(statearr_25343_25373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (5))){
var inst_25311 = (state_25327[(2)]);
var state_25327__$1 = (function (){var statearr_25344 = state_25327;
(statearr_25344[(11)] = inst_25311);

return statearr_25344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25327__$1,(12),dchan);
} else {
if((state_val_25328 === (14))){
var inst_25313 = (state_25327[(8)]);
var inst_25318 = cljs.core.apply.call(null,f,inst_25313);
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25327__$1,(16),out,inst_25318);
} else {
if((state_val_25328 === (16))){
var inst_25320 = (state_25327[(2)]);
var state_25327__$1 = (function (){var statearr_25345 = state_25327;
(statearr_25345[(12)] = inst_25320);

return statearr_25345;
})();
var statearr_25346_25374 = state_25327__$1;
(statearr_25346_25374[(2)] = null);

(statearr_25346_25374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (10))){
var inst_25295 = (state_25327[(2)]);
var inst_25296 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25327__$1 = (function (){var statearr_25347 = state_25327;
(statearr_25347[(13)] = inst_25295);

return statearr_25347;
})();
var statearr_25348_25375 = state_25327__$1;
(statearr_25348_25375[(2)] = inst_25296);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25327__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25328 === (8))){
var inst_25309 = (state_25327[(2)]);
var state_25327__$1 = state_25327;
var statearr_25349_25376 = state_25327__$1;
(statearr_25349_25376[(2)] = inst_25309);

(statearr_25349_25376[(1)] = (5));


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
});})(c__23342__auto___25361,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23230__auto__,c__23342__auto___25361,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_25353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25353[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_25353[(1)] = (1));

return statearr_25353;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_25327){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_25327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e25354){if((e25354 instanceof Object)){
var ex__23234__auto__ = e25354;
var statearr_25355_25377 = state_25327;
(statearr_25355_25377[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25378 = state_25327;
state_25327 = G__25378;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_25327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_25327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___25361,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23344__auto__ = (function (){var statearr_25356 = f__23343__auto__.call(null);
(statearr_25356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___25361);

return statearr_25356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___25361,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25380 = [];
var len__17790__auto___25436 = arguments.length;
var i__17791__auto___25437 = (0);
while(true){
if((i__17791__auto___25437 < len__17790__auto___25436)){
args25380.push((arguments[i__17791__auto___25437]));

var G__25438 = (i__17791__auto___25437 + (1));
i__17791__auto___25437 = G__25438;
continue;
} else {
}
break;
}

var G__25382 = args25380.length;
switch (G__25382) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25380.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23342__auto___25440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___25440,out){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___25440,out){
return (function (state_25412){
var state_val_25413 = (state_25412[(1)]);
if((state_val_25413 === (7))){
var inst_25392 = (state_25412[(7)]);
var inst_25391 = (state_25412[(8)]);
var inst_25391__$1 = (state_25412[(2)]);
var inst_25392__$1 = cljs.core.nth.call(null,inst_25391__$1,(0),null);
var inst_25393 = cljs.core.nth.call(null,inst_25391__$1,(1),null);
var inst_25394 = (inst_25392__$1 == null);
var state_25412__$1 = (function (){var statearr_25414 = state_25412;
(statearr_25414[(7)] = inst_25392__$1);

(statearr_25414[(8)] = inst_25391__$1);

(statearr_25414[(9)] = inst_25393);

return statearr_25414;
})();
if(cljs.core.truth_(inst_25394)){
var statearr_25415_25441 = state_25412__$1;
(statearr_25415_25441[(1)] = (8));

} else {
var statearr_25416_25442 = state_25412__$1;
(statearr_25416_25442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (1))){
var inst_25383 = cljs.core.vec.call(null,chs);
var inst_25384 = inst_25383;
var state_25412__$1 = (function (){var statearr_25417 = state_25412;
(statearr_25417[(10)] = inst_25384);

return statearr_25417;
})();
var statearr_25418_25443 = state_25412__$1;
(statearr_25418_25443[(2)] = null);

(statearr_25418_25443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (4))){
var inst_25384 = (state_25412[(10)]);
var state_25412__$1 = state_25412;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25412__$1,(7),inst_25384);
} else {
if((state_val_25413 === (6))){
var inst_25408 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
var statearr_25419_25444 = state_25412__$1;
(statearr_25419_25444[(2)] = inst_25408);

(statearr_25419_25444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (3))){
var inst_25410 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25412__$1,inst_25410);
} else {
if((state_val_25413 === (2))){
var inst_25384 = (state_25412[(10)]);
var inst_25386 = cljs.core.count.call(null,inst_25384);
var inst_25387 = (inst_25386 > (0));
var state_25412__$1 = state_25412;
if(cljs.core.truth_(inst_25387)){
var statearr_25421_25445 = state_25412__$1;
(statearr_25421_25445[(1)] = (4));

} else {
var statearr_25422_25446 = state_25412__$1;
(statearr_25422_25446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (11))){
var inst_25384 = (state_25412[(10)]);
var inst_25401 = (state_25412[(2)]);
var tmp25420 = inst_25384;
var inst_25384__$1 = tmp25420;
var state_25412__$1 = (function (){var statearr_25423 = state_25412;
(statearr_25423[(10)] = inst_25384__$1);

(statearr_25423[(11)] = inst_25401);

return statearr_25423;
})();
var statearr_25424_25447 = state_25412__$1;
(statearr_25424_25447[(2)] = null);

(statearr_25424_25447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (9))){
var inst_25392 = (state_25412[(7)]);
var state_25412__$1 = state_25412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25412__$1,(11),out,inst_25392);
} else {
if((state_val_25413 === (5))){
var inst_25406 = cljs.core.async.close_BANG_.call(null,out);
var state_25412__$1 = state_25412;
var statearr_25425_25448 = state_25412__$1;
(statearr_25425_25448[(2)] = inst_25406);

(statearr_25425_25448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (10))){
var inst_25404 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
var statearr_25426_25449 = state_25412__$1;
(statearr_25426_25449[(2)] = inst_25404);

(statearr_25426_25449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (8))){
var inst_25384 = (state_25412[(10)]);
var inst_25392 = (state_25412[(7)]);
var inst_25391 = (state_25412[(8)]);
var inst_25393 = (state_25412[(9)]);
var inst_25396 = (function (){var cs = inst_25384;
var vec__25389 = inst_25391;
var v = inst_25392;
var c = inst_25393;
return ((function (cs,vec__25389,v,c,inst_25384,inst_25392,inst_25391,inst_25393,state_val_25413,c__23342__auto___25440,out){
return (function (p1__25379_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25379_SHARP_);
});
;})(cs,vec__25389,v,c,inst_25384,inst_25392,inst_25391,inst_25393,state_val_25413,c__23342__auto___25440,out))
})();
var inst_25397 = cljs.core.filterv.call(null,inst_25396,inst_25384);
var inst_25384__$1 = inst_25397;
var state_25412__$1 = (function (){var statearr_25427 = state_25412;
(statearr_25427[(10)] = inst_25384__$1);

return statearr_25427;
})();
var statearr_25428_25450 = state_25412__$1;
(statearr_25428_25450[(2)] = null);

(statearr_25428_25450[(1)] = (2));


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
});})(c__23342__auto___25440,out))
;
return ((function (switch__23230__auto__,c__23342__auto___25440,out){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_25432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25432[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_25432[(1)] = (1));

return statearr_25432;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_25412){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_25412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e25433){if((e25433 instanceof Object)){
var ex__23234__auto__ = e25433;
var statearr_25434_25451 = state_25412;
(statearr_25434_25451[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25452 = state_25412;
state_25412 = G__25452;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_25412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_25412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___25440,out))
})();
var state__23344__auto__ = (function (){var statearr_25435 = f__23343__auto__.call(null);
(statearr_25435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___25440);

return statearr_25435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___25440,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25453 = [];
var len__17790__auto___25502 = arguments.length;
var i__17791__auto___25503 = (0);
while(true){
if((i__17791__auto___25503 < len__17790__auto___25502)){
args25453.push((arguments[i__17791__auto___25503]));

var G__25504 = (i__17791__auto___25503 + (1));
i__17791__auto___25503 = G__25504;
continue;
} else {
}
break;
}

var G__25455 = args25453.length;
switch (G__25455) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25453.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23342__auto___25506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___25506,out){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___25506,out){
return (function (state_25479){
var state_val_25480 = (state_25479[(1)]);
if((state_val_25480 === (7))){
var inst_25461 = (state_25479[(7)]);
var inst_25461__$1 = (state_25479[(2)]);
var inst_25462 = (inst_25461__$1 == null);
var inst_25463 = cljs.core.not.call(null,inst_25462);
var state_25479__$1 = (function (){var statearr_25481 = state_25479;
(statearr_25481[(7)] = inst_25461__$1);

return statearr_25481;
})();
if(inst_25463){
var statearr_25482_25507 = state_25479__$1;
(statearr_25482_25507[(1)] = (8));

} else {
var statearr_25483_25508 = state_25479__$1;
(statearr_25483_25508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (1))){
var inst_25456 = (0);
var state_25479__$1 = (function (){var statearr_25484 = state_25479;
(statearr_25484[(8)] = inst_25456);

return statearr_25484;
})();
var statearr_25485_25509 = state_25479__$1;
(statearr_25485_25509[(2)] = null);

(statearr_25485_25509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (4))){
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25479__$1,(7),ch);
} else {
if((state_val_25480 === (6))){
var inst_25474 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25486_25510 = state_25479__$1;
(statearr_25486_25510[(2)] = inst_25474);

(statearr_25486_25510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (3))){
var inst_25476 = (state_25479[(2)]);
var inst_25477 = cljs.core.async.close_BANG_.call(null,out);
var state_25479__$1 = (function (){var statearr_25487 = state_25479;
(statearr_25487[(9)] = inst_25476);

return statearr_25487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25479__$1,inst_25477);
} else {
if((state_val_25480 === (2))){
var inst_25456 = (state_25479[(8)]);
var inst_25458 = (inst_25456 < n);
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25458)){
var statearr_25488_25511 = state_25479__$1;
(statearr_25488_25511[(1)] = (4));

} else {
var statearr_25489_25512 = state_25479__$1;
(statearr_25489_25512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (11))){
var inst_25456 = (state_25479[(8)]);
var inst_25466 = (state_25479[(2)]);
var inst_25467 = (inst_25456 + (1));
var inst_25456__$1 = inst_25467;
var state_25479__$1 = (function (){var statearr_25490 = state_25479;
(statearr_25490[(8)] = inst_25456__$1);

(statearr_25490[(10)] = inst_25466);

return statearr_25490;
})();
var statearr_25491_25513 = state_25479__$1;
(statearr_25491_25513[(2)] = null);

(statearr_25491_25513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (9))){
var state_25479__$1 = state_25479;
var statearr_25492_25514 = state_25479__$1;
(statearr_25492_25514[(2)] = null);

(statearr_25492_25514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (5))){
var state_25479__$1 = state_25479;
var statearr_25493_25515 = state_25479__$1;
(statearr_25493_25515[(2)] = null);

(statearr_25493_25515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (10))){
var inst_25471 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25494_25516 = state_25479__$1;
(statearr_25494_25516[(2)] = inst_25471);

(statearr_25494_25516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (8))){
var inst_25461 = (state_25479[(7)]);
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25479__$1,(11),out,inst_25461);
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
});})(c__23342__auto___25506,out))
;
return ((function (switch__23230__auto__,c__23342__auto___25506,out){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_25498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25498[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_25498[(1)] = (1));

return statearr_25498;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_25479){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_25479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e25499){if((e25499 instanceof Object)){
var ex__23234__auto__ = e25499;
var statearr_25500_25517 = state_25479;
(statearr_25500_25517[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25518 = state_25479;
state_25479 = G__25518;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_25479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_25479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___25506,out))
})();
var state__23344__auto__ = (function (){var statearr_25501 = f__23343__auto__.call(null);
(statearr_25501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___25506);

return statearr_25501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___25506,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25526 = (function (map_LT_,f,ch,meta25527){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25527 = meta25527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25528,meta25527__$1){
var self__ = this;
var _25528__$1 = this;
return (new cljs.core.async.t_cljs$core$async25526(self__.map_LT_,self__.f,self__.ch,meta25527__$1));
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25528){
var self__ = this;
var _25528__$1 = this;
return self__.meta25527;
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25529 = (function (map_LT_,f,ch,meta25527,_,fn1,meta25530){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25527 = meta25527;
this._ = _;
this.fn1 = fn1;
this.meta25530 = meta25530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25531,meta25530__$1){
var self__ = this;
var _25531__$1 = this;
return (new cljs.core.async.t_cljs$core$async25529(self__.map_LT_,self__.f,self__.ch,self__.meta25527,self__._,self__.fn1,meta25530__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25531){
var self__ = this;
var _25531__$1 = this;
return self__.meta25530;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25519_SHARP_){
return f1.call(null,(((p1__25519_SHARP_ == null))?null:self__.f.call(null,p1__25519_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25529.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25527","meta25527",310591398,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25526","cljs.core.async/t_cljs$core$async25526",528474083,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25530","meta25530",-1096473380,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25529";

cljs.core.async.t_cljs$core$async25529.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async25529");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25529 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25529(map_LT___$1,f__$1,ch__$1,meta25527__$1,___$2,fn1__$1,meta25530){
return (new cljs.core.async.t_cljs$core$async25529(map_LT___$1,f__$1,ch__$1,meta25527__$1,___$2,fn1__$1,meta25530));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25529(self__.map_LT_,self__.f,self__.ch,self__.meta25527,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16720__auto__ = ret;
if(cljs.core.truth_(and__16720__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16720__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25527","meta25527",310591398,null)], null);
});

cljs.core.async.t_cljs$core$async25526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25526";

cljs.core.async.t_cljs$core$async25526.cljs$lang$ctorPrWriter = (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async25526");
});

cljs.core.async.__GT_t_cljs$core$async25526 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25526(map_LT___$1,f__$1,ch__$1,meta25527){
return (new cljs.core.async.t_cljs$core$async25526(map_LT___$1,f__$1,ch__$1,meta25527));
});

}

return (new cljs.core.async.t_cljs$core$async25526(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25535 = (function (map_GT_,f,ch,meta25536){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25536 = meta25536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25537,meta25536__$1){
var self__ = this;
var _25537__$1 = this;
return (new cljs.core.async.t_cljs$core$async25535(self__.map_GT_,self__.f,self__.ch,meta25536__$1));
});

cljs.core.async.t_cljs$core$async25535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25537){
var self__ = this;
var _25537__$1 = this;
return self__.meta25536;
});

cljs.core.async.t_cljs$core$async25535.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25535.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25535.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25536","meta25536",-2017199544,null)], null);
});

cljs.core.async.t_cljs$core$async25535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25535";

cljs.core.async.t_cljs$core$async25535.cljs$lang$ctorPrWriter = (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async25535");
});

cljs.core.async.__GT_t_cljs$core$async25535 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25535(map_GT___$1,f__$1,ch__$1,meta25536){
return (new cljs.core.async.t_cljs$core$async25535(map_GT___$1,f__$1,ch__$1,meta25536));
});

}

return (new cljs.core.async.t_cljs$core$async25535(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25541 = (function (filter_GT_,p,ch,meta25542){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25542 = meta25542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25543,meta25542__$1){
var self__ = this;
var _25543__$1 = this;
return (new cljs.core.async.t_cljs$core$async25541(self__.filter_GT_,self__.p,self__.ch,meta25542__$1));
});

cljs.core.async.t_cljs$core$async25541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25543){
var self__ = this;
var _25543__$1 = this;
return self__.meta25542;
});

cljs.core.async.t_cljs$core$async25541.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25541.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25541.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25541.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25542","meta25542",304588783,null)], null);
});

cljs.core.async.t_cljs$core$async25541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25541";

cljs.core.async.t_cljs$core$async25541.cljs$lang$ctorPrWriter = (function (this__17330__auto__,writer__17331__auto__,opt__17332__auto__){
return cljs.core._write.call(null,writer__17331__auto__,"cljs.core.async/t_cljs$core$async25541");
});

cljs.core.async.__GT_t_cljs$core$async25541 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25541(filter_GT___$1,p__$1,ch__$1,meta25542){
return (new cljs.core.async.t_cljs$core$async25541(filter_GT___$1,p__$1,ch__$1,meta25542));
});

}

return (new cljs.core.async.t_cljs$core$async25541(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25544 = [];
var len__17790__auto___25588 = arguments.length;
var i__17791__auto___25589 = (0);
while(true){
if((i__17791__auto___25589 < len__17790__auto___25588)){
args25544.push((arguments[i__17791__auto___25589]));

var G__25590 = (i__17791__auto___25589 + (1));
i__17791__auto___25589 = G__25590;
continue;
} else {
}
break;
}

var G__25546 = args25544.length;
switch (G__25546) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25544.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23342__auto___25592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___25592,out){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___25592,out){
return (function (state_25567){
var state_val_25568 = (state_25567[(1)]);
if((state_val_25568 === (7))){
var inst_25563 = (state_25567[(2)]);
var state_25567__$1 = state_25567;
var statearr_25569_25593 = state_25567__$1;
(statearr_25569_25593[(2)] = inst_25563);

(statearr_25569_25593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (1))){
var state_25567__$1 = state_25567;
var statearr_25570_25594 = state_25567__$1;
(statearr_25570_25594[(2)] = null);

(statearr_25570_25594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (4))){
var inst_25549 = (state_25567[(7)]);
var inst_25549__$1 = (state_25567[(2)]);
var inst_25550 = (inst_25549__$1 == null);
var state_25567__$1 = (function (){var statearr_25571 = state_25567;
(statearr_25571[(7)] = inst_25549__$1);

return statearr_25571;
})();
if(cljs.core.truth_(inst_25550)){
var statearr_25572_25595 = state_25567__$1;
(statearr_25572_25595[(1)] = (5));

} else {
var statearr_25573_25596 = state_25567__$1;
(statearr_25573_25596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (6))){
var inst_25549 = (state_25567[(7)]);
var inst_25554 = p.call(null,inst_25549);
var state_25567__$1 = state_25567;
if(cljs.core.truth_(inst_25554)){
var statearr_25574_25597 = state_25567__$1;
(statearr_25574_25597[(1)] = (8));

} else {
var statearr_25575_25598 = state_25567__$1;
(statearr_25575_25598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (3))){
var inst_25565 = (state_25567[(2)]);
var state_25567__$1 = state_25567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25567__$1,inst_25565);
} else {
if((state_val_25568 === (2))){
var state_25567__$1 = state_25567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25567__$1,(4),ch);
} else {
if((state_val_25568 === (11))){
var inst_25557 = (state_25567[(2)]);
var state_25567__$1 = state_25567;
var statearr_25576_25599 = state_25567__$1;
(statearr_25576_25599[(2)] = inst_25557);

(statearr_25576_25599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (9))){
var state_25567__$1 = state_25567;
var statearr_25577_25600 = state_25567__$1;
(statearr_25577_25600[(2)] = null);

(statearr_25577_25600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (5))){
var inst_25552 = cljs.core.async.close_BANG_.call(null,out);
var state_25567__$1 = state_25567;
var statearr_25578_25601 = state_25567__$1;
(statearr_25578_25601[(2)] = inst_25552);

(statearr_25578_25601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (10))){
var inst_25560 = (state_25567[(2)]);
var state_25567__$1 = (function (){var statearr_25579 = state_25567;
(statearr_25579[(8)] = inst_25560);

return statearr_25579;
})();
var statearr_25580_25602 = state_25567__$1;
(statearr_25580_25602[(2)] = null);

(statearr_25580_25602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25568 === (8))){
var inst_25549 = (state_25567[(7)]);
var state_25567__$1 = state_25567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25567__$1,(11),out,inst_25549);
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
});})(c__23342__auto___25592,out))
;
return ((function (switch__23230__auto__,c__23342__auto___25592,out){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_25584 = [null,null,null,null,null,null,null,null,null];
(statearr_25584[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_25584[(1)] = (1));

return statearr_25584;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_25567){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_25567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e25585){if((e25585 instanceof Object)){
var ex__23234__auto__ = e25585;
var statearr_25586_25603 = state_25567;
(statearr_25586_25603[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25604 = state_25567;
state_25567 = G__25604;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_25567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_25567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___25592,out))
})();
var state__23344__auto__ = (function (){var statearr_25587 = f__23343__auto__.call(null);
(statearr_25587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___25592);

return statearr_25587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___25592,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25605 = [];
var len__17790__auto___25608 = arguments.length;
var i__17791__auto___25609 = (0);
while(true){
if((i__17791__auto___25609 < len__17790__auto___25608)){
args25605.push((arguments[i__17791__auto___25609]));

var G__25610 = (i__17791__auto___25609 + (1));
i__17791__auto___25609 = G__25610;
continue;
} else {
}
break;
}

var G__25607 = args25605.length;
switch (G__25607) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25605.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto__){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto__){
return (function (state_25777){
var state_val_25778 = (state_25777[(1)]);
if((state_val_25778 === (7))){
var inst_25773 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25779_25820 = state_25777__$1;
(statearr_25779_25820[(2)] = inst_25773);

(statearr_25779_25820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (20))){
var inst_25743 = (state_25777[(7)]);
var inst_25754 = (state_25777[(2)]);
var inst_25755 = cljs.core.next.call(null,inst_25743);
var inst_25729 = inst_25755;
var inst_25730 = null;
var inst_25731 = (0);
var inst_25732 = (0);
var state_25777__$1 = (function (){var statearr_25780 = state_25777;
(statearr_25780[(8)] = inst_25731);

(statearr_25780[(9)] = inst_25754);

(statearr_25780[(10)] = inst_25732);

(statearr_25780[(11)] = inst_25730);

(statearr_25780[(12)] = inst_25729);

return statearr_25780;
})();
var statearr_25781_25821 = state_25777__$1;
(statearr_25781_25821[(2)] = null);

(statearr_25781_25821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (1))){
var state_25777__$1 = state_25777;
var statearr_25782_25822 = state_25777__$1;
(statearr_25782_25822[(2)] = null);

(statearr_25782_25822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (4))){
var inst_25718 = (state_25777[(13)]);
var inst_25718__$1 = (state_25777[(2)]);
var inst_25719 = (inst_25718__$1 == null);
var state_25777__$1 = (function (){var statearr_25783 = state_25777;
(statearr_25783[(13)] = inst_25718__$1);

return statearr_25783;
})();
if(cljs.core.truth_(inst_25719)){
var statearr_25784_25823 = state_25777__$1;
(statearr_25784_25823[(1)] = (5));

} else {
var statearr_25785_25824 = state_25777__$1;
(statearr_25785_25824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (15))){
var state_25777__$1 = state_25777;
var statearr_25789_25825 = state_25777__$1;
(statearr_25789_25825[(2)] = null);

(statearr_25789_25825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (21))){
var state_25777__$1 = state_25777;
var statearr_25790_25826 = state_25777__$1;
(statearr_25790_25826[(2)] = null);

(statearr_25790_25826[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (13))){
var inst_25731 = (state_25777[(8)]);
var inst_25732 = (state_25777[(10)]);
var inst_25730 = (state_25777[(11)]);
var inst_25729 = (state_25777[(12)]);
var inst_25739 = (state_25777[(2)]);
var inst_25740 = (inst_25732 + (1));
var tmp25786 = inst_25731;
var tmp25787 = inst_25730;
var tmp25788 = inst_25729;
var inst_25729__$1 = tmp25788;
var inst_25730__$1 = tmp25787;
var inst_25731__$1 = tmp25786;
var inst_25732__$1 = inst_25740;
var state_25777__$1 = (function (){var statearr_25791 = state_25777;
(statearr_25791[(8)] = inst_25731__$1);

(statearr_25791[(10)] = inst_25732__$1);

(statearr_25791[(14)] = inst_25739);

(statearr_25791[(11)] = inst_25730__$1);

(statearr_25791[(12)] = inst_25729__$1);

return statearr_25791;
})();
var statearr_25792_25827 = state_25777__$1;
(statearr_25792_25827[(2)] = null);

(statearr_25792_25827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (22))){
var state_25777__$1 = state_25777;
var statearr_25793_25828 = state_25777__$1;
(statearr_25793_25828[(2)] = null);

(statearr_25793_25828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (6))){
var inst_25718 = (state_25777[(13)]);
var inst_25727 = f.call(null,inst_25718);
var inst_25728 = cljs.core.seq.call(null,inst_25727);
var inst_25729 = inst_25728;
var inst_25730 = null;
var inst_25731 = (0);
var inst_25732 = (0);
var state_25777__$1 = (function (){var statearr_25794 = state_25777;
(statearr_25794[(8)] = inst_25731);

(statearr_25794[(10)] = inst_25732);

(statearr_25794[(11)] = inst_25730);

(statearr_25794[(12)] = inst_25729);

return statearr_25794;
})();
var statearr_25795_25829 = state_25777__$1;
(statearr_25795_25829[(2)] = null);

(statearr_25795_25829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (17))){
var inst_25743 = (state_25777[(7)]);
var inst_25747 = cljs.core.chunk_first.call(null,inst_25743);
var inst_25748 = cljs.core.chunk_rest.call(null,inst_25743);
var inst_25749 = cljs.core.count.call(null,inst_25747);
var inst_25729 = inst_25748;
var inst_25730 = inst_25747;
var inst_25731 = inst_25749;
var inst_25732 = (0);
var state_25777__$1 = (function (){var statearr_25796 = state_25777;
(statearr_25796[(8)] = inst_25731);

(statearr_25796[(10)] = inst_25732);

(statearr_25796[(11)] = inst_25730);

(statearr_25796[(12)] = inst_25729);

return statearr_25796;
})();
var statearr_25797_25830 = state_25777__$1;
(statearr_25797_25830[(2)] = null);

(statearr_25797_25830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (3))){
var inst_25775 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25777__$1,inst_25775);
} else {
if((state_val_25778 === (12))){
var inst_25763 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25798_25831 = state_25777__$1;
(statearr_25798_25831[(2)] = inst_25763);

(statearr_25798_25831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (2))){
var state_25777__$1 = state_25777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25777__$1,(4),in$);
} else {
if((state_val_25778 === (23))){
var inst_25771 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25799_25832 = state_25777__$1;
(statearr_25799_25832[(2)] = inst_25771);

(statearr_25799_25832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (19))){
var inst_25758 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25800_25833 = state_25777__$1;
(statearr_25800_25833[(2)] = inst_25758);

(statearr_25800_25833[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (11))){
var inst_25743 = (state_25777[(7)]);
var inst_25729 = (state_25777[(12)]);
var inst_25743__$1 = cljs.core.seq.call(null,inst_25729);
var state_25777__$1 = (function (){var statearr_25801 = state_25777;
(statearr_25801[(7)] = inst_25743__$1);

return statearr_25801;
})();
if(inst_25743__$1){
var statearr_25802_25834 = state_25777__$1;
(statearr_25802_25834[(1)] = (14));

} else {
var statearr_25803_25835 = state_25777__$1;
(statearr_25803_25835[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (9))){
var inst_25765 = (state_25777[(2)]);
var inst_25766 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25777__$1 = (function (){var statearr_25804 = state_25777;
(statearr_25804[(15)] = inst_25765);

return statearr_25804;
})();
if(cljs.core.truth_(inst_25766)){
var statearr_25805_25836 = state_25777__$1;
(statearr_25805_25836[(1)] = (21));

} else {
var statearr_25806_25837 = state_25777__$1;
(statearr_25806_25837[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (5))){
var inst_25721 = cljs.core.async.close_BANG_.call(null,out);
var state_25777__$1 = state_25777;
var statearr_25807_25838 = state_25777__$1;
(statearr_25807_25838[(2)] = inst_25721);

(statearr_25807_25838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (14))){
var inst_25743 = (state_25777[(7)]);
var inst_25745 = cljs.core.chunked_seq_QMARK_.call(null,inst_25743);
var state_25777__$1 = state_25777;
if(inst_25745){
var statearr_25808_25839 = state_25777__$1;
(statearr_25808_25839[(1)] = (17));

} else {
var statearr_25809_25840 = state_25777__$1;
(statearr_25809_25840[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (16))){
var inst_25761 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25810_25841 = state_25777__$1;
(statearr_25810_25841[(2)] = inst_25761);

(statearr_25810_25841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (10))){
var inst_25732 = (state_25777[(10)]);
var inst_25730 = (state_25777[(11)]);
var inst_25737 = cljs.core._nth.call(null,inst_25730,inst_25732);
var state_25777__$1 = state_25777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25777__$1,(13),out,inst_25737);
} else {
if((state_val_25778 === (18))){
var inst_25743 = (state_25777[(7)]);
var inst_25752 = cljs.core.first.call(null,inst_25743);
var state_25777__$1 = state_25777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25777__$1,(20),out,inst_25752);
} else {
if((state_val_25778 === (8))){
var inst_25731 = (state_25777[(8)]);
var inst_25732 = (state_25777[(10)]);
var inst_25734 = (inst_25732 < inst_25731);
var inst_25735 = inst_25734;
var state_25777__$1 = state_25777;
if(cljs.core.truth_(inst_25735)){
var statearr_25811_25842 = state_25777__$1;
(statearr_25811_25842[(1)] = (10));

} else {
var statearr_25812_25843 = state_25777__$1;
(statearr_25812_25843[(1)] = (11));

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
});})(c__23342__auto__))
;
return ((function (switch__23230__auto__,c__23342__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23231__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23231__auto____0 = (function (){
var statearr_25816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25816[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23231__auto__);

(statearr_25816[(1)] = (1));

return statearr_25816;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23231__auto____1 = (function (state_25777){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_25777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e25817){if((e25817 instanceof Object)){
var ex__23234__auto__ = e25817;
var statearr_25818_25844 = state_25777;
(statearr_25818_25844[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25845 = state_25777;
state_25777 = G__25845;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23231__auto__ = function(state_25777){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23231__auto____1.call(this,state_25777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23231__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23231__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto__))
})();
var state__23344__auto__ = (function (){var statearr_25819 = f__23343__auto__.call(null);
(statearr_25819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto__);

return statearr_25819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto__))
);

return c__23342__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25846 = [];
var len__17790__auto___25849 = arguments.length;
var i__17791__auto___25850 = (0);
while(true){
if((i__17791__auto___25850 < len__17790__auto___25849)){
args25846.push((arguments[i__17791__auto___25850]));

var G__25851 = (i__17791__auto___25850 + (1));
i__17791__auto___25850 = G__25851;
continue;
} else {
}
break;
}

var G__25848 = args25846.length;
switch (G__25848) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25846.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25853 = [];
var len__17790__auto___25856 = arguments.length;
var i__17791__auto___25857 = (0);
while(true){
if((i__17791__auto___25857 < len__17790__auto___25856)){
args25853.push((arguments[i__17791__auto___25857]));

var G__25858 = (i__17791__auto___25857 + (1));
i__17791__auto___25857 = G__25858;
continue;
} else {
}
break;
}

var G__25855 = args25853.length;
switch (G__25855) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25853.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25860 = [];
var len__17790__auto___25911 = arguments.length;
var i__17791__auto___25912 = (0);
while(true){
if((i__17791__auto___25912 < len__17790__auto___25911)){
args25860.push((arguments[i__17791__auto___25912]));

var G__25913 = (i__17791__auto___25912 + (1));
i__17791__auto___25912 = G__25913;
continue;
} else {
}
break;
}

var G__25862 = args25860.length;
switch (G__25862) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25860.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23342__auto___25915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___25915,out){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___25915,out){
return (function (state_25886){
var state_val_25887 = (state_25886[(1)]);
if((state_val_25887 === (7))){
var inst_25881 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25888_25916 = state_25886__$1;
(statearr_25888_25916[(2)] = inst_25881);

(statearr_25888_25916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (1))){
var inst_25863 = null;
var state_25886__$1 = (function (){var statearr_25889 = state_25886;
(statearr_25889[(7)] = inst_25863);

return statearr_25889;
})();
var statearr_25890_25917 = state_25886__$1;
(statearr_25890_25917[(2)] = null);

(statearr_25890_25917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (4))){
var inst_25866 = (state_25886[(8)]);
var inst_25866__$1 = (state_25886[(2)]);
var inst_25867 = (inst_25866__$1 == null);
var inst_25868 = cljs.core.not.call(null,inst_25867);
var state_25886__$1 = (function (){var statearr_25891 = state_25886;
(statearr_25891[(8)] = inst_25866__$1);

return statearr_25891;
})();
if(inst_25868){
var statearr_25892_25918 = state_25886__$1;
(statearr_25892_25918[(1)] = (5));

} else {
var statearr_25893_25919 = state_25886__$1;
(statearr_25893_25919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (6))){
var state_25886__$1 = state_25886;
var statearr_25894_25920 = state_25886__$1;
(statearr_25894_25920[(2)] = null);

(statearr_25894_25920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (3))){
var inst_25883 = (state_25886[(2)]);
var inst_25884 = cljs.core.async.close_BANG_.call(null,out);
var state_25886__$1 = (function (){var statearr_25895 = state_25886;
(statearr_25895[(9)] = inst_25883);

return statearr_25895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25886__$1,inst_25884);
} else {
if((state_val_25887 === (2))){
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25886__$1,(4),ch);
} else {
if((state_val_25887 === (11))){
var inst_25866 = (state_25886[(8)]);
var inst_25875 = (state_25886[(2)]);
var inst_25863 = inst_25866;
var state_25886__$1 = (function (){var statearr_25896 = state_25886;
(statearr_25896[(10)] = inst_25875);

(statearr_25896[(7)] = inst_25863);

return statearr_25896;
})();
var statearr_25897_25921 = state_25886__$1;
(statearr_25897_25921[(2)] = null);

(statearr_25897_25921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (9))){
var inst_25866 = (state_25886[(8)]);
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25886__$1,(11),out,inst_25866);
} else {
if((state_val_25887 === (5))){
var inst_25866 = (state_25886[(8)]);
var inst_25863 = (state_25886[(7)]);
var inst_25870 = cljs.core._EQ_.call(null,inst_25866,inst_25863);
var state_25886__$1 = state_25886;
if(inst_25870){
var statearr_25899_25922 = state_25886__$1;
(statearr_25899_25922[(1)] = (8));

} else {
var statearr_25900_25923 = state_25886__$1;
(statearr_25900_25923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (10))){
var inst_25878 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25901_25924 = state_25886__$1;
(statearr_25901_25924[(2)] = inst_25878);

(statearr_25901_25924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (8))){
var inst_25863 = (state_25886[(7)]);
var tmp25898 = inst_25863;
var inst_25863__$1 = tmp25898;
var state_25886__$1 = (function (){var statearr_25902 = state_25886;
(statearr_25902[(7)] = inst_25863__$1);

return statearr_25902;
})();
var statearr_25903_25925 = state_25886__$1;
(statearr_25903_25925[(2)] = null);

(statearr_25903_25925[(1)] = (2));


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
});})(c__23342__auto___25915,out))
;
return ((function (switch__23230__auto__,c__23342__auto___25915,out){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_25907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25907[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_25907[(1)] = (1));

return statearr_25907;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_25886){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_25886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e25908){if((e25908 instanceof Object)){
var ex__23234__auto__ = e25908;
var statearr_25909_25926 = state_25886;
(statearr_25909_25926[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25927 = state_25886;
state_25886 = G__25927;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_25886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_25886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___25915,out))
})();
var state__23344__auto__ = (function (){var statearr_25910 = f__23343__auto__.call(null);
(statearr_25910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___25915);

return statearr_25910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___25915,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25928 = [];
var len__17790__auto___25998 = arguments.length;
var i__17791__auto___25999 = (0);
while(true){
if((i__17791__auto___25999 < len__17790__auto___25998)){
args25928.push((arguments[i__17791__auto___25999]));

var G__26000 = (i__17791__auto___25999 + (1));
i__17791__auto___25999 = G__26000;
continue;
} else {
}
break;
}

var G__25930 = args25928.length;
switch (G__25930) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25928.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23342__auto___26002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___26002,out){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___26002,out){
return (function (state_25968){
var state_val_25969 = (state_25968[(1)]);
if((state_val_25969 === (7))){
var inst_25964 = (state_25968[(2)]);
var state_25968__$1 = state_25968;
var statearr_25970_26003 = state_25968__$1;
(statearr_25970_26003[(2)] = inst_25964);

(statearr_25970_26003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (1))){
var inst_25931 = (new Array(n));
var inst_25932 = inst_25931;
var inst_25933 = (0);
var state_25968__$1 = (function (){var statearr_25971 = state_25968;
(statearr_25971[(7)] = inst_25932);

(statearr_25971[(8)] = inst_25933);

return statearr_25971;
})();
var statearr_25972_26004 = state_25968__$1;
(statearr_25972_26004[(2)] = null);

(statearr_25972_26004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (4))){
var inst_25936 = (state_25968[(9)]);
var inst_25936__$1 = (state_25968[(2)]);
var inst_25937 = (inst_25936__$1 == null);
var inst_25938 = cljs.core.not.call(null,inst_25937);
var state_25968__$1 = (function (){var statearr_25973 = state_25968;
(statearr_25973[(9)] = inst_25936__$1);

return statearr_25973;
})();
if(inst_25938){
var statearr_25974_26005 = state_25968__$1;
(statearr_25974_26005[(1)] = (5));

} else {
var statearr_25975_26006 = state_25968__$1;
(statearr_25975_26006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (15))){
var inst_25958 = (state_25968[(2)]);
var state_25968__$1 = state_25968;
var statearr_25976_26007 = state_25968__$1;
(statearr_25976_26007[(2)] = inst_25958);

(statearr_25976_26007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (13))){
var state_25968__$1 = state_25968;
var statearr_25977_26008 = state_25968__$1;
(statearr_25977_26008[(2)] = null);

(statearr_25977_26008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (6))){
var inst_25933 = (state_25968[(8)]);
var inst_25954 = (inst_25933 > (0));
var state_25968__$1 = state_25968;
if(cljs.core.truth_(inst_25954)){
var statearr_25978_26009 = state_25968__$1;
(statearr_25978_26009[(1)] = (12));

} else {
var statearr_25979_26010 = state_25968__$1;
(statearr_25979_26010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (3))){
var inst_25966 = (state_25968[(2)]);
var state_25968__$1 = state_25968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25968__$1,inst_25966);
} else {
if((state_val_25969 === (12))){
var inst_25932 = (state_25968[(7)]);
var inst_25956 = cljs.core.vec.call(null,inst_25932);
var state_25968__$1 = state_25968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25968__$1,(15),out,inst_25956);
} else {
if((state_val_25969 === (2))){
var state_25968__$1 = state_25968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25968__$1,(4),ch);
} else {
if((state_val_25969 === (11))){
var inst_25948 = (state_25968[(2)]);
var inst_25949 = (new Array(n));
var inst_25932 = inst_25949;
var inst_25933 = (0);
var state_25968__$1 = (function (){var statearr_25980 = state_25968;
(statearr_25980[(7)] = inst_25932);

(statearr_25980[(8)] = inst_25933);

(statearr_25980[(10)] = inst_25948);

return statearr_25980;
})();
var statearr_25981_26011 = state_25968__$1;
(statearr_25981_26011[(2)] = null);

(statearr_25981_26011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (9))){
var inst_25932 = (state_25968[(7)]);
var inst_25946 = cljs.core.vec.call(null,inst_25932);
var state_25968__$1 = state_25968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25968__$1,(11),out,inst_25946);
} else {
if((state_val_25969 === (5))){
var inst_25941 = (state_25968[(11)]);
var inst_25932 = (state_25968[(7)]);
var inst_25936 = (state_25968[(9)]);
var inst_25933 = (state_25968[(8)]);
var inst_25940 = (inst_25932[inst_25933] = inst_25936);
var inst_25941__$1 = (inst_25933 + (1));
var inst_25942 = (inst_25941__$1 < n);
var state_25968__$1 = (function (){var statearr_25982 = state_25968;
(statearr_25982[(11)] = inst_25941__$1);

(statearr_25982[(12)] = inst_25940);

return statearr_25982;
})();
if(cljs.core.truth_(inst_25942)){
var statearr_25983_26012 = state_25968__$1;
(statearr_25983_26012[(1)] = (8));

} else {
var statearr_25984_26013 = state_25968__$1;
(statearr_25984_26013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (14))){
var inst_25961 = (state_25968[(2)]);
var inst_25962 = cljs.core.async.close_BANG_.call(null,out);
var state_25968__$1 = (function (){var statearr_25986 = state_25968;
(statearr_25986[(13)] = inst_25961);

return statearr_25986;
})();
var statearr_25987_26014 = state_25968__$1;
(statearr_25987_26014[(2)] = inst_25962);

(statearr_25987_26014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (10))){
var inst_25952 = (state_25968[(2)]);
var state_25968__$1 = state_25968;
var statearr_25988_26015 = state_25968__$1;
(statearr_25988_26015[(2)] = inst_25952);

(statearr_25988_26015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (8))){
var inst_25941 = (state_25968[(11)]);
var inst_25932 = (state_25968[(7)]);
var tmp25985 = inst_25932;
var inst_25932__$1 = tmp25985;
var inst_25933 = inst_25941;
var state_25968__$1 = (function (){var statearr_25989 = state_25968;
(statearr_25989[(7)] = inst_25932__$1);

(statearr_25989[(8)] = inst_25933);

return statearr_25989;
})();
var statearr_25990_26016 = state_25968__$1;
(statearr_25990_26016[(2)] = null);

(statearr_25990_26016[(1)] = (2));


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
});})(c__23342__auto___26002,out))
;
return ((function (switch__23230__auto__,c__23342__auto___26002,out){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_25994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25994[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_25994[(1)] = (1));

return statearr_25994;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_25968){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_25968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e25995){if((e25995 instanceof Object)){
var ex__23234__auto__ = e25995;
var statearr_25996_26017 = state_25968;
(statearr_25996_26017[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26018 = state_25968;
state_25968 = G__26018;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_25968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_25968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___26002,out))
})();
var state__23344__auto__ = (function (){var statearr_25997 = f__23343__auto__.call(null);
(statearr_25997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___26002);

return statearr_25997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___26002,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26019 = [];
var len__17790__auto___26093 = arguments.length;
var i__17791__auto___26094 = (0);
while(true){
if((i__17791__auto___26094 < len__17790__auto___26093)){
args26019.push((arguments[i__17791__auto___26094]));

var G__26095 = (i__17791__auto___26094 + (1));
i__17791__auto___26094 = G__26095;
continue;
} else {
}
break;
}

var G__26021 = args26019.length;
switch (G__26021) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26019.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23342__auto___26097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23342__auto___26097,out){
return (function (){
var f__23343__auto__ = (function (){var switch__23230__auto__ = ((function (c__23342__auto___26097,out){
return (function (state_26063){
var state_val_26064 = (state_26063[(1)]);
if((state_val_26064 === (7))){
var inst_26059 = (state_26063[(2)]);
var state_26063__$1 = state_26063;
var statearr_26065_26098 = state_26063__$1;
(statearr_26065_26098[(2)] = inst_26059);

(statearr_26065_26098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (1))){
var inst_26022 = [];
var inst_26023 = inst_26022;
var inst_26024 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26063__$1 = (function (){var statearr_26066 = state_26063;
(statearr_26066[(7)] = inst_26023);

(statearr_26066[(8)] = inst_26024);

return statearr_26066;
})();
var statearr_26067_26099 = state_26063__$1;
(statearr_26067_26099[(2)] = null);

(statearr_26067_26099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (4))){
var inst_26027 = (state_26063[(9)]);
var inst_26027__$1 = (state_26063[(2)]);
var inst_26028 = (inst_26027__$1 == null);
var inst_26029 = cljs.core.not.call(null,inst_26028);
var state_26063__$1 = (function (){var statearr_26068 = state_26063;
(statearr_26068[(9)] = inst_26027__$1);

return statearr_26068;
})();
if(inst_26029){
var statearr_26069_26100 = state_26063__$1;
(statearr_26069_26100[(1)] = (5));

} else {
var statearr_26070_26101 = state_26063__$1;
(statearr_26070_26101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (15))){
var inst_26053 = (state_26063[(2)]);
var state_26063__$1 = state_26063;
var statearr_26071_26102 = state_26063__$1;
(statearr_26071_26102[(2)] = inst_26053);

(statearr_26071_26102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (13))){
var state_26063__$1 = state_26063;
var statearr_26072_26103 = state_26063__$1;
(statearr_26072_26103[(2)] = null);

(statearr_26072_26103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (6))){
var inst_26023 = (state_26063[(7)]);
var inst_26048 = inst_26023.length;
var inst_26049 = (inst_26048 > (0));
var state_26063__$1 = state_26063;
if(cljs.core.truth_(inst_26049)){
var statearr_26073_26104 = state_26063__$1;
(statearr_26073_26104[(1)] = (12));

} else {
var statearr_26074_26105 = state_26063__$1;
(statearr_26074_26105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (3))){
var inst_26061 = (state_26063[(2)]);
var state_26063__$1 = state_26063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26063__$1,inst_26061);
} else {
if((state_val_26064 === (12))){
var inst_26023 = (state_26063[(7)]);
var inst_26051 = cljs.core.vec.call(null,inst_26023);
var state_26063__$1 = state_26063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26063__$1,(15),out,inst_26051);
} else {
if((state_val_26064 === (2))){
var state_26063__$1 = state_26063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26063__$1,(4),ch);
} else {
if((state_val_26064 === (11))){
var inst_26031 = (state_26063[(10)]);
var inst_26027 = (state_26063[(9)]);
var inst_26041 = (state_26063[(2)]);
var inst_26042 = [];
var inst_26043 = inst_26042.push(inst_26027);
var inst_26023 = inst_26042;
var inst_26024 = inst_26031;
var state_26063__$1 = (function (){var statearr_26075 = state_26063;
(statearr_26075[(7)] = inst_26023);

(statearr_26075[(11)] = inst_26043);

(statearr_26075[(8)] = inst_26024);

(statearr_26075[(12)] = inst_26041);

return statearr_26075;
})();
var statearr_26076_26106 = state_26063__$1;
(statearr_26076_26106[(2)] = null);

(statearr_26076_26106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (9))){
var inst_26023 = (state_26063[(7)]);
var inst_26039 = cljs.core.vec.call(null,inst_26023);
var state_26063__$1 = state_26063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26063__$1,(11),out,inst_26039);
} else {
if((state_val_26064 === (5))){
var inst_26031 = (state_26063[(10)]);
var inst_26024 = (state_26063[(8)]);
var inst_26027 = (state_26063[(9)]);
var inst_26031__$1 = f.call(null,inst_26027);
var inst_26032 = cljs.core._EQ_.call(null,inst_26031__$1,inst_26024);
var inst_26033 = cljs.core.keyword_identical_QMARK_.call(null,inst_26024,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26034 = (inst_26032) || (inst_26033);
var state_26063__$1 = (function (){var statearr_26077 = state_26063;
(statearr_26077[(10)] = inst_26031__$1);

return statearr_26077;
})();
if(cljs.core.truth_(inst_26034)){
var statearr_26078_26107 = state_26063__$1;
(statearr_26078_26107[(1)] = (8));

} else {
var statearr_26079_26108 = state_26063__$1;
(statearr_26079_26108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (14))){
var inst_26056 = (state_26063[(2)]);
var inst_26057 = cljs.core.async.close_BANG_.call(null,out);
var state_26063__$1 = (function (){var statearr_26081 = state_26063;
(statearr_26081[(13)] = inst_26056);

return statearr_26081;
})();
var statearr_26082_26109 = state_26063__$1;
(statearr_26082_26109[(2)] = inst_26057);

(statearr_26082_26109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (10))){
var inst_26046 = (state_26063[(2)]);
var state_26063__$1 = state_26063;
var statearr_26083_26110 = state_26063__$1;
(statearr_26083_26110[(2)] = inst_26046);

(statearr_26083_26110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (8))){
var inst_26031 = (state_26063[(10)]);
var inst_26023 = (state_26063[(7)]);
var inst_26027 = (state_26063[(9)]);
var inst_26036 = inst_26023.push(inst_26027);
var tmp26080 = inst_26023;
var inst_26023__$1 = tmp26080;
var inst_26024 = inst_26031;
var state_26063__$1 = (function (){var statearr_26084 = state_26063;
(statearr_26084[(7)] = inst_26023__$1);

(statearr_26084[(8)] = inst_26024);

(statearr_26084[(14)] = inst_26036);

return statearr_26084;
})();
var statearr_26085_26111 = state_26063__$1;
(statearr_26085_26111[(2)] = null);

(statearr_26085_26111[(1)] = (2));


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
});})(c__23342__auto___26097,out))
;
return ((function (switch__23230__auto__,c__23342__auto___26097,out){
return (function() {
var cljs$core$async$state_machine__23231__auto__ = null;
var cljs$core$async$state_machine__23231__auto____0 = (function (){
var statearr_26089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26089[(0)] = cljs$core$async$state_machine__23231__auto__);

(statearr_26089[(1)] = (1));

return statearr_26089;
});
var cljs$core$async$state_machine__23231__auto____1 = (function (state_26063){
while(true){
var ret_value__23232__auto__ = (function (){try{while(true){
var result__23233__auto__ = switch__23230__auto__.call(null,state_26063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23233__auto__;
}
break;
}
}catch (e26090){if((e26090 instanceof Object)){
var ex__23234__auto__ = e26090;
var statearr_26091_26112 = state_26063;
(statearr_26091_26112[(5)] = ex__23234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26113 = state_26063;
state_26063 = G__26113;
continue;
} else {
return ret_value__23232__auto__;
}
break;
}
});
cljs$core$async$state_machine__23231__auto__ = function(state_26063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23231__auto____1.call(this,state_26063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23231__auto____0;
cljs$core$async$state_machine__23231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23231__auto____1;
return cljs$core$async$state_machine__23231__auto__;
})()
;})(switch__23230__auto__,c__23342__auto___26097,out))
})();
var state__23344__auto__ = (function (){var statearr_26092 = f__23343__auto__.call(null);
(statearr_26092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23342__auto___26097);

return statearr_26092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23344__auto__);
});})(c__23342__auto___26097,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map