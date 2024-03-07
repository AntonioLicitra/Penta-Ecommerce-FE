<script>
import { mapStores, mapActions } from 'pinia'
import { useCartStore } from '@/stores/cart';
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue';

import SliderDetail from '@/components/SliderDetail.vue'

import json from '@/assets/products.json'

export default {
    components: {
        SliderDetail,
        Card
    },
    data() {
        return {
            product: null,
            quantity: 1,
        }
    },
    computed: {
        ...mapStores(useCartStore)
    },
    methods: {
        ...mapActions(useCartStore, ['add', 'empty']),
        addToCart() {
            this.add(this.product, this.quantity)
            this.cartView = this.cartStore.item
        },
        validateQuantity() {
            this.quantity = this.quantity <= this.product.quantity ? this.quantity : this.product.quantity
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
            <!-- SLIDER -->
            <SliderDetail class="w-[70%]" :item="product"></SliderDetail>
        </div>
        <div class="w-[100%] lg:w-[50%] p-4 flex flex-col items-start lg:sticky">
            <p class="text-[14px]">{{ product.brand }}</p>
            <h2 class="text-grande font-semibold">{{ product.title }}</h2>
            <p class="text-medio ">{{ product.price }} €</p>
            <p class="text-medio mt-5">{{ product.description }}</p>
            <p class="text-piccolo mt-5">Disponibilità: {{ product.quantity }}</p>
            <input class="mt-[50px] p-[5px] border-[1px] rounded-md border-black" type="number" v-model="quantity"
                min="1" :max="product.quantity" @change="validateQuantity">
            <button
                class="mt-[5px] bg-blue-600 hover:bg-white hover:text-black text-white text-medio font-medium lg:w-[400px] w-full py-2 border-[2px] hover:border-black border-blue-600 rounded-[10px] ease-in-out duration-300"
                @click="addToCart">Aggiungi al carrello</button>
        </div>

        
    </section>

    <div class="mt-[200px]">

        <card> </card>

    </div>
    


</template>