<template>
    <div class="absolute top-0 right-0 w-[400px] h-screen bg-slate-600/95 text-white">
        <div class="flex justify-center items-center flex-col p-5">
            <!-- CLOSE CART BUTTON -->
            <button @click="closeCart"
                class="bg-white text-black hover:bg-blue-600 hover:text-white transition duration-300 w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold">X</button>

            <!-- OGNI SIGNOLO ITEM -->
            <CartItem v-for="item in items" :item="item" class="border-b"></CartItem>

            <div class="w-full mt-2">
                <div v-if="total > 0">
                    <!-- TOTALE CARRELLO -->
                    <div>
                        {{ total }}€
                    </div>

                    <!-- CHECKOUT CTA -->
                    <div class="text-right">
                        <button class="bg-blue-600 text-white border-2 border-white rounded-sm hover:bg-white hover:text-black font-bold px-3 py-2 mt-2 text-piccolo transition duration-300"
                            @click="this.$emit('checkout')">
                            <RouterLink to="/checkout">Checkout</RouterLink>
                        </button>
                    </div>
                </div>
                <div v-else class="border border-slate-700 text-center p-4 text-xl mt-4 flex flex-col justify-center items-center">
                    <div>Il tuo carello è vuoto</div>
                    <div class="bg-blue-500 mt-5 p-4 hover:bg-blue-600 transition duration-300">
                        <RouterLink @click="this.$emit('close-cart')" to="/shop">Torna allo shop</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { mapStores } from 'pinia'
import { RouterLink } from 'vue-router'
import CartItem from './CartItem.vue'

export default {
    components: {
        CartItem
    },
    data() {
        return {
            items: [], // [{product:{}, quantity: number}]
            total: 0.00.toFixed(2)
        }
    },
    computed: {
        ...mapStores(useCartStore)
    },
    mounted() {
        this.items = this.cartStore.items
        this.retrieveItems()
        this.calculateTotal()
        this.cartStore.$subscribe(() => {
            this.retrieveItems()
            this.calculateTotal()
            this.items = this.cartStore.items
        })
    },
    methods: {
        closeCart() {
            this.$emit('close-cart')
        },
        retrieveItems() {
            this.items = this.cartStore.items
        },
        calculateTotal() {
            let total = 0;

            this.items.forEach(item => {
                total += item.product.price * item.quantity
            });

            this.total = total.toFixed(2);
        }
    }
}
</script>