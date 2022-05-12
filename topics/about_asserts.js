
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    const __ = true;
    ok(__ === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    const __ = false;
    ok(__ === false, 'what is a false value?');
});

test("equal", function() {
    const __ = 2;
    equal(__, 1 + 1, 'what will satisfy the equal assertion?');
});
