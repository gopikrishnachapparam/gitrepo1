package com.ecomm.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ProductServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public static class Product {
        private String name;
        private double price;
        private String category;

        public Product(String name, double price, String category) {
            this.name = name;
            this.price = price;
            this.category = category;
        }

        public String getName() {
            return name;
        }

        public double getPrice() {
            return price;
        }

        public String getCategory() {
            return category;
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        List<Product> products = new ArrayList<>();

        products.add(new Product("iPhone 15", 79999, "Mobiles"));
        products.add(new Product("Samsung TV", 45999, "Electronics"));
        products.add(new Product("Nike Shoes", 5999, "Fashion"));
        products.add(new Product("Laptop HP", 65999, "Computers"));

        request.setAttribute("productList", products);
        request.setAttribute("message", "You have successfully logged in!");

        request.getRequestDispatcher("dashboard.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }
}
