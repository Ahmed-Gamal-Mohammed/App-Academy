Div 
===
The ```<div>``` element is a fundamental part of HTML used for grouping and structuring content. It stands for "division" or "document division" and is a block-level container

### Characteristics of ```<div>```
1- **Block- Level Elements**
- The ```<div>``` element is a block-level element, meaning it takes up the full width available and starts on a new line.
2- **Container for Other Elements**:
- ```<div>``` does not affect the content inside it visually but serves as a container to group other HTML elements together. This is useful for applying styles, JavaScript interactions, or layout purposes.
3- The `<div>` element does not provide any semantic meaning or describe the content it contains. It is purely a structural element.

---

HTML Elements Reference l
===========================
-  **HTML**
   - This is the root (or top-level) element of an HTML document.
   - Every other element in the HTML document must be inside this element.
   - You can only have one `<html>` element in a document.
---
- **Global Attributes**
	   - It can use global attributes (attributes that can be used on any HTML element).
	   - Global attributes: These are attributes that can be used on any HTML element, not just the `<html>` element. Some common global attributes include:
		- `class`: for CSS styling
		- `id`: to uniquely identify an element
		- `style`: for inline CSS
		- `title`: to provide additional information

		For example, you could use:
		```<html lang="en" id="main-html" title="My                Webpage">```
---
- The `<html>` element has a default ARIA role of "document".
	- - ARIA roles: ARIA stands for "Accessible Rich Internet Applications." It's a set of attributes that can be added to HTML elements to provide additional information about the element's purpose or structure, especially for users of assistive technologies like screen readers.
	- The "document" role: In ARIA, the "document" role indicates that the content is a document-like object. It's used for the main content area of a page.
	- Default role: When we say the `<html>` element has a default ARIA role of "document", it means that even if you don't explicitly specify a role, browsers and assistive technologies will treat the `<html>` element as if it had `role="document"`.
	- What this means in practice:
    - You don't need to add `role="document"` to your `<html>` element.
    - Screen readers and other assistive technologies will understand that the entire HTML document is to be treated as a single, cohesive document.
```
<html lang="en">
  <!-- This is implicitly equivalent to: -->
</html>

<html lang="en" role="document">
  <!-- You don't need to add this role explicitly -->
</html>
```
---
 - **metadata** 
	- Metadata in the `<head>` section of an HTML document provides essential information about the page, such as:
		- **Page Title**: The name of the web page displayed in the browser tab or as the title in search engine results.
		- **Character Encoding**: Specifies which character set the page is using, like UTF-8 (a common encoding for most languages).
		- **View-port Settings**: Information about how the page should be displayed on different devices (especially mobile devices).
			- ``` <meta name="viewport" content="width=device-width, initial-scale=1.0">```
		- **Search Engine Optimization (SEO)**: Provides keywords and descriptions to help search engines understand the content of the page.
			- `<meta name="description" content="This is a description of my web page.">`
			- `<meta name="keywords" content="HTML, web development, metadata">`
		- **Links to Resources**: Points to external resources such as CSS stylesheets or favicon (icon displayed in the browser tab).
			- `<link rel="stylesheet" href="styles.css">
			- `<link rel="icon" href="favicon.ico" type="image/x-icon">`
		- **Author Information**: Contains information about the author of the webpage.
			- `<meta name="author" content="John Doe">`
- **Head**
	- The `<head>` element's main job is to include machine-readable information (metadata), such as the document title, links to external stylesheets, and scripts.
	- There can only be **one** `<head>` element in an HTML document, and it's typically placed as the first child of the `<html>` element.
	- `<head>` can include global attributes (e.g., `id`, `class`, `style`), but it's uncommon to use these in the `<head>`.
- **Body**
	- body : The HTML `body` element represents the content of an HTML document. There can be only one `body` element in a document.|

---
- **Link** 
	- The HTML External Resource Link element (`link`) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
- **title**
	- The **`<title>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element defines the document's title that is shown in a [browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser)'s title bar or a page's tab. It only contains text; tags within the element are ignored.
	- The `<title>` element is always used within a page's [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) block.
---
Content Section
================
- **footer** 
	- The HTML `footer` element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.
	- **Usage notes**
		- - Enclose information about the author in an [`<address>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address) element that can be included into the `<footer>` element.
		- - When the nearest ancestor sectioning content or sectioning root element is the body element the footer applies to the whole page.
		- - The `<footer>` element is not sectioning content and therefore doesn't introduce a new section in the [outline](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).
- **Header**
	- The `<header>` element in HTML is used to define introductory content, which typically appears at the top of a webpage or a section of a webpage.
	- **It often contains elements like:**
		- A **heading** (e.g., `<h1>` to `<h6>`)
		- A **logo**
		- A **search form**
		- An **author's name**
		- **Navigation links** (such as a global menu or links to sections of the page)
	- **Key Points about `<header>`**:
		- **Purpose**:
			- The `<header>` is used to group introductory or navigational elements. It helps organize content at the top of a page or a section.
		- **Global or Section-Specific**:
			- When the `<header>` is placed directly under the `<body>` element, it represents a global header for the entire page, often called a "banner" in accessibility terms.
			- If it's within another sectioning element (like `<article>`, `<section>`, or `<aside>`), the `<header>` only applies to that specific section, not the whole page.
		- **Structure**
			- It usually contains a **main heading** (`<h1> to <h6>`) for the surrounding section, but this is optional.
			- It can also include other elements like a company name, slogan, or other navigational aids.
		- **Accessibility**
			- If used directly inside `<body>`, it automatically takes on the **banner role** in the accessibility tree, which means screen readers identify it as the main page header.
			- When it's inside elements like `<article>`, `<nav>`, or `<section>`, it no longer has the banner role but is instead considered a part of that section's content.
		- **Restrictions**:
			- You cannot nest a `<header>` inside another `<header>`, `<footer>`, or `<address>`.
	- **Usage notes 
		- The `<header>` element has an identical meaning to the site-wide <`banner`> landmark role, unless nested within sectioning content. Then, the `<header>` element is not a landmark.
		- The `<header>` element can define a global site header, described as a `banner` in the accessibility tree. It usually includes a logo, company name, search feature, and possibly the global navigation or a slogan. It is generally located at the top of the page.
		- Otherwise, it is a `section` in the accessibility tree, and usually contains the surrounding section's heading (an `h1` – `h6` element) and optional subheading, but this is **not** required.
- **h1, h2, etc**
	- *The HTML `h1`–`h6` elements represent six levels of section headings. `h1` is the highest section level and `h6` is the lowest*
	- These Elements only used Global attributes
	- **Usage Notes**
		- - Heading information can be used by user agents to construct a table of contents for a document automatically.
		- Do not use heading elements to resize text. Instead, use the `CSS` `(font-size)` property.
		- Do not skip heading levels: always start from `<h1>`, followed by `<h2>` and so on.
		- **Avoid using multiple `<h1>` elements on one page**
		- **Labeling section content**
			- Another common navigation technique for users of screen reading software is to generate a list of *sectioning content* and use it to determine the page's layout.
			- Sectioning content can be labeled using a combination of the `aria-labelledby` and `id`attributes, with the label concisely describing the purpose of the section. This technique is useful for situations where there is more than one sectioning element on the same page.
			- 
- **main**
	- The **`<main>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element represents the dominant content of the [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.
	
	- A document mustn't have more than one `<main>` element that doesn't have the [`hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#hidden) attribute specified.
	
	- The content inside the `<main>` element should be unique for each page. Repeated sections like navigation menus, footers, sidebars, and site logos should not be placed inside the `<main>` element unless they are central to the page's function
- **nav**
	- The **`<nav>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
- **Section**
	- The **`<section>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
---
Text Content 
============
- **div**
	- The **`<div>`** **HTML** element is the generic container for flow content. It has no effect on the content or layout until styled in some way using [CSS] (e.g. styling is directly applied to it, or some kind of layout model like [Flexbox] is applied to its parent element).
	- - The `<div>` element should be used only when no other semantic element (such as [`<article>`] or [`<nav>`] is appropriate.

---
Inline text semantics
====================
- **a**
	- The **`<a>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element (or _anchor_ element), with [its `href` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href), creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
	- Content within each `<a>` _should_ indicate the link's destination. If the `href` attribute is present, pressing the enter key while focused on the `<a>` element will activate it.
- **br**
	- The **`<br>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
- **span**
	- The **`<span>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#class) or [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#id) attributes), or because they share attribute values, such as [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#lang). It should be used only when no other semantic element is appropriate. `<span>` is very much like a [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) element, but [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) is a [block-level element](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content) whereas a `<span>` is an [inline-level element](https://developer.mozilla.org/en-US/docs/Glossary/Inline-level_content).
- **Strong**
	- The HTML Strong Importance Element (`strong`) indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
