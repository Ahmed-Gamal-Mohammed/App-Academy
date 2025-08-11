# Defining an Express Router
Web applications tend to target groups of resources, where each resource is associated with multiple routes. For example, a customer order management application might look something like this:
```
App/
├── Customers (/customer)
│   ├── Add Customer (POST /customer)
│   ├── View Customer Details (GET /customer/:id)
│   ├── Edit Customer (PUT /customer/:id)
│   └── Delete Customer (DELETE /customer/:id)
├── Products (/product)
│   ├── View All Products (GET /product)
│   └── View Product Details (GET /product/:id)
│   // etc..
```

**Express routers** allow developers to create collections of modular, mountable route handlers. Using routers helps to keep your code organized and DRY, ensuring that your code is as readable and maintainable as possible.



