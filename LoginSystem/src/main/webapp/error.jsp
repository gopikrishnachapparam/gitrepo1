<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Error</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">

    <div class="alert alert-danger">
        <h4><%= request.getAttribute("errorMessage") %></h4>
    </div>

    <a href="login.jsp" class="btn btn-primary">Back to Login</a>

</body>
</html>