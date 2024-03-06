import { defineStore } from 'pinia'

import json from '@/assets/products.json'

export const useProductStore = defineStore('product', {
    state: () => {
        return { 
            products: json.clone(), // 41
            lastId: products.length // 47
         }
    },
    actions: {
         addProduct(product) {
        //     if (this.items.length == 0) {
        //         this.items.push({ product, quantity })
        //     } else {
        //         let exists = false;
        //         let existingItem = null

        //         this.items.forEach(item => {
        //             if (item.product.ID_Product === product.ID_Product) {
        //                 exists = true;
        //                 existingItem = item;
        //                 return
        //             }
        //         })

        //         if (exists) {
        //             existingItem.quantity += quantity
        //         } else {
        //             this.items.push({ product, quantity })
        //         }
        //     }
        },
        empty() {
            this.items = []
        }
    },
    getters: {

    },
    persist: true
})