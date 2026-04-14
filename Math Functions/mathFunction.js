// CONSTANTS
const { E, PI, LN2, LN10, LOG2E, LOG10E, SQRT1_2, SQRT2 } = Math;

// ROUNDING & ABSOLUTE
Math.abs(-5); // 5
Math.ceil(4.3); // 5
Math.floor(4.8); // 4
Math.round(4.5); // 5
Math.trunc(4.9); // 4
Math.sign(-3); // -1

// POWERS & ROOTS
Math.pow(2, 3); // 8
Math.sqrt(9); // 3
Math.cbrt(27); // 3
Math.hypot(3, 4); // 5 (√(x²+y²+...))

// EXPONENTIAL & LOGARITHMIC
Math.exp(1); // e^1
Math.log(10); // ln(10)
Math.log2(8); // 3
Math.log10(100); // 2
Math.expm1(1); // e^1 - 1
Math.log1p(1); // ln(1+1)

// TRIGONOMETRIC (inputs in radians)
Math.sin(0); // 0
Math.cos(0); // 1
Math.tan(0.5); // ~0.546
Math.asin(0); // 0
Math.acos(1); // 0
Math.atan(1); // π/4
Math.atan2(1, 1); // π/4

// HYPERBOLIC
Math.sinh(1);
Math.cosh(1);
Math.tanh(1);
Math.asinh(1);
Math.acosh(1);
Math.atanh(0);

// MIN/MAX & RANDOM
Math.min(1, 2, 3); // 1
Math.max(1, 2, 3); // 3
Math.random(); // [0, 1)

// BITWISE/INTEGER (ES6+)
Math.clz32(1); // leading zeros in 32-bit
Math.imul(2, 3); // 6 (32-bit multiply)
Math.fround(1.337); // nearest single-precision float
