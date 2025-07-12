# 🧾 What is JSON?
- JSON stands for: **JavaScript Object Notation**

- It is a **File Format**  - a special way to write data 

- it is used to store or transfer information in a way that both humans and machines can understand 

Just Like :
- HTML = format for website 

- DOCX = format for word documents 

- JSON = format for data (like names, prices, emails, etc)

## 💡 Most Important Point
> **JSON** is just a string, it's just text 

This means: 
- JSON is not code that runs 
- JSON is not JavaScript object 
- JSON is just text that looks like data

you can open a `.json` file in a text editor like notepad and will just look like this:
```json
{
  "name": "Ahmed",
  "age": 18,
  "hobbies": ["coding", "reading"]
}
```
it's look  like JavaScript, but it's actually just plain text, Nothing in this *runs* like code- it's just information written in a specific format 

## ❌ "JSON object" is not a correct phrase

- People often say “JSON object”, but that’s incorrect.
    
- JSON is a **string**, not an **object**.
    
- When we **parse** JSON in code, then it becomes a **JavaScript object** — but before that, it’s just a string.

# ❓ Why is JSON so confusing?
Because JSON **looks like JavaScript**! 😵

## 🤔 JSON _looks_ like JavaScript

- The way JSON is written is **very similar** to how JavaScript writes objects.
Example in JavaScript:
```js
const user = {
  name: "Ahmed",
  age: 18
};

```
And JSON:
```json
{
  "name": "Ahmed",
  "age": 18
}
```
See? Very similar. So people often confuse **JSON** (which is just _text_) with **JavaScript objects** (which are _code_).

# 🔶 1. **String Literals in JSON**
💬 Example:
```js
'this is "text"'
```
This is a **JavaScript string** that contains **double quotes inside** it. That’s okay in JavaScript because the string is surrounded by **single quotes**.

But **JSON only allows double quotes** for strings. So we need to escape the inner double quotes:
## ✅ Correct JSON string:
```JSON
`"this is \"text\""`
```
### ✅ Rule (important):

> **JSON strings must always be in double quotes.**> 
> And if the string contains a double quote inside it, escape it using a **backslash** (`\"`).
## 🔶 2. **Why Escaping is Needed**

Let’s say you wrote this string:
```JSON
`"Bob said, "Well, this is interesting.""`
```
This will confuse the computer. Why?

- The string starts at the first `"`.
    
- It sees `Bob said,` and then sees another `"`.
    
- So it thinks the string ends there. The rest becomes invalid code.
### ❌ Invalid:
```JOSN
`"Bob said, "Well, this is interesting.""`
```
### ✅ Valid version (escaped quotes):
```JSON
`"Bob said, \"Well, this is interesting.\""`
```
## 🔶 3. **Newlines in JSON Strings**

Let’s say you have this text:
```CSS
She woke him up with
her Ramones ringtone "I Want
to be Sedated"
```

JSON strings **must be on one line**. So newlines must be written as:

- `\n` → newline (line break)
    
- `\"` → to include quotation marks inside the string
### ✅ JSON string version:
```JSON
"She woke him up with\nher Ramones ringtone \"I Want\nto be Sedated\""
```
# 🔶 4. **Array Values in JSON**

JavaScript array:
```JS
`[1, 2, 3]`
```
Same in JSON:
```JSON
`[1, 2, 3]`
```
If you write it **as a string**, then it's:
```JS
`"[1, 2, 3]"`
```
✅ JSON uses square brackets `[]` just like JavaScript arrays.

# 🔶 5. **Object Values in JSON**

## JavaScript object:
```JS
`{ person: true, name: "Roberta" }`
```
But in JSON:
- Keys **must** be in **double quotes**
## ✅ JSON:
```JSON
`{ "person": true, "name": "Roberta" }`
```
And if you wanted this as a string in JavaScript (like sending it over a network), it would look like:
## ✅ JSON inside a string:
```JSON
"{ \"person\": true, \"name\": \"Roberta\" }"
```
# 🔶 6. **Serialization vs Deserialization**

- **Serialization** = Converting data → string
    
- **Deserialization** = Converting string → data

## ✅ JavaScript methods:

| Task                          | Method                  |
| ----------------------------- | ----------------------- |
| Convert object to JSON string | `JSON.stringify(value)` |
| Convert JSON string to object | `JSON.parse(str)`       |
# 🔶 7. **Example: JSON.stringify**
```js
const array = [1, 'hello, "world"', 3.14, { id: 17 }];
console.log(JSON.stringify(array));
```
This prints:
```csharp
[1,"hello, \"world\"",3.14,{"id":17}]
```
# 🔶 8. **Example: JSON.parse**

```js
const str = '[1,"hello, \\"world\\"",3.14,{"id":17}]';
console.log(JSON.parse(str));
```
- The string `str` is a valid JSON string
    
- `JSON.parse` converts it back into a JavaScript array
    

It prints:
```js
[
  1,
  "hello, \"world\"",
  3.14,
  { id: 17 }
]
```
# 🔶 9. **Why all the backslashes?**

JavaScript reads the string and escapes things first:
```js
`"hello, \"world\""`
```
- The `\` is used so the quotes don’t break the string.
    
- The string **remains safe and valid** for JSON and JavaScript.

# 🔶 10. **You Almost Never Write Raw JSON**

In most real coding situations, you:

- Use `JSON.stringify()` to send data as a string
    
- Use `JSON.parse()` when you receive JSON (e.g., from an API)
    

So you don’t usually **write** JSON strings by hand.

But… you must know how to **read** them and understand escaping rules.

