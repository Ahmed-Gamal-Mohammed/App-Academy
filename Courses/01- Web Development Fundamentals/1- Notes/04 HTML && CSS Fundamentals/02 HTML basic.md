- First of all you need to check if you need for creating new repo and clone it or clone the current repo 
- for creating new repo (You know how)
- for Cloning 
	- you will go into repo and copy SSH link of the repo 
	- open the terminal and write the following command 
		- ```git clone + the linke you coppied (SSH link) ```
- For opening VScode for the directory you want write the following command 
	- ```code + the directory you want```
- For creating file into the directory you want 
	- ```touch + file name```
- If you need to open the html in you google browser use the following command 
	- ```open + file name ```
- for pushing your changing to the repo on GitHub use the following command 
	- After commit it in the git Using the following commands 
		- 1- ```git add + file name ```
		- 2- ``` git commit -m "note / comment"```
	- If you need to check everything use ``git status``
	- then use the following command for push it on GitHub
		- ``git push origin main``
---

```
<html>
  <head>
		<title> An HTML Document with an Empty Body </title>
  </head>

  <body>
  </body>
</html>
```

- The html tag warps the entire document, All other content should be within the ==html== open and closed tags
- Basic parts of HTML called tags (**html , head, title, body**)
- **head** tags contains metadata about the document, in this case the **title** tag which specifies the title of the HTML document.
- Between the open and closed **body** tag should be the place where you put all of the visible content of your HTML document 

---

The Three components of HTML
===============================
HTML has three components that form its basic building blocks: **tags, elements and attributes** 
1- Tags
========
Any text that you write inside the angle brackets **< >** will not be displayed in the browser, The text inside the angle brackets is just used to tell the browser how to display or transform regular text located between the opening tag and closed tag
```
<h1> Main Heading </h1>
```
1- always use angle brackets for tags. Square brackets, curly brackets, parentheses. none of those are for tags in HTML 
2- Tags **almost** always come in pairs. This means that, except for a few special tags, you must always close tag after opening 

---
2- Elements
============
An **HTML element** is the entire structure that consists of:

1. **Opening tag**: This tells the browser that the element is starting. For example, `<p>`.
2. **Content**: This is the text or other HTML elements that go inside the opening and closing tags. For example, the text `This is a paragraph`.
3. **Closing tag**: This tells the browser that the element is ending. For example, `</p>`.

### Example of an HTML element:
```<p>This is a paragraph.</p>```
n this case:

- `<p>` is the **opening tag**.
- `This is a paragraph.` is the **content**.
- `</p>` is the **closing tag**.
So, the **element** consists of the entire structure:
### Another Example: An `<img>` element

Some elements don’t have content or a closing tag, like the image (`<img>`) tag:
```<img src="image.jpg" alt="A sample image" />```

In this case, the entire structure `<img src="image.jpg" alt="A sample image" />` is the **element**, even though it doesn’t have a closing tag or inner content.

---
3- Attributes 
============
Attributes provide **extra information** about an HTML element. They go inside the **opening tag** and modify how the element behaves or displays. Attributes are written as **name-value pairs** in the form: `attribute="value"`.

### Key Points about Attributes:

1. **Position**: Attributes are always inside the **opening tag**, after the element name.
    
    Example: `<a href="https://example.com">Link</a>`
    
    Here, `href="https://example.com"` is an attribute inside the `<a>` (anchor) tag.
    
2. **Format**: Attributes are written as a **name** followed by an **equals sign** and a **value** in quotes.
    
    Example: `<img src="image.jpg" alt="A description" />`
    
    - `src` is an attribute that tells the browser where to find the image (`"image.jpg"`).
    - `alt` is another attribute that provides alternative text (`"A description"`) in case the image can’t be displayed.

### Common HTML Attributes:

`href` (for `<a>` tags): Specifies the **URL** of a link.
```
<a href="https://google.com">Visit Google</a>
```

`src` (for `<img>` tags): Specifies the **source** of an image.
```
`<img src="photo.jpg" alt="A beautiful view" />`
```

- `alt` (for `<img>` tags): Provides **alternative text** for an image, useful for accessibility or when the image doesn’t load.
    
- `class` (for most elements): Defines one or more **CSS classes** for an element, used for styling.
```
<p class="intro">This is an introduction paragraph</p>
```

`id` (for most elements): Assigns a **unique identifier** to an element, often used for linking or styling.
```
<div id="header">This is the header section.</div>
```
---
Each value for the "id" attribute must be unique across the entire HTML document. That gives each element its own unique identifier that you can use as a CSS selector to apply styling to one specific element.

1- **Unique Identifier**: The value of the `id` attribute must be **unique** throughout the entire HTML document. This means no two elements can have the same `id` value.

- Example: If one element has `id="header"`, no other element in the same document can also have `id="header"`.
```
<div id="header">This is the header section.</div>
<div id="header">This will cause an error because "header" is already used.</div>
```

2- **Purpose of `id`**:
- The `id` is often used in **CSS** or **JavaScript** to target a specific element on the page.
- In **CSS**, the `id` can be used as a **selector** to style a particular element.
- In **JavaScript**, the `id` allows you to manipulate or interact with that specific element programmatically.

### Why Does It Need to Be Unique?

- The `id` is unique so that when you're applying styles or JavaScript actions, you know you're targeting **one specific element** and not multiple elements by accident.
- If two elements have the same `id`, it can lead to confusion or unintended behavior in styling and scripting because the browser doesn't know which element you want to target.
---

The ==class== attribute is another way for CSS to be able to select HTML elements. Classes are meant to be applied to more than one element. That means that there's nothing wrong with the following HTML even though the paragraph tags have the same class value. (Note that the ids are different, though.)

- Pro-tip: attributes like `id` and `class` are case sensitive!

```
<p id="paragraph-1" class="fancy-paragraph" title="I am a title">
  Hover over me to see the title
</p>

<p id="paragraph-2" class="fancy-paragraph">
  I have no title. I am sad.
</p>
```

If an HTML element needs to have more than one class, you write a _space-delimited list_ in the class attribute's value like this.
`
```
<p id="paragraph-1" class="fancy-paragraph error-message">
  Hover over me to see the title
</p>
```

This way the paragraph would have the CSS rules applied to it for all paragraph tags, any rules for the class "fancy-paragraph", any rules for the class "error-message", and any rules for the HTML element with the id of "paragraph-1

---


```
<!DOCTYPE html>

<html lang="en">

<head>

<title>HTML</title>

</head>

<body>

// this is an 
<h1>HTML Basics</h1>

<h2>Elements and Tags</h2>

  
<img src="cat.jpg" alt="">

  
<h2 id="attr-heading">Attributes</h2>

<img src="Html.jpg" alt="HTML5 Logo">
  
</body>

</html>
```

---








