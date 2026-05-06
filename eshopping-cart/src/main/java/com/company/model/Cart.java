package com.company.model;

public class Cart {
	int cartIid ;
	
	int quantity ;

	public Cart(int cartIid, int quantity) {
		super();
		this.cartIid = cartIid;
		this.quantity = quantity;
	}

	public int getCartIid() {
		return cartIid;
	}

	public void setCartIid(int cartIid) {
		this.cartIid = cartIid;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
