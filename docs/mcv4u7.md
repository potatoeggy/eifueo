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
P(a\leq X\leq b)&=\text{binomcdf}(n,p,b) - \text{binomcdf}(n,p,a-1)
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

To standardise a normal random variable, it should be converted from the form $X\sim N(\mu,\sigma^2)$ to $Z\sim N(0,1)$ via the formula to convert between x- and z-scores.

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

## Vectors

Please see [SL Physics 1#1.3 - Vectors and Scalars](/sph3u7/#13-vectors-and-scalars) for more information.

One vector can be represented in a variety of methods. The algebraic form $(1, 2)$ can also be represented in the alternate algebraic forms $[1, 2]$ and $1\choose 2$.

Where $v$ is the vector, $A$ is the initial and $B$ is the terminal point of the vector, a vector can be identified by any of the following symbols:

 - $\vec{AB}$
 - $\vec{v}$
 - $\boldsymbol{v}$ (bolded)

The special **zero vector** $\vec{0}$ is a vector of undefined direction and zero magnitude.

Vectors with the same magnitude but opposite directions are equal to one another except one is the negative of the other.

**Colinear** vectors are those that parallel with one another — that is, with identical or opposite directions. Vectors that are colinear must also be **scalar multiples** of each other:
$$\vec{u}=k\vec{v}$$

**Position** vectors are vectors where the initial point is at the origin — where the terminal point is $A$, a position vector can be written as $\vec{OA}$.

**Colinear points** are points that lie on the same straight line. If two colinear vectors that share a common point can be formed between three points, those points are colinear.

### Unit vector

The **unit vector** of a vector is a vector of the same direction as the original with a magnitude of $1$. It is denoted via a caret/hat.
$$\hat{v}$$

From the original vector $\vec{u}$, the unit vector $\hat{u}$ can be found by dividing by the magnitude of the vector.
$$\hat{u}=\frac{\vec{u}}{|\vec{u}|}$$

The **standard unit vectors** $\hat{i}$ and $\hat{j}$ are unit vectors designated to point in the directions of the positive x- and y-axes.
$$
\hat{i}=(1,0) \\
\hat{j}=(0,1)
$$

Any vector in two dimensions can be expressed as a sum of scalar multiples of the vectors.
$$
\begin{align*}
\vec{u}&=\vec{OP} \\
&=(a,b) \\
&=a\hat{i}+b\hat{j} \\
&={a\choose b} \\
|\vec{u}|&=\sqrt{a^2+b^2}
\end{align*}
$$

The angle between two vectors is the smaller angle formed when the vectors are placed **tail to tail**.

### Three-dimensional vectors

The additional standard unit vector $\hat{k}$ is used for the z-dimension.
$$
\begin{align*}
\vec{u}&=\vec{OP} \\
&=(a,b,c) \\
&=a\hat{i}+b\hat{j}+c\hat{k}
\end{align*}
$$

In general, the x-plane is the one in and out of the page, the y-plane left and right, and the z-plane up and down.

### Vector operations

Please see [SL Physics 1#Adding/subtracting vectors diagrammatically](/sph3u7/#addingsubtracting-vectors-diagrammatically) for more details. The sum of two vectors is known as the **resultant** while the negative (opposite direction) version of that vector is known as the **equilibrant**.

The sum of two vectors can also be solved diagrammatically by envisioning the head-to-tail as a parallelogram.

<img src="/resources/images/vector-parallelogram.png" width=700>(Source: Kognity)</img>

### Dot product

Also known as the scalar product, the dot product between two vectors returns a **scalar** value representing the horizontal displacement after multiplication. Wheree $\theta$ is the angle contained between the vectors $\vec{u}$ and $\vec{v}$ when arranged tail-to-tail:
$$\vec{u}\bullet\vec{v}=|\vec{u}||\vec{v}|\cos\theta$$

!!! note
    This implies that vectors perpendicular to one another must have a dot product of zero.

Much like regular multiplication, dot products are:

 - communtative: $\vec{u}\bullet\vec{v}=\vec{v}\bullet\vec{u}$
 - distributive over vectors: $\vec{u}\bullet(\vec{v}+\vec{w})=\vec{u}\bullet\vec{v}+\vec{u}\bullet\vec{w}$
 - associative over scalars: $(m\vec{u})\bullet(n\vec{v})=mn(\vec{u}\bullet\vec{v})$
 	- $m(\vec{u}\bullet\vec{v})=(m\vec{u})\bullet\vec{v}=(mv)\bullet\vec{u}$

When working with algebraic vectors, their dot products are equal to the products of their components.
$$\vec{u}\bullet\vec{v}=u_xv_x+u_yv_y$$

### Vector line equations in two dimensions

!!! definition
    The **Cartesian** or **scalar** form of a line is of the form $Ax+By+C$.

The vector equation for a straight line solves for an unknown position vector $\vec{r}$ on the line using a known position vector $\vec{r_0}$ on the line, a direction vector parallel to the line $\vec{m}$, and the variable **parameter** $t$. It is roughly similar to $y=b+xm$.
$$\vec{r}=\vec{r_0}+t\vec{m},t\in\mathbb{R}$$

The equation can be rewritten in the algebraic form to be
$$[x,y]=[x_0,y_0]+t[m_1,m_2], t\in\mathbb{R}$$

The direction vector is effectively the slope of a line.
$$\vec{m}=[\Delta x, \Delta y]$$

For a line in scalar form:
$$\vec{m}=[B, -A]$$

To determine if a point lies along a line defined by a vector equation, the parameter $t$ should be checked to be the same for the $x$ and $y$ coordinates of the point.

!!! warning
    Vector equations are **not unique** — there can be different position vectors and direction vectors that return the same line.

The **parametric** form of a line breaks the vector form into components.
$$
\begin{align*}
x&=x_0+tm_1 \\
y&=y_0+tm_2,t\in\mathbb{R}
\end{align*}
$$

The **symmetric** form of the equation takes the parametric form and equates the two equations to each other using $t$.
$$\frac{x-x_0}{m_1}=\frac{y-y_0}{m_2},m_1,m_2\neq 0$$

If one of the **direction numbers** $m_1$ or $m_2$ is zero, the equation is rearranged such that only one position component is on one side.

!!! example
    Where $m_2=0$:
    $$\frac{x-x_0}{m_1},y=y_0$$

### Vector line equations in three dimensions

There is little difference between vector equations in two or three dimensions. An additional variable is added for the third dimension.

The vector form:
$$\vec{r}=\vec{r_0}+t\vec{m},t\in\mathbb{R}$$

The parametric form:
$$[x,y,z]=[x_0,y_0,z_0]+t[m_1,m_2,m_3],t\in\mathbb{R}$$

The symmetric form:
$$\frac{x-x_0}{m_1}=\frac{y-y_0}{m_2}=\frac{z-z_0}{m_3}$$

### Intersections of vector equation lines

Two lines are parallel if their direction vectors are scalar multiples of each other.
$$\vec{m_1}=k\vec{m_2},k\in\mathbb{R}$$

Two lines are coincident if they are parallel and share at least one point. Otherwise, they are distinct.

If two lines are not parallel and in two dimensions, they intersect. To solve for the point of intersection, the x and y variables in the parametric form can be equated and the parameter $t$ solved.

In three dimensions, there is a final possibility should the lines not be parallel: the lines may be *skew*. To determine if the lines are skew, the x, y, and z variables of **two** parametric equations should be equated to their counterparts in the other vector as if they intersect. The resulting $t$ and $s$ from the first and second line respectively should be substituted into the third equation and an equality check performed.  Should there not be a solution that fulfills the third equation, the lines are skew. Otherwise, they intersect.

### Vector projections

If two vectors $\vec{a}$ and $\vec{b}$ are placed tail-to-tail, the **component** of $\vec{a}$ in the direction of $\vec{b}$ is known as the **vector projection of $\vec{a}$ onto $\vec{b}$**. Represented by $Projection$, its magnitude is called the **scalar projection**.
$$Proj_\vec{b}\vec{a}=\biggr(\frac{\vec{a}\bullet\vec{b}}{|\vec{b}|^2}\biggr)\vec{b}$$

$$
\begin{align*}
|Proj_\vec{b}\vec{a}|&=\frac{\vec{a}\bullet\vec{b}}{|\vec{b}|} \\
&=|\vec{a}|\cos\theta
\end{align*}
$$

!!! warning
    The magnitude of any projection is always **positive**. If $\cos\theta$ returns a negative value, it needs to be absed again.

Vector projections are applied in work equations — see [SL Physics 1](/sph3u7/#work) for more information.

### Cross product

The cross product or **vector product** is a vector that is perpendicular of two vectors that are not colinear. Where $\vec{u}_1,\vec{u}_2,\vec{3}$ represent the x, y, and z coordinates of the position vector $\vec{u}$, respectively:
$$
\begin{align*}
\vec{u}\times\vec{v}&=
\begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
\vec{u}_1 & \vec{u}_2 & \vec{u}_3 \\
\vec{v}_1 & \vec{v}_2 & \vec{v}_3
\end{vmatrix} \\
\\
&=-\hat{j}\begin{vmatrix}
\vec{u}_1 & \vec{u}_3 \\
\vec{v}_1 & \vec{v}_3
\end{vmatrix}
+\hat{i}\begin{vmatrix}
\vec{u}_2 & \vec{u}_3 \\
\vec{v}_2 & \vec{v}_3
\end{vmatrix}
+\hat{k}\begin{vmatrix}
\vec{u}_1 & \vec{u}_2 \\
\vec{v}_1 & \vec{v}_2
\end{vmatrix} \\
\\
&=[\vec{u}_2\vec{v}_3-\vec{u}_3\vec{v}_2,\vec{u}_3\vec{v}_1-\vec{u}_1\vec{v}_3,\vec{u}_1\vec{v}_2-\vec{u}_2\vec{v}_1]
\end{align*}
$$

Cross products are:

 - anti-communtative: $\vec{u}\times\vec{v}=-(\vec{u}\times\vec{v})$
 - distributive: $\vec{u}\times(\vec{u}+\vec{w})=\vec{u}\times\vec{v}+\vec{u}\times\vec{w}$
 - associative over scalars: $m(\vec{u}\times\vec{v})=(m\vec{u})\times\vec{v}=(m\vec{v})\times\vec{u}$

The **magnitude** of a cross product is opposite that of the dot product. Where $\theta$ is the smaller angle between the two vectors ($0\leq\theta\leq180^\circ$):
$$|\vec{u}\times\vec{v}|=|\vec{u}||\vec{v}|\sin\theta$$

This is also equal to the area of a parallelogram enclosed by the vectors — where one is the base and the other is the adjacent side.

To determine the **direction** of a cross product, the right-hand rule can be used. Spreading the fingers out:

 - the thumb is the direction of the first vector
 - the index finger is the direction of the second vector
 - the palm faces the direction of the cross product

### Applications of vector operations

A **triple scalar product** is the result of a cross product performed first then put in a dot product.
$$|\vec{c}\bullet(\vec{a}\times\vec{b})|$$

In a **parallelpiped**, or a three-dimensional shape with six faces each a parallelogram with an identical one opposite it, the volume is the triple scalar product of the distinct three vectors that make up its side lengths:
$$A=|\vec{c}\bullet(\vec{a}\times\vec{b})|$$

For an object moving at **constant velocity in 2D space**, where $\vec{s}$ is its displacement, $\vec{s}_0$ is its initial displacement at $t=0$, $t$ is the time elapsed, and $\vec{v}$ is its velocity:
$$\vec{s}=\vec{s}_0+t\vec{v}$$

**Torque** ($\vec{\tau}$ or $\vec{M}$) is the ability to rotate an object — effectively angular/rotational force — and is the cross product of the **outward-pointing radius vector** ($\vec{r}$) and the **force** vector ($\vec{F}$).
$$
\begin{align*}
\vec{\tau}&=\vec{r}\times\vec{F} \\
&=|\vec{r}||\vec{F}|\sin\theta
\end{align*}
$$

<img src="/resources/images/torque.svg" width=700>(Source: Wikimedia)</img>

The direction of the torque can be found using the **right-hand rule**.

**Force** and **velocity** are vectors with magnitude and direction. See [SL Physics 1#Force diagrams](/sph3u7/#force-diagrams) and [SL Physics 1#Velocity](/sph3u7/#velocity) for more information.

### Operations with vector components

If **Cartesian vectors** (see [SL Physics 1#Adding/subtracting vectors algebraically](/sph3u7/#addingsubtracting-vectors-algebraically) for more details) cannot be used, the **sine and cosine laws** can be used, which are, respectively:

Where $a$, $b$, and $c$ are the lengths of a triangle, and $A$, $B$, and $C$ are their angles opposite to them:
$$\frac{\sin A}{a}=\frac{\sin B}{b}=\frac{\sin C}{c}$$

$$c^2=a^2+b^2-2ab\cos C$$

### Vector planes

A **plane** ($\pi$) is a flat surface extending infinitely in all directions and can be represented by a parallelogram.

So long as any of the following are known, their plane can be constructed:

 - Two intersecting or parallel lines
 - A line and a point not on the line
 - 3 non-colinear points

In each scenario, an initial point $r_0$ and two direction vectors $\vec{u},\vec{v}$ can be derived to form the equation for a plane:
$$\vec r = \vec r_0 + s\vec u + t\vec v,s,t\in\mathbb R$$

This can be expanded to form the parametric form of the equation:
$$
\begin{align*}
x&=x_0+su_1+tv_1 \\
y&=y_0+su_2+tv_2 \\
z&=z_0+su_3+tv_3,s,t\in\mathbb R
\end{align*}
$$

Where $A,B.C.D$ are all integers, the **scalar** or Cartesian equation of a plane in three dimensions can be expressed as follows:
$$Ax+By+Cz+D=0$$

!!! info
    $[A,B,C]$ is the **normal direction vector** of a plane.

### Interactions of planes

A line intersects a plane if the dot product between the two is not zero, and the resulting scalar multiple found can be used to find the point of intersection. Otherwise, once the equations are substituted into each other, if the statement is true, the line and plane are **parallel and coincident**. Otherwise, they are parallel.

The shortest distance between two **skew lines** $L_1$ and $L_2$ is equal to:
$$
\begin{align*}
d&=|Proj_\vec{n}\vec{P_1P_2}| \\
&=\frac{|\vec{P_1P_2}\bullet(\vec m_1\times\vec m_2)|}{|\vec m_1\times\vec m_2|}
\end{align*}
$$

The shortest distance between a point $P(x_1,y_1,z_1)$ and plane $\pi: Ax+By+Cz+D=0$ is equal to:
$$d=\frac{|Ax_1+By_1+Cz_1+D|}{\sqrt{A^2+B^2+C^2}}$$

The shortest distance between two parallel planes is equal to:
$$d=\frac{|D_1-D_2|}{\sqrt{A^2+B^2+C^2}}$$

Two planes are parallel if their direction vectors are scalar multiples of each other:
$$\vec n_1 = k\vec n_2$$

If they are also coincident, the D-values will also be identical:
$$D_1=D_2$$

Otherwise, the planes intersect, the line along which is equal to the cross product between the two direction vectors.
$$\vec m=\vec n_1\times\vec n_2$$

An initial point vector can be solved by setting any of the variables ($x,y,z$) to zero and solving for the others. Alternatively, the parameter $t$ can be set equal to one of the variables instead and the parametric equation derived that way.

The **angle between two planes** is equal to the angle between their normal direction vectors, which can be determined using the dot product formula.

When looking at three planes:

If all three normals are scalar multiples:

 - If all three $D$-values are scalar multiples, the planes are parallel and coincident and they have infinite points of intersection along the plane equation.
 - Otherwise, there are no solutions and the planes are parallel and distinct and/or parallel and coincident for two.

If two normals are scalar multiples:

 - If the two parallel planes are coincident with the same $D$-values, there will be a line of intersection much like solving for intersection between two planes.
 - Otherwise, the two parallel planes are distinct, forming a Z-pattern with the third plane and so there is no solution.

If no normals are scalar multiples:

 - If the triple scalar product of the three planes is equal to zero, the normal vectors are not coplanar and so there will be a point of intersection.
 - Alternatively, by solving the scalar equations for the planes, if:
	- the result is a contradiction (e.g., $0 = 3$), there is no solution
	- the result is true with no variable (e.g., $0 = 0$), there are is an infinite number of solutions along a line
	- the result contains a variable (e.g., $t = 4$), there is a single point of intersection at the parameter $t$.

## Resources

 - [IB Math Analysis and Approaches Syllabus](/resources/g11/ib-math-syllabus.pdf)
 - [IB Math Analysis and Approaches Formula Booklet](/resources/g11/ib-math-data-booklet.pdf)
 - [Textbook: Calculus and Vectors 12](/resources/g11/calculus-vectors-textbook.pdf)
 - [Textbook: Oxford SL Mathematics](/resources/g11/textbook-oxford-math.pdf)
 - [Course Pack Unit 1: Integration](/resources/g11/s2cp1.pdf)
 - [Course Pack Unit 2: Probability](/resources/g11/s2cp2.pdf)
 - [Course Pack Unit 3: Vectors](/resources/g11/s2cp3.pdf)
 - [Course Pack Unit 4: Vector Applications](/resources/g11/s2cp4.pdf)
 - [Course Pack Unit 5: Planes](/resources/g11/s2cp5.pdf)
 - [TI-84 Plus Calculator Guide](/resources/g11/ti-84-plus.pdf)
