
sqlite> .read sql-practice/phase-2.sql
sqlite> INSERT INTO customers (name, phone_number) VALUES ("Rachel","111-111-1111");
sqlite> INSERT INTO customers (name, phone_number,email) VALUES ("Monica","222-222-2222","monica@friends.show"), ("Phoebe","333-333-3333","phoebe@friends.show");
sqlite> INSERT INTO coffee_orders (customer_id) VALUES (1);
sqlite> INSERT INTO coffee_orders (customer_id) VALUES (3),(3),(3);
sqlite> INSERT INTO coffee_orders (customer_id) VALUES (1),(1),(1),(1),(2),(2),(2),(2);
sqlite> SELECT points FROM customers WHERE name = "Rachel";
15
sqlite> INSERT INTO coffee_orders (is_redeemed,customer_id) VALUES (1,1);
sqlite> SELECT points FROM customers WHERE name = "Rachel";
10
sqlite> INSERT INTO customers (name, email) VALUES ("Joey","joey@friends.show"),("Chandler","chandler@friends.show"),("Ross","ross@friends.show");
sqlite> SELECT id, name FROM customers;
1|Rachel
2|Monica
3|Phoebe
4|Joey
5|Chandler
6|Ross
sqlite> INSERT INTO coffee_orders (customer_id) VALUES (6),(6),(6),(6),(6),(6);
sqlite> SELECT points FROM customers WHERE name = "Phoebe";
13
sqlite> INSERT INTO coffee_orders (is_redeemed,customer_id) VALUES (1,3);
sqlite> SELECT * FROM coffee_orders WHERE customer_id = 6;
14|0|2024-03-31 11:40:31|6
15|0|2024-03-31 11:40:31|6
16|0|2024-03-31 11:40:31|6
17|0|2024-03-31 11:40:31|6
18|0|2024-03-31 11:40:31|6
19|0|2024-03-31 11:40:31|6
sqlite> .headers on
sqlite> SELECT * FROM coffee_orders WHERE customer_id = 6;
id|is_redeemed|ordered_at|customer_id
14|0|2024-03-31 11:40:31|6
15|0|2024-03-31 11:40:31|6
16|0|2024-03-31 11:40:31|6
17|0|2024-03-31 11:40:31|6
18|0|2024-03-31 11:40:31|6
19|0|2024-03-31 11:40:31|6
sqlite> DELETE FROM coffee_orders WHERE id = 18 AND id = 19;
sqlite> SELECT * FROM coffee_orders WHERE customer_id = 6;
id|is_redeemed|ordered_at|customer_id
14|0|2024-03-31 11:40:31|6
15|0|2024-03-31 11:40:31|6
16|0|2024-03-31 11:40:31|6
17|0|2024-03-31 11:40:31|6
18|0|2024-03-31 11:40:31|6
19|0|2024-03-31 11:40:31|6
sqlite> DELETE FROM coffee_orders WHERE id IN (18,19);
sqlite> SELECT * FROM coffee_orders WHERE customer_id = 6;
id|is_redeemed|ordered_at|customer_id
14|0|2024-03-31 11:40:31|6
15|0|2024-03-31 11:40:31|6
16|0|2024-03-31 11:40:31|6
17|0|2024-03-31 11:40:31|6
sqlite> SELECT * FROM customers WHERE name = "Ross";
id|name|phone_number|points|email|created_at
6|Ross||16|ross@friends.show|2024-03-31 11:40:02
sqlite> UPDATE customers SET points = points -2 WHERE id = 6;
sqlite> SELECT * FROM customers WHERE name = "Ross";
id|name|phone_number|points|email|created_at
6|Ross||14|ross@friends.show|2024-03-31 11:40:02
sqlite> INSERT INTO coffee_orders (customer_id) VALUES (4),(4);
sqlite> SELECT points,name FROM customers WHERE name = "Monica";
points|name
14|Monica
sqlite> INSERT INTO coffee_orders (is_redeemed,customer_id) VALUES (1,2);
sqlite> DELETE FROM customers WHERE name = "Chandler";
sqlite> SELECT * FROM customers ;
id|name|phone_number|points|email|created_at
1|Rachel|111-111-1111|10||2024-03-31 11:37:11
2|Monica|222-222-2222|9|monica@friends.show|2024-03-31 11:37:17
3|Phoebe|333-333-3333|8|phoebe@friends.show|2024-03-31 11:37:17
4|Joey||12|joey@friends.show|2024-03-31 11:40:02
6|Ross||14|ross@friends.show|2024-03-31 11:40:02
sqlite> SELECT points,name FROM customers WHERE name = "Ross";
points|name
14|Ross
sqlite> SELECT points,id,name FROM customers WHERE name = "Ross";
points|id|name
14|6|Ross
sqlite> INSERT INTO coffee_orders (is_redeemed,customer_id) VALUES (1,6);
sqlite> SELECT points,id,name FROM customers WHERE name = "Joey";
points|id|name
12|4|Joey
sqlite> INSERT INTO coffee_orders (is_redeemed,customer_id) VALUES (1,4);
sqlite> UPDATE customers SET email ="p_as_in_phoebe@friends.show" WHERE name = "Phoebe";
sqlite> SELECT * FROM customers ;
id|name|phone_number|points|email|created_at
1|Rachel|111-111-1111|10||2024-03-31 11:37:11
2|Monica|222-222-2222|9|monica@friends.show|2024-03-31 11:37:17
3|Phoebe|333-333-3333|8|p_as_in_phoebe@friends.show|2024-03-31 11:37:17
4|Joey||7|joey@friends.show|2024-03-31 11:40:02
6|Ross||9|ross@friends.show|2024-03-31 11:40:02
