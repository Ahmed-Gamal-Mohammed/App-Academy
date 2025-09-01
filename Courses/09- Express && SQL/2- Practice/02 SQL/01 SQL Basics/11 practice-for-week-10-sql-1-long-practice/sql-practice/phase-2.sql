-- Your code here
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS coffee_orders;


CREATE TABLE customers(
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name TEXT NOT NULL CHECK(length(name) <= 40),
   phone TEXT UNIQUE NOT NULL CHECK(length(phone) = 10 AND phone GLOB '[0-9]*'),
   email TEXT UNIQUE NOT NULL CHECK(length(email) <= 255),
   points INTEGER NOT NULL DEFAULT 5,
   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE coffee_orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    -- is_redeemed: boolean (0 = false, 1 = true), default not redeemed
    is_redeemed BOOLEAN NOT NULL DEFAULT 0,

    -- ordered_at: timestamp when order is created
    ordered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);



CREATE TRIGGER PreventRedeemedOrderInsert
BEFORE INSERT ON coffee_orders
BEGIN
    SELECT RAISE(ABORT, 'Not enough points') 
    WHERE NEW.is_redeemed = 1 AND (SELECT points FROM customers WHERE id = NEW.customer_id) < 5;
END;

CREATE TRIGGER UpdatePointsAfterOrder
AFTER INSERT ON coffee_orders
BEGIN
    UPDATE customers
    SET points = 
        CASE 
            WHEN NEW.is_redeemed = 1 THEN points - 5
            ELSE points + 1
        END
    WHERE id = NEW.customer_id;
END;
