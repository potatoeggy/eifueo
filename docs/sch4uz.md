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

The lattice enthalpy of an ionic compound is the energy released when 1 mol of an ionic solid is formed from gaseous ions.

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

Gibb's free energy or **standard free energy** ($\Delta G$/$\Delta G^\theta$, $\pu{kJ}$ or $\pu{kJ/mol}$) is a measure of the sponetaneity of a chemical change. Spontaneous reactions must have a negative $\Delta G$, while those that are positive will require more energy to continue.
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

## Resources

 - [IB Chemistry Data Booklet](/resources/g11/ib-chemistry-data-booklet.pdf)
 - [IB HL Chemistry Syllabus](/resources/g11/ib-chemistry-syllabus.pdf)
 - [Significant Figures/Digits](/resources/g11/chemistry-sig-figs.pdf)
 - [Error Analysis and Significant Figures (long)](/resources/g11/error-analysis-sig-figs.pdf)
 - [General Guidelines for Writing a Formal Laboratory Report](/resources/g11/lab-report-guidelines.pdf)
 - [Designing an IB Investigation](/resources/g11/designing-investigation.pdf)
 - [Textbook: Pearson Higher Level Chemistry](/resources/g12/textbook-hl-chem.pdf) ([Answers](/resources/g12/textbook-hl-chem-answers.pdf)) - [mini Eifueo](/resources/g12/textbook-hl-chem-eifueo.pdf)
