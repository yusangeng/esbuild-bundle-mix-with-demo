import mix, { Constructor, catagory, mix as mix2 } from 'mix-with';

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
