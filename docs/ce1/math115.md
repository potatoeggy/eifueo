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

The number multiplied by the conjugate is the square of the modulus.
$$z\overline{z}=|z|^2$$

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
\begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix}
$$

The zero vector is full of zeroes.
$$
\begin{bmatrix}0 \\ 0 \\ 0\end{bmatrix}
$$

!!! warning
    Vectors of different dimensions cannot be compared — the missing dimensions cannot be treated as 0.

The standard form of a vector is written as the difference between two points: $\vec{OA}$ where $O$ is the origin and $A$ is any point. $\vec{AB}$ is the vector as a difference between two points.

If a vector can be expressed as the sum of a scalar multiple of other vectors, that vector is the **linear combination** of those vectors. Formally, $\vec{y}$ is a linear combination of $\vec{a}, \vec{b}, \vec{c}$ if and only if any **real** constant(s) multiplied by each vector return $\vec{y}$:

$$\vec{y} = d\vec{a} + e\vec{b} + f\vec{c}$$

The **norm** of a vector is its magnitude or distance from the origin, represented by double absolute values. In $\mathbb R^2$ and $\mathbb R^3$, the Pythagorean theorem can be used.

$$||\vec{x}|| = \sqrt{x_1 + x_2 + x_3}$$

### Properties of norms

$$
|c|\cdot ||\vec{x}|| = ||c\vec{x}|| \\
||\vec{x} + \vec{y}|| \leq ||\vec{x}|| + ||\vec{y}||
$$

### Dot product

Please see [SL Math - Analysis and Approaches 2#Dot product](/g11/mcv4u7/#dot-product) for more information.

The Cauchy-Schwartz inequality states that the magnitude of the dot product is less than the product.
$$
|\vec{x}\bullet\vec{y}|\leq||\vec{x}||\cdot||\vec{y}||
$$

The dot product can be used to guesstimate the angle between two vectors.

- If $\vec{x}\bullet\vec{y} < 0$, the angle is obtuse.
- If $\vec{x}\bullet\vec{y} > 0$, the angle is acute.

### Complex vectors

The set of complex vectors $\mathbb C^n$ is like $\mathbb R^n$ but for complex numbers.

The **norm** of a complex vector must be a real number. Therefore:

$$
\begin{align*}
||\vec{z}|| &= \sqrt{|z_1|^2 + |z_2|^2 + ...} \\
&= \sqrt{\overline{z_1}z_1 + \overline{z_2}z_2 + ...}
\end{align*}
$$

The **complex inner product** is the dot product between a conjugate complex vector and a complex vector.

$$
\begin{align*}
\langle\vec{z},\vec{w}\rangle &= \overline{\vec{z}}\bullet\vec{w} \\
&= \overline{z_1}w_1 + \overline{z_2}w_2 + ...
\end{align*}
$$

#### Properties of the complex inner product

- $||\vec{z}||^2 = \langle\vec{z}, \vec{z}\rangle$
- $\langle\vec{z}, \vec{w}\rangle = \overline{\langle\vec{w}, \vec{z}\rangle}$
- $\langle a\vec{z}, \vec{w}\rangle = \overline{a}\langle\vec{z}, \vec{w}\rangle$
- $\langle\vec{u} + \vec{z},\vec{w}\rangle = \langle\vec{w},\vec{u}\rangle + \langle\vec{z}, \vec{u}\rangle$

### Cross product

Please see [SL Math - Analysis and Approaches 2#Cross product](/g11/mcv4u7/#cross-product) for more information.

### Vector equations

Please see [SL Math - Analysis and Approaches 2#Vector line equations in two dimensions](/g11/mcv4u7/#vector-line-equations-in-two-dimensions) for more information.

### Vector planes

Please see [SL Math - Analysis and Approaches 2#Vector planes](/g11/mcv4u7/#vector-planes) for more information.

!!! definition
    - A **hyperplane** is an $\mathbb R^{n-1}$ plane in an $\mathbb R^n$ space.

The **scalar equation** of a vector shows the normal vector $\vec{n}$ and a point on the plane $P(a,b,c)$ which can be condensed into the constant $d$.

$$n_1x_1+n_2x_2 + n_3x_3 = n_1a+n_2b+n_3c$$

Please see [SL Math - Analysis and Approaches 2#Vector projections](/g11/mcv4u7/#vector-projections) for more information.

Similarly, the component of $\vec{a}$ in the direction **perpendicular to** $\vec{b}$ is related to the vector projection.

$$
Perp_{\vec{b}}\vec{a} = \vec{a} - Proj_{\vec{b}}\vec{a} \\
|Perp_{\vec{b}}\vec{a} = |\vec{a}|\sin\theta
$$

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

The **reduced row echelon form** of a matrix makes a system even more rapidly solvable by performing even more elimination on the system such that each **leading variable** is equal to one, and that variable is the only variable in the coefficient matrix.

The **rank** of a matrix is equal to the number of leading entries any row echelon form.
$$\text{rank}(A)$$

In general, $A$ represents just the coefficient matrix, while $A|\vec{b}$ represents the augmented matrix.

According to the **system-rank theorem**, a system is consistent **if and only if** the ranks of the coefficient and augmented matrices are equal.
$$\text{system is consistent } \iff \text{rank}(A) = \text{rank}(A|\vec{b})$$

In addition, for resultant vectors with $m$ dimensions, the system is only consistent if $\text{rank}(A) = m$

Each variable $x_n$ is a **leading variable** if there is a leading entry in $A$. Otherwise, it is a **free variable**. Systems with free variables have infinite solutions and can be represented by a vector **parameter**.

!!! example
    TODO: LEARN example
    
### Matrix algebra

!!! definition
    - $M_{m\times n}(\mathbb R)$ is the set of all real matrices.
    - A **square matrix** has $m=n$.
    - The **zero matrix** $0_{m\times n}$ has every entry equal to 0.

In a $m\times n$ matrix $A$, $a_{ij}$ or $(A)_{ij}$ represents the entry in the $i$th row and $j$th column.

$$A=[a_{ij}]$$

Two matrices with size $m\times n$ $[a_{ij}]$ and $[b_{ij}]$ are equal if and only if $a_{ij} = b_{ij}$ for every i and j (formally, for every $i=1, ..., m, j = 1, ..., n$).

Properties of matrices include:

- $(A+B)_{ij} = (A)_{ij} + (B)_{ij}$
- $(cA)_{ij} = (cB)_{ij}, c\in\mathbb R$
- $A-B=A+(-1)B$

The **matrix transpose** $A^T$ is the matrix satisfying $(A^T)_{ij}=(A)_j$, as if it was reflected along the primary diagonal.

A matrix is **symmetric** if $A^T = A$, implying a square matrix.

Properties of transposed matrices:

- $A^T\in M_{n\times m}(\mathbb R)$
- $(A^T)^T = A$
- $(A+B)^T=A^T+B^T$
- $(AB)^T = B^TA^T$

### Matrix multiplication

In the two matrices $A\in M_{m\times n}(\mathbb R)$ and $B\in M_{n\times k}(\mathbb R)$, where $B=[\vec b_1, ..., \vec b_n]$ are columns:

$$AB=[A\vec b_1, ..., A\vec b_n]$$

where the resultant matrix is of size $m\times k$.

Extra columns in $B$ are ignored.

Alternatively, where $r_i$ is each row in $A$:

$$
AB = \begin{bmatrix}
\vec r_1\bullet \vec b_1 & ... & \vec r_1\bullet b_k \\
... & ... & ... \\
\vec r_m\bullet b_1 & ... & \vec r_m\bullet \vec b_k
\end{bmatrix}
$$

Properties of matrix multiplication, where $x\in \mathbb R$:

- $(AB)^T = B^T + A^T$
- $A(BC) = A(BC)$
- $AB \neq BA$
- $(B+C)A = BA+ BC$
- $(xA)B = x(AB) = A(xB)$

In an **adjacency matrix**, the number of paths between points in exactly $x$ edges is equal to that entry in $A^x$.


### Matrix-vector product

In an augmented matrix, the system is consistent **if and only if** the resultant vector is a linear combination of the columns of the coefficient matrix.

$$\text{system is consistent}\iff\vec{b} = A\vec{x}$$

Where $\vec{x}$ is $[x_1, x_2, ...]$ and $\vec{a}_n$ is the column vector of $A$ at $n$:

$$A\vec{x} = \vec{a}_1x_1 + \vec{a}_2x_2 + ... + \vec{a}_nx_n$$

**Alternatively**, the matrix-vector product can be considered a dot product such that where $\vec{r}_1, \vec{r}_2, ...$ are the rows of $A$:

$$A\vec{x} = \vec{b} = \begin{bmatrix}\vec{r}_1\bullet\vec{x} \\ \vec{r}_2\bullet\vec{x} \\ ... \\ \vec{r}_n\bullet\vec{x}\end{bmatrix}$$

!!! warning
    - $A$ must be $m\times n$.
    - $\vec{x}$ must be in $\mathbb R^n$ (number of columns)
    - $\vec{b}$ must be in $\mathbb R^m$ (number of rows)

!!! example
    The system below:
    
    $$
    \begin{align*}
    &x_1 &+ &3x_2 &- &2x_3 &= &-7 \\
    -&x_1 &- &4x_2 &+ &3x_3 &= &8
    \end{align*}
    $$
    
    is equivalent to the augmented matrix:
    $$
    \left[\begin{array}{rrr | r}
    1 & 3 & -2 & -7 \\
    -1 & -4 & 3 & 8
    \end{array}\right]
    $$
    
    which is consistent if and only if, where $\vec{a_1}, \vec{a_2}, \vec{a_3}$ are the column vectors of $A$:
    
    $$
    \begin{align*}
    \vec{b} = \begin{bmatrix}-7 \\ 8\end{bmatrix} &= x_1\begin{bmatrix}1 \\ -1\end{bmatrix} + x_2\begin{bmatrix}3 \\ -4\end{bmatrix} + x_3 \begin{bmatrix}-2 \\ 3\end{bmatrix} \\
    &= x_a\vec{a_1} + x_2\vec{a_2} + x_3\vec{a_3}
    \end{align*}
    $$

The matrix-vector product is distributive, so the following properties are true.

- $A(\vec{x} + \vec{y}) = A\vec{x} + A\vec{y}$
- $(A+B)\vec{x} = A\vec{x} + B\vec{x}$
- $A(c\vec{x}) = cA\vec{x}$

### Identity matrices

In a **homogeneous system** ($\vec{b} = \vec{0}$), any linear combinations of the solutions to the system ($\vec{x}_1, ... \vec{x}_n$) are also solutions to the system.

The identity matrix ($I_n$) is a **square matrix** of size $n$ with the value 1 along the main diagonal and 0 everywhere else. The $i$th column is equal to the $i$th row, which is known as $\vec{e}_i$.

$$
\begin{align*}
I_4 &= \left[\begin{array}{rrrr}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{array}\right] \\
&= [\begin{array}{} \vec{e}_1 & \vec{e}_2 & \vec{e}_3 & \vec{e}_4\end{array}]
\end{align*}
$$

### Markov chains

!!! definition
    - A **probability vector** $\vec s$ has only **non-negative** entries that sum to 1.
    - A **stochastic** matrix has only probability vectors as its columns.
    - A **state vector** $s_k$ in a Markov chain represents the state of the system.

A Markov chain is a sequence of probability vectors $\vec s_0, \vec s_1, ...$ and stochastic matrix $P$ such that:

$$s_{k+1} = P_{s_k}$$

for any non-negative integer $k$.

The state vector $\vec s$ is the **steady-state vector for $P$** if $P\vec s = \vec s$. Each stochastic matrix converges to a steady state.

If the stochastic matrix is **regular**, there are only positive integers, which is true if at some $P^n$ there are only positive integers. Regular matrices converge to exactly one steady state vector.

In order to determine the steady state for any stochastic cmatrix:

 - Verify that $P$ is regular,
 - Solve the augmented matrix $(P-I)\vec s = 0$.
 - Deduce the probability vector $\vec s$.

### Matrix equality

Matrices are only equal if *every* possible linear combination is equal ($A\vec{x} = B\vec{x}$ **does not mean** $A = B$).

If $A\vec{x} = B\vec{x}$ for every $\vec{x}\in \mathbb R^n$, then $A = B$. This can be proven using the identity matrix:

$$
\text{Since }A\vec{e}_i = B\vec{e}_i \text{ for }i = 1, ... n: \\
A\vec{e}_i = \vec{a}_i, B\vec{e}_i = \vec{b}_i \\
∴ \vec{a}_i = \vec{b}_i\text{ for } i=1, ... n,\text{ thus } A=B.
$$

### Complex matrices

The **conjugate** of a matrix is the conjugate of each of its elements.

$$\overline A = [\overline a_{ij}]$$

Conjugates are distributive, i.e. $\overline{A\vec z} = \overline A \ \overline{\vec{z}}$.

### Matrix inversion

The **unique** inverse matrix $A^{-1}$ of $A$ is such that $AA^{-1} = I = A^{-1}A$. Both matrices must be square for this to work and have ranks equal to that of their length.

Properties of inverse matrices:

- $(cA)^{-1} = \frac{1}{c}A^{-1}$
- $(ABCD)^{-1} = A^{-1}B^{-1}C^{-1}D^{-1}$
- $(A^k)^{-1} = (A^{-1})^k$ if $k>0$
- $(A^T)^{-1} = (A^{-1})^T$

To determine an inverse matrix, the augmented matrix of it and the identity matrix should be solved.

$$\begin{bmatrix}A\ |\ I\end{bmatrix}$$

If it is row reducible, it will form an identity matrix and the inverse on the other side.

$$\begin{bmatrix}I\ |\ A^{-1}\end{bmatrix}$$

If it is not row reducible or has free variables, it is not invertible.

If a matrix is invertible, $A\vec x = \vec b$ is **guaranteed to have a unique solution** for any $\vec b$.

## Flow

!!! definition
    - A **network** is a system of junctions connected by directed lines, similar to a directed graph.

In a **junction**, the flow in must equal the flow out. A network that follows the junction rule is at **equilibrium**.

In an electrical diagram, if a reference direction is selected, flow going opposite the reference direction is negative.

Matrices can be applied by applying the junction rule to systems with equal flow in and flow out for each of the **smaller systems** (i.e., not trying to meet every point)

## Spanning sets

The span of a finite set of vectors in $\mathbb R^n$ is the infinite set of all linear combinations of those vectors, such that **Span $B$ is spanned by $B$** and **$B$ is a spanning set for Span $B$**.

The set $B=\{\vec v_1, \vec v_2, \vec v_3\}$ can be represented as matrix $A=[\vec v_1, \vec v_2, \vec v_3]$. A vector $\vec x$ is in Span $B$ if and only if $A\vec c = \vec x$ is consistent — which is to say that if it can be expressed as a linear combination, it is in the span.

### Linear independence

A set is:

- linearly **dependent** if at least one non-zero linear combination of the set is equal to $\vec 0$.
- linearly **independent** if the only solution is setting all coefficients to zero.

Effectively, if there is at least one vector in the set that is a linear combination of the other elements, it is redundant and thus the set is **linearly dependent.**

This can be solved by testing if there are no free variables in the homogeneous system — the vector that is free is the dependent one.

!!! warning
    - Any set with the zero vector will be an linearly **dependent** set.
    - The empty set is linearly **independent**.

Subsets can be proven to be dependent via contradiction.

!!! example
    To prove $\{\vec v_1 ... \vec v_{k-1}\}$ is LI given $\{\vec v_1 ... \vec v_k\}$ is LI, assume that the former is LD, which results in the latter being LD, which cannot be true, therefore the proof holds.

## Subspaces

A subset $\mathbb S$ of $\mathbb R^n$ is a subspace of $\mathbb R^n$ if and only if:

- all $\vec x + \vec y \in\mathbb S$
- $\vec 0\in\mathbb S$
- for all $c\in\mathbb R, c\vec x\in\mathbb R$

### Bases

A **basis** $B$ of subspace $\mathbb S$ is a set that is **linearly independent** such that the span of $B$ is equal to the subspace. All elements in that subspace must have a unique linear combination of the elements in $B$, such that the rank of a matrix from the basis is always the number of vectors.

The basis of $\mathbb R^n$ contains exactly $n$ elements, and all bases have the same number of elements.

The **standard basis** for $\mathbb R^n$ is the set of identity matrix columns.

Therefore, a spanning set is only a basis under the following conditions:

- it is linear independent
- it has the same number of elements as a basis

### Dimensions

The dimension of a subspace $\text{dim}(\mathbb S)$ is equal to the number of elements in any of its bases.

### Other spaces

The **null space** of a matrix is the set of all elements that solve the homogeneous system $A\vec x = \vec 0$.

$$\text{Null}(A) = \{\vec x\in\mathbb R^n | A\vec x = \vec 0\}$$

Its dimension is equal to the number of free vectors in RREF.

The **column space** of a matrix is the set of all linear combinations of its columns, which can be found by taking a linearly independent subset of the matrix (the **original vectors** of the non-free vectors in RREF).

$$\text{Col}(A) = \{A\vec x |\vec x\in\mathbb R^n \} = \text{Span}\{\vec a_1, \vec a_2, ..., \vec a_n\}$$

Its dimension is equal to the rank of the matrix.

The **row space** of a matrix is the set of all linear combinations of its rows, which can be found by taking each non-zero row from RREF.

$$\text{Row}(A) = \{A^t\vec x | \vec x\in\mathbb R^n\} = \text{Span}\{\vec r_1, \vec r_2, ..., \vec r_m\}$$

Its dimension is equal to the rank of the matrix.

Two row spaces are equal if and only if they can be manipulated into each other via elementary row operations. This indicates that systems to the homogeneous system for one apply to the other as well.

## Vector spaces

A vector space over $\mathbb R$ is a set defined by the linear combination of two or more vectors.

In a vector space, the following properties mmust be true:

- $0\vec x=\vec 0$
- $-\vec x = (-1)\vec x$

Rules regarding dimensions, bases, subspaces, sets, and spanning sets all apply to vector spaces.

The **standard basis** for the vector space $M_{2\times2}(\mathbb R)$ is:

$$
\left\{
\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}
,
\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix},
\begin{bmatrix}
0 & 0 \\
1 & 0
\end{bmatrix}
,
\begin{bmatrix}
0 & 0 \\
0 & 1
\end{bmatrix}
\right\}
$$

The **vector space over $\mathbb C$** can have complex scalars but is otherwise the same as a vector space over $\mathbb R$.

### Polynomial vector spaces

$P_n(\mathbb R)$ is the set of all possible real polynomials with a degree less than or equal to $n$.

$$P_n(\mathbb R) = \{ a_0 + a_1x + ... + a_nx^n | a\in\mathbb R \}$$

The zero polynomial is in all polynomials and is equal to zero with all coefficients set to zero.

For each $n\in\mathbb Z\geq 0$, $p_n(\mathbb R)$ is a vector space within addition and scalar multiplication.

The standard basis for $p$ is equal to all coefficients set to 1, and its dimension is equal to its degree plus 1.

$$\text{dim}(P_n(\mathbb R) = n+1$$


### Matrix transformations

!!! definition
    - The **codomain** of a function is the set of all possible values in that axis / dimension.
    - The **range** of a function is the set of all possible values returnable by the function.

A matrix transformation function $f_A$ **maps** a vector $x$ to its matrix-vector product $A\vec x$ from $\mathbb R^m$ to $\mathbb R^n$.

The matrix transformation function for matrix $A$ $f_A$ is directly equivalent to the matrix-vector product.

$$f_A(x)=A(x)$$

!!! example
    $$
    f_A(1,2,3) = A
    \begin{bmatrix}
    1 \\ 2 \\ 3
    \end{bmatrix}
    $$

Matrix transformation properties:

- $f_A(\vec x + \vec y) = f_A(\vec x) + f_A(\vec y)$
- $f_A(c\vec x) = cf_A(\vec x)$

A matrix transformation function can be restored to its original vector by substituting in the standard basis as parameters.

$$[L]=[L(\vec e_1), L(\vec e_2), ..., L(\vec e_n)]$$

### Linear transformations

A matrix transformation function $L: \mathbb R^n \rightarrow \mathbb R^m$ is a linear transformation if and only if for all:

$$L(s\vec x + t\vec y) = sL(\vec x) + tL(\vec y)$$

A linear transformation is a line that passes through the origin. If the transformation does not change the dimension of the vector, the function is a **linear operator**. Matrix transformation **preserve** linear combinations — that is, every matrix transformation is a linear transformation.

Its standard matrix is equal to the original vector (found by substituting the identity matrix).

For all linear transformations:

- $L(\vec 0_n) = \vec 0_m$
- $L(-\vec x) = -L(\vec x)$

Linear combinations **preserve linear combinations**, so a linear transformation of a subspace can be found if the linear transformations of the basis are known.

### Reflections

Around a direction vector $\vec d$ through the origin, a linear transformation can reflect about it, similar to a reflection across $y=x$.

$$
\begin{align*}
L&: \mathbb R^2 \longrightarrow \mathbb R^2 \\
&\vec x \longmapsto 2\ \text{proj}_{\vec{d}}\ \vec x-\vec x \\
&\vec x \longmapsto \vec x - 2\ \text{perp}_{\vec{d}}\ \vec x
\end{align*}
$$

In $\mathbb R^3$, it is reflected across a plane, and the normal vector $\vec n$ can be used as the direction vector.

$$
\begin{align*}
L&: \mathbb R^3 \longrightarrow \mathbb R^3 \\
&\vec x\longmapsto \vec x - 2\ \text{proj}_{\vec n}\ \vec x
\end{align*}
$$

### Rotations

Where $R_\theta:\mathbb R^2 \longrightarrow \mathbb R^3$ is a **counterclockwise** rotation about the origin by $\theta$, $r$ is the **norm** of the vector, and $\phi$ is the original angle to the x-axis:

$$
R_\theta(\vec x) = \begin{bmatrix}
r\cos(\theta + \phi) \\
r\sin(\theta + \phi)
\end{bmatrix}
$$

This effectively transforms the matrix to:

$$
R_\theta(\vec x) = \begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}\vec x
$$

The inverse angle is just the matrix transpose.

### Stretches and compressions

$$
Ax=\begin{bmatrix}
t & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}
$$

If $t>1$, $L(\vec x)$ is a **stretch** in the $x_2$ direction. Otherwise, it is a **compression** in that direction.

$$
Ax=\begin{bmatrix}
t & 0 \\
0 & t
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}
$$

If $t>1$, $L(\vec x)$ is a **dilation** (stretch in both directions). Otherwise, it is a **contraction**.

$$
Ax=\begin{bmatrix}
1 & s \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}
$$

If $s > 1$, $L(\vec x)$ is a **rightward shear**, bending a square into a right-facing parallelogram. Otherwise, if $0 < s < 1$, it **shears left**.

For all linear and matrix transformations:

- $L=M \iff L(\vec x)$ always is equal to $M(\vec x)$
- $(L+M)\mathbb R^n\to\mathbb R^m: [L] + [M]$
- $[cL] = c[L]$

In $L: \mathbb R^n\to\mathbb R^m, M:\mathbb R^m\to\mathbb R^p$:

- $[M\circ L]=[M][L]$ or $M(L(\vec x)) = [M][L]\vec x$

## Determinants and adjugates

$$A(\text{adj}\ A)=(\det A)I=(\text{adj}\ A)A$$

The determinant does a lot of magic things and is commonly used in the cross product.

$$
\det A = \begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad-bc
$$

The inverse can be quickly found if and only if the determinant of the original matrix is **non-zero**:

$$A^{-1}=\frac{1}{\det A}(\text{adj}\ A)$$

The mini-matrix $A(i,j)$ is equal to the matrix created by removing the $i$th row and $j$th column.

The $(i,j)$th cofactor of $A$ is related to its one-indexed determinant, and its sign is determined by its position:

$$c_{i,j}=\det(A(i,j))(-1)^{i+j}$$

The determinant of an arbitrarily sized matrix can be found by recursively applying these formulae — for any row or column, the cofactor expansion along the $i$th row or $j$th column of $A$ can find the determinant:

$$\det A=a_{i1}c_{i1}+a_{i2}c_{i2} ...$$

The **adjugate matrix** is equal to the transpose of the **cofactor matrix**:

$$\text{adj}\ A=[c_{ij}]^T\text{ for all }i,j$$

Determining cofactors is easier with more zeroes in the matrix, so reducing a matrix to RREF via EROs and **switching columns** is simpler.

- If there is row or column of zeros, $\det A = 0$
- If $B=A$ with exactly one pair of swapped rows, $\det B = -\det A$
- If $B=A$ by adding multiples of rows or columns to each other, $\det B = \det A$
- If $B=A$ with exactly one row or column a scalar multiple $c$ of $A$, $\det B = c\det A$

Properties;

- $\det(AB)=\det(A)\det(B)$
- $\det(BA)=\det(AB)$
- $\det(A+B)\neq\det(A)+\det(B)$
- $\det(cA)=c^n\det(A)$
- $\det(A^{-1})=\frac{1}{\det A}$
- $\det A^T = \det A$

### Triangular matrices

A triangular matrix is in REF or REF transposed.

If $A$ is an upper triangular matrix, it is in REF and all entries below the main diagonal are zero, and $\det A$ is equal to the sum of all entries along the main diagonal.

### Polynomial interpolation

Given $n$ points distinct in its domain, a polynomial with a degree of $n-1$ can always be found by substituting in the $x$ and $y$ values for each point to form the following **Vandermonde matrix** used in the matrix-vector product:

$$
\begin{bmatrix}x_{0}^{n}&x_{0}^{n-1}&x_{0}^{n-2}&\ldots &x_{0}&1\\x_{1}^{n}&x_{1}^{n-1}&x_{1}^{n-2}&\ldots &x_{1}&1\\\vdots &\vdots &\vdots &&\vdots &\vdots \\x_{n}^{n}&x_{n}^{n-1}&x_{n}^{n-2}&\ldots &x_{n}&1\end{bmatrix}
\begin{bmatrix}a_{n}\\a_{n-1}\\\vdots \\a_{0}\end{bmatrix}
=\begin{bmatrix}y_{0}\\y_{1}\\\vdots \\y_{n}\end{bmatrix}
$$

The determinant of the Vandermonde matrix can be determined by taking the product of the different between every entry. If any entry is equal to another entry, the determinant must be zero.

$$\det V = \prod_{1\leq i\leq j\leq h}(x_j-x_i)$$

## Eigens

If $A\vec x = \lambda\vec x$ for some $\vec x$ while $\lambda\in\mathbb R,A\in M_{n\times m}(\mathbb R)$:

- $\lambda$ is an **eigenvalue** of $A$, and
- $\vec x$ is an **eigenvector** of $A$ corresponding to $\lambda$.

Only non-zero eigenvectors should be found unless otherwise specified since any eigenvalue would work for that.

To solve for eigenvectors, the system below should be solved.

$$(A-\lambda I)\vec x=\vec 0$$

The determinant of the system can be used to check if there will be any eigenvectors.

- If $\det(A-\lambda I)=0$, there is exactly one solution which is the trivial solution, so $\lambda$ is **not an eigenvalue**.
- If $\det(A-\lambda I)\neq 0$, there are multiple solutions, so $\lambda$ is an eigenvalue.

The **characteristic polynomial** of an eigenvalue is equal to its determinant, and can be used to solve for eigenvalues when $\lambda$ is unknown.

$$C_A(\lambda) = \det(A-\lambda I)$$

Any complex values result in complex eigenvalues, and any complex eigenvalues guarantees the existence of another eigenvalue equal to the **conjugate** of the eigenvalue with corresponding vectors equal to the **conjugate** of the original corresponding vector.

If the system is any triangular matrix, the eigenvalues are equal to the main diagonal.

!!! warn
    When solving eigenvectors in the form $\vec x=t(x_0, x_1, x_2)$, $t\in\mathbb R, t\neq 0$ must be specified.

An **eigenspace** is the vector space of eigenvectors for a given eigenvalue:

$$E_\lambda(A)=\text{Null}(A-\lambda I)$$

The dimension of the eigenspace is guaranteed to be less than or equal to the number of times the eigenvalue appears in the characteristic polynomial.

By default, a square matrix of size $n$ has degree $n$.

The **algebraic multiplicity** $a_\lambda$ is the number of times $\lambda$ appears as a root of $C_A(\vec x)$.

The **geometric multiplicity** $g_\lambda$ is the dimension of eigenspace $E_\lambda(A)$.

It is guaranteed that, for all eigenvalues:

$$1\leq g_\lambda\leq a_\lambda\leq n$$

### Diagonal matrices

A **diagonal matrix** has every entry equal to zero except for the main diagonal (which *may* be equal to zero).

$$D=\text{diag}(d_{11}, d_{22}, ..., d_{nn})$$

For two diagonal matrixes $D$ and $E$:

- $D+E=\text{diag}(d_{11}+e_{11}, d_{22}+e_{22}, ...)$
- $DE=\text{diag}(d_{11}e_{11}, d_{22}e_{22}, ...)$

An $n\times n$ matrix $A$ is **diagonalisable** if and only if there is an invertible matrix $P$ and diagonal matrix $D$ with the same size such that:

$P_{-1}AP=D$$

The matrix $P$ **diagonalises** $A$ to $D$, and neither of the two are unique.

If $A$ is diagonalisable, $D$ is the matrix of all eigenvalues, and $P$ is the matrix of all eigenvectors, such that the column of the eigenvalue in $D$ corresponds to the column of the eigenvector in $P$.

If $B_i$ is a basis for the $i$th eigenspace for $A$, $B=B_1\cup B_2\cup ... B_k$, which is linearly **independent**.

The matrix $A$ is diagonalisable **if and only if** there is a basis for $\mathbb R^n$ consisting of eigenvectors of $A$. Therefore:

- A matrix is diagonalisable if and only if $a_\lambda=g_\lambda$ for every eigenvalue of $A$
- If an $n\times n$ matrix $A$ has exactly $n$ distinct eigenvalues, $A$ is diagonalisable
