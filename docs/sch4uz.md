# HL Chemistry - 2

The course code for this page is **SCH4UZ**.

## Thermal concepts

!!! definition
    - A **system** consists of reactants and products being studied, often represented as a chemical equation.
    - The **surroundings**/**environment** are all matter outside of the system capable of absorbing or releasing energy.

 - **Open** systems allow **energy and matter** to move in and out of the system.
 - **Closed** systems allow only **energy** to move in and out of the system.
 - **Isolated** systems do not allow energy or matter to move in and out of the system. This is an ideal but unrealistic scenario.

### Changes

As **breaking bonds requires energy** and **forming bonds releases energy**:

!!! definition
    - An **endothermic** reaction overall requires energy.
    - An **exothermic** reaction overall releases energy.

**Physical** changes such as state changes or dissolving substances may release or require energy depending on the energy of intermolecular bonds being broken and formed.

!!! example
    - Ice melting requires energy to break the stronger bonds in a solid.
    - Dissolving salt in water breaks the intermolecular bonds holding the salt together but regains it all by forming new bonds with the water.

**Chemical** changes all involve breaking old bonds to form new bonds. Depending on the energy required/released in breaking/forming those bonds, the reaction may end up endothermic or exothermic. Regardless, all reactions need a small initial **activation energy** to begin.

!!! info
    Acid-base reactions are always exothermic.

### Specific heat capacity

Please see [SL Physics 1#3.1 - Thermal concepts](/sph3u7/#31-thermal-concepts) for more information.

## Enthalpy

Represented as $H$ in joules, enthalpy represents the total energy in a system. Absolute enthalpy is not measurable, so change in enthalpy ($\Delta H$) is often used instead. The magnitude of enthalpy change is dependent on the type of change and quantity of substance that is changing.

A **negative** $\Delta H$ indicates that energy has left the system and so is an **exothermic** reaction.

In a balanced chemical equation, change in enthalpy is written to the right after the product.
$$
a + b \to c\ \ \Delta H = x\text{ kJ}
$$

!!! example
    Energy is required for the decomposition of water so its enthalpy is positive.
    $$\ce{H2O_{(l)} -> H2_{(g)} + 1/2 O2_{(g)}\ \ \Delta H = +280 kJ}$$

$\Delta H$ can also be included in a balanced thermochemical equation as a reactant or product instead of listed at the end. In this case, it is always positive and its sign determines whether it is a reactant or product.
$$
a + b + x\text{ kJ} \to c
$$

!!! example
    Using the same formula as in the previous example:
    $$\ce{H2O_{(l)} + 285.5 kJ -> H2_{(g)} + 1/2 O2_{(g)}}$$

### (Standard) Molar enthalpy of reaction

The **molar enthalpy of reaction** $\Delta H_x$ expresses the change in enthalpy when exactly one mole of the substance is involved in the reaction.

!!! example
    The molar enthalpy of combustion (also known as the **heat of combustion**) of ethanol is $\pu{-1367 kJ/mol}$, indicating that every one mole of ethanol combusted releases 1367 kilojoules of energy.  
    $\Delta H_\text{combustion} = \ce{-1367 kJ/mol C2H6O}$

The **standard molar enthalpy of reaction** $\Delta H^\theta_x$ is the molar enthalpy of reaction when initial and final conditions of the reaction are at standard atmospheric temperature and pressure (SATP, 25°C @ 100 kPA). Therefore, the activation energy, energy released/required during the reaction, and energy released/required following the reaction to return to SATP are all included.

!!! warning
    This includes energy required for some substances to change state, such as water vapour from combustion cooling to 25°C.

### Energy profiles

Also known as **reaction profiles**, energy profiles are a visual representation of the change in chemical potential energy of the system.

 - Absolute enthalpy ($H$) is placed on the y-axis while the reaction progress (time, sort of) is placed on the x-axis.
 - A horizontal line representing the enthalpy before the change is placed at the beginning labelled with the reactants.
 - A horizontal line representing the enthalpy after the change is placed at the end labelled with the products.
 - The change in enthalpy is labelled with an arrow in the direction of the change with its value if known.
 - A hump shows the reaction in progress (even exothermic reactions require some activation energy).

### Bond enthalpies

$\Delta H_B$, also known as **bond association energies**, the enthalpy of a bond type (e.g., $\ce{C-H}$) is the energy required to break **1 mol** of that bond type when the reactants and products are **gaseous** so energy is not lost from state changes. Compared of other methods of determining reaction enthalpy, this method is less accurate due to the other compounds affecting bond strength and thus enthalpy on a per-molecule basis.

The change in enthalpy of a reaction can be approximated by considering the bonds broken and formed:
$$\Delta H = \sum n\Delta H_B\text{reactants} - \sum n\Delta H_B\text{products}$$

## Calorimetry

!!! definition
    - A **calorimeter** measures changes in energy.

A basic calorimeter uses a lid and insulation to keep matter in and minimise energy changes with its surroundings. A thermometer is used to measure the temperature change of the water, and a stirrer is common to ensure accurate thermometer readings. The reactants are placed in water to react.

<img src="/resources/images/basic-calorimeter.png" width=700>(Source: Kognity)</img>

It is assumed that all the heat lost/gained by the reaction is gained/lost from the water.

$$-q_\ce{H2O}=\Delta H_\text{reaction}$$

In the event that reactants cannot be placed in water to react (e.g., combustion), a **bomb calorimeter** is used, which contains a metal sealed box submerged in the waterfilled with reactant and oxygen. A circuit leads into the box to start the reaction with a spark.

!!! warning
    Assumptions in calorimetry:
    
    - All energy released/absorbed from the system goes to/from the surroundings of the calorimeter (water). This usually needs to be corrected for in bomb calorimeters by measuring the heat capacity and mass of the metal box inside the calorimeter as well.
    - No energy is transferred outside the calorimeter — the insulation should work properly.
    - The calorimeter itself does not absorb or release energy — this is not a good assumption but can be compensated for.
    - A dilute aqueous solution is assumed to have the same density and specific heat capacity as water — this assumption is best when the solute is diluted close to 1 mol/L.

### Measuring calorimeters

Instead of recording the temperature of the calorimeter at any one point, a range of temperatures over time per trial should be plotted to obtain a curve. As calorimeters are not perfect and absorb/release energy, it will generate a graph that peaks and slowly returns to ambient temperature. To remedy this, the line returning the temperature to normal should be **linearly regressed** and extrapolated to the reaction start time to obtain a more accurate peak temperature.

## Hess's law

Hess's law asserts that the change in enthalpy works like displacement - so long as the products and reactants are the same, any reaction with any number of intermediate steps will result in the same change in enthalpy.
$$\Delta H = \sum \Delta H \text{ of intermediate reactions}$$

### Formation equations

A **formation equation** is a balanced chemical equation where exactly one mole of product and its reactants in **elemental form** are in their standard state — -gens are diatomic, phosphorus is $\ce{P4}$, sulfur is $\ce{S8}$, and at SATP (25°C, 100 kPa).

!!! info
    Fractions are permitted as coefficients on the reactant side to get exactly one mole of product.

!!! example
    $$\ce{6C_{(s)} + 6H2_{(g)} + 3O2_{(g)} -> C6H12O6}$$
    $$\ce{2C_{(s)} + 3/2 H2_{(g)} + 1/2 Cl2_{(g)} -> C2H3Cl_{(g)}}$$

The **standard enthalpy of formation** $\Delta H^\theta_f$ is the energy change from the formation of one mole of its substance from its elements in their standard states. It can be determined by subtracting the sum of the enthalpy of each element/compound on the reactant side and adding those on the product side.
$$\Delta H = \sum n\Delta H\text{ products} - \sum n\Delta H\text{ reactants}$$

!!! warning
    It is assumed that there is no state change that would affect enthalpy when calculating *standard* enthalpy of formation.

### Enthalpy cycles

Enthalpy cycles are a visual representation of Hess's law. It is used to show that the energy is the same from initial reactants to a product regardless of any intermediate steps.

!!! example
    $\Delta H_1 = \Delta H_2 + \Delta H_3$. Note that both arrows point to the intermediate product.
    <img src="/resources/images/enthalpy-cycles.png" width=700>(Source: Kognity)</img>

## Born-Haber cycles

!!! definition
    - The **standard enthalpy of atomisation** $\Delta H^\theta_{atm}$ is the energy required to change 1 mol of an element at SATP in its standard state to 1 mol of atoms of that element in its gaseous state.

To form an ionic compound from elements in their standard states:

 - the elements must be converted into gaseous atoms, (enthalpy of atomisation)
 - the atoms must lose or gain electrons to form ions, (electron affinity/ionisation energy)
 - and then the gaseous ions must bond to form an ionic compound.

The products should be listed on each level of a Born-Haber cycle, and relatively to-scale arrows should point in the direction of enthalpy change, where upwards increases enthalpy.

<img src="/resources/images/born-haber-simple.png" width=700>(Source: Kognity)</img>

Second ionisation energy may increase the peak enthalpy after it has lowered from first ionisation energy. In this case, unlike the below figure, the first and second ionisation energies can be combined into a single arrow representing the sum of both.

<img src="/resources/images/born-haber-ionisation.png" width=700>(Source: Kognity)</img>

### Lattice enthalpy

The lattice enthalpy of an ionic compound is the energy required to dissociate 1 mol of an ionic solid to its gaseous ions.

 - It decreases as ionic radius increases due to greater distance and charge separation
 - It increases as difference in charge increases because the greater charges are more strongly attracted
 - The above only apply if the other (ionic radius/charge) is the same or similar
 - Difference in charge has a much greater effect than ionic radius as it is multiplicative while the effect of increasing radius is additive

### Enthalpy of solution and hydration

The enthalpy of hydration is the enthalpy change when 1 mol of a gaseous ion is dissolved in water to make an infinitely dilute solution such that it is unaffected by attraction or repulsion from other ions.

!!! example
    The enthalpy of $\ce{Na+_{(g)} -> Na+_{(aq)}}$ is the enthalpy of hydration of $\ce{Na+}$.

The enthalpy of solution is the enthalpy change when 1 mol of a substance dissolves in water. It is equal to the sum of the enthalpy of hydration and lattice enthalpy.

$$\Delta H_{sol}=\Delta H_{hy} + \Delta H_{latt}$$

!!! example
    The enthalpy change of $\ce{NaCl_{(s)} -> Na+_{(aq)} + Cl-_{(aq)}}$ is the enthalpy of solution of $\ce{NaCl}$.

## Entropy

**Entropy**, $S$, is a measure of structural disorder in a system in $\pu{J/K/mol}$. Absolute enthalpy is always positive, similar to enthalpy. An increase in disorder results in more entropy which results in a greater chance that a system will be in a certain state.

A reaction that increases entropy can continue even in the absence of extra energy, which results in endothermic reactions.

Reactions that would increase entropy are **entropically favoured**, so entropy will work to make it happen.

The following changes increase entropy:

 - changes in state of one substance to a more disordered state, i.e., solid → liquid → gas,
 - mixing particles of different types, e.g., solid to aqueous,
 - increasing the number of moles of total gas or decreasing the number of moles of a solid,
 - and increasing the number of moles of gas on the product side compared to the reactant side, which has the greatest effect.

### Spontaneity

The **spontaneity** of a reaction is its tendency to continue without extra energy input after its initial activation energy.

Gibbs free energy or **standard free energy** ($\Delta G$/$\Delta G^\theta$, $\pu{kJ}$ or $\pu{kJ/mol}$) is a measure of the sponetaneity of a chemical change. Spontaneous reactions must have a negative $\Delta G$, while those that are positive will require more energy to continue.
$$\Delta G^\theta = \Delta H^\theta - T\Delta S^\theta$$

## Chemical kinetics

The **rate of a reaction** is the change of reactant to product per unit of time. The following are all viable methods of measuring rate of reaction:

 - change in gas volume via gas collection,
 - change in mass,
 - change in light absorption,
 - titration,
 - and change in conductivity.

In an ideal gas, the kinetic energy of particles is spread in a **Maxwell-Boltzmann distribution**, where the total area under the curve is equal to the total number of particles in the sample.

<img src="/resources/images/maxwell-boltzmann.png" width=700>(Source: Kognity)</img>

As temperature increases, the distribution's total area *does not change* but the overall spread moves to the right as more particles have higher kinetic energies.

<img src="/resources/images/mbdist-temperature.png" width=700>(Source: Kognity)</img>

### Collision theory

Collision theory states that for a chemical reaction to take place between two particles:

 - they must collide,
 - they must have proper **collision geometry** or **collision orientation** — similar to viruses bumping into cells, the "keys" must hit "locks" — in this case usually they must strike the bond,
 - they must collide with enough energy to break the initial bond.

If all of these conditions are met, the collision is an **effective collision** — a collision that results in a chemical reaction.

The rate of a reaction increases with:

 - the frequency of collisions,
 - and the proportion of collisions that are effective collisions

Over time, the rate generally decreases because initially the highest concentration of reactants results in the highest collision frequency, which goes down as reactants are consumed. The proportion of effective collisions will also decrease as reactants also collide with product. Eventually, the reaction will stop or be so slow it appears to have stopped.

<img src="/resources/images/change-of-rate-over-time.jpg" width=700>(Source: Kognity)</img>

The following factors affect the rate of reaction:

 - **Surface area/particle size of a solid:** as only particles on the surface of a solid can be collided with, smaller solid particles have greater surface area where more collisions can happen, leading to greater collision frequency.
 - **Concentration/pressure of reactant**: A greater concentration leads to more reactant particles to collide in a given volume, increasing collision frequency.
 - **Temperature**:
    - Increasing temperature increases reactant particles' kinetic energy, increasing collision frequency,
    - however it primarily increases the chance of particles having sufficient activation when they do collide, changing the proportion of effective collisions.

### Activation energy

Because electron clouds repel reach other, without extra energy, particles would not get close enough to break bonds. This energy required for particles to become closer is known as the **activation energy** of a reaction. All chemical reactions have an activation energy requirement.

### Catalysts

A catalyst is a substance that increases the rate of a reaction without being consumed. Not all reactions have catalysts, and increasing catalyst quantity does not necessarily always increase the rate of reaction.

Catalysts operate by reducing the activation energy needed by creating an **alternative reaction pathway** with a lower activation energy, so a larger proportion of particles are able to reach that lower energy requirement.

<img src="/resources/images/catalyst-energy.png" width=700>(Source: Kognity)</img>

Visualised with a Maxwell-Boltzmann distribution:

<img src="/resources/images/mbdist-catalyst.png" width=700>(Source: Kognity)</img>

Catalysts can also improve the chances of correct collision geometry by encouraging certain orientations.

## Rates of reaction

The **law of mass action** states that the rate of any reaction is directly proportional to the product of each reactant **concentration**. For a reaction of the form $\ce{aA + bB -> products}$, the rate law holds that:

$$r=k[A]^a [B]^b$$

where $k$ is the **rate constant**, an empirically determined value that is only valid for one reaction at one temperature. Its units are equal to whatever balances out the equation — where $n$ is the order of reaction, it is equal to $\ce{dm^{3(n-1)}} / \pu{mol}^{n-1} / \pu{s}$.

!!! warning
    Solids and liquids have constant concentrations, so their factor is incorporated as part of $k$ and **not included** as a separate factor (e.g., not as $[C]^c$).

The **individual order of reaction** is the value of the exponent of a specific reactant in the rate law. It must be a real positive number.

!!! example
    The individual order of the reaction with respect to $A$ is $a$, and the order of reaction is $a+b$.

To determine the individual order of reaction of a reactant, two identical experiments with equal quantities of the **other** reactants are needed. Where $c$ is the concentration of the reactant between the two trials, $r$ is the rate, and $n$ is the individual order of that reactant:

$$\biggr(\frac{c_2}{c_1}\biggr)^n = \frac{r_2}{r_1}$$

!!! example
    For the following data, changing the concentration of $\ce{OCl-}$ by a factor of 3 causes a rate change by a factor of 9, therefore the individual order of $\ce{OCl-}$ is 2.
    
    | Initial $\ce{[OCl-]}$ | Initial $\ce{[I-]}$ | Initial rate |
    | --- | --- | --- |
    | $1.0\times10^{-3}$ | $4.0\times10^{-3}$ | $1.0\times10^{-3}$ |
    | $3.0\times10^{-3}$ | $4.0\times10^{-3}$ | $9.0\times10^{-3}$ |

### Integrated rate laws

Throughout the course of one trial of one reaction, a **concentration-time graph** can be used to find details about its rate. Where concentration is the concentration of the reactant in question over time:

<img src="/resources/images/concentration-time.png" width=700>(Source: Kognity)</img>

A reactant with an individual order of

 - **zero** shows a negative linear line, and $k=-\text{slope}$.
 - **one** shows exponential decay, and $k=-\text{slope}$ of a graph of $\ln(\text{concentration})$ against time, which should be linear.
 - **two** shows a *deeper* exponential decay, and $k=\text{slope}$ of a graph of $\frac{1}{\text{concentration}}$ against time, which should be linear.

Additionally, a **concentration-rate graph** can be used.

<img src="/resources/images/concentration-rate.png" width=700>(Source: Kognity)</img>

A reactant with an individual order of

 - **zero** shows a horizontal line.
 - **one** shows a positive linear line that passes through the origin.
 - **two** shows the right side of a positive quadratic that passes through the origin.

### Half-life

The half-life ($t_{1/2}$) of a reaction represents the time required for half of the sample to be used.

In the context of radiation, it is the time for half of the nuclei in a radioactive sample to decay.

In a **zero-order** reaction, each half-life is half of the previous.

In a **first-order** reaction, it is constant regardless of concentration, and can the concentration can be expressed with an equation, where $[A]$ is the concentration of a wanted substance, $k$ is the rate constant, and $[A_0]$ is the initial concentration.

$$\ln[A]=\ln[A_0]-kt_{1/2}$$

In a **second-order** reaction, each half-life is double the previous.

### Reaction mechanisms

!!! definition
    - A **multi-step reaction** consists of more than one reaction as intermediate steps.
    - An **elementary step** is the basic step of a multi-step reaction, usually involving one or two molecules but never more than three.
    - A **reactant** is present initially but not at the end of a reaction unless in excess.
    - A **product** is not present initially but appears at the end of a reaction.
    - A **catalyst** is present both at the start and end of a reaction. It may be consumed and regenerated in intermediate steps.
    - A **reaction intermediate** is not present at the start or end of a reaction as it is generated and consumed in the intermediate steps.
    - The **molecularity** of a reaction represents the number of molecules that react in an elementary reaction from uni- to termolecular.
    - An **activated complex** or **transition state** is the point where new bonds are being formed at the same time bonds are being broken.

A reaction involving any more than three particles will always take place under **multiple steps** because of the near-impossibility of such a perfect collision. Even reactions with three particles are often **multi-step**.

The **reaction mechanism** is the step-by-step sequence of all elementary steps of a reaction. An elementary step that is repeated consecutively should be surrounded with square brackets and a coefficient.

!!! example
    $$\ce{2\times\big[HOBr + HBr -> Br2 + H2O\big]}$$

!!! example
    The reaction $\ce{NO2_{(g)} + CO_{(g)} -> NO_{(g)} + CO2_{(g)}}$ has a theoretical reaction mechanism of:
    $$
    \begin{align*}
    \ce{
    NO2_{(g)} + NO2_{(g)} &-> NO3_{(g)} + NO_{(g)} \\
    NO3_{(g)} + CO_{(g)} &-> NO2_{(g)} + CO2_{(g)}
    }
    \end{align*}
    $$
    $\ce{NO3_{(g)}}$ is a reaction intermediate.

Multi-step reactions will have a **rate-determining step**, which is the slowest step and so is responsible for the rate law of the reaction, acting as a bottleneck. If reaction intermediates are present, the **original** reactants or catalysts that form that intermediate are still used in the rate law.

!!! example
    The reaction $\ce{H2_{(g)} + Q2_{(g)} + 2Z2_{(g)} -> 2HZ_{(g)} + 2QZ_{(g)}}$ has the following reaction mechanism:
    $$
    \begin{align*}
    \ce{
    H2_{(g)} + Q2_{(g)} &-> 2HQ_{(g)} \\
    2\times\big[HQ_{(g)} + Z2_{(g)} &-> HZ_{(g)} + QZ_{(g)}\big]\ \text{ (slow)}
    }
    \end{align*}
    $$
    As normally for this reaction $\ce{r=k[HQ][Z2]}$, because $\ce{HQ}$ is a reaction intermediate, it is instead $\ce{r=k[H2][Q2][Z2]}$ after substituting in the first step, **ignoring product coefficients**.

Often, the step with the highest activation energy is the slowest because of collision theory. Alternatively, the one with the least favourable collision geometry, such as if there are more particles that have to collide, may be the slowest.

If a reactant doesn't appear in the rate-limiting step (including via intermediates), changing its concentration will not affect the rate of reaction and so it will have an individual order of 0 in the final rate law.

A reaction mechanism is only plausible if:

 - each elementary reaction has **three** or less reactant particles,
 - the rate-determining step is consistent with the rate law provided, and
 - the elementary steps add up to the overall equation.

### Arrhenius equation

The Arrhenius equation relates the temperature to the rate of a reaction.

Where:

 - $k$ is the rate constant,
 - $R$ is the ideal gas constant,
 - $E_a$ is the activation energy for the reaction,
 - $A$ is the proportionality/Arrhenius constant for the reaction,
 - and $e$ is Euler's number

$$k=Ae^\frac{-E_a}{RT}$$

Graphing $\ln k$ against $\frac{1}{T}$ forms the linear relation:
$$\ln k = \frac{-E_a}{R}\frac{1}{T}+\ln A$$

where the slope of the graph is $\frac{-E_a}{R}$ and the y-intercept is $\ln A$.

The number of moles of gas particles that are above the activation energy threshold is expressed in the second term of the equation: $e^\frac{-E_a}{RT}$.

## Equilibrium

!!! definition
    - A reaction is at **dynamic equilibrium** if both the forward and reverse reaction continue at **equal and constant** rates, and there are no **macroscopic** changes such as temperature, colour, mass, or concentration.

A chemical equation at equilibrium is represented with two single-headed arrows, indicating that a reaction has proceeded to the point that concentrations are constant, and rates are equal and constant.
$$\ce{A + B <=> C}$$

<img src="/resources/images/equilibrium-rate.png" width=700>(Source: Kognity)</img>

In order for a system to eventually tend to equilibrium, the system must:

 - be closed, with constant concentrations of reactant and product,
 - maintain a constant temperature, and
 - maintain a constant pressure if the reactant or product is a gas.

For a given reaction, as long as the reactants and products are stoichiometrically matched, any combination will tend to the same equilibrium.

!!! example
    The following initital concentrations for the reaction $\ce{C + O2 -> CO2}$ will all tend to the same equilibrium.
    
    - 2 mol $\ce{C}$ and 2 mol $\ce{O2}$
    - 2 mol $\ce{CO2}$
    - 1 mol $\ce{C}$, 1 mol $\ce{O2}$, and 1 mol $\ce{CO2}$

At equilibrium, the concentrations of the reactants and products must end up constant (but **not necessarily equal**).

!!! example
    <img src="/resources/images/equilibrium-concentration.jpeg" width=700>(Source: Kognity)</img>

**Phase equilibrium** is when two or more states of exactly one pure substance are in dynamic equilibrium.

!!! warning
    A solution or an aqueous compound cannot be in phase equilibrium because it is not a pure substance.

!!! example
    Water constantly evaporates and condenses. Because the rate of evaporation is only dependent on the surface area of the water, the rate of condensation increases until the two are equal and constant at phase equilibrium.

A **solubility equilibrium** requires at least two substances — a solute and a solvent.

### Equilibrium constant

!!! definition
    - The **position of equilibrium** is the concentration of reactants and products at dynamic equilibrium.

The equilibrium constant $K_c$ or $K_eq$ is related to the concentration of reactants and products in a given system at equilibrium at a given temperature. It is equal to the product of all products divided by the product of all reactants.
$$
\ce{aA + bB + cC <=> fF + gG + hH} \\
\begin{align*}
K_c &= \ce{\frac{[F]^f [G]^g [H]^h}{[A]^a [B]^b [C]^c}} \\
&= \frac{\Pi[\text{products}]^p}{\Pi[\text{reactants}]^r}
\end{align*}
$$

The units of $K_c$ varies similar to the rate constant so they are often omitted.

!!! warning
    Only concentrations that change during the course of the reaction should appear in $K_c$, so solids and liquid water should not be included. 

If $K_c$ is greater than 1000, the reaction is **product-favoured**, meaning that there will be a greater concentration of products at equilibrium. If $K_c$ is less than 0.001, the reaction is **reactant-favoured**.

Contrary to the house of cards of lies told to you in lower grades, all reactions are equilibrium reactions, but some have $K_c$s that are so large or small that they effectively occur to completion or don't occur at all.

#### ICE tables

An initial-change-equilibrium (ICE) table is used to work with equilibrium concentrations and **only contains concentrations**.

It consists of:

 - the original concentrations of each compound in the "initial" row,
 - the change in concentration in the form of a variable of each compound after one "iteration" of the reaction in the "change" row, and
 - the end equilibrium concentration of each compound in the "equilibrium" row. The "initial" and "change" rows should sum to the "equilibrium" row.

!!! example
    An ICE table with 1 mole each of $\ce{H2}$ and $\ce{I2}$ in $\pu{2.00 dm3}$ of water that eventually ends up with an equilibrium concentration of $\ce{[H2]}=\pu{0.11 mol/dm3}$ will form the following ICE table.
    
    | | $\ce{H2_{(g)}}$ | $\ce{I2_{(g)}}$ | $\ce{2HI_{(g)}}$ |
    | --- | --- | --- | --- |
    | Initial | 0.50 | 0.50 | 0 |
    | Change | $-y$ | $-y$ | $+2y$ |
    | Equilibrium | 0.11 | 0.50$-y$ | $+2y$ |

When working with values involving $K_c$, if the initial concentration of a chemical is much bigger than $K_c$ ($[A]/K_c > 500$), it is possible to assume that it will not change at all.

This assumption is valid if the impact of the calculated shift is less than 5%.

!!! example
    If the equilibrium concenration is equal to $0.250-2y$, and the initial concentration is very big, assume that the equilibrium concentration is $0.250$, removing the $-2y$ from the equation.
    
    As long as $2y$ is less than 5% of 0.250, the assumption is valid.

!!! info
    In this course, when working with $K_c$ and ICE tables, only three things should be possible when solving for concentrations: you can get a perfect square, you can use the quadratic equation, or you can use the approximation rule.

### Le Chatelier's principle

Le Chatelier's principle states that: If there is a change in a system at equilibrium, the position of equilibrium will readjust to minimise the effect of the change.

The changes that this principle affects — and therefore affect equilibrium — include changes in temperature, concentration, and pressure. These changes are assumed to occur instantaneously, which may result in sudden theoretical spikes in concentration-time graphs.

The initial rate of the change will start **fast** and then slow down, appearing as a sharp change instead into a curve in a concentration-time/reaction progress graph that **never return to its original value**.

!!! tip
    Drawing horizontal dotted lines that represent the original position of equilibrium and vertical lines to represent the moment of system change makes it clearer to read.

Increasing the **temperature** of a system causes it to shift in favour of the **endothermic** side, and vice versa. 

Of the three changes, this is the only one that would change $K_c$ as it changes the rate constants, which are temperature-specific ($K_c\propto\frac{r_\text{reverse}}{r_\text{forward}}$). Therefore, as temperature **increases**, $K_c$ also **increases**, and vice versa.

!!! example
    If heat is added to a solution of KCl, more KCl will dissolve to minimise the change in temperature as it is an endothermic process.

Increasing the **concentration** of a reactant or product will cause the position to shift **away** from the increased side, and vice versa.

??? example
    If there is an **instantaneous** spike of $\ce{N2}$ to a system at equilibrium, it will be consumed along with $\ce{H2}$ to form $\ce{NH3}$, **but not enough to return to its original value**.
    
    <img src="/resources/images/equilibrium-concentration.png" width=500>(Source: Kognity)</img>
    
    The same applies if instead $\ce{NH3}$ is reduced.
    
    <img src="/resources/images/equilibrium-concentration-2.png" width=500>(Source: Kognity)</img>

Increasing the **pressure** of a gas will cause the position to shift in whatever direction would **decrease** the total moles of gas.

!!! warning
    Inert (uninvolved in a reaction) gases such as catalysts will not affect the position of equilibrium as it does not affect the **partial pressure** of the gas. In a similar vein, adding water to an aqueous solution will not cause any changes in equilibrium position.

!!! warning
    If given a system not at equilibrium, if a change is made that would change the prior equilibrium, it should be assumed that the system reaches equilibrium before the change is made, regardless if it is specified.

### Gibbs free energy 2

The value of Gibbs free energy changes as the reaction progresses, similar to enthalpy. At equilibrium, $\Delta G=0$, so a reaction is a result of a system attempting to minimise Gibbs free energy.

**Standard Gibbs free energy** represents the Gibbs free energy of a chemical at standard state (1 mol/L for solutions, 100 kPa partial pressure for gases).
$$\Delta G^\circ = \sum n\Delta G^\circ_\text{f products} - \sum n\Delta G^\circ_\text{f reactants}$$

A negative $\Delta G^\circ$ indicates that the reaction will shift right to reach equilibrium as $\Delta G^\circ$ always decreases in **magnitude** as the reaction proceeds. It also means that the forward reaction is **spontaneous** while the backwards is not.

### Reaction quotient

The reaction quotient ($Q$) is a tool to compare the current state of a system to its equilibrium state.
$$Q=\frac{\Pi[\text{products currently}]^p}{\Pi[\text{reactants currently}]^r}$$

At equilibrium, $Q=K_c$ as they are the same equation, so the equilibrium will shift in whatever direction that would bring $Q$ closer to $K_c$

!!! example
    If $Q > K_c$, there are more products than reactants than at equilibrium, so the reaction will shift to make more **reactants**.

### Dynamic equilibrium

When $\Delta G$ is at a minimum, both sides of the reaction are equally spontaneous. Realistically, $\Delta G$ never reaches zero because entropy. TODO: wtf

<img src="/resources/images/product-favoured-gibbs.png" width=700>(Source: Kognity)</img>

Where $\Delta G$ is the Gibbs free energy at a given point of the reaction, $R$ is the gas constant, $T$ is the current temperature, and $Q$ is the reactant quotient:
$$\Delta G = \Delta G^\circ + RT\ln Q$$

Therefore, at equilibrium:
$\Delta G = -RT\ln K_c$

## Acids and bases

!!! definition
    - An **amphoteric** chemical may act as an acid or base depending on the situation.
    - An **amphiprotic** chemical can **either accept or donate** $\ce{H+}$ depending on the situation.
    - A **monoprotic** acid/base is one that can only accept/ionise one $\ce{H+}$ ion.
    - An **alkali/alkaline** solution is an aqueous solution of a base, which may **not** necessarily be a **basic solution**.

An **acid** and **base** are any two corrosive chemicals that react to form water and a salt. They also dissociate/ionise (depending on theory) in water to form electrolytes that conduct electricity.

Acids:

 - taste sour
 - have a pH less than 7 in aqueous solutions at 25°C
 - stain litmus paper **red**
 - react with active metals to produce $\ce{H2_{(g)}}$ based on the activity series
 - react with carbonates to form $\ce{CO2 + H2O}$

Bases:

 - taste bitter
 - have a pH greater than 7 in aqueous solutions at 25°C
 - feel slippery as they react with fats/oils to form soap
 - stain litmus paper **blue**
 - react with ammonium salts to product $\ce{NH3 + H2O}$

### Arrhenius theory

An acid **dissociates** in water to produce $\ce{H+}$ ions (protons).

A base **dissociates** in water to produce $\ce{OH-}$ ions.

### Bronsted-Lowry theory

The Bronsted-Lowry theory focuses on reactions with water and less the acid and base ions themselves, so they **ionise** instead of **dissociate**.

An acid is any compound that can **donate/ionise a proton ($\ce{H+}$) to water** to form a hydronium ion.
$$\ce{acid + H2O -> acid- + H3O+}$$

!!! info
    In practice, the acid must contain a hydrogen atom attached by an easy-to-break bond (usually $\ce{H-O}$), but any high electronegativity difference polar bond would work as well.

A base is any compound capable of **accepting/removing a proton ($\ce{H+}$) from an acid**.
$$\ce{acid + base -> acid- + base+}$$

!!! info
    The proton usually comes from water. The base must be able to accept an $\ce{H+}$ ion to form a **dative covalent bond**, so they must contain **lone pairs**.

Polyprotic acids ionise their $\ce{H+}$s one by one **sequentially**.

!!! example
    $\ce{
    H3PO4 + H2O <=> H2PO4- + H3O+ \\
    H2PO4- + H2O <=> HPO4^2- + H3O+ \\
    HPO4^2- + H2O <=> PO4^3- + H3O+
    }$
    
#### Conjugate acids/bases

The result of a base obtaining a proton is a **conjugate acid**.

The result of an acid losing a proton is a **conjugate base**.

!!! example
    In the reaction
    $$\ce{NH3 + H2O -> NH4+ + OH-}$$
    
    $\ce{NH3}$ is a base that becomes a conjugate acid while $\ce{H2O}$ is an acid that becomes a conjugate base.

### Louis theory

A Lewis **acid** is any species that **accepts** an electron pair to form a dative covalent bond.

A Lewis **base** is any species that **donates** an electron pair to form a dative covalent bond.

### Strong/weak acids/bases

**Strong** acids/bases will **completely** dissociate/ionise in an aqueous solution. This means that the initial concentration of acid will be equal to the end concentration of $\ce{H+ or H3O+}$.

All strong polyprotic acids initially have a one-way reaction then follow with equilibrium reactions.

!!! warning
    Strength is a property of an acid and has nothing to do with its concentration.

**Weak** acids/bases will only **partially** dissociate/ionise in an aqueous solution, leaving behind most of the initial acid ($\ce{[acid] > [H+]}$ at equilibrium).

!!! warning
    Measuring pH only returns $\ce{[H+] or [H3O+]}$, so it cannot be used to determine the concentration, identity, or strength of an acid.

All weak polyprotic acid reactions are equilibrium reactions.

!!! example
    The following is a list of strong and weak acids:
    
    | Strong acid | Weak acid | Strong base | Weak base |
    | --- | --- | --- | --- |
    | $\ce{HClO4}$ | any $\ce{COOH}$ | $\ce{LiOH}$ | $\ce{NH3}$ |
    | $\ce{HCl}$ | $\ce{CO2}$ | any $\ce{group\ 1 + OH}$ | $\ce{Al(OH)3}$ |
    | $\ce{HBr}$ | $\ce{SO2}$ | any $\ce{group\ 2 + (OH)2}$ | |
    | $\ce{HI}$ | $\ce{HF}$ | | |
    | $\ce{H2SO4}$ | $\ce{HCN}$ | | |
    | $\ce{HNO3}$ | $\ce{H3PO4}$ | | |

To experimentally distinguish between a strong or weak acid/base, if their concentrations are equal, total **ion** concentration or $\ce{H3O+}$ concentration can be compared since the stronger acid ionises more.

Practically, this means comparing the rate of reaction with a metal or water or measuring conductivity as they reflect total ion count.

### pH and pOH

This section will assume Bronsted-Lowry theory.

pH represents $\ce{[H3O+]}$ logarithmically on a scale from 0 to 14.

$$
\ce{pH = -\log\big[H3O+_{(aq)}\big]} \\
\ce{pOH = -\log\big[OH-_{(aq)}\big]}
$$

!!! warning
    The number of sigfigs in pH is equal to the number of digits **after the decimal place**.

A solution is **neutral** (neither acidic nor basic) when $\ce{[H3O+] = [OH-]}$. This happens to be $\ce{pH = 7}$ at SATP. In pure water, this is true as a small number of water molecules react with each other.

In an equilibrium reaction between an acid and a base, $\ce{K_c = \frac{[H3O+][OH-]}{[H2O]}}$, but water has a constant concentration, so the equilibrium of the two ions is represented with the **water ionisation constant** $K_w$ is used.
$$K_w = \ce{[H3O+][OH-] = 1.00\times10^{-14} @ SATP}$$

As temperature **increases**, $K_w$ increases, therefore changing the pH of neutrality, but this may not necessarily change the acidity of the solution as the ion concentration is still the same.

As pH increases, $\ce{[H3O+]}$ decreases, so $\ce{[OH-]}$ must increase to keep $K_w$ constant and maintain equilibrium.
$$\ce{pK_w = pH + pOH}$$

At 25°C, $\ce{pK_w = 14.0000}$, so:
$$\ce{14 = pH + pOH}$$

### Acid/base dissociation

An equilibrium will be reached when a weak acid or base dissociates/ionises in water. The extent that the acid or base has dissociated/ionised can be quantified with **percent dissociation/ionisation**.
$$\text{% ionisation} = \frac{\text{[acid ionised]}}{\text{[original acid]}}\times 100\%$$

!!! note
    When performing an approximation assumption in an ICE table, the assumption is also valid if the % ionisation is less than 5%.

The $K_c$ of acid ionisation/dissociation is known as $K_a$, the **acid dissociation constant**.
$$
\ce{H2O_{(l)} + HX_{(aq)} <=> H3O+_{(aq)} + X-_{(aq)}}$$
$$K_a = \ce{\frac{[X-][H3O+]}{[HX]}}$$

The $K_c$ of base ionisation/dissociation is known as $K_b$, the **base dissociation constant**.
$$\ce{H2O_{(l)} + X_{(aq)} <=> OH-_{(aq)} + HX+_{(aq)}}$$
$$K_b = \ce{\frac{[HX+][OH-]}{[X]}}$$

!!! example
    $$\ce{NH3_{(aq)} + H2O_{(l)} <=> NH4+_{(aq)} + OH-_{(aq)}}$$
    $$K_b = \ce{\frac{[NH4+] [OH-]}{[NH3]}}$$

!!! warning
    $K_a$ and $K_b$ only apply to acids and bases, respectively. Morphine, a base, does not have a $K_a$, but its conjugate acid does.

At all temperatures:
$$K_a \times K_b = K_w$$
$$pK_a + pK_b = pK_w$$

### Acid strength

A **higher** $K_a$ or $K_b$ indicates that the acid or base is **stronger**, increasing percent ionisation. 

**Strong acids/bases** have an effectively infinite $K_a$/$K_b$ in water, so they are all practically equally strong in water (this may not be true in other solvents).

As $K_a$ and $K_b$ are inversely correlated, an **increase** in $K_a$ leads to a **decrease** in $K_b$.

The conjugate acid/base of a **strong** acid/base is effectively infinitely weak such that it does not affect pH at all.

Contrarily, the conjugate of a **weak** acid/base is measurably weak, strong enough to have $K_a$/$K_b$ that affect the pH and act as an acid or base.

As $p$ indicates negative log, $\ce{pK_{\{a, b\}}}$ is **inversely** correlated with $\ce{K_{\{a, b\}}}$ so that none of the variables can be directly compared without conversion.

### Acidity of salt solutions

!!! definition
    - A **salt** is an ionic compound that dissociates in water.

The pH of a salt solution depends on the combination of the acidity of each of its dissociated ions. Whichever is **stronger** pushes the acidity of a solution in its direction.

An ion originating from a **strong** acid/base is immeasurably weak and **has no effect**.

An ion originating from a **weak** acid/base is measurably weak and **has an effect**.

!!! example
    For the salt NaCl: $\ce{HCl_{(aq)} + NaOH_{(aq)} -> H2O_{(l)} + NaCl_{(aq)}}$  
    As both $\ce{HCl}$ and $\ce{NaOH}$ are strong, their conjugate acids/bases are both immeasurably weak, having no effect on the pH of the solution. Therefore, NaCl is a **neutral** salt.

If both dissociated ions have a measurable effect, the acidity depends on whichever is stronger via $K_a$/$K_b$.

### Titration curves

!!! definition
    - A **titrant** or **standard** is a solution with known properties that goes in the burette.
    - A **sample** or **analyte** is a solution with potentially unknown properties that goes in the sample flask.
    - The **equivalence point** of a titration is the point at which the solution is neutral $\ce{[H+] = [OH-]}$.

A **titration curve** is generated in a titration where the pH of the solution is graphed against the volume of titrant added. Depending on the type or strength of the sample and titrant, different graphs can be generated.

Unlike the diagrams below, in a sketch, the following information is needed:

 - the initial pH of the solution (the pH of the sample)
 - the pH after a lot of titrant is added (assumed to be the pH of the titrant)
 - the volume of titrant required to neutralise the sample ($c_\ce{H}v_\ce{H}=c_\ce{OH}v_\ce{OH}$)
 - the relative pH at the equivalence point (the relative pH of the salt solution)

The graph can be split into two halves: the acid half and the base half. In the following diagram, both the acid and base are **strong**, so their lines are identically shaped:

 - the line starts at the initial pH, hugging the line, until,
 - it sharply curves to the vertical, crossing the equivalence point, and
 - continues vertically.

The same applies to the base but it instead ends at the final pH.

<img src="/resources/images/s-s-titration.png" width=700>(Source: Kognity)</img>

In scenarios where the **sample** is a **weak** acid/base, instead:

 - the line immediately briefly rapidly rises from the initial pH, then
 - gradually increases, until
 - a sudden curve to the vertical (but less sudden than a strong acid/base), and
 - continues vertically.

<img src="/resources/images/w-s-titration.png" width=700>(Source: Kognity)</img>

In scenarios where the **titrant** is a **weak** acid/base, it will take much more titrant to bring the pH of the sample to the level of the titrant. As such, the "brief rapid rise" is ignored and the line only gradually approaches but **clearly does not reach** the final pH.

<img src="/resources/images/s-w-titration.png" width=700>(Source: Kognity)</img>

In scenarios where the sample is a **polyprotic** acid/base, as its ions dissociate sequentially, it can be treated as multiple consecutive titrations where the first sample is **strong** but any subsequent titrations are **weak**.

Each equivalent point volume after the first is a direct multiple of that first equivalent point volume.

<img src="/resources/images/polyprotic-titration.png" width=700>(Source: Kognity)</img>

### Titration curve analysis

The **aha!** equation, also known as the Henderson-Hasselbach equation, is derived from the equilibrium equation.

$$\ce{pH = pK_a + \log\frac{[A-]}{[HA]}}$$

To graphically determine the $pK_a$ of a sample given a titration curve, the pH at the volume at **half** of the equivalence point can be identified. At that point, $pH = pK_a$.

!!! warning
    - If a weak **base** is the sample, this will return the $pK_a$ of the conjugate acid. The pH of the base can be determined by $14-pK_a$.
    - If numbers are not given, drawing a line through the straight bits can give pH and equivalence volume values. However, **none** of these lines should be **parallel** to the axes.
    - In titrations involving **polyprotic** compounds, as they are effectively multiple titrations, half of the equivalence point is actually half the distance between two equivalence points.
    - This equation can **also be used to determine the pH of a buffer between a salt/acid and acid/base** as it can be assumed that there is no change to concentrations, but **cannot be used to determine the initial pH between an acid/base and water**.

### pH indicators

A pH indicator is a **weak acid/base** that is at one colour in a certain pH range and another in another pH range. Where $X$ is the indicator, it will form an equilibrium with the hydrogen ions in the solution:
$$\ce{HX <=> H+ + X-}$$

The indicator is **protonated** on the left and **deprotonated** on the right. The titrant can be viewed as an external stress on this equilibrium: if a base is added to an acid, the equilibrium will shift to the right to free up hydrogen ions, and vice versa.

If the difference in concentration of $\ce{X-}$ and $\ce{HX}$ is **greater than** approximately 10:1, the solution will appear to be the colour of the higher concentration, meaning that pH indicators will change colour at a pH in the range of their $\ce{pK_a}\pm 1$.

In choosing a good pH indicator, it must change colour in the **vertical** section of the titration curve to see the greatest effect, and it must be easily observable.

As the weak curve has less of a vertical section than a strong curve, it is best to pick an indicator that changes **after** the equivalence point, which will require the **relative pH** at the equivalence point.

The observability of an indicator depends on the colour it is changing to (or the **direction** the pH is changing). In general, humans are much better at noticing the **appearance** of **red** and **blue**.

A **universal indicator** is a mixture of different pH indicators to change colours multiple times over the pH range. In this case, the colour wheel can used to determine the colour that will be formed (e.g., blue + blue + yellow = green). The shade of the colour does not matter.

### Buffers

!!! definition
    - A **buffer solution** is one that can resist pH change when small quantities of a strong acid or base are added.
    - An **acidic buffer** is one where an acid and extra of its conjugate base as a salt are present in the solution.
    - A **basic buffer** is one where a base and extra of its conjugate acid as a salt are present in the solution.
    - A **protonated** compound contains its proton.
    - A **deprotonated** compound has lost its proton.
    - The **buffering capacity** of a buffer is the quantity of strong titrant that can be added to the buffer without a significant change in pH.

The **buffer region** is the pH range of a **weak** acid/base before the equivalence point that requires a large volume of titrant for a gradual pH change. In this region, there is sufficient undissociated acid/base to replenish those neutralised via Le Chatelier's principle.

In the equilibrium between a weak acid and its component ions:
$$\ce{HA <=> H+ + A-}$$

A buffer solution is created when **excess** $\ce{A-}$ is added (the salt of the conjugate base) such that the position of equilibrium is shifted to the left to the point that **none of the original acid has dissociated** such that $\ce{[equilibrium HA] = [added HA]}$ and $\ce{[equilibrium A-] = [added A-]}$. It is used to **maintain** a certain pH in a solution.

When the titrant is added to an **acidic buffer**:

 - if an acid is added, $\ce{[H+]}$ increases, shifting the position to the left. This can be done repeatedly because of the excess $\ce{A-}$ present to react with the protons.
 - if a base is added, $\ce{[H+]}$ decreases as they react, shifting the position to the right. This can be done repeatedly because of the excess $\ce{HA}$ from the original shift to the left from the salt addition.

!!! example
    To form the **acetic acid/acetate buffer** $\ce{CH3COOH <=> H+ + CH3COO-}$, if 1 mol/L $\ce{CH3COONa}$ is added to 0.1 mol/L $\ce{CH3COOH}$:
    
    The addition of $\ce{CH3COO-}$ will shift the position to the left, protonating it such that there will be 0.1 mol/L $\ce{CH3COOH}$ and 1 mol/L $\ce{CH3COO-}$.
    
    - If an acid is added, it will **shift left** and further react to form more $\ce{CH3COOH}$, reducing the change in pH.
    - If a base is added, it will **shift right** by reacting with hydrogen ions to reduce their concentration, releasing more $\ce{H+ + CH3COO-}$ to replenish the lost hydrogen ions, reducing the change in pH.
    
This naturally occurs without a buffer, but a buffer significantly increases the quantity of titrant that can be added before the pH changes rapidly.

The same applies to a **basic buffer** but in opposite directions. The salt of the conjugate acid is used instead.
$$\ce{B + H2O <=> HB + OH-}$$

!!! example
    To form the **ammonia/ammonium buffer** $\ce{NH3 + H2O <=> NH4+ + OH-}$, if 1 mol/L $\ce{NH4+}$ is added to 0.1 mol/L $\ce{NH3}$:
    
    The addition of $\ce{NH4+}$ will shift the position to the left, deprotonating it such that there will be 0.1 mol/L $\ce{NH3}$ and 1 mol/L $\ce{NH4+}$.
    
    - If an acid is added, it will **shift right** by reacting with hydroxide ions to reduce their concentration, releasing more $\ce{NH4+ + OH-}$ to replenish the lost hydroxide ions, reducing the change in pH.
    - If a base is added, it will **shift left** and further react to form more $\ce{NH3 + H2O}$, reducing the change in pH.

To make an effective buffer, salt of the conjugate base/the conjugate acid is required to initially shift the position left. Adding more salt/acid increases the titrant that can be buffered.

A buffer only acts over a certain pH. In order for it to be effective, the ratio of $\ce{[A-]}$ to $\ce{[HA]}$ must be within 10x or 0.1x, although usually buffers are made with 90% excess salt/acid + 10% acid/base or vice versa. Using the **aha!** equation, this means that the **range of a buffer** is equal to $pK_a\pm 1$, where $pK_a$ is that of the **acid/conjugate acid of the base**.

## Organic chemistry

!!! definition
    - An **organic molecule** is one with at least one carbon atom covalently bonded to another carbon or hydrogen atom (i.e., at least one C-H or C to C bond)

Carbon is unique in organic chemistry as it is the only element with the following properties:

 - It is in the second row of the periodic table, meaning it has less electron shells, thus forming stronger bonds
 - It can covalently bond to up to 4 other atoms
 - Because each of its valence electrons is involved in bonding, it can form single through triple bonds
 - The molecular geometry can be anything from tetrahedral to linear depending on its bonding
 
Carbon is also able to bond to itself in the following ways:

 - long straight chains
 - long straight chains with branches
 - rings

<img src="/resources/images/cool-carbon.png" width=700>(Source: Kognity)</img>

### Simple hydrocarbons

!!! definition
    - A **branched hydrocarbon** is one with at least one "side group" extending from the main hydrocarbon chain.
    - A **functional group** is a group of atoms responsible for the characteristic properties of a molecule (e.g. C=C)
    - A **homologous series** is a family of organic compounds with the same functional group but the hydrocarbon chain length changes by 1 $\ce{CH2}$ group.

These only contain carbon and hydrogen.

**Alkanes** are a homologous series that only contain single bonds between carbons, and are named with the number of carbons with the suffix "-ane".

<img src="/resources/images/alkanes.png" width=700>(Source: Kognity)</img>

| Carbon atoms | Prefix |
| --- | --- |
| 1 | Meth |
| 2 | Eth |
| 3 | Prop |
| 4 | But |
| 5 | Pent |
| 6 | Hex |
| 7 | Hept |
| 8 | Oct |
| 9 | Non |
| 10 | Dec |

!!! example
    A molecule with only hydrogen and three carbon atoms all held together with single covalent bonds is called "propane".

**Alkenes** contain **at least** one carbon-carbon double bond and are named with a prefix with the total number of carbon atoms and "-ene".

**Alkynes** contain **at least** one carbon-carbon triple bond and are named with a prefix with the total number of carbon atoms and "-ene".

The general formula for an **acyclic** hydrocarbon with no rings is as follows, where $n$ is the number of carbon atoms, $x$ is the number of double bonds, and $y$ is the number of triple bonds.
$$\ce{C_nH_{2n+2-2x-4y}}$$

### Representing organic compounds

A simple **molecular formula** is the least useful as it provides no information on structure and bonding.
$$\ce{C6H14}$$

A **complete structural diagram** shows all atoms by their chemical symbols and uses lines like a Lewis Dot diagram to represent bonds. VSEPR shapes do not need to be taken into account because these are 2D representations of the molecule.

A **condensed structural diagram** is a complete structural diagram but C-H bonds are aggregated into a formula.
$$\ce{CH3 - CH2 - CH2 - CH2 - CH2 - CH3}$$

A **structural formula** or **expanded molecular formula** is a condensed structural diagram but there are no bond lines. The bond organisation is inferred based on the number of hydrogens on each carbon. Carbon chain side groups (branches) are shown with parentheses.
$$\ce{CH3CH2CH2CH2CH2CH3}$$

A **condensed structural formula** is a structural formula but any consecutive repeated $\ce{CH2}$ groups are factored with parentheses.
$$\ce{CH3(CH2)_4CH3}$$

A **line diagram** or **skeletal structural formula** removes carbons and hydrogens and replaces all carbon-carbon bonds with lines, where the number of lines represents the type of bond. Each line is bent where a carbon atom would be, except for triple bonds as those are linear. Non-carbon groups such as $\ce{OH}$ can be shown in collapsed form.

!!! example
    These are the ways to represent pentane, $\ce{C5H12}$. The structural formula is mislabeled as a condensed structural diagram.
    <img src="/resources/images/pentane.png" width=700>(Source: Kognity)</img>

### General nomenclature

To name an organic compound:

1. Find the **longest acyclic chain** of carbon atoms as the parent chain.
2. Assign numbers from 1 to $n$ for each carbon atom in the parent chain.
    - The numbers should be arranged in a way that the highest priority functional group in the chain is assigned the lowest number possible.
    - Apply the **first branch rule** only if there is a tie: If there are side chains, the parent chain should be numbered such that the location of any side chains have the lowest number possible.
        - If there is a tie, the location with the most branches wins.
        - If there is a tie, the rest of the chain is compared in sequence applying the first branch rule.
        - If there is a tie, the first location with the side chain group name that is alphabetically greater wins.
        - If there is a tie, it doesn't matter which side is picked as the whole thing is symmetrical.
3. Name the main chain based on the name of the functional group and location number for the functional group in the format "number-name".
4. Name the side groups.
    - If the group is not carbon, name it by its identity.
    - Otherwise, name the hydrocarbon based on the number of carbons in the side group with the ending "yl".
    - If there is more than one identical side group in the **whole chain**, combine their numbers and names with a Greek prefix.
    - Assign a number representing the carbon atom of the parent chain that the side group is attached to in the form "numbers-name".
5. Arrange the name with each side group with their numbers in alphabetical order, discounting any prefixes due to duplicates, followed by the parent chain.
6. Join everything together:
    - Drop the ending vowel from the prefix if there is a double vowel unless it is "i".
    - Separate numbers from words with dashes.
    - Separate numbers from numbers with commas.
    - Do not separate words from words.

!!! tip
    In hydrocarbons:
    
    - Atoms with double or triple bonds share equal priority as the highest functional group.
    - The main chain will be named as an alkane if there are only single bonds.
    - If there is exactly one double or triple bond, it will be named as an alkene or alkyne with its position inserted between the prefix and ending.
        - e.g., "pentane", "pent-2-ene"
    - If there are multiple double or triple bonds, their numbers are also included, but an "a" is appended to the prefix and a Greek prefix added to the suffix.
        - e.g., "penta-1,3-diene", "hexa-1,3,5-triyne"
    - If there are both double and triple bonds, the "-ene" becomes "-en" and is always before "-yne".
        - e.g., "pent-4-en-2-yne"

!!! example
    tf

Other **side chains** with equal priority as double or triple bonds *in side chains* include:

 - halogens, which have their "-ine" suffix replaced with "o" (e.g., "chloro")
 - $\ce{NO2}$: "nitro-"
 - benzene (as a side chain): "phenyl"

If there is no other option and there is a **branched side chain**, name it based on the total number of carbon atoms in the side chain.

!!! example
    tf

### Cyclic aliphatic hydrocarbons

These contain rings that **are not** benzene rings.

$$\ce{C_nH_{2n-2x}}$$

!!! warning
    Cyclic hydrocarbons **do not** contain any triple bonds as it would force the carbon ring to widen too much.

Cyclic aliphatic hydrocarbons are named the same way as acyclic hydrocarbons except they have a "**cyclo-**" at the start of the name of their parent chain.

!!! example
    cyclohexa-1,3-diene

The initial double bond should be numbered such that the lowest number is assigned to both sides of the bond (numbers 1 and 2 should be to either side of the double bond). If there is more than one double bond, the ring should be numbered such that the lowest number is assigned to both.

The **first branch rule** still applies. (See [HL Chemistry 2#General nomenclature](/sch4uz/#general-nomenclature).)

!!! example
    tf

!!! warning
    Rings can be side chains, and are named accordingly (e.g., "cyclopropyl"). The "cyclo-" prefix is counted when sorting names alphabetically as it describes the group.

### Cyclic aromatic hydrocarbons

These contain benzene rings, which do not actually have single/double bonds as they actually have delocalised pi bonds.

<img src="/resources/images/benzene.png" width=700>(Source: Kognity)</img>

As benzene rings do not have double bonds, they are named according to the **first branch rule**.

### Isomers

**Structural isomers** are two chemicals that have the same chemical formulas but have different structural formulas, resulting in different chemical properties.

!!! example
    The following are two structural isomers of $\ce{C5H12}$.
    <img src="/resources/images/structural-isomer-g5h12.png" width=700>(Source: Kognity)</img>

**Geometric** or **cis/trans isomers** are two chemicals have the same chemical formulas and atom arrangements but are positioned differently, thus having ambiguous names.

In order for this to occur, there must be two different atoms or groups of atoms bonded to each carbon atom in the double bond.

 - A **cis** hydrocarbon isomer will have its main chain enter and exit the double bond on the **same side**.
 - A **trans** hydrocarbon isomer will have its main chain enter and exit the double bond on **opposite sides**.

Unlike the examples below, these should be named with "cis" or "trans" at the beginning as a **separate word without a hyphen**.

!!! example
    The following are two geometric isomers of but-2-ene:
    <img src="/resources/images/cis-trans-but-2-ene.png" width=700>(Source: Kognity)</img>

 - In acyclic compounds, this is because the double bond prevents simply rotating one side but not the other as it would force breaking the pi bond.
 - In cyclic compounds, this is because the ring's other side is similar to a double bond, preventing rotation around the axis.
 
!!! example
    The following are cis-trans isomers of dichlorocyclobutane (notice the chlorine):
    <img src="/resources/images/cis-trans-ring.png" width=700>(Source: Kognity)</img>

## Resources

 - [IB Chemistry Data Booklet](/resources/g11/ib-chemistry-data-booklet.pdf)
 - [IB HL Chemistry Syllabus](/resources/g11/ib-chemistry-syllabus.pdf)
 - [Significant Figures/Digits](/resources/g11/chemistry-sig-figs.pdf)
 - [Error Analysis and Significant Figures (long)](/resources/g11/error-analysis-sig-figs.pdf)
 - [General Guidelines for Writing a Formal Laboratory Report](/resources/g11/lab-report-guidelines.pdf)
 - [Designing an IB Investigation](/resources/g11/designing-investigation.pdf)
 - [Textbook: Pearson Higher Level Chemistry](/resources/g12/textbook-hl-chem.pdf) ([Answers](/resources/g12/textbook-hl-chem-answers.pdf)) - [mini Eifueo](/resources/g12/textbook-hl-chem-eifueo.pdf)
