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
        console.log(this.products)
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






<template>

<h2 class="text-medio lg:text-grande text-center font-bold lg:py-[40px] py-[15px]"> CUCINA </h2>
<div class="grid grid-cols-2 lg:grid-cols-4 h-[100%] ">

<!-- ciclo del json + router al singolo id -->
<div v-for="product in productsByCategory('cucina')" class="flex flex-col justify-center items-center p-[20px] border-[1px] border-gray-100">
           
           <Slider class="w-[150px] lg:w-[300px] my-auto"  :item="product" alt=""></Slider>
           <span class="flex flex-col justify-start">
                <h2 class="text-[14px] lg:text-[24px] font-medium ">{{ product.title }}</h2>
                <h2 class="font-medium text-[18px]">{{ product.price }} €</h2>
                </span>
            

          
            </div>

        </div>



</template>