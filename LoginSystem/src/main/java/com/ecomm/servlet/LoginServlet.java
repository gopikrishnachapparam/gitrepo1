package com.ecomm.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class LoginServlet
 */
//@WebServlet(description = "Login servlet is created for sign in purpose", urlPatterns = { "/login" })
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter out;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	//	response.getWriter().append("Served at: ").append(request.getContextPath());
		
		String mail = request.getParameter("mail");
		String pass = request.getParameter("pass");
		
		 out  = response.getWriter();
		
		 out.println("<br />");
		
		 out.println("<br>You request is submitted !<br />");
	
	
		
	
		 if ("admin@quickcart.com".equals(mail) && "1234".equals(pass)) {

			    response.sendRedirect("products"); // URL mapping of ProductServlet

			} else {

			    request.setAttribute("errorMessage", "Invalid email or password");
			    request.getRequestDispatcher("error.jsp").forward(request, response);
			}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
