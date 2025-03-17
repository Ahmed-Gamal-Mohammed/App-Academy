## What is a logarithm?

To understand logarithms, you must first understand exponents. To review, a number _raised_ to the power of _n_ is the same as multiplying the number by itself _n_ times. For example, 2 to the power of 5 (`25`) is the same as 2 multiplied by itself 5 times (`2 * 2 * 2 * 2 * 2`) which equals `32`. (You may see `25` represented as `2^5` as well).

A _logarithm_ (or `log` for short) is the inverse of an exponent. The logarithm base-_n_ of a number is how many times it must be divided by _n_ to reach 1. For example, to find the log base-2 of 32 (`log2(32) = ?`), you divide by the base until you hit 1: once (16), twice (8), three times (4), four times (2), and five (1), so `log2(32) = 5`.

These statements all express the same relationship between numbers:

- **2** multiplied by itself **5** times equals **32**: `2 * 2 * 2 * 2 * 2 = 32`
- **32** divided by base-**2** **5** times equals 1: `32 / 2 / 2 / 2 / 2 / 2 = 1`
- **2** to the power of **5** equals **32**: `25 = 32`
- Log base-**2** of **32** equals **5**: `log2(32) = 5`

You can change the base of the logarithm to invert the exponent base:

- **10** multiplied by itself **3** times equals **1000**: `10 * 10 * 10 = 1000`
- **1000** divided by base-**10** **3** times equals 1: `1000 / 10 / 10 / 10 = 1`
- **10** to the power of **3** equals **1000**: `103 = 1000`
- Log base-**10** of **1000** equals **3**: `log10(1000) = 3`

General logarithms have many advanced math applications, but here we are only concerned with one type: the binary logarithm.

## What is a binary logarithm?

A binary logarithm is a base-2 logarithm. Take a look at the following binary exponent table:

```
20  = 1
21  = 2
22  = 4
23  = 8
24  = 16
25  = 32
26  = 64
27  = 128
28  = 256
29  = 512
210 = 1024
```

It's not required, but memorizing these powers of 2 up to 1024 will help you understand logarithms and code performance. Here is the equivalent logarithm table:

log2( 1 )    = 0
log2( 2 )    = 1
log2( 4 )    = 2
log2( 8 )    = 3
log2( 16 )   = 4
log2( 32 )   = 5
log2( 64 )   = 6
log2( 128 )  = 7
log2( 256 )  = 8
log2( 512 )  = 9
log2( 1024 ) = 10

The numbers in each row are the same, just in a different order, so if you know the exponents of 2, you know the binary logarithm. If you have a JavaScript console handy you can calculate binary logarithms with the [Math.log2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2) function.

2 ** 0   // 1
2 ** 1   // 2
2 ** 2   // 4
2 ** 3   // 8
2 ** 4   // 16
2 ** 5   // 32
2 ** 6   // 64
2 ** 7   // 128
2 ** 8   // 256
2 ** 9   // 512
2 ** 10  // 1024

Math.log2(1);    // 0
Math.log2(2);    // 1
Math.log2(4);    // 2
Math.log2(8);    // 3
Math.log2(16);   // 4
Math.log2(32);   // 5
Math.log2(64);   // 6
Math.log2(128);  // 7
Math.log2(256);  // 8
Math.log2(512);  // 9
Math.log2(1024); // 10

## Why are logarithms important?

You previously learned how to identify and implement algorithms with constant **O(1)**, linear **O(n)**, and quadratic **O(n2)** complexities. Soon, you will learn to identify and implement algorithms with the extremely efficient logarithmic **O(log n)** complexity.

Just how efficient is it? Take a look at this big-O growth chart for comparison.

![Big-O (Cmglee, CC BY-SA 3.0, via Wikimedia Commons)](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/big-O-chart.svg)

**O(n)** runs straight down the middle, while **O(n2)** swerves upward almost immediately. **O(1)** hovers a few pixels above the horizontal axis with **O(log n)** not too far above. Logarithmic curves grow so slowly that they are virtually constant.

What this image fails to communicate is _just_ how close to constant a log curve is. Recalling your powers of 2, `210 = 1024`. Put another way log2(1000) is roughly equal to 10. This graph would need to be 10x wider for the log curve to even approach the `10` mark on the vertical axis.

In order to reach the `20` mark, _n_ would be roughly 1 million. To reach 30 requires an _n_ of 1 billion. In order for the logarithmic curve to hit the `100` mark, equivalent to the performance of a linear curve with an _n_ of 100, the logarithmic curve would require an _n_ of 1267650600228229401496703205376. For large inputs, logarithmic curves _vastly_ outperform linear curves.