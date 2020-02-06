-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT productName, CategoryName 
FROM Product AS p
JOIN category AS c
ON p.categoryId = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT Id, ShipName ,orderDate 
FROM [Order] AS O 
where (O.OrderDate < '2012-08-09')

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity 
FROM OrderDetail AS O 
JOIN Product as P 
ON O.ProductID = P.id 
WHERE (O.OrderID = '10251') 
ORDER BY ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o.id, c.companyName, LastName 
FROM [Order] AS O 
JOIN Customer as C 
ON O.CustomerID = c.id 
JOIN Employee as E 
ON O.EmployeeID = E.id;
