
### 1- The Box Model
- The CSS Box Model is a concept that basically boils down to every HTML element has a box around it
- The diagram below shows The Box Model with content in the innermost layer, padding wrapped around it, a border wrapped around the padding, and margin as the outermost layer.
	- ![Box model](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/the-box-model.svg)
- We can change the size of the content with the CSS `width` and `height` properties. We can add or remove padding with the `padding` property, set the border with the `border` property, and add or remove the margin with the `margin` property.
- According to [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model), we know certain things about each box based on whether the boxed element is displayed as a block or inline.
	- 1- With elements (boxes) that have a `display` value of "block"
		- , either because it is the default value for that kind of element (i.e., `div` elements, headers, and `p` elements) or because it is specifically overridden in the CSS, the browser follows these rules to layout the element:
		- - The box fills available container space, and in most cases it fills up 100% of the available space, becoming as wide as its container.
		- Each new box appears on a new line/row.
		- The CSS properties `width` and `height` are respected.
		- The `padding`, `margin` and `border` of the box will push other elements farther away from the box.
		
	- 2- With elements (boxes) that have a `display` value of "inline", 
		- either because it is the default value for that kind of element (i.e., `span`, `a`, and `img` elements) or it is specifically overridden in the CSS, the browser follows these rules to layout the element:
		- - Each box appears next to each other in a single line until it fills up the available space.
		- - The CSS properties `width` and `height` don't apply.
		- - The `padding`, `margin` and `border` of a box are applied, but they don't push other inline boxes away from the box.
---



### 2-CSS Positioning 
=====================
The position property accepts any of the following  five values 
1- Static 
2- Relative 
3- Absolute 
4- fixed 
5- Sticky 

All properties except *static* are used in conjunction with the properties ==top== ==right== ==left== and ==bottom== 

---
1- **Static** is the default position value of page elements. A `static` element is not considered to be _positioned_ on the page, since it will appear normally according to the page flow. The properties `top`, `right`, `bottom`, `left` and `z-index` do not affect static elements.

---
2- **Relative positioning:** 
A relatively positioned element remains in its original position in the page flow (like a static element) and can be offset from that position using the `top`, `right`, `bottom` and `left` properties. The element is positioned _relative to its initial place in the page flow_. Relative positioning creates a [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) -- overlapping elements whose order can be set by the `z-index` property. (See the MDN doc on [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) for an example.)

---
3- **Absolute Positioning**
An absolutely positioned element is removed from the page flow, and other elements around it act like it’s not there. The element is positioned in relation to its closest _positioned_ ancestor, or, if one cannot be found, to the `<html>` document. It can be offset from that position using the `top`, `right`, `bottom` and `left` properties. Absolute positioning creates a [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) -- overlapping elements whose order can be set by the `z-index` property. (See the MDN doc on [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) for an example.)

---
4- **Fixed positioning**
A fixed element is removed from the page flow, like an absolutely positioned element. However, unlike an absolutely positioned element, a fixed element’s position is relative to the `<html>` document itself and not to an ancestor element. It is positioned using the `top`, `right`, `bottom` and `left` properties. Fixed positioning creates a [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) -- overlapping elements whose order can be set by the `z-index` property. (See the MDN doc on [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) for an example.)

---

### 3-Flexbox

- using the `justify-content` property, which aligns items horizontally and accepts the following values:
	
	- `flex-start`: Items align to the left side of the container.
	- `flex-end`: Items align to the right side of the container.
	- `center`: Items align at the center of the container.
	- `space-between`: Items display with equal spacing between them.
	- `space-around`: Items display with equal spacing around them
- use `align-items` to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:

	- `flex-start`: Items align to the top of the container.
	- `flex-end`: Items align to the bottom of the container.
	- `center`: Items align at the vertical center of the container.
	- `baseline`: Items display at the baseline of the container.
	- `stretch`: Items are stretched to fit the container.
- using `flex-direction`. This CSS property defines the direction items are placed in the container, and accepts the following values:

	- `row`: Items are placed the same as the text direction.
	- `row-reverse`: Items are placed opposite to the text direction.
	- `column`: Items are placed top to bottom.
	- `column-reverse`: Items are placed bottom to top.
- Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the `order` property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).
- Another property you can apply to individual items is `align-self`. This property accepts the same values as `align-items` and its value for the specific item.
- Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the `flex-wrap` property, which accepts the following values:
	- `nowrap`: Every item is fit to a single line.
	- `wrap`: Items wrap around to additional lines.
	- `wrap-reverse`: Items wrap around to additional lines in reverse.
- The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use `align-content` to set how multiple lines are spaced apart from each other. This property takes the following values:

	- `flex-start`: Lines are packed at the top of the container.
	- `flex-end`: Lines are packed at the bottom of the container.
	- `center`: Lines are packed at the vertical center of the container.
	- `space-between`: Lines display with equal spacing between them.
	- `space-around`: Lines display with equal spacing around them.
	- `stretch`: Lines are stretched to fit the container.
	This can be confusing, but `align-content` determin
	es the spacing between lines, while `align-items` determines how the items as a whole are aligned within the container. When there is only one line, `align-content` has no effect.

---

### 4-Grid
========
- `display: grid` if you want to use grid, so you must write grid
- You can identify the value of the column and rows by the following
	1- By percentage
	2- By auto
	3- By px (pixel)
	4- fr (fraction)
	5- repeat(the number of columns, number of repeats)
	6- minmax(the minimum value, the maximum value) you can put one of the min or max values with auto
	7- auto-fill ===> whenever you grow the width, then the number of columns or rows increase, same thing for decreasing the width or height
-  `row-gap: 10px;`  You can use gap instead of column and row , and give its the value of gap for row followed by value of gap for column 
- if you want to use justify-content, don't use fr (fraction) 
- if you want to use align-content, You must put height for your items 
---
### 5- Transition
==============
CSS transitions provides a way to control animation speed when changing CSS properties

Defining Transitions 
CSS Transitions are controlled using the shorthand transition property. This is the best way to configure transitions, as it makes it easier to avoid out of sync parameters, which can be very frustrating to have to spend lots of time debugging in CSS.

You can control the individual components of the transition with the following sub-properties:

| Sub-property        | Definition                                                                                                                                                                                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transition-property | Specifies the name or names of the CSS properties to which transitions should be applied. Only properties listed here are animated during transitions; changes to all other properties occur instantaneously as usual.                       |
| transition-duration | Specifies the duration over which transitions should occur. You can specify a single duration that applies to all properties during the transition, or multiple values to allow each property to transition over a different period of time. |
| transition-delay    | Defines how long to wait between the time a property is changed and the transition actually begins.                                                                                                                                          |
Exaples
```
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

```
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
}
```
---
### CSS Animations
for making animation for any element you should to use `@keyframes + name of element`

for specify an element to make animations for its only u should give name for this element using `anaimation-name` then give this name to ==keyframes== 

`animation-duration` ==> u should to use to specify the time you want the animations happen at

`animation-delay` ===> for make the animation take some times to start

`animation-iteration-count` ===> for control the time that this animation will apply 

`animation direction` (**Normal is the default value**) ====>  control the direction of the animations 

`animation-timing-function` ===> control the time of the animation 

`animation-fill-mode` ====> control the style before and after the animations

`animation-play-state` ====> takes two values (running --> for play the animation) (paused --->  for stop the animations)

`animation` ====> is a shortcut for all of the above 



