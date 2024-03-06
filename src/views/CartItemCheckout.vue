<template>
    <div class="text-black flex justify-between items-center py-2 w-full">
        <div class="flex-col grow">
            <div>
                {{ item.product.title }}
            </div>
            <div>
                {{ item.product.price }}€
            </div>
        </div>

        <!-- SELETTORE QUANTITY -->
        <div class="flex-none flex items-center justify-center">
            <div>
                <input disabled type="number" v-model="quantity" min="0" :max="item.product.quantity"
                    class="bg-transparent text-right px-2" @change="modifyQuantity">
            </div>
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