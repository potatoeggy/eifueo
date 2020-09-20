# SL Physics

The course code for this page is **SPH3U7**.

## 1.1 - Measurements in physics

### Fundamental units

Every other SI unit is derived from fundamental units. Memorise these!

| Quantity type | Unit | Symbol |
| --- | --- | --- |
| Time | Second | s |
| Distance | Metre | m |
| Mass | Kilogram | kg |
| Electric current | Ampere | A |
| Temperature | Kelvin | K |
| Amount of substance | Mole | mol |
| Luminous intensity | Candela | cd |

### Metric prefixes

Every SI unit can be expanded with metric prefixes.

!!! example
    milli + metre = millimetre ($10^{-3}) m

| Prefix | Abbreviation | Value | Inverse ($10^{-n}$) abbreviation | Inverse prefix |
| --- | --- | --- | --- | --- |
| deca- | da | $10^1$ | d | deci- |
| hecto- | h | $10^2$ | c | centi- |
| kilo- | k | $10^3$ | m | milli- |
| mega- | M | $10^6$ | µ | micro- |
| giga- | G | $10^9$ | n | nano- |
| tera- | T | $10^{12}$ | p | pico- |
| peta- | P | $10^{15}$ | f | femto- |
| exa- | E | $10^{18}$ | a | atto- |

### Significant figures

 - The leftmost non-zero digit is the **most significant digit**.
 - If there is no decimal point, the rightmost non-zero digit is the **least significant digit**.
	- Otherwise, the right-most digit (including zeroes) is the least significant digit.
 - All digits between the most and least significant digits are significant.
 - Pure (discrete) numbers are unitless and have infinite significant figures.

!!! example
    In $123000$, there are 3 significant digits.<br>
    In $0.1230$, there are 4 significant digits.

 - When adding or subtracting significant figures, the answer has the **same number of decimals** as the number with the lowest number of decimal points.
 - When multiplying or dividing significant figures, the answer has the **same number of significant figures** as the number with the lowest number of significant figures.
 - Values of a calculated result can be **no more precise** than the least precise value used.

!!! example
    $$1.25 + 1.20 = 2.45$$
    $$1.24 + 1.2 = 2.4$$

!!! warning
    When rounding an answer with significant figures, if the **least significant figure** is $5$, round up only if the **second-least** significant figure is odd.

    $$1.25 + 1.2 = 2.4$$
    $$1.35 + 1.2 = 2.6$$

### Scientific notation

Scientific notation is written in the form of $m×10^{n}$, where $1 \leq m < 10, n \in \mathbb{Z}$. All digits before the multiplication sign in scientific notation are significant.<br>

!!! example
    The speed of light is 300 000 000 ms<sup>-1</sup>, or $3×10^8$ ms<sup>-1</sup>.

### Orders of magnitude

The order of magnitude of a number can be found by converting it to scientific notation and taking its power of 10.

!!! example
    - The order of magnitude of 212000, or $2.12×10^{5}$, is 5.
    - The order of magnitude of 0.212, or $2.12×10^{-1}$, is -1.

## 1.2 - Uncertainties and errors


## 1.3 - Vectors and scalars

## Resources

 - [IB SL Physics Syllabus](/resources/g11/ib-physics-syllabus.pdf)
 - [Dealing with Uncertainties](/resources/g11/physics-uncertainties.pdf)
 - [Linearising Data](/resources/g11/linearising-data.pdf)
