(() => {
  // node_modules/mix-with/esm/index.js
  var DefaultSuperClass = function() {
    function DefaultSuperClass2() {
    }
    return DefaultSuperClass2;
  }();
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
        return mixins.reduce(function(prev, mixin) {
          return mixin(prev);
        }, clazz);
      }
    };
  }
  function catagory(fn) {
    return fn;
  }
  var esm_default = mix;

  // index.ts
  var Foo = catagory((superclass) => class extends superclass {
    isFoo() {
      return true;
    }
  });
  var Bar = catagory((superclass) => class extends superclass {
    isBar() {
      return true;
    }
  });
  var Foobar = esm_default().with(Foo, Bar);
  var fb = new Foobar();
  console.log("fb.isFoo() returns", fb.isFoo(), "fb.isBar() returns", fb.isBar());
})();
