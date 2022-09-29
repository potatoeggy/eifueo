# MATH 115: Linear Algebra

## Set theory

!!! definition
    - Natural numbers ($\mathbb N$) are all **integers** greater than zero.
    - Integers ($\mathbb Z$) are all non-decimal numbers.
    - Rational numbers ($\mathbb Q$) are all numbers representable as a fraction.
    - Irrational numbers are all **real** numbers not representable as a fraction.
    - Real numbers ($\mathbb R$) are all rational or irrational numbers.

The **subset sign** ($\subseteq$) indicates that one **set** is strictly within another. The **not subset sign** ($\not\subseteq$) indicates that at least one element in the first set is not in the second.

!!! example
    - Natural numbers are a subset of integers, or $\mathbb N \subseteq \mathbb Z$.
    - Integers are not a subset of natural numbers, or $\mathbb Z \not\subseteq \mathbb N$.

!!! warning
    The subset sign is not to be confused with the **element of** sign ($\in$), as the former only applies to sets while the latter only applies to elements.

Sets can be subtracted with a **backslash** (\\), returning a set with all elements in the first set not in the second.

!!! example
    The set of irrational numbers can be represented as the difference between the real and rational number sets, or:
    $$\mathbb R \backslash \mathbb Q$$

## Complex numbers

A complex number can be represented in the form:
$$x+yj$$

where $x$ and $y$ are real numbers, and $j$ is the imaginary $\sqrt{-1}$ (also known as $i$ outside of engineering). This implies that every real number is also in the set of complex numbers as $y$ can be set to zero.

!!! definition
    - $Re(z)$ is the **real component** of complex number $z$.
    - $Im(z)$ is the **imaginary component** of complex number $z$.

These numbers can be treated effectively like any other number.

### Properties of complex numbers

All of these properties can be derived from expanding the standard forms.

Where $z=x+yj$ and $w=a+bj$:

$$
\begin{align*}
zw&=(ax-by)+(bx+ay)j \\
\frac{1}{z} &= \frac{x}{x^2+y^2} - \frac{y}{x^2+y^2}j \\
z^0 &= 1
\end{align*}
$$

??? example
    If $z=2+5j$ and $w=1+3j$:
    $$
    \begin{align*}
    \frac{z}{w} &= (2+5j)(\frac{1}{1+9}-\frac{3}{1+9}j) \\
    &= (2+5j)(\frac{1}{10}-\frac{3}{10j}) \\
    &= \frac{1}{5}-\frac{3}{5}j+\frac{1}{2}j+\frac{3}{2} \\
    &= \frac{17}{10}-\frac{1}{10}j
    \end{align*}
    $$

??? example
    To solve for $z$ in $z^2+4=0$:
    $$
    \begin{align*}
    (x+yj)^2&=-4 \\
    x^2+2xyj - y^2 &= -4 + 0j \\
    (x^2-y^2) + 2xyj &= -4+0j \\
    \\
    ∵ x, y \in \mathbb R: 2xyj &= 0j \\
    ∴ \begin{cases}
    x^2-y^2=-4 \\
    2xy = 0
    \end{cases} \\
    \\
    x=0 &\text{ or } y=0 \\
    \pu{if } x=0&: y =\pm 2 \\
    \pu{if } y=0&: \text{no real solutions} \\
    \\
    ∴ x&=0, y=\pm 2 \\
    z&=\pm 2j
    \end{align*}
    $$

??? example
    To solve for $z$ in $z^2=5+12j$:
    $$
    \begin{align*}
    (x+yj)^2&=5+12j \\
    (x^2-j^2)+2xyj = 5+12j \\
    \\
    \begin{cases}
    x^2-y^2=5 \\
    2xy = 12
    \end{cases} \\
    \\
    y &= \frac{6}{x} \\
    x^2 - \frac{6}{x}^2 &= 5\\
    x^4 - 36 - 5x^2 &= 0 \\
    x^2 &= 9, -4, x\in \mathbb R \\
    x &= 3, -3 \\
    y &= 2, -2 \\
    z &= 3+2j, -3-2j
    \end{align*}
    $$

### Conjugates

The conjugate of any number can be written with a bar above it.
$$\overline{x+yj} = x-yj$$

The conjugate of a conjugate is the original number.
$$\overline{\overline{ z}} = z$$

$z$ is a real number **if and only if** its conjugate is itself.
$$z\in\mathbb R \iff \overline{z}=z$$

$z$ is purely imaginary **if and only if** its conjugate is the negative version of itself.
$$z\in\text{only imaginary} \iff \overline{z}=-z$$

Conjugates are flexible and can almost be treated as just another factor.
$$
\begin{align*}
\overline{z+w}&=\overline{z}+\overline{w} \\
\overline{zw}&=(\overline{z})(\overline{w}) \\
\overline{z^k}&=\overline{z}^k \\
\overline{\biggr(\frac{z}{w}\biggr)} &= \frac{\overline{z}}{\overline{w}}, w\neq 0
\end{align*}
$$

### Modulus

The modulus of a number is represented by the absolute value sign. It is equal to its magnitude if the complex number were a vector.
$$|z| = \sqrt{x^2+y^2}$$

!!! example
    The modulus of complex number $2-j$ is:
    $$
    \begin{align*}
    |2-j|&=\sqrt{2^2+(-1)^2} \\
    &= -5
    \end{align*}
    $$

If there is no imaginary component, a complex number's modulus is its absolute value.
$$z\in\mathbb R: |z|=|Re(z)|$$

Complex numbers cannot be directly compared because imaginary numbers have no inequalities, but their moduli can — the modulus of one complex number can be greater than another's.

#### Properties of moduli

These can be also be manually derived.

If the modulus is zero, the complex number is zero.
$$|z|=0 \iff z=0$$

The modulus of the conjugate is equal to the modulus of the original.
$$|\overline{z}| = |z|$$

The number multiplied by the conjugate modulus is the square of the modulus.
$$z|\overline{z}|=|z|^2$$

Moduli are also almost just a factor:
$$
\begin{align*}
\biggr|\frac{z}{w}\biggr| &= \frac{|z|}{|w|}, w \neq 0 \\
|zw| &= |z||w|
\end{align*}
$$

The moduli of the sum is always less than the sum of the moduli of the individual numbers — this is also known as the triangle inequality theorem.

$$|z+w| \leq |z|+|w|$$

### Geometry

In setting the x- and y-axes to the imaginary and real components of a complex number, complex numbers can be represented almost as vectors.

<img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Complex_conjugate_picture.svg">(Source: Wikimedia Commons, GNU FGL 1.2 or later)</img>

The complex number $x+yj$ will be on the point $(x, y)$, and the modulus is the magnitude of the vector. Complex number moduli can be compared graphically if their points lie within a drawn circle centred on the origin with a point on another vector.

### Polar form

The variable $r$ is equal to the modulus of a complex number $|z|$.

From the Pythagorean theorem, the polar form of a complex number can be expressed using the angle of the modulus to the real axis. Where $\theta$ is the angle of the modulus to the real axis:
$$z=r(\cos\theta + j\sin\theta)$$

Trigonometry can be used to calculate $\cos\theta$ and $\sin\theta$ as $\cos\theta = \frac{x}{r}$ and $\sin\theta = \frac{y}{r}$.

!!! example
    $1+\sqrt{3}j=2\big(\cos\frac{\pi}{3} + j\sin\frac{\pi}{3}\big)$

!!! warning
    The polar form is not unique because going around 360° results in the same vector. Where $k$ is any integer.
    $$r(\cos\theta + j\sin\theta) = r(\cos(\theta+2k\pi) + j\sin(\theta+2k\pi))$$

The polar form is useful for the multiplication of complex numbers.

Because of the angle sum identities:
$$z_1z_2=r_1r_2(\cos(\theta_1+\theta_2) + j\sin(\theta_1+\theta_2))$$

This can be extrapolated into Moivre's theorem:
$$z^n=r^n(\cos(n\theta) + j\sin(n\theta))$$

To determine the roots of a complex number, Moivre's theorem can be used again:
$$\sqrt[n]{z} = \sqrt[n]{r}\big(\cos\big(\frac{\theta + 2k\pi}{n}\big) + j\sin\big(\frac{\theta + 2k\pi}{n}\big)\big)$$

where $k$ is every number in the range $[0, n-1], k\in\mathbb Z$.

!!! example
    To find all answers for $w^5=-32$:
    $$
    \begin{align*}
    w^5 &= 32(\cos\theta + \sin\theta) \\
    w_k &= \sqrt[5]{32}\biggr[\cos\biggr(\frac{\pi + 2k\pi}{5}\biggr) + j\sin\biggr(\frac{\pi+2k\pi}{5}\biggr)\biggr]
    w_0 &= 2\biggr(\cos\frac{\pi}{5} + j\sin\frac{\pi}{5}\biggr) = 2e^{j\frac{\pi}{5}} \\
    w_1 &= 2\biggr(\cos\frac{3\pi}{5} + j\sin\frac{3\pi}{5}\biggr) = 2e^{j\frac{3\pi}{5}} \\
    w_2 &= 2(\cos\pi + j\sin\pi = 2e^{j\pi} \\
    \\
    \text{etc.}
    \end{align*}
    $$
    
The **exponential** form of a complex number employs **Euler's identity**:
$$
\begin{align*}
e^{j\pi} &= -1 \\
e^{j\pi} &= \cos\theta + j\sin\theta \\
z &= re^{j\pi}
\end{align*}
$$

### Proofs

!!! example

## Vectors

Please see [SL Math - Analysis and Approaches 2#Vectors](/g11/mcv4u7/#vectors) and [SL Physics 1#1.3 - Vectors and scalars](/g11/sph3u7/#13-vectors-and-scalars) for more information.

The column vector shows a vector of the form $(x, y, ...)$ from top to bottom as $(x_1, x_2, ...)$ as the number of dimensions increases.

$$
\newcommand\colv[1]{\begin{bmatrix}#1\end{bmatrix}}
\colv{x_1 \\ x_2 \\ x_3}
$$

The zero vector is full of zeroes.
$$
\colv{0 \\ 0 \\ 0}
$$

!!! warning
    Vectors of different dimensions cannot be compared — the missing dimensions cannot be treated as 0.

The standard form of a vector is written as the difference between two points: $\vec{OA}$ where $O$ is the origin and $A$ is any point. $\vec{AB}$ is the vector as a difference between two points.

If a vector can be expressed as the sum of a scalar multiple of other vectors, that vector is the **linear combination** of those vectors. Formally, $\vec{y}$ is a linear combination of $\vec{a}, \vec{b}, \vec{c}$ if and only if any **real** constant(s) multiplied by each vector return $\vec y$:

$$\vec{y} = d\vec{a} + e\vec{b} + f\vec{c}$$

The **norm** of a vector is its magnitude or distance from the origin, represented by double absolute values. In $\mathbb R^2$ and $\mathbb R^3$, the Pythagorean theorem can be used.

$$||\vec x|| = \sqrt{x_1 + x_2 + x_3}$$

### Properties of norms

$$
|c|\cdot ||\vec x|| = ||c\vec x|| \\
||\vec x + \vec y|| \leq ||\vec x|| + ||\vec y||
$$

### Dot product

Please see [SL Math - Analysis and Approaches 2#Dot product](/g11/mcv4u7/#dot-product) for more information.

The Cauchy-Schwartz inequality states that the magnitude of the dot product is less than the product.
$$
|\vec x\bullet\vec y|\leq||\vec x||\cdot||\vec y||
$$

The dot product can be used to guesstimate the angle between two vectors.

- If $\vec x\bullet\vec y < 0$, the angle is obtuse.
- If $\vec x\bullet\vec y > 0$, the angle is acute.

### Complex vectors

The set of complex vectors $\mathbb C^n$ is like $\mathbb R^n$ but for complex numbers.

The **norm** of a complex vector must be a real number. Therefore:

$$
\begin{align*}
||\vec z|| &= \sqrt{|z_1|^2 + |z_2|^2 + ...} \\
&= \sqrt{\overline{z_1}z_1 + \overline{z_2}z_2 + ...}
\end{align*}
$$

The **complex inner product** is the dot product between a conjugate complex vector and a complex vector.

$$
\begin{align*}
\langle\vec z,\vec w\rangle &= \overline{\vec z}\bullet\vec w \\
&= \overline{z_1}w_1 + \overline{z_2}w_2 + ...
\end{align*}
$$

#### Properties of the complex inner product

- $||\vec z||^2 = \langle\vec z, \vec z\rangle$
- $\langle\vec z, \vec w\rangle = \overline{\langle\vec w, \vec z\rangle}$
- $\langle a\vec z, \vec w\rangle = \overline{a}\langle\vec z, \vec w\rangle$
- $\langle\vec u + \vec z,\vec w\rangle = \langle\vec w,\vec u\rangle + \langle\vec z, \vec u\rangle$

### Cross product

Please see [SL Math - Analysis and Approaches 2#Cross product](/g11/mcv4u7/#cross-product) for more information.

### Vector equations

Please see [SL Math - Analysis and Approaches 2#Vector line equations in two dimensions](/g11/mcv4u7/#vector-line-equations-in-two-dimensions) for more information.

### Vector planes

Please see [SL Math - Analysis and Approaches 2#Vector planes](/g11/mcv4u7/#vector-planes) for more information.

!!! definition
    - A **hyperplane** is an $\mathbb R^{n-1}$ plane in an $\mathbb R^n$ space.

The **scalar equation** of a vector shows the normal vector $\vec n$ and a point on the plane $P(a,b,c)$ which can be condensed into the constant $d$.

$$n_1x_1+n_2x_2 + n_3x_3 = n_1a+n_2b+n_3c$$

Please see [SL Math - Analysis and Approaches 2#Vector projections](/g11/mcv4u7/#vector-projections) for more information.

## Matrices

Please see [SL Math - Analysis and Approaches 2#Matrices](/g11/mcv4u7/#matrices) for more information.

!!! definition
    - A **leading entry** is the first non-zero entry in a row.
    - A matrix is **underdetermined** if there are fewer variables than rows.
    - A matrix is **overdetermined** if there are more variables than rows.
 
Vectors can be expressed as matrices with each dimension in its own row. If there is a contradiction in the system, it is **inconsistent**.

The **row echelon form** of a matrix makes a system rapidly solvable by effectively performing elimination on the system until it is nearly completed.

!!! example
    The following is a vector in its row echelon form.
    
    $$
    A=
    \left[\begin{array}{rrrr | r}
    1 & 0 & 2 & 3 & 2 \\
    0 & 0 & 1 & 3 & 4 \\
    0 & 0 & 0 & -2 & -2
    \end{array}\right]
    $$

The **rank** of a matrix is equal to the number of leading entries any row echelon form.
$$\text{rank}(A)$$

In general, $A$ represents just the coefficient matrix, while $A|\vec b$ represents the augmented matrix.

According to the **system-rank theorem**, a system is consistent **if and only if** the ranks of the coefficient and augmented matrices are equal.
$$\text{system is consistent } \iff \text{rank}(A) = \text{rank}(A|\vec b)$$

In addition, for resultant vectors with $m$ dimensions, the system is only consistent if $\text{rank}(A) = m$

Each variable $x_n$ is a **leading variable** if there is a leading entry in $A$. Otherwise, it is a **free variable**. Systems with free variables have infinite solutions and can be represented by a vector **parameter**.

!!! example
    TODO: LEARN example
