<script>
import { useCartStore } from '@/stores/cart';
import { mapStores, mapState, mapActions } from 'pinia'

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
        
        //...mapState(useCartStore, ['cart']),
    },
    methods: {
        ...mapActions(useCartStore, ['add', 'empty']),
        buttonClick() {
            this.add(this.product, this.quantity);
            console.log(this.cartStore.items)
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
            if (element.ID_Product == this.$route.params.id) {
                this.product = element
                return
            }
        });

        this.cartView = this.cartStore.items

        console.log("this.$route.params.id", this.$route.params.id)
        console.log("product", this.product)
    }
}
</script>

<template>
    <div v-if="product">
        <button @click="buttonClick">| Add |</button>
        <input type="number" v-model="quantity" min="1" :max="product.Quantity">

        <hr>

        <h1>Product</h1>
        <h2>{{ product.Title }}</h2>
        <p>{{ product.Description }}</p>
        <p>Prezzo: {{ product.Price }}</p>
        <p>Quantità: {{ product.Quantity }}</p>
        <p>Marca: {{ product.Brand }}</p>
        <!-- Creare view per immagini e review -->
        <img width="100px" v-for="imageURL in product.ImageURLs" :src="imageURL" alt="" style="display: inline-block;">
        <p>reviews</p>
    </div>

    <hr>

    Carrello: <button @click="emptyCart">| Svuota |</button>
    <p v-for="cart in cartView">
       Prodotto: {{ cart.product.Title }}
       Quantità: {{ cart.quantity }}
    </p>

</template>