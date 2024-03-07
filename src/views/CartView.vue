<template>
    <div class="cartView fixed top-0 right-0 h-screen bg-white text-black z-[9999] transition w-screen md:w-[512px]"
        :class="'opacity-' + lgCartOpacity">
        <div class="flex justify-center items-center flex-col p-5">
            <!-- CLOSE CART BUTTON -->
            <div class=" w-full flex justify-end">
            <button @click="closeCart"
                class="text-black text-[30px] hover:bg-white hover:text-blue-500 ease-in-out duration-300 w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold">
                <i class="fa-solid fa-xmark"></i>
            </button>
            </div>

            <!-- OGNI SIGNOLO ITEM -->
            <CartItem v-for="item in items" :item="item" class="border-b"></CartItem>

            <div class="w-full">
                <!-- CASO: CARRELLO CON ARTICOLI -->
                <div v-if="total > 0">
                    <!-- TOTALE CARRELLO -->
                    <div class="flex justify-between items-center p-2">
                        <div> {{ total }}€</div>
                        <button class="text-[14px] border-b border-white hover:border-black transition duration-300"
                            @click="emptyCart">Svuota carrello</button>
                    </div>

                    <!-- CHECKOUT CTA -->
                    <div class="text-right">
                        <button
                            class="bg-blue-600 text-white border border-blue-600 hover:border-black rounded-[10px] hover:bg-white hover:text-black font-bold px-3 py-2 mt-2 text-piccolo transition duration-300"
                            @click="this.$emit('checkout')">
                            <RouterLink to="/checkout">Checkout</RouterLink>
                        </button>
                    </div>
                </div>
                <!-- CASO: CARRELLO VUOTO -->
                <div v-else
                    class="border border-slate-200 text-center p-4 text-xl mt-4 flex flex-col justify-center items-center">
                    <div>Il tuo carello è vuoto</div>
                    <div
                        class="bg-blue-500 text-white border border-blue-600 mt-5 p-4 hover:bg-white hover:border-black rounded-[10px] hover:text-black ease-in-out duration-300">
                        <RouterLink @click="closeCart" to="/shop">Torna allo shop</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fixed top-0 right-0 bottom-0 left-0 bg-black/25 z-[50]" :class="'opacity-' + lgCartOpacity"
        @click="closeCart"></div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { mapStores, mapActions } from 'pinia'
import { RouterLink } from 'vue-router'
import CartItem from './CartItem.vue'

export default {
    emits: ['close-cart', 'checkout'],
    components: {
        CartItem
    },
    data() {
        return {
            items: [], // [{product:{}, quantity: number}]
            total: 0.00.toFixed(2),
            lgCartOpacity: 0
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
        setTimeout(() => {
            this.lgCartOpacity = 100
        }, 100);
    },
    beforeUnmount() {
        this.lgCartOpacity = 0
    },
    methods: {
        ...mapActions(useCartStore, ['empty']),
        closeCart() {
            this.lgCartOpacity = 0
            setTimeout(() => {
                this.$emit('close-cart')
            }, 150);
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
        },
        emptyCart() {
            this.empty()
        }
    }
}
</script>

<style>
.cartView {
    box-shadow: -10px 0px 50px -25px;
}
</style>