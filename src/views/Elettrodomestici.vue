<script>
import jsonProducts from '@/assets/products.json'

export default {
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

<h2 class="text-medio lg:text-grande text-center font-bold lg:py-[40px] py-[15px]  "> ELETTRODOMESTICI </h2>
<div class="grid grid-cols-4 h-[100%] ">

<RouterLink :to="{path:'/detail/'+ product.product_id}" v-for="product in productsByCategory('elettrodomestici')" class="flex flex-col justify-end items-center p-[20px] border-2">
           
           <img class="w-[200px] my-auto p-[20px] bg-white hover:w-[300px]"  :src="product.imageURLs[0]" alt="">
       
            <h2>{{ product.title }}</h2>
            <h2>{{ product.price }}</h2>
          
</RouterLink>

        </div>



</template>