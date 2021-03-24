# SL Physics - 2

The course code for this page is **SPH4U7**.

## Magnetism

Magnets are objects with north/south dipoles that create a field around them. Although ferromagnetic substances can repel each other, paramagnetic substances are always attracted to a magnetic field. See [HL Chemistry#Physics properties of transition elements](/sch3uz/#physical-properties-of-transition-elements) for more details.

### Magnetic fields

<img src="/resources/images/magnetic-field.png" width=700>(Source: Kognity)</img>

Similar to electric and gravitational fields, magnetic fields (also known as **B-fields**) are drawn by their effect on a north pole. Since magnetic poles always appear in equal magnitude pairs, all magnetic field lines for a magnet must form closed loops from north to south **outside** and south to north **inside** the magnet. Much like electric field lines, magnetic field lines never touch

<img src="/resources/images/more-magnetic-fields.png" width=700>(Source: Kognity)</img>

Atoms in ferromagnetic materials are tiny magnets with **dipoles**. These dipoles act on neighbouring dipoles and can cause the whole object to align — this is known as an **electric domain**.

!!! note
    Nickel, cobalt, or any alloy with nickel, cobalt, or iron can become magnetised this way.

**Unmagnetised** domains have dipoles pointing in random directions that are aligned when exposed to a magnetic field where they become **magnetised** domains. As such, bar magnets are always broken into smaller magnets, each with two poles — a monopole is impossible to create.

### Straight-line electromagnets

Moving electric charges produce magnetic fields. A circle filled with an "x" indicates that the current is moving away from the viewer in the third dimension while a dotted circle indicates it is moving toward the viewer.

These magnetic fields are centred on the conductor, are in a plane perpendicular to the conductor, and have decreasing magnetic field strength over distance.

<img src="/resources/images/straight-line-electromagnet.png" width=700>(Source: Kognity)</img>

The **right-hand rule** for straight-line conductors indicates that when the conductor would be grasped by the right hand, the thumb would point in the direction of current and the fingers pointing in the direction of the magnetic field.

<img src="/resources/images/right-hand-rule.png" width=700>(Source: Kognity)</img>

### Selenoid electromagnets

A **selenoid** is a conductor coil in a tight helix. Current passed through a selenoid will generate a **uniform magnetic field** inside the coil with a pattern identical to that of a bar magnet outside it.

<img src="/resources/images/selenoid-electromagnet.png" width=700>(Source: Kognity)</img>

The right-hand rule can be applied again to a selenoid to identify the direction of the north pole or direction of magnetic field in the coil:

<img src="/resources/images/selenoid-right-hand-rule.png" width=700>(Source: Kognity)</img>

### Properties of moving charges

As only moving electric charges generate magnetic fields, stationary electric charges are **unaffected** by external magnetic fields. Moving charges are affected by Newton's third law of motion — equal and opposite forces are exerted on the charge and the magnet. As such, where $q$ is the charge of the particle and $\vec{v}\times \vec{B}$ is the **cross product** (vector multiplication) of the velocity of the particle and the magnetic field strength in Teslas:
$$\vec{F_m}=q\vec{v}\times \vec{B}$$

**Magnetic field strength** ($B$) represents the force acting per unit current in a conductor of unit length perpendicular to the field with the unit Tesla ($\pu{T}$)

The **magnetic force** is always plane **perpendicular** to both $\vec{v}$ and $\vec{B}$. Just the magnitude of the force can be found by using the angle between the two vectors ($\theta$):
$$|F_m|=qvB\sin\theta$$

Regardless of $\theta$, the force vector is always perpendicular to both $B$ and $v$,

The above equation can be rearranged to find **electromagnetic** force in terms of current and wire length in a **uniform magnetic field**:
$$|F_em|=BIL\sin\theta$$

<img src="/resources/images/magnet-on-wire.png" width=700>(Source: Kognity</img>

The **right-hand-rule** can be used to determine the direction of force — the thumb points in the direction of current/velocity, the fingers point in the direction of the magnetic field, and the palm points in the direction of force. Alternatively, just three fingers can be used.

<img src="/resources/images/right-hand-rule-forces.png" width=700>(Source: Kognity)</img>

When two straight-line conductors with current flowing through them are brought together, they either mutually attract or repel. The ampere is defined based on the current required to flow through a scenario involving two parallel straight-line conductors.

<img src="/resources/images/parallel-current-conductors.png" width=700>(Source: Kognity)</img>

Inside a **uniform magnetic field**, charges move in **uniform circular motion** at a constant velocity. If the particle did not enter the field at a perfect right angle, some of the velocity is used to change the path of the particle to be in a spiral — still perfectly circular, but additionally moving in the third dimension perpendicular to the circle.
$$\Sigma F_c = F_m$$

## Nukes

### Atomic structure

!!! definition
    - A **photon** is a particle that represents light.
    - A **nucleon** is a subatomic particle in an atomic nucleus — that is, a proton or neutron.
    - A **nuclide** is a nucleus with a specific number of protons and neutrons.

Please see [HL Chemistry#2.1 - Atoms](/sch3uz/#21-atoms) and [HL Chemistry 1#2.2 - Electrons in atoms](/sch3uz/#22-electrons-in-atoms) for more information.

An electron in an atom will only become excited if a photon of exactly the right amount of energy strikes it. That energy can be found using the formula:
$$\Delta E=hf$$

where $E$ is the energy of the photon at frequency $f$, and $h$ is Planck's constant ($\pu{6.63\times 10^{-34} Js}$ or $\pu{4.14\times10^{-16} eVs}$).

An electron that de-excites will emit a photon of that exact energy and thus frequency to return to its previous state.

### Binding energy

According to Einstein's theory of special relativity:
$$\Delta E=\Delta mc^2$$

**Neutrons** in the nucleus hold the protons together via **strong nuclear forces** that somewhat act like glue. An increase in neutrons increases the strong nuclear force. In smaller nuclei, $N=Z$, but in larger nuclei, $N>Z$ as more neutrons are required to keep the nucleus stable as the number of protons increases.

The mass of a stable nucleus is always less than the sum of the masses of the individual nucleons (the **mass defect**) as some of the mass is converted to energy during the formation of a nucleus. The energy used is known as the **binding energy** of a nucleus.
$$E_\pu{binding} = \pu{mass defect}\times c^2$$

As such, the binding energy of a nucleus is also the energy required to separate it completely into individual nucleons.

Atomic mass is measured relative to the mass of a carbon-12 atom, which is exactly 12 u (unified atomic mass units).
$$\pu{1 u}=\pu{1.661\times10^{-27} kg}=\pu{931.5 MeVc^-2}$$

A higher **binding energy per nucleon** results in more energy required to break it apart and thus it being more stable.

<img src="/resources/images/binding-energy-curve.png" width=700>(Source: Kognity)</img>

!!! note
    It is required to know the general shape of the curve, that $~8.8 \pu{ MeV}$ is the maximum, and that the end boundaries are $0$ and $~7.5 \pu{ MeV}$. It is also required to know the elements at each of those points (hydrogen-1, iron-56/nickel-62, and uranium-238).

Since a greater binding energy per nucleon is more energetically favourable, nuclei to the right of iron-56 fission (split) while those to the left fuse (combine) to release energy — changes that would increase binding energy per nucleon are likely to occur because of this.

### Radioactive decay

!!! definition
    - An **alpha particle** is a helium-4 nucleus (2 protons, 2 neutrons).
    - A **beta particle** is an electron.
    - A **gamma ray** is a photon.

Radioactivity is the emission of **ionising** (will make ions) radiation due to changes of a nucleus. It is **random** and spontaneous — it is unaffected by external factors such as other nuclei decaying.

**Nuclear equations** are similar to chemical equations but show how nuclei change in a nuclear process by tracking the atomic and mass numbers. A nuclear equation is balanced so that the sum of the atomic and the sum of the mass numbers on both sides are equal.

$$A\to B+C$$

**Alpha decay** occurs when the strong nuclear force is unable to hold a large nucleus together and emits an alpha particle. The alpha particle is positive and can barely penetrate paper. The two particles move in opposite directions with momentums equal in magnitude.

<img src="/resources/images/alpha-decay.png" width=700>(Source: Kognity)</img>

$$\ce{^A_Z N → ^{A-4}_{Z-2} N' + ^4_2 He}$$

$\ce{^4_2 He}$ may be replaced by $\ce{^4_2\alpha}$.

!!! example
    Radium-226 alpha decays to radon-222.

**Beta-minus decay** ($\beta^-$) occurs when a neutron decays into a proton and releases a beta-minus particle (an electron and an electron antineutrino). It can penetrate up to 3 mm of aluminum. Where $\overline{v}_e$ is the antineutrino:

<img src="/resources/images/beta-minus-decay.png" width=700>(Source: Kognity)</img>

$$\ce{^1_0n → ^1_1p + ^0_{-1}e + ^0_0\overline{v}_e}$$

!!! note
    The bar over the electron antineutrino identifies it as an **antiparticle**.

The beta-minus particle can be written explicitly over the electron as $^0_{-1}\beta$.

In terms of the mother nucleus, the reaction results in the mass number staying the same while the atomic number increases by one.

**Beta-plus decay** ($\beta^+$) occurs when a proton decays into a neutron and releases a **positron** (an antielectron with a positive charge) and an electron neutrino ($v_e$)
$$\ce{^1_1p → ^1_0n + ^0_1e + ^0_0v_e}$$

The positron can be written as a beta-plus particle as $^0_1\beta$.

In terms of the mother nucleus, the reaction results in the mass number staying the same while the atomic number decreases by one. 

**Gamma decay** occurs when an excited nucleus transfers its energy to a high-energy photon with frequencies in the gamma region of the electromagnetic spectrum. There is no change in mass nor atomic number. A nuclide with an asterisk $*$ indicates it as excited. This emits *ionising radiation* which is not good for living beings.

<img src="/resources/images/gamma-decay.png" width=700>(Source: Kognity)</img>

$$\ce{^A_ZX^* → ^A_ZX + ^0_0\gamma}$$

### Detecting radiation

As radiation cannot be seen, it must be detected experimentally.

A **Geiger counter** utilises a gas-filled tube with a wire in the centre at high voltage. When a charged particle passes through, gas is ionised which cascade onto the wire to produce a pulse.

A **cloud chamber** contains vapour that turns into liquid droplets when ionising particles pass though, resulting in visible lines showing the path of the particles. A magnetic field can spiral the particle in a certain direction which allows for its charge to be identified.

### Half-life

The **half-life** of an element is the time required for half of the nuclides in a sample to decay — it is always the same no matter the number of initial nuclides.

As such, this means that the number of parent nuclei decreases by 50% of its current value each half-life.

<img src="/resources/images/half-life.png" width=700>(Source: Kognity)</img>

!!! example
    **Radioactive dating** analyses the ratio between carbon-14 and carbon-12 to determine the age of plant nmatter. As the ratio of C-14 and C-12 in the atmosphere has been relatively comstant, living plants maintain that balance by constantly exchanging carbon. Dead plants' carbon-14 slowly decay at a known rate, so the ratio can be used to determine the time since the plant died.

### Nuclear reactions

A nuclear reaction occurs when a nucleus is hit by another nucleus or subatomic particle and a different nuclide is formed (nuclear **transmutation**). In such a collision, energy and momentum must be conserved. Generally, neutrons are most commonly used in these reactions as they are not affected by Coulomb force exerted by the protons or electrons.

The **reaction energy** $Q$ is the difference in mass between the initial and final states multiplied by $c$ squared. In the sample reaction $a+X → Y+b$:
$$Q=[(M_a + M_X) - (M_Y + M_b)]c^2$$

 - If $Q$ is positive, the reaction is **exothermic** and will occur at any amount of initial kinetic energy.
 - If $Q$ is negative, an initial kinetic energy equal to $Q$ is required (the activation energy).

Nuclear **fusion** occurs when two lighter nuclei combine into a heavier one, releasing energy in the process.

Nuclear **fission** occurs when a heavy nucleus splits into two lighter nuclei. Along with some excess neutrons, energy is released. The two split pieces are usually somewhat unequal.

### Fission in reactors

The energy release of nuclei is very large — the energy density per unit mass is much higher than any other conventional source.

As nuclei get smaller, their stablility increases as the number of neutrons also decreases, so excess neutrons can set off a chain reaction by reacting with more nuclei.

<img src="/resources/images/fission-chain.gif" width=700>(Source: Kognity)</img>

However, neutrons that are ejected often have too much energy and must be **moderated** to slow down to prevent a critical mass where the number of reactions is self-sustaining, leading to overheating and reactor meltdown. A **moderator** is a material surrounding fuel rods to slow down incoming neutrons — usually heavy water.

**Control rods** are also inserted into the reaction core to control the rate of reaction. These absorb the neutrons from the moderator and the amount absorbed can be adjusted by raising the rods partially up to all the way from the reactor.

Nuclear power is superior to other types of energy generation in that:

 - it has a high power output due to high energy density
 - there are large reserves of nuclear fuel on Earth
 - there are no greenhouse gases emitted to generate power

Nuclear power has the following issues in that:

 - waste is highly radioactive with long half-lives, rendering removal and storage of nuclear waste a major issue
 - initial startup costs are expensive
 - strict maintenance is required due to the risk of nuclear meltdown
 - fissionable fuel can be recovered and used for destructive weapons
 - mining uranium is unhealthy — miners are exposed to harmful radiation and waste material from mines deemed not pure enough is not easy to dispose

### Nuclear fusion

Nuclear fusion generates energy per unit mass an order of magnitude greater than can be achieved with fission. The sun takes hydrogen and fuses it into helium. Heavier stars can fuse elements up to iron-56.
$$\ce{4 ^1_1 H → ^4_2 He + 2 e^+ + 2 v_e + 2\gamma}$$

Nuclear fusion power has the following issues in that it is currently unsustainable for more than a few seconds because:

 - the temperature required for the reaction is greater than 100 million degrees Celsius
 - it requires more energy input to heat the sample than is obtained from the fusion reaction
 - materials currently known cannot withstand the temperature making containment difficult — currently magnetic fields are used to hold the particles in place

## The Standard Model

<img src="/resources/images/standard-model.png" width=700>(Source: Kognity)</img>

### Elementary particles

An elementary particle is a subatomic particle that is not composed of other particles.

Particles currently thought to be elementary as of January 2021 include bosons, quarks, and leptons:

### Bosons/Force exchange particles

!!! definition
    - **Virtual particles** are bosons that do not have infinite range.

Bosons are particles that carry/exchange forces between particles. The theory of exchange forces posits that all forces are due to particles exchanged between elementary particles. There are four types of bosons that can be roughly categorised by their effect.

**Gluons** ($\pu{g}$) are exchanged for matter to feel **strong nuclear** force: the strongest interaction between particles. These particles are heavy (120 MeV/c<sup>2</sup>) and short-lived, thus giving the force a very short range.

**Photons** ($\pu{\gamma}$) are exchanged for matter to feel **electromagnetic** force: the second strongest force responsible for magnetism and electric force that only act on charged particles. These particles have a rest mass of zero and travel for an infinite distance until they are absorbed.

The **W<sup>+</sup>, W<sup>-</sup>, and Z<sup>0</sup>** bosons are together responsible for the weak nuclear force and are the third strongest force. These particles have a heavy rest mass (80 GeV/c<sup>2</sup> for Ws, 91 GeV/c<sup>2</sup> for Z) and so are even more limited in range than gluons.

**Gravitons** are responsible for gravitational force: the weakest force. These particles are massless and so they have infinite range.

The Higgs field and Higgs boson are responsible for elementary particles obtaining their mass because of magical fields and rainbows.

### Quarks

!!! definition
    - A **hadron** is any particle made of quarks.
    - A **baryon** is any hadron made of three quarks. An **antibaryon** is any particle made of three antiquarks.
    - A **meson** is a hadron made of exactly one quark and one antiquark involved in the **strong** interaction.
    - A **fermion** is any particle with mass (hadrons or leptons)

Gluons (strong force) only interact with quarks, which are heavier, more tightly bound elementary particles. There are six quarks with different properties:

| Charge | | | |
| --- | --- | --- | --- |
| $\frac{2}{3}$e | up (u) | charm (c) | top (t) |
| $-\frac{1}{3}$e | down (d) | strange (s) | bottom (b) |

!!! reminder
    e is the elementary charge ($\pu{1.6\times10^{-19} C}$).

 - All quarks have a **baryon number** of $\frac{1}{3}$.
 - All quarks have a **strangeness number** of 0 except for the strange quark, whose number is equal to -1.
 - All quarks have their own respective **antiquark**: an antiparticle with opposite charge and baryon number but otherwise identical mass.
 - The **quark confinement theory** states that a singular quark cannot be isolated from its hadron.

Every particle has its own **antiparticle** with the same properties but with opposite quantum numbers. In practice, this indicates that mass stays the same while baryon number, lepton number, and charge are opposite. When a corresponding quark and antiquark meet, annihilate each other to become energy. They are denoted by a bar over their letter.

!!! example
    An up antiquark (also known as "u-bar") is written as ū.

!!! note
    - Protons are composed of two up quarks and one down quark (uud).
    - Neutrons are composed of one up quark and two down quarks (udd).

### Leptons

Leptons are lighter and more loosely bound elementary particles compared to quarks. They do not participate in the strong interaction. All leptons have a **lepton generation/family** which is based on their relative mass. A higher mass indicates a higher generation.

| Charge | Generation 1 (L<sub>I</sub>) | Generation 2 (L<sub>II</sub>) | Generation 3 (L<sub>III</sub>) |
| --- | --- | --- | --- |
| -1e | electron (e) | muon (µ) | tau ($\tau$) |
| 0 | electron neutrino ($\pu{v_e}$) | muon neutrino ($\pu{v_\mu}$) | tau neutrino ($\pu{v_\tau}$) |

 - All leptons have a **lepton number** of 1.

### Elementary particle interactions

In any interaction, the following are true:

 - **charge** is conserved
 - the **baryon number** is always conserved
 - the **lepton number** of each family is always conserved
 - the **strangeness number** is always conserved in *strong and electromagnetic interactions*

!!! example
    A lepton number of $\pu{L_{III} = 1}$ on one side becoming $\pu{L_{II} = 1}$ on the other is impossible as lepton family must be kept consistent during interactions.

## Feynman diagrams

A Feynman diagram provides a graphic representation of particle interactions to predict the outcome of a particle collision.

Generally, the time axis is left-to-right but can be specified to be otherwise. The following assumes time moves from left to right.

Fermions are represented by **straight lines with arrows**. Particles have their arrows pointing *forward* in time while antiparticles point backward (even though they still move in the direction of time).

<img src="/resources/images/fermion-feynman.png" width=700>(Source: Kognity)</img>

Bosons/force exchange particles are represented by wiggly lines with no arrow.

<img src="/resources/images/boson-feynman.png" width=700>(Source: Kognity)</img>

Particles only interact at a **vertex** where left refers to the state before the interaction while the right refers to the state afterward. A vertex must have one arrow pointing **toward** and one **away** from the vertex. Conservation laws apply at each vertex.

<img src="/resources/images/vertex-feynman.png" width=700>(Source: Kognity)</img>

Contents of hadrons must be shown. (See the last example for an example.)

### Feynman diagram examples

!!! example
    An electron being repelled by another electron due to Coulomb repulsion:
    <img src="/resources/images/electron-repulsion.png" width=700>(Source: Kognity)</img>

!!! example
    Beta decay:
    <img src="/resources/images/beta-decay-feynman.png" width=700>(Source: Kognity)</img>

!!! example
    Some weak interaction that violates strangeness:
    <img src="/resources/images/weird-feynman.png" width=700>(Source: Kognity)</img>

## Energy sources

!!! definition
    - A **primary** energy source is one that is not transformed and used directly by the consumer, such as burning wood for heat.
    - A **secondary** energy source is one that is converted from a primary source, such as electricity.
    - **Proved reserves** are the resources that are known to be obtainable.
    - **Production** are the actual reserves and placed in the market in a certain time interval.
    - The **expectancy** of a product is the estimated time its proved reserves will last given its production (proved reserves ÷ production).
    - The **specific energy** ($E_{SP}$) of a source is the energy obtained per unit mass of fuel (J/kg).
    - The **energy density** ($E_D$) of a source  is the energy obtained per unit volume (J/m<sup>3</sup>).

If a fuel source can be replenished with a "reasonable" amount of time — one human generation, or 50–100 years — it is considered to be **renewable**. The world still largely uses non-renewable energy sources.

<img src="/resources/images/renewable-energy-pie.png" width=700>(Source: Kognity)</img>

Electricity is the most common secondary energy source due to its convenience and ease of transport.

### Sankey diagrams

Sankey diagrams show the transfer of energy in a system via directed lines proportional to quantity of energy. Arrows pointing away indicate energy **degradation** — losses in energy transformation.

<img src="/resources/images/sankey-diagram.png" width=700>(Source: Kognity)</img>

To minimise electrical losses during transportation, high voltage, low resistance wires with high cross-sectional areas are used to reduce resistance to reduce power loss.

### Power generation

A moving magnetic field produces an electromotive force as alternating current via **induction** and is how the large majority of power generation is handled.

<img src="/resources/images/power-plant-generation.png" width=700>(Source: Kognity)</img>

In a nutshell, a source of thermal energy such as burning fossil fuels is used to boil water whose steam is then used to turn a turbine to generate power before condensing and repeating the cycle.

Coal and oil-powered power plants have efficiencies of around 40% while natural gas is slightly higher at 50% as the gas itself can be used to turn a turbine.

In **nuclear** power plants, the coolant fluid is instead used to turn a turbine.

<img src="/resources/images/nuclear-power-generation.png" width=700>(Source: Kognity)</img>

As only uranium-235 is fissile, but uranium-238 is significantly more common (99.3% U-238 to 0.7% U-235), uranium must first be enriched until the concentration of U-235 is ~3%. **Gaseous diffusion** is a form of enrichment by forming uranium hexafluoride gas and then spinning it in a centrifuge to force separation of U-238 and U-235 based on mass. The energy used in enriching uranium is substantial and should be included in Sankey diagrams.

Moderators are used to encourage fission as they slow down neutrons that are going too fast to fission (most) to a speed more suitable for fission.

### Wind

The kinetic energy of wind can be harnessed to generate power. As convection currents provide the greatest airflow near large bodies of water, wind farms are often constructed there. The wind turns rotor blades which turn a turbine to generate power. It is a source of clean and renewable energy.

Assuming **all wind kinetic energy** is converted to mechanical energy, where $P$ is the power generated, $A$ is the area of the circle that the blades spin around, $\rho$ is the density of the air, and $v$ is the speed of the wind in the direction of the blades:
$$P=\frac{1}{2}\rho v^3$$

<img src="/resources/images/wind-generator.png" width=700>(Source: Kognity)</img>

| Advantages | Disadvantages |
| --- | --- |
| Renewable | Wind strength is inconsistent |
| Wind is widely available | Turbine blades may kill birds |
| Does not emit greenhouse gases | Many of them are needed to replace one fossil fuel plant, requiring lots of space so they don't interfere with each other |

### Hydro

In hydroelectric plants, a dam is often used to increase the height of a reservoir so that it falls and spins a turbine to generate power. As such, the energy generated is roughly equal to the gravitational potential energy of the water. Where $\Delta h$ is the **average height** of the water from the turbine:
$$E=mg\Delta h$$

<img src="/resources/images/hydro-generator.png" width=700>(Source: Kognity)</img>

During times of lower demand, dams often have a **pumped storage** system that pumps water back into the reservoir for use during higher demand.

### Tidal

A **tidal barrage** generates energy via the kinetic energy of water moving during changes in tide using a multi-directional turbine.

### Photovoltaic

!!! definition
    **Intensity** is the power delivered per unit area (watts per square metre).

Photovoltaic (PV) cells are made of silicon doped with phosphorus and boron impurities to convert sunlight directly into electricity. Light from the sun frees electrons in the silicon to produce a current.

<img src="/resources/images/photovoltaic-generation.png" width=700>(Source: Kognity)</img>

The **solar constant** $S$ of $\pu{1.36\times10^3 W/m^2}$ determines the intensity of the sun's light that reaches the Earth. At different latitudes and between seasons, the intensity changes because the Earth is round and is tilted, respectively.

### Solar heating

Instead of converting between multiple forms of energy, solar heating directly converts the sun's energy to heat, increasing efficiency drastically. By using insulation, a black substance, and a glass top, the heat from the sun is trapped and absorbed into water where it is used to heat things.

<img src="/resources/images/solar-heating.png" width=700>(Source: Kognity)</img>

## Resources

 - [IB Physics Data Booklet](/resources/g11/ib-physics-data-booklet.pdf)
 - [IB SL Physics Syllabus](/resources/g11/ib-physics-syllabus.pdf)
 - [Dealing with Uncertainties](/resources/g11/physics-uncertainties.pdf)
 - [External: IB Physics Notes](https://ibphysics.org)
