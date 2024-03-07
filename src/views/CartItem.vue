<template>
    <div class="flex justify-between items-center p-2 w-full">
        <div class="p-2 flex-col grow">
            <div class="flex gap-4">
                <div class="w-[100px]">
                    <img :src="item.product.imageURLs[0]" :alt="item.product.title" class="w-[80px] min-w-[50px]">
                </div>
                <div>
                    <div>
                        {{ item.product.title }}
                    </div>
                    <div>
                        {{ item.product.price }}€
                    </div>
                </div>
            </div>
        </div>

        <!-- SELETTORE QUANTITY -->
        <div class="p-2 flex-none flex items-center justify-center">
            <div>
                <input type="number" v-model="quantity" min="0" :max="item.product.quantity"
                    class="bg-transparent text-right px-2" @change="modifyQuantity">
            </div>
            <div class="flex flex-col justify-center items-center">
                <i @click="increment"
                    class="fa-solid fa-angle-up px-1 hover:text-black active:text-blue-500 transition"></i>
                <i @click="decrement"
                    class="fa-solid fa-angle-down px-1 hover:text-black active:text-blue-500 transition"></i>
            </div>
        </div>

        <!-- SELETTORE RIMUOVI -->
        <div class="flex-none ml-4">
            <i @click="removeItem" class="fa-solid fa-xmark hover:text-black active:text-blue-500 transition"></i>
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
    },
    methods: {
        ...mapActions(useCartStore, ['remove', 'removeOne', 'add']),
        modifyQuantity() {
            // TODO
        },
        increment() {
            this.add(this.item.product)
        },
        decrement() {
            this.removeOne(this.item);
        },
        removeItem() {
            this.remove(this.item)
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