<template>
    <div class="text-white flex justify-between items-center p-2 w-full">
        <div class="p-2 flex-col grow">
            <div>
                {{ item.product.title }}
            </div>
            <div>
                {{ item.product.price }}€
            </div>
        </div>

        <!-- SELETTORE QUANTITY -->
        <div class="p-2 flex-none flex items-center justify-center">
            <div>
                <input type="number" v-model="quantity" min="0" :max="item.product.quantity"
                    class="text-white bg-transparent text-right px-2" @change="modifyQuantity">
            </div>
            <div class="flex flex-col justify-center items-center">
                <i @click="increment" class="fa-solid fa-angle-up px-1 hover:text-black"></i>
                <i @click="decrement" class="fa-solid fa-angle-down px-1 hover:text-black"></i>
            </div>
        </div>

        <!-- SELETTORE RIMUOVI -->
        <div class="flex-none ml-4">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
</template>

<script>
import { mapStores, mapActions } from 'pinia'
import { useCartStore } from '@/stores/cart'

export default {
    props: ['item'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        ...mapStores(useCartStore)
    },
    mounted() {
        this.quantity = this.item.quantity
        this.cartStore.$subscribe(() => {
            this.quantity = this.item.quantity
        })
        console.log("CartItem.this.quantity", this.quantity)
    },
    methods: {
        ...mapActions(useCartStore, ['remove', 'removeOne', 'add']),
        modifyQuantity() {
            // TODO
            console.log("CartItem.modifiQuantity()")
        },
        increment() {
            // TODO
            console.log("CartItem.increment")
        },
        decrement() {
            // TODO
            // this.removeOne(this.item);
        }
    }
}
</script>

<style scoped>
input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
}
</style>