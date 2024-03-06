<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { useCartStore } from '@/stores/cart';
import { RouterLink } from 'vue-router';

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
  
    
    <section v-if="product" class="flex flex-col lg:flex-row mt-10">
        <div class="w-[100%] lg:w-[50%] gap-10 flex flex-col justify-center items-center">
        <img class="w-[300px]" v-for="imageURL in product.imageURLs" :src="imageURL" alt="" >
        </div>
        <div class="w-[100%] lg:w-[50%] p-4 flex flex-col items-start lg:sticky">
            <p class="text-[14px]">{{ product.brand }}</p>
            <h2 class="text-grande font-semibold">{{ product.title }}</h2>
            <p class="text-medio ">{{ product.price }}</p>
            <p class="text-medio mt-5">{{ product.description }}</p>
            <p class="text-piccolo mt-5">Disponibilità: {{ product.quantity }}</p>
            <input class="mt-[50px] p-[5px] border-[1px] rounded-md border-black" type="number" v-model="quantity" min="1" :max="product.Quantity">
            <button class="mt-[5px] bg-[#294f94ff] hover:bg-white hover:text-[#294f94ff] text-white text-medio font-medium lg:w-[400px] w-[200px] py-2 border border-[#294f94ff] border-[3px] rounded-md " @click="buttonClick">Aggiungi al carrello</button>
        
        </div>
    </section>
    
    
    
    
    
    
    
    
    
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
        <!-- Creare view per immagini e review  -->
        <!-- <img width="100px" v-for="imageURL in product.imageURLs" :src="imageURL" alt="" style="display: inline-block;"> -->
        <p>reviews</p>
    </div>

    <hr>

    Carrello: <button @click="emptyCart">| Svuota |</button>
    <p v-for="cart in cartView">
       Prodotto: {{ cart.product.title }}
       Quantità: {{ cart.quantity }}
    </p>

</template>