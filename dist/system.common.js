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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M18 5h2l-6 22h-2zM7.938 6.406l1.625 1.188L3.25 16l6.313 8.406-1.625 1.188-6.75-9L.75 16l.438-.594zm16.125 0l6.75 9 .438.594-.438.594-6.75 9-1.625-1.188L28.751 16l-6.313-8.406z"}})]) };
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

/***/ "0219":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M7 4h18v2h-2v4a7.006 7.006 0 0 1-3.406 6A7.004 7.004 0 0 1 23 22v4h2v2H7v-2h2v-4a7.006 7.006 0 0 1 3.406-6A7.004 7.004 0 0 1 9 10V6H7V4zm4 2v4c0 2.774 2.226 5 5 5s5-2.226 5-5V6H11zm5 11c-2.774 0-5 2.226-5 5v4h10v-4c0-2.774-2.226-5-5-5z"}})]) };
module.exports = { render: render };

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

/***/ "0599":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M13.375 3h1.281l.281.219s2.507 2.024 5 5.094S25 15.537 25 20.001c0 1.978-.333 4.263-1.938 6.063-1.369 1.535-3.592 2.567-6.938 2.844-.085.007-.163.025-.25.031-.283.028-.57.063-.875.063-.097 0-.186-.028-.281-.031-.139.002-.263.031-.406.031-3.265 0-5.674-1.113-7.188-2.781s-2.125-3.807-2.125-5.813c0-4.244 1.984-7.63 3.969-10.344s3.919-4.935 4.219-6.281zM14.5 5.5c-.868 1.866-2.366 3.645-3.906 5.75C8.702 13.836 7 16.784 7 20.406c0 1.595.508 3.237 1.625 4.469.238.262.514.493.813.719-.078-.193-.164-.391-.219-.594-.619-2.311.099-5.073 1.969-7.594l.938-1.281.75 1.406c.511.955 1.047 1.345 1.344 1.438s.424.063.719-.281c.589-.689 1.141-3.002.094-6.406l-.375-1.281h1.938l.281.344c.548.633 1.188 1.78 1.938 3.406s1.529 3.644 1.938 5.656c.358 1.761.476 3.535-.063 5.094.34-.241.632-.509.875-.781 1.13-1.267 1.438-2.963 1.438-4.719 0-3.669-2.272-7.509-4.625-10.406-1.705-2.099-3.067-3.383-3.875-4.094zm3.063 11.719c-.157 1.133-.503 2.089-1.094 2.781-.688.806-1.824 1.195-2.844.875-.551-.173-1.025-.508-1.469-.969-.903 1.704-1.324 3.385-1 4.594.392 1.464 1.431 2.428 3.594 2.5.086.003.16 0 .25 0 .345-.011.686-.037 1-.063.15-.018.303-.036.438-.063 1.21-.239 1.804-.811 2.188-1.594.511-1.044.519-2.681.156-4.469-.25-1.23-.756-2.418-1.219-3.594z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "05dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/List/List.vue?vue&type=template&id=054f5460&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.ordered ? 'ol' : 'ul',{tag:"component",staticClass:"ds-list",class:[
    _vm.size && ("ds-list-size-" + _vm.size)
]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/List/List.vue?vue&type=template&id=054f5460&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/List/List.vue?vue&type=script&lang=js&

//
//
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
 * Used in combination with the list item component to display lists of data.
 * @version 1.0.0
 */
/* harmony default export */ var Listvue_type_script_lang_js_ = ({
  name: 'DsList',
  provide: function provide() {
    return {
      $parentList: this
    };
  },
  inject: {
    $parentList: {
      default: null
    }
  },
  props: {
    /**
     * Whether or not the list is ordered.
     */
    ordered: {
      type: Boolean,
      default: false
    },

    /**
     * The size used for the list.
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
     * The name of the list icon.
     */
    icon: {
      type: String,
      default: 'angle-right'
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-display/List/List.vue?vue&type=script&lang=js&
 /* harmony default export */ var List_Listvue_type_script_lang_js_ = (Listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/data-display/List/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("366c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-display/List/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FList%2FList.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-display/List/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FList%2FList.vue
 /* harmony default export */ var List_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList); 
// CONCATENATED MODULE: ./src/system/components/data-display/List/List.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  List_Listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof List_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList === 'function') List_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList(component)

component.options.__file = "List.vue"
/* harmony default export */ var List = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "06c5":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M6 4h20v9h-2V6H8v20h16v-7h2v9H6V4zm11.5 7l1.406 1.406L16.312 15H28v2H16.312l2.594 2.594L17.5 21l-4.313-4.281-.688-.719.688-.719z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "09ae":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M8 7c3.302 0 6 2.698 6 6 0 1.984-.975 3.75-2.469 4.844A8.06 8.06 0 0 1 15 21.125a8.048 8.048 0 0 1 3.469-3.281A6.003 6.003 0 0 1 16 13c0-3.302 2.698-6 6-6s6 2.698 6 6c0 1.984-.975 3.75-2.469 4.844C28.169 19.154 30 21.864 30 25h-2c0-3.326-2.674-6-6-6s-6 2.674-6 6h-2c0-3.326-2.674-6-6-6s-6 2.674-6 6H0c0-3.136 1.831-5.846 4.469-7.156A6.003 6.003 0 0 1 2 13c0-3.302 2.698-6 6-6zm0 2c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4zm14 0c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "0a19":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4.094l.719.688 8.5 8.5-1.438 1.438L17 7.939v20.063h-2V7.939L8.219 14.72l-1.438-1.438 8.5-8.5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "0a36":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 5c3.854 0 7 3.146 7 7 0 3.514-2.617 6.417-6 6.906V28h-2v-9.094c-3.383-.489-6-3.392-6-6.906 0-3.854 3.146-7 7-7zm0 2c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zm0 1v2c-1.117 0-2 .883-2 2h-2c0-2.197 1.803-4 4-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "0c75":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M10 5c2.92 0 5.482.981 6 1.188C16.518 5.982 19.08 5 22 5c3.227 0 6.375 1.313 6.375 1.313l.625.281V27H17.719c-.346.597-.979 1-1.719 1s-1.373-.403-1.719-1H3V6.594l.625-.281S6.773 5 10 5zm0 2c-2.199 0-4.232.69-5 .969v16.125c1.188-.392 2.897-.875 5-.875 2.057 0 3.888.506 5 .875V7.969C14 7.626 11.933 7 10 7zm12 0c-1.933 0-4 .626-5 .969v16.125c1.112-.369 2.943-.875 5-.875 2.103 0 3.813.483 5 .875V7.969C26.232 7.69 24.199 7 22 7z"}})]) };
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

/***/ "0f56":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-4.5 6a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 11.5 12zm9 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 20.5 12zm-9.687 7c1.039 1.793 2.962 3 5.188 3s4.149-1.207 5.188-3l1.719 1c-1.383 2.387-3.954 4-6.906 4s-5.523-1.613-6.906-4z"}})]) };
module.exports = { render: render };

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

/***/ "1107":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M21 4h8v24h-8V4zm2 2v20h4V6h-4zM3 10h8v18H3V10zm2 2v14h4V12H5zm7 4h8v12h-8V16zm2 2v8h4v-8h-4z"}})]) };
module.exports = { render: render };

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

/***/ "12f0":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M7 5h18c1.093 0 2 .907 2 2v18c0 1.093-.907 2-2 2H7c-1.093 0-2-.907-2-2V7c0-1.093.907-2 2-2zm0 2v18h9.688v-6.75h-2.625v-3h2.625V13c0-2.583 1.571-3.969 3.875-3.969 1.104 0 2.067.057 2.344.094v2.719h-1.625c-1.253 0-1.469.595-1.469 1.469v1.938h2.969l-.375 3h-2.594v6.75h5.188v-18h-18z"}})]) };
module.exports = { render: render };

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

/***/ "163c":
/***/ (function(module, exports) {

module.exports = {"description":"Used in combination with the list item component to display lists of data.","methods":[],"displayName":"DsList","props":{"ordered":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether or not the list is ordered.\n     */","description":"Whether or not the list is ordered."},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The size used for the list.\n     * `small, base, large, x-large`\n     */","description":"The size used for the list.\n`small, base, large, x-large`"},"icon":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"angle-right\"","func":false},"tags":{},"comment":"/**\n     * The name of the list icon.\n     */","description":"The name of the list icon."}},"comment":"/**\n * Used in combination with the list item component to display lists of data.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "164d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Logo/Logo.vue?vue&type=template&id=1f0fcebc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-logo",class:[
    _vm.inverse && "ds-logo-inverse"
]},[_c('svg-logo',{staticClass:"ds-logo-svg"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Logo/Logo.vue?vue&type=template&id=1f0fcebc&

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
     * Inverse the logo
     * `true, false`
     */
    inverse: {
      type: Boolean,
      default: false
    },

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M14.25 4h4c.522 0 1.061.186 1.438.563s.563.915.563 1.438v1h6v2h-1v16c0 1.645-1.355 3-3 3h-12c-1.645 0-3-1.355-3-3v-16h-1v-2h6v-1c0-.522.185-1.061.563-1.438S13.729 4 14.252 4zm0 2v1h4V6h-4zm-5 3v16c0 .555.445 1 1 1h12c.555 0 1-.445 1-1V9h-14zm2 3h2v11h-2V12zm4 0h2v11h-2V12zm4 0h2v11h-2V12z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "16cc":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M2 7h28v7h-1c-1.19 0-2 .81-2 2s.81 2 2 2h1v7H2v-7h1c1.19 0 2-.81 2-2s-.81-2-2-2H2V7zm2 2v3.188c1.715.451 3 1.955 3 3.813s-1.285 3.362-3 3.813v3.188h24v-3.188c-1.715-.451-3-1.955-3-3.813s1.285-3.362 3-3.813V9H4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "171e":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3 8h26v18H3V8zm4.313 2l8.688 5.781L24.689 10H7.314zM5 10.875V24h22V10.875l-10.438 6.969-.563.344-.563-.344z"}})]) };
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

/***/ "19ad":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 5h8v2.406l-.281.313L7.438 13h5.563v2h-8v-2.406l.281-.313L10.563 7H5V5zm17 0h2v18.688l2.594-2.594L28 22.5l-4.281 4.313-.719.688-.719-.688L18 22.5l1.406-1.406L22 23.688V5zM8.188 17h1.625l.219.656L11.97 23h.031v.063l.938 2.594.063.156v1.188h-2v-.844l-.406-1.156H7.408l-.406 1.156v.844h-2v-1.188l.063-.156.938-2.594V23h.031l1.938-5.344zM9 20.656L8.156 23h1.688z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "1b2c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M14 5h4c1.093 0 2 .907 2 2v1h6c1.645 0 3 1.355 3 3v15H3V11c0-1.645 1.355-3 3-3h6V7c0-1.093.907-2 2-2zm0 2v1h4V7h-4zm-8 3c-.565 0-1 .435-1 1v13h22V11c0-.565-.435-1-1-1H6zm9 3h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "1b6f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M24.656 3.031c1.108 0 2.222.41 3.063 1.25 1.681 1.681 1.681 4.444 0 6.125l-2.813 2.781 1 1-1.406 1.406-1-1-9.5 9.5c-1.064 1.064-1.845 1.684-2.531 2.063s-1.277.493-1.688.563-.636.113-1.063.344-1.04.696-2 1.656l-.719.688-.719-.688-2-2L2.592 26l.688-.719c.986-.986 1.475-1.621 1.719-2.063s.276-.66.344-1.063.196-1.011.563-1.688.96-1.429 2-2.469l9.5-9.5-1-1 1.406-1.406 1 1 2.781-2.813a4.313 4.313 0 0 1 3.063-1.25zm0 2A2.34 2.34 0 0 0 23 5.719L20.219 8.5l3.281 3.281L26.281 9a2.297 2.297 0 0 0 0-3.281 2.273 2.273 0 0 0-1.625-.688zm-5.843 4.875l-9.5 9.5c-.96.96-1.426 1.605-1.656 2.031s-.274.621-.344 1.031-.184 1.033-.563 1.719c-.259.469-.859 1.1-1.406 1.719l.75.75c.601-.529 1.227-1.126 1.688-1.375.677-.366 1.254-.463 1.656-.531s.621-.1 1.063-.344 1.108-.733 2.094-1.719l9.5-9.5z"}})]) };
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

/***/ "1cc4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M8 7c3.302 0 6 2.698 6 6 0 1.984-.975 3.75-2.469 4.844A8.06 8.06 0 0 1 15 21.125a8.048 8.048 0 0 1 3.469-3.281A6.003 6.003 0 0 1 16 13c0-3.302 2.698-6 6-6s6 2.698 6 6c0 1.984-.975 3.75-2.469 4.844C28.169 19.154 30 21.864 30 25h-2c0-3.326-2.674-6-6-6s-6 2.674-6 6h-2c0-3.326-2.674-6-6-6s-6 2.674-6 6H0c0-3.136 1.831-5.846 4.469-7.156A6.003 6.003 0 0 1 2 13c0-3.302 2.698-6 6-6zm0 2c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4zm14 0c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "1d82":
/***/ (function(module, exports) {

module.exports = {"description":"Used for handling basic user input.","methods":[],"displayName":"DsSelect","props":{"value":{"type":{"name":"string|object|number"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The value of the input. Can be passed via v-model.\n     */","description":"The value of the input. Can be passed via v-model."},"model":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The model name when used within a form component. Uses dot notation.\n     */","description":"The model name when used within a form component. Uses dot notation."},"label":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The label of the input.\n     */","description":"The label of the input."},"id":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The id of the input.\n     */","description":"The id of the input."},"disabled":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input is disabled or not.\n     */","description":"Whether the input is disabled or not."},"schema":{"type":{"name":"object"},"required":"","defaultValue":{"value":"() => ({})","func":true},"tags":{},"comment":"/**\n     * The async-validator schema used for the input.\n     */","description":"The async-validator schema used for the input."},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The input's size.\n     * `small, base, large`\n     */","description":"The input's size.\n`small, base, large`"},"placeholder":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The placeholder shown when value is empty.\n     */","description":"The placeholder shown when value is empty."},"autofocus":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input should be automatically focused\n     */","description":"Whether the input should be automatically focused"},"readonly":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input should be read-only\n     */","description":"Whether the input should be read-only"},"multiple":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the user can select multiple items\n     */","description":"Whether the user can select multiple items"},"icon":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the input's icon.\n     */","description":"The name of the input's icon."},"iconRight":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the input's right icon.\n     */","description":"The name of the input's right icon."},"options":{"type":{"name":"array"},"required":"","defaultValue":{"value":"default() { return []; }","func":true},"tags":{},"comment":"/**\n     * The select options.\n     */","description":"The select options."}},"comment":"/**\n * Used for handling basic user input.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{"input":{"description":"Fires after user input.\nReceives the value as the only argument.","comment":"/**\n         * Fires after user input.\n         * Receives the value as the only argument.\n         *\n         * @event input\n         */"}},"slots":{}}

/***/ }),

/***/ "1d95":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M12.969 4.281l11 11 .688.719-.688.719-11 11-1.438-1.438L21.812 16 11.531 5.719z"}})]) };
module.exports = { render: render };

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

/***/ "20ff":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M11 4h10c1.645 0 3 1.355 3 3v18c0 1.645-1.355 3-3 3H11c-1.645 0-3-1.355-3-3V7c0-1.645 1.355-3 3-3zm0 2c-.555 0-1 .445-1 1v18c0 .555.445 1 1 1h10c.555 0 1-.445 1-1V7c0-.555-.445-1-1-1H11zm5 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]) };
module.exports = { render: render };

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
	"./align-center.svg": "f76f",
	"./align-justify.svg": "e9d5",
	"./align-left.svg": "5797",
	"./align-right.svg": "85c2",
	"./angle-down.svg": "77cf",
	"./angle-left.svg": "6038",
	"./angle-right.svg": "1d95",
	"./angle-up.svg": "e146",
	"./archive.svg": "ba44",
	"./arrow-down.svg": "97f4",
	"./arrow-left.svg": "f7e7",
	"./arrow-right.svg": "28fa",
	"./arrow-up.svg": "0a19",
	"./at.svg": "e04f",
	"./ban.svg": "daef",
	"./bar-chart.svg": "1107",
	"./bars.svg": "458a",
	"./book.svg": "0c75",
	"./bookmark.svg": "6bdb",
	"./briefcase.svg": "83c4",
	"./bug.svg": "c74f",
	"./calculator.svg": "32ed",
	"./calendar.svg": "bfe5",
	"./camera.svg": "b468",
	"./cart-plus.svg": "7e3a",
	"./certificate.svg": "885e",
	"./chain-broken.svg": "941a",
	"./chain.svg": "84e8",
	"./check.svg": "8e21",
	"./child.svg": "bbc7",
	"./clock.svg": "e4a8",
	"./close.svg": "9717",
	"./cloud-download.svg": "9f66",
	"./cloud-upload.svg": "36b7",
	"./cloud.svg": "e8e0",
	"./code.svg": "0098",
	"./coffee.svg": "e98a",
	"./cogs.svg": "320a",
	"./columns.svg": "3587",
	"./comment.svg": "6c19",
	"./comments.svg": "50d2",
	"./compass.svg": "5acc",
	"./copy.svg": "f22a",
	"./credit-card.svg": "657c",
	"./crop.svg": "98dc",
	"./crosshairs.svg": "800c",
	"./cube.svg": "291d",
	"./cubes.svg": "b5c1",
	"./cut.svg": "922e",
	"./dashboard.svg": "f05f",
	"./desktop.svg": "3b98",
	"./diamond.svg": "99df",
	"./download.svg": "5842",
	"./edit.svg": "8788",
	"./ellipsis-h.svg": "2e4f",
	"./ellipsis-v.svg": "c41f",
	"./envelope.svg": "171e",
	"./exchange.svg": "8aeb",
	"./exclamation-circle.svg": "f81f",
	"./exclamation-triangle.svg": "b914",
	"./expand.svg": "43f2",
	"./external-link.svg": "a66c",
	"./eye-slash.svg": "7874",
	"./eye.svg": "a39b",
	"./eyedropper.svg": "1b6f",
	"./facebook.svg": "12f0",
	"./female.svg": "36aa",
	"./file-archive.svg": "ba07",
	"./file-audio.svg": "2775",
	"./file-code.svg": "2d11",
	"./file-excel.svg": "7ed5",
	"./file-image.svg": "3aee",
	"./file-movie.svg": "bb4d",
	"./file-pdf.svg": "58aa",
	"./file-photo.svg": "73b0",
	"./file-picture.svg": "e1ec",
	"./file-powerpoint.svg": "a823",
	"./file-sound.svg": "8c25",
	"./file-text.svg": "e30f",
	"./file-video.svg": "3bd5",
	"./file-word.svg": "54e0",
	"./file-zip.svg": "a97a",
	"./file.svg": "5b29",
	"./files.svg": "f23e",
	"./film.svg": "3333",
	"./filter.svg": "a125",
	"./fire.svg": "0599",
	"./flash.svg": "8120",
	"./flask.svg": "f64e",
	"./floppy.svg": "a2f2",
	"./folder-open.svg": "bde4",
	"./folder.svg": "2556",
	"./frown.svg": "e542",
	"./gear.svg": "568f",
	"./gears.svg": "75df",
	"./gift.svg": "f746",
	"./github.svg": "5700",
	"./glass.svg": "4813",
	"./globe.svg": "b395",
	"./group.svg": "1cc4",
	"./hand-down.svg": "857a",
	"./hand-left.svg": "41b9",
	"./hand-pointer.svg": "9fed",
	"./hand-right.svg": "8c05",
	"./hand-stop.svg": "4537",
	"./hand-up.svg": "c342",
	"./headphones.svg": "d3aa",
	"./heart-o.svg": "dfbc",
	"./heart.svg": "6ff2",
	"./history.svg": "9e2c",
	"./home.svg": "f796",
	"./hourglass.svg": "0219",
	"./image.svg": "7a41",
	"./inbox.svg": "66af",
	"./indent.svg": "f422",
	"./info-circle.svg": "b314",
	"./keyboard.svg": "77d8",
	"./level-down.svg": "d0c1",
	"./level-up.svg": "712f",
	"./life-ring.svg": "f84c",
	"./lightbulb.svg": "89d8",
	"./link.svg": "aac1",
	"./list.svg": "518d",
	"./location-arrow.svg": "9b68",
	"./lock.svg": "2c25",
	"./magnet.svg": "9379",
	"./male.svg": "6a98",
	"./map-marker.svg": "af0d",
	"./map-pin.svg": "0a36",
	"./map-signs.svg": "49b7",
	"./map.svg": "9f7c",
	"./medkit.svg": "1b2c",
	"./microphone-slash.svg": "344f",
	"./microphone.svg": "6dc6",
	"./minus.svg": "4acc",
	"./mobile-phone.svg": "20ff",
	"./money.svg": "8d41",
	"./music.svg": "cec0",
	"./paperclip.svg": "de58",
	"./paste.svg": "38f4",
	"./pause.svg": "ddea",
	"./pencil.svg": "3db2",
	"./phone.svg": "896d",
	"./photo.svg": "5bbb",
	"./pie-chart.svg": "cf1c",
	"./play-circle.svg": "3584",
	"./play.svg": "e1b4",
	"./plus.svg": "5834",
	"./power-off.svg": "dba5",
	"./print.svg": "809c",
	"./question-circle.svg": "be93",
	"./refresh.svg": "ac50",
	"./rocket.svg": "2a5c",
	"./save.svg": "b228",
	"./search.svg": "419c",
	"./server.svg": "6f2e",
	"./share.svg": "c426",
	"./shield.svg": "56f8",
	"./shopping-cart.svg": "4b04",
	"./sign-in.svg": "06c5",
	"./sign-out.svg": "6dc0",
	"./smile.svg": "0f56",
	"./sort-alpha-asc.svg": "2de4",
	"./sort-alpha-desc.svg": "19ad",
	"./sort-amount-asc.svg": "d3e9",
	"./sort-amount-desc.svg": "62c7",
	"./sort.svg": "c317",
	"./spinner.svg": "d940",
	"./star-half-o.svg": "88e7",
	"./star-o.svg": "2b44",
	"./star.svg": "ebfd6",
	"./subscript.svg": "3a14",
	"./suitcase.svg": "fba4",
	"./sun.svg": "535a",
	"./superscript.svg": "e67df",
	"./table.svg": "6d10",
	"./tablet.svg": "7ccd",
	"./tag.svg": "89d6",
	"./tags.svg": "f72e",
	"./terminal.svg": "c24d",
	"./ticket.svg": "16cc",
	"./trash.svg": "16b6",
	"./underline.svg": "c564",
	"./undo.svg": "4294",
	"./unlink.svg": "beae",
	"./upload.svg": "ca53",
	"./user-plus.svg": "e3d1",
	"./user-times.svg": "a0e3",
	"./user.svg": "e7e0",
	"./users.svg": "09ae",
	"./video-camera.svg": "6799",
	"./volume-down.svg": "5c09",
	"./volume-off.svg": "83c6",
	"./volume-up.svg": "ebba",
	"./warning.svg": "f48f",
	"./wheelchair.svg": "56e3",
	"./wifi.svg": "3b8b",
	"./youtube-play.svg": "d4b3"
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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M6 3h22v10.406l-.281.313L26 15.438v13.563H6v-26zm2 2v22h16V15.437l-1.719-1.719-.281-.313V4.999H8zm16 0v7.563l1 1 1-1V5h-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "2576":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Card/Card.vue?vue&type=template&id=4696392a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-card",class:[
    _vm.$slots.image && 'ds-card-has-image',
    _vm.primary && "ds-card-primary",
    _vm.secondary && "ds-card-secondary",
    _vm.centered && "ds-card-centered",
    _vm.hover && "ds-card-hover"
]},[(_vm.image || _vm.$slots.image)?_c('div',{staticClass:"ds-card-image"},[_vm._t("image",[_c('img',{attrs:{"src":_vm.image}})])],2):_vm._e(),(_vm.icon)?_c('div',{staticClass:"ds-card-icon"},[_c('ds-icon',{attrs:{"name":_vm.icon}})],1):_vm._e(),(_vm.header || _vm.$slots.header)?_c('header',{staticClass:"ds-card-header"},[_vm._t("header",[_c('ds-heading',{attrs:{"tag":_vm.headerTag,"size":"h3"}},[_vm._v(_vm._s(_vm.header))])])],2):_vm._e(),_c('div',{staticClass:"ds-card-content"},[_vm._t("default")],2),(_vm.$slots.footer)?_c('footer',{staticClass:"ds-card-footer"},[_vm._t("footer")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Card/Card.vue?vue&type=template&id=4696392a&

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
//
//
//
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
 * A card is used to group content in an appealing way.
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
    },

    /**
     * The icon for the card.
     */
    icon: {
      type: String,
      default: null
    },

    /**
     * Highlight with primary color
     * `true, false`
     */
    primary: {
      type: Boolean,
      default: false
    },

    /**
     * Highlight with secondary color
     * `true, false`
     */
    secondary: {
      type: Boolean,
      default: false
    },

    /**
     * Center the content
     * `true, false`
     */
    centered: {
      type: Boolean,
      default: false
    },

    /**
     * Make the card hoverable
     * `true, false`
     */
    hover: {
      type: Boolean,
      default: false
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

/***/ "2775":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm8 4.719l5.25 1.313-.5 1.938-2.75-.688v6.719c0 1.645-1.355 3-3 3s-3-1.355-3-3 1.355-3 3-3c.353 0 .684.073 1 .188V9.72zM14 18c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "27ac":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "27c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/CopyField/CopyField.vue?vue&type=template&id=0413fc5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-copy-field",class:("ds-copy-field-" + _vm.size)},[_c('div',{ref:"text"},[_vm._t("default")],2),_c('div',{staticClass:"ds-copy-field-link"},[_c('ds-button',{attrs:{"icon":"copy","color":"soft","ghost":""},on:{"click":_vm.copy}})],1),_c('transition',{attrs:{"name":"ds-copy-field-message"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMessage),expression:"showMessage"}],staticClass:"ds-copy-field-message"},[_c('div',{ref:"messageText",staticClass:"ds-copy-field-message-text"})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/CopyField/CopyField.vue?vue&type=template&id=0413fc5a&

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M18.719 6.781l8.5 8.5.688.719-.688.719-8.5 8.5-1.438-1.438L24.062 17H3.999v-2h20.063l-6.781-6.781z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "291d":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4.406l.406.188 10 4.5.594.25v12.688l-.5.281L16 28.157l-.5-.281L5 22.032V9.344l.594-.25 10-4.5zm0 2.188l-7.688 3.438L16 13.876l7.688-3.844zm-9 5.031v9.219l8 4.438v-9.656zm18 0l-8 4v9.656l8-4.438v-9.219z"}})]) };
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

/***/ "2a5c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M25.906 4c.697 0 1.125.031 1.125.031l.906.031.031.906s.099 1.758-.094 3.813-.515 4.453-1.969 5.906c-1.213 1.212-4.488 3.737-7.563 6.094-.624.478-.607.466-1.188.906l.094 1.688a3.98 3.98 0 0 1-1.469 3.313l-2.563 2.094-1.281 1.031-.344-1.625-.656-3.281-3.844-3.844-3.281-.656-1.625-.313 1.031-1.313 2.094-2.563a3.98 3.98 0 0 1 3.313-1.469l1.719.094c.43-.564.41-.55.875-1.156 2.353-3.068 4.893-6.331 6.125-7.563 1.466-1.466 3.826-1.81 5.875-2a30.023 30.023 0 0 1 2.688-.125zM25 6c-.398.001-.91.03-1.594.094-1.886.175-3.973.754-4.656 1.438-.918.918-3.626 4.321-5.969 7.375-2.064 2.692-3.463 4.604-3.875 5.156l3.063 3.063c.544-.406 2.449-1.862 5.156-3.938 3.062-2.347 6.451-5.046 7.344-5.938.651-.651 1.229-2.761 1.406-4.656.129-1.375.105-1.982.094-2.563-.288-.007-.571-.033-.969-.031zm-4.562 3.531c1.117 0 2.031.915 2.031 2.031s-.915 2.031-2.031 2.031-2-.915-2-2.031.883-2.031 2-2.031zM8.5 16.75a2.004 2.004 0 0 0-1.656.75l-1.031 1.25 1.344.281c.132-.176 1.116-1.454 1.719-2.25zm-2.281 5.188l1.406 1.406c-.377.377-.82 1.323-1.125 2.156.798-.29 1.679-.679 2.125-1.125l1.406 1.406c-.894.894-2.079 1.385-3.063 1.719s-1.781.469-1.781.469l-1.469.281.313-1.469s.155-.82.5-1.813.833-2.176 1.688-3.031zm9 1.187c-.797.598-2.074 1.588-2.25 1.719l.281 1.344 1.281-1.031a1.976 1.976 0 0 0 .719-1.656z"}})]) };
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

/***/ "2b44":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 2.125l.906 2.063 3.25 7.281 7.938.844 2.25.25-1.688 1.5-5.906 5.344 1.656 7.813.469 2.188-1.969-1.125-6.906-4-6.906 4-1.969 1.125.469-2.188 1.656-7.813-5.906-5.344-1.688-1.5 2.25-.25 7.938-.844 3.25-7.281zm0 4.906l-2.563 5.781-.25.531-.563.063-6.281.656 4.688 4.219.438.406-.125.563-1.313 6.156 5.469-3.125.5-.313.5.313 5.469 3.125-1.313-6.156-.125-.563.438-.406 4.688-4.219-6.844-.719-.25-.531z"}})]) };
module.exports = { render: render };

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 3c3.845 0 7 3.155 7 7v3h3v16H5V13h3v-3c0-3.845 3.155-7 7-7zm0 2c-2.755 0-5 2.245-5 5v3h10v-3c0-2.755-2.245-5-5-5zM7 15v12h16V15H7z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d11":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM15 13h2l-2 12h-2zm-3.781 2.375l1.563 1.25L10.813 19l1.969 2.375-1.563 1.25-2.5-3L8.188 19l.531-.625zm7.562 0l2.5 3 .531.625-.531.625-2.5 3-1.563-1.25L19.187 19l-1.969-2.375z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2de4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M8.188 5h1.625l.219.656L11.97 11h.031v.063l.938 2.594.063.156v1.188h-2v-.844l-.406-1.156H7.408l-.406 1.156v.844h-2v-1.188l.063-.156.938-2.594V11h.031l1.938-5.344zM22 5h2v18.688l2.594-2.594L28 22.5l-4.281 4.313-.719.688-.719-.688L18 22.5l1.406-1.406L22 23.688V5zM9 8.656L8.156 11h1.688zM5 17h8v2.406l-.281.313L7.438 25h5.563v2h-8v-2.406l.281-.313L10.563 19H5v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "2e4f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M6 14a2 2 0 1 1 .001 3.999A2 2 0 0 1 6 14zm10 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 14zm10 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 26 14z"}})]) };
module.exports = { render: render };

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

/***/ "320a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M21.5 2.5h2v1.406a5.62 5.62 0 0 1 2.25.938l.938-.938 1.406 1.406-.938.938c.464.664.792 1.421.938 2.25H29.5v2h-1.406a5.625 5.625 0 0 1-.938 2.281l.969 1.031-1.469 1.375-.938-1a5.617 5.617 0 0 1-2.219.906v1.406h-2v-1.406a5.62 5.62 0 0 1-2.25-.938l-1.031 1.063-1.438-1.438 1.063-1.031a5.615 5.615 0 0 1-.938-2.25h-1.406v-2h1.406a5.632 5.632 0 0 1 .906-2.219l-1-.938 1.375-1.469 1.031.969a5.665 5.665 0 0 1 2.281-.938V2.498zm1 3.313c-2.055 0-3.688 1.632-3.688 3.688s1.632 3.688 3.688 3.688 3.688-1.632 3.688-3.688-1.632-3.688-3.688-3.688zM9.531 11.719l.719 1.813a6.865 6.865 0 0 1 1.656-.219c.571 0 1.126.085 1.656.219l.719-1.813 1.844.75-.719 1.813a6.887 6.887 0 0 1 2.313 2.313l1.813-.719.75 1.844-1.813.719c.132.529.219 1.087.219 1.656s-.086 1.126-.219 1.656l1.813.719-.75 1.844-1.813-.719a6.907 6.907 0 0 1-2.313 2.344l.719 1.781-1.844.75-.719-1.781a6.76 6.76 0 0 1-1.656.219 6.713 6.713 0 0 1-1.656-.219l-.719 1.781-1.844-.75.719-1.781a6.873 6.873 0 0 1-2.344-2.344l-1.781.719-.75-1.844 1.781-.719c-.134-.53-.219-1.087-.219-1.656s.085-1.128.219-1.656l-1.781-.719.75-1.844 1.781.719a6.916 6.916 0 0 1 2.344-2.313l-.719-1.813zm2.375 3.594c-2.663 0-4.813 2.118-4.813 4.781s2.15 4.813 4.813 4.813 4.781-2.15 4.781-4.813-2.118-4.781-4.781-4.781z"}})]) };
module.exports = { render: render };

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

/***/ "32ed":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm2 2h12v6H9V7zm2 2v2h8V9h-8zm-1 6h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "3333":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 4h24v24H4V4zm2 2v20h2v-1h2v1h12v-1h2v1h2V6h-2v1h-2V6H10v1H8V6H6zm2 3h2v2H8V9zm14 0h2v2h-2V9zM8 13h2v2H8v-2zm14 0h2v2h-2v-2zM8 17h2v2H8v-2zm14 0h2v2h-2v-2zM8 21h2v2H8v-2zm14 0h2v2h-2v-2z"}})]) };
module.exports = { render: render };

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

/***/ "344f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3.719 2.281L11 9.562V5.999c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2v12c0 .438-.135.858-.375 1.188l1.406 1.406A3.94 3.94 0 0 0 23 17.999v-4h2v4c0 1.544-.601 2.936-1.563 4l6.281 6.281-1.438 1.438-26-26zM13 6v5.563l6 6V6h-6zm-6 8h2v4c0 2.206 1.794 4 4 4h4.813l1.938 1.938c-.245.031-.496.063-.75.063h-2v2h4v2h-10v-2h4v-2h-2c-3.309 0-6-2.691-6-6v-4zm4 1.188l2 2v.813h.813l2 2H13c-1.103 0-2-.897-2-2v-2.813z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "3584":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-4 3.125l1.5.875 9 5.125L24 16l-1.5.875-9 5.125-1.5.875V9.125zm2 3.438v6.875L19.969 16z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "3587":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 5h22v22H5V5zm2 2v18h8V7H7zm10 0v18h8V7h-8z"}})]) };
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

module.exports = {"description":"Used to provide actions or navigation.","methods":[],"displayName":"DsButton","props":{"path":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"default() { return null; }","func":true},"tags":{},"comment":"/**\n     * The path of this button. Can be a url or a Vue router path object.\n     */","description":"The path of this button. Can be a url or a Vue router path object."},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The size used for the text.\n     * `small, base, large`\n     */","description":"The size used for the text.\n`small, base, large`"},"linkTag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"default() { const defaultLink = this.$router ? 'router-link' : 'a'; return this.path ? defaultLink : 'button'; }","func":true},"tags":{},"comment":"/**\n     * The component / tag used for this button\n     * `router-link, a`\n     */","description":"The component / tag used for this button\n`router-link, a`"},"primary":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Primary style\n     * `true, false`\n     */","description":"Primary style\n`true, false`"},"secondary":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Secondary style\n     * `true, false`\n     */","description":"Secondary style\n`true, false`"},"danger":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Danger style\n     * `true, false`\n     */","description":"Danger style\n`true, false`"},"hover":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Toggle the hover state\n     * `true, false`\n     */","description":"Toggle the hover state\n`true, false`"},"ghost":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Make the buttons background transparent\n     * `true, false`\n     */","description":"Make the buttons background transparent\n`true, false`"},"icon":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the buttons icon.\n     */","description":"The name of the buttons icon."},"iconRight":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the buttons right icon.\n     */","description":"The name of the buttons right icon."}},"comment":"/**\n * Used to provide actions or navigation.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{"click":{"description":"Click on button.\nReceives two arguments:\nevent, route object","comment":"/**\n       * Click on button.\n       * Receives two arguments:\n       * event, route object\n       *\n       * @event click\n       */"}},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "366c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8c7f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "36aa":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M18.125 4h.594l.281.5.938 1.656c1.545.156 3.628.829 5.438 3.25 2.055 2.749 3.625 7.468 3.625 15.594v1h-9.656c-.989.617-2.104 1-3.344 1s-2.355-.375-3.344-1H3.001v-1c0-9.134 1.977-14.423 4.969-17.438s6.852-3.563 10.156-3.563zm-.562 2.063c-2.914.059-5.867.568-8.188 2.906C7.009 11.353 5.215 15.864 5.062 24h5.406a11.28 11.28 0 0 1-.344-.469C8.767 21.59 7.999 19.198 7.999 17c0-.783.212-1.515.625-2.063s.978-.894 1.563-1.125c1.169-.461 2.477-.521 3.719-.625s2.43-.242 3.125-.563.969-.581.969-1.625h2c0 1.66-.976 2.893-2.156 3.438s-2.492.644-3.75.75-2.45.221-3.156.5c-.353.139-.585.292-.719.469S10 16.556 10 17c0 1.711.643 3.824 1.75 5.406S14.337 25 16 25c1.665 0 3.144-1.014 4.25-2.594S22 18.722 22 17h2c0 2.207-.767 4.624-2.125 6.563-.102.146-.203.297-.313.438h5.375c-.136-7.17-1.553-11.261-3.156-13.406-1.684-2.253-3.521-2.594-4.531-2.594h-.594l-.281-.5zM13 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "36b7":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c3.378 0 6.14 2.131 7.344 5.063 3.527.182 6.33 2.986 6.563 6.5 1.239 1.102 2.094 2.677 2.094 4.438 0 3.324-2.676 6-6 6h-20c-3.324 0-6-2.676-6-6 0-2.751 1.884-4.944 4.344-5.656a4.897 4.897 0 0 1 3.844-3.219c.454-3.994 3.694-7.125 7.813-7.125zm0 2c-3.37 0-6 2.63-6 6v1H9c-1.444 0-2.638.964-2.938 2.313l-.125.656-.656.125A3.941 3.941 0 0 0 2 20c0 2.276 1.724 4 4 4h20c2.276 0 4-1.724 4-4 0-1.267-.65-2.48-1.594-3.188L28 16.499v-.5c0-2.755-2.245-5-5-5h-1.031l-.219-.719c-.779-2.51-2.988-4.281-5.75-4.281zm0 5.594l.719.688 4 4-1.438 1.438L17 15.439v6.563h-2v-6.563l-2.281 2.281-1.438-1.438 4-4z"}})]) };
module.exports = { render: render };

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

/***/ "38f4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 3c1.259 0 2.152.89 2.594 2H25v9h2v16H13v-2H5V5h7.406c.442-1.11 1.335-2 2.594-2zm0 2c-.555 0-1 .445-1 1v1h-3v2h8V7h-3V6c0-.555-.445-1-1-1zM7 7v19h6V14h10V7h-2v4H9V7H7zm8 9v12h10V16H15z"}})]) };
module.exports = { render: render };

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

/***/ "3a14":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4.156 8h6.375l.313.469 1.656 2.563 1.656-2.563.313-.469h6.375l-1 1.531L15.688 16l4.156 6.469 1 1.531h-6.375l-.313-.469-1.656-2.563-1.656 2.563-.313.469H4.156l1-1.531L9.312 16 5.156 9.531zm3.657 2l3.875 6-.344.531L7.813 22h1.656l2.188-3.438.844-1.313.844 1.313L15.533 22h1.656l-3.875-6 .344-.531L17.189 10h-1.656l-2.188 3.438-.844 1.313-.844-1.313L9.469 10H7.813zm17.156 9h.063a2.987 2.987 0 0 1 2.969 2.969c0 .976-.478 1.885-1.281 2.438l-2.125 1.469c-.041.028-.025.093-.063.125h3.469v2h-6v-1a3.38 3.38 0 0 1 1.469-2.781l2.125-1.469a.927.927 0 0 0 .406-.781.955.955 0 0 0-.969-.969h-.063a.955.955 0 0 0-.969.969v.031h-2v-.031a2.987 2.987 0 0 1 2.969-2.969z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "3a26":
/***/ (function(module, exports) {

module.exports = {"description":"A section is used to group bigger chunks of related content.","methods":[],"displayName":"DsSection","props":{"fullheight":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether this section should be fullheight\n     * `true, false`\n     */","description":"Whether this section should be fullheight\n`true, false`"},"primary":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Highlight with primary color\n     * `true, false`\n     */","description":"Highlight with primary color\n`true, false`"},"secondary":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Highlight with secondary color\n     * `true, false`\n     */","description":"Highlight with secondary color\n`true, false`"},"centered":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Center the content\n     * `true, false`\n     */","description":"Center the content\n`true, false`"},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"section\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the section.\n     */","description":"The html element name used for the section."}},"comment":"/**\n * A section is used to group bigger chunks of related content.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

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

/***/ "3aee":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM20.094 14a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM13 15.594l.719.688L16 18.563l1.281-1.281.719-.688.719.688 3 3-1.438 1.438L18 19.439l-1.281 1.281-.719.688-.719-.688L13 18.439 9.719 21.72l-1.438-1.438 4-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "3b19":
/***/ (function(module, exports) {

module.exports = {"description":"","methods":[],"displayName":"DsInputLabel","props":{"label":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"","description":""}},"comment":"/**\n * @version 1.0.0\n * @private\n */","tags":{"access":[{"title":"access","description":"private"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{}}

/***/ }),

/***/ "3b8b":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 7c5.017 0 9.544 2.083 12.813 5.406l-1.406 1.406c-2.905-2.961-6.94-4.813-11.406-4.813S7.5 10.85 4.595 13.812l-1.406-1.406C6.457 9.083 10.985 7 16.002 7zm0 5c3.639 0 6.919 1.521 9.281 3.938l-1.406 1.406C21.875 15.289 19.087 14 16 14s-5.875 1.288-7.875 3.344l-1.406-1.406C9.081 13.52 12.361 12 16 12zm0 5c2.26 0 4.295.956 5.75 2.469l-1.406 1.406C19.251 19.725 17.709 19 16 19s-3.25.725-4.344 1.875l-1.406-1.406C11.706 17.956 13.74 17 16 17zm0 5c.884 0 1.67.392 2.219 1L16 25.219 13.781 23c.549-.608 1.335-1 2.219-1z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "3b98":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M2 6h28v18H17v2h5v2H10v-2h5v-2H2V6zm2 2v14h24V8H4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "3bd5":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zm-7 6.781l1.5.938 5 3 1.438.844-1.438.844-5 3-1.5.938V13.22zm2 3.531v2.5L16.094 18z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "3db2":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M24.688 4.031c.837 0 1.679.335 2.313.969a3.251 3.251 0 0 1 0 4.594l-.031.063-.063.063.594.594-16.5 16.5-.313.063-5.5 1.094-1.469.313.313-1.469 1.094-5.5.063-.313 16.5-16.5.625.594.094-.094c.633-.633 1.444-.969 2.281-.969zm0 1.969c-.312 0-.608.14-.875.406l-.094.094L25.5 8.281l.094-.094c.533-.533.533-1.248 0-1.781C25.327 6.139 25 6 24.688 6zm-2.969 1.313L20.25 8.751l3 3 1.438-1.469zm-2.844 2.875L8.406 20.626l1.813.406.625.125.125.625.406 1.813 10.438-10.469zM6.969 22.344l-.406 2.031 1.063 1.063 2.031-.406-.5-2.188z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "3eba":
/***/ (function(module, exports) {

module.exports = {"description":"A card is used to group content in an appealing way.","methods":[],"displayName":"DsCard","props":{"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"article\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the card.\n     */","description":"The html element name used for the card."},"header":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The header for the card.\n     */","description":"The header for the card."},"headerTag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"h3\"","func":false},"tags":{},"comment":"/**\n     * The heading type used for the header.\n     * `h1, h2, h3, h4, h5, h6`\n     */","description":"The heading type used for the header.\n`h1, h2, h3, h4, h5, h6`"},"image":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The image for the card.\n     */","description":"The image for the card."},"icon":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The icon for the card.\n     */","description":"The icon for the card."},"primary":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Highlight with primary color\n     * `true, false`\n     */","description":"Highlight with primary color\n`true, false`"},"secondary":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Highlight with secondary color\n     * `true, false`\n     */","description":"Highlight with secondary color\n`true, false`"},"centered":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Center the content\n     * `true, false`\n     */","description":"Center the content\n`true, false`"},"hover":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Make the card hoverable\n     * `true, false`\n     */","description":"Make the card hoverable\n`true, false`"}},"comment":"/**\n * A card is used to group content in an appealing way.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"\\\"image\\\"":{"description":"Content of the card's image"},"\\\"header\\\"":{"description":"Content of the card's header"},"default":{"description":""},"\\\"footer\\\"/":{"description":"Content of the card's footer"}}}

/***/ }),

/***/ "3f2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Section/Section.vue?vue&type=template&id=70edadf4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-section",class:[
    _vm.fullheight && "ds-section-fullheight",
    _vm.primary && "ds-section-primary",
    _vm.secondary && "ds-section-secondary",
    _vm.centered && "ds-section-centered"
  ]},[_c('div',{staticClass:"ds-section-content"},[_c('ds-container',[_vm._t("default")],2)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Section/Section.vue?vue&type=template&id=70edadf4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Section/Section.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
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
 * A section is used to group bigger chunks of related content.
 * @version 1.0.0
 */
/* harmony default export */ var Sectionvue_type_script_lang_js_ = ({
  name: 'DsSection',
  props: {
    /**
     * Whether this section should be fullheight
     * `true, false`
     */
    fullheight: {
      type: Boolean,
      default: false
    },

    /**
     * Highlight with primary color
     * `true, false`
     */
    primary: {
      type: Boolean,
      default: false
    },

    /**
     * Highlight with secondary color
     * `true, false`
     */
    secondary: {
      type: Boolean,
      default: false
    },

    /**
     * Center the content
     * `true, false`
     */
    centered: {
      type: Boolean,
      default: false
    },

    /**
     * The html element name used for the section.
     */
    tag: {
      type: String,
      default: 'section'
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Section/Section.vue?vue&type=script&lang=js&
 /* harmony default export */ var Section_Sectionvue_type_script_lang_js_ = (Sectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/Section/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("42d6");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Section/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSection%2FSection.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Section/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSection%2FSection.vue
 /* harmony default export */ var Section_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection); 
// CONCATENATED MODULE: ./src/system/components/layout/Section/Section.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Section_Sectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Section_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection === 'function') Section_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection(component)

component.options.__file = "Section.vue"
/* harmony default export */ var Section = __webpack_exports__["default"] = (component.exports);

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M19 3c5.511 0 10 4.489 10 10s-4.489 10-10 10a9.923 9.923 0 0 1-6.313-2.25l-7.969 7.969-1.438-1.438 7.969-7.969a9.919 9.919 0 0 1-2.25-6.313c0-5.511 4.489-10 10-10zm0 2c-4.43 0-8 3.57-8 8s3.57 8 8 8 8-3.57 8-8-3.57-8-8-8z"}})]) };
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

/***/ "41b9":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16.906 3h.406l.313.281L24.406 10H30v16H13.156a3.019 3.019 0 0 1-2.938-2.375L8.562 16H4.999c-1.645 0-3-1.355-3-3s1.355-3 3-3h10.75l-.188-.75c-.203-.156-.331-.224-.625-.625-.47-.642-.938-1.633-.938-2.969C13.996 4.23 15.288 3 16.904 3zm-.312 2.094c-.421.082-.594.255-.594.563 0 .903.273 1.459.531 1.813s.438.438.438.438l.344.188.125.406.594 2.25.313 1.25H5.001c-.565 0-1 .435-1 1s.435 1 1 1h5.188l.188.781 1.781 8.438c.1.467.523.781 1 .781h9.844V11.408zM25 12v12h3V12h-3z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "4294":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M12.781 5.281l1.438 1.438L7.938 13h13.063c3.845 0 7 3.155 7 7v7h-2v-7c0-2.755-2.245-5-5-5H7.938l6.281 6.281-1.438 1.438-8-8L4.093 14l.688-.719z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "42cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Button/Button.vue?vue&type=template&id=286a52d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.linkTag,_vm._b({tag:"component",staticClass:"ds-button",class:[
    _vm.size && ("ds-button-size-" + _vm.size),
    _vm.primary && "ds-button-primary",
    _vm.secondary && "ds-button-secondary",
    _vm.danger && "ds-button-danger",
    _vm.ghost && "ds-button-ghost",
    _vm.iconOnly && "ds-button-icon-only",
    _vm.hover && "ds-button-hover"
  ],on:{"!click":function($event){return _vm.handleClick($event)}}},'component',_vm.bindings,false),[(_vm.icon)?_c('ds-icon',{attrs:{"name":_vm.icon}}):_vm._e(),(_vm.$slots.default)?_c('span',{staticClass:"ds-button-text"},[_vm._t("default")],2):_vm._e(),(_vm.iconRight)?_c('ds-icon',{attrs:{"name":_vm.iconRight}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/navigation/Button/Button.vue?vue&type=template&id=286a52d8&

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
     * Secondary style
     * `true, false`
     */
    secondary: {
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

/***/ "42d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5811");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "43f2":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M14 5h13v13h-2V8.437L8.437 25H18v2H5V14h2v9.563L23.563 7H14V5z"}})]) };
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

/***/ "4537":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 2c1.381 0 2.533.97 2.875 2.25.351-.146.724-.25 1.125-.25 1.645 0 3 1.355 3 3v1.188A2.925 2.925 0 0 1 24 8c1.645 0 3 1.355 3 3v12c0 3.854-3.146 7-7 7h-4.625c-1.919 0-3.543-.923-4.719-2.094l-6.781-6.781c-1.163-1.163-1.163-3.087 0-4.25s3.087-1.163 4.25 0L9 17.75V7c0-1.645 1.355-3 3-3 .401 0 .774.104 1.125.25C13.467 2.97 14.619 2 16 2zm0 2c-.565 0-1 .435-1 1v10h-2V7c0-.565-.435-1-1-1s-1 .435-1 1v15.594l-1.719-1.719-2.563-2.594c-.399-.399-1.039-.399-1.438 0s-.399 1.039 0 1.438l6.813 6.75c.913.909 2.009 1.531 3.281 1.531h4.625c2.774 0 5-2.226 5-5V11c0-.565-.435-1-1-1s-1 .435-1 1v4h-2V7c0-.565-.435-1-1-1s-1 .435-1 1v8h-2V5c0-.565-.435-1-1-1z"}})]) };
module.exports = { render: render };

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

/***/ "458a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 7h24v2H4V7zm0 8h24v2H4v-2zm0 8h24v2H4v-2z"}})]) };
module.exports = { render: render };

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

/***/ "4813":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M8.25 5h15.5l.25.594C24.585 6.92 25 8.67 25 11c0 4.616-3.516 8.431-8 8.938v6.063h5v2H10v-2h5v-6.063c-4.484-.506-8-4.322-8-8.938 0-2.325.413-4.077 1-5.406zm1.406 2C9.294 8.001 9 9.235 9 11c0 3.877 3.123 7 7 7a6.967 6.967 0 0 0 6.906-6H11v-2h11.938c-.081-1.241-.277-2.207-.563-3H9.656z"}})]) };
module.exports = { render: render };

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

/***/ "49b7":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 5h2v2h8.469l.281.344 3.563 4.156-3.563 4.156-.281.344H5V7h10V5zM7 9v5h17.531l2.156-2.5L24.531 9H7zm8 8h2v10h-2V17z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "4acc":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 15h22v2H5v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "4b04":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4.75 7h2.219c.918 0 1.716.61 1.938 1.5L11.532 19h11.469l1.906-7H11.251l-.5-2h16.75l-2.594 9.531A1.969 1.969 0 0 1 23.001 21H11.532c-.917 0-1.714-.61-1.938-1.5L6.969 9H4.75a1 1 0 0 1 0-2zm17 14c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm-9 0c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm0 2c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1zm9 0c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})]) };
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

module.exports = {"description":"This component is used to layout a page.","methods":[],"displayName":"DsPage","props":{"contained":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the layout should have a maximum width\n     * `true, false`\n     */","description":"Whether the layout should have a maximum width\n`true, false`"}},"comment":"/**\n * This component is used to layout a page.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"\\\"brand\\\"/":{"description":"Content of the page's brand"},"\\\"navbar\\\"/":{"description":"Content of the navbar"},"\\\"sidebar\\\"":{"description":"Content of the sidebar"},"\\\"drawer\\\"":{"description":"Content of the drawer (mobile navigation)"},"default":{"description":""}}}

/***/ }),

/***/ "5079":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "50d2":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M2 5h20v16h-9.656l-4.719 3.781L6 26.094V21H2V5zm2 2v12h4v2.906l3.375-2.688.281-.219H20v-12H4zm20 2h6v16h-4v5.094L19.656 25h-9.313l2.5-2h7.5l3.656 2.906V23h4V11h-4V9z"}})]) };
module.exports = { render: render };

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

/***/ "518d":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 5h6v6H4V5zm2 2v2h2V7H6zm6 0h15v2H12V7zm-8 6h6v6H4v-6zm2 2v2h2v-2H6zm6 0h15v2H12v-2zm-8 6h6v6H4v-6zm2 2v2h2v-2H6zm6 0h15v2H12v-2z"}})]) };
module.exports = { render: render };

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

/***/ "535a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 3h2v5h-2V3zM7.5 6.094l3.563 3.531-1.438 1.438L6.094 7.5zm17 0L25.906 7.5l-3.531 3.563-1.438-1.438zM16 9c3.854 0 7 3.146 7 7s-3.146 7-7 7-7-3.146-7-7 3.146-7 7-7zm0 2c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zM3 15h5v2H3v-2zm21 0h5v2h-5v-2zM9.625 20.938l1.438 1.438L7.5 25.907l-1.406-1.406zm12.75 0l3.531 3.563-1.406 1.406-3.563-3.531zM15 24h2v5h-2v-5z"}})]) };
module.exports = { render: render };

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

/***/ "54e0":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm10 7h4v2h-2v4.5c0 1.383-1.117 2.5-2.5 2.5-.386 0-.604-.283-.906-.469-.408.824-1.11 1.469-2.094 1.469a2.497 2.497 0 0 1-2.5-2.5V15H9v-2h4v6.5c0 .217.283.5.5.5s.5-.283.5-.5V15h2v2s.007.652.156 1.25c.075.299.198.577.281.688s.021.063.063.063c.217 0 .5-.283.5-.5v-6.5z"}})]) };
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

/***/ "568f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M13.188 3h5.625l.156.813.594 2.969a9.951 9.951 0 0 1 2.594 1.531l2.906-1 .781-.25.406.719 2 3.438.406.719-.594.531-2.25 1.969c.084.513.188 1.022.188 1.563s-.104 1.05-.188 1.563l2.25 1.969.594.531-.406.719-2 3.438-.406.719-.781-.25-2.906-1a9.935 9.935 0 0 1-2.594 1.531l-.594 2.969-.156.813h-5.625l-.156-.813-.594-2.969a9.951 9.951 0 0 1-2.594-1.531l-2.906 1-.781.25-.406-.719-2-3.438-.406-.719.594-.531 2.25-1.969c-.084-.513-.188-1.022-.188-1.563s.104-1.05.188-1.563l-2.25-1.969-.594-.531.406-.719 2-3.438.406-.719.781.25 2.906 1a9.935 9.935 0 0 1 2.594-1.531l.594-2.969zm1.625 2l-.5 2.594-.125.594-.563.188a7.964 7.964 0 0 0-3.031 1.75l-.438.406-.563-.188-2.531-.875L5.874 11.5l2 1.781.469.375-.156.594c-.128.57-.188 1.153-.188 1.75s.06 1.18.188 1.75l.156.594-.469.375-2 1.781 1.188 2.031 2.531-.875.563-.188.438.406a7.979 7.979 0 0 0 3.031 1.75l.563.188.125.594.5 2.594h2.375l.5-2.594.125-.594.563-.188a7.964 7.964 0 0 0 3.031-1.75l.438-.406.563.188 2.531.875 1.188-2.031-2-1.781-.438-.375.125-.594c.128-.572.188-1.153.188-1.75s-.06-1.18-.188-1.75l-.156-.594.469-.375 2-1.781-1.188-2.031-2.531.875-.563.188-.438-.406a7.979 7.979 0 0 0-3.031-1.75l-.563-.188-.125-.594-.5-2.594h-2.375zM16 11c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 2c-1.669 0-3 1.331-3 3s1.331 3 3 3 3-1.331 3-3-1.331-3-3-3z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "56b3":
/***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

// Kludges for bugs and behavior differences that can't be feature
// detected are enabled based on userAgent etc sniffing.
var userAgent = navigator.userAgent;
var platform = navigator.platform;

var gecko = /gecko\/\d/i.test(userAgent);
var ie_upto10 = /MSIE \d/.test(userAgent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
var edge = /Edge\/(\d+)/.exec(userAgent);
var ie = ie_upto10 || ie_11up || edge;
var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
var webkit = !edge && /WebKit\//.test(userAgent);
var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
var chrome = !edge && /Chrome\//.test(userAgent);
var presto = /Opera\//.test(userAgent);
var safari = /Apple Computer/.test(navigator.vendor);
var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
var phantom = /PhantomJS/.test(userAgent);

var ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
var android = /Android/.test(userAgent);
// This is woefully incomplete. Suggestions for alternative methods welcome.
var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
var mac = ios || /Mac/.test(platform);
var chromeOS = /\bCrOS\b/.test(userAgent);
var windows = /win/i.test(platform);

var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
if (presto_version) { presto_version = Number(presto_version[1]); }
if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
var captureRightClick = gecko || (ie && ie_version >= 9);

function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

var rmClass = function(node, cls) {
  var current = node.className;
  var match = classTest(cls).exec(current);
  if (match) {
    var after = current.slice(match.index + match[0].length);
    node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
  }
};

function removeChildren(e) {
  for (var count = e.childNodes.length; count > 0; --count)
    { e.removeChild(e.firstChild); }
  return e
}

function removeChildrenAndAdd(parent, e) {
  return removeChildren(parent).appendChild(e)
}

function elt(tag, content, className, style) {
  var e = document.createElement(tag);
  if (className) { e.className = className; }
  if (style) { e.style.cssText = style; }
  if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
  else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
  return e
}
// wrapper for elt, which removes the elt from the accessibility tree
function eltP(tag, content, className, style) {
  var e = elt(tag, content, className, style);
  e.setAttribute("role", "presentation");
  return e
}

var range;
if (document.createRange) { range = function(node, start, end, endNode) {
  var r = document.createRange();
  r.setEnd(endNode || node, end);
  r.setStart(node, start);
  return r
}; }
else { range = function(node, start, end) {
  var r = document.body.createTextRange();
  try { r.moveToElementText(node.parentNode); }
  catch(e) { return r }
  r.collapse(true);
  r.moveEnd("character", end);
  r.moveStart("character", start);
  return r
}; }

function contains(parent, child) {
  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
    { child = child.parentNode; }
  if (parent.contains)
    { return parent.contains(child) }
  do {
    if (child.nodeType == 11) { child = child.host; }
    if (child == parent) { return true }
  } while (child = child.parentNode)
}

function activeElt() {
  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
  // IE < 10 will throw when accessed while the page is loading or in an iframe.
  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
  var activeElement;
  try {
    activeElement = document.activeElement;
  } catch(e) {
    activeElement = document.body || null;
  }
  while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
    { activeElement = activeElement.shadowRoot.activeElement; }
  return activeElement
}

function addClass(node, cls) {
  var current = node.className;
  if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
}
function joinClasses(a, b) {
  var as = a.split(" ");
  for (var i = 0; i < as.length; i++)
    { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
  return b
}

var selectInput = function(node) { node.select(); };
if (ios) // Mobile Safari apparently has a bug where select() is broken.
  { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
else if (ie) // Suppress mysterious IE10 errors
  { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }

function bind(f) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){return f.apply(null, args)}
}

function copyObj(obj, target, overwrite) {
  if (!target) { target = {}; }
  for (var prop in obj)
    { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
      { target[prop] = obj[prop]; } }
  return target
}

// Counts the column offset in a string, taking tabs into account.
// Used mostly to find indentation.
function countColumn(string, end, tabSize, startIndex, startValue) {
  if (end == null) {
    end = string.search(/[^\s\u00a0]/);
    if (end == -1) { end = string.length; }
  }
  for (var i = startIndex || 0, n = startValue || 0;;) {
    var nextTab = string.indexOf("\t", i);
    if (nextTab < 0 || nextTab >= end)
      { return n + (end - i) }
    n += nextTab - i;
    n += tabSize - (n % tabSize);
    i = nextTab + 1;
  }
}

var Delayed = function() {this.id = null;};
Delayed.prototype.set = function (ms, f) {
  clearTimeout(this.id);
  this.id = setTimeout(f, ms);
};

function indexOf(array, elt) {
  for (var i = 0; i < array.length; ++i)
    { if (array[i] == elt) { return i } }
  return -1
}

// Number of pixels added to scroller and sizer to hide scrollbar
var scrollerGap = 30;

// Returned or thrown by various protocols to signal 'I'm not
// handling this'.
var Pass = {toString: function(){return "CodeMirror.Pass"}};

// Reused option objects for setSelection & friends
var sel_dontScroll = {scroll: false};
var sel_mouse = {origin: "*mouse"};
var sel_move = {origin: "+move"};

// The inverse of countColumn -- find the offset that corresponds to
// a particular column.
function findColumn(string, goal, tabSize) {
  for (var pos = 0, col = 0;;) {
    var nextTab = string.indexOf("\t", pos);
    if (nextTab == -1) { nextTab = string.length; }
    var skipped = nextTab - pos;
    if (nextTab == string.length || col + skipped >= goal)
      { return pos + Math.min(skipped, goal - col) }
    col += nextTab - pos;
    col += tabSize - (col % tabSize);
    pos = nextTab + 1;
    if (col >= goal) { return pos }
  }
}

var spaceStrs = [""];
function spaceStr(n) {
  while (spaceStrs.length <= n)
    { spaceStrs.push(lst(spaceStrs) + " "); }
  return spaceStrs[n]
}

function lst(arr) { return arr[arr.length-1] }

function map(array, f) {
  var out = [];
  for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
  return out
}

function insertSorted(array, value, score) {
  var pos = 0, priority = score(value);
  while (pos < array.length && score(array[pos]) <= priority) { pos++; }
  array.splice(pos, 0, value);
}

function nothing() {}

function createObj(base, props) {
  var inst;
  if (Object.create) {
    inst = Object.create(base);
  } else {
    nothing.prototype = base;
    inst = new nothing();
  }
  if (props) { copyObj(props, inst); }
  return inst
}

var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
function isWordCharBasic(ch) {
  return /\w/.test(ch) || ch > "\x80" &&
    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
}
function isWordChar(ch, helper) {
  if (!helper) { return isWordCharBasic(ch) }
  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
  return helper.test(ch)
}

function isEmpty(obj) {
  for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
  return true
}

// Extending unicode characters. A series of a non-extending char +
// any number of extending chars is treated as a single unit as far
// as editing and measuring is concerned. This is not fully correct,
// since some scripts/fonts/browsers also treat other configurations
// of code points as a group.
var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

// Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
function skipExtendingChars(str, pos, dir) {
  while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
  return pos
}

// Returns the value from the range [`from`; `to`] that satisfies
// `pred` and is closest to `from`. Assumes that at least `to`
// satisfies `pred`. Supports `from` being greater than `to`.
function findFirst(pred, from, to) {
  // At any point we are certain `to` satisfies `pred`, don't know
  // whether `from` does.
  var dir = from > to ? -1 : 1;
  for (;;) {
    if (from == to) { return from }
    var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
    if (mid == from) { return pred(mid) ? from : to }
    if (pred(mid)) { to = mid; }
    else { from = mid + dir; }
  }
}

// The display handles the DOM integration, both for input reading
// and content drawing. It holds references to DOM nodes and
// display-related state.

function Display(place, doc, input) {
  var d = this;
  this.input = input;

  // Covers bottom-right square when both scrollbars are present.
  d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
  d.scrollbarFiller.setAttribute("cm-not-content", "true");
  // Covers bottom of gutter when coverGutterNextToScrollbar is on
  // and h scrollbar is present.
  d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
  d.gutterFiller.setAttribute("cm-not-content", "true");
  // Will contain the actual code, positioned to cover the viewport.
  d.lineDiv = eltP("div", null, "CodeMirror-code");
  // Elements are added to these to represent selection and cursors.
  d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
  d.cursorDiv = elt("div", null, "CodeMirror-cursors");
  // A visibility: hidden element used to find the size of things.
  d.measure = elt("div", null, "CodeMirror-measure");
  // When lines outside of the viewport are measured, they are drawn in this.
  d.lineMeasure = elt("div", null, "CodeMirror-measure");
  // Wraps everything that needs to exist inside the vertically-padded coordinate system
  d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                    null, "position: relative; outline: none");
  var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
  // Moved around its parent to cover visible view.
  d.mover = elt("div", [lines], null, "position: relative");
  // Set to the height of the document, allowing scrolling.
  d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
  d.sizerWidth = null;
  // Behavior of elts with overflow: auto and padding is
  // inconsistent across browsers. This is used to ensure the
  // scrollable area is big enough.
  d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
  // Will contain the gutters, if any.
  d.gutters = elt("div", null, "CodeMirror-gutters");
  d.lineGutter = null;
  // Actual scrollable element.
  d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
  d.scroller.setAttribute("tabIndex", "-1");
  // The element in which the editor lives.
  d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
  if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
  if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true; }

  if (place) {
    if (place.appendChild) { place.appendChild(d.wrapper); }
    else { place(d.wrapper); }
  }

  // Current rendered range (may be bigger than the view window).
  d.viewFrom = d.viewTo = doc.first;
  d.reportedViewFrom = d.reportedViewTo = doc.first;
  // Information about the rendered lines.
  d.view = [];
  d.renderedView = null;
  // Holds info about a single rendered line when it was rendered
  // for measurement, while not in view.
  d.externalMeasured = null;
  // Empty space (in pixels) above the view
  d.viewOffset = 0;
  d.lastWrapHeight = d.lastWrapWidth = 0;
  d.updateLineNumbers = null;

  d.nativeBarWidth = d.barHeight = d.barWidth = 0;
  d.scrollbarsClipped = false;

  // Used to only resize the line number gutter when necessary (when
  // the amount of lines crosses a boundary that makes its width change)
  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
  // Set to true when a non-horizontal-scrolling line widget is
  // added. As an optimization, line widget aligning is skipped when
  // this is false.
  d.alignWidgets = false;

  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

  // Tracks the maximum line length so that the horizontal scrollbar
  // can be kept static when scrolling.
  d.maxLine = null;
  d.maxLineLength = 0;
  d.maxLineChanged = false;

  // Used for measuring wheel scrolling granularity
  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

  // True when shift is held down.
  d.shift = false;

  // Used to track whether anything happened since the context menu
  // was opened.
  d.selForContextMenu = null;

  d.activeTouch = null;

  input.init(d);
}

// Find the line object corresponding to the given line number.
function getLine(doc, n) {
  n -= doc.first;
  if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
  var chunk = doc;
  while (!chunk.lines) {
    for (var i = 0;; ++i) {
      var child = chunk.children[i], sz = child.chunkSize();
      if (n < sz) { chunk = child; break }
      n -= sz;
    }
  }
  return chunk.lines[n]
}

// Get the part of a document between two positions, as an array of
// strings.
function getBetween(doc, start, end) {
  var out = [], n = start.line;
  doc.iter(start.line, end.line + 1, function (line) {
    var text = line.text;
    if (n == end.line) { text = text.slice(0, end.ch); }
    if (n == start.line) { text = text.slice(start.ch); }
    out.push(text);
    ++n;
  });
  return out
}
// Get the lines between from and to, as array of strings.
function getLines(doc, from, to) {
  var out = [];
  doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
  return out
}

// Update the height of a line, propagating the height change
// upwards to parent nodes.
function updateLineHeight(line, height) {
  var diff = height - line.height;
  if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
}

// Given a line object, find its line number by walking up through
// its parent links.
function lineNo(line) {
  if (line.parent == null) { return null }
  var cur = line.parent, no = indexOf(cur.lines, line);
  for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
    for (var i = 0;; ++i) {
      if (chunk.children[i] == cur) { break }
      no += chunk.children[i].chunkSize();
    }
  }
  return no + cur.first
}

// Find the line at the given vertical position, using the height
// information in the document tree.
function lineAtHeight(chunk, h) {
  var n = chunk.first;
  outer: do {
    for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
      var child = chunk.children[i$1], ch = child.height;
      if (h < ch) { chunk = child; continue outer }
      h -= ch;
      n += child.chunkSize();
    }
    return n
  } while (!chunk.lines)
  var i = 0;
  for (; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i], lh = line.height;
    if (h < lh) { break }
    h -= lh;
  }
  return n + i
}

function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

function lineNumberFor(options, i) {
  return String(options.lineNumberFormatter(i + options.firstLineNumber))
}

// A Pos instance represents a position within the text.
function Pos(line, ch, sticky) {
  if ( sticky === void 0 ) sticky = null;

  if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
  this.line = line;
  this.ch = ch;
  this.sticky = sticky;
}

// Compare two positions, return 0 if they are the same, a negative
// number when a is less, and a positive number otherwise.
function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

function copyPos(x) {return Pos(x.line, x.ch)}
function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

// Most of the external API clips given positions to make sure they
// actually exist within the document.
function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
function clipPos(doc, pos) {
  if (pos.line < doc.first) { return Pos(doc.first, 0) }
  var last = doc.first + doc.size - 1;
  if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
  return clipToLen(pos, getLine(doc, pos.line).text.length)
}
function clipToLen(pos, linelen) {
  var ch = pos.ch;
  if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
  else if (ch < 0) { return Pos(pos.line, 0) }
  else { return pos }
}
function clipPosArray(doc, array) {
  var out = [];
  for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
  return out
}

// Optimize some code when these features are not used.
var sawReadOnlySpans = false;
var sawCollapsedSpans = false;

function seeReadOnlySpans() {
  sawReadOnlySpans = true;
}

function seeCollapsedSpans() {
  sawCollapsedSpans = true;
}

// TEXTMARKER SPANS

function MarkedSpan(marker, from, to) {
  this.marker = marker;
  this.from = from; this.to = to;
}

// Search an array of spans for a span matching the given marker.
function getMarkedSpanFor(spans, marker) {
  if (spans) { for (var i = 0; i < spans.length; ++i) {
    var span = spans[i];
    if (span.marker == marker) { return span }
  } }
}
// Remove a span from an array, returning undefined if no spans are
// left (we don't store arrays for lines without spans).
function removeMarkedSpan(spans, span) {
  var r;
  for (var i = 0; i < spans.length; ++i)
    { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
  return r
}
// Add a span to a line.
function addMarkedSpan(line, span) {
  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
  span.marker.attachLine(line);
}

// Used for the algorithm that adjusts markers for a change in the
// document. These functions cut an array of spans at a given
// character position, returning an array of remaining chunks (or
// undefined if nothing remains).
function markedSpansBefore(old, startCh, isInsert) {
  var nw;
  if (old) { for (var i = 0; i < old.length; ++i) {
    var span = old[i], marker = span.marker;
    var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
    if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
    }
  } }
  return nw
}
function markedSpansAfter(old, endCh, isInsert) {
  var nw;
  if (old) { for (var i = 0; i < old.length; ++i) {
    var span = old[i], marker = span.marker;
    var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
    if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                            span.to == null ? null : span.to - endCh));
    }
  } }
  return nw
}

// Given a change object, compute the new set of marker spans that
// cover the line in which the change took place. Removes spans
// entirely within the change, reconnects spans belonging to the
// same marker that appear on both sides of the change, and cuts off
// spans partially within the change. Returns an array of span
// arrays with one element for each line in (after) the change.
function stretchSpansOverChange(doc, change) {
  if (change.full) { return null }
  var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
  var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
  if (!oldFirst && !oldLast) { return null }

  var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
  // Get the spans that 'stick out' on both sides
  var first = markedSpansBefore(oldFirst, startCh, isInsert);
  var last = markedSpansAfter(oldLast, endCh, isInsert);

  // Next, merge those two ends
  var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
  if (first) {
    // Fix up .to properties of first
    for (var i = 0; i < first.length; ++i) {
      var span = first[i];
      if (span.to == null) {
        var found = getMarkedSpanFor(last, span.marker);
        if (!found) { span.to = startCh; }
        else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
      }
    }
  }
  if (last) {
    // Fix up .from in last (or move them into first in case of sameLine)
    for (var i$1 = 0; i$1 < last.length; ++i$1) {
      var span$1 = last[i$1];
      if (span$1.to != null) { span$1.to += offset; }
      if (span$1.from == null) {
        var found$1 = getMarkedSpanFor(first, span$1.marker);
        if (!found$1) {
          span$1.from = offset;
          if (sameLine) { (first || (first = [])).push(span$1); }
        }
      } else {
        span$1.from += offset;
        if (sameLine) { (first || (first = [])).push(span$1); }
      }
    }
  }
  // Make sure we didn't create any zero-length spans
  if (first) { first = clearEmptySpans(first); }
  if (last && last != first) { last = clearEmptySpans(last); }

  var newMarkers = [first];
  if (!sameLine) {
    // Fill gap with whole-line-spans
    var gap = change.text.length - 2, gapMarkers;
    if (gap > 0 && first)
      { for (var i$2 = 0; i$2 < first.length; ++i$2)
        { if (first[i$2].to == null)
          { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
    for (var i$3 = 0; i$3 < gap; ++i$3)
      { newMarkers.push(gapMarkers); }
    newMarkers.push(last);
  }
  return newMarkers
}

// Remove spans that are empty and don't have a clearWhenEmpty
// option of false.
function clearEmptySpans(spans) {
  for (var i = 0; i < spans.length; ++i) {
    var span = spans[i];
    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
      { spans.splice(i--, 1); }
  }
  if (!spans.length) { return null }
  return spans
}

// Used to 'clip' out readOnly ranges when making a change.
function removeReadOnlyRanges(doc, from, to) {
  var markers = null;
  doc.iter(from.line, to.line + 1, function (line) {
    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
      var mark = line.markedSpans[i].marker;
      if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
        { (markers || (markers = [])).push(mark); }
    } }
  });
  if (!markers) { return null }
  var parts = [{from: from, to: to}];
  for (var i = 0; i < markers.length; ++i) {
    var mk = markers[i], m = mk.find(0);
    for (var j = 0; j < parts.length; ++j) {
      var p = parts[j];
      if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
      var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
        { newParts.push({from: p.from, to: m.from}); }
      if (dto > 0 || !mk.inclusiveRight && !dto)
        { newParts.push({from: m.to, to: p.to}); }
      parts.splice.apply(parts, newParts);
      j += newParts.length - 3;
    }
  }
  return parts
}

// Connect or disconnect spans from a line.
function detachMarkedSpans(line) {
  var spans = line.markedSpans;
  if (!spans) { return }
  for (var i = 0; i < spans.length; ++i)
    { spans[i].marker.detachLine(line); }
  line.markedSpans = null;
}
function attachMarkedSpans(line, spans) {
  if (!spans) { return }
  for (var i = 0; i < spans.length; ++i)
    { spans[i].marker.attachLine(line); }
  line.markedSpans = spans;
}

// Helpers used when computing which overlapping collapsed span
// counts as the larger one.
function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

// Returns a number indicating which of two overlapping collapsed
// spans is larger (and thus includes the other). Falls back to
// comparing ids when the spans cover exactly the same range.
function compareCollapsedMarkers(a, b) {
  var lenDiff = a.lines.length - b.lines.length;
  if (lenDiff != 0) { return lenDiff }
  var aPos = a.find(), bPos = b.find();
  var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
  if (fromCmp) { return -fromCmp }
  var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
  if (toCmp) { return toCmp }
  return b.id - a.id
}

// Find out whether a line ends or starts in a collapsed span. If
// so, return the marker for that span.
function collapsedSpanAtSide(line, start) {
  var sps = sawCollapsedSpans && line.markedSpans, found;
  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
    sp = sps[i];
    if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
        (!found || compareCollapsedMarkers(found, sp.marker) < 0))
      { found = sp.marker; }
  } }
  return found
}
function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

function collapsedSpanAround(line, ch) {
  var sps = sawCollapsedSpans && line.markedSpans, found;
  if (sps) { for (var i = 0; i < sps.length; ++i) {
    var sp = sps[i];
    if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
        (!found || compareCollapsedMarkers(found, sp.marker) < 0)) { found = sp.marker; }
  } }
  return found
}

// Test whether there exists a collapsed span that partially
// overlaps (covers the start or end, but not both) of a new span.
// Such overlap is not allowed.
function conflictingCollapsedRange(doc, lineNo$$1, from, to, marker) {
  var line = getLine(doc, lineNo$$1);
  var sps = sawCollapsedSpans && line.markedSpans;
  if (sps) { for (var i = 0; i < sps.length; ++i) {
    var sp = sps[i];
    if (!sp.marker.collapsed) { continue }
    var found = sp.marker.find(0);
    var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
    var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
    if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
    if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
        fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
      { return true }
  } }
}

// A visual line is a line as drawn on the screen. Folding, for
// example, can cause multiple logical lines to appear on the same
// visual line. This finds the start of the visual line that the
// given line is part of (usually that is the line itself).
function visualLine(line) {
  var merged;
  while (merged = collapsedSpanAtStart(line))
    { line = merged.find(-1, true).line; }
  return line
}

function visualLineEnd(line) {
  var merged;
  while (merged = collapsedSpanAtEnd(line))
    { line = merged.find(1, true).line; }
  return line
}

// Returns an array of logical lines that continue the visual line
// started by the argument, or undefined if there are no such lines.
function visualLineContinued(line) {
  var merged, lines;
  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line
    ;(lines || (lines = [])).push(line);
  }
  return lines
}

// Get the line number of the start of the visual line that the
// given line number is part of.
function visualLineNo(doc, lineN) {
  var line = getLine(doc, lineN), vis = visualLine(line);
  if (line == vis) { return lineN }
  return lineNo(vis)
}

// Get the line number of the start of the next visual line after
// the given line.
function visualLineEndNo(doc, lineN) {
  if (lineN > doc.lastLine()) { return lineN }
  var line = getLine(doc, lineN), merged;
  if (!lineIsHidden(doc, line)) { return lineN }
  while (merged = collapsedSpanAtEnd(line))
    { line = merged.find(1, true).line; }
  return lineNo(line) + 1
}

// Compute whether a line is hidden. Lines count as hidden when they
// are part of a visual line that starts with another line, or when
// they are entirely covered by collapsed, non-widget span.
function lineIsHidden(doc, line) {
  var sps = sawCollapsedSpans && line.markedSpans;
  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
    sp = sps[i];
    if (!sp.marker.collapsed) { continue }
    if (sp.from == null) { return true }
    if (sp.marker.widgetNode) { continue }
    if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
      { return true }
  } }
}
function lineIsHiddenInner(doc, line, span) {
  if (span.to == null) {
    var end = span.marker.find(1, true);
    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
  }
  if (span.marker.inclusiveRight && span.to == line.text.length)
    { return true }
  for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
    sp = line.markedSpans[i];
    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
        (sp.to == null || sp.to != span.from) &&
        (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
        lineIsHiddenInner(doc, line, sp)) { return true }
  }
}

// Find the height above the given line.
function heightAtLine(lineObj) {
  lineObj = visualLine(lineObj);

  var h = 0, chunk = lineObj.parent;
  for (var i = 0; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i];
    if (line == lineObj) { break }
    else { h += line.height; }
  }
  for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
    for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
      var cur = p.children[i$1];
      if (cur == chunk) { break }
      else { h += cur.height; }
    }
  }
  return h
}

// Compute the character length of a line, taking into account
// collapsed ranges (see markText) that might hide parts, and join
// other lines onto it.
function lineLength(line) {
  if (line.height == 0) { return 0 }
  var len = line.text.length, merged, cur = line;
  while (merged = collapsedSpanAtStart(cur)) {
    var found = merged.find(0, true);
    cur = found.from.line;
    len += found.from.ch - found.to.ch;
  }
  cur = line;
  while (merged = collapsedSpanAtEnd(cur)) {
    var found$1 = merged.find(0, true);
    len -= cur.text.length - found$1.from.ch;
    cur = found$1.to.line;
    len += cur.text.length - found$1.to.ch;
  }
  return len
}

// Find the longest line in the document.
function findMaxLine(cm) {
  var d = cm.display, doc = cm.doc;
  d.maxLine = getLine(doc, doc.first);
  d.maxLineLength = lineLength(d.maxLine);
  d.maxLineChanged = true;
  doc.iter(function (line) {
    var len = lineLength(line);
    if (len > d.maxLineLength) {
      d.maxLineLength = len;
      d.maxLine = line;
    }
  });
}

// BIDI HELPERS

function iterateBidiSections(order, from, to, f) {
  if (!order) { return f(from, to, "ltr", 0) }
  var found = false;
  for (var i = 0; i < order.length; ++i) {
    var part = order[i];
    if (part.from < to && part.to > from || from == to && part.to == from) {
      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
      found = true;
    }
  }
  if (!found) { f(from, to, "ltr"); }
}

var bidiOther = null;
function getBidiPartAt(order, ch, sticky) {
  var found;
  bidiOther = null;
  for (var i = 0; i < order.length; ++i) {
    var cur = order[i];
    if (cur.from < ch && cur.to > ch) { return i }
    if (cur.to == ch) {
      if (cur.from != cur.to && sticky == "before") { found = i; }
      else { bidiOther = i; }
    }
    if (cur.from == ch) {
      if (cur.from != cur.to && sticky != "before") { found = i; }
      else { bidiOther = i; }
    }
  }
  return found != null ? found : bidiOther
}

// Bidirectional ordering algorithm
// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
// that this (partially) implements.

// One-char codes used for character types:
// L (L):   Left-to-Right
// R (R):   Right-to-Left
// r (AL):  Right-to-Left Arabic
// 1 (EN):  European Number
// + (ES):  European Number Separator
// % (ET):  European Number Terminator
// n (AN):  Arabic Number
// , (CS):  Common Number Separator
// m (NSM): Non-Spacing Mark
// b (BN):  Boundary Neutral
// s (B):   Paragraph Separator
// t (S):   Segment Separator
// w (WS):  Whitespace
// N (ON):  Other Neutrals

// Returns null if characters are ordered as they appear
// (left-to-right), or an array of sections ({from, to, level}
// objects) in the order in which they occur visually.
var bidiOrdering = (function() {
  // Character types for codepoints 0 to 0xff
  var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
  // Character types for codepoints 0x600 to 0x6f9
  var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
  function charType(code) {
    if (code <= 0xf7) { return lowTypes.charAt(code) }
    else if (0x590 <= code && code <= 0x5f4) { return "R" }
    else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
    else if (0x6ee <= code && code <= 0x8ac) { return "r" }
    else if (0x2000 <= code && code <= 0x200b) { return "w" }
    else if (code == 0x200c) { return "b" }
    else { return "L" }
  }

  var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
  var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;

  function BidiSpan(level, from, to) {
    this.level = level;
    this.from = from; this.to = to;
  }

  return function(str, direction) {
    var outerType = direction == "ltr" ? "L" : "R";

    if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
    var len = str.length, types = [];
    for (var i = 0; i < len; ++i)
      { types.push(charType(str.charCodeAt(i))); }

    // W1. Examine each non-spacing mark (NSM) in the level run, and
    // change the type of the NSM to the type of the previous
    // character. If the NSM is at the start of the level run, it will
    // get the type of sor.
    for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
      var type = types[i$1];
      if (type == "m") { types[i$1] = prev; }
      else { prev = type; }
    }

    // W2. Search backwards from each instance of a European number
    // until the first strong type (R, L, AL, or sor) is found. If an
    // AL is found, change the type of the European number to Arabic
    // number.
    // W3. Change all ALs to R.
    for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
      var type$1 = types[i$2];
      if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
      else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
    }

    // W4. A single European separator between two European numbers
    // changes to a European number. A single common separator between
    // two numbers of the same type changes to that type.
    for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
      var type$2 = types[i$3];
      if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
      else if (type$2 == "," && prev$1 == types[i$3+1] &&
               (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
      prev$1 = type$2;
    }

    // W5. A sequence of European terminators adjacent to European
    // numbers changes to all European numbers.
    // W6. Otherwise, separators and terminators change to Other
    // Neutral.
    for (var i$4 = 0; i$4 < len; ++i$4) {
      var type$3 = types[i$4];
      if (type$3 == ",") { types[i$4] = "N"; }
      else if (type$3 == "%") {
        var end = (void 0);
        for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
        var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
        for (var j = i$4; j < end; ++j) { types[j] = replace; }
        i$4 = end - 1;
      }
    }

    // W7. Search backwards from each instance of a European number
    // until the first strong type (R, L, or sor) is found. If an L is
    // found, then change the type of the European number to L.
    for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
      var type$4 = types[i$5];
      if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
      else if (isStrong.test(type$4)) { cur$1 = type$4; }
    }

    // N1. A sequence of neutrals takes the direction of the
    // surrounding strong text if the text on both sides has the same
    // direction. European and Arabic numbers act as if they were R in
    // terms of their influence on neutrals. Start-of-level-run (sor)
    // and end-of-level-run (eor) are used at level run boundaries.
    // N2. Any remaining neutrals take the embedding direction.
    for (var i$6 = 0; i$6 < len; ++i$6) {
      if (isNeutral.test(types[i$6])) {
        var end$1 = (void 0);
        for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
        var before = (i$6 ? types[i$6-1] : outerType) == "L";
        var after = (end$1 < len ? types[end$1] : outerType) == "L";
        var replace$1 = before == after ? (before ? "L" : "R") : outerType;
        for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
        i$6 = end$1 - 1;
      }
    }

    // Here we depart from the documented algorithm, in order to avoid
    // building up an actual levels array. Since there are only three
    // levels (0, 1, 2) in an implementation that doesn't take
    // explicit embedding into account, we can build up the order on
    // the fly, without following the level-based algorithm.
    var order = [], m;
    for (var i$7 = 0; i$7 < len;) {
      if (countsAsLeft.test(types[i$7])) {
        var start = i$7;
        for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
        order.push(new BidiSpan(0, start, i$7));
      } else {
        var pos = i$7, at = order.length;
        for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
        for (var j$2 = pos; j$2 < i$7;) {
          if (countsAsNum.test(types[j$2])) {
            if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); }
            var nstart = j$2;
            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
            order.splice(at, 0, new BidiSpan(2, nstart, j$2));
            pos = j$2;
          } else { ++j$2; }
        }
        if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
      }
    }
    if (direction == "ltr") {
      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
        order[0].from = m[0].length;
        order.unshift(new BidiSpan(0, 0, m[0].length));
      }
      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
        lst(order).to -= m[0].length;
        order.push(new BidiSpan(0, len - m[0].length, len));
      }
    }

    return direction == "rtl" ? order.reverse() : order
  }
})();

// Get the bidi ordering for the given line (and cache it). Returns
// false for lines that are fully left-to-right, and an array of
// BidiSpan objects otherwise.
function getOrder(line, direction) {
  var order = line.order;
  if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
  return order
}

// EVENT HANDLING

// Lightweight event framework. on/off also work on DOM nodes,
// registering native DOM handlers.

var noHandlers = [];

var on = function(emitter, type, f) {
  if (emitter.addEventListener) {
    emitter.addEventListener(type, f, false);
  } else if (emitter.attachEvent) {
    emitter.attachEvent("on" + type, f);
  } else {
    var map$$1 = emitter._handlers || (emitter._handlers = {});
    map$$1[type] = (map$$1[type] || noHandlers).concat(f);
  }
};

function getHandlers(emitter, type) {
  return emitter._handlers && emitter._handlers[type] || noHandlers
}

function off(emitter, type, f) {
  if (emitter.removeEventListener) {
    emitter.removeEventListener(type, f, false);
  } else if (emitter.detachEvent) {
    emitter.detachEvent("on" + type, f);
  } else {
    var map$$1 = emitter._handlers, arr = map$$1 && map$$1[type];
    if (arr) {
      var index = indexOf(arr, f);
      if (index > -1)
        { map$$1[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
    }
  }
}

function signal(emitter, type /*, values...*/) {
  var handlers = getHandlers(emitter, type);
  if (!handlers.length) { return }
  var args = Array.prototype.slice.call(arguments, 2);
  for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
}

// The DOM events that CodeMirror handles can be overridden by
// registering a (non-DOM) handler on the editor for the event name,
// and preventDefault-ing the event in that handler.
function signalDOMEvent(cm, e, override) {
  if (typeof e == "string")
    { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
  signal(cm, override || e.type, cm, e);
  return e_defaultPrevented(e) || e.codemirrorIgnore
}

function signalCursorActivity(cm) {
  var arr = cm._handlers && cm._handlers.cursorActivity;
  if (!arr) { return }
  var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
  for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
    { set.push(arr[i]); } }
}

function hasHandler(emitter, type) {
  return getHandlers(emitter, type).length > 0
}

// Add on and off methods to a constructor's prototype, to make
// registering events on such objects more convenient.
function eventMixin(ctor) {
  ctor.prototype.on = function(type, f) {on(this, type, f);};
  ctor.prototype.off = function(type, f) {off(this, type, f);};
}

// Due to the fact that we still support jurassic IE versions, some
// compatibility wrappers are needed.

function e_preventDefault(e) {
  if (e.preventDefault) { e.preventDefault(); }
  else { e.returnValue = false; }
}
function e_stopPropagation(e) {
  if (e.stopPropagation) { e.stopPropagation(); }
  else { e.cancelBubble = true; }
}
function e_defaultPrevented(e) {
  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
}
function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}

function e_target(e) {return e.target || e.srcElement}
function e_button(e) {
  var b = e.which;
  if (b == null) {
    if (e.button & 1) { b = 1; }
    else if (e.button & 2) { b = 3; }
    else if (e.button & 4) { b = 2; }
  }
  if (mac && e.ctrlKey && b == 1) { b = 3; }
  return b
}

// Detect drag-and-drop
var dragAndDrop = function() {
  // There is *some* kind of drag-and-drop support in IE6-8, but I
  // couldn't get it to work yet.
  if (ie && ie_version < 9) { return false }
  var div = elt('div');
  return "draggable" in div || "dragDrop" in div
}();

var zwspSupported;
function zeroWidthElement(measure) {
  if (zwspSupported == null) {
    var test = elt("span", "\u200b");
    removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
    if (measure.firstChild.offsetHeight != 0)
      { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
  }
  var node = zwspSupported ? elt("span", "\u200b") :
    elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
  node.setAttribute("cm-text", "");
  return node
}

// Feature-detect IE's crummy client rect reporting for bidi text
var badBidiRects;
function hasBadBidiRects(measure) {
  if (badBidiRects != null) { return badBidiRects }
  var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
  var r0 = range(txt, 0, 1).getBoundingClientRect();
  var r1 = range(txt, 1, 2).getBoundingClientRect();
  removeChildren(measure);
  if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
  return badBidiRects = (r1.right - r0.right < 3)
}

// See if "".split is the broken IE version, if so, provide an
// alternative way to split lines.
var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
  var pos = 0, result = [], l = string.length;
  while (pos <= l) {
    var nl = string.indexOf("\n", pos);
    if (nl == -1) { nl = string.length; }
    var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
    var rt = line.indexOf("\r");
    if (rt != -1) {
      result.push(line.slice(0, rt));
      pos += rt + 1;
    } else {
      result.push(line);
      pos = nl + 1;
    }
  }
  return result
} : function (string) { return string.split(/\r\n?|\n/); };

var hasSelection = window.getSelection ? function (te) {
  try { return te.selectionStart != te.selectionEnd }
  catch(e) { return false }
} : function (te) {
  var range$$1;
  try {range$$1 = te.ownerDocument.selection.createRange();}
  catch(e) {}
  if (!range$$1 || range$$1.parentElement() != te) { return false }
  return range$$1.compareEndPoints("StartToEnd", range$$1) != 0
};

var hasCopyEvent = (function () {
  var e = elt("div");
  if ("oncopy" in e) { return true }
  e.setAttribute("oncopy", "return;");
  return typeof e.oncopy == "function"
})();

var badZoomedRects = null;
function hasBadZoomedRects(measure) {
  if (badZoomedRects != null) { return badZoomedRects }
  var node = removeChildrenAndAdd(measure, elt("span", "x"));
  var normal = node.getBoundingClientRect();
  var fromRange = range(node, 0, 1).getBoundingClientRect();
  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
}

// Known modes, by name and by MIME
var modes = {};
var mimeModes = {};

// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
function defineMode(name, mode) {
  if (arguments.length > 2)
    { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
  modes[name] = mode;
}

function defineMIME(mime, spec) {
  mimeModes[mime] = spec;
}

// Given a MIME type, a {name, ...options} config object, or a name
// string, return a mode config object.
function resolveMode(spec) {
  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
    spec = mimeModes[spec];
  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
    var found = mimeModes[spec.name];
    if (typeof found == "string") { found = {name: found}; }
    spec = createObj(found, spec);
    spec.name = found.name;
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
    return resolveMode("application/xml")
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
    return resolveMode("application/json")
  }
  if (typeof spec == "string") { return {name: spec} }
  else { return spec || {name: "null"} }
}

// Given a mode spec (anything that resolveMode accepts), find and
// initialize an actual mode object.
function getMode(options, spec) {
  spec = resolveMode(spec);
  var mfactory = modes[spec.name];
  if (!mfactory) { return getMode(options, "text/plain") }
  var modeObj = mfactory(options, spec);
  if (modeExtensions.hasOwnProperty(spec.name)) {
    var exts = modeExtensions[spec.name];
    for (var prop in exts) {
      if (!exts.hasOwnProperty(prop)) { continue }
      if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
      modeObj[prop] = exts[prop];
    }
  }
  modeObj.name = spec.name;
  if (spec.helperType) { modeObj.helperType = spec.helperType; }
  if (spec.modeProps) { for (var prop$1 in spec.modeProps)
    { modeObj[prop$1] = spec.modeProps[prop$1]; } }

  return modeObj
}

// This can be used to attach properties to mode objects from
// outside the actual mode definition.
var modeExtensions = {};
function extendMode(mode, properties) {
  var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
  copyObj(properties, exts);
}

function copyState(mode, state) {
  if (state === true) { return state }
  if (mode.copyState) { return mode.copyState(state) }
  var nstate = {};
  for (var n in state) {
    var val = state[n];
    if (val instanceof Array) { val = val.concat([]); }
    nstate[n] = val;
  }
  return nstate
}

// Given a mode and a state (for that mode), find the inner mode and
// state at the position that the state refers to.
function innerMode(mode, state) {
  var info;
  while (mode.innerMode) {
    info = mode.innerMode(state);
    if (!info || info.mode == mode) { break }
    state = info.state;
    mode = info.mode;
  }
  return info || {mode: mode, state: state}
}

function startState(mode, a1, a2) {
  return mode.startState ? mode.startState(a1, a2) : true
}

// STRING STREAM

// Fed to the mode parsers, provides helper functions to make
// parsers more succinct.

var StringStream = function(string, tabSize, lineOracle) {
  this.pos = this.start = 0;
  this.string = string;
  this.tabSize = tabSize || 8;
  this.lastColumnPos = this.lastColumnValue = 0;
  this.lineStart = 0;
  this.lineOracle = lineOracle;
};

StringStream.prototype.eol = function () {return this.pos >= this.string.length};
StringStream.prototype.sol = function () {return this.pos == this.lineStart};
StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
StringStream.prototype.next = function () {
  if (this.pos < this.string.length)
    { return this.string.charAt(this.pos++) }
};
StringStream.prototype.eat = function (match) {
  var ch = this.string.charAt(this.pos);
  var ok;
  if (typeof match == "string") { ok = ch == match; }
  else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
  if (ok) {++this.pos; return ch}
};
StringStream.prototype.eatWhile = function (match) {
  var start = this.pos;
  while (this.eat(match)){}
  return this.pos > start
};
StringStream.prototype.eatSpace = function () {
    var this$1 = this;

  var start = this.pos;
  while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this$1.pos; }
  return this.pos > start
};
StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
StringStream.prototype.skipTo = function (ch) {
  var found = this.string.indexOf(ch, this.pos);
  if (found > -1) {this.pos = found; return true}
};
StringStream.prototype.backUp = function (n) {this.pos -= n;};
StringStream.prototype.column = function () {
  if (this.lastColumnPos < this.start) {
    this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
    this.lastColumnPos = this.start;
  }
  return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
};
StringStream.prototype.indentation = function () {
  return countColumn(this.string, null, this.tabSize) -
    (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
};
StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
  if (typeof pattern == "string") {
    var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
    var substr = this.string.substr(this.pos, pattern.length);
    if (cased(substr) == cased(pattern)) {
      if (consume !== false) { this.pos += pattern.length; }
      return true
    }
  } else {
    var match = this.string.slice(this.pos).match(pattern);
    if (match && match.index > 0) { return null }
    if (match && consume !== false) { this.pos += match[0].length; }
    return match
  }
};
StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
StringStream.prototype.hideFirstChars = function (n, inner) {
  this.lineStart += n;
  try { return inner() }
  finally { this.lineStart -= n; }
};
StringStream.prototype.lookAhead = function (n) {
  var oracle = this.lineOracle;
  return oracle && oracle.lookAhead(n)
};
StringStream.prototype.baseToken = function () {
  var oracle = this.lineOracle;
  return oracle && oracle.baseToken(this.pos)
};

var SavedContext = function(state, lookAhead) {
  this.state = state;
  this.lookAhead = lookAhead;
};

var Context = function(doc, state, line, lookAhead) {
  this.state = state;
  this.doc = doc;
  this.line = line;
  this.maxLookAhead = lookAhead || 0;
  this.baseTokens = null;
  this.baseTokenPos = 1;
};

Context.prototype.lookAhead = function (n) {
  var line = this.doc.getLine(this.line + n);
  if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
  return line
};

Context.prototype.baseToken = function (n) {
    var this$1 = this;

  if (!this.baseTokens) { return null }
  while (this.baseTokens[this.baseTokenPos] <= n)
    { this$1.baseTokenPos += 2; }
  var type = this.baseTokens[this.baseTokenPos + 1];
  return {type: type && type.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - n}
};

Context.prototype.nextLine = function () {
  this.line++;
  if (this.maxLookAhead > 0) { this.maxLookAhead--; }
};

Context.fromSaved = function (doc, saved, line) {
  if (saved instanceof SavedContext)
    { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
  else
    { return new Context(doc, copyState(doc.mode, saved), line) }
};

Context.prototype.save = function (copy) {
  var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
  return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
};


// Compute a style array (an array starting with a mode generation
// -- for invalidation -- followed by pairs of end positions and
// style strings), which is used to highlight the tokens on the
// line.
function highlightLine(cm, line, context, forceToEnd) {
  // A styles array always starts with a number identifying the
  // mode/overlays that it is based on (for easy invalidation).
  var st = [cm.state.modeGen], lineClasses = {};
  // Compute the base array of styles
  runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
          lineClasses, forceToEnd);
  var state = context.state;

  // Run overlays, adjust style array.
  var loop = function ( o ) {
    context.baseTokens = st;
    var overlay = cm.state.overlays[o], i = 1, at = 0;
    context.state = true;
    runMode(cm, line.text, overlay.mode, context, function (end, style) {
      var start = i;
      // Ensure there's a token end at the current position, and that i points at it
      while (at < end) {
        var i_end = st[i];
        if (i_end > end)
          { st.splice(i, 1, end, st[i+1], i_end); }
        i += 2;
        at = Math.min(end, i_end);
      }
      if (!style) { return }
      if (overlay.opaque) {
        st.splice(start, i - start, end, "overlay " + style);
        i = start + 2;
      } else {
        for (; start < i; start += 2) {
          var cur = st[start+1];
          st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
        }
      }
    }, lineClasses);
    context.state = state;
    context.baseTokens = null;
    context.baseTokenPos = 1;
  };

  for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
}

function getLineStyles(cm, line, updateFrontier) {
  if (!line.styles || line.styles[0] != cm.state.modeGen) {
    var context = getContextBefore(cm, lineNo(line));
    var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
    var result = highlightLine(cm, line, context);
    if (resetState) { context.state = resetState; }
    line.stateAfter = context.save(!resetState);
    line.styles = result.styles;
    if (result.classes) { line.styleClasses = result.classes; }
    else if (line.styleClasses) { line.styleClasses = null; }
    if (updateFrontier === cm.doc.highlightFrontier)
      { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
  }
  return line.styles
}

function getContextBefore(cm, n, precise) {
  var doc = cm.doc, display = cm.display;
  if (!doc.mode.startState) { return new Context(doc, true, n) }
  var start = findStartLine(cm, n, precise);
  var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
  var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);

  doc.iter(start, n, function (line) {
    processLine(cm, line.text, context);
    var pos = context.line;
    line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
    context.nextLine();
  });
  if (precise) { doc.modeFrontier = context.line; }
  return context
}

// Lightweight form of highlight -- proceed over this line and
// update state, but don't save a style array. Used for lines that
// aren't currently visible.
function processLine(cm, text, context, startAt) {
  var mode = cm.doc.mode;
  var stream = new StringStream(text, cm.options.tabSize, context);
  stream.start = stream.pos = startAt || 0;
  if (text == "") { callBlankLine(mode, context.state); }
  while (!stream.eol()) {
    readToken(mode, stream, context.state);
    stream.start = stream.pos;
  }
}

function callBlankLine(mode, state) {
  if (mode.blankLine) { return mode.blankLine(state) }
  if (!mode.innerMode) { return }
  var inner = innerMode(mode, state);
  if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
}

function readToken(mode, stream, state, inner) {
  for (var i = 0; i < 10; i++) {
    if (inner) { inner[0] = innerMode(mode, state).mode; }
    var style = mode.token(stream, state);
    if (stream.pos > stream.start) { return style }
  }
  throw new Error("Mode " + mode.name + " failed to advance stream.")
}

var Token = function(stream, type, state) {
  this.start = stream.start; this.end = stream.pos;
  this.string = stream.current();
  this.type = type || null;
  this.state = state;
};

// Utility for getTokenAt and getLineTokens
function takeToken(cm, pos, precise, asArray) {
  var doc = cm.doc, mode = doc.mode, style;
  pos = clipPos(doc, pos);
  var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
  var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
  if (asArray) { tokens = []; }
  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
    stream.start = stream.pos;
    style = readToken(mode, stream, context.state);
    if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
  }
  return asArray ? tokens : new Token(stream, style, context.state)
}

function extractLineClasses(type, output) {
  if (type) { for (;;) {
    var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
    if (!lineClass) { break }
    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
    var prop = lineClass[1] ? "bgClass" : "textClass";
    if (output[prop] == null)
      { output[prop] = lineClass[2]; }
    else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
      { output[prop] += " " + lineClass[2]; }
  } }
  return type
}

// Run the given mode's parser over a line, calling f for each token.
function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
  var flattenSpans = mode.flattenSpans;
  if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
  var curStart = 0, curStyle = null;
  var stream = new StringStream(text, cm.options.tabSize, context), style;
  var inner = cm.options.addModeClass && [null];
  if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
  while (!stream.eol()) {
    if (stream.pos > cm.options.maxHighlightLength) {
      flattenSpans = false;
      if (forceToEnd) { processLine(cm, text, context, stream.pos); }
      stream.pos = text.length;
      style = null;
    } else {
      style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
    }
    if (inner) {
      var mName = inner[0].name;
      if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
    }
    if (!flattenSpans || curStyle != style) {
      while (curStart < stream.start) {
        curStart = Math.min(stream.start, curStart + 5000);
        f(curStart, curStyle);
      }
      curStyle = style;
    }
    stream.start = stream.pos;
  }
  while (curStart < stream.pos) {
    // Webkit seems to refuse to render text nodes longer than 57444
    // characters, and returns inaccurate measurements in nodes
    // starting around 5000 chars.
    var pos = Math.min(stream.pos, curStart + 5000);
    f(pos, curStyle);
    curStart = pos;
  }
}

// Finds the line to start with when starting a parse. Tries to
// find a line with a stateAfter, so that it can start with a
// valid state. If that fails, it returns the line with the
// smallest indentation, which tends to need the least context to
// parse correctly.
function findStartLine(cm, n, precise) {
  var minindent, minline, doc = cm.doc;
  var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
  for (var search = n; search > lim; --search) {
    if (search <= doc.first) { return doc.first }
    var line = getLine(doc, search - 1), after = line.stateAfter;
    if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
      { return search }
    var indented = countColumn(line.text, null, cm.options.tabSize);
    if (minline == null || minindent > indented) {
      minline = search - 1;
      minindent = indented;
    }
  }
  return minline
}

function retreatFrontier(doc, n) {
  doc.modeFrontier = Math.min(doc.modeFrontier, n);
  if (doc.highlightFrontier < n - 10) { return }
  var start = doc.first;
  for (var line = n - 1; line > start; line--) {
    var saved = getLine(doc, line).stateAfter;
    // change is on 3
    // state on line 1 looked ahead 2 -- so saw 3
    // test 1 + 2 < 3 should cover this
    if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
      start = line + 1;
      break
    }
  }
  doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
}

// LINE DATA STRUCTURE

// Line objects. These hold state related to a line, including
// highlighting info (the styles array).
var Line = function(text, markedSpans, estimateHeight) {
  this.text = text;
  attachMarkedSpans(this, markedSpans);
  this.height = estimateHeight ? estimateHeight(this) : 1;
};

Line.prototype.lineNo = function () { return lineNo(this) };
eventMixin(Line);

// Change the content (text, markers) of a line. Automatically
// invalidates cached information and tries to re-estimate the
// line's height.
function updateLine(line, text, markedSpans, estimateHeight) {
  line.text = text;
  if (line.stateAfter) { line.stateAfter = null; }
  if (line.styles) { line.styles = null; }
  if (line.order != null) { line.order = null; }
  detachMarkedSpans(line);
  attachMarkedSpans(line, markedSpans);
  var estHeight = estimateHeight ? estimateHeight(line) : 1;
  if (estHeight != line.height) { updateLineHeight(line, estHeight); }
}

// Detach a line from the document tree and its markers.
function cleanUpLine(line) {
  line.parent = null;
  detachMarkedSpans(line);
}

// Convert a style as returned by a mode (either null, or a string
// containing one or more styles) to a CSS style. This is cached,
// and also looks for line-wide styles.
var styleToClassCache = {};
var styleToClassCacheWithMode = {};
function interpretTokenStyle(style, options) {
  if (!style || /^\s*$/.test(style)) { return null }
  var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
  return cache[style] ||
    (cache[style] = style.replace(/\S+/g, "cm-$&"))
}

// Render the DOM representation of the text of a line. Also builds
// up a 'line map', which points at the DOM nodes that represent
// specific stretches of text, and is used by the measuring code.
// The returned object contains the DOM node, this map, and
// information about line-wide styles that were set by the mode.
function buildLineContent(cm, lineView) {
  // The padding-right forces the element to have a 'border', which
  // is needed on Webkit to be able to get line-level bounding
  // rectangles for it (in measureChar).
  var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
  var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
                 col: 0, pos: 0, cm: cm,
                 trailingSpace: false,
                 splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")};
  lineView.measure = {};

  // Iterate over the logical lines that make up this visual line.
  for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
    var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
    builder.pos = 0;
    builder.addToken = buildToken;
    // Optionally wire in some hacks into the token-rendering
    // algorithm, to deal with browser quirks.
    if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
      { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
    builder.map = [];
    var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
    insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
    if (line.styleClasses) {
      if (line.styleClasses.bgClass)
        { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
      if (line.styleClasses.textClass)
        { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
    }

    // Ensure at least a single node is present, for measuring.
    if (builder.map.length == 0)
      { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }

    // Store the map and a cache object for the current logical line
    if (i == 0) {
      lineView.measure.map = builder.map;
      lineView.measure.cache = {};
    } else {
      (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
    }
  }

  // See issue #2901
  if (webkit) {
    var last = builder.content.lastChild;
    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
      { builder.content.className = "cm-tab-wrap-hack"; }
  }

  signal(cm, "renderLine", cm, lineView.line, builder.pre);
  if (builder.pre.className)
    { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }

  return builder
}

function defaultSpecialCharPlaceholder(ch) {
  var token = elt("span", "\u2022", "cm-invalidchar");
  token.title = "\\u" + ch.charCodeAt(0).toString(16);
  token.setAttribute("aria-label", token.title);
  return token
}

// Build up the DOM representation for a single token, and add it to
// the line map. Takes care to render special characters separately.
function buildToken(builder, text, style, startStyle, endStyle, title, css) {
  if (!text) { return }
  var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
  var special = builder.cm.state.specialChars, mustWrap = false;
  var content;
  if (!special.test(text)) {
    builder.col += text.length;
    content = document.createTextNode(displayText);
    builder.map.push(builder.pos, builder.pos + text.length, content);
    if (ie && ie_version < 9) { mustWrap = true; }
    builder.pos += text.length;
  } else {
    content = document.createDocumentFragment();
    var pos = 0;
    while (true) {
      special.lastIndex = pos;
      var m = special.exec(text);
      var skipped = m ? m.index - pos : text.length - pos;
      if (skipped) {
        var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
        else { content.appendChild(txt); }
        builder.map.push(builder.pos, builder.pos + skipped, txt);
        builder.col += skipped;
        builder.pos += skipped;
      }
      if (!m) { break }
      pos += skipped + 1;
      var txt$1 = (void 0);
      if (m[0] == "\t") {
        var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
        txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
        txt$1.setAttribute("role", "presentation");
        txt$1.setAttribute("cm-text", "\t");
        builder.col += tabWidth;
      } else if (m[0] == "\r" || m[0] == "\n") {
        txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
        txt$1.setAttribute("cm-text", m[0]);
        builder.col += 1;
      } else {
        txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
        txt$1.setAttribute("cm-text", m[0]);
        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
        else { content.appendChild(txt$1); }
        builder.col += 1;
      }
      builder.map.push(builder.pos, builder.pos + 1, txt$1);
      builder.pos++;
    }
  }
  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
  if (style || startStyle || endStyle || mustWrap || css) {
    var fullStyle = style || "";
    if (startStyle) { fullStyle += startStyle; }
    if (endStyle) { fullStyle += endStyle; }
    var token = elt("span", [content], fullStyle, css);
    if (title) { token.title = title; }
    return builder.content.appendChild(token)
  }
  builder.content.appendChild(content);
}

function splitSpaces(text, trailingBefore) {
  if (text.length > 1 && !/  /.test(text)) { return text }
  var spaceBefore = trailingBefore, result = "";
  for (var i = 0; i < text.length; i++) {
    var ch = text.charAt(i);
    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
      { ch = "\u00a0"; }
    result += ch;
    spaceBefore = ch == " ";
  }
  return result
}

// Work around nonsense dimensions being reported for stretches of
// right-to-left text.
function buildTokenBadBidi(inner, order) {
  return function (builder, text, style, startStyle, endStyle, title, css) {
    style = style ? style + " cm-force-border" : "cm-force-border";
    var start = builder.pos, end = start + text.length;
    for (;;) {
      // Find the part that overlaps with the start of this text
      var part = (void 0);
      for (var i = 0; i < order.length; i++) {
        part = order[i];
        if (part.to > start && part.from <= start) { break }
      }
      if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, title, css) }
      inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css);
      startStyle = null;
      text = text.slice(part.to - start);
      start = part.to;
    }
  }
}

function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
  var widget = !ignoreWidget && marker.widgetNode;
  if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
    if (!widget)
      { widget = builder.content.appendChild(document.createElement("span")); }
    widget.setAttribute("cm-marker", marker.id);
  }
  if (widget) {
    builder.cm.display.input.setUneditable(widget);
    builder.content.appendChild(widget);
  }
  builder.pos += size;
  builder.trailingSpace = false;
}

// Outputs a number of spans to make up a line, taking highlighting
// and marked text into account.
function insertLineContent(line, builder, styles) {
  var spans = line.markedSpans, allText = line.text, at = 0;
  if (!spans) {
    for (var i$1 = 1; i$1 < styles.length; i$1+=2)
      { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
    return
  }

  var len = allText.length, pos = 0, i = 1, text = "", style, css;
  var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
  for (;;) {
    if (nextChange == pos) { // Update current marker set
      spanStyle = spanEndStyle = spanStartStyle = title = css = "";
      collapsed = null; nextChange = Infinity;
      var foundBookmarks = [], endStyles = (void 0);
      for (var j = 0; j < spans.length; ++j) {
        var sp = spans[j], m = sp.marker;
        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
          foundBookmarks.push(m);
        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
            nextChange = sp.to;
            spanEndStyle = "";
          }
          if (m.className) { spanStyle += " " + m.className; }
          if (m.css) { css = (css ? css + ";" : "") + m.css; }
          if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
          if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
          if (m.title && !title) { title = m.title; }
          if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
            { collapsed = sp; }
        } else if (sp.from > pos && nextChange > sp.from) {
          nextChange = sp.from;
        }
      }
      if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
        { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }

      if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
        { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
      if (collapsed && (collapsed.from || 0) == pos) {
        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                           collapsed.marker, collapsed.from == null);
        if (collapsed.to == null) { return }
        if (collapsed.to == pos) { collapsed = false; }
      }
    }
    if (pos >= len) { break }

    var upto = Math.min(len, nextChange);
    while (true) {
      if (text) {
        var end = pos + text.length;
        if (!collapsed) {
          var tokenText = end > upto ? text.slice(0, upto - pos) : text;
          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
        }
        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
        pos = end;
        spanStartStyle = "";
      }
      text = allText.slice(at, at = styles[i++]);
      style = interpretTokenStyle(styles[i++], builder.cm.options);
    }
  }
}


// These objects are used to represent the visible (currently drawn)
// part of the document. A LineView may correspond to multiple
// logical lines, if those are connected by collapsed ranges.
function LineView(doc, line, lineN) {
  // The starting line
  this.line = line;
  // Continuing lines, if any
  this.rest = visualLineContinued(line);
  // Number of logical lines in this visual line
  this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
  this.node = this.text = null;
  this.hidden = lineIsHidden(doc, line);
}

// Create a range of LineView objects for the given lines.
function buildViewArray(cm, from, to) {
  var array = [], nextPos;
  for (var pos = from; pos < to; pos = nextPos) {
    var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
    nextPos = pos + view.size;
    array.push(view);
  }
  return array
}

var operationGroup = null;

function pushOperation(op) {
  if (operationGroup) {
    operationGroup.ops.push(op);
  } else {
    op.ownsGroup = operationGroup = {
      ops: [op],
      delayedCallbacks: []
    };
  }
}

function fireCallbacksForOps(group) {
  // Calls delayed callbacks and cursorActivity handlers until no
  // new ones appear
  var callbacks = group.delayedCallbacks, i = 0;
  do {
    for (; i < callbacks.length; i++)
      { callbacks[i].call(null); }
    for (var j = 0; j < group.ops.length; j++) {
      var op = group.ops[j];
      if (op.cursorActivityHandlers)
        { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
          { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
    }
  } while (i < callbacks.length)
}

function finishOperation(op, endCb) {
  var group = op.ownsGroup;
  if (!group) { return }

  try { fireCallbacksForOps(group); }
  finally {
    operationGroup = null;
    endCb(group);
  }
}

var orphanDelayedCallbacks = null;

// Often, we want to signal events at a point where we are in the
// middle of some work, but don't want the handler to start calling
// other methods on the editor, which might be in an inconsistent
// state or simply not expect any other events to happen.
// signalLater looks whether there are any handlers, and schedules
// them to be executed when the last operation ends, or, if no
// operation is active, when a timeout fires.
function signalLater(emitter, type /*, values...*/) {
  var arr = getHandlers(emitter, type);
  if (!arr.length) { return }
  var args = Array.prototype.slice.call(arguments, 2), list;
  if (operationGroup) {
    list = operationGroup.delayedCallbacks;
  } else if (orphanDelayedCallbacks) {
    list = orphanDelayedCallbacks;
  } else {
    list = orphanDelayedCallbacks = [];
    setTimeout(fireOrphanDelayed, 0);
  }
  var loop = function ( i ) {
    list.push(function () { return arr[i].apply(null, args); });
  };

  for (var i = 0; i < arr.length; ++i)
    loop( i );
}

function fireOrphanDelayed() {
  var delayed = orphanDelayedCallbacks;
  orphanDelayedCallbacks = null;
  for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
}

// When an aspect of a line changes, a string is added to
// lineView.changes. This updates the relevant part of the line's
// DOM structure.
function updateLineForChanges(cm, lineView, lineN, dims) {
  for (var j = 0; j < lineView.changes.length; j++) {
    var type = lineView.changes[j];
    if (type == "text") { updateLineText(cm, lineView); }
    else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
    else if (type == "class") { updateLineClasses(cm, lineView); }
    else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
  }
  lineView.changes = null;
}

// Lines with gutter elements, widgets or a background class need to
// be wrapped, and have the extra elements added to the wrapper div
function ensureLineWrapped(lineView) {
  if (lineView.node == lineView.text) {
    lineView.node = elt("div", null, null, "position: relative");
    if (lineView.text.parentNode)
      { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
    lineView.node.appendChild(lineView.text);
    if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
  }
  return lineView.node
}

function updateLineBackground(cm, lineView) {
  var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
  if (cls) { cls += " CodeMirror-linebackground"; }
  if (lineView.background) {
    if (cls) { lineView.background.className = cls; }
    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
  } else if (cls) {
    var wrap = ensureLineWrapped(lineView);
    lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
    cm.display.input.setUneditable(lineView.background);
  }
}

// Wrapper around buildLineContent which will reuse the structure
// in display.externalMeasured when possible.
function getLineContent(cm, lineView) {
  var ext = cm.display.externalMeasured;
  if (ext && ext.line == lineView.line) {
    cm.display.externalMeasured = null;
    lineView.measure = ext.measure;
    return ext.built
  }
  return buildLineContent(cm, lineView)
}

// Redraw the line's text. Interacts with the background and text
// classes because the mode may output tokens that influence these
// classes.
function updateLineText(cm, lineView) {
  var cls = lineView.text.className;
  var built = getLineContent(cm, lineView);
  if (lineView.text == lineView.node) { lineView.node = built.pre; }
  lineView.text.parentNode.replaceChild(built.pre, lineView.text);
  lineView.text = built.pre;
  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
    lineView.bgClass = built.bgClass;
    lineView.textClass = built.textClass;
    updateLineClasses(cm, lineView);
  } else if (cls) {
    lineView.text.className = cls;
  }
}

function updateLineClasses(cm, lineView) {
  updateLineBackground(cm, lineView);
  if (lineView.line.wrapClass)
    { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
  else if (lineView.node != lineView.text)
    { lineView.node.className = ""; }
  var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
  lineView.text.className = textClass || "";
}

function updateLineGutter(cm, lineView, lineN, dims) {
  if (lineView.gutter) {
    lineView.node.removeChild(lineView.gutter);
    lineView.gutter = null;
  }
  if (lineView.gutterBackground) {
    lineView.node.removeChild(lineView.gutterBackground);
    lineView.gutterBackground = null;
  }
  if (lineView.line.gutterClass) {
    var wrap = ensureLineWrapped(lineView);
    lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                    ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
    cm.display.input.setUneditable(lineView.gutterBackground);
    wrap.insertBefore(lineView.gutterBackground, lineView.text);
  }
  var markers = lineView.line.gutterMarkers;
  if (cm.options.lineNumbers || markers) {
    var wrap$1 = ensureLineWrapped(lineView);
    var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
    cm.display.input.setUneditable(gutterWrap);
    wrap$1.insertBefore(gutterWrap, lineView.text);
    if (lineView.line.gutterClass)
      { gutterWrap.className += " " + lineView.line.gutterClass; }
    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
      { lineView.lineNumber = gutterWrap.appendChild(
        elt("div", lineNumberFor(cm.options, lineN),
            "CodeMirror-linenumber CodeMirror-gutter-elt",
            ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
    if (markers) { for (var k = 0; k < cm.options.gutters.length; ++k) {
      var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
      if (found)
        { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                   ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
    } }
  }
}

function updateLineWidgets(cm, lineView, dims) {
  if (lineView.alignable) { lineView.alignable = null; }
  for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
    next = node.nextSibling;
    if (node.className == "CodeMirror-linewidget")
      { lineView.node.removeChild(node); }
  }
  insertLineWidgets(cm, lineView, dims);
}

// Build a line's DOM representation from scratch
function buildLineElement(cm, lineView, lineN, dims) {
  var built = getLineContent(cm, lineView);
  lineView.text = lineView.node = built.pre;
  if (built.bgClass) { lineView.bgClass = built.bgClass; }
  if (built.textClass) { lineView.textClass = built.textClass; }

  updateLineClasses(cm, lineView);
  updateLineGutter(cm, lineView, lineN, dims);
  insertLineWidgets(cm, lineView, dims);
  return lineView.node
}

// A lineView may contain multiple logical lines (when merged by
// collapsed spans). The widgets for all of them need to be drawn.
function insertLineWidgets(cm, lineView, dims) {
  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
  if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
    { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
}

function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
  if (!line.widgets) { return }
  var wrap = ensureLineWrapped(lineView);
  for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
    var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
    if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
    positionLineWidget(widget, node, lineView, dims);
    cm.display.input.setUneditable(node);
    if (allowAbove && widget.above)
      { wrap.insertBefore(node, lineView.gutter || lineView.text); }
    else
      { wrap.appendChild(node); }
    signalLater(widget, "redraw");
  }
}

function positionLineWidget(widget, node, lineView, dims) {
  if (widget.noHScroll) {
    (lineView.alignable || (lineView.alignable = [])).push(node);
    var width = dims.wrapperWidth;
    node.style.left = dims.fixedPos + "px";
    if (!widget.coverGutter) {
      width -= dims.gutterTotalWidth;
      node.style.paddingLeft = dims.gutterTotalWidth + "px";
    }
    node.style.width = width + "px";
  }
  if (widget.coverGutter) {
    node.style.zIndex = 5;
    node.style.position = "relative";
    if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
  }
}

function widgetHeight(widget) {
  if (widget.height != null) { return widget.height }
  var cm = widget.doc.cm;
  if (!cm) { return 0 }
  if (!contains(document.body, widget.node)) {
    var parentStyle = "position: relative;";
    if (widget.coverGutter)
      { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
    if (widget.noHScroll)
      { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
    removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
  }
  return widget.height = widget.node.parentNode.offsetHeight
}

// Return true when the given mouse event happened in a widget
function eventInWidget(display, e) {
  for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
    if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
        (n.parentNode == display.sizer && n != display.mover))
      { return true }
  }
}

// POSITION MEASUREMENT

function paddingTop(display) {return display.lineSpace.offsetTop}
function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
function paddingH(display) {
  if (display.cachedPaddingH) { return display.cachedPaddingH }
  var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
  var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
  var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
  if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
  return data
}

function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
function displayWidth(cm) {
  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
}
function displayHeight(cm) {
  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
}

// Ensure the lineView.wrapping.heights array is populated. This is
// an array of bottom offsets for the lines that make up a drawn
// line. When lineWrapping is on, there might be more than one
// height.
function ensureLineHeights(cm, lineView, rect) {
  var wrapping = cm.options.lineWrapping;
  var curWidth = wrapping && displayWidth(cm);
  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
    var heights = lineView.measure.heights = [];
    if (wrapping) {
      lineView.measure.width = curWidth;
      var rects = lineView.text.firstChild.getClientRects();
      for (var i = 0; i < rects.length - 1; i++) {
        var cur = rects[i], next = rects[i + 1];
        if (Math.abs(cur.bottom - next.bottom) > 2)
          { heights.push((cur.bottom + next.top) / 2 - rect.top); }
      }
    }
    heights.push(rect.bottom - rect.top);
  }
}

// Find a line map (mapping character offsets to text nodes) and a
// measurement cache for the given line number. (A line view might
// contain multiple lines when collapsed ranges are present.)
function mapFromLineView(lineView, line, lineN) {
  if (lineView.line == line)
    { return {map: lineView.measure.map, cache: lineView.measure.cache} }
  for (var i = 0; i < lineView.rest.length; i++)
    { if (lineView.rest[i] == line)
      { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
  for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
    { if (lineNo(lineView.rest[i$1]) > lineN)
      { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
}

// Render a line into the hidden node display.externalMeasured. Used
// when measurement is needed for a line that's not in the viewport.
function updateExternalMeasurement(cm, line) {
  line = visualLine(line);
  var lineN = lineNo(line);
  var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
  view.lineN = lineN;
  var built = view.built = buildLineContent(cm, view);
  view.text = built.pre;
  removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
  return view
}

// Get a {top, bottom, left, right} box (in line-local coordinates)
// for a given character.
function measureChar(cm, line, ch, bias) {
  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
}

// Find a line view that corresponds to the given line number.
function findViewForLine(cm, lineN) {
  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
    { return cm.display.view[findViewIndex(cm, lineN)] }
  var ext = cm.display.externalMeasured;
  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
    { return ext }
}

// Measurement can be split in two steps, the set-up work that
// applies to the whole line, and the measurement of the actual
// character. Functions like coordsChar, that need to do a lot of
// measurements in a row, can thus ensure that the set-up work is
// only done once.
function prepareMeasureForLine(cm, line) {
  var lineN = lineNo(line);
  var view = findViewForLine(cm, lineN);
  if (view && !view.text) {
    view = null;
  } else if (view && view.changes) {
    updateLineForChanges(cm, view, lineN, getDimensions(cm));
    cm.curOp.forceUpdate = true;
  }
  if (!view)
    { view = updateExternalMeasurement(cm, line); }

  var info = mapFromLineView(view, line, lineN);
  return {
    line: line, view: view, rect: null,
    map: info.map, cache: info.cache, before: info.before,
    hasHeights: false
  }
}

// Given a prepared measurement object, measures the position of an
// actual character (or fetches it from the cache).
function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
  if (prepared.before) { ch = -1; }
  var key = ch + (bias || ""), found;
  if (prepared.cache.hasOwnProperty(key)) {
    found = prepared.cache[key];
  } else {
    if (!prepared.rect)
      { prepared.rect = prepared.view.text.getBoundingClientRect(); }
    if (!prepared.hasHeights) {
      ensureLineHeights(cm, prepared.view, prepared.rect);
      prepared.hasHeights = true;
    }
    found = measureCharInner(cm, prepared, ch, bias);
    if (!found.bogus) { prepared.cache[key] = found; }
  }
  return {left: found.left, right: found.right,
          top: varHeight ? found.rtop : found.top,
          bottom: varHeight ? found.rbottom : found.bottom}
}

var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

function nodeAndOffsetInLineMap(map$$1, ch, bias) {
  var node, start, end, collapse, mStart, mEnd;
  // First, search the line map for the text node corresponding to,
  // or closest to, the target character.
  for (var i = 0; i < map$$1.length; i += 3) {
    mStart = map$$1[i];
    mEnd = map$$1[i + 1];
    if (ch < mStart) {
      start = 0; end = 1;
      collapse = "left";
    } else if (ch < mEnd) {
      start = ch - mStart;
      end = start + 1;
    } else if (i == map$$1.length - 3 || ch == mEnd && map$$1[i + 3] > ch) {
      end = mEnd - mStart;
      start = end - 1;
      if (ch >= mEnd) { collapse = "right"; }
    }
    if (start != null) {
      node = map$$1[i + 2];
      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
        { collapse = bias; }
      if (bias == "left" && start == 0)
        { while (i && map$$1[i - 2] == map$$1[i - 3] && map$$1[i - 1].insertLeft) {
          node = map$$1[(i -= 3) + 2];
          collapse = "left";
        } }
      if (bias == "right" && start == mEnd - mStart)
        { while (i < map$$1.length - 3 && map$$1[i + 3] == map$$1[i + 4] && !map$$1[i + 5].insertLeft) {
          node = map$$1[(i += 3) + 2];
          collapse = "right";
        } }
      break
    }
  }
  return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
}

function getUsefulRect(rects, bias) {
  var rect = nullRect;
  if (bias == "left") { for (var i = 0; i < rects.length; i++) {
    if ((rect = rects[i]).left != rect.right) { break }
  } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
    if ((rect = rects[i$1]).left != rect.right) { break }
  } }
  return rect
}

function measureCharInner(cm, prepared, ch, bias) {
  var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
  var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

  var rect;
  if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
    for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
      while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
      while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
      if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
        { rect = node.parentNode.getBoundingClientRect(); }
      else
        { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
      if (rect.left || rect.right || start == 0) { break }
      end = start;
      start = start - 1;
      collapse = "right";
    }
    if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
  } else { // If it is a widget, simply get the box for the whole widget.
    if (start > 0) { collapse = bias = "right"; }
    var rects;
    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
      { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
    else
      { rect = node.getBoundingClientRect(); }
  }
  if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
    var rSpan = node.parentNode.getClientRects()[0];
    if (rSpan)
      { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
    else
      { rect = nullRect; }
  }

  var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
  var mid = (rtop + rbot) / 2;
  var heights = prepared.view.measure.heights;
  var i = 0;
  for (; i < heights.length - 1; i++)
    { if (mid < heights[i]) { break } }
  var top = i ? heights[i - 1] : 0, bot = heights[i];
  var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                top: top, bottom: bot};
  if (!rect.left && !rect.right) { result.bogus = true; }
  if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

  return result
}

// Work around problem with bounding client rects on ranges being
// returned incorrectly when zoomed on IE10 and below.
function maybeUpdateRectForZooming(measure, rect) {
  if (!window.screen || screen.logicalXDPI == null ||
      screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
    { return rect }
  var scaleX = screen.logicalXDPI / screen.deviceXDPI;
  var scaleY = screen.logicalYDPI / screen.deviceYDPI;
  return {left: rect.left * scaleX, right: rect.right * scaleX,
          top: rect.top * scaleY, bottom: rect.bottom * scaleY}
}

function clearLineMeasurementCacheFor(lineView) {
  if (lineView.measure) {
    lineView.measure.cache = {};
    lineView.measure.heights = null;
    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
      { lineView.measure.caches[i] = {}; } }
  }
}

function clearLineMeasurementCache(cm) {
  cm.display.externalMeasure = null;
  removeChildren(cm.display.lineMeasure);
  for (var i = 0; i < cm.display.view.length; i++)
    { clearLineMeasurementCacheFor(cm.display.view[i]); }
}

function clearCaches(cm) {
  clearLineMeasurementCache(cm);
  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
  if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
  cm.display.lineNumChars = null;
}

function pageScrollX() {
  // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
  // which causes page_Offset and bounding client rects to use
  // different reference viewports and invalidate our calculations.
  if (chrome && android) { return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) }
  return window.pageXOffset || (document.documentElement || document.body).scrollLeft
}
function pageScrollY() {
  if (chrome && android) { return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) }
  return window.pageYOffset || (document.documentElement || document.body).scrollTop
}

function widgetTopHeight(lineObj) {
  var height = 0;
  if (lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above)
    { height += widgetHeight(lineObj.widgets[i]); } } }
  return height
}

// Converts a {top, bottom, left, right} box from line-local
// coordinates into another coordinate system. Context may be one of
// "line", "div" (display.lineDiv), "local"./null (editor), "window",
// or "page".
function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
  if (!includeWidgets) {
    var height = widgetTopHeight(lineObj);
    rect.top += height; rect.bottom += height;
  }
  if (context == "line") { return rect }
  if (!context) { context = "local"; }
  var yOff = heightAtLine(lineObj);
  if (context == "local") { yOff += paddingTop(cm.display); }
  else { yOff -= cm.display.viewOffset; }
  if (context == "page" || context == "window") {
    var lOff = cm.display.lineSpace.getBoundingClientRect();
    yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
    var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
    rect.left += xOff; rect.right += xOff;
  }
  rect.top += yOff; rect.bottom += yOff;
  return rect
}

// Coverts a box from "div" coords to another coordinate system.
// Context may be "window", "page", "div", or "local"./null.
function fromCoordSystem(cm, coords, context) {
  if (context == "div") { return coords }
  var left = coords.left, top = coords.top;
  // First move into "page" coordinate system
  if (context == "page") {
    left -= pageScrollX();
    top -= pageScrollY();
  } else if (context == "local" || !context) {
    var localBox = cm.display.sizer.getBoundingClientRect();
    left += localBox.left;
    top += localBox.top;
  }

  var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
  return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
}

function charCoords(cm, pos, context, lineObj, bias) {
  if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
}

// Returns a box for a given cursor position, which may have an
// 'other' property containing the position of the secondary cursor
// on a bidi boundary.
// A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
// and after `char - 1` in writing order of `char - 1`
// A cursor Pos(line, char, "after") is on the same visual line as `char`
// and before `char` in writing order of `char`
// Examples (upper-case letters are RTL, lower-case are LTR):
//     Pos(0, 1, ...)
//     before   after
// ab     a|b     a|b
// aB     a|B     aB|
// Ab     |Ab     A|b
// AB     B|A     B|A
// Every position after the last character on a line is considered to stick
// to the last character on the line.
function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
  lineObj = lineObj || getLine(cm.doc, pos.line);
  if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
  function get(ch, right) {
    var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
    if (right) { m.left = m.right; } else { m.right = m.left; }
    return intoCoordSystem(cm, lineObj, m, context)
  }
  var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
  if (ch >= lineObj.text.length) {
    ch = lineObj.text.length;
    sticky = "before";
  } else if (ch <= 0) {
    ch = 0;
    sticky = "after";
  }
  if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

  function getBidi(ch, partPos, invert) {
    var part = order[partPos], right = part.level == 1;
    return get(invert ? ch - 1 : ch, right != invert)
  }
  var partPos = getBidiPartAt(order, ch, sticky);
  var other = bidiOther;
  var val = getBidi(ch, partPos, sticky == "before");
  if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
  return val
}

// Used to cheaply estimate the coordinates for a position. Used for
// intermediate scroll updates.
function estimateCoords(cm, pos) {
  var left = 0;
  pos = clipPos(cm.doc, pos);
  if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
  var lineObj = getLine(cm.doc, pos.line);
  var top = heightAtLine(lineObj) + paddingTop(cm.display);
  return {left: left, right: left, top: top, bottom: top + lineObj.height}
}

// Positions returned by coordsChar contain some extra information.
// xRel is the relative x position of the input coordinates compared
// to the found position (so xRel > 0 means the coordinates are to
// the right of the character position, for example). When outside
// is true, that means the coordinates lie outside the line's
// vertical range.
function PosWithInfo(line, ch, sticky, outside, xRel) {
  var pos = Pos(line, ch, sticky);
  pos.xRel = xRel;
  if (outside) { pos.outside = true; }
  return pos
}

// Compute the character position closest to the given coordinates.
// Input must be lineSpace-local ("div" coordinate system).
function coordsChar(cm, x, y) {
  var doc = cm.doc;
  y += cm.display.viewOffset;
  if (y < 0) { return PosWithInfo(doc.first, 0, null, true, -1) }
  var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
  if (lineN > last)
    { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, true, 1) }
  if (x < 0) { x = 0; }

  var lineObj = getLine(doc, lineN);
  for (;;) {
    var found = coordsCharInner(cm, lineObj, lineN, x, y);
    var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 ? 1 : 0));
    if (!collapsed) { return found }
    var rangeEnd = collapsed.find(1);
    if (rangeEnd.line == lineN) { return rangeEnd }
    lineObj = getLine(doc, lineN = rangeEnd.line);
  }
}

function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
  y -= widgetTopHeight(lineObj);
  var end = lineObj.text.length;
  var begin = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y; }, end, 0);
  end = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch).top > y; }, begin, end);
  return {begin: begin, end: end}
}

function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
  if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
  var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
  return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
}

// Returns true if the given side of a box is after the given
// coordinates, in top-to-bottom, left-to-right order.
function boxIsAfter(box, x, y, left) {
  return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
}

function coordsCharInner(cm, lineObj, lineNo$$1, x, y) {
  // Move y into line-local coordinate space
  y -= heightAtLine(lineObj);
  var preparedMeasure = prepareMeasureForLine(cm, lineObj);
  // When directly calling `measureCharPrepared`, we have to adjust
  // for the widgets at this line.
  var widgetHeight$$1 = widgetTopHeight(lineObj);
  var begin = 0, end = lineObj.text.length, ltr = true;

  var order = getOrder(lineObj, cm.doc.direction);
  // If the line isn't plain left-to-right text, first figure out
  // which bidi section the coordinates fall into.
  if (order) {
    var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
                 (cm, lineObj, lineNo$$1, preparedMeasure, order, x, y);
    ltr = part.level != 1;
    // The awkward -1 offsets are needed because findFirst (called
    // on these below) will treat its first bound as inclusive,
    // second as exclusive, but we want to actually address the
    // characters in the part's range
    begin = ltr ? part.from : part.to - 1;
    end = ltr ? part.to : part.from - 1;
  }

  // A binary search to find the first character whose bounding box
  // starts after the coordinates. If we run across any whose box wrap
  // the coordinates, store that.
  var chAround = null, boxAround = null;
  var ch = findFirst(function (ch) {
    var box = measureCharPrepared(cm, preparedMeasure, ch);
    box.top += widgetHeight$$1; box.bottom += widgetHeight$$1;
    if (!boxIsAfter(box, x, y, false)) { return false }
    if (box.top <= y && box.left <= x) {
      chAround = ch;
      boxAround = box;
    }
    return true
  }, begin, end);

  var baseX, sticky, outside = false;
  // If a box around the coordinates was found, use that
  if (boxAround) {
    // Distinguish coordinates nearer to the left or right side of the box
    var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
    ch = chAround + (atStart ? 0 : 1);
    sticky = atStart ? "after" : "before";
    baseX = atLeft ? boxAround.left : boxAround.right;
  } else {
    // (Adjust for extended bound, if necessary.)
    if (!ltr && (ch == end || ch == begin)) { ch++; }
    // To determine which side to associate with, get the box to the
    // left of the character and compare it's vertical position to the
    // coordinates
    sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
      (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight$$1 <= y) == ltr ?
      "after" : "before";
    // Now get accurate coordinates for this place, in order to get a
    // base X position
    var coords = cursorCoords(cm, Pos(lineNo$$1, ch, sticky), "line", lineObj, preparedMeasure);
    baseX = coords.left;
    outside = y < coords.top || y >= coords.bottom;
  }

  ch = skipExtendingChars(lineObj.text, ch, 1);
  return PosWithInfo(lineNo$$1, ch, sticky, outside, x - baseX)
}

function coordsBidiPart(cm, lineObj, lineNo$$1, preparedMeasure, order, x, y) {
  // Bidi parts are sorted left-to-right, and in a non-line-wrapping
  // situation, we can take this ordering to correspond to the visual
  // ordering. This finds the first part whose end is after the given
  // coordinates.
  var index = findFirst(function (i) {
    var part = order[i], ltr = part.level != 1;
    return boxIsAfter(cursorCoords(cm, Pos(lineNo$$1, ltr ? part.to : part.from, ltr ? "before" : "after"),
                                   "line", lineObj, preparedMeasure), x, y, true)
  }, 0, order.length - 1);
  var part = order[index];
  // If this isn't the first part, the part's start is also after
  // the coordinates, and the coordinates aren't on the same line as
  // that start, move one part back.
  if (index > 0) {
    var ltr = part.level != 1;
    var start = cursorCoords(cm, Pos(lineNo$$1, ltr ? part.from : part.to, ltr ? "after" : "before"),
                             "line", lineObj, preparedMeasure);
    if (boxIsAfter(start, x, y, true) && start.top > y)
      { part = order[index - 1]; }
  }
  return part
}

function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
  // In a wrapped line, rtl text on wrapping boundaries can do things
  // that don't correspond to the ordering in our `order` array at
  // all, so a binary search doesn't work, and we want to return a
  // part that only spans one line so that the binary search in
  // coordsCharInner is safe. As such, we first find the extent of the
  // wrapped line, and then do a flat search in which we discard any
  // spans that aren't on the line.
  var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
  var begin = ref.begin;
  var end = ref.end;
  if (/\s/.test(lineObj.text.charAt(end - 1))) { end--; }
  var part = null, closestDist = null;
  for (var i = 0; i < order.length; i++) {
    var p = order[i];
    if (p.from >= end || p.to <= begin) { continue }
    var ltr = p.level != 1;
    var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
    // Weigh against spans ending before this, so that they are only
    // picked if nothing ends after
    var dist = endX < x ? x - endX + 1e9 : endX - x;
    if (!part || closestDist > dist) {
      part = p;
      closestDist = dist;
    }
  }
  if (!part) { part = order[order.length - 1]; }
  // Clip the part to the wrapped line.
  if (part.from < begin) { part = {from: begin, to: part.to, level: part.level}; }
  if (part.to > end) { part = {from: part.from, to: end, level: part.level}; }
  return part
}

var measureText;
// Compute the default text height.
function textHeight(display) {
  if (display.cachedTextHeight != null) { return display.cachedTextHeight }
  if (measureText == null) {
    measureText = elt("pre");
    // Measure a bunch of lines, for browsers that compute
    // fractional heights.
    for (var i = 0; i < 49; ++i) {
      measureText.appendChild(document.createTextNode("x"));
      measureText.appendChild(elt("br"));
    }
    measureText.appendChild(document.createTextNode("x"));
  }
  removeChildrenAndAdd(display.measure, measureText);
  var height = measureText.offsetHeight / 50;
  if (height > 3) { display.cachedTextHeight = height; }
  removeChildren(display.measure);
  return height || 1
}

// Compute the default character width.
function charWidth(display) {
  if (display.cachedCharWidth != null) { return display.cachedCharWidth }
  var anchor = elt("span", "xxxxxxxxxx");
  var pre = elt("pre", [anchor]);
  removeChildrenAndAdd(display.measure, pre);
  var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
  if (width > 2) { display.cachedCharWidth = width; }
  return width || 10
}

// Do a bulk-read of the DOM positions and sizes needed to draw the
// view, so that we don't interleave reading and writing to the DOM.
function getDimensions(cm) {
  var d = cm.display, left = {}, width = {};
  var gutterLeft = d.gutters.clientLeft;
  for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
    left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
    width[cm.options.gutters[i]] = n.clientWidth;
  }
  return {fixedPos: compensateForHScroll(d),
          gutterTotalWidth: d.gutters.offsetWidth,
          gutterLeft: left,
          gutterWidth: width,
          wrapperWidth: d.wrapper.clientWidth}
}

// Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
// but using getBoundingClientRect to get a sub-pixel-accurate
// result.
function compensateForHScroll(display) {
  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
}

// Returns a function that estimates the height of a line, to use as
// first approximation until the line becomes visible (and is thus
// properly measurable).
function estimateHeight(cm) {
  var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
  var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
  return function (line) {
    if (lineIsHidden(cm.doc, line)) { return 0 }

    var widgetsHeight = 0;
    if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
      if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
    } }

    if (wrapping)
      { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
    else
      { return widgetsHeight + th }
  }
}

function estimateLineHeights(cm) {
  var doc = cm.doc, est = estimateHeight(cm);
  doc.iter(function (line) {
    var estHeight = est(line);
    if (estHeight != line.height) { updateLineHeight(line, estHeight); }
  });
}

// Given a mouse event, find the corresponding position. If liberal
// is false, it checks whether a gutter or scrollbar was clicked,
// and returns null if it was. forRect is used by rectangular
// selections, and tries to estimate a character position even for
// coordinates beyond the right of the text.
function posFromMouse(cm, e, liberal, forRect) {
  var display = cm.display;
  if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

  var x, y, space = display.lineSpace.getBoundingClientRect();
  // Fails unpredictably on IE[67] when mouse is dragged around quickly.
  try { x = e.clientX - space.left; y = e.clientY - space.top; }
  catch (e) { return null }
  var coords = coordsChar(cm, x, y), line;
  if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
    var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
    coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
  }
  return coords
}

// Find the view element corresponding to a given line. Return null
// when the line isn't visible.
function findViewIndex(cm, n) {
  if (n >= cm.display.viewTo) { return null }
  n -= cm.display.viewFrom;
  if (n < 0) { return null }
  var view = cm.display.view;
  for (var i = 0; i < view.length; i++) {
    n -= view[i].size;
    if (n < 0) { return i }
  }
}

function updateSelection(cm) {
  cm.display.input.showSelection(cm.display.input.prepareSelection());
}

function prepareSelection(cm, primary) {
  if ( primary === void 0 ) primary = true;

  var doc = cm.doc, result = {};
  var curFragment = result.cursors = document.createDocumentFragment();
  var selFragment = result.selection = document.createDocumentFragment();

  for (var i = 0; i < doc.sel.ranges.length; i++) {
    if (!primary && i == doc.sel.primIndex) { continue }
    var range$$1 = doc.sel.ranges[i];
    if (range$$1.from().line >= cm.display.viewTo || range$$1.to().line < cm.display.viewFrom) { continue }
    var collapsed = range$$1.empty();
    if (collapsed || cm.options.showCursorWhenSelecting)
      { drawSelectionCursor(cm, range$$1.head, curFragment); }
    if (!collapsed)
      { drawSelectionRange(cm, range$$1, selFragment); }
  }
  return result
}

// Draws a cursor for the given range
function drawSelectionCursor(cm, head, output) {
  var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

  var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
  cursor.style.left = pos.left + "px";
  cursor.style.top = pos.top + "px";
  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

  if (pos.other) {
    // Secondary cursor, shown when on a 'jump' in bi-directional text
    var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
    otherCursor.style.display = "";
    otherCursor.style.left = pos.other.left + "px";
    otherCursor.style.top = pos.other.top + "px";
    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
  }
}

function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

// Draws the given range as a highlighted selection
function drawSelectionRange(cm, range$$1, output) {
  var display = cm.display, doc = cm.doc;
  var fragment = document.createDocumentFragment();
  var padding = paddingH(cm.display), leftSide = padding.left;
  var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
  var docLTR = doc.direction == "ltr";

  function add(left, top, width, bottom) {
    if (top < 0) { top = 0; }
    top = Math.round(top);
    bottom = Math.round(bottom);
    fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
  }

  function drawForLine(line, fromArg, toArg) {
    var lineObj = getLine(doc, line);
    var lineLen = lineObj.text.length;
    var start, end;
    function coords(ch, bias) {
      return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
    }

    function wrapX(pos, dir, side) {
      var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
      var prop = (dir == "ltr") == (side == "after") ? "left" : "right";
      var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
      return coords(ch, prop)[prop]
    }

    var order = getOrder(lineObj, doc.direction);
    iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
      var ltr = dir == "ltr";
      var fromPos = coords(from, ltr ? "left" : "right");
      var toPos = coords(to - 1, ltr ? "right" : "left");

      var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
      var first = i == 0, last = !order || i == order.length - 1;
      if (toPos.top - fromPos.top <= 3) { // Single line
        var openLeft = (docLTR ? openStart : openEnd) && first;
        var openRight = (docLTR ? openEnd : openStart) && last;
        var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
        var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
        add(left, fromPos.top, right - left, fromPos.bottom);
      } else { // Multiple lines
        var topLeft, topRight, botLeft, botRight;
        if (ltr) {
          topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
          topRight = docLTR ? rightSide : wrapX(from, dir, "before");
          botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
          botRight = docLTR && openEnd && last ? rightSide : toPos.right;
        } else {
          topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
          topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
          botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
          botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
        }
        add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
        if (fromPos.bottom < toPos.top) { add(leftSide, fromPos.bottom, null, toPos.top); }
        add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
      }

      if (!start || cmpCoords(fromPos, start) < 0) { start = fromPos; }
      if (cmpCoords(toPos, start) < 0) { start = toPos; }
      if (!end || cmpCoords(fromPos, end) < 0) { end = fromPos; }
      if (cmpCoords(toPos, end) < 0) { end = toPos; }
    });
    return {start: start, end: end}
  }

  var sFrom = range$$1.from(), sTo = range$$1.to();
  if (sFrom.line == sTo.line) {
    drawForLine(sFrom.line, sFrom.ch, sTo.ch);
  } else {
    var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
    var singleVLine = visualLine(fromLine) == visualLine(toLine);
    var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
    var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
    if (singleVLine) {
      if (leftEnd.top < rightStart.top - 2) {
        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
      } else {
        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
      }
    }
    if (leftEnd.bottom < rightStart.top)
      { add(leftSide, leftEnd.bottom, null, rightStart.top); }
  }

  output.appendChild(fragment);
}

// Cursor-blinking
function restartBlink(cm) {
  if (!cm.state.focused) { return }
  var display = cm.display;
  clearInterval(display.blinker);
  var on = true;
  display.cursorDiv.style.visibility = "";
  if (cm.options.cursorBlinkRate > 0)
    { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
      cm.options.cursorBlinkRate); }
  else if (cm.options.cursorBlinkRate < 0)
    { display.cursorDiv.style.visibility = "hidden"; }
}

function ensureFocus(cm) {
  if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
}

function delayBlurEvent(cm) {
  cm.state.delayingBlurEvent = true;
  setTimeout(function () { if (cm.state.delayingBlurEvent) {
    cm.state.delayingBlurEvent = false;
    onBlur(cm);
  } }, 100);
}

function onFocus(cm, e) {
  if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false; }

  if (cm.options.readOnly == "nocursor") { return }
  if (!cm.state.focused) {
    signal(cm, "focus", cm, e);
    cm.state.focused = true;
    addClass(cm.display.wrapper, "CodeMirror-focused");
    // This test prevents this from firing when a context
    // menu is closed (since the input reset would kill the
    // select-all detection hack)
    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
      cm.display.input.reset();
      if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
    }
    cm.display.input.receivedFocus();
  }
  restartBlink(cm);
}
function onBlur(cm, e) {
  if (cm.state.delayingBlurEvent) { return }

  if (cm.state.focused) {
    signal(cm, "blur", cm, e);
    cm.state.focused = false;
    rmClass(cm.display.wrapper, "CodeMirror-focused");
  }
  clearInterval(cm.display.blinker);
  setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
}

// Read the actual heights of the rendered lines, and update their
// stored heights to match.
function updateHeightsInViewport(cm) {
  var display = cm.display;
  var prevBottom = display.lineDiv.offsetTop;
  for (var i = 0; i < display.view.length; i++) {
    var cur = display.view[i], height = (void 0);
    if (cur.hidden) { continue }
    if (ie && ie_version < 8) {
      var bot = cur.node.offsetTop + cur.node.offsetHeight;
      height = bot - prevBottom;
      prevBottom = bot;
    } else {
      var box = cur.node.getBoundingClientRect();
      height = box.bottom - box.top;
    }
    var diff = cur.line.height - height;
    if (height < 2) { height = textHeight(display); }
    if (diff > .005 || diff < -.005) {
      updateLineHeight(cur.line, height);
      updateWidgetHeight(cur.line);
      if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
        { updateWidgetHeight(cur.rest[j]); } }
    }
  }
}

// Read and store the height of line widgets associated with the
// given line.
function updateWidgetHeight(line) {
  if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i) {
    var w = line.widgets[i], parent = w.node.parentNode;
    if (parent) { w.height = parent.offsetHeight; }
  } }
}

// Compute the lines that are visible in a given viewport (defaults
// the the current scroll position). viewport may contain top,
// height, and ensure (see op.scrollToPos) properties.
function visibleLines(display, doc, viewport) {
  var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
  top = Math.floor(top - paddingTop(display));
  var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

  var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
  // forces those lines into the viewport (if possible).
  if (viewport && viewport.ensure) {
    var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
    if (ensureFrom < from) {
      from = ensureFrom;
      to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
      from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
      to = ensureTo;
    }
  }
  return {from: from, to: Math.max(to, from + 1)}
}

// Re-align line numbers and gutter marks to compensate for
// horizontal scrolling.
function alignHorizontally(cm) {
  var display = cm.display, view = display.view;
  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
  var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
  var gutterW = display.gutters.offsetWidth, left = comp + "px";
  for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
    if (cm.options.fixedGutter) {
      if (view[i].gutter)
        { view[i].gutter.style.left = left; }
      if (view[i].gutterBackground)
        { view[i].gutterBackground.style.left = left; }
    }
    var align = view[i].alignable;
    if (align) { for (var j = 0; j < align.length; j++)
      { align[j].style.left = left; } }
  } }
  if (cm.options.fixedGutter)
    { display.gutters.style.left = (comp + gutterW) + "px"; }
}

// Used to ensure that the line number gutter is still the right
// size for the current document size. Returns true when an update
// is needed.
function maybeUpdateLineNumberWidth(cm) {
  if (!cm.options.lineNumbers) { return false }
  var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
  if (last.length != display.lineNumChars) {
    var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                               "CodeMirror-linenumber CodeMirror-gutter-elt"));
    var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
    display.lineGutter.style.width = "";
    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
    display.lineNumWidth = display.lineNumInnerWidth + padding;
    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
    display.lineGutter.style.width = display.lineNumWidth + "px";
    updateGutterSpace(cm);
    return true
  }
  return false
}

// SCROLLING THINGS INTO VIEW

// If an editor sits on the top or bottom of the window, partially
// scrolled out of view, this ensures that the cursor is visible.
function maybeScrollWindow(cm, rect) {
  if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

  var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
  if (rect.top + box.top < 0) { doScroll = true; }
  else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false; }
  if (doScroll != null && !phantom) {
    var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
    cm.display.lineSpace.appendChild(scrollNode);
    scrollNode.scrollIntoView(doScroll);
    cm.display.lineSpace.removeChild(scrollNode);
  }
}

// Scroll a given position into view (immediately), verifying that
// it actually became visible (as line heights are accurately
// measured, the position of something may 'drift' during drawing).
function scrollPosIntoView(cm, pos, end, margin) {
  if (margin == null) { margin = 0; }
  var rect;
  if (!cm.options.lineWrapping && pos == end) {
    // Set pos and end to the cursor positions around the character pos sticks to
    // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
    // If pos == Pos(_, 0, "before"), pos and end are unchanged
    pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
    end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
  }
  for (var limit = 0; limit < 5; limit++) {
    var changed = false;
    var coords = cursorCoords(cm, pos);
    var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
    rect = {left: Math.min(coords.left, endCoords.left),
            top: Math.min(coords.top, endCoords.top) - margin,
            right: Math.max(coords.left, endCoords.left),
            bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
    var scrollPos = calculateScrollPos(cm, rect);
    var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
    if (scrollPos.scrollTop != null) {
      updateScrollTop(cm, scrollPos.scrollTop);
      if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
    }
    if (scrollPos.scrollLeft != null) {
      setScrollLeft(cm, scrollPos.scrollLeft);
      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
    }
    if (!changed) { break }
  }
  return rect
}

// Scroll a given set of coordinates into view (immediately).
function scrollIntoView(cm, rect) {
  var scrollPos = calculateScrollPos(cm, rect);
  if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
  if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
}

// Calculate a new scroll position needed to scroll the given
// rectangle into view. Returns an object with scrollTop and
// scrollLeft properties. When these are undefined, the
// vertical/horizontal position does not need to be adjusted.
function calculateScrollPos(cm, rect) {
  var display = cm.display, snapMargin = textHeight(cm.display);
  if (rect.top < 0) { rect.top = 0; }
  var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
  var screen = displayHeight(cm), result = {};
  if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
  var docBottom = cm.doc.height + paddingVert(display);
  var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
  if (rect.top < screentop) {
    result.scrollTop = atTop ? 0 : rect.top;
  } else if (rect.bottom > screentop + screen) {
    var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
    if (newTop != screentop) { result.scrollTop = newTop; }
  }

  var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
  var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
  var tooWide = rect.right - rect.left > screenw;
  if (tooWide) { rect.right = rect.left + screenw; }
  if (rect.left < 10)
    { result.scrollLeft = 0; }
  else if (rect.left < screenleft)
    { result.scrollLeft = Math.max(0, rect.left - (tooWide ? 0 : 10)); }
  else if (rect.right > screenw + screenleft - 3)
    { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
  return result
}

// Store a relative adjustment to the scroll position in the current
// operation (to be applied when the operation finishes).
function addToScrollTop(cm, top) {
  if (top == null) { return }
  resolveScrollToPos(cm);
  cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
}

// Make sure that at the end of the operation the current cursor is
// shown.
function ensureCursorVisible(cm) {
  resolveScrollToPos(cm);
  var cur = cm.getCursor();
  cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
}

function scrollToCoords(cm, x, y) {
  if (x != null || y != null) { resolveScrollToPos(cm); }
  if (x != null) { cm.curOp.scrollLeft = x; }
  if (y != null) { cm.curOp.scrollTop = y; }
}

function scrollToRange(cm, range$$1) {
  resolveScrollToPos(cm);
  cm.curOp.scrollToPos = range$$1;
}

// When an operation has its scrollToPos property set, and another
// scroll action is applied before the end of the operation, this
// 'simulates' scrolling that position into view in a cheap way, so
// that the effect of intermediate scroll commands is not ignored.
function resolveScrollToPos(cm) {
  var range$$1 = cm.curOp.scrollToPos;
  if (range$$1) {
    cm.curOp.scrollToPos = null;
    var from = estimateCoords(cm, range$$1.from), to = estimateCoords(cm, range$$1.to);
    scrollToCoordsRange(cm, from, to, range$$1.margin);
  }
}

function scrollToCoordsRange(cm, from, to, margin) {
  var sPos = calculateScrollPos(cm, {
    left: Math.min(from.left, to.left),
    top: Math.min(from.top, to.top) - margin,
    right: Math.max(from.right, to.right),
    bottom: Math.max(from.bottom, to.bottom) + margin
  });
  scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
}

// Sync the scrollable area and scrollbars, ensure the viewport
// covers the visible area.
function updateScrollTop(cm, val) {
  if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
  if (!gecko) { updateDisplaySimple(cm, {top: val}); }
  setScrollTop(cm, val, true);
  if (gecko) { updateDisplaySimple(cm); }
  startWorker(cm, 100);
}

function setScrollTop(cm, val, forceScroll) {
  val = Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val);
  if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
  cm.doc.scrollTop = val;
  cm.display.scrollbars.setScrollTop(val);
  if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
}

// Sync scroller and scrollbar, ensure the gutter elements are
// aligned.
function setScrollLeft(cm, val, isScroller, forceScroll) {
  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
  if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
  cm.doc.scrollLeft = val;
  alignHorizontally(cm);
  if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
  cm.display.scrollbars.setScrollLeft(val);
}

// SCROLLBARS

// Prepare DOM reads needed to update the scrollbars. Done in one
// shot to minimize update/measure roundtrips.
function measureForScrollbars(cm) {
  var d = cm.display, gutterW = d.gutters.offsetWidth;
  var docH = Math.round(cm.doc.height + paddingVert(cm.display));
  return {
    clientHeight: d.scroller.clientHeight,
    viewHeight: d.wrapper.clientHeight,
    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
    viewWidth: d.wrapper.clientWidth,
    barLeft: cm.options.fixedGutter ? gutterW : 0,
    docHeight: docH,
    scrollHeight: docH + scrollGap(cm) + d.barHeight,
    nativeBarWidth: d.nativeBarWidth,
    gutterWidth: gutterW
  }
}

var NativeScrollbars = function(place, scroll, cm) {
  this.cm = cm;
  var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
  var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
  vert.tabIndex = horiz.tabIndex = -1;
  place(vert); place(horiz);

  on(vert, "scroll", function () {
    if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
  });
  on(horiz, "scroll", function () {
    if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
  });

  this.checkedZeroWidth = false;
  // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
  if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
};

NativeScrollbars.prototype.update = function (measure) {
  var needsH = measure.scrollWidth > measure.clientWidth + 1;
  var needsV = measure.scrollHeight > measure.clientHeight + 1;
  var sWidth = measure.nativeBarWidth;

  if (needsV) {
    this.vert.style.display = "block";
    this.vert.style.bottom = needsH ? sWidth + "px" : "0";
    var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
    // A bug in IE8 can cause this value to be negative, so guard it.
    this.vert.firstChild.style.height =
      Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
  } else {
    this.vert.style.display = "";
    this.vert.firstChild.style.height = "0";
  }

  if (needsH) {
    this.horiz.style.display = "block";
    this.horiz.style.right = needsV ? sWidth + "px" : "0";
    this.horiz.style.left = measure.barLeft + "px";
    var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
    this.horiz.firstChild.style.width =
      Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
  } else {
    this.horiz.style.display = "";
    this.horiz.firstChild.style.width = "0";
  }

  if (!this.checkedZeroWidth && measure.clientHeight > 0) {
    if (sWidth == 0) { this.zeroWidthHack(); }
    this.checkedZeroWidth = true;
  }

  return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
};

NativeScrollbars.prototype.setScrollLeft = function (pos) {
  if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
  if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
};

NativeScrollbars.prototype.setScrollTop = function (pos) {
  if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
  if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
};

NativeScrollbars.prototype.zeroWidthHack = function () {
  var w = mac && !mac_geMountainLion ? "12px" : "18px";
  this.horiz.style.height = this.vert.style.width = w;
  this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
  this.disableHoriz = new Delayed;
  this.disableVert = new Delayed;
};

NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
  bar.style.pointerEvents = "auto";
  function maybeDisable() {
    // To find out whether the scrollbar is still visible, we
    // check whether the element under the pixel in the bottom
    // right corner of the scrollbar box is the scrollbar box
    // itself (when the bar is still visible) or its filler child
    // (when the bar is hidden). If it is still visible, we keep
    // it enabled, if it's hidden, we disable pointer events.
    var box = bar.getBoundingClientRect();
    var elt$$1 = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
        : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
    if (elt$$1 != bar) { bar.style.pointerEvents = "none"; }
    else { delay.set(1000, maybeDisable); }
  }
  delay.set(1000, maybeDisable);
};

NativeScrollbars.prototype.clear = function () {
  var parent = this.horiz.parentNode;
  parent.removeChild(this.horiz);
  parent.removeChild(this.vert);
};

var NullScrollbars = function () {};

NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
NullScrollbars.prototype.setScrollLeft = function () {};
NullScrollbars.prototype.setScrollTop = function () {};
NullScrollbars.prototype.clear = function () {};

function updateScrollbars(cm, measure) {
  if (!measure) { measure = measureForScrollbars(cm); }
  var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
  updateScrollbarsInner(cm, measure);
  for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
      { updateHeightsInViewport(cm); }
    updateScrollbarsInner(cm, measureForScrollbars(cm));
    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
  }
}

// Re-synchronize the fake scrollbars with the actual size of the
// content.
function updateScrollbarsInner(cm, measure) {
  var d = cm.display;
  var sizes = d.scrollbars.update(measure);

  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

  if (sizes.right && sizes.bottom) {
    d.scrollbarFiller.style.display = "block";
    d.scrollbarFiller.style.height = sizes.bottom + "px";
    d.scrollbarFiller.style.width = sizes.right + "px";
  } else { d.scrollbarFiller.style.display = ""; }
  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
    d.gutterFiller.style.display = "block";
    d.gutterFiller.style.height = sizes.bottom + "px";
    d.gutterFiller.style.width = measure.gutterWidth + "px";
  } else { d.gutterFiller.style.display = ""; }
}

var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

function initScrollbars(cm) {
  if (cm.display.scrollbars) {
    cm.display.scrollbars.clear();
    if (cm.display.scrollbars.addClass)
      { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
  }

  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
    // Prevent clicks in the scrollbars from killing focus
    on(node, "mousedown", function () {
      if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
    });
    node.setAttribute("cm-not-content", "true");
  }, function (pos, axis) {
    if (axis == "horizontal") { setScrollLeft(cm, pos); }
    else { updateScrollTop(cm, pos); }
  }, cm);
  if (cm.display.scrollbars.addClass)
    { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
}

// Operations are used to wrap a series of changes to the editor
// state in such a way that each change won't have to update the
// cursor and display (which would be awkward, slow, and
// error-prone). Instead, display updates are batched and then all
// combined and executed at once.

var nextOpId = 0;
// Start a new operation.
function startOperation(cm) {
  cm.curOp = {
    cm: cm,
    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
    startHeight: cm.doc.height, // Used to detect need to update scrollbar
    forceUpdate: false,      // Used to force a redraw
    updateInput: null,       // Whether to reset the input textarea
    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
    changeObjs: null,        // Accumulated changes, for firing change events
    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
    selectionChanged: false, // Whether the selection needs to be redrawn
    updateMaxLine: false,    // Set when the widest line needs to be determined anew
    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
    scrollToPos: null,       // Used to scroll to a specific position
    focus: false,
    id: ++nextOpId           // Unique ID
  };
  pushOperation(cm.curOp);
}

// Finish an operation, updating the display and signalling delayed events
function endOperation(cm) {
  var op = cm.curOp;
  finishOperation(op, function (group) {
    for (var i = 0; i < group.ops.length; i++)
      { group.ops[i].cm.curOp = null; }
    endOperations(group);
  });
}

// The DOM updates done when an operation finishes are batched so
// that the minimum number of relayouts are required.
function endOperations(group) {
  var ops = group.ops;
  for (var i = 0; i < ops.length; i++) // Read DOM
    { endOperation_R1(ops[i]); }
  for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
    { endOperation_W1(ops[i$1]); }
  for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
    { endOperation_R2(ops[i$2]); }
  for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
    { endOperation_W2(ops[i$3]); }
  for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
    { endOperation_finish(ops[i$4]); }
}

function endOperation_R1(op) {
  var cm = op.cm, display = cm.display;
  maybeClipScrollbars(cm);
  if (op.updateMaxLine) { findMaxLine(cm); }

  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                       op.scrollToPos.to.line >= display.viewTo) ||
    display.maxLineChanged && cm.options.lineWrapping;
  op.update = op.mustUpdate &&
    new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
}

function endOperation_W1(op) {
  op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
}

function endOperation_R2(op) {
  var cm = op.cm, display = cm.display;
  if (op.updatedDisplay) { updateHeightsInViewport(cm); }

  op.barMeasure = measureForScrollbars(cm);

  // If the max line changed since it was last measured, measure it,
  // and ensure the document's width matches it.
  // updateDisplay_W2 will use these properties to do the actual resizing
  if (display.maxLineChanged && !cm.options.lineWrapping) {
    op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
    cm.display.sizerWidth = op.adjustWidthTo;
    op.barMeasure.scrollWidth =
      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
  }

  if (op.updatedDisplay || op.selectionChanged)
    { op.preparedSelection = display.input.prepareSelection(); }
}

function endOperation_W2(op) {
  var cm = op.cm;

  if (op.adjustWidthTo != null) {
    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
    if (op.maxScrollLeft < cm.doc.scrollLeft)
      { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
    cm.display.maxLineChanged = false;
  }

  var takeFocus = op.focus && op.focus == activeElt();
  if (op.preparedSelection)
    { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
  if (op.updatedDisplay || op.startHeight != cm.doc.height)
    { updateScrollbars(cm, op.barMeasure); }
  if (op.updatedDisplay)
    { setDocumentHeight(cm, op.barMeasure); }

  if (op.selectionChanged) { restartBlink(cm); }

  if (cm.state.focused && op.updateInput)
    { cm.display.input.reset(op.typing); }
  if (takeFocus) { ensureFocus(op.cm); }
}

function endOperation_finish(op) {
  var cm = op.cm, display = cm.display, doc = cm.doc;

  if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }

  // Abort mouse wheel delta measurement, when scrolling explicitly
  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
    { display.wheelStartX = display.wheelStartY = null; }

  // Propagate the scroll position to the actual DOM scroller
  if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }

  if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
  // If we need to scroll a specific position into view, do so.
  if (op.scrollToPos) {
    var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                 clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
    maybeScrollWindow(cm, rect);
  }

  // Fire events for markers that are hidden/unidden by editing or
  // undoing
  var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
  if (hidden) { for (var i = 0; i < hidden.length; ++i)
    { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
  if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
    { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }

  if (display.wrapper.offsetHeight)
    { doc.scrollTop = cm.display.scroller.scrollTop; }

  // Fire change events, and delayed event handlers
  if (op.changeObjs)
    { signal(cm, "changes", cm, op.changeObjs); }
  if (op.update)
    { op.update.finish(); }
}

// Run the given function in an operation
function runInOp(cm, f) {
  if (cm.curOp) { return f() }
  startOperation(cm);
  try { return f() }
  finally { endOperation(cm); }
}
// Wraps a function in an operation. Returns the wrapped function.
function operation(cm, f) {
  return function() {
    if (cm.curOp) { return f.apply(cm, arguments) }
    startOperation(cm);
    try { return f.apply(cm, arguments) }
    finally { endOperation(cm); }
  }
}
// Used to add methods to editor and doc instances, wrapping them in
// operations.
function methodOp(f) {
  return function() {
    if (this.curOp) { return f.apply(this, arguments) }
    startOperation(this);
    try { return f.apply(this, arguments) }
    finally { endOperation(this); }
  }
}
function docMethodOp(f) {
  return function() {
    var cm = this.cm;
    if (!cm || cm.curOp) { return f.apply(this, arguments) }
    startOperation(cm);
    try { return f.apply(this, arguments) }
    finally { endOperation(cm); }
  }
}

// Updates the display.view data structure for a given change to the
// document. From and to are in pre-change coordinates. Lendiff is
// the amount of lines added or subtracted by the change. This is
// used for changes that span multiple lines, or change the way
// lines are divided into visual lines. regLineChange (below)
// registers single-line changes.
function regChange(cm, from, to, lendiff) {
  if (from == null) { from = cm.doc.first; }
  if (to == null) { to = cm.doc.first + cm.doc.size; }
  if (!lendiff) { lendiff = 0; }

  var display = cm.display;
  if (lendiff && to < display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers > from))
    { display.updateLineNumbers = from; }

  cm.curOp.viewChanged = true;

  if (from >= display.viewTo) { // Change after
    if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
      { resetView(cm); }
  } else if (to <= display.viewFrom) { // Change before
    if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
      resetView(cm);
    } else {
      display.viewFrom += lendiff;
      display.viewTo += lendiff;
    }
  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
    resetView(cm);
  } else if (from <= display.viewFrom) { // Top overlap
    var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
    if (cut) {
      display.view = display.view.slice(cut.index);
      display.viewFrom = cut.lineN;
      display.viewTo += lendiff;
    } else {
      resetView(cm);
    }
  } else if (to >= display.viewTo) { // Bottom overlap
    var cut$1 = viewCuttingPoint(cm, from, from, -1);
    if (cut$1) {
      display.view = display.view.slice(0, cut$1.index);
      display.viewTo = cut$1.lineN;
    } else {
      resetView(cm);
    }
  } else { // Gap in the middle
    var cutTop = viewCuttingPoint(cm, from, from, -1);
    var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
    if (cutTop && cutBot) {
      display.view = display.view.slice(0, cutTop.index)
        .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
        .concat(display.view.slice(cutBot.index));
      display.viewTo += lendiff;
    } else {
      resetView(cm);
    }
  }

  var ext = display.externalMeasured;
  if (ext) {
    if (to < ext.lineN)
      { ext.lineN += lendiff; }
    else if (from < ext.lineN + ext.size)
      { display.externalMeasured = null; }
  }
}

// Register a change to a single line. Type must be one of "text",
// "gutter", "class", "widget"
function regLineChange(cm, line, type) {
  cm.curOp.viewChanged = true;
  var display = cm.display, ext = cm.display.externalMeasured;
  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
    { display.externalMeasured = null; }

  if (line < display.viewFrom || line >= display.viewTo) { return }
  var lineView = display.view[findViewIndex(cm, line)];
  if (lineView.node == null) { return }
  var arr = lineView.changes || (lineView.changes = []);
  if (indexOf(arr, type) == -1) { arr.push(type); }
}

// Clear the view.
function resetView(cm) {
  cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
  cm.display.view = [];
  cm.display.viewOffset = 0;
}

function viewCuttingPoint(cm, oldN, newN, dir) {
  var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
  if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
    { return {index: index, lineN: newN} }
  var n = cm.display.viewFrom;
  for (var i = 0; i < index; i++)
    { n += view[i].size; }
  if (n != oldN) {
    if (dir > 0) {
      if (index == view.length - 1) { return null }
      diff = (n + view[index].size) - oldN;
      index++;
    } else {
      diff = n - oldN;
    }
    oldN += diff; newN += diff;
  }
  while (visualLineNo(cm.doc, newN) != newN) {
    if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
    newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
    index += dir;
  }
  return {index: index, lineN: newN}
}

// Force the view to cover a given range, adding empty view element
// or clipping off existing ones as needed.
function adjustView(cm, from, to) {
  var display = cm.display, view = display.view;
  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
    display.view = buildViewArray(cm, from, to);
    display.viewFrom = from;
  } else {
    if (display.viewFrom > from)
      { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
    else if (display.viewFrom < from)
      { display.view = display.view.slice(findViewIndex(cm, from)); }
    display.viewFrom = from;
    if (display.viewTo < to)
      { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
    else if (display.viewTo > to)
      { display.view = display.view.slice(0, findViewIndex(cm, to)); }
  }
  display.viewTo = to;
}

// Count the number of lines in the view whose DOM representation is
// out of date (or nonexistent).
function countDirtyView(cm) {
  var view = cm.display.view, dirty = 0;
  for (var i = 0; i < view.length; i++) {
    var lineView = view[i];
    if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
  }
  return dirty
}

// HIGHLIGHT WORKER

function startWorker(cm, time) {
  if (cm.doc.highlightFrontier < cm.display.viewTo)
    { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
}

function highlightWorker(cm) {
  var doc = cm.doc;
  if (doc.highlightFrontier >= cm.display.viewTo) { return }
  var end = +new Date + cm.options.workTime;
  var context = getContextBefore(cm, doc.highlightFrontier);
  var changedLines = [];

  doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
    if (context.line >= cm.display.viewFrom) { // Visible
      var oldStyles = line.styles;
      var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
      var highlighted = highlightLine(cm, line, context, true);
      if (resetState) { context.state = resetState; }
      line.styles = highlighted.styles;
      var oldCls = line.styleClasses, newCls = highlighted.classes;
      if (newCls) { line.styleClasses = newCls; }
      else if (oldCls) { line.styleClasses = null; }
      var ischange = !oldStyles || oldStyles.length != line.styles.length ||
        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
      for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
      if (ischange) { changedLines.push(context.line); }
      line.stateAfter = context.save();
      context.nextLine();
    } else {
      if (line.text.length <= cm.options.maxHighlightLength)
        { processLine(cm, line.text, context); }
      line.stateAfter = context.line % 5 == 0 ? context.save() : null;
      context.nextLine();
    }
    if (+new Date > end) {
      startWorker(cm, cm.options.workDelay);
      return true
    }
  });
  doc.highlightFrontier = context.line;
  doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
  if (changedLines.length) { runInOp(cm, function () {
    for (var i = 0; i < changedLines.length; i++)
      { regLineChange(cm, changedLines[i], "text"); }
  }); }
}

// DISPLAY DRAWING

var DisplayUpdate = function(cm, viewport, force) {
  var display = cm.display;

  this.viewport = viewport;
  // Store some values that we'll need later (but don't want to force a relayout for)
  this.visible = visibleLines(display, cm.doc, viewport);
  this.editorIsHidden = !display.wrapper.offsetWidth;
  this.wrapperHeight = display.wrapper.clientHeight;
  this.wrapperWidth = display.wrapper.clientWidth;
  this.oldDisplayWidth = displayWidth(cm);
  this.force = force;
  this.dims = getDimensions(cm);
  this.events = [];
};

DisplayUpdate.prototype.signal = function (emitter, type) {
  if (hasHandler(emitter, type))
    { this.events.push(arguments); }
};
DisplayUpdate.prototype.finish = function () {
    var this$1 = this;

  for (var i = 0; i < this.events.length; i++)
    { signal.apply(null, this$1.events[i]); }
};

function maybeClipScrollbars(cm) {
  var display = cm.display;
  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
    display.heightForcer.style.height = scrollGap(cm) + "px";
    display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
    display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
    display.scrollbarsClipped = true;
  }
}

function selectionSnapshot(cm) {
  if (cm.hasFocus()) { return null }
  var active = activeElt();
  if (!active || !contains(cm.display.lineDiv, active)) { return null }
  var result = {activeElt: active};
  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
      result.anchorNode = sel.anchorNode;
      result.anchorOffset = sel.anchorOffset;
      result.focusNode = sel.focusNode;
      result.focusOffset = sel.focusOffset;
    }
  }
  return result
}

function restoreSelection(snapshot) {
  if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) { return }
  snapshot.activeElt.focus();
  if (snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
    var sel = window.getSelection(), range$$1 = document.createRange();
    range$$1.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
    range$$1.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range$$1);
    sel.extend(snapshot.focusNode, snapshot.focusOffset);
  }
}

// Does the actual updating of the line display. Bails out
// (returning false) when there is nothing to be done and forced is
// false.
function updateDisplayIfNeeded(cm, update) {
  var display = cm.display, doc = cm.doc;

  if (update.editorIsHidden) {
    resetView(cm);
    return false
  }

  // Bail out if the visible area is already rendered and nothing changed.
  if (!update.force &&
      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
      display.renderedView == display.view && countDirtyView(cm) == 0)
    { return false }

  if (maybeUpdateLineNumberWidth(cm)) {
    resetView(cm);
    update.dims = getDimensions(cm);
  }

  // Compute a suitable new viewport (from & to)
  var end = doc.first + doc.size;
  var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
  var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
  if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
  if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
  if (sawCollapsedSpans) {
    from = visualLineNo(cm.doc, from);
    to = visualLineEndNo(cm.doc, to);
  }

  var different = from != display.viewFrom || to != display.viewTo ||
    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
  adjustView(cm, from, to);

  display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
  // Position the mover div to align with the current scroll position
  cm.display.mover.style.top = display.viewOffset + "px";

  var toUpdate = countDirtyView(cm);
  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
    { return false }

  // For big changes, we hide the enclosing element during the
  // update, since that speeds up the operations on most browsers.
  var selSnapshot = selectionSnapshot(cm);
  if (toUpdate > 4) { display.lineDiv.style.display = "none"; }
  patchDisplay(cm, display.updateLineNumbers, update.dims);
  if (toUpdate > 4) { display.lineDiv.style.display = ""; }
  display.renderedView = display.view;
  // There might have been a widget with a focused element that got
  // hidden or updated, if so re-focus it.
  restoreSelection(selSnapshot);

  // Prevent selection and cursors from interfering with the scroll
  // width and height.
  removeChildren(display.cursorDiv);
  removeChildren(display.selectionDiv);
  display.gutters.style.height = display.sizer.style.minHeight = 0;

  if (different) {
    display.lastWrapHeight = update.wrapperHeight;
    display.lastWrapWidth = update.wrapperWidth;
    startWorker(cm, 400);
  }

  display.updateLineNumbers = null;

  return true
}

function postUpdateDisplay(cm, update) {
  var viewport = update.viewport;

  for (var first = true;; first = false) {
    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
      // Clip forced viewport to actual scrollable area.
      if (viewport && viewport.top != null)
        { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)}; }
      // Updated line heights might result in the drawn area not
      // actually covering the viewport. Keep looping until it does.
      update.visible = visibleLines(cm.display, cm.doc, viewport);
      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
        { break }
    }
    if (!updateDisplayIfNeeded(cm, update)) { break }
    updateHeightsInViewport(cm);
    var barMeasure = measureForScrollbars(cm);
    updateSelection(cm);
    updateScrollbars(cm, barMeasure);
    setDocumentHeight(cm, barMeasure);
    update.force = false;
  }

  update.signal(cm, "update", cm);
  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
  }
}

function updateDisplaySimple(cm, viewport) {
  var update = new DisplayUpdate(cm, viewport);
  if (updateDisplayIfNeeded(cm, update)) {
    updateHeightsInViewport(cm);
    postUpdateDisplay(cm, update);
    var barMeasure = measureForScrollbars(cm);
    updateSelection(cm);
    updateScrollbars(cm, barMeasure);
    setDocumentHeight(cm, barMeasure);
    update.finish();
  }
}

// Sync the actual display DOM structure with display.view, removing
// nodes for lines that are no longer in view, and creating the ones
// that are not there yet, and updating the ones that are out of
// date.
function patchDisplay(cm, updateNumbersFrom, dims) {
  var display = cm.display, lineNumbers = cm.options.lineNumbers;
  var container = display.lineDiv, cur = container.firstChild;

  function rm(node) {
    var next = node.nextSibling;
    // Works around a throw-scroll bug in OS X Webkit
    if (webkit && mac && cm.display.currentWheelTarget == node)
      { node.style.display = "none"; }
    else
      { node.parentNode.removeChild(node); }
    return next
  }

  var view = display.view, lineN = display.viewFrom;
  // Loop over the elements in the view, syncing cur (the DOM nodes
  // in display.lineDiv) with the view as we go.
  for (var i = 0; i < view.length; i++) {
    var lineView = view[i];
    if (lineView.hidden) {
    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
      var node = buildLineElement(cm, lineView, lineN, dims);
      container.insertBefore(node, cur);
    } else { // Already drawn
      while (cur != lineView.node) { cur = rm(cur); }
      var updateNumber = lineNumbers && updateNumbersFrom != null &&
        updateNumbersFrom <= lineN && lineView.lineNumber;
      if (lineView.changes) {
        if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false; }
        updateLineForChanges(cm, lineView, lineN, dims);
      }
      if (updateNumber) {
        removeChildren(lineView.lineNumber);
        lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
      }
      cur = lineView.node.nextSibling;
    }
    lineN += lineView.size;
  }
  while (cur) { cur = rm(cur); }
}

function updateGutterSpace(cm) {
  var width = cm.display.gutters.offsetWidth;
  cm.display.sizer.style.marginLeft = width + "px";
}

function setDocumentHeight(cm, measure) {
  cm.display.sizer.style.minHeight = measure.docHeight + "px";
  cm.display.heightForcer.style.top = measure.docHeight + "px";
  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
}

// Rebuild the gutter elements, ensure the margin to the left of the
// code matches their width.
function updateGutters(cm) {
  var gutters = cm.display.gutters, specs = cm.options.gutters;
  removeChildren(gutters);
  var i = 0;
  for (; i < specs.length; ++i) {
    var gutterClass = specs[i];
    var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
    if (gutterClass == "CodeMirror-linenumbers") {
      cm.display.lineGutter = gElt;
      gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
    }
  }
  gutters.style.display = i ? "" : "none";
  updateGutterSpace(cm);
}

// Make sure the gutters options contains the element
// "CodeMirror-linenumbers" when the lineNumbers option is true.
function setGuttersForLineNumbers(options) {
  var found = indexOf(options.gutters, "CodeMirror-linenumbers");
  if (found == -1 && options.lineNumbers) {
    options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
  } else if (found > -1 && !options.lineNumbers) {
    options.gutters = options.gutters.slice(0);
    options.gutters.splice(found, 1);
  }
}

// Since the delta values reported on mouse wheel events are
// unstandardized between browsers and even browser versions, and
// generally horribly unpredictable, this code starts by measuring
// the scroll effect that the first few mouse wheel events have,
// and, from that, detects the way it can convert deltas to pixel
// offsets afterwards.
//
// The reason we want to know the amount a wheel event will scroll
// is that it gives us a chance to update the display before the
// actual scrolling happens, reducing flickering.

var wheelSamples = 0;
var wheelPixelsPerUnit = null;
// Fill in a browser-detected starting value on browsers where we
// know one. These don't have to be accurate -- the result of them
// being wrong would just be a slight flicker on the first wheel
// scroll (if it is large enough).
if (ie) { wheelPixelsPerUnit = -.53; }
else if (gecko) { wheelPixelsPerUnit = 15; }
else if (chrome) { wheelPixelsPerUnit = -.7; }
else if (safari) { wheelPixelsPerUnit = -1/3; }

function wheelEventDelta(e) {
  var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail; }
  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail; }
  else if (dy == null) { dy = e.wheelDelta; }
  return {x: dx, y: dy}
}
function wheelEventPixels(e) {
  var delta = wheelEventDelta(e);
  delta.x *= wheelPixelsPerUnit;
  delta.y *= wheelPixelsPerUnit;
  return delta
}

function onScrollWheel(cm, e) {
  var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

  var display = cm.display, scroll = display.scroller;
  // Quit if there's nothing to scroll here
  var canScrollX = scroll.scrollWidth > scroll.clientWidth;
  var canScrollY = scroll.scrollHeight > scroll.clientHeight;
  if (!(dx && canScrollX || dy && canScrollY)) { return }

  // Webkit browsers on OS X abort momentum scrolls when the target
  // of the scroll event is removed from the scrollable element.
  // This hack (see related code in patchDisplay) makes sure the
  // element is kept around.
  if (dy && mac && webkit) {
    outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
      for (var i = 0; i < view.length; i++) {
        if (view[i].node == cur) {
          cm.display.currentWheelTarget = cur;
          break outer
        }
      }
    }
  }

  // On some browsers, horizontal scrolling will cause redraws to
  // happen before the gutter has been realigned, causing it to
  // wriggle around in a most unseemly way. When we have an
  // estimated pixels/delta value, we just handle horizontal
  // scrolling entirely here. It'll be slightly off from native, but
  // better than glitching out.
  if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
    if (dy && canScrollY)
      { updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * wheelPixelsPerUnit)); }
    setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * wheelPixelsPerUnit));
    // Only prevent default scrolling if vertical scrolling is
    // actually possible. Otherwise, it causes vertical scroll
    // jitter on OSX trackpads when deltaX is small and deltaY
    // is large (issue #3579)
    if (!dy || (dy && canScrollY))
      { e_preventDefault(e); }
    display.wheelStartX = null; // Abort measurement, if in progress
    return
  }

  // 'Project' the visible viewport to cover the area that is being
  // scrolled into view (if we know enough to estimate it).
  if (dy && wheelPixelsPerUnit != null) {
    var pixels = dy * wheelPixelsPerUnit;
    var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
    if (pixels < 0) { top = Math.max(0, top + pixels - 50); }
    else { bot = Math.min(cm.doc.height, bot + pixels + 50); }
    updateDisplaySimple(cm, {top: top, bottom: bot});
  }

  if (wheelSamples < 20) {
    if (display.wheelStartX == null) {
      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
      display.wheelDX = dx; display.wheelDY = dy;
      setTimeout(function () {
        if (display.wheelStartX == null) { return }
        var movedX = scroll.scrollLeft - display.wheelStartX;
        var movedY = scroll.scrollTop - display.wheelStartY;
        var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
          (movedX && display.wheelDX && movedX / display.wheelDX);
        display.wheelStartX = display.wheelStartY = null;
        if (!sample) { return }
        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
        ++wheelSamples;
      }, 200);
    } else {
      display.wheelDX += dx; display.wheelDY += dy;
    }
  }
}

// Selection objects are immutable. A new one is created every time
// the selection changes. A selection is one or more non-overlapping
// (and non-touching) ranges, sorted, and an integer that indicates
// which one is the primary selection (the one that's scrolled into
// view, that getCursor returns, etc).
var Selection = function(ranges, primIndex) {
  this.ranges = ranges;
  this.primIndex = primIndex;
};

Selection.prototype.primary = function () { return this.ranges[this.primIndex] };

Selection.prototype.equals = function (other) {
    var this$1 = this;

  if (other == this) { return true }
  if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
  for (var i = 0; i < this.ranges.length; i++) {
    var here = this$1.ranges[i], there = other.ranges[i];
    if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
  }
  return true
};

Selection.prototype.deepCopy = function () {
    var this$1 = this;

  var out = [];
  for (var i = 0; i < this.ranges.length; i++)
    { out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head)); }
  return new Selection(out, this.primIndex)
};

Selection.prototype.somethingSelected = function () {
    var this$1 = this;

  for (var i = 0; i < this.ranges.length; i++)
    { if (!this$1.ranges[i].empty()) { return true } }
  return false
};

Selection.prototype.contains = function (pos, end) {
    var this$1 = this;

  if (!end) { end = pos; }
  for (var i = 0; i < this.ranges.length; i++) {
    var range = this$1.ranges[i];
    if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
      { return i }
  }
  return -1
};

var Range = function(anchor, head) {
  this.anchor = anchor; this.head = head;
};

Range.prototype.from = function () { return minPos(this.anchor, this.head) };
Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };

// Take an unsorted, potentially overlapping set of ranges, and
// build a selection out of it. 'Consumes' ranges array (modifying
// it).
function normalizeSelection(ranges, primIndex) {
  var prim = ranges[primIndex];
  ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
  primIndex = indexOf(ranges, prim);
  for (var i = 1; i < ranges.length; i++) {
    var cur = ranges[i], prev = ranges[i - 1];
    if (cmp(prev.to(), cur.from()) >= 0) {
      var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
      var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
      if (i <= primIndex) { --primIndex; }
      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
    }
  }
  return new Selection(ranges, primIndex)
}

function simpleSelection(anchor, head) {
  return new Selection([new Range(anchor, head || anchor)], 0)
}

// Compute the position of the end of a change (its 'to' property
// refers to the pre-change end).
function changeEnd(change) {
  if (!change.text) { return change.to }
  return Pos(change.from.line + change.text.length - 1,
             lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
}

// Adjust a position to refer to the post-change position of the
// same text, or the end of the change if the change covers it.
function adjustForChange(pos, change) {
  if (cmp(pos, change.from) < 0) { return pos }
  if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

  var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
  if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch; }
  return Pos(line, ch)
}

function computeSelAfterChange(doc, change) {
  var out = [];
  for (var i = 0; i < doc.sel.ranges.length; i++) {
    var range = doc.sel.ranges[i];
    out.push(new Range(adjustForChange(range.anchor, change),
                       adjustForChange(range.head, change)));
  }
  return normalizeSelection(out, doc.sel.primIndex)
}

function offsetPos(pos, old, nw) {
  if (pos.line == old.line)
    { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
  else
    { return Pos(nw.line + (pos.line - old.line), pos.ch) }
}

// Used by replaceSelections to allow moving the selection to the
// start or around the replaced test. Hint may be "start" or "around".
function computeReplacedSel(doc, changes, hint) {
  var out = [];
  var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
  for (var i = 0; i < changes.length; i++) {
    var change = changes[i];
    var from = offsetPos(change.from, oldPrev, newPrev);
    var to = offsetPos(changeEnd(change), oldPrev, newPrev);
    oldPrev = change.to;
    newPrev = to;
    if (hint == "around") {
      var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
      out[i] = new Range(inv ? to : from, inv ? from : to);
    } else {
      out[i] = new Range(from, from);
    }
  }
  return new Selection(out, doc.sel.primIndex)
}

// Used to get the editor into a consistent state again when options change.

function loadMode(cm) {
  cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
  resetModeState(cm);
}

function resetModeState(cm) {
  cm.doc.iter(function (line) {
    if (line.stateAfter) { line.stateAfter = null; }
    if (line.styles) { line.styles = null; }
  });
  cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
  startWorker(cm, 100);
  cm.state.modeGen++;
  if (cm.curOp) { regChange(cm); }
}

// DOCUMENT DATA STRUCTURE

// By default, updates that start and end at the beginning of a line
// are treated specially, in order to make the association of line
// widgets and marker elements with the text behave more intuitive.
function isWholeLineUpdate(doc, change) {
  return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
}

// Perform a change on the document data structure.
function updateDoc(doc, change, markedSpans, estimateHeight$$1) {
  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
  function update(line, text, spans) {
    updateLine(line, text, spans, estimateHeight$$1);
    signalLater(line, "change", line, change);
  }
  function linesFor(start, end) {
    var result = [];
    for (var i = start; i < end; ++i)
      { result.push(new Line(text[i], spansFor(i), estimateHeight$$1)); }
    return result
  }

  var from = change.from, to = change.to, text = change.text;
  var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
  var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

  // Adjust the line structure
  if (change.full) {
    doc.insert(0, linesFor(0, text.length));
    doc.remove(text.length, doc.size - text.length);
  } else if (isWholeLineUpdate(doc, change)) {
    // This is a whole-line replace. Treated specially to make
    // sure line objects move the way they are supposed to.
    var added = linesFor(0, text.length - 1);
    update(lastLine, lastLine.text, lastSpans);
    if (nlines) { doc.remove(from.line, nlines); }
    if (added.length) { doc.insert(from.line, added); }
  } else if (firstLine == lastLine) {
    if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
    } else {
      var added$1 = linesFor(1, text.length - 1);
      added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight$$1));
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      doc.insert(from.line + 1, added$1);
    }
  } else if (text.length == 1) {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
    doc.remove(from.line + 1, nlines);
  } else {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
    var added$2 = linesFor(1, text.length - 1);
    if (nlines > 1) { doc.remove(from.line + 1, nlines - 1); }
    doc.insert(from.line + 1, added$2);
  }

  signalLater(doc, "change", doc, change);
}

// Call f for all linked documents.
function linkedDocs(doc, f, sharedHistOnly) {
  function propagate(doc, skip, sharedHist) {
    if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
      var rel = doc.linked[i];
      if (rel.doc == skip) { continue }
      var shared = sharedHist && rel.sharedHist;
      if (sharedHistOnly && !shared) { continue }
      f(rel.doc, shared);
      propagate(rel.doc, doc, shared);
    } }
  }
  propagate(doc, null, true);
}

// Attach a document to an editor.
function attachDoc(cm, doc) {
  if (doc.cm) { throw new Error("This document is already in use.") }
  cm.doc = doc;
  doc.cm = cm;
  estimateLineHeights(cm);
  loadMode(cm);
  setDirectionClass(cm);
  if (!cm.options.lineWrapping) { findMaxLine(cm); }
  cm.options.mode = doc.modeOption;
  regChange(cm);
}

function setDirectionClass(cm) {
  (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
}

function directionChanged(cm) {
  runInOp(cm, function () {
    setDirectionClass(cm);
    regChange(cm);
  });
}

function History(startGen) {
  // Arrays of change events and selections. Doing something adds an
  // event to done and clears undo. Undoing moves events from done
  // to undone, redoing moves them in the other direction.
  this.done = []; this.undone = [];
  this.undoDepth = Infinity;
  // Used to track when changes can be merged into a single undo
  // event
  this.lastModTime = this.lastSelTime = 0;
  this.lastOp = this.lastSelOp = null;
  this.lastOrigin = this.lastSelOrigin = null;
  // Used by the isClean() method
  this.generation = this.maxGeneration = startGen || 1;
}

// Create a history change event from an updateDoc-style change
// object.
function historyChangeFromChange(doc, change) {
  var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
  linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
  return histChange
}

// Pop all selection events off the end of a history array. Stop at
// a change event.
function clearSelectionEvents(array) {
  while (array.length) {
    var last = lst(array);
    if (last.ranges) { array.pop(); }
    else { break }
  }
}

// Find the top change event in the history. Pop off selection
// events that are in the way.
function lastChangeEvent(hist, force) {
  if (force) {
    clearSelectionEvents(hist.done);
    return lst(hist.done)
  } else if (hist.done.length && !lst(hist.done).ranges) {
    return lst(hist.done)
  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
    hist.done.pop();
    return lst(hist.done)
  }
}

// Register a change in the history. Merges changes that are within
// a single operation, or are close together with an origin that
// allows merging (starting with "+") into a single event.
function addChangeToHistory(doc, change, selAfter, opId) {
  var hist = doc.history;
  hist.undone.length = 0;
  var time = +new Date, cur;
  var last;

  if ((hist.lastOp == opId ||
       hist.lastOrigin == change.origin && change.origin &&
       ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
        change.origin.charAt(0) == "*")) &&
      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
    // Merge this change into the last event
    last = lst(cur.changes);
    if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
      // Optimized case for simple insertion -- don't want to add
      // new changesets for every character typed
      last.to = changeEnd(change);
    } else {
      // Add new sub-event
      cur.changes.push(historyChangeFromChange(doc, change));
    }
  } else {
    // Can not be merged, start a new event.
    var before = lst(hist.done);
    if (!before || !before.ranges)
      { pushSelectionToHistory(doc.sel, hist.done); }
    cur = {changes: [historyChangeFromChange(doc, change)],
           generation: hist.generation};
    hist.done.push(cur);
    while (hist.done.length > hist.undoDepth) {
      hist.done.shift();
      if (!hist.done[0].ranges) { hist.done.shift(); }
    }
  }
  hist.done.push(selAfter);
  hist.generation = ++hist.maxGeneration;
  hist.lastModTime = hist.lastSelTime = time;
  hist.lastOp = hist.lastSelOp = opId;
  hist.lastOrigin = hist.lastSelOrigin = change.origin;

  if (!last) { signal(doc, "historyAdded"); }
}

function selectionEventCanBeMerged(doc, origin, prev, sel) {
  var ch = origin.charAt(0);
  return ch == "*" ||
    ch == "+" &&
    prev.ranges.length == sel.ranges.length &&
    prev.somethingSelected() == sel.somethingSelected() &&
    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
}

// Called whenever the selection changes, sets the new selection as
// the pending selection in the history, and pushes the old pending
// selection into the 'done' array when it was significantly
// different (in number of selected ranges, emptiness, or time).
function addSelectionToHistory(doc, sel, opId, options) {
  var hist = doc.history, origin = options && options.origin;

  // A new event is started when the previous origin does not match
  // the current, or the origins don't allow matching. Origins
  // starting with * are always merged, those starting with + are
  // merged when similar and close together in time.
  if (opId == hist.lastSelOp ||
      (origin && hist.lastSelOrigin == origin &&
       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
        selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
    { hist.done[hist.done.length - 1] = sel; }
  else
    { pushSelectionToHistory(sel, hist.done); }

  hist.lastSelTime = +new Date;
  hist.lastSelOrigin = origin;
  hist.lastSelOp = opId;
  if (options && options.clearRedo !== false)
    { clearSelectionEvents(hist.undone); }
}

function pushSelectionToHistory(sel, dest) {
  var top = lst(dest);
  if (!(top && top.ranges && top.equals(sel)))
    { dest.push(sel); }
}

// Used to store marked span information in the history.
function attachLocalSpans(doc, change, from, to) {
  var existing = change["spans_" + doc.id], n = 0;
  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
    if (line.markedSpans)
      { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans; }
    ++n;
  });
}

// When un/re-doing restores text containing marked spans, those
// that have been explicitly cleared should not be restored.
function removeClearedSpans(spans) {
  if (!spans) { return null }
  var out;
  for (var i = 0; i < spans.length; ++i) {
    if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i); } }
    else if (out) { out.push(spans[i]); }
  }
  return !out ? spans : out.length ? out : null
}

// Retrieve and filter the old marked spans stored in a change event.
function getOldSpans(doc, change) {
  var found = change["spans_" + doc.id];
  if (!found) { return null }
  var nw = [];
  for (var i = 0; i < change.text.length; ++i)
    { nw.push(removeClearedSpans(found[i])); }
  return nw
}

// Used for un/re-doing changes from the history. Combines the
// result of computing the existing spans with the set of spans that
// existed in the history (so that deleting around a span and then
// undoing brings back the span).
function mergeOldSpans(doc, change) {
  var old = getOldSpans(doc, change);
  var stretched = stretchSpansOverChange(doc, change);
  if (!old) { return stretched }
  if (!stretched) { return old }

  for (var i = 0; i < old.length; ++i) {
    var oldCur = old[i], stretchCur = stretched[i];
    if (oldCur && stretchCur) {
      spans: for (var j = 0; j < stretchCur.length; ++j) {
        var span = stretchCur[j];
        for (var k = 0; k < oldCur.length; ++k)
          { if (oldCur[k].marker == span.marker) { continue spans } }
        oldCur.push(span);
      }
    } else if (stretchCur) {
      old[i] = stretchCur;
    }
  }
  return old
}

// Used both to provide a JSON-safe object in .getHistory, and, when
// detaching a document, to split the history in two
function copyHistoryArray(events, newGroup, instantiateSel) {
  var copy = [];
  for (var i = 0; i < events.length; ++i) {
    var event = events[i];
    if (event.ranges) {
      copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
      continue
    }
    var changes = event.changes, newChanges = [];
    copy.push({changes: newChanges});
    for (var j = 0; j < changes.length; ++j) {
      var change = changes[j], m = (void 0);
      newChanges.push({from: change.from, to: change.to, text: change.text});
      if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
        if (indexOf(newGroup, Number(m[1])) > -1) {
          lst(newChanges)[prop] = change[prop];
          delete change[prop];
        }
      } } }
    }
  }
  return copy
}

// The 'scroll' parameter given to many of these indicated whether
// the new cursor position should be scrolled into view after
// modifying the selection.

// If shift is held or the extend flag is set, extends a range to
// include a given position (and optionally a second position).
// Otherwise, simply returns the range between the given positions.
// Used for cursor motion and such.
function extendRange(range, head, other, extend) {
  if (extend) {
    var anchor = range.anchor;
    if (other) {
      var posBefore = cmp(head, anchor) < 0;
      if (posBefore != (cmp(other, anchor) < 0)) {
        anchor = head;
        head = other;
      } else if (posBefore != (cmp(head, other) < 0)) {
        head = other;
      }
    }
    return new Range(anchor, head)
  } else {
    return new Range(other || head, head)
  }
}

// Extend the primary selection range, discard the rest.
function extendSelection(doc, head, other, options, extend) {
  if (extend == null) { extend = doc.cm && (doc.cm.display.shift || doc.extend); }
  setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
}

// Extend all selections (pos is an array of selections with length
// equal the number of selections)
function extendSelections(doc, heads, options) {
  var out = [];
  var extend = doc.cm && (doc.cm.display.shift || doc.extend);
  for (var i = 0; i < doc.sel.ranges.length; i++)
    { out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend); }
  var newSel = normalizeSelection(out, doc.sel.primIndex);
  setSelection(doc, newSel, options);
}

// Updates a single range in the selection.
function replaceOneSelection(doc, i, range, options) {
  var ranges = doc.sel.ranges.slice(0);
  ranges[i] = range;
  setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
}

// Reset the selection to a single range.
function setSimpleSelection(doc, anchor, head, options) {
  setSelection(doc, simpleSelection(anchor, head), options);
}

// Give beforeSelectionChange handlers a change to influence a
// selection update.
function filterSelectionChange(doc, sel, options) {
  var obj = {
    ranges: sel.ranges,
    update: function(ranges) {
      var this$1 = this;

      this.ranges = [];
      for (var i = 0; i < ranges.length; i++)
        { this$1.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                   clipPos(doc, ranges[i].head)); }
    },
    origin: options && options.origin
  };
  signal(doc, "beforeSelectionChange", doc, obj);
  if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj); }
  if (obj.ranges != sel.ranges) { return normalizeSelection(obj.ranges, obj.ranges.length - 1) }
  else { return sel }
}

function setSelectionReplaceHistory(doc, sel, options) {
  var done = doc.history.done, last = lst(done);
  if (last && last.ranges) {
    done[done.length - 1] = sel;
    setSelectionNoUndo(doc, sel, options);
  } else {
    setSelection(doc, sel, options);
  }
}

// Set a new selection.
function setSelection(doc, sel, options) {
  setSelectionNoUndo(doc, sel, options);
  addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
}

function setSelectionNoUndo(doc, sel, options) {
  if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
    { sel = filterSelectionChange(doc, sel, options); }

  var bias = options && options.bias ||
    (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

  if (!(options && options.scroll === false) && doc.cm)
    { ensureCursorVisible(doc.cm); }
}

function setSelectionInner(doc, sel) {
  if (sel.equals(doc.sel)) { return }

  doc.sel = sel;

  if (doc.cm) {
    doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
    signalCursorActivity(doc.cm);
  }
  signalLater(doc, "cursorActivity", doc);
}

// Verify that the selection does not partially select any atomic
// marked ranges.
function reCheckSelection(doc) {
  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
}

// Return a selection that does not partially select any atomic
// ranges.
function skipAtomicInSelection(doc, sel, bias, mayClear) {
  var out;
  for (var i = 0; i < sel.ranges.length; i++) {
    var range = sel.ranges[i];
    var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
    var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
    var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
    if (out || newAnchor != range.anchor || newHead != range.head) {
      if (!out) { out = sel.ranges.slice(0, i); }
      out[i] = new Range(newAnchor, newHead);
    }
  }
  return out ? normalizeSelection(out, sel.primIndex) : sel
}

function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
  var line = getLine(doc, pos.line);
  if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
    var sp = line.markedSpans[i], m = sp.marker;
    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
        (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
      if (mayClear) {
        signal(m, "beforeCursorEnter");
        if (m.explicitlyCleared) {
          if (!line.markedSpans) { break }
          else {--i; continue}
        }
      }
      if (!m.atomic) { continue }

      if (oldPos) {
        var near = m.find(dir < 0 ? 1 : -1), diff = (void 0);
        if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
          { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null); }
        if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
          { return skipAtomicInner(doc, near, pos, dir, mayClear) }
      }

      var far = m.find(dir < 0 ? -1 : 1);
      if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
        { far = movePos(doc, far, dir, far.line == pos.line ? line : null); }
      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
    }
  } }
  return pos
}

// Ensure a given position is not inside an atomic range.
function skipAtomic(doc, pos, oldPos, bias, mayClear) {
  var dir = bias || 1;
  var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
  if (!found) {
    doc.cantEdit = true;
    return Pos(doc.first, 0)
  }
  return found
}

function movePos(doc, pos, dir, line) {
  if (dir < 0 && pos.ch == 0) {
    if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
    else { return null }
  } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
    if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
    else { return null }
  } else {
    return new Pos(pos.line, pos.ch + dir)
  }
}

function selectAll(cm) {
  cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
}

// UPDATING

// Allow "beforeChange" event handlers to influence a change
function filterChange(doc, change, update) {
  var obj = {
    canceled: false,
    from: change.from,
    to: change.to,
    text: change.text,
    origin: change.origin,
    cancel: function () { return obj.canceled = true; }
  };
  if (update) { obj.update = function (from, to, text, origin) {
    if (from) { obj.from = clipPos(doc, from); }
    if (to) { obj.to = clipPos(doc, to); }
    if (text) { obj.text = text; }
    if (origin !== undefined) { obj.origin = origin; }
  }; }
  signal(doc, "beforeChange", doc, obj);
  if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj); }

  if (obj.canceled) { return null }
  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
}

// Apply a change to a document, and add it to the document's
// history, and propagating it to all linked documents.
function makeChange(doc, change, ignoreReadOnly) {
  if (doc.cm) {
    if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
    if (doc.cm.state.suppressEdits) { return }
  }

  if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
    change = filterChange(doc, change, true);
    if (!change) { return }
  }

  // Possibly split or suppress the update based on the presence
  // of read-only spans in its range.
  var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
  if (split) {
    for (var i = split.length - 1; i >= 0; --i)
      { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin}); }
  } else {
    makeChangeInner(doc, change);
  }
}

function makeChangeInner(doc, change) {
  if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
  var selAfter = computeSelAfterChange(doc, change);
  addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

  makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
  var rebased = [];

  linkedDocs(doc, function (doc, sharedHist) {
    if (!sharedHist && indexOf(rebased, doc.history) == -1) {
      rebaseHist(doc.history, change);
      rebased.push(doc.history);
    }
    makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
  });
}

// Revert a change stored in a document's history.
function makeChangeFromHistory(doc, type, allowSelectionOnly) {
  var suppress = doc.cm && doc.cm.state.suppressEdits;
  if (suppress && !allowSelectionOnly) { return }

  var hist = doc.history, event, selAfter = doc.sel;
  var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

  // Verify that there is a useable event (so that ctrl-z won't
  // needlessly clear selection events)
  var i = 0;
  for (; i < source.length; i++) {
    event = source[i];
    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
      { break }
  }
  if (i == source.length) { return }
  hist.lastOrigin = hist.lastSelOrigin = null;

  for (;;) {
    event = source.pop();
    if (event.ranges) {
      pushSelectionToHistory(event, dest);
      if (allowSelectionOnly && !event.equals(doc.sel)) {
        setSelection(doc, event, {clearRedo: false});
        return
      }
      selAfter = event;
    } else if (suppress) {
      source.push(event);
      return
    } else { break }
  }

  // Build up a reverse change object to add to the opposite history
  // stack (redo when undoing, and vice versa).
  var antiChanges = [];
  pushSelectionToHistory(selAfter, dest);
  dest.push({changes: antiChanges, generation: hist.generation});
  hist.generation = event.generation || ++hist.maxGeneration;

  var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

  var loop = function ( i ) {
    var change = event.changes[i];
    change.origin = type;
    if (filter && !filterChange(doc, change, false)) {
      source.length = 0;
      return {}
    }

    antiChanges.push(historyChangeFromChange(doc, change));

    var after = i ? computeSelAfterChange(doc, change) : lst(source);
    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
    if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}); }
    var rebased = [];

    // Propagate to the linked documents
    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }
      makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
    });
  };

  for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
    var returned = loop( i$1 );

    if ( returned ) return returned.v;
  }
}

// Sub-views need their line numbers shifted when text is added
// above or below them in the parent document.
function shiftDoc(doc, distance) {
  if (distance == 0) { return }
  doc.first += distance;
  doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
    Pos(range.anchor.line + distance, range.anchor.ch),
    Pos(range.head.line + distance, range.head.ch)
  ); }), doc.sel.primIndex);
  if (doc.cm) {
    regChange(doc.cm, doc.first, doc.first - distance, distance);
    for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
      { regLineChange(doc.cm, l, "gutter"); }
  }
}

// More lower-level change function, handling only a single document
// (not linked ones).
function makeChangeSingleDoc(doc, change, selAfter, spans) {
  if (doc.cm && !doc.cm.curOp)
    { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

  if (change.to.line < doc.first) {
    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
    return
  }
  if (change.from.line > doc.lastLine()) { return }

  // Clip the change to the size of this doc
  if (change.from.line < doc.first) {
    var shift = change.text.length - 1 - (doc.first - change.from.line);
    shiftDoc(doc, shift);
    change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
              text: [lst(change.text)], origin: change.origin};
  }
  var last = doc.lastLine();
  if (change.to.line > last) {
    change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
              text: [change.text[0]], origin: change.origin};
  }

  change.removed = getBetween(doc, change.from, change.to);

  if (!selAfter) { selAfter = computeSelAfterChange(doc, change); }
  if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans); }
  else { updateDoc(doc, change, spans); }
  setSelectionNoUndo(doc, selAfter, sel_dontScroll);
}

// Handle the interaction of a change to a document with the editor
// that this document is part of.
function makeChangeSingleDocInEditor(cm, change, spans) {
  var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

  var recomputeMaxLength = false, checkWidthStart = from.line;
  if (!cm.options.lineWrapping) {
    checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
    doc.iter(checkWidthStart, to.line + 1, function (line) {
      if (line == display.maxLine) {
        recomputeMaxLength = true;
        return true
      }
    });
  }

  if (doc.sel.contains(change.from, change.to) > -1)
    { signalCursorActivity(cm); }

  updateDoc(doc, change, spans, estimateHeight(cm));

  if (!cm.options.lineWrapping) {
    doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
      var len = lineLength(line);
      if (len > display.maxLineLength) {
        display.maxLine = line;
        display.maxLineLength = len;
        display.maxLineChanged = true;
        recomputeMaxLength = false;
      }
    });
    if (recomputeMaxLength) { cm.curOp.updateMaxLine = true; }
  }

  retreatFrontier(doc, from.line);
  startWorker(cm, 400);

  var lendiff = change.text.length - (to.line - from.line) - 1;
  // Remember that these lines changed, for updating the display
  if (change.full)
    { regChange(cm); }
  else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
    { regLineChange(cm, from.line, "text"); }
  else
    { regChange(cm, from.line, to.line + 1, lendiff); }

  var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
  if (changeHandler || changesHandler) {
    var obj = {
      from: from, to: to,
      text: change.text,
      removed: change.removed,
      origin: change.origin
    };
    if (changeHandler) { signalLater(cm, "change", cm, obj); }
    if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj); }
  }
  cm.display.selForContextMenu = null;
}

function replaceRange(doc, code, from, to, origin) {
  if (!to) { to = from; }
  if (cmp(to, from) < 0) { var assign;
    (assign = [to, from], from = assign[0], to = assign[1]); }
  if (typeof code == "string") { code = doc.splitLines(code); }
  makeChange(doc, {from: from, to: to, text: code, origin: origin});
}

// Rebasing/resetting history to deal with externally-sourced changes

function rebaseHistSelSingle(pos, from, to, diff) {
  if (to < pos.line) {
    pos.line += diff;
  } else if (from < pos.line) {
    pos.line = from;
    pos.ch = 0;
  }
}

// Tries to rebase an array of history events given a change in the
// document. If the change touches the same lines as the event, the
// event, and everything 'behind' it, is discarded. If the change is
// before the event, the event's positions are updated. Uses a
// copy-on-write scheme for the positions, to avoid having to
// reallocate them all on every rebase, but also avoid problems with
// shared position objects being unsafely updated.
function rebaseHistArray(array, from, to, diff) {
  for (var i = 0; i < array.length; ++i) {
    var sub = array[i], ok = true;
    if (sub.ranges) {
      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
      for (var j = 0; j < sub.ranges.length; j++) {
        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
      }
      continue
    }
    for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
      var cur = sub.changes[j$1];
      if (to < cur.from.line) {
        cur.from = Pos(cur.from.line + diff, cur.from.ch);
        cur.to = Pos(cur.to.line + diff, cur.to.ch);
      } else if (from <= cur.to.line) {
        ok = false;
        break
      }
    }
    if (!ok) {
      array.splice(0, i + 1);
      i = 0;
    }
  }
}

function rebaseHist(hist, change) {
  var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
  rebaseHistArray(hist.done, from, to, diff);
  rebaseHistArray(hist.undone, from, to, diff);
}

// Utility for applying a change to a line by handle or number,
// returning the number and optionally registering the line as
// changed.
function changeLine(doc, handle, changeType, op) {
  var no = handle, line = handle;
  if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)); }
  else { no = lineNo(handle); }
  if (no == null) { return null }
  if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType); }
  return line
}

// The document is represented as a BTree consisting of leaves, with
// chunk of lines in them, and branches, with up to ten leaves or
// other branch nodes below them. The top node is always a branch
// node, and is the document object itself (meaning it has
// additional methods and properties).
//
// All nodes have parent links. The tree is used both to go from
// line numbers to line objects, and to go from objects to numbers.
// It also indexes by height, and is used to convert between height
// and line object, and to find the total height of the document.
//
// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

function LeafChunk(lines) {
  var this$1 = this;

  this.lines = lines;
  this.parent = null;
  var height = 0;
  for (var i = 0; i < lines.length; ++i) {
    lines[i].parent = this$1;
    height += lines[i].height;
  }
  this.height = height;
}

LeafChunk.prototype = {
  chunkSize: function() { return this.lines.length },

  // Remove the n lines at offset 'at'.
  removeInner: function(at, n) {
    var this$1 = this;

    for (var i = at, e = at + n; i < e; ++i) {
      var line = this$1.lines[i];
      this$1.height -= line.height;
      cleanUpLine(line);
      signalLater(line, "delete");
    }
    this.lines.splice(at, n);
  },

  // Helper used to collapse a small branch into a single leaf.
  collapse: function(lines) {
    lines.push.apply(lines, this.lines);
  },

  // Insert the given array of lines at offset 'at', count them as
  // having the given height.
  insertInner: function(at, lines, height) {
    var this$1 = this;

    this.height += height;
    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
    for (var i = 0; i < lines.length; ++i) { lines[i].parent = this$1; }
  },

  // Used to iterate over a part of the tree.
  iterN: function(at, n, op) {
    var this$1 = this;

    for (var e = at + n; at < e; ++at)
      { if (op(this$1.lines[at])) { return true } }
  }
};

function BranchChunk(children) {
  var this$1 = this;

  this.children = children;
  var size = 0, height = 0;
  for (var i = 0; i < children.length; ++i) {
    var ch = children[i];
    size += ch.chunkSize(); height += ch.height;
    ch.parent = this$1;
  }
  this.size = size;
  this.height = height;
  this.parent = null;
}

BranchChunk.prototype = {
  chunkSize: function() { return this.size },

  removeInner: function(at, n) {
    var this$1 = this;

    this.size -= n;
    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i], sz = child.chunkSize();
      if (at < sz) {
        var rm = Math.min(n, sz - at), oldHeight = child.height;
        child.removeInner(at, rm);
        this$1.height -= oldHeight - child.height;
        if (sz == rm) { this$1.children.splice(i--, 1); child.parent = null; }
        if ((n -= rm) == 0) { break }
        at = 0;
      } else { at -= sz; }
    }
    // If the result is smaller than 25 lines, ensure that it is a
    // single leaf node.
    if (this.size - n < 25 &&
        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
      var lines = [];
      this.collapse(lines);
      this.children = [new LeafChunk(lines)];
      this.children[0].parent = this;
    }
  },

  collapse: function(lines) {
    var this$1 = this;

    for (var i = 0; i < this.children.length; ++i) { this$1.children[i].collapse(lines); }
  },

  insertInner: function(at, lines, height) {
    var this$1 = this;

    this.size += lines.length;
    this.height += height;
    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i], sz = child.chunkSize();
      if (at <= sz) {
        child.insertInner(at, lines, height);
        if (child.lines && child.lines.length > 50) {
          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
          var remaining = child.lines.length % 25 + 25;
          for (var pos = remaining; pos < child.lines.length;) {
            var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
            child.height -= leaf.height;
            this$1.children.splice(++i, 0, leaf);
            leaf.parent = this$1;
          }
          child.lines = child.lines.slice(0, remaining);
          this$1.maybeSpill();
        }
        break
      }
      at -= sz;
    }
  },

  // When a node has grown, check whether it should be split.
  maybeSpill: function() {
    if (this.children.length <= 10) { return }
    var me = this;
    do {
      var spilled = me.children.splice(me.children.length - 5, 5);
      var sibling = new BranchChunk(spilled);
      if (!me.parent) { // Become the parent node
        var copy = new BranchChunk(me.children);
        copy.parent = me;
        me.children = [copy, sibling];
        me = copy;
     } else {
        me.size -= sibling.size;
        me.height -= sibling.height;
        var myIndex = indexOf(me.parent.children, me);
        me.parent.children.splice(myIndex + 1, 0, sibling);
      }
      sibling.parent = me.parent;
    } while (me.children.length > 10)
    me.parent.maybeSpill();
  },

  iterN: function(at, n, op) {
    var this$1 = this;

    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i], sz = child.chunkSize();
      if (at < sz) {
        var used = Math.min(n, sz - at);
        if (child.iterN(at, used, op)) { return true }
        if ((n -= used) == 0) { break }
        at = 0;
      } else { at -= sz; }
    }
  }
};

// Line widgets are block elements displayed above or below a line.

var LineWidget = function(doc, node, options) {
  var this$1 = this;

  if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
    { this$1[opt] = options[opt]; } } }
  this.doc = doc;
  this.node = node;
};

LineWidget.prototype.clear = function () {
    var this$1 = this;

  var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
  if (no == null || !ws) { return }
  for (var i = 0; i < ws.length; ++i) { if (ws[i] == this$1) { ws.splice(i--, 1); } }
  if (!ws.length) { line.widgets = null; }
  var height = widgetHeight(this);
  updateLineHeight(line, Math.max(0, line.height - height));
  if (cm) {
    runInOp(cm, function () {
      adjustScrollWhenAboveVisible(cm, line, -height);
      regLineChange(cm, no, "widget");
    });
    signalLater(cm, "lineWidgetCleared", cm, this, no);
  }
};

LineWidget.prototype.changed = function () {
    var this$1 = this;

  var oldH = this.height, cm = this.doc.cm, line = this.line;
  this.height = null;
  var diff = widgetHeight(this) - oldH;
  if (!diff) { return }
  if (!lineIsHidden(this.doc, line)) { updateLineHeight(line, line.height + diff); }
  if (cm) {
    runInOp(cm, function () {
      cm.curOp.forceUpdate = true;
      adjustScrollWhenAboveVisible(cm, line, diff);
      signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
    });
  }
};
eventMixin(LineWidget);

function adjustScrollWhenAboveVisible(cm, line, diff) {
  if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
    { addToScrollTop(cm, diff); }
}

function addLineWidget(doc, handle, node, options) {
  var widget = new LineWidget(doc, node, options);
  var cm = doc.cm;
  if (cm && widget.noHScroll) { cm.display.alignWidgets = true; }
  changeLine(doc, handle, "widget", function (line) {
    var widgets = line.widgets || (line.widgets = []);
    if (widget.insertAt == null) { widgets.push(widget); }
    else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget); }
    widget.line = line;
    if (cm && !lineIsHidden(doc, line)) {
      var aboveVisible = heightAtLine(line) < doc.scrollTop;
      updateLineHeight(line, line.height + widgetHeight(widget));
      if (aboveVisible) { addToScrollTop(cm, widget.height); }
      cm.curOp.forceUpdate = true;
    }
    return true
  });
  if (cm) { signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle)); }
  return widget
}

// TEXTMARKERS

// Created with markText and setBookmark methods. A TextMarker is a
// handle that can be used to clear or find a marked position in the
// document. Line objects hold arrays (markedSpans) containing
// {from, to, marker} object pointing to such marker objects, and
// indicating that such a marker is present on that line. Multiple
// lines may point to the same marker when it spans across lines.
// The spans will have null for their from/to properties when the
// marker continues beyond the start/end of the line. Markers have
// links back to the lines they currently touch.

// Collapsed markers have unique ids, in order to be able to order
// them, which is needed for uniquely determining an outer marker
// when they overlap (they may nest, but not partially overlap).
var nextMarkerId = 0;

var TextMarker = function(doc, type) {
  this.lines = [];
  this.type = type;
  this.doc = doc;
  this.id = ++nextMarkerId;
};

// Clear the marker.
TextMarker.prototype.clear = function () {
    var this$1 = this;

  if (this.explicitlyCleared) { return }
  var cm = this.doc.cm, withOp = cm && !cm.curOp;
  if (withOp) { startOperation(cm); }
  if (hasHandler(this, "clear")) {
    var found = this.find();
    if (found) { signalLater(this, "clear", found.from, found.to); }
  }
  var min = null, max = null;
  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i];
    var span = getMarkedSpanFor(line.markedSpans, this$1);
    if (cm && !this$1.collapsed) { regLineChange(cm, lineNo(line), "text"); }
    else if (cm) {
      if (span.to != null) { max = lineNo(line); }
      if (span.from != null) { min = lineNo(line); }
    }
    line.markedSpans = removeMarkedSpan(line.markedSpans, span);
    if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm)
      { updateLineHeight(line, textHeight(cm.display)); }
  }
  if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
    var visual = visualLine(this$1.lines[i$1]), len = lineLength(visual);
    if (len > cm.display.maxLineLength) {
      cm.display.maxLine = visual;
      cm.display.maxLineLength = len;
      cm.display.maxLineChanged = true;
    }
  } }

  if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1); }
  this.lines.length = 0;
  this.explicitlyCleared = true;
  if (this.atomic && this.doc.cantEdit) {
    this.doc.cantEdit = false;
    if (cm) { reCheckSelection(cm.doc); }
  }
  if (cm) { signalLater(cm, "markerCleared", cm, this, min, max); }
  if (withOp) { endOperation(cm); }
  if (this.parent) { this.parent.clear(); }
};

// Find the position of the marker in the document. Returns a {from,
// to} object by default. Side can be passed to get a specific side
// -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
// Pos objects returned contain a line object, rather than a line
// number (used to prevent looking up the same line twice).
TextMarker.prototype.find = function (side, lineObj) {
    var this$1 = this;

  if (side == null && this.type == "bookmark") { side = 1; }
  var from, to;
  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i];
    var span = getMarkedSpanFor(line.markedSpans, this$1);
    if (span.from != null) {
      from = Pos(lineObj ? line : lineNo(line), span.from);
      if (side == -1) { return from }
    }
    if (span.to != null) {
      to = Pos(lineObj ? line : lineNo(line), span.to);
      if (side == 1) { return to }
    }
  }
  return from && {from: from, to: to}
};

// Signals that the marker's widget changed, and surrounding layout
// should be recomputed.
TextMarker.prototype.changed = function () {
    var this$1 = this;

  var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
  if (!pos || !cm) { return }
  runInOp(cm, function () {
    var line = pos.line, lineN = lineNo(pos.line);
    var view = findViewForLine(cm, lineN);
    if (view) {
      clearLineMeasurementCacheFor(view);
      cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
    }
    cm.curOp.updateMaxLine = true;
    if (!lineIsHidden(widget.doc, line) && widget.height != null) {
      var oldHeight = widget.height;
      widget.height = null;
      var dHeight = widgetHeight(widget) - oldHeight;
      if (dHeight)
        { updateLineHeight(line, line.height + dHeight); }
    }
    signalLater(cm, "markerChanged", cm, this$1);
  });
};

TextMarker.prototype.attachLine = function (line) {
  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp;
    if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
      { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this); }
  }
  this.lines.push(line);
};

TextMarker.prototype.detachLine = function (line) {
  this.lines.splice(indexOf(this.lines, line), 1);
  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
  }
};
eventMixin(TextMarker);

// Create a marker, wire it up to the right lines, and
function markText(doc, from, to, options, type) {
  // Shared markers (across linked documents) are handled separately
  // (markTextShared will call out to this again, once per
  // document).
  if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
  // Ensure we are in an operation.
  if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

  var marker = new TextMarker(doc, type), diff = cmp(from, to);
  if (options) { copyObj(options, marker, false); }
  // Don't connect empty markers unless clearWhenEmpty is false
  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
    { return marker }
  if (marker.replacedWith) {
    // Showing up as a widget implies collapsed (widget replaces text)
    marker.collapsed = true;
    marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
    if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true"); }
    if (options.insertLeft) { marker.widgetNode.insertLeft = true; }
  }
  if (marker.collapsed) {
    if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
        from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
      { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
    seeCollapsedSpans();
  }

  if (marker.addToHistory)
    { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN); }

  var curLine = from.line, cm = doc.cm, updateMaxLine;
  doc.iter(curLine, to.line + 1, function (line) {
    if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
      { updateMaxLine = true; }
    if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0); }
    addMarkedSpan(line, new MarkedSpan(marker,
                                       curLine == from.line ? from.ch : null,
                                       curLine == to.line ? to.ch : null));
    ++curLine;
  });
  // lineIsHidden depends on the presence of the spans, so needs a second pass
  if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
    if (lineIsHidden(doc, line)) { updateLineHeight(line, 0); }
  }); }

  if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }); }

  if (marker.readOnly) {
    seeReadOnlySpans();
    if (doc.history.done.length || doc.history.undone.length)
      { doc.clearHistory(); }
  }
  if (marker.collapsed) {
    marker.id = ++nextMarkerId;
    marker.atomic = true;
  }
  if (cm) {
    // Sync editor state
    if (updateMaxLine) { cm.curOp.updateMaxLine = true; }
    if (marker.collapsed)
      { regChange(cm, from.line, to.line + 1); }
    else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
      { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text"); } }
    if (marker.atomic) { reCheckSelection(cm.doc); }
    signalLater(cm, "markerAdded", cm, marker);
  }
  return marker
}

// SHARED TEXTMARKERS

// A shared marker spans multiple linked documents. It is
// implemented as a meta-marker-object controlling multiple normal
// markers.
var SharedTextMarker = function(markers, primary) {
  var this$1 = this;

  this.markers = markers;
  this.primary = primary;
  for (var i = 0; i < markers.length; ++i)
    { markers[i].parent = this$1; }
};

SharedTextMarker.prototype.clear = function () {
    var this$1 = this;

  if (this.explicitlyCleared) { return }
  this.explicitlyCleared = true;
  for (var i = 0; i < this.markers.length; ++i)
    { this$1.markers[i].clear(); }
  signalLater(this, "clear");
};

SharedTextMarker.prototype.find = function (side, lineObj) {
  return this.primary.find(side, lineObj)
};
eventMixin(SharedTextMarker);

function markTextShared(doc, from, to, options, type) {
  options = copyObj(options);
  options.shared = false;
  var markers = [markText(doc, from, to, options, type)], primary = markers[0];
  var widget = options.widgetNode;
  linkedDocs(doc, function (doc) {
    if (widget) { options.widgetNode = widget.cloneNode(true); }
    markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
    for (var i = 0; i < doc.linked.length; ++i)
      { if (doc.linked[i].isParent) { return } }
    primary = lst(markers);
  });
  return new SharedTextMarker(markers, primary)
}

function findSharedMarkers(doc) {
  return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
}

function copySharedMarkers(doc, markers) {
  for (var i = 0; i < markers.length; i++) {
    var marker = markers[i], pos = marker.find();
    var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
    if (cmp(mFrom, mTo)) {
      var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
      marker.markers.push(subMark);
      subMark.parent = marker;
    }
  }
}

function detachSharedMarkers(markers) {
  var loop = function ( i ) {
    var marker = markers[i], linked = [marker.primary.doc];
    linkedDocs(marker.primary.doc, function (d) { return linked.push(d); });
    for (var j = 0; j < marker.markers.length; j++) {
      var subMarker = marker.markers[j];
      if (indexOf(linked, subMarker.doc) == -1) {
        subMarker.parent = null;
        marker.markers.splice(j--, 1);
      }
    }
  };

  for (var i = 0; i < markers.length; i++) loop( i );
}

var nextDocId = 0;
var Doc = function(text, mode, firstLine, lineSep, direction) {
  if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep, direction) }
  if (firstLine == null) { firstLine = 0; }

  BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
  this.first = firstLine;
  this.scrollTop = this.scrollLeft = 0;
  this.cantEdit = false;
  this.cleanGeneration = 1;
  this.modeFrontier = this.highlightFrontier = firstLine;
  var start = Pos(firstLine, 0);
  this.sel = simpleSelection(start);
  this.history = new History(null);
  this.id = ++nextDocId;
  this.modeOption = mode;
  this.lineSep = lineSep;
  this.direction = (direction == "rtl") ? "rtl" : "ltr";
  this.extend = false;

  if (typeof text == "string") { text = this.splitLines(text); }
  updateDoc(this, {from: start, to: start, text: text});
  setSelection(this, simpleSelection(start), sel_dontScroll);
};

Doc.prototype = createObj(BranchChunk.prototype, {
  constructor: Doc,
  // Iterate over the document. Supports two forms -- with only one
  // argument, it calls that for each line in the document. With
  // three, it iterates over the range given by the first two (with
  // the second being non-inclusive).
  iter: function(from, to, op) {
    if (op) { this.iterN(from - this.first, to - from, op); }
    else { this.iterN(this.first, this.first + this.size, from); }
  },

  // Non-public interface for adding and removing lines.
  insert: function(at, lines) {
    var height = 0;
    for (var i = 0; i < lines.length; ++i) { height += lines[i].height; }
    this.insertInner(at - this.first, lines, height);
  },
  remove: function(at, n) { this.removeInner(at - this.first, n); },

  // From here, the methods are part of the public interface. Most
  // are also available from CodeMirror (editor) instances.

  getValue: function(lineSep) {
    var lines = getLines(this, this.first, this.first + this.size);
    if (lineSep === false) { return lines }
    return lines.join(lineSep || this.lineSeparator())
  },
  setValue: docMethodOp(function(code) {
    var top = Pos(this.first, 0), last = this.first + this.size - 1;
    makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                      text: this.splitLines(code), origin: "setValue", full: true}, true);
    if (this.cm) { scrollToCoords(this.cm, 0, 0); }
    setSelection(this, simpleSelection(top), sel_dontScroll);
  }),
  replaceRange: function(code, from, to, origin) {
    from = clipPos(this, from);
    to = to ? clipPos(this, to) : from;
    replaceRange(this, code, from, to, origin);
  },
  getRange: function(from, to, lineSep) {
    var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
    if (lineSep === false) { return lines }
    return lines.join(lineSep || this.lineSeparator())
  },

  getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

  getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
  getLineNumber: function(line) {return lineNo(line)},

  getLineHandleVisualStart: function(line) {
    if (typeof line == "number") { line = getLine(this, line); }
    return visualLine(line)
  },

  lineCount: function() {return this.size},
  firstLine: function() {return this.first},
  lastLine: function() {return this.first + this.size - 1},

  clipPos: function(pos) {return clipPos(this, pos)},

  getCursor: function(start) {
    var range$$1 = this.sel.primary(), pos;
    if (start == null || start == "head") { pos = range$$1.head; }
    else if (start == "anchor") { pos = range$$1.anchor; }
    else if (start == "end" || start == "to" || start === false) { pos = range$$1.to(); }
    else { pos = range$$1.from(); }
    return pos
  },
  listSelections: function() { return this.sel.ranges },
  somethingSelected: function() {return this.sel.somethingSelected()},

  setCursor: docMethodOp(function(line, ch, options) {
    setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
  }),
  setSelection: docMethodOp(function(anchor, head, options) {
    setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
  }),
  extendSelection: docMethodOp(function(head, other, options) {
    extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
  }),
  extendSelections: docMethodOp(function(heads, options) {
    extendSelections(this, clipPosArray(this, heads), options);
  }),
  extendSelectionsBy: docMethodOp(function(f, options) {
    var heads = map(this.sel.ranges, f);
    extendSelections(this, clipPosArray(this, heads), options);
  }),
  setSelections: docMethodOp(function(ranges, primary, options) {
    var this$1 = this;

    if (!ranges.length) { return }
    var out = [];
    for (var i = 0; i < ranges.length; i++)
      { out[i] = new Range(clipPos(this$1, ranges[i].anchor),
                         clipPos(this$1, ranges[i].head)); }
    if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex); }
    setSelection(this, normalizeSelection(out, primary), options);
  }),
  addSelection: docMethodOp(function(anchor, head, options) {
    var ranges = this.sel.ranges.slice(0);
    ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
    setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
  }),

  getSelection: function(lineSep) {
    var this$1 = this;

    var ranges = this.sel.ranges, lines;
    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to());
      lines = lines ? lines.concat(sel) : sel;
    }
    if (lineSep === false) { return lines }
    else { return lines.join(lineSep || this.lineSeparator()) }
  },
  getSelections: function(lineSep) {
    var this$1 = this;

    var parts = [], ranges = this.sel.ranges;
    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to());
      if (lineSep !== false) { sel = sel.join(lineSep || this$1.lineSeparator()); }
      parts[i] = sel;
    }
    return parts
  },
  replaceSelection: function(code, collapse, origin) {
    var dup = [];
    for (var i = 0; i < this.sel.ranges.length; i++)
      { dup[i] = code; }
    this.replaceSelections(dup, collapse, origin || "+input");
  },
  replaceSelections: docMethodOp(function(code, collapse, origin) {
    var this$1 = this;

    var changes = [], sel = this.sel;
    for (var i = 0; i < sel.ranges.length; i++) {
      var range$$1 = sel.ranges[i];
      changes[i] = {from: range$$1.from(), to: range$$1.to(), text: this$1.splitLines(code[i]), origin: origin};
    }
    var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
    for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
      { makeChange(this$1, changes[i$1]); }
    if (newSel) { setSelectionReplaceHistory(this, newSel); }
    else if (this.cm) { ensureCursorVisible(this.cm); }
  }),
  undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
  redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
  undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
  redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

  setExtending: function(val) {this.extend = val;},
  getExtending: function() {return this.extend},

  historySize: function() {
    var hist = this.history, done = 0, undone = 0;
    for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done; } }
    for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone; } }
    return {undo: done, redo: undone}
  },
  clearHistory: function() {this.history = new History(this.history.maxGeneration);},

  markClean: function() {
    this.cleanGeneration = this.changeGeneration(true);
  },
  changeGeneration: function(forceSplit) {
    if (forceSplit)
      { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null; }
    return this.history.generation
  },
  isClean: function (gen) {
    return this.history.generation == (gen || this.cleanGeneration)
  },

  getHistory: function() {
    return {done: copyHistoryArray(this.history.done),
            undone: copyHistoryArray(this.history.undone)}
  },
  setHistory: function(histData) {
    var hist = this.history = new History(this.history.maxGeneration);
    hist.done = copyHistoryArray(histData.done.slice(0), null, true);
    hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
  },

  setGutterMarker: docMethodOp(function(line, gutterID, value) {
    return changeLine(this, line, "gutter", function (line) {
      var markers = line.gutterMarkers || (line.gutterMarkers = {});
      markers[gutterID] = value;
      if (!value && isEmpty(markers)) { line.gutterMarkers = null; }
      return true
    })
  }),

  clearGutter: docMethodOp(function(gutterID) {
    var this$1 = this;

    this.iter(function (line) {
      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
        changeLine(this$1, line, "gutter", function () {
          line.gutterMarkers[gutterID] = null;
          if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null; }
          return true
        });
      }
    });
  }),

  lineInfo: function(line) {
    var n;
    if (typeof line == "number") {
      if (!isLine(this, line)) { return null }
      n = line;
      line = getLine(this, line);
      if (!line) { return null }
    } else {
      n = lineNo(line);
      if (n == null) { return null }
    }
    return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
            textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
            widgets: line.widgets}
  },

  addLineClass: docMethodOp(function(handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass";
      if (!line[prop]) { line[prop] = cls; }
      else if (classTest(cls).test(line[prop])) { return false }
      else { line[prop] += " " + cls; }
      return true
    })
  }),
  removeLineClass: docMethodOp(function(handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass";
      var cur = line[prop];
      if (!cur) { return false }
      else if (cls == null) { line[prop] = null; }
      else {
        var found = cur.match(classTest(cls));
        if (!found) { return false }
        var end = found.index + found[0].length;
        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
      }
      return true
    })
  }),

  addLineWidget: docMethodOp(function(handle, node, options) {
    return addLineWidget(this, handle, node, options)
  }),
  removeLineWidget: function(widget) { widget.clear(); },

  markText: function(from, to, options) {
    return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
  },
  setBookmark: function(pos, options) {
    var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                    insertLeft: options && options.insertLeft,
                    clearWhenEmpty: false, shared: options && options.shared,
                    handleMouseEvents: options && options.handleMouseEvents};
    pos = clipPos(this, pos);
    return markText(this, pos, pos, realOpts, "bookmark")
  },
  findMarksAt: function(pos) {
    pos = clipPos(this, pos);
    var markers = [], spans = getLine(this, pos.line).markedSpans;
    if (spans) { for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if ((span.from == null || span.from <= pos.ch) &&
          (span.to == null || span.to >= pos.ch))
        { markers.push(span.marker.parent || span.marker); }
    } }
    return markers
  },
  findMarks: function(from, to, filter) {
    from = clipPos(this, from); to = clipPos(this, to);
    var found = [], lineNo$$1 = from.line;
    this.iter(from.line, to.line + 1, function (line) {
      var spans = line.markedSpans;
      if (spans) { for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        if (!(span.to != null && lineNo$$1 == from.line && from.ch >= span.to ||
              span.from == null && lineNo$$1 != from.line ||
              span.from != null && lineNo$$1 == to.line && span.from >= to.ch) &&
            (!filter || filter(span.marker)))
          { found.push(span.marker.parent || span.marker); }
      } }
      ++lineNo$$1;
    });
    return found
  },
  getAllMarks: function() {
    var markers = [];
    this.iter(function (line) {
      var sps = line.markedSpans;
      if (sps) { for (var i = 0; i < sps.length; ++i)
        { if (sps[i].from != null) { markers.push(sps[i].marker); } } }
    });
    return markers
  },

  posFromIndex: function(off) {
    var ch, lineNo$$1 = this.first, sepSize = this.lineSeparator().length;
    this.iter(function (line) {
      var sz = line.text.length + sepSize;
      if (sz > off) { ch = off; return true }
      off -= sz;
      ++lineNo$$1;
    });
    return clipPos(this, Pos(lineNo$$1, ch))
  },
  indexFromPos: function (coords) {
    coords = clipPos(this, coords);
    var index = coords.ch;
    if (coords.line < this.first || coords.ch < 0) { return 0 }
    var sepSize = this.lineSeparator().length;
    this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
      index += line.text.length + sepSize;
    });
    return index
  },

  copy: function(copyHistory) {
    var doc = new Doc(getLines(this, this.first, this.first + this.size),
                      this.modeOption, this.first, this.lineSep, this.direction);
    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
    doc.sel = this.sel;
    doc.extend = false;
    if (copyHistory) {
      doc.history.undoDepth = this.history.undoDepth;
      doc.setHistory(this.getHistory());
    }
    return doc
  },

  linkedDoc: function(options) {
    if (!options) { options = {}; }
    var from = this.first, to = this.first + this.size;
    if (options.from != null && options.from > from) { from = options.from; }
    if (options.to != null && options.to < to) { to = options.to; }
    var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
    if (options.sharedHist) { copy.history = this.history
    ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
    copySharedMarkers(copy, findSharedMarkers(this));
    return copy
  },
  unlinkDoc: function(other) {
    var this$1 = this;

    if (other instanceof CodeMirror$1) { other = other.doc; }
    if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
      var link = this$1.linked[i];
      if (link.doc != other) { continue }
      this$1.linked.splice(i, 1);
      other.unlinkDoc(this$1);
      detachSharedMarkers(findSharedMarkers(this$1));
      break
    } }
    // If the histories were shared, split them again
    if (other.history == this.history) {
      var splitIds = [other.id];
      linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true);
      other.history = new History(null);
      other.history.done = copyHistoryArray(this.history.done, splitIds);
      other.history.undone = copyHistoryArray(this.history.undone, splitIds);
    }
  },
  iterLinkedDocs: function(f) {linkedDocs(this, f);},

  getMode: function() {return this.mode},
  getEditor: function() {return this.cm},

  splitLines: function(str) {
    if (this.lineSep) { return str.split(this.lineSep) }
    return splitLinesAuto(str)
  },
  lineSeparator: function() { return this.lineSep || "\n" },

  setDirection: docMethodOp(function (dir) {
    if (dir != "rtl") { dir = "ltr"; }
    if (dir == this.direction) { return }
    this.direction = dir;
    this.iter(function (line) { return line.order = null; });
    if (this.cm) { directionChanged(this.cm); }
  })
});

// Public alias.
Doc.prototype.eachLine = Doc.prototype.iter;

// Kludge to work around strange IE behavior where it'll sometimes
// re-fire a series of drag-related events right after the drop (#1551)
var lastDrop = 0;

function onDrop(e) {
  var cm = this;
  clearDragCursor(cm);
  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
    { return }
  e_preventDefault(e);
  if (ie) { lastDrop = +new Date; }
  var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
  if (!pos || cm.isReadOnly()) { return }
  // Might be a file drop, in which case we simply extract the text
  // and insert it.
  if (files && files.length && window.FileReader && window.File) {
    var n = files.length, text = Array(n), read = 0;
    var loadFile = function (file, i) {
      if (cm.options.allowDropFileTypes &&
          indexOf(cm.options.allowDropFileTypes, file.type) == -1)
        { return }

      var reader = new FileReader;
      reader.onload = operation(cm, function () {
        var content = reader.result;
        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) { content = ""; }
        text[i] = content;
        if (++read == n) {
          pos = clipPos(cm.doc, pos);
          var change = {from: pos, to: pos,
                        text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
                        origin: "paste"};
          makeChange(cm.doc, change);
          setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
        }
      });
      reader.readAsText(file);
    };
    for (var i = 0; i < n; ++i) { loadFile(files[i], i); }
  } else { // Normal drop
    // Don't do a replace if the drop happened inside of the selected text.
    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
      cm.state.draggingText(e);
      // Ensure the editor is re-focused
      setTimeout(function () { return cm.display.input.focus(); }, 20);
      return
    }
    try {
      var text$1 = e.dataTransfer.getData("Text");
      if (text$1) {
        var selected;
        if (cm.state.draggingText && !cm.state.draggingText.copy)
          { selected = cm.listSelections(); }
        setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
        if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
          { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag"); } }
        cm.replaceSelection(text$1, "around", "paste");
        cm.display.input.focus();
      }
    }
    catch(e){}
  }
}

function onDragStart(cm, e) {
  if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

  e.dataTransfer.setData("Text", cm.getSelection());
  e.dataTransfer.effectAllowed = "copyMove";

  // Use dummy image instead of default browsers image.
  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
  if (e.dataTransfer.setDragImage && !safari) {
    var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    if (presto) {
      img.width = img.height = 1;
      cm.display.wrapper.appendChild(img);
      // Force a relayout, or Opera won't use our image for some obscure reason
      img._top = img.offsetTop;
    }
    e.dataTransfer.setDragImage(img, 0, 0);
    if (presto) { img.parentNode.removeChild(img); }
  }
}

function onDragOver(cm, e) {
  var pos = posFromMouse(cm, e);
  if (!pos) { return }
  var frag = document.createDocumentFragment();
  drawSelectionCursor(cm, pos, frag);
  if (!cm.display.dragCursor) {
    cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
  }
  removeChildrenAndAdd(cm.display.dragCursor, frag);
}

function clearDragCursor(cm) {
  if (cm.display.dragCursor) {
    cm.display.lineSpace.removeChild(cm.display.dragCursor);
    cm.display.dragCursor = null;
  }
}

// These must be handled carefully, because naively registering a
// handler for each editor will cause the editors to never be
// garbage collected.

function forEachCodeMirror(f) {
  if (!document.getElementsByClassName) { return }
  var byClass = document.getElementsByClassName("CodeMirror");
  for (var i = 0; i < byClass.length; i++) {
    var cm = byClass[i].CodeMirror;
    if (cm) { f(cm); }
  }
}

var globalsRegistered = false;
function ensureGlobalHandlers() {
  if (globalsRegistered) { return }
  registerGlobalHandlers();
  globalsRegistered = true;
}
function registerGlobalHandlers() {
  // When the window resizes, we need to refresh active editors.
  var resizeTimer;
  on(window, "resize", function () {
    if (resizeTimer == null) { resizeTimer = setTimeout(function () {
      resizeTimer = null;
      forEachCodeMirror(onResize);
    }, 100); }
  });
  // When the window loses focus, we want to show the editor as blurred
  on(window, "blur", function () { return forEachCodeMirror(onBlur); });
}
// Called when the window resizes
function onResize(cm) {
  var d = cm.display;
  // Might be a text scaling operation, clear size caches.
  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
  d.scrollbarsClipped = false;
  cm.setSize();
}

var keyNames = {
  3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete", 145: "ScrollLock",
  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
};

// Number keys
for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i); }
// Alphabetic keys
for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1); }
// Function keys
for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2; }

var keyMap = {};

keyMap.basic = {
  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
  "Esc": "singleSelection"
};
// Note that the save and find-related commands aren't defined by
// default. User code or addons can define them. Unknown commands
// are simply ignored.
keyMap.pcDefault = {
  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
  "fallthrough": "basic"
};
// Very basic readline/emacs-style bindings, which are standard on Mac.
keyMap.emacsy = {
  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
  "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
  "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
  "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
  "Ctrl-O": "openLine"
};
keyMap.macDefault = {
  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
  "fallthrough": ["basic", "emacsy"]
};
keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

// KEYMAP DISPATCH

function normalizeKeyName(name) {
  var parts = name.split(/-(?!$)/);
  name = parts[parts.length - 1];
  var alt, ctrl, shift, cmd;
  for (var i = 0; i < parts.length - 1; i++) {
    var mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true; }
    else if (/^a(lt)?$/i.test(mod)) { alt = true; }
    else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
    else if (/^s(hift)?$/i.test(mod)) { shift = true; }
    else { throw new Error("Unrecognized modifier name: " + mod) }
  }
  if (alt) { name = "Alt-" + name; }
  if (ctrl) { name = "Ctrl-" + name; }
  if (cmd) { name = "Cmd-" + name; }
  if (shift) { name = "Shift-" + name; }
  return name
}

// This is a kludge to keep keymaps mostly working as raw objects
// (backwards compatibility) while at the same time support features
// like normalization and multi-stroke key bindings. It compiles a
// new normalized keymap, and then updates the old object to reflect
// this.
function normalizeKeyMap(keymap) {
  var copy = {};
  for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
    var value = keymap[keyname];
    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
    if (value == "...") { delete keymap[keyname]; continue }

    var keys = map(keyname.split(" "), normalizeKeyName);
    for (var i = 0; i < keys.length; i++) {
      var val = (void 0), name = (void 0);
      if (i == keys.length - 1) {
        name = keys.join(" ");
        val = value;
      } else {
        name = keys.slice(0, i + 1).join(" ");
        val = "...";
      }
      var prev = copy[name];
      if (!prev) { copy[name] = val; }
      else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
    }
    delete keymap[keyname];
  } }
  for (var prop in copy) { keymap[prop] = copy[prop]; }
  return keymap
}

function lookupKey(key, map$$1, handle, context) {
  map$$1 = getKeyMap(map$$1);
  var found = map$$1.call ? map$$1.call(key, context) : map$$1[key];
  if (found === false) { return "nothing" }
  if (found === "...") { return "multi" }
  if (found != null && handle(found)) { return "handled" }

  if (map$$1.fallthrough) {
    if (Object.prototype.toString.call(map$$1.fallthrough) != "[object Array]")
      { return lookupKey(key, map$$1.fallthrough, handle, context) }
    for (var i = 0; i < map$$1.fallthrough.length; i++) {
      var result = lookupKey(key, map$$1.fallthrough[i], handle, context);
      if (result) { return result }
    }
  }
}

// Modifier key presses don't count as 'real' key presses for the
// purpose of keymap fallthrough.
function isModifierKey(value) {
  var name = typeof value == "string" ? value : keyNames[value.keyCode];
  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
}

function addModifierNames(name, event, noShift) {
  var base = name;
  if (event.altKey && base != "Alt") { name = "Alt-" + name; }
  if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name; }
  if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") { name = "Cmd-" + name; }
  if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name; }
  return name
}

// Look up the name of a key as indicated by an event object.
function keyName(event, noShift) {
  if (presto && event.keyCode == 34 && event["char"]) { return false }
  var name = keyNames[event.keyCode];
  if (name == null || event.altGraphKey) { return false }
  // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
  // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
  if (event.keyCode == 3 && event.code) { name = event.code; }
  return addModifierNames(name, event, noShift)
}

function getKeyMap(val) {
  return typeof val == "string" ? keyMap[val] : val
}

// Helper for deleting text near the selection(s), used to implement
// backspace, delete, and similar functionality.
function deleteNearSelection(cm, compute) {
  var ranges = cm.doc.sel.ranges, kill = [];
  // Build up a set of ranges to kill first, merging overlapping
  // ranges.
  for (var i = 0; i < ranges.length; i++) {
    var toKill = compute(ranges[i]);
    while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
      var replaced = kill.pop();
      if (cmp(replaced.from, toKill.from) < 0) {
        toKill.from = replaced.from;
        break
      }
    }
    kill.push(toKill);
  }
  // Next, remove those actual ranges.
  runInOp(cm, function () {
    for (var i = kill.length - 1; i >= 0; i--)
      { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete"); }
    ensureCursorVisible(cm);
  });
}

function moveCharLogically(line, ch, dir) {
  var target = skipExtendingChars(line.text, ch + dir, dir);
  return target < 0 || target > line.text.length ? null : target
}

function moveLogically(line, start, dir) {
  var ch = moveCharLogically(line, start.ch, dir);
  return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
}

function endOfLine(visually, cm, lineObj, lineNo, dir) {
  if (visually) {
    var order = getOrder(lineObj, cm.doc.direction);
    if (order) {
      var part = dir < 0 ? lst(order) : order[0];
      var moveInStorageOrder = (dir < 0) == (part.level == 1);
      var sticky = moveInStorageOrder ? "after" : "before";
      var ch;
      // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
      // it could be that the last bidi part is not on the last visual line,
      // since visual lines contain content order-consecutive chunks.
      // Thus, in rtl, we are looking for the first (content-order) character
      // in the rtl chunk that is on the last line (that is, the same line
      // as the last (content-order) character).
      if (part.level > 0 || cm.doc.direction == "rtl") {
        var prep = prepareMeasureForLine(cm, lineObj);
        ch = dir < 0 ? lineObj.text.length - 1 : 0;
        var targetTop = measureCharPrepared(cm, prep, ch).top;
        ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch);
        if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1); }
      } else { ch = dir < 0 ? part.to : part.from; }
      return new Pos(lineNo, ch, sticky)
    }
  }
  return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
}

function moveVisually(cm, line, start, dir) {
  var bidi = getOrder(line, cm.doc.direction);
  if (!bidi) { return moveLogically(line, start, dir) }
  if (start.ch >= line.text.length) {
    start.ch = line.text.length;
    start.sticky = "before";
  } else if (start.ch <= 0) {
    start.ch = 0;
    start.sticky = "after";
  }
  var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
  if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
    // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
    // nothing interesting happens.
    return moveLogically(line, start, dir)
  }

  var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); };
  var prep;
  var getWrappedLineExtent = function (ch) {
    if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
    prep = prep || prepareMeasureForLine(cm, line);
    return wrappedLineExtentChar(cm, line, prep, ch)
  };
  var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

  if (cm.doc.direction == "rtl" || part.level == 1) {
    var moveInStorageOrder = (part.level == 1) == (dir < 0);
    var ch = mv(start, moveInStorageOrder ? 1 : -1);
    if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
      // Case 2: We move within an rtl part or in an rtl editor on the same visual line
      var sticky = moveInStorageOrder ? "before" : "after";
      return new Pos(start.line, ch, sticky)
    }
  }

  // Case 3: Could not move within this bidi part in this visual line, so leave
  // the current bidi part

  var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
    var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
      ? new Pos(start.line, mv(ch, 1), "before")
      : new Pos(start.line, ch, "after"); };

    for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
      var part = bidi[partPos];
      var moveInStorageOrder = (dir > 0) == (part.level != 1);
      var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);
      if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
      ch = moveInStorageOrder ? part.from : mv(part.to, -1);
      if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
    }
  };

  // Case 3a: Look for other bidi parts on the same visual line
  var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);
  if (res) { return res }

  // Case 3b: Look for other bidi parts on the next visual line
  var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);
  if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
    res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
    if (res) { return res }
  }

  // Case 4: Nowhere to move
  return null
}

// Commands are parameter-less actions that can be performed on an
// editor, mostly used for keybindings.
var commands = {
  selectAll: selectAll,
  singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
  killLine: function (cm) { return deleteNearSelection(cm, function (range) {
    if (range.empty()) {
      var len = getLine(cm.doc, range.head.line).text.length;
      if (range.head.ch == len && range.head.line < cm.lastLine())
        { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
      else
        { return {from: range.head, to: Pos(range.head.line, len)} }
    } else {
      return {from: range.from(), to: range.to()}
    }
  }); },
  deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
    from: Pos(range.from().line, 0),
    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
  }); }); },
  delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
    from: Pos(range.from().line, 0), to: range.from()
  }); }); },
  delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
    var top = cm.charCoords(range.head, "div").top + 5;
    var leftPos = cm.coordsChar({left: 0, top: top}, "div");
    return {from: leftPos, to: range.from()}
  }); },
  delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
    var top = cm.charCoords(range.head, "div").top + 5;
    var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
    return {from: range.from(), to: rightPos }
  }); },
  undo: function (cm) { return cm.undo(); },
  redo: function (cm) { return cm.redo(); },
  undoSelection: function (cm) { return cm.undoSelection(); },
  redoSelection: function (cm) { return cm.redoSelection(); },
  goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
  goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
  goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
    {origin: "+move", bias: 1}
  ); },
  goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
    {origin: "+move", bias: 1}
  ); },
  goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
    {origin: "+move", bias: -1}
  ); },
  goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.cursorCoords(range.head, "div").top + 5;
    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
  }, sel_move); },
  goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.cursorCoords(range.head, "div").top + 5;
    return cm.coordsChar({left: 0, top: top}, "div")
  }, sel_move); },
  goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.cursorCoords(range.head, "div").top + 5;
    var pos = cm.coordsChar({left: 0, top: top}, "div");
    if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
    return pos
  }, sel_move); },
  goLineUp: function (cm) { return cm.moveV(-1, "line"); },
  goLineDown: function (cm) { return cm.moveV(1, "line"); },
  goPageUp: function (cm) { return cm.moveV(-1, "page"); },
  goPageDown: function (cm) { return cm.moveV(1, "page"); },
  goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
  goCharRight: function (cm) { return cm.moveH(1, "char"); },
  goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
  goColumnRight: function (cm) { return cm.moveH(1, "column"); },
  goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
  goGroupRight: function (cm) { return cm.moveH(1, "group"); },
  goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
  goWordRight: function (cm) { return cm.moveH(1, "word"); },
  delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
  delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
  delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
  delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
  delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
  delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
  indentAuto: function (cm) { return cm.indentSelection("smart"); },
  indentMore: function (cm) { return cm.indentSelection("add"); },
  indentLess: function (cm) { return cm.indentSelection("subtract"); },
  insertTab: function (cm) { return cm.replaceSelection("\t"); },
  insertSoftTab: function (cm) {
    var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
    for (var i = 0; i < ranges.length; i++) {
      var pos = ranges[i].from();
      var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
      spaces.push(spaceStr(tabSize - col % tabSize));
    }
    cm.replaceSelections(spaces);
  },
  defaultTab: function (cm) {
    if (cm.somethingSelected()) { cm.indentSelection("add"); }
    else { cm.execCommand("insertTab"); }
  },
  // Swap the two chars left and right of each selection's head.
  // Move cursor behind the two swapped characters afterwards.
  //
  // Doesn't consider line feeds a character.
  // Doesn't scan more than one line above to find a character.
  // Doesn't do anything on an empty line.
  // Doesn't do anything with non-empty selections.
  transposeChars: function (cm) { return runInOp(cm, function () {
    var ranges = cm.listSelections(), newSel = [];
    for (var i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) { continue }
      var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
      if (line) {
        if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1); }
        if (cur.ch > 0) {
          cur = new Pos(cur.line, cur.ch + 1);
          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                          Pos(cur.line, cur.ch - 2), cur, "+transpose");
        } else if (cur.line > cm.doc.first) {
          var prev = getLine(cm.doc, cur.line - 1).text;
          if (prev) {
            cur = new Pos(cur.line, 1);
            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                            prev.charAt(prev.length - 1),
                            Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
          }
        }
      }
      newSel.push(new Range(cur, cur));
    }
    cm.setSelections(newSel);
  }); },
  newlineAndIndent: function (cm) { return runInOp(cm, function () {
    var sels = cm.listSelections();
    for (var i = sels.length - 1; i >= 0; i--)
      { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input"); }
    sels = cm.listSelections();
    for (var i$1 = 0; i$1 < sels.length; i$1++)
      { cm.indentLine(sels[i$1].from().line, null, true); }
    ensureCursorVisible(cm);
  }); },
  openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
  toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
};


function lineStart(cm, lineN) {
  var line = getLine(cm.doc, lineN);
  var visual = visualLine(line);
  if (visual != line) { lineN = lineNo(visual); }
  return endOfLine(true, cm, visual, lineN, 1)
}
function lineEnd(cm, lineN) {
  var line = getLine(cm.doc, lineN);
  var visual = visualLineEnd(line);
  if (visual != line) { lineN = lineNo(visual); }
  return endOfLine(true, cm, line, lineN, -1)
}
function lineStartSmart(cm, pos) {
  var start = lineStart(cm, pos.line);
  var line = getLine(cm.doc, start.line);
  var order = getOrder(line, cm.doc.direction);
  if (!order || order[0].level == 0) {
    var firstNonWS = Math.max(0, line.text.search(/\S/));
    var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
    return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
  }
  return start
}

// Run a handler that was bound to a key.
function doHandleBinding(cm, bound, dropShift) {
  if (typeof bound == "string") {
    bound = commands[bound];
    if (!bound) { return false }
  }
  // Ensure previous input has been read, so that the handler sees a
  // consistent view of the document
  cm.display.input.ensurePolled();
  var prevShift = cm.display.shift, done = false;
  try {
    if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
    if (dropShift) { cm.display.shift = false; }
    done = bound(cm) != Pass;
  } finally {
    cm.display.shift = prevShift;
    cm.state.suppressEdits = false;
  }
  return done
}

function lookupKeyForEditor(cm, name, handle) {
  for (var i = 0; i < cm.state.keyMaps.length; i++) {
    var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
    if (result) { return result }
  }
  return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
    || lookupKey(name, cm.options.keyMap, handle, cm)
}

// Note that, despite the name, this function is also used to check
// for bound mouse clicks.

var stopSeq = new Delayed;

function dispatchKey(cm, name, e, handle) {
  var seq = cm.state.keySeq;
  if (seq) {
    if (isModifierKey(name)) { return "handled" }
    if (/\'$/.test(name))
      { cm.state.keySeq = null; }
    else
      { stopSeq.set(50, function () {
        if (cm.state.keySeq == seq) {
          cm.state.keySeq = null;
          cm.display.input.reset();
        }
      }); }
    if (dispatchKeyInner(cm, seq + " " + name, e, handle)) { return true }
  }
  return dispatchKeyInner(cm, name, e, handle)
}

function dispatchKeyInner(cm, name, e, handle) {
  var result = lookupKeyForEditor(cm, name, handle);

  if (result == "multi")
    { cm.state.keySeq = name; }
  if (result == "handled")
    { signalLater(cm, "keyHandled", cm, name, e); }

  if (result == "handled" || result == "multi") {
    e_preventDefault(e);
    restartBlink(cm);
  }

  return !!result
}

// Handle a key from the keydown event.
function handleKeyBinding(cm, e) {
  var name = keyName(e, true);
  if (!name) { return false }

  if (e.shiftKey && !cm.state.keySeq) {
    // First try to resolve full name (including 'Shift-'). Failing
    // that, see if there is a cursor-motion command (starting with
    // 'go') bound to the keyname without 'Shift-'.
    return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
        || dispatchKey(cm, name, e, function (b) {
             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
               { return doHandleBinding(cm, b) }
           })
  } else {
    return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
  }
}

// Handle a key from the keypress event
function handleCharBinding(cm, e, ch) {
  return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
}

var lastStoppedKey = null;
function onKeyDown(e) {
  var cm = this;
  cm.curOp.focus = activeElt();
  if (signalDOMEvent(cm, e)) { return }
  // IE does strange things with escape.
  if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false; }
  var code = e.keyCode;
  cm.display.shift = code == 16 || e.shiftKey;
  var handled = handleKeyBinding(cm, e);
  if (presto) {
    lastStoppedKey = handled ? code : null;
    // Opera has no cut event... we try to at least catch the key combo
    if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
      { cm.replaceSelection("", null, "cut"); }
  }

  // Turn mouse into crosshair when Alt is held on Mac.
  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
    { showCrossHair(cm); }
}

function showCrossHair(cm) {
  var lineDiv = cm.display.lineDiv;
  addClass(lineDiv, "CodeMirror-crosshair");

  function up(e) {
    if (e.keyCode == 18 || !e.altKey) {
      rmClass(lineDiv, "CodeMirror-crosshair");
      off(document, "keyup", up);
      off(document, "mouseover", up);
    }
  }
  on(document, "keyup", up);
  on(document, "mouseover", up);
}

function onKeyUp(e) {
  if (e.keyCode == 16) { this.doc.sel.shift = false; }
  signalDOMEvent(this, e);
}

function onKeyPress(e) {
  var cm = this;
  if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
  var keyCode = e.keyCode, charCode = e.charCode;
  if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
  if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
  var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
  // Some browsers fire keypress events for backspace
  if (ch == "\x08") { return }
  if (handleCharBinding(cm, e, ch)) { return }
  cm.display.input.onKeyPress(e);
}

var DOUBLECLICK_DELAY = 400;

var PastClick = function(time, pos, button) {
  this.time = time;
  this.pos = pos;
  this.button = button;
};

PastClick.prototype.compare = function (time, pos, button) {
  return this.time + DOUBLECLICK_DELAY > time &&
    cmp(pos, this.pos) == 0 && button == this.button
};

var lastClick;
var lastDoubleClick;
function clickRepeat(pos, button) {
  var now = +new Date;
  if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
    lastClick = lastDoubleClick = null;
    return "triple"
  } else if (lastClick && lastClick.compare(now, pos, button)) {
    lastDoubleClick = new PastClick(now, pos, button);
    lastClick = null;
    return "double"
  } else {
    lastClick = new PastClick(now, pos, button);
    lastDoubleClick = null;
    return "single"
  }
}

// A mouse down can be a single click, double click, triple click,
// start of selection drag, start of text drag, new cursor
// (ctrl-click), rectangle drag (alt-drag), or xwin
// middle-click-paste. Or it might be a click on something we should
// not interfere with, such as a scrollbar or widget.
function onMouseDown(e) {
  var cm = this, display = cm.display;
  if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
  display.input.ensurePolled();
  display.shift = e.shiftKey;

  if (eventInWidget(display, e)) {
    if (!webkit) {
      // Briefly turn off draggability, to allow widgets to do
      // normal dragging things.
      display.scroller.draggable = false;
      setTimeout(function () { return display.scroller.draggable = true; }, 100);
    }
    return
  }
  if (clickInGutter(cm, e)) { return }
  var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
  window.focus();

  // #3261: make sure, that we're not starting a second selection
  if (button == 1 && cm.state.selectingText)
    { cm.state.selectingText(e); }

  if (pos && handleMappedButton(cm, button, pos, repeat, e)) { return }

  if (button == 1) {
    if (pos) { leftButtonDown(cm, pos, repeat, e); }
    else if (e_target(e) == display.scroller) { e_preventDefault(e); }
  } else if (button == 2) {
    if (pos) { extendSelection(cm.doc, pos); }
    setTimeout(function () { return display.input.focus(); }, 20);
  } else if (button == 3) {
    if (captureRightClick) { onContextMenu(cm, e); }
    else { delayBlurEvent(cm); }
  }
}

function handleMappedButton(cm, button, pos, repeat, event) {
  var name = "Click";
  if (repeat == "double") { name = "Double" + name; }
  else if (repeat == "triple") { name = "Triple" + name; }
  name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;

  return dispatchKey(cm,  addModifierNames(name, event), event, function (bound) {
    if (typeof bound == "string") { bound = commands[bound]; }
    if (!bound) { return false }
    var done = false;
    try {
      if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
      done = bound(cm, pos) != Pass;
    } finally {
      cm.state.suppressEdits = false;
    }
    return done
  })
}

function configureMouse(cm, repeat, event) {
  var option = cm.getOption("configureMouse");
  var value = option ? option(cm, repeat, event) : {};
  if (value.unit == null) {
    var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
    value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
  }
  if (value.extend == null || cm.doc.extend) { value.extend = cm.doc.extend || event.shiftKey; }
  if (value.addNew == null) { value.addNew = mac ? event.metaKey : event.ctrlKey; }
  if (value.moveOnDrag == null) { value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey); }
  return value
}

function leftButtonDown(cm, pos, repeat, event) {
  if (ie) { setTimeout(bind(ensureFocus, cm), 0); }
  else { cm.curOp.focus = activeElt(); }

  var behavior = configureMouse(cm, repeat, event);

  var sel = cm.doc.sel, contained;
  if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
      repeat == "single" && (contained = sel.contains(pos)) > -1 &&
      (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
      (cmp(contained.to(), pos) > 0 || pos.xRel < 0))
    { leftButtonStartDrag(cm, event, pos, behavior); }
  else
    { leftButtonSelect(cm, event, pos, behavior); }
}

// Start a text drag. When it ends, see if any dragging actually
// happen, and treat as a click if it didn't.
function leftButtonStartDrag(cm, event, pos, behavior) {
  var display = cm.display, moved = false;
  var dragEnd = operation(cm, function (e) {
    if (webkit) { display.scroller.draggable = false; }
    cm.state.draggingText = false;
    off(display.wrapper.ownerDocument, "mouseup", dragEnd);
    off(display.wrapper.ownerDocument, "mousemove", mouseMove);
    off(display.scroller, "dragstart", dragStart);
    off(display.scroller, "drop", dragEnd);
    if (!moved) {
      e_preventDefault(e);
      if (!behavior.addNew)
        { extendSelection(cm.doc, pos, null, null, behavior.extend); }
      // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
      if (webkit || ie && ie_version == 9)
        { setTimeout(function () {display.wrapper.ownerDocument.body.focus(); display.input.focus();}, 20); }
      else
        { display.input.focus(); }
    }
  });
  var mouseMove = function(e2) {
    moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
  };
  var dragStart = function () { return moved = true; };
  // Let the drag handler handle this.
  if (webkit) { display.scroller.draggable = true; }
  cm.state.draggingText = dragEnd;
  dragEnd.copy = !behavior.moveOnDrag;
  // IE's approach to draggable
  if (display.scroller.dragDrop) { display.scroller.dragDrop(); }
  on(display.wrapper.ownerDocument, "mouseup", dragEnd);
  on(display.wrapper.ownerDocument, "mousemove", mouseMove);
  on(display.scroller, "dragstart", dragStart);
  on(display.scroller, "drop", dragEnd);

  delayBlurEvent(cm);
  setTimeout(function () { return display.input.focus(); }, 20);
}

function rangeForUnit(cm, pos, unit) {
  if (unit == "char") { return new Range(pos, pos) }
  if (unit == "word") { return cm.findWordAt(pos) }
  if (unit == "line") { return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
  var result = unit(cm, pos);
  return new Range(result.from, result.to)
}

// Normal selection, as opposed to text dragging.
function leftButtonSelect(cm, event, start, behavior) {
  var display = cm.display, doc = cm.doc;
  e_preventDefault(event);

  var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
  if (behavior.addNew && !behavior.extend) {
    ourIndex = doc.sel.contains(start);
    if (ourIndex > -1)
      { ourRange = ranges[ourIndex]; }
    else
      { ourRange = new Range(start, start); }
  } else {
    ourRange = doc.sel.primary();
    ourIndex = doc.sel.primIndex;
  }

  if (behavior.unit == "rectangle") {
    if (!behavior.addNew) { ourRange = new Range(start, start); }
    start = posFromMouse(cm, event, true, true);
    ourIndex = -1;
  } else {
    var range$$1 = rangeForUnit(cm, start, behavior.unit);
    if (behavior.extend)
      { ourRange = extendRange(ourRange, range$$1.anchor, range$$1.head, behavior.extend); }
    else
      { ourRange = range$$1; }
  }

  if (!behavior.addNew) {
    ourIndex = 0;
    setSelection(doc, new Selection([ourRange], 0), sel_mouse);
    startSel = doc.sel;
  } else if (ourIndex == -1) {
    ourIndex = ranges.length;
    setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
                 {scroll: false, origin: "*mouse"});
  } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
    setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                 {scroll: false, origin: "*mouse"});
    startSel = doc.sel;
  } else {
    replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
  }

  var lastPos = start;
  function extendTo(pos) {
    if (cmp(lastPos, pos) == 0) { return }
    lastPos = pos;

    if (behavior.unit == "rectangle") {
      var ranges = [], tabSize = cm.options.tabSize;
      var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
      var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
      var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
      for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
           line <= end; line++) {
        var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
        if (left == right)
          { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))); }
        else if (text.length > leftPos)
          { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))); }
      }
      if (!ranges.length) { ranges.push(new Range(start, start)); }
      setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                   {origin: "*mouse", scroll: false});
      cm.scrollIntoView(pos);
    } else {
      var oldRange = ourRange;
      var range$$1 = rangeForUnit(cm, pos, behavior.unit);
      var anchor = oldRange.anchor, head;
      if (cmp(range$$1.anchor, anchor) > 0) {
        head = range$$1.head;
        anchor = minPos(oldRange.from(), range$$1.anchor);
      } else {
        head = range$$1.anchor;
        anchor = maxPos(oldRange.to(), range$$1.head);
      }
      var ranges$1 = startSel.ranges.slice(0);
      ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc, anchor), head));
      setSelection(doc, normalizeSelection(ranges$1, ourIndex), sel_mouse);
    }
  }

  var editorSize = display.wrapper.getBoundingClientRect();
  // Used to ensure timeout re-tries don't fire when another extend
  // happened in the meantime (clearTimeout isn't reliable -- at
  // least on Chrome, the timeouts still happen even when cleared,
  // if the clear happens after their scheduled firing time).
  var counter = 0;

  function extend(e) {
    var curCount = ++counter;
    var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
    if (!cur) { return }
    if (cmp(cur, lastPos) != 0) {
      cm.curOp.focus = activeElt();
      extendTo(cur);
      var visible = visibleLines(display, doc);
      if (cur.line >= visible.to || cur.line < visible.from)
        { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e); }}), 150); }
    } else {
      var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
      if (outside) { setTimeout(operation(cm, function () {
        if (counter != curCount) { return }
        display.scroller.scrollTop += outside;
        extend(e);
      }), 50); }
    }
  }

  function done(e) {
    cm.state.selectingText = false;
    counter = Infinity;
    e_preventDefault(e);
    display.input.focus();
    off(display.wrapper.ownerDocument, "mousemove", move);
    off(display.wrapper.ownerDocument, "mouseup", up);
    doc.history.lastSelOrigin = null;
  }

  var move = operation(cm, function (e) {
    if (e.buttons === 0 || !e_button(e)) { done(e); }
    else { extend(e); }
  });
  var up = operation(cm, done);
  cm.state.selectingText = up;
  on(display.wrapper.ownerDocument, "mousemove", move);
  on(display.wrapper.ownerDocument, "mouseup", up);
}

// Used when mouse-selecting to adjust the anchor to the proper side
// of a bidi jump depending on the visual position of the head.
function bidiSimplify(cm, range$$1) {
  var anchor = range$$1.anchor;
  var head = range$$1.head;
  var anchorLine = getLine(cm.doc, anchor.line);
  if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) { return range$$1 }
  var order = getOrder(anchorLine);
  if (!order) { return range$$1 }
  var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
  if (part.from != anchor.ch && part.to != anchor.ch) { return range$$1 }
  var boundary = index + ((part.from == anchor.ch) == (part.level != 1) ? 0 : 1);
  if (boundary == 0 || boundary == order.length) { return range$$1 }

  // Compute the relative visual position of the head compared to the
  // anchor (<0 is to the left, >0 to the right)
  var leftSide;
  if (head.line != anchor.line) {
    leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
  } else {
    var headIndex = getBidiPartAt(order, head.ch, head.sticky);
    var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
    if (headIndex == boundary - 1 || headIndex == boundary)
      { leftSide = dir < 0; }
    else
      { leftSide = dir > 0; }
  }

  var usePart = order[boundary + (leftSide ? -1 : 0)];
  var from = leftSide == (usePart.level == 1);
  var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
  return anchor.ch == ch && anchor.sticky == sticky ? range$$1 : new Range(new Pos(anchor.line, ch, sticky), head)
}


// Determines whether an event happened in the gutter, and fires the
// handlers for the corresponding event.
function gutterEvent(cm, e, type, prevent) {
  var mX, mY;
  if (e.touches) {
    mX = e.touches[0].clientX;
    mY = e.touches[0].clientY;
  } else {
    try { mX = e.clientX; mY = e.clientY; }
    catch(e) { return false }
  }
  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
  if (prevent) { e_preventDefault(e); }

  var display = cm.display;
  var lineBox = display.lineDiv.getBoundingClientRect();

  if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
  mY -= lineBox.top - display.viewOffset;

  for (var i = 0; i < cm.options.gutters.length; ++i) {
    var g = display.gutters.childNodes[i];
    if (g && g.getBoundingClientRect().right >= mX) {
      var line = lineAtHeight(cm.doc, mY);
      var gutter = cm.options.gutters[i];
      signal(cm, type, cm, line, gutter, e);
      return e_defaultPrevented(e)
    }
  }
}

function clickInGutter(cm, e) {
  return gutterEvent(cm, e, "gutterClick", true)
}

// CONTEXT MENU HANDLING

// To make the context menu work, we need to briefly unhide the
// textarea (making it as unobtrusive as possible) to let the
// right-click take effect on it.
function onContextMenu(cm, e) {
  if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
  if (signalDOMEvent(cm, e, "contextmenu")) { return }
  cm.display.input.onContextMenu(e);
}

function contextMenuInGutter(cm, e) {
  if (!hasHandler(cm, "gutterContextMenu")) { return false }
  return gutterEvent(cm, e, "gutterContextMenu", false)
}

function themeChanged(cm) {
  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
  clearCaches(cm);
}

var Init = {toString: function(){return "CodeMirror.Init"}};

var defaults = {};
var optionHandlers = {};

function defineOptions(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers;

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt;
    if (handle) { optionHandlers[name] =
      notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old); }} : handle; }
  }

  CodeMirror.defineOption = option;

  // Passed to option handlers when there is no old value.
  CodeMirror.Init = Init;

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", function (cm, val) { return cm.setValue(val); }, true);
  option("mode", null, function (cm, val) {
    cm.doc.modeOption = val;
    loadMode(cm);
  }, true);

  option("indentUnit", 2, loadMode, true);
  option("indentWithTabs", false);
  option("smartIndent", true);
  option("tabSize", 4, function (cm) {
    resetModeState(cm);
    clearCaches(cm);
    regChange(cm);
  }, true);

  option("lineSeparator", null, function (cm, val) {
    cm.doc.lineSep = val;
    if (!val) { return }
    var newBreaks = [], lineNo = cm.doc.first;
    cm.doc.iter(function (line) {
      for (var pos = 0;;) {
        var found = line.text.indexOf(val, pos);
        if (found == -1) { break }
        pos = found + val.length;
        newBreaks.push(Pos(lineNo, found));
      }
      lineNo++;
    });
    for (var i = newBreaks.length - 1; i >= 0; i--)
      { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)); }
  });
  option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val, old) {
    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
    if (old != Init) { cm.refresh(); }
  });
  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true);
  option("electricChars", true);
  option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
  }, true);
  option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true);
  option("rtlMoveVisually", !windows);
  option("wholeLineUpdateBefore", true);

  option("theme", "default", function (cm) {
    themeChanged(cm);
    guttersChanged(cm);
  }, true);
  option("keyMap", "default", function (cm, val, old) {
    var next = getKeyMap(val);
    var prev = old != Init && getKeyMap(old);
    if (prev && prev.detach) { prev.detach(cm, next); }
    if (next.attach) { next.attach(cm, prev || null); }
  });
  option("extraKeys", null);
  option("configureMouse", null);

  option("lineWrapping", false, wrappingChanged, true);
  option("gutters", [], function (cm) {
    setGuttersForLineNumbers(cm.options);
    guttersChanged(cm);
  }, true);
  option("fixedGutter", true, function (cm, val) {
    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
    cm.refresh();
  }, true);
  option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true);
  option("scrollbarStyle", "native", function (cm) {
    initScrollbars(cm);
    updateScrollbars(cm);
    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
  }, true);
  option("lineNumbers", false, function (cm) {
    setGuttersForLineNumbers(cm.options);
    guttersChanged(cm);
  }, true);
  option("firstLineNumber", 1, guttersChanged, true);
  option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true);
  option("showCursorWhenSelecting", false, updateSelection, true);

  option("resetSelectionOnContextMenu", true);
  option("lineWiseCopyCut", true);
  option("pasteLinesPerSelection", true);

  option("readOnly", false, function (cm, val) {
    if (val == "nocursor") {
      onBlur(cm);
      cm.display.input.blur();
    }
    cm.display.input.readOnlyChanged(val);
  });
  option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset(); }}, true);
  option("dragDrop", true, dragDropChanged);
  option("allowDropFileTypes", null);

  option("cursorBlinkRate", 530);
  option("cursorScrollMargin", 0);
  option("cursorHeight", 1, updateSelection, true);
  option("singleCursorHeightPerLine", true, updateSelection, true);
  option("workTime", 100);
  option("workDelay", 100);
  option("flattenSpans", true, resetModeState, true);
  option("addModeClass", false, resetModeState, true);
  option("pollInterval", 100);
  option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; });
  option("historyEventDelay", 1250);
  option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true);
  option("maxHighlightLength", 10000, resetModeState, true);
  option("moveInputWithCursor", true, function (cm, val) {
    if (!val) { cm.display.input.resetPosition(); }
  });

  option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; });
  option("autofocus", null);
  option("direction", "ltr", function (cm, val) { return cm.doc.setDirection(val); }, true);
}

function guttersChanged(cm) {
  updateGutters(cm);
  regChange(cm);
  alignHorizontally(cm);
}

function dragDropChanged(cm, value, old) {
  var wasOn = old && old != Init;
  if (!value != !wasOn) {
    var funcs = cm.display.dragFunctions;
    var toggle = value ? on : off;
    toggle(cm.display.scroller, "dragstart", funcs.start);
    toggle(cm.display.scroller, "dragenter", funcs.enter);
    toggle(cm.display.scroller, "dragover", funcs.over);
    toggle(cm.display.scroller, "dragleave", funcs.leave);
    toggle(cm.display.scroller, "drop", funcs.drop);
  }
}

function wrappingChanged(cm) {
  if (cm.options.lineWrapping) {
    addClass(cm.display.wrapper, "CodeMirror-wrap");
    cm.display.sizer.style.minWidth = "";
    cm.display.sizerWidth = null;
  } else {
    rmClass(cm.display.wrapper, "CodeMirror-wrap");
    findMaxLine(cm);
  }
  estimateLineHeights(cm);
  regChange(cm);
  clearCaches(cm);
  setTimeout(function () { return updateScrollbars(cm); }, 100);
}

// A CodeMirror instance represents an editor. This is the object
// that user code is usually dealing with.

function CodeMirror$1(place, options) {
  var this$1 = this;

  if (!(this instanceof CodeMirror$1)) { return new CodeMirror$1(place, options) }

  this.options = options = options ? copyObj(options) : {};
  // Determine effective options based on given values and defaults.
  copyObj(defaults, options, false);
  setGuttersForLineNumbers(options);

  var doc = options.value;
  if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction); }
  else if (options.mode) { doc.modeOption = options.mode; }
  this.doc = doc;

  var input = new CodeMirror$1.inputStyles[options.inputStyle](this);
  var display = this.display = new Display(place, doc, input);
  display.wrapper.CodeMirror = this;
  updateGutters(this);
  themeChanged(this);
  if (options.lineWrapping)
    { this.display.wrapper.className += " CodeMirror-wrap"; }
  initScrollbars(this);

  this.state = {
    keyMaps: [],  // stores maps added by addKeyMap
    overlays: [], // highlighting overlays, as added by addOverlay
    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
    overwrite: false,
    delayingBlurEvent: false,
    focused: false,
    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
    pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
    selectingText: false,
    draggingText: false,
    highlight: new Delayed(), // stores highlight worker timeout
    keySeq: null,  // Unfinished key sequence
    specialChars: null
  };

  if (options.autofocus && !mobile) { display.input.focus(); }

  // Override magic textarea content restore that IE sometimes does
  // on our hidden textarea on reload
  if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20); }

  registerEventHandlers(this);
  ensureGlobalHandlers();

  startOperation(this);
  this.curOp.forceUpdate = true;
  attachDoc(this, doc);

  if ((options.autofocus && !mobile) || this.hasFocus())
    { setTimeout(bind(onFocus, this), 20); }
  else
    { onBlur(this); }

  for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
    { optionHandlers[opt](this$1, options[opt], Init); } }
  maybeUpdateLineNumberWidth(this);
  if (options.finishInit) { options.finishInit(this); }
  for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this$1); }
  endOperation(this);
  // Suppress optimizelegibility in Webkit, since it breaks text
  // measuring on line wrapping boundaries.
  if (webkit && options.lineWrapping &&
      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
    { display.lineDiv.style.textRendering = "auto"; }
}

// The default configuration options.
CodeMirror$1.defaults = defaults;
// Functions to run when options are changed.
CodeMirror$1.optionHandlers = optionHandlers;

// Attach the necessary event handlers when initializing the editor
function registerEventHandlers(cm) {
  var d = cm.display;
  on(d.scroller, "mousedown", operation(cm, onMouseDown));
  // Older IE's will not fire a second mousedown for a double click
  if (ie && ie_version < 11)
    { on(d.scroller, "dblclick", operation(cm, function (e) {
      if (signalDOMEvent(cm, e)) { return }
      var pos = posFromMouse(cm, e);
      if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
      e_preventDefault(e);
      var word = cm.findWordAt(pos);
      extendSelection(cm.doc, word.anchor, word.head);
    })); }
  else
    { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }); }
  // Some browsers fire contextmenu *after* opening the menu, at
  // which point we can't mess with it anymore. Context menu is
  // handled in onMouseDown for these browsers.
  if (!captureRightClick) { on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); }); }

  // Used to suppress mouse event handling when a touch happens
  var touchFinished, prevTouch = {end: 0};
  function finishTouch() {
    if (d.activeTouch) {
      touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000);
      prevTouch = d.activeTouch;
      prevTouch.end = +new Date;
    }
  }
  function isMouseLikeTouchEvent(e) {
    if (e.touches.length != 1) { return false }
    var touch = e.touches[0];
    return touch.radiusX <= 1 && touch.radiusY <= 1
  }
  function farAway(touch, other) {
    if (other.left == null) { return true }
    var dx = other.left - touch.left, dy = other.top - touch.top;
    return dx * dx + dy * dy > 20 * 20
  }
  on(d.scroller, "touchstart", function (e) {
    if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
      d.input.ensurePolled();
      clearTimeout(touchFinished);
      var now = +new Date;
      d.activeTouch = {start: now, moved: false,
                       prev: now - prevTouch.end <= 300 ? prevTouch : null};
      if (e.touches.length == 1) {
        d.activeTouch.left = e.touches[0].pageX;
        d.activeTouch.top = e.touches[0].pageY;
      }
    }
  });
  on(d.scroller, "touchmove", function () {
    if (d.activeTouch) { d.activeTouch.moved = true; }
  });
  on(d.scroller, "touchend", function (e) {
    var touch = d.activeTouch;
    if (touch && !eventInWidget(d, e) && touch.left != null &&
        !touch.moved && new Date - touch.start < 300) {
      var pos = cm.coordsChar(d.activeTouch, "page"), range;
      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
        { range = new Range(pos, pos); }
      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
        { range = cm.findWordAt(pos); }
      else // Triple tap
        { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))); }
      cm.setSelection(range.anchor, range.head);
      cm.focus();
      e_preventDefault(e);
    }
    finishTouch();
  });
  on(d.scroller, "touchcancel", finishTouch);

  // Sync scrolling between fake scrollbars and real scrollable
  // area, ensure viewport is updated when scrolling.
  on(d.scroller, "scroll", function () {
    if (d.scroller.clientHeight) {
      updateScrollTop(cm, d.scroller.scrollTop);
      setScrollLeft(cm, d.scroller.scrollLeft, true);
      signal(cm, "scroll", cm);
    }
  });

  // Listen to wheel events in order to try and update the viewport on time.
  on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); });
  on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); });

  // Prevent wrapper from ever scrolling
  on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

  d.dragFunctions = {
    enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e); }},
    over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
    start: function (e) { return onDragStart(cm, e); },
    drop: operation(cm, onDrop),
    leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
  };

  var inp = d.input.getField();
  on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); });
  on(inp, "keydown", operation(cm, onKeyDown));
  on(inp, "keypress", operation(cm, onKeyPress));
  on(inp, "focus", function (e) { return onFocus(cm, e); });
  on(inp, "blur", function (e) { return onBlur(cm, e); });
}

var initHooks = [];
CodeMirror$1.defineInitHook = function (f) { return initHooks.push(f); };

// Indent the given line. The how parameter can be "smart",
// "add"/null, "subtract", or "prev". When aggressive is false
// (typically set to true for forced single-line indents), empty
// lines are not indented, and places where the mode returns Pass
// are left alone.
function indentLine(cm, n, how, aggressive) {
  var doc = cm.doc, state;
  if (how == null) { how = "add"; }
  if (how == "smart") {
    // Fall back to "prev" when the mode doesn't have an indentation
    // method.
    if (!doc.mode.indent) { how = "prev"; }
    else { state = getContextBefore(cm, n).state; }
  }

  var tabSize = cm.options.tabSize;
  var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
  if (line.stateAfter) { line.stateAfter = null; }
  var curSpaceString = line.text.match(/^\s*/)[0], indentation;
  if (!aggressive && !/\S/.test(line.text)) {
    indentation = 0;
    how = "not";
  } else if (how == "smart") {
    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
    if (indentation == Pass || indentation > 150) {
      if (!aggressive) { return }
      how = "prev";
    }
  }
  if (how == "prev") {
    if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize); }
    else { indentation = 0; }
  } else if (how == "add") {
    indentation = curSpace + cm.options.indentUnit;
  } else if (how == "subtract") {
    indentation = curSpace - cm.options.indentUnit;
  } else if (typeof how == "number") {
    indentation = curSpace + how;
  }
  indentation = Math.max(0, indentation);

  var indentString = "", pos = 0;
  if (cm.options.indentWithTabs)
    { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";} }
  if (pos < indentation) { indentString += spaceStr(indentation - pos); }

  if (indentString != curSpaceString) {
    replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
    line.stateAfter = null;
    return true
  } else {
    // Ensure that, if the cursor was in the whitespace at the start
    // of the line, it is moved to the end of that space.
    for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
      var range = doc.sel.ranges[i$1];
      if (range.head.line == n && range.head.ch < curSpaceString.length) {
        var pos$1 = Pos(n, curSpaceString.length);
        replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
        break
      }
    }
  }
}

// This will be set to a {lineWise: bool, text: [string]} object, so
// that, when pasting, we know what kind of selections the copied
// text was made out of.
var lastCopied = null;

function setLastCopied(newLastCopied) {
  lastCopied = newLastCopied;
}

function applyTextInput(cm, inserted, deleted, sel, origin) {
  var doc = cm.doc;
  cm.display.shift = false;
  if (!sel) { sel = doc.sel; }

  var paste = cm.state.pasteIncoming || origin == "paste";
  var textLines = splitLinesAuto(inserted), multiPaste = null;
  // When pasting N lines into N selections, insert one line per selection
  if (paste && sel.ranges.length > 1) {
    if (lastCopied && lastCopied.text.join("\n") == inserted) {
      if (sel.ranges.length % lastCopied.text.length == 0) {
        multiPaste = [];
        for (var i = 0; i < lastCopied.text.length; i++)
          { multiPaste.push(doc.splitLines(lastCopied.text[i])); }
      }
    } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
      multiPaste = map(textLines, function (l) { return [l]; });
    }
  }

  var updateInput;
  // Normal behavior is to insert the new text into every selection
  for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
    var range$$1 = sel.ranges[i$1];
    var from = range$$1.from(), to = range$$1.to();
    if (range$$1.empty()) {
      if (deleted && deleted > 0) // Handle deletion
        { from = Pos(from.line, from.ch - deleted); }
      else if (cm.state.overwrite && !paste) // Handle overwrite
        { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)); }
      else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
        { from = to = Pos(from.line, 0); }
    }
    updateInput = cm.curOp.updateInput;
    var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                       origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
    makeChange(cm.doc, changeEvent);
    signalLater(cm, "inputRead", cm, changeEvent);
  }
  if (inserted && !paste)
    { triggerElectric(cm, inserted); }

  ensureCursorVisible(cm);
  cm.curOp.updateInput = updateInput;
  cm.curOp.typing = true;
  cm.state.pasteIncoming = cm.state.cutIncoming = false;
}

function handlePaste(e, cm) {
  var pasted = e.clipboardData && e.clipboardData.getData("Text");
  if (pasted) {
    e.preventDefault();
    if (!cm.isReadOnly() && !cm.options.disableInput)
      { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }); }
    return true
  }
}

function triggerElectric(cm, inserted) {
  // When an 'electric' character is inserted, immediately trigger a reindent
  if (!cm.options.electricChars || !cm.options.smartIndent) { return }
  var sel = cm.doc.sel;

  for (var i = sel.ranges.length - 1; i >= 0; i--) {
    var range$$1 = sel.ranges[i];
    if (range$$1.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range$$1.head.line)) { continue }
    var mode = cm.getModeAt(range$$1.head);
    var indented = false;
    if (mode.electricChars) {
      for (var j = 0; j < mode.electricChars.length; j++)
        { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
          indented = indentLine(cm, range$$1.head.line, "smart");
          break
        } }
    } else if (mode.electricInput) {
      if (mode.electricInput.test(getLine(cm.doc, range$$1.head.line).text.slice(0, range$$1.head.ch)))
        { indented = indentLine(cm, range$$1.head.line, "smart"); }
    }
    if (indented) { signalLater(cm, "electricInput", cm, range$$1.head.line); }
  }
}

function copyableRanges(cm) {
  var text = [], ranges = [];
  for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
    var line = cm.doc.sel.ranges[i].head.line;
    var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
    ranges.push(lineRange);
    text.push(cm.getRange(lineRange.anchor, lineRange.head));
  }
  return {text: text, ranges: ranges}
}

function disableBrowserMagic(field, spellcheck) {
  field.setAttribute("autocorrect", "off");
  field.setAttribute("autocapitalize", "off");
  field.setAttribute("spellcheck", !!spellcheck);
}

function hiddenTextarea() {
  var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
  var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
  // The textarea is kept positioned near the cursor to prevent the
  // fact that it'll be scrolled into view on input from scrolling
  // our fake cursor out of view. On webkit, when wrap=off, paste is
  // very slow. So make the area wide instead.
  if (webkit) { te.style.width = "1000px"; }
  else { te.setAttribute("wrap", "off"); }
  // If border: 0; -- iOS fails to open keyboard (issue #1287)
  if (ios) { te.style.border = "1px solid black"; }
  disableBrowserMagic(te);
  return div
}

// The publicly visible API. Note that methodOp(f) means
// 'wrap f in an operation, performed on its `this` parameter'.

// This is not the complete set of editor methods. Most of the
// methods defined on the Doc type are also injected into
// CodeMirror.prototype, for backwards compatibility and
// convenience.

var addEditorMethods = function(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers;

  var helpers = CodeMirror.helpers = {};

  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function(){window.focus(); this.display.input.focus();},

    setOption: function(option, value) {
      var options = this.options, old = options[option];
      if (options[option] == value && option != "mode") { return }
      options[option] = value;
      if (optionHandlers.hasOwnProperty(option))
        { operation(this, optionHandlers[option])(this, value, old); }
      signal(this, "optionChange", this, option);
    },

    getOption: function(option) {return this.options[option]},
    getDoc: function() {return this.doc},

    addKeyMap: function(map$$1, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map$$1));
    },
    removeKeyMap: function(map$$1) {
      var maps = this.state.keyMaps;
      for (var i = 0; i < maps.length; ++i)
        { if (maps[i] == map$$1 || maps[i].name == map$$1) {
          maps.splice(i, 1);
          return true
        } }
    },

    addOverlay: methodOp(function(spec, options) {
      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
      if (mode.startState) { throw new Error("Overlays may not be stateful.") }
      insertSorted(this.state.overlays,
                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                    priority: (options && options.priority) || 0},
                   function (overlay) { return overlay.priority; });
      this.state.modeGen++;
      regChange(this);
    }),
    removeOverlay: methodOp(function(spec) {
      var this$1 = this;

      var overlays = this.state.overlays;
      for (var i = 0; i < overlays.length; ++i) {
        var cur = overlays[i].modeSpec;
        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1);
          this$1.state.modeGen++;
          regChange(this$1);
          return
        }
      }
    }),

    indentLine: methodOp(function(n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev"; }
        else { dir = dir ? "add" : "subtract"; }
      }
      if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive); }
    }),
    indentSelection: methodOp(function(how) {
      var this$1 = this;

      var ranges = this.doc.sel.ranges, end = -1;
      for (var i = 0; i < ranges.length; i++) {
        var range$$1 = ranges[i];
        if (!range$$1.empty()) {
          var from = range$$1.from(), to = range$$1.to();
          var start = Math.max(end, from.line);
          end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
          for (var j = start; j < end; ++j)
            { indentLine(this$1, j, how); }
          var newRanges = this$1.doc.sel.ranges;
          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
            { replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll); }
        } else if (range$$1.head.line > end) {
          indentLine(this$1, range$$1.head.line, how, true);
          end = range$$1.head.line;
          if (i == this$1.doc.sel.primIndex) { ensureCursorVisible(this$1); }
        }
      }
    }),

    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(pos, precise) {
      return takeToken(this, pos, precise)
    },

    getLineTokens: function(line, precise) {
      return takeToken(this, Pos(line), precise, true)
    },

    getTokenTypeAt: function(pos) {
      pos = clipPos(this.doc, pos);
      var styles = getLineStyles(this, getLine(this.doc, pos.line));
      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
      var type;
      if (ch == 0) { type = styles[2]; }
      else { for (;;) {
        var mid = (before + after) >> 1;
        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid; }
        else if (styles[mid * 2 + 1] < ch) { before = mid + 1; }
        else { type = styles[mid * 2 + 2]; break }
      } }
      var cut = type ? type.indexOf("overlay ") : -1;
      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
    },

    getModeAt: function(pos) {
      var mode = this.doc.mode;
      if (!mode.innerMode) { return mode }
      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
    },

    getHelper: function(pos, type) {
      return this.getHelpers(pos, type)[0]
    },

    getHelpers: function(pos, type) {
      var this$1 = this;

      var found = [];
      if (!helpers.hasOwnProperty(type)) { return found }
      var help = helpers[type], mode = this.getModeAt(pos);
      if (typeof mode[type] == "string") {
        if (help[mode[type]]) { found.push(help[mode[type]]); }
      } else if (mode[type]) {
        for (var i = 0; i < mode[type].length; i++) {
          var val = help[mode[type][i]];
          if (val) { found.push(val); }
        }
      } else if (mode.helperType && help[mode.helperType]) {
        found.push(help[mode.helperType]);
      } else if (help[mode.name]) {
        found.push(help[mode.name]);
      }
      for (var i$1 = 0; i$1 < help._global.length; i$1++) {
        var cur = help._global[i$1];
        if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1)
          { found.push(cur.val); }
      }
      return found
    },

    getStateAfter: function(line, precise) {
      var doc = this.doc;
      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
      return getContextBefore(this, line + 1, precise).state
    },

    cursorCoords: function(start, mode) {
      var pos, range$$1 = this.doc.sel.primary();
      if (start == null) { pos = range$$1.head; }
      else if (typeof start == "object") { pos = clipPos(this.doc, start); }
      else { pos = start ? range$$1.from() : range$$1.to(); }
      return cursorCoords(this, pos, mode || "page")
    },

    charCoords: function(pos, mode) {
      return charCoords(this, clipPos(this.doc, pos), mode || "page")
    },

    coordsChar: function(coords, mode) {
      coords = fromCoordSystem(this, coords, mode || "page");
      return coordsChar(this, coords.left, coords.top)
    },

    lineAtHeight: function(height, mode) {
      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
      return lineAtHeight(this.doc, height + this.display.viewOffset)
    },
    heightAtLine: function(line, mode, includeWidgets) {
      var end = false, lineObj;
      if (typeof line == "number") {
        var last = this.doc.first + this.doc.size - 1;
        if (line < this.doc.first) { line = this.doc.first; }
        else if (line > last) { line = last; end = true; }
        lineObj = getLine(this.doc, line);
      } else {
        lineObj = line;
      }
      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
        (end ? this.doc.height - heightAtLine(lineObj) : 0)
    },

    defaultTextHeight: function() { return textHeight(this.display) },
    defaultCharWidth: function() { return charWidth(this.display) },

    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

    addWidget: function(pos, node, scroll, vert, horiz) {
      var display = this.display;
      pos = cursorCoords(this, clipPos(this.doc, pos));
      var top = pos.bottom, left = pos.left;
      node.style.position = "absolute";
      node.setAttribute("cm-ignore-events", "true");
      this.display.input.setUneditable(node);
      display.sizer.appendChild(node);
      if (vert == "over") {
        top = pos.top;
      } else if (vert == "above" || vert == "near") {
        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
        // Default to positioning above (if specified and possible); otherwise default to positioning below
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
          { top = pos.top - node.offsetHeight; }
        else if (pos.bottom + node.offsetHeight <= vspace)
          { top = pos.bottom; }
        if (left + node.offsetWidth > hspace)
          { left = hspace - node.offsetWidth; }
      }
      node.style.top = top + "px";
      node.style.left = node.style.right = "";
      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth;
        node.style.right = "0px";
      } else {
        if (horiz == "left") { left = 0; }
        else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2; }
        node.style.left = left + "px";
      }
      if (scroll)
        { scrollIntoView(this, {left: left, top: top, right: left + node.offsetWidth, bottom: top + node.offsetHeight}); }
    },

    triggerOnKeyDown: methodOp(onKeyDown),
    triggerOnKeyPress: methodOp(onKeyPress),
    triggerOnKeyUp: onKeyUp,
    triggerOnMouseDown: methodOp(onMouseDown),

    execCommand: function(cmd) {
      if (commands.hasOwnProperty(cmd))
        { return commands[cmd].call(null, this) }
    },

    triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

    findPosH: function(from, amount, unit, visually) {
      var this$1 = this;

      var dir = 1;
      if (amount < 0) { dir = -1; amount = -amount; }
      var cur = clipPos(this.doc, from);
      for (var i = 0; i < amount; ++i) {
        cur = findPosH(this$1.doc, cur, dir, unit, visually);
        if (cur.hitSide) { break }
      }
      return cur
    },

    moveH: methodOp(function(dir, unit) {
      var this$1 = this;

      this.extendSelectionsBy(function (range$$1) {
        if (this$1.display.shift || this$1.doc.extend || range$$1.empty())
          { return findPosH(this$1.doc, range$$1.head, dir, unit, this$1.options.rtlMoveVisually) }
        else
          { return dir < 0 ? range$$1.from() : range$$1.to() }
      }, sel_move);
    }),

    deleteH: methodOp(function(dir, unit) {
      var sel = this.doc.sel, doc = this.doc;
      if (sel.somethingSelected())
        { doc.replaceSelection("", null, "+delete"); }
      else
        { deleteNearSelection(this, function (range$$1) {
          var other = findPosH(doc, range$$1.head, dir, unit, false);
          return dir < 0 ? {from: other, to: range$$1.head} : {from: range$$1.head, to: other}
        }); }
    }),

    findPosV: function(from, amount, unit, goalColumn) {
      var this$1 = this;

      var dir = 1, x = goalColumn;
      if (amount < 0) { dir = -1; amount = -amount; }
      var cur = clipPos(this.doc, from);
      for (var i = 0; i < amount; ++i) {
        var coords = cursorCoords(this$1, cur, "div");
        if (x == null) { x = coords.left; }
        else { coords.left = x; }
        cur = findPosV(this$1, coords, dir, unit);
        if (cur.hitSide) { break }
      }
      return cur
    },

    moveV: methodOp(function(dir, unit) {
      var this$1 = this;

      var doc = this.doc, goals = [];
      var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
      doc.extendSelectionsBy(function (range$$1) {
        if (collapse)
          { return dir < 0 ? range$$1.from() : range$$1.to() }
        var headPos = cursorCoords(this$1, range$$1.head, "div");
        if (range$$1.goalColumn != null) { headPos.left = range$$1.goalColumn; }
        goals.push(headPos.left);
        var pos = findPosV(this$1, headPos, dir, unit);
        if (unit == "page" && range$$1 == doc.sel.primary())
          { addToScrollTop(this$1, charCoords(this$1, pos, "div").top - headPos.top); }
        return pos
      }, sel_move);
      if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
        { doc.sel.ranges[i].goalColumn = goals[i]; } }
    }),

    // Find the word at the given position (as returned by coordsChar).
    findWordAt: function(pos) {
      var doc = this.doc, line = getLine(doc, pos.line).text;
      var start = pos.ch, end = pos.ch;
      if (line) {
        var helper = this.getHelper(pos, "wordChars");
        if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end; }
        var startChar = line.charAt(start);
        var check = isWordChar(startChar, helper)
          ? function (ch) { return isWordChar(ch, helper); }
          : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
          : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); };
        while (start > 0 && check(line.charAt(start - 1))) { --start; }
        while (end < line.length && check(line.charAt(end))) { ++end; }
      }
      return new Range(Pos(pos.line, start), Pos(pos.line, end))
    },

    toggleOverwrite: function(value) {
      if (value != null && value == this.state.overwrite) { return }
      if (this.state.overwrite = !this.state.overwrite)
        { addClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
      else
        { rmClass(this.display.cursorDiv, "CodeMirror-overwrite"); }

      signal(this, "overwriteToggle", this, this.state.overwrite);
    },
    hasFocus: function() { return this.display.input.getField() == activeElt() },
    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

    scrollTo: methodOp(function (x, y) { scrollToCoords(this, x, y); }),
    getScrollInfo: function() {
      var scroller = this.display.scroller;
      return {left: scroller.scrollLeft, top: scroller.scrollTop,
              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
              clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
    },

    scrollIntoView: methodOp(function(range$$1, margin) {
      if (range$$1 == null) {
        range$$1 = {from: this.doc.sel.primary().head, to: null};
        if (margin == null) { margin = this.options.cursorScrollMargin; }
      } else if (typeof range$$1 == "number") {
        range$$1 = {from: Pos(range$$1, 0), to: null};
      } else if (range$$1.from == null) {
        range$$1 = {from: range$$1, to: null};
      }
      if (!range$$1.to) { range$$1.to = range$$1.from; }
      range$$1.margin = margin || 0;

      if (range$$1.from.line != null) {
        scrollToRange(this, range$$1);
      } else {
        scrollToCoordsRange(this, range$$1.from, range$$1.to, range$$1.margin);
      }
    }),

    setSize: methodOp(function(width, height) {
      var this$1 = this;

      var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; };
      if (width != null) { this.display.wrapper.style.width = interpret(width); }
      if (height != null) { this.display.wrapper.style.height = interpret(height); }
      if (this.options.lineWrapping) { clearLineMeasurementCache(this); }
      var lineNo$$1 = this.display.viewFrom;
      this.doc.iter(lineNo$$1, this.display.viewTo, function (line) {
        if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
          { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo$$1, "widget"); break } } }
        ++lineNo$$1;
      });
      this.curOp.forceUpdate = true;
      signal(this, "refresh", this);
    }),

    operation: function(f){return runInOp(this, f)},
    startOperation: function(){return startOperation(this)},
    endOperation: function(){return endOperation(this)},

    refresh: methodOp(function() {
      var oldHeight = this.display.cachedTextHeight;
      regChange(this);
      this.curOp.forceUpdate = true;
      clearCaches(this);
      scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
      updateGutterSpace(this);
      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
        { estimateLineHeights(this); }
      signal(this, "refresh", this);
    }),

    swapDoc: methodOp(function(doc) {
      var old = this.doc;
      old.cm = null;
      attachDoc(this, doc);
      clearCaches(this);
      this.display.input.reset();
      scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
      this.curOp.forceScroll = true;
      signalLater(this, "swapDoc", this, old);
      return old
    }),

    getInputField: function(){return this.display.input.getField()},
    getWrapperElement: function(){return this.display.wrapper},
    getScrollerElement: function(){return this.display.scroller},
    getGutterElement: function(){return this.display.gutters}
  };
  eventMixin(CodeMirror);

  CodeMirror.registerHelper = function(type, name, value) {
    if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []}; }
    helpers[type][name] = value;
  };
  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
    CodeMirror.registerHelper(type, name, value);
    helpers[type]._global.push({pred: predicate, val: value});
  };
};

// Used for horizontal relative motion. Dir is -1 or 1 (left or
// right), unit can be "char", "column" (like char, but doesn't
// cross line boundaries), "word" (across next word), or "group" (to
// the start of next group of word or non-word-non-whitespace
// chars). The visually param controls whether, in right-to-left
// text, direction 1 means to move towards the next index in the
// string, or towards the character to the right of the current
// position. The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosH(doc, pos, dir, unit, visually) {
  var oldPos = pos;
  var origDir = dir;
  var lineObj = getLine(doc, pos.line);
  function findNextLine() {
    var l = pos.line + dir;
    if (l < doc.first || l >= doc.first + doc.size) { return false }
    pos = new Pos(l, pos.ch, pos.sticky);
    return lineObj = getLine(doc, l)
  }
  function moveOnce(boundToLine) {
    var next;
    if (visually) {
      next = moveVisually(doc.cm, lineObj, pos, dir);
    } else {
      next = moveLogically(lineObj, pos, dir);
    }
    if (next == null) {
      if (!boundToLine && findNextLine())
        { pos = endOfLine(visually, doc.cm, lineObj, pos.line, dir); }
      else
        { return false }
    } else {
      pos = next;
    }
    return true
  }

  if (unit == "char") {
    moveOnce();
  } else if (unit == "column") {
    moveOnce(true);
  } else if (unit == "word" || unit == "group") {
    var sawType = null, group = unit == "group";
    var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
    for (var first = true;; first = false) {
      if (dir < 0 && !moveOnce(!first)) { break }
      var cur = lineObj.text.charAt(pos.ch) || "\n";
      var type = isWordChar(cur, helper) ? "w"
        : group && cur == "\n" ? "n"
        : !group || /\s/.test(cur) ? null
        : "p";
      if (group && !first && !type) { type = "s"; }
      if (sawType && sawType != type) {
        if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after";}
        break
      }

      if (type) { sawType = type; }
      if (dir > 0 && !moveOnce(!first)) { break }
    }
  }
  var result = skipAtomic(doc, pos, oldPos, origDir, true);
  if (equalCursorPos(oldPos, result)) { result.hitSide = true; }
  return result
}

// For relative vertical movement. Dir may be -1 or 1. Unit can be
// "page" or "line". The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosV(cm, pos, dir, unit) {
  var doc = cm.doc, x = pos.left, y;
  if (unit == "page") {
    var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
    var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;

  } else if (unit == "line") {
    y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
  }
  var target;
  for (;;) {
    target = coordsChar(cm, x, y);
    if (!target.outside) { break }
    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
    y += dir * 5;
  }
  return target
}

// CONTENTEDITABLE INPUT STYLE

var ContentEditableInput = function(cm) {
  this.cm = cm;
  this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
  this.polling = new Delayed();
  this.composing = null;
  this.gracePeriod = false;
  this.readDOMTimeout = null;
};

ContentEditableInput.prototype.init = function (display) {
    var this$1 = this;

  var input = this, cm = input.cm;
  var div = input.div = display.lineDiv;
  disableBrowserMagic(div, cm.options.spellcheck);

  on(div, "paste", function (e) {
    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
    // IE doesn't fire input events, so we schedule a read for the pasted content in this way
    if (ie_version <= 11) { setTimeout(operation(cm, function () { return this$1.updateFromDOM(); }), 20); }
  });

  on(div, "compositionstart", function (e) {
    this$1.composing = {data: e.data, done: false};
  });
  on(div, "compositionupdate", function (e) {
    if (!this$1.composing) { this$1.composing = {data: e.data, done: false}; }
  });
  on(div, "compositionend", function (e) {
    if (this$1.composing) {
      if (e.data != this$1.composing.data) { this$1.readFromDOMSoon(); }
      this$1.composing.done = true;
    }
  });

  on(div, "touchstart", function () { return input.forceCompositionEnd(); });

  on(div, "input", function () {
    if (!this$1.composing) { this$1.readFromDOMSoon(); }
  });

  function onCopyCut(e) {
    if (signalDOMEvent(cm, e)) { return }
    if (cm.somethingSelected()) {
      setLastCopied({lineWise: false, text: cm.getSelections()});
      if (e.type == "cut") { cm.replaceSelection("", null, "cut"); }
    } else if (!cm.options.lineWiseCopyCut) {
      return
    } else {
      var ranges = copyableRanges(cm);
      setLastCopied({lineWise: true, text: ranges.text});
      if (e.type == "cut") {
        cm.operation(function () {
          cm.setSelections(ranges.ranges, 0, sel_dontScroll);
          cm.replaceSelection("", null, "cut");
        });
      }
    }
    if (e.clipboardData) {
      e.clipboardData.clearData();
      var content = lastCopied.text.join("\n");
      // iOS exposes the clipboard API, but seems to discard content inserted into it
      e.clipboardData.setData("Text", content);
      if (e.clipboardData.getData("Text") == content) {
        e.preventDefault();
        return
      }
    }
    // Old-fashioned briefly-focus-a-textarea hack
    var kludge = hiddenTextarea(), te = kludge.firstChild;
    cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
    te.value = lastCopied.text.join("\n");
    var hadFocus = document.activeElement;
    selectInput(te);
    setTimeout(function () {
      cm.display.lineSpace.removeChild(kludge);
      hadFocus.focus();
      if (hadFocus == div) { input.showPrimarySelection(); }
    }, 50);
  }
  on(div, "copy", onCopyCut);
  on(div, "cut", onCopyCut);
};

ContentEditableInput.prototype.prepareSelection = function () {
  var result = prepareSelection(this.cm, false);
  result.focus = this.cm.state.focused;
  return result
};

ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
  if (!info || !this.cm.display.view.length) { return }
  if (info.focus || takeFocus) { this.showPrimarySelection(); }
  this.showMultipleSelections(info);
};

ContentEditableInput.prototype.getSelection = function () {
  return this.cm.display.wrapper.ownerDocument.getSelection()
};

ContentEditableInput.prototype.showPrimarySelection = function () {
  var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
  var from = prim.from(), to = prim.to();

  if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
    sel.removeAllRanges();
    return
  }

  var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
  var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
  if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
      cmp(minPos(curAnchor, curFocus), from) == 0 &&
      cmp(maxPos(curAnchor, curFocus), to) == 0)
    { return }

  var view = cm.display.view;
  var start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
      {node: view[0].measure.map[2], offset: 0};
  var end = to.line < cm.display.viewTo && posToDOM(cm, to);
  if (!end) {
    var measure = view[view.length - 1].measure;
    var map$$1 = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
    end = {node: map$$1[map$$1.length - 1], offset: map$$1[map$$1.length - 2] - map$$1[map$$1.length - 3]};
  }

  if (!start || !end) {
    sel.removeAllRanges();
    return
  }

  var old = sel.rangeCount && sel.getRangeAt(0), rng;
  try { rng = range(start.node, start.offset, end.offset, end.node); }
  catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
  if (rng) {
    if (!gecko && cm.state.focused) {
      sel.collapse(start.node, start.offset);
      if (!rng.collapsed) {
        sel.removeAllRanges();
        sel.addRange(rng);
      }
    } else {
      sel.removeAllRanges();
      sel.addRange(rng);
    }
    if (old && sel.anchorNode == null) { sel.addRange(old); }
    else if (gecko) { this.startGracePeriod(); }
  }
  this.rememberSelection();
};

ContentEditableInput.prototype.startGracePeriod = function () {
    var this$1 = this;

  clearTimeout(this.gracePeriod);
  this.gracePeriod = setTimeout(function () {
    this$1.gracePeriod = false;
    if (this$1.selectionChanged())
      { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }); }
  }, 20);
};

ContentEditableInput.prototype.showMultipleSelections = function (info) {
  removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
  removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
};

ContentEditableInput.prototype.rememberSelection = function () {
  var sel = this.getSelection();
  this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
  this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
};

ContentEditableInput.prototype.selectionInEditor = function () {
  var sel = this.getSelection();
  if (!sel.rangeCount) { return false }
  var node = sel.getRangeAt(0).commonAncestorContainer;
  return contains(this.div, node)
};

ContentEditableInput.prototype.focus = function () {
  if (this.cm.options.readOnly != "nocursor") {
    if (!this.selectionInEditor())
      { this.showSelection(this.prepareSelection(), true); }
    this.div.focus();
  }
};
ContentEditableInput.prototype.blur = function () { this.div.blur(); };
ContentEditableInput.prototype.getField = function () { return this.div };

ContentEditableInput.prototype.supportsTouch = function () { return true };

ContentEditableInput.prototype.receivedFocus = function () {
  var input = this;
  if (this.selectionInEditor())
    { this.pollSelection(); }
  else
    { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }); }

  function poll() {
    if (input.cm.state.focused) {
      input.pollSelection();
      input.polling.set(input.cm.options.pollInterval, poll);
    }
  }
  this.polling.set(this.cm.options.pollInterval, poll);
};

ContentEditableInput.prototype.selectionChanged = function () {
  var sel = this.getSelection();
  return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
    sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
};

ContentEditableInput.prototype.pollSelection = function () {
  if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) { return }
  var sel = this.getSelection(), cm = this.cm;
  // On Android Chrome (version 56, at least), backspacing into an
  // uneditable block element will put the cursor in that element,
  // and then, because it's not editable, hide the virtual keyboard.
  // Because Android doesn't allow us to actually detect backspace
  // presses in a sane way, this code checks for when that happens
  // and simulates a backspace press in this case.
  if (android && chrome && this.cm.options.gutters.length && isInGutter(sel.anchorNode)) {
    this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs});
    this.blur();
    this.focus();
    return
  }
  if (this.composing) { return }
  this.rememberSelection();
  var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
  var head = domToPos(cm, sel.focusNode, sel.focusOffset);
  if (anchor && head) { runInOp(cm, function () {
    setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
    if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true; }
  }); }
};

ContentEditableInput.prototype.pollContent = function () {
  if (this.readDOMTimeout != null) {
    clearTimeout(this.readDOMTimeout);
    this.readDOMTimeout = null;
  }

  var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
  var from = sel.from(), to = sel.to();
  if (from.ch == 0 && from.line > cm.firstLine())
    { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length); }
  if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
    { to = Pos(to.line + 1, 0); }
  if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

  var fromIndex, fromLine, fromNode;
  if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
    fromLine = lineNo(display.view[0].line);
    fromNode = display.view[0].node;
  } else {
    fromLine = lineNo(display.view[fromIndex].line);
    fromNode = display.view[fromIndex - 1].node.nextSibling;
  }
  var toIndex = findViewIndex(cm, to.line);
  var toLine, toNode;
  if (toIndex == display.view.length - 1) {
    toLine = display.viewTo - 1;
    toNode = display.lineDiv.lastChild;
  } else {
    toLine = lineNo(display.view[toIndex + 1].line) - 1;
    toNode = display.view[toIndex + 1].node.previousSibling;
  }

  if (!fromNode) { return false }
  var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
  var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
  while (newText.length > 1 && oldText.length > 1) {
    if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
    else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
    else { break }
  }

  var cutFront = 0, cutEnd = 0;
  var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
  while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
    { ++cutFront; }
  var newBot = lst(newText), oldBot = lst(oldText);
  var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                           oldBot.length - (oldText.length == 1 ? cutFront : 0));
  while (cutEnd < maxCutEnd &&
         newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
    { ++cutEnd; }
  // Try to move start of change to start of selection if ambiguous
  if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
    while (cutFront && cutFront > from.ch &&
           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
      cutFront--;
      cutEnd++;
    }
  }

  newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
  newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");

  var chFrom = Pos(fromLine, cutFront);
  var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
  if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
    replaceRange(cm.doc, newText, chFrom, chTo, "+input");
    return true
  }
};

ContentEditableInput.prototype.ensurePolled = function () {
  this.forceCompositionEnd();
};
ContentEditableInput.prototype.reset = function () {
  this.forceCompositionEnd();
};
ContentEditableInput.prototype.forceCompositionEnd = function () {
  if (!this.composing) { return }
  clearTimeout(this.readDOMTimeout);
  this.composing = null;
  this.updateFromDOM();
  this.div.blur();
  this.div.focus();
};
ContentEditableInput.prototype.readFromDOMSoon = function () {
    var this$1 = this;

  if (this.readDOMTimeout != null) { return }
  this.readDOMTimeout = setTimeout(function () {
    this$1.readDOMTimeout = null;
    if (this$1.composing) {
      if (this$1.composing.done) { this$1.composing = null; }
      else { return }
    }
    this$1.updateFromDOM();
  }, 80);
};

ContentEditableInput.prototype.updateFromDOM = function () {
    var this$1 = this;

  if (this.cm.isReadOnly() || !this.pollContent())
    { runInOp(this.cm, function () { return regChange(this$1.cm); }); }
};

ContentEditableInput.prototype.setUneditable = function (node) {
  node.contentEditable = "false";
};

ContentEditableInput.prototype.onKeyPress = function (e) {
  if (e.charCode == 0 || this.composing) { return }
  e.preventDefault();
  if (!this.cm.isReadOnly())
    { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0); }
};

ContentEditableInput.prototype.readOnlyChanged = function (val) {
  this.div.contentEditable = String(val != "nocursor");
};

ContentEditableInput.prototype.onContextMenu = function () {};
ContentEditableInput.prototype.resetPosition = function () {};

ContentEditableInput.prototype.needsContentAttribute = true;

function posToDOM(cm, pos) {
  var view = findViewForLine(cm, pos.line);
  if (!view || view.hidden) { return null }
  var line = getLine(cm.doc, pos.line);
  var info = mapFromLineView(view, line, pos.line);

  var order = getOrder(line, cm.doc.direction), side = "left";
  if (order) {
    var partPos = getBidiPartAt(order, pos.ch);
    side = partPos % 2 ? "right" : "left";
  }
  var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
  result.offset = result.collapse == "right" ? result.end : result.start;
  return result
}

function isInGutter(node) {
  for (var scan = node; scan; scan = scan.parentNode)
    { if (/CodeMirror-gutter-wrapper/.test(scan.className)) { return true } }
  return false
}

function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

function domTextBetween(cm, from, to, fromLine, toLine) {
  var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
  function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
  function close() {
    if (closing) {
      text += lineSep;
      if (extraLinebreak) { text += lineSep; }
      closing = extraLinebreak = false;
    }
  }
  function addText(str) {
    if (str) {
      close();
      text += str;
    }
  }
  function walk(node) {
    if (node.nodeType == 1) {
      var cmText = node.getAttribute("cm-text");
      if (cmText) {
        addText(cmText);
        return
      }
      var markerID = node.getAttribute("cm-marker"), range$$1;
      if (markerID) {
        var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
        if (found.length && (range$$1 = found[0].find(0)))
          { addText(getBetween(cm.doc, range$$1.from, range$$1.to).join(lineSep)); }
        return
      }
      if (node.getAttribute("contenteditable") == "false") { return }
      var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
      if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) { return }

      if (isBlock) { close(); }
      for (var i = 0; i < node.childNodes.length; i++)
        { walk(node.childNodes[i]); }

      if (/^(pre|p)$/i.test(node.nodeName)) { extraLinebreak = true; }
      if (isBlock) { closing = true; }
    } else if (node.nodeType == 3) {
      addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
    }
  }
  for (;;) {
    walk(from);
    if (from == to) { break }
    from = from.nextSibling;
    extraLinebreak = false;
  }
  return text
}

function domToPos(cm, node, offset) {
  var lineNode;
  if (node == cm.display.lineDiv) {
    lineNode = cm.display.lineDiv.childNodes[offset];
    if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
    node = null; offset = 0;
  } else {
    for (lineNode = node;; lineNode = lineNode.parentNode) {
      if (!lineNode || lineNode == cm.display.lineDiv) { return null }
      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
    }
  }
  for (var i = 0; i < cm.display.view.length; i++) {
    var lineView = cm.display.view[i];
    if (lineView.node == lineNode)
      { return locateNodeInLineView(lineView, node, offset) }
  }
}

function locateNodeInLineView(lineView, node, offset) {
  var wrapper = lineView.text.firstChild, bad = false;
  if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
  if (node == wrapper) {
    bad = true;
    node = wrapper.childNodes[offset];
    offset = 0;
    if (!node) {
      var line = lineView.rest ? lst(lineView.rest) : lineView.line;
      return badPos(Pos(lineNo(line), line.text.length), bad)
    }
  }

  var textNode = node.nodeType == 3 ? node : null, topNode = node;
  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
    textNode = node.firstChild;
    if (offset) { offset = textNode.nodeValue.length; }
  }
  while (topNode.parentNode != wrapper) { topNode = topNode.parentNode; }
  var measure = lineView.measure, maps = measure.maps;

  function find(textNode, topNode, offset) {
    for (var i = -1; i < (maps ? maps.length : 0); i++) {
      var map$$1 = i < 0 ? measure.map : maps[i];
      for (var j = 0; j < map$$1.length; j += 3) {
        var curNode = map$$1[j + 2];
        if (curNode == textNode || curNode == topNode) {
          var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
          var ch = map$$1[j] + offset;
          if (offset < 0 || curNode != textNode) { ch = map$$1[j + (offset ? 1 : 0)]; }
          return Pos(line, ch)
        }
      }
    }
  }
  var found = find(textNode, topNode, offset);
  if (found) { return badPos(found, bad) }

  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
  for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
    found = find(after, after.firstChild, 0);
    if (found)
      { return badPos(Pos(found.line, found.ch - dist), bad) }
    else
      { dist += after.textContent.length; }
  }
  for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
    found = find(before, before.firstChild, -1);
    if (found)
      { return badPos(Pos(found.line, found.ch + dist$1), bad) }
    else
      { dist$1 += before.textContent.length; }
  }
}

// TEXTAREA INPUT STYLE

var TextareaInput = function(cm) {
  this.cm = cm;
  // See input.poll and input.reset
  this.prevInput = "";

  // Flag that indicates whether we expect input to appear real soon
  // now (after some event like 'keypress' or 'input') and are
  // polling intensively.
  this.pollingFast = false;
  // Self-resetting timeout for the poller
  this.polling = new Delayed();
  // Used to work around IE issue with selection being forgotten when focus moves away from textarea
  this.hasSelection = false;
  this.composing = null;
};

TextareaInput.prototype.init = function (display) {
    var this$1 = this;

  var input = this, cm = this.cm;
  this.createField(display);
  var te = this.textarea;

  display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);

  // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
  if (ios) { te.style.width = "0px"; }

  on(te, "input", function () {
    if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null; }
    input.poll();
  });

  on(te, "paste", function (e) {
    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

    cm.state.pasteIncoming = true;
    input.fastPoll();
  });

  function prepareCopyCut(e) {
    if (signalDOMEvent(cm, e)) { return }
    if (cm.somethingSelected()) {
      setLastCopied({lineWise: false, text: cm.getSelections()});
    } else if (!cm.options.lineWiseCopyCut) {
      return
    } else {
      var ranges = copyableRanges(cm);
      setLastCopied({lineWise: true, text: ranges.text});
      if (e.type == "cut") {
        cm.setSelections(ranges.ranges, null, sel_dontScroll);
      } else {
        input.prevInput = "";
        te.value = ranges.text.join("\n");
        selectInput(te);
      }
    }
    if (e.type == "cut") { cm.state.cutIncoming = true; }
  }
  on(te, "cut", prepareCopyCut);
  on(te, "copy", prepareCopyCut);

  on(display.scroller, "paste", function (e) {
    if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
    cm.state.pasteIncoming = true;
    input.focus();
  });

  // Prevent normal selection in the editor (we handle our own)
  on(display.lineSpace, "selectstart", function (e) {
    if (!eventInWidget(display, e)) { e_preventDefault(e); }
  });

  on(te, "compositionstart", function () {
    var start = cm.getCursor("from");
    if (input.composing) { input.composing.range.clear(); }
    input.composing = {
      start: start,
      range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
    };
  });
  on(te, "compositionend", function () {
    if (input.composing) {
      input.poll();
      input.composing.range.clear();
      input.composing = null;
    }
  });
};

TextareaInput.prototype.createField = function (_display) {
  // Wraps and hides input textarea
  this.wrapper = hiddenTextarea();
  // The semihidden textarea that is focused when the editor is
  // focused, and receives input.
  this.textarea = this.wrapper.firstChild;
};

TextareaInput.prototype.prepareSelection = function () {
  // Redraw the selection and/or cursor
  var cm = this.cm, display = cm.display, doc = cm.doc;
  var result = prepareSelection(cm);

  // Move the hidden textarea near the cursor to prevent scrolling artifacts
  if (cm.options.moveInputWithCursor) {
    var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
    var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
    result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                        headPos.top + lineOff.top - wrapOff.top));
    result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                         headPos.left + lineOff.left - wrapOff.left));
  }

  return result
};

TextareaInput.prototype.showSelection = function (drawn) {
  var cm = this.cm, display = cm.display;
  removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
  removeChildrenAndAdd(display.selectionDiv, drawn.selection);
  if (drawn.teTop != null) {
    this.wrapper.style.top = drawn.teTop + "px";
    this.wrapper.style.left = drawn.teLeft + "px";
  }
};

// Reset the input to correspond to the selection (or to be empty,
// when not typing and nothing is selected)
TextareaInput.prototype.reset = function (typing) {
  if (this.contextMenuPending || this.composing) { return }
  var cm = this.cm;
  if (cm.somethingSelected()) {
    this.prevInput = "";
    var content = cm.getSelection();
    this.textarea.value = content;
    if (cm.state.focused) { selectInput(this.textarea); }
    if (ie && ie_version >= 9) { this.hasSelection = content; }
  } else if (!typing) {
    this.prevInput = this.textarea.value = "";
    if (ie && ie_version >= 9) { this.hasSelection = null; }
  }
};

TextareaInput.prototype.getField = function () { return this.textarea };

TextareaInput.prototype.supportsTouch = function () { return false };

TextareaInput.prototype.focus = function () {
  if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
    try { this.textarea.focus(); }
    catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
  }
};

TextareaInput.prototype.blur = function () { this.textarea.blur(); };

TextareaInput.prototype.resetPosition = function () {
  this.wrapper.style.top = this.wrapper.style.left = 0;
};

TextareaInput.prototype.receivedFocus = function () { this.slowPoll(); };

// Poll for input changes, using the normal rate of polling. This
// runs as long as the editor is focused.
TextareaInput.prototype.slowPoll = function () {
    var this$1 = this;

  if (this.pollingFast) { return }
  this.polling.set(this.cm.options.pollInterval, function () {
    this$1.poll();
    if (this$1.cm.state.focused) { this$1.slowPoll(); }
  });
};

// When an event has just come in that is likely to add or change
// something in the input textarea, we poll faster, to ensure that
// the change appears on the screen quickly.
TextareaInput.prototype.fastPoll = function () {
  var missed = false, input = this;
  input.pollingFast = true;
  function p() {
    var changed = input.poll();
    if (!changed && !missed) {missed = true; input.polling.set(60, p);}
    else {input.pollingFast = false; input.slowPoll();}
  }
  input.polling.set(20, p);
};

// Read input from the textarea, and update the document to match.
// When something is selected, it is present in the textarea, and
// selected (unless it is huge, in which case a placeholder is
// used). When nothing is selected, the cursor sits after previously
// seen text (can be empty), which is stored in prevInput (we must
// not reset the textarea when typing, because that breaks IME).
TextareaInput.prototype.poll = function () {
    var this$1 = this;

  var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
  // Since this is called a *lot*, try to bail out as cheaply as
  // possible when it is clear that nothing happened. hasSelection
  // will be the case when there is a lot of text in the textarea,
  // in which case reading its value would be expensive.
  if (this.contextMenuPending || !cm.state.focused ||
      (hasSelection(input) && !prevInput && !this.composing) ||
      cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
    { return false }

  var text = input.value;
  // If nothing changed, bail.
  if (text == prevInput && !cm.somethingSelected()) { return false }
  // Work around nonsensical selection resetting in IE9/10, and
  // inexplicable appearance of private area unicode characters on
  // some key combos in Mac (#2689).
  if (ie && ie_version >= 9 && this.hasSelection === text ||
      mac && /[\uf700-\uf7ff]/.test(text)) {
    cm.display.input.reset();
    return false
  }

  if (cm.doc.sel == cm.display.selForContextMenu) {
    var first = text.charCodeAt(0);
    if (first == 0x200b && !prevInput) { prevInput = "\u200b"; }
    if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
  }
  // Find the part of the input that is actually new
  var same = 0, l = Math.min(prevInput.length, text.length);
  while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same; }

  runInOp(cm, function () {
    applyTextInput(cm, text.slice(same), prevInput.length - same,
                   null, this$1.composing ? "*compose" : null);

    // Don't leave long text in the textarea, since it makes further polling slow
    if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = ""; }
    else { this$1.prevInput = text; }

    if (this$1.composing) {
      this$1.composing.range.clear();
      this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                         {className: "CodeMirror-composing"});
    }
  });
  return true
};

TextareaInput.prototype.ensurePolled = function () {
  if (this.pollingFast && this.poll()) { this.pollingFast = false; }
};

TextareaInput.prototype.onKeyPress = function () {
  if (ie && ie_version >= 9) { this.hasSelection = null; }
  this.fastPoll();
};

TextareaInput.prototype.onContextMenu = function (e) {
  var input = this, cm = input.cm, display = cm.display, te = input.textarea;
  var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
  if (!pos || presto) { return } // Opera is difficult.

  // Reset the current text selection only if the click is done outside of the selection
  // and 'resetSelectionOnContextMenu' option is true.
  var reset = cm.options.resetSelectionOnContextMenu;
  if (reset && cm.doc.sel.contains(pos) == -1)
    { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll); }

  var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
  input.wrapper.style.cssText = "position: absolute";
  var wrapperBox = input.wrapper.getBoundingClientRect();
  te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
  var oldScrollY;
  if (webkit) { oldScrollY = window.scrollY; } // Work around Chrome issue (#2712)
  display.input.focus();
  if (webkit) { window.scrollTo(null, oldScrollY); }
  display.input.reset();
  // Adds "Select all" to context menu in FF
  if (!cm.somethingSelected()) { te.value = input.prevInput = " "; }
  input.contextMenuPending = true;
  display.selForContextMenu = cm.doc.sel;
  clearTimeout(display.detectingSelectAll);

  // Select-all will be greyed out if there's nothing to select, so
  // this adds a zero-width space so that we can later check whether
  // it got selected.
  function prepareSelectAllHack() {
    if (te.selectionStart != null) {
      var selected = cm.somethingSelected();
      var extval = "\u200b" + (selected ? te.value : "");
      te.value = "\u21da"; // Used to catch context-menu undo
      te.value = extval;
      input.prevInput = selected ? "" : "\u200b";
      te.selectionStart = 1; te.selectionEnd = extval.length;
      // Re-set this, in case some other handler touched the
      // selection in the meantime.
      display.selForContextMenu = cm.doc.sel;
    }
  }
  function rehide() {
    input.contextMenuPending = false;
    input.wrapper.style.cssText = oldWrapperCSS;
    te.style.cssText = oldCSS;
    if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos); }

    // Try to detect the user choosing select-all
    if (te.selectionStart != null) {
      if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack(); }
      var i = 0, poll = function () {
        if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
            te.selectionEnd > 0 && input.prevInput == "\u200b") {
          operation(cm, selectAll)(cm);
        } else if (i++ < 10) {
          display.detectingSelectAll = setTimeout(poll, 500);
        } else {
          display.selForContextMenu = null;
          display.input.reset();
        }
      };
      display.detectingSelectAll = setTimeout(poll, 200);
    }
  }

  if (ie && ie_version >= 9) { prepareSelectAllHack(); }
  if (captureRightClick) {
    e_stop(e);
    var mouseup = function () {
      off(window, "mouseup", mouseup);
      setTimeout(rehide, 20);
    };
    on(window, "mouseup", mouseup);
  } else {
    setTimeout(rehide, 50);
  }
};

TextareaInput.prototype.readOnlyChanged = function (val) {
  if (!val) { this.reset(); }
  this.textarea.disabled = val == "nocursor";
};

TextareaInput.prototype.setUneditable = function () {};

TextareaInput.prototype.needsContentAttribute = false;

function fromTextArea(textarea, options) {
  options = options ? copyObj(options) : {};
  options.value = textarea.value;
  if (!options.tabindex && textarea.tabIndex)
    { options.tabindex = textarea.tabIndex; }
  if (!options.placeholder && textarea.placeholder)
    { options.placeholder = textarea.placeholder; }
  // Set autofocus to true if this textarea is focused, or if it has
  // autofocus and no other element is focused.
  if (options.autofocus == null) {
    var hasFocus = activeElt();
    options.autofocus = hasFocus == textarea ||
      textarea.getAttribute("autofocus") != null && hasFocus == document.body;
  }

  function save() {textarea.value = cm.getValue();}

  var realSubmit;
  if (textarea.form) {
    on(textarea.form, "submit", save);
    // Deplorable hack to make the submit method do the right thing.
    if (!options.leaveSubmitMethodAlone) {
      var form = textarea.form;
      realSubmit = form.submit;
      try {
        var wrappedSubmit = form.submit = function () {
          save();
          form.submit = realSubmit;
          form.submit();
          form.submit = wrappedSubmit;
        };
      } catch(e) {}
    }
  }

  options.finishInit = function (cm) {
    cm.save = save;
    cm.getTextArea = function () { return textarea; };
    cm.toTextArea = function () {
      cm.toTextArea = isNaN; // Prevent this from being ran twice
      save();
      textarea.parentNode.removeChild(cm.getWrapperElement());
      textarea.style.display = "";
      if (textarea.form) {
        off(textarea.form, "submit", save);
        if (typeof textarea.form.submit == "function")
          { textarea.form.submit = realSubmit; }
      }
    };
  };

  textarea.style.display = "none";
  var cm = CodeMirror$1(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
    options);
  return cm
}

function addLegacyProps(CodeMirror) {
  CodeMirror.off = off;
  CodeMirror.on = on;
  CodeMirror.wheelEventPixels = wheelEventPixels;
  CodeMirror.Doc = Doc;
  CodeMirror.splitLines = splitLinesAuto;
  CodeMirror.countColumn = countColumn;
  CodeMirror.findColumn = findColumn;
  CodeMirror.isWordChar = isWordCharBasic;
  CodeMirror.Pass = Pass;
  CodeMirror.signal = signal;
  CodeMirror.Line = Line;
  CodeMirror.changeEnd = changeEnd;
  CodeMirror.scrollbarModel = scrollbarModel;
  CodeMirror.Pos = Pos;
  CodeMirror.cmpPos = cmp;
  CodeMirror.modes = modes;
  CodeMirror.mimeModes = mimeModes;
  CodeMirror.resolveMode = resolveMode;
  CodeMirror.getMode = getMode;
  CodeMirror.modeExtensions = modeExtensions;
  CodeMirror.extendMode = extendMode;
  CodeMirror.copyState = copyState;
  CodeMirror.startState = startState;
  CodeMirror.innerMode = innerMode;
  CodeMirror.commands = commands;
  CodeMirror.keyMap = keyMap;
  CodeMirror.keyName = keyName;
  CodeMirror.isModifierKey = isModifierKey;
  CodeMirror.lookupKey = lookupKey;
  CodeMirror.normalizeKeyMap = normalizeKeyMap;
  CodeMirror.StringStream = StringStream;
  CodeMirror.SharedTextMarker = SharedTextMarker;
  CodeMirror.TextMarker = TextMarker;
  CodeMirror.LineWidget = LineWidget;
  CodeMirror.e_preventDefault = e_preventDefault;
  CodeMirror.e_stopPropagation = e_stopPropagation;
  CodeMirror.e_stop = e_stop;
  CodeMirror.addClass = addClass;
  CodeMirror.contains = contains;
  CodeMirror.rmClass = rmClass;
  CodeMirror.keyNames = keyNames;
}

// EDITOR CONSTRUCTOR

defineOptions(CodeMirror$1);

addEditorMethods(CodeMirror$1);

// Set up methods on CodeMirror's prototype to redirect to the editor's document.
var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
  { CodeMirror$1.prototype[prop] = (function(method) {
    return function() {return method.apply(this.doc, arguments)}
  })(Doc.prototype[prop]); } }

eventMixin(Doc);

// INPUT HANDLING

CodeMirror$1.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

// MODE DEFINITION AND QUERYING

// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
CodeMirror$1.defineMode = function(name/*, mode, …*/) {
  if (!CodeMirror$1.defaults.mode && name != "null") { CodeMirror$1.defaults.mode = name; }
  defineMode.apply(this, arguments);
};

CodeMirror$1.defineMIME = defineMIME;

// Minimal default mode.
CodeMirror$1.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); });
CodeMirror$1.defineMIME("text/plain", "null");

// EXTENSIONS

CodeMirror$1.defineExtension = function (name, func) {
  CodeMirror$1.prototype[name] = func;
};
CodeMirror$1.defineDocExtension = function (name, func) {
  Doc.prototype[name] = func;
};

CodeMirror$1.fromTextArea = fromTextArea;

addLegacyProps(CodeMirror$1);

CodeMirror$1.version = "5.39.2";

return CodeMirror$1;

})));


/***/ }),

/***/ "56e3":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M20 3c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm0 2c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1zm-5.469 2.781c.404-.046.828.057 1.188.25V8l1.688.938a3 3 0 0 1 1.406 3.656l-1.156 3.219a7.023 7.023 0 0 1 1.656 2.188h1.875c.934 0 1.77.648 1.969 1.563l1.313 6.094-1.938.438-1.344-6.094h-1.281c.047.327.094.66.094 1 0 3.854-3.146 7-7 7s-7-3.146-7-7c0-3.514 2.617-6.417 6-6.906L13.47 9.94l-2.281.25-2.5 3.844-1.688-1.063 2.5-3.875a1.978 1.978 0 0 1 1.438-.906zm1 2.407l-1.438 3.906a6.948 6.948 0 0 1 1.844.563l1-2.75a.986.986 0 0 0-.469-1.219zM13 16c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "56f8":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c2.25 0 3.764.886 5.125 1.625S23.731 7 26 7h1v1c0 7.745-2.608 12.78-5.25 15.813s-5.375 4.125-5.375 4.125l-.375.125-.375-.125s-2.734-1.118-5.375-4.156S5 15.719 5 8.001v-1h1c2.282 0 3.517-.637 4.875-1.375S13.75 4.001 16 4.001zm0 2c-1.75 0-2.755.613-4.156 1.375a12.508 12.508 0 0 1-4.781 1.469c.192 6.736 2.429 11.027 4.688 13.625 2.046 2.354 3.763 3.156 4.25 3.375.486-.217 2.205-.997 4.25-3.344 2.258-2.591 4.497-6.892 4.688-13.656a12.531 12.531 0 0 1-4.781-1.469C18.755 6.614 17.752 6 16.002 6z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5700":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15.999 4C22.627 4 28 9.373 28 16.001c0 5.3-3.435 9.794-8.2 11.385-.609.117-.825-.256-.825-.577 0-.394.015-1.688.015-3.292 0-1.119-.384-1.852-.815-2.222 2.673-.297 5.479-1.311 5.479-5.921 0-1.31-.464-2.381-1.233-3.22.124-.304.536-1.524-.119-3.176 0 0-1.006-.323-3.297 1.23a11.528 11.528 0 0 0-3.004-.404c-1.02.005-2.047.138-3.004.404-2.292-1.553-3.3-1.23-3.3-1.23-.653 1.652-.241 2.872-.118 3.176-.767.839-1.235 1.91-1.235 3.22 0 4.599 2.801 5.628 5.466 5.931-.343.3-.653.829-.762 1.604-.683.307-2.422.837-3.492-.997 0 0-.634-1.152-1.838-1.237 0 0-1.172-.016-.082.729 0 0 .786.369 1.332 1.755 0 0 .704 2.334 4.042 1.609.006 1.001.016 1.756.016 2.041 0 .318-.219.688-.819.578C7.438 25.8 4 21.302 4 16.001 4 9.373 9.373 4 15.999 4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5797":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3 7h26v2H3V7zm0 4h18v2H3v-2zm0 4h26v2H3v-2zm0 4h18v2H3v-2zm0 4h26v2H3v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5811":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5834":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 5h2v10h10v2H17v10h-2V17H5v-2h10V5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5842":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 4h2v16.563l5.281-5.281 1.438 1.438-7 7-.719.688-.719-.688-7-7 1.438-1.438L15 20.563V4zM7 26h18v2H7v-2z"}})]) };
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

/***/ "58aa":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm7.406 5.344h.031c.33.007.656.135.906.344.257.215.428.498.531.781.207.567.235 1.188.188 1.906-.039.595-.326 1.352-.469 2.031.187.42.248.774.469 1.188.409.766.86 1.217 1.313 1.813.517-.027 1.127-.182 1.563-.125.567.074 1.089.186 1.5.625.206.22.369.553.375.875s-.098.607-.25.875v.031h-.031c-.345.586-.969.976-1.594.938s-1.148-.368-1.625-.781c-.236-.205-.429-.616-.656-.875-.529.06-.906-.001-1.469.125-.537.12-.902.332-1.406.5-.334.672-.599 1.509-.969 2-.4.531-.818.984-1.406 1.188-.294.102-.645.097-.969-.031s-.566-.349-.75-.625c-.372-.529-.404-1.263-.125-1.781s.747-.887 1.281-1.219c.496-.308 1.245-.45 1.875-.688.276-.598.576-.984.813-1.656.275-.783.321-1.455.5-2.219-.35-.837-.787-1.712-.938-2.438-.128-.62-.169-1.181-.031-1.719.069-.269.184-.535.438-.75.246-.208.601-.317.906-.313zm.657 7.406c-.06.184-.061.348-.125.531-.055.157-.13.252-.188.406.048-.011.077-.052.125-.063.285-.064.499-.012.781-.063-.193-.295-.413-.496-.594-.813zm3.687 2.031c-.064-.008-.211.037-.281.031.243.17.495.308.563.313.08.005.096.018.219-.188.012-.021-.007-.015 0-.031-.045-.019-.163-.081-.5-.125zm-7 1.563c-.031.019-.095.044-.125.063-.409.254-.646.522-.719.656s-.103.072 0 .219h.031c.02.03-.012.018 0 .031.071-.03.351-.219.656-.625.054-.072.101-.262.156-.344z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5a14":
/***/ (function(module, exports) {

module.exports = {"description":"Used for handling basic user input.","methods":[],"displayName":"DsInput","props":{"value":{"type":{"name":"string|object|number"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The value of the input. Can be passed via v-model.\n     */","description":"The value of the input. Can be passed via v-model."},"model":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The model name when used within a form component. Uses dot notation.\n     */","description":"The model name when used within a form component. Uses dot notation."},"label":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The label of the input.\n     */","description":"The label of the input."},"id":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The id of the input.\n     */","description":"The id of the input."},"disabled":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input is disabled or not.\n     */","description":"Whether the input is disabled or not."},"schema":{"type":{"name":"object"},"required":"","defaultValue":{"value":"() => ({})","func":true},"tags":{},"comment":"/**\n     * The async-validator schema used for the input.\n     */","description":"The async-validator schema used for the input."},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The input's size.\n     * `small, base, large`\n     */","description":"The input's size.\n`small, base, large`"},"type":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"text\"","func":false},"tags":{},"comment":"/**\n     * The type of this input `url, text, password, email, search, textarea`.\n     */","description":"The type of this input `url, text, password, email, search, textarea`."},"placeholder":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The placeholder shown when value is empty.\n     */","description":"The placeholder shown when value is empty."},"autofocus":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input should be automatically focused\n     */","description":"Whether the input should be automatically focused"},"readonly":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Whether the input should be read-only\n     */","description":"Whether the input should be read-only"},"rows":{"type":{"name":"string|number"},"required":"","defaultValue":{"value":"1","func":false},"tags":{},"comment":"/**\n     * How many rows this input should have (only for type=\\\"textarea\\\")\n     */","description":"How many rows this input should have (only for type=\\\"textarea\\\")"},"icon":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the input's icon.\n     */","description":"The name of the input's icon."},"iconRight":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The name of the input's right icon.\n     */","description":"The name of the input's right icon."}},"comment":"/**\n * Used for handling basic user input.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{"input":{"description":"Fires after user input.\nReceives the value as the only argument.","comment":"/**\n         * Fires after user input.\n         * Receives the value as the only argument.\n         *\n         * @event input\n         */"}},"slots":{}}

/***/ }),

/***/ "5acc":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3c7.168 0 13 5.832 13 13s-5.832 13-13 13S3 23.168 3 16 8.832 3 16 3zm-1.125 2.063a10.967 10.967 0 0 0-9.813 9.938H6v2h-.938A10.957 10.957 0 0 0 15 26.939v-.938h2v.938a10.957 10.957 0 0 0 9.938-9.938H26v-2h.938A10.957 10.957 0 0 0 17 5.063v.938h-2v-.938c-.041.004-.084-.004-.125 0zm7.219 4.843l-3.688 8.5-8.5 3.688 3.688-8.5zM16 14.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5b29":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563z"}})]) };
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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M2 5h28v22H2V5zm2 2v12.875l7-7 .719.719 5.75 5.813L22 14.876l.719.719L28 20.908V7.002H4zm20 2a2 2 0 1 1 .001 3.999A2 2 0 0 1 24 9zm-13 6.719l-7 7V25h16.188zm11 2l-3.125 3.094 4.156 4.188H28V23.72z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "5c09":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 4.594v22.813l-1.719-1.688L8.562 21H3.999V11h4.563l4.719-4.719zm-2 4.844l-3.281 3.281-.313.281H6v6h3.406l.313.281L13 22.562V9.437zm5.5 2.593C19.439 13.09 20 14.477 20 16s-.561 2.91-1.5 3.969l-1.438-1.438C17.64 17.837 18 16.972 18 16s-.36-1.837-.938-2.531z"}})]) };
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

/***/ "6038":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M19.031 4.281l1.438 1.438L10.188 16l10.281 10.281-1.438 1.438-11-11L7.343 16l.688-.719z"}})]) };
module.exports = { render: render };

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

/***/ "62c7":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 5h12v2H4V5zm17 0h2v18.688l2.594-2.594L27 22.5l-4.281 4.313-.719.688-.719-.688L17 22.5l1.406-1.406L21 23.688V5zM4 9h10v2H4V9zm0 4h8v2H4v-2zm0 4h6v2H4v-2zm0 4h4v2H4v-2zm0 4h2v2H4v-2z"}})]) };
module.exports = { render: render };

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

/***/ "657c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 5h18c1.645 0 3 1.355 3 3v1h1c1.645 0 3 1.355 3 3v12c0 1.645-1.355 3-3 3H9c-1.645 0-3-1.355-3-3v-1H5c-1.645 0-3-1.355-3-3V8c0-1.645 1.355-3 3-3zm0 2c-.565 0-1 .435-1 1v12c0 .565.435 1 1 1h18c.565 0 1-.435 1-1v-9H5V9h19V8c0-.565-.435-1-1-1H5zm21 4v2h2v-1c0-.565-.435-1-1-1h-1zm0 4v5c0 1.645-1.355 3-3 3H8v1c0 .565.435 1 1 1h18c.565 0 1-.435 1-1v-9h-2z"}})]) };
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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M7.156 5h17.688l.156.844 2 13V27H5v-8.156l2-13zm1.719 2L7.187 18H14v1c0 1.117.883 2 2 2s2-.883 2-2v-1h6.813L23.125 7H8.875zM7 20v5h18v-5h-5.188c-.453 1.711-1.966 3-3.813 3s-3.359-1.289-3.813-3H6.998z"}})]) };
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

/***/ "6799":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M2 8h22v3.375l6-3v15.25l-6-3V24H2V8zm2 2v12h18V10H4zm24 1.625l-4 2v4.75l4 2v-8.75z"}})]) };
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

/***/ "6a98":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M17 4h.625l1.063 2.125c1.277.14 2.567.598 3.531 1.719C23.357 9.166 24 11.176 24 14v.906c.571.546 1 1.247 1 2.094 0 1.26-.891 2.154-2 2.594a39.003 39.003 0 0 1-1.25 3.438c-.487 1.141-.894 2.047-1.5 2.688a7.19 7.19 0 0 1-10.5 0c-.606-.64-1.045-1.547-1.531-2.688-.446-1.045-.849-2.27-1.219-3.438C5.891 19.155 5 18.26 5 17c0-.851.428-1.549 1-2.094V14c0-3.042.821-5.612 2.688-7.375S13.335 4 17.001 4zm-.594 2.063c-2.973.1-5.062.789-6.344 2-1.378 1.302-2.063 3.241-2.063 5.938v1.844l-.5.281a.997.997 0 0 0-.5.875c0 .534.384.957.906 1l.688.031.188.656c.37 1.203.831 2.474 1.281 3.531s.967 1.957 1.125 2.125c2.128 2.252 5.497 2.252 7.625 0 .158-.168.674-1.068 1.125-2.125s.911-2.328 1.281-3.531l.188-.656.688-.031a.98.98 0 0 0 .906-1 .995.995 0 0 0-.5-.875l-.5-.281v-1.844c0-2.518-.587-4.001-1.313-4.844a3.19 3.19 0 0 0-1.188-.875c.024.149.058.291.063.438.019.67-.279 1.354-.75 1.75-.941.792-2.05.727-3.125.781s-2.174.128-2.813.375-.867.389-.875 1.375h-2c.013-1.623 1.015-2.808 2.156-3.25s2.365-.416 3.406-.469 1.882-.271 1.969-.344c.043-.037.037.047.031-.156s-.135-.677-.469-1.344zM12 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]) };
module.exports = { render: render };

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M7 5h18v23l-1.594-1.188L16 21.249l-7.406 5.563L7 28V5zm2 2v17l6.406-4.813.594-.438.594.438L23 24V7H9z"}})]) };
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

/***/ "6c19":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3 6h26v20h-9.563l-2.719 2.719-.719.688-.719-.688L12.561 26H2.998V6zm2 2v16h8.406l.313.281L16 26.562l2.281-2.281.313-.281H27V8H5zm4 3h14v2H9v-2zm0 4h14v2H9v-2zm0 4h10v2H9v-2z"}})]) };
module.exports = { render: render };

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

/***/ "6d10":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 5h22v22H5V5zm2 2v5h5V7H7zm7 0v5h4V7h-4zm6 0v5h5V7h-5zM7 14v4h5v-4H7zm7 0v4h4v-4h-4zm6 0v4h5v-4h-5zM7 20v5h5v-5H7zm7 0v5h4v-5h-4zm6 0v5h5v-5h-5z"}})]) };
module.exports = { render: render };

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M6 4h20v8l-2-2V6H8v20h16v-4l2-2v8H6V4zm16.406 7l4.313 4.281.688.719-.688.719L22.406 21 21 19.594 23.563 17h-9.656v-2h9.656L21 12.406z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "6dc6":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M13 4h6c1.093 0 2 .907 2 2v12c0 1.093-.907 2-2 2h-6c-1.093 0-2-.907-2-2V6c0-1.093.907-2 2-2zm0 2v12h6V6h-6zm-6 8h2v4c0 2.22 1.78 4 4 4h6c2.22 0 4-1.78 4-4v-4h2v4c0 3.302-2.698 6-6 6h-2v2h4v2H11v-2h4v-2h-2c-3.302 0-6-2.698-6-6v-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "6ee3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Flex/Flex.vue?vue&type=template&id=4393ced0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-flex",style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Flex/Flex.vue?vue&type=template&id=4393ced0&

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
 * Used in combination with the flex item component to create flexible layouts.
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

/***/ "6f2e":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3 6h26v20H3V6zm2 2v4h22V8H5zm2 1h8v2H7V9zm17 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM5 14v4h22v-4H5zm2 1h8v2H7v-2zm17 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM5 20v4h22v-4H5zm2 1h8v2H7v-2zm17 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "6ff2":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M22.5 5c4.136 0 7.5 3.364 7.5 7.5 0 2.59-2.365 4.947-2.466 5.047L16 29.081 4.46 17.541C4.365 17.447 2 15.09 2 12.5 2 8.364 5.364 5 9.5 5c2.892 0 5.327 1.804 6.5 2.854C17.173 6.804 19.608 5 22.5 5z"}})]) };
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

/***/ "7120":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Code/Code.vue?vue&type=template&id=343c7cf8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ds-code",class:[
    _vm.size && ("ds-code-size-" + _vm.size),
    _vm.inline && "ds-code-inline"
  ]},[_c(_vm.inline ? 'code' : 'textarea',{ref:"textarea",tag:"component"},[_vm._t("default")],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Code/Code.vue?vue&type=template&id=343c7cf8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.js
var codemirror = __webpack_require__("56b3");
var codemirror_default = /*#__PURE__*/__webpack_require__.n(codemirror);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Code/Code.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
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
 * The code component is used for displaying lines of code.
 * @version 1.0.0
 */

/* harmony default export */ var Codevue_type_script_lang_js_ = ({
  name: 'DsCode',
  props: {
    /**
     * Display the code inline.
     * `true, false`
     */
    inline: {
      type: Boolean,
      default: false
    },

    /**
     * The size used for the code.
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
      editor: null
    };
  },
  mounted: function mounted() {
    if (this.inline) {
      return;
    }

    var options = {
      lineNumbers: true,
      theme: 'vueds',
      tabSize: 2,
      readOnly: true
    };
    this.editor = codemirror_default.a.fromTextArea(this.$refs.textarea, options);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.editor) {
      var wrapper = this.editor.getWrapperElement();
      wrapper.parentNode.removeChild(wrapper);
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/typography/Code/Code.vue?vue&type=script&lang=js&
 /* harmony default export */ var Code_Codevue_type_script_lang_js_ = (Codevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/typography/Code/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("cd66");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Code/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FCode%2FCode.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Code/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2FDevelopment%2Fcion%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FCode%2FCode.vue
 /* harmony default export */ var Code_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode = (demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode); 
// CONCATENATED MODULE: ./src/system/components/typography/Code/Code.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Code_Codevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Code_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode === 'function') Code_demovue_type_custom_index_0_blockType_docs_issuerPath_2FDevelopment_2Fcion_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode(component)

component.options.__file = "Code.vue"
/* harmony default export */ var Code = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "712f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 5.188l4.5 4.813H17v10h-2v-10h-3.5zM5 11h2v14h18V11h2v16H5V11z"}})]) };
module.exports = { render: render };

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

/***/ "73b0":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM20.094 14a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM13 15.594l.719.688L16 18.563l1.281-1.281.719-.688.719.688 3 3-1.438 1.438L18 19.439l-1.281 1.281-.719.688-.719-.688L13 18.439 9.719 21.72l-1.438-1.438 4-4z"}})]) };
module.exports = { render: render };

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

/***/ "75df":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M21.5 2.5h2v1.406a5.62 5.62 0 0 1 2.25.938l.938-.938 1.406 1.406-.938.938c.464.664.792 1.421.938 2.25H29.5v2h-1.406a5.625 5.625 0 0 1-.938 2.281l.969 1.031-1.469 1.375-.938-1a5.617 5.617 0 0 1-2.219.906v1.406h-2v-1.406a5.62 5.62 0 0 1-2.25-.938l-1.031 1.063-1.438-1.438 1.063-1.031a5.615 5.615 0 0 1-.938-2.25h-1.406v-2h1.406a5.632 5.632 0 0 1 .906-2.219l-1-.938 1.375-1.469 1.031.969a5.665 5.665 0 0 1 2.281-.938V2.498zm1 3.313c-2.055 0-3.688 1.632-3.688 3.688s1.632 3.688 3.688 3.688 3.688-1.632 3.688-3.688-1.632-3.688-3.688-3.688zM9.531 11.719l.719 1.813a6.865 6.865 0 0 1 1.656-.219c.571 0 1.126.085 1.656.219l.719-1.813 1.844.75-.719 1.813a6.887 6.887 0 0 1 2.313 2.313l1.813-.719.75 1.844-1.813.719c.132.529.219 1.087.219 1.656s-.086 1.126-.219 1.656l1.813.719-.75 1.844-1.813-.719a6.907 6.907 0 0 1-2.313 2.344l.719 1.781-1.844.75-.719-1.781a6.76 6.76 0 0 1-1.656.219 6.713 6.713 0 0 1-1.656-.219l-.719 1.781-1.844-.75.719-1.781a6.873 6.873 0 0 1-2.344-2.344l-1.781.719-.75-1.844 1.781-.719c-.134-.53-.219-1.087-.219-1.656s.085-1.128.219-1.656l-1.781-.719.75-1.844 1.781.719a6.916 6.916 0 0 1 2.344-2.313l-.719-1.813zm2.375 3.594c-2.663 0-4.813 2.118-4.813 4.781s2.15 4.813 4.813 4.813 4.781-2.15 4.781-4.813-2.118-4.781-4.781-4.781z"}})]) };
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Page/Page.vue?vue&type=template&id=60449170&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ds-page",class:[
    _vm.hasHeader ? 'ds-page-has-header' : 'ds-page-has-no-header',
    _vm.$slots.sidebar && 'ds-page-has-sidebar',
    _vm.showDrawer && 'ds-page-show-drawer',
    _vm.contained && 'ds-page-is-contained'
  ]},[_c('header',{staticClass:"ds-page-header"},[_c('div',{staticClass:"ds-page-header-container"},[_c('div',{staticClass:"ds-page-brand"},[_vm._t("brand")],2),_c('div',{staticClass:"ds-page-navbar"},[_vm._t("navbar")],2),(_vm.$slots.drawer)?_c('div',{staticClass:"ds-page-navigation-toggle",on:{"click":function($event){_vm.showDrawer = !_vm.showDrawer}}},[_c('ds-icon',{attrs:{"name":"bars"}})],1):_vm._e()])]),(_vm.$slots.sidebar)?_c('aside',{staticClass:"ds-page-sidebar"},[_c('div',{staticClass:"ds-page-sidebar-content"},[_vm._t("sidebar")],2)]):_vm._e(),(_vm.$slots.drawer)?_c('aside',{staticClass:"ds-page-drawer"},[_vm._t("drawer")],2):_vm._e(),_c('main',{staticClass:"ds-page-content"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Page/Page.vue?vue&type=template&id=60449170&

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

/***/ "77cf":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4.219 10.781L16 22.562l11.781-11.781 1.438 1.438-12.5 12.5-.719.688-.719-.688-12.5-12.5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "77d8":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M2 7h26c1.093 0 2 .907 2 2v14c0 1.093-.907 2-2 2H2c-1.093 0-2-.907-2-2V9c0-1.093.907-2 2-2zm0 2v14h26V9H2zm2 2h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM4 15h4v2H4v-2zm6 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h4v2h-4v-2zM4 19h4v2H4v-2zm6 0h10v2H10v-2zm12 0h4v2h-4v-2z"}})]) };
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

/***/ "7874":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3.719 2.281l6.75 6.75C12.154 8.419 14.007 8 16 8c8.395 0 14.494 7.044 14.75 7.344l.625.719-.656.656c-.193.192-3.247 3.135-7.344 5.219l6.344 6.344-1.438 1.438-8.688-8.719L8.468 9.876 2.28 3.72zM16 10c-1.389 0-2.697.254-3.938.625l2.063 2.063A2.992 2.992 0 0 1 16 12c1.654 0 3 1.346 3 3 0 .71-.273 1.362-.688 1.875l2.844 2.844A6.966 6.966 0 0 0 23 15c0-1.3-.386-2.556-1.063-3.656C20.161 10.556 18.164 10 15.999 10zm-9.375.875l2.563 2.563A6.746 6.746 0 0 0 9 15.001c0 3.565 2.68 6.54 6.219 6.938l.094.031c.466.039.908.039 1.375 0l.125-.031c.261-.029.531-.068.781-.125l1.719 1.719c-.778.198-1.577.343-2.375.406h-.063c-.29.025-.585.063-.875.063s-.585-.037-.875-.063h-.063c-6.964-.555-13.495-6.934-13.781-7.219l-.656-.656.625-.719c.144-.17 2.137-2.479 5.375-4.469zm.656 1.969a24.434 24.434 0 0 0-3.875 3.094 32.712 32.712 0 0 0 4.781 3.5A8.929 8.929 0 0 1 6.999 15c0-.737.107-1.452.281-2.156zm17.438 0c.173.702.281 1.421.281 2.156 0 1.614-.438 3.12-1.188 4.438a32.299 32.299 0 0 0 4.75-3.469 23.858 23.858 0 0 0-3.844-3.125zM16 14a.951.951 0 0 0-.438.125l1.313 1.313A.951.951 0 0 0 17 15c0-.551-.448-1-1-1z"}})]) };
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

module.exports = {"description":"This component displays the brand's logo.","methods":[],"displayName":"DsLogo","props":{"inverse":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Inverse the logo\n     * `true, false`\n     */","description":"Inverse the logo\n`true, false`"},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the logo.\n     */","description":"The html element name used for the logo."}},"comment":"/**\n * This component displays the brand's logo.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{}}

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

/***/ "7a41":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M2 5h28v22H2V5zm2 2v12.875l7-7 .719.719 5.75 5.813L22 14.876l.719.719L28 20.908V7.002H4zm20 2a2 2 0 1 1 .001 3.999A2 2 0 0 1 24 9zm-13 6.719l-7 7V25h16.188zm11 2l-3.125 3.094 4.156 4.188H28V23.72z"}})]) };
module.exports = { render: render };

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

/***/ "7ccd":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 6h22c1.645 0 3 1.355 3 3v14c0 1.645-1.355 3-3 3H5c-1.645 0-3-1.355-3-3V9c0-1.645 1.355-3 3-3zm0 2c-.555 0-1 .445-1 1v14c0 .555.445 1 1 1h22c.555 0 1-.445 1-1V9c0-.555-.445-1-1-1H5zm1 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "7dfc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7e3a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 7h2.219c.918 0 1.716.61 1.938 1.5L10.782 19h12.469l2.406-9h2.094l-2.594 9.531A1.969 1.969 0 0 1 23.251 21H10.782c-.918 0-1.714-.61-1.938-1.5L6.219 9H4a1 1 0 0 1 0-2zm18 14c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm-9 0c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm3-14h2v3h3v2h-3v3h-2v-3h-3v-2h3V7zm-3 16c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1zm9 0c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})]) };
module.exports = { render: render };

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

/***/ "7ed5":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h20v7h-2V5H7v5H5V3zm2 9h2l1 2 1-2h2l-2 4 2 4h-2l-1-2-1 2H7l2-4zm7 0h2v6h2v2h-4v-8zm7.5 0c.733 0 1.402.287 1.844.75S24 13.818 24 14.406h-2c0-.112-.035-.22-.094-.281S21.766 14 21.5 14c-.217 0-.5.283-.5.5s.283.5.5.5c1.383 0 2.5 1.117 2.5 2.5 0 1.3-1.081 2.5-2.5 2.5-.732 0-1.413-.232-1.875-.719S19 18.16 19 17.593h2c0 .233.049.299.063.313s.069.094.438.094c.381 0 .5-.2.5-.5 0-.217-.283-.5-.5-.5-1.383 0-2.5-1.117-2.5-2.5s1.117-2.5 2.5-2.5zM5 22h2v5h16v-5h2v7H5v-7z"}})]) };
module.exports = { render: render };

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

/***/ "800c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 3h2v2.063c5.268.477 9.46 4.67 9.938 9.938h2.063v2h-2.063A10.989 10.989 0 0 1 17 26.939v2.063h-2v-2.063a10.989 10.989 0 0 1-9.938-9.938H2.999v-2h2.063A10.989 10.989 0 0 1 15 5.063V3zm0 4.031A8.997 8.997 0 0 0 7.031 15H9v2H7.031A8.997 8.997 0 0 0 15 24.969V23h2v1.969A8.997 8.997 0 0 0 24.969 17H23v-2h1.969A8.997 8.997 0 0 0 17 7.031V9h-2V7.031z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "804f":
/***/ (function(module) {

module.exports = {"aliases":{"green":{"value":"100, 69%"},"neutral":{"value":"264, 10%"},"orange":{"value":"28, 80%"},"red":{"value":"3, 65%"},"yellow":{"value":"48, 100%"},"pink":{"value":"330, 86%"},"blue":{"value":"200, 100%"},"teal":{"value":"174, 80%"},"purple":{"value":"264, 88%"},"x-large":{"value":48},"xxx-large":{"value":128},"small":{"value":16},"xx-large":{"value":64},"base":{"value":24},"xxx-small":{"value":2},"x-small":{"value":8},"xx-small":{"value":4},"large":{"value":32},"xs":{"value":480},"sm":{"value":600},"md":{"value":768},"lg":{"value":1024},"xl":{"value":1200}},"props":{"color-neutral-0":{"type":"color","category":"color","name":"color-neutral-0","value":"rgb(25, 23, 28)","originalValue":"hsla({!neutral}, 10%, 1)"},"color-neutral-10":{"type":"color","category":"color","name":"color-neutral-10","value":"rgb(40, 37, 45)","originalValue":"hsla({!neutral}, 16%, 1)"},"color-neutral-20":{"type":"color","category":"color","name":"color-neutral-20","value":"rgb(75, 69, 84)","originalValue":"hsla({!neutral}, 30%, 1)"},"color-neutral-30":{"type":"color","category":"color","name":"color-neutral-30","value":"rgb(100, 92, 112)","originalValue":"hsla({!neutral}, 40%, 1)"},"color-neutral-40":{"type":"color","category":"color","name":"color-neutral-40","value":"rgb(112, 103, 126)","originalValue":"hsla({!neutral}, 45%, 1)"},"color-neutral-50":{"type":"color","category":"color","name":"color-neutral-50","value":"rgb(151, 143, 163)","originalValue":"hsla({!neutral}, 60%, 1)"},"color-neutral-60":{"type":"color","category":"color","name":"color-neutral-60","value":"rgb(177, 171, 186)","originalValue":"hsla({!neutral}, 70%, 1)"},"color-neutral-70":{"type":"color","category":"color","name":"color-neutral-70","value":"rgb(203, 199, 209)","originalValue":"hsla({!neutral}, 80%, 1)"},"color-neutral-80":{"type":"color","category":"color","name":"color-neutral-80","value":"rgb(229, 227, 232)","originalValue":"hsla({!neutral}, 90%, 1)"},"color-neutral-85":{"type":"color","category":"color","name":"color-neutral-85","value":"rgb(239, 238, 241)","originalValue":"hsla({!neutral}, 94%, 1)"},"color-neutral-90":{"type":"color","category":"color","name":"color-neutral-90","value":"rgb(245, 244, 246)","originalValue":"hsla({!neutral}, 96%, 1)"},"color-neutral-95":{"type":"color","category":"color","name":"color-neutral-95","value":"rgb(250, 249, 250)","originalValue":"hsla({!neutral}, 98%, 1)"},"color-neutral-100":{"type":"color","category":"color","name":"color-neutral-100","value":"rgb(255, 255, 255)","originalValue":"hsla({!neutral}, 100%, 1)"},"color-primary":{"type":"color","category":"color","name":"color-primary","value":"rgb(20, 184, 167)","originalValue":"hsla({!teal}, 40%, 1)"},"color-primary-active":{"type":"color","category":"color","name":"color-primary-active","value":"rgb(22, 197, 180)","originalValue":"hsla({!teal}, 43%, 1)"},"color-primary-inverse":{"type":"color","category":"color","name":"color-primary-inverse","value":"rgb(241, 253, 252)","originalValue":"hsla({!teal}, 97%, 1)"},"color-secondary":{"type":"color","category":"color","name":"color-secondary","value":"rgb(95, 14, 216)","originalValue":"hsla({!purple}, 45%, 1)"},"color-secondary-active":{"type":"color","category":"color","name":"color-secondary-active","value":"rgb(111, 25, 240)","originalValue":"hsla({!purple}, 52%, 1)"},"color-secondary-inverse":{"type":"color","category":"color","name":"color-secondary-inverse","value":"rgb(246, 241, 254)","originalValue":"hsla({!purple}, 97%, 1)"},"color-success":{"type":"color","category":"color","name":"color-success","value":"rgb(79, 172, 32)","originalValue":"hsla({!green}, 40%, 1)"},"color-success-active":{"type":"color","category":"color","name":"color-success-active","value":"rgb(88, 194, 36)","originalValue":"hsla({!green}, 45%, 1)"},"color-success-inverse":{"type":"color","category":"color","name":"color-success-inverse","value":"rgb(246, 253, 242)","originalValue":"hsla({!green}, 97%, 1)"},"color-danger":{"type":"color","category":"color","name":"color-danger","value":"rgb(210, 53, 45)","originalValue":"hsla({!red}, 50%, 1)"},"color-danger-active":{"type":"color","category":"color","name":"color-danger-active","value":"rgb(216, 77, 70)","originalValue":"hsla({!red}, 56%, 1)"},"color-danger-inverse":{"type":"color","category":"color","name":"color-danger-inverse","value":"rgb(252, 243, 242)","originalValue":"hsla({!red}, 97%, 1)"},"color-warning":{"type":"color","category":"color","name":"color-warning","value":"rgb(230, 121, 25)","originalValue":"hsla({!orange}, 50%, 1)"},"color-warning-active":{"type":"color","category":"color","name":"color-warning-active","value":"rgb(233, 137, 53)","originalValue":"hsla({!orange}, 56%, 1)"},"color-warning-inverse":{"type":"color","category":"color","name":"color-warning-inverse","value":"rgb(253, 247, 241)","originalValue":"hsla({!orange}, 97%, 1)"},"color-yellow":{"type":"color","category":"color","name":"color-yellow","value":"rgb(245, 196, 0)","originalValue":"hsla({!yellow}, 48%, 1)"},"color-yellow-active":{"type":"color","category":"color","name":"color-yellow-active","value":"rgb(255, 206, 10)","originalValue":"hsla({!yellow}, 52%, 1)"},"color-yellow-inverse":{"type":"color","category":"color","name":"color-yellow-inverse","value":"rgb(255, 252, 240)","originalValue":"hsla({!yellow}, 97%, 1)"},"text-color-base":{"type":"color","category":"text-color","name":"text-color-base","value":"rgb(75, 69, 84)","originalValue":"hsla({!neutral}, 30%, 1)"},"text-color-soft":{"type":"color","category":"text-color","name":"text-color-soft","value":"rgb(112, 103, 126)","originalValue":"hsla({!neutral}, 45%, 1)"},"text-color-softer":{"type":"color","category":"text-color","name":"text-color-softer","value":"rgb(177, 171, 186)","originalValue":"hsla({!neutral}, 70%, 1)"},"text-color-disabled":{"type":"color","category":"text-color","name":"text-color-disabled","value":"rgb(177, 171, 186)","originalValue":"hsla({!neutral}, 70%, 1)"},"text-color-inverse":{"type":"color","category":"text-color","name":"text-color-inverse","value":"rgb(250, 249, 250)","originalValue":"hsla({!neutral}, 98%, 1)"},"text-color-link":{"type":"color","category":"text-color","name":"text-color-link","value":"rgb(20, 184, 167)","originalValue":"hsla({!teal}, 40%, 1)"},"text-color-link-active":{"type":"color","category":"text-color","name":"text-color-link-active","value":"rgb(22, 197, 180)","originalValue":"hsla({!teal}, 43%, 1)"},"text-color-primary":{"type":"color","category":"text-color","name":"text-color-primary","value":"rgb(20, 184, 167)","originalValue":"hsla({!teal}, 40%, 1)"},"text-color-primary-inverse":{"type":"color","category":"text-color","name":"text-color-primary-inverse","value":"rgb(241, 253, 252)","originalValue":"hsla({!teal}, 97%, 1)"},"text-color-secondary":{"type":"color","category":"text-color","name":"text-color-secondary","value":"rgb(95, 14, 216)","originalValue":"hsla({!purple}, 45%, 1)"},"text-color-secondary-inverse":{"type":"color","category":"text-color","name":"text-color-secondary-inverse","value":"rgb(246, 241, 254)","originalValue":"hsla({!purple}, 97%, 1)"},"text-color-success":{"type":"color","category":"text-color","name":"text-color-success","value":"rgb(79, 172, 32)","originalValue":"hsla({!green}, 40%, 1)"},"text-color-success-inverse":{"type":"color","category":"text-color","name":"text-color-success-inverse","value":"rgb(246, 253, 242)","originalValue":"hsla({!green}, 97%, 1)"},"text-color-warning":{"type":"color","category":"text-color","name":"text-color-warning","value":"rgb(230, 121, 25)","originalValue":"hsla({!orange}, 50%, 1)"},"text-color-warning-inverse":{"type":"color","category":"text-color","name":"text-color-warning-inverse","value":"rgb(253, 247, 241)","originalValue":"hsla({!orange}, 97%, 1)"},"text-color-danger":{"type":"color","category":"text-color","name":"text-color-danger","value":"rgb(210, 53, 45)","originalValue":"hsla({!red}, 50%, 1)"},"text-color-danger-inverse":{"type":"color","category":"text-color","name":"text-color-danger-inverse","value":"rgb(252, 243, 242)","originalValue":"hsla({!red}, 97%, 1)"},"background-color-base":{"type":"color","category":"background-color","name":"background-color-base","value":"rgb(255, 255, 255)","originalValue":"hsla({!neutral}, 100%, 1)"},"background-color-soft":{"type":"color","category":"background-color","name":"background-color-soft","value":"rgb(250, 249, 250)","originalValue":"hsla({!neutral}, 98%, 1)"},"background-color-softer":{"type":"color","category":"background-color","name":"background-color-softer","value":"rgb(245, 244, 246)","originalValue":"hsla({!neutral}, 96%, 1)"},"background-color-softer-active":{"type":"color","category":"background-color","name":"background-color-softer-active","value":"rgb(250, 249, 250)","originalValue":"hsla({!neutral}, 98%, 1)"},"background-color-softest":{"type":"color","category":"background-color","name":"background-color-softest","value":"rgb(239, 238, 241)","originalValue":"hsla({!neutral}, 94%, 1)"},"background-color-softest-active":{"type":"color","category":"background-color","name":"background-color-softest-active","value":"rgb(245, 244, 246)","originalValue":"hsla({!neutral}, 96%, 1)"},"background-color-inverse":{"type":"color","category":"background-color","name":"background-color-inverse","value":"rgb(25, 23, 28)","originalValue":"hsla({!neutral}, 10%, 1)"},"background-color-inverse-soft":{"type":"color","category":"background-color","name":"background-color-inverse-soft","value":"rgb(40, 37, 45)","originalValue":"hsla({!neutral}, 16%, 1)"},"background-color-inverse-softer":{"type":"color","category":"background-color","name":"background-color-inverse-softer","value":"rgb(75, 69, 84)","originalValue":"hsla({!neutral}, 30%, 1)"},"background-color-inverse-softer-active":{"type":"color","category":"background-color","name":"background-color-inverse-softer-active","value":"rgb(100, 92, 112)","originalValue":"hsla({!neutral}, 40%, 1)"},"background-color-primary":{"type":"color","category":"background-color","name":"background-color-primary","value":"rgb(20, 184, 167)","originalValue":"hsla({!teal}, 40%, 1)"},"background-color-primary-active":{"type":"color","category":"background-color","name":"background-color-primary-active","value":"rgb(22, 197, 180)","originalValue":"hsla({!teal}, 43%, 1)"},"background-color-primary-inverse":{"type":"color","category":"background-color","name":"background-color-primary-inverse","value":"rgb(241, 253, 252)","originalValue":"hsla({!teal}, 97%, 1)"},"background-color-secondary":{"type":"color","category":"background-color","name":"background-color-secondary","value":"rgb(95, 14, 216)","originalValue":"hsla({!purple}, 45%, 1)"},"background-color-secondary-active":{"type":"color","category":"background-color","name":"background-color-secondary-active","value":"rgb(111, 25, 240)","originalValue":"hsla({!purple}, 52%, 1)"},"background-color-secondary-inverse":{"type":"color","category":"background-color","name":"background-color-secondary-inverse","value":"rgb(246, 241, 254)","originalValue":"hsla({!purple}, 97%, 1)"},"background-color-success":{"type":"color","category":"background-color","name":"background-color-success","value":"rgb(79, 172, 32)","originalValue":"hsla({!green}, 40%, 1)"},"background-color-success-active":{"type":"color","category":"background-color","name":"background-color-success-active","value":"rgb(88, 194, 36)","originalValue":"hsla({!green}, 45%, 1)"},"background-color-success-inverse":{"type":"color","category":"background-color","name":"background-color-success-inverse","value":"rgb(246, 253, 242)","originalValue":"hsla({!green}, 97%, 1)"},"background-color-warning":{"type":"color","category":"background-color","name":"background-color-warning","value":"rgb(230, 121, 25)","originalValue":"hsla({!orange}, 50%, 1)"},"background-color-warning-active":{"type":"color","category":"background-color","name":"background-color-warning-active","value":"rgb(233, 137, 53)","originalValue":"hsla({!orange}, 56%, 1)"},"background-color-warning-inverse":{"type":"color","category":"background-color","name":"background-color-warning-inverse","value":"rgb(253, 247, 241)","originalValue":"hsla({!orange}, 97%, 1)"},"background-color-danger":{"type":"color","category":"background-color","name":"background-color-danger","value":"rgb(210, 53, 45)","originalValue":"hsla({!red}, 50%, 1)"},"background-color-danger-active":{"type":"color","category":"background-color","name":"background-color-danger-active","value":"rgb(216, 77, 70)","originalValue":"hsla({!red}, 56%, 1)"},"background-color-danger-inverse":{"type":"color","category":"background-color","name":"background-color-danger-inverse","value":"rgb(252, 243, 242)","originalValue":"hsla({!red}, 97%, 1)"},"border-color-base":{"type":"color","category":"border-color","name":"border-color-base","value":"rgb(177, 171, 186)","originalValue":"hsla({!neutral}, 70%, 1)"},"border-color-soft":{"type":"color","category":"border-color","name":"border-color-soft","value":"rgb(203, 199, 209)","originalValue":"hsla({!neutral}, 80%, 1)"},"border-color-softer":{"type":"color","category":"border-color","name":"border-color-softer","value":"rgb(229, 227, 232)","originalValue":"hsla({!neutral}, 90%, 1)"},"border-color-active":{"type":"color","category":"border-color","name":"border-color-active","value":"rgb(20, 184, 167)","originalValue":"hsla({!teal}, 40%, 1)"},"border-color-primary":{"type":"color","category":"border-color","name":"border-color-primary","value":"rgb(20, 184, 167)","originalValue":"hsla({!teal}, 40%, 1)"},"border-color-success":{"type":"color","category":"border-color","name":"border-color-success","value":"rgb(79, 172, 32)","originalValue":"hsla({!green}, 40%, 1)"},"border-color-warning":{"type":"color","category":"border-color","name":"border-color-warning","value":"rgb(230, 121, 25)","originalValue":"hsla({!orange}, 50%, 1)"},"border-color-danger":{"type":"color","category":"border-color","name":"border-color-danger","value":"rgb(210, 53, 45)","originalValue":"hsla({!red}, 50%, 1)"},"border-size-base":{"type":"number","category":"border-size","name":"border-size-base","value":"1px","originalValue":"1px"},"border-size-large":{"type":"number","category":"border-size","name":"border-size-large","value":"3px","originalValue":"3px"},"border-size-x-large":{"type":"number","category":"border-size","name":"border-size-x-large","value":"6px","originalValue":"6px"},"border-radius-base":{"type":"number","category":"border-radius","name":"border-radius-base","value":"3px","originalValue":"3px"},"border-radius-rounded":{"type":"number","category":"border-radius","name":"border-radius-rounded","value":"2em","originalValue":"2em"},"border-radius-circle":{"type":"number","category":"border-radius","name":"border-radius-circle","value":"50%","originalValue":"50%"},"font-size-xxxx-large":{"type":"number","category":"font-size","name":"font-size-xxxx-large","value":"3rem","originalValue":"3rem"},"font-size-xxx-large":{"type":"number","category":"font-size","name":"font-size-xxx-large","value":"2.5rem","originalValue":"2.5rem"},"font-size-xx-large":{"type":"number","category":"font-size","name":"font-size-xx-large","value":"2rem","originalValue":"2rem"},"font-size-x-large":{"type":"number","category":"font-size","name":"font-size-x-large","value":"1.5rem","originalValue":"1.5rem"},"font-size-large":{"type":"number","category":"font-size","name":"font-size-large","value":"1.25rem","originalValue":"1.25rem"},"font-size-base":{"type":"number","category":"font-size","name":"font-size-base","value":"1rem","originalValue":"1rem"},"font-size-body":{"type":"number","category":"font-size","name":"font-size-body","value":"16px","originalValue":"16px"},"font-size-small":{"type":"number","category":"font-size","name":"font-size-small","value":"0.8rem","originalValue":"0.8rem"},"font-size-x-small":{"type":"number","category":"font-size","name":"font-size-x-small","value":"0.7rem","originalValue":"0.7rem"},"font-size-xx-small":{"type":"number","category":"font-size","name":"font-size-xx-small","value":"0.6rem","originalValue":"0.6rem"},"font-space-xxxx-large":{"type":"number","category":"font-spacing","name":"font-space-xxxx-large","value":"2em","originalValue":"2em"},"font-space-xxx-large":{"type":"number","category":"font-spacing","name":"font-space-xxx-large","value":"1.5em","originalValue":"1.5em"},"font-space-xx-large":{"type":"number","category":"font-spacing","name":"font-space-xx-large","value":"1.2em","originalValue":"1.2em"},"font-space-x-large":{"type":"number","category":"font-spacing","name":"font-space-x-large","value":"1em","originalValue":"1em"},"font-space-large":{"type":"number","category":"font-spacing","name":"font-space-large","value":"0.6em","originalValue":"0.6em"},"font-space-base":{"type":"number","category":"font-spacing","name":"font-space-base","value":"0.5em","originalValue":"0.5em"},"font-space-small":{"type":"number","category":"font-spacing","name":"font-space-small","value":"0.4em","originalValue":"0.4em"},"font-space-x-small":{"type":"number","category":"font-spacing","name":"font-space-x-small","value":"0.3em","originalValue":"0.3em"},"font-space-xx-small":{"type":"number","category":"font-spacing","name":"font-space-xx-small","value":"0.2em","originalValue":"0.2em"},"font-family-heading":{"type":"...","category":"font-family","name":"font-family-heading","value":"'LatoWeb', sans-serif","originalValue":"'LatoWeb', sans-serif"},"font-family-text":{"type":"...","category":"font-family","name":"font-family-text","value":"'LatoWeb', sans-serif","originalValue":"'LatoWeb', sans-serif"},"font-family-code":{"type":"...","category":"font-family","name":"font-family-code","value":"inconsolata, monospace","originalValue":"inconsolata, monospace"},"font-weight-regular":{"type":"...","category":"font-weight","name":"font-weight-regular","value":"normal","originalValue":"normal"},"font-weight-bold":{"type":"...","category":"font-weight","name":"font-weight-bold","value":"600","originalValue":"600"},"line-height-base":{"type":"number","category":"line-height","name":"line-height-base","value":"1.5","originalValue":"1.5"},"line-height-small":{"type":"number","category":"line-height","name":"line-height-small","value":"1.3","originalValue":"1.3"},"line-height-smaller":{"type":"number","category":"line-height","name":"line-height-smaller","value":"1.1","originalValue":"1.1"},"letter-spacing-x-large":{"type":"number","category":"letter-spacing","name":"letter-spacing-x-large","value":"0.1em","originalValue":"0.1em"},"letter-spacing-large":{"type":"number","category":"letter-spacing","name":"letter-spacing-large","value":"0.05em","originalValue":"0.05em"},"letter-spacing-base":{"type":"number","category":"letter-spacing","name":"letter-spacing-base","value":"0","originalValue":"0"},"letter-spacing-small":{"type":"number","category":"letter-spacing","name":"letter-spacing-small","value":"-0.01em","originalValue":"-0.01em"},"letter-spacing-x-small":{"type":"number","category":"letter-spacing","name":"letter-spacing-x-small","value":"-0.015em","originalValue":"-0.015em"},"opacity-soft":{"type":"number","category":"opacity","name":"opacity-soft","value":"0.65","originalValue":"0.65"},"opacity-disabled":{"type":"number","category":"opacity","name":"opacity-disabled","value":"0.5","originalValue":"0.5"},"xxx-large":{"type":"number","category":"space-size","name":"xxx-large","value":128,"originalValue":128},"xx-large":{"type":"number","category":"space-size","name":"xx-large","value":64,"originalValue":64},"x-large":{"type":"number","category":"space-size","name":"x-large","value":48,"originalValue":48},"large":{"type":"number","category":"space-size","name":"large","value":32,"originalValue":32},"base":{"type":"number","category":"space-size","name":"base","value":24,"originalValue":24},"small":{"type":"number","category":"space-size","name":"small","value":16,"originalValue":16},"x-small":{"type":"number","category":"space-size","name":"x-small","value":8,"originalValue":8},"xx-small":{"type":"number","category":"space-size","name":"xx-small","value":4,"originalValue":4},"xxx-small":{"type":"number","category":"space-size","name":"xxx-small","value":2,"originalValue":2},"space-xxx-large":{"type":"number","category":"space","name":"space-xxx-large","value":"128px","originalValue":"{!xxx-large}px"},"space-xx-large":{"type":"number","category":"space","name":"space-xx-large","value":"64px","originalValue":"{!xx-large}px"},"space-x-large":{"type":"number","category":"space","name":"space-x-large","value":"48px","originalValue":"{!x-large}px"},"space-large":{"type":"number","category":"space","name":"space-large","value":"32px","originalValue":"{!large}px"},"space-base":{"type":"number","category":"space","name":"space-base","value":"24px","originalValue":"{!base}px"},"space-small":{"type":"number","category":"space","name":"space-small","value":"16px","originalValue":"{!small}px"},"space-x-small":{"type":"number","category":"space","name":"space-x-small","value":"8px","originalValue":"{!x-small}px"},"space-xx-small":{"type":"number","category":"space","name":"space-xx-small","value":"4px","originalValue":"{!xx-small}px"},"space-xxx-small":{"type":"number","category":"space","name":"space-xxx-small","value":"2px","originalValue":"{!xxx-small}px"},"size-height-base":{"type":"number","category":"size","name":"size-height-base","value":"42px","originalValue":"42px"},"size-height-large":{"type":"number","category":"size","name":"size-height-large","value":"50px","originalValue":"50px"},"size-height-xlarge":{"type":"number","category":"size","name":"size-height-xlarge","value":"60px","originalValue":"60px"},"size-tappable-square":{"type":"number","category":"size","name":"size-tappable-square","value":"44px","originalValue":"44px"},"size-height-footer":{"type":"number","category":"size","name":"size-height-footer","value":"64px","originalValue":"64px"},"box-shadow-large":{"type":"...","category":"box-shadow","name":"box-shadow-large","value":"0 20px 60px 0 rgba(0, 0, 0, .15)","originalValue":"0 20px 60px 0 rgba(0, 0, 0, .15)"},"box-shadow-base":{"type":"...","category":"box-shadow","name":"box-shadow-base","value":"0px 12px 26px -4px rgba(0, 0, 0, .1)","originalValue":"0px 12px 26px -4px rgba(0, 0, 0, .1)"},"box-shadow-small":{"type":"...","category":"box-shadow","name":"box-shadow-small","value":"0px 8px 18px -2px rgba(0, 0, 0, .1)","originalValue":"0px 8px 18px -2px rgba(0, 0, 0, .1)"},"box-shadow-x-small":{"type":"...","category":"box-shadow","name":"box-shadow-x-small","value":"0px 0px 3px 0px rgba(0, 0, 0, .1)","originalValue":"0px 0px 3px 0px rgba(0, 0, 0, .1)"},"box-shadow-active":{"type":"...","category":"box-shadow","name":"box-shadow-active","value":"0 0 6px 1px rgba(20, 100, 160, 0.5)","originalValue":"0 0 6px 1px rgba(20, 100, 160, 0.5)"},"box-shadow-inset":{"type":"...","category":"box-shadow","name":"box-shadow-inset","value":"inset 0 0 20px 1px rgba(0,0,0,.15)","originalValue":"inset 0 0 20px 1px rgba(0,0,0,.15)"},"box-shadow-small-inset":{"type":"...","category":"box-shadow","name":"box-shadow-small-inset","value":"inset 0 0 0 1px rgba(0,0,0,.05)","originalValue":"inset 0 0 0 1px rgba(0,0,0,.05)"},"duration-short":{"type":"number","category":"time","name":"duration-short","value":"0.08s","originalValue":"0.08s"},"duration-base":{"type":"number","category":"time","name":"duration-base","value":"0.5s","originalValue":"0.5s"},"duration-long":{"type":"number","category":"time","name":"duration-long","value":"0.75s","originalValue":"0.75s"},"duration-x-long":{"type":"number","category":"time","name":"duration-x-long","value":"1s","originalValue":"1s"},"duration-xx-long":{"type":"number","category":"time","name":"duration-xx-long","value":"2s","originalValue":"2s"},"ease-out":{"type":"number","category":"ease","name":"ease-out","value":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","originalValue":"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},"ease-out-sharp":{"type":"number","category":"ease","name":"ease-out-sharp","value":"cubic-bezier(0.165, 0.84, 0.44, 1)","originalValue":"cubic-bezier(0.165, 0.84, 0.44, 1)"},"ease-out-bounce":{"type":"number","category":"ease","name":"ease-out-bounce","value":"cubic-bezier(.87,-.41,.19,1.44)","originalValue":"cubic-bezier(.87,-.41,.19,1.44)"},"ease-in":{"type":"number","category":"ease","name":"ease-in","value":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","originalValue":"cubic-bezier(0.55, 0.085, 0.68, 0.53)"},"ease-in-sharp":{"type":"number","category":"ease","name":"ease-in-sharp","value":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","originalValue":"cubic-bezier(0.895, 0.03, 0.685, 0.22)"},"z-index-modal":{"type":"number","category":"z-index","name":"z-index-modal","value":"9999","originalValue":"9999"},"z-index-page-submenu":{"type":"number","category":"z-index","name":"z-index-page-submenu","value":"2500","originalValue":"2500"},"z-index-page-header":{"type":"number","category":"z-index","name":"z-index-page-header","value":"2000","originalValue":"2000"},"z-index-page-sidebar":{"type":"number","category":"z-index","name":"z-index-page-sidebar","value":"1500","originalValue":"1500"},"z-index-sticky":{"type":"number","category":"z-index","name":"z-index-sticky","value":"100","originalValue":"100"},"xs":{"type":"...","category":"media-size","name":"xs","value":480,"originalValue":480},"sm":{"type":"...","category":"media-size","name":"sm","value":600,"originalValue":600},"md":{"type":"...","category":"media-size","name":"md","value":768,"originalValue":768},"lg":{"type":"...","category":"media-size","name":"lg","value":1024,"originalValue":1024},"xl":{"type":"...","category":"media-size","name":"xl","value":1024,"originalValue":1024},"media-query-x-small":{"type":"...","category":"media-query","name":"media-query-x-small","value":"(min-width: 480px)","originalValue":"(min-width: {!xs}px)"},"media-query-small":{"type":"...","category":"media-query","name":"media-query-small","value":"(min-width: 600px)","originalValue":"(min-width: {!sm}px)"},"media-query-medium":{"type":"...","category":"media-query","name":"media-query-medium","value":"(min-width: 768px)","originalValue":"(min-width: {!md}px)"},"media-query-large":{"type":"...","category":"media-query","name":"media-query-large","value":"(min-width: 1024px)","originalValue":"(min-width: {!lg}px)"},"media-query-x-large":{"type":"...","category":"media-query","name":"media-query-x-large","value":"(min-width: 1200px)","originalValue":"(min-width: {!xl}px)"}}};

/***/ }),

/***/ "809c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M9 4h14v7h2c1.645 0 3 1.355 3 3v10h-5v4H9v-4H4V14c0-1.645 1.355-3 3-3h2V4zm2 2v5h10V6H11zm-4 7c-.565 0-1 .435-1 1v8h3v-4h14v4h3v-8c0-.565-.435-1-1-1H7zm1 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 6v6h10v-6H11z"}})]) };
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

/***/ "8120":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M18.875 4l1.438 1.375-6.031 6.406 8.344 5.031L13.438 26h4.563v2h-8v-8h2v4.563l7.375-7.375-7.188-4.344-1.063-.625.844-.906z"}})]) };
module.exports = { render: render };

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

/***/ "83c4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3c1.864 0 3.399 1.275 3.844 3H29v20H3V6h9.156c.445-1.725 1.98-3 3.844-3zm0 2c-.81 0-1.428.385-1.75 1h3.5c-.322-.615-.94-1-1.75-1zM5 8v9h22V8H5zm11 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM5 19v5h22v-5H5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "83c6":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 4.594v22.813l-1.719-1.688L8.562 21H3.999V11h4.563l4.719-4.719zm-2 4.844l-3.281 3.281-.313.281H6v6h3.406l.313.281L13 22.562V9.437zm7.219 2.343L23 14.562l2.781-2.781 1.438 1.438L24.438 16l2.781 2.781-1.438 1.438L23 17.438l-2.781 2.781-1.438-1.438L21.562 16l-2.781-2.781z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84e8":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M21.75 4c1.671 0 3.225.661 4.406 1.844S28 8.579 28 10.25s-.662 3.255-1.844 4.438l-1.469 1.469a6.25 6.25 0 0 1-4.438 1.844 6.163 6.163 0 0 1-2.281-.438l1.625-1.625c.215.038.432.063.656.063a4.276 4.276 0 0 0 3.031-1.25l1.469-1.469a4.274 4.274 0 0 0 0-6.031c-.804-.805-1.863-1.25-3-1.25s-2.227.444-3.031 1.25L17.249 8.72a4.286 4.286 0 0 0-1.188 3.688l-1.625 1.625a6.16 6.16 0 0 1-.438-2.281 6.26 6.26 0 0 1 1.844-4.438l1.469-1.469a6.25 6.25 0 0 1 4.438-1.844zm-2.469 7.281l1.438 1.438-8 8-1.438-1.438zM11.75 14c.793 0 1.565.153 2.281.438l-1.625 1.625A3.75 3.75 0 0 0 11.75 16a4.276 4.276 0 0 0-3.031 1.25L7.25 18.719a4.274 4.274 0 0 0 0 6.031c.804.805 1.863 1.25 3 1.25s2.227-.444 3.031-1.25l1.469-1.469a4.286 4.286 0 0 0 1.188-3.688l1.625-1.625a6.16 6.16 0 0 1 .438 2.281 6.258 6.258 0 0 1-1.844 4.438l-1.469 1.469C13.507 27.339 11.922 28 10.25 28s-3.225-.661-4.406-1.844C4.662 24.974 4 23.421 4 21.75s.662-3.256 1.844-4.438l1.469-1.469a6.25 6.25 0 0 1 4.438-1.844z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "857a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M10 2h16v16.844a3.019 3.019 0 0 1-2.375 2.938L16 23.438v3.563c0 1.645-1.355 3-3 3s-3-1.355-3-3v-10.75l-.75.188c-.156.203-.224.331-.625.625-.642.47-1.633.938-2.969.938C4.23 18.004 3 16.712 3 15.096v-.406l.281-.313L10 7.596V2.002zm2 2v3h12V4H12zm-.594 5l-6.313 6.406c.082.421.255.594.563.594.903 0 1.459-.273 1.813-.531s.438-.438.438-.438l.188-.344.406-.125 2.25-.594 1.25-.313v13.344c0 .565.435 1 1 1s1-.435 1-1v-5.188l.781-.188 8.438-1.781c.467-.1.781-.523.781-1V8.998H11.407z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "85c2":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3 7h26v2H3V7zm8 4h18v2H11v-2zm-8 4h26v2H3v-2zm8 4h18v2H11v-2zm-8 4h26v2H3v-2z"}})]) };
module.exports = { render: render };

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M25 4.031c.765 0 1.517.298 2.094.875a2.966 2.966 0 0 1 0 4.188L17 19.219l-.313.063-3.5.688-1.469.313.313-1.469.688-3.5.063-.313.219-.219 9.906-9.875a2.951 2.951 0 0 1 2.094-.875zm0 1.938c-.235 0-.464.121-.688.344l-9.688 9.688-.344 1.719 1.719-.344 9.688-9.688c.446-.446.446-.929 0-1.375-.223-.223-.453-.344-.688-.344zM4 8h13.188l-2 2H6v16h16v-9.188l2-2V28H4V8z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "885e":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3c.624 0 1.248.213 1.781.594l1.656 1.156 1.875.25h.031c1.314.16 2.352 1.223 2.531 2.531.003.024.029.038.031.063h-.031l.375 1.875 1.156 1.656c.762 1.067.73 2.476.031 3.594v.031l-.031.031-1.156 1.656-.25 1.875 3.125 4.75 1.031 1.531h-4.781l-1.156 2.688L21.499 29l-1.031-1.563-3.156-4.75c-.818.379-1.779.349-2.625 0l-3.156 4.75L10.5 29l-.719-1.719-1.156-2.688H3.844l1.031-1.531 3.219-4.906-.313-1.719-1.188-1.656c-.762-1.067-.73-2.507-.031-3.625v-.031l.031-.031 1.156-1.5.25-1.938v-.031l.031-.031a3.385 3.385 0 0 1 2.563-2.563L10.624 5h.031l1.906-.25 1.656-1.156A3.084 3.084 0 0 1 15.998 3zm0 2.031c-.229 0-.458.068-.625.188l-2 1.438-.25.031-2.094.281c-.015.003-.016.027-.031.031a1.398 1.398 0 0 0-1 1c-.004.015-.028.016-.031.031l-.281 2.094-.031.281-.156.188-1.25 1.625c-.301.482-.269 1.073-.031 1.406l1.281 1.781.156.188.031.25.406 2.281v.063a.978.978 0 0 0 .125.375.877.877 0 0 0 .688.438h.031l2.188.313.281.031.188.156 1.625 1.25c.482.302 1.073.269 1.406.031l1.781-1.281.188-.156.25-.031 2.281-.406h.063a.886.886 0 0 0 .594-.313v-.031l.063-.031a.954.954 0 0 0 .156-.438v-.031l.313-2.188.031-.25 1.406-1.969c.302-.482.269-1.042.031-1.375l-1.281-1.781-.156-.188-.031-.219-.406-2.219v-.063a.89.89 0 0 0-.813-.813h-.031l-2.188-.313-.25-.031-.219-.156-1.781-1.281a1.101 1.101 0 0 0-.625-.188zm6.906 15.219c-.409.323-.9.552-1.438.625-.024.003-.038.029-.063.031v-.031l-1.969.344-.469.344 2.125 3.25.688-1.594.25-.625h2.406zm-13.812.031l-1.531 2.313h2.406l.25.625.688 1.594 2.125-3.219-.438-.344-1.906-.25h-.031a2.88 2.88 0 0 1-1.563-.719z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "88e7":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 2.375l.906 2.031 3.25 7.313 7.938.813 2.25.25-1.688 1.5-5.906 5.344 1.656 7.813.469 2.188-1.969-1.125L16 24.533l-6.906 3.969-1.938 1.125h-.031l.469-2.188 1.656-7.813-5.906-5.344-1.688-1.5 2.25-.25 7.938-.813 3.25-7.313zm0 4.906v14.938l.5.281 5.469 3.156-1.313-6.188-.125-.563.438-.375 4.719-4.25-6.875-.719-.25-.5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "896d":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M8.656 3c.523 0 1.041.189 1.469.531l.063.031.031.031 4.094 4.219-.031.031c.886.826.873 2.221.031 3.063l-2 2c.307.705 1.146 2.501 2.781 4.063a16.139 16.139 0 0 0 4.094 2.813l2-2c.83-.83 2.295-.83 3.125 0l.031.063 4.063 4.063c.83.83.83 2.264 0 3.094l-3.156 3.156a3.595 3.595 0 0 1-3.469.688h-.031c-2.347-.918-7.094-3.001-11.344-7.25-4.233-4.233-6.403-8.916-7.25-11.344-.002-.006.002-.025 0-.031a3.134 3.134 0 0 1 .844-3.375l-.031-.031 3.156-3.25.063-.031a2.362 2.362 0 0 1 1.469-.531zm0 2a.363.363 0 0 0-.219.094L5.343 8.25c-.355.304-.465.906-.313 1.313.758 2.178 2.825 6.669 6.781 10.625 3.924 3.924 8.326 5.86 10.594 6.75.584.195 1.069.115 1.531-.281l3.063-3.063c.17-.17.17-.111 0-.281l-4.094-4.094c-.17-.17-.142-.17-.313 0l-2.969 2.969-.625-.281s-2.739-1.16-5.063-3.281l-.219-.188c-2.412-2.303-3.563-5.375-3.563-5.375l-.219-.625.469-.438 2.5-2.5c.123-.123.055-.225.063-.219l-.094-.094-4-4.094a.361.361 0 0 0-.219-.094z"}})]) };
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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 5h11v11l-.281.313L14.5 28.407l-.719-.688-9.5-9.5-.688-.719.688-.688L15.687 5.281zm.844 2L6.406 17.5l8.094 8.094L25 15.156V7h-8.156zM22 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "89d8":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M6.813 2.406L8.907 4.5 7.501 5.906 5.407 3.812zm18.375 0l1.406 1.406L24.5 5.906 23.094 4.5zM16 3.031c4.934-.047 9 4.027 9 8.969 0 2.706-1.249 5.062-2.906 6.719-1.238 1.15-2 2.627-2 4.094v1.188H20v4h-2.281c-.347.597-.982 1-1.719 1s-1.372-.403-1.719-1H12v-6a5.244 5.244 0 0 0-1.75-3.031c-2.233-1.898-3.573-4.845-3.125-8.094.561-4.039 3.789-7.316 7.844-7.781H15a9.178 9.178 0 0 1 1-.063zm0 2c-.258.004-.518.03-.781.063-3.131.348-5.687 2.881-6.125 6.031-.352 2.552.702 4.811 2.469 6.313 1.388 1.19 2.124 2.848 2.344 4.563h4.375c.236-1.792 1.094-3.434 2.438-4.688l-.031-.031c1.343-1.343 2.313-3.187 2.313-5.281 0-3.861-3.135-7.024-7-6.969zM2 12h3v2H2v-2zm25 0h3v2h-3v-2zM7.5 20.094L8.906 21.5l-2.094 2.094-1.406-1.406zm17 0l2.094 2.094-1.406 1.406-2.094-2.094zM14 24v2h4v-2h-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "8aeb":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M26.188-1.719L32.907 5l-6.719 6.719-1.406-1.438L29.063 6H8V4h21.063L24.782-.281zm-12.375 14l1.406 1.438L10.938 18h21.063v2H10.938l4.281 4.281-1.406 1.438L7.094 19l.719-.719z"}})]) };
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

/***/ "8c05":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M14.688 3h.406C16.71 3 18.002 4.23 18 5.656c0 1.336-.468 2.327-.938 2.969-.294.401-.422.469-.625.625l-.188.75h10.75c1.645 0 3 1.355 3 3s-1.355 3-3 3h-3.563l-1.656 7.625A3.019 3.019 0 0 1 18.842 26H1.998V10h5.594l6.781-6.719zm.718 2.094L9 11.407v12.594h9.844c.477 0 .9-.314 1-.781l1.781-8.438.188-.781h5.188c.565 0 1-.435 1-1s-.435-1-1-1H13.657l.313-1.25.594-2.25.125-.406.344-.188s.179-.084.438-.438.531-.91.531-1.813c0-.308-.172-.481-.594-.563zM4 12v12h3V12H4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "8c25":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm8 4.719l5.25 1.313-.5 1.938-2.75-.688v6.719c0 1.645-1.355 3-3 3s-3-1.355-3-3 1.355-3 3-3c.353 0 .684.073 1 .188V9.72zM14 18c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "8c7f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8d41":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M27.938 4.75l.75 4.25h-2.031l-.344-1.938L15 9H3.156zM2 10h28v16H2V10zm4.938 2c.033.163.063.327.063.5a2.5 2.5 0 0 1-2.5 2.5c-.173 0-.337-.029-.5-.063v6.125c.163-.033.327-.063.5-.063a2.5 2.5 0 0 1 2.5 2.5c0 .173-.029.337-.063.5h18.125a2.497 2.497 0 0 1-.063-.5 2.5 2.5 0 0 1 2.5-2.5c.173 0 .337.029.5.063v-6.125a2.497 2.497 0 0 1-.5.063 2.5 2.5 0 0 1-2.5-2.5c0-.173.029-.337.063-.5H6.938zM16 13c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 2c-1.669 0-3 1.331-3 3s1.331 3 3 3 3-1.331 3-3-1.331-3-3-3z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "8e21":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M28.281 6.281l1.438 1.438-18 18-.719.688-.719-.688-8-8 1.438-1.438L11 23.562z"}})]) };
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

/***/ "922e":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M6 6c2.197 0 4 1.803 4 4 0 .494-.115.969-.281 1.406l6.063 3.438L26.001 9h4L9.72 20.594c.166.438.281.913.281 1.406 0 2.197-1.803 4-4 4s-4-1.803-4-4 1.803-4 4-4c.981 0 1.864.375 2.563.969l5.156-2.938-5.219-2.969c-.691.568-1.543.938-2.5.938-2.197 0-4-1.803-4-4s1.803-4 4-4zm0 2c-.977 0-1.784.677-1.969 1.594A2.088 2.088 0 0 0 4 10c0 1.116.884 2 2 2s2-.884 2-2-.884-2-2-2zm13.094 8.813L30 23.001h-4l-8.906-5.094zM6 20c-.977 0-1.784.677-1.969 1.594A2.088 2.088 0 0 0 4 22c0 1.116.884 2 2 2s2-.884 2-2-.884-2-2-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "92b2":
/***/ (function(module, exports) {

module.exports = {"description":"The code component is used for displaying lines of code.","methods":[],"displayName":"DsCode","props":{"inline":{"type":{"name":"boolean"},"required":"","defaultValue":{"value":"false","func":false},"tags":{},"comment":"/**\n     * Display the code inline.\n     * `true, false`\n     */","description":"Display the code inline.\n`true, false`"},"size":{"type":{"name":"string"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The size used for the code.\n     * `small, base, large`\n     */","description":"The size used for the code.\n`small, base, large`"}},"comment":"/**\n * The code component is used for displaying lines of code.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

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

/***/ "9379":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 5c6.063 0 11 4.937 11 11v11h-8V16c0-1.668-1.332-3-3-3s-3 1.332-3 3v11H5V16C5 9.937 9.937 5 16 5zm0 2c-4.983 0-9 4.017-9 9v5h4v-5c0-2.749 2.251-5 5-5s5 2.251 5 5v5h4v-5c0-4.983-4.017-9-9-9zM7 23v2h4v-2H7zm14 0v2h4v-2h-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "941a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M21.75 4c1.603 0 3.189.626 4.406 1.844 2.435 2.435 2.435 6.409 0 8.844l-1.469 1.469a6.205 6.205 0 0 1-3.625 1.781l-.25-2a4.1 4.1 0 0 0 2.438-1.188h.031l1.469-1.469c1.671-1.671 1.671-4.36 0-6.031s-4.36-1.671-6.031 0L17.25 8.719a4.183 4.183 0 0 0-1.188 2.469l-2-.25a6.208 6.208 0 0 1 1.781-3.625l1.469-1.469A6.285 6.285 0 0 1 21.75 4zM7.719 6.281l4 4-1.438 1.438-4-4zm3.219 7.782l.25 2a4.1 4.1 0 0 0-2.438 1.188h-.031L7.25 18.72c-1.671 1.671-1.671 4.36 0 6.031s4.36 1.671 6.031 0l1.469-1.469a4.183 4.183 0 0 0 1.188-2.469l2 .25a6.208 6.208 0 0 1-1.781 3.625l-1.469 1.469c-2.435 2.435-6.409 2.435-8.844 0s-2.435-6.409 0-8.844l1.469-1.469a6.205 6.205 0 0 1 3.625-1.781zm10.781 6.218l4 4-1.438 1.438-4-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "9717":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M7.219 5.781L16 14.562l8.781-8.781 1.438 1.438L17.438 16l8.781 8.781-1.438 1.438L16 17.438l-8.781 8.781-1.438-1.438L14.562 16 5.781 7.219z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "97f4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 4h2v20.063l6.781-6.781 1.438 1.438-8.5 8.5-.719.688-.719-.688-8.5-8.5 1.438-1.438L15 24.063V4z"}})]) };
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

/***/ "98dc":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M8 4h2v16.563L20.563 10H11V8h11.563l3.719-3.719 1.438 1.438-3.719 3.719v11.563h-2v-9.563L11.438 22.001h16.563v2h-4v4h-2v-4h-14v-14h-4v-2h4v-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "9930":
/***/ (function(module, exports) {

module.exports = {"description":"Use this component for grouping and separation.","methods":[],"displayName":"DsSpace","props":{"marginTop":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The top margin of this space.\n     */","description":"The top margin of this space."},"marginBottom":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"\"large\"","func":false},"tags":{},"comment":"/**\n     * The bottom margin of this space.\n     */","description":"The bottom margin of this space."},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for this space.\n     */","description":"The html element name used for this space."}},"comment":"/**\n * Use this component for grouping and separation.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "99df":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M9.531 6h12.938l5.313 6.375.5.594-.5.656-11.781 15-.781-1-11-14-.5-.656.5-.594 5-6zm.938 2l-3.344 4h4.313l2.688-4H10.47zm7.406 0l2.688 4h4.313l-3.344-4h-3.656zM16 8.844L13.875 12h4.25zM7.031 14l6.594 8.406L11.25 14H7.031zm6.282 0l2.688 9.313L18.657 14h-5.344zm7.437 0l-2.375 8.375L24.969 14H20.75z"}})]) };
module.exports = { render: render };

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

/***/ "9b68":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4.438l.906 2.188 8 19 .906 2.125-2.156-.813L16 24.063l-9.813 3.688.906-2.125 8-19zm0 5.093L9.812 24.25 16 21.937l.344.125 5.844 2.188z"}})]) };
module.exports = { render: render };

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

/***/ "9e2c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.385 12 12s-5.385 12-12 12S4 22.615 4 16h2c0 5.535 4.465 10 10 10s10-4.465 10-10S21.535 6 16 6c-3.702 0-6.897 2.02-8.625 5H11v2H4V6h2v3.344A11.987 11.987 0 0 1 16 4zm-1 4h2v7h5v2h-7V8z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "9f66":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 5c3.378 0 6.14 2.131 7.344 5.063 3.527.182 6.33 2.986 6.563 6.5 1.239 1.102 2.094 2.677 2.094 4.438 0 3.324-2.676 6-6 6h-20c-3.324 0-6-2.676-6-6 0-2.751 1.884-4.944 4.344-5.656a4.897 4.897 0 0 1 3.844-3.219c.454-3.994 3.694-7.125 7.813-7.125zm0 2c-3.37 0-6 2.63-6 6v1H9c-1.444 0-2.638.964-2.938 2.313l-.125.656-.656.125A3.941 3.941 0 0 0 2 21c0 2.276 1.724 4 4 4h20c2.276 0 4-1.724 4-4 0-1.267-.65-2.48-1.594-3.188L28 17.499v-.5c0-2.755-2.245-5-5-5h-1.031l-.219-.719c-.779-2.51-2.988-4.281-5.75-4.281zm-1 5h2v6.563l2.281-2.281 1.438 1.438-4 4-.719.688-.719-.688-4-4 1.438-1.438L15 18.563V12z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "9f7c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M28 4.469v19.188l-.594.25-7.375 3.156-.375-.125-7.625-2.875-6.625 2.844L4 27.532V8.344l.594-.25 7.375-3.156.375.125 7.625 2.875 6.625-2.844zM13 7.438v14.875l6 2.25V9.688zM11 7.5L6 9.656V24.5l5-2.156V7.5zm15 0l-5 2.156V24.5l5-2.156V7.5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "9fed":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M13 2c1.645 0 3 1.355 3 3v4.188A2.925 2.925 0 0 1 17 9c.767 0 1.467.3 2 .781A2.981 2.981 0 0 1 21 9c1.395 0 2.578.982 2.906 2.281.368-.163.762-.281 1.188-.281 1.645 0 3 1.355 3 3v7.813a8.173 8.173 0 0 1-8.188 8.188h-1.719a8.299 8.299 0 0 1-5-1.688l-.031-.063-.063-.031-8.188-8.094v-.031c-1.154-1.154-1.154-3.034 0-4.188s3.034-1.154 4.188 0l.25.219.656.688V5c0-1.645 1.355-3 3-3zm0 2c-.555 0-1 .445-1 1v16.625l-4.313-4.313c-.446-.446-.929-.446-1.375 0s-.446.929 0 1.375l8.094 8c1.051.788 2.317 1.313 3.781 1.313h1.719c3.467 0 6.188-2.721 6.188-6.188v-7.813c0-.555-.445-1-1-1s-1 .445-1 1v2H22v-4c0-.555-.445-1-1-1s-1 .445-1 1v4h-2v-4c0-.555-.445-1-1-1s-1 .445-1 1v4h-2v-11c0-.555-.445-1-1-1z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "a01a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a0e3":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M12 2c3.854 0 7 3.146 7 7a7.027 7.027 0 0 1-3.094 5.813c.486.208.964.441 1.406.719A7.965 7.965 0 0 1 22 14.001c4.406 0 8 3.594 8 8s-3.594 8-8 8-8-3.594-8-8c0-1.897.671-3.657 1.781-5.031A7.889 7.889 0 0 0 12 16.001c-4.431 0-8 3.569-8 8H2c0-4.119 2.527-7.658 6.094-9.188A7.025 7.025 0 0 1 5 9c0-3.854 3.146-7 7-7zm0 2C9.227 4 7 6.227 7 9s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zm10 12c-3.326 0-6 2.674-6 6s2.674 6 6 6 6-2.674 6-6-2.674-6-6-6zm-2.281 2.281L22 20.562l2.281-2.281 1.438 1.438L23.438 22l2.281 2.281-1.438 1.438L22 23.438l-2.281 2.281-1.438-1.438L20.562 22l-2.281-2.281z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "a125":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 4h22v2.344l-.219.281L19 16.344V23.5l-.406.313-4 3L13 28.001V16.345L5.219 6.626 5 6.345V4.001zm2.281 2l7.188 9h3.063l7.188-9H7.282zM15 17v7l2-1.5V17h-2z"}})]) };
module.exports = { render: render };

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

/***/ "a2f2":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 5h17.406l.313.281 4 4 .281.313V27H5V5zm2 2v18h2v-9h14v9h2V10.437l-3-3V13H10V7H7zm5 0v4h8V7h-2v2h-2V7h-4zm-1 11v7h10v-7H11z"}})]) };
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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 8c8.336 0 14.75 7.344 14.75 7.344l.594.656-.594.656s-5.849 6.668-13.625 7.281c-.372.047-.741.063-1.125.063s-.753-.015-1.125-.063C7.099 23.323 1.25 16.656 1.25 16.656L.656 16l.594-.656S7.664 8 16 8zm0 2c-2.228 0-4.282.618-6.063 1.438h.031a6.958 6.958 0 0 0-.969 3.563 6.995 6.995 0 0 0 6.219 6.969c.259.016.517.031.781.031.243 0 .48-.018.719-.031.021-.002.042.002.063 0A6.995 6.995 0 0 0 23 15.001c0-1.325-.365-2.54-1-3.594-1.765-.805-3.798-1.406-6-1.406zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-8.75.938a24.065 24.065 0 0 0-3.719 3.063 23.08 23.08 0 0 0 4.844 3.781A8.943 8.943 0 0 1 7 15.001c0-.714.092-1.392.25-2.063zm17.5 0c.157.665.25 1.348.25 2.063a8.943 8.943 0 0 1-1.375 4.781c2.52-1.455 4.27-3.195 4.844-3.781a24.065 24.065 0 0 0-3.719-3.063z"}})]) };
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

/***/ "a66c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M18 5h9v9h-2V8.437L12.719 20.718l-1.438-1.438L23.562 6.999h-5.563v-2zM5 9h13l-2 2H7v14h14v-9l2-2v13H5V9z"}})]) };
module.exports = { render: render };

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

/***/ "a823":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm5 6h4c2.21 0 4 1.79 4 4s-1.79 4-4 4c-.74 0-1.406-.244-2-.594V22h-2v-7h2c0 1.19.81 2 2 2s2-.81 2-2-.81-2-2-2h-4v-2z"}})]) };
module.exports = { render: render };

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

/***/ "a97a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5h-7v1h-2V5H7zm7 2h2v2h-2V7zm0 3h2v2h-2v-2zm0 3h2v2.188c1.156.418 2 1.52 2 2.813 0 1.645-1.355 3-3 3s-3-1.355-3-3c0-1.292.844-2.394 2-2.813V13zm1 4c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})]) };
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

/***/ "aa8b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aac1":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M21.75 4c1.671 0 3.225.661 4.406 1.844S28 8.579 28 10.25s-.662 3.255-1.844 4.438l-1.469 1.469a6.25 6.25 0 0 1-4.438 1.844 6.163 6.163 0 0 1-2.281-.438l1.625-1.625c.215.038.432.063.656.063a4.276 4.276 0 0 0 3.031-1.25l1.469-1.469a4.274 4.274 0 0 0 0-6.031c-.804-.805-1.863-1.25-3-1.25s-2.227.444-3.031 1.25L17.249 8.72a4.286 4.286 0 0 0-1.188 3.688l-1.625 1.625a6.16 6.16 0 0 1-.438-2.281 6.26 6.26 0 0 1 1.844-4.438l1.469-1.469a6.25 6.25 0 0 1 4.438-1.844zm-2.469 7.281l1.438 1.438-8 8-1.438-1.438zM11.75 14c.793 0 1.565.153 2.281.438l-1.625 1.625A3.75 3.75 0 0 0 11.75 16a4.276 4.276 0 0 0-3.031 1.25L7.25 18.719a4.274 4.274 0 0 0 0 6.031c.804.805 1.863 1.25 3 1.25s2.227-.444 3.031-1.25l1.469-1.469a4.286 4.286 0 0 0 1.188-3.688l1.625-1.625a6.16 6.16 0 0 1 .438 2.281 6.258 6.258 0 0 1-1.844 4.438l-1.469 1.469C13.507 27.339 11.922 28 10.25 28s-3.225-.661-4.406-1.844C4.662 24.974 4 23.421 4 21.75s.662-3.256 1.844-4.438l1.469-1.469a6.25 6.25 0 0 1 4.438-1.844z"}})]) };
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

/***/ "ac50":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4a11.93 11.93 0 0 1 9 4.094V5h2v7h-7v-2h3.938C22.134 7.59 19.241 6 16 6c-4.289 0-7.823 2.639-9.281 6.375l-1.844-.75C6.617 7.161 10.889 4 16 4zm9.281 15.625l1.844.75C25.383 24.839 21.111 28 16 28c-3.605 0-6.811-1.614-9-4.094V27H5v-7h7v2H8.031c1.812 2.388 4.692 4 7.969 4 4.289 0 7.823-2.639 9.281-6.375z"}})]) };
module.exports = { render: render };

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

/***/ "af0d":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3c4.959 0 9 4.042 9 9 0 1.406-.57 3.02-1.344 4.781s-1.77 3.631-2.781 5.375a101.013 101.013 0 0 1-4.063 6.406l-.813 1.188-.813-1.188s-2.039-2.918-4.063-6.406c-1.012-1.744-2.007-3.613-2.781-5.375S6.998 13.406 6.998 12c0-4.958 4.041-9 9-9zm0 2c-3.877 0-7 3.123-7 7 0 .803.43 2.316 1.156 3.969s1.73 3.484 2.719 5.188c1.572 2.71 2.546 4.144 3.125 5 .579-.856 1.553-2.29 3.125-5 .988-1.704 1.993-3.535 2.719-5.188S23 12.803 23 12c0-3.877-3.122-7-7-7zm0 5a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 10z"}})]) };
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

/***/ "b228":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 5h17.406l.313.281 4 4 .281.313V27H5V5zm2 2v18h2v-9h14v9h2V10.437l-3-3V13H10V7H7zm5 0v4h8V7h-2v2h-2V7h-4zm-1 11v7h10v-7H11z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "b314":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3c7.168 0 13 5.832 13 13s-5.832 13-13 13S3 23.168 3 16 8.832 3 16 3zm0 2C9.913 5 5 9.913 5 16s4.913 11 11 11 11-4.913 11-11S22.087 5 16 5zm-1 5h2v2h-2v-2zm0 4h2v8h-2v-8z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "b395":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2c-.273 0-.545.041-.813.063l2.219.156.531 2.313-3 .563-.813-1.125-1.719.375.594 2.656-4 1.906-2.688 2.125.969 1.969h3.719l4.031 3.031-1.063 4 1.094 1.906c.307.028.623.063.938.063 1.542 0 3.01-.349 4.313-.969l1.594-5s-.737-1.813-.844-1.813-2.094.344-2.094.344l-1.938-1.594.969-3 1.719-1.281 1.75-.25 1.625 1 .688-1.25-2.688-.875-2.156.688-.156-2.063.875-.75 1.063.469-.188-2 .813-.094A9.974 9.974 0 0 0 16 6zm-1.125.063a9.909 9.909 0 0 0-2.313.531l.75.125zM6.063 16.781c.315 4.108 3.068 7.526 6.844 8.75l-2.844-3.5H8.907l-1.875-2.063v-2.063z"}})]) };
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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M11.5 6h9l.313.406L22.001 8h7v18h-26V8h7l1.188-1.594zm1 2l-1.188 1.594-.313.406h-6v14h22V10h-6l-.313-.406L19.498 8h-7zM8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm8 0c3.302 0 6 2.698 6 6s-2.698 6-6 6-6-2.698-6-6 2.698-6 6-6zm0 2c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4z"}})]) };
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

/***/ "b5c1":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4l.375.156L23 6.812v6.719l5.406 2.344.594.281v8.063l-.5.313-6 3.344-.469.25-.469-.219-5.563-2.781-5.563 2.781-.469.219-.469-.25-6-3.344-.5-.313v-8.063l.594-.281 5.406-2.344V6.812l6.625-2.656zm0 2.188l-3.281 1.281L16 8.75l3.281-1.281zm-5 2.75v4.625l4 1.781v-4.875zm10 0l-4 1.531v4.875l4-1.781V8.938zm-11 6.375l-3.625 1.563L10 18.689l3.625-1.781zm12 0l-2.5 1.094-1.125.5L22 18.688l3.625-1.813zM5 18.406v4.656l4 2.25v-4.906zm22 0l-4 2v4.906l4-2.25v-4.656zm-12 .063l-4 1.938v4.969l4-2V18.47zm2 0v4.906l4 2v-4.969z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "b914":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3.219l.875 1.5 12 20.781.844 1.5H2.281l.844-1.5 12-20.781zm0 4L5.75 25h20.5zM15 14h2v6h-2v-6zm0 7h2v2h-2v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "b984":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ba07":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5h-7v1h-2V5H7zm7 2h2v2h-2V7zm0 3h2v2h-2v-2zm0 3h2v2.188c1.156.418 2 1.52 2 2.813 0 1.645-1.355 3-3 3s-3-1.355-3-3c0-1.292.844-2.394 2-2.813V13zm1 4c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "ba44":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 5h24v6h-1v16H5V11H4V5zm2 2v2h20V7H6zm1 4v14h18V11H7zm5.813 2l.047-.001.047.001.047-.001.047.001h6.014a1 1 0 0 1 0 2h-6.014a1.005 1.005 0 0 1-1.098-1c0-.505.408-.953.911-1z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "ba87":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./data-display/CopyField/CopyField.vue": "e5e4",
	"./data-display/List/List.vue": "163c",
	"./data-display/List/ListItem.vue": "fb53",
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
	"./layout/Section/Section.vue": "3a26",
	"./layout/Space/Space.vue": "9930",
	"./navigation/Button/Button.vue": "3644",
	"./navigation/Menu/Menu.vue": "f978",
	"./navigation/Menu/MenuItem.vue": "5343",
	"./typography/Code/Code.vue": "92b2",
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

/***/ "bb4d":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zm-7 6.781l1.5.938 5 3 1.438.844-1.438.844-5 3-1.5.938V13.22zm2 3.531v2.5L16.094 18z"}})]) };
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

/***/ "bbc7":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M12 3c2.202 0 3.791 1.007 4.531 2.313.026-.041.034-.084.063-.125C17.047 4.547 17.909 4 19 4v2c-.453 0-.588.111-.719.281 3.845.921 6.812 4.105 7.563 8.063C27.037 14.741 28 15.681 28 17c0 1.365-1.024 2.33-2.281 2.688-.816 4.701-4.82 8.313-9.719 8.313s-8.903-3.611-9.719-8.313C5.024 19.331 4 18.365 4 17s1.024-2.33 2.281-2.688c.741-4.271 4.122-7.637 8.406-8.219-.39-.574-1.192-1.094-2.688-1.094v-2zm4 5c-4.093 0-7.461 3.121-7.906 7.125L8 16H7c-.555 0-1 .445-1 1s.445 1 1 1h1l.094.875C8.539 22.879 11.907 26 16 26s7.461-3.121 7.906-7.125L24 18h1c.555 0 1-.445 1-1s-.445-1-1-1h-.875L24 15.125C23.464 11.106 20.093 8 16 8zm-3.5 8a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 12.5 16zm7 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 19.5 16z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "bde4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h22v10.406l-.281.313L25 15.438v12.563h-6v2.719l-1.219-.25L5 27.814V3.001zm9.125 2L17 5.719v9.344l1.719 1.719.281.313v8.906h4V14.595l.281-.313L25 12.563V5H14.125zM7 5.281v20.906l10 2.094V17.937l-1.719-1.719-.281-.313V7.28z"}})]) };
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

/***/ "be93":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm0 4c2.197 0 4 1.803 4 4a3.808 3.808 0 0 1-2.594 3.594l-.406.125V19h-2v-1.281c0-.856.56-1.635 1.375-1.906l.406-.125A1.779 1.779 0 0 0 18 14c0-1.117-.883-2-2-2s-2 .883-2 2h-2c0-2.197 1.803-4 4-4zm-1 10h2v2h-2v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "beae":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M21.75 4c1.603 0 3.189.626 4.406 1.844 2.435 2.435 2.435 6.409 0 8.844l-1.469 1.469a6.205 6.205 0 0 1-3.625 1.781l-.25-2a4.1 4.1 0 0 0 2.438-1.188h.031l1.469-1.469c1.671-1.671 1.671-4.36 0-6.031s-4.36-1.671-6.031 0L17.25 8.719a4.183 4.183 0 0 0-1.188 2.469l-2-.25a6.208 6.208 0 0 1 1.781-3.625l1.469-1.469A6.285 6.285 0 0 1 21.75 4zM7.719 6.281l4 4-1.438 1.438-4-4zm3.219 7.782l.25 2a4.1 4.1 0 0 0-2.438 1.188h-.031L7.25 18.72c-1.671 1.671-1.671 4.36 0 6.031s4.36 1.671 6.031 0l1.469-1.469a4.183 4.183 0 0 0 1.188-2.469l2 .25a6.208 6.208 0 0 1-1.781 3.625l-1.469 1.469c-2.435 2.435-6.409 2.435-8.844 0s-2.435-6.409 0-8.844l1.469-1.469a6.205 6.205 0 0 1 3.625-1.781zm10.781 6.218l4 4-1.438 1.438-4-4z"}})]) };
module.exports = { render: render };

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M9 4h2v1h10V4h2v1h4v22H5V5h4V4zM7 7v2h18V7h-2v1h-2V7H11v1H9V7H7zm0 4v14h18V11H7zm6 2h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM9 17h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM9 21h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"}})]) };
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

/***/ "c24d":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 5h24v22H4V5zm2 2v2h20V7H6zm0 4v14h20V11H6zm5.219 2.781l3.5 3.5.688.719-.688.719-3.5 3.5-1.438-1.438L12.562 18l-2.781-2.781zM16 20h6v2h-6v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "c317":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3.594l.719.688 8 8 1.688 1.719H5.594l1.688-1.719 8-8zm0 2.844l-5.563 5.563h11.125zM5.594 18h20.813l-1.688 1.719-8 8-.719.688-.719-.688-8-8zm4.844 2l5.563 5.563L21.564 20H10.439z"}})]) };
module.exports = { render: render };

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

/***/ "c342":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M13 2c1.645 0 3 1.355 3 3v3.563l7.625 1.656A3.019 3.019 0 0 1 26 13.157v16.844H10v-5.594l-6.719-6.781L3 17.313v-.406c0-1.616 1.23-2.908 2.656-2.906 1.336 0 2.327.468 2.969.938.401.294.469.422.625.625l.75.188V5.002c0-1.645 1.355-3 3-3zm0 2c-.565 0-1 .435-1 1v13.344l-1.25-.313-2.25-.594-.406-.125-.188-.344s-.084-.179-.438-.438-.91-.531-1.813-.531c-.308 0-.481.172-.563.594l6.313 6.406h12.594v-9.844c0-.477-.314-.9-.781-1l-8.438-1.781-.781-.188V4.998c0-.565-.435-1-1-1zm-1 21v3h12v-3H12z"}})]) };
module.exports = { render: render };

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

/***/ "c41f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 6a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 6zm0 8a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 14zm0 8a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 22z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "c426":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M19.719 5.281l8 8 .688.719-.688.719-8 8-1.438-1.438L24.562 15H10.999c-2.774 0-5 2.226-5 5s2.226 5 5 5v2c-3.854 0-7-3.146-7-7s3.146-7 7-7h13.563l-6.281-6.281z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "c564":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M7 4h2v12c0 3.37 2.63 6 6 6s6-2.63 6-6V4h2v12c0 4.43-3.57 8-8 8s-8-3.57-8-8V4zM5 26h20v2H5v-2z"}})]) };
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

/***/ "c666":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/List/ListItem.vue?vue&type=template&id=b069abe2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ds-list-item"},[_c('span',{staticClass:"ds-list-item-prefix"},[(!_vm.$parentList.ordered)?_c('span',{staticClass:"ds-list-item-icon"},[_c('ds-icon',{attrs:{"name":_vm.icon}})],1):_vm._e()]),_c('span',{staticClass:"ds-list-item-content"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/List/ListItem.vue?vue&type=template&id=b069abe2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/List/ListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
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
 * @see DsList
 */
/* harmony default export */ var ListItemvue_type_script_lang_js_ = ({
  name: 'DsListItem',
  inject: {
    $parentList: {
      default: null
    }
  },
  props: {
    /**
     * The name of the list icon.
     */
    icon: {
      type: String,
      default: function _default() {
        return this.$parentList ? this.$parentList.icon : 'angle-right';
      }
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-display/List/ListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var List_ListItemvue_type_script_lang_js_ = (ListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/system/components/data-display/List/ListItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  List_ListItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ListItem.vue"
/* harmony default export */ var ListItem = __webpack_exports__["default"] = (component.exports);

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1a0aef18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Icon/Icon.vue?vue&type=template&id=375b233b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-icon",attrs:{"aria-label":_vm.ariaLabel}},[(_vm.svgComponent)?_c(_vm.svgComponent,{tag:"component",staticClass:"ds-icon-svg"}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Icon/Icon.vue?vue&type=template&id=375b233b&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./src/system/icons/index.js




// Get icons
var context = __webpack_require__("249d");

var iconNames = [];
var icons = {};
context.keys().forEach(function (key) {
  var svg = context(key);
  var name = key.replace('./', '').replace('.svg', '');
  icons[name] = svg;
  iconNames.push(name);
});

/* harmony default export */ var system_icons = (icons);
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
    svgComponent: function svgComponent() {
      return system_icons[this.name];
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

/***/ "c74f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M10.719 3.281l2.313 2.313c.923-.39 1.922-.594 2.969-.594s2.046.203 2.969.594l2.313-2.313 1.438 1.438-1.938 1.938c1.462 1.119 2.61 2.755 3.344 4.656l2.438-1.219.875 1.813-2.75 1.375c.183.876.313 1.782.313 2.719 0 .34-.006.666-.031 1h3.031v2h-3.375c-.242 1.043-.561 2.039-1.031 2.938l3 2.25-1.188 1.625-2.938-2.188c-1.618 2.056-3.885 3.375-6.469 3.375s-4.851-1.319-6.469-3.375l-2.938 2.188-1.188-1.625 3-2.25c-.47-.898-.789-1.894-1.031-2.938H4.001v-2h3.031c-.025-.334-.031-.66-.031-1 0-.937.13-1.843.313-2.719l-2.75-1.375.875-1.813 2.438 1.219c.734-1.901 1.882-3.538 3.344-4.656L9.283 4.719zM16 7c-1.978 0-3.827 1.094-5.125 2.875C12.009 10.386 13.799 11 16 11s3.991-.614 5.125-1.125C19.827 8.094 17.978 7 16 7zm-6.094 4.594A10.93 10.93 0 0 0 9 16c0 4.629 2.698 8.282 6 8.906V12.937a14.623 14.623 0 0 1-5.094-1.344zm12.188 0A14.645 14.645 0 0 1 17 12.938v11.969c3.302-.625 6-4.278 6-8.906 0-1.618-.337-3.115-.906-4.406z"}})]) };
module.exports = { render: render };

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3.594l.719.688 7 7-1.438 1.438L17 7.439v16.563h-2V7.439L9.719 12.72l-1.438-1.438 7-7zM7 26h18v2H7v-2z"}})]) };
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

/***/ "cd66":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa8b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M27 3.781V21c0 2.197-1.803 4-4 4s-4-1.803-4-4 1.803-4 4-4a3.92 3.92 0 0 1 2 .563v-7.375l-14 2.625v11.188c0 2.197-1.803 4-4 4s-4-1.803-4-4 1.803-4 4-4a3.92 3.92 0 0 1 2 .563V7.158l.813-.125 16-3zm-2 2.407L11 8.813v2l14-2.625v-2zM23 19c-1.116 0-2 .884-2 2s.884 2 2 2 2-.884 2-2-.884-2-2-2zM7 22c-1.116 0-2 .884-2 2s.884 2 2 2 2-.884 2-2-.884-2-2-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "cf1c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3c7.168 0 13 5.832 13 13s-5.832 13-13 13S3 23.168 3 16 8.832 3 16 3zm-1.125 2.063A10.98 10.98 0 0 0 5 16.001c0 6.087 4.913 11 11 11 2.687 0 5.155-.938 7.063-2.531l-7.781-7.75-.281-.313V5.063c-.041.004-.084-.004-.125 0zm2.125 0v9.938h9.938A10.957 10.957 0 0 0 17 5.063zM18.438 17l6.031 6.063c1.393-1.668 2.262-3.768 2.469-6.063h-8.5z"}})]) };
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

/***/ "d0c1":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 5h17v19.063l4.281-4.281 1.438 1.438-6 6-.719.688-.719-.688-6-6 1.438-1.438L20 24.063V7H5V5z"}})]) };
module.exports = { render: render };

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

/***/ "d3aa":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 5c6.063 0 11 4.937 11 11v8c0 1.645-1.355 3-3 3h-3v-9h4v-2c0-4.983-4.017-9-9-9s-9 4.017-9 9v2h4v9H8c-1.645 0-3-1.355-3-3v-8C5 9.937 9.937 5 16 5zM7 20v4c0 .565.435 1 1 1h1v-5H7zm16 0v5h1c.565 0 1-.435 1-1v-4h-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "d3e9":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 5h2v2H4V5zm17 0h2v18.688l2.594-2.594L27 22.5l-4.281 4.313-.719.688-.719-.688L17 22.5l1.406-1.406L21 23.688V5zM4 9h4v2H4V9zm0 4h6v2H4v-2zm0 4h8v2H4v-2zm0 4h10v2H4v-2zm0 4h12v2H4v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d4b3":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 6c3.766 0 7.094.392 9.125.688 1.679.245 3.035 1.512 3.344 3.188.264 1.429.531 3.518.531 6.125s-.268 4.697-.531 6.125c-.309 1.677-1.664 2.944-3.344 3.188-2.038.296-5.379.688-9.125.688s-7.088-.392-9.125-.688c-1.679-.243-3.034-1.512-3.344-3.188C3.268 20.7 3 18.613 3 16.001s.268-4.698.531-6.125c.309-1.675 1.666-2.943 3.344-3.188C8.906 6.392 12.233 6 16 6zm0 2c-3.633 0-6.881.37-8.844.656A1.961 1.961 0 0 0 5.5 10.25C5.257 11.57 5 13.521 5 16s.257 4.43.5 5.75a1.963 1.963 0 0 0 1.656 1.594C9.127 23.63 12.389 24 16 24s6.872-.37 8.844-.656A1.96 1.96 0 0 0 26.5 21.75c.243-1.322.5-3.279.5-5.75s-.256-4.429-.5-5.75a1.963 1.963 0 0 0-1.656-1.594A62.988 62.988 0 0 0 16 8zm-3 2.281l1.5.844 7 4L23 16l-1.5.875-7 4-1.5.844V10.281zm2 3.438v4.563l3.969-2.281z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d7b2":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./data-display/CopyField/CopyField.vue": "27c7",
	"./data-display/List/List.vue": "05dc",
	"./data-display/List/ListItem.vue": "c666",
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
	"./layout/Section/Section.vue": "3f2f",
	"./layout/Space/Space.vue": "8983",
	"./navigation/Button/Button.vue": "42cf",
	"./navigation/Menu/Menu.vue": "7bf7",
	"./navigation/Menu/MenuItem.vue": "b10d",
	"./typography/Code/Code.vue": "7120",
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

/***/ "d940":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM8.938 6.438a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm14.125 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6 13.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm20 1a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM8.938 21.063a2 2 0 1 1 .001 3.999 2 2 0 0 1-.001-3.999zm14.125.5a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 .001-3.001zM16 24.25a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 16 24.25z"}})]) };
module.exports = { render: render };

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

/***/ "daef":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3c7.168 0 13 5.832 13 13s-5.832 13-13 13S3 23.168 3 16 8.832 3 16 3zm0 2c-2.647 0-5.073.918-6.969 2.469l15.344 15.656A10.936 10.936 0 0 0 27 16c0-6.087-4.913-11-11-11zM7.625 8.875A10.936 10.936 0 0 0 5 16c0 6.087 4.913 11 11 11 2.647 0 5.073-.918 6.969-2.469z"}})]) };
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

/***/ "dba5":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 4h2v12h-2V4zm-3 .688v2.156C8.474 8.39 6 11.909 6 16c0 5.514 4.486 10 10 10s10-4.486 10-10c0-4.091-2.474-7.609-6-9.156V4.688c4.654 1.651 8 6.099 8 11.313 0 6.617-5.383 12-12 12s-12-5.383-12-12c0-5.213 3.346-9.662 8-11.313z"}})]) };
module.exports = { render: render };

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M10 6h2v20h-2V6zm10 0h2v20h-2V6z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "de06":
/***/ (function(module, exports) {

module.exports = {"description":"Used in combination with the flex item component to create flexible layouts.","methods":[],"displayName":"DsFlex","props":{"gutter":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The default gutter size for the columns.\n     */","description":"The default gutter size for the columns."},"width":{"type":{"name":"string|number|object"},"required":"","defaultValue":{"value":"1","func":false},"tags":{},"comment":"/**\n     * The default width for the columns.\n     */","description":"The default width for the columns."},"direction":{"type":{"name":"string|object"},"required":"","defaultValue":{"value":"null","func":false},"tags":{},"comment":"/**\n     * The direction of the items.\n     * `row, row-reverse, column, column-reverse`\n     */","description":"The direction of the items.\n`row, row-reverse, column, column-reverse`"},"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the wrapper.\n     */","description":"The html element name used for the wrapper."}},"comment":"/**\n * Used in combination with the flex item component to create flexible layouts.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "de58":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M21 4a5.423 5.423 0 0 1 3.844 9.25l-9.375 9.375c-1.246 1.245-3.286 1.245-4.531 0s-1.245-3.286 0-4.531L19.532 9.5l1.406 1.406-8.594 8.594a1.204 1.204 0 0 0 0 1.719 1.204 1.204 0 0 0 1.719 0l9.375-9.375c1.345-1.345 1.345-3.499 0-4.844s-3.499-1.345-4.844 0l-9.375 9.375a5.622 5.622 0 0 0 0 7.969 5.622 5.622 0 0 0 7.969 0l6.25-6.25 1.406 1.406-6.25 6.25c-2.973 2.972-7.809 2.972-10.781 0s-2.972-7.809 0-10.781l9.375-9.375A5.369 5.369 0 0 1 21.001 4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "dec8":
/***/ (function(module, exports) {

module.exports = {"description":"This component is used as a wrapper for the page's content.","methods":[],"displayName":"DsContainer","props":{"tag":{"type":{"name":"string"},"required":"","defaultValue":{"value":"\"div\"","func":false},"tags":{},"comment":"/**\n     * The html element name used for the wrapper.\n     */","description":"The html element name used for the wrapper."}},"comment":"/**\n * This component is used as a wrapper for the page's content.\n * @version 1.0.0\n */","tags":{"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "dfbc":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M9.5 5c3.433 0 5.645 2.066 6.5 2.938C16.855 7.067 19.067 5 22.5 5c4.138 0 7.5 3.404 7.5 7.5 0 2.857-2.469 5.031-2.469 5.031L16 29.094l-.719-.719L4.468 17.531s-.619-.573-1.219-1.469-1.25-2.134-1.25-3.563c0-4.096 3.362-7.5 7.5-7.5zm0 2C6.458 7 4 9.496 4 12.5c0 .772.423 1.716.906 2.438s.969 1.188.969 1.188L16 26.251l10.125-10.125S28 14.046 28 12.501c0-3.004-2.458-5.5-5.5-5.5-2.986 0-5.75 2.906-5.75 2.906l-.75.844-.75-.844S12.486 7.001 9.5 7.001z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e04f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16.188 4c6.337.093 11.62 5.29 11.813 11.625.005.143 0 .274 0 .406-.012 3.289-2.716 5.97-6 5.969-1.271-.001-2.391-.628-3.125-1.563-.827.948-2.027 1.563-3.375 1.563a4.516 4.516 0 0 1-4.5-4.5v-3c0-2.473 2.027-4.5 4.5-4.5.928 0 1.781.295 2.5.781V10h2v8c0 1.116.883 1.999 2 2a3.983 3.983 0 0 0 4-3.969c0-.122.003-.231 0-.344-.16-5.253-4.589-9.61-9.844-9.688-6.165-.09-11.048 5.348-10 11.719.696 4.234 4.182 7.613 8.438 8.188 2.919.394 5.61-.452 7.656-2.094l1.25 1.563c-2.452 1.968-5.691 2.968-9.156 2.5-5.139-.694-9.346-4.723-10.188-9.844C2.915 10.486 8.823 3.892 16.188 4zm-.688 8a2.484 2.484 0 0 0-2.5 2.5v3c0 1.393 1.107 2.5 2.5 2.5s2.5-1.107 2.5-2.5v-3c0-1.393-1.107-2.5-2.5-2.5z"}})]) };
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

/***/ "e146":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 6.594l.719.688 12.5 12.5-1.438 1.438L16 9.439 4.219 21.22l-1.438-1.438 12.5-12.5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e1b4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M9 5.156l1.531 1L25.844 16 9 26.844V5.156zm2 3.657v14.375L22.156 16z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e1ec":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM20.094 14a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM13 15.594l.719.688L16 18.563l1.281-1.281.719-.688.719.688 3 3-1.438 1.438L18 19.439l-1.281 1.281-.719.688-.719-.688L13 18.439 9.719 21.72l-1.438-1.438 4-4z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e30f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM10 13h10v2H10v-2zm0 4h10v2H10v-2zm0 4h10v2H10v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e3d1":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M12 2c3.854 0 7 3.146 7 7a7.027 7.027 0 0 1-3.094 5.813c.486.208.964.441 1.406.719A7.965 7.965 0 0 1 22 14.001c4.406 0 8 3.594 8 8s-3.594 8-8 8-8-3.594-8-8c0-1.897.671-3.657 1.781-5.031A7.889 7.889 0 0 0 12 16.001c-4.431 0-8 3.569-8 8H2c0-4.119 2.527-7.658 6.094-9.188A7.025 7.025 0 0 1 5 9c0-3.854 3.146-7 7-7zm0 2C9.227 4 7 6.227 7 9s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zm10 12c-3.326 0-6 2.674-6 6s2.674 6 6 6 6-2.674 6-6-2.674-6-6-6zm-1 2h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e4a8":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-1 2h2v7h5v2h-7V8z"}})]) };
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

/***/ "e542":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-4.5 6a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 11.5 12zm9 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 20.5 12zM16 18c2.667 0 5.02 1.335 6.469 3.344L20.844 22.5C19.752 20.986 18.009 20 16 20s-3.752.986-4.844 2.5l-1.625-1.156C10.979 19.336 13.332 18 16 18z"}})]) };
module.exports = { render: render };

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

/***/ "e67df":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M24.969 3h.063a2.987 2.987 0 0 1 2.969 2.969c0 .976-.478 1.885-1.281 2.438l-2.125 1.469c-.041.028-.025.093-.063.125h3.469v2h-6v-1A3.38 3.38 0 0 1 23.47 8.22l2.125-1.469a.927.927 0 0 0 .406-.781.955.955 0 0 0-.969-.969h-.063A.955.955 0 0 0 24 5.97v.031h-2V5.97a2.987 2.987 0 0 1 2.969-2.969zM4.156 8h6.375l.313.469 1.656 2.563 1.656-2.563.313-.469h6.375l-1 1.531L15.688 16l4.156 6.469 1 1.531h-6.375l-.313-.469-1.656-2.563-1.656 2.563-.313.469H4.156l1-1.531L9.312 16 5.156 9.531zm3.657 2l3.875 6-.344.531L7.813 22h1.656l2.188-3.438.844-1.313.844 1.313L15.533 22h1.656l-3.875-6 .344-.531L17.189 10h-1.656l-2.188 3.438-.844 1.313-.844-1.313L9.469 10H7.813z"}})]) };
module.exports = { render: render };

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 5c3.854 0 7 3.146 7 7a7.027 7.027 0 0 1-3.094 5.813C22.473 19.343 25 22.882 25 27.001h-2c0-4.431-3.569-8-8-8s-8 3.569-8 8H5c0-4.119 2.527-7.658 6.094-9.188A7.025 7.025 0 0 1 8 12c0-3.854 3.146-7 7-7zm0 2c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e8e0":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 5c2.451 0 4.563 1.302 5.813 3.219.392-.089.755-.219 1.188-.219 3.302 0 6 2.698 6 6 1.73 1.055 3 2.835 3 5 0 3.302-2.698 6-6 6h-20c-3.302 0-6-2.698-6-6s2.698-6 6-6c.211 0 .394.04.594.063.531-1.191 1.439-2.083 2.656-2.563.698-3.129 3.419-5.5 6.75-5.5zm0 2a4.972 4.972 0 0 0-4.938 4.25l-.094.688-.656.156c-1.11.265-2.002 1.136-2.25 2.25l-.188.969-1-.219A3.931 3.931 0 0 0 5.999 15c-2.22 0-4 1.78-4 4s1.78 4 4 4h20c2.22 0 4-1.78 4-4a4.008 4.008 0 0 0-2.438-3.688l-.656-.281.063-.719c.018-.235.031-.321.031-.313 0-2.22-1.78-4-4-4-.444 0-.875.096-1.313.25l-.844.281-.375-.781a4.998 4.998 0 0 0-4.469-2.75z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "e98a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16-2h2v4h-2v-4zm4 1h2v3h-2v-3zM10 3h18v4h2c1.645 0 3 1.355 3 3v3c0 1.645-1.355 3-3 3h-2v5c0 1.645-1.355 3-3 3H13c-1.645 0-3-1.355-3-3V3zm2 2v16c0 .555.445 1 1 1h12c.555 0 1-.445 1-1V5H12zm16 4v5h2c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1h-2z"}})]) };
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

/***/ "e9d5":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3 7h26v2H3V7zm0 4h26v2H3v-2zm0 4h26v2H3v-2zm0 4h26v2H3v-2zm0 4h26v2H3v-2z"}})]) };
module.exports = { render: render };

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

/***/ "ebba":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M15 4.594v22.813l-1.719-1.688L8.562 21H3.999V11h4.563l4.719-4.719zm9.125 1.781C26.51 8.886 28 12.271 28 16s-1.49 7.113-3.875 9.625l-1.406-1.406C24.743 22.07 26 19.178 26 16s-1.257-6.071-3.281-8.219zm-2.812 2.813c1.661 1.786 2.688 4.187 2.688 6.813s-1.026 5.026-2.688 6.813l-1.406-1.438c1.3-1.424 2.094-3.3 2.094-5.375s-.794-3.952-2.094-5.375zM13 9.438l-3.281 3.281-.313.281H6v6h3.406l.313.281L13 22.562V9.437zm5.5 2.593C19.439 13.09 20 14.477 20 16s-.561 2.91-1.5 3.969l-1.438-1.438C17.64 17.837 18 16.972 18 16s-.36-1.837-.938-2.531z"}})]) };
module.exports = { render: render };

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

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M30.336 12.547l-7.599 6.846L24.859 29.4 16 24.289 7.141 29.4l2.122-10.006-7.599-6.847 10.172-1.073L16 2.131l4.164 9.343z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "ed7d":
/***/ (function(module, exports) {

module.exports = {"description":"","methods":[],"displayName":"DsFormItem","comment":"/**\n * @version 1.0.0\n * @private\n */","tags":{"access":[{"title":"access","description":"private"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "f05f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm0 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.656 2.344a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10.594.312l1.438 1.406-4.438 4.438a2 2 0 1 1-1.437-1.437zM8 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-13.656 5.656a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm11.312 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f22a":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 4h16v3h-2V6H6v16h5v2H4V4zm8 4h16v20H12V8zm2 2v16h12V10H14z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f23e":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M4 4h16v3h-2V6H6v16h5v2H4V4zm8 4h16v20H12V8zm2 2v16h12V10H14z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f422":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3 7h13v2H3V7zm0 4h20v2H3v-2zm22 0l5 5-5 5V11zM3 15h20v2H3v-2zm0 4h20v2H3v-2zm0 4h13v2H3v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f48f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 3.219l.875 1.5 12 20.781.844 1.5H2.281l.844-1.5 12-20.781zm0 4L5.75 25h20.5zM15 14h2v6h-2v-6zm0 7h2v2h-2v-2z"}})]) };
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

/***/ "f64e":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M17 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 3a1 1 0 0 1 1 1h7v2h-1v7.656l6.156 7.938c.543.698.844 1.553.844 2.438a3.978 3.978 0 0 1-3.969 3.969H7.968a3.978 3.978 0 0 1-3.969-3.969c0-.885.301-1.74.844-2.438l6.156-7.938V6h-1V4h3a1 1 0 0 1 1-1zm-1 3v8.344L10.156 18h11.688L19 14.344V6h-6zm4 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8.594 20l-2.188 2.813A1.985 1.985 0 0 0 6 24.032c0 1.105.864 1.969 1.969 1.969h16.063a1.947 1.947 0 0 0 1.969-1.969c0-.439-.137-.873-.406-1.219L23.407 20H8.594z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f72e":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M14.594 4H25v10.406l-.281.313-11 11-.719.688-.719-.688-9-9L2.593 16l.688-.719 11-11zm.844 2l-10 10 7.563 7.563 10-10V6h-7.563zM26 7h3v11l-.281.313L17.5 29.407l-.719-.688-1.938-1.969 1.406-1.406 1.25 1.25 9.5-9.438V9h-1V7zm-6 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f746":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M12 5c1.749 0 2.939 1.329 3.719 2.438.104.148.189.293.281.438.092-.145.177-.289.281-.438C17.06 6.33 18.251 5 20 5c1.645 0 3 1.355 3 3 0 .353-.073.684-.188 1H28v6h-1v13H5V15H4V9h5.188A2.925 2.925 0 0 1 9 8c0-1.645 1.355-3 3-3zm0 2c-.565 0-1 .435-1 1s.435 1 1 1h2.313c-.121-.206-.097-.22-.25-.438-.627-.892-1.436-1.563-2.063-1.563zm8 0c-.626 0-1.436.671-2.063 1.563-.153.217-.129.232-.25.438H20c.565 0 1-.435 1-1s-.435-1-1-1zM6 11v2h9v-1h2v1h9v-2H6zm1 4v11h8V16h2v10h8V15H7z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f76f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M3 7h26v2H3V7zm4 4h18v2H7v-2zm-4 4h26v2H3v-2zm4 4h18v2H7v-2zm-4 4h26v2H3v-2z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f796":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 2.594l.719.688 13 13-1.438 1.438L27 16.439v11.563h-9v-10h-4v10H5V16.439L3.719 17.72l-1.438-1.438 13-13zm0 2.844l-9 9v11.563h5v-10h8v10h5V14.438z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f7e7":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M13.281 6.781l1.438 1.438L7.938 15h20.063v2H7.938l6.781 6.781-1.438 1.438-8.5-8.5L4.093 16l.688-.719z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "f81f":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-1 4h2v8h-2v-8zm0 10h2v2h-2v-2z"}})]) };
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

/***/ "f84c":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2c-.335 0-.673.03-1 .063v3.031c.327-.047.66-.094 1-.094s.673.046 1 .094V6.063A10.322 10.322 0 0 0 16 6zm-3 .438a9.987 9.987 0 0 0-6.531 6.563h3.219a7.005 7.005 0 0 1 3.313-3.313v-3.25zm6 0v3.25a7.014 7.014 0 0 1 3.313 3.313h3.25A10.068 10.068 0 0 0 19 6.438zM16 11c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zm-9.937 4c-.032.326-.063.665-.063 1s.03.673.063 1h3.031A7.013 7.013 0 0 1 9 16c0-.337.016-.675.063-1h-3zm16.843 0c.047.327.094.66.094 1s-.046.673-.094 1h3.031c.032-.327.063-.665.063-1s-.03-.673-.063-1h-3.031zM6.438 19a10.068 10.068 0 0 0 6.563 6.563v-3.25A7.014 7.014 0 0 1 9.688 19h-3.25zm15.875 0A7.014 7.014 0 0 1 19 22.313v3.25A10.068 10.068 0 0 0 25.563 19h-3.25zM15 22.906v3.031c.327.032.665.063 1 .063s.673-.03 1-.063v-3.031c-.327.047-.66.094-1 .094s-.673-.046-1-.094z"}})]) };
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
// EXTERNAL MODULE: ./src/system/styles/main.scss
var main = __webpack_require__("50fc");

// CONCATENATED MODULE: ./src/system/index.js



/* harmony default export */ var system = ({
  install: function install(Vue) {
    Vue.use(plugins);
    Vue.use(system_components);
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


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (library);



/***/ }),

/***/ "fb53":
/***/ (function(module, exports) {

module.exports = {"description":"","methods":[],"displayName":"DsListItem","props":{"icon":{"type":{"name":"string"},"required":"","defaultValue":{"value":"default() { return this.$parentList ? this.$parentList.icon : 'angle-right'; }","func":true},"tags":{},"comment":"/**\n     * The name of the list icon.\n     */","description":"The name of the list icon."}},"comment":"/**\n * @version 1.0.0\n * @see DsList\n */","tags":{"see":[{"title":"see","description":"DsList"}],"version":[{"title":"version","description":"1.0.0"}]},"events":{},"slots":{"default":{"description":""}}}

/***/ }),

/***/ "fba4":
/***/ (function(module, exports) {

var render = function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"d":"M14 3h4c1.093 0 2 .907 2 2v1h3V5h2v1h2c1.093 0 2 .907 2 2v16c0 1.093-.907 2-2 2H5c-1.093 0-2-.907-2-2V8c0-1.093.907-2 2-2h2V5h2v1h3V5c0-1.093.907-2 2-2zm0 2v1h4V5h-4zM5 8v16h2V9h2v15h14V9h2v15h2V8H5z"}})]) };
module.exports = { render: render };

/***/ }),

/***/ "fbc9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb9e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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