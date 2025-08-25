# Restricting Access with Username/Password Credentials 
Many RDBMS's use a username and password combination as a means to restrict access to a database. The RDBMS can support multiple different user roles (e.g. Read Access Only, Read and Write Access, etc.), so having credentials will verify what actions a user can perform on a database.

## Access via URL Connection
 A database is a server, you make requests to it and receive response from it. Much like connecting to a server, you can also make requests to a database via a URL, The URL connection string could look like something like this:
```URL
 jdbc:postgresql://localhost/test?user=fred&password=secret&ssl=true
 ```
 Note that in the above example, the username and password are embedded into the connection string. It is also possible to exclude the username and password and authorize a connection based on the origin of the request, namely an IP address.
### DB as a Service
Some applications opt to use cloud databases to host their data using third-party vendors instead of creating their own database server. This is because security, role management, reliability, uptime, etc. make managing a database complex; vendors provide convenient tools, making your job of maintaining a database easier. You can connect to these kinds of databases using a URL connection string.

Definitely consider using a database as a service for any projects you may have.

## SQLite3: The Exception

SQLite3 is unique as an RDBMS in that **it stores its data in a file** instead of behind a database server. This means that anyone that has access to the file has access to the contents of the database, which includes reading and writing. For this reason, SQLite3 should only be used in a testing environment and NOT a production environment.

The file extension of the database file is conventionally `.db`. For example, an application that stores cute cats' information can have a SQLite3 database file called
