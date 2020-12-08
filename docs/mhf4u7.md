# SL Math - Analysis and Approaches - A

The course code for this page is **MHF4U7**.

## 3 - Geometry and trigonometry

To find the result of a primary trig ratio, the related acute angle (RAA) should first be found before referring to the CAST rule to determine quadrants before identifying all correct answers in the domain.

### Circles

The equation below is true for every point on a circle with radius $r$.
$$x^2+y^2=r^2$$

The area of a **sector** requires knowledge of the radius and angle in **radians** that the sector encompasses.
$$A=\frac{r^2\theta}{2}$$
<img src="/resources/images/sector.png" width=500>(Source: Kognity)</img>

### Trigonometric identities

The **Pythagorean identity** relates the radius of a circle to its x and y components.
$$\sin^2\theta+\cos^2\theta=\tan^2\theta$$

The **quotient identity** relates the side lengths of a right-angled triangle.
$$\tan\theta=\frac{\sin\theta}{\cos\theta}$$

The **double angle identities** can be used to convert one trig ratio to another.
$$
\sin 2\theta = 2\sin\theta\cos\theta \\
\cos 2\theta = 2\cos^2\theta-1 \\
\cos 2\theta = \cos^2\theta-\sin^2\theta \\
\cos 2\theta = 1-2\sin^2\theta \\
\tan 2\theta = \frac{2\tan\theta}{1-\tan^2\theta}
$$

## 4 - Statistics and probability

!!! note "Definition"
    - **Statistics:** The techniques and procedures to analyse, interpret, display, and make decisions based on data.
    - **Descriptive statistics:** The use of methods to work with and describe the **entire** data set.
    - **Inferential statistics:** The use of samples to make judgements about a population.
    - **Data set:** A collection of data with elements and observations, typically in the form of a table. It is similar to a map or dictionary in programming.
    - **Element:** The name of an observation(s), similar to a key to a map/dictionary in programming.
    - **Observation:** The collected data linked to an element, similar to a value to a map/dictionary in programming.
    - **Population**: A collection of all elements of interest within a data set.
    - **Sample**: The selection of a few elements within a population to represent that population.
    - **Raw data:** Data collected prior to processing or ranking.

### Sampling

A good sample:

 - represents the relevant features of the full population,
 - is as large as reasonably possible so that it decently represents the full population,
 - and is random.

The types of random sampling include:

 - **Simple**: Choosing a sample completely randomly.
 - **Convenience**: Choosing a sample based on ease of access to the data.
 - **Systematic**: Choosing a random starting point, then choosing the rest of the sample at a consistent interval in a list.
 - **Quota**: Choosing a sample whose members have specific characteristics.
 - **Stratified**: Choosing a sample so that the proportion of specific characteristics matches that of the population.

??? example
    - Simple: Using a random number generator to pick items from a list.
    - Convenience: Asking the first 20 people met to answer a survey,
    - Systematic: Rolling a die and getting a 6, so choosing the 6th element and every 10th element after that.
    - Quota: Ensuring that all members of the sample all wear red jackets.
    - Stratified: The population is 45% male and 55% female, so the proportion of the sample is also 45% male and 55% female.

### Types of data

!!! note "Definition"
    - **Quantitative variable**: A variable that is numerical and can be sorted.
    - **Discrete variable**: A quantitative variable that is countable.
    - **Continuous variable**: A quantitative variable that can contain an infinite number of values between any two values.
    - **Qualitative variable**: A variable that is not numerical and cannot be sorted.
    - **Bias**: An unfair influence in data during the collection process, causing the data to be not truly representative of the population.

### Frequency distribution

A **frequency distribution** is a table that lists categories/ranges and the number of values in each category/range.

A frequency distribution table includes:

 - A number of classes, all of the same width.
	- This number is arbitrarily chosen, but a commonly used formula is $\lceil1+3.3\log({\text{# of elements})}\rceil$.
	- The width (size) of each class is $\lceil\frac{\text{max} - \text{min}}{\text{# of classes}}\rceil$.
	- Each class includes its lower bound and excludes its upper bound ($\text{lower} ≤ x < \text{upper}$)
	- The **relative frequency** of a data set is the percentage of the whole data set present in that class in decimal form.
 - The number of values that fall under each class.
	- The largest value can either be included in the final class (changing its range to $\text{lower} ≤ x ≤ \text{highest}$), or put in a completely new class above the largest class.

??? example
    | Height $x$ (cm) | Frequency |
    | --- | --- |
    | $1≤x<5$ | 2 |
    | $5≤x<9$ | 3 |
    | $9≤x≤14$ | 1 |

For a given class $i$, the midpoint of that class is as follows:
$$x_{i} = \frac{\text{lower bound} + \text{upper bound}}{2}$$

### Quartiles

A **percentile** is a value indicates the percentage of a data set that is below it. To find the location of a given percentile, $P_k = \frac{kn}{100}$, where $k$ denotes the percentile number and $n$ represents the sample size.

A **decile** indicates that $n×10$% of data in the data set is below it.

!!! example
    A score equal to or greater than 97% of all scores in a test is said to be in the *97th percentile*, or in the *9th decile*.

Quartiles split a data set into four equal sections.

 - The **minimum** is the lowest value of a data set.
 - The **first quartile** ($Q_1$) is at the 25th percentile.
 - The **median** is at the 50th percentile.
 - The **third quartile** ($Q_3$) is at the 75th percentile.
 - The **maximum** is the highest value of a data set.

The first and third quartiles are the median of the **[minimum, median)** and **(median, maximum]** respectively.

!!! warning
    When the median is equal to a data point in a set, it *cannot* be used to find $Q_1$ or $Q_3$. Only use the data below or above the median.

!!! warning
    When working with grouped data given in ranges, the actual data is unavailable. The five numbers above are instead:

    - The minimum value is now the lower class boundary of the lowest class.
    - The first and third quartiles, as well as the median, are now found by guesstimating the value on a cumulative frequency curve.
    - The maximum value is now the upper class boundary of the highest class. If the highest value is excluded (e.g., $90≤x<100$), it also must be excluded when representing data (e.g., open dot instead of filled dot).
    - A specific percentile can be found by guesstimating the value on a cumulative frequency curve.

The **interquartile range (IQR)** is equal to $Q_3 - Q_1$ and represents the range where 50% of the data lies.

### Outliers

Outliers are data values that significantly differ from the rest of the data set. They may be because of:

 - a random natural occurrence, or
 - abnormal circumstances

Outliers can be ignored once identified.

There are various methods to identify outliers. For **single-variable** data sets, the **lower and upper fences** may be used. Any data below the lower fence or above the upper fence can be considered outliers.

 - The lower fence is equal to $Q_1 - 1.5×\text{IQR}$
 - The upper fence is equal to $Q_3 + 1.5×\text{IQR}$

### Representing frequency

A **stem and leaf plot** can list out all the data points while grouping them simultaneously.

A **frequency histogram** can be used to represent frequency distribution, with the x-axis containing class boundaries, and the y-axis representing frequency. 

<img src="/resources/images/frequency-discrete.png" width=700>(Source: Kognity)</img>

!!! note
    If data is discrete, a gap must be left between the bars. If data is continuous, there must *not* be a gap between the bars.

A **cumulative frequency table** can be used to find the number of data values below a certain class boundary. It involves the addition of a **cumulative frequency** column which represents the sum of the frequency of the current class as well as every class before it. It is similar to a prefix sum array in computer science.

??? example
    | Height $h$ (cm) | Frequency | Cumulative frequency |
    | --- | --- | --- |
    | $1≤h<10$ | 2 | 2 |
    | $10≤h<19$ | 5 | 7 |

A **cumulative frequency curve** consists of an independent variable on the x-axis, and the cumulative frequency on the y-axis. In grouped data, the values on the x-axis correspond to the upper bound of a given class. This graph is useful for interpolation (e.g., the value of a given percentile).

<img src="/resources/images/cumulative-frequency-curve.png" width=700>(Source: Kognity)</img> 

A **box-and-whisker plot** is a visual representation of the **"5-number summary"** of a data set. These five numbers are the minimum and maximum values, the median, and the first and third quartiles.

<img src="/resources/images/box-and-whisker.png" width=700>(Source: Kognity)</img>

!!! warning
    In the image above, the maximum and minimum dots are filled. If these values were to be excluded (e.g., the upper class boundary in grouped data is excluded), they should be unfilled instead.

### Measures of central tendency

The **mean** is the sum of all values divided by the total number of values. $\bar{x}$ represents the mean of a sample while $µ$ represents the mean of a population.

$$\bar{x}=\frac{\sum x}{n}$$ where $n$ is equal to the number of values in the data set.

In grouped data, the mean can only be estimated, and is equal to the average of the sum of midpoint of all classes multiplied by their class frequency.

$$\bar{x} = \frac{\sum x_i f_i}{n}$$ where $x_i$ is the midpoint of the $i$th class and $f_i$ is the frequency of the $i$th class.

The **median** is the middle value when the data set is sorted. If the data set has an even number of values, the median is the mean of the two centre-most values.

In grouped data, the median class is the class of the $\frac{n+1}{2}$th value if the number of values in the class is odd or the $\frac{n}{2}$th value otherwise.

The **mode** is the value that appears most often.

!!! definition
    - **Unimodal**: A data set with one mode.
    - **Bimodal**: A data set with two modes.
    - **Multimodal**: A data set with more than two modes.
    - **No mode**: A data set with no values occurring more than once.

In grouped data, the **modal class** is the class with the greatest frequency.

### Measures of dispersion

These are used to quantify the variability or spread of the data set.

The **range** of a data set is simple to calculate but is easily thrown off by outliers.

$$R = \max - \min$$

The **variance** ($\sigma^2$) and **standard deviation** ($\sigma$) of a data set are more useful. The standard deviation indicates how closely the values of a data set are clustered around the mean.

$$\sigma = \sqrt{\frac{\sum f_i (x_i - \bar{x})^2}{n}}$$ where $f_i$ is the frequency of the $i$th class, $x_i$ is the midpoint of the $i$th class, $\bar{x}$ is the mean of the whole data set, and $n$ is the number of values in the data set.

For ungrouped data, assume $f_i = 1$.

In a typical bell-shaped distribution:

 - 68% of data lie within 1 standard deviation of the mean ($\bar{x} ± \sigma$)
 - 95% of data lie within 2 standard deviations of the mean ($\bar{x} ± 2\sigma$)
 - 99.7% of data lie within 3 standard deviations of the mean ($\bar{x} ± 3\sigma$)
 - any data outside 3 standard deviations of the mean can be considered outliers

!!! info
    The **points of inflection** (when the curve changes direction) of a normal bell curve occur at $\bar{x} ± \sigma$.

### Data transformation

When performing an operation with a constant value to a whole data set:

| Operation | Effect on mean | Effect on standard deviation |
| --- | --- | --- |
| Addition/subtraction | Increased/decreased by constant | No change |
| Multiplication/division | Multiplied/divided by constant | Multiplied/divided by constant |


### Linear correlation and regression

!!! definition
    - **Interpolation**: The prediction of values within the range of a data set.
    - **Extrapolation**: The prediction of values outside the range of a data set. This tends to be less reliable than interpolation as it is unknown if the model is accurate outside of the range of the data set..

A scatter plot is used to help find trends and relationships between variables, which is primarily used to predict results not in the data set.

If there is a clear trend in the data, there is said to be a **correlation** between the independent and dependent variables.

 - If the line has an upward trend, it has a positive correlation.
 - If the line has a downward trend, it has a negative correlation.

The strength of the correlation ranges from none, weak, moderate, strong, and perfect, where the latter shows a line passing through all data points.

The line of best fit may not be linear. It may be quadratic, exponential, logarithmic, or there might not be a line of best fit at all. In the latter case, there is **no correlation**.

**Correlation does not imply causation**. There may be an external **confounding factor** which causes both trends, instead.

!!! example
    If ice cream consumption increases as deaths from drowning increase, it does not mean that drowning causes people to eat more ice cream. The confounding factor of summer increases ice cream consumption and frequency of swimming, which leads to more people drowning.

To find the **regression line** (line of best fit), a mean data point is required. The mean data point is a new point located at the mean of all x- and y-coordinates, or $M = (\bar{x}, \bar{y})$. The regression line then is the line that passes through the mean point while minimising the *vertical* distance from every data point. This is most easily performed on a graphing display calculator (GDC), but can be calculated manually if needed.

The **least squares regression** is used to find the equation of a line that passes through the mean point for which the *square* of the vertical distance between the line and all data points (the residuals) is minimised for each point. It involves forming a line such that the sum of all residuals is $0$, and the sum of all residuals squared is minimised.

Alternatively, to manually guesstimate a linear line of best fit, a line can be drawn from the mean point to a point that best appears to lie on the line of best fit.

The **Pearson product-moment correlation coefficient** (more commonly known as *Pearson's $r$* or the *$r$-value*) quantifies the **correlation strength** of a line of best fit, or how well the line of best fit fits. This value is such that $-1≤r≤1$, where

 - $r>0$ is a positive correlation
 - $r<0$ is a negative correlation
 - $|r|=1$ is a perfect correlation
 - $0.7≤|r|<1$ is a strong correlation
 - $0.3≤|r|<0.7$ is a weak to moderate correlation
 - $0≤|r|<0.3$ is no correlation, so that no line of best fit can be drawn.

## 5 - Calculus

### Rate of change

The **average rate of change (ARoC)** between points $P(a, f(a))$ and $Q(a + h, f(a+h))$ is represented by the slope of the **secant line ($m_s$)**. Therefore, as slope is the difference in rise over the difference of run ($\frac{\Delta y}{\Delta x}$), the slope of the secant line can be expressed as
$$m_s = \frac{f(a+h)-f(a)}{h}, h ≠ 0$$

This is known as the **difference quotient**.

The **instantaneous rate of change (IRoC)** at point $P(a, f(a))$ is represented by the slope of the **tangent line ($m_T$)**. The slope of the tangent line can be found by finding the difference quotient with $h$ as a very small value, e.g., $0.001$.

!!! warning
    The above method of finding the IRoC should be disregarded in favour of finding the derivative.

### Sequences

A sequence is a **function** with a domain of all positive integers in sequence, but uses subscript notation ($t_n$) instead of function notation ($f(x)$).

!!! reminder
    - The **recursive** formula for a sequence is $t_n = t_{n-1} + 2$ where $t_1 = 1$.
    - The **arithmetic** formula for a sequence is $t_n = 2n-1$.

If the sequence is infinite, as $n$ becomes very large:

 - If the sequence continuously grows, it **tends to infinity**. (E.g., $a_n = n^2, n ≥ 1$)
 - If the sequence gets closer to a real number and converges on it, it **converges to a real limit**, or is **convergent**. (E.g., $a_n = \frac{1}{n}, n ≥ 1$)
 - If the sequence never approaches a number, it **does not tend to a limit**, or is **divergent**. (E.g., $a_n = \sin(n \pi)$)

### Limits

A **limit** to a function is the behaviour of that function as a variable approaches, **but does not equal**, another variable.

!!! example
    $$\lim_{x \to c} f(x) = L$$
    "The limit of $f(x)$ as $x$ approaches $c$ is $L$."

If the lines on both sides of a limit do not converge at the same point, that limit *does not exist*.

If the lines on both sides of a limit become arbitrarily large as $x$ approaches $a$, it approaches infinity.
$$\lim_{x \to a} f(x) = ∞$$

### One-sided limits

A positive or negative sign is used at the top-right corner of the value approached to denote if that limit applies only to the negative or positive side, respectively. A limit without this sign applies to both sides.

!!! example
    - $\lim_{x \to 3^-} f(x) = 2$ shows that as $x$ approaches $3$ from the negative (usually left) side, $f(x)$ approaches $2$.
    - $\lim_{x \to 3^+} f(x) = 2$ shows that as $x$ approaches $3$ from the positive (usually right) side, $f(x)$ approaches $2$.
    - $\lim_{x \to 3} f(x) = 2$ shows that as $x$ approaches $3$ from either side, $f(x)$ approaches $2$.

If $\lim_{x \to c^-} f(x) ≠ \lim_{x \to c^+} f(x)$, $\lim_{x \to c} f(x)$ **does not exist**.

### Properties of limits

The following properties assume that $f(x)$ and $g(x)$ have limits at $x = a$, and that $a$, $c$, and $k$ are all real numbers.

 - $\lim_{x \to a} k = k$
 - $\lim_{x \to a} x = a$ 
 - $\lim_{x \to a} [f(x) ± g(x)] = \lim_{x \to a} f(x) ± \lim_{x \to a} g(x)$
 - $\lim_{x \to a} [f(x) \cdot g(x)] = [\lim_{x \to a} f(x)] [\lim_{x \to a} g(x)]$
 - $\lim_{x \to a} [k \cdot f(x)] = k \cdot \lim_{x \to a} f(x)$
 - $\lim_{x \to a} [f(x)]^2 = [\lim_{x \to a} f(x)]^2$

### Evaluating limits

When solving for limits, there are five central strategies used, typically in this order if possible:

#### Direct substitution

Substitute $x$ as $a$ and solve.

??? example
    $$
    \lim_{x \to 5} (x^2 + 4x + 3) \\
    = 5^2 + 4(5) + 3 \\
    = 48
    $$

If **only** direct substitution fails and returns $\frac{0}{0}$, continue on with the following steps. If **only** the denominator is $0$, the limit **does not exist**.

#### Factorisation, expansion, and simplification

Attempt to factor out the variable as much as possible so that the result is not $\frac{0}{0}$, and then perform direct substitution.

??? example
    $$
    \lim_{x \to 1} \frac{x^2 - 1}{x-1} \\
    = \lim_{x \to 1} \frac{(x + 1) (x - 1)}{x-1} \\
    = \lim_{x \to 1} (x+1) \\
    = 1 + 1 \\
    = 2
    $$

#### Rationalisation

If there is a square root, multiplying both sides of a fraction by the conjugate may allow direct substitution or factorisation.

??? example
    $$
    \lim_{x \to 0} \frac{\sqrt{1-x}-1}{x} \\
    = \lim_{x \to 0} \frac{\sqrt{1-x}-1}{x} \cdot \frac{\sqrt{1-x}+1}{\sqrt{1-x}+1} \\
    = \lim_{x \to 0} \frac{1-x - 1}{x\sqrt{1-x} + x} \\
    = \lim_{x \to 0} \frac{1}{\sqrt{1-x} + 1} \\
    = \frac{1}{\sqrt{1-0} + 1} \\
    = \frac{1}{2}
    $$

#### One-sided limits

There may only be one-sided limits. In this case, breaking the limit up into its two one-sided limits can confirm if the two-sided limit does not exist when looked at together.

#### Change in variable

Substituting a variable in for the variable to be solved and then solving in terms of that variable may remove a problem variable.

??? example
    $$
    \lim_{x \to 0} \frac{x}{(x+1^\frac{1}{3}-1} \\
    \text{let } (x+1)^\frac{1}{3} \text{ be } y \\
    x + 8 = y^3 \\
    x = y^3 - 8, \text{as } x \to 0, y \to 2 \\
    \lim_{y \to 2} \frac{y-2}{y^3 - 8} \\
    = \lim_{y \to 2} \frac{(y-2)(y^2 + 4y + 4)}{(y^3-8)(y^2 + 4y + 4)} \\
    = \lim_{y \to 2} \frac{1}{y^2 + 4y + 4} \\
    = \frac{1}{2^2 + 4(2) + 4} \\
    = \frac{1}{16}
    $$

!!! note
    If $\lim_{x \to a} \frac{f(x)}{g(x)}$ exists and direct substitution is not possible, $x - a$ *must* be a factor of both $f(x)$ and $g(x)$ so that the discontinuity can be removed. Therefore, $f(a) = 0$ and $g(a) = 0$.

### Limits and continuity

If a function has holes or gaps or jumps (i.e., if it cannot be drawn with a writing utensil held down all the time), it is **discontinuous**. Otherwise, it is a **continuous** function. A function discontinuous at $x=a$ is "discontinuous at $a$", where $a$ is the "point of discontinuity".

A **removable discontinuity** occurs when there is a hole in a function. It can be expressed as when either
$$
f(a) = \text{DNE  or} \\
\lim_{x \to a} f(x) ≠ f(a)
$$

A **jump discontinuity** occurs when both one-sided limits have different values. It is common in piecewise functions. It can be expressed as when
$$\lim_{x \to a^-} f(x) ≠ \lim_{x \to a^+} f(x)$$

An **infinite discontinuity** occurs when both one-sided limits are infinite. It is common when functions have vertical asymptotes. It can be expressed as when
$$\lim_{x \to a} f(x) = ± ∞$$

Therefore, a function is only continuous at $a$ if all of the following are true:

 - $f(a)$ exists
 - $\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$
 - $\lim_{x \to a} f(x) = f(a)$

### Limits approaching infinity

As $x$ approaches infinity, $\lim_{x \to ∞} f(x)$ has only three possible answers.

By dividing both sides of a fraction by the $x$ variable of the highest degree, if $m$ is the degree of the denominator and $n$ is the degree of the numerator:

 - If $m > n$, $\lim_{x \to ∞} f(x) = 0$
 - If $m < n$, $\lim_{x \to ∞} f(x) = ± ∞$
	- The sign of infinity can be found by evaluating the limit
 - If $m = n$, $\lim_{x \to ∞} f(x) = \frac{a}{b}$, where $a$ and $b$ are the coefficients of the degree of the numerator and the denominator, respectively.

### Derivatives

A derivative function is a function of all **tangent slopes** in the original function. It can either be expressed in function notation as $f´(x)$ ("f prime of x") or in Leibniz notation as $\frac{dy}{dx}$. The process of finding a derivative of a function is known as **differentiation**.

!!! note
    Although evaluating a derivative function in function notation is the usual $f´(5)$ to solve for when $x = 5$, Leibniz notation is stupid and requires the following (the vertical bar shown should be solid):
    $$\frac{dy}{dx} \biggr|_{x=5}$$

If $f´(a)$ exists, the function is "differentiable at $a$" such that $f´(a^-) = f´(a^+)$. Functions are only differentiable at $a$ if the function is **continuous at $a$** and the tangent at $a$ is not vertical.

!!! example
    Some examples of issues that can cause $f´(a)=\text{DNE}$ are vertical asymptotes and other discontinuities, vertical tangents, cusps, and corners. The last two cause $f´(a^-) ≠ f´(a^+)$.

### Finding derivatives using first principles

The first principles method of finding derivatives involves using simple algebra and limits. Taking the difference quotient and adding a limit of $h \to 0$:
$$f´(x)=\lim_{h \to 0} \frac{f(x+h)-f(x)}{h}$$

results in the equation of the derivative function. Direct substitution of $h$ will result in an indeterminate form, so the equation should be manipulated to remove $h$ from the denominator typically via factoring.

??? example
    Differentiating $f(x)=2x^2 + 6$ using first principles:
    $$
    f´(x)=\lim_{h \to 0} \frac{f(x+h)-f(x)}{h} \\
    = \lim_{h \to 0} \frac{2(x+h)^2 + 6 - (2x^2 - 6)}{h} \\
    = \lim_{h \to 0} \frac{4xh+2h^2}{h} \\
    = \lim_{h \to 0} 4x+2h \\
    f´(x)=4x
    $$

### Drawing derivative functions

If the slope of a tangent is:

 - positive/negative, that value on the derivative graph is also positive/negative, respectively
 - zero, that value on the derivative graph is on the x-axis 

Points of inflection on the original function become maximum/minimum points on the derivative graph.

The derivative of a linear equation is always constant, and the derivative of a constant value is $0$..

### Derivative rules

These rules can be used in place of/to supplement finding derivative functions using first principles and are usually much faster to calculate. These rules assume that all of the functions involved are differentiable.

The degree of a derivative is always the degree of the original function$-1$.

The **power rule** applies to all functions of the form $f(x)=x^n,x \in \mathbb{R}$, such that:
$$f´(x) = nx^{n-1}$$

??? example
    $$f(x) = x^5$$
    $$f´(x) = 5x^4$$

The **constant multiple rule** applies to all functions of the form $f(x) = k·g(x)$, where $k$ is any real number, such that:
$$f´(x) = k·g´(x)$$

??? example
    $$f(x) = 2x^2$$
    $$f´(x) = 2·2x$$
    $$f´(x) = 4x$$

The **sum rule** applies to all functions of the form $f(x) = g(x) + h(x)$ such that:
$$f´(x) = g´(x) + h´(x)$$

??? example
    $$f(x) = 2x^2 + 3x$$
    $$f´(x) = 4x + 3$$

The **product rule** applies to all functions of the form $f(x) = g(x)h(x)$ such that:
$$f´(x) = g´(x)h(x) + g(x)h´(x)$$

??? example
    $$f(x) = (2x+5)(x-1)$$
    $$f´(x) = 2(x-1) + (2x+5)·1$$
    $$f´(x) = 4x + 1$$

The **extended product rule** applies to all functions of the form $f(x) = g(x)h(x)j(x)$ such that:
$$f´(x) = g´(x)h(x)j(x) + g(x)h´(x)j(x) + g(x)h(x)j´(x)$$

The **quotient rule** applies to all functions of the form $f(x) = \frac{g(x)}{h(x)}$ such that:
$$f´(x) = \frac{g´(x)h(x)-g(x)h´(x)}{[h(x)]^2}, h(x) ≠ 0$$

??? example
    $$f(x) = \frac{2x+5}{x-1}$$
    $$f´(x) = \frac{2(x-1) - (2x+5)·1}{(x-1)^2}$$
    $$f´(x) = -\frac{7}{(x-1)^2}$$

The **chain rule** applies to all functions of the form $f(x) = g(h(x))$ such that:
$$f´(x) = g´(h(x)) · h´(x)$$

??? example
    $$f(x) = (4x^2-3x+1)^7$$
    $$f´(x) = 7(4x^2-3x+1)^6 (8x-3)$$

### Higher order derivatives

The **second derivative** of $f(x)$ is the derivative of the first derivative of $f(x)$, that is, $f´´(x)$.

The $n$th derivative of $f(x)$ is $f^{(n)}(x)$, and is the derivative of the $n-1$th derivative. It is written as $\frac{d^ny}{dx^n}$ in Leibniz notation.

!!! example
    The second derivative of an object's position with respect to time is its acceleration. See [SL Physics A#Displaying motion](/sph3u7/#displaying-motion) for more information.

### Interval charts

To identify the positive or negative regions of an equation, an interval line or chart can be used. To do so:

1. Factor the equation as much as possible and identify the x-intercepts.
2. Place the x-intercepts on a line.
3. Find the sign of the end behaviour by taking the sign of the leading coefficient.
4. When crossing an x-intercept, if the degree of that factor is even, the sign stays the same; otherwise, it alternates.
5. Repeat for every other region.

### Implicit differentiation

Implicit differentiation differentiates both sides of an equation with respect to $x$ and solves for $\frac{dy}{dx}$ ($y´$). Note that if $y$ is isolated, this is effectively the same as explicit differentiation. When differentiating implicitly, it must be shown that the derivative of both sides with respect to x ($\frac{d}{dx}$) is being taken.

!!! warning
    The **chain rule** must be applied when differentiating terms that contain $y$.

!!! example
    $$
    \frac{x^2}{4} + y^2 = 1 \\
    \frac{2x}{4} + 2y · \frac{dy}{dx} = 0 \\
    \frac{dy}{dx} = -\frac{\frac{x}{2}}{2y} \\
    \frac{dy}{dx} = -\frac{x}{4y}
    $$

### Related rates

When solving for questions that ask for rate of change related to other rates of change, ensure that:

 - variables are defined
 - equations are written in terms of derivates
 - the equations are differentiated **with respect to time**
 - apply derivative rules (especially the chain rule) to every variable that is not a constant (i.e., that changes with respect to time)
 - substitute values only at the end

## 5.2 - Increasing and decreasing functions

 - If $f´(x) > 0$ in the interval $[a,b]$, $f$ is **increasing** on $[a,b]$.
 - If $f´(x) < 0$ in the interval $[a,b]$, $f$ is **decreasing** on $[a,b]$.
 - If $f´(x) = 0$ in the interval $[a,b]$, $f$ is **constant** on $[a,b]$.
 - The points where $f´(x)=0$ are the **critical**/maximum/minimum points.

Functions only change whether they are increasing/decreasing/constant at the **critical points**/"relative extrema".

These points and whether the intervals between them increase/decrease can be found by using an **interval chart/line** using the first derivative.

!!! example
    If $f(x)=\frac{2x-3}{x^2+2x-3}$:
    
    - $f$ is decreasing on $(-∞, -3) \cup (-3, 0) \cup (3, ∞)$.
    - $f$ is increasing on $(0, 1) \cup (1, 3)$.

### Extrema

Extrema are the maximum and minimum points in a function or an interval of a function. They must be at **critical points**—where $f(x)=0$ or $f(x)=\text{DNE}$, and may include the **boundary points** if looking for extrema in a given interval.

The highest and lowest point(s) of $f(x)$ are known as the **absolute** maximum/minimum of $f(x)$.

Any other **relative/local** maxima or minima are such that all of the points around that point are higher or lower.

**Fermat's theorem** states that if $f(c)$ is a local extremum, $c$ must be a critical number of $f$. Therefore, if $f$ is continuous in the closed interval $[a,b]$, the absolute extrema of $f$ must occur at $a$, $b$, or a critical number.

To find the extrema of a **continuous** function $f(x)$, where $x=a$ is a critical value, the **first derivative test** may be used with the assistance of an interval chart/line. If only an interval of a function is under consideration, the boundary points must be taken under consideration as well.

 - If $f´(a)$ changes from positive to negative, there is a relative/local minimum at $x=a$.
 - If $f´(a)$ changes from negative to positive, there is a relative/local maximum at $x=a$.
 - If the sign is the same on both sides, there is no extrema at $x=a$.
 - The greatest/least relative/local maximum/minimum is the absolute maximum/minimum.

Alternatively, the second derivative test may be used instead. At the critical point where $x=a$, a positive $f´´(a)$ indicates a **local minimum** while a negative $f´´(a)$ indicates a **local maximum**. If $f´´(x)=0$, the test is inconclusive and the first derivative test must be used.

!!! example
    The absolute minimum of $f(x)=x^2$ is at $(0,0)$. There is no absolute maximum nor are there any other relative/local maximum/minimum points.

!!! warning
    - There can be multiple absolute maxima/minima if there are multiple points that are both highest/lowest.
    - If a function is a horizontal line, the absolute maximum and minimum for $x \in \text{domain}$ is $y$.

### Concavity

!!! definition
    A **point of inflection** on a curve is such that $f´´(x)=0 \text{ or DNE}$ and the signs of $f´´(x)$ around the point change (e.g., positive to negative).

 - An interval is **concave up** if it increases from left to right and tangent lines are drawn below the curve, so $f´´(x)>0$. It is shaped like a smile.
 - An interval is **concave down** if it increases from left to right and tangent lines are drawn **above** the curve, and $f´´(x)<0$. It is shaped like a frown.

Changes in concavity only occur at points of inflection.

### Cusps

A cusp is a point on a continuous function that is not differentiable as the slopes on both sides approach -∞ and ∞. Concavity does not change at a cusp, but they may be considered for local extrema.

### Optimisation

To optimise for a maximum or minimum of a variable:

 - Identify an equation with only one variable dependent on another
 - Find the first derivative and identify critical points
 - Use the second derivative test to identify if the critical point is a maximum or minimum
 - Check constraints and throw away any inadmissible results

Diagrams with labelled variables may be helpful.

### Asymptote behaviour

The vertical asymptotes of a function are at values of $x$ that make the denominator of the simplified function $0$. The behaviour near them can be found using limits as $x$ approaches those points.

The horizontal asymptotes of a function can be found as $x$ approaches positive and negative infinity. To determine behaviour near them, the sign of $\lim_{xs \to ±∞} f(x) - L$, where $L$ is the y-coordinate of the asymptote. A positive limit indicates that $f(x)$ is above the asymptote while a negative limit indicates that $f(x)$ is below the asymptote.

### Curve sketching

 - Determine the domain of the function and consider discontinuities (holes and asymptotes)
 - Determine the y-intercept and if easy, x-intercepts
 - Determine the behaviour near vertical and horizontal asymptotes
 - Identify critical points by solving $f´(x)=0$ or $f´(x)=\text{DNE}$
 - Use the first or second derivative tests to test critical points
 - Identify points of inflection by solving $f´´(x)=0$ or $f´´(x)=\text{DNE}$ and test concavity on both sides of possible points

## Resources

 - [IB Math Analysis and Approaches Syllabus](/resources/g11/ib-math-syllabus.pdf)
 - [IB Math Analysis and Approaches Formula Booklet](/resources/g11/ib-math-data-booklet.pdf)
 - [Calculus and Vectors 12 Textbook](/resources/g11/calculus-vectors-textbook.pdf)
 - [Course Pack Unit 1: Descriptive Statistics](/resources/g11/s1cp1.pdf)
 - [Course Pack Unit 2: Limits and Rate of Change](/resources/g11/s1cp2.pdf)
 - [Course Pack Unit 3: Derivatives and Applications](/resources/g11/s1cp3.pdf)
 - [Course Pack Unit 4: Curve Sketching and Optimisation](/resources/g11/s1cp4.pdf)
 - [Course Pack Unit 5: Trigonometric, Exponential, and Logarithmic Functions](/resources/g11/s1cp5.pdf)
 - [TI-84 Plus Basic Calculator Functions](/resources/g11/ti-84-plus.pdf)
