<script>
import { mapStores, mapActions } from 'pinia'
import { useCartStore } from '@/stores/cart';
import { RouterLink } from 'vue-router';

import SliderDetail from '@/components/SliderDetail.vue'

import json from '@/assets/products.json'

export default {
    components: {
        SliderDetail
    },
    data() {
        return {
            product: null,
            quantity: 1,
            cartView: null,
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
            <!-- SLIDER -->
            <SliderDetail class="w-[400px]" :item="product"></SliderDetail>
        </div>
        <div class="w-[100%] lg:w-[50%] p-4 flex flex-col items-start lg:sticky">
            <p class="text-[14px]">{{ product.brand }}</p>
            <h2 class="text-grande font-semibold">{{ product.title }}</h2>
            <p class="text-medio ">{{ product.price }}</p>
            <p class="text-medio mt-5">{{ product.description }}</p>
            <p class="text-piccolo mt-5">Disponibilità: {{ product.quantity }}</p>
            <input class="mt-[50px] p-[5px] border-[1px] rounded-md border-black" type="number" v-model="quantity"
                min="1" :max="product.Quantity">
            <button
                class="mt-[5px] bg-[#294f94ff] hover:bg-white hover:text-[#294f94ff] text-white text-medio font-medium lg:w-[400px] w-full py-2 border border-[#294f94ff] border-[3px] rounded-md "
                @click="buttonClick">Aggiungi al carrello</button>
            <button class="text-[14px]" @click="emptyCart">Svuota carrello</button>
            <p v-for="cart in cartView">
                Prodotto: {{ cart.product.title }}
                Quantità: {{ cart.quantity }}
            </p>
        </div>
    </section>



</template>