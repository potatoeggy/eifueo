# Contributing guidelines

If you would like to add or fix any content in this project, you will need to ensure that your changes retain the same style as the rest of the repository. The Eifueo project consists of multiple (mostly) standard Markdown documents.

## General Markdown

Even Markdown has multiple implementations, and prior knowledge of the markup language is required for contributions. For the following stylistic elements, the following symbols should be used:

 - `**Bold text**`: **Bold text**
 - `*Italicised text*`: *Italicised text*
 - `***Bold and italicised text***`: ***Bold and italicised text***

If a phrase would be bolded, do not bold any surrounding punctuation. If a phrase would be italicised, italicise any surrounding punctuation.

Tables must contain exactly one space between content and the vertical bars.

```
| Heading 1 | Heading 2 | Heading 3 |
| :-- | --- | --: |
| Left justify | Normal justify | Right justify |
```
| Heading 1 | Heading 2 | Heading 3 |
| :-- | --- | --: |
| Left justify | Normal justify | Right justify |

Lists must use hyphens with a space before and after. There should be newlines before and after lists.

```

There should be a newline before and after headings, except for headings that start a file. There should also be a space after a heading number sign.

```
### Heading example

Pomme de terre!
```

### Heading example

Pomme de terre!

Links to images must be either from Kognity or available for free non-commercial use. They should be sent to the site administrator's email to be loaded in as a static local asset. Images should be linked using HTML, have a maximum width of 700 pixels, contain a reference to the source organisation, and fit the overall theme of the site. The link to the image path is `/resources/images/image.file-extension`. If possible, PNGs are preferred. Images should be relevantly named in lowercase with hyphens separating words.

`<img src="/resources/images/velocity-time-graph.png" width=700>(Source: Kognity)</img>

## Special Markdown

Math is written in LaTeX and is rendered using MathJax.

`$Inline math: 1+2=3$`: $Inline math: 1+2=3$

Display math should always be on its own line. Multi-line math should have dollar signs on their own lines. There should always be a newline after display math.

```
Proof that 1 + 1 is 2:
$$display math: 1+2=3$$

More proof:
$$
1 + 1 = x \\
1 + 1 = 2
$$
```
Proof that 1 + 1 is 2:
$$display math: 1+2=3$$

More proof:
$$
1 + 1 = x \\
1 + 1 = 2
$$

Admonitions are provided by `mkdocs-material-extensions` and documentation for them can be found [here](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage). The types used in Eifueo are `example`, `definition`, `note`, and `info`. **The use of admonitions should be minimised, aside from example admonitions**.

## Writing style

This repository uses, unfortunately, my own personal style of English that is a mix of British and American English.

 - Titles should be written in sentence case
 - List items should have their first letter capitalised
 - "-ize" words should be written in the British form ("-ise")
 - "-or" words should be written in the British form ("-our")
 - "-ph-" words should be written in the American form ("-f-")
 - Punctuation follows quotes ("'content', more content")
 - Quotes should follow the American style ("'It was a potato,' he said.")


Most areas should be written in paragraphs, when possible, using a mostly formal tone.
