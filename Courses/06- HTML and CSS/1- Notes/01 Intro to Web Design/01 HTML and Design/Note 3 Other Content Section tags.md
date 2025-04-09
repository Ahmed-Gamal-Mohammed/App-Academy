# Articles 
The **article** HTML element represents a self-contained composition in a document page, or site, which is intended to be independently distributable or reusable 
```HTML
<h2>Article</h2>

<article class="forecast">

	<h1>Weather forecast for Seattle</h1>

	<article class="day-forecast">

		<h2>03 March 2018</h2>

		<p>Rain.</p>

	</article>

	<article class="day-forecast">
	
		<h2>04 March 2018</h2>
		
		<p>Periods of rain.</p>
	
	</article>

	<article>
	
		<h2>05 March 2018</h2>
		
		<p>Heavy rain.</p>
	
	</article>

</article>
```
- Each article has its own header (h1  to h6)
- If nested articles, so the nested header will be (h2 to h6), and so on 

## Usage notes 
- Each `article` should be identified, typically by including a heading (h1 - h6 element) as a child of the `article` element 

- When an `article` element is nested, the inner element represents an article related to the outer element 

- Author information of an `article` element can be provided through the `<address>` element, **but it doesn't apply to nested `article` elements** 

- The publication date and time of an `article` element can be described using `datetime` attribute of a `<time>` element
### Example 
```HTML
<article class="film-review">

<h2>Jurassic Park</h2>

  

<section class="main_review">

<h3>Review</h3>

<p>Dinos were great!</p>

</section>

  

<section class="user_reviews">

<h3>User Reviews</h3>

<article class="user_review">

<h4>Too scary!</h4>

<p>Way too scary for me.</p>

<footer>

<p>

Posted on

<time datetime="2025-03-21">March 21</time>

by Ahmed Emad.

</p>

</footer>

</article>

  

<article class="user_review">

<h4>Love the dions</h4>

<p>I agree, dions are my favorite</p>

<footer>

<p>

Posted on

<time datetime="2025-03-21 01:02">March 21</time>

by Ahmed Gamal.

</p>

</footer>

</article>

  

</section>

  

<footer>

<p>

Posted on

<time datetime="2025-03-21 02:00">May 21</time>

by Ibrahim

</p>

</footer>

  

</article>
```
# Footer 
the `footer` HTML element represent a footer for its nearest ancestor `sectioning` `content` or `sectioning root` element. A `footer` typically contains information about the author of the section, copyright data or links to related documents 

## Usage notes 
- Enclose information about the author in a `address` element that can be included into the `footer` element 
- When the nearest ancestor sectioning content or sectioning root element is the body element the footer applies to the whole page 
- the `footer` element is not sectioning content and doesn't introduce a new section in  the `outline`
# Header
The `header` HTML element represents introductory content, typically a group of introductory or navigational aids, it may contain some heading elements but also a logo, a search form, an author name, and other element 

## Usage notes 
- The `header` element has an identical meaning to the site-wide `banner`landmark role, unless nested within sectioning content. Then, the `header` element is not a landmark 

- The `header` element can be define a global site header, describes as a `banner` in the accessibility tree. it usually includes a logo, company name, search feature, and possibly the global navigation or a slogan, **it's generally located at the top of the page**

- Otherwise, it's a `section` in the accessibility tree, and usually contains the surrounding section's heading (an h1 - h6) and optional subheading. but this is not required 
## Examples 
1- Page Header
```HTML
<header>
	<h1> Main page Title </h1>
	<img src = "mdn-logo-sm.png" alt= "MDN logo"/>
</header>
```

# Nav 
The `nav` HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, table of content, and indexes.

## Usage notes 
- it's not necessary for all links to be contained in a `nav` element. `nav` is intended only for a major block of navigation links; typically the `footer` element often has a list of links that don't need to be in a `nav` element 
- a document may have several `nav` elements 

