let foo = 12,
  boo = 45;
function main(foo, boo) {
  //
  "use strict";
    [boo, foo] = [foo, boo];
  //
  return { foo, boo };
}

console.log(main(foo, boo));
module.exports = main;
