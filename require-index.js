const { catagory, mix } = require('mix-with');

console.log("require('mix-with')", require('mix-with'));

const Foo = catagory(
  (superclass) =>
    class extends superclass {
      isFoo() {
        return true;
      }
    }
);

const Bar = catagory(
  (superclass) =>
    class extends superclass {
      isBar() {
        return true;
      }
    }
);

const Foobar = mix().with(Foo, Bar);
const fb = new Foobar();

console.log('fb.isFoo() returns', fb.isFoo(), 'fb.isBar() returns', fb.isBar());
