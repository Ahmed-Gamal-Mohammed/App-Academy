## The three components of HTML

HTML has three components that form its basic building blocks: **tags**, **elements**, and **attributes**. Once you've learned the rules for how each of these components function, you should have no trouble writing and editing HTML.

### Tags 
Any text that you write inside the angle brackets "<" and ">" will not be displayed in the browser. The text inside the angle brackets is just used to tell the browser how to display or transform regular text located between the opening tag (also called the start tag) and the closing tag (also called the end tag).

Tags usually come in pairs, and the difference between an opening tag and a closing tag is that the first symbol inside the brackets of a closing tag is a slash "/" symbol.

For example, here's a pair of h1 tags (used to identify heading text), with some content in-between:
```HTML
<h1>Main Heading</h1>
```

There are a whole mess of tags in HTML for you to use. The ones that you should know because you'll put them to use are in the following list. Go read _each of the following documentation pages_.

- [`html`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
- [`head`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
- [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
- [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
- [`script`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [Header tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1) There are six of these. This link is to just "h1".
- [`p`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
- [`article`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
- [`section`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
- [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
- [`nav`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
- [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
- [`footer`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
- Itemized list tags
    - [`ul`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
    - [`ol`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
    - [`li`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
- [`a`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [`img`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- Table tags
    - [`table`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
    - [`thead`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
    - [`tbody`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
    - [`tfoot`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
    - [`tr`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
    - [`th`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
    - [`td`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
There are two main rules that you need to follow when using tags. So, don't forget them.

1. _You must always use angle brackets for tags._ Square brackets, curly braces, parentheses, none of those are for tags in HTML. Just the "<" and ">".
2. Tags almost _always come in pairs_. This means that, except for a few number of tags, you _must always close a tag after opening it_. If you forget to add a closing tag, sometimes the browser will kindly figure it out and insert one for you when it renders your content. However, _don't rely on that behavior_! Different browsers will do different things. Put the closing tag when you are supposed to put it.
### Elements
You now know that most tags come in pairs, and some tags don't have a closing tag. An **HTML element** is defined as

- If a tag is supposed to have both an opening tag and a closing tag, then when you refer to it as an _HTML element_, you actually mean:
    - The opening tag
    - The closing tag
    - All of the content between the opening and closing tags
- If a tag is _not_ supposed to have a closing tag, then when you refer to it as an _HTML element_, you mean just the tag itself.

Here's an example of how to specify a title in an HTML document.
```HTML
<title>Pictures of Barry's Beautiful Baby</title>
```
The _HTML element_ is the opening tag (`<title>`), the closing tag (`</title>`), and the content inside the tags ("Pictures of Barry's Beautiful Baby").

Here's an example of how you can show an image in an HTML document.
```HTML
<img src="./images/baby-bess-bouncing-backwards.jpg">
```
Because images don't have closing tags, the _HTML element_ is everything from `<img` to the `>`. Tags that don't have closing tags are called **empty tags**.

In some examples you find on the Internet, you are going to see empty tags with a weird slash at the end like this.
```HTML
<!-- This is bad code with the slash -->
<img src="./images/baby-bess-bouncing-backwards.jpg" />
```
That is __OLD SYNTAX__ and should not be used.

### Attributes
Attributes are used to define additional information about an element. They are located inside the opening tag, and usually come in name/value pairs (name= "value").

All HTML elements can have attributes, but for most elements, we only use them when we need to. Attributes common to _all_ HTML elements are the _class_ and _id_ attributes that you can use to categorize and identify HTML elements in your HTML document. You'll see in later lessons that the most common reason to use those is so that you can write CSS to style those elements.

You may have noticed that the previous example had a name-value pair in it. That is an attribute. Here's the example, again, for convenience.
```HTML
<img src="./images/baby-bess-bouncing-backwards.jpg">
```
The attribute's _name_ is "src" and the attribute's _value_ is "./images/baby-bess-bouncing-backwards.jpg". The "src" attribute provides the additional information to the browser that this specific image's source file can be found at that path.

Here are some conventions for writing attributes that will make your HTML look more readable and professional:
1. _Write attributes in lower case only._
2. _Put quotation marks around the value._
3. _Use double quotes, not single quotes._

When you put together all of these guidelines, the general way an HTML element should look is
```HTML
<closeabletag attribute="value">Some content</closeabletag>
<noclosetag attribute="value">
```
## Comments in HTML
Just like in JavaScript, you can add comments in HTML. Comments in HTML will not be turned into HTML elements. To denote a comment in an HTML document, start the comment with an opening angle bracket, exclamation mark, and two dashes and end the comment with two dashes and a closing angle bracket.

Here's an example of an HTML comment:
```HTML
<!-- This is an HTML comment. It will not be turned into an HTML element. -->
```

## Whitespace, tags, attributes, and content
When a browser is parsing an HTML document, it ignores whitespace, including line breaks, between the tag name and the attributes. So, the three element declarations are considered the same to the browser. The whitespace that is ignored is called **negligible whitespace**.
```HTML
<tag attr1="value1" attr2="value2" attr3="really-long-attribute-value-that-is-really-long">content</tag>

<tag attr1="value1"
     attr2="value2"
     attr3="really-long-attribute-value-that-is-really-long">content</tag>

<tag
  attr1="value1"
  attr2="value2"
  attr3="really-long-attribute-value-that-is-really-long"
>content</tag>
```
You _cannot_ put space between the opening angle bracket and the tag name. This is wrong HTML.
```HTML
<!-- This is NOT HTML. -->
< tag attr1="value">content</tag>
```
Whitespace between the opening tag and the closing tag is part of the content of the tag. However, whitespace is also converted to single spaces in the content. The two elements in the following HTML snippet are the same even though the first one has a line break and two spaces before the words and a line break after the words.
```HTML
<tag attr1="value">
  Some content
</tag>
<!-- The above element will be converted to read like the element below -->
<tag attr1="value">Some content</tag>
```
