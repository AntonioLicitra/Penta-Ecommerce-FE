<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { useCartStore } from '@/stores/cart';

import json from '@/assets/products.json'

export default {
    data() {
        return {
            product: null,
            quantity: 1,
            cartView: null
        }
    },
    computed: {
        ...mapStores(useCartStore)
    },
    methods: {
        ...mapActions(useCartStore, ['add', 'empty']),
        buttonClick() {
            this.add(this.product, this.quantity);
            this.cartView = this.cartStore.items
            
        },
        emptyCart() {
            this.empty()
            this.cartView = this.cartStore.items
        }
    },
    mounted() {
        // Chiamata axios.get(:id) a DB o lettura JSON

        json.forEach(element => {
            if (element.product_id == this.$route.params.id) {
                this.product = element
                return
            }
        });

        this.cartView = this.cartStore.items
    }
}
</script>

<template>
    <div v-if="product">
        <button @click="buttonClick">| Add |</button>
        <input type="number" v-model="quantity" min="1" :max="product.Quantity">

        <hr>

        <h1>Product</h1>
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>Prezzo: {{ product.price }}</p>
        <p>Quantità: {{ product.quantity }}</p>
        <p>Marca: {{ product.brand }}</p>
        <!-- Creare view per immagini e review -->
        <img width="100px" v-for="imageURL in product.imageURLs" :src="imageURL" alt="" style="display: inline-block;">
        <p>reviews</p>
    </div>

    <hr>

    Carrello: <button @click="emptyCart">| Svuota |</button>
    <p v-for="cart in cartView">
       Prodotto: {{ cart.product.title }}
       Quantità: {{ cart.quantity }}
    </p>

</template>