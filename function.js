function toBe() {
    return {
        compare: function (actual, expected) {
            return {
                pass: actual === expected
            };
        }
    };
}
function toBeTruthy() {
    return {
        compare: function (actual) {
            return {
                pass: !!actual
            };
        }
    };
}
