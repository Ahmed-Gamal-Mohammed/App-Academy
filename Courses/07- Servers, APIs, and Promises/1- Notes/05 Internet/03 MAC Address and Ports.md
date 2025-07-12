# 🌐 **Network Addressing**
**Network addressing** is how we give names or labels to different parts of the network. Think of it like:
- Mailing an envelope: You need an address so it reaches the right house.
    
- Calling a friend: You need their phone number.

In networking, we use **several types of addresses** for different purposes, including:

1. **Port numbers** – for targeting the right _application_ on a device.
    
2. **IP addresses** – for targeting the right _device_ on a network.
    
3. **MAC addresses** – for identifying the _hardware_ interface on a network.
    
---
## 🔌 **1. Ports: Targeting the Right Application**

### 🚪 What is a Port?
A **port** is like a virtual "door" to a computer.

If an IP address points to the house (device), the **port** is the specific **room** (application/service) you're trying to reach inside that house.

> 📌 A **port is defined by software**, not hardware. It's **virtual**, not physical.

### 🕰 A Little History:

- In early Internet days, computers used **socket numbers** to identify connection points.
    
- A "socket number" had a user-defined part that acted like today’s port.
    
- Eventually, tracking sockets evolved into managing **port numbers**.

### 📘 Port Numbers Range:

There are **65,536** ports in total, numbered from **0 to 65535** (because computers use 16-bit numbers for ports).

Each **protocol** (like TCP or UDP) gets its own set. For example:

- **TCP 25** and **UDP 25** are two separate ports.

### 🧩 Port Range Categories (Managed by IANA):

| Range       | Name                          | Use Case                                                                                                                     |
| ----------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 0–1023      | **System Ports** (Well-Known) | Reserved for **standard services**. Don't use them for your own apps!  <br>Examples: 80 (HTTP), 443 (HTTPS), 25 (Email/SMTP) |
| 1024–49151  | **User Ports** (Registered)   | Used for **custom or user apps**. Many frameworks use ports like 3000, 5000, or 8080.                                        |
| 49152–65535 | **Dynamic Ports** (Ephemeral) | Temporarily assigned by OS for outgoing connections. Avoid using them unless necessary.                                      |
⚠️ **Important Tip**: Never host your own custom server on ports below 1024. It could cause conflicts with important system services.

### 📦 Bonus: Don’t Confuse "Port" Meanings

"Port" can also mean:

- **Physical port**: like a USB port or HDMI port on your computer.
    
- **Network port**: the virtual concept we just discussed.
    

---

## 🖥️ **2. MAC Addresses: Targeting Hardware**
### 🧬 What is a MAC Address?

- **MAC = Media Access Control**
    
- A **MAC address is a permanent ID assigned to a network interface card (NIC)** by the manufacturer.
    
- It’s a hardware-level address—**you can’t change it easily** unless you change the device.
    

🧊 Think of it like a **fingerprint** for your network hardware

### 🟨 Format:

MAC addresses are shown in **hexadecimal**, like:
```
`A1-B2-C3-D4-E5-F6`
```
You might also see them as:

- `a1:b2:c3:d4:e5:f6`
    
- `a1b2c3d4e5f6`
    

✅ All are the **same**! Format and capitalization don't matter.

### 📡 Where Are MAC Addresses Used?

MAC addresses are used in:

- Wi-Fi connections
    
- Ethernet (wired) connections
    
- Bluetooth
    
Any time two devices talk directly on the same **local network**, they use MAC addresses.

### 📦 Data is sent as Frames

At the hardware level, data travels in **frames** (like envelopes for data). A frame includes:

- **Source MAC address**
    
- **Destination MAC address**
    
- The **payload** (contains the IP info, TCP/UDP info, and the actual data)
    
---

### 🔐 Are MAC Addresses Secure?

They're **unique**, but not secure. Why?

- You **can spoof** a MAC address using software. That means a device can lie about its real MAC.
    
- That’s why **MAC filtering** (e.g. in a school or gaming server) is **not secure** by itself.
## 🏁 Summary Chart

|Feature|Port|IP Address|MAC Address|
|---|---|---|---|
|What it identifies|Specific **application** on a device|Specific **device** on a network|Specific **network interface hardware**|
|Scope|**Virtual**|**Network-wide**|**Hardware-level** (local)|
|Format|Number (0-65535)|e.g. `192.168.1.1`|e.g. `A1-B2-C3-D4-E5-F6`|
|Who assigns it?|**You (or OS)**|**Network admin or ISP**|**Manufacturer**|
|Can you change it?|Yes (easily)|Yes (manually)|Not easily (unless spoofed)|

---

## ✅ Final Notes:

- Use **ports** to talk to **apps/services**.
    
- Use **IP addresses** to talk to **devices**.
    
- Use **MAC addresses** to talk to **hardware** (on the same local network).