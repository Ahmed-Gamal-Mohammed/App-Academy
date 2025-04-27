# Flexible Box Model
The **Flexible Box Model**, otherwise known as **Flexbox** is a CSS module that provides a convenient way to display items inside a _flexible_ container so that the layout is responsive.
## Using flexbox
With flexbox, a container element is automatically resized to fit the viewport size. Elements within the container are resized and distributed to best fill the available space.

The [flexbox layout] consists of CSS styles applied to:
- A parent element (i.e. _**flex container**_)
- Its children (i.e. _**flex items**_)
The image below shows an example of how elements in a container could be laid out using flexbox:

![Flexbox](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/flexbox-elements.png)
## Flex container setup
To set a parent element to be a flex container, simply apply `display: flex` to a CSS class selector, like so:
```CSS
.container {
  display: flex;  /* OR inline-flex */
}
```
By default, flex items will try to fit onto one line. To get elements within the container to wrap to a new line, add the `flex-wrap` property to the container:
```CSS
.container {
  display: flex;
  flex-wrap: wrap;  /* OR nowrap OR wrap-reverse. */
}
```
![[Pasted image 20250427120436.png]]
Set the direction of the main axis using `flex-direction`. This allows either _rows_ or _columns_ of elements:
```CSS
container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;  /* OR row-reverse OR column OR column-reverse */
}
```

![Flex direction](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/flex-direction.png)
### Optional: Combining properties
Combine both `flex-direction` and `flex-wrap` with a single property called `flex-flow`:
```CSS
.container {
  display: flex;
  flex-flow: row wrap;  /* Set flex-direction first, followed by flex-wrap. */
}
```
### Flex items styles
You are not required to put styles on the flex items, but you may choose to do so for additional customization.

By default, flex items appear in the order they are added to the HTML document (i.e. the order they are listed in an HTML file). However, you can use the `order` property to change their order in the flex container.
```CSS
.item-1 {
  order: 1;  /* Must be an integer. Default is 0. */
}
.item-2 {
  order: 2;  /* Must be an integer. Default is 0. */
}
.item-3 {
  order: 3;  /* Must be an integer. Default is 0. */
}
```

Tip: Order is rarely set through CSS since it is usually the same as the order in the HTML. 
# Flexible Box Alignment
One of the most common reasons to use a flexbox is to control the alignment and size of items relative to each other. Some examples include
- Vertical and/or horizontal alignment, such as centering
- Spacing items in a single row or column
- Stretching multiple content areas giving more space to the ones that have more content
- Stretching one content area while keep others a fixed width (or height)
## Controlling alignment and spacing
While there are many options associated with flexbox, there are some that are far more common and very important to understand. They can be used to handle most of the use cases.
### justify-content

Defines the alignment of flex items along the **main axis**, and distributes extra container space around/between items.

- `flex-start` - Keep items their designated size and stack them all at the start
- `flex-end` - Keep items their designated size and stack them all at the end
- `center` - Keep items their designated size and stack them all in the middle
- `space-between` - Keep items their designated size and put all extra space between them
- `space-around` - Keep items their designated size and put space at the start, at the end, and in between
- `stretch` - Grow or shrink items to fill all the space

### align-items

Defines the alignment of flex items along the **cross axis**, and distributes extra container space around/between items.

- `flex-start`
- `flex-end`
- `center`
- `stretch`

### gap

Defines the amount of space between items.

Reminder: `padding` controls the amount of space before the first item, and after the last item.

## Understanding `flex-direction`
When the `flex-direction` is `row`, then `justify-content` controls the horizontal and `align-items` controls the vertical. This is the most common configuration. In this case, `flex-start` is the left or top and `flex-end` is right or bottom.

![Flex direction row](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/reading-flexbox-alignment-css/flex-direction-row.png)

However, if `flex-direction` is `column`, then they switch
- `justify-content` is in the vertical direction with `flex-start` as the "top"
- `align-items` is in the horizontal direction with `flex-start` as the "left"

![Flex direction column](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/reading-flexbox-alignment-css/flex-direction-column.png)
Reversing either the row or column switches the start and end.

So, `row-reverse` goes from right to left.

![Flex direction row reverse](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/reading-flexbox-alignment-css/flex-direction-row-reverse.png)

And `column-reverse` goes from bottom to top.

![Flex direction column reverse](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/reading-flexbox-alignment-css/flex-direction-column-reverse.png)

Hopefully, this understanding will help you remember why flexbox uses the alignment and justification based on `start` and `end` instead of `left`, `right`, `top` and `bottom`.
## Resizing flex items
It is important to understand how to control the way that items within a flexbox resize. There are three main properties that are set for each item that is in the flexbox.
- `flex-grow` -- Dictates amount of available space inside the flex container the item should take up. Must be an integer. Default is 0 which means not to grow at all. A value of 1 means the items will grow to fill as much area as it can (relative to how the other items are resizing, or not).
- `flex-shrink` -- Defines the ability for a flex item to shrink if necessary. Must be an integer. Default is 1 which means to shrink as necessary. A value of zero will force an item not to change its size.
- `flex-basis` -- The default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, 75px, etc.) or a keyword (e.g. auto, content). For example, 3 items with a `flex-basis` of 25%, 50% and 25% respectively will give a narrow column, a wide middle and another narrow column (same width on left and right).

While these properties can be set separately, best practice says to set them together using the `flex` property, because there are extra rules used by the browsers to intelligently handle the resizing.

- `flex` -- Shorthand for `flex-grow`, `flex-shrink` and `flex-basis`. Default is `0 1 auto` meaning "do not grow larger than the content", "shrink to fit available space", and "set the base size automatically".
