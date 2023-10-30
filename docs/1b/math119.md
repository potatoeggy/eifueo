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

## Double integration

In a nutshell, double integration is done by taking infinitely small lines then finding the area under those lines to form a volume.

For a surface formed by vectors $[a,b]$ and $[c,d]$:

$$[a,b]\times[c,d]=R=\{(x,y)|a\leq x\leq b,c\leq y\leq d\}$$

If the function is continuous and bounds do not depend on variables, the order of integration doesn't matter.

$$\boxed{\int^d_c\int^b_af(x,y)dxdy}$$

!!! example
    For $f(x,y)=x^2y$ and $R=[0,3]\times[1,2]$:
    
    \begin{align*}
    V&=\int^2_1\int^3_0x^2ydxdy \\
    &=\int^2_1\left[\frac 1 3 3^3y\right]dy \\
    &=\frac{9}{2}y^2\biggr|^2_1 \\
    &=\frac 9 2 (4)-\frac 9 2 \\
    &=\frac{27}{2}
    \end{align*}

If the function is the product of two functions of separate variables, i.e., if $f(x,y)=g(x)\cdot h(y)$:

$$\int^b_a\int^d_cg(x)h(y)dxdy=\left(\int^b_ah(y)dy\right)\left(\int^d_cg(x)dx\right)$$

### Volume betweeen two functions

The result of the bound variable should be integrated first. For functions of $y$:

$$\int^b_a\left(\int^{g(x)}_{h(x)}f(x,y)dy\right)dx$$

Functions can also be replaced to be bounded by the other if necessary.

!!! example
    For $f(x,y)$ bounded by $y=x$ and $y=\sqrt x$:
    
    $$\int^1_0\int^{\sqrt x}_xf(x,y)dydx = \int^1_0\left(\int^y_{y^2}f(x,y)dx\right)dy$$

??? example
    For $f(x,y)=xy$ bounded by $x=2$, $y=0$, and $y=2x$:
    
    \begin{align*}
    \int^2_0\int^{2x}_0xy\ dydx&=\int^2_0x\left(\frac 1 2(2x)^2\right)dx \\
    &=\int^2_02x^3dx \\
    &=\frac 1 4 x^4(2)\biggr|^2_0 \\
    &= 8
    \end{align*}

### Double polar integrals

The differential elements can be directly replaced:

$$dA=dxdy=\rho d\rho d\phi$$

In general, the radius should be the inner integral, and functions converted from Cartesian to polar forms.

$$\int^{\phi_2}_{\phi_1}\int^{\rho_2}_{\rho_1}f(\rho\cos\phi,\rho\sin\phi)\rho d\rho d\phi$$

### Change of variables

The **Jacobian** is the proportion of change in the differentials between different coordinate systems.

$$
\frac{\partial(x,y)}{\partial(u, v)}=\det\begin{bmatrix}
\partial x / \partial u & \partial x / \partial v \\
\partial y / \partial u & \partial y / \partial v
\end{bmatrix}
$$

The Jacobian can be treated as a fraction — it may be easier to determine the reciprocal of the Jacobian and then reciprocal it again.

When converting between two systems, the absolute value of the Jacobian should be incorporated.

$$dA=\left|\frac{\partial(x,y)}{\partial(u,v)}\right|du\ dv$$

!!! example
    The Jacobian of the polar coordinate system relative to the Cartesian coordinate system is $\rho$. Therefore, $dA=\rho\ d\rho\ d\phi$.

If $x=x(u,v)$, $y=y(u,v)$, and $\partial(x,y)/\partial(u,v)\neq 0$ in the domain of $u$ and $v$ $D_{uv}$:

$$\iint_{D_{xy}}f(x,y)dA = \iint_{D_{uv}}f(x(u,v),y(u,v))\left|\frac{\partial(x,y)}{\partial(u,v)}\right|du\ dv$$

1. Pick a good transformation that simplifies the domain and/or the function.
2. Compute the Jacobian
3. Determine bounds (domain)
4. Integrate with the formula

If the Jacobian contains $x$ and/or $y$ terms:

- they can be substituted into the integral directly, praying that the terms all cancel out
- or $x$ and $y$ can be written in terms of $u$ and $v$ and then all substituted

!!! example
    For the volume within $x^2y^2\sqrt{1-x^3-y^3}$ bounded by $x=0,y=0,x^3+y^3=1$:
    
    By graphical inspection, the bounds can be determined to be $x=0,y=0, y^3=x^3-1,x=1$.
    
    Let $u=x^3,du=3x^2dx$. Let $v=y^3,dv=3y^2dy$. The bounds change to $0\leq u\leq 1,0\leq v\leq 1-u$.
    
    \begin{align*}
    \int^1_0\int^{1-u}_0\frac 1 9\sqrt{1-u-v}\ dudv &= \int^1_0\frac{2}{27}(1-v-u)^{3/2}\biggr|^{1-u}_0du \\
    &= \int^1_0\frac{2}{27}(1-u)^{3/2}du \\
    &= \frac{4}{135}(1-u)^{5/2}\biggr|^1_0 \\
    &= \frac{4}{135}
    \end{align*}

### Applications of multiple integrals

The area enclosed within bounds $R$ is the volume with a height of 1.

$$A_R=\iint_R 1\ dA$$

!!! example
    For the area between $y=(x-1)^2$ and $y=5-(x-2)^2$:
    
    POI: $x^2-3x=0,\therefore x=0, 3$
    
    
    \begin{align*}
    \int^3_0\int^{5-(x-2)^2}_{(x-1)^2}dydx &=\int^3_0(5-(x-2)^2-(x-1)^2)dx \\
    &=\int^3_0(-2x^2+6x)dx \\
    &=-\frac 2 3x^3+3x^2\biggr|^3_0 \\
    &=9
    \end{align*}

!!! example
    For the area of $\left(\frac x a\right)^2+\left(\frac y b\right)^2=1$ in the region $a,b>0$:
    
    **For ellipses of this form, a direct substitution to $a\rho\cos\phi$ and $b\rho\cos\phi$ is fastest.**
    
    Let $u=\frac x a$ and $v=\frac y b$.
    
    $$
    \frac{\partial(x,y)}{\partial(u,v)}=\det\begin{bmatrix}
    a & 0 \\
    0 & b
    \end{bmatrix}=ab
    $$
    
    Thus $A=\iint_Rab\ du\ dv$.
    
    Let $u=\rho\cos\phi,v=\rho\sin\phi$. Radius is 1 by inspection.
    
    \begin{align*}
    A&=\int^{2\pi}_0\int^1_0ab\rho\ d\rho\ d\phi \\
    &=\int^{2\pi}\frac 1 2 ab\ d\phi \\
    &=\frac 1 2 ab\phi\biggr|^{2\pi}_0 \\
    &=\pi ab
    \end{align*}

The average value of the function $f(x,y)$ over a region $R$, where $A_R$ is the area of the region:

$$\overline{f}_R=\frac{1}{A_R}\iint_Rf(x,y) dA$$

!!! example
    The average value of $x^2+y^2$ over $x=0,x=1, y=x$:
    
    \begin{align*}
    \text{avg}&=\frac 1 A\int^1_0\int^x_0(x^2+y^2)dydx \\
    &=2\int^1_0(x^2y+\frac 1 3y^3)\biggr|^x_0dx \\
    &=2\int^1_0\frac 4 3 x^3dx \\
    &=\frac 2 3 x^4 \biggr|^1_0 \\
    &=\frac 2 3
    \end{align*}

The total "amount" of within a region, if $f(x,y)$ describes the density at point $(x,y)$:

$$\iint_R f(x,y)dA$$

!!! example
    The total of $x^2+y^2$ with density $\sigma=\sqrt{1-x^2-y^2}$:
    
    Let $x^2=\rho\cos\phi,y^2=\rho\sin\phi$. Thus $\sigma=\sqrt{1-\rho^2}$.
    
    \begin{align*}
    M&=\int^{2\pi}_0\int^1_0\sqrt{1-\rho^2}\rho\ d\rho\ d\phi \\
    &=\int^{2\pi}_0d\phi\int^1_0\sqrt{1-\rho^2}\ d\rho\ d\phi \\
    \end{align*}
    
    Let $u=1-\rho^2$. Thus $du=-2\rho\ d\rho$.
    
    \begin{align*}
    m&=2\pi\int^1_0-\frac 1 2\sqrt u du \\
    &=\frac 2 3u^{3/2}du\biggr|^1_0 \\
    &=\frac 2 3\pi
    \end{align*}

## Triple integration

Much like double integrals:

The **volume** within bounds $E$ is the integral of 1:

$$V=\iiint_E1dV$$

The **average value** within a volume is:

$$\overline f_E=\frac 1 V\iiint_Ef(x,y,z)dV$$

!!! example
    For the volume within $x+y+z=1$ and $2x+2y+z=2,x,y,z\geq 0$:
    
    The points intersect the axes and each other to create the bounds $0\leq x\leq 1,0\leq y\leq 1-x,1-x-y\leq z\leq 2-2x-2y$.
    
    $$\int^1_0\int^{1-x}_0\int^{2-2x-2y}_{1-x-y}1dz\ dy\ dx =\frac 1 6$$
    
    The average value is:
    
    $$6\iiint_Ez\ dV=\frac 3 4$$

The **total quantity** if $f$ represents density is:

$$T=\iiint_Ef(x,y,z)dV$$

### Cylindrical coordinates

Cylindrical coordinates are effectively polar coordinates with a height.

$$
x=\rho\cos\phi \\
y=\rho\sin\phi \\
z=z
$$

$$
\rho=\sqrt{x^2+y^2} \\
\tan\phi=\frac y x
$$

The Jacobian is still $\rho$.

!!! example
    For the volume under $z=9-x^2-y^2$, outside $x^2+y^2=1$, and above the $xy$ plane:
    
    - $0\leq z\leq 9-x^2-y^2\implies 0\leq z\leq 9-\rho^2$
    - $1\leq \rho\leq 3$
    - $0\leq \phi\leq 2\pi$
    
    $$
    \int^3_1\int^{2\pi}_0\int^{9-\rho^2}_0\rho\ dz\ d\rho\ d\phi =32\pi
    $$

### Spherical coordinates

Where $r$ is the direct distance from the point to the origin, $\phi$ is the angle to the x-axis in the xy-plane ($[0,2\pi]$), and $\theta$ is the angle to the z-axis, top to bottom ($[0,\pi]$):

$$
z=r\cos\theta \\
x=r\sin\theta\cos\phi \\
y=r\sin\theta\sin\phi
$$

The Jacobian is $r^2\sin\theta$.

!!! example
    The mass inside the sphere $x^2+y^2+z^2=9$ with density $z=\sqrt{\frac{x^2+y^2}{3}}$:
    
    It is clear that $\tan\theta=\sqrt 3\implies\theta=\frac\pi 3,r=3$. Thus:
    
    $$\int^3_0\int^{\pi/3}_0,\int^{2\pi}_0 \frac{\rho}{\sqrt{3}}\rho\ d\phi\ d\theta\ d\rho=\frac{243\pi}{5}$$

## Approximation and interpolation

Each of these finds roots, so a rooted equation is needed.

!!! example
    To find an $x$ where $x=\sqrt 5$, the root of $x^2-5=0$ should be found.

### Bisection

1. Select two points that are guaranteed to enclose the point
2. Select an arbitrary $x$ and check if it is greater than or less than zero
3. Slice the remaining section in half in the correct direction

### Newton's method

The below formula can be repeated after plugging in an arbitrary value.

$$x_1=x_0-\frac{f(x_0)}{f'(x_0}$$

!!! warning
    If Newton's method converges to the wrong root, bisection is necessary to brute force the result.
    
### Polynomial interpolation

Where $\Delta^k y_0$ are the $k$th differences between the $y$ points:

$$f(x)=y_0+x\Delta y_0+x(x-1)\frac{\Delta^2y_0}{2!}+x(x-1)(x-2)\frac{\Delta^3 y_0}{3!} ...$$

### Taylor polynomials

The $n$th order Taylor polynomial centred at $x_0$ is:

$$\boxed{P_{n,x_0}(x)=\sum^n_{k=0}\frac{f^{(k)}(x_0)(x-x_0)^k}{k!}}$$

**Maclaurin's theorem** states that if some function $P^{(k)}(x_0)=f^{(k)}(x_0)$ for all $k=0,...n$:

$$P(x)=P_{n,x_0}(x)$$

!!! example
    If $P(x)=1+x^3+\frac{x^6}{2}$ and $f(x)=e^{x^5}}$, ... TODO

The desired function $P(x)$ being the $n$th degree Maclaurin polynomial implies that $P(kx^m)$ is the $(mn)$th degree polynomial for $f(kx^m)$.

Therefore, if you have the Maclaurin polynomial $P(x)$ where $P$ is the $n$th order Taylor polynomial:

- $P'(x)=P_{n-1,x_0}(x)$ for $f'(x)$
- $\int P(x)dx=P_{n+1,x_0}(x)$ for $\int f(x)dx$

The integration constant $C$ can be found by substituting $x_0$ as $x$ and solving.

For $m\in\mathbb Z\geq 0$, where $P(x)$ is the Maclaurin polynomial for $f(x)$ of order $n$, $x^mP(x)$ is the $(m+n)$th order polynomial for $x^mf(x)$.

### Taylor inequalities

The **triangle inequality** for integrals applies itself many times over the infinite sum.

$$\left|\int^b_af(x)dx\right|\leq\int^b_a|f(x)|dx$$

The **Taylor remainder** is the error between a Taylor polynomial and its actual value. Where $k$ is an arbitrary value chosen as the **upper bound** of the difference of the first derivative between $x_0$ and $x$: $k\geq |f^{(n+1)}(z)|$

$$|R_n(x)|\leq\frac{k|x-x_0|^{n+1}}{(n+1)!}$$

An approximation correct to $n$ decimal places requires that $|R_n(x)|<10^{-n}$.

!!! warning
    $k$ should be as small as possible. When rounding, round down for the lower bound, and round up for the upper bound.
    
### Integral approximation

The upper and lower bounds of a Taylor polynomial are clearly $P(x)\pm R(x)$. Integrating them separately reveals creates bounds for the integral.

$$\int P(x)dx-\int R(x)dx\leq\int P(x)\leq\int P(x)dx +\int R(x)dx$$

## Infinite series

The $n$th partial sum of a sequence is used to determine divergence.

$$S_n=\sum^n_{k=0}a_k=a_0 + a_1 ... a_n$$

A sum converges to $S$ if the sum eventually ends up there. Otherwise, if the limit is infinity or does not exist, it diverges.

$$\lim_{x\to\infty}S_n=S\implies\sum^\infty_{n=0}a_n=S$$

### Divergence test

By the divergence test, if the limit of each term never reaches zero, the sum diverges.

$$\lim_{x\to\infty}a_n\neq 0\implies\sum^\infty_{n=0}a_n\text{ diverges}$$

### Geometric series

The $n$th partial sum of a geometric series $ar^n$ is equal to:

$$S_n=\frac{a(1-r)^{n+1}}{1-r}$$

To simply test for convergence:

- If $|r|<1$, $S_n\to\frac{a}{1-r}$.
- Otherwise, it diverges by the test for divergence.

### Integral test

If $f(x)$ is **continuous**, **decreasing**, and **positive** on some $[a,\infty)$:

$$\int^\infty_af(x)dx\text{ converges}\iff\sum^\infty_{k=a}f(k)\text{ converges$$

### p-series test

For all $p\in\mathbb R$, a series of the form

$$\sum^\infty_{n=1}\frac{1}{n^p}$$

converges if and only if $p>1$.

### Comparison test

For two series $\sum a_n$ and $\sum b_n$ where **all terms are positive**, if $a_n\leq b_n$ for all $n$, either both converge or both diverge.

The **limit comparison test** has the same requirements, but if $L=\lim_{n\to\infty}\frac{a_n}{b_n}$ such that $0<L<\infty$, either both converge or both diverge.

### Ratio tests

The **ratio test** is applicable if the $L$ exists or is infinity:

$$L+\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|$$

- $L<1$ implies the function converges absolutely
- $L>1$ implies the function diverges
- $L=1$ is inconclusive

It is useful if a constant is raised to the power of $n$ or if a factorial is present.

The **root test** has the same analysis but with a different limit:

$$L=\lim_{n\to\infty}\sqrt[n]{|a_n|}$$

It is useful for functions of the form $f(x)^{g(x)}$.

### Alternating series

If the absolute value of all terms $b_k$ continuously decreases and $\lim_{k\to b_k}=0$, the alternating function $\sum^\infty_{k=0}(-1)^kb_k$ converges.

The **alternating series estimation theorem** places an upper bound on the error of a partial sum. If the series passes the alternate series test, $S_n$ is the $n$th partial sum, $S$ is the sum of the series, and $b_k$ is the $k$th term:

$$|S-S_n|\leq b_{n+1}$$

### Conditional convergence

$\sum a_n$ converges **absolutely** only if $\sum |a_n|$ converges.

An absolutely converging series also has its regular form converge.

A series converges **conditionally** if it converges but not absolutely. This indicates that it is possible for all $b\in\mathbb R$ to rearrange $\sum a_n$ to cause it to converge to $b$.

### Power series

A power series **centred at $x_0$** is an infinitely long polynomial.

$$\sum^\infty_{n=0}c_n(x-x_0)^n$$

If there are multiple identified domains of convergence, the endpoints must be tested separately to get the **interval of convergence**. The **radius of convergence** is the amplitude of the interval, regardless of inclusion/exclusion.

$$r=\frac{\text{max}-\text{min}}{2}$$

For a power series of radius $R$, regardless if it is differentiated, integrated, multiplied (by non-zero), the radius remains $R$.

!!! warning
    The interval may change.

Adding functions with different radii results in a radius roughly near the smaller interval of convergence.

The **binomial series** is the infinite expansion of $(1+x)^m$ with radius 1.

$$(1+x)^m=\sum^\infty_{n=0}\frac{m(m-1)(m-2)...(m-n+1)}{n!}x^n$$

## Big O notation

A function $f$ is of order $g$ as $x\to x_0$ if $|f(x)|\leq c|g(x)|$ for all $x$ near $x_0$. This is written as big O:

$$f(x)=O(g(x))\text{ as }x\to x_0$$

The inner function only dictates how it grows, discarding any constant terms.

!!! example
    As $x\to 0$, $x^3=O(x^2)$ as well as $O(x)$ and $O(1)$. Thus $kx^3=O(x^2)$ for all $k\in\mathbb R$.
    
    However, $x^3=O(x^4)$ only as $x\to\infty$ by the definition.

!!! example
    As $|\sin x|\leq |x|$, $\sin x=O(x)$ as $x\to 0$.


If $f=O(x^m)$ and $g=O(x^n)$ as $x\to 0$:

- $fg=O(x^{m+n})$
- $f+g=O(x^q)$, where `q=min(m,n)`
- $kO(x^n)=O(x^n)$
- $O(x^n)^m=O(x^{nm})$
- $O(x^m)\div x^n=O(x^{m-n})$

With Taylor series, big O is the remainder.

$$R_n(x)=O((x-x_0)^{n+1})$$

The limit of big O is the behaviour of $g(x)$.

!!! example
    \begin{align*}
    \lim_{x\to 0}\frac{x^2e^x+2\cos x-2}{x^3}&=\lim_{x\to 0}\frac{x^3+O(x^4)}{x^3} \\
    &= 1+O(x) \\
    &= 1
    \end{align*}

