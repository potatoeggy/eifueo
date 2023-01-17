# MATH 119: Calculus 2

## Multivariable functions

!!! definition
    - A **multivariable function** accepts more than one independent variable, e.g., $f(x, y)$.

The signature of multivariable functions is indicated in the form *[identifier]*: *[input type]* → *[return type]*. Where $n$ is the number of inputs:

$$f: \mathbb R^n \to \mathbb R$$

!!! example
    The following function is in the form $f: \mathbb R^2\to\mathbb R$ and maps two variables into one called $z$ via function $f$.
    
    $$(x,y)\longmapsto z=f(x,y)$$

### Sketching multivariable functions

!!! definition
    - In a **scalar field**, each point in space is assigned a number. For example, topography or altitude maps are scalar fields.
    - A **level curve** is a slice of a three-dimensional graph by setting to a general variable $f(x, y)=k$. It is effectively a series of contour plots set in a three-dimensional plane.
    - A **contour plot** is a graph obtained by substituting a constant for $k$ in a level curve.

Please see [level set](https://en.wikipedia.org/wiki/Level_set) and [contour line](https://en.wikipedia.org/wiki/Contour_line) for example images.

In order to create a sketch for a multivariable function, this site does not have enough pictures so you should watch a YouTube video.

!!! example
    For the function $z=x^2+y^2$:
    
    For each $x, y, z$:
    
    - Set $k$ equal to the variable and substitute it into the equation
    - Sketch a two-dimensional graph with constant values of $k$ (e.g., $k=-2, -1, 0, 1, 2$) using the other two variables as axes
    
    Combine the three **contour plots** in a three-dimensional plane to form the full sketch.

A **hyperbola** is formed when the difference between two points is constant. Where $r$ is the x-intercept:

$$x^2-y^2=r^2$$

<img src="/resources/images/hyperbola.svg" width=600 />

If $r^2$ is negative, the hyperbola is is bounded by functions of $x$, instead.

## Limits of two-variable functions

A function is continuous at $(x, y)$ if and only if all possible lines through $(x, y)$ have the same limit. Or, where $L$ is a constant:

$$\text{continuous}\iff \lim_{(x, y)\to(x_0, y_0)}f(x, y) = L$$

In practice, this means that if any two paths result in different limits, the limit is undefined. Substituting $x|y=0$ or $y=mx$ or $x=my$ are common solutions.

!!! example
    For the function $\lim_{(x, y)\to (0,0)}\frac{x^2}{x^2+y^2}$:
    
    Along $y=0$:
    
    $$\lim_{(x,0)\to(0, 0)} ... = 1$$
    
    Along $x=0$:
    
    $$\lim_{(0, y)\to(0, 0)} ... = 0$$
    
    Therefore the limit does not exist.

## Partial derivatives

Partial derivatives have multiple different symbols that all mean the same thing:

$$\frac{\partial f}{\partial x}=\partial_x f=f_x$$

For two-input-variable equations, setting one of the input variables to a constant will return the derivative of the slice at that constant.

By definition, the **partial** derivative of $f$ with respect to $x$ (in the x-direction) at point $(a, B)$ is:

$$\frac{\partial f}{\partial x}(a, B)=\lim_{h\to 0}\frac{f(a+h, B)-f(a, B)}{h}$$

Effectively:

 - if finding $f_x$, $y$ should be treated as constant.
 - if finding $f_y$, $x$ should be treated as constant.

!!! example
    With the function $f(x,y)=x^2\sqrt{y}+\cos\pi y$:
    
    \begin{align*}
    f_x(1,1)&=\lim_{h\to 0}\frac{f(1+h,1)-f(1,1)} h \\
    \tag*{$f(1,1)=1+\cos\pi=0$}&=\lim_{h\to 0}\frac{(1+h)^2-1} h \\
    &=\lim_{h\to 0}\frac{h^2+2h} h \\
    &= 2 \\
    \end{align*}

### Higher order derivatives

!!! definition
    - **wrt.** is short for "with respect to".

$$\frac{\partial^2f}{\partial x^2}=\partial_{xx}f=f_{xx}$$

Derivatives of different variables can be combined:

$$f_{xy}=\frac{\partial}{\partial y}\frac{\partial f}{\partial x}=\frac{\partial^2 f}{\partial xy}$$

The order of the variables matter: $f_{xy}$ is the derivative of f wrt. x *and then* wrt. y.

**Clairaut's theorem** states that if $f_x, f_y$, and $f_{xy}$ all exist near $(a, b)$ and $f_{yx}$ is continuous **at** $(a,b)$, $f_{yx}(a,b)=f_{x,y}(a,b)$ and exists.

!!! warning
    In multivariable calculus, **differentiability does not imply continuity**.

### Linear approximations

A **tangent plane** represents all possible partial derivatives at a point of a function.

For two-dimensional functions, the differential could be used to extrapolate points ahead or behind a point on a curve.

$$
\Delta f=f'(a)\Delta d \\
\boxed{y=f(a)+f'(a)(x-a)}
$$

The equations of the two unit direction vectors in $x$ and $y$ can be used to find the normal of the tangent plane:

$$
\vec n=\vec d_1\times\vec d_2 \\
\begin{bmatrix}-f_x(a,b) \\ -f_y(a,b) \\ 1\end{bmatrix} = \begin{bmatrix}1\\0\\f_x(a,b)\end{bmatrix}
\begin{bmatrix}0\\1\\f_y(a,b)\end{bmatrix}
$$

Therefore, the general expression of a plane is equivalent to:

$$
z=C+A(x-a)+B(x-b) \\
\boxed{z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)}
$$

??? tip "Proof"
    The general formula for a plane is $c_1(x-a)+c_2(y-b)+c_3(z-c)=0$.
    
    If $y$ is constant such that $y=b$:
    
    $$z=C+A(x-a)$$
    
    which must represent in the x-direction as an equation in the form $y=b+mx$. It follows that $A=f_x(a,b)$. A similar concept exists for $f_y(a,b)$.
    
    If both $x=a$ and $y=b$ are constant:
    
    $$z=C$$
    
    where $C$ must be the $z$-point.

Usually, functions can be approximated via the **tangent at $x=a$.**

$$f(x)\simeq L(x)$$

!!! warning
    Approximations are less accurate the stronger the curve and the farther the point is away from $f(a,b)$. A greater $|f''(a)|$ indicates a stronger curve.


!!! example
    Given the function $f(x,y)=\ln(\sqrt[3]{x}+\sqrt[4]{y}-1)$, $f(1.03, 0.98)$ can be linearly approximated.
    
    $$
    L(x=1.03, y=0.98)=f(1,1)=f_x(1,1)(x-1)+f_y(1,1)(y-1) \\
    f(1.03,0.98)\simeq L(1.03,0.98)=0.005
    $$
