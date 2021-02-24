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

## Resources

 - [IB Math Analysis and Approaches Syllabus](/resources/g11/ib-math-syllabus.pdf)
 - [IB Math Analysis and Approaches Formula Booklet](/resources/g11/ib-math-data-booklet.pdf)
 - [Textbook: Calculus and Vectors 12](/resources/g11/calculus-vectors-textbook.pdf)
 - [Textbook: Oxford SL Mathematics](/resources/g11/textbook-oxford-math.pdf)
 - [Course Pack Unit 1: Integration](/resources/g11/s2cp1.pdf)
 - [Course Pack Unit 2: Probability](/resources/g11/s2cp2.pdf)
 - [TI-84 Plus Calculator Guide](/resources/g11/ti-84-plus.pdf)
