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
	- The width (size) of each class is $\lceil\frac{\text{max value} - \text{min value}}{\text{number of classes}}\rceil$.
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


### Outliers

Outliers are data values that significantly differs from the rest of the data set. They may be because of:

 - a random natural occurrence, or
 - abnormal circumstances

Outliers can be ignored once identified.

## Resources

 - [IB Math Analysis and Approaches Syllabus](/resources/g11/ib-math-syllabus.pdf)
 - [IB Math Analysis and Approaches Formula Booklet](/resources/g11/ib-math-data-booklet.pdf)
 - [Calculus and Vectors 12 Textbook](/resources/g11/calculus-vectors-textbook.pdf)
 - [Course Pack Unit 1: Descriptive Statistics](/resources/g11/s1cp1.pdf)
