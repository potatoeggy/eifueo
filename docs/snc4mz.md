# HL Chemistry 3

The course code for this page is **SNC4MZ**.

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

!!! warning
    The lack of standardisation prior to IUPAC means that some IUPAC names have common names that are still widely used today.
    
    - acetylene: **ethyne**
    - vinyl: **propene**
    - ethylene: **ethene**

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

The **first branch rule** still applies. (See [HL Chemistry 3#General nomenclature](/snc4mz/#general-nomenclature).)

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

**Hydrocarbon chain isomers** are two chemicals with the same chemical formulas but have different carbon/hydrogen arrangements.

!!! example
    The following are two hydrocarbon chain isomers (and, by extension, structural isomers) of $\ce{C5H12}$.
    <img src="/resources/images/structural-isomer-g5h12.png" width=700>(Source: Kognity)</img>

**Positional isomers** are two chemicals with the same chemical formulas **and functional groups** but have different structural formulas.

!!! example
    The following are positional isomers (and, by extension, structural isomers) of $\ce{C4H8}$.
    <img src="/resources/images/positional-isomers.png" width=700>(Source: Kognity)</img>

**Functional group isomers** are chemicals with the same chemical formulas but **different functional groups**.

!!! example
    The following are functional group isomers (and, by extension, structural isomers) of $\ce{C3H6O2}$.
    <img src="/resources/images/functional-group-isomers.png" width=700>(Source: Kognity)</img>

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

Isomers may have different physical properties in:

 - **polarity**: a cis isomer may cause a molecule to be polar as opposed to its trans variant
 - **packing efficiency**: a non-branching hydrocarbon chain will pack better than a branching one, and a continuously trans chain will pack better than a cis one

These change the strength and type of intermolecular forces involved so affect their melting/boiling points.

Isomers may also have different chemical properties as cis isomers are more likely to bump into themselves to make some reactions more viable

### Benzene reactions

!!! definition
    - An **electrophile** is any species that is or would be electron deficient (+) in the presence of a pi bond.
    
In reactions involving a benzene ring, the ring itself is **stable** and will not break apart because of the strength of delocalised pi bonds.

Therefore, only the hydrogens can be swapped out via **electrophilic substitution**, where an hydrogen atom is substituted with an electrophile. The concentration of electrons in the delocalised pi area attracts electrophiles to initiate the bond.

In the mechanism diagram below, $\ce{E+}$ represents the electrophile. Curly arrows are used to show the movement of electrons from the **delocalised area to the electrophile** and **hydrogen atom to the delocalised area**.

<img src="/resources/images/benzene-substitution-mechanism.png" width=900>(Source: Kognity)</img>

The **first step** (the change from the first to the second diagram) is the **slow step** due to the highest activation energy due to the requirement to break a bond.

<img src="/resources/images/benzene-substitution-mechanism-graph.png" width=900>(Source: Kognity)</img>

#### Benzene nitration

!!! definition
    - A **nitrating mixture** is a mixture of concentrated sulfuric and nitric acids.

In a **nitrating mixture**, benzene will react with positive nitronium ions at **~50°C** to form nitrobenzene, outlined in the reaction mechanism diagrams below.

$$\ce{C6H6 + HNO3_{(aq)} ->[conc H2SO4][50^\circ C] C6H5NO2 + H2O_{(l)}}$$

<img src="/resources/images/benzene-nitration-mechanism.png" width=900>(Source: Random Quora Person)</img>

The first step is to **form the nitronium ion** through a Bronsted-Lowry acid-base reaction between the acids.

$$\ce{HNO3_{(aq)} + H2SO4_{(aq)} <=> H2NO3+_{(aq)} + HSO4-_{(aq)}}$$

The lone pair on the oxygen of the nitric acid attracts a hydrogen atom, which becomes an $\ce{H+}$ ion as sulfuric acid's oxygen takes its electrons. The hydrogen ion bonds to the nitric acid.

$$\ce{H2NO3+_{(aq)} <=> H2O_{(l)} + NO2+_{(aq)}}$$

The oxygen-hydrogen group is conveniently able to form water by taking both electrons it was sharing with the nitrogen. The other single-bonded oxygen compensates with a dative covalent bond with the nitrogen to form the nitronium ion.

The second step is to **react with benzene** through electrophilic substitution, with electrons moving back from the dative oxygen-nitrogen bond back to the oxygen.

### Alkane reactions

!!! definition
    - **Halogenation** is the introduction of a halogen into a compound.

#### Substitution halogenation

Because a sigma bond must be broken, alkanes are not very reactive. In the presence of light, alkanes will react with halogens in their standard state through halogenation, replacing one of their hydrogens. **Fluorine** is an exception that does not require light because it is highly reactive.

If the halogen is in excess and the reaction continues, more of the halogen (**not the hydrogen-halogen product**) will react with the alkane until all hydrogens have been substituted.

!!! example
    $$\ce{CH3CH3 + Cl2_{(g)} ->[light] CH3CH2Cl + HCl_{(g)}}$$
    
    If $\ce{Cl2}$ is in excess:
    $$
    \ce{
    CH3CH2Cl + Cl2_{(g)} ->[light] CH3CHCl2 + HCl_{(g)} \\
    ... \\
    CCl3CHCl + Cl2_{(g)} ->[light] CCl3CCl3 + HCl_{(g)}
    }
    $$

The order that hydrogens are substituted in is **random**. If there is more than one possibility, all of them are written as products, ignoring balancing.

!!! example
    Propane reacts with chlorine gas to form either 1-chloropropane or 2-chloropropane.
    $$\ce{CH3CH2CH3 + Cl2 ->[hf] CH3CH2CH2Cl + CH3CHClCH3 + HCl}$$

!!! example
    1-bromoethane reacts with chlorine gas to form either 1,1-dibromoethane (40% chance) or 1,2-dibromoethane (60% chance) because each hydrogen is equally likely to be substituted, and there are 2 and 3 that would form them, respectively.
    $$\ce{CH2ClCH3 + Cl2 ->[hf] CHCl2CH3 + CH2ClCH2Cl + HCl}$$

#### Free radical substitution

!!! definition
    - A **free radical** is a species with a lone unpaired electron.
    - **Homolytic fission** is the dissociation of a chemical bond in a neutral molecule where each product takes one electron, generating two free radicals.
    - **Heterolytic fission** is the dissociation of a chemical bond in a neutral molecule where one product takes both electrons.

The free radicals are first produced with the help of light energy.

$$\ce{Br2 ->[hf] Br. + Br.}$$

They are then spread to organic compounds and reformed.

$$
\ce{
Br. + CH4 -> .CH3 + HBr \\
Br2 + .CH3 -> CH3Br + Br.
}
$$

This cycle only ends when all radicals are used up, through reactions that end up with a net loss in radicals, such as:

 - $\ce{Br. + Br. -> Br2}$ (unlikely, contributes a little)
 - $\ce{.CH3 + Br. -> CH3Br}$ (likely)
 - $\ce{.CH3 + .CH3 -> CH3CH3}$ (likely)

!!! warning
    The free radical is on the carbon atom, not the hydrogen atoms, so the marker goes at the beginning.

### Alkene/yne addition reactions

!!! definition
    - A **carbocation** is a compound with a $\ce{C+}$ atom.
    - The **primary** and **secondary** carbocations are carbocations bonded to one and two other carbon atoms, respectively.

The presence of double/triple bonds make alkenes and alkynes more reactive and also allow the **addition** of species as pi bonds are easier to break. Addition always takes precedence over substitution when possible.

These **spontaneous** reactions break the double/triple bond down a level and slot themselves in (i.e., alkynes form alkenes, alkenes form alkanes).

$$
\ce{alkene + Br2 -> alkaneBr2} \\
\ce{alkyne + Br2 -> alkeneBr2}
$$

<img src="/resources/images/alkene-addition.png" width=900>(Source: Kognity)</img>

1. If the non-alkene/yne reactant does not have a dipole moment, the electrons concentrated in the double/triple bond of the alkene/yne induce a dipole by repelling the electrons closest to it.
2. The positive dipole (such as H in HBr) is attracted to the double bond, and **two electrons** in the bond are used to form a **dative** bond with the positive dipole.
3. No longer needing its old bond, the previously positive dipole loses **both electrons** in its old bond to the negative dipole.
4. The now positive carbon atom attracts the now negative ion.
5. The negative ion forms a **dative** bond with the positive carbon atom.

!!! warning
    - If an **alkene is formed**, the same randomness of where the atoms attach applies, so it is possible that a cis/trans isomer is formed.
    - If an **asymmetrical alkane** is formed, the same randomness of where the atoms attach applies after applying Markovnikov's rule, so it is possible that positional isomers are formed.

**Markovnikov's rule** states that in Soviet Russia, the rich get richer. Hydrogens preferentially bond to the carbon with the **most hydrogens** if there is one — otherwise it randomly chooses one available.

This is because carbocations with that are *more highly substituted* (are bonded to more carbon atoms) are more stable, so they last longer and are more likely to form a bond with the negative dipole.

The preferred product is the **major product** while the other is the **minor product**. Some minor product will still be produced if the negative dipole is speedy enough, although it will be vastly outnumbered by the major product.

#### Halogenation

Unlike alkane substitution, addition halogenation is spontaneous.

$$\ce{alkene + Br2 -> alkaneBr2}$$

!!! example
    This process is used to test for alkenes/alkynes in a solution. As bromine water is red-brown, if alkenes/alkynes are present, the water will be **decolourised** from red-brown to become more colourless.

!!! example
    <img src="/resources/images/halogenation.jpeg" width=700>(Source: Kognity)</img>

#### Hydrogenation

The addition of hydrogen follows the same principle as that of halogenation.

$$\ce{alkene + H2 ->[\text{heat, high pressure, Ni/Pt/Pd}] alkane}$$

!!! example
     <img src="/resources/images/hydrogenation.png" width=700>(Source: Kognity)</img>

#### Hydrohalogenation

The addition of both a hydrogen and halogen follows similar principles.

$$\ce{alkene + HBr -> alkaneBr}$$

#### Hydration

Hydration is the addition of an $\ce{H-OH}$ group (colloquially known as water) onto an alkene/yne within 6 mol/L $\ce{H+}$.

$$\ce{alkene + H2O ->[6 mol/L H+] alkaneOH}$$

!!! example
    <img src="/resources/images/hydration.jpeg" width=700>(Source: Kognity)</img>

## Resources

 - [IB Chemistry Data Booklet](/resources/g11/ib-chemistry-data-booklet.pdf)
 - [IB HL Chemistry Syllabus](/resources/g11/ib-chemistry-syllabus.pdf)
 - [Significant Figures/Digits](/resources/g11/chemistry-sig-figs.pdf)
 - [Error Analysis and Significant Figures (long)](/resources/g11/error-analysis-sig-figs.pdf)
 - [General Guidelines for Writing a Formal Laboratory Report](/resources/g11/lab-report-guidelines.pdf)
 - [Designing an IB Investigation](/resources/g11/designing-investigation.pdf)
 - [Textbook: Pearson Higher Level Chemistry](/resources/g12/textbook-hl-chem.pdf) ([Answers](/resources/g12/textbook-hl-chem-answers.pdf)) - [mini Eifueo](/resources/g12/textbook-hl-chem-eifueo.pdf)
