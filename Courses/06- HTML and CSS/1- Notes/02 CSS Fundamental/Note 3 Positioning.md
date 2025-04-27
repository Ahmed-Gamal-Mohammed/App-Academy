The CSS property `position` allows us to set the position of elements on a page and is an integral part of creating a Web page layout.

The `position` property accept any of the following five values 
1. Static 
2. Relative 
3. Absolute 
4. Fixed 
5. Sticky 

All properties except for `static` are used in conjunction with the properties `top`, `right`, `bottom` and `left` to ultimately determine an element’s position on the page. The `top`, `right`, `left` and `bottom` properties are all optional, except in the case of a sticky element, which requires at least one of the four properties to be set.

For the rest of this article, the examples use the following HTML and base CSS.
```HTML
<div class="container">
	<div class="element" id="yellow-box">1</div>
	<div class="element" id="pink-box">2</div>
	<div class="element" id="blue-box">3</div>
</div>
```

```CSS
.container {
	background-color: #2b2d2f;
}

.element {
	box-sizing: border-box;
	display: inline-block;
	width: 100px;
	height: 280px;
	font-size: 36px;
}

#yellow-box {
	background-color: #ffff00;
}

#pink-box {
	background-color: #ff69b4;
}

#Because you're just explicitly setting the value to the value that it already is by default, nothing changes in the way the browser draws it.blue-box {
	background-color: #00eeee;
}
```
![[Pasted image 20250413221827.png]]
## Static Positioning 
Static is the default position value of page elements: A `Static` element is not considered to be positioned on the page, since it will appear normally according to the page flow. The properties `top`, `right`, `bottom` , `left` and `z-index` do not affect static elements 

```CSS
#pink-box{
	background-color : #ff69b4;
	position: static;
}
```
Because you're just explicitly setting the value to the value that it already is by default, nothing changes in the way the browser draws it.
![[Pasted image 20250421235349.png]]
## Relative Positioning 
- A relatively positioned element remains in its original position in the page flow (like a static element) and can be offset from that position using the `top`,`right`, `bottom`and `left` properties. 
- **The element is positioned relative to its initial place in the page flow**
- overlapping elements whose order can be set by the `z-index` property
- The `top`, `right`, `bottom`, and `left` properties take a length which, as you likely recall, is a value and a unit of measurement (or percentage).
```CSS
#pink-box {
  background-color: #ff69b4;
  bottom: 0;
  left: -20px;
  position: relative;
  right: 0;
  top: 0;
}
```
![[Pasted image 20250422000444.png]]
## Absolute Positioning 
An absolutely positioned element is removed from the page flow, and other elements around it act like it’s not there. The element is positioned in relation to its closest _positioned_ ancestor, or, if one cannot be found, to the `<html>` document. It can be offset from that position using the `top`, `right`, `bottom` and `left` properties. Absolute positioning creates a [stacking context]  overlapping elements whose order can be set by the `z-index` property. (See the MDN doc on [z-index] for an example.)


