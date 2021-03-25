# SL Math - Analysis and Approaches - 2

The course code for this page is **MCV4U7**.

## Integration

Integration is an operation that finds the **net** area under a curve, and is the opposite operation of differentiation. As such, it is also known as **anti-differentiation**.

The area under a curve between the interval of x-values $[a,b]$ is:
$$A=\lim_{x\to\infty}\sum^n_{i=1}f(x_i)\Delta x$$

which can be simplified to, where $dx$ indicates that integration should be performed with respect to $x$:
$$A=\int^b_a f(x)dx$$

While $\Sigma$ refers to a finite sum, $\int$ refers to the sum of a limit.

As integration is the opposite operation of differentiation, they can cancel each other out.
$$\frac{d}{dx}\int f(x)dx=f(x)$$

The **integral** or **anti-derivative** of a function is capitalised by convention. Where $C$ is an unknown constant:
$$\int f(x)dx=F(x)+C$$

When integrating, there is always an unknown constant $C$ as there are infinitely many possible functions that have the same rate of change but have different vertical translations.

!!! definition
    - $C$ is known as the **constant of integration**.
    - $f(x)$ is the **integrand**.

### Integration rules

$$
\begin{align*}
&\int 1dx &= &&x+C \\
&\int (ax^n)dx, n≠-1 &=&&\frac{a}{n+1}x^{n+1} + C \\
&\int (x^{-1})dx&=&&\ln|x|+C \\
&\int (ax+b)^{-1}dx&=&&\frac{\ln|ax+b|}{a}+C \\
&\int (ae^{kx})dx &= &&\frac{a}{k}e^{kx} + C \\
&\int (\sin kx)dx &= &&\frac{-\cos kx}{k}+C \\
&\int (\cos kx)dx &= &&\frac{\sin kx}{k}+C \\
\end{align*}
$$

Similar to differentiation, integration allows for constant multiples to be brought out and terms to be considered individually.

$$
\begin{align*}
&\int k\cdot f(x)dx&=&&k\int f(x)dx \\
&\int[f(x)\pm g(x)]dx&=&&\int f(x)dx \pm \int g(x)dx
\end{align*}
$$

### Indefinite integration

The indefinite integral of a function contains every possible anti-derivative — that is, it contains the constant of integration $C$.
$$\int f(x)dx=F(x)+C$$

### Substitution rule

Similar to limit evaluation, the substitution of complex expressions involving $x$ and $dx$ with $u$ and $du$ is generally used to work with the chain rule.
$$
u=g(x) \\
\int f(g(x))\cdot g´(x)\cdot dx = \int f(u)\cdot du
$$

??? example
    To solve $\int (x\sqrt{x-1})dx$:
    $$
    let\ u=x-1 \\
    ∴ \frac{du}{dx}=1 \\
    ∴ du=dx \\
    \begin{align*}
    \int (x\sqrt{x-1})dx &\to \int(u+1)(u^\frac{1}{2})du \\
    &= \int(u^\frac{3}{2}+u^\frac{1}{2})du \\
    &= \frac{2}{5}u^\frac{5}{2}+\frac{2}{3}u^\frac{3}{2}+C \\
    &= \frac{2}{5}(x-1)^\frac{5}{2} + \frac{2}{3}(x-1)^\frac{3}{2} + C
    \end{align*}
    $$

### Definite integration

To find a numerical value of the area under the curve in the bounded interval $[a,b]$, the **definite** integral can be taken.
$$\int^b_a f(x)dx$$

$a$ and $b$ are known as the lower and upper **limits of integration**, respectively.

<img src="/resources/images/integration.png" width=700>(Source; Kognity)</img>

Regions **under** the x-axis are treated as negative while those above are positive, cancelling each other out, so the definite integral finds something like the net area over an interval.

If $f(x)$ is continuous at $[a,b]$ and $F(x)$ is the anti-derivative, the definite integral is equal to:
$$\int^b_a f(x)dx=F(x)\biggr]^b_a=F(b)-F(a)$$

As such, it can be evaluated manually by integrating the function and subtracting the two anti-derivatives.

!!! warning
    If $u$-substitution is used, the limits of integration must be adjusted accordingly.

To find the total **area** enclosed between the x-axis, $x=a$, $x=b$, and $f(x)$, the function needs to be split at each x-intercept and the absolute value of each definite integral in those intervals summed.
$$A=\int^b_a \big|f(x)\big| dx$$

### Properties of definite integration

The following rules only apply while $f(x)$ and $g(x)$ are continuous in the interval $[a,b]$ and $c$ is a constant.

$$
\begin{align*}
&\int^a_a f(x)dx&=&&0 \\
&\int^b_a c\cdot dx&=&&c(b-a) \\
&\int^a_b f(x)dx&=&&-\int^b_a f(x)dx \\
&\int^c_a f(x)dx&=&&\int^b_a f(x)dx + \int^c_b f(x)dx
\end{align*}
$$

The **constant multiple** and **sum** rules still apply.

### Area between two curves

To find the area enclosed between two curves, the graph should be sketched if possible and their points of intersection determined to identify which parts of each function are on top of the other at any given time. An interval chart may be helpful. For each section, where $f(x)$ is always greater than $g(x)$ in the interval $[a,b]$:
$$A=\int^b_a [f(x)-g(x)]dx, f(x)\geq g(x)\text{ in } [a,b]$$

If the limits of integration are not given, they are the outermost points of intersection of the two curves.

### Volumes of solids of revolution

Shapes formed by rotating a line or curve about a fixed axis, such as cones, spheres, and cylinders are all known as **solids of revolution**. By splicing each shape into infinitely small disks, the cylinder volume formula can be used to find the volume of the solid.
$$
\begin{align*}
V&=\lim_{x\to 0}\sum^b_{x=a}\pi y^2 dx \\
&=\pi\int^b_a y^2 dx
\end{align*}
$$

The area between two curves can also be rotated to form a solid, in which case its formula is:
$$V=\pi\int^b_a \big[g(x)^2-f(x)^2\big]dx, g(x)>f(x)$$

## Probability

!!! definition
    - $\cap$ is the **intersection sign** and means "and".
    - $\cup$ is the **union sign** and means "or".
    - $\subset$ is the **subset sign** and indicates that the value on the left is a subset of the value on the right.
    - The **sample space** of an experiment is a list/set of all of the possible outcomes.
    - An **event** is a subset of a sample space that contains outcomes that meet a particular requirement.

### Sets

A **set** is a collection of things represented with curly brackets that can be assigned to a variable.

!!! example
    $A=\{0,1,2\}$ assigns the variable $A$ to a collection of numbers $0, 1, 2$.

The variable $U$ is usually reserved for the **universal set**: a set that contains all of the elements under discussion for a particular situation.

Where both $A$ and $B$ are sets:

 - $A\cap B$ returns a new set with only objects that belong to both $A$ **and** $B$.
 - $A\cup B$ returns a new set with only objects that are inclusively in either $A$ **or** $B$.
 - $A\subset B$ is true only if all of the elements in $A$ are also in $B$.
 - $A'$ or $A^c$ return the **complement** of a set: they return all elements in the universal set that are **not** in $A$.
 - $n(A)$ returns the number of elements in set $A$.

An empty/**null** set contains no objects and is represented either as $\{\}$ or $\emptyset$.

Two sets are **disjoint** or **distinct** if they have no common elements between them.

!!! warning
    Generally, unless specified otherwise, "between" should be inferred to mean "inclusively between".

### Probability rules

The probability of an event is represented by $P(A)$, where $A$ is the event.
$$P(A)=\frac{n(A)}{n(U)}$$

As event $A$ must be a subset of all possible outcomes $U$, where $1$ indicates that the event always happens and $0$ the opposite:
$$0\leq P(A)\leq 1$$

The **complement** of event $A$ is the probability that it does not happen. It is written as $A^c$, $A'$, or $\pu{not } A$.
$$P(A')=1-P(A)$$

Events $A$ and $B$ are **disjoint** or mutually exclusive if no outcomes between them are common and can never happen simultaneously. As such the probability of one of the events happening is equal to their sum.
$$
P(A\cup B)=P(A)+P(B) \\
P(A\cap B)=0
$$

Events $A$ and $B$ are **exhaustive** if their union includes all possible outcomes in the sample space: $A\cup B=U$.
$$P(A\cup B)=1$$

The **principle of inclusion and exclusion** forms a general rule for the union between two *independent* events:
$$P(A\cup B)=P(A)+P(B)-P(A\cap B)$$

For independent events:
$$P(A\cap B)=P(A)\times P(B)$$

### Conditional probability

A vertical bar is used between two events to denote that the event on the left occurs knowing that the right has already occurred.
$$P(A|B) = \frac{P(A\cap B)}{P(B)}$$

!!! example
    $P(A|B)$ is the probability of event $A$ given $B$ has occurred.

### Probability distributions and discrete random variables

The **discrete random variable**, $X$, represents a **quantifiable**, measurable, discrete quantity. The lowercase $x$ represents a possible value of $X$.

The probability that $X$ takes on any one of the specific possible outcomes is written as $P(X=x)$. The sum of the probability all possible outcomes must still remain $1$:
$$\Sigma P(X=x)=1$$

!!! example
    In an experiment of tossing a coin twice, possible values of $X$ include $0,1,2$ so $x\in\{0, 1, 2\}$.

A **probability distribution** is a distribution of outcomes and their probabilities. Events/outcomes are placed on the top row while probability is provided on the bottom in the form of a fraction. Probability distributions can also be graphed with the outcomes on the x-axis and their probabilities on the y-axis with lines similar to a bar graph sitting on the grid lines to represent a probability..

!!! example
    For the coin ross experiment in the previous example, where $X$ is the number of tails when tossing a coin twice:
    
    | $x$ | $0$ | $1$ | $2$ |
    | --- | --- | --- | --- |
    | $P(X=x)$ | $\frac{1}{4}$ | $\frac{1}{2}$ | $\frac{1}{4}$ |

The **expected value** of an experiment or the "expectation of $X$" is the mean value of $X$ that is expected to be obtained over many trials. It is equal to the sum of the value of all outcomes multiplied by their probability.
$$
\begin{align*}
E(X)&=\Sigma P(X=x)x \\
&=\mu=x_1p_1+x_2p_2+...+x_kp_k
\end{align*}
$$

!!! warning
    It is possible that the expected value will not be a value in the set, and the expected value should **not be mistaken** with the outcome with the highest probability.

### Binomial distribution

**Bernoulli trials** have a fixed number of trials that are independent of each other and identical with only two possible outcomes — a success or failure.

Where $r$ is the number of successes in a Bernoulli trial:
$$P(X=r)={n\choose r}p^rq^{n-r}$$

where ${n\choose r}=\frac{n!}{r!(n-r)!}$

A binomial distribution is a probability distribution of two possible events, a success or a failure. The distribution is defined by the number of trials, $n$, and the probability of a success, $p$. The probability of failure is defined as $q=1-p$.

$X\sim$ denotes that the random variable $X$ is distributed in a certain way. Therefore, the binomial distribution of $X$ is expressed as:
$$X\sim B(n, p)$$

In a binomial distribution, the expected value and **variance** are as follows:
$$
E(X)=np \\
Var(X)=npq
$$

On a graphing display calculator, where $r$ is the number of successes:
$$
\begin{align*}
P(X=r)&=\text{binompdf}(n,p,r) \\
P(X<r)&=\text{binomcdf}(n,p,r-1) \\
P(X\leq r)&=\text{binomcdf}(n,p,r) \\
P(a\leq X\leq b)&=\text{binomcdf}(n,p,b) - \text{binomcdf}(n,p,a)
\end{align*}
$$

### Normal distribution

Also known as **Gaussian distribution** or in its graphical form, a normal or bell curve, the normal distribution is a **continuous** probability distribution for the random variable $x$.

<img src="/resources/images/gaussian-distribution.png" width=700>(Source: Kognity)</img>

In a normal distribution:

 - The mean, median, and mode are all equal.
 - The normal curve is bell-shaped and symmetric about the mean.
 - The area under the curve is equal to one.
 - The normal curve approaches but does not touch the x-axis as it approaches $\pm \infty$.

From $\mu-\sigma$ to $\mu+\sigma$, the curve curves downward. $\mu\pm\sigma$ are the **inflection points** of the graph. It is expressed graphically as:
$$X\sim N(\mu,\sigma^2)$$

where

$$f(x)=\frac{1}{\sigma\sqrt{2\pi}}e^\frac{-(x-\mu)^2}{2\sigma^2}$$

~68%, ~95%, and ~99.7% of the data is found within one, two, and three standard deviations of the mean, respectively.

### Standard normal distribution

The **standard normal distribution** has a mean of 0 and standard deviation of 1. The horizontal scale of the standard normal curve corresponds to **$z$-scores** that represent the number of standard deviations away from the mean. To convert an $x$-score to a $z$-score:
$$z=\frac{x-\mu}{\sigma}$$

A **Standard Normal Table** can be used to determine the cumulative area under the standard normal curve to the left of scores -3.49 to 3.49. The area to the *right* of the score is equal to $1-z_\text{left}$. The area *between* two z-scores is the difference in between the area of the two z-scores.

To standardise a normal random variable, it should be converted from the form $X\sim N(\mu,\sigma^2$ to $Z\sim N(0,1)$ via the formula to convert between x- and z-scores.

The probability of a z-score being less than a value can be rewritten as phi.
$$P(z<a)=\phi(a)$$

Some z-score rules partially taken from probability rules:

$$
\begin{align*}
P(z>-a)&=P(z<a) \\
1-P(z>a)&=P(z<a)
\end{align*}
$$

On a graphing display calculator:

The `normalcdf` command can be used to find the cumulative probabilty in a normal distribution in the format $\text{normalcdf}(a,b,\mu,\sigma)$, which will solve for $P(a<x<b)$. $-1000$ is generally a sufficiently low value to solve for just $P(x<b)$. 

## Resources

 - [IB Math Analysis and Approaches Syllabus](/resources/g11/ib-math-syllabus.pdf)
 - [IB Math Analysis and Approaches Formula Booklet](/resources/g11/ib-math-data-booklet.pdf)
 - [Textbook: Calculus and Vectors 12](/resources/g11/calculus-vectors-textbook.pdf)
 - [Textbook: Oxford SL Mathematics](/resources/g11/textbook-oxford-math.pdf)
 - [Course Pack Unit 1: Integration](/resources/g11/s2cp1.pdf)
 - [Course Pack Unit 2: Probability](/resources/g11/s2cp2.pdf)
 - [TI-84 Plus Calculator Guide](/resources/g11/ti-84-plus.pdf)
