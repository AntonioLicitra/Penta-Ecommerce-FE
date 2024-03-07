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
                    if (item.product.product_id === product.product_id) {
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
        },
        remove(cartItem) {
            this.items.forEach((item, index) => {
                if (item.product.product_id == cartItem.product.product_id) {
                    this.items.splice(index, 1);
                }
            })
        },
        removeOne(cartItem) {
            let toBeRemoved = false

            this.items.forEach((item, index) => {
                if (item.product.product_id == cartItem.product.product_id) {
                    this.items.splice(index, 1, { product: item.product, quantity: --item.quantity })

                    if (item.quantity == 0)
                        toBeRemoved = true

                    return;
                }
            });

            if (toBeRemoved)
                this.remove(cartItem)
        }
    },
    getters: {

    },
    persist: true
})