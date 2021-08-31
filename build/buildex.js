(() => {
  // src/buildex.js
  var objs = [
    {
      foo: {
        bar: {
          baz: 1
        }
      }
    },
    {},
    {
      foo: {}
    }
  ];
  console.log(objs.map((obj) => {
    if (obj.foo) {
      if (obj.foo.bar) {
        return obj.foo.bar.baz;
      }
    }
    return void 0;
  }));
  console.log(objs.map((obj) => {
    const { foo } = obj;
    if (foo) {
      const { bar } = foo;
      if (bar) {
        return bar.baz;
      }
    }
    return void 0;
  }));
  console.log(objs.map((obj) => {
    var _a, _b;
    return (_b = (_a = obj.foo) == null ? void 0 : _a.bar) == null ? void 0 : _b.baz;
  }));
})();
