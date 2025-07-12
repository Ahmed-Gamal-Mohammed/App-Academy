# 💡 What is DNS?
**DNS (Domain Name System)** is like the **phone book of the internet**. Humans remember website names like `google.com`, but computers only understand IP addresses like `142.250.190.78`.
## 📞 Analogy:
Just like you'd use a contact name in your phone to call someone instead of memorizing their number, DNS allows you to use domain names instead of IP addresses.

## 🕰️ History of DNS
### 🧑‍🔬 The Beginnings

- In the early 1970s, **Elizabeth Feinler** worked with ARPA (Advanced Research Projects Agency).
    
- Back then, computers were connected manually by using a **text file** that mapped **hostnames** to **numeric IP addresses**.
    
- As more computers joined, the file grew too large for one person or organization to manage.
### 🕸️ The Need for Scaling

- By the 1980s, the internet was expanding rapidly.
    
- The **Domain Name System (DNS)** was created to **distribute** the task of name-to-IP mapping across many systems.
    
- In **1984**, the first DNS name server was written.
### 💥 Why DNS Matters

- **Distributed** → Spread across many servers (not one point of failure).
    
- **Simple** → Uses formatted text files (called zone files).
    
- **Scalable** → Can handle millions of domain names and IPs.

# 🌐 What is a Domain?

A **domain** is the **user-friendly name** for a website (like `facebook.com`). It’s **only the server’s name**, not the full address like a URL.
### 🔍 Example URL Breakdown:
```ardunio
https://students.appacademy.io/course/1?lang=en
          └────── domain ─────┘
```
### 🧱 Structure of a Domain:

Let’s say we have:  
`www.example.com`

| Part      | Name                    | Description                                                                |
| --------- | ----------------------- | -------------------------------------------------------------------------- |
| `.com`    | Top-Level Domain (TLD)  | The highest level in DNS. Managed by registries like ICANN or governments. |
| `example` | Second-Level Domain     | Purchased through a domain registrar.                                      |
| `www`     | Subdomain (Third-Level) | Optional and customizable by domain owner.                                 |
# 🧠 How DNS Works (Resolution Process)

## 🧠 What is DNS Resolution?

**DNS resolution** is the process your computer follows to **find the IP address of a website** using its name.

Let’s say you type this in your browser:
```ardunio
https://students.appacademy.io
```
Your computer doesn’t know where that is, so it needs to find the **IP address** to connect to that server. To do this, it asks a series of DNS servers — like asking one person after another for help until it gets the answer.
## 🔁 Step-by-Step: How Your Computer Finds the IP Address

Let’s go step by step like a story:
### 🧍1. **You ask for the website**

You type:
```lua
`students.appacademy.io`
```
Your computer says:
> “I need the IP address for this domain!”

### 🔍2. **Ask your local DNS cache**

First, your computer checks:

> “Have I looked up this domain recently?”

- ✅ If **yes**, use the cached IP address.
    
- ❌ If **no**, go ask someone else...
### 🌐3. **Ask the Recursive Resolver (your ISP or DNS provider)**

This is the first external server that helps you. It says:

> “I don’t know the IP yet, but I’ll ask around for you.”

It does all the work below ⬇️
### 🧱4. **Ask the Root DNS Server**

The resolver asks the **Root Server**:

> “Where can I find info about `.io` domains?”

The Root Server replies:

> “Ask the `.io` TLD name server.”

### 🔡5. **Ask the TLD DNS Server (`.io`)**

The resolver asks the `.io` name server:

> “Where can I find info about `appacademy.io`?”

The `.io` name server replies:

> “Go ask the name server for `appacademy.io`.”

---
### 🧩6. **Ask the Name Server for `appacademy.io`**

The resolver now asks the name server for `appacademy.io`:

> “Hey! Do you know the IP for `students.appacademy.io`?”

This is the **authoritative name server** — the one with the final answer.

It replies:

> “Yes! The IP address is `123.45.67.89`.”

### 🚀7. **Return the IP to your computer**

The resolver returns the IP address to your com
```lua
`students.appacademy.io → 123.45.67.89`
```
Now your browser can **connect to the website** and load it!
### 💡 Bonus: Cache It!

Your computer saves (caches) this IP for a while (based on the TTL) so it doesn’t have to look it up again soon.

---
## 📄 DNS Records & Zone Files

A **zone file** is a text file that contains mappings between domain names and IP addresses or other resources. Each line represents a **record**.

### 🧾 Sample Zone File
```perl
$TTL 299
my-site.com.    IN  SOA     ns1.cloudflare.com. dns.cloudflare.com. ...
my-site.com.    IN  NS      ns1.my-site.com.
my-site.com.    IN  A       104.28.31.159
my-site.com.    IN  MX      10 mail.google.com.
```
# 🧩 Types of DNS Records (Explained)

|Type|Meaning|Purpose|
|---|---|---|
|**SOA**|Start Of Authority|Identifies the primary name server for the domain. Required in every zone.|
|**NS**|Name Server|Lists the name servers responsible for the domain. Usually at least 2 for redundancy.|
|**A**|Address|Maps a domain to an **IPv4** address. E.g., `my-site.com → 104.28.31.159`|
|**AAAA**|IPv6 Address|Same as A, but for **IPv6** addresses.|
|**CNAME**|Canonical Name (Alias)|Points one domain to another. E.g., `www.my-site.com → my-site.com`|
|**MX**|Mail Exchange|Specifies mail servers for the domain (used in email delivery).|
# 🧠 TTL (Time to Live)

### What is it?

- `$TTL 299` means each record should be cached for **299 seconds** (just under 5 minutes).
### Why is TTL important?

- **Performance**: Cached records make DNS lookups faster.
    
- **Flexibility**: If you change IP addresses, a low TTL ensures old records expire quickly.

### Trade-offs:

| TTL Value                   | Result                                              |
| --------------------------- | --------------------------------------------------- |
| Short (e.g., 300s)          | Quick updates but more DNS traffic.                 |
| Long (e.g., 86400s = 1 day) | Less traffic, but updates take longer to propagate. |