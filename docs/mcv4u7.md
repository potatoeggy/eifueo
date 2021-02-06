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

Similar to limit evaluation, the substitution of complex expressions involving $x$ and $dx$ with $u$ and $du$ can be done.

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

## Resources

 - [IB Math Analysis and Approaches Syllabus](/resources/g11/ib-math-syllabus.pdf)
 - [IB Math Analysis and Approaches Formula Booklet](/resources/g11/ib-math-data-booklet.pdf)
 - [Textbook: Calculus and Vectors 12](/resources/g11/calculus-vectors-textbook.pdf)
 - [Textbook: Oxford SL Mathematics](/resources/g11/textbook-oxford-math.pdf)
 - [Course Pack Unit 1: Integration](/resources/g11/s2cp1.pdf)
 - [TI-84 Plus Calculator Guide](/resources/g11/ti-84-plus.pdf)
