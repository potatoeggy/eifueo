# SL Physics - 1

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

**Heat** is the transfer of thermal energy due to a difference in temperature between two objects.

The main postulates of **kinetic molecular theory** state that,

 - matter is made of constantly moving particles,
 - particles exert repulsive and attractive forces when too close or too far to other particles, respectively, and,
 - the interparticular distances and forces account for the three states of matter

<img src="/resources/images/states-of-matter.png" width=700>(Source: Kognity)</img>

The **temperature** of an object is the **average** kinetic energy of particles in that object, and is linearly related to the **pressure** of its container $p$. Kelvin ($K$) is used to represent temperature, which starts at **absolute zero** — the point at which the pressure, and thus the vibration and movement of particles, is zero — and increases at equal intervals as the Celsius scale ($-273°\text{C}=0\text{ K}$).
$$T(K)=T(°C)+273$$

The average kinetic energy in joules of a gas can be found by relating the temperature of the object $T$ and the Boltzmann constant $k_B$:
$$\frac{1}{2}m\overline{v^2}=\frac{3}{2}k_BT$$

The **internal energy** of a substance is the sum of the kinetic energy of the particles (temperature) and the potential energy of the particles due to their changing attractive/repulsive forces. The potential energy of an object is highly dependent on its state. A more solid state results in lesser potential energy as the particle and closer and have weaker intermolecular forces.

!!! note
    When changing state, the temperature of a substance does not change as the energy is used to break the attractive intermolecular forces instead of increasing kinetic energy. In otder to change state, the particles must have enough energy to overcome the intermolecular forces holding them together.

### Specific heat capacity

The amount of energy transferred to change the temperature of an object is **independent** on whether it increases or decreases. The **specific heat capacity** $c$ of a substance is the energy required to change 1 kg of that substance by 1 K and such has the units $\text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$. Where $Q$ is the quantity of thermal energy needed (no idea why it's not $\Delta Q$) , $m$ is the mass of a substance, $c$ is the specific heat capacity of the substance, and $\Delta T$ is the difference in temperature:
$$Q=mc\Delta T$$

When two objects reach thermal equilibrium together, the end temperature they reach is the same and the thermal energy one loses is equal to the one the other gains in a closed system.
$$Q_\text{lost}+Q_\text{gained}=0$$

A **temperature-energy** graph shows the energy required to heat a mass. If its mass is 1 kg, the slope of the graph is equal to $\frac{1}{c}$.

### Latent heat

!!! definition
    - **Boiling** occurs when liquid becomes a gas in the whole liquid at a temperature known as the boiling point.
    - **Evaporation** occurs only at the surface of a liquid at any temperature and can be enhanced by increasing surface area, heat, or by increasing air movement at the surface.
    
    Both evaporation and boiling remove the same amount of energy for a given mass.

When changing phase, a substance's temperature does not increase, but instead the energy goes toward expanding intermolecular spacing. As such, it can be identified on a temperature-energy graph by areas of no change in temperature as more energy is added.

The **specific latent heat** $L$ of a substance's fusion/vapourisation the amount of energy required for it to change phase, and is different between all substances and each difference in phase between substances. As such, it can only be used when $\Delta T=0$.
$$Q=mL$$

## 3.2 - Modelling a gas

### Ideal gases

An ideal gas is an imaginary gas used to model real gases. The following assumptions are made:

 - Gas particles are all identical and perfectly spherical
 - Gas particles do not exert any intermolecular forces — as such, their potential energy does not change
 - Gas particles collide perfectly elastically
 - Gas particles are so small that their volume is significantly smaller than that of the container

These assumptions do not hold for real gases as gases have real volume and there are intermolecular forces between them. As such, the ideal gas model is best used if the gas is at a **low** pressure, **higher** temperature, and **low** density.

The average kinetic energy of the gas particles is proportional to the temperature of a gas. A greater speed of gas particles also increases the **collisions** between gas particles and the walls of the box, therefore increasing **pressure**, therefore increasing **temperature**. The pressure of a gas on a surface can be expressed by the force $F$ over its area $A$.
$$p=\frac{F}{A}$$

The state of an ideal gas in a container can be modelled by the following equation, where $p$ is the pressure of the pressure in pascals or newtons per square metre ($\text{Pa}$ or $\text{Nm}^{-2}$), $V$ is the volume in cubic metres, $n$ is the number of moles of gas particles, $R$ is the universal gas constant ($R=8.31\text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$), and $T$ is the temperature of the gas in Kelvin:
$$pV=nRT$$

### Gas laws

!!! definition
    - An **isobaric**, **isothermal**, or **isochloric**/**isovolumetric** process have a constant pressure, temperature, or volume, respectively.
    - A **thermodynamic process** induces a change in a gas's temperature, pressure, or volume.

A **thermodynamic cycle** consists of thermodynamic processes that return a gas to its initial state, and appear in pressure-volume graphs as closed shapes. In such a cycle, the work done **on the gas** is equal to the pressure and change in volume:
$$W=p\Delta V$$

If the pressure is not constant, the work done is instead the area under the graph in that process.

Please see [HL Chemistry#Gas laws](/sch3uz/#gas-laws) for more information.

In a pressure-volume graph, the curves of constant temperature are known as **isotherms**.

## 4.1 - Oscillations

!!! definition
    - Oscillation is defined as a cyclical motion of an object around a central point.
    - The **amplitude** ($A$) of an oscillation is the greatest displacement from its equilibrium ($\Delta x$).
    - An object at an **equilibrium position** is at rest.

### Simple harmonic motion

In **simple harmonic motion** (SHM), an object oscillates in a fixed time interval around a central **equilibrium point** with a **linear restoring force** directed toward that equilibrium point.
$$\vec{F} \propto -\Delta \vec{x}$$

Alternatively, simple harmonic motion can be motion from a linear restoring force always directed to a fixed equilibrium point.

!!! example
    A spring has a restoring force equal to $\vec{F}=-k\vec{x}$.

The position/velocity/acceleration-time graphs of an object in this type of motion are all **sinusoidal**.

<img src="/resources/images/shm-graphs.png" width=700>(Source: Kognity)</img>

According to the law of conservation of energy, the total amount of energy in the system during simple harmonic motion remains constant, so graphing kinetic and potential energy against displacement from equilibrium returns two opposite parabolas centred on the equilibrium position.
$$\Sigma E \propto x^2$$

The only factor that affects the amplitude of SHM is the energy provided. The only factor that affects the period/frequency of SHM is the mass of the object and the restoring force.

## 4.2 - Travelling waves

!!! definition
    - A **wave** is a disturbance that propagates energy but does not transfer matter.
    - **Vibration** is the oscillation around a central equilibrium point.

A travelling wave is a wave transmits energy without transmitting physical material. Waves are generally periodic in both time and space. A wave is **in phase** if the displacement from equilibrium at any point is the same after each period. A (discrete) pulse is energy sent not as part of simple harmonic motion while a continuous wave causes particles to move in simple harmonic motion.

 - **Transverse** waves have their particles move **perpendicular** to the propagation of energy.
 - **Longitudinal** waves have their particles move **parallel** to the propagation of energy.

!!! example
    - A slinky stretched horizontally and being shaken up and down sends transverse waves down its length.
    - A slinky stretched horizontally and being pushed back and forth sends longitudinal waves down its length.

!!! example
    A longitudinal wave travelling through gas:
    
    <img src="/resources/images/longitudinal-wave.gif">(Source: Kognity)</img>

### Graphing travelling waves

A **displacement-time** graph shows the displacement *from equilibrium*  of **one** particle in simple harmonic motion. It can be used to identify the frequency of a wave as all particles oscillate at the same frequency in a wave.

<img src="/resources/images/dt-wave-graph.png" width=700>(Source: Kognity)</img>

A **displacement-distance** graph shows the displacement *from equilibrium* of **each** particle at a given time and can be used to find the wavelength ($\lambda$) of a wave.

<img src="/resources/images/dd-wave-graph.png" width=700>(Source: Kognity)</img>

The speed of a wave, or the speed at which energy propagates, in a medium is related to its frequency ($f$) and wavelength ($\lambda$) by the universal wave equation.
$$v=f\lambda$$

As all electromagnetic waves travel at the same speed — the speed of light — only either frequency or wavelength are needed to find the other property.
$$c=f\lambda$$

The only factor that affects the frequency of a wave is the source of energy, so changes in media do not change the frequency of a wave.

The only factor that affects the speed of the wave is the media it is travelling in.

## 4.3 - Wave characteristics

A **wavefront** is a line that connects different waves at points with the same phase. The distance between wavefronts is the wavelength. Straight wavefronts indicate waves that travel in the same direction at every point on the wavefront. **Rays** are arrows that indicate the direction of motion of the **wavefront**.

<img src="/resources/images/wavefront.gif">(Source: Kognity)</img>

!!! example
    Wavefronts of waves emanating from a point in the centre:
    
    <img src="/resources/images/radial-wave.png">(Source: Kognity)</img>

The **energy** of a wave is proportional to the square of its amplitude.
$$E \propto A^2$$

If a wave reflects off a **fixed** boundary it changes phase by inverting due to Newton's third law.

### Superposition and interference

The **superposition principle** states that the displacement of a particle of more than one wave at any time is the **sum** of the displacements caused by each individual wave. After superposition, waves continue on as if the other was not present. The result of combining waves via superposition is known as **interference**.

 - If the waves have displacements in the same direction, the interference is **constructive**.
 - If the waves have displacements in opposite directions, the interference is **destructive**.

<img src="/resources/images/superposition.png" width=700>(Source: Kognity)</img>

When waves of the same frequency meet, if their crests or troughs overlap, a **supercrest** or **supertrough** is formed, respectively. Waves that result in a net displacement of particles of zero form a **node**.

### Polarisation

**Unpolarised** waves are those that oscillate in every direction **perpendicular** to the direction of energy propagation, while those that are polarised only do so in one plane. Only **transverse** waves can be polarised.

<img src="/resources/images/polarise-head-on.png" width=700>(Source: Kognity)</img>

Waves are polarised by a **polariser**: a material that only allows charged particles to oscillate in one plane. When unpolarised light passes through a polariser, only one plane can progagate fully. The other directions of oscillation have their amplitudes reduced. **Linearly polarised** electromagnetic waves have a single plane of polarisation.

A **polarising filter** can be used to polarise light, and an **analyser** is a second polariser used to determine if light is polarised.

<img src="/resources/images/polariser.png" width=700>(Source: Kognity)</img>

The energy of a wave is proportional to its intensity which is proportional to the square of the amplitude.
$$E\propto I\propto A^2$$

**Malus's law** states that for a polarised wave of energy $E_0$, the amplitude from the second filter, where $\theta$ is the angle between the polariser and the analyser, such that:
$$E=E_0\cos\theta$$

And so, where $I$ is the intensity of the polarised/analysed light, $I_0$ is the intensity of the plane-polarised light, and $\theta$ is the angle between the polariser and the analyser:
$$I=I_0\cos^2\theta$$

When **unpolarised light** passes through a polariser, the average result of $I\cos^2\theta$ is $\frac{1}{2}$, so the intensity of polarised light is **half** of the intensity of unpolarised light.

When unpolarised light reflects off of a **smooth non-metallic** surface it will be at least partially polarised.

<img src="/resources/images/reflect-polarise.png" width=700>(Source: Kognity)</img>

## 4.4 - Wave behaviour

### Reflection

When waves meet a flat surface and are not diffused or refracted, they are reflected at the same angle they entered relative to the **normal**.

!!! definition
    - The **incident** wave/angle refers to the wave hitting the surface.
    - The **reflected** wave/angle refers to the wave moving away from the surface.
    - The **normal** is an imaginary line perpendicular to the surface at the arrival point of the incident ray.

<img src="/resources/images/reflection.png" width=700>(Source: Kognity)</img>

### Refraction

When light travels between two media that have different **optical densities**, it refracts and changes its direction as well as its speed. The **frequency** of the wave does not change but its speed does, therefore the **wavelength** changes as well.

!!! definition
    **Refraction** is the change in the direction and speed of light from a change in the optical density of the medium it travels through.

When a ray travels from a **less** optically dense to **more** optically dense medium (fast to slow), the ray bends **toward** the normal and its wavelength decreases.

<img src="/resources/images/refraction.gif" width=700>(Source: Kognity)</img>

### Snell's law and total internal reflection

The **refractive index** of a medium represents the ratio of wave speeds in the media, where $v$ is the speed of light in the medium:
$$n=\frac{c}{v}$$

Air has an index of refraction of $1$.

Snell's law states that the incident and refracted angles are related by the index of refraction of the media.
$$\frac{n_1}{n_2}=\frac{\sin\theta_2}{\sin\theta_1}=\frac{v_2}{v_1}$$

or
$$n_1\sin\theta_1=n_2\sin\theta_2$$

If a ray travels from a **slower** to a **faster** medium, the ray bends away from the normal. If the ray would refract so much that it does not leave the incident medium at all, **total internal reflection** (TIR) occurs and the ray follows the rules of **reflection**. The critical angle denotes the incident angle required for the refracted angle to be exactly $90°$, and any angle greater than it results in TIR.
$$\sin\theta_c = \frac{n_2}{n_1}$$

<img src="/resources/images/total-internal-reflection.png" width=700>(Source: Kognity)</img>

### Diffraction

!!! definition
    An **aperture** is a small opening in a barrier.

Diffraction is the bending of waves around an opening or obstacle.

<img src="/resources/images/diffraction.png" width=700>(Source: Kognity)</img>

Huygen's wave theory says that every point on a wavefront is a source of circular waves/wavelets that move outward from that point.

<img src="/resources/images/huygen-wavelets.png" width=700>(Source: Kognity)</img>

As a wavefront passes an aperture, there are fewer points beside it and the wavefront becomes rounder.

For observable diffraction, the wavelength must be greater than or equal to the width of the aperture.

### Two-point interference

When two points create waves, their wavefronts spread out in all directions. If waves are emanated from two points at the same speed and frequency, they form **nodal** and **anti-nodal** lines.

!!! definition
    - A **nodal** line is a set of points where waves interfere **destructively** and remain at equilibrium while other parts of the medium vibrate.
    - An **anti-nodal** line is a set of points where waves interfere **constructively** and have the maximum vibration in the medium.

<img src="/resources/images/point-interference.png" width=700>(Source: Kognity)</img>

For all points on **anti-nodal** lines, the path difference between the point sources is $n\lambda$, where $n$ is an integer indicating the number of anti-nodal lines away from the central anti-nodal line ($n=0$).

For all points on **nodal** lines, the path difference between the point sources is $(n+\frac{1}{2})\lambda$, where $n$ is an integer indicating the number of nodal lines away from the nodal lines ($n=0$) adjacent the central anti-nodal line (the diagram below mistakenly has one- instead of zero-indexed nodal line numbers).

<img src="/resources/images/point-interference-busy.png" width=700>(Source: Kognity)</img>

### Double slit interference of electromagnetic waves

A light wave that is **coherent** is **monochromatic** (of the same wavelength) with a constant phase difference. Because light from different sources is incredibly difficult to ensure constant phase differences, a double-slit test can be performed by using a point source at $S_0$ to ensure that coherent waves pass at $S_1$ and $S_2$. The darker and brighter **fringes** are due to anti-nodal and nodal lines from wave interference.

<img src="/resources/images/double-slit.png" width=700>(Source: Kognity)</img>

By using mafs involving rays along a nodal line, the separation, $s$ between **nodal/anti-nodal** lines on the distant surface can be related to the distance from the slits to the screen, $D$, the separation between the slits, $d$, and the wavelength $\lambda$.
$$s=\frac{\lambda D}{d}$$

The number of nodal lines depends on the ratio $\frac{d}{\lambda}$.

**Dark fringe** positions on the screen are equally spaced at the same separation $s$ between the bright fringes. The perpendicular bisector with a length of $D$ is a **bright fringe**.

<img src="/resources/images/fringe-slit-derive.png" width=700>(Source: Kognity)</img>

## 4.5 - Standing waves

A standing wave does not travel, so no energy is transferred. They are caused by the interference of symmetrical travelling waves moving in opposite directions.

!!! definition
    **Resonance** is when an external driver oscillating at a system's natural frequency transfers energy into the system, in this case a standing wave.

<img src="/resources/images/standing-wave.gif" width=700></img>

The locations of zero amplitude are called **nodes** and the locations of maximum amplitude are **anti-nodes**. Adjacent nodes are separated by $\frac{\lambda}{2}$. The wave speed is determined by the medium and the wavelengths of standing waves that fit on the medium are determined by the length of the medium.

<img src="/resources/images/harmonic-waves.png" width=700>(Source: Kognity)</img>

The frequencies that would produce standing waves are known as **natural frequencies**, and are individually known as **harmonics** The image above shows the first four harmonics. The first harmonic is also known as the **fundamental frequency**.

Inside an **air column**, the difference in pressure allows for the formation of standing waves as waves reflect off of the interface where air changes pressure. A closed end must have nodes while open ends must have antinodes.

Therefore:

 - In a stretched string or a **closed-ended** air column, both ends must be **nodes**.
 - In an open-ended air column, both ends must be **anti-nodes**.
 - In a half-open air column, the closed end must be a node while the open end must be an anti-node.

!!! example
    The wavelength of any half-open air column is $\lambda=\frac{L}{4}$, and $\lambda=\frac{L}{2}$ in a stretched string.

<img src="/resources/images/standing-tube.png" width=700>(Source: Kognity)</img>

Resonance occurs in an air column when the length of the open tube is a multiple of half the wavelength of the sound. **Resonant lengths** occur at each antinode.

In a **open-ended** or **closed-ended**  air column:
$$\lambda_n=\frac{n}{4}L$$

## 5.1 - Electric fields

### Charge

A **charge** is a scalar that allows a mass to experience force from an electromagnetic field, and it may only be positive or negative. It is both **quantised** — the smallest charge possible is the one on a single proton/electron and all charges are multiples of that value — and **conserved** in a closed system.

Charges are expressed in **Coulombs** ($\text{C}$) with the symbol $q$. One electron has a charge of $-1.60×10^{-19}\text{ C}$.

Similar to gravitation, the forces between charges is proportional to their charges and inversely proportional to the square of the distance between them.
$$F_E \propto q_1q_2 \propto \frac{1}{r^2}$$

The equation that describes the force between charges is as follows, where $k$ is a constant with the value $8.99×10^9\text{ N m}^{2}\text{C}^{-2}$:
$$F_E = \frac{kq_1q_2}{r^2}$$

The **electrical permittivity**, $\epsilon$, of a material is its resistance in creating an electric field in it, and has the units $\text{farad}\cdot\text{m}^{-1}$. Free space/a vaccum has a permittivity of $1$ and its value is known as $\epsilon_0$.
$$k=\frac{1}{4\pi\epsilon}$$

As $\epsilon$ changes depending on the medium, the constant $k$ changes as well.

### Actual electric fields

Similar to a gravitational field, the force an object experiences is dependent on both charges but the **field** around an object is only reliant on one. The **electric field strength** $\vec{E}$ is the force per unit of charge (with units $N\cdot C^{-1}$) on a tiny positive test charge and is equal to:
$$\vec{E}=\frac{\vec{F_e}}{q}$$

The direction of the field depends on its charge — by convention, all test charges are assumed to be **positive**, so vector arrows will point **away** from a positive source and **toward** a negative source.

### Electric potential

**Electric potential energy** ($E_E$) is the energy a charge in an electric field has in joules. It depends on the polarity of the charge, the magnitude of the charge, and the strength of the electric field.
$$\Delta E_E = W = F_E\Delta x$$

**Electric potential** ($V$), also known as voltage, is the potential energy a charge in an electric field has **per unit charge** in volts ($\text{V, 1 V = 1}\frac{\text{J}}{\text{C}}$). It depends only on the electric field strength.
$$
V=\frac{E_E}{q} \\
\Delta V = \frac{W}{q} = \frac{\Delta E_E}{q}
$$

The **electron-volt** ($\text{eV}$) is energy required to move an electron through a potential difference of one volt ($1\text{ eV}=1.60×10^{-19}\text{ J}$). One electron has a mass of $9.110×10^{-31}\text{ kg}$.

When $\Delta V=0$ the points are equipotential to each other, and no work is done moving between them. The images below outline equipotential lines — note that they are always **perpendicular** to electric field lines.

<img src="/resources/images/equipotential-charge.png" width=700>(Source: Kognity)</img>

<img src="/resources/images/equipotential-two-charges.png" width=700>(Source: Kognity)</img>

### Uniform electric fields

Electric field lines like the ones shown below show the direction that an electric field acts in.

<img src="/resources/images/electric-field.png" width=500>(Source: Kognity)</img>

If two charges establishing a field are parallel "plates", they form a **uniform electric field** between them, where the magnitude and direction of the electric field strength is identical at all points in the field, similar to a gravitational field.

<img src="/resources/images/uniform-electric-field.png" width=700>(Source: Kognity)</img>

Electric field lines never intersect and their density represents the strength of the electric field.

In a uniform electric field, equations similar to the ones used in gravitational fields can be applied.
$$
\Delta E_E = q\vec{E}\Delta x \\
\Delta E_E = q\Delta V \\
\vec{E} = \frac{\Delta V}{\Delta x} \\
$$

where any deltas refer to differences between the two plates.

As the electric field strength is constant, the equipotential lines in the field are also evenly distributed.

## 5.2 - Heating effect of electric currents

!!! definition
    A **charge carrier** is any mass that enables charges to be moved over a potential difference.

Electric currents ($I$) are the flow of electrons due to a potential difference between both ends of a conductor. They are measured in **amperes** ($\text{A}$) which represent coulombs per second ($1\text{ A}=\frac{1\text{ C}}{1\text{ s}}$).
$$I=\frac{q}{t}$$

The current of each element in series is equal.
$$I_1=I_2=I_3$$

The current of each element in parallel adds up to the total current.
$$I_1+I_2+I_3$$

The **drift velocity** is the average velocity of electrons in a given volume.

<img src="/resources/images/drift-velocity.png" width=700>(Source: Kognity)</img>

As such, where $I$ is the current, $n$ is the number of electrons, $A$ is the cross-sectional area of the conductor, $q$ is the charge of one electron, and $v$ is the electron drift velocity:
$$I=nAvq$$
$$\Delta Q = nAv\Delta tq$$

In an electric circuit, electrons flow from the negative terminal to the positive terminal — however historically current was described as from the positive to the negative terminal and so that is known as **conventional current**, opposite the direction of electron flow. In a cell, the **longer side** is the positive terminal while the shorter is the negative terminal, unlike a typical AA battery.

The **electric power** transformed across a circuit is eqial to the potential difference across it and the current through it.
$$P=IV$$

### Resistance

Resistance ($R$) is inversely proportional to current with the unit of ohms ($\Omega$).
$$R=\frac{V}{I}$$

This can be rearranged to form Ohm's law:
$$V=IR$$

The **effective** resistance of a series of resistors in series is the sum of their resistances.
$$R_\text{eff}=\Sigma R$$

The **effective** resistance of a series of resistors in parallel is the inverse of the sum of the inverse of their resistances.
$$\frac{1}{R_\text{eff}}=\Sigma\frac{1}{R}$$

A **resistor** is a conductor that limits the current that can flow through it.

The **resistivity** ($\rho$) of a substance is its resistance per unit length with a unit cross-section with units $\pu{\Omega\cdot m}$. At a onstant temperature:
$$\rho=\frac{RA}{L}$$

The conductivity ($\sigma$) of a substance is the inverse of its resistivity.
$$\sigma=\frac{1}{\rho}$$

### Circuits

**Electromotive force** (emf, $\epsilon$) is not a force but is the voltage gained when charges pass through a cell, representing the total electric potential energy provided to the whole circuit.

All cells have **internal resistance**, which is the resistance of th cell itself. It is depicted as the resistance being in series with the electromotive force. Where $P$ is the power dissipated in the cell, $I$ is the current the cell produces, and the internal resistance of the cell $r$:
$$P=I^2r$$

The voltage across the terminals of a battery is equal to, where $I_r$ is the current across the internal resistance:
$$V_{AB}=\epsilon-I_r$$

The total voltage (emf) of a circuit can be found with Ohm's law:
$$\epsilon=I(R+r)$$

An **ammeter** measures the current of a load and must be in series with the load. Ideally it should have the lowest resistance possible.

A **voltmeter** measures the voltage of a load and must be in parallel with the load. Ideally it should have the greatest resistance possible. If the voltmeter and load have similar resistances to an order of magnitude or two, its resistance should be considered by treating it as a load in parallel to the load.

Kirchoff's **junction rule** states that the current entering a junction must be equal to the current exiting a junction.
$$I_\text{in}=I_\text{out}$$

Kirchoff's **loop rule** states that sum of the changes in potential around a closed circuit must equal zero.

A **potential divider** splits the voltage across a resistor anywhere from 0 V to emf by changing its resistance by either using 2+ resistors or by being a variable resistor.

**Light-dependent resistors** (LDRs) decrease their resistance as they are exposed to greater light intensities.

**Thermistors** decrease their resistance as they are exposed to greater temperatures.

### Ohmic resistors

An ohmic resistor (also known as an **ideal resistor** is one that follows Ohm's law at all voltages, and so results in a straight line on a V-I graph.

Non-ohmic resistors exist due to the heating effect from the electric current passing through the resistor changing its resistance.

<img src="/resources/images/filament-lamp-vi.png" width=700>(Source: Kognity)</img>

Non-ohmic resistors may be ohmic at a certain range of voltages.

## 6.1 - Circular motion

Circular motion is any motion along a circular path. The instantaneous velocity of an object in circular motion at any point is always tangent to its point on the circle, so the difference between any two velocities ($\Delta \vec{v}$) is radial (lies along the radius).

!!! definition
    - An object is in **uniform circular motion** when all instantaneous velocities are equal in magnitude or when all accelerations are equal in magnitude.
    - **Period** ($T$) represents the time required to complete one revolution ($360°$ or $2\pi$ radians).
    - **Frequency** ($f$) represents the revolutions per second represented in hertz ($\text{1 Hz=1 s}^{-1}$), and is the inverse of period.

!!! warning
    As velocity and acceleration are vectors, direction must be considered when manipulating them. This means that the **kinematic equations** cannot be used.

### Angular thingies

**Angular displacement** ($\Delta \theta$) is the change in angle an object has rotated relative to a reference position. By convention, angular displacement anti-clockwise is positive.

**Angular speed/velocity** ($\omega$) is the rate of angular displacement, and is expressed in radians per second. It is also known as angular frequency.
$$\omega=\frac{\Delta \theta}{\Delta t}=\frac{2\pi}{T}$$

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

All masses exert gravitational force on each other. The universal law of gravitation states that the gravitational force, $F_G$ between any two objects is attractive along the line joining them and equal to:
$$\vec{F}_G=G\frac{mM}{r^2}$$

where $G=6.67×10^{-11} \text{ N}\cdot\text{m}^2\cdot\text{kg}^{-2}$ is Newton's constant of universal gravitation, the **orbital radius** $r$ is the distance between the objects' **centre of mass**, and $m$ and $M$ are the masses of the objects acted on and acting, respectively. This indicates that the force on a given mass is proportional to its distance: $F_G \propto \frac{1}{r^2}$.

The net gravitational force acting on an object is equal to the resultant vector formed by components of each force acting on it.

### Gravitational fields

A **force field** is a model representing a region of space where a mass or charge experiences a **non-contact** force. Its units are newtons per kilogram (for mass) or newtons per coulomb (for charge). A gravitational field surrounds every mass and exerts a force equal to that given by Newton's law of gravitation, extending infinitely into space.

The **gravitational field strength** at any point in the field represents the force per unit of mass experienced by any mass—it is constant for any mass at the same distance $r$.
$$|\vec{g}|=G\frac{M}{r^2}$$

Its units also make it equivalent to the acceleration experienced by that mass. On Earth, $\vec{g}=9.81 \text{ N/kg [down]}$.
$$\vec{g}=\frac{\vec{F}_G}{m}$$

!!! note
    Only the distance between the centre of mass of the objects and the mass of the **body acting** on another affect gravitational field strength of the acting body.

<img src="/resources/images/grav-radial-lines.png" width=700>(Source: Kognity)</img>

Gravitational field lines equidistantly point radially to the centre of a mass to indicate strength—a greater density of field lines in a given area indicates greater strength.

### Orbital motion

In space, only gravity acts on **satellites**—objects that orbit around another object, effectively as if in constant free fall. As gravity is the only force, it is also the only force contributing to centripetal force.
$$\vec{F}_G=\Sigma\vec{F}_c$$

So the orbital speed of a satellite must be independent of its own mass, such that:
$$v=\sqrt{\frac{GM}{r}}$$

Additiionally, Kepler's third law, derived from centripetal force and the universal law of gravitation,  states that the square of the period of an orbit is proportioanl to the cube of the radius.
$$T^2 \propto r^3$$

A **geosynchronous** orbit is one that returns to its original position relative to the orbitee after one rotation of the orbitee.

A **geostationary** orbit is a geosynchronous orbit that always remains in the same position relative to the orbitee..


## Resources

 - [IB Physics Data Booklet](/resources/g11/ib-physics-data-booklet.pdf)
 - [IB SL Physics Syllabus](/resources/g11/ib-physics-syllabus.pdf)
 - [Dealing with Uncertainties](/resources/g11/physics-uncertainties.pdf)
 - [Linearising Data](/resources/g11/linearising-data.pdf)
 - [External: IB Physics Notes](https://ibphysics.org)
