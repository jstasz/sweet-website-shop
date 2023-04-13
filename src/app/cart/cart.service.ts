import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AlertService } from "../shop-online/shop-products/alert/alert.service";
import { ShopProduct } from "../shop-online/shop-products/shop-product/product.model";
import { Cart } from "./cart.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart: Cart = {items: []};
    cartChanges = new Subject<Cart>();

    constructor(private alertService: AlertService) {}

    getTotalCartPrice(items: ShopProduct[]): number {
        return items.map((item) => item.price * item.quantity).reduce((prev, cur) => prev + cur, 0)
    }

    addToCart(item: ShopProduct) {
        const productInCart = this.cart.items.find(prod => prod.id === item.id);

        if(productInCart) {
            productInCart.quantity += 1
        } else {
            item.quantity = 1;
            this.cart.items.push(item);
            this.alertService.activateAlert(item)
        }
        this.cartChanges.next(this.cart);
    }

    removeFromCart(item: ShopProduct, index: number) {
        item.quantity = 0;
        this.cart.items.splice(index, 1);
        this.cartChanges.next(this.cart);
    }

    changeQuantity(item: ShopProduct, index: number) {
        const productInCart = this.cart.items.find(prod => prod.id === item.id);

        if(productInCart && productInCart.quantity > 1) {
            productInCart.quantity -= 1;
        } else {
            this.removeFromCart(item, index)
        }
    }

    clearCart() {
        this.cart.items.forEach(item => item.quantity = 0);
        this.cart.items.splice(0, this.cart.items.length);
        this.cartChanges.next(this.cart);
    }
}