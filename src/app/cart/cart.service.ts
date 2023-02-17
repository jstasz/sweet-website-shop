import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ShopProduct } from "../shop-online/shop-products/shop-product/product.model";
import { Cart } from "./cart.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart: Cart = {items: []}
    cartChanges = new Subject<Cart>()

    page: number = 1;
    // tableSizeChanges = new Subject<number>();
    // tableSize: number = 3;

    constructor() {}

    getTotalCartPrice(items: ShopProduct[]): number {
        return items.map((item) => item.price * item.quantity).reduce((prev, cur) => prev + cur, 0)
    }

    addToCart(item: ShopProduct) {
        const productInCart = this.cart.items.find(prod => prod.id === item.id);

        if(productInCart) {
            productInCart.quantity += 1
        } else {
            this.cart.items.push(item);
        }

        this.cartChanges.next(this.cart);
    }

    removeFromCart(index: number) {
        this.cart.items.splice(index, 1);
        this.cartChanges.next(this.cart);
    }

    changeQuantity(item: ShopProduct, index: number) {
        const productInCart = this.cart.items.find(prod => prod.id === item.id);

        if(productInCart && productInCart.quantity > 1) {
            productInCart.quantity -= 1;
        } else {
            this.removeFromCart(index)
        }
    }

    clearCart() {
        this.cart.items.splice(0, this.cart.items.length);
        this.cartChanges.next(this.cart);
    }

    // onTableDataChange(event: any) {
    //     this.page = event;
    //     this.cartChanges.subscribe(cart => this.cart = cart)
    // }

    // tableSizeChange(event: any) {
    //     this.tableSize = event.target.value
    //     this.tableSizeChanges.next(this.tableSize);
    //     this.page = 1;
    // }
}