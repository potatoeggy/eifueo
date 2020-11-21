# SL Physics - A

The course code for this page is **SPH3U7**.

## 1.1 - Measurements in physics

!!! reminder
    All physical quantities must be expressed as a **product** of a magnitude and a unit. For example, ten metres should be written as $10 \text{ m}$.

### Fundamental units

Every other SI unit is derived from the fundamental SI units. Memorise these!

| Quantity type | Unit | Symbol |
| --- | --- | --- |
| Time | Second | s |
| Distance | Metre | m |
| Mass | Kilogram | kg |
| Electric current | Ampere | A |
| Temperature | Kelvin | K |
| Amount of substance | Mole | mol |
| Luminous intensity | Candela | cd |

### Metric prefixes

Every SI unit can be expanded with metric prefixes. Note that the difference between many of these prefixes is $10^3$.

!!! example
    milli + metre = millimetre ($10^{-3}$) m

| Prefix | Abbreviation | Value | Inverse ($10^{-n}$) abbreviation | Inverse prefix |
| --- | --- | --- | --- | --- |
| deca- | da | $10^1$ | d | deci- |
| hecto- | h | $10^2$ | c | centi- |
| kilo- | k | $10^3$ | m | milli- |
| mega- | M | $10^6$ | µ | micro- |
| giga- | G | $10^9$ | n | nano- |
| tera- | T | $10^{12}$ | p | pico- |
| peta- | P | $10^{15}$ | f | femto- |
| exa- | E | $10^{18}$ | a | atto- |

### Significant figures

 - The leftmost non-zero digit is the **most significant digit**.
 - If there is no decimal point, the rightmost non-zero digit is the **least significant digit**.
	- Otherwise, the right-most digit (including zeroes) is the least significant digit.
 - All digits between the most and least significant digits are significant.
 - Pure (discrete) numbers are unitless and have infinite significant figures.

!!! example
    In $123000$, there are 3 significant digits.<br>
    In $0.1230$, there are 4 significant digits.

 - When adding or subtracting significant figures, the answer has the **same number of decimals** as the number with the lowest number of decimal points.
 - When multiplying or dividing significant figures, the answer has the **same number of significant figures** as the number with the lowest number of significant figures.
 - Values of a calculated result can be **no more precise** than the least precise value used.

!!! example
    $$1.25 + 1.20 = 2.45$$
    $$1.24 + 1.2 = 2.4$$
    $$1.2 × 2 = 2$$
    $$1.2 × 2.0 = 2.4$$

!!! warning
    When rounding an answer with significant figures, if the **least significant figure** is $5$, round up only if the **second-least** significant figure is **odd**.

    $$1.25 + 1.2 = 2.4$$
    $$1.35 + 1.2 = 2.6$$

### Scientific notation

Scientific notation is written in the form of $m×10^{n}$, where $1 \leq m < 10, n \in \mathbb{Z}$. All digits before the multiplication sign in scientific notation are significant.<br>

!!! example
    The speed of light in a vacuum ($c$) is effectively 300 000 000 ms<sup>-1</sup>, or $3×10^8$ ms<sup>-1</sup>.

### Orders of magnitude

The order of magnitude of a number can be found by converting it to scientific notation and taking its power of 10.

!!! example
    - The order of magnitude of $212000$, or $2.12×10^{5}$, is 5.
    - The order of magnitude of $0.212$, or $2.12×10^{-1}$, is -1.

## 1.2 - Uncertainties and errors

### Random and systematic errors

| Random error | Systematic error |
| --- | --- |
| Caused by imperfect measurements and is present in every measurement. | Caused by a flaw in experiment design or in the procedure. |
| Can be reduced (but not avoided) by repeated trials or measurements. | Cannot be reduced by repeated measurements, but can be avoided completely. |
| Error in precision. | Error in accuracy. |

!!! example
    - The failure to account for fluid evaporating at high temperatures is a systematic error, as it cannot be minimised by repeated measurements.
    - The addition of slightly more solute due to uncertainty in instrument data is a random error, as it can be reduced by averaging the result of multiple trials.

<img src="/resources/images/types-of-error.png" width=700>(Source: Kognity)</img>

### Uncertainties

Uncertainties are stated in the form of $a±\Delta a$. A value is only as precise as its absolute uncertainty. Absolute uncertainty of a **measurement** is usually represented to only 1 significant digit.

 - The absolute uncertainty of a number is written in the same unit as the value.
 - The percentage uncertainty of a number is the written as a percentage of the value.

!!! example
    - Absolute uncertainty: 1.0 g ± 0.1 g
    - Percentage uncertainty: 1.0 g ± 10%

To determine a measurement's absolute uncertainty, if:

 - the instrument states its uncertainty, use that.
 - an analog instrument is used, half of the most precise reading is uncertain.
 - a digital instrument is used, the last reported digit is uncertain by 1 at its order of magnitude.

!!! example
    - A ruler has millimetre markings. A pencil placed alongside the ruler has its tip just past 14 mm but before 15 mm. The pencil is 14.5 mm ± 0.5 mm long.
    - A digital scale reads 0.66 kg for the mass of a human body. The human body has a mass of 0.66 kg ± 0.01 kg.

See [Dealing with Uncertainties](/resources/g11/physics-uncertainties.pdf) for how to perform **operations with uncertainties**.

### Error bars

Error bars represent the uncertainty of the data and can be both horizontal or vertical. They are almost always required for both the independent and dependent variables. A data point with uncertain values is written as $(x ± \Delta x, y ± \Delta y)$

<img src="/resources/images/error-bars.png" width=600>(Source: Kognity)</img>

If the error bars of a data point are too small to see, note at the bottom of the graph that error bars are too small to see.

### Uncertainty of gradient and intercepts

!!! note "Definition"
    - The **line of best fit** is the line that passes through **as many error bars as possible** while passing as closely as possible to all data points.
    - The **minimum and maximum lines** are lines that minimise/maximise their slopes while passing through as many **error bars** as possible.

!!! warning
    - Use solid lines for lines representing **continuous data** and dotted lines for **discrete data**.
    - The line of best fit may not be a straight line.
    - Be wary and verify the results of a best fit line from software, as outliers and data trends may not be recognised by a computer.
    - It is better to leave a data point in the graph compared to removing it entirely, when possible.

<img src="/resources/images/error-slopes.png" width=700>(Source: Kognity)</img>

The uncertainty of the **slope** of the line of best fit is the difference between the maximum and minimum slopes.
$$m_{\text{best fit}} ± \frac{m_{\max}-m_{\min}}{2}$$
The uncertainty of the **intercepts** is the difference between the intercepts of the maximum and minimum lines.
$$\text{intercept}_{\text{best fit}} ± \frac{\text{intercept}_{\max} - \text{intercept}_{\min}}{2}$$


## 1.3 - Vectors and scalars

!!! note "Definition"
    - **Scalar:** A physical quantity with a numerical value (magnitude) and a unit.
    - **Vector:** A physical quantity with a **non-negative** numerical value (magnitude), a unit, and a **direction.**

??? example
    - Scalar quantities include speed, distance, mass, temperature, pressure, time, frequency, current, voltage, and more.
    - Vector quantities include velocity, displacement, acceleration, force (e.g., weight), momentum, impulse, and more.

Vectors are drawn as arrows whose length represents their scale/magnitude and their orientation refer to their direction. A variable representing a vector is written with a right-pointing arrow above it.

 - The **standard form** of a vector is expressed as its magnitude followed by its unit followed by its direction in square brackets.
$$\vec{a} = 1\text{ m }[N 45° E]$$
 - The **component form** of a vector is expressed as the location of its head on a cartesian plane if its tail were at $(0, 0)$.
$$\vec{a} = (1, 1)$$
 - The **magnitude** of a vector can be expressed as the absolute value of a vector.
$$|\vec{a}| = 1 \text{ m}$$

### Adding/subtracting vectors diagrammatically

1. Draw the first vector.
2. Draw the second vector with its tail at the head of the first vector.
3. Repeat step 2 as necessary for as many vectors as you want by attaching them to the *head* of the last vector.
4. Draw a new ("resultant") vector from the tail of the first vector to the head of the last vector.

<img src="/resources/images/vector-add-direction.png" width=700>(Source: Kognity)</img>

When subtracting exactly one vector from another, repeat the steps above, but instead place the second vector at the **tail** of the first, then draw the resultant vector from the head of the second vector to the head of the first vector. Note that this only applies when subtracting exactly one vector from another.

!!! example
    In the diagram above, $\vec{b}=\vec{a+b}-\vec{a}$.

Alternatively, for any number of vectors, negate the vector(s) being subtracted by **giving it an opposite direction** and then add the negative vectors.

<img src="/resources/images/vector-subtract-direction.png" width=700>(Source: Kognity)</img>

### Adding/subtracting vectors algebraically

Vectors can be broken up into two **component vectors** laying on the x- and y-axes via trigonometry such that the resultant of the two components is the original vector. This is especially helpful when adding larger (3+) numbers of vectors.
$$\vec{F}_x + \vec{F}_y = \vec{F}$$

!!! reminder
    The **component form** of a vector is expressed as $(|\vec{a}_x|, |\vec{a}_y|)$

<img src="/resources/images/vector-simple-adding.png" width=700>(Source: Kognity)</img>

By using the primary trignometric identities:
$$
|\vec{a}_{x}| = |\vec{a}|\cos\theta_{a} \\
|\vec{a}_{y}| = |\vec{a}|\sin\theta_{a}
$$

<img src="/resources/images/vector-decomposition.png" width=700>(Source: Kognity)</img>

Using their component forms, to:

 - add two vectors, add their x- and y-coordinates together.
 - subtract two vectors, subtract their x- and y-coordinates together.

$$
(a_{x}, a_{y}) + (b_{x}, b_{y}) = (a_{x} + b_{x}, a_{y} + b_{y}) \\
(a_{x}, a_{y}) - (b_{x}, b_{y}) = (a_{x} - b_{x}, a_{y} - b_{y})
$$

The length of resultant vector can then be found using the Pythagorean theorem.

$$
|\vec{c}|=\sqrt{c_{x}^2 + c_{y}^2}
$$

To find the resultant direction, use inverse tan to calculate the angle of the vector using the lengths of its components.

$$
\theta_{c} = \tan^{-1}(\frac{c_y}{c_x})
$$

### Multiplying vectors and scalars

The product of a vector multiplied by a scalar is a vector with a magnitude of the vector multiplied by the scalar with the same direction as the original vector.

$$\vec{v} × s = (|\vec{v}|×s)[\theta_{v}]$$

!!! example
    $$3 \text{ m} · 47 \text{ ms}^{-1}[N20°E] = 141 \text{ ms}^{-1}[N20°E]$$

## 2.1 - Motion

!!! definition
    - **Uniform motion**: Constant speed.
    - **Position**: The location of an object relative to an origin (typically the position of the object at time zero).
    - **Distance**: The scalar of the magnitude of the exact path taken by an object from an initial to a final position.
    - **Displacement**: The vector of the shortest path from an initial to a final position.
    - **Acceleration**: The vector of the rate of change of *velocity* over time.

### Models

A **scientific model** is a simplification of a system based on assumptions that predicts and/or explain observations for that system.

!!! note "Definition"
    - **System**: An object or a connected group of objects.
    - **Point particle assumption**: An assumption that models a system as a blob of matter. It is more reliable if the size and shape of the object(s) do not matter much.

### Velocity

Velocity is the vector of the rate of change of *displacement* over time, and can be represented as $\frac{\Delta d}{\Delta t}$.

The *average* velocity of an object is the velocity over an interval in time, calculated by finding the slope of the **secant** from the start and end position on a position-time graph.

The *instantaneous velocity* of an object is the velocity at a specific moment in time, calculated by finding the slope of the **tangent** at that moment on a position-time graph.

!!! definition
    - A **secant** is a straight line which intersects two points on a curve.
    - A **tangent** is a straight line that does not intersect a curve but "touches" it at exactly one point.

### Displaying motion

A **position-time graph** expands on the motion diagram by specifying a precise **position** value on the vertical axis in addition to time on the horizontal axis. The line of best fit indicates the object's speed, as well as if it is accelerating or decelerating.

$s$ is commonly used in IB to represent displacement and $s_{0}$ represents the initial position (when $t=0$).

<img src="/resources/images/position-time-graph.png" width=700>(Source: Kognity)</img>.

The slope of the line in a position-time graph represents that object's velocity. If the slope is not linear, the object is not moving uniformly (at a constant speed).

A **velocity-time graph** is similar to a position-time graph but replaces the position on the vertical axis with an object's velocity instead.

<img src="/resources/images/velocity-time-graph.png" width=700>(Source: Kognity)</img>

On a velocity-time graph, the slope represents that object's acceleration. If the slope is not linear, the object is not accelerating uniformly (accelerating at a constant rate).

The area below a velocity-time graph at a given time is equal to the displacement (change in position, $\Delta d$) at that time, since $ms^{-1}×s=m$. When finding the displacement of an object when it is accelerating, breaking up the graph into a rectangle and a triangle then adding their areas will give the displacement.

<img src="/resources/images/velocity-time-displacement.png" width=700>(Source: Kognity)</img>

An **acceleration-time graph** is similar to a velocity-time graph but replaces the velocity on the vertical axis with an object's acceleration instead.

The area below an acceleration-time graph at a given time is equal to the change in velocity ($\Delta v$) at that time.

!!! note
    If there is any instantaneous jump on a position-, velocity-, or acceleration-time graph (which is impossible in reality but may be used to simplify matters), a dashed line must be used to connect the two sides to ensure that the line remains a function.

### Uniformly accelerated motion

**Uniformly accelerated motion** is the constant acceleration in a **straight line**, or the constant increase in velocity over equal time intervals. The five key $suvat$ variables can be used to represent the various information in uniformly accelerated motion.

### Kinematic equations

<img src="/resources/images/constant-acceleration.png" width=700>(Source: Kognity)</img>

 - $s=$ change in displacement during time interval $t$ ($\Delta d$)
 - $u=$ initial velocity ($v_1$)
 - $v=$ final velocity ($v_2$)
 - $a=$ constant acceleration
 - $t=$ time elapsed ($\Delta t$)

By the formula of the gradient and the formula for the area underneath an acceleration time graph, the following formulas can be derived and are in the data booklet:

 - $s=ut + \frac{1}{2}at^2$
 - $v = u + at$
 - $s = \frac{1}{2}(u+v)t$
 - $v^2 = u^2 + 2as$

### Projectile motion

**Projectile motion** is uniformly accelerated motion that does not leave the vertical plane (is two-dimensional). Note that the two directions (horizontal and vertical) that the projectile moves in are independent of one another. This means that variables such as average velocity can be calculated by breaking up the motion into vector **components**, then finding the resultant vector.

Projectiles move at a **constant** horizontal velocity and move at a uniformly accelerated velocity (usually $9.81 \text{ ms}^2 \text{ [down]}$).

Therefore the horizontal velocity of a projectile ($v_x$) is constant and is equal to $v \cos \theta$ and the vertical velocity ($v_y$) is equal to $v \sin \theta$ where $\theta$ is the direction of $\vec{v}$ above the horizontal axis.

## 2.2 - Forces

A force is a "push" or "pull" exerted by one object acting on another object and is always represented in the form of a vector. The SI unit for force is the newton ($\text{N}$), equivalent to $\text{kg} \cdot \text{m} \cdot \text{s}^{-2}$.

Forces do not cause motion but instead cause *changes* in motion; therefore a constant force on an object results in **uniformly accelerated motion**.

A force must have:

 - A magnitude and direction
 - An object on which it acts and a location on that object where it acts
 - An object providing the force
 - An object acting and an object acted upon that are *not* the same

### Types of forces

A force must be classified as one of the following types of forces:

Contact (the two objects are touching) forces:

 - **Tension** ($\vec{F_T}$) is the pulling force from one object on another. Note that tension goes both ways: whichever object is pulling is also being pulled in the opposite direction.
 - **Normal force** ($\vec{F_N}$) is the "resistance" or "pushback" force from one object on another pushing on it and occurs because of Newton's third law of motion. It is always perpendicular to the surfaces of the objects.
 - **Kinetic and static friction** ($\vec{F_{fK}}$ and $\vec{F_{fS}}$, respectively) is the force resisting the motion of two surfaces sliding against each other. Kinetic friction opposes an object in motion while static friction opposes an object from moving in the first place and is equal to the force applied that would cause the object to move. The vector of friction is parallel to the surface and opposite the direction of motion.
 - **Drag** ($\vec{F_D}$) is the resistive force caused by fluids in the path of an object. Its vector is always pointing in the opposite direction of the object's *instantaneous* velocity.
 - **Thrust** ($\vec{F_T}$) is the propulsive force caused by mass (usually fluids) being ejected from an object. The force vector always points opposite the direction of the ejected mass.

### Friction

Static friction is always equal to the force applied by another object until an object begins to slip, at which point kinetic/dynamic friction applies. Kinetic friction, also known as **dynamic friction**, is a constant force that is lower than the peak force of static friction. 

The **coefficient of friction** ($\mu$) represents the ratio between friction force and normal force, and has a different value for kinetic and static friction. The **maximum** force of static friction is equal to its coefficient multiplied by the normal force ($|F_{fS}|_{\max} = \mu_s F_N$), while the force of kinetic friction is equal to its coefficient multiplied by the normal force ($F_{fK} = \mu_k F_N$).

<img src="/resources/images/static-kinetic-friction.png" width=500>(Source: Kognity)</img>

Non-contact forces:

 - **Weight** ($\vec{W}$) is the attraction between a mass and a planet. Its vector always points toward the planet. The magnitude of weight is equal to the mass of the object times the acceleration due to gravity ($mg$).
 - **Electromagnetic forces** ($\vec{F_M}$ and $\vec{F_E}$) are not covered in this course.

The origin and target of a force are placed in the subscript of that force.

!!! example
    If a rock is pushed across the ground by a hand at a constant velocity, the forces acting on the rock would include:

    - the normal force from the hand, or $F_{T \text{ hR}}$
    - the kinetic friction from the ground, or $F_{fK \text{ gR}}$
    - the weight of the rock from the planet, or $W_\text{ ER}$
    - the normal force from the ground pushing against the rock's weight, or $F_{N \text{ gR}}$

### Force diagrams

Also known as **free body diagrams**, force diagrams are used to list the forces acting on a single object represented as a point.

<img src="/resources/images/free-body-diagram.png" width=700>(Source: Kognity)</img>

!!! warning
    The labels of the vectors in the graphs should use symbols and subscripts as per the example in [#Friction](./#friction).

Force diagrams must include:

 - The object as a point
 - Either $\vec{a}=0$ or a squiggly arrow labeled $\vec{a}$ in the direction of acceleration
 - All contact forces with their **subscript-labeled** vectors pointing away from the object and their lengths representative of their magnitude relative to the other vectors
	- If there are multiple forces acting on an object in the same direction, those vectors should be stacked
 - Weight as a vector following the rules above

When dealing with forces on an **inclined plane**, it can be easier to work with if the axes are rotated such that the horizontal axis is parallel to the surface between the objects. The force of weight always points downward even in this scenario, and can be broken up into its vector **components**.

<img src="/resources/images/rotated-fbd.png" width=700>(Source: Kognity)</img>

<img src="/resources/images/rotated-fbd-explanation.png" width=700>(Source: Kognity)</img>

### Balanced and unbalanced forces

If an object as a **zero net force** in all dimensions, the forces acting on it are **balanced** and motion does not change. Otherwise, there is a change in motion and the forces acting on the object are **unbalanced**.

### Newton's laws of motion

Newton's first law, also known as the **law of inertia**) states that every object will remain at rest or at constant velocity unless acted upon by an unbalanced force.

Newton's second law states that the **net** force on an object is equal to its mass multiplied by its acceleration, such that $\Sigma \vec{F} = m\vec{a}$.

Newton's third law states that every force applied on an object as an equal and opposite reaction force on another object. These pairs of forces are known as **action/reaction pairs**. Forces are *only* part of the same pair when they:

 - have the same magnitude but opposite directions
 - are of the same type (e.g., both are weight or normal force)
 - start and stop at the same time
 - act on **two different objects**, thus requiring **two** force diagrams to show both of them

!!! example
    If a block is lying on the ground, the force from the weight of the Earth on the block is the same as the force of the block on the Earth.

!!! warning
    The weight of an object and the normal force resisting that weight is *not* an action/reaction pair as they appear on the *same* force diagram and act on the *same* object.

### Pulleys

An ideal pulley changes the **direction** of force without affecting its magnitude. The tension on and acceleration of both objects on either end of pulley are always **equal**.

If both objects on both sides of a pulley have the same mass, Newton's third law applies and tension is equal to one of the objects' weight. Otherwise, two free body diagrams can be drawn to represent the forces on both objects. As pulleys only change the direction of force, one pulley system can be straightened out and axes set relative to the direction of acceleration.

!!! example
    The direction $\text{[clockwise]}$ is often used for this purpose.

## 2.3 - Work, energy, and power

### Work

Work is a scalar value measured in **joules** ($\text{J}$) and represents the energy transferred to an object or system. It is equal to the dot product (a special type of multiplication between vectors) of force and displacement, where $\theta$ is the **angle between the two vectors**, such that:
$$W=\vec{F}\cdot\vec{d}\cdot\cos\theta$$

<img src="/resources/images/work-equation.png" width=700>(Source: Kognity)</img>

When work is done **by** exactly one force, the above is formula is used. However, when calculating for work **on** an object, or **total work**, the sum of all forces ($\Sigma F$) should be used instead of $F$.

The **work-energy theorem** states that the **net work on** an object is also equal to the difference in kinetic energy of an object.
$$W=\Delta E_k = \frac{1}{2}mv^2$$

### Kinetic energy

Kinetic energy is the energy of an object from its motion, or when its force is in the same direction as its displacement.
$$\Delta E_k = \frac{1}{2}mv^2$$

!!! warning
    The above formula assumes that no work is transformed into potential energy (e.g., a spring).

### Gravitational potential energy

Gravitational potential energy is the **stored energy** from the movement of an object away from a body with a large gravitational attraction. It is equal to, where $g$ is the positive acceleration due to gravity, and $h$ is the vertical displacement from a **reference point**:
$$E_g = mg\Delta h$$

!!! warning
    Whether an object has gravitational potential energy largely depends on the reference height. For example, by setting the reference height to be the same as the object's, its potential energy is $0$. If the reference height is above the object's, its potential energy is negative.

### Elastic potential energy

Springs always want to return to equilibrium. In an ideal spring, Hooke's law states that the force needed to extend or compress a spring by distance $x$ from equilibrium scales linearly, such that:
$$\vec{F}_s = k \Delta x$$

The **spring constant** $k$ represents the "stiffness" of the spring. When returning to equilibrium, the **spring restoring force** is equal to the opposite of Hooke's law, or $\vec{F}_s = -k \Delta x$.

The difference in elastic **potential** energy is the **negative** of the work done by elastic force, and is equal to:
$$\Delta E_e = \frac{1}{2}k \Delta x^2$$

### Conservation of energy

The law of conservation of energy states that mechanical energy (the total kinetic and potential energies) in a **closed system** remains constant. Therefore, the net energy initially must be the same in the end.
$$\Sigma E_i = \Sigma E_f$$

The types of energy involved may have varying values as long as their sum is fixed. **Work** determines how energy is distributed among the types of energy.

### Power

Power is a a scalar unit represented in **watts** ($\text{1 W}=\frac{\text{1 J}}{\text{1 s}}$), and it is **not energy**, but instead the work done over a time interval, or the rate of doing work.
$$P=\frac{\Delta E}{\Delta t}$$

By rearranging units, power can also be represented in terms of force and velocity::
$$P=Fv$$

### Efficiency

Efficiency measures how much work, energy, or power is retained in a process, and is represented as a percentage ($1$ being 100% efficient, $0$ being 0% efficient).
$$\text{Efficiency = }\frac{\text{useful work/energy/power output}}{\text{total work/energy/power input}}$$

The second law of thermodynamics states that some energy is always lost to a non-useful form when converted, so the efficiency of a process is **always less than** $100%$.

## 2.4 - Momentum and impulse

### Momentum

The momentum of an object describes the difficulty of changing its motion. Its unit is **Newton seconds** ($\text{Ns}$) and it is expressed mathematically as $\vec{P}$ such that $\vec{P}$ is equal to mass times velocity, or:
$$\vec{P} = m\vec{v}$$

Newton's second law can be manipulated so that momentum of an object — if its mass is constant — is equal to the net average force on that object multiplied by time.
$$
\Sigma \vec{F}_\text{avg} = m\vec{a} \\
 = m(\frac{\vec{v_2}-\vec{v_1}}{\Delta t}) \\
 = \frac{m \vec{v_2} - m \vec{v_1}}{\Delta t}) \\
 = \frac{\vec{P_2} - \vec{P_1}}{\Delta t} \\
\Sigma \vec{F}_\text{avg} = \frac{\Delta \vec{P}}{\Delta t} \\
$$

This means that to achieve the *same momentum*, a smaller force can be applied for a longer period of time or a larger force can be applied in a smaller period of time.

As momentum is a **vector**, it must have a direction, and these differences in direction and therefore sign must be taken under consideration.

!!! example
    Bouncing balls change direction, so one of the velocities is in a direction opposite of the other.

### Conservation of momentum

Assuming there are no external forces, or if they are negligible, momentum between two objects must be conserved:
$$\Sigma\vec{P}_i=\Sigma\vec{P}_f$$

In all collisions, momentum is conserved **only** if external forces are zero or are negligible.

**Perfectly elastic** collisions conserve all kinetic energy and transform it into potential energy. These do not exist in reality because of the second law of thermodynamics.

!!! example
    A ball bouncing infinitely.

**Inelastic** collisions lose kinetic energy ($E_f < E_i$).

!!! example
    Most collisions, e.g., a car pushing another car.

**Completely inelastic collisions** lose the maximum amount of kinetic energy while still conserving momentum.

!!! example
    Two cars hitting each other and stopping.

Conservation of momentum applies even across dimensions. As it is a vector, it can be split up into components, which are independent of each other and can be acted on separately.

### Impulse

Impulse is the change in momentum of an object because of a force. It is expressed mathematically as $\vec{J}$, and is also represented in Newton seconds.
$$\vec{J} = \Sigma \vec{F}_\text{avg} · \Delta t$$

Note that that is also equal to $\Delta \vec{P}$ above.

## 3.1 - Thermal concepts

## 3.2 - Modelling a gas

## 6.1 - Circular motion

Circular motion is any motion along a circular path. The instantaneous velocity of an object in circular motion at any point is always tangent to its point on the circle, so the difference between any two velocities ($\Delta \vec{v}$) is radial (lies along the radius).

!!! definition
    - An object is in **uniform circular motion** when all instantaneous velocities are equal in magnitude or when all accelerations are equal in magnitude.
    - **Period** ($T$) represents the time required to complete one revolution ($360°$ or $2\pi$ radians).
    - **Frequency** ($f$) represents the revolutions per second represented in hertz ($\text{1 Hz=1s^{-1}}$), and is the inverse of period.

!!! warning
    As velocity and acceleration are vectors, direction must be considered when manipulating them. This means that the **kinematic equations** cannot be used.

### Angular thingies

**Angular displacement** ($\Delta \theta$) is the change in angle an object has rotated relative to a reference position. By convention, angular displacement anti-clockwise is positive.

**Angular speed** ($\omega$) is the rate of angular displacement, and is expressed in radians per second. It is also known as angular frequency.
$$\omega=\frac{\Delta \theta}{\Delta t}$$

An object in uniform circular motion has an angular speed of $2\pi f$. Since distance travelled in one period is the circumference of a circle, the **speed** of an object is:
$$v=\omega r$$
$$v=\frac{2\pi r}{T}$$

### Centripetal force/acceleration

!!! warning
    **Centrifugal** force is a **fictitious** (psuedo) force used to explain movement opposite the predicted acceleration in a circular frame of reference. The phenomenon is clearly explained from an external field of reference by Newton's first law of motion.

Centripetal acceleration ($\vec{a}_c$) is the acceleration causing an object to move in a circle. An object with uniform circular motion has a centripetal acceleration with constant **magnitude**.
$$|\vec{a}_c|=\frac{v^2}{r}$$

Therefore, the acceleration of an object in uniform circular motion is:
$$|\vec{a}_c|=\frac{4\pi^2r}{T^2}$$

The centripetal **force** on an object is the net force on that object causing it to move in a circle. In some cases, only some **components** of forces are included as part of centripetal force.
$$\Sigma \vec{F}_c=m\vec{a}_c$$

!!! example
   When a car turns in a circle, static friction is one factor in centripetal force. When riding a roller coaster, weight and normal force are included as centripetal force. When spinning around on the *WindSeeker* at an amusement park, only the horizontal component of tension ($\vec{F}_{Tx}$) is responsible for centripetal force.

## 6.2 - Newton's law of gravitation

The universal law of gravitation states that the gravitational force, $F_G$ between any two objects is attractive along the line joining them and equal to:
$$F_G=G\frac{mM}{r^2}$$

where $G=6.67×10^{-11} \text{ N}\cdot\text{m}^2\cdot\text{kg}^{-2}$ is Newton's constant of universal gravitation, $r$ is the distance between the objects' **centre of mass**, and $m$ and $M$ are the masses of the objects acted on and acting, respectively.

## Resources

 - [IB Physics Data Booklet](/resources/g11/ib-physics-data-booklet.pdf)
 - [IB SL Physics Syllabus](/resources/g11/ib-physics-syllabus.pdf)
 - [Dealing with Uncertainties](/resources/g11/physics-uncertainties.pdf)
 - [Linearising Data](/resources/g11/linearising-data.pdf)
 - [External: IB Physics Notes](https://ibphysics.org)
