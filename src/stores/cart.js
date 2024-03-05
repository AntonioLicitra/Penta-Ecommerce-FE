import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        return { items: [] } // cart: [{product: {}, quantity: number}]
    },
    actions: {
        add(product, quantity = 1) {
            if (this.items.length == 0) {
                this.items.push({ product, quantity })
            } else {
                this.items.forEach(element => {
                    console.log("product.ID_Product", product.ID_Product)
                    console.log("element.product.ID_Product", element.product.ID_Product)
                    if (element.product.ID_Product === product.ID_Product) {
                        element.quantity += quantity
                    } else {
                        this.items.push({ product, quantity })
                    }
                })
            }
        },
        empty() {
            console.log("this.items pre",this.items)

            this.items = []

            console.log("this.items post",this.items)
        }
    },
    getters: {

    },
    persist: true
})