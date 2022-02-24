(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

  // node_modules/mix-with/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    catagory: () => catagory,
    default: () => esm_default,
    mix: () => mix,
    mixin: () => mixin
  });
  function mix(superclass) {
    var clazz = superclass || DefaultSuperClass;
    if (typeof clazz !== "function") {
      throw new TypeError('The argument "superclass" of function "mix" should be a class.');
    }
    return {
      with: function() {
        var mixins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          mixins[_i] = arguments[_i];
        }
        return mixins.reduce(function(prev, mixin2) {
          return mixin2(prev);
        }, clazz);
      }
    };
  }
  function catagory(fn) {
    return fn;
  }
  var DefaultSuperClass, mixin, esm_default;
  var init_esm = __esm({
    "node_modules/mix-with/esm/index.js"() {
      DefaultSuperClass = function() {
        function DefaultSuperClass2() {
        }
        return DefaultSuperClass2;
      }();
      mixin = catagory;
      esm_default = mix;
    }
  });

  // require-index.js
  var { catagory: catagory2, mix: mix2 } = (init_esm(), __toCommonJS(esm_exports));
  console.log("require('mix-with')", (init_esm(), __toCommonJS(esm_exports)));
  var Foo = catagory2((superclass) => class extends superclass {
    isFoo() {
      return true;
    }
  });
  var Bar = catagory2((superclass) => class extends superclass {
    isBar() {
      return true;
    }
  });
  var Foobar = mix2().with(Foo, Bar);
  var fb = new Foobar();
  console.log("fb.isFoo() returns", fb.isFoo(), "fb.isBar() returns", fb.isBar());
})();
