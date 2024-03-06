<template>
    <div v-if="items.length != 0" class="flex flex-col">
        <div class="text-center text-2xl font-bold my-10">
            <h1>Checkout</h1>
        </div>
        <div class="flex justify-evenly my-10">
            <!-- FORM -->
            <div class="flex flex-col pl-5">
                <div class="flex flex-col p-2">
                    <label for="name">Nome</label>
                    <input type="text" name="name" id="" class="border-none" placeholder="Nome">
                </div>
                <div class="flex flex-col p-2">
                    <label for="surname">Cognome</label>
                    <input type="text" name="surname" id="" class="border-none" placeholder="Cognome">
                    <div>
                        <label for="country">Stato</label>
                        <select>
                            <option value="Italia">Italia</option>
                            <option value="Italia">Francia</option>
                            <option value="Italia">Germania</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col p-2">
                    <label for="address">Indirizzo</label>
                    <input type="text" name="address" id="" class="border-none" placeholder="Indirizzo">
                </div>
                <div class="flex flex-col p-2">
                    <label for="postcode">Codice postale</label>
                    <input type="text" name="postcode" id="" class="border-none" placeholder="Codice postale">
                </div>
                <div class="flex flex-col p-2">
                    <label for="city">Città</label>
                    <input type="text" name="city" id="" class="border-none" placeholder="Città">
                </div>
                <div class="flex flex-col p-2">
                    <label for="province">Provincia</label>
                    <input type="text" name="province" id="" class="border-none" placeholder="Provincia">
                </div>
                <div class="flex flex-col p-2">
                    <label for="phone">Telefono (opzionale)</label>
                    <input type="text" name="phone" id="" class="border-none" placeholder="Telefono">
                </div>
                <div class="flex flex-col p-2">
                    <label for="birthdate">Data di nascita (opzionale)</label>
                    <input type="date" name="birthdate" id="" class="border-none" placeholder="gg/mm/aaaa">
                </div>
                <div class="flex flex-col p-2">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="" class="border-none" placeholder="E-mail">
                </div>
                <div class="flex flex-row p-2 justify-between">
                    <input type="checkbox" name="checkbox-create-account" id="">
                    <label for="checkbox-create-account">Creare un account?</label>
                </div>
            </div>
            <!-- SOMMARIO ORDINE -->
            <div>
                <h1 class="text-xl font-bold">ORDINE</h1>
                <CartItemCheckout v-for="item in items" :item="item" class="border-b"></CartItemCheckout>

                <!-- TOTALE -->
                <div class="mt-2">
                    {{ total }}€
                </div>

                <!-- PAGAMENTO CTA -->
                <div class="text-right mt-4">
                    <button @click="checkout" class="text-center">
                        <span v-if="!loading" class="bg-blue-500 text-white font-bold px-3 py-2 text-xl">Paga</span>
                        <img v-else src="https://i.gifer.com/ZKZg.gif" alt="Loading GIF" class="w-8">
                    </button>
                </div>

            </div>
        </div>

    </div>
    <div v-else class="text-center p-4 text-xl m-4 flex flex-col justify-center items-center">
        <div>Il tuo carello è vuoto</div>
        <div class="bg-blue-500 mt-5 p-4 hover:bg-blue-600 transition duration-300">
            <RouterLink @click="this.$emit('close-cart')" to="/shop">Torna allo shop</RouterLink>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { mapStores, mapActions } from 'pinia'
import CartItemCheckout from './CartItemCheckout.vue'

export default {
    components: {
        CartItemCheckout
    },
    data() {
        return {
            items: [], // [{product:{}, quantity: number}]
            total: 0.00.toFixed(2),
            loading: false
        }
    },
    computed: {
        ...mapStores(useCartStore)
    },
    mounted() {
        this.payButton = "Paga"
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
        ...mapActions(useCartStore, ['empty']),
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
        },
        checkout() {
            this.loading = true
            setTimeout(() => {
                window.location.href = '/confirm'
                this.cartView = this.cartStore.items
            }, 2000);

        }
    }
}
</script>