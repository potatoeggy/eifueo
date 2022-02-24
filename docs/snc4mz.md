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
