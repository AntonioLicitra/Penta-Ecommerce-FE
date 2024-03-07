


<template>
   <h2 class="text-medio lg:text-grande text-center font-bold lg:py-[40px] py-[15px]"> PRODOTTI CONSIGLIATI </h2>
   <div class="grid grid-cols-2 lg:grid-cols-4 h-[100%] ">
       <!-- TUTTI PRODOTTI -->
       <div v-for="product in products" :key="index" class="flex flex-col justify-center items-center p-[20px] border-[1px] border-gray-100">
           <SliderConsigliati class="w-[150px] lg:w-[300px] my-auto" :item="product"></SliderConsigliati>
           <span class="flex flex-col justify-start">
               <h2 class="text-[14px] lg:text-[24px] font-medium">{{ product.title }}</h2>
               <h2 class="font-medium text-[18px]">{{ product.price }} €</h2>
           </span>
       </div>
   </div>
</template>

<script>
import SliderConsigliati from '@/components/SliderConsigliati.vue'
import jsonProducts from '@/assets/products.json'

export default {
   components: {
       SliderConsigliati
   },
   data() {
       return {
           products: []
       }
   },
   mounted() {
      
       this.products = this.casuale(jsonProducts).slice(0, 4);
   },
   methods: {
       casuale(array) {
           
           function Randomizza() {
               return Math.random() - 0.5;
           }
           
          
           return array.sort(Randomizza);
       }
   }
}
</script>


<style>
</style>


