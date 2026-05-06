<%@ page import="java.util.List" %>
<%@ page import="com.ecomm.servlet.ProductServlet.Product" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-4">

    <h2 class="text-success">
        <%= request.getAttribute("message") %>
    </h2>

    <h3 class="mt-4">Product Dashboard</h3>

    <table class="table table-bordered mt-3">
        <thead class="table-dark">
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
            </tr>
        </thead>

        <tbody>
        <%
            List<Product> products = (List<Product>) request.getAttribute("productList");

            if (products != null) {
                for (Product p : products) {
        %>
            <tr>
                <td><%= p.getName() %></td>
                <td>₹ <%= p.getPrice() %></td>
                <td><%= p.getCategory() %></td>
            </tr>
        <%
                }
            }
        %>
        </tbody>
    </table>

</body>
</html>