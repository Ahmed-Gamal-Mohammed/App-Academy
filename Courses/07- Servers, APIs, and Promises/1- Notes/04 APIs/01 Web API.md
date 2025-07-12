# 🔹 **What is an API?**
**Application Programming Interface**

An API is like a waiter at a restaurant. You (the user) ask for something (e.g. a menu item), and the waiter (API) delivers it to the kitchen (the system), then brings the result back to you.
You don't need to know how the food is cooked - you only care about what you ordered and what you get.

---
# 🔹 Application API vs Web API
## ✅ **Application API**

- Used inside an application or system 

- Example: In JavaScript, when you use `Math.sin(90)`, you’re calling an **Application API**.
	- You don’t need to understand how `Math.sin` actually works (like the math behind sine). You just provide an input and get an output.

- it's local - everything happens within your program

## ✅ **Web API**

- A Web API works **Over the internet**

- It's like asking another computer (called server) for information or for it to perform a task for you 

- Example 
	
	- if you go to `https://api.github.com/orgs/appacademy` you are using GitHub's Web API to get data about app academy
	
	- GitHub sends you data back in a format like JSON (JavaScript Object Notation)
## 🧠 Key Point:

Both types of APIs **hide complex code** and give you an easy interface — just give an input, and get a result. You don’t care what’s behind the curtain.

# 🔸 **Why Use Web APIs?**

Imagine you want to:
- Get weather information 

- Show live stock market prices 

- Submit a comment to a website 

- Book a hotel from a travel website

You don't have to build all these systems yourself. Instead, you use **Web APIs** provided by those services to:

- Get or send data.
    
- Perform actions like search, store, delete, etc.

# 🔸 **Traditional Server vs. Web API Server**

|Feature|Traditional Web Server|Web API Server|
|---|---|---|
|**Main Use**|Sends websites (HTML pages) to your browser.|Sends and receives **data** (usually in JSON).|
|**Interaction**|1 request → 1 response (e.g., open a webpage).|Can do more complex tasks like data processing.|
|**Examples**|Opening `example.com/about.html`|Sending a request to `api.example.com/users/5`|
|**Response Format**|Usually HTML, CSS, JS|Usually JSON or XML|
|**Functionality**|Just returns files|Can support **CRUD** and more|
## 🧠 CRUD:

Web APIs are often built around CRUD operations:

- **C**reate → POST
    
- **R**ead → GET
    
- **U**pdate → PUT or PATCH
    
- **D**elete → DELETE
    

These are closely tied to **HTTP verbs** (like POST, GET, etc.).

---
# 🔹 Real-World Web API Examples

1. **Google Maps API**:
    
    - You send a start and end address.
        
    - It returns the **best route** and **estimated time**.
        
2. **Twitter API**:
    
    - You send a tweet using the API.
        
    - Twitter handles the storage, user updates, etc.
        
3. **OpenWeather API**:
    
    - You send a location (like "Cairo").
        
    - It returns the weather data.
        

---

# 🔚 In Summary

- **APIs** simplify complex code — they allow you to _use_ code without needing to _understand_ or _write_ it all.
    
- **Application APIs** work locally (like `Math.sin()`).
    
- **Web APIs** work across the internet (like getting GitHub or weather data).
    
- **Web API servers** do more than traditional servers: they process data, perform calculations, and interact with databases or services.
    

---