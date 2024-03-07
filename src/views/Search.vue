<template>
    <h2 class="text-medio lg:text-grande text-center font-bold lg:py-[40px] py-[15px]">RISULTATI RICERCA</h2>
    <div class="grid h-[100%] grid-cols-1" :class="'lg:grid-cols-4'">

        <!-- RICERCA -->
        <div v-for="product in productsBySearchQuery(searchQuery)"
            class="flex flex-col justify-center items-center p-[20px] border-[1px] border-gray-100">

            <Slider class="w-[150px] lg:w-[300px] my-auto" :item="product"></Slider>
            <span class="flex flex-col justify-start">
                <h2 class="text-[14px] lg:text-[24px] font-medium ">{{ product.title }}</h2>
                <h2 class="font-medium text-[18px]">{{ product.price }} €</h2>
            </span>

        </div>

    </div>
    <div v-if="empty" class="text-center p-4 text-xl my-[10%] flex flex-col justify-center items-center">
        <div>Nessun risultato trovato</div>
        <div
            class="bg-blue-500 text-white border border-blue-500 mt-5 p-4 hover:bg-white hover:text-blue-500 transition duration-300">
            <RouterLink @click=resetSearch to="/shop">Torna allo shop</RouterLink>
        </div>
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'

import jsonProducts from '@/assets/products.json'

export default {
    components: {
        Slider
    },
    data() {
        return {
            products: [],
            filteredSearch: false,
            searchQuery: "",
            empty: true,
            foundProductsLength: 0
        }
    },
    mounted() {
        this.products = jsonProducts

        if (Object.keys(this.$route.query).length != 0 && Object.keys(this.$route.query.term).length != 0) {
            this.filteredSearch = true
            this.searchQuery = this.$route.query.term
        } else {
            this.filteredSearch = false
            this.searchQuery = ""
        }
    },
    methods: {
        productsByCategory(category) {
            let resultArray = []

            jsonProducts.forEach(product => {
                if (product.categories.includes(category))
                    resultArray.push(product)
            })

            return resultArray;
        },
        productsBySearchQuery(searchQuery) {
            let foundProducts = []
            this.empty = true

            this.products.forEach(product => {
                if (product.title.toLowerCase().includes(searchQuery) || product.categories.includes(searchQuery))
                    foundProducts.push(product)
            })

            console.log("foundProducts", foundProducts)

            if (foundProducts.length != 0) {
                this.foundProductsLength = foundProducts.length
                this.empty = false
            }
            return foundProducts;
        },
        resetSearch() {
            this.filteredSearch = false;
        }
    }
}
</script>