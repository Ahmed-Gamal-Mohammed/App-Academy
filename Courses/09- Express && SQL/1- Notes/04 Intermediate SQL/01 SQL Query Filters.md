# WHERE LIMIT ORDER BY OFFSET
## `WHERE` clause for a list of values 
you can also add a `WHERE` clause to check fora list of values, The syntax is the following `WHERE [column] IN ('value1', 'value2', 'value3')`
Let's say you wanted to find the name and breed of the puppies who are Corgis, Beagles, or Yorkshire Terriers.
You could do so with the query below:
```SQL
SELECT name, breed FROM puppies 
	WHERE breed IN ('Corgis','Beagles', 'Yorkshire Terriers');
```
## `WHERE` clause for a range of values

In addition to checking for string values, you can use the `WHERE` clause to check for a range of numeric/integer values using the `BETWEEN` operator. This time, let's find the name, breed, and age of the puppies who are between 0 to 6 months old.

```sql
SELECT name, breed FROM puppies 
	WHERE age_yrs BETWEEN 0 AND .5;
```

## `ORDERED BY`

Getting the values back from a database in any order it wants to give them to you is ludicrous. Instead, you will often want to specify the order in which you get them back. Say you wanted them in alphabetical order by their name. Then, you would write
```sql
SELECT name, breed
  FROM puppies
  ORDER BY name;
```
Say you wanted that returned from oldest dog to youngest dog. You would write
```sql
SELECT name, breed
  FROM puppies
  ORDER BY age_yrs DESC;
```
where `DESC` means in descending order. Note that the column that you order on does not have to appear in the column list of the `SELECT` statement.

## `LIMIT` and `OFFSET`
Say your query would return one million rows because you've cataloged every puppy in the world. That would be a lot for any application to handle. Instead, you may want to limit the number of rows returned. You can do that with the `LIMIT` keyword.
```sql
SELECT name, breed
  FROM puppies
  ORDER BY age_yrs
  LIMIT 100;
```
That would return the name and breed of the 100 youngest puppies. (Why?) That is, of the million rows that the statement would find, it **limits** the number to only 100.

Let's say you want to see the **next** 100 puppies after the first hundred. You can do that with the `OFFSET` keyword which comes after the `LIMIT` clause.
```sql
SELECT name, breed
  FROM puppies
  ORDER BY age_yrs
  LIMIT 100 OFFSET 100;
```

That will return only rows 101 - 200 of the result set. It **limits** the total number of records to return to 100. Then, it starts at the 100th row and counts 100 records. Those are the records returned.

# SQL Operators
## Logical operators
|Operator|Description|
|---|---|
|ALL|TRUE if all of the subquery values meet the condition.|
|AND|TRUE if all the conditions separated by AND are TRUE.|
|ANY|TRUE if any of the subquery values meet the condition.|
|BETWEEN|TRUE if the operand is within the range of comparisons.|
|EXISTS|TRUE if the subquery returns one or more records.|
|IN|TRUE if the operand is equal to one of a list of expressions.|
|LIKE|TRUE if the operand matches a pattern (accepts "wildcards").|
|NOT|Displays a record if the condition(s) is NOT TRUE.|
|OR|TRUE if any of the conditions separated by OR is TRUE.|
|SOME|TRUE if any of the subquery values meet the condition.|

