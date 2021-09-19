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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18 5h2l-6 22h-2zM7.938 6.406l1.625 1.188L3.25 16l6.313 8.406-1.625 1.188-6.75-9L.75 16l.438-.594zm16.125 0l6.75 9 .438.594-.438.594-6.75 9-1.625-1.188L28.751 16l-6.313-8.406z"}})])
          )
        }
      }
    

/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


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

/***/ "0219":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7 4h18v2h-2v4a7.006 7.006 0 01-3.406 6A7.004 7.004 0 0123 22v4h2v2H7v-2h2v-4a7.006 7.006 0 013.406-6A7.004 7.004 0 019 10V6H7V4zm4 2v4c0 2.774 2.226 5 5 5s5-2.226 5-5V6H11zm5 11c-2.774 0-5 2.226-5 5v4h10v-4c0-2.774-2.226-5-5-5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__("fc6a");
var $getOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "0599":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M13.375 3h1.281l.281.219s2.507 2.024 5 5.094S25 15.537 25 20.001c0 1.978-.333 4.263-1.938 6.063-1.369 1.535-3.592 2.567-6.938 2.844-.085.007-.163.025-.25.031-.283.028-.57.063-.875.063-.097 0-.186-.028-.281-.031-.139.002-.263.031-.406.031-3.265 0-5.674-1.113-7.188-2.781s-2.125-3.807-2.125-5.813c0-4.244 1.984-7.63 3.969-10.344s3.919-4.935 4.219-6.281zM14.5 5.5c-.868 1.866-2.366 3.645-3.906 5.75C8.702 13.836 7 16.784 7 20.406c0 1.595.508 3.237 1.625 4.469.238.262.514.493.813.719-.078-.193-.164-.391-.219-.594-.619-2.311.099-5.073 1.969-7.594l.938-1.281.75 1.406c.511.955 1.047 1.345 1.344 1.438s.424.063.719-.281c.589-.689 1.141-3.002.094-6.406l-.375-1.281h1.938l.281.344c.548.633 1.188 1.78 1.938 3.406s1.529 3.644 1.938 5.656c.358 1.761.476 3.535-.063 5.094.34-.241.632-.509.875-.781 1.13-1.267 1.438-2.963 1.438-4.719 0-3.669-2.272-7.509-4.625-10.406-1.705-2.099-3.067-3.383-3.875-4.094zm3.063 11.719c-.157 1.133-.503 2.089-1.094 2.781-.688.806-1.824 1.195-2.844.875-.551-.173-1.025-.508-1.469-.969-.903 1.704-1.324 3.385-1 4.594.392 1.464 1.431 2.428 3.594 2.5.086.003.16 0 .25 0 .345-.011.686-.037 1-.063.15-.018.303-.036.438-.063 1.21-.239 1.804-.811 2.188-1.594.511-1.044.519-2.681.156-4.469-.25-1.23-.756-2.418-1.219-3.594z"}})])
          )
        }
      }
    

/***/ }),

/***/ "05dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/List/List.vue?vue&type=template&id=52fb5991&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.ordered ? 'ol' : 'ul',{tag:"component",staticClass:"ds-list",class:[_vm.size && ("ds-list-size-" + _vm.size)]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/List/List.vue?vue&type=template&id=52fb5991&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/List/List.vue?vue&type=script&lang=js&


//
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
     * @values small, base, large, x-large
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-display/List/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FList%2FList.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-display/List/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FList%2FList.vue
 /* harmony default export */ var List_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList); 
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

if (typeof List_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList === 'function') List_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FList_2FList(component)

/* harmony default export */ var List = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "06c5":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6 4h20v9h-2V6H8v20h16v-7h2v9H6V4zm11.5 7l1.406 1.406L16.312 15H28v2H16.312l2.594 2.594L17.5 21l-4.313-4.281-.688-.719.688-.719z"}})])
          )
        }
      }
    

/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "09ae":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M8 7c3.302 0 6 2.698 6 6 0 1.984-.975 3.75-2.469 4.844A8.06 8.06 0 0115 21.125a8.048 8.048 0 013.469-3.281A6.003 6.003 0 0116 13c0-3.302 2.698-6 6-6s6 2.698 6 6c0 1.984-.975 3.75-2.469 4.844C28.169 19.154 30 21.864 30 25h-2c0-3.326-2.674-6-6-6s-6 2.674-6 6h-2c0-3.326-2.674-6-6-6s-6 2.674-6 6H0c0-3.136 1.831-5.846 4.469-7.156A6.003 6.003 0 012 13c0-3.302 2.698-6 6-6zm0 2c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4zm14 0c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "0a19":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4.094l.719.688 8.5 8.5-1.438 1.438L17 7.939v20.063h-2V7.939L8.219 14.72l-1.438-1.438 8.5-8.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "0a36":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 5c3.854 0 7 3.146 7 7 0 3.514-2.617 6.417-6 6.906V28h-2v-9.094c-3.383-.489-6-3.392-6-6.906 0-3.854 3.146-7 7-7zm0 2c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zm0 1v2c-1.117 0-2 .883-2 2h-2c0-2.197 1.803-4 4-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "0c75":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M10 5c2.92 0 5.482.981 6 1.188C16.518 5.982 19.08 5 22 5c3.227 0 6.375 1.313 6.375 1.313l.625.281V27H17.719c-.346.597-.979 1-1.719 1s-1.373-.403-1.719-1H3V6.594l.625-.281S6.773 5 10 5zm0 2c-2.199 0-4.232.69-5 .969v16.125c1.188-.392 2.897-.875 5-.875 2.057 0 3.888.506 5 .875V7.969C14 7.626 11.933 7 10 7zm12 0c-1.933 0-4 .626-5 .969v16.125c1.112-.369 2.943-.875 5-.875 2.103 0 3.813.483 5 .875V7.969C26.232 7.69 24.199 7 22 7z"}})])
          )
        }
      }
    

/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0ce8":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsChip","description":"Chips are used to represent small blocks of information.\nTheir most common usage is for displaying contacts or tags.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"color","description":"The background color used for the chip.","tags":{},"values":["medium","inverse","primary","success","warning","danger"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'medium'"}},{"name":"size","description":"The size used for the text.","tags":{},"values":["base","large","small"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'base'"}},{"name":"removable","description":"Whether the chip should be removeable","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"round","description":"Whether the chip should be rounded","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"true"}},{"name":"tag","description":"The html element name used for the text.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'span'"}}],"events":[{"name":"remove","description":"Fires after user clicked the remove button."}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d2f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0e73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c24");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0eb9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0f56":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-4.5 6a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0111.5 12zm9 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0120.5 12zm-9.687 7c1.039 1.793 2.962 3 5.188 3s4.149-1.207 5.188-3l1.719 1c-1.383 2.387-3.954 4-6.906 4s-5.523-1.613-6.906-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "0f76":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./airbnb.js": "7744",
	"./base.js": "fde7",
	"./dark.js": "c3e8",
	"./digital-ocean.js": "c6d0",
	"./discord.js": "4e9c",
	"./vue.js": "6fb9"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "0f76";

/***/ }),

/***/ "107c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "1107":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21 4h8v24h-8V4zm2 2v20h4V6h-4zM3 10h8v18H3V10zm2 2v14h4V12H5zm7 4h8v12h-8V16zm2 2v8h4v-8h-4z"}})])
          )
        }
      }
    

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

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var stickyHelpers = __webpack_require__("9f7f");
var fails = __webpack_require__("d039");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "129f":
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "12f0":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7 5h18c1.093 0 2 .907 2 2v18c0 1.093-.907 2-2 2H7c-1.093 0-2-.907-2-2V7c0-1.093.907-2 2-2zm0 2v18h9.688v-6.75h-2.625v-3h2.625V13c0-2.583 1.571-3.969 3.875-3.969 1.104 0 2.067.057 2.344.094v2.719h-1.625c-1.253 0-1.469.595-1.469 1.469v1.938h2.969l-.375 3h-2.594v6.75h5.188v-18h-18z"}})])
          )
        }
      }
    

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

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "1607":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "163c":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsList","description":"Used in combination with the list item component to display lists of data.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"ordered","description":"Whether or not the list is ordered.","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"size","description":"The size used for the list.","tags":{},"values":["small","base","large","x-large"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"icon","description":"The name of the list icon.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'angle-right'"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "164d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Logo/Logo.vue?vue&type=template&id=7c497e5b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-logo",class:[_vm.inverse && "ds-logo-inverse"]},[_c('svg-logo',{staticClass:"ds-logo-svg"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Logo/Logo.vue?vue&type=template&id=7c497e5b&

// EXTERNAL MODULE: ./src/system/assets/img/logo_cion.svg
var logo_cion = __webpack_require__("323f");
var logo_cion_default = /*#__PURE__*/__webpack_require__.n(logo_cion);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Logo/Logo.vue?vue&type=script&lang=js&
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Logo/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FLogo%2FLogo.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Logo/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FLogo%2FLogo.vue
 /* harmony default export */ var Logo_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo); 
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

if (typeof Logo_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo === 'function') Logo_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FLogo_2FLogo(component)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "16b6":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M14.25 4h4c.522 0 1.061.186 1.438.563s.563.915.563 1.438v1h6v2h-1v16c0 1.645-1.355 3-3 3h-12c-1.645 0-3-1.355-3-3v-16h-1v-2h6v-1c0-.522.185-1.061.563-1.438S13.729 4 14.252 4zm0 2v1h4V6h-4zm-5 3v16c0 .555.445 1 1 1h12c.555 0 1-.445 1-1V9h-14zm2 3h2v11h-2V12zm4 0h2v11h-2V12zm4 0h2v11h-2V12z"}})])
          )
        }
      }
    

/***/ }),

/***/ "16cc":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2 7h28v7h-1c-1.19 0-2 .81-2 2s.81 2 2 2h1v7H2v-7h1c1.19 0 2-.81 2-2s-.81-2-2-2H2V7zm2 2v3.188c1.715.451 3 1.955 3 3.813s-1.285 3.362-3 3.813v3.188h24v-3.188c-1.715-.451-3-1.955-3-3.813s1.285-3.362 3-3.813V9H4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "171e":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3 8h26v18H3V8zm4.313 2l8.688 5.781L24.689 10H7.314zM5 10.875V24h22V10.875l-10.438 6.969-.563.344-.563-.344z"}})])
          )
        }
      }
    

/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "19ad":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 5h8v2.406l-.281.313L7.438 13h5.563v2h-8v-2.406l.281-.313L10.563 7H5V5zm17 0h2v18.688l2.594-2.594L28 22.5l-4.281 4.313-.719.688-.719-.688L18 22.5l1.406-1.406L22 23.688V5zM8.188 17h1.625l.219.656L11.97 23h.031v.063l.938 2.594.063.156v1.188h-2v-.844l-.406-1.156H7.408l-.406 1.156v.844h-2v-1.188l.063-.156.938-2.594V23h.031l1.938-5.344zM9 20.656L8.156 23h1.688z"}})])
          )
        }
      }
    

/***/ }),

/***/ "1b2c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M14 5h4c1.093 0 2 .907 2 2v1h6c1.645 0 3 1.355 3 3v15H3V11c0-1.645 1.355-3 3-3h6V7c0-1.093.907-2 2-2zm0 2v1h4V7h-4zm-8 3c-.565 0-1 .435-1 1v13h22V11c0-.565-.435-1-1-1H6zm9 3h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"}})])
          )
        }
      }
    

/***/ }),

/***/ "1b6f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M24.656 3.031c1.108 0 2.222.41 3.063 1.25 1.681 1.681 1.681 4.444 0 6.125l-2.813 2.781 1 1-1.406 1.406-1-1-9.5 9.5c-1.064 1.064-1.845 1.684-2.531 2.063s-1.277.493-1.688.563-.636.113-1.063.344-1.04.696-2 1.656l-.719.688-.719-.688-2-2L2.592 26l.688-.719c.986-.986 1.475-1.621 1.719-2.063s.276-.66.344-1.063.196-1.011.563-1.688.96-1.429 2-2.469l9.5-9.5-1-1 1.406-1.406 1 1 2.781-2.813a4.313 4.313 0 013.063-1.25zm0 2A2.34 2.34 0 0023 5.719L20.219 8.5l3.281 3.281L26.281 9a2.297 2.297 0 000-3.281 2.273 2.273 0 00-1.625-.688zm-5.843 4.875l-9.5 9.5c-.96.96-1.426 1.605-1.656 2.031s-.274.621-.344 1.031-.184 1.033-.563 1.719c-.259.469-.859 1.1-1.406 1.719l.75.75c.601-.529 1.227-1.126 1.688-1.375.677-.366 1.254-.463 1.656-.531s.621-.1 1.063-.344 1.108-.733 2.094-1.719l9.5-9.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c72":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsFlexItem","description":"","tags":{"version":[{"description":"1.0.0","title":"version"}],"see":[{"description":"DsFlex","title":"see"}]},"exportName":"default","props":[{"name":"width","description":"The item's width","tags":{"default":[{"description":"1","title":"default"}]},"type":{"name":"string|number|object"},"defaultValue":{"func":true,"value":"function() {\n  return this.$parentFlex ? this.$parentFlex.width : 1\n}"}},{"name":"tag","description":"The outtermost html tag","type":{"name":"string"},"defaultValue":{"func":false,"value":"'div'"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cc4":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M8 7c3.302 0 6 2.698 6 6 0 1.984-.975 3.75-2.469 4.844A8.06 8.06 0 0115 21.125a8.048 8.048 0 013.469-3.281A6.003 6.003 0 0116 13c0-3.302 2.698-6 6-6s6 2.698 6 6c0 1.984-.975 3.75-2.469 4.844C28.169 19.154 30 21.864 30 25h-2c0-3.326-2.674-6-6-6s-6 2.674-6 6h-2c0-3.326-2.674-6-6-6s-6 2.674-6 6H0c0-3.136 1.831-5.846 4.469-7.156A6.003 6.003 0 012 13c0-3.302 2.698-6 6-6zm0 2c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4zm14 0c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1d82":
/***/ (function(module, exports) {

module.exports = {"description":"Used for letting the user choose values from a set of options.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","displayName":"DsSelect","docsBlocks":[""],"props":[{"name":"value","mixin":{"name":"input","path":"../shared/input.js"},"description":"The value of the input. Can be passed via v-model.","type":{"name":"string|object|number|array"},"defaultValue":{"func":false,"value":"null"}},{"name":"model","mixin":{"name":"input","path":"../shared/input.js"},"description":"The model name when used within a form component. Uses dot notation.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"name","mixin":{"name":"input","path":"../shared/input.js"},"description":"Name to use on the input for accessibility","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"label","mixin":{"name":"input","path":"../shared/input.js"},"description":"The label of the input.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"id","mixin":{"name":"input","path":"../shared/input.js"},"description":"The id of the input.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"disabled","mixin":{"name":"input","path":"../shared/input.js"},"description":"Whether the input is disabled or not.","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"readonly","mixin":{"name":"input","path":"../shared/input.js"},"description":"Whether the input should be read-only","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"schema","mixin":{"name":"input","path":"../shared/input.js"},"description":"The async-validator schema used for the input.","tags":{"default":[{"description":"null","title":"default"}]},"type":{"name":"object"},"defaultValue":{"func":true,"value":"() => null"}},{"name":"size","mixin":{"name":"input","path":"../shared/input.js"},"description":"The input's size.","tags":{},"values":["small","base","large"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'base'"}},{"name":"tabindex","mixin":{"name":"input","path":"../shared/input.js"},"type":{"name":"number"},"defaultValue":{"func":false,"value":"0"}},{"name":"multiple","mixin":{"name":"multiinput","path":"../shared/multiinput.js"},"description":"Whether the user can select multiple items","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"placeholder","description":"The placeholder shown when value is empty","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"autofocus","description":"Whether the input should be automatically focused","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"icon","description":"The name of the input's icon","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"iconRight","description":"The name of the input's right icon","type":{"name":"string"},"defaultValue":{"func":false,"value":"'angle-down'"}},{"name":"options","description":"The select options.","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}},{"name":"labelProp","description":"The prop to use as the label when options are objects","type":{"name":"string"},"defaultValue":{"func":false,"value":"'label'"}},{"name":"searchable","description":"Whether the options are searchable","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"true"}},{"name":"noOptionsAvailable","description":"Message to show when no options are available","type":{"name":"string"},"defaultValue":{"func":false,"value":"'No options available.'"}},{"name":"noOptionsFound","description":"Message to show when the search result is empty","type":{"name":"string"},"defaultValue":{"func":false,"value":"'No options found for:'"}}],"events":[{"name":"input","mixin":{"name":"input","path":"../shared/input.js"},"description":"Fires after user input.\nReceives the value as the only argument.","type":{"names":["undefined"]}}],"slots":[{"name":"optionitem","scoped":true,"description":"Slot to provide a custom selected option display","bindings":[{"name":"value","title":"binding"}]},{"name":"value","scoped":true,"description":"Slot to provide a custom value display","bindings":[{"name":"value","title":"binding"}]},{"name":"option","scoped":true,"description":"Slot to provide custom option items","bindings":[{"name":"option","title":"binding"}]}]}

/***/ }),

/***/ "1d8c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1d95":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12.969 4.281l11 11 .688.719-.688.719-11 11-1.438-1.438L21.812 16 11.531 5.719z"}})])
          )
        }
      }
    

/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1e99":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1fac":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1fb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "20ff":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M11 4h10c1.645 0 3 1.355 3 3v18c0 1.645-1.355 3-3 3H11c-1.645 0-3-1.355-3-3V7c0-1.645 1.355-3 3-3zm0 2c-.555 0-1 .445-1 1v18c0 .555.445 1 1 1h10c.555 0 1-.445 1-1V7c0-.555-.445-1-1-1H11zm5 17a1 1 0 110 2 1 1 0 010-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "21fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1d8c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "22dc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
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
	"./star.svg": "ebfd",
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
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "249d";

/***/ }),

/***/ "2523":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~toString(requireObjectCoercible(this))
      .indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "2556":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6 3h22v10.406l-.281.313L26 15.438v13.563H6v-26zm2 2v22h16V15.437l-1.719-1.719-.281-.313V4.999H8zm16 0v7.563l1 1 1-1V5h-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "2576":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Card/Card.vue?vue&type=template&id=2e694460&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-card",class:[
    _vm.$slots.image && 'ds-card-has-image',
    _vm.primary && "ds-card-primary",
    _vm.secondary && "ds-card-secondary",
    _vm.centered && "ds-card-centered",
    _vm.hover && "ds-card-hover" ]},[(_vm.image || _vm.$slots.image)?_c('div',{staticClass:"ds-card-image"},[_vm._t("image",function(){return [_c('img',{attrs:{"src":_vm.image}})]})],2):_vm._e(),(_vm.icon)?_c('div',{staticClass:"ds-card-icon"},[_c('ds-icon',{attrs:{"name":_vm.icon}})],1):_vm._e(),(_vm.header || _vm.$slots.header)?_c('header',{staticClass:"ds-card-header"},[_vm._t("header",function(){return [_c('ds-heading',{attrs:{"tag":_vm.headerTag,"size":"h3"}},[_vm._v(_vm._s(_vm.header))])]})],2):_vm._e(),_c('div',{staticClass:"ds-card-content"},[_vm._t("default")],2),(_vm.$slots.footer)?_c('footer',{staticClass:"ds-card-footer"},[_vm._t("footer")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Card/Card.vue?vue&type=template&id=2e694460&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Card/Card.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
     * The outtermost html tag
     */
    tag: {
      type: String,
      default: 'article'
    },

    /**
     * The card's header
     */
    header: {
      type: String,
      default: null
    },

    /**
     * The card's header tag
     * @values h1, h2, h3, h4, h5, h6
     */
    headerTag: {
      type: String,
      default: 'h3',
      validator: function validator(value) {
        return value.match(/(h1|h2|h3|h4|h5|h6)/);
      }
    },

    /**
     * The card's image
     */
    image: {
      type: String,
      default: null
    },

    /**
     * The card's icon
     */
    icon: {
      type: String,
      default: null
    },

    /**
     * Highlight with primary color
     */
    primary: {
      type: Boolean,
      default: false
    },

    /**
     * Highlight with secondary color
     */
    secondary: {
      type: Boolean,
      default: false
    },

    /**
     * Centers the content
     */
    centered: {
      type: Boolean,
      default: false
    },

    /**
     * Makes the card hoverable
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Card/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FCard%2FCard.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Card/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FCard%2FCard.vue
 /* harmony default export */ var Card_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard); 
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

if (typeof Card_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard === 'function') Card_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FCard_2FCard(component)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2775":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm8 4.719l5.25 1.313-.5 1.938-2.75-.688v6.719c0 1.645-1.355 3-3 3s-3-1.355-3-3 1.355-3 3-3c.353 0 .684.073 1 .188V9.72zM14 18c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})])
          )
        }
      }
    

/***/ }),

/***/ "27c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/CopyField/CopyField.vue?vue&type=template&id=5e5c887c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-copy-field",class:("ds-copy-field-" + _vm.size)},[_c('div',{ref:"text"},[_vm._t("default")],2),_c('div',{staticClass:"ds-copy-field-link"},[_c('ds-button',{attrs:{"icon":"copy","color":"soft","ghost":""},on:{"click":_vm.copy}})],1),_c('transition',{attrs:{"name":"ds-copy-field-message"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMessage),expression:"showMessage"}],staticClass:"ds-copy-field-message"},[_c('div',{ref:"messageText",staticClass:"ds-copy-field-message-text"})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/CopyField/CopyField.vue?vue&type=template&id=5e5c887c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./src/system/components/navigation/Button/Button.vue + 6 modules
var Button = __webpack_require__("42cf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/CopyField/CopyField.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
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
  components: {
    DsButton: Button["default"]
  },
  props: {
    /**
     * The size used for the text.
     * @values small, base, large
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-display/CopyField/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FCopyField%2FCopyField.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-display/CopyField/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FCopyField%2FCopyField.vue
 /* harmony default export */ var CopyField_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField); 
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

if (typeof CopyField_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField === 'function') CopyField_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FCopyField_2FCopyField(component)

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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

/***/ "28fa":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18.719 6.781l8.5 8.5.688.719-.688.719-8.5 8.5-1.438-1.438L24.062 17H3.999v-2h20.063l-6.781-6.781z"}})])
          )
        }
      }
    

/***/ }),

/***/ "2909":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js






function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "291d":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4.406l.406.188 10 4.5.594.25v12.688l-.5.281L16 28.157l-.5-.281L5 22.032V9.344l.594-.25 10-4.5zm0 2.188l-7.688 3.438L16 13.876l7.688-3.844zm-9 5.031v9.219l8 4.438v-9.656zm18 0l-8 4v9.656l8-4.438v-9.219z"}})])
          )
        }
      }
    

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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M25.906 4c.697 0 1.125.031 1.125.031l.906.031.031.906s.099 1.758-.094 3.813-.515 4.453-1.969 5.906c-1.213 1.212-4.488 3.737-7.563 6.094-.624.478-.607.466-1.188.906l.094 1.688a3.98 3.98 0 01-1.469 3.313l-2.563 2.094-1.281 1.031-.344-1.625-.656-3.281-3.844-3.844-3.281-.656-1.625-.313 1.031-1.313 2.094-2.563a3.98 3.98 0 013.313-1.469l1.719.094c.43-.564.41-.55.875-1.156 2.353-3.068 4.893-6.331 6.125-7.563 1.466-1.466 3.826-1.81 5.875-2a30.023 30.023 0 012.688-.125zM25 6c-.398.001-.91.03-1.594.094-1.886.175-3.973.754-4.656 1.438-.918.918-3.626 4.321-5.969 7.375-2.064 2.692-3.463 4.604-3.875 5.156l3.063 3.063c.544-.406 2.449-1.862 5.156-3.938 3.062-2.347 6.451-5.046 7.344-5.938.651-.651 1.229-2.761 1.406-4.656.129-1.375.105-1.982.094-2.563-.288-.007-.571-.033-.969-.031zm-4.562 3.531c1.117 0 2.031.915 2.031 2.031s-.915 2.031-2.031 2.031-2-.915-2-2.031.883-2.031 2-2.031zM8.5 16.75a2.004 2.004 0 00-1.656.75l-1.031 1.25 1.344.281c.132-.176 1.116-1.454 1.719-2.25zm-2.281 5.188l1.406 1.406c-.377.377-.82 1.323-1.125 2.156.798-.29 1.679-.679 2.125-1.125l1.406 1.406c-.894.894-2.079 1.385-3.063 1.719s-1.781.469-1.781.469l-1.469.281.313-1.469s.155-.82.5-1.813.833-2.176 1.688-3.031zm9 1.187c-.797.598-2.074 1.588-2.25 1.719l.281 1.344 1.281-1.031a1.976 1.976 0 00.719-1.656z"}})])
          )
        }
      }
    

/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = iterator['return'];
    if (innerResult === undefined) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "2a95":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Schema; });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"NODE_ENV":"production","BASE_URL":"/"}) && "production" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === 'undefined') {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
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
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
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

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
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
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

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

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
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
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern$2.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern$2.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

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
  } // if the value is not of a supported type for range validation
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
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
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
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
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
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
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
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
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
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;


//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 2.125l.906 2.063 3.25 7.281 7.938.844 2.25.25-1.688 1.5-5.906 5.344 1.656 7.813.469 2.188-1.969-1.125-6.906-4-6.906 4-1.969 1.125.469-2.188 1.656-7.813-5.906-5.344-1.688-1.5 2.25-.25 7.938-.844 3.25-7.281zm0 4.906l-2.563 5.781-.25.531-.563.063-6.281.656 4.688 4.219.438.406-.125.563-1.313 6.156 5.469-3.125.5-.313.5.313 5.469 3.125-1.313-6.156-.125-.563.438-.406 4.688-4.219-6.844-.719-.25-.531z"}})])
          )
        }
      }
    

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
  return _tokens__WEBPACK_IMPORTED_MODULE_1__[/* tokenMap */ "c"].spaceSize[spaceName] ? _tokens__WEBPACK_IMPORTED_MODULE_1__[/* tokenMap */ "c"].spaceSize[spaceName].value : 0;
};



/***/ }),

/***/ "2c25":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 3c3.845 0 7 3.155 7 7v3h3v16H5V13h3v-3c0-3.845 3.155-7 7-7zm0 2c-2.755 0-5 2.245-5 5v3h10v-3c0-2.755-2.245-5-5-5zM7 15v12h16V15H7z"}})])
          )
        }
      }
    

/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");
var IS_NODE = __webpack_require__("605d");

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var argumentsLength = arguments.length;
    var i = 1;
    while (argumentsLength > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2d11":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM15 13h2l-2 12h-2zm-3.781 2.375l1.563 1.25L10.813 19l1.969 2.375-1.563 1.25-2.5-3L8.188 19l.531-.625zm7.562 0l2.5 3 .531.625-.531.625-2.5 3-1.563-1.25L19.187 19l-1.969-2.375z"}})])
          )
        }
      }
    

/***/ }),

/***/ "2de4":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M8.188 5h1.625l.219.656L11.97 11h.031v.063l.938 2.594.063.156v1.188h-2v-.844l-.406-1.156H7.408l-.406 1.156v.844h-2v-1.188l.063-.156.938-2.594V11h.031l1.938-5.344zM22 5h2v18.688l2.594-2.594L28 22.5l-4.281 4.313-.719.688-.719-.688L18 22.5l1.406-1.406L22 23.688V5zM9 8.656L8.156 11h1.688zM5 17h8v2.406l-.281.313L7.438 25h5.563v2h-8v-2.406l.281-.313L10.563 19H5v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "2e4f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6 14a2 2 0 11.001 3.999A2 2 0 016 14zm10 0a2 2 0 11.001 3.999A2 2 0 0116 14zm10 0a2 2 0 11.001 3.999A2 2 0 0126 14z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3163":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "320a":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21.5 2.5h2v1.406a5.62 5.62 0 012.25.938l.938-.938 1.406 1.406-.938.938c.464.664.792 1.421.938 2.25H29.5v2h-1.406a5.625 5.625 0 01-.938 2.281l.969 1.031-1.469 1.375-.938-1a5.617 5.617 0 01-2.219.906v1.406h-2v-1.406a5.62 5.62 0 01-2.25-.938l-1.031 1.063-1.438-1.438 1.063-1.031a5.615 5.615 0 01-.938-2.25h-1.406v-2h1.406a5.632 5.632 0 01.906-2.219l-1-.938 1.375-1.469 1.031.969a5.665 5.665 0 012.281-.938V2.498zm1 3.313c-2.055 0-3.688 1.632-3.688 3.688s1.632 3.688 3.688 3.688 3.688-1.632 3.688-3.688-1.632-3.688-3.688-3.688zM9.531 11.719l.719 1.813a6.865 6.865 0 011.656-.219c.571 0 1.126.085 1.656.219l.719-1.813 1.844.75-.719 1.813a6.887 6.887 0 012.313 2.313l1.813-.719.75 1.844-1.813.719c.132.529.219 1.087.219 1.656s-.086 1.126-.219 1.656l1.813.719-.75 1.844-1.813-.719a6.907 6.907 0 01-2.313 2.344l.719 1.781-1.844.75-.719-1.781a6.76 6.76 0 01-1.656.219 6.713 6.713 0 01-1.656-.219l-.719 1.781-1.844-.75.719-1.781a6.873 6.873 0 01-2.344-2.344l-1.781.719-.75-1.844 1.781-.719c-.134-.53-.219-1.087-.219-1.656s.085-1.128.219-1.656l-1.781-.719.75-1.844 1.781.719a6.916 6.916 0 012.344-2.313l-.719-1.813zm2.375 3.594c-2.663 0-4.813 2.118-4.813 4.781s2.15 4.813 4.813 4.813 4.781-2.15 4.781-4.813-2.118-4.781-4.781-4.781z"}})])
          )
        }
      }
    

/***/ }),

/***/ "323f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"viewBox":"0 0 239 59","fill":"none","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M29.5 14.449l14.077 24.383H15.423L29.5 14.449z","fill":"currentColor"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M29.5 55C43.583 55 55 43.583 55 29.5S43.583 4 29.5 4 4 15.417 4 29.5 15.417 55 29.5 55zm0 4C45.792 59 59 45.792 59 29.5S45.792 0 29.5 0 0 13.208 0 29.5 13.208 59 29.5 59z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M118.83 44.291a21.405 21.405 0 01-6.562 3.867 21.481 21.481 0 01-7.53 1.348c-1.992 0-3.916-.264-5.771-.791a22.06 22.06 0 01-5.186-2.168 22.557 22.557 0 01-4.394-3.428 22.554 22.554 0 01-3.428-4.394 23 23 0 01-2.197-5.186A21.766 21.766 0 0183 27.768c0-1.993.254-3.916.762-5.772a22.268 22.268 0 012.197-5.185 22.172 22.172 0 013.428-4.424 21.69 21.69 0 014.394-3.399 21.348 21.348 0 015.186-2.197A21.006 21.006 0 01104.738 6c2.598 0 5.108.45 7.53 1.348a20.656 20.656 0 016.562 3.867l-4.453 7.324a12.427 12.427 0 00-4.365-3.047 13.21 13.21 0 00-5.274-1.084c-1.855 0-3.593.352-5.215 1.055a13.592 13.592 0 00-4.248 2.871c-1.21 1.191-2.168 2.607-2.87 4.248-.704 1.621-1.055 3.35-1.055 5.186 0 1.835.351 3.564 1.054 5.185a13.692 13.692 0 002.871 4.219 13.596 13.596 0 004.248 2.871c1.622.703 3.36 1.055 5.215 1.055 1.836 0 3.594-.352 5.274-1.055a12.766 12.766 0 004.365-3.076l4.453 7.324zM138.131 48.598h-8.408V6.586h8.408v42.012zM193.115 27.768c0 1.992-.263 3.916-.791 5.771a22.046 22.046 0 01-2.168 5.186 21.67 21.67 0 01-3.398 4.394 22.543 22.543 0 01-4.395 3.428 21.384 21.384 0 01-5.185 2.168c-1.856.527-3.78.79-5.772.79-1.992 0-3.916-.263-5.771-.79a22.059 22.059 0 01-5.186-2.168 22.566 22.566 0 01-4.394-3.428 22.56 22.56 0 01-3.428-4.394 22.958 22.958 0 01-2.197-5.186 21.758 21.758 0 01-.762-5.771c0-1.993.254-3.916.762-5.772a22.23 22.23 0 012.197-5.185 22.562 22.562 0 013.428-4.395 21.698 21.698 0 014.394-3.398 22.06 22.06 0 015.186-2.168 21.004 21.004 0 015.771-.791c1.992 0 3.916.263 5.772.79a21.385 21.385 0 015.185 2.169 21.676 21.676 0 014.395 3.398 21.673 21.673 0 013.398 4.395 21.379 21.379 0 012.168 5.185c.528 1.856.791 3.78.791 5.772zm-8.349 0c0-1.836-.352-3.565-1.055-5.186-.703-1.64-1.66-3.057-2.871-4.248-1.192-1.211-2.608-2.168-4.248-2.871-1.621-.703-3.35-1.055-5.186-1.055-1.855 0-3.594.352-5.215 1.055a13.594 13.594 0 00-4.248 2.871c-1.211 1.191-2.168 2.607-2.871 4.248-.703 1.621-1.054 3.35-1.054 5.186 0 1.835.351 3.564 1.054 5.185a13.688 13.688 0 002.871 4.219 13.598 13.598 0 004.248 2.871c1.621.703 3.36 1.055 5.215 1.055 1.836 0 3.565-.352 5.186-1.055 1.64-.703 3.056-1.66 4.248-2.871a13.688 13.688 0 002.871-4.219c.703-1.621 1.055-3.35 1.055-5.185zM238.256 48.598h-8.994L213.061 20.94v27.657h-8.409V6.586h8.994l16.202 27.686V6.586h8.408v42.012z","fill":"currentColor"}})])
          )
        }
      }
    

/***/ }),

/***/ "32ed":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm2 2h12v6H9V7zm2 2v2h8V9h-8zm-1 6h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3333":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 4h24v24H4V4zm2 2v20h2v-1h2v1h12v-1h2v1h2V6h-2v1h-2V6H10v1H8V6H6zm2 3h2v2H8V9zm14 0h2v2h-2V9zM8 13h2v2H8v-2zm14 0h2v2h-2v-2zM8 17h2v2H8v-2zm14 0h2v2h-2v-2zM8 21h2v2H8v-2zm14 0h2v2h-2v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "33ba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("466d");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dot_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("abc6");
/* harmony import */ var dot_prop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dot_prop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var async_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2a95");





/**
 * @mixin
 */

/* harmony default export */ __webpack_exports__["a"] = ({
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
      type: [String, Object, Number, Array],
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
     * Name to use on the input for accessibility
     */
    name: {
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
     * Whether the input should be read-only
     */
    readonly: {
      type: Boolean,
      default: false
    },

    /**
     * The async-validator schema used for the input.
     * @default null
     */
    schema: {
      type: Object,
      default: function _default() {
        return null;
      }
    },

    /**
     * The input's size.
     * @values small, base, large
     */
    size: {
      type: String,
      default: 'base',
      validator: function validator(value) {
        return value.match(/(small|base|large)/);
      }
    },
    tabindex: {
      type: Number,
      default: 0
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
      return [this.size && "ds-input-size-".concat(this.size), this.disabled && 'ds-input-is-disabled', this.readonly && 'ds-input-is-readonly', this.error && 'ds-input-has-error', this.focus && 'ds-input-has-focus'];
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
    handleInput: function handleInput(event) {
      this.input(event.target.value);
    },
    input: function input(value) {
      this.innerValue = value;

      if (this.$parentForm) {
        this.$parentForm.update(this.model, value);
      } else {
        /**
         * Fires after user input.
         * Receives the value as the only argument.
         *
         * @event input
         */
        this.$emit('input', value);
        this.validate(value);
      }
    },
    handleFormUpdate: function handleFormUpdate(data, errors) {
      this.innerValue = dot_prop__WEBPACK_IMPORTED_MODULE_3___default.a.get(data, this.model);
      this.error = errors ? errors[this.model] : null;
    },
    validate: function validate(value) {
      var _this = this;

      if (!this.schema) {
        return;
      }

      var validator = new async_validator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]({
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

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "343d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "344f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3.719 2.281L11 9.562V5.999c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2v12c0 .438-.135.858-.375 1.188l1.406 1.406A3.94 3.94 0 0023 17.999v-4h2v4c0 1.544-.601 2.936-1.563 4l6.281 6.281-1.438 1.438-26-26zM13 6v5.563l6 6V6h-6zm-6 8h2v4c0 2.206 1.794 4 4 4h4.813l1.938 1.938c-.245.031-.496.063-.75.063h-2v2h4v2h-10v-2h4v-2h-2c-3.309 0-6-2.691-6-6v-4zm4 1.188l2 2v.813h.813l2 2H13c-1.103 0-2-.897-2-2v-2.813z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3584":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-4 3.125l1.5.875 9 5.125L24 16l-1.5.875-9 5.125-1.5.875V9.125zm2 3.438v6.875L19.969 16z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3587":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 5h22v22H5V5zm2 2v18h8V7H7zm10 0v18h8V7h-8z"}})])
          )
        }
      }
    

/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "3644":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsButton","description":"Used to provide actions or navigation.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"path","description":"The path of this button. Can be a url or a Vue router path object.","type":{"name":"string|object"},"defaultValue":{"func":true,"value":"function() {\n  return null\n}"}},{"name":"size","description":"The size used for the text.","tags":{},"values":["small","base","large"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"linkTag","description":"The component / tag used for this button","tags":{},"values":["router-link","a","button"],"type":{"name":"string"},"defaultValue":{"func":true,"value":"function() {\n  const defaultLink = this.$router ? 'router-link' : 'a'\n  return this.path ? defaultLink : 'button'\n}"}},{"name":"fullwidth","description":"Fill the full width","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"primary","description":"Primary style","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"secondary","description":"Secondary style","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"danger","description":"Danger style","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"hover","description":"Toggle the hover state","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"ghost","description":"Make the buttons background transparent","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"icon","description":"The name of the buttons icon.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"iconRight","description":"The name of the buttons right icon.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}}],"events":[{"name":"click","description":"Click on button.\nReceives two arguments:\nevent, route object","type":{"names":["undefined"]},"properties":[{"type":{"names":["undefined"]},"name":"<anonymous1>"}]}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "366c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f183");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "36aa":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18.125 4h.594l.281.5.938 1.656c1.545.156 3.628.829 5.438 3.25 2.055 2.749 3.625 7.468 3.625 15.594v1h-9.656c-.989.617-2.104 1-3.344 1s-2.355-.375-3.344-1H3.001v-1c0-9.134 1.977-14.423 4.969-17.438s6.852-3.563 10.156-3.563zm-.562 2.063c-2.914.059-5.867.568-8.188 2.906C7.009 11.353 5.215 15.864 5.062 24h5.406a11.28 11.28 0 01-.344-.469C8.767 21.59 7.999 19.198 7.999 17c0-.783.212-1.515.625-2.063s.978-.894 1.563-1.125c1.169-.461 2.477-.521 3.719-.625s2.43-.242 3.125-.563.969-.581.969-1.625h2c0 1.66-.976 2.893-2.156 3.438s-2.492.644-3.75.75-2.45.221-3.156.5c-.353.139-.585.292-.719.469S10 16.556 10 17c0 1.711.643 3.824 1.75 5.406S14.337 25 16 25c1.665 0 3.144-1.014 4.25-2.594S22 18.722 22 17h2c0 2.207-.767 4.624-2.125 6.563-.102.146-.203.297-.313.438h5.375c-.136-7.17-1.553-11.261-3.156-13.406-1.684-2.253-3.521-2.594-4.531-2.594h-.594l-.281-.5zM13 17a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "36b7":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c3.378 0 6.14 2.131 7.344 5.063 3.527.182 6.33 2.986 6.563 6.5 1.239 1.102 2.094 2.677 2.094 4.438 0 3.324-2.676 6-6 6h-20c-3.324 0-6-2.676-6-6 0-2.751 1.884-4.944 4.344-5.656a4.897 4.897 0 013.844-3.219c.454-3.994 3.694-7.125 7.813-7.125zm0 2c-3.37 0-6 2.63-6 6v1H9c-1.444 0-2.638.964-2.938 2.313l-.125.656-.656.125A3.941 3.941 0 002 20c0 2.276 1.724 4 4 4h20c2.276 0 4-1.724 4-4 0-1.267-.65-2.48-1.594-3.188L28 16.499v-.5c0-2.755-2.245-5-5-5h-1.031l-.219-.719c-.779-2.51-2.988-4.281-5.75-4.281zm0 5.594l.719.688 4 4-1.438 1.438L17 15.439v6.563h-2v-6.563l-2.281 2.281-1.438-1.438 4-4z"}})])
          )
        }
      }
    

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

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "38f4":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 3c1.259 0 2.152.89 2.594 2H25v9h2v16H13v-2H5V5h7.406c.442-1.11 1.335-2 2.594-2zm0 2c-.555 0-1 .445-1 1v1h-3v2h8V7h-3V6c0-.555-.445-1-1-1zM7 7v19h6V14h10V7h-2v4H9V7H7zm8 9v12h10V16H15z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3a14":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4.156 8h6.375l.313.469 1.656 2.563 1.656-2.563.313-.469h6.375l-1 1.531L15.688 16l4.156 6.469 1 1.531h-6.375l-.313-.469-1.656-2.563-1.656 2.563-.313.469H4.156l1-1.531L9.312 16 5.156 9.531zm3.657 2l3.875 6-.344.531L7.813 22h1.656l2.188-3.438.844-1.313.844 1.313L15.533 22h1.656l-3.875-6 .344-.531L17.189 10h-1.656l-2.188 3.438-.844 1.313-.844-1.313L9.469 10H7.813zm17.156 9h.063a2.987 2.987 0 012.969 2.969c0 .976-.478 1.885-1.281 2.438l-2.125 1.469c-.041.028-.025.093-.063.125h3.469v2h-6v-1a3.38 3.38 0 011.469-2.781l2.125-1.469a.927.927 0 00.406-.781.955.955 0 00-.969-.969h-.063a.955.955 0 00-.969.969v.031h-2v-.031a2.987 2.987 0 012.969-2.969z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3a26":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsSection","description":"A section is used to group bigger chunks of related content.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"fullheight","description":"Whether this section should be fullheight","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"primary","description":"Highlight with primary color","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"secondary","description":"Highlight with secondary color","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"centered","description":"Center the content","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"tag","description":"The html element name used for the section.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'section'"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "3aee":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM20.094 14a1 1 0 110 2 1 1 0 010-2zM13 15.594l.719.688L16 18.563l1.281-1.281.719-.688.719.688 3 3-1.438 1.438L18 19.439l-1.281 1.281-.719.688-.719-.688L13 18.439 9.719 21.72l-1.438-1.438 4-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3b19":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsInputLabel","description":"","tags":{"version":[{"description":"1.0.0","title":"version"}],"access":[{"description":"private","title":"access"}]},"exportName":"default","props":[{"name":"label","type":{"name":"string"},"required":false,"defaultValue":{"func":false,"value":"null"}}]}

/***/ }),

/***/ "3b8b":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 7c5.017 0 9.544 2.083 12.813 5.406l-1.406 1.406c-2.905-2.961-6.94-4.813-11.406-4.813S7.5 10.85 4.595 13.812l-1.406-1.406C6.457 9.083 10.985 7 16.002 7zm0 5c3.639 0 6.919 1.521 9.281 3.938l-1.406 1.406C21.875 15.289 19.087 14 16 14s-5.875 1.288-7.875 3.344l-1.406-1.406C9.081 13.52 12.361 12 16 12zm0 5c2.26 0 4.295.956 5.75 2.469l-1.406 1.406C19.251 19.725 17.709 19 16 19s-3.25.725-4.344 1.875l-1.406-1.406C11.706 17.956 13.74 17 16 17zm0 5c.884 0 1.67.392 2.219 1L16 25.219 13.781 23c.549-.608 1.335-1 2.219-1z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3b98":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2 6h28v18H17v2h5v2H10v-2h5v-2H2V6zm2 2v14h24V8H4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3bd5":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zm-7 6.781l1.5.938 5 3 1.438.844-1.438.844-5 3-1.5.938V13.22zm2 3.531v2.5L16.094 18z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var toString = __webpack_require__("577e");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3db2":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M24.688 4.031c.837 0 1.679.335 2.313.969a3.251 3.251 0 010 4.594l-.031.063-.063.063.594.594-16.5 16.5-.313.063-5.5 1.094-1.469.313.313-1.469 1.094-5.5.063-.313 16.5-16.5.625.594.094-.094c.633-.633 1.444-.969 2.281-.969zm0 1.969c-.312 0-.608.14-.875.406l-.094.094L25.5 8.281l.094-.094c.533-.533.533-1.248 0-1.781C25.327 6.139 25 6 24.688 6zm-2.969 1.313L20.25 8.751l3 3 1.438-1.469zm-2.844 2.875L8.406 20.626l1.813.406.625.125.125.625.406 1.813 10.438-10.469zM6.969 22.344l-.406 2.031 1.063 1.063 2.031-.406-.5-2.188z"}})])
          )
        }
      }
    

/***/ }),

/***/ "3eba":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsCard","description":"A card is used to group content in an appealing way.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"tag","description":"The outtermost html tag","type":{"name":"string"},"defaultValue":{"func":false,"value":"'article'"}},{"name":"header","description":"The card's header","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"headerTag","description":"The card's header tag","tags":{},"values":["h1","h2","h3","h4","h5","h6"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'h3'"}},{"name":"image","description":"The card's image","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"icon","description":"The card's icon","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"primary","description":"Highlight with primary color","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"secondary","description":"Highlight with secondary color","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"centered","description":"Centers the content","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"hover","description":"Makes the card hoverable","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"slots":[{"name":"image","description":"Content of the card's image"},{"name":"header","description":"Content of the card's header"},{"name":"default"},{"name":"footer","description":"Content of the card's footer"}]}

/***/ }),

/***/ "3f13":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3f2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Section/Section.vue?vue&type=template&id=6a472594&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-section",class:[
    _vm.fullheight && "ds-section-fullheight",
    _vm.primary && "ds-section-primary",
    _vm.secondary && "ds-section-secondary",
    _vm.centered && "ds-section-centered" ]},[_c('div',{staticClass:"ds-section-content"},[_c('ds-container',[_vm._t("default")],2)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Section/Section.vue?vue&type=template&id=6a472594&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Section/Section.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
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
     */
    fullheight: {
      type: Boolean,
      default: false
    },

    /**
     * Highlight with primary color
     */
    primary: {
      type: Boolean,
      default: false
    },

    /**
     * Highlight with secondary color
     */
    secondary: {
      type: Boolean,
      default: false
    },

    /**
     * Center the content
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Section/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSection%2FSection.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Section/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSection%2FSection.vue
 /* harmony default export */ var Section_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection); 
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

if (typeof Section_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection === 'function') Section_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSection_2FSection(component)

/* harmony default export */ var Section = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3f30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/TableHeadCol.vue?vue&type=template&id=0bbffd29&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{staticClass:"ds-table-head-col"},[_vm._t("default",function(){return [_vm._v(" "+_vm._s(_vm.label)+" ")]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/Table/TableHeadCol.vue?vue&type=template&id=0bbffd29&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/TableHeadCol.vue?vue&type=script&lang=js&

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

/* harmony default export */ var TableHeadCol = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "419c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M19 3c5.511 0 10 4.489 10 10s-4.489 10-10 10a9.923 9.923 0 01-6.313-2.25l-7.969 7.969-1.438-1.438 7.969-7.969a9.919 9.919 0 01-2.25-6.313c0-5.511 4.489-10 10-10zm0 2c-4.43 0-8 3.57-8 8s3.57 8 8 8 8-3.57 8-8-3.57-8-8-8z"}})])
          )
        }
      }
    

/***/ }),

/***/ "41b9":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16.906 3h.406l.313.281L24.406 10H30v16H13.156a3.019 3.019 0 01-2.938-2.375L8.562 16H4.999c-1.645 0-3-1.355-3-3s1.355-3 3-3h10.75l-.188-.75c-.203-.156-.331-.224-.625-.625-.47-.642-.938-1.633-.938-2.969C13.996 4.23 15.288 3 16.904 3zm-.312 2.094c-.421.082-.594.255-.594.563 0 .903.273 1.459.531 1.813s.438.438.438.438l.344.188.125.406.594 2.25.313 1.25H5.001c-.565 0-1 .435-1 1s.435 1 1 1h5.188l.188.781 1.781 8.438c.1.467.523.781 1 .781h9.844V11.408zM25 12v12h3V12h-3z"}})])
          )
        }
      }
    

/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4294":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12.781 5.281l1.438 1.438L7.938 13h13.063c3.845 0 7 3.155 7 7v7h-2v-7c0-2.755-2.245-5-5-5H7.938l6.281 6.281-1.438 1.438-8-8L4.093 14l.688-.719z"}})])
          )
        }
      }
    

/***/ }),

/***/ "42cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Button/Button.vue?vue&type=template&id=3a61ecbc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.linkTag,_vm._b({tag:"component",staticClass:"ds-button",class:[
    _vm.size && ("ds-button-size-" + _vm.size),
    _vm.fullwidth && "ds-button-fullwidth",
    _vm.primary && "ds-button-primary",
    _vm.secondary && "ds-button-secondary",
    _vm.danger && "ds-button-danger",
    _vm.ghost && "ds-button-ghost",
    _vm.iconOnly && "ds-button-icon-only",
    _vm.hover && "ds-button-hover" ],on:{"!click":function($event){return _vm.handleClick.apply(null, arguments)}}},'component',_vm.bindings,false),[(_vm.icon)?_c('ds-icon',{attrs:{"name":_vm.icon}}):_vm._e(),(_vm.$slots.default)?_c('span',{staticClass:"ds-button-text"},[_vm._t("default")],2):_vm._e(),(_vm.iconRight)?_c('ds-icon',{attrs:{"name":_vm.iconRight}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/navigation/Button/Button.vue?vue&type=template&id=3a61ecbc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Button/Button.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
     * @values small, base, large
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
     * @values router-link, a, button
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
     * Fill the full width
     */
    fullwidth: {
      type: Boolean,
      default: false
    },

    /**
     * Primary style
     */
    primary: {
      type: Boolean,
      default: false
    },

    /**
     * Secondary style
     */
    secondary: {
      type: Boolean,
      default: false
    },

    /**
     * Danger style
     */
    danger: {
      type: Boolean,
      default: false
    },

    /**
     * Toggle the hover state
     */
    hover: {
      type: Boolean,
      default: false
    },

    /**
     * Make the buttons background transparent
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/navigation/Button/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fnavigation%2FButton%2FButton.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton = (function () {});
// CONCATENATED MODULE: ./src/system/components/navigation/Button/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fnavigation%2FButton%2FButton.vue
 /* harmony default export */ var Button_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton); 
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

if (typeof Button_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton === 'function') Button_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FButton_2FButton(component)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "42d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2523");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "43f2":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M14 5h13v13h-2V8.437L8.437 25H18v2H5V14h2v9.563L23.563 7H14V5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "4409":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3f13");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "442b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4537":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 2c1.381 0 2.533.97 2.875 2.25.351-.146.724-.25 1.125-.25 1.645 0 3 1.355 3 3v1.188A2.925 2.925 0 0124 8c1.645 0 3 1.355 3 3v12c0 3.854-3.146 7-7 7h-4.625c-1.919 0-3.543-.923-4.719-2.094l-6.781-6.781c-1.163-1.163-1.163-3.087 0-4.25s3.087-1.163 4.25 0L9 17.75V7c0-1.645 1.355-3 3-3 .401 0 .774.104 1.125.25C13.467 2.97 14.619 2 16 2zm0 2c-.565 0-1 .435-1 1v10h-2V7c0-.565-.435-1-1-1s-1 .435-1 1v15.594l-1.719-1.719-2.563-2.594c-.399-.399-1.039-.399-1.438 0s-.399 1.039 0 1.438l6.813 6.75c.913.909 2.009 1.531 3.281 1.531h4.625c2.774 0 5-2.226 5-5V11c0-.565-.435-1-1-1s-1 .435-1 1v4h-2V7c0-.565-.435-1-1-1s-1 .435-1 1v8h-2V5c0-.565-.435-1-1-1z"}})])
          )
        }
      }
    

/***/ }),

/***/ "458a":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 7h24v2H4V7zm0 8h24v2H4v-2zm0 8h24v2H4v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4813":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M8.25 5h15.5l.25.594C24.585 6.92 25 8.67 25 11c0 4.616-3.516 8.431-8 8.938v6.063h5v2H10v-2h5v-6.063c-4.484-.506-8-4.322-8-8.938 0-2.325.413-4.077 1-5.406zm1.406 2C9.294 8.001 9 9.235 9 11c0 3.877 3.123 7 7 7a6.967 6.967 0 006.906-6H11v-2h11.938c-.081-1.241-.277-2.207-.563-3H9.656z"}})])
          )
        }
      }
    

/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "490c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6e35");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "49b7":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 5h2v2h8.469l.281.344 3.563 4.156-3.563 4.156-.281.344H5V7h10V5zM7 9v5h17.531l2.156-2.5L24.531 9H7zm8 8h2v10h-2V17z"}})])
          )
        }
      }
    

/***/ }),

/***/ "4acc":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 15h22v2H5v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "4b04":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4.75 7h2.219c.918 0 1.716.61 1.938 1.5L11.532 19h11.469l1.906-7H11.251l-.5-2h16.75l-2.594 9.531A1.969 1.969 0 0123.001 21H11.532c-.917 0-1.714-.61-1.938-1.5L6.969 9H4.75a1 1 0 010-2zm17 14c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm-9 0c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm0 2c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1zm9 0c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})])
          )
        }
      }
    

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

/***/ "4cf4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4e9c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "--color-neutral-0": "rgb(255, 255, 255)",
  "--color-neutral-10": "rgb(228, 228, 231)",
  "--color-neutral-20": "rgb(201, 201, 207)",
  "--color-neutral-30": "rgb(174, 174, 183)",
  "--color-neutral-40": "rgb(147, 147, 159)",
  "--color-neutral-50": "rgb(120, 120, 135)",
  "--color-neutral-60": "rgb(108, 108, 122)",
  "--color-neutral-70": "rgb(96, 96, 108)",
  "--color-neutral-80": "rgb(72, 72, 81)",
  "--color-neutral-85": "rgb(58, 58, 65)",
  "--color-neutral-90": "rgb(48, 48, 54)",
  "--color-neutral-95": "rgb(38, 38, 43)",
  "--color-neutral-100": "rgb(34, 34, 38)",
  "--color-primary": "rgb(114, 136, 218)",
  "--color-primary-active": "rgb(102, 126, 214)",
  "--color-primary-inverse": "rgb(247, 248, 253)",
  "--color-secondary": "rgb(63, 171, 123)",
  "--color-secondary-active": "rgb(76, 189, 138)",
  "--color-secondary-inverse": "rgb(248, 252, 250)",
  "--color-success": "rgb(79, 172, 32)",
  "--color-success-active": "rgb(88, 194, 36)",
  "--color-success-inverse": "rgb(249, 253, 246)",
  "--color-danger": "rgb(230, 36, 25)",
  "--color-danger-active": "rgb(233, 62, 53)",
  "--color-danger-inverse": "rgb(254, 246, 246)",
  "--color-warning": "rgb(230, 121, 25)",
  "--color-warning-active": "rgb(233, 137, 53)",
  "--color-warning-inverse": "rgb(254, 250, 246)",
  "--color-yellow": "rgb(245, 196, 0)",
  "--color-yellow-active": "rgb(255, 206, 10)",
  "--color-yellow-inverse": "rgb(255, 253, 245)",
  "--text-color-base": "rgb(228, 228, 231)",
  "--text-color-soft": "rgb(174, 174, 183)",
  "--text-color-softer": "rgb(120, 120, 135)",
  "--text-color-disabled": "rgb(120, 120, 135)",
  "--text-color-inverse": "rgb(38, 38, 43)",
  "--text-color-link": "rgb(114, 136, 218)",
  "--text-color-link-active": "rgb(102, 126, 214)",
  "--text-color-primary": "rgb(114, 136, 218)",
  "--text-color-primary-inverse": "rgb(247, 248, 253)",
  "--text-color-secondary": "rgb(63, 171, 123)",
  "--text-color-secondary-inverse": "rgb(248, 252, 250)",
  "--text-color-success": "rgb(79, 172, 32)",
  "--text-color-success-inverse": "rgb(249, 253, 246)",
  "--text-color-warning": "rgb(230, 121, 25)",
  "--text-color-warning-inverse": "rgb(254, 250, 246)",
  "--text-color-danger": "rgb(230, 36, 25)",
  "--text-color-danger-inverse": "rgb(254, 246, 246)",
  "--background-color-base": "rgb(34, 34, 38)",
  "--background-color-soft": "rgb(38, 38, 43)",
  "--background-color-softer": "rgb(48, 48, 54)",
  "--background-color-softer-active": "rgb(38, 38, 43)",
  "--background-color-softest": "rgb(58, 58, 65)",
  "--background-color-softest-active": "rgb(48, 48, 54)",
  "--background-color-inverse": "rgb(255, 255, 255)",
  "--background-color-inverse-soft": "rgb(228, 228, 231)",
  "--background-color-inverse-softer": "rgb(201, 201, 207)",
  "--background-color-inverse-softer-active": "rgb(174, 174, 183)",
  "--background-color-primary": "rgb(114, 136, 218)",
  "--background-color-primary-active": "rgb(102, 126, 214)",
  "--background-color-primary-inverse": "rgb(247, 248, 253)",
  "--background-color-secondary": "rgb(63, 171, 123)",
  "--background-color-secondary-active": "rgb(76, 189, 138)",
  "--background-color-secondary-inverse": "rgb(248, 252, 250)",
  "--background-color-success": "rgb(79, 172, 32)",
  "--background-color-success-active": "rgb(88, 194, 36)",
  "--background-color-success-inverse": "rgb(249, 253, 246)",
  "--background-color-warning": "rgb(230, 121, 25)",
  "--background-color-warning-active": "rgb(233, 137, 53)",
  "--background-color-warning-inverse": "rgb(254, 250, 246)",
  "--background-color-danger": "rgb(230, 36, 25)",
  "--background-color-danger-active": "rgb(233, 62, 53)",
  "--background-color-danger-inverse": "rgb(254, 246, 246)",
  "--border-color-base": "rgb(108, 108, 122)",
  "--border-color-soft": "rgb(96, 96, 108)",
  "--border-color-softer": "rgb(72, 72, 81)",
  "--border-color-active": "rgb(114, 136, 218)",
  "--border-color-primary": "rgb(114, 136, 218)",
  "--border-color-success": "rgb(79, 172, 32)",
  "--border-color-warning": "rgb(230, 121, 25)",
  "--border-color-danger": "rgb(230, 36, 25)",
  "--font-family-heading": "Whitney,Helvetica Neue,Helvetica,Arial,sans-serif",
  "--font-family-text": "Whitney,Helvetica Neue,Helvetica,Arial,sans-serif",
  "--font-family-code": "inconsolata, monospace",
  "--font-weight-regular": "normal",
  "--font-weight-bold": "700",
  "--box-shadow-large": "0 20px 60px 0 rgba(0, 0, 0, .5)",
  "--box-shadow-base": "0px 12px 26px -4px rgba(0, 0, 0, .5)",
  "--box-shadow-small": "0px 8px 18px -2px rgba(0, 0, 0, .5)",
  "--box-shadow-x-small": "0px 0px 3px 0px rgba(0, 0, 0, .5)",
  "--box-shadow-active": "0 0 6px 1px rgba(20, 100, 160, 0.5)",
  "--box-shadow-inset": "inset 0 0 20px 1px rgba(0,0,0,.15)",
  "--box-shadow-small-inset": "inset 0 0 0 1px rgba(0,0,0,.05)"
});

/***/ }),

/***/ "5073":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsPage","description":"This component is used to layout a page.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"contained","description":"Whether the layout should have a maximum width","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"slots":[{"name":"brand","description":"Content of the page's brand"},{"name":"navbar","description":"Content of the navbar"},{"name":"sidebar","description":"Content of the sidebar"},{"name":"drawer","description":"Content of the drawer (mobile navigation)"},{"name":"default"}]}

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "50d2":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2 5h20v16h-9.656l-4.719 3.781L6 26.094V21H2V5zm2 2v12h4v2.906l3.375-2.688.281-.219H20v-12H4zm20 2h6v16h-4v5.094L19.656 25h-9.313l2.5-2h7.5l3.656 2.906V23h4V11h-4V9z"}})])
          )
        }
      }
    

/***/ }),

/***/ "50fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5135":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "518d":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 5h6v6H4V5zm2 2v2h2V7H6zm6 0h15v2H12V7zm-8 6h6v6H4v-6zm2 2v2h2v-2H6zm6 0h15v2H12v-2zm-8 6h6v6H4v-6zm2 2v2h2v-2H6zm6 0h15v2H12v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5270":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsIcon","description":"Icons are used to add meaning and improve accessibility.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"name","description":"The name of the icon.","type":{"name":"string"},"required":true},{"name":"ariaLabel","description":"Descriptive text to be read to screenreaders.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'icon'"}},{"name":"tag","description":"The html element name used for the icon.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'span'"}}]}

/***/ }),

/***/ "52f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const valueOf = Symbol.prototype.valueOf;
const typeOf = __webpack_require__("ef5d");

function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default: {
      return val;
    }
  }
}

function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : (/\w+$/.exec(val) || void 0);
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}

function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}

function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}

function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}

function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var fails = __webpack_require__("d039");
var anObject = __webpack_require__("825a");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");
var wellKnownSymbol = __webpack_require__("b622");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = toString(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "5343":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsMenuItem","description":"Used in combination with the menu item to help the user navigate.","tags":{"version":[{"description":"1.0.0","title":"version"}],"see":[{"description":"DsMenu","title":"see"}]},"exportName":"default","props":[{"name":"route","description":"The route to display","type":{"name":"object"},"defaultValue":{"func":false,"value":"null"}},{"name":"parents","description":"The parents of this route","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}},{"name":"linkTag","description":"The component / tag used for the link of this route","tags":{},"values":["router-link","a"],"type":{"name":"string"},"defaultValue":{"func":true,"value":"function() {\n  return this.$parentMenu.linkTag\n    ? this.$parentMenu.linkTag\n    : 'router-link'\n}"}}],"events":[{"name":"click","description":"Handles click on menu item.\nReceives two arguments:\nevent, route object","type":{"names":["undefined"]},"properties":[{"type":{"names":["undefined"]},"name":"<anonymous1>"}]}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "535a":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 3h2v5h-2V3zM7.5 6.094l3.563 3.531-1.438 1.438L6.094 7.5zm17 0L25.906 7.5l-3.531 3.563-1.438-1.438zM16 9c3.854 0 7 3.146 7 7s-3.146 7-7 7-7-3.146-7-7 3.146-7 7-7zm0 2c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zM3 15h5v2H3v-2zm21 0h5v2h-5v-2zM9.625 20.938l1.438 1.438L7.5 25.907l-1.406-1.406zm12.75 0l3.531 3.563-1.406 1.406-3.563-3.531zM15 24h2v5h-2v-5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "53ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d28b");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "54e0":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm10 7h4v2h-2v4.5c0 1.383-1.117 2.5-2.5 2.5-.386 0-.604-.283-.906-.469-.408.824-1.11 1.469-2.094 1.469a2.497 2.497 0 01-2.5-2.5V15H9v-2h4v6.5c0 .217.283.5.5.5s.5-.283.5-.5V15h2v2s.007.652.156 1.25c.075.299.198.577.281.688s.021.063.063.063c.217 0 .5-.283.5-.5v-6.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5530":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _objectSpread2; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js








function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "568f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M13.188 3h5.625l.156.813.594 2.969a9.951 9.951 0 012.594 1.531l2.906-1 .781-.25.406.719 2 3.438.406.719-.594.531-2.25 1.969c.084.513.188 1.022.188 1.563s-.104 1.05-.188 1.563l2.25 1.969.594.531-.406.719-2 3.438-.406.719-.781-.25-2.906-1a9.935 9.935 0 01-2.594 1.531l-.594 2.969-.156.813h-5.625l-.156-.813-.594-2.969a9.951 9.951 0 01-2.594-1.531l-2.906 1-.781.25-.406-.719-2-3.438-.406-.719.594-.531 2.25-1.969c-.084-.513-.188-1.022-.188-1.563s.104-1.05.188-1.563l-2.25-1.969-.594-.531.406-.719 2-3.438.406-.719.781.25 2.906 1a9.935 9.935 0 012.594-1.531l.594-2.969zm1.625 2l-.5 2.594-.125.594-.563.188a7.964 7.964 0 00-3.031 1.75l-.438.406-.563-.188-2.531-.875L5.874 11.5l2 1.781.469.375-.156.594c-.128.57-.188 1.153-.188 1.75s.06 1.18.188 1.75l.156.594-.469.375-2 1.781 1.188 2.031 2.531-.875.563-.188.438.406a7.979 7.979 0 003.031 1.75l.563.188.125.594.5 2.594h2.375l.5-2.594.125-.594.563-.188a7.964 7.964 0 003.031-1.75l.438-.406.563.188 2.531.875 1.188-2.031-2-1.781-.438-.375.125-.594c.128-.572.188-1.153.188-1.75s-.06-1.18-.188-1.75l-.156-.594.469-.375 2-1.781-1.188-2.031-2.531.875-.563.188-.438-.406a7.979 7.979 0 00-3.031-1.75l-.563-.188-.125-.594-.5-2.594h-2.375zM16 11c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 2c-1.669 0-3 1.331-3 3s1.331 3 3 3 3-1.331 3-3-1.331-3-3-3z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.17.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56e3":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M20 3c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm0 2c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1zm-5.469 2.781c.404-.046.828.057 1.188.25V8l1.688.938a3 3 0 011.406 3.656l-1.156 3.219a7.023 7.023 0 011.656 2.188h1.875c.934 0 1.77.648 1.969 1.563l1.313 6.094-1.938.438-1.344-6.094h-1.281c.047.327.094.66.094 1 0 3.854-3.146 7-7 7s-7-3.146-7-7c0-3.514 2.617-6.417 6-6.906L13.47 9.94l-2.281.25-2.5 3.844-1.688-1.063 2.5-3.875a1.978 1.978 0 011.438-.906zm1 2.407l-1.438 3.906a6.948 6.948 0 011.844.563l1-2.75a.986.986 0 00-.469-1.219zM13 16c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "56f8":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c2.25 0 3.764.886 5.125 1.625S23.731 7 26 7h1v1c0 7.745-2.608 12.78-5.25 15.813s-5.375 4.125-5.375 4.125l-.375.125-.375-.125s-2.734-1.118-5.375-4.156S5 15.719 5 8.001v-1h1c2.282 0 3.517-.637 4.875-1.375S13.75 4.001 16 4.001zm0 2c-1.75 0-2.755.613-4.156 1.375a12.508 12.508 0 01-4.781 1.469c.192 6.736 2.429 11.027 4.688 13.625 2.046 2.354 3.763 3.156 4.25 3.375.486-.217 2.205-.997 4.25-3.344 2.258-2.591 4.497-6.892 4.688-13.656a12.531 12.531 0 01-4.781-1.469C18.755 6.614 17.752 6 16.002 6z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5700":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15.999 4C22.627 4 28 9.373 28 16.001c0 5.3-3.435 9.794-8.2 11.385-.609.117-.825-.256-.825-.577 0-.394.015-1.688.015-3.292 0-1.119-.384-1.852-.815-2.222 2.673-.297 5.479-1.311 5.479-5.921 0-1.31-.464-2.381-1.233-3.22.124-.304.536-1.524-.119-3.176 0 0-1.006-.323-3.297 1.23a11.528 11.528 0 00-3.004-.404c-1.02.005-2.047.138-3.004.404-2.292-1.553-3.3-1.23-3.3-1.23-.653 1.652-.241 2.872-.118 3.176-.767.839-1.235 1.91-1.235 3.22 0 4.599 2.801 5.628 5.466 5.931-.343.3-.653.829-.762 1.604-.683.307-2.422.837-3.492-.997 0 0-.634-1.152-1.838-1.237 0 0-1.172-.016-.082.729 0 0 .786.369 1.332 1.755 0 0 .704 2.334 4.042 1.609.006 1.001.016 1.756.016 2.041 0 .318-.219.688-.819.578C7.438 25.8 4 21.302 4 16.001 4 9.373 9.373 4 15.999 4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("d9b5");

module.exports = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "5797":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3 7h26v2H3V7zm0 4h18v2H3v-2zm0 4h26v2H3v-2zm0 4h18v2H3v-2zm0 4h26v2H3v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5834":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 5h2v10h10v2H17v10h-2V17H5v-2h10V5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5842":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 4h2v16.563l5.281-5.281 1.438 1.438-7 7-.719.688-.719-.688-7-7 1.438-1.438L15 20.563V4zM7 26h18v2H7v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "58aa":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm7.406 5.344h.031c.33.007.656.135.906.344.257.215.428.498.531.781.207.567.235 1.188.188 1.906-.039.595-.326 1.352-.469 2.031.187.42.248.774.469 1.188.409.766.86 1.217 1.313 1.813.517-.027 1.127-.182 1.563-.125.567.074 1.089.186 1.5.625.206.22.369.553.375.875s-.098.607-.25.875v.031h-.031c-.345.586-.969.976-1.594.938s-1.148-.368-1.625-.781c-.236-.205-.429-.616-.656-.875-.529.06-.906-.001-1.469.125-.537.12-.902.332-1.406.5-.334.672-.599 1.509-.969 2-.4.531-.818.984-1.406 1.188-.294.102-.645.097-.969-.031s-.566-.349-.75-.625c-.372-.529-.404-1.263-.125-1.781s.747-.887 1.281-1.219c.496-.308 1.245-.45 1.875-.688.276-.598.576-.984.813-1.656.275-.783.321-1.455.5-2.219-.35-.837-.787-1.712-.938-2.438-.128-.62-.169-1.181-.031-1.719.069-.269.184-.535.438-.75.246-.208.601-.317.906-.313zm.657 7.406c-.06.184-.061.348-.125.531-.055.157-.13.252-.188.406.048-.011.077-.052.125-.063.285-.064.499-.012.781-.063-.193-.295-.413-.496-.594-.813zm3.687 2.031c-.064-.008-.211.037-.281.031.243.17.495.308.563.313.08.005.096.018.219-.188.012-.021-.007-.015 0-.031-.045-.019-.163-.081-.5-.125zm-7 1.563c-.031.019-.095.044-.125.063-.409.254-.646.522-.719.656s-.103.072 0 .219h.031c.02.03-.012.018 0 .031.071-.03.351-.219.656-.625.054-.072.101-.262.156-.344z"}})])
          )
        }
      }
    

/***/ }),

/***/ "59c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3163");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5a14":
/***/ (function(module, exports) {

module.exports = {"description":"Used for handling basic user input.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","displayName":"DsInput","docsBlocks":[""],"props":[{"name":"value","mixin":{"name":"input","path":"../shared/input.js"},"description":"The value of the input. Can be passed via v-model.","type":{"name":"string|object|number|array"},"defaultValue":{"func":false,"value":"null"}},{"name":"model","mixin":{"name":"input","path":"../shared/input.js"},"description":"The model name when used within a form component. Uses dot notation.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"name","mixin":{"name":"input","path":"../shared/input.js"},"description":"Name to use on the input for accessibility","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"label","mixin":{"name":"input","path":"../shared/input.js"},"description":"The label of the input.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"id","mixin":{"name":"input","path":"../shared/input.js"},"description":"The id of the input.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"disabled","mixin":{"name":"input","path":"../shared/input.js"},"description":"Whether the input is disabled or not.","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"readonly","mixin":{"name":"input","path":"../shared/input.js"},"description":"Whether the input should be read-only","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"schema","mixin":{"name":"input","path":"../shared/input.js"},"description":"The async-validator schema used for the input.","tags":{"default":[{"description":"null","title":"default"}]},"type":{"name":"object"},"defaultValue":{"func":true,"value":"() => null"}},{"name":"size","mixin":{"name":"input","path":"../shared/input.js"},"description":"The input's size.","tags":{},"values":["small","base","large"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'base'"}},{"name":"tabindex","mixin":{"name":"input","path":"../shared/input.js"},"type":{"name":"number"},"defaultValue":{"func":false,"value":"0"}},{"name":"type","description":"The type of this input.","tags":{},"values":["url","text","password","email","search","textarea"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'text'"}},{"name":"placeholder","description":"The placeholder shown when value is empty.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"autofocus","description":"Whether the input should be automatically focused","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"rows","description":"How many rows this input should have (only for type=\"textarea\")","type":{"name":"string|number"},"defaultValue":{"func":false,"value":"1"}},{"name":"icon","description":"The name of the input's icon.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"iconRight","description":"The name of the input's right icon.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}}],"events":[{"name":"input","mixin":{"name":"input","path":"../shared/input.js"},"description":"Fires after user input.\nReceives the value as the only argument.","type":{"names":["undefined"]}}]}

/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5acc":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3c7.168 0 13 5.832 13 13s-5.832 13-13 13S3 23.168 3 16 8.832 3 16 3zm-1.125 2.063a10.967 10.967 0 00-9.813 9.938H6v2h-.938A10.957 10.957 0 0015 26.939v-.938h2v.938a10.957 10.957 0 009.938-9.938H26v-2h.938A10.957 10.957 0 0017 5.063v.938h-2v-.938c-.041.004-.084-.004-.125 0zm7.219 4.843l-3.688 8.5-8.5 3.688 3.688-8.5zM16 14.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5b29":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5bbb":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2 5h28v22H2V5zm2 2v12.875l7-7 .719.719 5.75 5.813L22 14.876l.719.719L28 20.908V7.002H4zm20 2a2 2 0 11.001 3.999A2 2 0 0124 9zm-13 6.719l-7 7V25h16.188zm11 2l-3.125 3.094 4.156 4.188H28V23.72z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5c09":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 4.594v22.813l-1.719-1.688L8.562 21H3.999V11h4.563l4.719-4.719zm-2 4.844l-3.281 3.281-.313.281H6v6h3.406l.313.281L13 22.562V9.437zm5.5 2.593C19.439 13.09 20 14.477 20 16s-.561 2.91-1.5 3.969l-1.438-1.438C17.64 17.837 18 16.972 18 16s-.36-1.837-.938-2.531z"}})])
          )
        }
      }
    

/***/ }),

/***/ "5c6c":
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

/***/ "5c79":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ec0a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5d84":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/PageTitle/PageTitle.vue?vue&type=template&id=c721e606&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-page-title",class:[_vm.highlight && "ds-page-title-highlight"]},[_c('ds-container',[_c('ds-heading',[_vm._v(" "+_vm._s(_vm.heading)+" ")]),_vm._t("default")],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/PageTitle/PageTitle.vue?vue&type=template&id=c721e606&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/PageTitle/PageTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/PageTitle/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPageTitle%2FPageTitle.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/PageTitle/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPageTitle%2FPageTitle.vue
 /* harmony default export */ var PageTitle_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle); 
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

if (typeof PageTitle_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle === 'function') PageTitle_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPageTitle_2FPageTitle(component)

/* harmony default export */ var PageTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5d8b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Flex/FlexItem.vue?vue&type=template&id=71eb1229&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-flex-item",style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Flex/FlexItem.vue?vue&type=template&id=71eb1229&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./src/system/utils/index.js
var utils = __webpack_require__("2b4b");

// EXTERNAL MODULE: ./src/system/mixins/index.js + 1 modules
var mixins = __webpack_require__("cabe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Flex/FlexItem.vue?vue&type=script&lang=js&


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
     * The item's width
     * @default 1
     */
    width: {
      type: [String, Number, Object],
      default: function _default() {
        return this.$parentFlex ? this.$parentFlex.width : 1;
      }
    },

    /**
     * The outtermost html tag
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
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, widthStyle), gutterStyle);
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
        paddingLeft: "calc(".concat(realGutter, " / 2 * 1px)"),
        paddingRight: "calc(".concat(realGutter, " / 2 * 1px)"),
        marginBottom: "calc(".concat(realGutter, " * 1px)")
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

/* harmony default export */ var FlexItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5d96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/FormItem.vue?vue&type=template&id=1c0577fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ds-form-item",class:_vm.$parentInput.stateClasses},[_c('ds-input-label',{attrs:{"label":_vm.$parentInput.label,"for":_vm.$parentInput.id}}),_vm._t("default"),_c('ds-input-error',{attrs:{"error":_vm.$parentInput.error}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/FormItem.vue?vue&type=template&id=1c0577fe&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/FormItem.vue?vue&type=script&lang=js&
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
// EXTERNAL MODULE: ./src/system/components/data-input/FormItem/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("59c4");

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

/* harmony default export */ var FormItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6038":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M19.031 4.281l1.438 1.438L10.188 16l10.281 10.281-1.438 1.438-11-11L7.343 16l.688-.719z"}})])
          )
        }
      }
    

/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6069":
/***/ (function(module, exports) {

module.exports = typeof window == 'object';


/***/ }),

/***/ "60c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Container/Container.vue?vue&type=template&id=12c9d658&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-container",class:[("ds-container-" + _vm.width), _vm.centered && "ds-container-centered"]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Container/Container.vue?vue&type=template&id=12c9d658&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Container/Container.vue?vue&type=script&lang=js&


//
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
 * This component is used as a wrapper for the page's content.
 * @version 1.0.0
 */
/* harmony default export */ var Containervue_type_script_lang_js_ = ({
  name: 'DsContainer',
  props: {
    /**
     * The outtermost html tag
     */
    tag: {
      type: String,
      default: 'div'
    },

    /**
     * The maximum width the container will take.
     * The widths correspond to the different media breakpoints.
     * @values x-small, small, medium, large, x-large
     */
    width: {
      type: String,
      default: 'x-large',
      validator: function validator(value) {
        return value.match(/(x-small|small|medium|large|x-large)/);
      }
    },

    /**
     * Center the content
     */
    centered: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Container/Container.vue?vue&type=script&lang=js&
 /* harmony default export */ var Container_Containervue_type_script_lang_js_ = (Containervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/Container/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("fbc9");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Container/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FContainer%2FContainer.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Container/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FContainer%2FContainer.vue
 /* harmony default export */ var Container_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer); 
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

if (typeof Container_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer === 'function') Container_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FContainer_2FContainer(component)

/* harmony default export */ var Container = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "61b2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6290");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6290":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "62c7":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 5h12v2H4V5zm17 0h2v18.688l2.594-2.594L27 22.5l-4.281 4.313-.719.688-.719-.688L17 22.5l1.406-1.406L21 23.688V5zM4 9h10v2H4V9zm0 4h8v2H4v-2zm0 4h6v2H4v-2zm0 4h4v2H4v-2zm0 4h2v2H4v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.codePointAt` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6548":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea1f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "657c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 5h18c1.645 0 3 1.355 3 3v1h1c1.645 0 3 1.355 3 3v12c0 1.645-1.355 3-3 3H9c-1.645 0-3-1.355-3-3v-1H5c-1.645 0-3-1.355-3-3V8c0-1.645 1.355-3 3-3zm0 2c-.565 0-1 .435-1 1v12c0 .565.435 1 1 1h18c.565 0 1-.435 1-1v-9H5V9h19V8c0-.565-.435-1-1-1H5zm21 4v2h2v-1c0-.565-.435-1-1-1h-1zm0 4v5c0 1.645-1.355 3-3 3H8v1c0 .565.435 1 1 1h18c.565 0 1-.435 1-1v-9h-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "65d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e5b9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "66af":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7.156 5h17.688l.156.844 2 13V27H5v-8.156l2-13zm1.719 2L7.187 18H14v1c0 1.117.883 2 2 2s2-.883 2-2v-1h6.813L23.125 7H8.875zM7 20v5h18v-5h-5.188c-.453 1.711-1.966 3-3.813 3s-3.359-1.289-3.813-3H6.998z"}})])
          )
        }
      }
    

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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2 8h22v3.375l6-3v15.25l-6-3V24H2V8zm2 2v12h18V10H4zm24 1.625l-4 2v4.75l4 2v-8.75z"}})])
          )
        }
      }
    

/***/ }),

/***/ "6875":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Input/Input.vue?vue&type=template&id=a27480ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ds-form-item',[_c('div',{staticClass:"ds-input-wrap"},[(_vm.icon)?_c('div',{staticClass:"ds-input-icon"},[_c('ds-icon',{attrs:{"name":_vm.icon}})],1):_vm._e(),_c(_vm.tag,{tag:"component",staticClass:"ds-input",class:[
        _vm.icon && "ds-input-has-icon",
        _vm.iconRight && "ds-input-has-icon-right" ],attrs:{"id":_vm.id,"name":_vm.name ? _vm.name : _vm.model,"type":_vm.type,"autofocus":_vm.autofocus,"placeholder":_vm.placeholder,"tabindex":_vm.tabindex,"disabled":_vm.disabled,"readonly":_vm.readonly,"rows":_vm.type === 'textarea' ? _vm.rows : null},domProps:{"value":_vm.innerValue,"innerHTML":_vm._s(_vm.type === 'textarea' ? _vm.innerValue : null)},on:{"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur}}),(_vm.iconRight)?_c('div',{staticClass:"ds-input-icon-right"},[_c('ds-icon',{attrs:{"name":_vm.iconRight}})],1):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/Input/Input.vue?vue&type=template&id=a27480ba&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./src/system/components/data-input/shared/input.js
var input = __webpack_require__("33ba");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Input/Input.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
     * The type of this input.
     * @values url, text, password, email, search, textarea
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-input/Input/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FInput%2FInput.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-input/Input/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FInput%2FInput.vue
 /* harmony default export */ var Input_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput); 
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

if (typeof Input_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput === 'function') Input_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FInput_2FInput(component)

/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6983":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6a98":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M17 4h.625l1.063 2.125c1.277.14 2.567.598 3.531 1.719C23.357 9.166 24 11.176 24 14v.906c.571.546 1 1.247 1 2.094 0 1.26-.891 2.154-2 2.594a39.003 39.003 0 01-1.25 3.438c-.487 1.141-.894 2.047-1.5 2.688a7.19 7.19 0 01-10.5 0c-.606-.64-1.045-1.547-1.531-2.688-.446-1.045-.849-2.27-1.219-3.438C5.891 19.155 5 18.26 5 17c0-.851.428-1.549 1-2.094V14c0-3.042.821-5.612 2.688-7.375S13.335 4 17.001 4zm-.594 2.063c-2.973.1-5.062.789-6.344 2-1.378 1.302-2.063 3.241-2.063 5.938v1.844l-.5.281a.997.997 0 00-.5.875c0 .534.384.957.906 1l.688.031.188.656c.37 1.203.831 2.474 1.281 3.531s.967 1.957 1.125 2.125c2.128 2.252 5.497 2.252 7.625 0 .158-.168.674-1.068 1.125-2.125s.911-2.328 1.281-3.531l.188-.656.688-.031a.98.98 0 00.906-1 .995.995 0 00-.5-.875l-.5-.281v-1.844c0-2.518-.587-4.001-1.313-4.844a3.19 3.19 0 00-1.188-.875c.024.149.058.291.063.438.019.67-.279 1.354-.75 1.75-.941.792-2.05.727-3.125.781s-2.174.128-2.813.375-.867.389-.875 1.375h-2c.013-1.623 1.015-2.808 2.156-3.25s2.365-.416 3.406-.469 1.882-.271 1.969-.344c.043-.037.037.047.031-.156s-.135-.677-.469-1.344zM12 16a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "6ab6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return tokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tokenMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return themeMap; });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a434");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1276");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("b64b");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("bba4");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _generated_tokens_raw_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("804f");
var _generated_tokens_raw_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t("804f", 1);












var themeContext = __webpack_require__("0f76");

var themes = [];
var themeMap = {};
themeContext.keys().forEach(function (key) {
  var theme = themeContext(key).default;
  var name = key.split('.').splice(-2)[0].replace('/', '');
  themes.push(name);
  themeMap[name] = theme;
});

var _Object$keys$reduce = Object.keys(_generated_tokens_raw_json__WEBPACK_IMPORTED_MODULE_10__.props).reduce(function (_ref, key) {
  var tokens = _ref.tokens,
      tokenMap = _ref.tokenMap;
  var token = _generated_tokens_raw_json__WEBPACK_IMPORTED_MODULE_10__.props[key];
  var name = lodash_camelCase__WEBPACK_IMPORTED_MODULE_9___default()(key);
  var category = lodash_camelCase__WEBPACK_IMPORTED_MODULE_9___default()(token.category);

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

/***/ "6bd3":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsText","description":"Text is used for styling and grouping paragraphs or words.\nDefaults to a `p` tag. If nested inside of another text\ncomponent it defaults to a `span` tag.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"color","description":"The color used for the text.","tags":{},"values":["default","soft","softer","primary","inverse","success","warning","danger"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"bold","description":"Whether the text is bold.","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"null"}},{"name":"inline","description":"Whether the text is inline.","tags":{"default":[{"description":"false","title":"default"}]},"type":{"name":"boolean"},"defaultValue":{"func":true,"value":"function() {\n  return !!this.$parentText\n}"}},{"name":"size","description":"The size used for the text.","tags":{},"values":["small","base","large","x-large"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"tag","description":"The html tag used for the text.","tags":{"default":[{"description":"p","title":"default"}]},"type":{"name":"string"},"defaultValue":{"func":true,"value":"function() {\n  return this.inline ? 'span' : 'p'\n}"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "6bdb":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7 5h18v23l-1.594-1.188L16 21.249l-7.406 5.563L7 28V5zm2 2v17l6.406-4.813.594-.438.594.438L23 24V7H9z"}})])
          )
        }
      }
    

/***/ }),

/***/ "6c19":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3 6h26v20h-9.563l-2.719 2.719-.719.688-.719-.688L12.561 26H2.998V6zm2 2v16h8.406l.313.281L16 26.562l2.281-2.281.313-.281H27V8H5zm4 3h14v2H9v-2zm0 4h14v2H9v-2zm0 4h10v2H9v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "6c24":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6d10":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 5h22v22H5V5zm2 2v5h5V7H7zm7 0v5h4V7h-4zm6 0v5h5V7h-5zM7 14v4h5v-4H7zm7 0v4h4v-4h-4zm6 0v4h5v-4h-5zM7 20v5h5v-5H7zm7 0v5h4v-5h-4zm6 0v5h5v-5h-5z"}})])
          )
        }
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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6 4h20v8l-2-2V6H8v20h16v-4l2-2v8H6V4zm16.406 7l4.313 4.281.688.719-.688.719L22.406 21 21 19.594 23.563 17h-9.656v-2h9.656L21 12.406z"}})])
          )
        }
      }
    

/***/ }),

/***/ "6dc6":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M13 4h6c1.093 0 2 .907 2 2v12c0 1.093-.907 2-2 2h-6c-1.093 0-2-.907-2-2V6c0-1.093.907-2 2-2zm0 2v12h6V6h-6zm-6 8h2v4c0 2.22 1.78 4 4 4h6c2.22 0 4-1.78 4-4v-4h2v4c0 3.302-2.698 6-6 6h-2v2h4v2H11v-2h4v-2h-2c-3.302 0-6-2.698-6-6v-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "6e35":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6ee3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Flex/Flex.vue?vue&type=template&id=1b9a614e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-flex",style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Flex/Flex.vue?vue&type=template&id=1b9a614e&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./src/system/utils/index.js
var utils = __webpack_require__("2b4b");

// EXTERNAL MODULE: ./src/system/mixins/index.js + 1 modules
var mixins = __webpack_require__("cabe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Flex/Flex.vue?vue&type=script&lang=js&


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
     * Default gutter size of columns
     */
    gutter: {
      type: [String, Object],
      default: null
    },

    /**
     * Default width of columns
     */
    width: {
      type: [String, Number, Object],
      default: 1
    },

    /**
     * Direction of the flex items
     * @values row, row-reverse, column, column-reverse
     */
    direction: {
      type: [String, Object],
      default: null
    },

    /**
     * The outtermost html tag
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
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, gutterStyle), directionStyle);
    }
  },
  methods: {
    parseGutter: function parseGutter(gutter) {
      var realGutter = Object(utils["getSpace"])(gutter);
      return {
        marginLeft: "calc(".concat(realGutter, " / 2 * -1px)"),
        marginRight: "calc(".concat(realGutter, " / 2 * -1px)")
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Flex/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FFlex%2FFlex.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Flex/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FFlex%2FFlex.vue
 /* harmony default export */ var Flex_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex); 
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

if (typeof Flex_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex === 'function') Flex_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FFlex_2FFlex(component)

/* harmony default export */ var Flex = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f2e":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3 6h26v20H3V6zm2 2v4h22V8H5zm2 1h8v2H7V9zm17 0a1 1 0 110 2 1 1 0 010-2zM5 14v4h22v-4H5zm2 1h8v2H7v-2zm17 0a1 1 0 110 2 1 1 0 010-2zM5 20v4h22v-4H5zm2 1h8v2H7v-2zm17 0a1 1 0 110 2 1 1 0 010-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "6fb9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "--color-neutral-0": "rgb(14, 20, 26)",
  "--color-neutral-10": "rgb(22, 31, 39)",
  "--color-neutral-20": "rgb(43, 61, 79)",
  "--color-neutral-30": "rgb(58, 82, 105)",
  "--color-neutral-40": "rgb(76, 107, 138)",
  "--color-neutral-50": "rgb(104, 138, 172)",
  "--color-neutral-60": "rgb(143, 168, 193)",
  "--color-neutral-70": "rgb(189, 204, 219)",
  "--color-neutral-80": "rgb(222, 230, 237)",
  "--color-neutral-85": "rgb(235, 240, 244)",
  "--color-neutral-90": "rgb(242, 245, 248)",
  "--color-neutral-95": "rgb(248, 250, 251)",
  "--color-neutral-100": "rgb(255, 255, 255)",
  "--color-primary": "rgb(12, 182, 154)",
  "--color-primary-active": "rgb(10, 163, 138)",
  "--color-primary-inverse": "rgb(241, 254, 252)",
  "--color-secondary": "rgb(213, 16, 115)",
  "--color-secondary-active": "rgb(238, 27, 133)",
  "--color-secondary-inverse": "rgb(254, 241, 247)",
  "--color-success": "rgb(79, 172, 32)",
  "--color-success-active": "rgb(88, 194, 36)",
  "--color-success-inverse": "rgb(246, 253, 242)",
  "--color-danger": "rgb(210, 53, 45)",
  "--color-danger-active": "rgb(216, 77, 70)",
  "--color-danger-inverse": "rgb(252, 243, 242)",
  "--color-warning": "rgb(230, 121, 25)",
  "--color-warning-active": "rgb(233, 137, 53)",
  "--color-warning-inverse": "rgb(253, 247, 241)",
  "--color-yellow": "rgb(245, 196, 0)",
  "--color-yellow-active": "rgb(255, 206, 10)",
  "--color-yellow-inverse": "rgb(255, 252, 240)",
  "--text-color-base": "rgb(43, 61, 79)",
  "--text-color-soft": "rgb(76, 107, 138)",
  "--text-color-softer": "rgb(143, 168, 193)",
  "--text-color-disabled": "rgb(143, 168, 193)",
  "--text-color-inverse": "rgb(248, 250, 251)",
  "--text-color-link": "rgb(12, 182, 154)",
  "--text-color-link-active": "rgb(10, 163, 138)",
  "--text-color-primary": "rgb(12, 182, 154)",
  "--text-color-primary-inverse": "rgb(241, 254, 252)",
  "--text-color-secondary": "rgb(213, 16, 115)",
  "--text-color-secondary-inverse": "rgb(254, 241, 247)",
  "--text-color-success": "rgb(79, 172, 32)",
  "--text-color-success-inverse": "rgb(246, 253, 242)",
  "--text-color-warning": "rgb(230, 121, 25)",
  "--text-color-warning-inverse": "rgb(253, 247, 241)",
  "--text-color-danger": "rgb(210, 53, 45)",
  "--text-color-danger-inverse": "rgb(252, 243, 242)",
  "--background-color-base": "rgb(255, 255, 255)",
  "--background-color-soft": "rgb(248, 250, 251)",
  "--background-color-softer": "rgb(242, 245, 248)",
  "--background-color-softer-active": "rgb(248, 250, 251)",
  "--background-color-softest": "rgb(235, 240, 244)",
  "--background-color-softest-active": "rgb(242, 245, 248)",
  "--background-color-inverse": "rgb(14, 20, 26)",
  "--background-color-inverse-soft": "rgb(22, 31, 39)",
  "--background-color-inverse-softer": "rgb(43, 61, 79)",
  "--background-color-inverse-softer-active": "rgb(58, 82, 105)",
  "--background-color-primary": "rgb(12, 182, 154)",
  "--background-color-primary-active": "rgb(10, 163, 138)",
  "--background-color-primary-inverse": "rgb(241, 254, 252)",
  "--background-color-secondary": "rgb(213, 16, 115)",
  "--background-color-secondary-active": "rgb(238, 27, 133)",
  "--background-color-secondary-inverse": "rgb(254, 241, 247)",
  "--background-color-success": "rgb(79, 172, 32)",
  "--background-color-success-active": "rgb(88, 194, 36)",
  "--background-color-success-inverse": "rgb(246, 253, 242)",
  "--background-color-warning": "rgb(230, 121, 25)",
  "--background-color-warning-active": "rgb(233, 137, 53)",
  "--background-color-warning-inverse": "rgb(253, 247, 241)",
  "--background-color-danger": "rgb(210, 53, 45)",
  "--background-color-danger-active": "rgb(216, 77, 70)",
  "--background-color-danger-inverse": "rgb(252, 243, 242)",
  "--border-color-base": "rgb(143, 168, 193)",
  "--border-color-soft": "rgb(189, 204, 219)",
  "--border-color-softer": "rgb(222, 230, 237)",
  "--border-color-active": "rgb(12, 182, 154)",
  "--border-color-primary": "rgb(12, 182, 154)",
  "--border-color-success": "rgb(79, 172, 32)",
  "--border-color-warning": "rgb(230, 121, 25)",
  "--border-color-danger": "rgb(210, 53, 45)",
  "--font-size-xxxx-large": "3rem",
  "--font-size-xxx-large": "2.5rem",
  "--font-size-xx-large": "2rem",
  "--font-size-x-large": "1.5rem",
  "--font-size-large": "1.25rem",
  "--font-size-base": "1rem",
  "--font-size-body": "15px",
  "--font-size-small": "0.8rem",
  "--font-size-x-small": "0.7rem",
  "--font-size-xx-small": "0.6rem",
  "--font-family-heading": "'Source Sans Pro', sans-serif",
  "--font-family-text": "'Source Sans Pro', sans-serif",
  "--font-family-code": "inconsolata, monospace",
  "--font-weight-regular": "normal",
  "--font-weight-bold": "600",
  "--line-height-base": "1.6",
  "--line-height-small": "1.3",
  "--line-height-smaller": "1.1",
  "--xxx-large": "120",
  "--xx-large": "60",
  "--x-large": "40",
  "--large": "28",
  "--base": "20",
  "--small": "12",
  "--x-small": "6",
  "--xx-small": "4",
  "--xxx-small": "2",
  "--space-xxx-large": "120px",
  "--space-xx-large": "60px",
  "--space-x-large": "40px",
  "--space-large": "28px",
  "--space-base": "20px",
  "--space-small": "12px",
  "--space-x-small": "6px",
  "--space-xx-small": "4px",
  "--space-xxx-small": "2px"
});

/***/ }),

/***/ "6ff2":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M22.5 5c4.136 0 7.5 3.364 7.5 7.5 0 2.59-2.365 4.947-2.466 5.047L16 29.081 4.46 17.541C4.365 17.447 2 15.09 2 12.5 2 8.364 5.364 5 9.5 5c2.892 0 5.327 1.804 6.5 2.854C17.173 6.804 19.608 5 22.5 5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "70e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/Table.vue?vue&type=template&id=7169a79a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.dataArray)?_c('div',{staticClass:"ds-table-wrap"},[_c('table',{staticClass:"ds-table",attrs:{"cellpadding":"0","cellspacing":"0"}},[_c('colgroup',_vm._l((_vm.headers),function(header){return _c('col',{key:header.key,attrs:{"width":header.width}})}),0),_c('thead',[_c('tr',_vm._l((_vm.headers),function(header){return _c('ds-table-head-col',{key:header.key},[_vm._v(" "+_vm._s(header.label)+" ")])}),1)]),_c('tbody',_vm._l((_vm.rows),function(row,index){return _c('tr',{key:index},_vm._l((row),function(col){return _c('ds-table-col',{key:col.key},[_vm._t(col.key,function(){return [_vm._v(" "+_vm._s(col.value)+" ")]},{"row":_vm.dataArray[index] ? _vm.dataArray[index] : null,"col":col,"index":index})],2)}),1)}),0)])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/Table/Table.vue?vue&type=template&id=7169a79a&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/lodash/startCase.js
var startCase = __webpack_require__("e740");
var startCase_default = /*#__PURE__*/__webpack_require__.n(startCase);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/Table.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

      if (Object(esm_typeof["a" /* default */])(this.data) === 'object') {
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
        } else if (Object(esm_typeof["a" /* default */])(this.fields) === 'object') {
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-display/Table/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FTable%2FTable.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-display/Table/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-display%2FTable%2FTable.vue
 /* harmony default export */ var Table_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable); 
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

if (typeof Table_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable === 'function') Table_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_display_2FTable_2FTable(component)

/* harmony default export */ var Table = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7120":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Code/Code.vue?vue&type=template&id=a59a5868&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.inline ? 'code' : 'pre',{tag:"component",staticClass:"ds-code",class:[_vm.inline && "ds-code-inline"]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Code/Code.vue?vue&type=template&id=a59a5868&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Code/Code.vue?vue&type=script&lang=js&
//
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
     */
    inline: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/typography/Code/Code.vue?vue&type=script&lang=js&
 /* harmony default export */ var Code_Codevue_type_script_lang_js_ = (Codevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/typography/Code/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("cd66");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Code/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FCode%2FCode.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Code/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FCode%2FCode.vue
 /* harmony default export */ var Code_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode); 
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

if (typeof Code_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode === 'function') Code_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FCode_2FCode(component)

/* harmony default export */ var Code = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "712f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 5.188l4.5 4.813H17v10h-2v-10h-3.5zM5 11h2v14h18V11h2v16H5V11z"}})])
          )
        }
      }
    

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "73b0":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM20.094 14a1 1 0 110 2 1 1 0 010-2zM13 15.594l.719.688L16 18.563l1.281-1.281.719-.688.719.688 3 3-1.438 1.438L18 19.439l-1.281 1.281-.719.688-.719-.688L13 18.439 9.719 21.72l-1.438-1.438 4-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "7401":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/TableCol.vue?vue&type=template&id=5d5541a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"ds-table-col"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/Table/TableCol.vue?vue&type=template&id=5d5541a2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/Table/TableCol.vue?vue&type=script&lang=js&

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

/* harmony default export */ var TableCol = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21.5 2.5h2v1.406a5.62 5.62 0 012.25.938l.938-.938 1.406 1.406-.938.938c.464.664.792 1.421.938 2.25H29.5v2h-1.406a5.625 5.625 0 01-.938 2.281l.969 1.031-1.469 1.375-.938-1a5.617 5.617 0 01-2.219.906v1.406h-2v-1.406a5.62 5.62 0 01-2.25-.938l-1.031 1.063-1.438-1.438 1.063-1.031a5.615 5.615 0 01-.938-2.25h-1.406v-2h1.406a5.632 5.632 0 01.906-2.219l-1-.938 1.375-1.469 1.031.969a5.665 5.665 0 012.281-.938V2.498zm1 3.313c-2.055 0-3.688 1.632-3.688 3.688s1.632 3.688 3.688 3.688 3.688-1.632 3.688-3.688-1.632-3.688-3.688-3.688zM9.531 11.719l.719 1.813a6.865 6.865 0 011.656-.219c.571 0 1.126.085 1.656.219l.719-1.813 1.844.75-.719 1.813a6.887 6.887 0 012.313 2.313l1.813-.719.75 1.844-1.813.719c.132.529.219 1.087.219 1.656s-.086 1.126-.219 1.656l1.813.719-.75 1.844-1.813-.719a6.907 6.907 0 01-2.313 2.344l.719 1.781-1.844.75-.719-1.781a6.76 6.76 0 01-1.656.219 6.713 6.713 0 01-1.656-.219l-.719 1.781-1.844-.75.719-1.781a6.873 6.873 0 01-2.344-2.344l-1.781.719-.75-1.844 1.781-.719c-.134-.53-.219-1.087-.219-1.656s.085-1.128.219-1.656l-1.781-.719.75-1.844 1.781.719a6.916 6.916 0 012.344-2.313l-.719-1.813zm2.375 3.594c-2.663 0-4.813 2.118-4.813 4.781s2.15 4.813 4.813 4.813 4.781-2.15 4.781-4.813-2.118-4.781-4.781-4.781z"}})])
          )
        }
      }
    

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

/***/ "7744":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "--color-neutral-0": "rgb(27, 25, 24)",
  "--color-neutral-10": "rgb(43, 40, 39)",
  "--color-neutral-20": "rgb(80, 75, 73)",
  "--color-neutral-30": "rgb(107, 100, 97)",
  "--color-neutral-40": "rgb(120, 112, 109)",
  "--color-neutral-50": "rgb(158, 151, 148)",
  "--color-neutral-60": "rgb(182, 177, 175)",
  "--color-neutral-70": "rgb(207, 203, 201)",
  "--color-neutral-80": "rgb(226, 224, 223)",
  "--color-neutral-85": "rgb(238, 237, 236)",
  "--color-neutral-90": "rgb(243, 242, 242)",
  "--color-neutral-95": "rgb(248, 247, 247)",
  "--color-neutral-100": "rgb(255, 255, 255)",
  "--color-primary": "rgb(255, 92, 97)",
  "--color-primary-active": "rgb(255, 71, 78)",
  "--color-primary-inverse": "rgb(255, 245, 245)",
  "--color-secondary": "rgb(49, 165, 155)",
  "--color-secondary-active": "rgb(45, 149, 141)",
  "--color-secondary-inverse": "rgb(247, 253, 252)",
  "--color-success": "rgb(79, 172, 32)",
  "--color-success-active": "rgb(88, 194, 36)",
  "--color-success-inverse": "rgb(246, 253, 242)",
  "--color-danger": "rgb(210, 45, 45)",
  "--color-danger-active": "rgb(216, 70, 70)",
  "--color-danger-inverse": "rgb(252, 242, 242)",
  "--color-warning": "rgb(230, 121, 25)",
  "--color-warning-active": "rgb(233, 137, 53)",
  "--color-warning-inverse": "rgb(253, 247, 241)",
  "--color-yellow": "rgb(245, 196, 0)",
  "--color-yellow-active": "rgb(255, 206, 10)",
  "--color-yellow-inverse": "rgb(255, 252, 240)",
  "--text-color-base": "rgb(80, 75, 73)",
  "--text-color-soft": "rgb(120, 112, 109)",
  "--text-color-softer": "rgb(182, 177, 175)",
  "--text-color-disabled": "rgb(182, 177, 175)",
  "--text-color-inverse": "rgb(248, 247, 247)",
  "--text-color-link": "rgb(255, 92, 97)",
  "--text-color-link-active": "rgb(255, 71, 78)",
  "--text-color-primary": "rgb(255, 92, 97)",
  "--text-color-primary-inverse": "rgb(255, 245, 245)",
  "--text-color-secondary": "rgb(49, 165, 155)",
  "--text-color-secondary-inverse": "rgb(247, 253, 252)",
  "--text-color-success": "rgb(79, 172, 32)",
  "--text-color-success-inverse": "rgb(246, 253, 242)",
  "--text-color-warning": "rgb(230, 121, 25)",
  "--text-color-warning-inverse": "rgb(253, 247, 241)",
  "--text-color-danger": "rgb(210, 45, 45)",
  "--text-color-danger-inverse": "rgb(252, 242, 242)",
  "--background-color-base": "rgb(255, 255, 255)",
  "--background-color-soft": "rgb(248, 247, 247)",
  "--background-color-softer": "rgb(243, 242, 242)",
  "--background-color-softer-active": "rgb(248, 247, 247)",
  "--background-color-softest": "rgb(238, 237, 236)",
  "--background-color-softest-active": "rgb(243, 242, 242)",
  "--background-color-inverse": "rgb(27, 25, 24)",
  "--background-color-inverse-soft": "rgb(43, 40, 39)",
  "--background-color-inverse-softer": "rgb(80, 75, 73)",
  "--background-color-inverse-softer-active": "rgb(107, 100, 97)",
  "--background-color-primary": "rgb(255, 92, 97)",
  "--background-color-primary-active": "rgb(255, 71, 78)",
  "--background-color-primary-inverse": "rgb(255, 245, 245)",
  "--background-color-secondary": "rgb(49, 165, 155)",
  "--background-color-secondary-active": "rgb(45, 149, 141)",
  "--background-color-secondary-inverse": "rgb(247, 253, 252)",
  "--background-color-success": "rgb(79, 172, 32)",
  "--background-color-success-active": "rgb(88, 194, 36)",
  "--background-color-success-inverse": "rgb(246, 253, 242)",
  "--background-color-warning": "rgb(230, 121, 25)",
  "--background-color-warning-active": "rgb(233, 137, 53)",
  "--background-color-warning-inverse": "rgb(253, 247, 241)",
  "--background-color-danger": "rgb(210, 45, 45)",
  "--background-color-danger-active": "rgb(216, 70, 70)",
  "--background-color-danger-inverse": "rgb(252, 242, 242)",
  "--border-color-base": "rgb(182, 177, 175)",
  "--border-color-soft": "rgb(207, 203, 201)",
  "--border-color-softer": "rgb(226, 224, 223)",
  "--border-color-active": "rgb(255, 92, 97)",
  "--border-color-primary": "rgb(255, 92, 97)",
  "--border-color-success": "rgb(79, 172, 32)",
  "--border-color-warning": "rgb(230, 121, 25)",
  "--border-color-danger": "rgb(210, 45, 45)",
  "--font-family-heading": "Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
  "--font-family-text": "Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
  "--font-family-code": "inconsolata, monospace",
  "--font-weight-regular": "normal",
  "--font-weight-bold": "600",
  "--line-height-base": "1.6",
  "--line-height-small": "1.3",
  "--line-height-smaller": "1.1"
});

/***/ }),

/***/ "776e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Page/Page.vue?vue&type=template&id=faad291e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ds-page",class:[
    _vm.hasHeader ? 'ds-page-has-header' : 'ds-page-has-no-header',
    _vm.$slots.sidebar && 'ds-page-has-sidebar',
    _vm.showDrawer && 'ds-page-show-drawer',
    _vm.contained && 'ds-page-is-contained' ]},[_c('header',{staticClass:"ds-page-header"},[_c('div',{staticClass:"ds-page-header-container"},[_c('div',{staticClass:"ds-page-brand"},[_vm._t("brand")],2),_c('div',{staticClass:"ds-page-navbar"},[_vm._t("navbar")],2),(_vm.$slots.drawer)?_c('div',{staticClass:"ds-page-navigation-toggle",on:{"click":function($event){_vm.showDrawer = !_vm.showDrawer}}},[_c('ds-icon',{attrs:{"name":"bars"}})],1):_vm._e()])]),(_vm.$slots.sidebar)?_c('aside',{staticClass:"ds-page-sidebar"},[_c('div',{staticClass:"ds-page-sidebar-content"},[_vm._t("sidebar")],2)]):_vm._e(),(_vm.$slots.drawer)?_c('aside',{staticClass:"ds-page-drawer"},[_vm._t("drawer")],2):_vm._e(),_c('main',{staticClass:"ds-page-content"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Page/Page.vue?vue&type=template&id=faad291e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Page/Page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Page/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPage%2FPage.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Page/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPage%2FPage.vue
 /* harmony default export */ var Page_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage); 
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

if (typeof Page_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage === 'function') Page_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPage_2FPage(component)

/* harmony default export */ var Page = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "77cf":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4.219 10.781L16 22.562l11.781-11.781 1.438 1.438-12.5 12.5-.719.688-.719-.688-12.5-12.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "77d8":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2 7h26c1.093 0 2 .907 2 2v14c0 1.093-.907 2-2 2H2c-1.093 0-2-.907-2-2V9c0-1.093.907-2 2-2zm0 2v14h26V9H2zm2 2h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM4 15h4v2H4v-2zm6 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h4v2h-4v-2zM4 19h4v2H4v-2zm6 0h10v2H10v-2zm12 0h4v2h-4v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "785a":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("cc12");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "7874":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3.719 2.281l6.75 6.75C12.154 8.419 14.007 8 16 8c8.395 0 14.494 7.044 14.75 7.344l.625.719-.656.656c-.193.192-3.247 3.135-7.344 5.219l6.344 6.344-1.438 1.438-8.688-8.719L8.468 9.876 2.28 3.72zM16 10c-1.389 0-2.697.254-3.938.625l2.063 2.063A2.992 2.992 0 0116 12c1.654 0 3 1.346 3 3 0 .71-.273 1.362-.688 1.875l2.844 2.844A6.966 6.966 0 0023 15c0-1.3-.386-2.556-1.063-3.656C20.161 10.556 18.164 10 15.999 10zm-9.375.875l2.563 2.563A6.746 6.746 0 009 15.001c0 3.565 2.68 6.54 6.219 6.938l.094.031c.466.039.908.039 1.375 0l.125-.031c.261-.029.531-.068.781-.125l1.719 1.719c-.778.198-1.577.343-2.375.406h-.063c-.29.025-.585.063-.875.063s-.585-.037-.875-.063h-.063c-6.964-.555-13.495-6.934-13.781-7.219l-.656-.656.625-.719c.144-.17 2.137-2.479 5.375-4.469zm.656 1.969a24.434 24.434 0 00-3.875 3.094 32.712 32.712 0 004.781 3.5A8.929 8.929 0 016.999 15c0-.737.107-1.452.281-2.156zm17.438 0c.173.702.281 1.421.281 2.156 0 1.614-.438 3.12-1.188 4.438a32.299 32.299 0 004.75-3.469 23.858 23.858 0 00-3.844-3.125zM16 14a.951.951 0 00-.438.125l1.313 1.313A.951.951 0 0017 15c0-.551-.448-1-1-1z"}})])
          )
        }
      }
    

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

/***/ "798c":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsLogo","description":"This component displays the brand's logo.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"inverse","description":"Inverse the logo","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"tag","description":"The html element name used for the logo.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'div'"}}]}

/***/ }),

/***/ "7a1e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7a41":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2 5h28v22H2V5zm2 2v12.875l7-7 .719.719 5.75 5.813L22 14.876l.719.719L28 20.908V7.002H4zm20 2a2 2 0 11.001 3.999A2 2 0 0124 9zm-13 6.719l-7 7V25h16.188zm11 2l-3.125 3.094 4.156 4.188H28V23.72z"}})])
          )
        }
      }
    

/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7b6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0eb9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7bf7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Menu/Menu.vue?vue&type=template&id=17c7f762&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"ds-menu",class:[_vm.inverse && 'ds-menu-inverse', _vm.navbar && 'ds-menu-navbar']},[_c('ul',{staticClass:"ds-menu-list"},[_vm._t("default",function(){return [_vm._l((_vm.routes),function(route,index){return _vm._t(route.name,function(){return [_vm._t("menuitem",function(){return [_c('ds-menu-item',{key:route.path ? route.path : index,attrs:{"route":route}})]},{"route":route})]},{"route":route,"parents":[]})})]})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/navigation/Menu/Menu.vue?vue&type=template&id=17c7f762&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__("2909");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Menu/Menu.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
     * @values router-link, a
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
        var routeParts = [].concat(Object(toConsumableArray["a" /* default */])(parents), [route]).map(function (p) {
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/navigation/Menu/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fnavigation%2FMenu%2FMenu.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu = (function () {});
// CONCATENATED MODULE: ./src/system/components/navigation/Menu/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fnavigation%2FMenu%2FMenu.vue
 /* harmony default export */ var Menu_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu); 
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

if (typeof Menu_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu === 'function') Menu_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fnavigation_2FMenu_2FMenu(component)

/* harmony default export */ var Menu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7ccd":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 6h22c1.645 0 3 1.355 3 3v14c0 1.645-1.355 3-3 3H5c-1.645 0-3-1.355-3-3V9c0-1.645 1.355-3 3-3zm0 2c-.555 0-1 .445-1 1v14c0 .555.445 1 1 1h22c.555 0 1-.445 1-1V9c0-.555-.445-1-1-1H5zm1 7a1 1 0 110 2 1 1 0 010-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7e3a":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 7h2.219c.918 0 1.716.61 1.938 1.5L10.782 19h12.469l2.406-9h2.094l-2.594 9.531A1.969 1.969 0 0123.251 21H10.782c-.918 0-1.714-.61-1.938-1.5L6.219 9H4a1 1 0 010-2zm18 14c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm-9 0c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3zm3-14h2v3h3v2h-3v3h-2v-3h-3v-2h3V7zm-3 16c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1zm9 0c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})])
          )
        }
      }
    

/***/ }),

/***/ "7e8e":
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

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

/***/ "7ed5":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h20v7h-2V5H7v5H5V3zm2 9h2l1 2 1-2h2l-2 4 2 4h-2l-1-2-1 2H7l2-4zm7 0h2v6h2v2h-4v-8zm7.5 0c.733 0 1.402.287 1.844.75S24 13.818 24 14.406h-2c0-.112-.035-.22-.094-.281S21.766 14 21.5 14c-.217 0-.5.283-.5.5s.283.5.5.5c1.383 0 2.5 1.117 2.5 2.5 0 1.3-1.081 2.5-2.5 2.5-.732 0-1.413-.232-1.875-.719S19 18.16 19 17.593h2c0 .233.049.299.063.313s.069.094.438.094c.381 0 .5-.2.5-.5 0-.217-.283-.5-.5-.5-1.383 0-2.5-1.117-2.5-2.5s1.117-2.5 2.5-2.5zM5 22h2v5h16v-5h2v7H5v-7z"}})])
          )
        }
      }
    

/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "7fb7":
/***/ (function(module, exports) {

module.exports = {"description":"Used for letting the user choose one value from a set of options.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","displayName":"DsRadio","docsBlocks":[""],"props":[{"name":"value","mixin":{"name":"input","path":"../shared/input.js"},"description":"The value of the input. Can be passed via v-model.","type":{"name":"string|object|number|array"},"defaultValue":{"func":false,"value":"null"}},{"name":"model","mixin":{"name":"input","path":"../shared/input.js"},"description":"The model name when used within a form component. Uses dot notation.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"name","mixin":{"name":"input","path":"../shared/input.js"},"description":"Name to use on the input for accessibility","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"label","mixin":{"name":"input","path":"../shared/input.js"},"description":"The label of the input.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"id","mixin":{"name":"input","path":"../shared/input.js"},"description":"The id of the input.","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"disabled","mixin":{"name":"input","path":"../shared/input.js"},"description":"Whether the input is disabled or not.","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"readonly","mixin":{"name":"input","path":"../shared/input.js"},"description":"Whether the input should be read-only","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"schema","mixin":{"name":"input","path":"../shared/input.js"},"description":"The async-validator schema used for the input.","tags":{"default":[{"description":"null","title":"default"}]},"type":{"name":"object"},"defaultValue":{"func":true,"value":"() => null"}},{"name":"size","mixin":{"name":"input","path":"../shared/input.js"},"description":"The input's size.","tags":{},"values":["small","base","large"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'base'"}},{"name":"tabindex","mixin":{"name":"input","path":"../shared/input.js"},"type":{"name":"number"},"defaultValue":{"func":false,"value":"0"}},{"name":"multiple","mixin":{"name":"multiinput","path":"../shared/multiinput.js"},"description":"Whether the user can select multiple items","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"buttons","description":"Whether the input should be options should be buttons","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"options","description":"The select options.","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}},{"name":"labelProp","description":"The prop to use as the label when options are objects","type":{"name":"string"},"defaultValue":{"func":false,"value":"'label'"}}],"events":[{"name":"input","mixin":{"name":"input","path":"../shared/input.js"},"description":"Fires after user input.\nReceives the value as the only argument.","type":{"names":["undefined"]}}],"slots":[{"name":"option","scoped":true,"description":"Slot to provide custom option items","bindings":[{"name":"option","title":"binding"}]}]}

/***/ }),

/***/ "800c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 3h2v2.063c5.268.477 9.46 4.67 9.938 9.938h2.063v2h-2.063A10.989 10.989 0 0117 26.939v2.063h-2v-2.063a10.989 10.989 0 01-9.938-9.938H2.999v-2h2.063A10.989 10.989 0 0115 5.063V3zm0 4.031A8.997 8.997 0 007.031 15H9v2H7.031A8.997 8.997 0 0015 24.969V23h2v1.969A8.997 8.997 0 0024.969 17H23v-2h1.969A8.997 8.997 0 0017 7.031V9h-2V7.031z"}})])
          )
        }
      }
    

/***/ }),

/***/ "804f":
/***/ (function(module) {

module.exports = JSON.parse("{\"aliases\":{\"green\":{\"value\":\"100, 69%\"},\"neutral\":{\"value\":\"264, 10%\"},\"orange\":{\"value\":\"28, 80%\"},\"red\":{\"value\":\"3, 65%\"},\"yellow\":{\"value\":\"48, 100%\"},\"pink\":{\"value\":\"330, 86%\"},\"blue\":{\"value\":\"200, 100%\"},\"teal\":{\"value\":\"174, 80%\"},\"purple\":{\"value\":\"264, 88%\"},\"x-large\":{\"value\":48},\"xxx-large\":{\"value\":128},\"small\":{\"value\":16},\"xx-large\":{\"value\":64},\"base\":{\"value\":24},\"xxx-small\":{\"value\":2},\"x-small\":{\"value\":8},\"xx-small\":{\"value\":4},\"large\":{\"value\":32},\"xs\":{\"value\":480},\"sm\":{\"value\":600},\"md\":{\"value\":768},\"lg\":{\"value\":1024},\"xl\":{\"value\":1200}},\"props\":{\"color-neutral-0\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-0\",\"value\":\"var(--color-neutral-0)\",\"originalValue\":\"hsla({!neutral}, 10%, 1)\"},\"color-neutral-10\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-10\",\"value\":\"var(--color-neutral-10)\",\"originalValue\":\"hsla({!neutral}, 16%, 1)\"},\"color-neutral-20\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-20\",\"value\":\"var(--color-neutral-20)\",\"originalValue\":\"hsla({!neutral}, 30%, 1)\"},\"color-neutral-30\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-30\",\"value\":\"var(--color-neutral-30)\",\"originalValue\":\"hsla({!neutral}, 40%, 1)\"},\"color-neutral-40\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-40\",\"value\":\"var(--color-neutral-40)\",\"originalValue\":\"hsla({!neutral}, 45%, 1)\"},\"color-neutral-50\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-50\",\"value\":\"var(--color-neutral-50)\",\"originalValue\":\"hsla({!neutral}, 60%, 1)\"},\"color-neutral-60\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-60\",\"value\":\"var(--color-neutral-60)\",\"originalValue\":\"hsla({!neutral}, 70%, 1)\"},\"color-neutral-70\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-70\",\"value\":\"var(--color-neutral-70)\",\"originalValue\":\"hsla({!neutral}, 80%, 1)\"},\"color-neutral-80\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-80\",\"value\":\"var(--color-neutral-80)\",\"originalValue\":\"hsla({!neutral}, 90%, 1)\"},\"color-neutral-85\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-85\",\"value\":\"var(--color-neutral-85)\",\"originalValue\":\"hsla({!neutral}, 94%, 1)\"},\"color-neutral-90\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-90\",\"value\":\"var(--color-neutral-90)\",\"originalValue\":\"hsla({!neutral}, 96%, 1)\"},\"color-neutral-95\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-95\",\"value\":\"var(--color-neutral-95)\",\"originalValue\":\"hsla({!neutral}, 98%, 1)\"},\"color-neutral-100\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-neutral-100\",\"value\":\"var(--color-neutral-100)\",\"originalValue\":\"hsla({!neutral}, 100%, 1)\"},\"color-primary\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-primary\",\"value\":\"var(--color-primary)\",\"originalValue\":\"hsla({!teal}, 40%, 1)\"},\"color-primary-active\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-primary-active\",\"value\":\"var(--color-primary-active)\",\"originalValue\":\"hsla({!teal}, 43%, 1)\"},\"color-primary-inverse\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-primary-inverse\",\"value\":\"var(--color-primary-inverse)\",\"originalValue\":\"hsla({!teal}, 97%, 1)\"},\"color-secondary\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-secondary\",\"value\":\"var(--color-secondary)\",\"originalValue\":\"hsla({!purple}, 45%, 1)\"},\"color-secondary-active\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-secondary-active\",\"value\":\"var(--color-secondary-active)\",\"originalValue\":\"hsla({!purple}, 52%, 1)\"},\"color-secondary-inverse\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-secondary-inverse\",\"value\":\"var(--color-secondary-inverse)\",\"originalValue\":\"hsla({!purple}, 97%, 1)\"},\"color-success\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-success\",\"value\":\"var(--color-success)\",\"originalValue\":\"hsla({!green}, 40%, 1)\"},\"color-success-active\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-success-active\",\"value\":\"var(--color-success-active)\",\"originalValue\":\"hsla({!green}, 45%, 1)\"},\"color-success-inverse\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-success-inverse\",\"value\":\"var(--color-success-inverse)\",\"originalValue\":\"hsla({!green}, 97%, 1)\"},\"color-danger\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-danger\",\"value\":\"var(--color-danger)\",\"originalValue\":\"hsla({!red}, 50%, 1)\"},\"color-danger-active\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-danger-active\",\"value\":\"var(--color-danger-active)\",\"originalValue\":\"hsla({!red}, 56%, 1)\"},\"color-danger-inverse\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-danger-inverse\",\"value\":\"var(--color-danger-inverse)\",\"originalValue\":\"hsla({!red}, 97%, 1)\"},\"color-warning\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-warning\",\"value\":\"var(--color-warning)\",\"originalValue\":\"hsla({!orange}, 50%, 1)\"},\"color-warning-active\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-warning-active\",\"value\":\"var(--color-warning-active)\",\"originalValue\":\"hsla({!orange}, 56%, 1)\"},\"color-warning-inverse\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-warning-inverse\",\"value\":\"var(--color-warning-inverse)\",\"originalValue\":\"hsla({!orange}, 97%, 1)\"},\"color-yellow\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-yellow\",\"value\":\"var(--color-yellow)\",\"originalValue\":\"hsla({!yellow}, 48%, 1)\"},\"color-yellow-active\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-yellow-active\",\"value\":\"var(--color-yellow-active)\",\"originalValue\":\"hsla({!yellow}, 52%, 1)\"},\"color-yellow-inverse\":{\"type\":\"color\",\"category\":\"color\",\"name\":\"color-yellow-inverse\",\"value\":\"var(--color-yellow-inverse)\",\"originalValue\":\"hsla({!yellow}, 97%, 1)\"},\"text-color-base\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-base\",\"value\":\"var(--text-color-base)\",\"originalValue\":\"hsla({!neutral}, 30%, 1)\"},\"text-color-soft\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-soft\",\"value\":\"var(--text-color-soft)\",\"originalValue\":\"hsla({!neutral}, 45%, 1)\"},\"text-color-softer\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-softer\",\"value\":\"var(--text-color-softer)\",\"originalValue\":\"hsla({!neutral}, 70%, 1)\"},\"text-color-disabled\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-disabled\",\"value\":\"var(--text-color-disabled)\",\"originalValue\":\"hsla({!neutral}, 70%, 1)\"},\"text-color-inverse\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-inverse\",\"value\":\"var(--text-color-inverse)\",\"originalValue\":\"hsla({!neutral}, 98%, 1)\"},\"text-color-link\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-link\",\"value\":\"var(--text-color-link)\",\"originalValue\":\"hsla({!teal}, 40%, 1)\"},\"text-color-link-active\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-link-active\",\"value\":\"var(--text-color-link-active)\",\"originalValue\":\"hsla({!teal}, 43%, 1)\"},\"text-color-primary\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-primary\",\"value\":\"var(--text-color-primary)\",\"originalValue\":\"hsla({!teal}, 40%, 1)\"},\"text-color-primary-inverse\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-primary-inverse\",\"value\":\"var(--text-color-primary-inverse)\",\"originalValue\":\"hsla({!teal}, 97%, 1)\"},\"text-color-secondary\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-secondary\",\"value\":\"var(--text-color-secondary)\",\"originalValue\":\"hsla({!purple}, 45%, 1)\"},\"text-color-secondary-inverse\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-secondary-inverse\",\"value\":\"var(--text-color-secondary-inverse)\",\"originalValue\":\"hsla({!purple}, 97%, 1)\"},\"text-color-success\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-success\",\"value\":\"var(--text-color-success)\",\"originalValue\":\"hsla({!green}, 40%, 1)\"},\"text-color-success-inverse\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-success-inverse\",\"value\":\"var(--text-color-success-inverse)\",\"originalValue\":\"hsla({!green}, 97%, 1)\"},\"text-color-warning\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-warning\",\"value\":\"var(--text-color-warning)\",\"originalValue\":\"hsla({!orange}, 50%, 1)\"},\"text-color-warning-inverse\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-warning-inverse\",\"value\":\"var(--text-color-warning-inverse)\",\"originalValue\":\"hsla({!orange}, 97%, 1)\"},\"text-color-danger\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-danger\",\"value\":\"var(--text-color-danger)\",\"originalValue\":\"hsla({!red}, 50%, 1)\"},\"text-color-danger-inverse\":{\"type\":\"color\",\"category\":\"text-color\",\"name\":\"text-color-danger-inverse\",\"value\":\"var(--text-color-danger-inverse)\",\"originalValue\":\"hsla({!red}, 97%, 1)\"},\"background-color-base\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-base\",\"value\":\"var(--background-color-base)\",\"originalValue\":\"hsla({!neutral}, 100%, 1)\"},\"background-color-soft\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-soft\",\"value\":\"var(--background-color-soft)\",\"originalValue\":\"hsla({!neutral}, 98%, 1)\"},\"background-color-softer\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-softer\",\"value\":\"var(--background-color-softer)\",\"originalValue\":\"hsla({!neutral}, 96%, 1)\"},\"background-color-softer-active\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-softer-active\",\"value\":\"var(--background-color-softer-active)\",\"originalValue\":\"hsla({!neutral}, 98%, 1)\"},\"background-color-softest\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-softest\",\"value\":\"var(--background-color-softest)\",\"originalValue\":\"hsla({!neutral}, 94%, 1)\"},\"background-color-softest-active\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-softest-active\",\"value\":\"var(--background-color-softest-active)\",\"originalValue\":\"hsla({!neutral}, 96%, 1)\"},\"background-color-inverse\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-inverse\",\"value\":\"var(--background-color-inverse)\",\"originalValue\":\"hsla({!neutral}, 10%, 1)\"},\"background-color-inverse-soft\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-inverse-soft\",\"value\":\"var(--background-color-inverse-soft)\",\"originalValue\":\"hsla({!neutral}, 16%, 1)\"},\"background-color-inverse-softer\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-inverse-softer\",\"value\":\"var(--background-color-inverse-softer)\",\"originalValue\":\"hsla({!neutral}, 30%, 1)\"},\"background-color-inverse-softer-active\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-inverse-softer-active\",\"value\":\"var(--background-color-inverse-softer-active)\",\"originalValue\":\"hsla({!neutral}, 40%, 1)\"},\"background-color-disabled\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-disabled\",\"value\":\"var(--background-color-disabled)\",\"originalValue\":\"hsla({!neutral}, 96%, 1)\"},\"background-color-primary\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-primary\",\"value\":\"var(--background-color-primary)\",\"originalValue\":\"hsla({!teal}, 40%, 1)\"},\"background-color-primary-active\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-primary-active\",\"value\":\"var(--background-color-primary-active)\",\"originalValue\":\"hsla({!teal}, 43%, 1)\"},\"background-color-primary-inverse\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-primary-inverse\",\"value\":\"var(--background-color-primary-inverse)\",\"originalValue\":\"hsla({!teal}, 97%, 1)\"},\"background-color-secondary\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-secondary\",\"value\":\"var(--background-color-secondary)\",\"originalValue\":\"hsla({!purple}, 45%, 1)\"},\"background-color-secondary-active\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-secondary-active\",\"value\":\"var(--background-color-secondary-active)\",\"originalValue\":\"hsla({!purple}, 52%, 1)\"},\"background-color-secondary-inverse\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-secondary-inverse\",\"value\":\"var(--background-color-secondary-inverse)\",\"originalValue\":\"hsla({!purple}, 97%, 1)\"},\"background-color-success\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-success\",\"value\":\"var(--background-color-success)\",\"originalValue\":\"hsla({!green}, 40%, 1)\"},\"background-color-success-active\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-success-active\",\"value\":\"var(--background-color-success-active)\",\"originalValue\":\"hsla({!green}, 45%, 1)\"},\"background-color-success-inverse\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-success-inverse\",\"value\":\"var(--background-color-success-inverse)\",\"originalValue\":\"hsla({!green}, 97%, 1)\"},\"background-color-warning\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-warning\",\"value\":\"var(--background-color-warning)\",\"originalValue\":\"hsla({!orange}, 50%, 1)\"},\"background-color-warning-active\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-warning-active\",\"value\":\"var(--background-color-warning-active)\",\"originalValue\":\"hsla({!orange}, 56%, 1)\"},\"background-color-warning-inverse\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-warning-inverse\",\"value\":\"var(--background-color-warning-inverse)\",\"originalValue\":\"hsla({!orange}, 97%, 1)\"},\"background-color-danger\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-danger\",\"value\":\"var(--background-color-danger)\",\"originalValue\":\"hsla({!red}, 50%, 1)\"},\"background-color-danger-active\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-danger-active\",\"value\":\"var(--background-color-danger-active)\",\"originalValue\":\"hsla({!red}, 56%, 1)\"},\"background-color-danger-inverse\":{\"type\":\"color\",\"category\":\"background-color\",\"name\":\"background-color-danger-inverse\",\"value\":\"var(--background-color-danger-inverse)\",\"originalValue\":\"hsla({!red}, 97%, 1)\"},\"border-color-base\":{\"type\":\"color\",\"category\":\"border-color\",\"name\":\"border-color-base\",\"value\":\"var(--border-color-base)\",\"originalValue\":\"hsla({!neutral}, 70%, 1)\"},\"border-color-soft\":{\"type\":\"color\",\"category\":\"border-color\",\"name\":\"border-color-soft\",\"value\":\"var(--border-color-soft)\",\"originalValue\":\"hsla({!neutral}, 80%, 1)\"},\"border-color-softer\":{\"type\":\"color\",\"category\":\"border-color\",\"name\":\"border-color-softer\",\"value\":\"var(--border-color-softer)\",\"originalValue\":\"hsla({!neutral}, 90%, 1)\"},\"border-color-active\":{\"type\":\"color\",\"category\":\"border-color\",\"name\":\"border-color-active\",\"value\":\"var(--border-color-active)\",\"originalValue\":\"hsla({!teal}, 40%, 1)\"},\"border-color-primary\":{\"type\":\"color\",\"category\":\"border-color\",\"name\":\"border-color-primary\",\"value\":\"var(--border-color-primary)\",\"originalValue\":\"hsla({!teal}, 40%, 1)\"},\"border-color-success\":{\"type\":\"color\",\"category\":\"border-color\",\"name\":\"border-color-success\",\"value\":\"var(--border-color-success)\",\"originalValue\":\"hsla({!green}, 40%, 1)\"},\"border-color-warning\":{\"type\":\"color\",\"category\":\"border-color\",\"name\":\"border-color-warning\",\"value\":\"var(--border-color-warning)\",\"originalValue\":\"hsla({!orange}, 50%, 1)\"},\"border-color-danger\":{\"type\":\"color\",\"category\":\"border-color\",\"name\":\"border-color-danger\",\"value\":\"var(--border-color-danger)\",\"originalValue\":\"hsla({!red}, 50%, 1)\"},\"border-size-base\":{\"type\":\"number\",\"category\":\"border-size\",\"name\":\"border-size-base\",\"value\":\"var(--border-size-base)\",\"originalValue\":\"1px\"},\"border-size-large\":{\"type\":\"number\",\"category\":\"border-size\",\"name\":\"border-size-large\",\"value\":\"var(--border-size-large)\",\"originalValue\":\"3px\"},\"border-size-x-large\":{\"type\":\"number\",\"category\":\"border-size\",\"name\":\"border-size-x-large\",\"value\":\"var(--border-size-x-large)\",\"originalValue\":\"6px\"},\"border-radius-base\":{\"type\":\"number\",\"category\":\"border-radius\",\"name\":\"border-radius-base\",\"value\":\"var(--border-radius-base)\",\"originalValue\":\"3px\"},\"border-radius-rounded\":{\"type\":\"number\",\"category\":\"border-radius\",\"name\":\"border-radius-rounded\",\"value\":\"var(--border-radius-rounded)\",\"originalValue\":\"2em\"},\"border-radius-circle\":{\"type\":\"number\",\"category\":\"border-radius\",\"name\":\"border-radius-circle\",\"value\":\"var(--border-radius-circle)\",\"originalValue\":\"50%\"},\"font-size-xxxx-large\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-xxxx-large\",\"value\":\"var(--font-size-xxxx-large)\",\"originalValue\":\"3rem\"},\"font-size-xxx-large\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-xxx-large\",\"value\":\"var(--font-size-xxx-large)\",\"originalValue\":\"2.5rem\"},\"font-size-xx-large\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-xx-large\",\"value\":\"var(--font-size-xx-large)\",\"originalValue\":\"2rem\"},\"font-size-x-large\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-x-large\",\"value\":\"var(--font-size-x-large)\",\"originalValue\":\"1.5rem\"},\"font-size-large\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-large\",\"value\":\"var(--font-size-large)\",\"originalValue\":\"1.25rem\"},\"font-size-base\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-base\",\"value\":\"var(--font-size-base)\",\"originalValue\":\"1rem\"},\"font-size-body\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-body\",\"value\":\"var(--font-size-body)\",\"originalValue\":\"16px\"},\"font-size-small\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-small\",\"value\":\"var(--font-size-small)\",\"originalValue\":\"0.8rem\"},\"font-size-x-small\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-x-small\",\"value\":\"var(--font-size-x-small)\",\"originalValue\":\"0.7rem\"},\"font-size-xx-small\":{\"type\":\"number\",\"category\":\"font-size\",\"name\":\"font-size-xx-small\",\"value\":\"var(--font-size-xx-small)\",\"originalValue\":\"0.6rem\"},\"font-space-xxxx-large\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-xxxx-large\",\"value\":\"var(--font-space-xxxx-large)\",\"originalValue\":\"2em\"},\"font-space-xxx-large\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-xxx-large\",\"value\":\"var(--font-space-xxx-large)\",\"originalValue\":\"1.5em\"},\"font-space-xx-large\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-xx-large\",\"value\":\"var(--font-space-xx-large)\",\"originalValue\":\"1.2em\"},\"font-space-x-large\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-x-large\",\"value\":\"var(--font-space-x-large)\",\"originalValue\":\"1em\"},\"font-space-large\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-large\",\"value\":\"var(--font-space-large)\",\"originalValue\":\"0.6em\"},\"font-space-base\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-base\",\"value\":\"var(--font-space-base)\",\"originalValue\":\"0.5em\"},\"font-space-small\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-small\",\"value\":\"var(--font-space-small)\",\"originalValue\":\"0.4em\"},\"font-space-x-small\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-x-small\",\"value\":\"var(--font-space-x-small)\",\"originalValue\":\"0.3em\"},\"font-space-xx-small\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-xx-small\",\"value\":\"var(--font-space-xx-small)\",\"originalValue\":\"0.2em\"},\"font-space-xxx-small\":{\"type\":\"number\",\"category\":\"font-spacing\",\"name\":\"font-space-xxx-small\",\"value\":\"var(--font-space-xxx-small)\",\"originalValue\":\"0.1em\"},\"font-family-heading\":{\"type\":\"...\",\"category\":\"font-family\",\"name\":\"font-family-heading\",\"value\":\"var(--font-family-heading)\",\"originalValue\":\"'LatoWeb', sans-serif\"},\"font-family-text\":{\"type\":\"...\",\"category\":\"font-family\",\"name\":\"font-family-text\",\"value\":\"var(--font-family-text)\",\"originalValue\":\"'LatoWeb', sans-serif\"},\"font-family-code\":{\"type\":\"...\",\"category\":\"font-family\",\"name\":\"font-family-code\",\"value\":\"var(--font-family-code)\",\"originalValue\":\"inconsolata, monospace\"},\"font-weight-regular\":{\"type\":\"...\",\"category\":\"font-weight\",\"name\":\"font-weight-regular\",\"value\":\"var(--font-weight-regular)\",\"originalValue\":\"normal\"},\"font-weight-bold\":{\"type\":\"...\",\"category\":\"font-weight\",\"name\":\"font-weight-bold\",\"value\":\"var(--font-weight-bold)\",\"originalValue\":\"600\"},\"line-height-base\":{\"type\":\"number\",\"category\":\"line-height\",\"name\":\"line-height-base\",\"value\":\"var(--line-height-base)\",\"originalValue\":\"1.5\"},\"line-height-small\":{\"type\":\"number\",\"category\":\"line-height\",\"name\":\"line-height-small\",\"value\":\"var(--line-height-small)\",\"originalValue\":\"1.3\"},\"line-height-smaller\":{\"type\":\"number\",\"category\":\"line-height\",\"name\":\"line-height-smaller\",\"value\":\"var(--line-height-smaller)\",\"originalValue\":\"1.1\"},\"letter-spacing-x-large\":{\"type\":\"number\",\"category\":\"letter-spacing\",\"name\":\"letter-spacing-x-large\",\"value\":\"var(--letter-spacing-x-large)\",\"originalValue\":\"0.1em\"},\"letter-spacing-large\":{\"type\":\"number\",\"category\":\"letter-spacing\",\"name\":\"letter-spacing-large\",\"value\":\"var(--letter-spacing-large)\",\"originalValue\":\"0.05em\"},\"letter-spacing-base\":{\"type\":\"number\",\"category\":\"letter-spacing\",\"name\":\"letter-spacing-base\",\"value\":\"var(--letter-spacing-base)\",\"originalValue\":\"0\"},\"letter-spacing-small\":{\"type\":\"number\",\"category\":\"letter-spacing\",\"name\":\"letter-spacing-small\",\"value\":\"var(--letter-spacing-small)\",\"originalValue\":\"-0.01em\"},\"letter-spacing-x-small\":{\"type\":\"number\",\"category\":\"letter-spacing\",\"name\":\"letter-spacing-x-small\",\"value\":\"var(--letter-spacing-x-small)\",\"originalValue\":\"-0.015em\"},\"opacity-soft\":{\"type\":\"number\",\"category\":\"opacity\",\"name\":\"opacity-soft\",\"value\":\"var(--opacity-soft)\",\"originalValue\":\"0.65\"},\"opacity-disabled\":{\"type\":\"number\",\"category\":\"opacity\",\"name\":\"opacity-disabled\",\"value\":\"var(--opacity-disabled)\",\"originalValue\":\"0.5\"},\"xxx-large\":{\"type\":\"number\",\"category\":\"space-size\",\"name\":\"xxx-large\",\"value\":\"var(--xxx-large)\",\"originalValue\":128},\"xx-large\":{\"type\":\"number\",\"category\":\"space-size\",\"name\":\"xx-large\",\"value\":\"var(--xx-large)\",\"originalValue\":64},\"x-large\":{\"type\":\"number\",\"category\":\"space-size\",\"name\":\"x-large\",\"value\":\"var(--x-large)\",\"originalValue\":48},\"large\":{\"type\":\"number\",\"category\":\"space-size\",\"name\":\"large\",\"value\":\"var(--large)\",\"originalValue\":32},\"base\":{\"type\":\"number\",\"category\":\"space-size\",\"name\":\"base\",\"value\":\"var(--base)\",\"originalValue\":24},\"small\":{\"type\":\"number\",\"category\":\"space-size\",\"name\":\"small\",\"value\":\"var(--small)\",\"originalValue\":16},\"x-small\":{\"type\":\"number\",\"category\":\"space-size\",\"name\":\"x-small\",\"value\":\"var(--x-small)\",\"originalValue\":8},\"xx-small\":{\"type\":\"number\",\"category\":\"space-size\",\"name\":\"xx-small\",\"value\":\"var(--xx-small)\",\"originalValue\":4},\"xxx-small\":{\"type\":\"number\",\"category\":\"space-size\",\"name\":\"xxx-small\",\"value\":\"var(--xxx-small)\",\"originalValue\":2},\"space-xxx-large\":{\"type\":\"number\",\"category\":\"space\",\"name\":\"space-xxx-large\",\"value\":\"var(--space-xxx-large)\",\"originalValue\":\"{!xxx-large}px\"},\"space-xx-large\":{\"type\":\"number\",\"category\":\"space\",\"name\":\"space-xx-large\",\"value\":\"var(--space-xx-large)\",\"originalValue\":\"{!xx-large}px\"},\"space-x-large\":{\"type\":\"number\",\"category\":\"space\",\"name\":\"space-x-large\",\"value\":\"var(--space-x-large)\",\"originalValue\":\"{!x-large}px\"},\"space-large\":{\"type\":\"number\",\"category\":\"space\",\"name\":\"space-large\",\"value\":\"var(--space-large)\",\"originalValue\":\"{!large}px\"},\"space-base\":{\"type\":\"number\",\"category\":\"space\",\"name\":\"space-base\",\"value\":\"var(--space-base)\",\"originalValue\":\"{!base}px\"},\"space-small\":{\"type\":\"number\",\"category\":\"space\",\"name\":\"space-small\",\"value\":\"var(--space-small)\",\"originalValue\":\"{!small}px\"},\"space-x-small\":{\"type\":\"number\",\"category\":\"space\",\"name\":\"space-x-small\",\"value\":\"var(--space-x-small)\",\"originalValue\":\"{!x-small}px\"},\"space-xx-small\":{\"type\":\"number\",\"category\":\"space\",\"name\":\"space-xx-small\",\"value\":\"var(--space-xx-small)\",\"originalValue\":\"{!xx-small}px\"},\"space-xxx-small\":{\"type\":\"number\",\"category\":\"space\",\"name\":\"space-xxx-small\",\"value\":\"var(--space-xxx-small)\",\"originalValue\":\"{!xxx-small}px\"},\"size-height-base\":{\"type\":\"number\",\"category\":\"size\",\"name\":\"size-height-base\",\"value\":\"var(--size-height-base)\",\"originalValue\":\"42px\"},\"size-height-large\":{\"type\":\"number\",\"category\":\"size\",\"name\":\"size-height-large\",\"value\":\"var(--size-height-large)\",\"originalValue\":\"50px\"},\"size-height-xlarge\":{\"type\":\"number\",\"category\":\"size\",\"name\":\"size-height-xlarge\",\"value\":\"var(--size-height-xlarge)\",\"originalValue\":\"60px\"},\"size-tappable-square\":{\"type\":\"number\",\"category\":\"size\",\"name\":\"size-tappable-square\",\"value\":\"var(--size-tappable-square)\",\"originalValue\":\"44px\"},\"size-height-footer\":{\"type\":\"number\",\"category\":\"size\",\"name\":\"size-height-footer\",\"value\":\"var(--size-height-footer)\",\"originalValue\":\"64px\"},\"box-shadow-large\":{\"type\":\"...\",\"category\":\"box-shadow\",\"name\":\"box-shadow-large\",\"value\":\"var(--box-shadow-large)\",\"originalValue\":\"0 20px 60px 0 rgba(0, 0, 0, .15)\"},\"box-shadow-base\":{\"type\":\"...\",\"category\":\"box-shadow\",\"name\":\"box-shadow-base\",\"value\":\"var(--box-shadow-base)\",\"originalValue\":\"0px 12px 26px -4px rgba(0, 0, 0, .1)\"},\"box-shadow-small\":{\"type\":\"...\",\"category\":\"box-shadow\",\"name\":\"box-shadow-small\",\"value\":\"var(--box-shadow-small)\",\"originalValue\":\"0px 8px 18px -2px rgba(0, 0, 0, .1)\"},\"box-shadow-x-small\":{\"type\":\"...\",\"category\":\"box-shadow\",\"name\":\"box-shadow-x-small\",\"value\":\"var(--box-shadow-x-small)\",\"originalValue\":\"0px 0px 3px 0px rgba(0, 0, 0, .1)\"},\"box-shadow-active\":{\"type\":\"...\",\"category\":\"box-shadow\",\"name\":\"box-shadow-active\",\"value\":\"var(--box-shadow-active)\",\"originalValue\":\"0 0 6px 1px rgba(20, 100, 160, 0.5)\"},\"box-shadow-inset\":{\"type\":\"...\",\"category\":\"box-shadow\",\"name\":\"box-shadow-inset\",\"value\":\"var(--box-shadow-inset)\",\"originalValue\":\"inset 0 0 20px 1px rgba(0,0,0,.15)\"},\"box-shadow-small-inset\":{\"type\":\"...\",\"category\":\"box-shadow\",\"name\":\"box-shadow-small-inset\",\"value\":\"var(--box-shadow-small-inset)\",\"originalValue\":\"inset 0 0 0 1px rgba(0,0,0,.05)\"},\"duration-short\":{\"type\":\"number\",\"category\":\"time\",\"name\":\"duration-short\",\"value\":\"var(--duration-short)\",\"originalValue\":\"0.08s\"},\"duration-base\":{\"type\":\"number\",\"category\":\"time\",\"name\":\"duration-base\",\"value\":\"var(--duration-base)\",\"originalValue\":\"0.5s\"},\"duration-long\":{\"type\":\"number\",\"category\":\"time\",\"name\":\"duration-long\",\"value\":\"var(--duration-long)\",\"originalValue\":\"0.75s\"},\"duration-x-long\":{\"type\":\"number\",\"category\":\"time\",\"name\":\"duration-x-long\",\"value\":\"var(--duration-x-long)\",\"originalValue\":\"1s\"},\"duration-xx-long\":{\"type\":\"number\",\"category\":\"time\",\"name\":\"duration-xx-long\",\"value\":\"var(--duration-xx-long)\",\"originalValue\":\"2s\"},\"ease-out\":{\"type\":\"number\",\"category\":\"ease\",\"name\":\"ease-out\",\"value\":\"var(--ease-out)\",\"originalValue\":\"cubic-bezier(0.25, 0.46, 0.45, 0.94)\"},\"ease-out-sharp\":{\"type\":\"number\",\"category\":\"ease\",\"name\":\"ease-out-sharp\",\"value\":\"var(--ease-out-sharp)\",\"originalValue\":\"cubic-bezier(0.165, 0.84, 0.44, 1)\"},\"ease-out-bounce\":{\"type\":\"number\",\"category\":\"ease\",\"name\":\"ease-out-bounce\",\"value\":\"var(--ease-out-bounce)\",\"originalValue\":\"cubic-bezier(.87,-.41,.19,1.44)\"},\"ease-in\":{\"type\":\"number\",\"category\":\"ease\",\"name\":\"ease-in\",\"value\":\"var(--ease-in)\",\"originalValue\":\"cubic-bezier(0.55, 0.085, 0.68, 0.53)\"},\"ease-in-sharp\":{\"type\":\"number\",\"category\":\"ease\",\"name\":\"ease-in-sharp\",\"value\":\"var(--ease-in-sharp)\",\"originalValue\":\"cubic-bezier(0.895, 0.03, 0.685, 0.22)\"},\"z-index-modal\":{\"type\":\"number\",\"category\":\"z-index\",\"name\":\"z-index-modal\",\"value\":\"var(--z-index-modal)\",\"originalValue\":\"9999\"},\"z-index-dropdown\":{\"type\":\"number\",\"category\":\"z-index\",\"name\":\"z-index-dropdown\",\"value\":\"var(--z-index-dropdown)\",\"originalValue\":\"8888\"},\"z-index-page-submenu\":{\"type\":\"number\",\"category\":\"z-index\",\"name\":\"z-index-page-submenu\",\"value\":\"var(--z-index-page-submenu)\",\"originalValue\":\"2500\"},\"z-index-page-header\":{\"type\":\"number\",\"category\":\"z-index\",\"name\":\"z-index-page-header\",\"value\":\"var(--z-index-page-header)\",\"originalValue\":\"2000\"},\"z-index-page-sidebar\":{\"type\":\"number\",\"category\":\"z-index\",\"name\":\"z-index-page-sidebar\",\"value\":\"var(--z-index-page-sidebar)\",\"originalValue\":\"1500\"},\"z-index-sticky\":{\"type\":\"number\",\"category\":\"z-index\",\"name\":\"z-index-sticky\",\"value\":\"var(--z-index-sticky)\",\"originalValue\":\"100\"},\"xs\":{\"type\":\"...\",\"category\":\"media-size\",\"name\":\"xs\",\"value\":480,\"originalValue\":480},\"sm\":{\"type\":\"...\",\"category\":\"media-size\",\"name\":\"sm\",\"value\":600,\"originalValue\":600},\"md\":{\"type\":\"...\",\"category\":\"media-size\",\"name\":\"md\",\"value\":768,\"originalValue\":768},\"lg\":{\"type\":\"...\",\"category\":\"media-size\",\"name\":\"lg\",\"value\":1024,\"originalValue\":1024},\"xl\":{\"type\":\"...\",\"category\":\"media-size\",\"name\":\"xl\",\"value\":1200,\"originalValue\":1200},\"media-query-x-small\":{\"type\":\"...\",\"category\":\"media-query\",\"name\":\"media-query-x-small\",\"value\":\"(min-width: 480px)\",\"originalValue\":\"(min-width: {!xs}px)\"},\"media-query-small\":{\"type\":\"...\",\"category\":\"media-query\",\"name\":\"media-query-small\",\"value\":\"(min-width: 600px)\",\"originalValue\":\"(min-width: {!sm}px)\"},\"media-query-medium\":{\"type\":\"...\",\"category\":\"media-query\",\"name\":\"media-query-medium\",\"value\":\"(min-width: 768px)\",\"originalValue\":\"(min-width: {!md}px)\"},\"media-query-large\":{\"type\":\"...\",\"category\":\"media-query\",\"name\":\"media-query-large\",\"value\":\"(min-width: 1024px)\",\"originalValue\":\"(min-width: {!lg}px)\"},\"media-query-x-large\":{\"type\":\"...\",\"category\":\"media-query\",\"name\":\"media-query-x-large\",\"value\":\"(min-width: 1200px)\",\"originalValue\":\"(min-width: {!xl}px)\"}}}");

/***/ }),

/***/ "809c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9 4h14v7h2c1.645 0 3 1.355 3 3v10h-5v4H9v-4H4V14c0-1.645 1.355-3 3-3h2V4zm2 2v5h10V6H11zm-4 7c-.565 0-1 .435-1 1v8h3v-4h14v4h3v-8c0-.565-.435-1-1-1H7zm1 1a1 1 0 110 2 1 1 0 010-2zm3 6v6h10v-6H11z"}})])
          )
        }
      }
    

/***/ }),

/***/ "80f7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Spinner/Spinner.vue?vue&type=template&id=d573ccf8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"ds-spinner",class:[
    ("ds-size-" + (this.size)),
    _vm.inverse && 'ds-spinner-inverse',
    _vm.primary && !_vm.inverse && "ds-spinner-primary",
    _vm.secondary && !_vm.inverse && "ds-spinner-secondary",
    _vm.danger && !_vm.inverse && "ds-spinner-danger" ],attrs:{"viewBox":"0 0 50 50"}},[_c('circle',{staticClass:"ds-spinner-circle",attrs:{"cx":"25","cy":"25","r":"20","fill":"none","stroke-width":"5"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Spinner/Spinner.vue?vue&type=template&id=d573ccf8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Spinner/Spinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Spinnervue_type_script_lang_js_ = ({
  name: 'DsSpinner',
  props: {
    /**
     * The size used for the spinner.
     * @values small, base, large
     */
    size: {
      type: String,
      default: 'base',
      validator: function validator(value) {
        return value.match(/(small|base|large)/);
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
     * Primary style
     */
    primary: {
      type: Boolean,
      default: false
    },

    /**
     * Secondary style
     */
    secondary: {
      type: Boolean,
      default: false
    },

    /**
     * Danger style
     */
    danger: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/layout/Spinner/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Spinner_Spinnervue_type_script_lang_js_ = (Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/layout/Spinner/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("f7c5");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Spinner/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSpinner%2FSpinner.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpinner_2FSpinner = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Spinner/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSpinner%2FSpinner.vue
 /* harmony default export */ var Spinner_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpinner_2FSpinner = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpinner_2FSpinner); 
// CONCATENATED MODULE: ./src/system/components/layout/Spinner/Spinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Spinner_Spinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Spinner_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpinner_2FSpinner === 'function') Spinner_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpinner_2FSpinner(component)

/* harmony default export */ var Spinner = __webpack_exports__["default"] = (component.exports);

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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18.875 4l1.438 1.375-6.031 6.406 8.344 5.031L13.438 26h4.563v2h-8v-8h2v4.563l7.375-7.375-7.188-4.344-1.063-.625.844-.906z"}})])
          )
        }
      }
    

/***/ }),

/***/ "81fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a1e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "83c4":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3c1.864 0 3.399 1.275 3.844 3H29v20H3V6h9.156c.445-1.725 1.98-3 3.844-3zm0 2c-.81 0-1.428.385-1.75 1h3.5c-.322-.615-.94-1-1.75-1zM5 8v9h22V8H5zm11 6a1 1 0 110 2 1 1 0 010-2zM5 19v5h22v-5H5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "83c6":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 4.594v22.813l-1.719-1.688L8.562 21H3.999V11h4.563l4.719-4.719zm-2 4.844l-3.281 3.281-.313.281H6v6h3.406l.313.281L13 22.562V9.437zm7.219 2.343L23 14.562l2.781-2.781 1.438 1.438L24.438 16l2.781 2.781-1.438 1.438L23 17.438l-2.781 2.781-1.438-1.438L21.562 16l-2.781-2.781z"}})])
          )
        }
      }
    

/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__("a04b");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "841c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var sameValue = __webpack_require__("129f");
var toString = __webpack_require__("577e");
var regExpExec = __webpack_require__("14c3");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "84e8":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21.75 4c1.671 0 3.225.661 4.406 1.844S28 8.579 28 10.25s-.662 3.255-1.844 4.438l-1.469 1.469a6.25 6.25 0 01-4.438 1.844 6.163 6.163 0 01-2.281-.438l1.625-1.625c.215.038.432.063.656.063a4.276 4.276 0 003.031-1.25l1.469-1.469a4.274 4.274 0 000-6.031c-.804-.805-1.863-1.25-3-1.25s-2.227.444-3.031 1.25L17.249 8.72a4.286 4.286 0 00-1.188 3.688l-1.625 1.625a6.16 6.16 0 01-.438-2.281 6.26 6.26 0 011.844-4.438l1.469-1.469a6.25 6.25 0 014.438-1.844zm-2.469 7.281l1.438 1.438-8 8-1.438-1.438zM11.75 14c.793 0 1.565.153 2.281.438l-1.625 1.625A3.75 3.75 0 0011.75 16a4.276 4.276 0 00-3.031 1.25L7.25 18.719a4.274 4.274 0 000 6.031c.804.805 1.863 1.25 3 1.25s2.227-.444 3.031-1.25l1.469-1.469a4.286 4.286 0 001.188-3.688l1.625-1.625a6.16 6.16 0 01.438 2.281 6.258 6.258 0 01-1.844 4.438l-1.469 1.469C13.507 27.339 11.922 28 10.25 28s-3.225-.661-4.406-1.844C4.662 24.974 4 23.421 4 21.75s.662-3.256 1.844-4.438l1.469-1.469a6.25 6.25 0 014.438-1.844z"}})])
          )
        }
      }
    

/***/ }),

/***/ "857a":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M10 2h16v16.844a3.019 3.019 0 01-2.375 2.938L16 23.438v3.563c0 1.645-1.355 3-3 3s-3-1.355-3-3v-10.75l-.75.188c-.156.203-.224.331-.625.625-.642.47-1.633.938-2.969.938C4.23 18.004 3 16.712 3 15.096v-.406l.281-.313L10 7.596V2.002zm2 2v3h12V4H12zm-.594 5l-6.313 6.406c.082.421.255.594.563.594.903 0 1.459-.273 1.813-.531s.438-.438.438-.438l.188-.344.406-.125 2.25-.594 1.25-.313v13.344c0 .565.435 1 1 1s1-.435 1-1v-5.188l.781-.188 8.438-1.781c.467-.1.781-.523.781-1V8.998H11.407z"}})])
          )
        }
      }
    

/***/ }),

/***/ "857a4":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");

var quot = /"/g;

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + toString(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "85c2":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3 7h26v2H3V7zm8 4h18v2H11v-2zm-8 4h26v2H3v-2zm8 4h18v2H11v-2zm-8 4h26v2H3v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8788":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M25 4.031c.765 0 1.517.298 2.094.875a2.966 2.966 0 010 4.188L17 19.219l-.313.063-3.5.688-1.469.313.313-1.469.688-3.5.063-.313.219-.219 9.906-9.875a2.951 2.951 0 012.094-.875zm0 1.938c-.235 0-.464.121-.688.344l-9.688 9.688-.344 1.719 1.719-.344 9.688-9.688c.446-.446.446-.929 0-1.375-.223-.223-.453-.344-.688-.344zM4 8h13.188l-2 2H6v16h16v-9.188l2-2V28H4V8z"}})])
          )
        }
      }
    

/***/ }),

/***/ "885e":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3c.624 0 1.248.213 1.781.594l1.656 1.156 1.875.25h.031c1.314.16 2.352 1.223 2.531 2.531.003.024.029.038.031.063h-.031l.375 1.875 1.156 1.656c.762 1.067.73 2.476.031 3.594v.031l-.031.031-1.156 1.656-.25 1.875 3.125 4.75 1.031 1.531h-4.781l-1.156 2.688L21.499 29l-1.031-1.563-3.156-4.75c-.818.379-1.779.349-2.625 0l-3.156 4.75L10.5 29l-.719-1.719-1.156-2.688H3.844l1.031-1.531 3.219-4.906-.313-1.719-1.188-1.656c-.762-1.067-.73-2.507-.031-3.625v-.031l.031-.031 1.156-1.5.25-1.938v-.031l.031-.031a3.385 3.385 0 012.563-2.563L10.624 5h.031l1.906-.25 1.656-1.156A3.084 3.084 0 0115.998 3zm0 2.031c-.229 0-.458.068-.625.188l-2 1.438-.25.031-2.094.281c-.015.003-.016.027-.031.031a1.398 1.398 0 00-1 1c-.004.015-.028.016-.031.031l-.281 2.094-.031.281-.156.188-1.25 1.625c-.301.482-.269 1.073-.031 1.406l1.281 1.781.156.188.031.25.406 2.281v.063a.978.978 0 00.125.375.877.877 0 00.688.438h.031l2.188.313.281.031.188.156 1.625 1.25c.482.302 1.073.269 1.406.031l1.781-1.281.188-.156.25-.031 2.281-.406h.063a.886.886 0 00.594-.313v-.031l.063-.031a.954.954 0 00.156-.438v-.031l.313-2.188.031-.25 1.406-1.969c.302-.482.269-1.042.031-1.375l-1.281-1.781-.156-.188-.031-.219-.406-2.219v-.063a.89.89 0 00-.813-.813h-.031l-2.188-.313-.25-.031-.219-.156-1.781-1.281a1.101 1.101 0 00-.625-.188zm6.906 15.219c-.409.323-.9.552-1.438.625-.024.003-.038.029-.063.031v-.031l-1.969.344-.469.344 2.125 3.25.688-1.594.25-.625h2.406zm-13.812.031l-1.531 2.313h2.406l.25.625.688 1.594 2.125-3.219-.438-.344-1.906-.25h-.031a2.88 2.88 0 01-1.563-.719z"}})])
          )
        }
      }
    

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "88e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1e99");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "88e7":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 2.375l.906 2.031 3.25 7.313 7.938.813 2.25.25-1.688 1.5-5.906 5.344 1.656 7.813.469 2.188-1.969-1.125L16 24.533l-6.906 3.969-1.938 1.125h-.031l.469-2.188 1.656-7.813-5.906-5.344-1.688-1.5 2.25-.25 7.938-.813 3.25-7.313zm0 4.906v14.938l.5.281 5.469 3.156-1.313-6.188-.125-.563.438-.375 4.719-4.25-6.875-.719-.25-.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "896d":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M8.656 3c.523 0 1.041.189 1.469.531l.063.031.031.031 4.094 4.219-.031.031c.886.826.873 2.221.031 3.063l-2 2c.307.705 1.146 2.501 2.781 4.063a16.139 16.139 0 004.094 2.813l2-2c.83-.83 2.295-.83 3.125 0l.031.063 4.063 4.063c.83.83.83 2.264 0 3.094l-3.156 3.156a3.595 3.595 0 01-3.469.688h-.031c-2.347-.918-7.094-3.001-11.344-7.25-4.233-4.233-6.403-8.916-7.25-11.344-.002-.006.002-.025 0-.031a3.134 3.134 0 01.844-3.375l-.031-.031 3.156-3.25.063-.031a2.362 2.362 0 011.469-.531zm0 2a.363.363 0 00-.219.094L5.343 8.25c-.355.304-.465.906-.313 1.313.758 2.178 2.825 6.669 6.781 10.625 3.924 3.924 8.326 5.86 10.594 6.75.584.195 1.069.115 1.531-.281l3.063-3.063c.17-.17.17-.111 0-.281l-4.094-4.094c-.17-.17-.142-.17-.313 0l-2.969 2.969-.625-.281s-2.739-1.16-5.063-3.281l-.219-.188c-2.412-2.303-3.563-5.375-3.563-5.375l-.219-.625.469-.438 2.5-2.5c.123-.123.055-.225.063-.219l-.094-.094-4-4.094a.361.361 0 00-.219-.094z"}})])
          )
        }
      }
    

/***/ }),

/***/ "8983":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Space/Space.vue?vue&type=template&id=d9cacfca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-space",class:[_vm.centered && "ds-space-centered"],style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Space/Space.vue?vue&type=template&id=d9cacfca&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./src/system/utils/index.js
var utils = __webpack_require__("2b4b");

// EXTERNAL MODULE: ./src/system/mixins/index.js + 1 modules
var mixins = __webpack_require__("cabe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Space/Space.vue?vue&type=script&lang=js&

//
//
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
    },

    /**
     * Center the content
     */
    centered: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles: function styles() {
      var marginTop = this.mediaQuery(this.marginTop);
      var marginBottom = this.mediaQuery(this.marginBottom);
      var marginTopStyle = this.parseMargin('Top')(marginTop);
      var marginBottomStyle = this.parseMargin('Bottom')(marginBottom);
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, marginTopStyle), marginBottomStyle);
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
          styles["margin".concat(direction)] = "calc(".concat(realMargin, " * 1px)");
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Space/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSpace%2FSpace.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Space/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FSpace%2FSpace.vue
 /* harmony default export */ var Space_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace); 
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

if (typeof Space_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace === 'function') Space_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FSpace_2FSpace(component)

/* harmony default export */ var Space = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "89d6":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 5h11v11l-.281.313L14.5 28.407l-.719-.688-9.5-9.5-.688-.719.688-.688L15.687 5.281zm.844 2L6.406 17.5l8.094 8.094L25 15.156V7h-8.156zM22 9a1 1 0 110 2 1 1 0 010-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "89d8":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6.813 2.406L8.907 4.5 7.501 5.906 5.407 3.812zm18.375 0l1.406 1.406L24.5 5.906 23.094 4.5zM16 3.031c4.934-.047 9 4.027 9 8.969 0 2.706-1.249 5.062-2.906 6.719-1.238 1.15-2 2.627-2 4.094v1.188H20v4h-2.281c-.347.597-.982 1-1.719 1s-1.372-.403-1.719-1H12v-6a5.244 5.244 0 00-1.75-3.031c-2.233-1.898-3.573-4.845-3.125-8.094.561-4.039 3.789-7.316 7.844-7.781H15a9.178 9.178 0 011-.063zm0 2c-.258.004-.518.03-.781.063-3.131.348-5.687 2.881-6.125 6.031-.352 2.552.702 4.811 2.469 6.313 1.388 1.19 2.124 2.848 2.344 4.563h4.375c.236-1.792 1.094-3.434 2.438-4.688l-.031-.031c1.343-1.343 2.313-3.187 2.313-5.281 0-3.861-3.135-7.024-7-6.969zM2 12h3v2H2v-2zm25 0h3v2h-3v-2zM7.5 20.094L8.906 21.5l-2.094 2.094-1.406-1.406zm17 0l2.094 2.094-1.406 1.406-2.094-2.094zM14 24v2h4v-2h-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8aeb":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M26.188-1.719L32.907 5l-6.719 6.719-1.406-1.438L29.063 6H8V4h21.063L24.782-.281zm-12.375 14l1.406 1.438L10.938 18h21.063v2H10.938l4.281 4.281-1.406 1.438L7.094 19l.719-.719z"}})])
          )
        }
      }
    

/***/ }),

/***/ "8be7":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsPlaceholder","description":"This component is used as a placeholder for other content.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"tag","description":"The html element name used for the placeholder.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'div'"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "8c05":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M14.688 3h.406C16.71 3 18.002 4.23 18 5.656c0 1.336-.468 2.327-.938 2.969-.294.401-.422.469-.625.625l-.188.75h10.75c1.645 0 3 1.355 3 3s-1.355 3-3 3h-3.563l-1.656 7.625A3.019 3.019 0 0118.842 26H1.998V10h5.594l6.781-6.719zm.718 2.094L9 11.407v12.594h9.844c.477 0 .9-.314 1-.781l1.781-8.438.188-.781h5.188c.565 0 1-.435 1-1s-.435-1-1-1H13.657l.313-1.25.594-2.25.125-.406.344-.188s.179-.084.438-.438.531-.91.531-1.813c0-.308-.172-.481-.594-.563zM4 12v12h3V12H4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "8c25":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm8 4.719l5.25 1.313-.5 1.938-2.75-.688v6.719c0 1.645-1.355 3-3 3s-3-1.355-3-3 1.355-3 3-3c.353 0 .684.073 1 .188V9.72zM14 18c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})])
          )
        }
      }
    

/***/ }),

/***/ "8d41":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M27.938 4.75l.75 4.25h-2.031l-.344-1.938L15 9H3.156zM2 10h28v16H2V10zm4.938 2c.033.163.063.327.063.5a2.5 2.5 0 01-2.5 2.5c-.173 0-.337-.029-.5-.063v6.125c.163-.033.327-.063.5-.063a2.5 2.5 0 012.5 2.5c0 .173-.029.337-.063.5h18.125a2.497 2.497 0 01-.063-.5 2.5 2.5 0 012.5-2.5c.173 0 .337.029.5.063v-6.125a2.497 2.497 0 01-.5.063 2.5 2.5 0 01-2.5-2.5c0-.173.029-.337.063-.5H6.938zM16 13c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 2c-1.669 0-3 1.331-3 3s1.331 3 3 3 3-1.331 3-3-1.331-3-3-3z"}})])
          )
        }
      }
    

/***/ }),

/***/ "8e21":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M28.281 6.281l1.438 1.438-18 18-.719.688-.719-.688-8-8 1.438-1.438L11 23.562z"}})])
          )
        }
      }
    

/***/ }),

/***/ "905d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Radio/Radio.vue?vue&type=template&id=cbbe5614&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ds-form-item',[_c('div',{staticClass:"ds-radio",attrs:{"tabindex":_vm.tabindex},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }if($event.target !== $event.currentTarget){ return null; }$event.preventDefault();return _vm.pointerNext.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }if($event.target !== $event.currentTarget){ return null; }$event.preventDefault();return _vm.pointerPrev.apply(null, arguments)}]}},_vm._l((_vm.options),function(option){return _c(_vm.buttons ? 'ds-button' : 'div',{key:option[_vm.labelProp] || option,tag:"component",staticClass:"ds-radio-option",class:[_vm.isSelected(option) && "ds-radio-option-is-selected"],attrs:{"primary":_vm.buttons && _vm.isSelected(option)},on:{"click":function($event){return _vm.handleSelect(option)}}},[(!_vm.buttons)?_c('span',{staticClass:"ds-radio-option-mark"}):_vm._e(),_c('span',{staticClass:"ds-radio-option-label"},[_vm._t("option",function(){return [_vm._v(" "+_vm._s(option[_vm.labelProp] || option)+" ")]},{"option":option})],2)])}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/Radio/Radio.vue?vue&type=template&id=cbbe5614&

// EXTERNAL MODULE: ./src/system/components/data-input/shared/input.js
var input = __webpack_require__("33ba");

// EXTERNAL MODULE: ./src/system/components/data-input/shared/multiinput.js
var multiinput = __webpack_require__("ac24");

// EXTERNAL MODULE: ./src/system/components/data-input/FormItem/FormItem.vue + 4 modules
var FormItem = __webpack_require__("5d96");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Radio/Radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * Used for letting the user choose one value from a set of options.
 * @version 1.0.0
 */

/* harmony default export */ var Radiovue_type_script_lang_js_ = ({
  name: 'DsRadio',
  mixins: [input["a" /* default */], multiinput["a" /* default */]],
  components: {
    DsFormItem: FormItem["default"]
  },
  data: function data() {
    return {
      pointer: 0
    };
  },
  props: {
    /**
     * Whether the input should be options should be buttons
     */
    buttons: {
      type: Boolean,
      default: false
    },

    /**
     * The select options.
     */
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /**
     * The prop to use as the label when options are objects
     */
    labelProp: {
      type: String,
      default: 'label'
    }
  },
  computed: {
    pointerMax: function pointerMax() {
      return this.options.length - 1;
    }
  },
  watch: {
    pointerMax: function pointerMax(max) {
      var _this = this;

      if (max < this.pointer) {
        this.$nextTick(function () {
          _this.pointer = max;
        });
      }
    }
  },
  methods: {
    handleSelect: function handleSelect(option) {
      this.selectOption(option);
    },
    pointerPrev: function pointerPrev() {
      if (this.pointer === 0) {
        this.pointer = this.pointerMax;
      } else {
        this.pointer--;
      }

      this.selectPointerOption();
    },
    pointerNext: function pointerNext() {
      if (this.pointer === this.pointerMax) {
        this.pointer = 0;
      } else {
        this.pointer++;
      }

      this.selectPointerOption();
    },
    selectPointerOption: function selectPointerOption() {
      this.handleSelect(this.options[this.pointer]);
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-input/Radio/Radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var Radio_Radiovue_type_script_lang_js_ = (Radiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/data-input/Radio/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("88e3");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-input/Radio/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FRadio%2FRadio.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FRadio_2FRadio = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-input/Radio/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FRadio%2FRadio.vue
 /* harmony default export */ var Radio_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FRadio_2FRadio = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FRadio_2FRadio); 
// CONCATENATED MODULE: ./src/system/components/data-input/Radio/Radio.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Radio_Radiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Radio_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FRadio_2FRadio === 'function') Radio_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FRadio_2FRadio(component)

/* harmony default export */ var Radio = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "90bf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9152":
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "922e":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6 6c2.197 0 4 1.803 4 4 0 .494-.115.969-.281 1.406l6.063 3.438L26.001 9h4L9.72 20.594c.166.438.281.913.281 1.406 0 2.197-1.803 4-4 4s-4-1.803-4-4 1.803-4 4-4c.981 0 1.864.375 2.563.969l5.156-2.938-5.219-2.969c-.691.568-1.543.938-2.5.938-2.197 0-4-1.803-4-4s1.803-4 4-4zm0 2c-.977 0-1.784.677-1.969 1.594A2.088 2.088 0 004 10c0 1.116.884 2 2 2s2-.884 2-2-.884-2-2-2zm13.094 8.813L30 23.001h-4l-8.906-5.094zM6 20c-.977 0-1.784.677-1.969 1.594A2.088 2.088 0 004 22c0 1.116.884 2 2 2s2-.884 2-2-.884-2-2-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var toString = __webpack_require__("577e");
var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");
var create = __webpack_require__("7c73");
var getInternalState = __webpack_require__("69f3").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = str.slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "92b2":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsCode","description":"The code component is used for displaying lines of code.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"inline","description":"Display the code inline.","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "9379":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 5c6.063 0 11 4.937 11 11v11h-8V16c0-1.668-1.332-3-3-3s-3 1.332-3 3v11H5V16C5 9.937 9.937 5 16 5zm0 2c-4.983 0-9 4.017-9 9v5h4v-5c0-2.749 2.251-5 5-5s5 2.251 5 5v5h4v-5c0-4.983-4.017-9-9-9zM7 23v2h4v-2H7zm14 0v2h4v-2h-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "941a":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21.75 4c1.603 0 3.189.626 4.406 1.844 2.435 2.435 2.435 6.409 0 8.844l-1.469 1.469a6.205 6.205 0 01-3.625 1.781l-.25-2a4.1 4.1 0 002.438-1.188h.031l1.469-1.469c1.671-1.671 1.671-4.36 0-6.031s-4.36-1.671-6.031 0L17.25 8.719a4.183 4.183 0 00-1.188 2.469l-2-.25a6.208 6.208 0 011.781-3.625l1.469-1.469A6.285 6.285 0 0121.75 4zM7.719 6.281l4 4-1.438 1.438-4-4zm3.219 7.782l.25 2a4.1 4.1 0 00-2.438 1.188h-.031L7.25 18.72c-1.671 1.671-1.671 4.36 0 6.031s4.36 1.671 6.031 0l1.469-1.469a4.183 4.183 0 001.188-2.469l2 .25a6.208 6.208 0 01-1.781 3.625l-1.469 1.469c-2.435 2.435-6.409 2.435-8.844 0s-2.435-6.409 0-8.844l1.469-1.469a6.205 6.205 0 013.625-1.781zm10.781 6.218l4 4-1.438 1.438-4-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9675":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependenices
 */

const clone = __webpack_require__("52f6");
const typeOf = __webpack_require__("ef5d");
const isPlainObject = __webpack_require__("fb48");

function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default: {
      return clone(val);
    }
  }
}

function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}

function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;


/***/ }),

/***/ "96cf":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "9717":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7.219 5.781L16 14.562l8.781-8.781 1.438 1.438L17.438 16l8.781 8.781-1.438 1.438L16 17.438l-8.781 8.781-1.438-1.438L14.562 16 5.781 7.219z"}})])
          )
        }
      }
    

/***/ }),

/***/ "97f4":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 4h2v20.063l6.781-6.781 1.438 1.438-8.5 8.5-.719.688-.719-.688-8.5-8.5 1.438-1.438L15 24.063V4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "984f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c6e9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "98dc":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M8 4h2v16.563L20.563 10H11V8h11.563l3.719-3.719 1.438 1.438-3.719 3.719v11.563h-2v-9.563L11.438 22.001h16.563v2h-4v4h-2v-4h-14v-14h-4v-2h4v-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "9911":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a4");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "9930":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsSpace","description":"Use this component for grouping and separation.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"marginTop","description":"The top margin of this space.","type":{"name":"string|object"},"defaultValue":{"func":false,"value":"null"}},{"name":"marginBottom","description":"The bottom margin of this space.","type":{"name":"string|object"},"defaultValue":{"func":false,"value":"'large'"}},{"name":"tag","description":"The html element name used for this space.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'div'"}},{"name":"centered","description":"Center the content","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "99df":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9.531 6h12.938l5.313 6.375.5.594-.5.656-11.781 15-.781-1-11-14-.5-.656.5-.594 5-6zm.938 2l-3.344 4h4.313l2.688-4H10.47zm7.406 0l2.688 4h4.313l-3.344-4h-3.656zM16 8.844L13.875 12h4.25zM7.031 14l6.594 8.406L11.25 14H7.031zm6.282 0l2.688 9.313L18.657 14h-5.344zm7.437 0l-2.375 8.375L24.969 14H20.75z"}})])
          )
        }
      }
    

/***/ }),

/***/ "9a1f":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var getIteratorMethod = __webpack_require__("35a1");

module.exports = function (it, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(it) : usingIterator;
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "9b68":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4.438l.906 2.188 8 19 .906 2.125-2.156-.813L16 24.063l-9.813 3.688.906-2.125 8-19zm0 5.093L9.812 24.25 16 21.937l.344.125 5.844 2.188z"}})])
          )
        }
      }
    

/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e05":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsTable","description":"Used in combination with the table row to create data tables.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"data","description":"The table's data","type":{"name":"array|object"},"defaultValue":{"func":true,"value":"function() {\n  return []\n}"}},{"name":"fields","description":"The table's header config","type":{"name":"array|object"},"defaultValue":{"func":true,"value":"function() {\n  return null\n}"}}],"slots":[{"name":"default","scoped":true,"description":"Slots are named by fields","bindings":[{"name":"name","title":"binding"},{"name":"row","title":"binding"},{"name":"col","title":"binding"},{"name":"index","title":"binding"}]}]}

/***/ }),

/***/ "9e2c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.385 12 12s-5.385 12-12 12S4 22.615 4 16h2c0 5.535 4.465 10 10 10s10-4.465 10-10S21.535 6 16 6c-3.702 0-6.897 2.02-8.625 5H11v2H4V6h2v3.344A11.987 11.987 0 0116 4zm-1 4h2v7h5v2h-7V8z"}})])
          )
        }
      }
    

/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f66":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 5c3.378 0 6.14 2.131 7.344 5.063 3.527.182 6.33 2.986 6.563 6.5 1.239 1.102 2.094 2.677 2.094 4.438 0 3.324-2.676 6-6 6h-20c-3.324 0-6-2.676-6-6 0-2.751 1.884-4.944 4.344-5.656a4.897 4.897 0 013.844-3.219c.454-3.994 3.694-7.125 7.813-7.125zm0 2c-3.37 0-6 2.63-6 6v1H9c-1.444 0-2.638.964-2.938 2.313l-.125.656-.656.125A3.941 3.941 0 002 21c0 2.276 1.724 4 4 4h20c2.276 0 4-1.724 4-4 0-1.267-.65-2.48-1.594-3.188L28 17.499v-.5c0-2.755-2.245-5-5-5h-1.031l-.219-.719c-.779-2.51-2.988-4.281-5.75-4.281zm-1 5h2v6.563l2.281-2.281 1.438 1.438-4 4-.719.688-.719-.688-4-4 1.438-1.438L15 18.563V12z"}})])
          )
        }
      }
    

/***/ }),

/***/ "9f7c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M28 4.469v19.188l-.594.25-7.375 3.156-.375-.125-7.625-2.875-6.625 2.844L4 27.532V8.344l.594-.25 7.375-3.156.375.125 7.625 2.875 6.625-2.844zM13 7.438v14.875l6 2.25V9.688zM11 7.5L6 9.656V24.5l5-2.156V7.5zm15 0l-5 2.156V24.5l5-2.156V7.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

exports.UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "9fed":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M13 2c1.645 0 3 1.355 3 3v4.188A2.925 2.925 0 0117 9c.767 0 1.467.3 2 .781A2.981 2.981 0 0121 9c1.395 0 2.578.982 2.906 2.281.368-.163.762-.281 1.188-.281 1.645 0 3 1.355 3 3v7.813a8.173 8.173 0 01-8.188 8.188h-1.719a8.299 8.299 0 01-5-1.688l-.031-.063-.063-.031-8.188-8.094v-.031c-1.154-1.154-1.154-3.034 0-4.188s3.034-1.154 4.188 0l.25.219.656.688V5c0-1.645 1.355-3 3-3zm0 2c-.555 0-1 .445-1 1v16.625l-4.313-4.313c-.446-.446-.929-.446-1.375 0s-.446.929 0 1.375l8.094 8c1.051.788 2.317 1.313 3.781 1.313h1.719c3.467 0 6.188-2.721 6.188-6.188v-7.813c0-.555-.445-1-1-1s-1 .445-1 1v2H22v-4c0-.555-.445-1-1-1s-1 .445-1 1v4h-2v-4c0-.555-.445-1-1-1s-1 .445-1 1v4h-2v-11c0-.555-.445-1-1-1z"}})])
          )
        }
      }
    

/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "a0e3":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 2c3.854 0 7 3.146 7 7a7.027 7.027 0 01-3.094 5.813c.486.208.964.441 1.406.719A7.965 7.965 0 0122 14.001c4.406 0 8 3.594 8 8s-3.594 8-8 8-8-3.594-8-8c0-1.897.671-3.657 1.781-5.031A7.889 7.889 0 0012 16.001c-4.431 0-8 3.569-8 8H2c0-4.119 2.527-7.658 6.094-9.188A7.025 7.025 0 015 9c0-3.854 3.146-7 7-7zm0 2C9.227 4 7 6.227 7 9s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zm10 12c-3.326 0-6 2.674-6 6s2.674 6 6 6 6-2.674 6-6-2.674-6-6-6zm-2.281 2.281L22 20.562l2.281-2.281 1.438 1.438L23.438 22l2.281 2.281-1.438 1.438L22 23.438l-2.281 2.281-1.438-1.438L20.562 22l-2.281-2.281z"}})])
          )
        }
      }
    

/***/ }),

/***/ "a125":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 4h22v2.344l-.219.281L19 16.344V23.5l-.406.313-4 3L13 28.001V16.345L5.219 6.626 5 6.345V4.001zm2.281 2l7.188 9h3.063l7.188-9H7.282zM15 17v7l2-1.5V17h-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a2f2":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 5h17.406l.313.281 4 4 .281.313V27H5V5zm2 2v18h2v-9h14v9h2V10.437l-3-3V13H10V7H7zm5 0v4h8V7h-2v2h-2V7h-4zm-1 11v7h10v-7H11z"}})])
          )
        }
      }
    

/***/ }),

/***/ "a388":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Select/Select.vue?vue&type=template&id=34de0d21&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ds-form-item',[_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeAndBlur),expression:"closeAndBlur"}],staticClass:"ds-select-wrap",class:[_vm.isOpen && "ds-select-is-open"],attrs:{"tabindex":_vm.searchable ? -1 : _vm.tabindex},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.closeAndBlur.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }if($event.target !== $event.currentTarget){ return null; }$event.preventDefault();return _vm.pointerNext.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }if($event.target !== $event.currentTarget){ return null; }$event.preventDefault();return _vm.pointerPrev.apply(null, arguments)}],"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();$event.stopPropagation();if($event.target !== $event.currentTarget){ return null; }return _vm.selectPointerOption.apply(null, arguments)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close.apply(null, arguments)}}},[(_vm.icon)?_c('div',{staticClass:"ds-select-icon"},[_c('ds-icon',{attrs:{"name":_vm.icon}})],1):_vm._e(),_c('div',{staticClass:"ds-select",class:[
        _vm.icon && "ds-select-has-icon",
        _vm.iconRight && "ds-select-has-icon-right",
        _vm.multiple && "ds-select-multiple" ],on:{"click":_vm.openAndFocus}},[(_vm.multiple)?_c('div',{staticClass:"ds-selected-options"},[_vm._l((_vm.innerValue),function(value,index){return _c('div',{key:value[_vm.labelProp] || value,staticClass:"ds-selected-option"},[_vm._t("optionitem",function(){return [_c('ds-chip',{attrs:{"removable":"","color":"primary","size":_vm.size},on:{"remove":function($event){return _vm.deselectOption(index)}}},[_vm._v(" "+_vm._s(value[_vm.labelProp] || value)+" ")])]},{"value":value})],2)}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchString),expression:"searchString"}],ref:"search",staticClass:"ds-select-search",attrs:{"autocomplete":"off","id":_vm.id,"name":_vm.name ? _vm.name : _vm.model,"autofocus":_vm.autofocus,"placeholder":_vm.placeholder,"tabindex":_vm.tabindex,"disabled":_vm.disabled,"readonly":_vm.readonly},domProps:{"value":(_vm.searchString)},on:{"focus":_vm.openAndFocus,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.closeAndBlur.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){ return null; }$event.stopPropagation();return _vm.deselectLastOption.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.handleKeyDown.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.handleKeyUp.apply(null, arguments)}],"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();$event.stopPropagation();return _vm.selectPointerOption.apply(null, arguments)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close.apply(null, arguments)},"input":function($event){if($event.target.composing){ return; }_vm.searchString=$event.target.value}}})],2):_c('div',{staticClass:"ds-select-value"},[(_vm.innerValue)?_vm._t("value",function(){return [_vm._v(" "+_vm._s(_vm.innerValue[_vm.labelProp] || _vm.innerValue)+" ")]},{"value":_vm.innerValue}):(_vm.placeholder)?_c('div',{staticClass:"ds-select-placeholder"},[_vm._v(" "+_vm._s(_vm.placeholder)+" ")]):_vm._e()],2),(!_vm.multiple)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchString),expression:"searchString"}],ref:"search",staticClass:"ds-select-search",attrs:{"autocomplete":"off","id":_vm.id,"name":_vm.name ? _vm.name : _vm.model,"autofocus":_vm.autofocus,"placeholder":_vm.placeholder,"tabindex":_vm.tabindex,"disabled":_vm.disabled,"readonly":_vm.readonly},domProps:{"value":(_vm.searchString)},on:{"focus":_vm.openAndFocus,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.closeAndBlur.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){ return null; }$event.stopPropagation();return _vm.deselectLastOption.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.handleKeyDown.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.handleKeyUp.apply(null, arguments)}],"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();$event.stopPropagation();return _vm.selectPointerOption.apply(null, arguments)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close.apply(null, arguments)},"input":function($event){if($event.target.composing){ return; }_vm.searchString=$event.target.value}}}):_vm._e()]),_c('div',{staticClass:"ds-select-dropdown"},[(!_vm.options || !_vm.options.length)?_c('div',{staticClass:"ds-select-dropdown-message"},[_vm._v(" "+_vm._s(_vm.noOptionsAvailable)+" ")]):(!_vm.filteredOptions.length)?_c('div',{staticClass:"ds-select-dropdown-message"},[_vm._v(" "+_vm._s(_vm.noOptionsFound)+" \""+_vm._s(_vm.searchString)+"\" ")]):_c('ul',{staticClass:"ds-select-options"},_vm._l((_vm.filteredOptions),function(option,index){return _c('li',{key:option[_vm.labelProp] || option,staticClass:"ds-select-option",class:[
            _vm.isSelected(option) && "ds-select-option-is-selected",
            _vm.pointer === index && "ds-select-option-hover" ],on:{"click":function($event){return _vm.handleSelect(option)},"mouseover":function($event){return _vm.setPointer(index)}}},[_vm._t("option",function(){return [_vm._v(" "+_vm._s(option[_vm.labelProp] || option)+" ")]},{"option":option})],2)}),0)]),(_vm.iconRight)?_c('div',{staticClass:"ds-select-icon-right"},[_c('ds-icon',{attrs:{"name":_vm.iconRight}})],1):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/Select/Select.vue?vue&type=template&id=34de0d21&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("841c");

// EXTERNAL MODULE: ./src/system/components/data-input/shared/input.js
var input = __webpack_require__("33ba");

// EXTERNAL MODULE: ./src/system/components/data-input/shared/multiinput.js
var multiinput = __webpack_require__("ac24");

// EXTERNAL MODULE: ./node_modules/vue-click-outside/index.js
var vue_click_outside = __webpack_require__("e67d");
var vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(vue_click_outside);

// EXTERNAL MODULE: ./src/system/components/data-input/FormItem/FormItem.vue + 4 modules
var FormItem = __webpack_require__("5d96");

// EXTERNAL MODULE: ./src/system/components/typography/Chip/Chip.vue + 6 modules
var Chip = __webpack_require__("be3c");

// EXTERNAL MODULE: ./src/system/components/typography/Icon/Icon.vue + 7 modules
var Icon = __webpack_require__("c6e1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Select/Select.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * Used for letting the user choose values from a set of options.
 * @version 1.0.0
 */

/* harmony default export */ var Selectvue_type_script_lang_js_ = ({
  name: 'DsSelect',
  mixins: [input["a" /* default */], multiinput["a" /* default */]],
  components: {
    DsFormItem: FormItem["default"],
    DsChip: Chip["default"],
    DsIcon: Icon["default"]
  },
  directives: {
    ClickOutside: vue_click_outside_default.a
  },
  data: function data() {
    return {
      searchString: '',
      pointer: 0,
      isOpen: false
    };
  },
  props: {
    /**
     * The placeholder shown when value is empty
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
     * The name of the input's icon
     */
    icon: {
      type: String,
      default: null
    },

    /**
     * The name of the input's right icon
     */
    iconRight: {
      type: String,
      default: 'angle-down'
    },

    /**
     * The select options.
     */
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /**
     * The prop to use as the label when options are objects
     */
    labelProp: {
      type: String,
      default: 'label'
    },

    /**
     * Whether the options are searchable
     */
    searchable: {
      type: Boolean,
      default: true
    },

    /**
     * Message to show when no options are available
     */
    noOptionsAvailable: {
      type: String,
      default: 'No options available.'
    },

    /**
     * Message to show when the search result is empty
     */
    noOptionsFound: {
      type: String,
      default: 'No options found for:'
    }
  },
  computed: {
    filteredOptions: function filteredOptions() {
      if (!this.searchString) {
        return this.options;
      }

      var searchParts = this.searchString.split(' ');
      return this.options.filter(function (option) {
        var value = option.value || option;
        return searchParts.every(function (part) {
          if (!part) {
            return true;
          }

          return value.toLowerCase().includes(part.toLowerCase());
        });
      });
    },
    pointerMax: function pointerMax() {
      return this.filteredOptions.length - 1;
    }
  },
  watch: {
    pointerMax: function pointerMax(max) {
      var _this = this;

      if (max < this.pointer) {
        this.$nextTick(function () {
          _this.pointer = max;
        });
      }
    }
  },
  methods: {
    handleSelect: function handleSelect(options) {
      this.selectOption(options);
      this.resetSearch();

      if (this.multiple) {
        this.$refs.search.focus();
        this.handleFocus();
      } else {
        this.close();
      }
    },
    resetSearch: function resetSearch() {
      this.searchString = '';
    },
    openAndFocus: function openAndFocus() {
      this.open();

      if (!this.focus || this.multiple) {
        this.$refs.search.focus();
        this.handleFocus();
      }
    },
    open: function open() {
      this.resetSearch();
      this.isOpen = true;
    },
    close: function close() {
      this.isOpen = false;
    },
    closeAndBlur: function closeAndBlur() {
      this.close();
      this.$refs.search.blur();
      this.handleBlur();
    },
    deselectLastOption: function deselectLastOption() {
      if (this.multiple && this.innerValue && this.innerValue.length && !this.searchString.length) {
        this.deselectOption(this.innerValue.length - 1);
      }
    },
    handleKeyUp: function handleKeyUp() {
      if (!this.isOpen) {
        this.open();
        return;
      }

      this.pointerPrev();
    },
    handleKeyDown: function handleKeyDown() {
      if (!this.isOpen) {
        this.open();
        return;
      }

      this.pointerNext();
    },
    setPointer: function setPointer(index) {
      this.pointer = index;
    },
    pointerPrev: function pointerPrev() {
      if (this.pointer === 0) {
        this.pointer = this.pointerMax;
      } else {
        this.pointer--;
      }
    },
    pointerNext: function pointerNext() {
      if (this.pointer === this.pointerMax) {
        this.pointer = 0;
      } else {
        this.pointer++;
      }
    },
    selectPointerOption: function selectPointerOption() {
      this.handleSelect(this.filteredOptions[this.pointer]);
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/data-input/Select/Select.vue?vue&type=script&lang=js&
 /* harmony default export */ var Select_Selectvue_type_script_lang_js_ = (Selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/data-input/Select/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("65d0");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-input/Select/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FSelect%2FSelect.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-input/Select/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FSelect%2FSelect.vue
 /* harmony default export */ var Select_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect); 
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

if (typeof Select_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect === 'function') Select_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FSelect_2FSelect(component)

/* harmony default export */ var Select = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a39b":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 8c8.336 0 14.75 7.344 14.75 7.344l.594.656-.594.656s-5.849 6.668-13.625 7.281c-.372.047-.741.063-1.125.063s-.753-.015-1.125-.063C7.099 23.323 1.25 16.656 1.25 16.656L.656 16l.594-.656S7.664 8 16 8zm0 2c-2.228 0-4.282.618-6.063 1.438h.031a6.958 6.958 0 00-.969 3.563 6.995 6.995 0 006.219 6.969c.259.016.517.031.781.031.243 0 .48-.018.719-.031.021-.002.042.002.063 0A6.995 6.995 0 0023 15.001c0-1.325-.365-2.54-1-3.594-1.765-.805-3.798-1.406-6-1.406zm0 2a3 3 0 110 6 3 3 0 010-6zm-8.75.938a24.065 24.065 0 00-3.719 3.063 23.08 23.08 0 004.844 3.781A8.943 8.943 0 017 15.001c0-.714.092-1.392.25-2.063zm17.5 0c.157.665.25 1.348.25 2.063a8.943 8.943 0 01-1.375 4.781c2.52-1.455 4.27-3.195 4.844-3.781a24.065 24.065 0 00-3.719-3.063z"}})])
          )
        }
      }
    

/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4a2":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsForm","description":"Used for handling complex user input.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"value","description":"The value of the form. Can be passed via v-model.","type":{"name":"object"},"required":true},{"name":"schema","description":"The async-validator schema used for the form data.","type":{"name":"object"},"defaultValue":{"func":false,"value":""}}],"events":[{"name":"input","description":"Fires after user input.\nReceives the current form data.","type":{"names":["undefined"]}},{"name":"submit","description":"Fires on form submit.\nReceives the current form data.","type":{"names":["undefined"]}}],"slots":[{"name":"default","scoped":true,"bindings":[{"name":"errors","title":"binding"},{"name":"reset","title":"binding"}]}]}

/***/ }),

/***/ "a4b4":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var $toString = __webpack_require__("577e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a66c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18 5h9v9h-2V8.437L12.719 20.718l-1.438-1.438L23.562 6.999h-5.563v-2zM5 9h13l-2 2H7v14h14v-9l2-2v13H5V9z"}})])
          )
        }
      }
    

/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a6dc":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsHeading","description":"Headings are used as the titles of each major\nsection of a page in the interface.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"tag","description":"The heading type used for the heading.","tags":{},"values":["h1","h2","h3","h4","h5","h6"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'h1'"}},{"name":"size","description":"The size used for the heading.","tags":{},"values":["h1","h2","h3","h4","h5","h6"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"primary","description":"Primary style","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"soft","description":"Muted style","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "a7e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = value => {
	const type = typeof value;
	return value !== null && (type === 'object' || type === 'function');
};


/***/ }),

/***/ "a823":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5H7zm5 6h4c2.21 0 4 1.79 4 4s-1.79 4-4 4c-.74 0-1.406-.244-2-.594V22h-2v-7h2c0 1.19.81 2 2 2s2-.81 2-2-.81-2-2-2h-4v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "a832":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "a898":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsInputError","description":"","tags":{"version":[{"description":"1.0.0","title":"version"}],"access":[{"description":"private","title":"access"}]},"exportName":"default","props":[{"name":"error","type":{"name":"string"},"required":false,"defaultValue":{"func":false,"value":"null"}}]}

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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5h-7v1h-2V5H7zm7 2h2v2h-2V7zm0 3h2v2h-2v-2zm0 3h2v2.188c1.156.418 2 1.52 2 2.813 0 1.645-1.355 3-3 3s-3-1.355-3-3c0-1.292.844-2.394 2-2.813V13zm1 4c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})])
          )
        }
      }
    

/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var isSymbol = __webpack_require__("d9b5");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a number');
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "aa20":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsTableCol","description":"Used in combination with the table component to create data tables.","tags":{"version":[{"description":"1.0.0","title":"version"}],"see":[{"description":"DsTable","title":"see"}],"access":[{"description":"private","title":"access"}]},"exportName":"default","props":[{"name":"width","description":"The column width","type":{"name":"string|number|object"},"defaultValue":{"func":false,"value":"null"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "aac1":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21.75 4c1.671 0 3.225.661 4.406 1.844S28 8.579 28 10.25s-.662 3.255-1.844 4.438l-1.469 1.469a6.25 6.25 0 01-4.438 1.844 6.163 6.163 0 01-2.281-.438l1.625-1.625c.215.038.432.063.656.063a4.276 4.276 0 003.031-1.25l1.469-1.469a4.274 4.274 0 000-6.031c-.804-.805-1.863-1.25-3-1.25s-2.227.444-3.031 1.25L17.249 8.72a4.286 4.286 0 00-1.188 3.688l-1.625 1.625a6.16 6.16 0 01-.438-2.281 6.26 6.26 0 011.844-4.438l1.469-1.469a6.25 6.25 0 014.438-1.844zm-2.469 7.281l1.438 1.438-8 8-1.438-1.438zM11.75 14c.793 0 1.565.153 2.281.438l-1.625 1.625A3.75 3.75 0 0011.75 16a4.276 4.276 0 00-3.031 1.25L7.25 18.719a4.274 4.274 0 000 6.031c.804.805 1.863 1.25 3 1.25s2.227-.444 3.031-1.25l1.469-1.469a4.286 4.286 0 001.188-3.688l1.625-1.625a6.16 6.16 0 01.438 2.281 6.258 6.258 0 01-1.844 4.438l-1.469 1.469C13.507 27.339 11.922 28 10.25 28s-3.225-.661-4.406-1.844C4.662 24.974 4 23.421 4 21.75s.662-3.256 1.844-4.438l1.469-1.469a6.25 6.25 0 014.438-1.844z"}})])
          )
        }
      }
    

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

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "abc6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const isObj = __webpack_require__("a7e2");

const disallowedKeys = new Set([
	'__proto__',
	'prototype',
	'constructor'
]);

const isValidPath = pathSegments => !pathSegments.some(segment => disallowedKeys.has(segment));

function getPathSegments(path) {
	const pathArray = path.split('.');
	const parts = [];

	for (let i = 0; i < pathArray.length; i++) {
		let p = pathArray[i];

		while (p[p.length - 1] === '\\' && pathArray[i + 1] !== undefined) {
			p = p.slice(0, -1) + '.';
			p += pathArray[++i];
		}

		parts.push(p);
	}

	if (!isValidPath(parts)) {
		return [];
	}

	return parts;
}

module.exports = {
	get(object, path, value) {
		if (!isObj(object) || typeof path !== 'string') {
			return value === undefined ? object : value;
		}

		const pathArray = getPathSegments(path);
		if (pathArray.length === 0) {
			return;
		}

		for (let i = 0; i < pathArray.length; i++) {
			object = object[pathArray[i]];

			if (object === undefined || object === null) {
				// `object` is either `undefined` or `null` so we want to stop the loop, and
				// if this is not the last bit of the path, and
				// if it did't return `undefined`
				// it would return `null` if `object` is `null`
				// but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
				if (i !== pathArray.length - 1) {
					return value;
				}

				break;
			}
		}

		return object === undefined ? value : object;
	},

	set(object, path, value) {
		if (!isObj(object) || typeof path !== 'string') {
			return object;
		}

		const root = object;
		const pathArray = getPathSegments(path);

		for (let i = 0; i < pathArray.length; i++) {
			const p = pathArray[i];

			if (!isObj(object[p])) {
				object[p] = {};
			}

			if (i === pathArray.length - 1) {
				object[p] = value;
			}

			object = object[p];
		}

		return root;
	},

	delete(object, path) {
		if (!isObj(object) || typeof path !== 'string') {
			return false;
		}

		const pathArray = getPathSegments(path);

		for (let i = 0; i < pathArray.length; i++) {
			const p = pathArray[i];

			if (i === pathArray.length - 1) {
				delete object[p];
				return true;
			}

			object = object[p];

			if (!isObj(object)) {
				return false;
			}
		}
	},

	has(object, path) {
		if (!isObj(object) || typeof path !== 'string') {
			return false;
		}

		const pathArray = getPathSegments(path);
		if (pathArray.length === 0) {
			return false;
		}

		// eslint-disable-next-line unicorn/no-for-loop
		for (let i = 0; i < pathArray.length; i++) {
			if (isObj(object)) {
				if (!(pathArray[i] in object)) {
					return false;
				}

				object = object[pathArray[i]];
			} else {
				return false;
			}
		}

		return true;
	}
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ac24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_kure_Repos_ExperimentsLabs_Contributions_vue_cion_design_system_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2909");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a434");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("caad");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2532");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);






/**
 * @mixin
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    /**
     * Whether the user can select multiple items
     */
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectOption: function selectOption(option) {
      if (this.multiple) {
        this.selectMultiOption(option);
      } else {
        this.input(option);
      }
    },
    selectMultiOption: function selectMultiOption(value) {
      if (!this.innerValue) {
        return this.input([value]);
      }

      var index = this.innerValue.indexOf(value);

      if (index < 0) {
        return this.input([].concat(Object(_home_kure_Repos_ExperimentsLabs_Contributions_vue_cion_design_system_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this.innerValue), [value]));
      }

      this.deselectOption(index);
    },
    deselectOption: function deselectOption(index) {
      var newArray = Object(_home_kure_Repos_ExperimentsLabs_Contributions_vue_cion_design_system_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this.innerValue);

      newArray.splice(index, 1);
      this.input(newArray);
    },
    isSelected: function isSelected(option) {
      if (!this.innerValue) {
        return false;
      }

      if (this.multiple) {
        return this.innerValue.includes(option);
      }

      return this.innerValue === option;
    }
  }
});

/***/ }),

/***/ "ac50":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4a11.93 11.93 0 019 4.094V5h2v7h-7v-2h3.938C22.134 7.59 19.241 6 16 6c-4.289 0-7.823 2.639-9.281 6.375l-1.844-.75C6.617 7.161 10.889 4 16 4zm9.281 15.625l1.844.75C25.383 24.839 21.111 28 16 28c-3.605 0-6.811-1.614-9-4.094V27H5v-7h7v2H8.031c1.812 2.388 4.692 4 7.969 4 4.289 0 7.823-2.639 9.281-6.375z"}})])
          )
        }
      }
    

/***/ }),

/***/ "ad07":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ad3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("343d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (typeof IteratorPrototype[ITERATOR] !== 'function') {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "aebf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/InputLabel.vue?vue&type=template&id=81cced84&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{directives:[{name:"show",rawName:"v-show",value:(!!_vm.label),expression:"!!label"}],staticClass:"ds-input-label"},[_vm._v(" "+_vm._s(_vm.label)+" ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/InputLabel.vue?vue&type=template&id=81cced84&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/InputLabel.vue?vue&type=script&lang=js&
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

/* harmony default export */ var InputLabel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "af0d":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3c4.959 0 9 4.042 9 9 0 1.406-.57 3.02-1.344 4.781s-1.77 3.631-2.781 5.375a101.013 101.013 0 01-4.063 6.406l-.813 1.188-.813-1.188s-2.039-2.918-4.063-6.406c-1.012-1.744-2.007-3.613-2.781-5.375S6.998 13.406 6.998 12c0-4.958 4.041-9 9-9zm0 2c-3.877 0-7 3.123-7 7 0 .803.43 2.316 1.156 3.969s1.73 3.484 2.719 5.188c1.572 2.71 2.546 4.144 3.125 5 .579-.856 1.553-2.29 3.125-5 .988-1.704 1.993-3.535 2.719-5.188S23 12.803 23 12c0-3.877-3.122-7-7-7zm0 5a2 2 0 11.001 3.999A2 2 0 0116 10z"}})])
          )
        }
      }
    

/***/ }),

/***/ "afd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1607");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b10d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Menu/MenuItem.vue?vue&type=template&id=32245a3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.handleClickOutside),expression:"handleClickOutside"}],staticClass:"ds-menu-item",class:[
    ("ds-menu-item-level-" + _vm.level),
    _vm.$parentMenu.inverse && 'ds-menu-item-inverse',
    _vm.$parentMenu.navbar && 'ds-menu-item-navbar',
    _vm.showSubmenu && 'ds-menu-item-show-submenu' ],on:{"mouseover":_vm.handleMouseOver,"mouseout":_vm.handleMouseOut,"!click":function($event){return _vm.handleClick.apply(null, arguments)}}},[(_vm.route)?_c(_vm.linkTag,_vm._b({ref:"link",tag:"component",staticClass:"ds-menu-item-link",attrs:{"exact":_vm.isExact}},'component',_vm.bindings,false),[_vm._t("default",function(){return [_vm._v(" "+_vm._s(_vm.name)+" ")]})],2):_vm._e(),(_vm.hasSubmenu)?_c('ul',{staticClass:"ds-menu-item-submenu"},_vm._l((_vm.route.children),function(child){return _c('ds-menu-item',{key:child.name,attrs:{"route":child,"parents":_vm.parents.concat( [_vm.route])}})}),1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/navigation/Menu/MenuItem.vue?vue&type=template&id=32245a3e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// EXTERNAL MODULE: ./node_modules/vue-click-outside/index.js
var vue_click_outside = __webpack_require__("e67d");
var vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(vue_click_outside);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/navigation/Menu/MenuItem.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
     * @values router-link, a
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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 5h17.406l.313.281 4 4 .281.313V27H5V5zm2 2v18h2v-9h14v9h2V10.437l-3-3V13H10V7H7zm5 0v4h8V7h-2v2h-2V7h-4zm-1 11v7h10v-7H11z"}})])
          )
        }
      }
    

/***/ }),

/***/ "b314":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3c7.168 0 13 5.832 13 13s-5.832 13-13 13S3 23.168 3 16 8.832 3 16 3zm0 2C9.913 5 5 9.913 5 16s4.913 11 11 11 11-4.913 11-11S22.087 5 16 5zm-1 5h2v2h-2v-2zm0 4h2v8h-2v-8z"}})])
          )
        }
      }
    

/***/ }),

/***/ "b395":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2c-.273 0-.545.041-.813.063l2.219.156.531 2.313-3 .563-.813-1.125-1.719.375.594 2.656-4 1.906-2.688 2.125.969 1.969h3.719l4.031 3.031-1.063 4 1.094 1.906c.307.028.623.063.938.063 1.542 0 3.01-.349 4.313-.969l1.594-5s-.737-1.813-.844-1.813-2.094.344-2.094.344l-1.938-1.594.969-3 1.719-1.281 1.75-.25 1.625 1 .688-1.25-2.688-.875-2.156.688-.156-2.063.875-.75 1.063.469-.188-2 .813-.094A9.974 9.974 0 0016 6zm-1.125.063a9.909 9.909 0 00-2.313.531l.75.125zM6.063 16.781c.315 4.108 3.068 7.526 6.844 8.75l-2.844-3.5H8.907l-1.875-2.063v-2.063z"}})])
          )
        }
      }
    

/***/ }),

/***/ "b468":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M11.5 6h9l.313.406L22.001 8h7v18h-26V8h7l1.188-1.594zm1 2l-1.188 1.594-.313.406h-6v14h22V10h-6l-.313-.406L19.498 8h-7zM8 11a1 1 0 110 2 1 1 0 010-2zm8 0c3.302 0 6 2.698 6 6s-2.698 6-6 6-6-2.698-6-6 2.698-6 6-6zm0 2c-2.221 0-4 1.779-4 4s1.779 4 4 4 4-1.779 4-4-1.779-4-4-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");
var IS_IOS_PEBBLE = __webpack_require__("d4c3");
var IS_WEBOS_WEBKIT = __webpack_require__("a4b4");
var IS_NODE = __webpack_require__("605d");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b5c1":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4l.375.156L23 6.812v6.719l5.406 2.344.594.281v8.063l-.5.313-6 3.344-.469.25-.469-.219-5.563-2.781-5.563 2.781-.469.219-.469-.25-6-3.344-.5-.313v-8.063l.594-.281 5.406-2.344V6.812l6.625-2.656zm0 2.188l-3.281 1.281L16 8.75l3.281-1.281zm-5 2.75v4.625l4 1.781v-4.875zm10 0l-4 1.531v4.875l4-1.781V8.938zm-11 6.375l-3.625 1.563L10 18.689l3.625-1.781zm12 0l-2.5 1.094-1.125.5L22 18.688l3.625-1.813zM5 18.406v4.656l4 2.25v-4.906zm22 0l-4 2v4.906l4-2.25v-4.656zm-12 .063l-4 1.938v4.969l4-2V18.47zm2 0v4.906l4 2v-4.969z"}})])
          )
        }
      }
    

/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b639":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("1fb5")
var ieee754 = __webpack_require__("9152")
var isArray = __webpack_require__("e3db")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "b89f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b914":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3.219l.875 1.5 12 20.781.844 1.5H2.281l.844-1.5 12-20.781zm0 4L5.75 25h20.5zM15 14h2v6h-2v-6zm0 7h2v2h-2v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "ba07":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h20v26H5V3zm2 2v22h16V5h-7v1h-2V5H7zm7 2h2v2h-2V7zm0 3h2v2h-2v-2zm0 3h2v2.188c1.156.418 2 1.52 2 2.813 0 1.645-1.355 3-3 3s-3-1.355-3-3c0-1.292.844-2.394 2-2.813V13zm1 4c-.564 0-1 .436-1 1s.436 1 1 1 1-.436 1-1-.436-1-1-1z"}})])
          )
        }
      }
    

/***/ }),

/***/ "ba44":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 5h24v6h-1v16H5V11H4V5zm2 2v2h20V7H6zm1 4v14h18V11H7zm5.813 2l.047-.001.047.001.047-.001.047.001h6.014a1 1 0 010 2h-6.014a1.005 1.005 0 01-1.098-1c0-.505.408-.953.911-1z"}})])
          )
        }
      }
    

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
	"./data-input/Form/Form.vue": "a4a2",
	"./data-input/FormItem/FormItem.vue": "ed7d",
	"./data-input/FormItem/InputError.vue": "a898",
	"./data-input/FormItem/InputLabel.vue": "3b19",
	"./data-input/Input/Input.vue": "5a14",
	"./data-input/Radio/Radio.vue": "7fb7",
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
	"./layout/Spinner/Spinner.vue": "ce65",
	"./navigation/Button/Button.vue": "3644",
	"./navigation/Menu/Menu.vue": "f978",
	"./navigation/Menu/MenuItem.vue": "5343",
	"./typography/Chip/Chip.vue": "0ce8",
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
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zm-7 6.781l1.5.938 5 3 1.438.844-1.438.844-5 3-1.5.938V13.22zm2 3.531v2.5L16.094 18z"}})])
          )
        }
      }
    

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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 3c2.202 0 3.791 1.007 4.531 2.313.026-.041.034-.084.063-.125C17.047 4.547 17.909 4 19 4v2c-.453 0-.588.111-.719.281 3.845.921 6.812 4.105 7.563 8.063C27.037 14.741 28 15.681 28 17c0 1.365-1.024 2.33-2.281 2.688-.816 4.701-4.82 8.313-9.719 8.313s-8.903-3.611-9.719-8.313C5.024 19.331 4 18.365 4 17s1.024-2.33 2.281-2.688c.741-4.271 4.122-7.637 8.406-8.219-.39-.574-1.192-1.094-2.688-1.094v-2zm4 5c-4.093 0-7.461 3.121-7.906 7.125L8 16H7c-.555 0-1 .445-1 1s.445 1 1 1h1l.094.875C8.539 22.879 11.907 26 16 26s7.461-3.121 7.906-7.125L24 18h1c.555 0 1-.445 1-1s-.445-1-1-1h-.875L24 15.125C23.464 11.106 20.093 8 16 8zm-3.5 8a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0112.5 16zm7 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0119.5 16z"}})])
          )
        }
      }
    

/***/ }),

/***/ "bde4":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h22v10.406l-.281.313L25 15.438v12.563h-6v2.719l-1.219-.25L5 27.814V3.001zm9.125 2L17 5.719v9.344l1.719 1.719.281.313v8.906h4V14.595l.281-.313L25 12.563V5H14.125zM7 5.281v20.906l10 2.094V17.937l-1.719-1.719-.281-.313V7.28z"}})])
          )
        }
      }
    

/***/ }),

/***/ "be3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Chip/Chip.vue?vue&type=template&id=2571ce56&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-chip",class:[
    ("ds-chip-size-" + _vm.size),
    ("ds-chip-" + _vm.color),
    _vm.removable && 'ds-chip-removable',
    _vm.round && 'ds-chip-round' ]},[_vm._t("default"),(_vm.removable)?_c('button',{staticClass:"ds-chip-close",attrs:{"tabindex":"-1"},on:{"click":_vm.remove}},[_c('ds-icon',{attrs:{"name":"close"}})],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Chip/Chip.vue?vue&type=template&id=2571ce56&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Chip/Chip.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * Chips are used to represent small blocks of information.
 * Their most common usage is for displaying contacts or tags.
 * @version 1.0.0
 */
/* harmony default export */ var Chipvue_type_script_lang_js_ = ({
  name: 'DsChip',
  props: {
    /**
     * The background color used for the chip.
     * @values medium, inverse, primary, success, warning, danger
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
     * @values base, large, small
     */
    size: {
      type: String,
      default: 'base',
      validator: function validator(value) {
        return value.match(/(base|large|small)/);
      }
    },

    /**
     * Whether the chip should be removeable
     */
    removable: {
      type: Boolean,
      default: false
    },

    /**
     * Whether the chip should be rounded
     */
    round: {
      type: Boolean,
      default: true
    },

    /**
     * The html element name used for the text.
     */
    tag: {
      type: String,
      default: 'span'
    }
  },
  methods: {
    remove: function remove() {
      /**
       * Fires after user clicked the remove button.
       *
       * @event remove
       */
      this.$emit('remove');
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/typography/Chip/Chip.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chip_Chipvue_type_script_lang_js_ = (Chipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/typography/Chip/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("5c79");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Chip/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FChip%2FChip.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FChip_2FChip = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Chip/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FChip%2FChip.vue
 /* harmony default export */ var Chip_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FChip_2FChip = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FChip_2FChip); 
// CONCATENATED MODULE: ./src/system/components/typography/Chip/Chip.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Chip_Chipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Chip_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FChip_2FChip === 'function') Chip_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FChip_2FChip(component)

/* harmony default export */ var Chip = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "be93":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm0 4c2.197 0 4 1.803 4 4a3.808 3.808 0 01-2.594 3.594l-.406.125V19h-2v-1.281c0-.856.56-1.635 1.375-1.906l.406-.125A1.779 1.779 0 0018 14c0-1.117-.883-2-2-2s-2 .883-2 2h-2c0-2.197 1.803-4 4-4zm-1 10h2v2h-2v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "beae":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21.75 4c1.603 0 3.189.626 4.406 1.844 2.435 2.435 2.435 6.409 0 8.844l-1.469 1.469a6.205 6.205 0 01-3.625 1.781l-.25-2a4.1 4.1 0 002.438-1.188h.031l1.469-1.469c1.671-1.671 1.671-4.36 0-6.031s-4.36-1.671-6.031 0L17.25 8.719a4.183 4.183 0 00-1.188 2.469l-2-.25a6.208 6.208 0 011.781-3.625l1.469-1.469A6.285 6.285 0 0121.75 4zM7.719 6.281l4 4-1.438 1.438-4-4zm3.219 7.782l.25 2a4.1 4.1 0 00-2.438 1.188h-.031L7.25 18.72c-1.671 1.671-1.671 4.36 0 6.031s4.36 1.671 6.031 0l1.469-1.469a4.183 4.183 0 001.188-2.469l2 .25a6.208 6.208 0 01-1.781 3.625l-1.469 1.469c-2.435 2.435-6.409 2.435-8.844 0s-2.435-6.409 0-8.844l1.469-1.469a6.205 6.205 0 013.625-1.781zm10.781 6.218l4 4-1.438 1.438-4-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "bfe5":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9 4h2v1h10V4h2v1h4v22H5V5h4V4zM7 7v2h18V7h-2v1h-2V7H11v1H9V7H7zm0 4v14h18V11H7zm6 2h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM9 17h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM9 21h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = input[TO_PRIMITIVE];
  var result;
  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c1fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Tag/Tag.vue?vue&type=template&id=213cb81f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-tag",class:[("ds-tag-size-" + _vm.size), ("ds-tag-" + _vm.color), _vm.round && 'ds-tag-round']},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Tag/Tag.vue?vue&type=template&id=213cb81f&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Tag/Tag.vue?vue&type=script&lang=js&


//
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
     * @values medium, inverse, primary, success, warning, danger
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
     * @values base, large, small
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Tag/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FTag%2FTag.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Tag/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FTag%2FTag.vue
 /* harmony default export */ var Tag_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag); 
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

if (typeof Tag_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag === 'function') Tag_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FTag_2FTag(component)

/* harmony default export */ var Tag = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c24d":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 5h24v22H4V5zm2 2v2h20V7H6zm0 4v14h20V11H6zm5.219 2.781l3.5 3.5.688.719-.688.719-3.5 3.5-1.438-1.438L12.562 18l-2.781-2.781zM16 20h6v2h-6v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "c317":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3.594l.719.688 8 8 1.688 1.719H5.594l1.688-1.719 8-8zm0 2.844l-5.563 5.563h11.125zM5.594 18h20.813l-1.688 1.719-8 8-.719.688-.719-.688-8-8zm4.844 2l5.563 5.563L21.564 20H10.439z"}})])
          )
        }
      }
    

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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M13 2c1.645 0 3 1.355 3 3v3.563l7.625 1.656A3.019 3.019 0 0126 13.157v16.844H10v-5.594l-6.719-6.781L3 17.313v-.406c0-1.616 1.23-2.908 2.656-2.906 1.336 0 2.327.468 2.969.938.401.294.469.422.625.625l.75.188V5.002c0-1.645 1.355-3 3-3zm0 2c-.565 0-1 .435-1 1v13.344l-1.25-.313-2.25-.594-.406-.125-.188-.344s-.084-.179-.438-.438-.91-.531-1.813-.531c-.308 0-.481.172-.563.594l6.313 6.406h12.594v-9.844c0-.477-.314-.9-.781-1l-8.438-1.781-.781-.188V4.998c0-.565-.435-1-1-1zm-1 21v3h12v-3H12z"}})])
          )
        }
      }
    

/***/ }),

/***/ "c35b":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsTag","description":"Tags are used for styling and highlighting small pieces of information.\nMost of the time they are used for keywords or numbers.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"color","description":"The background color used for the tag.","tags":{},"values":["medium","inverse","primary","success","warning","danger"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'medium'"}},{"name":"size","description":"The size used for the text.","tags":{},"values":["base","large","small"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'base'"}},{"name":"round","description":"Whether the tag should be round","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"tag","description":"The html element name used for the text.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'span'"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "c3e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "--color-neutral-0": "rgb(250, 248, 251)",
  "--color-neutral-10": "rgb(245, 242, 248)",
  "--color-neutral-20": "rgb(230, 222, 237)",
  "--color-neutral-30": "rgb(205, 189, 219)",
  "--color-neutral-40": "rgb(179, 156, 201)",
  "--color-neutral-50": "rgb(154, 122, 184)",
  "--color-neutral-60": "rgb(129, 89, 166)",
  "--color-neutral-70": "rgb(103, 71, 133)",
  "--color-neutral-80": "rgb(72, 50, 93)",
  "--color-neutral-85": "rgb(57, 39, 73)",
  "--color-neutral-90": "rgb(46, 32, 60)",
  "--color-neutral-95": "rgb(36, 25, 46)",
  "--color-neutral-100": "rgb(26, 18, 33)",
  "--color-primary": "rgb(14, 216, 182)",
  "--color-primary-active": "rgb(15, 230, 194)",
  "--color-primary-inverse": "rgb(2, 24, 20)",
  "--color-secondary": "rgb(118, 14, 216)",
  "--color-secondary-active": "rgb(136, 25, 240)",
  "--color-secondary-inverse": "rgb(248, 241, 254)",
  "--color-success": "rgb(81, 193, 11)",
  "--color-success-active": "rgb(91, 217, 13)",
  "--color-success-inverse": "rgb(246, 254, 241)",
  "--color-danger": "rgb(223, 32, 64)",
  "--color-danger-active": "rgb(227, 59, 87)",
  "--color-danger-inverse": "rgb(253, 242, 244)",
  "--color-warning": "rgb(237, 120, 18)",
  "--color-warning-active": "rgb(239, 136, 46)",
  "--color-warning-inverse": "rgb(254, 247, 241)",
  "--color-yellow": "rgb(245, 196, 0)",
  "--color-yellow-active": "rgb(255, 206, 10)",
  "--color-yellow-inverse": "rgb(255, 252, 240)",
  "--text-color-base": "rgb(230, 222, 237)",
  "--text-color-soft": "rgb(179, 156, 201)",
  "--text-color-softer": "rgb(129, 89, 166)",
  "--text-color-disabled": "rgb(129, 89, 166)",
  "--text-color-inverse": "rgb(36, 25, 46)",
  "--text-color-link": "rgb(14, 216, 182)",
  "--text-color-link-active": "rgb(15, 230, 194)",
  "--text-color-primary": "rgb(14, 216, 182)",
  "--text-color-primary-inverse": "rgb(2, 24, 20)",
  "--text-color-secondary": "rgb(118, 14, 216)",
  "--text-color-secondary-inverse": "rgb(248, 241, 254)",
  "--text-color-success": "rgb(81, 193, 11)",
  "--text-color-success-inverse": "rgb(246, 254, 241)",
  "--text-color-warning": "rgb(237, 120, 18)",
  "--text-color-warning-inverse": "rgb(254, 247, 241)",
  "--text-color-danger": "rgb(223, 32, 64)",
  "--text-color-danger-inverse": "rgb(253, 242, 244)",
  "--background-color-base": "rgb(26, 18, 33)",
  "--background-color-soft": "rgb(36, 25, 46)",
  "--background-color-softer": "rgb(46, 32, 60)",
  "--background-color-softer-active": "rgb(36, 25, 46)",
  "--background-color-softest": "rgb(57, 39, 73)",
  "--background-color-softest-active": "rgb(46, 32, 60)",
  "--background-color-inverse": "rgb(250, 248, 251)",
  "--background-color-inverse-soft": "rgb(245, 242, 248)",
  "--background-color-inverse-softer": "rgb(230, 222, 237)",
  "--background-color-inverse-softer-active": "rgb(205, 189, 219)",
  "--background-color-primary": "rgb(14, 216, 182)",
  "--background-color-primary-active": "rgb(15, 230, 194)",
  "--background-color-primary-inverse": "rgb(2, 24, 20)",
  "--background-color-secondary": "rgb(118, 14, 216)",
  "--background-color-secondary-active": "rgb(136, 25, 240)",
  "--background-color-secondary-inverse": "rgb(248, 241, 254)",
  "--background-color-success": "rgb(81, 193, 11)",
  "--background-color-success-active": "rgb(91, 217, 13)",
  "--background-color-success-inverse": "rgb(246, 254, 241)",
  "--background-color-warning": "rgb(237, 120, 18)",
  "--background-color-warning-active": "rgb(239, 136, 46)",
  "--background-color-warning-inverse": "rgb(254, 247, 241)",
  "--background-color-danger": "rgb(223, 32, 64)",
  "--background-color-danger-active": "rgb(227, 59, 87)",
  "--background-color-danger-inverse": "rgb(253, 242, 244)",
  "--border-color-base": "rgb(129, 89, 166)",
  "--border-color-soft": "rgb(103, 71, 133)",
  "--border-color-softer": "rgb(72, 50, 93)",
  "--border-color-active": "rgb(14, 216, 182)",
  "--border-color-primary": "rgb(14, 216, 182)",
  "--border-color-success": "rgb(81, 193, 11)",
  "--border-color-warning": "rgb(237, 120, 18)",
  "--border-color-danger": "rgb(223, 32, 64)",
  "--border-size-base": "2px",
  "--border-size-large": "3px",
  "--border-size-x-large": "6px",
  "--border-radius-base": "6px",
  "--border-radius-rounded": "2em",
  "--border-radius-circle": "50%",
  "--font-size-xxxx-large": "3.5rem",
  "--font-size-xxx-large": "3rem",
  "--font-size-xx-large": "2rem",
  "--font-size-x-large": "1.5rem",
  "--font-size-large": "1.25rem",
  "--font-size-base": "1rem",
  "--font-size-body": "16px",
  "--font-size-small": "0.8rem",
  "--font-size-x-small": "0.7rem",
  "--font-size-xx-small": "0.6rem",
  "--font-family-heading": "'Ubuntu', sans-serif",
  "--font-family-text": "'OpenSans', sans-serif",
  "--font-family-code": "inconsolata, monospace",
  "--font-weight-regular": "normal",
  "--font-weight-bold": "600",
  "--line-height-base": "1.6",
  "--line-height-small": "1.3",
  "--line-height-smaller": "1.1",
  "--box-shadow-large": "0 20px 60px 0 rgba(0, 0, 0, .8)",
  "--box-shadow-base": "0px 12px 26px -4px rgba(0, 0, 0, .8)",
  "--box-shadow-small": "0px 8px 18px -2px rgba(0, 0, 0, .8)",
  "--box-shadow-x-small": "0px 0px 3px 0px rgba(0, 0, 0, .8)",
  "--box-shadow-active": "0 0 6px 1px rgba(20, 100, 160, 0.5)",
  "--box-shadow-inset": "inset 0 0 20px 1px rgba(0,0,0,.15)",
  "--box-shadow-small-inset": "inset 0 0 0 1px rgba(0,0,0,.15)"
});

/***/ }),

/***/ "c41f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 6a2 2 0 11.001 3.999A2 2 0 0116 6zm0 8a2 2 0 11.001 3.999A2 2 0 0116 14zm0 8a2 2 0 11.001 3.999A2 2 0 0116 22z"}})])
          )
        }
      }
    

/***/ }),

/***/ "c426":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M19.719 5.281l8 8 .688.719-.688.719-8 8-1.438-1.438L24.562 15H10.999c-2.774 0-5 2.226-5 5s2.226 5 5 5v2c-3.854 0-7-3.146-7-7s3.146-7 7-7h13.563l-6.281-6.281z"}})])
          )
        }
      }
    

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c564":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7 4h2v12c0 3.37 2.63 6 6 6s6-2.63 6-6V4h2v12c0 4.43-3.57 8-8 8s-8-3.57-8-8V4zM5 26h20v2H5v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "c666":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/List/ListItem.vue?vue&type=template&id=2d742e62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ds-list-item"},[_c('span',{staticClass:"ds-list-item-prefix"},[(!_vm.$parentList.ordered)?_c('span',{staticClass:"ds-list-item-icon"},[_c('ds-icon',{attrs:{"name":_vm.icon}})],1):_vm._e()]),_c('span',{staticClass:"ds-list-item-content"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-display/List/ListItem.vue?vue&type=template&id=2d742e62&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-display/List/ListItem.vue?vue&type=script&lang=js&
//
//
//
//
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

/* harmony default export */ var ListItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c6d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "--color-neutral-0": "rgb(15, 22, 36)",
  "--color-neutral-10": "rgb(24, 35, 57)",
  "--color-neutral-20": "rgb(46, 65, 107)",
  "--color-neutral-30": "rgb(61, 87, 143)",
  "--color-neutral-40": "rgb(69, 98, 161)",
  "--color-neutral-50": "rgb(112, 138, 194)",
  "--color-neutral-60": "rgb(148, 167, 209)",
  "--color-neutral-70": "rgb(184, 197, 224)",
  "--color-neutral-80": "rgb(219, 226, 240)",
  "--color-neutral-85": "rgb(234, 237, 246)",
  "--color-neutral-90": "rgb(241, 243, 249)",
  "--color-neutral-95": "rgb(248, 249, 252)",
  "--color-neutral-100": "rgb(255, 255, 255)",
  "--color-primary": "rgb(0, 106, 255)",
  "--color-primary-active": "rgb(20, 118, 255)",
  "--color-primary-inverse": "rgb(240, 246, 255)",
  "--color-secondary": "rgb(0, 204, 197)",
  "--color-secondary-active": "rgb(0, 214, 207)",
  "--color-secondary-inverse": "rgb(240, 255, 254)",
  "--color-success": "rgb(79, 172, 32)",
  "--color-success-active": "rgb(88, 194, 36)",
  "--color-success-inverse": "rgb(246, 253, 242)",
  "--color-danger": "rgb(210, 53, 45)",
  "--color-danger-active": "rgb(216, 77, 70)",
  "--color-danger-inverse": "rgb(252, 243, 242)",
  "--color-warning": "rgb(230, 121, 25)",
  "--color-warning-active": "rgb(233, 137, 53)",
  "--color-warning-inverse": "rgb(253, 247, 241)",
  "--color-yellow": "rgb(245, 196, 0)",
  "--color-yellow-active": "rgb(255, 206, 10)",
  "--color-yellow-inverse": "rgb(255, 252, 240)",
  "--text-color-base": "rgb(46, 65, 107)",
  "--text-color-soft": "rgb(69, 98, 161)",
  "--text-color-softer": "rgb(148, 167, 209)",
  "--text-color-disabled": "rgb(148, 167, 209)",
  "--text-color-inverse": "rgb(248, 249, 252)",
  "--text-color-link": "rgb(0, 106, 255)",
  "--text-color-link-active": "rgb(20, 118, 255)",
  "--text-color-primary": "rgb(0, 106, 255)",
  "--text-color-primary-inverse": "rgb(240, 246, 255)",
  "--text-color-secondary": "rgb(0, 204, 197)",
  "--text-color-secondary-inverse": "rgb(240, 255, 254)",
  "--text-color-success": "rgb(79, 172, 32)",
  "--text-color-success-inverse": "rgb(246, 253, 242)",
  "--text-color-warning": "rgb(230, 121, 25)",
  "--text-color-warning-inverse": "rgb(253, 247, 241)",
  "--text-color-danger": "rgb(210, 53, 45)",
  "--text-color-danger-inverse": "rgb(252, 243, 242)",
  "--background-color-base": "rgb(255, 255, 255)",
  "--background-color-soft": "rgb(248, 249, 252)",
  "--background-color-softer": "rgb(241, 243, 249)",
  "--background-color-softer-active": "rgb(248, 249, 252)",
  "--background-color-softest": "rgb(234, 237, 246)",
  "--background-color-softest-active": "rgb(241, 243, 249)",
  "--background-color-inverse": "rgb(15, 22, 36)",
  "--background-color-inverse-soft": "rgb(24, 35, 57)",
  "--background-color-inverse-softer": "rgb(46, 65, 107)",
  "--background-color-inverse-softer-active": "rgb(61, 87, 143)",
  "--background-color-primary": "rgb(0, 106, 255)",
  "--background-color-primary-active": "rgb(20, 118, 255)",
  "--background-color-primary-inverse": "rgb(240, 246, 255)",
  "--background-color-secondary": "rgb(0, 204, 197)",
  "--background-color-secondary-active": "rgb(0, 214, 207)",
  "--background-color-secondary-inverse": "rgb(240, 255, 254)",
  "--background-color-success": "rgb(79, 172, 32)",
  "--background-color-success-active": "rgb(88, 194, 36)",
  "--background-color-success-inverse": "rgb(246, 253, 242)",
  "--background-color-warning": "rgb(230, 121, 25)",
  "--background-color-warning-active": "rgb(233, 137, 53)",
  "--background-color-warning-inverse": "rgb(253, 247, 241)",
  "--background-color-danger": "rgb(210, 53, 45)",
  "--background-color-danger-active": "rgb(216, 77, 70)",
  "--background-color-danger-inverse": "rgb(252, 243, 242)",
  "--border-color-base": "rgb(148, 167, 209)",
  "--border-color-soft": "rgb(184, 197, 224)",
  "--border-color-softer": "rgb(219, 226, 240)",
  "--border-color-active": "rgb(0, 106, 255)",
  "--border-color-primary": "rgb(0, 106, 255)",
  "--border-color-success": "rgb(79, 172, 32)",
  "--border-color-warning": "rgb(230, 121, 25)",
  "--border-color-danger": "rgb(210, 53, 45)",
  "--font-family-heading": "Sailec-Bold,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",
  "--font-family-text": "Sailec-Regular,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",
  "--font-family-code": "inconsolata, monospace",
  "--font-weight-regular": "normal",
  "--font-weight-bold": "600",
  "--box-shadow-large": "0 20px 60px 0 rgba(0, 0, 0, .15)",
  "--box-shadow-base": "0 2px 4px rgba(3,27,78,.06)",
  "--box-shadow-small": "0px 8px 18px -2px rgba(0, 0, 0, .1)",
  "--box-shadow-x-small": "0px 0px 3px 0px rgba(0, 0, 0, .1)",
  "--box-shadow-active": "0 0 6px 1px rgba(20, 100, 160, 0.5)",
  "--box-shadow-inset": "inset 0 0 20px 1px rgba(0,0,0,.15)",
  "--box-shadow-small-inset": "inset 0 0 0 1px rgba(0,0,0,.05)"
});

/***/ }),

/***/ "c6e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Icon/Icon.vue?vue&type=template&id=166f9508&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-icon",attrs:{"aria-label":_vm.ariaLabel}},[(_vm.svgComponent)?_c(_vm.svgComponent,{tag:"component",staticClass:"ds-icon-svg"}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Icon/Icon.vue?vue&type=template&id=166f9508&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Icon/Icon.vue?vue&type=script&lang=js&

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
      var icon = system_icons[this.name];

      if (!icon) {
        return false;
      }

      return icon.render ? icon : icon.default;
    }
  }
});
// CONCATENATED MODULE: ./src/system/components/typography/Icon/Icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icon_Iconvue_type_script_lang_js_ = (Iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/typography/Icon/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("cb7d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Icon/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FIcon%2FIcon.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Icon/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FIcon%2FIcon.vue
 /* harmony default export */ var Icon_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon); 
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

if (typeof Icon_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon === 'function') Icon_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FIcon_2FIcon(component)

/* harmony default export */ var Icon = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c6e9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c74f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M10.719 3.281l2.313 2.313c.923-.39 1.922-.594 2.969-.594s2.046.203 2.969.594l2.313-2.313 1.438 1.438-1.938 1.938c1.462 1.119 2.61 2.755 3.344 4.656l2.438-1.219.875 1.813-2.75 1.375c.183.876.313 1.782.313 2.719 0 .34-.006.666-.031 1h3.031v2h-3.375c-.242 1.043-.561 2.039-1.031 2.938l3 2.25-1.188 1.625-2.938-2.188c-1.618 2.056-3.885 3.375-6.469 3.375s-4.851-1.319-6.469-3.375l-2.938 2.188-1.188-1.625 3-2.25c-.47-.898-.789-1.894-1.031-2.938H4.001v-2h3.031c-.025-.334-.031-.66-.031-1 0-.937.13-1.843.313-2.719l-2.75-1.375.875-1.813 2.438 1.219c.734-1.901 1.882-3.538 3.344-4.656L9.283 4.719zM16 7c-1.978 0-3.827 1.094-5.125 2.875C12.009 10.386 13.799 11 16 11s3.991-.614 5.125-1.125C19.827 8.094 17.978 7 16 7zm-6.094 4.594A10.93 10.93 0 009 16c0 4.629 2.698 8.282 6 8.906V12.937a14.623 14.623 0 01-5.094-1.344zm12.188 0A14.645 14.645 0 0117 12.938v11.969c3.302-.625 6-4.278 6-8.906 0-1.618-.337-3.115-.906-4.406z"}})])
          )
        }
      }
    

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
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca53":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3.594l.719.688 7 7-1.438 1.438L17 7.439v16.563h-2V7.439L9.719 12.72l-1.438-1.438 7-7zM7 26h18v2H7v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cabe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return /* reexport */ media_query; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

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

  try {
    if (window && typeof window !== 'undefined') {
      window.addEventListener('resize', updateWindowSize);
      updateWindowSize();
    }

    init = true;
  } catch (err) {
    init = true;
    return false;
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

      if (arg === null || Object(esm_typeof["a" /* default */])(arg) !== 'object') {
        return arg;
      }

      var result = arg.base;
      Object.keys(tokens["c" /* tokenMap */].mediaSize).reverse().some(function (key) {
        var width = tokens["c" /* tokenMap */].mediaSize[key].value;

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



/***/ }),

/***/ "cb29":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsTableHeadCol","description":"Used in combination with the table component to create data tables.","tags":{"version":[{"description":"1.0.0","title":"version"}],"see":[{"description":"DsTable","title":"see"}],"access":[{"description":"private","title":"access"}]},"exportName":"default","props":[{"name":"label","description":"The column value","type":{"name":"number|string|array|object"},"defaultValue":{"func":true,"value":"function() {\n  return null\n}"}},{"name":"width","description":"The column width","type":{"name":"string|number|object"},"defaultValue":{"func":false,"value":"null"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "cb7d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ad07");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cd66":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6983");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "ce65":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsSpinner","exportName":"default","docsBlocks":[""],"description":"","tags":{},"props":[{"name":"size","description":"The size used for the spinner.","tags":{},"values":["small","base","large"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'base'"}},{"name":"inverse","description":"Set to true, if you use it on dark background","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"primary","description":"Primary style","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"secondary","description":"Secondary style","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"danger","description":"Danger style","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}]}

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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M27 3.781V21c0 2.197-1.803 4-4 4s-4-1.803-4-4 1.803-4 4-4a3.92 3.92 0 012 .563v-7.375l-14 2.625v11.188c0 2.197-1.803 4-4 4s-4-1.803-4-4 1.803-4 4-4a3.92 3.92 0 012 .563V7.158l.813-.125 16-3zm-2 2.407L11 8.813v2l14-2.625v-2zM23 19c-1.116 0-2 .884-2 2s.884 2 2 2 2-.884 2-2-.884-2-2-2zM7 22c-1.116 0-2 .884-2 2s.884 2 2 2 2-.884 2-2-.884-2-2-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "cf1c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3c7.168 0 13 5.832 13 13s-5.832 13-13 13S3 23.168 3 16 8.832 3 16 3zm-1.125 2.063A10.98 10.98 0 005 16.001c0 6.087 4.913 11 11 11 2.687 0 5.155-.938 7.063-2.531l-7.781-7.75-.281-.313V5.063c-.041.004-.084-.004-.125 0zm2.125 0v9.938h9.938A10.957 10.957 0 0017 5.063zM18.438 17l6.031 6.063c1.393-1.668 2.262-3.768 2.469-6.063h-8.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "cf87":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("90bf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 5h17v19.063l4.281-4.281 1.438 1.438-6 6-.719.688-.719-.688-6-6 1.438-1.438L20 24.063V7H5V5z"}})])
          )
        }
      }
    

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

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2b3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("442b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3aa":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 5c6.063 0 11 4.937 11 11v8c0 1.645-1.355 3-3 3h-3v-9h4v-2c0-4.983-4.017-9-9-9s-9 4.017-9 9v2h4v9H8c-1.645 0-3-1.355-3-3v-8C5 9.937 9.937 5 16 5zM7 20v4c0 .565.435 1 1 1h1v-5H7zm16 0v5h1c.565 0 1-.435 1-1v-4h-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d3e9":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 5h2v2H4V5zm17 0h2v18.688l2.594-2.594L27 22.5l-4.281 4.313-.719.688-.719-.688L17 22.5l1.406-1.406L21 23.688V5zM4 9h4v2H4V9zm0 4h6v2H4v-2zm0 4h8v2H4v-2zm0 4h10v2H4v-2zm0 4h12v2H4v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d4b3":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 6c3.766 0 7.094.392 9.125.688 1.679.245 3.035 1.512 3.344 3.188.264 1.429.531 3.518.531 6.125s-.268 4.697-.531 6.125c-.309 1.677-1.664 2.944-3.344 3.188-2.038.296-5.379.688-9.125.688s-7.088-.392-9.125-.688c-1.679-.243-3.034-1.512-3.344-3.188C3.268 20.7 3 18.613 3 16.001s.268-4.698.531-6.125c.309-1.675 1.666-2.943 3.344-3.188C8.906 6.392 12.233 6 16 6zm0 2c-3.633 0-6.881.37-8.844.656A1.961 1.961 0 005.5 10.25C5.257 11.57 5 13.521 5 16s.257 4.43.5 5.75a1.963 1.963 0 001.656 1.594C9.127 23.63 12.389 24 16 24s6.872-.37 8.844-.656A1.96 1.96 0 0026.5 21.75c.243-1.322.5-3.279.5-5.75s-.256-4.429-.5-5.75a1.963 1.963 0 00-1.656-1.594A62.988 62.988 0 0016 8zm-3 2.281l1.5.844 7 4L23 16l-1.5.875-7 4-1.5.844V10.281zm2 3.438v4.563l3.969-2.281z"}})])
          )
        }
      }
    

/***/ }),

/***/ "d4c3":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");
var global = __webpack_require__("da84");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
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
	"./data-input/Form/Form.vue": "e0f5",
	"./data-input/FormItem/FormItem.vue": "5d96",
	"./data-input/FormItem/InputError.vue": "f9ab",
	"./data-input/FormItem/InputLabel.vue": "aebf",
	"./data-input/Input/Input.vue": "6875",
	"./data-input/Radio/Radio.vue": "905d",
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
	"./layout/Spinner/Spinner.vue": "80f7",
	"./navigation/Button/Button.vue": "42cf",
	"./navigation/Menu/Menu.vue": "7bf7",
	"./navigation/Menu/MenuItem.vue": "b10d",
	"./typography/Chip/Chip.vue": "be3c",
	"./typography/Code/Code.vue": "7120",
	"./typography/Heading/Heading.vue": "f63e",
	"./typography/Icon/Icon.vue": "c6e1",
	"./typography/Logo/Logo.vue": "164d",
	"./typography/Tag/Tag.vue": "c1fe",
	"./typography/Text/Text.vue": "ddb0e"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "d7b2";

/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d940":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3a3 3 0 110 6 3 3 0 010-6zM8.938 6.438a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm14.125 1.5a1 1 0 110 2 1 1 0 010-2zM6 13.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm20 1a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM8.938 21.063a2 2 0 11.001 3.999 2 2 0 01-.001-3.999zm14.125.5a1.5 1.5 0 11-.001 3.001 1.5 1.5 0 01.001-3.001zM16 24.25a1.75 1.75 0 11-.001 3.501A1.75 1.75 0 0116 24.25z"}})])
          )
        }
      }
    

/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "daef":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3c7.168 0 13 5.832 13 13s-5.832 13-13 13S3 23.168 3 16 8.832 3 16 3zm0 2c-2.647 0-5.073.918-6.969 2.469l15.344 15.656A10.936 10.936 0 0027 16c0-6.087-4.913-11-11-11zM7.625 8.875A10.936 10.936 0 005 16c0 6.087 4.913 11 11 11 2.647 0 5.073-.918 6.969-2.469z"}})])
          )
        }
      }
    

/***/ }),

/***/ "db82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4cf4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dba5":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 4h2v12h-2V4zm-3 .688v2.156C8.474 8.39 6 11.909 6 16c0 5.514 4.486 10 10 10s10-4.486 10-10c0-4.091-2.474-7.609-6-9.156V4.688c4.654 1.651 8 6.099 8 11.313 0 6.617-5.383 12-12 12s-12-5.383-12-12c0-5.213 3.346-9.662 8-11.313z"}})])
          )
        }
      }
    

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "ddb0e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Text/Text.vue?vue&type=template&id=5420cc81&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-text",class:[
    _vm.size && ("ds-text-size-" + _vm.size),
    _vm.color && ("ds-text-" + _vm.color),
    _vm.bold && "ds-text-bold",
    _vm.inline && "ds-text-inline" ]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Text/Text.vue?vue&type=template&id=5420cc81&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Text/Text.vue?vue&type=script&lang=js&


//
//
//
//
//
//
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
     * @values default, soft, softer, primary, inverse, success, warning, danger
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
     * Whether the text is inline.
     * @default false
     */
    inline: {
      type: Boolean,
      default: function _default() {
        return !!this.$parentText;
      }
    },

    /**
     * The size used for the text.
     * @values small, base, large, x-large
     */
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return value.match(/(small|base|large|x-large)/);
      }
    },

    /**
     * The html tag used for the text.
     * @default p
     */
    tag: {
      type: String,
      default: function _default() {
        return this.inline ? 'span' : 'p';
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Text/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FText%2FText.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Text/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FText%2FText.vue
 /* harmony default export */ var Text_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText); 
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

if (typeof Text_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText === 'function') Text_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FText_2FText(component)

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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M10 6h2v20h-2V6zm10 0h2v20h-2V6z"}})])
          )
        }
      }
    

/***/ }),

/***/ "de06":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsFlex","description":"Used in combination with the flex item component to create flexible layouts.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"gutter","description":"Default gutter size of columns","type":{"name":"string|object"},"defaultValue":{"func":false,"value":"null"}},{"name":"width","description":"Default width of columns","type":{"name":"string|number|object"},"defaultValue":{"func":false,"value":"1"}},{"name":"direction","description":"Direction of the flex items","tags":{},"values":["row","row-reverse","column","column-reverse"],"type":{"name":"string|object"},"defaultValue":{"func":false,"value":"null"}},{"name":"tag","description":"The outtermost html tag","type":{"name":"string"},"defaultValue":{"func":false,"value":"'div'"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "de58":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21 4a5.423 5.423 0 013.844 9.25l-9.375 9.375c-1.246 1.245-3.286 1.245-4.531 0s-1.245-3.286 0-4.531L19.532 9.5l1.406 1.406-8.594 8.594a1.204 1.204 0 000 1.719 1.204 1.204 0 001.719 0l9.375-9.375c1.345-1.345 1.345-3.499 0-4.844s-3.499-1.345-4.844 0l-9.375 9.375a5.622 5.622 0 000 7.969 5.622 5.622 0 007.969 0l6.25-6.25 1.406 1.406-6.25 6.25c-2.973 2.972-7.809 2.972-10.781 0s-2.972-7.809 0-10.781l9.375-9.375A5.369 5.369 0 0121.001 4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "dec8":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsContainer","description":"This component is used as a wrapper for the page's content.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"tag","description":"The outtermost html tag","type":{"name":"string"},"defaultValue":{"func":false,"value":"'div'"}},{"name":"width","description":"The maximum width the container will take.\nThe widths correspond to the different media breakpoints.","tags":{},"values":["x-small","small","medium","large","x-large"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'x-large'"}},{"name":"centered","description":"Center the content","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "dfbc":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9.5 5c3.433 0 5.645 2.066 6.5 2.938C16.855 7.067 19.067 5 22.5 5c4.138 0 7.5 3.404 7.5 7.5 0 2.857-2.469 5.031-2.469 5.031L16 29.094l-.719-.719L4.468 17.531s-.619-.573-1.219-1.469-1.25-2.134-1.25-3.563c0-4.096 3.362-7.5 7.5-7.5zm0 2C6.458 7 4 9.496 4 12.5c0 .772.423 1.716.906 2.438s.969 1.188.969 1.188L16 26.251l10.125-10.125S28 14.046 28 12.501c0-3.004-2.458-5.5-5.5-5.5-2.986 0-5.75 2.906-5.75 2.906l-.75.844-.75-.844S12.486 7.001 9.5 7.001z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var nativeSymbol = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = nativeSymbol ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e04f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16.188 4c6.337.093 11.62 5.29 11.813 11.625.005.143 0 .274 0 .406-.012 3.289-2.716 5.97-6 5.969-1.271-.001-2.391-.628-3.125-1.563-.827.948-2.027 1.563-3.375 1.563a4.516 4.516 0 01-4.5-4.5v-3c0-2.473 2.027-4.5 4.5-4.5.928 0 1.781.295 2.5.781V10h2v8c0 1.116.883 1.999 2 2a3.983 3.983 0 004-3.969c0-.122.003-.231 0-.344-.16-5.253-4.589-9.61-9.844-9.688-6.165-.09-11.048 5.348-10 11.719.696 4.234 4.182 7.613 8.438 8.188 2.919.394 5.61-.452 7.656-2.094l1.25 1.563c-2.452 1.968-5.691 2.968-9.156 2.5-5.139-.694-9.346-4.723-10.188-9.844C2.915 10.486 8.823 3.892 16.188 4zm-.688 8a2.484 2.484 0 00-2.5 2.5v3c0 1.393 1.107 2.5 2.5 2.5s2.5-1.107 2.5-2.5v-3c0-1.393-1.107-2.5-2.5-2.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e085":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsPageTitle","description":"This component is used as the title of a page.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"heading","description":"The heading of the page.","type":{"name":"string"},"required":true,"defaultValue":{"func":false,"value":"''"}},{"name":"highlight","description":"Whether this title should be highlighted","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"tag","description":"The html element name used for the title.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'header'"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "e0f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Form/Form.vue?vue&type=template&id=659174ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"ds-form",attrs:{"novalidate":"true","autocomplete":"off"},on:{"submit":function($event){$event.preventDefault();return _vm.submit.apply(null, arguments)}}},[_vm._t("default",null,{"errors":_vm.errors,"reset":_vm.reset})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/Form/Form.vue?vue&type=template&id=659174ee&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/async-validator/dist-web/index.js
var dist_web = __webpack_require__("2a95");

// EXTERNAL MODULE: ./node_modules/clone-deep/index.js
var clone_deep = __webpack_require__("9675");
var clone_deep_default = /*#__PURE__*/__webpack_require__.n(clone_deep);

// EXTERNAL MODULE: ./node_modules/dot-prop/index.js
var dot_prop = __webpack_require__("abc6");
var dot_prop_default = /*#__PURE__*/__webpack_require__.n(dot_prop);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/Form/Form.vue?vue&type=script&lang=js&






//
//
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
 * Used for handling complex user input.
 * @version 1.0.0
 */

/* harmony default export */ var Formvue_type_script_lang_js_ = ({
  name: 'DsForm',
  provide: function provide() {
    return {
      $parentForm: this
    };
  },
  props: {
    /**
     * The value of the form. Can be passed via v-model.
     */
    value: {
      type: Object,
      required: true
    },

    /**
     * The async-validator schema used for the form data.
     */
    schema: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      newData: null,
      subscriber: [],
      errors: null
    };
  },
  watch: {
    value: {
      handler: function handler(value) {
        this.newData = clone_deep_default()(value);
        this.notify(value, this.errors);
      },
      deep: true
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.validate(function () {
        /**
         * Fires after user input.
         * Receives the current form data.
         *
         * @event input
         */
        _this.$emit('input', _this.newData);
        /**
         * Fires on form submit.
         * Receives the current form data.
         *
         * @event submit
         */


        _this.$emit('submit', _this.newData);
      });
    },
    validate: function validate(cb) {
      var _this2 = this;

      var validator = new dist_web["a" /* default */](this.schema); // Prevent validator from printing to console
      // eslint-disable-next-line

      var warn = console.warn; // eslint-disable-next-line

      console.warn = function () {};

      validator.validate(this.newData, function (errors) {
        if (errors) {
          _this2.errors = errors.reduce(function (errorObj, error) {
            var result = Object(objectSpread2["a" /* default */])({}, errorObj);

            result[error.field] = error.message;
            return result;
          }, {});
        } else {
          _this2.errors = null;
        } // eslint-disable-next-line


        console.warn = warn;

        _this2.notify(_this2.newData, _this2.errors);

        if (!errors && cb && typeof cb === 'function') {
          cb();
        }
      });
    },
    subscribe: function subscribe(cb) {
      if (cb && typeof cb === 'function') {
        cb(clone_deep_default()(this.newData));
        this.subscriber.push(cb);
      }
    },
    unsubscribe: function unsubscribe(cb) {
      var index = this.subscriber.findIndex(cb);

      if (index > -1) {
        this.subscriber.splice(index, 1);
      }
    },
    notify: function notify(data, errors) {
      this.subscriber.forEach(function (cb) {
        cb(clone_deep_default()(data), errors);
      });
    },
    update: function update(model, value) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dot_prop_default.a.set(_this3.newData, model, value);

                _this3.validate();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    reset: function reset() {
      this.$emit('input', clone_deep_default()(this.value));
    }
  },
  created: function created() {
    this.newData = clone_deep_default()(this.value);
  }
});
// CONCATENATED MODULE: ./src/system/components/data-input/Form/Form.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_Formvue_type_script_lang_js_ = (Formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/system/components/data-input/Form/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__("6548");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/data-input/Form/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FForm%2FForm.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FForm_2FForm = (function () {});
// CONCATENATED MODULE: ./src/system/components/data-input/Form/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Fdata-input%2FForm%2FForm.vue
 /* harmony default export */ var Form_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FForm_2FForm = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FForm_2FForm); 
// CONCATENATED MODULE: ./src/system/components/data-input/Form/Form.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Form_Formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Form_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FForm_2FForm === 'function') Form_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Fdata_input_2FForm_2FForm(component)

/* harmony default export */ var Form = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e146":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 6.594l.719.688 12.5 12.5-1.438 1.438L16 9.439 4.219 21.22l-1.438-1.438 12.5-12.5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e1b4":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9 5.156l1.531 1L25.844 16 9 26.844V5.156zm2 3.657v14.375L22.156 16z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e1ec":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM20.094 14a1 1 0 110 2 1 1 0 010-2zM13 15.594l.719.688L16 18.563l1.281-1.281.719-.688.719.688 3 3-1.438 1.438L18 19.439l-1.281 1.281-.719.688-.719-.688L13 18.439 9.719 21.72l-1.438-1.438 4-4z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e30f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 3h13.406l.313.281 6 6 .281.313V29H5V3zm2 2v22h16V11h-6V5H7zm12 1.438v2.563h2.563zM10 13h10v2H10v-2zm0 4h10v2H10v-2zm0 4h10v2H10v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e3d1":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 2c3.854 0 7 3.146 7 7a7.027 7.027 0 01-3.094 5.813c.486.208.964.441 1.406.719A7.965 7.965 0 0122 14.001c4.406 0 8 3.594 8 8s-3.594 8-8 8-8-3.594-8-8c0-1.897.671-3.657 1.781-5.031A7.889 7.889 0 0012 16.001c-4.431 0-8 3.569-8 8H2c0-4.119 2.527-7.658 6.094-9.188A7.025 7.025 0 015 9c0-3.854 3.146-7 7-7zm0 2C9.227 4 7 6.227 7 9s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zm10 12c-3.326 0-6 2.674-6 6s2.674 6 6 6 6-2.674 6-6-2.674-6-6-6zm-1 2h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e4a8":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-1 2h2v7h5v2h-7V8z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e542":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-4.5 6a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0111.5 12zm9 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0120.5 12zM16 18c2.667 0 5.02 1.335 6.469 3.344L20.844 22.5C19.752 20.986 18.009 20 16 20s-3.752.986-4.844 2.5l-1.625-1.156C10.979 19.336 13.332 18 16 18z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e577":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b89f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e5b9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e5e4":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsCopyField","description":"A copy field is used to present text that can easily\nbe copied to the users clipboard by clicking on it.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"size","description":"The size used for the text.","tags":{},"values":["small","base","large"],"type":{"name":"string"},"defaultValue":{"func":false,"value":"'base'"}},{"name":"tag","description":"The html element name used for the copy field.","type":{"name":"string"},"defaultValue":{"func":false,"value":"'div'"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


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
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    !isServer(vNode) && document.addEventListener(clickHandler, handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },

  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    !isServer(vNode) && el.__vueClickOutside__ && document.removeEventListener(clickHandler, el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "e67df":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M24.969 3h.063a2.987 2.987 0 012.969 2.969c0 .976-.478 1.885-1.281 2.438l-2.125 1.469c-.041.028-.025.093-.063.125h3.469v2h-6v-1A3.38 3.38 0 0123.47 8.22l2.125-1.469a.927.927 0 00.406-.781.955.955 0 00-.969-.969h-.063A.955.955 0 0024 5.97v.031h-2V5.97a2.987 2.987 0 012.969-2.969zM4.156 8h6.375l.313.469 1.656 2.563 1.656-2.563.313-.469h6.375l-1 1.531L15.688 16l4.156 6.469 1 1.531h-6.375l-.313-.469-1.656-2.563-1.656 2.563-.313.469H4.156l1-1.531L9.312 16 5.156 9.531zm3.657 2l3.875 6-.344.531L7.813 22h1.656l2.188-3.438.844-1.313.844 1.313L15.533 22h1.656l-3.875-6 .344-.531L17.189 10h-1.656l-2.188 3.438-.844 1.313-.844-1.313L9.469 10H7.813z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var IS_BROWSER = __webpack_require__("6069");
var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromiseConstructorPrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


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


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 5c3.854 0 7 3.146 7 7a7.027 7.027 0 01-3.094 5.813C22.473 19.343 25 22.882 25 27.001h-2c0-4.431-3.569-8-8-8s-8 3.569-8 8H5c0-4.119 2.527-7.658 6.094-9.188A7.025 7.025 0 018 12c0-3.854 3.146-7 7-7zm0 2c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e8e0":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 5c2.451 0 4.563 1.302 5.813 3.219.392-.089.755-.219 1.188-.219 3.302 0 6 2.698 6 6 1.73 1.055 3 2.835 3 5 0 3.302-2.698 6-6 6h-20c-3.302 0-6-2.698-6-6s2.698-6 6-6c.211 0 .394.04.594.063.531-1.191 1.439-2.083 2.656-2.563.698-3.129 3.419-5.5 6.75-5.5zm0 2a4.972 4.972 0 00-4.938 4.25l-.094.688-.656.156c-1.11.265-2.002 1.136-2.25 2.25l-.188.969-1-.219A3.931 3.931 0 005.999 15c-2.22 0-4 1.78-4 4s1.78 4 4 4h20c2.22 0 4-1.78 4-4a4.008 4.008 0 00-2.438-3.688l-.656-.281.063-.719c.018-.235.031-.321.031-.313 0-2.22-1.78-4-4-4-.444 0-.875.096-1.313.25l-.844.281-.375-.781a4.998 4.998 0 00-4.469-2.75z"}})])
          )
        }
      }
    

/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "e98a":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16-2h2v4h-2v-4zm4 1h2v3h-2v-3zM10 3h18v4h2c1.645 0 3 1.355 3 3v3c0 1.645-1.355 3-3 3h-2v5c0 1.645-1.355 3-3 3H13c-1.645 0-3-1.355-3-3V3zm2 2v16c0 .555.445 1 1 1h12c.555 0 1-.445 1-1V5H12zm16 4v5h2c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1h-2z"}})])
          )
        }
      }
    

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
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1fac");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e9d5":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3 7h26v2H3V7zm0 4h26v2H3v-2zm0 4h26v2H3v-2zm0 4h26v2H3v-2zm0 4h26v2H3v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "ea1f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "ebba":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15 4.594v22.813l-1.719-1.688L8.562 21H3.999V11h4.563l4.719-4.719zm9.125 1.781C26.51 8.886 28 12.271 28 16s-1.49 7.113-3.875 9.625l-1.406-1.406C24.743 22.07 26 19.178 26 16s-1.257-6.071-3.281-8.219zm-2.812 2.813c1.661 1.786 2.688 4.187 2.688 6.813s-1.026 5.026-2.688 6.813l-1.406-1.438c1.3-1.424 2.094-3.3 2.094-5.375s-.794-3.952-2.094-5.375zM13 9.438l-3.281 3.281-.313.281H6v6h3.406l.313.281L13 22.562V9.437zm5.5 2.593C19.439 13.09 20 14.477 20 16s-.561 2.91-1.5 3.969l-1.438-1.438C17.64 17.837 18 16.972 18 16s-.36-1.837-.938-2.531z"}})])
          )
        }
      }
    

/***/ }),

/***/ "ebfd":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M30.336 12.547l-7.599 6.846L24.859 29.4 16 24.289 7.141 29.4l2.122-10.006-7.599-6.847 10.172-1.073L16 2.131l4.164 9.343z"}})])
          )
        }
      }
    

/***/ }),

/***/ "ec0a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ed7d":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsFormItem","description":"","tags":{"version":[{"description":"1.0.0","title":"version"}],"access":[{"description":"private","title":"access"}]},"exportName":"default","slots":[{"name":"default"}]}

/***/ }),

/***/ "ef5d":
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}


/***/ }),

/***/ "f05f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm0 1a1 1 0 110 2 1 1 0 010-2zm-5.656 2.344a1 1 0 110 2 1 1 0 010-2zm10.594.312l1.438 1.406-4.438 4.438a2 2 0 11-1.437-1.437zM8 15a1 1 0 110 2 1 1 0 010-2zm16 0a1 1 0 110 2 1 1 0 010-2zm-13.656 5.656a1 1 0 110 2 1 1 0 010-2zm11.312 0a1 1 0 110 2 1 1 0 010-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f1cd":
/***/ (function(module, exports) {

/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* global DOMException */

module.exports = clipboardCopy

function makeError () {
  return new DOMException('The request is not allowed', 'NotAllowedError')
}

async function copyClipboardApi (text) {
  // Use the Async Clipboard API when available. Requires a secure browsing
  // context (i.e. HTTPS)
  if (!navigator.clipboard) {
    throw makeError()
  }
  return navigator.clipboard.writeText(text)
}

async function copyExecCommand (text) {
  // Put the text to copy into a <span>
  const span = document.createElement('span')
  span.textContent = text

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = 'pre'
  span.style.webkitUserSelect = 'auto'
  span.style.userSelect = 'all'

  // Add the <span> to the page
  document.body.appendChild(span)

  // Make a selection object representing the range of text selected by the user
  const selection = window.getSelection()
  const range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // Copy text to the clipboard
  let success = false
  try {
    success = window.document.execCommand('copy')
  } finally {
    // Cleanup
    selection.removeAllRanges()
    window.document.body.removeChild(span)
  }

  if (!success) throw makeError()
}

async function clipboardCopy (text) {
  try {
    await copyClipboardApi(text)
  } catch (err) {
    // ...Otherwise, use document.execCommand() fallback
    try {
      await copyExecCommand(text)
    } catch (err2) {
      throw (err2 || err || makeError())
    }
  }
}


/***/ }),

/***/ "f22a":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 4h16v3h-2V6H6v16h5v2H4V4zm8 4h16v20H12V8zm2 2v16h12V10H14z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f23e":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 4h16v3h-2V6H6v16h5v2H4V4zm8 4h16v20H12V8zm2 2v16h12V10H14z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f422":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3 7h13v2H3V7zm0 4h20v2H3v-2zm22 0l5 5-5 5V11zM3 15h20v2H3v-2zm0 4h20v2H3v-2zm0 4h13v2H3v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f48f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 3.219l.875 1.5 12 20.781.844 1.5H2.281l.844-1.5 12-20.781zm0 4L5.75 25h20.5zM15 14h2v6h-2v-6zm0 7h2v2h-2v-2z"}})])
          )
        }
      }
    

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

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f63e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Heading/Heading.vue?vue&type=template&id=1765009e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-heading",class:[
    ("ds-heading-" + (_vm.size || _vm.tag)),
    _vm.primary && "ds-heading-primary",
    _vm.soft && "ds-heading-soft" ]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/typography/Heading/Heading.vue?vue&type=template&id=1765009e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/typography/Heading/Heading.vue?vue&type=script&lang=js&


//
//
//
//
//
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
     * @values h1, h2, h3, h4, h5, h6
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
     * @values h1, h2, h3, h4, h5, h6
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
     */
    primary: {
      type: Boolean,
      default: false
    },

    /**
     * Muted style
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/typography/Heading/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FHeading%2FHeading.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading = (function () {});
// CONCATENATED MODULE: ./src/system/components/typography/Heading/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Ftypography%2FHeading%2FHeading.vue
 /* harmony default export */ var Heading_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading); 
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

if (typeof Heading_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading === 'function') Heading_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Ftypography_2FHeading_2FHeading(component)

/* harmony default export */ var Heading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f64e":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M17 0a1 1 0 110 2 1 1 0 010-2zm-3 3a1 1 0 011 1h7v2h-1v7.656l6.156 7.938c.543.698.844 1.553.844 2.438a3.978 3.978 0 01-3.969 3.969H7.968a3.978 3.978 0 01-3.969-3.969c0-.885.301-1.74.844-2.438l6.156-7.938V6h-1V4h3a1 1 0 011-1zm-1 3v8.344L10.156 18h11.688L19 14.344V6h-6zm4 4a1 1 0 110 2 1 1 0 010-2zM8.594 20l-2.188 2.813A1.985 1.985 0 006 24.032c0 1.105.864 1.969 1.969 1.969h16.063a1.947 1.947 0 001.969-1.969c0-.439-.137-.873-.406-1.219L23.407 20H8.594z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f72e":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M14.594 4H25v10.406l-.281.313-11 11-.719.688-.719-.688-9-9L2.593 16l.688-.719 11-11zm.844 2l-10 10 7.563 7.563 10-10V6h-7.563zM26 7h3v11l-.281.313L17.5 29.407l-.719-.688-1.938-1.969 1.406-1.406 1.25 1.25 9.5-9.438V9h-1V7zm-6 1a1 1 0 110 2 1 1 0 010-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f746":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 5c1.749 0 2.939 1.329 3.719 2.438.104.148.189.293.281.438.092-.145.177-.289.281-.438C17.06 6.33 18.251 5 20 5c1.645 0 3 1.355 3 3 0 .353-.073.684-.188 1H28v6h-1v13H5V15H4V9h5.188A2.925 2.925 0 019 8c0-1.645 1.355-3 3-3zm0 2c-.565 0-1 .435-1 1s.435 1 1 1h2.313c-.121-.206-.097-.22-.25-.438-.627-.892-1.436-1.563-2.063-1.563zm8 0c-.626 0-1.436.671-2.063 1.563-.153.217-.129.232-.25.438H20c.565 0 1-.435 1-1s-.435-1-1-1zM6 11v2h9v-1h2v1h9v-2H6zm1 4v11h8V16h2v10h8V15H7z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f76f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3 7h26v2H3V7zm4 4h18v2H7v-2zm-4 4h26v2H3v-2zm4 4h18v2H7v-2zm-4 4h26v2H3v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f796":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 2.594l.719.688 13 13-1.438 1.438L27 16.439v11.563h-9v-10h-4v10H5V16.439L3.719 17.72l-1.438-1.438 13-13zm0 2.844l-9 9v11.563h5v-10h8v10h5V14.438z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f7c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0d2f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f7e7":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M13.281 6.781l1.438 1.438L7.938 15h20.063v2H7.938l6.781 6.781-1.438 1.438-8.5-8.5L4.093 16l.688-.719z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f81f":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2C10.465 6 6 10.465 6 16s4.465 10 10 10 10-4.465 10-10S21.535 6 16 6zm-1 4h2v8h-2v-8zm0 10h2v2h-2v-2z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f82b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Placeholder/Placeholder.vue?vue&type=template&id=16fd8956&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"ds-placeholder"},[_c('div',{staticClass:"ds-placeholder-content"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/layout/Placeholder/Placeholder.vue?vue&type=template&id=16fd8956&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/layout/Placeholder/Placeholder.vue?vue&type=script&lang=js&
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

// CONCATENATED MODULE: ./src/loader/docs-trim-loader.js!./src/system/components/layout/Placeholder/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPlaceholder%2FPlaceholder.vue
/* harmony default export */ var demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder = (function () {});
// CONCATENATED MODULE: ./src/system/components/layout/Placeholder/demo.md?vue&type=custom&index=0&blockType=docs&issuerPath=%2Fhome%2Fkure%2FRepos%2FExperimentsLabs%2FContributions%2Fvue-cion-design-system%2Fsrc%2Fsystem%2Fcomponents%2Flayout%2FPlaceholder%2FPlaceholder.vue
 /* harmony default export */ var Placeholder_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder = (demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder); 
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

if (typeof Placeholder_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder === 'function') Placeholder_demovue_type_custom_index_0_blockType_docs_issuerPath_2Fhome_2Fkure_2FRepos_2FExperimentsLabs_2FContributions_2Fvue_cion_design_system_2Fsrc_2Fsystem_2Fcomponents_2Flayout_2FPlaceholder_2FPlaceholder(component)

/* harmony default export */ var Placeholder = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f84c":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0 2c-.335 0-.673.03-1 .063v3.031c.327-.047.66-.094 1-.094s.673.046 1 .094V6.063A10.322 10.322 0 0016 6zm-3 .438a9.987 9.987 0 00-6.531 6.563h3.219a7.005 7.005 0 013.313-3.313v-3.25zm6 0v3.25a7.014 7.014 0 013.313 3.313h3.25A10.068 10.068 0 0019 6.438zM16 11c-2.773 0-5 2.227-5 5s2.227 5 5 5 5-2.227 5-5-2.227-5-5-5zm-9.937 4c-.032.326-.063.665-.063 1s.03.673.063 1h3.031A7.013 7.013 0 019 16c0-.337.016-.675.063-1h-3zm16.843 0c.047.327.094.66.094 1s-.046.673-.094 1h3.031c.032-.327.063-.665.063-1s-.03-.673-.063-1h-3.031zM6.438 19a10.068 10.068 0 006.563 6.563v-3.25A7.014 7.014 0 019.688 19h-3.25zm15.875 0A7.014 7.014 0 0119 22.313v3.25A10.068 10.068 0 0025.563 19h-3.25zM15 22.906v3.031c.327.032.665.063 1 .063s.673-.03 1-.063v-3.031c-.327.047-.66.094-1 .094s-.673-.046-1-.094z"}})])
          )
        }
      }
    

/***/ }),

/***/ "f978":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsMenu","description":"Used in combination with the menu item to help the user navigate.","tags":{"version":[{"description":"1.0.0","title":"version"}]},"exportName":"default","docsBlocks":[""],"props":[{"name":"routes","description":"The routes to display","type":{"name":"array"},"defaultValue":{"func":false,"value":"null"}},{"name":"inverse","description":"Set to true, if you use it on dark background","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"navbar","description":"Display menu as a navbar","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"linkTag","description":"The default component / tag used for the link of menu items","tags":{},"values":["router-link","a"],"type":{"name":"string"},"defaultValue":{"func":true,"value":"function() {\n  return this.$router ? 'router-link' : 'a'\n}"}},{"name":"urlParser","description":"Function that parses the url for each menu item","type":{"name":"func"},"defaultValue":{"func":true,"value":"function(route, parents) {\n  if (route.path) {\n    return route.path\n  }\n  const parseName = this.$options.filters.kebabCase\n  const routeParts = [...parents, route].map((p) => parseName(p.name))\n  return '/' + routeParts.join('/')\n}"}},{"name":"nameParser","description":"Function that parses the name for each menu item","type":{"name":"func"},"defaultValue":{"func":true,"value":"function(route) {\n  return route.name\n}"}},{"name":"isExact","description":"Function that checks if the url must be matched exactly in order to activate the menu item. By default only '/' must be matched exactly.","type":{"name":"func"},"defaultValue":{"func":true,"value":"function(url) {\n  return url === '/' || url.path === '/'\n}"}}],"events":[{"name":"navigate","description":"Menu navigates to route."}],"slots":[{"name":"default","scoped":true,"bindings":[{"name":"route","title":"binding"},{"name":"parents","title":"binding"},{"name":"name","title":"binding"}]},{"name":"menuitem","scoped":true,"description":"Scoped slot for providing a custom menu item","bindings":[{"name":"route","title":"binding"}]}]}

/***/ }),

/***/ "f9ab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0bc24c8d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/InputError.vue?vue&type=template&id=665bfcea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"ds-input-error"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!!_vm.error),expression:"!!error"}],staticClass:"ds-input-error"},[_vm._v(" "+_vm._s(_vm.error)+" ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/system/components/data-input/FormItem/InputError.vue?vue&type=template&id=665bfcea&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/system/components/data-input/FormItem/InputError.vue?vue&type=script&lang=js&
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

/* harmony default export */ var InputError = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "tokens", function() { return /* reexport */ tokens["d" /* tokens */]; });
__webpack_require__.d(__webpack_exports__, "themes", function() { return /* reexport */ tokens["b" /* themes */]; });
__webpack_require__.d(__webpack_exports__, "utils", function() { return /* reexport */ system_utils; });
__webpack_require__.d(__webpack_exports__, "mixins", function() { return /* reexport */ mixins; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

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
// EXTERNAL MODULE: ./node_modules/clipboard-copy/index.js
var clipboard_copy = __webpack_require__("f1cd");
var clipboard_copy_default = /*#__PURE__*/__webpack_require__.n(clipboard_copy);

// CONCATENATED MODULE: ./src/system/plugins/utils.js

/* harmony default export */ var utils = ({
  install: function install(Vue) {
    Vue.mixin({
      methods: {
        $copyToClipboard: function $copyToClipboard(content) {
          return clipboard_copy_default()(content);
        }
      }
    });
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./src/system/tokens/index.js
var tokens = __webpack_require__("6ab6");

// CONCATENATED MODULE: ./src/system/plugins/themer.js






var stylesheet = null;
/* harmony default export */ var themer = ({
  install: function install(Vue) {
    Vue.prototype.$loadTheme = function (name) {
      if (!tokens["a" /* themeMap */].hasOwnProperty(name)) {
        // eslint-disable-next-line
        console.warn("Theme '".concat(name, "' not found."));
        return;
      }

      var theme = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, tokens["a" /* themeMap */].base), tokens["a" /* themeMap */][name]);

      useTheme(theme);
    };
  }
});

var useTheme = function useTheme(theme) {
  if (!stylesheet) {
    stylesheet = document.createElement('style');
    document.querySelector('head').append(stylesheet);
  }

  var variables = Object.keys(theme).map(function (key) {
    return "".concat(key, ": ").concat(theme[key], ";");
  }).join('\n');
  stylesheet.innerHTML = ":root {\n  ".concat(variables, "\n}");
}; // Init base theme


if (typeof document !== 'undefined') {
  useTheme(tokens["a" /* themeMap */].base);
}
// CONCATENATED MODULE: ./src/system/plugins/index.js



/* harmony default export */ var plugins = ({
  install: function install(Vue) {
    Vue.use(filters);
    Vue.use(utils);
    Vue.use(themer);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

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

  var hidden = meta.tags && meta.tags.access && meta.tags.access[0].description === 'private';

  if (!hidden) {
    var parent = meta.tags && meta.tags.see ? meta.tags.see[0].description : null;

    var componentData = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, meta), {}, {
      parent: parent,
      folder: folder,
      name: c.name,
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
// EXTERNAL MODULE: ./src/system/utils/index.js
var system_utils = __webpack_require__("2b4b");

// EXTERNAL MODULE: ./src/system/mixins/index.js + 1 modules
var mixins = __webpack_require__("cabe");

// CONCATENATED MODULE: ./src/library.js





/* harmony default export */ var library = (system);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (library);



/***/ }),

/***/ "fb48":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__("a832");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "fb53":
/***/ (function(module, exports) {

module.exports = {"displayName":"DsListItem","description":"","tags":{"version":[{"description":"1.0.0","title":"version"}],"see":[{"description":"DsList","title":"see"}]},"exportName":"default","props":[{"name":"icon","description":"The name of the list icon.","type":{"name":"string"},"defaultValue":{"func":true,"value":"function() {\n  return this.$parentList ? this.$parentList.icon : 'angle-right'\n}"}}],"slots":[{"name":"default"}]}

/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fba4":
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M14 3h4c1.093 0 2 .907 2 2v1h3V5h2v1h2c1.093 0 2 .907 2 2v16c0 1.093-.907 2-2 2H5c-1.093 0-2-.907-2-2V8c0-1.093.907-2 2-2h2V5h2v1h3V5c0-1.093.907-2 2-2zm0 2v1h4V5h-4zM5 8v16h2V9h2v15h14V9h2v15h2V8H5z"}})])
          )
        }
      }
    

/***/ }),

/***/ "fbc9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("22dc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce3":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fde7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "--color-neutral-0": "rgb(25, 23, 28)",
  "--color-neutral-10": "rgb(40, 37, 45)",
  "--color-neutral-20": "rgb(75, 69, 84)",
  "--color-neutral-30": "rgb(100, 92, 112)",
  "--color-neutral-40": "rgb(112, 103, 126)",
  "--color-neutral-50": "rgb(151, 143, 163)",
  "--color-neutral-60": "rgb(177, 171, 186)",
  "--color-neutral-70": "rgb(203, 199, 209)",
  "--color-neutral-80": "rgb(229, 227, 232)",
  "--color-neutral-85": "rgb(239, 238, 241)",
  "--color-neutral-90": "rgb(245, 244, 246)",
  "--color-neutral-95": "rgb(250, 249, 250)",
  "--color-neutral-100": "rgb(255, 255, 255)",
  "--color-primary": "rgb(20, 184, 167)",
  "--color-primary-active": "rgb(22, 197, 180)",
  "--color-primary-inverse": "rgb(241, 253, 252)",
  "--color-secondary": "rgb(95, 14, 216)",
  "--color-secondary-active": "rgb(111, 25, 240)",
  "--color-secondary-inverse": "rgb(246, 241, 254)",
  "--color-success": "rgb(79, 172, 32)",
  "--color-success-active": "rgb(88, 194, 36)",
  "--color-success-inverse": "rgb(246, 253, 242)",
  "--color-danger": "rgb(210, 53, 45)",
  "--color-danger-active": "rgb(216, 77, 70)",
  "--color-danger-inverse": "rgb(252, 243, 242)",
  "--color-warning": "rgb(230, 121, 25)",
  "--color-warning-active": "rgb(233, 137, 53)",
  "--color-warning-inverse": "rgb(253, 247, 241)",
  "--color-yellow": "rgb(245, 196, 0)",
  "--color-yellow-active": "rgb(255, 206, 10)",
  "--color-yellow-inverse": "rgb(255, 252, 240)",
  "--text-color-base": "rgb(75, 69, 84)",
  "--text-color-soft": "rgb(112, 103, 126)",
  "--text-color-softer": "rgb(177, 171, 186)",
  "--text-color-disabled": "rgb(177, 171, 186)",
  "--text-color-inverse": "rgb(250, 249, 250)",
  "--text-color-link": "rgb(20, 184, 167)",
  "--text-color-link-active": "rgb(22, 197, 180)",
  "--text-color-primary": "rgb(20, 184, 167)",
  "--text-color-primary-inverse": "rgb(241, 253, 252)",
  "--text-color-secondary": "rgb(95, 14, 216)",
  "--text-color-secondary-inverse": "rgb(246, 241, 254)",
  "--text-color-success": "rgb(79, 172, 32)",
  "--text-color-success-inverse": "rgb(246, 253, 242)",
  "--text-color-warning": "rgb(230, 121, 25)",
  "--text-color-warning-inverse": "rgb(253, 247, 241)",
  "--text-color-danger": "rgb(210, 53, 45)",
  "--text-color-danger-inverse": "rgb(252, 243, 242)",
  "--background-color-base": "rgb(255, 255, 255)",
  "--background-color-soft": "rgb(250, 249, 250)",
  "--background-color-softer": "rgb(245, 244, 246)",
  "--background-color-softer-active": "rgb(250, 249, 250)",
  "--background-color-softest": "rgb(239, 238, 241)",
  "--background-color-softest-active": "rgb(245, 244, 246)",
  "--background-color-inverse": "rgb(25, 23, 28)",
  "--background-color-inverse-soft": "rgb(40, 37, 45)",
  "--background-color-inverse-softer": "rgb(75, 69, 84)",
  "--background-color-inverse-softer-active": "rgb(100, 92, 112)",
  "--background-color-disabled": "rgb(245, 244, 246)",
  "--background-color-primary": "rgb(20, 184, 167)",
  "--background-color-primary-active": "rgb(22, 197, 180)",
  "--background-color-primary-inverse": "rgb(241, 253, 252)",
  "--background-color-secondary": "rgb(95, 14, 216)",
  "--background-color-secondary-active": "rgb(111, 25, 240)",
  "--background-color-secondary-inverse": "rgb(246, 241, 254)",
  "--background-color-success": "rgb(79, 172, 32)",
  "--background-color-success-active": "rgb(88, 194, 36)",
  "--background-color-success-inverse": "rgb(246, 253, 242)",
  "--background-color-warning": "rgb(230, 121, 25)",
  "--background-color-warning-active": "rgb(233, 137, 53)",
  "--background-color-warning-inverse": "rgb(253, 247, 241)",
  "--background-color-danger": "rgb(210, 53, 45)",
  "--background-color-danger-active": "rgb(216, 77, 70)",
  "--background-color-danger-inverse": "rgb(252, 243, 242)",
  "--border-color-base": "rgb(177, 171, 186)",
  "--border-color-soft": "rgb(203, 199, 209)",
  "--border-color-softer": "rgb(229, 227, 232)",
  "--border-color-active": "rgb(20, 184, 167)",
  "--border-color-primary": "rgb(20, 184, 167)",
  "--border-color-success": "rgb(79, 172, 32)",
  "--border-color-warning": "rgb(230, 121, 25)",
  "--border-color-danger": "rgb(210, 53, 45)",
  "--border-size-base": "1px",
  "--border-size-large": "3px",
  "--border-size-x-large": "6px",
  "--border-radius-base": "3px",
  "--border-radius-rounded": "2em",
  "--border-radius-circle": "50%",
  "--font-size-xxxx-large": "3rem",
  "--font-size-xxx-large": "2.5rem",
  "--font-size-xx-large": "2rem",
  "--font-size-x-large": "1.5rem",
  "--font-size-large": "1.25rem",
  "--font-size-base": "1rem",
  "--font-size-body": "16px",
  "--font-size-small": "0.8rem",
  "--font-size-x-small": "0.7rem",
  "--font-size-xx-small": "0.6rem",
  "--font-space-xxxx-large": "2em",
  "--font-space-xxx-large": "1.5em",
  "--font-space-xx-large": "1.2em",
  "--font-space-x-large": "1em",
  "--font-space-large": "0.6em",
  "--font-space-base": "0.5em",
  "--font-space-small": "0.4em",
  "--font-space-x-small": "0.3em",
  "--font-space-xx-small": "0.2em",
  "--font-space-xxx-small": "0.1em",
  "--font-family-heading": "'LatoWeb', sans-serif",
  "--font-family-text": "'LatoWeb', sans-serif",
  "--font-family-code": "inconsolata, monospace",
  "--font-weight-regular": "normal",
  "--font-weight-bold": "600",
  "--line-height-base": "1.5",
  "--line-height-small": "1.3",
  "--line-height-smaller": "1.1",
  "--letter-spacing-x-large": "0.1em",
  "--letter-spacing-large": "0.05em",
  "--letter-spacing-base": "0",
  "--letter-spacing-small": "-0.01em",
  "--letter-spacing-x-small": "-0.015em",
  "--opacity-soft": "0.65",
  "--opacity-disabled": "0.5",
  "--xxx-large": "128",
  "--xx-large": "64",
  "--x-large": "48",
  "--large": "32",
  "--base": "24",
  "--small": "16",
  "--x-small": "8",
  "--xx-small": "4",
  "--xxx-small": "2",
  "--space-xxx-large": "128px",
  "--space-xx-large": "64px",
  "--space-x-large": "48px",
  "--space-large": "32px",
  "--space-base": "24px",
  "--space-small": "16px",
  "--space-x-small": "8px",
  "--space-xx-small": "4px",
  "--space-xxx-small": "2px",
  "--size-height-base": "42px",
  "--size-height-large": "50px",
  "--size-height-xlarge": "60px",
  "--size-tappable-square": "44px",
  "--size-height-footer": "64px",
  "--box-shadow-large": "0 20px 60px 0 rgba(0, 0, 0, .15)",
  "--box-shadow-base": "0px 12px 26px -4px rgba(0, 0, 0, .1)",
  "--box-shadow-small": "0px 8px 18px -2px rgba(0, 0, 0, .1)",
  "--box-shadow-x-small": "0px 0px 3px 0px rgba(0, 0, 0, .1)",
  "--box-shadow-active": "0 0 6px 1px rgba(20, 100, 160, 0.5)",
  "--box-shadow-inset": "inset 0 0 20px 1px rgba(0,0,0,.15)",
  "--box-shadow-small-inset": "inset 0 0 0 1px rgba(0,0,0,.05)",
  "--duration-short": "0.08s",
  "--duration-base": "0.5s",
  "--duration-long": "0.75s",
  "--duration-x-long": "1s",
  "--duration-xx-long": "2s",
  "--ease-out": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  "--ease-out-sharp": "cubic-bezier(0.165, 0.84, 0.44, 1)",
  "--ease-out-bounce": "cubic-bezier(.87,-.41,.19,1.44)",
  "--ease-in": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  "--ease-in-sharp": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
  "--z-index-modal": "9999",
  "--z-index-dropdown": "8888",
  "--z-index-page-submenu": "2500",
  "--z-index-page-header": "2000",
  "--z-index-page-sidebar": "1500",
  "--z-index-sticky": "100",
  "--xs": "480",
  "--sm": "600",
  "--md": "768",
  "--lg": "1024",
  "--xl": "1200",
  "--media-query-x-small": "(min-width: 480px)",
  "--media-query-small": "(min-width: 600px)",
  "--media-query-medium": "(min-width: 768px)",
  "--media-query-large": "(min-width: 1024px)",
  "--media-query-x-large": "(min-width: 1200px)"
});

/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


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