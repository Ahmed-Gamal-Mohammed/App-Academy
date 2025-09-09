it is good to be aware of such vulnerabilities and attacks. These could include:

- SQL Injections
- Cross-site Scripting (XSS)
- Remote File Inclusion
- Cross-site Request Forgery (CSRF)
# What is a CSRF attack
you will learn:

- What a CSRF attack is
- Examples of a CSRF attack
- How to secure your application against a CSRF attack
## CSRF Attack
- **Your browser automatically sends cookies** that belong to `siteA.com` whenever it makes a request to `siteA.com` (that’s how sessions work).
    
- An attacker at `evil.com` can trick you into **sending a request to `siteA.com`** (e.g., via a hidden form, image, or script).
    
- Because your browser adds your **session cookie**, the request **looks like it came from you**. If `siteA.com` doesn’t check anything else, it might perform actions (transfer money, change email, etc.) on your behalf.
    

> CSRF = “cross-site” (the request starts on a different site) + “request forgery” (it forges an action as if _you_ intended it).

**Key point:** CSRF targets **state changes** (create/update/delete, transfers, password/email changes). Reading private data is usually blocked by the browser’s **same-origin policy**, but state-changing endpoints can be abused if they trust cookies alone.

## 🔒 The Solution: CSRF Tokens

The fix is to require **something extra** in every important request — a **token**.

- A **cookie** = who you are (your ID card).
    
- A **token** = secret PIN code (proves the action really came from the bank’s own website).
    

The hacker can make your browser send your cookie, but **he cannot guess the secret token** (because it’s hidden in your browser, only the bank site can see it).

