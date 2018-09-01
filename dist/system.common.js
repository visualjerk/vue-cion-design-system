module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0098":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M10 9l-7 8 7 8M22 9l7 8-7 8M18 7l-4 20"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  __webpack_require__("9aa9").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "019f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M8 2v14L22 2v28L8 16v14"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "044e":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 4h28v18H16l-8 7v-7H2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "0599":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M15 30c-15 0 0-17-3-27 16 10 20 27 3 27zm2 0c-7 0 0-10 0-10s7 10 0 10z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "06c5":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M3 16h20m-8-8l8 8-8 8m6-20h8v24h-8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "07be":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"16","cy":"11","r":"4"}}),_c('path',{attrs:{"d":"M24 15c-3 7-8 15-8 15s-5-8-8-15 2-13 8-13 11 6 8 13z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0c75":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1zm0 0v21"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0e73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7dfc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1098":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("17ed");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("f893");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "126d":
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__("6da8"),
    hasUnicode = __webpack_require__("aaec"),
    unicodeToArray = __webpack_require__("d094");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "164d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Logo/Logo.vue?vue&type=template&id=fd319ba0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-logo"},[_c('svg-logo',{staticClass:"ds-logo-svg"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Logo/Logo.vue?vue&type=template&id=fd319ba0&

// EXTERNAL MODULE: ./src/system/assets/img/logo_cion.svg
var logo_cion = __webpack_require__("323f");
var logo_cion_default = /*#__PURE__*/__webpack_require__.n(logo_cion);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Logo/Logo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/**
 * This component displays the brand's logo.
 * @version 1.0.0
 */

/* harmony default export */ var Logovue_type_script_lang_js_ = ({
  name: 'DsLogo',
  components: {
    svgLogo: logo_cion_default.a
  },
  props: {
    /**
     * The html element name used for the logo.
     */
    tag: {
      type: String,
      default: 'div'
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/typography/Logo/Logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Logo_Logovue_type_script_lang_js_ = (Logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/typography/Logo/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("afd7");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Logo/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FLogo%2FLogo.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Logo/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FLogo%2FLogo.vue
 /* harmony default export */ var Logo_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo); 
// CONCATENATED MODULE: ./src/system/components/typography/Logo/Logo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Logo_Logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Logo_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo === 'function') Logo_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo(component)

component.options.__file = "Logo.vue"
/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "16b6":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M28 6H6l2 24h16l2-24H4m12 6v12m5-12l-1 12m-9-12l1 12m0-18l1-4h6l1 4"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "17a9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "17ed":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("d8d6"), __esModule: true };

/***/ }),

/***/ "189f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 7v18h28V7zm3 11h4m-4 3h6"}}),_c('path',{attrs:{"d":"M2 11v2h28v-2z","fill":"currentColor"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1c72":
/***/ (function(module, exports) {

module.exports = {"description":"","methods":[],"displayName":"DsFlexItem","props":{"width":{"type":{"name":"string|number|object"},"required":"","defaultValue":{"value":"default() { return this.$parentFlex ? this.$parentFlex.width : 1; }","func":true},"tags":{},"comment":"/**\n     * The width of the item.\n     */","description":"The width of the item."},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the wrapper.\n     */","description":"The html element name used for the wrapper."}},"comment":"/**\n * @version 1.0.0\n * @see DsFlex\n */","tags":{"see":[{"title":"see","description":"DsFlex"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "1ce8":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M6 10l10-8 10 8M16 2v28"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "1d82":
/***/ (function(module, exports) {

module.exports = {"description":"Used for handling basic user input.","methods":[],"displayName":"DsSelect","props":{"value":{"type":{"name":"string|object|number"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The value of the input. Can be passed via v-model.\n     */","description":"The value of the input. Can be passed via v-model."},"model":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The model name when used within a form component. Uses dot notation.\n     */","description":"The model name when used within a form component. Uses dot notation."},"label":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The label of the input.\n     */","description":"The label of the input."},"id":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The id of the input.\n     */","description":"The id of the input."},"disabled":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input is disabled or not.\n     */","description":"Whether the input is disabled or not."},"schema":{"type":{"name":"object"},"required":"","defaultValue":{"value":"() => ({})","func":true},"tags":{},"comment":"/**\n     * The async-validator schema used for the input.\n     */","description":"The async-validator schema used for the input."},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The input's size.\n     * `small, base, large`\n     */","description":"The input's size.\n`small, base, large`"},"placeholder":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The placeholder shown when value is empty.\n     */","description":"The placeholder shown when value is empty."},"autofocus":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input should be automatically focused\n     */","description":"Whether the input should be automatically focused"},"readonly":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input should be read-only\n     */","description":"Whether the input should be read-only"},"multiple":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the user can select multiple items\n     */","description":"Whether the user can select multiple items"},"icon":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the input's icon.\n     */","description":"The name of the input's icon."},"iconRight":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the input's right icon.\n     */","description":"The name of the input's right icon."},"options":{"type":{"name":"array"},"required":"","defaultValue":{"value":"default() { return []; }","func":true},"tags":{},"comment":"/**\n     * The select options.\n     */","description":"The select options."}},"comment":"/**\n * Used for handling basic user input.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{"input":{"description":"Fires after user input.\nReceives the value as the only argument.","comment":"/**\n         * Fires after user input.\n         * Receives the value as the only argument.\n         *\n         * @event input\n         */"}},"slots":{}}

/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "21fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27ac");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "236f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "249d":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./activity.svg": "af30",
	"./alert.svg": "a171",
	"./archive.svg": "ba44",
	"./arrow-bottom.svg": "684c",
	"./arrow-left.svg": "f7e7",
	"./arrow-right.svg": "28fa",
	"./arrow-top.svg": "1ce8",
	"./backwards.svg": "bd14",
	"./bag.svg": "c546",
	"./ban.svg": "daef",
	"./bell.svg": "aa19",
	"./book.svg": "0c75",
	"./bookmark.svg": "6bdb",
	"./calendar.svg": "bfe5",
	"./camera.svg": "b468",
	"./caret-bottom.svg": "bb74",
	"./caret-left.svg": "d79b",
	"./caret-right.svg": "432b",
	"./caret-top.svg": "d3ce",
	"./cart.svg": "b282",
	"./checkmark.svg": "b4ed",
	"./chevron-bottom.svg": "4ab5",
	"./chevron-left.svg": "674a",
	"./chevron-right.svg": "98fe",
	"./chevron-top.svg": "d6ad",
	"./clipboard.svg": "35d6",
	"./clock.svg": "e4a8",
	"./close.svg": "9717",
	"./code.svg": "0098",
	"./compose.svg": "979d",
	"./creditcard.svg": "189f",
	"./desktop.svg": "3b98",
	"./download.svg": "5842",
	"./edit.svg": "8788",
	"./eject.svg": "3921",
	"./ellipsis-horizontal.svg": "f6c9",
	"./ellipsis-vertical.svg": "e40b",
	"./end.svg": "7799",
	"./export.svg": "8cb4",
	"./external.svg": "2a4c",
	"./eye.svg": "a39b",
	"./file.svg": "5b29",
	"./fire.svg": "0599",
	"./flag.svg": "da31",
	"./folder-open.svg": "bde4",
	"./folder.svg": "2556",
	"./forwards.svg": "fd76",
	"./fullscreen-exit.svg": "53ef",
	"./fullscreen.svg": "67c9",
	"./gift.svg": "f746",
	"./github.svg": "5700",
	"./heart.svg": "6ff2",
	"./home.svg": "f796",
	"./import.svg": "d3cc",
	"./inbox.svg": "66af",
	"./info.svg": "92a3",
	"./lightning.svg": "78a7",
	"./link.svg": "aac1",
	"./location.svg": "07be",
	"./lock.svg": "2c25",
	"./mail.svg": "e01e",
	"./menu.svg": "f88c",
	"./message.svg": "044e",
	"./microphone.svg": "6dc6",
	"./minus.svg": "4acc",
	"./mobile.svg": "4c8b",
	"./move.svg": "ed63",
	"./music.svg": "cec0",
	"./mute.svg": "6417",
	"./options.svg": "cd77",
	"./paperclip.svg": "de58",
	"./pause.svg": "ddea",
	"./photo.svg": "5bbb",
	"./play.svg": "e1b4",
	"./plus.svg": "5834",
	"./portfolio.svg": "c1db",
	"./print.svg": "809c",
	"./reload.svg": "dff7",
	"./reply.svg": "f7db",
	"./search.svg": "419c",
	"./send.svg": "6102",
	"./settings.svg": "eefb",
	"./sign-in.svg": "06c5",
	"./sign-out.svg": "6dc0",
	"./star.svg": "ebfd6",
	"./start.svg": "019f",
	"./tag.svg": "89d6",
	"./telephone.svg": "80f6",
	"./trash.svg": "16b6",
	"./twitter.svg": "f687",
	"./unlock.svg": "dfbf",
	"./upload.svg": "ca53",
	"./user.svg": "e7e0",
	"./video.svg": "9fee",
	"./volume.svg": "75cf",
	"./work.svg": "b251"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "249d";

/***/ }),

/***/ "2556":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 26h28V7H14l-4-3H2zm28-14H2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "2576":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Card/Card.vue?vue&type=template&id=56fb9582&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-card",class:[
    _vm.$slots.image && 'ds-card-has-image'
]},[(_vm.image || _vm.$slots.image)?_c('div',{staticClass:"ds-card-image"},[_vm._t("image",[_c('img',{attrs:{"src":_vm.image}})])],2):_vm._e(),(_vm.header || _vm.$slots.header)?_c('header',{staticClass:"ds-card-header"},[_vm._t("header",[_c('ds-heading',{attrs:{"tag":_vm.headerTag,"size":"h3"}},[_vm._v(_vm._s(_vm.header))])])],2):_vm._e(),_c('div',{staticClass:"ds-card-content"},[_vm._t("default")],2),(_vm.$slots.footer)?_c('footer',{staticClass:"ds-card-footer"},[_vm._t("footer")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Card/Card.vue?vue&type=template&id=56fb9582&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Card/Card.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * This component is used to group content together in an appealing way.
 * @version 1.0.0
 */
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  name: 'DsCard',
  props: {
    /**
     * The html element name used for the card.
     */
    tag: {
      type: String,
      default: 'article'
    },

    /**
     * The header for the card.
     */
    header: {
      type: String,
      default: null
    },

    /**
     * The heading type used for the header.
     * `h1, h2, h3, h4, h5, h6`
     */
    headerTag: {
      type: String,
      default: 'h3',
      validator: function validator(value) {
        return value.match(/(h1|h2|h3|h4|h5|h6)/);
      }
    },

    /**
     * The image for the card.
     */
    image: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Card/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/Card/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("61b2");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Card/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FCard%2FCard.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Card/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FCard%2FCard.vue
 /* harmony default export */ var Card_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard); 
// CONCATENATED MODULE: ./src/system/components/layout/Card/Card.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Card_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard === 'function') Card_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard(component)

component.options.__file = "Card.vue"
/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "27ac":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "27c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/CopyField/CopyField.vue?vue&type=template&id=0ac747b6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-copy-field",class:("ds-copy-field-" + _vm.size)},[_c('div',{ref:"text"},[_vm._t("default")],2),_c('div',{staticClass:"ds-copy-field-link"},[_c('ds-button',{attrs:{"icon":"clipboard","color":"soft","ghost":""},on:{"click":_vm.copy}})],1),_c('transition',{attrs:{"name":"ds-copy-field-message"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMessage),expression:"showMessage"}],staticClass:"ds-copy-field-message"},[_c('div',{ref:"messageText",staticClass:"ds-copy-field-message-text"})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/CopyField/CopyField.vue?vue&type=template&id=0ac747b6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/CopyField/CopyField.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * A copy field is used to present text that can easily
 * be copied to the users clipboard by clicking on it.
 * @version 1.0.0
 */
/* harmony default export */ var CopyFieldvue_type_script_lang_js_ = ({
  name: 'DsCopyField',
  props: {
    /**
     * The size used for the text.
     * `small, base, large`
     */
    size: {
      type: String,
      default: 'base',
      validator: function validator(value) {
        return value.match(/(small|base|large)/);
      }
    },

    /**
     * The html element name used for the copy field.
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  data: function data() {
    return {
      showMessage: false
    };
  },
  methods: {
    copy: function copy() {
      var _this = this;

      var content = this.$refs.text.innerText;
      this.$refs.messageText.innerText = content;
      this.$copyToClipboard(content);
      this.showMessage = true;
      this.$nextTick(function () {
        _this.showMessage = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-display/CopyField/CopyField.vue?vue&type=script&lang=js&
 /* harmony default export */ var CopyField_CopyFieldvue_type_script_lang_js_ = (CopyFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/data-display/CopyField/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("81fe");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-display/CopyField/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FCopyField%2FCopyField.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-display/CopyField/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FCopyField%2FCopyField.vue
 /* harmony default export */ var CopyField_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField); 
// CONCATENATED MODULE: ./src/system/components/data-display/CopyField/CopyField.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CopyField_CopyFieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof CopyField_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField === 'function') CopyField_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField(component)

component.options.__file = "CopyField.vue"
/* harmony default export */ var CopyField = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "28fa":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M22 6l8 10-8 10m8-10H2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2a4c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M14 9H3v20h20V18M18 4h10v10m0-10L14 18"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b10":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2b4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpace", function() { return getSpace; });
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bba4");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6ab6");



var getSpace = function getSpace(space) {
  var spaceName = lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default()(space);
  return _tokens__WEBPACK_IMPORTED_MODULE_1__[/* tokenMap */ "a"].spaceSize[spaceName] ? _tokens__WEBPACK_IMPORTED_MODULE_1__[/* tokenMap */ "a"].spaceSize[spaceName].value : 0;
};



/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2c25":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M5 15v15h22V15zm4 0C9 9 9 5 16 5s7 4 7 10m-7 5v3"}}),_c('circle',{attrs:{"cx":"16","cy":"24","r":"1"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2ecd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "323f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"viewBox":"0 0 239 59","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M29.5 14.449l14.077 24.383H15.423L29.5 14.449z","fill":"currentColor"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M29.5 55C43.583 55 55 43.583 55 29.5S43.583 4 29.5 4 4 15.417 4 29.5 15.417 55 29.5 55zm0 4C45.792 59 59 45.792 59 29.5S45.792 0 29.5 0 0 13.208 0 29.5 13.208 59 29.5 59z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M118.83 44.291a21.405 21.405 0 0 1-6.562 3.867 21.481 21.481 0 0 1-7.53 1.348c-1.992 0-3.916-.264-5.771-.791a22.06 22.06 0 0 1-5.186-2.168 22.557 22.557 0 0 1-4.394-3.428 22.554 22.554 0 0 1-3.428-4.394 23 23 0 0 1-2.197-5.186A21.766 21.766 0 0 1 83 27.768c0-1.993.254-3.916.762-5.772a22.268 22.268 0 0 1 2.197-5.185 22.172 22.172 0 0 1 3.428-4.424 21.69 21.69 0 0 1 4.394-3.399 21.348 21.348 0 0 1 5.186-2.197A21.006 21.006 0 0 1 104.738 6c2.598 0 5.108.45 7.53 1.348a20.656 20.656 0 0 1 6.562 3.867l-4.453 7.324a12.427 12.427 0 0 0-4.365-3.047 13.21 13.21 0 0 0-5.274-1.084c-1.855 0-3.593.352-5.215 1.055a13.592 13.592 0 0 0-4.248 2.871c-1.21 1.191-2.168 2.607-2.87 4.248-.704 1.621-1.055 3.35-1.055 5.186 0 1.835.351 3.564 1.054 5.185a13.692 13.692 0 0 0 2.871 4.219 13.596 13.596 0 0 0 4.248 2.871c1.622.703 3.36 1.055 5.215 1.055 1.836 0 3.594-.352 5.274-1.055a12.766 12.766 0 0 0 4.365-3.076l4.453 7.324zM138.131 48.598h-8.408V6.586h8.408v42.012zM193.115 27.768c0 1.992-.263 3.916-.791 5.771a22.046 22.046 0 0 1-2.168 5.186 21.67 21.67 0 0 1-3.398 4.394 22.543 22.543 0 0 1-4.395 3.428 21.384 21.384 0 0 1-5.185 2.168c-1.856.527-3.78.79-5.772.79-1.992 0-3.916-.263-5.771-.79a22.059 22.059 0 0 1-5.186-2.168 22.566 22.566 0 0 1-4.394-3.428 22.56 22.56 0 0 1-3.428-4.394 22.958 22.958 0 0 1-2.197-5.186 21.758 21.758 0 0 1-.762-5.771c0-1.993.254-3.916.762-5.772a22.23 22.23 0 0 1 2.197-5.185 22.562 22.562 0 0 1 3.428-4.395 21.698 21.698 0 0 1 4.394-3.398 22.06 22.06 0 0 1 5.186-2.168 21.004 21.004 0 0 1 5.771-.791c1.992 0 3.916.263 5.772.79a21.385 21.385 0 0 1 5.185 2.169 21.676 21.676 0 0 1 4.395 3.398 21.673 21.673 0 0 1 3.398 4.395 21.379 21.379 0 0 1 2.168 5.185c.528 1.856.791 3.78.791 5.772zm-8.349 0c0-1.836-.352-3.565-1.055-5.186-.703-1.64-1.66-3.057-2.871-4.248-1.192-1.211-2.608-2.168-4.248-2.871-1.621-.703-3.35-1.055-5.186-1.055-1.855 0-3.594.352-5.215 1.055a13.594 13.594 0 0 0-4.248 2.871c-1.211 1.191-2.168 2.607-2.871 4.248-.703 1.621-1.054 3.35-1.054 5.186 0 1.835.351 3.564 1.054 5.185a13.688 13.688 0 0 0 2.871 4.219 13.598 13.598 0 0 0 4.248 2.871c1.621.703 3.36 1.055 5.215 1.055 1.836 0 3.565-.352 5.186-1.055 1.64-.703 3.056-1.66 4.248-2.871a13.688 13.688 0 0 0 2.871-4.219c.703-1.621 1.055-3.35 1.055-5.185zM238.256 48.598h-8.994L213.061 20.94v27.657h-8.409V6.586h8.994l16.202 27.686V6.586h8.408v42.012z","fill":"currentColor"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "33ba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/dot-prop/index.js
var dot_prop = __webpack_require__("abc6");
var dot_prop_default = /*#__PURE__*/__webpack_require__.n(dot_prop);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("41b2");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("1098");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./node_modules/async-validator/es/util.js


var formatRegExp = /%[sdj%]/g;

var warning = function warning() {};

// don't print warning message when in production env or node runtime
if (false) {}

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var next = function next(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === objArrLength) {
      callback(results);
    }
  };
  objArrKeys.forEach(function (key) {
    var arr = objArr[key];
    if (firstFields.indexOf(key) !== -1) {
      asyncSerialArray(arr, func, next);
    } else {
      asyncParallelArray(arr, func, next);
    }
  });
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : typeof_default()(value)) === 'object' && typeof_default()(target[s]) === 'object') {
          target[s] = extends_default()({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/required.js


/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/* harmony default export */ var rule_required = (required);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/whitespace.js


/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* harmony default export */ var rule_whitespace = (whitespace);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/type.js




/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : typeof_default()(value)) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function type_type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    rule_required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : typeof_default()(value)) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/* harmony default export */ var rule_type = (type_type);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/range.js


/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

/* harmony default export */ var rule_range = (range);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/enum.js

var ENUM = 'enum';

/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/* harmony default export */ var rule_enum = (enumerable);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/pattern.js


/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern_pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

/* harmony default export */ var rule_pattern = (pattern_pattern);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/index.js







/* harmony default export */ var es_rule = ({
  required: rule_required,
  whitespace: rule_whitespace,
  type: rule_type,
  range: rule_range,
  'enum': rule_enum,
  pattern: rule_pattern
});
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/string.js



/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
      es_rule.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        es_rule.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_string = (string);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/method.js



/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_method = (method);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/number.js



/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_number = (number);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/boolean.js



/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean_boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_boolean = (boolean_boolean);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/regexp.js



/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_regexp = (regexp);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/integer.js



/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_integer = (integer);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/float.js



/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_float = (floatFn);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/array.js


/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, 'array');
    if (!isEmptyValue(value, 'array')) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_array = (array);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/object.js



/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object_object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_object = (object_object);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/enum.js


var enum_ENUM = 'enum';

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enum_enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value) {
      es_rule[enum_ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_enum = (enum_enumerable);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/pattern.js



/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function validator_pattern_pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      es_rule.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_pattern = (validator_pattern_pattern);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/date.js



function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      var dateObject = void 0;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      es_rule.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        es_rule.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_date = (date);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/required.js



function required_required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : typeof_default()(value);
  es_rule.required(rule, value, source, errors, options, type);
  callback(errors);
}

/* harmony default export */ var validator_required = (required_required);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/type.js



function validator_type_type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_type = (validator_type_type);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/index.js















/* harmony default export */ var es_validator = ({
  string: validator_string,
  method: validator_method,
  number: validator_number,
  boolean: validator_boolean,
  regexp: validator_regexp,
  integer: validator_integer,
  float: validator_float,
  array: validator_array,
  object: validator_object,
  'enum': validator_enum,
  pattern: validator_pattern,
  date: validator_date,
  url: validator_type,
  hex: validator_type,
  email: validator_type,
  required: validator_required
});
// CONCATENATED MODULE: ./node_modules/async-validator/es/messages.js
function newMessages() {
  return {
    'default': 'Validation error on field %s',
    required: '%s is required',
    'enum': '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages_messages = newMessages();
// CONCATENATED MODULE: ./node_modules/async-validator/es/index.js






/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = messages_messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((typeof rules === 'undefined' ? 'undefined' : typeof_default()(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = void 0;
    var item = void 0;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments[2];

    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    function complete(results) {
      var i = void 0;
      var field = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat.apply(errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        for (i = 0; i < errors.length; i++) {
          field = errors[i].field;
          fields[field] = fields[field] || [];
          fields[field].push(errors[i]);
        }
      }
      callback(errors, fields);
    }

    if (options.messages) {
      var messages = this.messages();
      if (messages === messages_messages) {
        messages = newMessages();
      }
      deepMerge(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }
    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = extends_default()({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = extends_default()({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof_default()(rule.fields) === 'object' || typeof_default()(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return extends_default()({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (errors.length) {
          warning('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }

          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = extends_default()({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            doIt(errs && errs.length ? errors.concat(errs) : errs);
          });
        }
      }

      var res = rule.validator(rule, data.value, cb, data.source, options);
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !es_validator.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return es_validator.required;
    }
    return es_validator[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  es_validator[type] = validator;
};

Schema.messages = messages_messages;

/* harmony default export */ var es = (Schema);
// CONCATENATED MODULE: ./src/system/components/data-input/shared/input.js




/**
 * @mixin
 */

/* harmony default export */ var input = __webpack_exports__["a"] = ({
  inject: {
    $parentForm: {
      default: null
    }
  },
  provide: function provide() {
    return {
      $parentInput: this
    };
  },
  props: {
    /**
     * The value of the input. Can be passed via v-model.
     */
    value: {
      type: [String, Object, Number],
      default: null
    },

    /**
     * The model name when used within a form component. Uses dot notation.
     */
    model: {
      type: String,
      default: null
    },

    /**
     * The label of the input.
     */
    label: {
      type: String,
      default: null
    },

    /**
     * The id of the input.
     */
    id: {
      type: String,
      default: null
    },

    /**
     * Whether the input is disabled or not.
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * The async-validator schema used for the input.
     */
    schema: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * The input's size.
     * `small, base, large`
     */
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return value.match(/(small|base|large)/);
      }
    }
  },
  data: function data() {
    return {
      innerValue: null,
      error: null,
      focus: false
    };
  },
  computed: {
    stateClasses: function stateClasses() {
      return [this.size && "ds-input-size-".concat(this.size), this.disabled && 'ds-input-is-disabled', this.error && 'ds-input-has-error', this.focus && 'ds-input-has-focus'];
    }
  },
  watch: {
    value: {
      handler: function handler(value) {
        this.innerValue = value;
      },
      deep: true,
      immediate: true
    }
  },
  created: function created() {
    if (this.$parentForm) {
      this.$parentForm.subscribe(this.handleFormUpdate);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$parentForm) {
      this.$parentForm.unsubscribe(this.handleFormUpdate);
    }
  },
  methods: {
    input: function input(event) {
      if (this.$parentForm) {
        this.$parentForm.update(this.model, event.target.value);
      } else {
        /**
         * Fires after user input.
         * Receives the value as the only argument.
         *
         * @event input
         */
        this.$emit('input', event.target.value);
        this.validate(event.target.value);
      }
    },
    handleFormUpdate: function handleFormUpdate(data, errors) {
      this.innerValue = dot_prop_default.a.get(data, this.model);
      this.error = errors ? errors[this.model] : null;
    },
    validate: function validate(value) {
      var _this = this;

      var validator = new es({
        input: this.schema
      }); // Prevent validator from printing to console
      // eslint-disable-next-line

      var warn = console.warn; // eslint-disable-next-line

      console.warn = function () {};

      validator.validate({
        input: value
      }, function (errors) {
        if (errors) {
          _this.error = errors[0].message;
        } else {
          _this.error = null;
        } // eslint-disable-next-line


        console.warn = warn;
      });
    },
    handleFocus: function handleFocus() {
      this.focus = true;
    },
    handleBlur: function handleBlur() {
      this.focus = false;
    }
  }
});

/***/ }),

/***/ "3430":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35d6":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M12 2v4h8V2h-8zm-1 2H6v26h20V4h-5"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3644":
/***/ (function(module, exports) {

module.exports = {"description":"Used to provide actions or navigation.","methods":[],"displayName":"DsButton","props":{"path":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"default() { return null; }","func":true},"tags":{},"comment":"/**\n     * The path of this button. Can be a url or a Vue router path object.\n     */","description":"The path of this button. Can be a url or a Vue router path object."},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The size used for the text.\n     * `small, base, large`\n     */","description":"The size used for the text.\n`small, base, large`"},"linkTag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"default() { const defaultLink = this.$router ? 'router-link' : 'a'; return this.path ? defaultLink : 'button'; }","func":true},"tags":{},"comment":"/**\n     * The component / tag used for this button\n     * `router-link, a`\n     */","description":"The component / tag used for this button\n`router-link, a`"},"primary":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Primary style\n     * `true, false`\n     */","description":"Primary style\n`true, false`"},"danger":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Danger style\n     * `true, false`\n     */","description":"Danger style\n`true, false`"},"hover":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Toggle the hover state\n     * `true, false`\n     */","description":"Toggle the hover state\n`true, false`"},"ghost":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Make the buttons background transparent\n     * `true, false`\n     */","description":"Make the buttons background transparent\n`true, false`"},"icon":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the buttons icon.\n     */","description":"The name of the buttons icon."},"iconRight":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the buttons right icon.\n     */","description":"The name of the buttons right icon."}},"comment":"/**\n * Used to provide actions or navigation.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{"click":{"description":"Click on button.\nReceives two arguments:\nevent, route object","comment":"/**\n       * Click on button.\n       * Receives two arguments:\n       * event, route object\n       *\n       * @event click\n       */"}},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "375a":
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__("b20a");

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3921":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M30 18L16 5 2 18zM2 25h28"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3b19":
/***/ (function(module, exports) {

module.exports = {"description":"","methods":[],"displayName":"DsInputLabel","props":{"label":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"","description":""}},"comment":"/**\n * @version 1.0.0\n * @private\n */","tags":{"access":[{"title":"access","description":"private"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{}}

/***/ }),

/***/ "3b98":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M10 29s0-5 6-5 6 5 6 5H10zM2 6v17h28V6H2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "3eba":
/***/ (function(module, exports) {

module.exports = {"description":"This component is used to group content together in an appealing way.","methods":[],"displayName":"DsCard","props":{"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"article\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the card.\n     */","description":"The html element name used for the card."},"header":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The header for the card.\n     */","description":"The header for the card."},"headerTag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"h3\"","func":false},"tags":{},"comment":"/**\n     * The heading type used for the header.\n     * `h1, h2, h3, h4, h5, h6`\n     */","description":"The heading type used for the header.\n`h1, h2, h3, h4, h5, h6`"},"image":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The image for the card.\n     */","description":"The image for the card."}},"comment":"/**\n * This component is used to group content together in an appealing way.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"\\\"image\\\"":{"description":""},"\\\"header\\\"":{"description":""},"default":{"description":""},"\\\"footer\\\"/":{"description":""}}}

/***/ }),

/***/ "3f30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/TableHeadCol.vue?vue&type=template&id=4684a67b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{staticClass:"ds-table-head-col"},[_vm._t("default",[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/Table/TableHeadCol.vue?vue&type=template&id=4684a67b&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/TableHeadCol.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//

/**
 * Used in combination with the table component to create data tables.
 * @version 1.0.0
 * @see DsTable
 * @private
 */
/* harmony default export */ var TableHeadColvue_type_script_lang_js_ = ({
  name: 'DsTableHeadCol',
  inject: {
    $parentTable: {
      default: null
    }
  },
  props: {
    /**
     * The column value
     */
    label: {
      type: [Number, String, Array, Object],
      default: function _default() {
        return null;
      }
    },

    /**
     * The column width
     */
    width: {
      type: [String, Number, Object],
      default: null
    }
  },
  computed: {}
});
// CONCATENATED MODULE: ./src/system/components/data-display/Table/TableHeadCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_TableHeadColvue_type_script_lang_js_ = (TableHeadColvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/system/components/data-display/Table/TableHeadCol.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Table_TableHeadColvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "TableHeadCol.vue"
/* harmony default export */ var TableHeadCol = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3f6b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("51b6"), __esModule: true };

/***/ }),

/***/ "40bb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "419c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"14","cy":"14","r":"12"}}),_c('path',{attrs:{"d":"M23 23l7 7"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "41b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("3f6b");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "42cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Button/Button.vue?vue&type=template&id=56bfdbca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.linkTag,_vm._b({tag:"component",staticClass:"ds-button",class:[
    _vm.size && ("ds-button-size-" + _vm.size),
    _vm.primary && "ds-button-primary",
    _vm.danger && "ds-button-danger",
    _vm.ghost && "ds-button-ghost",
    _vm.iconOnly && "ds-button-icon-only",
    _vm.hover && "ds-button-hover"
  ],on:{"!click":function($event){return _vm.handleClick($event)}}},'component',_vm.bindings,false),[(_vm.icon)?_c('ds-icon',{attrs:{"name":_vm.icon}}):_vm._e(),(_vm.$slots.default)?_c('span',{staticClass:"ds-button-text"},[_vm._t("default")],2):_vm._e(),(_vm.iconRight)?_c('ds-icon',{attrs:{"name":_vm.iconRight}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/navigation/Button/Button.vue?vue&type=template&id=56bfdbca&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Button/Button.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Used to provide actions or navigation.
 * @version 1.0.0
 */
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: 'DsButton',
  props: {
    /**
     * The path of this button. Can be a url or a Vue router path object.
     */
    path: {
      type: [String, Object],
      default: function _default() {
        return null;
      }
    },

    /**
     * The size used for the text.
     * `small, base, large`
     */
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return value.match(/(small|base|large)/);
      }
    },

    /**
     * The component / tag used for this button
     * `router-link, a`
     */
    linkTag: {
      type: String,
      default: function _default() {
        var defaultLink = this.$router ? 'router-link' : 'a';
        return this.path ? defaultLink : 'button';
      },
      validator: function validator(value) {
        return value.match(/(router-link|a|button)/);
      }
    },

    /**
     * Primary style
     * `true, false`
     */
    primary: {
      type: Boolean,
      default: false
    },

    /**
     * Danger style
     * `true, false`
     */
    danger: {
      type: Boolean,
      default: false
    },

    /**
     * Toggle the hover state
     * `true, false`
     */
    hover: {
      type: Boolean,
      default: false
    },

    /**
     * Make the buttons background transparent
     * `true, false`
     */
    ghost: {
      type: Boolean,
      default: false
    },

    /**
     * The name of the buttons icon.
     */
    icon: {
      type: String,
      default: null
    },

    /**
     * The name of the buttons right icon.
     */
    iconRight: {
      type: String,
      default: null
    }
  },
  computed: {
    bindings: function bindings() {
      var bindings = {};

      if (this.path && this.linkTag === 'router-link') {
        bindings.to = this.path;
      }

      if (this.path && this.linkTag === 'a') {
        bindings.href = this.path;
      }

      return bindings;
    },
    iconOnly: function iconOnly() {
      return !this.$slots.default && this.icon && !this.iconRight;
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      /**
       * Click on button.
       * Receives two arguments:
       * event, route object
       *
       * @event click
       */
      this.$emit('click', event, this.route);
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/navigation/Button/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/navigation/Button/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("e577");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/navigation/Button/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fnavigation%2FButton%2FButton.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton = (function () {});
// CONCATENATED MODULE: ./src/system/components/navigation/Button/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fnavigation%2FButton%2FButton.vue
 /* harmony default export */ var Button_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton); 
// CONCATENATED MODULE: ./src/system/components/navigation/Button/Button.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Button_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Button_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton === 'function') Button_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton(component)

component.options.__file = "Button.vue"
/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "432b":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M10 30l16-14L10 2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "4409":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c4c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "490c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("17a9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "4ab5":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M30 12L16 24 2 12"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "4acc":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 16h28"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4c8b":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M21 2H11c-1 0-2 1-2 2v24c0 1 1 2 2 2h10c1 0 2-1 2-2V4c0-1-1-2-2-2zM9 5h14M9 27h14"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "4caa":
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__("a919"),
    toString = __webpack_require__("76dd");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "5073":
/***/ (function(module, exports) {

module.exports = {"description":"This component is used to layout a page.","methods":[],"displayName":"DsPage","props":{"contained":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the layout should have a maximum width\n     * `true, false`\n     */","description":"Whether the layout should have a maximum width\n`true, false`"}},"comment":"/**\n * This component is used to layout a page.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"\\\"brand\\\"/":{"description":""},"\\\"navbar\\\"/":{"description":""},"\\\"sidebar\\\"":{"description":""},"\\\"drawer\\\"":{"description":""},"default":{"description":""}}}

/***/ }),

/***/ "5079":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "50fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "51b6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a3c3");
module.exports = __webpack_require__("584a").Object.assign;


/***/ }),

/***/ "5270":
/***/ (function(module, exports) {

module.exports = {"description":"Icons are used to add meaning and improve accessibility.","methods":[],"displayName":"DsIcon","props":{"name":{"type":{"name":"string"},"required":true,"tags":{},"comment":"/**\n     * The name of the icon.\n     */","description":"The name of the icon."},"ariaLabel":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"icon\"","func":false},"tags":{},"comment":"/**\n     * Descriptive text to be read to screenreaders.\n     */","description":"Descriptive text to be read to screenreaders."},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"span\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the icon.\n     */","description":"The html element name used for the icon."}},"comment":"/**\n * Icons are used to add meaning and improve accessibility.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{}}

/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5343":
/***/ (function(module, exports) {

module.exports = {"description":"Used in combination with the menu item to help the user navigate.","methods":[],"displayName":"DsMenuItem","props":{"route":{"type":{"name":"object"},"required":"","defaultValue":{"value":"default() { return null; }","func":true},"tags":{},"comment":"/**\n     * The route to display\n     */","description":"The route to display"},"parents":{"type":{"name":"array"},"required":"","defaultValue":{"value":"default() { return []; }","func":true},"tags":{},"comment":"/**\n     * The parents of this route\n     */","description":"The parents of this route"},"linkTag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"default() { return this.$parentMenu.linkTag ? this.$parentMenu.linkTag : 'router-link'; }","func":true},"tags":{},"comment":"/**\n     * The component / tag used for the link of this route\n     * `router-link, a`\n     */","description":"The component / tag used for the link of this route\n`router-link, a`"}},"comment":"/**\n * Used in combination with the menu item to help the user navigate.\n * @version 1.0.0\n * @see DsMenu\n */","tags":{"see":[{"title":"see","description":"DsMenu"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{"click":{"description":"Handles click on menu item.\nReceives two arguments:\nevent, route object","comment":"/**\n       * Handles click on menu item.\n       * Receives two arguments:\n       * event, route object\n       *\n       * @event click\n       */"}},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "53ef":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M5 13h8V5m6 0v8h8M5 19h8v8m14-8h-8v8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "5700":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 64 64"}},[_c('path',{attrs:{"fill":"currentColor","d":"M32 0C14 0 0 14 0 32c0 21 19 30 22 30 2 0 2-1 2-2v-5c-7 2-10-2-11-5 0 0 0-1-2-3-1-1-5-3-1-3 3 0 5 4 5 4 3 4 7 3 9 2 0-2 2-4 2-4-8-1-14-4-14-15 0-4 1-7 3-9 0 0-2-4 0-9 0 0 5 0 9 4 3-2 13-2 16 0 4-4 9-4 9-4 2 7 0 9 0 9 2 2 3 5 3 9 0 11-7 14-14 15 1 1 2 3 2 6v8c0 1 0 2 2 2 3 0 22-9 22-30C64 14 50 0 32 0z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5834":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M16 2v28M2 16h28"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5842":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12 4l5 4 5-4m-5-10v14"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5a14":
/***/ (function(module, exports) {

module.exports = {"description":"Used for handling basic user input.","methods":[],"displayName":"DsInput","props":{"value":{"type":{"name":"string|object|number"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The value of the input. Can be passed via v-model.\n     */","description":"The value of the input. Can be passed via v-model."},"model":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The model name when used within a form component. Uses dot notation.\n     */","description":"The model name when used within a form component. Uses dot notation."},"label":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The label of the input.\n     */","description":"The label of the input."},"id":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The id of the input.\n     */","description":"The id of the input."},"disabled":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input is disabled or not.\n     */","description":"Whether the input is disabled or not."},"schema":{"type":{"name":"object"},"required":"","defaultValue":{"value":"() => ({})","func":true},"tags":{},"comment":"/**\n     * The async-validator schema used for the input.\n     */","description":"The async-validator schema used for the input."},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The input's size.\n     * `small, base, large`\n     */","description":"The input's size.\n`small, base, large`"},"type":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"text\"","func":false},"tags":{},"comment":"/**\n     * The type of this input `url, text, password, email, search, textarea`.\n     */","description":"The type of this input `url, text, password, email, search, textarea`."},"placeholder":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The placeholder shown when value is empty.\n     */","description":"The placeholder shown when value is empty."},"autofocus":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input should be automatically focused\n     */","description":"Whether the input should be automatically focused"},"readonly":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input should be read-only\n     */","description":"Whether the input should be read-only"},"rows":{"type":{"name":"string|number"},"required":"","defaultValue":{"value":"1","func":false},"tags":{},"comment":"/**\n     * How many rows this input should have (only for type=\\\"textarea\\\")\n     */","description":"How many rows this input should have (only for type=\\\"textarea\\\")"},"icon":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the input's icon.\n     */","description":"The name of the input's icon."},"iconRight":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the input's right icon.\n     */","description":"The name of the input's right icon."}},"comment":"/**\n * Used for handling basic user input.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{"input":{"description":"Fires after user input.\nReceives the value as the only argument.","comment":"/**\n         * Fires after user input.\n         * Receives the value as the only argument.\n         *\n         * @event input\n         */"}},"slots":{}}

/***/ }),

/***/ "5b29":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M6 2v28h20V10l-8-8zm12 0v8h8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5bbb":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M20 24l-8-8L2 26V2h28v22m-14-4l6-6 8 8v8H2v-6"}}),_c('circle',{attrs:{"cx":"10","cy":"9","r":"3"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d84":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/PageTitle/PageTitle.vue?vue&type=template&id=1dd47454&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-page-title",class:[
    _vm.highlight && "ds-page-title-highlight"
  ]},[_c('ds-container',[_c('ds-heading',[_vm._v("\n      "+_vm._s(_vm.heading)+"\n    ")]),_vm._t("default")],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/PageTitle/PageTitle.vue?vue&type=template&id=1dd47454&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/PageTitle/PageTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * This component is used as the title of a page.
 * @version 1.0.0
 */
/* harmony default export */ var PageTitlevue_type_script_lang_js_ = ({
  name: 'DsPageTitle',
  props: {
    /**
     * The heading of the page.
     */
    heading: {
      type: String,
      default: '',
      required: true
    },

    /**
     * Whether this title should be highlighted
     * `true, false`
     */
    highlight: {
      type: Boolean,
      default: false
    },

    /**
     * The html element name used for the title.
     */
    tag: {
      type: String,
      default: 'header'
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/PageTitle/PageTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var PageTitle_PageTitlevue_type_script_lang_js_ = (PageTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/PageTitle/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("4409");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/PageTitle/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPageTitle%2FPageTitle.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/PageTitle/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPageTitle%2FPageTitle.vue
 /* harmony default export */ var PageTitle_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle); 
// CONCATENATED MODULE: ./src/system/components/layout/PageTitle/PageTitle.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PageTitle_PageTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof PageTitle_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle === 'function') PageTitle_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle(component)

component.options.__file = "PageTitle.vue"
/* harmony default export */ var PageTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5d8b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Flex/FlexItem.vue?vue&type=template&id=cfa5fcda&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-flex-item",style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Flex/FlexItem.vue?vue&type=template&id=cfa5fcda&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("c93e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./src/system/utils/index.js
var utils = __webpack_require__("2b4b");

// EXTERNAL MODULE: ./src/system/mixins/index.js + 1 modules
var mixins = __webpack_require__("cabe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Flex/FlexItem.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//


/**
 * @version 1.0.0
 * @see DsFlex
 */

/* harmony default export */ var FlexItemvue_type_script_lang_js_ = ({
  name: 'DsFlexItem',
  mixins: [mixins["mediaQuery"]],
  inject: {
    $parentFlex: {
      default: null
    }
  },
  props: {
    /**
     * The width of the item.
     */
    width: {
      type: [String, Number, Object],
      default: function _default() {
        return this.$parentFlex ? this.$parentFlex.width : 1;
      }
    },

    /**
     * The html element name used for the wrapper.
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parentFlex ? this.$parentFlex.gutter : 0;
    },
    styles: function styles() {
      var width = this.mediaQuery(this.width);
      var gutter = this.mediaQuery(this.gutter);
      var widthStyle = this.parseWidth(width);
      var gutterStyle = this.parseGutter(gutter);
      return Object(objectSpread["a" /* default */])({}, widthStyle, gutterStyle);
    }
  },
  methods: {
    parseWidth: function parseWidth(width) {
      var styles = {};

      if (isNaN(width)) {
        styles.flexBasis = width;
        styles.width = width;
      } else {
        styles.flexGrow = width;
        styles.flexShrink = 0;
        styles.flexBasis = 0;
      }

      return styles;
    },
    parseGutter: function parseGutter(gutter) {
      var realGutter = Object(utils["getSpace"])(gutter);

      if (realGutter === 0) {
        return {};
      }

      return {
        paddingLeft: "".concat(realGutter / 2, "px"),
        paddingRight: "".concat(realGutter / 2, "px"),
        marginBottom: "".concat(realGutter, "px")
      };
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Flex/FlexItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Flex_FlexItemvue_type_script_lang_js_ = (FlexItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/system/components/layout/Flex/FlexItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Flex_FlexItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "FlexItem.vue"
/* harmony default export */ var FlexItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5d96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/FormItem.vue?vue&type=template&id=72c16fce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ds-form-item",class:_vm.$parentInput.stateClasses},[_c('ds-input-label',{attrs:{"label":_vm.$parentInput.label,"for":_vm.$parentInput.id}}),_vm._t("default"),_c('ds-input-error',{attrs:{"error":_vm.$parentInput.error}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/FormItem.vue?vue&type=template&id=72c16fce&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/FormItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @version 1.0.0
 * @private
 */
/* harmony default export */ var FormItemvue_type_script_lang_js_ = ({
  name: 'DsFormItem',
  inject: ['$parentInput']
});
// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/FormItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormItem_FormItemvue_type_script_lang_js_ = (FormItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/data-input/FormItem/FormItem.vue?vue&type=style&index=0&lang=scss&
var FormItemvue_type_style_index_0_lang_scss_ = __webpack_require__("a6f4");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/FormItem.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  FormItem_FormItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "FormItem.vue"
/* harmony default export */ var FormItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "60c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Container/Container.vue?vue&type=template&id=67351bac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-container"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Container/Container.vue?vue&type=template&id=67351bac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Container/Container.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/**
 * This component is used as a wrapper for the page's content.
 * @version 1.0.0
 */
/* harmony default export */ var Containervue_type_script_lang_js_ = ({
  name: 'DsContainer',
  props: {
    /**
     * The html element name used for the wrapper.
     */
    tag: {
      type: String,
      default: 'div'
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Container/Container.vue?vue&type=script&lang=js&
 /* harmony default export */ var Container_Containervue_type_script_lang_js_ = (Containervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/Container/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("fbc9");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Container/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FContainer%2FContainer.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Container/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FContainer%2FContainer.vue
 /* harmony default export */ var Container_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer); 
// CONCATENATED MODULE: ./src/system/components/layout/Container/Container.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Container_Containervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Container_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer === 'function') Container_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer(component)

component.options.__file = "Container.vue"
/* harmony default export */ var Container = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6102":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 16L30 2 16 30l-4-10zM30 2L12 20"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "61b2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("febd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "625e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6417":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M20 16c0-8-5-14-5-14l-7 8H2v12h6l7 8s5-6 5-14z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "65d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3430");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "66af":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 15v10h28V15l-4-8H6zm0 0h8s1 5 6 5 6-5 6-5h8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "6747":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "674a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M20 30L8 16 20 2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "67c9":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M4 12V4h8m8 0h8v8M4 20v8h8m16-8v8h-8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "684c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M6 22l10 8 10-8m-10 8V2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "6875":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Input/Input.vue?vue&type=template&id=a63d87fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ds-form-item',[_c('div',{staticClass:"ds-input-wrap"},[(_vm.icon)?_c('div',{staticClass:"ds-input-icon"},[_c('ds-icon',{attrs:{"name":_vm.icon}})],1):_vm._e(),_c(_vm.tag,{tag:"component",staticClass:"ds-input",class:[
        _vm.icon && "ds-input-has-icon",
        _vm.iconRight && "ds-input-has-icon-right"
      ],attrs:{"id":_vm.id,"name":_vm.model,"type":_vm.type,"autofocus":_vm.autofocus,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"readonly":_vm.readonly,"rows":_vm.type === 'textarea' ? _vm.rows : null},domProps:{"value":_vm.innerValue,"innerHTML":_vm._s(_vm.type === 'textarea' ? _vm.innerValue : null)},on:{"input":_vm.input,"focus":_vm.handleFocus,"blur":_vm.handleBlur}}),(_vm.iconRight)?_c('div',{staticClass:"ds-input-icon-right"},[_c('ds-icon',{attrs:{"name":_vm.iconRight}})],1):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/Input/Input.vue?vue&type=template&id=a63d87fa&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./src/system/components/data-input/shared/input.js + 25 modules
var input = __webpack_require__("33ba");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Input/Input.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Used for handling basic user input.
 * @version 1.0.0
 */

/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  name: 'DsInput',
  mixins: [input["a" /* default */]],
  props: {
    /**
     * The type of this input `url, text, password, email, search, textarea`.
     */
    type: {
      type: String,
      default: 'text',
      validator: function validator(value) {
        return value.match(/(url|text|password|email|search|textarea)/);
      }
    },

    /**
     * The placeholder shown when value is empty.
     */
    placeholder: {
      type: String,
      default: null
    },

    /**
     * Whether the input should be automatically focused
     */
    autofocus: {
      type: Boolean,
      default: false
    },

    /**
     * Whether the input should be read-only
     */
    readonly: {
      type: Boolean,
      default: false
    },

    /**
     * How many rows this input should have (only for type="textarea")
     */
    rows: {
      type: [String, Number],
      default: 1
    },

    /**
     * The name of the input's icon.
     */
    icon: {
      type: String,
      default: null
    },

    /**
     * The name of the input's right icon.
     */
    iconRight: {
      type: String,
      default: null
    }
  },
  computed: {
    tag: function tag() {
      if (this.type === 'textarea') {
        return 'textarea';
      }

      return 'input';
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-input/Input/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var Input_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/data-input/Input/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("0e73");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-input/Input/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FInput%2FInput.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-input/Input/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FInput%2FInput.vue
 /* harmony default export */ var Input_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput); 
// CONCATENATED MODULE: ./src/system/components/data-input/Input/Input.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Input_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Input_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput === 'function') Input_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput(component)

component.options.__file = "Input.vue"
/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6ab6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tokenMap; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("456d");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bba4");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_tokens_raw_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("804f");
var _generated_tokens_raw_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t("804f", 1);







var _Object$keys$reduce = Object.keys(_generated_tokens_raw_json__WEBPACK_IMPORTED_MODULE_5__.props).reduce(function (_ref, key) {
  var tokens = _ref.tokens,
      tokenMap = _ref.tokenMap;
  var token = _generated_tokens_raw_json__WEBPACK_IMPORTED_MODULE_5__.props[key];
  var name = lodash_camelCase__WEBPACK_IMPORTED_MODULE_4___default()(key);
  var category = lodash_camelCase__WEBPACK_IMPORTED_MODULE_4___default()(token.category);

  if (!tokenMap[category]) {
    tokenMap[category] = {};
  }

  token.scss = "$".concat(key.replace(/_/g, '-'));
  tokens[name] = token.value;
  tokenMap[category][name] = token;
  return {
    tokens: tokens,
    tokenMap: tokenMap
  };
}, {
  tokens: {},
  tokenMap: {}
}),
    tokens = _Object$keys$reduce.tokens,
    tokenMap = _Object$keys$reduce.tokenMap;



/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6ac0":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6bd3":
/***/ (function(module, exports) {

module.exports = {"description":"Text is used for styling and grouping paragraphs or words.\nDefaults to a `p` tag. If nested inside of another text\ncomponent it defaults to a `span` tag.","methods":[],"displayName":"DsText","props":{"color":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The color used for the text.\n     * `default, soft, softer, primary, inverse, success, warning, danger`\n     */","description":"The color used for the text.\n`default, soft, softer, primary, inverse, success, warning, danger`"},"bold":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * Whether the text is bold.\n     */","description":"Whether the text is bold."},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The size used for the text.\n     * `small, base, large, x-large`\n     */","description":"The size used for the text.\n`small, base, large, x-large`"},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"default() { return this.$parentText ? 'span' : 'p'; }","func":true},"tags":{},"comment":"/**\n     * The html element name used for the text.\n     */","description":"The html element name used for the text."}},"comment":"/**\n * Text is used for styling and grouping paragraphs or words.\n * Defaults to a `p` tag. If nested inside of another text\n * component it defaults to a `span` tag.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "6bdb":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M6 2h20v28L16 20 6 30z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "6bde":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6da8":
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "6dc0":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M28 16H8m12-8l8 8-8 8m-9 4H3V4h8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "6dc6":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M16 2c-4 0-4 4-4 4v10s0 4 4 4 4-4 4-4V6s0-4-4-4zM8 17s0 7 8 7 8-7 8-7M13 29h6m-3-5v5"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "6ee3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Flex/Flex.vue?vue&type=template&id=462cbeb6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-flex",style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Flex/Flex.vue?vue&type=template&id=462cbeb6&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("c93e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./src/system/utils/index.js
var utils = __webpack_require__("2b4b");

// EXTERNAL MODULE: ./src/system/mixins/index.js + 1 modules
var mixins = __webpack_require__("cabe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Flex/Flex.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//


/**
 * Used in combination with the col component to create flexible layouts.
 * @version 1.0.0
 */

/* harmony default export */ var Flexvue_type_script_lang_js_ = ({
  name: 'DsFlex',
  mixins: [mixins["mediaQuery"]],
  provide: function provide() {
    return {
      $parentFlex: this
    };
  },
  props: {
    /**
     * The default gutter size for the columns.
     */
    gutter: {
      type: [String, Object],
      default: null
    },

    /**
     * The default width for the columns.
     */
    width: {
      type: [String, Number, Object],
      default: 1
    },

    /**
     * The direction of the items.
     * `row, row-reverse, column, column-reverse`
     */
    direction: {
      type: [String, Object],
      default: null
    },

    /**
     * The html element name used for the wrapper.
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    styles: function styles() {
      var gutter = this.mediaQuery(this.gutter);
      var direction = this.mediaQuery(this.direction);
      var gutterStyle = gutter ? this.parseGutter(gutter) : {};
      var directionStyle = direction ? this.parseDirection(direction) : {};
      return Object(objectSpread["a" /* default */])({}, gutterStyle, directionStyle);
    }
  },
  methods: {
    parseGutter: function parseGutter(gutter) {
      var realGutter = Object(utils["getSpace"])(gutter);
      return {
        marginLeft: "-".concat(realGutter / 2, "px"),
        marginRight: "-".concat(realGutter / 2, "px")
      };
    },
    parseDirection: function parseDirection(direction) {
      return {
        flexDirection: direction
      };
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Flex/Flex.vue?vue&type=script&lang=js&
 /* harmony default export */ var Flex_Flexvue_type_script_lang_js_ = (Flexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/Flex/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("ad3a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Flex/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FFlex%2FFlex.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Flex/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FFlex%2FFlex.vue
 /* harmony default export */ var Flex_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex); 
// CONCATENATED MODULE: ./src/system/components/layout/Flex/Flex.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Flex_Flexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Flex_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex === 'function') Flex_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex(component)

component.options.__file = "Flex.vue"
/* harmony default export */ var Flex = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6ff2":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12-12 12-12 12-9-8-12-12z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "70e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/Table.vue?vue&type=template&id=3311e190&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.dataArray)?_c('div',{staticClass:"ds-table-wrap"},[_c('table',{staticClass:"ds-table",attrs:{"cellpadding":"0","cellspacing":"0"}},[_c('colgroup',_vm._l((_vm.headers),function(header){return _c('col',{key:header.key,attrs:{"width":header.width}})})),_c('thead',[_c('tr',_vm._l((_vm.headers),function(header){return _c('ds-table-head-col',{key:header.key},[_vm._v("\n          "+_vm._s(header.label)+"\n        ")])}))]),_c('tbody',_vm._l((_vm.rows),function(row,index){return _c('tr',{key:index},_vm._l((row),function(col){return _c('ds-table-col',{key:col.key},[_vm._t(col.key,[_vm._v("\n            "+_vm._s(col.value)+"\n          ")],{row:_vm.dataArray[index] ? _vm.dataArray[index] : null,col:col,index:index})],2)}))}))])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/Table/Table.vue?vue&type=template&id=3311e190&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js
var es6_typeof = __webpack_require__("6bde");

// EXTERNAL MODULE: ./node_modules/lodash/startCase.js
var startCase = __webpack_require__("e740");
var startCase_default = /*#__PURE__*/__webpack_require__.n(startCase);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/Table.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Used in combination with the table row to create data tables.
 * @version 1.0.0
 */

/* harmony default export */ var Tablevue_type_script_lang_js_ = ({
  name: 'DsTable',
  provide: function provide() {
    return {
      $parentTable: this
    };
  },
  props: {
    /**
     * The table's data
     */
    data: {
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },

    /**
     * The table's header config
     */
    fields: {
      type: [Array, Object],
      default: function _default() {
        return null;
      }
    }
  },
  computed: {
    dataArray: function dataArray() {
      var _this = this;

      if (Array.isArray(this.data)) {
        return this.data;
      }

      if (Object(es6_typeof["a" /* default */])(this.data) === 'object') {
        return Object.keys(this.data).map(function (key) {
          return _this.data[key];
        });
      }

      return [];
    },
    headers: function headers() {
      var _this2 = this;

      var keys = this.dataArray[0] ? Object.keys(this.dataArray[0]) : [];
      var headerObj = {};

      if (this.fields) {
        if (Array.isArray(this.fields)) {
          keys = this.fields;
        } else if (Object(es6_typeof["a" /* default */])(this.fields) === 'object') {
          keys = Object.keys(this.fields);
          headerObj = this.fields;
        }
      }

      return keys.map(function (key) {
        var header = {
          key: key,
          label: _this2.parseLabel(key),
          width: ''
        };

        if (headerObj[key]) {
          var headerMerge = typeof headerObj[key] === 'string' ? {
            label: headerObj[key]
          } : headerObj[key];
          header = Object.assign(header, headerMerge);
        }

        return header;
      });
    },
    rows: function rows() {
      var _this3 = this;

      var keys = this.dataArray[0] ? Object.keys(this.dataArray[0]) : [];
      return this.dataArray.map(function (row) {
        if (_this3.fields) {
          keys = Array.isArray(_this3.fields) ? _this3.fields : Object.keys(_this3.fields);
        }

        return keys.map(function (key) {
          return {
            key: key,
            value: row[key]
          };
        });
      });
    }
  },
  methods: {
    parseLabel: function parseLabel(label) {
      return startCase_default()(label);
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-display/Table/Table.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_Tablevue_type_script_lang_js_ = (Tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/data-display/Table/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("21fa");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-display/Table/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FTable%2FTable.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-display/Table/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FTable%2FTable.vue
 /* harmony default export */ var Table_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable); 
// CONCATENATED MODULE: ./src/system/components/data-display/Table/Table.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Table_Tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Table_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable === 'function') Table_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable(component)

component.options.__file = "Table.vue"
/* harmony default export */ var Table = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7401":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/TableCol.vue?vue&type=template&id=260a1525&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"ds-table-col"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/Table/TableCol.vue?vue&type=template&id=260a1525&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/TableCol.vue?vue&type=script&lang=js&

//
//
//
//
//
//

/**
 * Used in combination with the table component to create data tables.
 * @version 1.0.0
 * @see DsTable
 * @private
 */
/* harmony default export */ var TableColvue_type_script_lang_js_ = ({
  name: 'DsTableCol',
  inject: {
    $parentTable: {
      default: null
    }
  },
  props: {
    /**
     * The column width
     */
    width: {
      type: [String, Number, Object],
      default: null
    }
  },
  computed: {}
});
// CONCATENATED MODULE: ./src/system/components/data-display/Table/TableCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_TableColvue_type_script_lang_js_ = (TableColvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/system/components/data-display/Table/TableCol.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Table_TableColvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "TableCol.vue"
/* harmony default export */ var TableCol = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7559":
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "75cf":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M20 16c0-8-5-14-5-14l-7 8H2v12h6l7 8s5-6 5-14zm1-14s4 4 4 14-4 14-4 14m6-26s3 4 3 12-3 12-3 12"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "76dd":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("ce86");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "776e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Page/Page.vue?vue&type=template&id=41175abd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ds-page",class:[
    _vm.hasHeader ? 'ds-page-has-header' : 'ds-page-has-no-header',
    _vm.$slots.sidebar && 'ds-page-has-sidebar',
    _vm.showDrawer && 'ds-page-show-drawer',
    _vm.contained && 'ds-page-is-contained'
  ]},[_c('header',{staticClass:"ds-page-header"},[_c('div',{staticClass:"ds-page-header-container"},[_c('div',{staticClass:"ds-page-brand"},[_vm._t("brand")],2),_c('div',{staticClass:"ds-page-navbar"},[_vm._t("navbar")],2),(_vm.$slots.drawer)?_c('div',{staticClass:"ds-page-navigation-toggle",on:{"click":function($event){_vm.showDrawer = !_vm.showDrawer}}},[_c('ds-icon',{attrs:{"name":"menu"}})],1):_vm._e()])]),(_vm.$slots.sidebar)?_c('aside',{staticClass:"ds-page-sidebar"},[_c('div',{staticClass:"ds-page-sidebar-content"},[_vm._t("sidebar")],2)]):_vm._e(),(_vm.$slots.drawer)?_c('aside',{staticClass:"ds-page-drawer"},[_vm._t("drawer")],2):_vm._e(),_c('main',{staticClass:"ds-page-content"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Page/Page.vue?vue&type=template&id=41175abd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Page/Page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * This component is used to layout a page.
 * @version 1.0.0
 */
/* harmony default export */ var Pagevue_type_script_lang_js_ = ({
  name: 'DsPage',
  props: {
    /**
     * Whether the layout should have a maximum width
     * `true, false`
     */
    contained: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      showDrawer: false
    };
  },
  computed: {
    hasHeader: function hasHeader() {
      return this.$slots.navbar;
    }
  },
  methods: {
    closeDrawer: function closeDrawer() {
      this.showDrawer = false;
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Page/Page.vue?vue&type=script&lang=js&
 /* harmony default export */ var Page_Pagevue_type_script_lang_js_ = (Pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/Page/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("db82");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Page/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPage%2FPage.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Page/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPage%2FPage.vue
 /* harmony default export */ var Page_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage); 
// CONCATENATED MODULE: ./src/system/components/layout/Page/Page.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Page_Pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Page_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage === 'function') Page_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage(component)

component.options.__file = "Page.vue"
/* harmony default export */ var Page = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7799":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M24 2v14L10 2v28l14-14v14"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "78a7":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M18 13l8-11L8 13l6 6-8 11 18-11z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "7948":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "798c":
/***/ (function(module, exports) {

module.exports = {"description":"This component displays the brand's logo.","methods":[],"displayName":"DsLogo","props":{"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the logo.\n     */","description":"The html element name used for the logo."}},"comment":"/**\n * This component displays the brand's logo.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{}}

/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7b6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9baa");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7bf7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Menu/Menu.vue?vue&type=template&id=79e108e3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"ds-menu",class:[
    _vm.inverse && 'ds-menu-inverse',
    _vm.navbar && 'ds-menu-navbar'
  ]},[_c('ul',{staticClass:"ds-menu-list"},[_vm._t("default",[_vm._l((_vm.routes),function(route,index){return _vm._t(route.name,[_c('ds-menu-item',{key:route.path ? route.path : index,attrs:{"route":route}})],{route:route,parents:[]})})])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/navigation/Menu/Menu.vue?vue&type=template&id=79e108e3&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Menu/Menu.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Used in combination with the menu item to help the user navigate.
 * @version 1.0.0
 */
/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  name: 'DsMenu',
  provide: function provide() {
    return {
      $parentMenu: this
    };
  },
  props: {
    /**
     * The routes to display
     */
    routes: {
      type: Array,
      default: function _default() {
        return null;
      }
    },

    /**
     * Set to true, if you use it on dark background
     */
    inverse: {
      type: Boolean,
      default: false
    },

    /**
     * Display menu as a navbar
     */
    navbar: {
      type: Boolean,
      default: false
    },

    /**
     * The default component / tag used for the link of menu items
     * `router-link, a`
     */
    linkTag: {
      type: String,
      default: function _default() {
        return this.$router ? 'router-link' : 'a';
      },
      validator: function validator(value) {
        return value.match(/(router-link|a)/);
      }
    },

    /**
     * Function that parses the url for each menu item
     */
    urlParser: {
      type: Function,
      default: function _default(route, parents) {
        if (route.path) {
          return route.path;
        }

        var parseName = this.$options.filters.kebabCase;

        var routeParts = _toConsumableArray(parents).concat([route]).map(function (p) {
          return parseName(p.name);
        });

        return '/' + routeParts.join('/');
      }
    },

    /**
     * Function that parses the name for each menu item
     */
    nameParser: {
      type: Function,
      default: function _default(route) {
        return route.name;
      }
    },

    /**
     * Function that checks if the url must be matched exactly in order to activate the menu item. By default only '/' must be matched exactly.
     */
    isExact: {
      type: Function,
      default: function _default(url) {
        return url === '/' || url.path === '/';
      }
    }
  },
  computed: {},
  methods: {
    handleNavigate: function handleNavigate() {
      /**
       * Menu navigates to route.
       *
       * @event navigate
       */
      this.$emit('navigate');
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/navigation/Menu/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/navigation/Menu/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("490c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/navigation/Menu/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fnavigation%2FMenu%2FMenu.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu = (function () {});
// CONCATENATED MODULE: ./src/system/components/navigation/Menu/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fnavigation%2FMenu%2FMenu.vue
 /* harmony default export */ var Menu_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu); 
// CONCATENATED MODULE: ./src/system/components/navigation/Menu/Menu.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Menu_Menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Menu_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu === 'function') Menu_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu(component)

component.options.__file = "Menu.vue"
/* harmony default export */ var Menu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7c4c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7dfc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7e8e":
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "804f":
/***/ (function(module) {

module.exports = {"aliases":{"green":{"value":"100, 69%"},"neutral":{"value":"3, 2%"},"orange":{"value":"28, 80%"},"red":{"value":"3, 65%"},"yellow":{"value":"48, 100%"},"pink":{"value":"330, 86%"},"blue":{"value":"200, 100%"},"teal":{"value":"170, 88%"},"purple":{"value":"271, 88%"},"x-large":{"value":48},"xxx-large":{"value":128},"small":{"value":16},"xx-large":{"value":64},"base":{"value":24},"xxx-small":{"value":2},"x-small":{"value":8},"xx-small":{"value":4},"large":{"value":32},"xs":{"value":480},"sm":{"value":600},"md":{"value":768},"lg":{"value":1024},"xl":{"value":1200}},"props":{"color-neutral-0":{"type":"color","category":"color","name":"color-neutral-0","value":"rgb(26, 25, 25)","originalValue":"hsla({!neutral}, 10%, 1)"},"color-neutral-10":{"type":"color","category":"color","name":"color-neutral-10","value":"rgb(42, 40, 40)","originalValue":"hsla({!neutral}, 16%, 1)"},"color-neutral-20":{"type":"color","category":"color","name":"color-neutral-20","value":"rgb(78, 75, 75)","originalValue":"hsla({!neutral}, 30%, 1)"},"color-neutral-30":{"type":"color","category":"color","name":"color-neutral-30","value":"rgb(104, 100, 100)","originalValue":"hsla({!neutral}, 40%, 1)"},"color-neutral-40":{"type":"color","category":"color","name":"color-neutral-40","value":"rgb(117, 113, 112)","originalValue":"hsla({!neutral}, 45%, 1)"},"color-neutral-50":{"type":"color","category":"color","name":"color-neutral-50","value":"rgb(155, 151, 151)","originalValue":"hsla({!neutral}, 60%, 1)"},"color-neutral-60":{"type":"color","category":"color","name":"color-neutral-60","value":"rgb(180, 177, 177)","originalValue":"hsla({!neutral}, 70%, 1)"},"color-neutral-70":{"type":"color","category":"color","name":"color-neutral-70","value":"rgb(205, 203, 203)","originalValue":"hsla({!neutral}, 80%, 1)"},"color-neutral-80":{"type":"color","category":"color","name":"color-neutral-80","value":"rgb(230, 229, 229)","originalValue":"hsla({!neutral}, 90%, 1)"},"color-neutral-85":{"type":"color","category":"color","name":"color-neutral-85","value":"rgb(240, 239, 239)","originalValue":"hsla({!neutral}, 94%, 1)"},"color-neutral-90":{"type":"color","category":"color","name":"color-neutral-90","value":"rgb(245, 245, 245)","originalValue":"hsla({!neutral}, 96%, 1)"},"color-neutral-95":{"type":"color","category":"color","name":"color-neutral-95","value":"rgb(250, 250, 250)","originalValue":"hsla({!neutral}, 98%, 1)"},"color-neutral-100":{"type":"color","category":"color","name":"color-neutral-100","value":"rgb(255, 255, 255)","originalValue":"hsla({!neutral}, 100%, 1)"},"color-primary":{"type":"color","category":"color","name":"color-primary","value":"rgb(0, 153, 230)","originalValue":"hsla({!blue}, 45%, 1)"},"color-primary-active":{"type":"color","category":"color","name":"color-primary-active","value":"rgb(0, 163, 245)","originalValue":"hsla({!blue}, 48%, 1)"},"color-primary-inverse":{"type":"color","category":"color","name":"color-primary-inverse","value":"rgb(240, 250, 255)","originalValue":"hsla({!blue}, 97%, 1)"},"color-success":{"type":"color","category":"color","name":"color-success","value":"rgb(79, 172, 32)","originalValue":"hsla({!green}, 40%, 1)"},"color-success-active":{"type":"color","category":"color","name":"color-success-active","value":"rgb(88, 194, 36)","originalValue":"hsla({!green}, 45%, 1)"},"color-success-inverse":{"type":"color","category":"color","name":"color-success-inverse","value":"rgb(246, 253, 242)","originalValue":"hsla({!green}, 97%, 1)"},"color-danger":{"type":"color","category":"color","name":"color-danger","value":"rgb(210, 53, 45)","originalValue":"hsla({!red}, 50%, 1)"},"color-danger-active":{"type":"color","category":"color","name":"color-danger-active","value":"rgb(216, 77, 70)","originalValue":"hsla({!red}, 56%, 1)"},"color-danger-inverse":{"type":"color","category":"color","name":"color-danger-inverse","value":"rgb(252, 243, 242)","originalValue":"hsla({!red}, 97%, 1)"},"color-warning":{"type":"color","category":"color","name":"color-warning","value":"rgb(230, 121, 25)","originalValue":"hsla({!orange}, 50%, 1)"},"color-warning-active":{"type":"color","category":"color","name":"color-warning-active","value":"rgb(233, 137, 53)","originalValue":"hsla({!orange}, 56%, 1)"},"color-warning-inverse":{"type":"color","category":"color","name":"color-warning-inverse","value":"rgb(253, 247, 241)","originalValue":"hsla({!orange}, 97%, 1)"},"color-yellow":{"type":"color","category":"color","name":"color-yellow","value":"rgb(245, 196, 0)","originalValue":"hsla({!yellow}, 48%, 1)"},"color-yellow-active":{"type":"color","category":"color","name":"color-yellow-active","value":"rgb(255, 206, 10)","originalValue":"hsla({!yellow}, 52%, 1)"},"color-yellow-inverse":{"type":"color","category":"color","name":"color-yellow-inverse","value":"rgb(255, 252, 240)","originalValue":"hsla({!yellow}, 97%, 1)"},"text-color-base":{"type":"color","category":"text-color","name":"text-color-base","value":"rgb(78, 75, 75)","originalValue":"hsla({!neutral}, 30%, 1)"},"text-color-soft":{"type":"color","category":"text-color","name":"text-color-soft","value":"rgb(117, 113, 112)","originalValue":"hsla({!neutral}, 45%, 1)"},"text-color-softer":{"type":"color","category":"text-color","name":"text-color-softer","value":"rgb(180, 177, 177)","originalValue":"hsla({!neutral}, 70%, 1)"},"text-color-disabled":{"type":"color","category":"text-color","name":"text-color-disabled","value":"rgb(180, 177, 177)","originalValue":"hsla({!neutral}, 70%, 1)"},"text-color-inverse":{"type":"color","category":"text-color","name":"text-color-inverse","value":"rgb(250, 250, 250)","originalValue":"hsla({!neutral}, 98%, 1)"},"text-color-link":{"type":"color","category":"text-color","name":"text-color-link","value":"rgb(0, 153, 230)","originalValue":"hsla({!blue}, 45%, 1)"},"text-color-link-active":{"type":"color","category":"text-color","name":"text-color-link-active","value":"rgb(0, 163, 245)","originalValue":"hsla({!blue}, 48%, 1)"},"text-color-primary":{"type":"color","category":"text-color","name":"text-color-primary","value":"rgb(0, 153, 230)","originalValue":"hsla({!blue}, 45%, 1)"},"text-color-primary-inverse":{"type":"color","category":"text-color","name":"text-color-primary-inverse","value":"rgb(240, 250, 255)","originalValue":"hsla({!blue}, 97%, 1)"},"text-color-success":{"type":"color","category":"text-color","name":"text-color-success","value":"rgb(79, 172, 32)","originalValue":"hsla({!green}, 40%, 1)"},"text-color-success-inverse":{"type":"color","category":"text-color","name":"text-color-success-inverse","value":"rgb(246, 253, 242)","originalValue":"hsla({!green}, 97%, 1)"},"text-color-warning":{"type":"color","category":"text-color","name":"text-color-warning","value":"rgb(230, 121, 25)","originalValue":"hsla({!orange}, 50%, 1)"},"text-color-warning-inverse":{"type":"color","category":"text-color","name":"text-color-warning-inverse","value":"rgb(253, 247, 241)","originalValue":"hsla({!orange}, 97%, 1)"},"text-color-danger":{"type":"color","category":"text-color","name":"text-color-danger","value":"rgb(210, 53, 45)","originalValue":"hsla({!red}, 50%, 1)"},"text-color-danger-inverse":{"type":"color","category":"text-color","name":"text-color-danger-inverse","value":"rgb(252, 243, 242)","originalValue":"hsla({!red}, 97%, 1)"},"background-color-base":{"type":"color","category":"background-color","name":"background-color-base","value":"rgb(255, 255, 255)","originalValue":"hsla({!neutral}, 100%, 1)"},"background-color-soft":{"type":"color","category":"background-color","name":"background-color-soft","value":"rgb(250, 250, 250)","originalValue":"hsla({!neutral}, 98%, 1)"},"background-color-softer":{"type":"color","category":"background-color","name":"background-color-softer","value":"rgb(245, 245, 245)","originalValue":"hsla({!neutral}, 96%, 1)"},"background-color-softest":{"type":"color","category":"background-color","name":"background-color-softest","value":"rgb(240, 239, 239)","originalValue":"hsla({!neutral}, 94%, 1)"},"background-color-softest-active":{"type":"color","category":"background-color","name":"background-color-softest-active","value":"rgb(245, 245, 245)","originalValue":"hsla({!neutral}, 96%, 1)"},"background-color-inverse":{"type":"color","category":"background-color","name":"background-color-inverse","value":"rgb(26, 25, 25)","originalValue":"hsla({!neutral}, 10%, 1)"},"background-color-inverse-soft":{"type":"color","category":"background-color","name":"background-color-inverse-soft","value":"rgb(42, 40, 40)","originalValue":"hsla({!neutral}, 16%, 1)"},"background-color-inverse-softer":{"type":"color","category":"background-color","name":"background-color-inverse-softer","value":"rgb(78, 75, 75)","originalValue":"hsla({!neutral}, 30%, 1)"},"background-color-inverse-softer-active":{"type":"color","category":"background-color","name":"background-color-inverse-softer-active","value":"rgb(104, 100, 100)","originalValue":"hsla({!neutral}, 40%, 1)"},"background-color-primary":{"type":"color","category":"background-color","name":"background-color-primary","value":"rgb(0, 153, 230)","originalValue":"hsla({!blue}, 45%, 1)"},"background-color-primary-active":{"type":"color","category":"background-color","name":"background-color-primary-active","value":"rgb(0, 163, 245)","originalValue":"hsla({!blue}, 48%, 1)"},"background-color-primary-inverse":{"type":"color","category":"background-color","name":"background-color-primary-inverse","value":"rgb(240, 250, 255)","originalValue":"hsla({!blue}, 97%, 1)"},"background-color-success":{"type":"color","category":"background-color","name":"background-color-success","value":"rgb(79, 172, 32)","originalValue":"hsla({!green}, 40%, 1)"},"background-color-success-active":{"type":"color","category":"background-color","name":"background-color-success-active","value":"rgb(88, 194, 36)","originalValue":"hsla({!green}, 45%, 1)"},"background-color-success-inverse":{"type":"color","category":"background-color","name":"background-color-success-inverse","value":"rgb(246, 253, 242)","originalValue":"hsla({!green}, 97%, 1)"},"background-color-warning":{"type":"color","category":"background-color","name":"background-color-warning","value":"rgb(230, 121, 25)","originalValue":"hsla({!orange}, 50%, 1)"},"background-color-warning-active":{"type":"color","category":"background-color","name":"background-color-warning-active","value":"rgb(233, 137, 53)","originalValue":"hsla({!orange}, 56%, 1)"},"background-color-warning-inverse":{"type":"color","category":"background-color","name":"background-color-warning-inverse","value":"rgb(253, 247, 241)","originalValue":"hsla({!orange}, 97%, 1)"},"background-color-danger":{"type":"color","category":"background-color","name":"background-color-danger","value":"rgb(210, 53, 45)","originalValue":"hsla({!red}, 50%, 1)"},"background-color-danger-active":{"type":"color","category":"background-color","name":"background-color-danger-active","value":"rgb(216, 77, 70)","originalValue":"hsla({!red}, 56%, 1)"},"background-color-danger-inverse":{"type":"color","category":"background-color","name":"background-color-danger-inverse","value":"rgb(252, 243, 242)","originalValue":"hsla({!red}, 97%, 1)"},"border-color-base":{"type":"color","category":"border-color","name":"border-color-base","value":"rgb(180, 177, 177)","originalValue":"hsla({!neutral}, 70%, 1)"},"border-color-soft":{"type":"color","category":"border-color","name":"border-color-soft","value":"rgb(205, 203, 203)","originalValue":"hsla({!neutral}, 80%, 1)"},"border-color-softer":{"type":"color","category":"border-color","name":"border-color-softer","value":"rgb(230, 229, 229)","originalValue":"hsla({!neutral}, 90%, 1)"},"border-color-active":{"type":"color","category":"border-color","name":"border-color-active","value":"rgb(0, 153, 230)","originalValue":"hsla({!blue}, 45%, 1)"},"border-color-primary":{"type":"color","category":"border-color","name":"border-color-primary","value":"rgb(0, 153, 230)","originalValue":"hsla({!blue}, 45%, 1)"},"border-color-success":{"type":"color","category":"border-color","name":"border-color-success","value":"rgb(79, 172, 32)","originalValue":"hsla({!green}, 40%, 1)"},"border-color-warning":{"type":"color","category":"border-color","name":"border-color-warning","value":"rgb(230, 121, 25)","originalValue":"hsla({!orange}, 50%, 1)"},"border-color-danger":{"type":"color","category":"border-color","name":"border-color-danger","value":"rgb(210, 53, 45)","originalValue":"hsla({!red}, 50%, 1)"},"border-size-base":{"type":"number","category":"border-size","name":"border-size-base","value":"1px","originalValue":"1px"},"border-size-large":{"type":"number","category":"border-size","name":"border-size-large","value":"3px","originalValue":"3px"},"border-size-x-large":{"type":"number","category":"border-size","name":"border-size-x-large","value":"6px","originalValue":"6px"},"border-radius-base":{"type":"number","category":"border-radius","name":"border-radius-base","value":"3px","originalValue":"3px"},"border-radius-rounded":{"type":"number","category":"border-radius","name":"border-radius-rounded","value":"2em","originalValue":"2em"},"border-radius-circle":{"type":"number","category":"border-radius","name":"border-radius-circle","value":"50%","originalValue":"50%"},"font-size-xxxx-large":{"type":"number","category":"font-size","name":"font-size-xxxx-large","value":"3rem","originalValue":"3rem"},"font-size-xxx-large":{"type":"number","category":"font-size","name":"font-size-xxx-large","value":"2.5rem","originalValue":"2.5rem"},"font-size-xx-large":{"type":"number","category":"font-size","name":"font-size-xx-large","value":"2rem","originalValue":"2rem"},"font-size-x-large":{"type":"number","category":"font-size","name":"font-size-x-large","value":"1.5rem","originalValue":"1.5rem"},"font-size-large":{"type":"number","category":"font-size","name":"font-size-large","value":"1.25rem","originalValue":"1.25rem"},"font-size-base":{"type":"number","category":"font-size","name":"font-size-base","value":"1rem","originalValue":"1rem"},"font-size-body":{"type":"number","category":"font-size","name":"font-size-body","value":"16px","originalValue":"16px"},"font-size-small":{"type":"number","category":"font-size","name":"font-size-small","value":"0.8rem","originalValue":"0.8rem"},"font-size-x-small":{"type":"number","category":"font-size","name":"font-size-x-small","value":"0.7rem","originalValue":"0.7rem"},"font-size-xx-small":{"type":"number","category":"font-size","name":"font-size-xx-small","value":"0.6rem","originalValue":"0.6rem"},"font-space-xxxx-large":{"type":"number","category":"font-spacing","name":"font-space-xxxx-large","value":"2em","originalValue":"2em"},"font-space-xxx-large":{"type":"number","category":"font-spacing","name":"font-space-xxx-large","value":"1.5em","originalValue":"1.5em"},"font-space-xx-large":{"type":"number","category":"font-spacing","name":"font-space-xx-large","value":"1.2em","originalValue":"1.2em"},"font-space-x-large":{"type":"number","category":"font-spacing","name":"font-space-x-large","value":"1em","originalValue":"1em"},"font-space-large":{"type":"number","category":"font-spacing","name":"font-space-large","value":"0.6em","originalValue":"0.6em"},"font-space-base":{"type":"number","category":"font-spacing","name":"font-space-base","value":"0.5em","originalValue":"0.5em"},"font-space-small":{"type":"number","category":"font-spacing","name":"font-space-small","value":"0.4em","originalValue":"0.4em"},"font-space-x-small":{"type":"number","category":"font-spacing","name":"font-space-x-small","value":"0.3em","originalValue":"0.3em"},"font-space-xx-small":{"type":"number","category":"font-spacing","name":"font-space-xx-small","value":"0.2em","originalValue":"0.2em"},"font-family-heading":{"type":"...","category":"font-family","name":"font-family-heading","value":"'LatoWeb', sans-serif","originalValue":"'LatoWeb', sans-serif"},"font-family-text":{"type":"...","category":"font-family","name":"font-family-text","value":"'LatoWeb', sans-serif","originalValue":"'LatoWeb', sans-serif"},"font-family-code":{"type":"...","category":"font-family","name":"font-family-code","value":"inconsolata, monospace","originalValue":"inconsolata, monospace"},"font-weight-regular":{"type":"...","category":"font-weight","name":"font-weight-regular","value":"normal","originalValue":"normal"},"font-weight-bold":{"type":"...","category":"font-weight","name":"font-weight-bold","value":"600","originalValue":"600"},"line-height-base":{"type":"number","category":"line-height","name":"line-height-base","value":"1.5","originalValue":"1.5"},"line-height-small":{"type":"number","category":"line-height","name":"line-height-small","value":"1.3","originalValue":"1.3"},"line-height-smaller":{"type":"number","category":"line-height","name":"line-height-smaller","value":"1.1","originalValue":"1.1"},"letter-spacing-x-large":{"type":"number","category":"letter-spacing","name":"letter-spacing-x-large","value":"0.1em","originalValue":"0.1em"},"letter-spacing-large":{"type":"number","category":"letter-spacing","name":"letter-spacing-large","value":"0.05em","originalValue":"0.05em"},"letter-spacing-base":{"type":"number","category":"letter-spacing","name":"letter-spacing-base","value":"0","originalValue":"0"},"letter-spacing-small":{"type":"number","category":"letter-spacing","name":"letter-spacing-small","value":"-0.01em","originalValue":"-0.01em"},"letter-spacing-x-small":{"type":"number","category":"letter-spacing","name":"letter-spacing-x-small","value":"-0.015em","originalValue":"-0.015em"},"opacity-disabled":{"type":"number","category":"opacity","name":"opacity-disabled","value":"0.5","originalValue":"0.5"},"xxx-large":{"type":"number","category":"space-size","name":"xxx-large","value":128,"originalValue":128},"xx-large":{"type":"number","category":"space-size","name":"xx-large","value":64,"originalValue":64},"x-large":{"type":"number","category":"space-size","name":"x-large","value":48,"originalValue":48},"large":{"type":"number","category":"space-size","name":"large","value":32,"originalValue":32},"base":{"type":"number","category":"space-size","name":"base","value":24,"originalValue":24},"small":{"type":"number","category":"space-size","name":"small","value":16,"originalValue":16},"x-small":{"type":"number","category":"space-size","name":"x-small","value":8,"originalValue":8},"xx-small":{"type":"number","category":"space-size","name":"xx-small","value":4,"originalValue":4},"xxx-small":{"type":"number","category":"space-size","name":"xxx-small","value":2,"originalValue":2},"space-xxx-large":{"type":"number","category":"space","name":"space-xxx-large","value":"128px","originalValue":"{!xxx-large}px"},"space-xx-large":{"type":"number","category":"space","name":"space-xx-large","value":"64px","originalValue":"{!xx-large}px"},"space-x-large":{"type":"number","category":"space","name":"space-x-large","value":"48px","originalValue":"{!x-large}px"},"space-large":{"type":"number","category":"space","name":"space-large","value":"32px","originalValue":"{!large}px"},"space-base":{"type":"number","category":"space","name":"space-base","value":"24px","originalValue":"{!base}px"},"space-small":{"type":"number","category":"space","name":"space-small","value":"16px","originalValue":"{!small}px"},"space-x-small":{"type":"number","category":"space","name":"space-x-small","value":"8px","originalValue":"{!x-small}px"},"space-xx-small":{"type":"number","category":"space","name":"space-xx-small","value":"4px","originalValue":"{!xx-small}px"},"space-xxx-small":{"type":"number","category":"space","name":"space-xxx-small","value":"2px","originalValue":"{!xxx-small}px"},"size-height-base":{"type":"number","category":"size","name":"size-height-base","value":"42px","originalValue":"42px"},"size-height-large":{"type":"number","category":"size","name":"size-height-large","value":"50px","originalValue":"50px"},"size-height-xlarge":{"type":"number","category":"size","name":"size-height-xlarge","value":"60px","originalValue":"60px"},"size-tappable-square":{"type":"number","category":"size","name":"size-tappable-square","value":"44px","originalValue":"44px"},"size-height-footer":{"type":"number","category":"size","name":"size-height-footer","value":"64px","originalValue":"64px"},"box-shadow-large":{"type":"...","category":"box-shadow","name":"box-shadow-large","value":"0 20px 60px 0 rgba(0, 0, 0, .15)","originalValue":"0 20px 60px 0 rgba(0, 0, 0, .15)"},"box-shadow-base":{"type":"...","category":"box-shadow","name":"box-shadow-base","value":"0px 12px 26px -4px rgba(0, 0, 0, .1)","originalValue":"0px 12px 26px -4px rgba(0, 0, 0, .1)"},"box-shadow-small":{"type":"...","category":"box-shadow","name":"box-shadow-small","value":"0px 8px 18px -2px rgba(0, 0, 0, .1)","originalValue":"0px 8px 18px -2px rgba(0, 0, 0, .1)"},"box-shadow-x-small":{"type":"...","category":"box-shadow","name":"box-shadow-x-small","value":"0px 0px 3px 0px rgba(0, 0, 0, .1)","originalValue":"0px 0px 3px 0px rgba(0, 0, 0, .1)"},"box-shadow-active":{"type":"...","category":"box-shadow","name":"box-shadow-active","value":"0 0 6px 1px rgba(20, 100, 160, 0.5)","originalValue":"0 0 6px 1px rgba(20, 100, 160, 0.5)"},"box-shadow-inset":{"type":"...","category":"box-shadow","name":"box-shadow-inset","value":"inset 0 0 20px 1px rgba(0,0,0,.15)","originalValue":"inset 0 0 20px 1px rgba(0,0,0,.15)"},"box-shadow-small-inset":{"type":"...","category":"box-shadow","name":"box-shadow-small-inset","value":"inset 0 0 0 1px rgba(0,0,0,.05)","originalValue":"inset 0 0 0 1px rgba(0,0,0,.05)"},"duration-short":{"type":"number","category":"time","name":"duration-short","value":"0.08s","originalValue":"0.08s"},"duration-base":{"type":"number","category":"time","name":"duration-base","value":"0.5s","originalValue":"0.5s"},"duration-long":{"type":"number","category":"time","name":"duration-long","value":"0.75s","originalValue":"0.75s"},"duration-x-long":{"type":"number","category":"time","name":"duration-x-long","value":"1s","originalValue":"1s"},"duration-xx-long":{"type":"number","category":"time","name":"duration-xx-long","value":"2s","originalValue":"2s"},"ease-out":{"type":"number","category":"ease","name":"ease-out","value":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","originalValue":"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},"ease-out-sharp":{"type":"number","category":"ease","name":"ease-out-sharp","value":"cubic-bezier(0.165, 0.84, 0.44, 1)","originalValue":"cubic-bezier(0.165, 0.84, 0.44, 1)"},"ease-out-bounce":{"type":"number","category":"ease","name":"ease-out-bounce","value":"cubic-bezier(.87,-.41,.19,1.44)","originalValue":"cubic-bezier(.87,-.41,.19,1.44)"},"ease-in":{"type":"number","category":"ease","name":"ease-in","value":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","originalValue":"cubic-bezier(0.55, 0.085, 0.68, 0.53)"},"ease-in-sharp":{"type":"number","category":"ease","name":"ease-in-sharp","value":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","originalValue":"cubic-bezier(0.895, 0.03, 0.685, 0.22)"},"z-index-modal":{"type":"number","category":"z-index","name":"z-index-modal","value":"9999","originalValue":"9999"},"z-index-page-submenu":{"type":"number","category":"z-index","name":"z-index-page-submenu","value":"2500","originalValue":"2500"},"z-index-page-header":{"type":"number","category":"z-index","name":"z-index-page-header","value":"2000","originalValue":"2000"},"z-index-page-sidebar":{"type":"number","category":"z-index","name":"z-index-page-sidebar","value":"1500","originalValue":"1500"},"z-index-sticky":{"type":"number","category":"z-index","name":"z-index-sticky","value":"100","originalValue":"100"},"xs":{"type":"...","category":"media-size","name":"xs","value":480,"originalValue":480},"sm":{"type":"...","category":"media-size","name":"sm","value":600,"originalValue":600},"md":{"type":"...","category":"media-size","name":"md","value":768,"originalValue":768},"lg":{"type":"...","category":"media-size","name":"lg","value":1024,"originalValue":1024},"xl":{"type":"...","category":"media-size","name":"xl","value":1024,"originalValue":1024},"media-query-x-small":{"type":"...","category":"media-query","name":"media-query-x-small","value":"(min-width: 480px)","originalValue":"(min-width: {!xs}px)"},"media-query-small":{"type":"...","category":"media-query","name":"media-query-small","value":"(min-width: 600px)","originalValue":"(min-width: {!sm}px)"},"media-query-medium":{"type":"...","category":"media-query","name":"media-query-medium","value":"(min-width: 768px)","originalValue":"(min-width: {!md}px)"},"media-query-large":{"type":"...","category":"media-query","name":"media-query-large","value":"(min-width: 1024px)","originalValue":"(min-width: {!lg}px)"},"media-query-x-large":{"type":"...","category":"media-query","name":"media-query-x-large","value":"(min-width: 1200px)","originalValue":"(min-width: {!xl}px)"}}};

/***/ }),

/***/ "809c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M7 25H2V9h28v16h-5M7 19v11h18V19zM25 9V2H7v7m15 5h3"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "80f6":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M3 12c0-7 7-7 13-7s13 0 13 7c0 8-7-1-7-1H10s-7 9-7 1zm8 2s-5 5-5 14h20c0-9-5-14-5-14H11z"}}),_c('circle',{attrs:{"cx":"16","cy":"21","r":"4"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "8103":
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__("d194");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ "81fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("625e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8788":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M30 7l-5-5L5 22l-2 7 7-2zm-9-1l5 5zM5 22l5 5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "8983":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Space/Space.vue?vue&type=template&id=038731d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-space",style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Space/Space.vue?vue&type=template&id=038731d2&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("c93e");

// EXTERNAL MODULE: ./src/system/utils/index.js
var utils = __webpack_require__("2b4b");

// EXTERNAL MODULE: ./src/system/mixins/index.js + 1 modules
var mixins = __webpack_require__("cabe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Space/Space.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//


/**
 * Use this component for grouping and separation.
 * @version 1.0.0
 */

/* harmony default export */ var Spacevue_type_script_lang_js_ = ({
  name: 'DsSpace',
  mixins: [mixins["mediaQuery"]],
  inject: {
    $parentRow: {
      default: null
    }
  },
  props: {
    /**
     * The top margin of this space.
     */
    marginTop: {
      type: [String, Object],
      default: null
    },

    /**
     * The bottom margin of this space.
     */
    marginBottom: {
      type: [String, Object],
      default: 'large'
    },

    /**
     * The html element name used for this space.
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    styles: function styles() {
      var marginTop = this.mediaQuery(this.marginTop);
      var marginBottom = this.mediaQuery(this.marginBottom);
      var marginTopStyle = this.parseMargin('Top')(marginTop);
      var marginBottomStyle = this.parseMargin('Bottom')(marginBottom);
      return Object(objectSpread["a" /* default */])({}, marginTopStyle, marginBottomStyle);
    }
  },
  methods: {
    parseMargin: function parseMargin(direction) {
      return function (margin) {
        var styles = {};

        if (!margin) {
          return styles;
        }

        var realMargin = Object(utils["getSpace"])(margin);

        if (realMargin !== 0) {
          styles["margin".concat(direction)] = "".concat(realMargin, "px");
        }

        return styles;
      };
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Space/Space.vue?vue&type=script&lang=js&
 /* harmony default export */ var Space_Spacevue_type_script_lang_js_ = (Spacevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/Space/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("d2b3");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Space/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSpace%2FSpace.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Space/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSpace%2FSpace.vue
 /* harmony default export */ var Space_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace); 
// CONCATENATED MODULE: ./src/system/components/layout/Space/Space.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Space_Spacevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Space_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace === 'function') Space_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace(component)

component.options.__file = "Space.vue"
/* harmony default export */ var Space = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "89d6":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"24","cy":"8","r":"2"}}),_c('path',{attrs:{"d":"M2 18L18 2h12v12L14 30z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bc3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8be7":
/***/ (function(module, exports) {

module.exports = {"description":"This component is used as a placeholder for other content.","methods":[],"displayName":"DsPlaceholder","props":{"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the placeholder.\n     */","description":"The html element name used for the placeholder."}},"comment":"/**\n * This component is used as a placeholder for other content.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "8cb4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M28 22v8H4v-8M16 4v20M8 12l8-8 8 8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "92a3":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M16 14v9m0-15v2"}}),_c('circle',{attrs:{"cx":"16","cy":"16","r":"14"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "9306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
var toObject = __webpack_require__("241e");
var IObject = __webpack_require__("335c");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("294c")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "9717":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 30L30 2m0 28L2 2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "979d":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M27 15v15H2V5h15m13 1l-4-4L9 19l-2 6 6-2zm-8 0l4 4zM9 19l4 4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "984f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5079");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "98fe":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M12 30l12-14L12 2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "9930":
/***/ (function(module, exports) {

module.exports = {"description":"Use this component for grouping and separation.","methods":[],"displayName":"DsSpace","props":{"marginTop":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The top margin of this space.\n     */","description":"The top margin of this space."},"marginBottom":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"\"large\"","func":false},"tags":{},"comment":"/**\n     * The bottom margin of this space.\n     */","description":"The bottom margin of this space."},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for this space.\n     */","description":"The html element name used for this space."}},"comment":"/**\n * Use this component for grouping and separation.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9baa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e05":
/***/ (function(module, exports) {

module.exports = {"description":"Used in combination with the table row to create data tables.","methods":[],"displayName":"DsTable","props":{"data":{"type":{"name":"array|object"},"required":"","defaultValue":{"value":"default() { return []; }","func":true},"tags":{},"comment":"/**\n     * The table's data\n     */","description":"The table's data"},"fields":{"type":{"name":"array|object"},"required":"","defaultValue":{"value":"default() { return null; }","func":true},"tags":{},"comment":"/**\n     * The table's header config\n     */","description":"The table's header config"}},"comment":"/**\n * Used in combination with the table row to create data tables.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":"Slots are named by fields"}}}

/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "9fee":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M22 13l8-5v16l-8-5zM2 8v16h20V8z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "a01a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a171":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M16 3l14 26H2zm0 8v8m0 4v2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "a388":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Select/Select.vue?vue&type=template&id=254690bf&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ds-form-item',[_c('div',{staticClass:"ds-select-wrap"},[(_vm.icon)?_c('div',{staticClass:"ds-select-icon"},[_c('ds-icon',{attrs:{"name":_vm.icon}})],1):_vm._e(),_c('select',{staticClass:"ds-select",class:[
        _vm.icon && "ds-select-has-icon",
        _vm.iconRight && "ds-select-has-icon-right"
      ],attrs:{"id":_vm.id,"name":_vm.model,"autofocus":_vm.autofocus,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"readonly":_vm.readonly},domProps:{"value":_vm.innerValue},on:{"input":_vm.input,"focus":_vm.handleFocus,"blur":_vm.handleBlur}},_vm._l((_vm.options),function(option){return _c('option',{key:option.label || option},[_vm._v("\n        "+_vm._s(option.label || option)+"\n      ")])})),(_vm.iconRight)?_c('div',{staticClass:"ds-select-icon-right"},[_c('ds-icon',{attrs:{"name":_vm.iconRight}})],1):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/Select/Select.vue?vue&type=template&id=254690bf&

// EXTERNAL MODULE: ./src/system/components/data-input/shared/input.js + 25 modules
var input = __webpack_require__("33ba");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Select/Select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Used for handling basic user input.
 * @version 1.0.0
 */

/* harmony default export */ var Selectvue_type_script_lang_js_ = ({
  name: 'DsSelect',
  mixins: [input["a" /* default */]],
  props: {
    /**
     * The placeholder shown when value is empty.
     */
    placeholder: {
      type: String,
      default: null
    },

    /**
     * Whether the input should be automatically focused
     */
    autofocus: {
      type: Boolean,
      default: false
    },

    /**
     * Whether the input should be read-only
     */
    readonly: {
      type: Boolean,
      default: false
    },

    /**
     * Whether the user can select multiple items
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * The name of the input's icon.
     */
    icon: {
      type: String,
      default: null
    },

    /**
     * The name of the input's right icon.
     */
    iconRight: {
      type: String,
      default: null
    },

    /**
     * The select options.
     */
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-input/Select/Select.vue?vue&type=script&lang=js&
 /* harmony default export */ var Select_Selectvue_type_script_lang_js_ = (Selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/data-input/Select/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("65d0");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-input/Select/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FSelect%2FSelect.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-input/Select/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FSelect%2FSelect.vue
 /* harmony default export */ var Select_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect); 
// CONCATENATED MODULE: ./src/system/components/data-input/Select/Select.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Select_Selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Select_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect === 'function') Select_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect(component)

component.options.__file = "Select.vue"
/* harmony default export */ var Select = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a39b":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"17","cy":"15","r":"1"}}),_c('circle',{attrs:{"cx":"16","cy":"16","r":"6"}}),_c('path',{attrs:{"d":"M2 16S7 6 16 6s14 10 14 10-5 10-14 10S2 16 2 16z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "a3c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("63b6");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9306") });


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "a6dc":
/***/ (function(module, exports) {

module.exports = {"description":"Headings are used as the titles of each major\nsection of a page in the interface.","methods":[],"displayName":"DsHeading","props":{"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"h1\"","func":false},"tags":{},"comment":"/**\n     * The heading type used for the heading.\n     * `h1, h2, h3, h4, h5, h6`\n     */","description":"The heading type used for the heading.\n`h1, h2, h3, h4, h5, h6`"},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The size used for the heading.\n     * `h1, h2, h3, h4, h5, h6`\n     */","description":"The size used for the heading.\n`h1, h2, h3, h4, h5, h6`"},"primary":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Primary style\n     * `true, false`\n     */","description":"Primary style\n`true, false`"},"soft":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Muted style\n     * `true, false`\n     */","description":"Muted style\n`true, false`"}},"comment":"/**\n * Headings are used as the titles of each major\n * section of a page in the interface.\n *\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "a6f4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("236f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a7e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ }),

/***/ "a898":
/***/ (function(module, exports) {

module.exports = {"description":"","methods":[],"displayName":"DsInputError","props":{"error":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"","description":""}},"comment":"/**\n * @version 1.0.0\n * @private\n */","tags":{"access":[{"title":"access","description":"private"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{}}

/***/ }),

/***/ "a919":
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__("ddc6");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "aa19":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M8 17c0-5 1-11 8-11s8 6 8 11 3 8 3 8H5s3-3 3-8zm12 8s0 4-4 4-4-4-4-4m4-22v3"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "aa20":
/***/ (function(module, exports) {

module.exports = {"description":"Used in combination with the table component to create data tables.","methods":[],"displayName":"DsTableCol","props":{"width":{"type":{"name":"string|number|object"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The column width\n     */","description":"The column width"}},"comment":"/**\n * Used in combination with the table component to create data tables.\n * @version 1.0.0\n * @see DsTable\n * @private\n */","tags":{"access":[{"title":"access","description":"private"}],"see":[{"title":"see","description":"DsTable"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aac1":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M18 8s6-6 9-3 2 7-3 11-8 5-10 1m0 7s-6 6-9 3-2-7 3-11 8-5 10-1"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "aaec":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "abc6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const isObj = __webpack_require__("a7e2");

function getPathSegments(path) {
	const pathArr = path.split('.');
	const parts = [];

	for (let i = 0; i < pathArr.length; i++) {
		let p = pathArr[i];

		while (p[p.length - 1] === '\\' && pathArr[i + 1] !== undefined) {
			p = p.slice(0, -1) + '.';
			p += pathArr[++i];
		}

		parts.push(p);
	}

	return parts;
}

module.exports = {
	get(obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return value === undefined ? obj : value;
		}

		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			if (!Object.prototype.propertyIsEnumerable.call(obj, pathArr[i])) {
				return value;
			}

			obj = obj[pathArr[i]];

			if (obj === undefined || obj === null) {
				// `obj` is either `undefined` or `null` so we want to stop the loop, and
				// if this is not the last bit of the path, and
				// if it did't return `undefined`
				// it would return `null` if `obj` is `null`
				// but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
				if (i !== pathArr.length - 1) {
					return value;
				}

				break;
			}
		}

		return obj;
	},

	set(obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return obj;
		}

		const root = obj;
		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			const p = pathArr[i];

			if (!isObj(obj[p])) {
				obj[p] = {};
			}

			if (i === pathArr.length - 1) {
				obj[p] = value;
			}

			obj = obj[p];
		}

		return root;
	},

	delete(obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return;
		}

		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			const p = pathArr[i];

			if (i === pathArr.length - 1) {
				delete obj[p];
				return;
			}

			obj = obj[p];

			if (!isObj(obj)) {
				return;
			}
		}
	},

	has(obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return false;
		}

		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			if (isObj(obj)) {
				if (!(pathArr[i] in obj)) {
					return false;
				}

				obj = obj[pathArr[i]];
			} else {
				return false;
			}
		}

		return true;
	}
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "ad3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("40bb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "aebf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/InputLabel.vue?vue&type=template&id=6ca2e432&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{directives:[{name:"show",rawName:"v-show",value:(!!_vm.label),expression:"!!label"}],staticClass:"ds-input-label"},[_vm._v("\n  "+_vm._s(_vm.label)+"\n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/InputLabel.vue?vue&type=template&id=6ca2e432&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/InputLabel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/**
 * @version 1.0.0
 * @private
 */
/* harmony default export */ var InputLabelvue_type_script_lang_js_ = ({
  name: 'DsInputLabel',
  props: {
    label: {
      type: String,
      required: false,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/InputLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormItem_InputLabelvue_type_script_lang_js_ = (InputLabelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/InputLabel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  FormItem_InputLabelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "InputLabel.vue"
/* harmony default export */ var InputLabel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "af30":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M4 16h7l3 13 4-26 3 13h7"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "afd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c8e2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b10d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Menu/MenuItem.vue?vue&type=template&id=1ea293e2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.handleClickOutside),expression:"handleClickOutside"}],staticClass:"ds-menu-item",class:[
    ("ds-menu-item-level-" + _vm.level),
    _vm.$parentMenu.inverse && 'ds-menu-item-inverse',
    _vm.$parentMenu.navbar && 'ds-menu-item-navbar',
    _vm.showSubmenu && 'ds-menu-item-show-submenu'
  ],on:{"mouseover":_vm.handleMouseOver,"mouseout":_vm.handleMouseOut,"!click":function($event){return _vm.handleClick($event)}}},[(_vm.route)?_c(_vm.linkTag,_vm._b({ref:"link",tag:"component",staticClass:"ds-menu-item-link",attrs:{"exact":_vm.isExact}},'component',_vm.bindings,false),[_vm._t("default",[_vm._v("\n      "+_vm._s(_vm.name)+"\n    ")])],2):_vm._e(),(_vm.hasSubmenu)?_c('ul',{staticClass:"ds-menu-item-submenu"},_vm._l((_vm.route.children),function(child){return _c('ds-menu-item',{key:child.name,attrs:{"route":child,"parents":_vm.parents.concat( [_vm.route])}})})):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/navigation/Menu/MenuItem.vue?vue&type=template&id=1ea293e2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__("b54a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/vue-click-outside/index.js
var vue_click_outside = __webpack_require__("e67d");
var vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(vue_click_outside);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Menu/MenuItem.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Used in combination with the menu item to help the user navigate.
 * @version 1.0.0
 * @see DsMenu
 */

/* harmony default export */ var MenuItemvue_type_script_lang_js_ = ({
  name: 'DsMenuItem',
  inject: {
    $parentMenu: {
      default: null
    }
  },
  directives: {
    ClickOutside: vue_click_outside_default.a
  },
  props: {
    /**
     * The route to display
     */
    route: {
      type: Object,
      default: function _default() {
        return null;
      }
    },

    /**
     * The parents of this route
     */
    parents: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /**
     * The component / tag used for the link of this route
     * `router-link, a`
     */
    linkTag: {
      type: String,
      default: function _default() {
        return this.$parentMenu.linkTag ? this.$parentMenu.linkTag : 'router-link';
      },
      validator: function validator(value) {
        return value.match(/(router-link|a)/);
      }
    }
  },
  data: function data() {
    return {
      showSubmenu: false,
      openMenuTimeout: null,
      closeMenuTimeout: null
    };
  },
  computed: {
    hasSubmenu: function hasSubmenu() {
      return this.route.children && this.route.children.length;
    },
    url: function url() {
      return this.$parentMenu.urlParser(this.route, this.parents);
    },
    name: function name() {
      return this.$parentMenu.nameParser(this.route, this.parents);
    },
    isExact: function isExact() {
      return this.$parentMenu.isExact(this.url);
    },
    level: function level() {
      return this.parents.length;
    },
    bindings: function bindings() {
      var bindings = {};

      if (this.linkTag === 'router-link') {
        bindings.to = this.url;
      }

      if (this.linkTag === 'a') {
        bindings.href = this.url;
      }

      return bindings;
    }
  },
  methods: {
    handleMouseOver: function handleMouseOver() {
      var _this = this;

      if (this.closeMenuTimeout) {
        clearTimeout(this.closeMenuTimeout);
      }

      this.openMenuTimeout = setTimeout(function () {
        if (_this.$parentMenu.navbar && _this.hasSubmenu && !_this.showSubmenu) {
          _this.showSubmenu = true;
        }
      }, 150);
    },
    handleMouseOut: function handleMouseOut() {
      var _this2 = this;

      if (this.openMenuTimeout) {
        clearTimeout(this.openMenuTimeout);
      }

      this.closeMenuTimeout = setTimeout(function () {
        if (_this2.$parentMenu.navbar && _this2.hasSubmenu && _this2.showSubmenu) {
          _this2.showSubmenu = false;
        }
      }, 150);
    },
    handleClick: function handleClick(event) {
      var clickedLink = event.target === this.$refs.link.$el;

      if (clickedLink && this.$parentMenu.navbar && this.hasSubmenu && !this.showSubmenu) {
        this.showSubmenu = true;
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      /**
       * Handles click on menu item.
       * Receives two arguments:
       * event, route object
       *
       * @event click
       */


      this.$emit('click', event, this.route);
      this.$parentMenu.handleNavigate();
    },
    handleClickOutside: function handleClickOutside() {
      this.showSubmenu = false;
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/navigation/Menu/MenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_MenuItemvue_type_script_lang_js_ = (MenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/system/components/navigation/Menu/MenuItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Menu_MenuItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "MenuItem.vue"
/* harmony default export */ var MenuItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b20a":
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__("6ac0"),
    deburr = __webpack_require__("4caa"),
    words = __webpack_require__("ea72");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "b251":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M30 8H2v18h28zM20 8s0-4-4-4-4 4-4 4M8 26V8m16 18V8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "b282":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M6 6h24l-3 13H9m18 4H10L5 2H2"}}),_c('circle',{attrs:{"cx":"25","cy":"27","r":"2"}}),_c('circle',{attrs:{"cx":"12","cy":"27","r":"2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b468":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 8h7l3-4h8l3 4h7v18H2z"}}),_c('circle',{attrs:{"cx":"16","cy":"16","r":"5"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "b4ed":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 20l10 8L30 4"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "b54a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__("386b")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "b984":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ba44":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M4 10v18h24V10M2 4v6h28V4zm10 11h8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "ba87":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./data-display/CopyField/CopyField.vue": "e5e4",
	"./data-display/Table/Table.vue": "9e05",
	"./data-display/Table/TableCol.vue": "aa20",
	"./data-display/Table/TableHeadCol.vue": "cb29",
	"./data-input/FormItem/FormItem.vue": "ed7d",
	"./data-input/FormItem/InputError.vue": "a898",
	"./data-input/FormItem/InputLabel.vue": "3b19",
	"./data-input/Input/Input.vue": "5a14",
	"./data-input/Select/Select.vue": "1d82",
	"./layout/Card/Card.vue": "3eba",
	"./layout/Container/Container.vue": "dec8",
	"./layout/Flex/Flex.vue": "de06",
	"./layout/Flex/FlexItem.vue": "1c72",
	"./layout/Page/Page.vue": "5073",
	"./layout/PageTitle/PageTitle.vue": "e085",
	"./layout/Placeholder/Placeholder.vue": "8be7",
	"./layout/Space/Space.vue": "9930",
	"./navigation/Button/Button.vue": "3644",
	"./navigation/Menu/Menu.vue": "f978",
	"./navigation/Menu/MenuItem.vue": "5343",
	"./typography/Heading/Heading.vue": "a6dc",
	"./typography/Icon/Icon.vue": "5270",
	"./typography/Logo/Logo.vue": "798c",
	"./typography/Tag/Tag.vue": "c35b",
	"./typography/Text/Text.vue": "6bd3"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "ba87";

/***/ }),

/***/ "bb74":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M30 10L16 26 2 10z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "bba4":
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__("e9a7"),
    createCompounder = __webpack_require__("b20a");

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),

/***/ "bd14":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M16 2L2 16l14 14V16l14 14V2L16 16z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "bde4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M4 28h24l2-16H14l-4-4H2zm24-16V4H4v4"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "bfe5":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 6v24h28V6zm0 9h28M7 3v6m6-6v6m6-6v6m6-6v6"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "c1db":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M29 17v11H3V17M2 8h28v8s-6 4-14 4-14-4-14-4V8zm14 14v-4m4-10s0-4-4-4-4 4-4 4"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "c1fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Tag/Tag.vue?vue&type=template&id=04614f46&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-tag",class:[
    ("ds-tag-size-" + _vm.size),
    ("ds-tag-" + _vm.color),
    _vm.round && 'ds-tag-round'
  ]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Tag/Tag.vue?vue&type=template&id=04614f46&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Tag/Tag.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Tags are used for styling and highlighting small pieces of information.
 * Most of the time they are used for keywords or numbers.
 * @version 1.0.0
 */
/* harmony default export */ var Tagvue_type_script_lang_js_ = ({
  name: 'DsTag',
  props: {
    /**
     * The background color used for the tag.
     * `medium, inverse, primary, success, warning, danger`
     */
    color: {
      type: String,
      default: 'medium',
      validator: function validator(value) {
        return value.match(/(medium|inverse|primary|success|warning|danger)/);
      }
    },

    /**
     * The size used for the text.
     * `base, large, small`
     */
    size: {
      type: String,
      default: 'base',
      validator: function validator(value) {
        return value.match(/(base|large|small)/);
      }
    },

    /**
     * Whether the tag should be round
     * `true, false`
     */
    round: {
      type: Boolean,
      default: false
    },

    /**
     * The html element name used for the text.
     */
    tag: {
      type: String,
      default: 'span'
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/typography/Tag/Tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tag_Tagvue_type_script_lang_js_ = (Tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/typography/Tag/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("7b6f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Tag/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FTag%2FTag.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Tag/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FTag%2FTag.vue
 /* harmony default export */ var Tag_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag); 
// CONCATENATED MODULE: ./src/system/components/typography/Tag/Tag.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Tag_Tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Tag_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag === 'function') Tag_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag(component)

component.options.__file = "Tag.vue"
/* harmony default export */ var Tag = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c32f":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("2b10");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "c35b":
/***/ (function(module, exports) {

module.exports = {"description":"Tags are used for styling and highlighting small pieces of information.\nMost of the time they are used for keywords or numbers.","methods":[],"displayName":"DsTag","props":{"color":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"medium\"","func":false},"tags":{},"comment":"/**\n     * The background color used for the tag.\n     * `medium, inverse, primary, success, warning, danger`\n     */","description":"The background color used for the tag.\n`medium, inverse, primary, success, warning, danger`"},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"base\"","func":false},"tags":{},"comment":"/**\n     * The size used for the text.\n     * `base, large, small`\n     */","description":"The size used for the text.\n`base, large, small`"},"round":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the tag should be round\n     * `true, false`\n     */","description":"Whether the tag should be round\n`true, false`"},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"span\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the text.\n     */","description":"The html element name used for the text."}},"comment":"/**\n * Tags are used for styling and highlighting small pieces of information.\n * Most of the time they are used for keywords or numbers.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c546":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M5 9v20h22V9zm5 0s0-6 6-6 6 6 6 6"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c6e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Icon/Icon.vue?vue&type=template&id=24e788aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-icon",attrs:{"aria-label":_vm.ariaLabel}},[(_vm.componentName)?_c(_vm.componentName,{tag:"component",staticClass:"ds-icon-svg"}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Icon/Icon.vue?vue&type=template&id=24e788aa&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Icon/Icon.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Icons are used to add meaning and improve accessibility.
 * @version 1.0.0
 */
/* harmony default export */ var Iconvue_type_script_lang_js_ = ({
  name: 'DsIcon',
  props: {
    /**
     * The name of the icon.
     */
    name: {
      type: String,
      required: true
    },

    /**
     * Descriptive text to be read to screenreaders.
     */
    ariaLabel: {
      type: String,
      default: 'icon'
    },

    /**
     * The html element name used for the icon.
     */
    tag: {
      type: String,
      default: 'span'
    }
  },
  computed: {
    componentName: function componentName() {
      var name = "svg-icon-".concat(this.name);

      if (this.$root.$options.components[name]) {
        return name;
      }

      return null;
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/typography/Icon/Icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icon_Iconvue_type_script_lang_js_ = (Iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/typography/Icon/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("cb7d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Icon/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FIcon%2FIcon.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Icon/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FIcon%2FIcon.vue
 /* harmony default export */ var Icon_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon); 
// CONCATENATED MODULE: ./src/system/components/typography/Icon/Icon.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icon_Iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Icon_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon === 'function') Icon_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon(component)

component.options.__file = "Icon.vue"
/* harmony default export */ var Icon = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8e2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c93e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "ca53":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12-4l5-4 5 4m-5-4v15"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cabe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js
var es6_typeof = __webpack_require__("6bde");

// EXTERNAL MODULE: ./src/system/tokens/index.js
var tokens = __webpack_require__("6ab6");

// CONCATENATED MODULE: ./src/system/mixins/media-query.js





var windowSize = {
  width: null,
  height: null
};

function updateWindowSize() {
  windowSize.width = window.clientWidth || document.documentElement.clientWidth || document.body.clientWidth;
  windowSize.height = window.clientHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

var init = false;

function initListener() {
  if (init) {
    return;
  }

  if (window && typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    init = true;
  }
}
/**
 * @mixin
 */


/* harmony default export */ var media_query = ({
  data: function data() {
    return {
      mediaQueryWindowSize: windowSize
    };
  },
  methods: {
    mediaQuery: function mediaQuery(arg) {
      var _this = this;

      initListener();

      if (arg === null || Object(es6_typeof["a" /* default */])(arg) !== 'object') {
        return arg;
      }

      var result = arg.base;
      Object.keys(tokens["a" /* tokenMap */].mediaSize).reverse().some(function (key) {
        var width = tokens["a" /* tokenMap */].mediaSize[key].value;

        if (width <= _this.mediaQueryWindowSize.width && arg[key]) {
          result = arg[key];
          return true;
        }
      });
      return result;
    }
  }
});
// CONCATENATED MODULE: ./src/system/mixins/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return media_query; });



/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb29":
/***/ (function(module, exports) {

module.exports = {"description":"Used in combination with the table component to create data tables.","methods":[],"displayName":"DsTableHeadCol","props":{"label":{"type":{"name":"number|string|array|object"},"required":"","defaultValue":{"value":"default() { return null; }","func":true},"tags":{},"comment":"/**\n     * The column value\n     */","description":"The column value"},"width":{"type":{"name":"string|number|object"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The column width\n     */","description":"The column width"}},"comment":"/**\n * Used in combination with the table component to create data tables.\n * @version 1.0.0\n * @see DsTable\n * @private\n */","tags":{"access":[{"title":"access","description":"private"}],"see":[{"title":"see","description":"DsTable"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cb7d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ecd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "cd77":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M28 6H4m24 10H4m24 10H4M24 3v6M8 13v6m12 4v6"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ce86":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    arrayMap = __webpack_require__("7948"),
    isArray = __webpack_require__("6747"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "cec0":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M11 25V6l13-3v20M11 13l13-3"}}),_c('ellipse',{attrs:{"cx":"7","cy":"25","rx":"4","ry":"5"}}),_c('ellipse',{attrs:{"cx":"20","cy":"23","rx":"4","ry":"5"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "cf87":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f636");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d094":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "d194":
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__("c32f"),
    hasUnicode = __webpack_require__("aaec"),
    stringToArray = __webpack_require__("126d"),
    toString = __webpack_require__("76dd");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "d2b3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b984");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d3cc":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M28 22v8H4v-8M16 4v20m-8-8l8 8 8-8"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "d3ce":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M30 22L16 6 2 22z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d6ad":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M30 20L16 8 2 20"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "d79b":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M22 30L6 16 22 2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "d7b2":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./data-display/CopyField/CopyField.vue": "27c7",
	"./data-display/Table/Table.vue": "70e2",
	"./data-display/Table/TableCol.vue": "7401",
	"./data-display/Table/TableHeadCol.vue": "3f30",
	"./data-input/FormItem/FormItem.vue": "5d96",
	"./data-input/FormItem/InputError.vue": "f9ab",
	"./data-input/FormItem/InputLabel.vue": "aebf",
	"./data-input/Input/Input.vue": "6875",
	"./data-input/Select/Select.vue": "a388",
	"./layout/Card/Card.vue": "2576",
	"./layout/Container/Container.vue": "60c8",
	"./layout/Flex/Flex.vue": "6ee3",
	"./layout/Flex/FlexItem.vue": "5d8b",
	"./layout/Page/Page.vue": "776e",
	"./layout/PageTitle/PageTitle.vue": "5d84",
	"./layout/Placeholder/Placeholder.vue": "f82b",
	"./layout/Space/Space.vue": "8983",
	"./navigation/Button/Button.vue": "42cf",
	"./navigation/Menu/Menu.vue": "7bf7",
	"./navigation/Menu/MenuItem.vue": "b10d",
	"./typography/Heading/Heading.vue": "f63e",
	"./typography/Icon/Icon.vue": "c6e1",
	"./typography/Logo/Logo.vue": "164d",
	"./typography/Tag/Tag.vue": "c1fe",
	"./typography/Text/Text.vue": "ddb0"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "d7b2";

/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "da31":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M6 2v28M6 6h20l-6 6 6 6H6"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "daef":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"16","cy":"16","r":"14"}}),_c('path',{attrs:{"d":"M6 6l20 20"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "db82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bc3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dbe9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ddb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Text/Text.vue?vue&type=template&id=a0b1b6a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-text",class:[
    _vm.size && ("ds-text-size-" + _vm.size),
    _vm.color && ("ds-text-" + _vm.color),
    _vm.bold && "ds-text-bold"
  ]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Text/Text.vue?vue&type=template&id=a0b1b6a6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Text/Text.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Text is used for styling and grouping paragraphs or words.
 * Defaults to a `p` tag. If nested inside of another text
 * component it defaults to a `span` tag.
 * @version 1.0.0
 */
/* harmony default export */ var Textvue_type_script_lang_js_ = ({
  name: 'DsText',
  provide: function provide() {
    return {
      $parentText: this
    };
  },
  inject: {
    $parentText: {
      default: null
    }
  },
  props: {
    /**
     * The color used for the text.
     * `default, soft, softer, primary, inverse, success, warning, danger`
     */
    color: {
      type: String,
      default: null,
      validator: function validator(value) {
        return value.match(/(default|soft|softer|primary|inverse|success|warning|danger)/);
      }
    },

    /**
     * Whether the text is bold.
     */
    bold: {
      type: Boolean,
      default: null
    },

    /**
     * The size used for the text.
     * `small, base, large, x-large`
     */
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return value.match(/(small|base|large|x-large)/);
      }
    },

    /**
     * The html element name used for the text.
     */
    tag: {
      type: String,
      default: function _default() {
        return this.$parentText ? 'span' : 'p';
      }
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/typography/Text/Text.vue?vue&type=script&lang=js&
 /* harmony default export */ var Text_Textvue_type_script_lang_js_ = (Textvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/typography/Text/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("cf87");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Text/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FText%2FText.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Text/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FText%2FText.vue
 /* harmony default export */ var Text_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText); 
// CONCATENATED MODULE: ./src/system/components/typography/Text/Text.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Text_Textvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Text_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText === 'function') Text_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText(component)

component.options.__file = "Text.vue"
/* harmony default export */ var Text = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ddc6":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "ddea":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M23 2v28M9 2v28"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "de06":
/***/ (function(module, exports) {

module.exports = {"description":"Used in combination with the col component to create flexible layouts.","methods":[],"displayName":"DsFlex","props":{"gutter":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The default gutter size for the columns.\n     */","description":"The default gutter size for the columns."},"width":{"type":{"name":"string|number|object"},"required":"","defaultValue":{"value":"1","func":false},"tags":{},"comment":"/**\n     * The default width for the columns.\n     */","description":"The default width for the columns."},"direction":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The direction of the items.\n     * `row, row-reverse, column, column-reverse`\n     */","description":"The direction of the items.\n`row, row-reverse, column, column-reverse`"},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the wrapper.\n     */","description":"The html element name used for the wrapper."}},"comment":"/**\n * Used in combination with the col component to create flexible layouts.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "de58":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M10 9v15c0 4 3 6 6 6s6-2 6-6V6c0-3-2-4-4-4s-4 1-4 4v17c0 1 1 2 2 2s2-1 2-2V9"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "dec8":
/***/ (function(module, exports) {

module.exports = {"description":"This component is used as a wrapper for the page's content.","methods":[],"displayName":"DsContainer","props":{"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the wrapper.\n     */","description":"The html element name used for the wrapper."}},"comment":"/**\n * This component is used as a wrapper for the page's content.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "dfbf":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M5 15v15h22V15zm4 0C9 7 9 3 16 3s7 5 7 6m-7 11v3"}}),_c('circle',{attrs:{"cx":"16","cy":"24","r":"1"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "dff7":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M29 16c0 6-5 13-13 13S3 22 3 16 8 3 16 3c5 0 9 3 11 6m-7 1l7-1 1-7"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e01e":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M2 26h28V6H2zM2 6l14 10L30 6"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e085":
/***/ (function(module, exports) {

module.exports = {"description":"This component is used as the title of a page.","methods":[],"displayName":"DsPageTitle","props":{"heading":{"type":{"name":"string"},"required":true,"defaultValue":{"value":"\"\"","func":false},"tags":{},"comment":"/**\n     * The heading of the page.\n     */","description":"The heading of the page."},"highlight":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether this title should be highlighted\n     * `true, false`\n     */","description":"Whether this title should be highlighted\n`true, false`"},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"header\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the title.\n     */","description":"The html element name used for the title."}},"comment":"/**\n * This component is used as the title of a page.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e1b4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M10 2v28l14-14z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e40b":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"16","cy":"7","r":"2"}}),_c('circle',{attrs:{"cx":"16","cy":"16","r":"2"}}),_c('circle',{attrs:{"cx":"16","cy":"25","r":"2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e4a8":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"16","cy":"16","r":"14"}}),_c('path',{attrs:{"d":"M16 8v8l4 4"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e577":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dbe9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e5e4":
/***/ (function(module, exports) {

module.exports = {"description":"A copy field is used to present text that can easily\nbe copied to the users clipboard by clicking on it.","methods":[],"displayName":"DsCopyField","props":{"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"base\"","func":false},"tags":{},"comment":"/**\n     * The size used for the text.\n     * `small, base, large`\n     */","description":"The size used for the text.\n`small, base, large`"},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the copy field.\n     */","description":"The html element name used for the copy field."}},"comment":"/**\n * A copy field is used to present text that can easily\n * be copied to the users clipboard by clicking on it.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e740":
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__("b20a"),
    upperFirst = __webpack_require__("8103");

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),

/***/ "e7e0":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M22 11c0 5-3 9-6 9s-6-4-6-9 2-8 6-8 6 3 6 8zM4 30h24c0-9-6-10-12-10S4 21 4 30z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e9a7":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("76dd"),
    upperFirst = __webpack_require__("8103");

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),

/***/ "e9bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a01a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ea72":
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__("7559"),
    hasUnicodeWord = __webpack_require__("7e8e"),
    toString = __webpack_require__("76dd"),
    unicodeWords = __webpack_require__("f4d9");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "eb9e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ebfd6":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M16 2l4 10h10l-8 7 3 11-9-7-9 7 3-11-8-7h10z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "ed63":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M3 16h26M16 3v26M12 7l4-4 4 4m-8 18l4 4 4-4m5-13l4 4-4 4M7 12l-4 4 4 4"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "ed7d":
/***/ (function(module, exports) {

module.exports = {"description":"","methods":[],"displayName":"DsFormItem","comment":"/**\n * @version 1.0.0\n * @private\n */","tags":{"access":[{"title":"access","description":"private"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "eefb":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M13 2v4l-2 1-3-3-4 4 3 3-1 2H2v6h4l1 2-3 3 4 4 3-3 2 1v4h6v-4l2-1 3 3 4-4-3-3 1-2h4v-6h-4l-1-2 3-3-4-4-3 3-2-1V2z"}}),_c('circle',{attrs:{"cx":"16","cy":"16","r":"4"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f4d9":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "f636":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f63e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Heading/Heading.vue?vue&type=template&id=948757d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-heading",class:[
    ("ds-heading-" + (_vm.size || _vm.tag)),
    _vm.primary && "ds-heading-primary",
    _vm.soft && "ds-heading-soft"
  ]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Heading/Heading.vue?vue&type=template&id=948757d6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Heading/Heading.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Headings are used as the titles of each major
 * section of a page in the interface.
 *
 * @version 1.0.0
 */
/* harmony default export */ var Headingvue_type_script_lang_js_ = ({
  name: 'DsHeading',
  props: {
    /**
     * The heading type used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    tag: {
      type: String,
      default: 'h1',
      validator: function validator(value) {
        return value.match(/(h1|h2|h3|h4|h5|h6)/);
      }
    },

    /**
     * The size used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return value.match(/(h1|h2|h3|h4|h5|h6)/);
      }
    },

    /**
     * Primary style
     * `true, false`
     */
    primary: {
      type: Boolean,
      default: false
    },

    /**
     * Muted style
     * `true, false`
     */
    soft: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/typography/Heading/Heading.vue?vue&type=script&lang=js&
 /* harmony default export */ var Heading_Headingvue_type_script_lang_js_ = (Headingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/typography/Heading/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("984f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Heading/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FHeading%2FHeading.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Heading/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FHeading%2FHeading.vue
 /* harmony default export */ var Heading_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading); 
// CONCATENATED MODULE: ./src/system/components/typography/Heading/Heading.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Heading_Headingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Heading_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading === 'function') Heading_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading(component)

component.options.__file = "Heading.vue"
/* harmony default export */ var Heading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f687":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 64 64"}},[_c('path',{attrs:{"fill":"currentColor","d":"M60 16l-6 1 4-5-7 2c-9-10-23 1-19 10C16 24 8 12 8 12s-6 9 4 16l-6-2c0 6 4 10 11 12h-7c4 8 11 8 11 8s-6 5-17 5c33 16 53-14 50-30z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f6c9":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"7","cy":"16","r":"2"}}),_c('circle',{attrs:{"cx":"16","cy":"16","r":"2"}}),_c('circle',{attrs:{"cx":"25","cy":"16","r":"2"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f746":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M4 14v16h24V14M2 9v5h28V9zm14 0s-2-9-8-6 8 6 8 6 2-9 8-6-8 6-8 6m0 0v21"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f796":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M12 20v10H4V12L16 2l12 10v18h-8V20z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f7db":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M10 6l-7 8 7 8m-7-8h15c8 0 12 4 12 12"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f7e7":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M10 6L2 16l8 10M2 16h28"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f82b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Placeholder/Placeholder.vue?vue&type=template&id=09296c1b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-placeholder"},[_c('div',{staticClass:"ds-placeholder-content"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Placeholder/Placeholder.vue?vue&type=template&id=09296c1b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Placeholder/Placeholder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/**
 * This component is used as a placeholder for other content.
 * @version 1.0.0
 */
/* harmony default export */ var Placeholdervue_type_script_lang_js_ = ({
  name: 'DsPlaceholder',
  props: {
    /**
     * The html element name used for the placeholder.
     */
    tag: {
      type: String,
      default: 'div'
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Placeholder/Placeholder.vue?vue&type=script&lang=js&
 /* harmony default export */ var Placeholder_Placeholdervue_type_script_lang_js_ = (Placeholdervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/Placeholder/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("e9bc");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Placeholder/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPlaceholder%2FPlaceholder.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Placeholder/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPlaceholder%2FPlaceholder.vue
 /* harmony default export */ var Placeholder_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder); 
// CONCATENATED MODULE: ./src/system/components/layout/Placeholder/Placeholder.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Placeholder_Placeholdervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Placeholder_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder === 'function') Placeholder_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder(component)

component.options.__file = "Placeholder.vue"
/* harmony default export */ var Placeholder = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f88c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M4 8h24M4 16h24M4 24h24"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f893":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("f921"), __esModule: true };

/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "f978":
/***/ (function(module, exports) {

module.exports = {"description":"Used in combination with the menu item to help the user navigate.","methods":[],"displayName":"DsMenu","props":{"routes":{"type":{"name":"array"},"required":"","defaultValue":{"value":"default() { return null; }","func":true},"tags":{},"comment":"/**\n     * The routes to display\n     */","description":"The routes to display"},"inverse":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Set to true, if you use it on dark background\n     */","description":"Set to true, if you use it on dark background"},"navbar":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Display menu as a navbar\n     */","description":"Display menu as a navbar"},"linkTag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"default() { return this.$router ? 'router-link' : 'a'; }","func":true},"tags":{},"comment":"/**\n     * The default component / tag used for the link of menu items\n     * `router-link, a`\n     */","description":"The default component / tag used for the link of menu items\n`router-link, a`"},"urlParser":{"type":{"name":"func"},"required":"","defaultValue":{"value":"default(route, parents) { if (route.path) { return route.path; } const parseName = this.$options.filters.kebabCase; const routeParts = [...parents, route].map(p => parseName(p.name)); return '/' + routeParts.join('/'); }","func":true},"tags":{},"comment":"/**\n     * Function that parses the url for each menu item\n     */","description":"Function that parses the url for each menu item"},"nameParser":{"type":{"name":"func"},"required":"","defaultValue":{"value":"default(route) { return route.name; }","func":true},"tags":{},"comment":"/**\n     * Function that parses the name for each menu item\n     */","description":"Function that parses the name for each menu item"},"isExact":{"type":{"name":"func"},"required":"","defaultValue":{"value":"default(url) { return url === '/' || url.path === '/'; }","func":true},"tags":{},"comment":"/**\n     * Function that checks if the url must be matched exactly in order to activate the menu item. By default only '/' must be matched exactly.\n     */","description":"Function that checks if the url must be matched exactly in order to activate the menu item. By default only '/' must be matched exactly."}},"comment":"/**\n * Used in combination with the menu item to help the user navigate.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{"navigate":{"description":"Menu navigates to route.","comment":"/**\n       * Menu navigates to route.\n       *\n       * @event navigate\n       */"}},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "f9ab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/InputError.vue?vue&type=template&id=0809f8f4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"ds-input-error"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!!_vm.error),expression:"!!error"}],staticClass:"ds-input-error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/InputError.vue?vue&type=template&id=0809f8f4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/InputError.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/**
 * @version 1.0.0
 * @private
 */
/* harmony default export */ var InputErrorvue_type_script_lang_js_ = ({
  name: 'DsInputError',
  props: {
    error: {
      type: String,
      required: false,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/InputError.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormItem_InputErrorvue_type_script_lang_js_ = (InputErrorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/InputError.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  FormItem_InputErrorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "InputError.vue"
/* harmony default export */ var InputError = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// EXTERNAL MODULE: ./node_modules/lodash/startCase.js
var startCase = __webpack_require__("e740");
var startCase_default = /*#__PURE__*/__webpack_require__.n(startCase);

// EXTERNAL MODULE: ./node_modules/lodash/camelCase.js
var camelCase = __webpack_require__("bba4");
var camelCase_default = /*#__PURE__*/__webpack_require__.n(camelCase);

// EXTERNAL MODULE: ./node_modules/lodash/kebabCase.js
var kebabCase = __webpack_require__("375a");
var kebabCase_default = /*#__PURE__*/__webpack_require__.n(kebabCase);

// CONCATENATED MODULE: ./src/system/plugins/filters.js



/* harmony default export */ var filters = ({
  install: function install(Vue) {
    Vue.filter('startCase', startCase_default.a);
    Vue.filter('camelCase', camelCase_default.a);
    Vue.filter('kebabCase', kebabCase_default.a);
  }
});
// CONCATENATED MODULE: ./src/system/plugins/utils.js
/* harmony default export */ var utils = ({
  install: function install(Vue) {
    Vue.mixin({
      methods: {
        $copyToClipboard: function $copyToClipboard(content) {
          var el = document.createElement('textarea');
          el.value = content;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
          document.execCommand('copy');
        }
      }
    });
  }
});
// CONCATENATED MODULE: ./src/system/plugins/index.js


/* harmony default export */ var plugins = ({
  install: function install(Vue) {
    Vue.use(filters);
    Vue.use(utils);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("c93e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./src/system/components/index.js







// Get components
var context = __webpack_require__("d7b2"); // Get components meta info


var contextMeta = __webpack_require__("ba87");

var components = [];
var componentsMap = {};
var componentsByName = {};
context.keys().forEach(function (key) {
  var c = context(key).default;
  var meta = contextMeta(key);
  var folder = key.split('/')[1];

  if (!componentsMap[folder]) {
    componentsMap[folder] = [];
  }

  var hidden = meta.tags.access && meta.tags.access[0].description === 'private';

  if (!hidden) {
    var parent = meta.tags.see ? meta.tags.see[0].description : null;

    var componentData = Object(objectSpread["a" /* default */])({}, meta, {
      parent: parent,
      folder: folder,
      name: c.name,
      docs: c.__docs,
      component: c
    });

    componentsByName[c.name] = componentData;
    componentsMap[folder].push(componentsByName[c.name]);
  }

  components.push(c);
}); // Add child components data to parent

Object.keys(componentsByName).forEach(function (name) {
  var component = componentsByName[name];

  if (!component.parent || !componentsByName[component.parent]) {
    return;
  }

  if (!componentsByName[component.parent].children) {
    componentsByName[component.parent].children = [];
  }

  componentsByName[component.parent].children.push(component);
});

/* harmony default export */ var system_components = ({
  install: function install(Vue) {
    components.forEach(function (c) {
      return Vue.component(c.name, c);
    });
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./src/system/icons/index.js





// Get icons
var icons_context = __webpack_require__("249d");

var iconNames = [];
var icons = [];
icons_context.keys().forEach(function (key) {
  var svg = icons_context(key);
  var name = key.replace('./', '').replace('.svg', '');
  icons.push({
    name: name,
    svg: svg
  });
  iconNames.push(name);
});
var iconMap = [];

var useIcon = function useIcon(icon) {
  iconMap.push(icon);
};

var iconPlugin = {
  install: function install(Vue) {
    iconMap.forEach(function (c) {
      return Vue.component("svg-icon-".concat(c.name), c.svg);
    });
  }
};

/* harmony default export */ var system_icons = (icons);
// EXTERNAL MODULE: ./src/system/styles/main.scss
var main = __webpack_require__("50fc");

// CONCATENATED MODULE: ./src/system/index.js





/* harmony default export */ var system = ({
  useIcon: useIcon,
  install: function install(Vue) {
    Vue.use(plugins);
    Vue.use(system_components);
    Vue.use(iconPlugin);
  }
});
// EXTERNAL MODULE: ./src/system/tokens/index.js
var tokens = __webpack_require__("6ab6");

// EXTERNAL MODULE: ./src/system/utils/index.js
var system_utils = __webpack_require__("2b4b");

// EXTERNAL MODULE: ./src/system/mixins/index.js + 1 modules
var mixins = __webpack_require__("cabe");

// CONCATENATED MODULE: ./src/library.js






/* harmony default export */ var library = (system);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tokens", function() { return tokens["b" /* tokens */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utils", function() { return system_utils; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mixins", function() { return mixins; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "icons", function() { return system_icons; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (library);



/***/ }),

/***/ "fbc9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb9e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fd76":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32","fill":"none","stroke":"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[_c('path',{attrs:{"d":"M16 2l14 14-14 14V16L2 30V2l14 14z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "febd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ffd6":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

/******/ });
//# sourceMappingURL=system.common.js.map