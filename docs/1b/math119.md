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
    
    $$\lim_{(x,0)\to(0, 0) ... = 1$$
    
    Along $x=0$:
    
    $$\lim_{(0, y)\to(0, 0)} ... = 0$$
    
    Therefore the limit does not exist.

