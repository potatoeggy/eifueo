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

### Differentials

Linear approximations can be used with the help of differentials. Please see [MATH 117#Differentials](/1a/math117/#differentials) for more information.

$\Delta f$ can be assumed to be equivalent to $df$.

$$\Delta f=f_x(a,b)\Delta x+f_y(a,b)\Delta y$$

Alternatively, it can be expanded in Leibniz notation in the form of a **total differential**:

$$df=\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy$$

??? tip "Proof"
    The general formula for a plane in three dimensions can be expressed as a tangent plane if the differential is small enough:
    
    $$f(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(x-b)$$
    
    As $\Delta f=f(x,y)-f(a,b)$, $\Delta x=x-a$, and $\Delta y=y-b$, it can be assumed that $\Delta x=dx,\Delta y=dy, \Delta f\simeq df$.
    
    $$\boxed{\Delta f\simeq df=f_x(a,b)dx+f_y(a,b)dy}$$

### Related rates

Please see [SL Math - Analysis and Approaches 1](/g11/mhf4u7/#related-rates) for more information.

!!! example
    For the gas law $pV=nRT$, if $T$ increases by 1% and $V$ increases by 3%:
    
    \begin{align*}
    pV&=nRT \\
    \ln p&=\ln nR + \ln T - \ln V \\
    \tag{multiply both sides by $d$}\frac{d}{dp}\ln p(dp)&=0 + \frac{d}{dT}\ln T(dt)-\frac{d}{dV}\ln V(dV) \\
    \frac{dp}{p} &=\frac{dT}{T}-\frac{dV}{V} \\
    &=0.01-0.03 \\
    &=-2\%
    \end{align*}

### Parametric curves

Because of the existence of the parameter $t$, these expressions have some advantages over scalar equations:

- the direction of $x$ and $y$ can be determined as $t$ increases, and
- the rate of change of $x$ and $y$ relative to $t$ as well as each other is clearer

$$
\begin{align*}
f(x,y,z)&=\begin{bmatrix}x(t) \\ y(t) \\ z(t)\end{bmatrix} \\
&=(x(t), y(t), z(t))
\end{align*}
$$

The **derivative** of a parametric function is equal to the vector sum of the derivative of its components:

$$\frac{df}{dt}=\sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2+\left(\frac{dz}{dt}\right)^2}$$

Sometimes, the **chain rule for multivariable functions** creates a new branch in a tree for each independent variable.

For two-variable functions, if $z=f(x,y)$:

$$\frac{dz}{dt}=\frac{\partial z}{\partial x}\frac{dx}{dt}+\frac{\partial z}{\partial y}\frac{dy}{dt}$$

Sample tree diagram:

<img src="/resources/images/two-var-tree.jpg" width=300>(Source: LibreTexts)</img>

!!! example
    This can be extended for multiple functions — for the function $z=f(x,y)$, where $x=g(u,v)$ and $y=h(u,v)$:
    
    <img src="/resources/images/many-var-tree.jpg" width=300>(Source: LibreTexts)</img>
    
    Determining the partial derivatives with respect to $u$ or $v$ can be done by only following the branches that end with those terms.
    
    $$
    \frac{\partial z}{\partial u} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial u} \\
    $$

!!! warning
    If the function only depends on one variable, $\frac{d}{dx}$ is used. Multivariable functions must use $\frac{\partial}{\partial x}$ to treat the other variables as constant.

### Gradient vectors

The **gradient vector** is the vector of the partial derivatives of a function with respect to its independent variables. For $f(x,y)$:

$$\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right)$$

This allows for the the following replacements to appear more like single-variable calculus. Where $\vec r=(x,y)$ is a desired point, $\vec a=(a,b)$ is the initial point, and all vector multiplications are dot products:

Linear approximations are simplified to:

$$f(\vec r)=f(\vec a)+\nabla f(\vec a)\bullet(\vec r-\vec a)$$

The chain rule is also simplified to:

$$\frac{dz}{dt}=\nabla f(\vec r(t))\bullet\vec r'(t)$$

A **directional derivative** is any of the infinite derivatives at a certain point with the length of a unit vector. Specifically, in the unit vector direction $\vec u$ at point $\vec a=(a,b)$:

$$D_{\vec u}f(a_b)=\lim_{h\to 0}\frac{f(\vec a+h\vec u)\bullet f(\vec a)}{h}$$

This reduces down by taking only $h$ as variable to:

$$D_{\vec u}f(a,b)=\nabla f(a,b)\bullet\vec u$$

Cartesian and polar coordinates can be easily converted between:

- $x=r\sin\theta\cos\phi$
- $y=r\sin\theta\sin\phi$
- $z=r\cos\theta$

## Optimisation

**Local maxima / minima** exist at points where all points in a disk-like area around it do not pass that point. Practically, they must have $\nabla f=0$.

**Critical points** are any point at which $\nabla f=0|undef$. A critical point that is not a local extrema is a **saddle point**.

Local maxima tend to be **concave down** while local minima are **concave up**. This can be determined via the second derivative test. For the critical point $P_0$ of $f(x,y)$:

1. Calculate $D(x,y)= f_{xx}f_{yy}-(f_{xy})^2$
2. If it greater than zero, the point is an extremum
    a. If $f_{xx}(P_0)<0$, the point is a maximum — otherwise it is a minimum
3. If it is less than zero, it is a saddle point — otherwise the test is inconclusive and you must use your eyeballs

### Optimisation with constraints

If there is a limitation in optimising for $f(x,y)$ in the form $g(x,y)=K$, new critical points can be found by setting them equal to each other, where $\lambda$ is the **Lagrange multiplier** that determines the rate of increase of $f$ with respect to $g$:

$$\nabla f = \lambda\nabla g, g(x,y)=K$$

The largest/smallest values of $f(x,y)$ from the critical points return the maxima/minima. If possible, $\nabla g=\vec 0, g(x,y)=K$ should also be tested **afterward**.

!!! example
    If $A(x,y)=xy$, $g(x,y)=K: x+2y=400$, and $A(x,y)$ should be maximised:
    
    
    \begin{align*}
    \nabla f &= \left<y, x\right> \\
    \nabla g &= \left<1, 2\right> \\
    \left<y, x\right> &= \lambda \left<1, 2\right> \\
    &\begin{cases}
    y &= \lambda \\
    x &= 2\lambda \\
    x + 2y &= 400 \\
    \end{cases}
    \\
    \\
    \therefore y&=100,x=200,A=20\ 000
    \end{align*}

??? example
    If $f(x,y)=y^2-x^2$ and the constraint $\frac{x^2}{4} + y^2=1$ must be satisfied:
    
    \begin{align*}
    \nabla f &=\left<-2x, 2y\right> \\
    \nabla g &=\left<\frac{1}{2} x,2y\right> \\
    \tag{$\left<0,0\right>$ does not satisfy constraints} \left<-2x,2y\right>&=\lambda\left<-\frac 1 2 x,2y\right> \\
    &\begin{cases}
    -2x &= \frac 1 2\lambda x \\
    2y &= \lambda2y \\
    \frac{x^2}{4} + y^2&= 1
    \end{cases} \\
    \\
    2y(1-\lambda)&=0\implies y=0,\lambda=1 \\
    &\begin{cases}
    y=0&\implies x=\pm 2\implies\left<\pm2, 0\right> \\
    \lambda=1&\implies \left<0,\pm 1\right>
    \end{cases}
    \\
    \tag{by substitution} \max&=(2,0), (-2, 0) \\
    \min&=(0, -1), (0, 1)
    \end{align*}

??? example
    If $f(x, y)=x^2+xy+y^2$ and the constraint $x^2+y^2=4$ must be satisfied:
    
    \begin{align*}
    \tag{domain: bounded at $-2\leq x\leq 2$}y=\pm\sqrt{4-x^2} \\
    f(x,\pm\sqrt{4-x^2}) &= x^2+(\pm\sqrt{4-x^2})x + 4-x^2 \\
    \frac{df}{dx} &=\pm(\sqrt{4-x^2}-\frac{1}{2}\frac{1}{\sqrt{4-x^2}}2x(x)) \\
    \tag{$f'(x)=0$} 0 &=4-x^2-x^2 \\
    x &=\pm\sqrt{2} \\
    \\
    2+y^2 &= 4 \\
    y &=\pm\sqrt{2} \\
    \therefore f(x,y) &= 2, 6
    \end{align*}
    
    Alternatively, trigonometric substitution may be used to solve the system parametrically.
    
    \begin{align*}
    x^2+y^2&=4\implies &x=2\cos t \\
    & &y=2\sin t \\
    \therefore f(x,y) &= 4+2\sin(2t),0\leq t\leq 2\pi \\
    \tag{include endpoints $0,2\pi$}t &= \frac\pi 4,\frac{3\pi}{4},\frac{5\pi}{4} \\
    \end{align*}

!!! warning
    Terms cannot be directly cancelled out in case they are zero.

This applies equally to higher dimensions and constraints by adding a new term for each constraint. Given $f(x,y,z)$ with constraints $g(x,y,z)=K$ and $h(x,y,z)=M$:

$$\nabla f=\lambda_1\nabla g + \lambda_2\nabla h$$

### Absolute extrema

- If end points exist, those should be added
- If no endpoints exist and the limits go to $\pm\infty$, there are no absolute extrema
