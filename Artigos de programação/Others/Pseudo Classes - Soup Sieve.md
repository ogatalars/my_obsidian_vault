---
created: 2024-11-21T11:23:59 (UTC -03:00)
tags: []
source: https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:not
author: 
---

# Pseudo Classes - Soup Sieve

> ## Excerpt
> A modern CSS selector library for Beautiful Soup.

---
## Overview[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#overview "Permanent link")

These are pseudo classes that are either fully or partially supported. Partial support is usually due to limitations of not being in a live, browser environment. Pseudo classes that cannot be implemented are found under [Non-Applicable Pseudo Classes](https://facelessuser.github.io/soupsieve/selectors/unsupported/#non-applicable-pseudo-classes). Any selectors that are not found here or under the non-applicable either are under consideration, have not yet been evaluated, or are too new and viewed as a risk to implement as they might not stick around.

## `:any-link`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:any-link "Permanent link")

Selects every `<a>`, or `<area>` element that has an `href` attribute, independent of whether it has been visited.

New in 2.2

The CSS specification recently updated to not include `<link>` in the definition; therefore, Soup Sieve has removed it as well.

## `:checked`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:checked "Permanent link")

Selects any `<input type="radio"/>`, `<input type="checkbox"/>`, or `<option>` element (in a `<select>` element) that is checked or toggled to an on state.

## `:default`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:default "Permanent link")

Selects any form element that is the default among a group of related elements, including: `<button>`, `<input type="checkbox">`, `<input type="radio">`, `<option>` elements.

## `:defined`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:defined "Permanent link")

In a browser environment, this represents _defined_ elements (names without hyphens) and custom elements (names with hyphens) that have been properly added to the custom element registry. Since elements cannot be added to a custom element registry in Beautiful Soup, this will select all elements that are not custom tags. `:defined` is a HTML specific selector, so it doesn't apply to XML.

## `:dir()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:dir "Permanent link")

Selects elements based on text directionality. Accepts either `ltr` or `rtl` for "left to right" and "right to left" respectively.

## `:disabled`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:disabled "Permanent link")

Selects any element that is disabled.

## `:empty`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:empty "Permanent link")

Selects elements that have no children and no text (whitespace is ignored).

## `:enabled`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:enabled "Permanent link")

Selects any element that is enabled.

## `:first-child`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:first-child "Permanent link")

Selects the first child in a group of sibling elements.

## `:first-of-type`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:first-of-type "Permanent link")

Selects the first child of a given type in a group of sibling elements.

## `:has()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#has "Permanent link")

Selects an element if any of the relative selectors passed as parameters (which are relative to the `:scope` of the given element), match at least one element.

While the level 4 specifications state that [compound](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#compound-selector) selectors are supported, complex selectors are planned for level 5 CSS selectors. Soup Sieve supports [complex](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#complex-selector) selectors.

In addition to supporting complex selectors, Soup Sieve also supports nested `:has()` which has been excluded from the level 4 specifications to help encourage browsers to implement `:has()`. This exclusion helps to reduces complexity and improves performance in a live environment. As these performance concerns are not an issue in a scraping environment compared to a web browser, Soup Sieve has no intentions on restricting the nesting of `:has()`. Users can always choose not to nest `:has()` if there are concerns.

```
<span></span><code><span>:</span><span>has</span><span>(</span><span>selector</span><span>)</span>
<span>:</span><span>has</span><span>(&gt;</span><span> </span><span>selector</span><span>)</span>
<span>:</span><span>has</span><span>(~</span><span> </span><span>selector</span><span>)</span>
<span>:</span><span>has</span><span>(+</span><span> </span><span>selector</span><span>)</span>
<span>:</span><span>has</span><span>(</span><span>selector1</span><span>,</span><span> </span><span>&gt;</span><span> </span><span>selector2</span><span>,</span><span> </span><span>~</span><span> </span><span>selector3</span><span>,</span><span> </span><span>+</span><span> </span><span>selector4</span><span>)</span>
</code>
```

## `:in-range`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:in-range "Permanent link")

Selects all `<input>` elements whose values are in range according to their `type`, `min`, and `max` attributes.

## `:indeterminate`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:indeterminate "Permanent link")

Selects all form elements whose are in an indeterminate state.

An element is considered indeterminate if:

-   The element is of type `<input type="checkbox"/>` and the `indeterminate` attribute is set.
-   The element is of type `<input type="radio"/>` and all other radio controls with the same name are not selected.
-   The element is of type `<progress>` with no value.

## `:is()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:is "Permanent link")

Selects an element, but only if it matches at least one selector in the selector list.

The alias `:matches()` is also supported as it was the original name for the selector, and some browsers support it. It is strongly encouraged to use `:is()` instead as support for `:matches()` may be dropped in the future.

While the level 4 specifications state that [compound](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#compound-selector) selectors are supported, some browsers (Safari) support complex selectors which are planned for level 5 CSS selectors. Soup Sieve also supports [complex](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#complex-selector) selectors.

```
<span></span><code><span>:</span><span>is</span><span>(</span><span>selector1</span><span>,</span><span> </span><span>selector2</span><span>)</span>
</code>
```

## `:lang()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:lang "Permanent link")

Level 3 CSS

Selects an element whose associated language matches the provided **language** or whose language starts with the provided **language** followed by a `-`. Language is determined by the rules of the document type.

Level 4 CSS

The level 4 CSS specifications adds the ability to define multiple language tags using a comma separated list. The specifications also allow for BCP 47 language ranges as described in [RFC4647](https://tools.ietf.org/html/rfc4647) for extended filtering. This enables implicit wildcard matching between subtags. For instance, `:lang(de-DE)` will match all of `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE`, and `de-Latn-DE-1996`. Implicit wildcard matching will not take place at the beginning on the primary language tag, `*` must be used to force wildcard matching at the beginning of the language. If desired an explicit wildcard between subtags can be used, but since implicit wildcard matching already takes place between subtags, it is not needed: `de-*-DE` would be the same as just using `de-DE`.

```
<span></span><code><span>:</span><span>lang</span><span>(</span><span>'*-language'</span><span>,</span><span> </span><span>language2</span><span>)</span>
</code>
```

## `:last-child`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:last-child "Permanent link")

Selects the last element among a group of sibling elements.

## `:last-of-type`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:last-of-type "Permanent link")

Selects the last child of a given type in a group of sibling elements.

## `:link`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:link "Permanent link")

Selects a link (every `<a>` and `<area>` element with an `href` attribute) that has not yet been visited.

Since Beautiful Soup does not have _visited_ states, this will match all links, essentially making the behavior the same as `:any-link`.

New in 2.2

The CSS specification recently updated to not include `<link>` in the definition; therefore, Soup Sieve has removed it as well.

## `:not()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:not "Permanent link")

Level 3 CSS

Selects all elements that do not match the selector. The level 3 CSS specification states that `:not()` only supports simple selectors.

Level 4+ CSS

Selects all elements that do not match any of the selectors in the selector list. While the level 4 specifications state that [compound](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#compound-selector) selectors are supported, some browsers (Safari) support complex selectors which are planned for level 5 CSS selectors. Soup Sieve also supports [complex](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#complex-selector) selectors.

```
<span></span><code><span>:</span><span>not</span><span>(</span><span>compound</span><span>.</span><span>selector</span><span>,</span><span> </span><span>complex</span><span> </span><span>&gt;</span><span> </span><span>selector</span><span>)</span>
</code>
```

## `:nth-child()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:nth-child "Permanent link")

`:nth-child()` matches elements based on their position in a group of siblings.

Level 3 CSS

-   The keywords `even` and `odd` will respectively select elements whose position is either even or odd amongst a group of siblings.
    
-   Patterns in the form `an+b` selects elements based on their position in a group of siblings, for every positive integer or zero value of `n`. The index of the first element is `1`. The values `a` and `b` must both be integers.
    

```
<span></span><code><span>:</span><span>nth-child</span><span>(</span><span>even</span><span>)</span>
<span>:</span><span>nth-child</span><span>(</span><span>odd</span><span>)</span>
<span>:</span><span>nth-child</span><span>(</span><span>2</span><span>)</span>
<span>:</span><span>nth-child</span><span>(</span><span>2n</span><span>+</span><span>2</span><span>)</span>
</code>
```

Level 4+ CSS

Level 4 CSS adds the additional pattern in the form `an+b of S` where `S` represents a selector list. `an+b` can also be substituted with `even` or `odd`.

When using the pattern `an+b of S`, the pattern will select elements from a sub-group of sibling elements that all match the selector list (`[of S]?`), based on their position within that sub-group, using the pattern `an+b`, for every positive integer or zero value of `n`. The index of the first element is `1`. The values `a` and `b` must both be integers.

Essentially, `img:nth-of-type(2)` would be equivalent to `:nth-child(2 of img)`. The advantage of using `:nth-child(an+b [of S]?)` over `:nth-of-type` is that `:nth-of-type` is restricted to types, while `:nth-child(an+b [of S]?)` can use [complex](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#complex-selector) selectors.

While the level 4 specifications state that [compound](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#compound-selector) selectors are supported, complex selectors are planned for level 5 CSS selectors. Soup Sieve supports [complex](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#complex-selector) selectors.

## `:nth-last-child()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:nth-last-child "Permanent link")

`:nth-last-child()` matches elements based on their position in a group of siblings, counting from the end.

Level 3 CSS

-   Counting from the end, the keywords `even` and `odd` will respectively select elements whose position is either even or odd amongst a group of siblings.
    
-   Counting from the end, patterns in the form `an+b` selects elements based on their position in a group of siblings, for every positive integer or zero value of `n`. The index of the first element is `1`. The values `a` and `b` must both be integers.
    

```
<span></span><code><span>:</span><span>nth-last-child</span><span>(</span><span>even</span><span>)</span>
<span>:</span><span>nth-last-child</span><span>(</span><span>odd</span><span>)</span>
<span>:</span><span>nth-last-child</span><span>(</span><span>2</span><span>)</span>
<span>:</span><span>nth-last-child</span><span>(</span><span>2n</span><span>+</span><span>2</span><span>)</span>
</code>
```

Level 4+ CSS

Level 4 CSS adds the additional pattern in the form `an+b of S` where `S` represents a selector list. `an+b` can also be substituted with `even` or `odd`.

When using the pattern `an+b of S`, the pattern will select elements from a sub-group of sibling elements that all match the selector list (`[of S]?`), based on their position within that sub-group, using the pattern `an+b`, for every positive integer or zero value of `n`. The index of the first element is `1`. The values `a` and `b` must both be integers. Elements will be counted from the end.

Essentially, `img:nth-last-of-type(2)` would be equivalent to `:nth-last-child(2 of img)`. The advantage of using `:nth-last-child(an+b [of S]?)` over `:nth-last-of-type` is that `:nth-last-of-type` is restricted to types, while `:nth-last-child(an+b [of S]?)` can use [complex](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#complex-selector) selectors.

While the level 4 specifications state that [compound](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#compound-selector) selectors are supported, complex selectors are planned for level 5 CSS selectors. Soup Sieve supports [complex](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#complex-selector) selectors.

```
<span></span><code><span>:</span><span>nth-last-child</span><span>(</span><span>2</span><span> </span><span>of</span><span> </span><span>img</span><span>)</span>
</code>
```

## `:nth-last-of-type()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:nth-last-of-type "Permanent link")

`:nth-of-type()` matches elements of a given type, based on their position among a group of siblings, counting from the end.

-   The keywords `even` and `odd`, and will respectively select elements, from a sub-group of sibling elements that all match the given type, whose position is either even or odd amongst that sub-group of siblings. Starting position is counted from the end.
    
-   Patterns in the form `an+b` select from a sub-group of sibling elements that all match the given type, based on their position within that sub-group, for every positive integer or zero value of `n`. The index of the first element is `1`. The values `a` and `b` must both be integers. Starting position is counted from the end.
    

```
<span></span><code><span>element</span><span>:</span><span>nth-last-of-type</span><span>(</span><span>even</span><span>)</span>
<span>element</span><span>:</span><span>nth-last-of-type</span><span>(</span><span>odd</span><span>)</span>
<span>element</span><span>:</span><span>nth-last-of-type</span><span>(</span><span>2</span><span>)</span>
<span>element</span><span>:</span><span>nth-last-of-type</span><span>(</span><span>2n</span><span>+</span><span>2</span><span>)</span>
</code>
```

## `:nth-of-type()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:nth-of-type "Permanent link")

`:nth-of-type()` matches elements of a given type, based on their position among a group of siblings.

-   The keywords `even` and `odd`, and will respectively select elements, from a sub-group of sibling elements that all match the given type, whose position is either even or odd amongst that sub-group of siblings.
    
-   Patterns in the form `an+b` select from a sub-group of sibling elements that all match the given type, based on their position within that sub-group, for every positive integer or zero value of `n`. The index of the first element is `1`. The values `a` and `b` must both be integers.
    

```
<span></span><code><span>element</span><span>:</span><span>nth-of-type</span><span>(</span><span>even</span><span>)</span>
<span>element</span><span>:</span><span>nth-of-type</span><span>(</span><span>odd</span><span>)</span>
<span>element</span><span>:</span><span>nth-of-type</span><span>(</span><span>2</span><span>)</span>
<span>element</span><span>:</span><span>nth-of-type</span><span>(</span><span>2n</span><span>+</span><span>2</span><span>)</span>
</code>
```

## `:only-child`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:only-child "Permanent link")

Selects element without any siblings.

## `:only-of-type`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:only-of-type "Permanent link")

Selects element without any siblings that matches a given type.

## `:optional`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:optional "Permanent link")

Selects any `<input>`, `<select>`, or `<textarea>` element that does not have the `required` attribute set on it.

## `:out-of-range`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:out-of-range "Permanent link")

Selects all `<input>` elements whose values are out of range according to their `type`, `min`, and `max` attributes.

## `:placeholder-shown`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:placeholder-shown "Permanent link")

Selects any `<input>` or `<textarea>` element that is currently displaying placeholder text via the `placeholder` attribute.

Parser Differences

In general, when an input has a placeholder, but the element also has valid content, the placeholder is not shown. For instance, when a `textarea` has actual text associated with the element, the placeholder is overridden with the actual content. A `textarea` is allowed no more than a single newline to be considered as having no content (carriage returns don't count).

`html5lib` will strip out carriage returns, but `lxml` and `html.parser` will not. This will cause a difference between the parsers when dealing with Windows style line endings and `textareas`. `html5lib` seems to follow _closest_ to what real browsers do. Soup Sieve is simply following the specification as best it can. Unfortunately, it can't account for the quirks of the parsers in this case without introducing other issues.

## `:read-only`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:read-only "Permanent link")

Selects elements (such as `<input>` or `<textarea>`) that are _not_ editable by the user. This does not just apply to form elements with `readonly` set, but it applies to **any** element that cannot be edited by the user.

## `:read-write`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:read-write "Permanent link")

Selects elements (such as `<input>` or `<textarea>`) that are editable by the user. This does not just apply to form elements as it applies to **any** element that can be edited by the user, such as a `<p>` element with `contenteditable` set on it.

## `:required`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:required "Permanent link")

Selects any `<input>`, `<select>`, or `<textarea>` element that has the `required` attribute set on it.

## `:root`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:root "Permanent link")

Selects the root element of a document tree.

## `:scope`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:scope "Permanent link")

New 2.6

`&`, which was introduced in [CSS Nesting Level 1](https://www.w3.org/TR/css-nesting-1/#nest-selector) can be used as an alternative to `:scope` and is essentially equivalent. Soup Sieve does not support nesting selectors, but `&`, when not used in the context of nesting is treated as the scoping root per the specification.

`sv.select('& > p', soup.div)` is equivalent to `sv.select(':scope > p', soup.div)`.

`:scope` represents the the element a `match`, `select`, or `filter` is being called on. If we were, for instance, using `:scope` on a div (`sv.select(':scope > p', soup.div)`) `:scope` would represent **that** div element, and no others. If called on the Beautiful Soup object which represents the entire document, it would simply select [`:root`](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:root).

## `:where()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:where "Permanent link")

Selects an element, but only if it matches at least one selector in the selector list. In browsers, this also has zero specificity, but this only has relevance in a browser environment where you have multiple CSS styles, and specificity is used to see which applies. Beautiful Soup and Soup Sieve don't care about specificity so `:where()` is essentially just an alias for `:is()`.

While the level 4 specifications state that [compound](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#compound-selector) selectors are supported, some browsers (Safari) support complex selectors which are planned for level 5 CSS selectors. Soup Sieve also supports [complex](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#complex-selector) selectors.

```
<span></span><code><span>:</span><span>where</span><span>(</span><span>selector1</span><span>,</span><span> </span><span>selector2</span><span>)</span>
</code>
```

## `:-soup-contains()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:-soup-contains "Permanent link")

Selects elements that contain the provided text. Text can be found in either itself, or its descendants.

Originally, there was a pseudo-class called `:contains()` that was originally included in a [CSS early draft](https://www.w3.org/TR/2001/CR-css3-selectors-20011113/#content-selectors), but was dropped from the draft in the end. Soup Sieve implements it how it was originally proposed accept for two differences: it is called `:-soup-contains()` instead of `:contains()`, and it can accept either a single value, or a comma separated list of values. An element needs only to match at least one of the items in the comma separated list to be considered matching.

Rename 2.1

The name `:-soup-contains()` is new in version 2.1. Previously, it was known by `:contains()`. While the alias of `:contains()` is currently allowed, this alias is deprecated moving forward and will be removed in a future version. It is recommended to migrate to the name `:-soup-contains` moving forward.

Expensive Operation

`:-soup-contains()` is an expensive operation as it scans all the text nodes of an element under consideration, which includes all descendants. Using highly specific selectors can reduce how often it is evaluated.

```
<span></span><code><span>:</span><span>-soup-contains</span><span>(</span><span>text</span><span>)</span>
<span>:</span><span>-soup-contains</span><span>(</span><span>"This text"</span><span>,</span><span> </span><span>"or this text"</span><span>)</span>
</code>
```

## `:-soup-contains-own()`[](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:-soup-contains-own "Permanent link")

Selects elements that contain the provided text. Text must be found in the target element and not in its descendants. If text is broken up with with descendant elements, each text node will be evaluated separately.

Syntax is the same as [`:-soup-contains()`](https://facelessuser.github.io/soupsieve/selectors/pseudo-classes/#:-soup-contains).

```
<span></span><code><span>:</span><span>-soup-contains-own</span><span>(</span><span>text</span><span>)</span>
<span>:</span><span>-soup-contains-own</span><span>(</span><span>"This text"</span><span>,</span><span> </span><span>"or this text"</span><span>)</span>
</code>
```

New in 2.1

`:-soup-contains-own()` was added in 2.1.
