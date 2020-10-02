# SL Math - Analysis and Approaches - A

The course code for this page is **MHF4U7**.

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
	- This number is arbitrarily chosen, but a commonly used formula is $\lceil\sqrt{\text{# of elements}}\rceil$.
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

### Sequences

A sequence is a **function** with a domain of all positive integers in sequence, but uses subscript notation ($t_n$) instead of function notation ($f(x)$).

### Limits

### Evaluating limits

## Resources

 - [IB Math Analysis and Approaches Syllabus](/resources/g11/ib-math-syllabus.pdf)
 - [IB Math Analysis and Approaches Formula Booklet](/resources/g11/ib-math-data-booklet.pdf)
 - [Calculus and Vectors 12 Textbook](/resources/g11/calculus-vectors-textbook.pdf)
 - [Course Pack Unit 1: Descriptive Statistics](/resources/g11/s1cp1.pdf)
 - [Course Pack Unit 2: Limits and Rate of Change](/resources/g11/s1cp2.pdf)
 - [TI-84 Plus Basic Calculator Functions](/resources/g11/ti-84-plus.pdf)
