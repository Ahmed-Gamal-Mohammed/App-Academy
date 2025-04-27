# What is a Server?
A Server is a hardware or software that pushes and pulls data across a network. A Server's purpose is to send data to a client. A Client can request data from a server and the server processes that request and responds with desired data.

# Role of a Server in a Full-Stack Application

A full-stack application is a Web application that has a front-end client and a back-end server. The front-end client requests web pages or data from the back-end server. The back-end server sends the web pages or data to the front-end client when requested.

The front-end client in a full-stack application is responsible for displaying web pages to a user.

Back-end servers provide many functionalities in a full-stack application. Some functionalities include:
- Send the requested web pages
- Handle email messages
- Send files
- Store and send data in a database
- Process data
- Handle web traffic

Sometimes, there are multiple servers in a full-stack application to spread out the different roles and responsibilities. For example, there could be a server for sending web pages to the front-end client. That server could request data from a server storing data in a database.

# HTTP Basics
**HTTP** ==> HyperText Transfer Protocol
## **HT-**: HyperText
- HyperText is simply **Content with references to another content**
- This term is used specifically to refer to content in computing and may include text, images, video, or any other digital content.
- Hypertext is what makes the Web a "web", and it's the most fundamental part of how we interact online. **Hyperlinks** or **links** are references between hypertext resources.
## **TP-**: Transfer Protocol
- A _protocol_ in computer science is a set of guidelines surrounding the transmission of data
	- A **protocol** is a set of rules that governs how data is transmitted between devices. It defines:
		- The **order** in which data is sent and received.
		- The **format** of the data.
		- How errors are handled.
- Protocols define the process of exchanging data, but don't define exactly what that data must be.
- **Analogy:**  
	Think of a **multi-course meal**:
	1. **Appetizer** → **Entrée** → **Dessert** (order is fixed).
	2. The actual dishes (data) can vary (soup, steak, ice cream, etc.), but the **sequence** must be followed.  
    Similarly, a protocol ensures that data is exchanged in an expected way, even if the content differs.
- **What is a Transfer Protocol?**
	- A **transfer protocol** is a type of protocol specifically for **moving data** between systems. Examples:
		- **HTTP** (web browsing)
		- **FTP** (file transfers)
		- **SMTP** (email sending)
	- These protocols define:
		- How a request is made.
		- How a response is structured.
		- What happens if something goes wrong (e.g., "404 Not Found").
- An HTTP exchange is more like a series of distinct questions & answers than a conversation between two systems.
---
## Protocol for exchanging data between a Client and a Server
- HTTP defines the process of exchanging hypertext between systems. 
- HTTP works between Clients and server 
	- A **Client** (Sometimes called the user agent) is the data consumer
	- A **Server** (Sometimes referred to as the origin) is the data provider 
- In a typical HTTP exchange, the client sends a request to the server for a particular resource: a webpage, image, or application data 
- The server provides a response containing either the resource that the client requested or an explanation of why it can't provide the resource 
	- ![[Pasted image 20250416180741.png]]
## Properties of HTTP
There are a few important properties of HTTP that you need to understand in order to use it effectively 
### Reliable connections (اتصالات موثوقة)
#### The Basic
A **reliable connection** in computing ensures that:
1. **Data arrives intact** (no corruption).
2. **Data arrives in the correct order**.
3. **The sender gets confirmation** that the data was received.
This comes at a **small cost in speed** (due to extra checks), but it’s essential for accuracy.
#### **Analogy: Passing a Note Between Friends**
Imagine two friends, **Alice** and **Bob**, passing a note in class:
1. **Alice writes a note** (data) and **hands it carefully** to Bob (reliable delivery).
2. **Bob reads it and nods** (confirmation).
3. If Bob doesn’t nod, Alice **resends the note** (error recovery).
This ensures the note isn’t lost or garbled, even if it’s slower than just tossing it across the room.
#### **How This Applies to HTTP and the Internet**
HTTP (HyperText Transfer Protocol) relies on **TCP (Transmission Control Protocol)**, which provides a **reliable connection**. Here’s how:
###### **1. Order and Confirmation**
- Data is split into **packets** (like breaking a long note into smaller pieces).
- Each packet is **numbered** (e.g., Packet 1, Packet 2).
- The receiver (server) confirms each packet with an **ACK (acknowledgment)**.
    - If Packet 2 arrives before Packet 1, TCP **waits and reorders them**.
    - If a packet is missing (no ACK), the sender **retransmits it**.
###### **2. Why HTTP Needs Reliability**
- A webpage is made of **multiple files** (HTML, images, CSS).
- If these arrive out of order or missing, the page **breaks or loads incorrectly**.
- Example:
    - Your browser requests `index.html`.
    - The server sends it in order, and your browser confirms receipt.
    - If part of the file is lost, TCP **automatically fixes it** before HTTP renders the page.
###### **3. Tradeoff: Reliability vs. Speed**
- **Reliable (TCP/HTTP)**: Slower but accurate (used for web pages, emails).
- **Unreliable (UDP)**: Faster but no guarantees (used for video calls, live streams).

---
HTTP doesn't work well if messages aren't received in the correct order, so it's critical that the connection your hypertext is crossing is reliable!
### Stateless transfer
HTTP is considered a _stateless_ protocol, meaning it doesn't store any information. Each request you send across an HTTP connection should contain all its own context. This is unlike a _stateful_ protocol, that might include specifications for storing data between requests.

