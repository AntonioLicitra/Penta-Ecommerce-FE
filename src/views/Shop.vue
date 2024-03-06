<template>
    <h2 class="text-medio lg:text-grande text-center font-bold lg:py-[40px] py-[15px]"> TUTTI I PRODOTTI </h2>
        <div class="grid grid-cols-4 h-[100%] ">

            <!-- TUTTI PRODOTTI -->
            <div v-for="product in products" class="flex flex-col justify-center items-center p-[20px] border-2">

                <Slider class="w-[300px] my-auto" :item="product"></Slider>

                <h2>{{ product.title }}</h2>
                <h2>{{ product.price }}</h2>

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
            products: []
        }
    },
    mounted() {
        this.products = jsonProducts
    },
    methods: {
        productsByCategory(category) {
            let resultArray = []

            jsonProducts.forEach(product => {
                if (product.categories.includes(category))
                    resultArray.push(product)
            })

            return resultArray;
        }
    }
}
</script>

<style>
</style>