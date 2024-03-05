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
                let exists = false;
                let existingItem = null

                this.items.forEach(item => {
                    if (item.product.ID_Product === product.ID_Product) {
                        exists = true;
                        existingItem = item;
                        return
                    }
                })

                if (exists) {
                    existingItem.quantity += quantity
                } else {
                    this.items.push({ product, quantity })
                }
            }
        },
        empty() {
            this.items = []
        }
    },
    getters: {

    },
    persist: true
})