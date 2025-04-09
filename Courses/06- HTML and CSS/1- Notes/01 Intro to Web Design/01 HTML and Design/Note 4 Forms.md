# The  fieldset and legend elements
The `fieldset` element is a convenient way to create groups of widgets that share the same purpose. for styling and semantic purposed, You can label a `fieldset` by including `legend` element just below the opening `fieldset` tag. The text content of the `legend` formally describes the purpose of the `fieldset` it is included inside 
```HTML
<form>

	<fieldset>
		<legend>Fruit juice size</legend>
		
		<p>
			<label for="size_1">Small</label>
			<input type="radio" name="size" id="size_1"                          value="small">
		</p>

		<p>
			<label for="size_2">Medium</label>
			<input type="radio" name="size" id="size_2"                         value="medium">
		 </p>

		<p>
			<label for="size_3">Large</label>
			<input type="radio" name="size" id="size_3"                         value="large">
		</p> 

	</fieldset>

</form>
```


