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
        remove(product) {

        },
        removeOne(cartItem) {
            console.log("cartStore.removeOne")

            let itemToUpdate = null
            let indexToInsert = 0

            this.items.forEach((item, index) => {
                console.log("cartStore.item", item)
                console.log("cartStore.product", cartItem)

                if (item.product.product_id == cartItem.product.product_id) {
                    console.log("ENTRO NELL'IF")
                    itemToUpdate = { product: item.product, quantity: item.quantity-- }
                    indexToInsert = index
                    return
                }
            });

            console.log("itemToUpdate", itemToUpdate)
            console.log("indexToInsert", indexToInsert)

            if (itemToUpdate != null)
                //this.items = this.items.splice(indexToInsert, 1, this.items.splice(indexToInsert, 0, itemToUpdate))

            console.log("deleted item", this.items.splice(indexToInsert, 1, itemToUpdate))
        }
    },
    getters: {

    },
    persist: true
})