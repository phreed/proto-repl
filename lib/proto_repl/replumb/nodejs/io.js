// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('replumb.nodejs.io');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('replumb.common');
/**
 * Delay containing the call to "require fs". It returns the File
 *   System Node.js module object.
 */
replumb.nodejs.io.require_fs = (new cljs.core.Delay((function (){
return cljs.nodejs.require.call(null,"fs");
}),null));
/**
 * Accepts the fs module object, encoding or file options, file name to
 *   read and a callback. Upon success, invokes the callback with the
 *   source of the file. Otherwise invokes the callback with nil.
 * 
 *   The arity without explicit module will call require the first time
 *   only. The arity without encoding-or-opts will default to no file
 *   options and encoding "UTF-8".
 * 
 *   For encoding-or-opts, see
 *   https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback.
 */
replumb.nodejs.io.read_file_BANG_ = (function replumb$nodejs$io$read_file_BANG_(var_args){
var args14205 = [];
var len__7755__auto___14209 = arguments.length;
var i__7756__auto___14210 = (0);
while(true){
if((i__7756__auto___14210 < len__7755__auto___14209)){
args14205.push((arguments[i__7756__auto___14210]));

var G__14211 = (i__7756__auto___14210 + (1));
i__7756__auto___14210 = G__14211;
continue;
} else {
}
break;
}

var G__14207 = args14205.length;
switch (G__14207) {
case 2:
return replumb.nodejs.io.read_file_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.nodejs.io.read_file_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return replumb.nodejs.io.read_file_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14205.length)].join('')));

}
});

replumb.nodejs.io.read_file_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (file_path,src_cb){
return replumb.nodejs.io.read_file_BANG_.call(null,cljs.core.force.call(null,replumb.nodejs.io.require_fs),"utf-8",file_path,src_cb);
});

replumb.nodejs.io.read_file_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (encoding_or_opts,file_path,src_cb){
return replumb.nodejs.io.read_file_BANG_.call(null,cljs.core.force.call(null,replumb.nodejs.io.require_fs),encoding_or_opts,file_path,src_cb);
});

replumb.nodejs.io.read_file_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (fs_module,encoding_or_opts,file_path,src_cb){
try{return src_cb.call(null,fs_module.readFileSync(file_path,encoding_or_opts));
}catch (e14208){var e = e14208;
return src_cb.call(null,null);
}});

replumb.nodejs.io.read_file_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Accepts the fs module object, encoding or file options, file name to
 *   write and a callback. Upon success, invokes the callback with the
 *   source of the file. Otherwise invokes the callback with nil.
 * 
 *   The arity without explicit module will call require the first time
 *   only. The arity without encoding-or-opts will default to no file
 *   options and encoding "UTF-8".
 * 
 *   It is synchronous and returns undefined as per Node.js doc.
 * 
 *   For encoding-or-opts, see
 *   https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback.
 */
replumb.nodejs.io.write_file_BANG_ = (function replumb$nodejs$io$write_file_BANG_(var_args){
var args14213 = [];
var len__7755__auto___14217 = arguments.length;
var i__7756__auto___14218 = (0);
while(true){
if((i__7756__auto___14218 < len__7755__auto___14217)){
args14213.push((arguments[i__7756__auto___14218]));

var G__14219 = (i__7756__auto___14218 + (1));
i__7756__auto___14218 = G__14219;
continue;
} else {
}
break;
}

var G__14215 = args14213.length;
switch (G__14215) {
case 2:
return replumb.nodejs.io.write_file_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.nodejs.io.write_file_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return replumb.nodejs.io.write_file_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14213.length)].join('')));

}
});

replumb.nodejs.io.write_file_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (file_path,data){
return replumb.nodejs.io.write_file_BANG_.call(null,"utf-8",file_path,data);
});

replumb.nodejs.io.write_file_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (encoding_or_opts,file_path,data){
return replumb.nodejs.io.write_file_BANG_.call(null,cljs.core.force.call(null,replumb.nodejs.io.require_fs),encoding_or_opts,file_path,data);
});

replumb.nodejs.io.write_file_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (fs_module,encoding_or_opts,file_path,data){
try{return fs_module.writeFileSync(file_path,data,encoding_or_opts);
}catch (e14216){var e = e14216;
return cljs.core.println.call(null,e.stack);
}});

replumb.nodejs.io.write_file_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Accepts the fs module object, encoding or file options, file name to
 *   write and a callback. Upon success, invokes the callback with the
 *   source of the file. Otherwise invokes the callback with nil.
 * 
 *   The arity without explicit module will call require the first time
 *   only. The arity without encoding-or-opts will default to no file
 *   options and encoding "UTF-8".
 * 
 *   It is synchronous and returns undefined as per Node.js doc.
 * 
 *   For encoding-or-opts, see
 *   https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback.
 */
replumb.nodejs.io.delete_file_BANG_ = (function replumb$nodejs$io$delete_file_BANG_(var_args){
var args14221 = [];
var len__7755__auto___14225 = arguments.length;
var i__7756__auto___14226 = (0);
while(true){
if((i__7756__auto___14226 < len__7755__auto___14225)){
args14221.push((arguments[i__7756__auto___14226]));

var G__14227 = (i__7756__auto___14226 + (1));
i__7756__auto___14226 = G__14227;
continue;
} else {
}
break;
}

var G__14223 = args14221.length;
switch (G__14223) {
case 1:
return replumb.nodejs.io.delete_file_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.nodejs.io.delete_file_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14221.length)].join('')));

}
});

replumb.nodejs.io.delete_file_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (file_path){
return replumb.nodejs.io.delete_file_BANG_.call(null,cljs.core.force.call(null,replumb.nodejs.io.require_fs),file_path);
});

replumb.nodejs.io.delete_file_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (fs_module,file_path){
try{return fs_module.unlinkSync(file_path);
}catch (e14224){var e = e14224;
return cljs.core.println.call(null,e.stack);
}});

replumb.nodejs.io.delete_file_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Check if the file on the given path exists. It is synchronous.
 */
replumb.nodejs.io.file_exists_QMARK_ = (function replumb$nodejs$io$file_exists_QMARK_(var_args){
var args14229 = [];
var len__7755__auto___14233 = arguments.length;
var i__7756__auto___14234 = (0);
while(true){
if((i__7756__auto___14234 < len__7755__auto___14233)){
args14229.push((arguments[i__7756__auto___14234]));

var G__14235 = (i__7756__auto___14234 + (1));
i__7756__auto___14234 = G__14235;
continue;
} else {
}
break;
}

var G__14231 = args14229.length;
switch (G__14231) {
case 1:
return replumb.nodejs.io.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.nodejs.io.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14229.length)].join('')));

}
});

replumb.nodejs.io.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (path){
return replumb.nodejs.io.file_exists_QMARK_.call(null,cljs.core.force.call(null,replumb.nodejs.io.require_fs),path);
});

replumb.nodejs.io.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (fs_module,path){
try{return !((fs_module.statSync(path) == null));
}catch (e14232){var e = e14232;
if(cljs.core.truth_(cljs.core.re_find.call(null,/ENOENT/,replumb.common.extract_message.call(null,e)))){
return false;
} else {
return cljs.core.println.call(null,e.stack);
}
}});

replumb.nodejs.io.file_exists_QMARK_.cljs$lang$maxFixedArity = 2;
/**
 * Before deleting, checks if the file exists.
 */
replumb.nodejs.io.safely_delete_BANG_ = (function replumb$nodejs$io$safely_delete_BANG_(path){
if(cljs.core.truth_(replumb.nodejs.io.file_exists_QMARK_.call(null,path))){
return replumb.nodejs.io.delete_file_BANG_.call(null,path);
} else {
return null;
}
});
/**
 * Renames synchronously a file.
 */
replumb.nodejs.io.rename_file_BANG_ = (function replumb$nodejs$io$rename_file_BANG_(var_args){
var args14237 = [];
var len__7755__auto___14240 = arguments.length;
var i__7756__auto___14241 = (0);
while(true){
if((i__7756__auto___14241 < len__7755__auto___14240)){
args14237.push((arguments[i__7756__auto___14241]));

var G__14242 = (i__7756__auto___14241 + (1));
i__7756__auto___14241 = G__14242;
continue;
} else {
}
break;
}

var G__14239 = args14237.length;
switch (G__14239) {
case 2:
return replumb.nodejs.io.rename_file_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.nodejs.io.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14237.length)].join('')));

}
});

replumb.nodejs.io.rename_file_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (old_path,new_path){
return replumb.nodejs.io.rename_file_BANG_.call(null,cljs.core.force.call(null,replumb.nodejs.io.require_fs),old_path,new_path);
});

replumb.nodejs.io.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (fs_module,old_path,new_path){
return fs_module.renameSync(old_path,new_path);
});

replumb.nodejs.io.rename_file_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Before renaming, checks if the file exists.
 */
replumb.nodejs.io.safely_rename_file_BANG_ = (function replumb$nodejs$io$safely_rename_file_BANG_(old_path,new_path){
if(cljs.core.truth_(replumb.nodejs.io.file_exists_QMARK_.call(null,old_path))){
return replumb.nodejs.io.rename_file_BANG_.call(null,old_path,new_path);
} else {
return null;
}
});

//# sourceMappingURL=io.js.map