# CSS Selector 
A CSS Selector applies styles to a specific DOM element or elements. A Selector can be any of the following basic type 
1. **Type Selectors**=> matches elements by node name (e.g. `div`, `li`, `a`, `p` )
2. **Class Selector**==> Matches elements by class name (e.g. < button `class ="active"`>)
3. **ID Selector**==> matches elements by ID name (e.g. < div `id="list-1"` >)
4. **Universal selectors**==> matches elements of any type (e.g. `*`)
5. **Attribute selectors**==> matches elements based on the presence or value of a given attribute (e.g. a[title] matches all `a` elements with a `title` attribute )
The following CSS shows examples of each selector type 
```CSS
/* Type selector */
div{
	background-color : #00000;
}

/* Class selector */
.active{
	color : #fffff;
}

/* ID selector */
#list-1{
	border: 1px solid grey;
}
/* universal selector */
*{
	padding: 10px
}

/* Attribute selector */
a[title]{
	font-size : 2em;
}
```

## Class Selector 
You will probably be using class selectors the most often in your CSS, Since they will apply styles to every element that has a particular class name

We want to style all elements with the class of "boxy" to have:
1. A `border-radius` of 4px
2. A `box-shadow` with a y-offset of 20px
3. A `blur` of 2px
4. A `background-color` that is 20% opaque 

```CSS
/* Class Selector = class name preceded by a period */

.boxy{
border-radius : 4px;
box-shadow : 0 2px grey; /* offset-x | offset-y | color */
filter: blur(2px);
background-color: #0000000;
opacity: 0.2; /* 100% = 1 */
}
```

## One rule, many selectors
what of we wanted to initialize all H1 and H2 elements in the document ? We can conveniently apply the same styles to multiple elements by combing selectors, separated by a comma. 
Here is how we would initialize all H1s and H2s: 
```CSS
h1,h2{
	font-style : italic;
}
```
Now, what if we wanted to italicize only H1s with the ID "heading" and H2s with the class name "subheading". We could combine tag selectors with ID or class selectors by writing the tag name immediately followed by the ID or class selector
```CSS
h1#heading,
h2.subheading {
  font-style: italic;
}
```
## Combinators
Combinators are a type of CSS selector that _combine_ other selectors into more complex or targeted selectors. There aren't that many, and they're very powerful. Please note, though, that using a lot of them in your CSS can quickly grow the complexity of your CSS such that it becomes incomprehensible and unmaintainable. Please, use them with moderation.
## Descendant selectors
The descendant selector is represented by two selectors with just white space in between them (syntax: A(spaces, tabs, line breaks)B). This will select any element (B) that is a descendant of the first element (A).

Let’s look at an example. We want to style all ABBR elements contained in div elements so that all the content of the ABBR is uppercase.
We can use the following CSS to achieve the above specs:
```CSS
div abbr {
  text-transform: uppercase;
}
```
## Direct child selector
The `>` selector selects nodes that are direct children of the first element (syntax: A > B). It will match every element B that is immediately nested inside an element A. This is different from the descendant selector because it selects _only_ the **direct children** of an element.

Let’s look at an example. We want to style all **elements with the "is-active" class that are direct children of elements with the "menu" class** to have a #FFE0B2 background color.
```CSS
.menu > .is-active {
  background-color: #ffe0b2;
}
```

## Adjacent sibling selectors
The `+` selector selects adjacent siblings (syntax: A + B). This means that the second element (B) directly follows the first (A), and both share the same parent.
Let’s look at an example. We want to style all **H2 elements immediately preceded by H1 elements** to be italic. The style should be applied to H2s only (not H1s). We can use the following CSS to achieve the above specs:
```CSS
h1 + h2 {
  font-style: italic;
}
```
If you had that in some CSS applied to the following HTML, the content of the H2 tags tells you what would happen.
```HTML
<h1>Big header</h1>
<h2>This one is styled because it is directly adjacent to the H1</h2>
<h2>This one is NOT styled because there is no H1 right before it</h2>
```
## Pseudo-classes
A [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) specifies a special state of the selected element(s) and does not refer to any elements or attributes contained in the DOM (hence, _pseudo_). A pseudo-class is formed by a selector followed by a colon followed by the pseudo-class name (syntax: A:B).

Let’s look at an example. We want to style all **anchor tags only when the mouse is over the content of the anchor tag** to have:

- The font Roboto Condensed
- The text color #4FC3F7
- No underline
- A 2px bottom border (without changing layout) with the color #4FC3F7
We can use the following CSS to achieve the above specs:
```CSS
a:hover {
  font-family: "Roboto Condensed", sans-serif;
  color: #4fc3f7;
  text-decoration: none;
  border-bottom: 2px solid #4fc3f7;
}
```
Hovering over an element is a _state_ related to a user action and not to anything in the DOM. In the above CSS, we used the `:hover` pseudo-class selector to apply styles to `<a>` elements only when a user hovers over them.

Check out the MDN doc on [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) for a full list of pseudo-classes we can use with CSS selectors. Quite often, you will use the following pseudo-classes in real-world CSS.
- `active`: applies to elements like buttons when activated by a person, like when they "push down" on the button
- `checked`: applies to radio inputs, checkbox inputs, and options in drop downs when the user has toggled it into an "on" state
- `disabled`: applies to any disabled element, like a disabled button or input
- `first-child`: applies to the first element among a group of sibling elements
- `focus`: applies to elements that have the current focus, like inputs and buttons
- `hover`: applies to elements that currently have the pointing device (cursor) directly over it (it is problematic on touchscreens because it may never match the element because there is no persistent pointing device)
- `invalid`: applies to any form element in an invalid state due to client-side form validation
- `last-child`: applies to the last element among a group of sibling elements
- `not(selector)`: represents elements that do not match the provided selector
- `required`: applies to form elements that are required
- `valid`: applies to any form element in a valid state
- `visited`: applies to anchor tags of which the user has already been to the URL that the `href` points to

## Pseudo-selectors
Like pseudo-classes, pseudo-selectors select pseudo elements in the DOM. That's kind of weird, pseudo elements. The two that you will use most often are the `::after` and the `::before` pseudo-selectors. Both of them _create_ a pseudo-element as a child of the element to which the property applies. The `::after` variation creates the child as the _last_ child of the selected element. The `::before` variation creates the child as the _first_ child of the selected element. You can do neat things with that. For example, if you wanted to put happy faces at the beginning of all paragraphs. Then, you could do something like this
```CSS
<style>
  p::before {
    background-color: lightblue;
    border-right: 4px solid violet;
    content: ':-) ';
    margin-right: 4px;
    padding-left: 4px;
  }
  
</style>
<p>This is the first paragraph</p>
<p>This is the second paragraph</p>
<p>This is the third paragraph</p>
```
## Putting it together: CSS rules
A **CSS rule** is the collection of single or compound selectors, a curly brace, zero or more properties and their settings, and a closed curly brace.
```CSS
/* A CSS Rule that removes padding and margin from the document  */
/*---------------------------------------------------------------*/
/* The selectors are "html" and "body".                          */
/* The properties are "padding" and "margin", each with value 0. */
html, body {
  padding: 0;
  margin: 0;
}
```
## CSS Rule Specificity
### The four number calculation
The four numbers that the specificity calculation are, in _increasing_ order of importance

- the number of tag selectors in the selector
- the number of class, pseudo-element, and attribute selectors in the selector
- the number of id selectors in the selector
- is this an inline style

Hopefully, you don't put inline styles in your HTML. So, you can ignore that last one and focus on the first three.

The algorithm to determine the most specific rule goes like this. When comparing two selectors

1. If one has a greater number of ids, then it wins. If there is a winner, STOP.
2. They must have the same number of ids, so the one with the greater number of classes, pseudo-classes, and attributes wins. If there is a winner, STOP.
3. They must have the same number of ids and the same number of classes, too. The rule with the greatest number of tags wins. If there is a winner, STOP.
4. They have the same number of ids, classes, and tags. The rule that the browser _read last_ wins.
5. 