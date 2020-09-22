# SL Physics - A

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

!!! note "Definition"
    - **Scalar:** A physical quantity with a numerical value (magnitude) and a unit.
    - **Vector:** A physical quantity with a numerical value (magnitude), a unit, and a **direction.**

??? example
    - Scalar quantities include speed, distance, mass, temperature, pressure, time, frequency, current, voltage, and more.
    - Vector quantities include velocity, displacement, acceleration, force (e.g., weight), momentum, impulse, and more.

Vectors are drawn as arrows whose length represents their scale/magnitude and their orientation refer to their direction.

!!! info
     - A variable representing a vector is written with a right-pointing arrow above it.
     - The **standard form** of a vector is expressed as its magnitude followed by its unit followed by its direction in square brackets.
     $$\vec{a} = 1\text{ m }[N 45° E]$$
     - The **component form** of a vector is expressed as the location of its head on a cartesian plane if its tail were at $(0, 0)$.
     $$\vec{a} = (1, 1)$$

!!! example
    The below shows a vector with a magnitude of 1, unit of metre, pointing north.
    $$\vec{a} = 1\text{ m }[N]$$

### Adding/subtracting vectors diagrammatically

1. Draw the first vector.
2. Draw the second vector with its *tail* at the *head* of the first vector.
3. Repeat step 2 as necessary for as many vectors as you want by attaching them to the *head* of the last vector.
4. Draw a new vector from the *tail* of the first vector to the *head* of the last vector.

<img src="/resources/images/vector-add-direction.png" width=700>(Source: Kognity)</img>

When subtracting a vector, **negate** the vector being subtracted by giving it an opposite direction.

<img src="/resources/images/vector-subtract-direction.png" width=700>(Source: Kognity)</img>

### Parallelogram rule

The parallelogram rule states that the sum of two vectors that form two sides of a parallelogram is the diagonal of that parallelogram.

<img src="/resources/images/vector-parallelogram.png" width=700>(Source: Kognity)</img>

### Multiplying vectors and scalars

The product of a vector multiplied by a scalar is a vector with a magnitude of the vector multiplied by the scalar with the same direction as the original vector.

$$v[direction] × s = (v×s)[direction]$$

### Vector decomposition

By breaking up a vector into lengths along the x- and y-axes, the sum of two vectors can be calculated algebraically.

<img src="/resources/images/vector-decomposition.png" width=700>(Source: Kognity)</img>

For vector $\textbf{a}$ and vector $\textbf{b}$:

$$
a_{x} = a\cos\theta_{a} \\
a_{y} = a\sin\theta_{a}
$$

Proof:  
$a=\sqrt{a^{2}_{x}+a^{2}_{y}} \\$
$=\sqrt{(a\cos\theta_{a})^2 + (a\sin\theta{a})^2} \\$
$=\sqrt{a^2(\cos\theta_{a}^2 + \sin\theta_{a}^2)} \\$
$=\sqrt{a^2} \\$
$=a$

From the diagram above, we can figure out that:

$$
r_{magnitude}=\sqrt{(a\cos\theta_{a} + b\cos\theta_{b})^2 + (a\sin\theta_{a} + b\cos\theta_{b})^2} \\
r_{direction}=\tan^{-1}(\frac{a\sin\theta_{a} + b\sin\theta_{b}}{a\cos\theta_{a} + b\cos\theta_{b}})
$$

## Resources

 - [IB Physics Data Booklet](/resources/g11/ib-physics-data-booklet.pdf)
 - [IB SL Physics Syllabus](/resources/g11/ib-physics-syllabus.pdf)
 - [Dealing with Uncertainties](/resources/g11/physics-uncertainties.pdf)
 - [Linearising Data](/resources/g11/linearising-data.pdf)
 - [External: IB Physics Notes](https://ibphysics.org)
