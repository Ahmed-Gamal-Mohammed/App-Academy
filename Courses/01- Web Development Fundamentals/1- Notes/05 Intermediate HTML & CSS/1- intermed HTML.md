==What are HTML Forms?== 
	- HTML forms are one of the oldest types of interaction between a person and an application.
	- Forms allow user to enter data, Then, your application can decide to send it somewhere or do something with it locally
	-  An HTML form is made of one or more input element types. Those types can buttons. check-boxes, drop-down, multi-selects, multi-line text fields, radio buttons and single-line text fields. 
		- **The single-line text fields can even require data entered to be of a specific format or value**
		- **Each form element can and should have corresponding label to describe what the form elements expects
		- This helps sights and blind people to interact with forms**
	- The main difference between a HTML form and a regular HTML document is that most of the time, the data collected by the form is sent to a web server. In that case, you need to set up a web server to receive and process the data. You'll get to that in the actual software engineering class.

---
### The `<form>` element

All HTML forms start with a `<form>` element like this:
```
<form action="/form-handling-url" method="post">

</form>
```
This element formally defines a form. It's a container element like a `<div>` or `<p>` element, but it also supports some specific attributes to configure the way the form behaves. Technically, all of its attributes are optional. It's standard practice to always set at least the `action` attribute and the `method` attribute:

- The `action` attribute defines the location (URL) where the form's collected data should be sent when it is submitted.
- The `method` attribute defines which HTTP method to send the data with. Browsers support only two values for this attribute: "get" and "post". You will use "post" 99% of the time.

```
<form action="/form-handling-url" method="post">

	<fieldset>
		
		<legend>Add User</legend>
		
		<div>
		
			<label for="FirstName"> First name</label>
			
			<input type="text" id="FirstName" name="first_name">
		
		</div>
		
		<div>
		
			<label for="LastName">Last Name</label>
			
			<input type="text" name="last_name" id="LastName">
		
		</div>
		
		<div>
		
			<label for="email">Email</label>
			
			<input type="text" name="email_address" id="Email">
			
		</div>
		
		<div>
		
			<label for="role">Role</label>
			
			<select name="user_role_name" id="role">
			
				<option value="admin">Admin</option>
				
				<option value="user">User</option>
				
				<option value="guest">Guest</option>
			
			</select>
		
		</div>
		
		
		<div>
		
			<label for="expiration">Expiration</label>
		
			<input type="date" name="expiration" id="expiration">
		
		</div>
		
		<div>
		
			<label for="bio">Bio</label>
		
			<textarea name="bio" id="bio"></textarea>
		
		</div>
		
		<div>
		
			<button type="submit">Add this person</button>
		
		</div>

	</fieldset>

</form>
```
---
