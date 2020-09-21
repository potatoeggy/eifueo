# SL Physics

The course code for this page is **SPH3U7**.

## 1.1 - Measurements in physics

### Fundamental units

Every other SI unit is derived from the fundamental SI units. Memorise these!

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
    milli + metre = millimetre ($10^{-3}$) m

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
    $$1.2 × 2 = 2$$
    $$1.2 × 2.0 = 2.4$$

!!! warning
    When rounding an answer with significant figures, if the **least significant figure** is $5$, round up only if the **second-least** significant figure is **odd**.

    $$1.25 + 1.2 = 2.4$$
    $$1.35 + 1.2 = 2.6$$

### Scientific notation

Scientific notation is written in the form of $m×10^{n}$, where $1 \leq m < 10, n \in \mathbb{Z}$. All digits before the multiplication sign in scientific notation are significant.<br>

!!! example
    The speed of light is 300 000 000 ms<sup>-1</sup>, or $3×10^8$ ms<sup>-1</sup>.

### Orders of magnitude

The order of magnitude of a number can be found by converting it to scientific notation and taking its power of 10.

!!! example
    - The order of magnitude of $212000$, or $2.12×10^{5}$, is 5.
    - The order of magnitude of $0.212$, or $2.12×10^{-1}$, is -1.

## 1.2 - Uncertainties and errors

### Random and systematic errors

| Random error | Systematic error |
| --- | --- |
| Caused by imperfect measurements and is present in every measurement. | Caused by a flaw in experiment design or in the procedure. |
| Can be reduced (but not avoided) by repeated trials or measurements. | Cannot be reduced by repeated measurements, but can be avoided completely. |
| Error in precision. | Error in accuracy. |

!!! example
    - The failure to account for fluid evaporating at high temperatures is a systematic error, as it cannot be minimised by repeated measurements.
    - The addition of slightly more solute due to uncertainty in instrument data is a random error, as it can be reduced by averaging the result of multiple trials.

<img src="/resources/images/types-of-error.png" width=700>(Source: Kognity)</img>

### Uncertainties

Uncertainties are stated in the form of [value] ± [uncertainty]. A value is only as precise as its absolute uncertainty. Absolute uncertainty of **measurement** is usually represented to only 1 significant digit.

!!! note
    Variables with uncertainty use an uppercase delta for their uncertainty value: $a ± \Delta a$

 - The absolute uncertainty of a number is written in the same unit as the value.
 - The percentage uncertainty of a number is the written as a percentage of the value.

!!! example
    - Absolute uncertainty: 1.0 g ± 0.1 g
    - Percentage uncertainty: 1.0 g ± 10%

To determine a measurement's absolute uncertainty, if:

 - the instrument states its uncertainty, use that.
 - an analog instrument is used, the last digit is estimated and appended to the end of the reported value. The estimated digit is uncertain by 5 at its order of magnitude.
 - a digital instrument is used, the last reported digit is uncertain by 1 at its order of magnitude.

!!! example
    - A ruler has millimetre markings. A pencil placed alongside the ruler has its tip just past 14 mm but before 15 mm. The pencil is 14.5 mm ± 0.5 mm long.
    - A digital scale reads 0.66 kg for the mass of a human body. The human body has a mass of 0.66 kg ± 0.01 kg.

See [Dealing with Uncertainties](/resources/g11/physics-uncertainties.pdf) for how to perform **operations with uncertainties**.

### Error bars

Error bars represent the uncertainty of the data, typically representing that data point's standard deviation, and can be both horizontal or vertical.

<img src="/resources/images/error-bars.png" width=600>(Source: Kognity)</img>

!!! note
    On a graph, a data point with uncertain values is written as $(x ± \Delta x, y ± \Delta y)$

### Uncertainty of gradient and intercepts

!!! note "Definition"
    - The **line of best fit** is the line that passes through **all error bars** while passing as closely as possible to all data points.
    - The **minimum and maximum lines** are lines that minimise/maximise their slopes while still passing through **all error bars.**

!!! warning
    - Use solid lines for lines representing **continuous data** and dotted lines for **discrete data**.

<img src="/resources/images/error-slopes.png" width=700>(Source: Kognity)</img>

The uncertainty of the **slope** of the line of best fit is the difference between the maximum and minimum slopes.
$$m_{best fit} ± m_{max}-m_{min}$$
The uncertainty of the **intercepts** is the difference between the intercepts of the maximum and minimum lines.
$$intercept_{best fit} ± intercept_{max} - intercept_{min}$$


## 1.3 - Vectors and scalars

## Resources

 - [IB SL Physics Syllabus](/resources/g11/ib-physics-syllabus.pdf)
 - [Dealing with Uncertainties](/resources/g11/physics-uncertainties.pdf)
 - [Linearising Data](/resources/g11/linearising-data.pdf)
 - [External: IB Physics Notes](https://ibphysics.org)
