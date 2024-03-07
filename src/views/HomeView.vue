<template>



  <!-- tutti i prodotti -->
  <section class="bg-cover bg-no-repeat h-[80vh] bg-slate-300 flex flex-col justify-center items-center bg-[url('../../src/assets/img/telefonia3.png')]">
    <h1 class="text-medioMobile lg:text-grande font-semibold">
      TUTTI I PRODOTTI
    </h1>

    <RouterLink to="/Shop" class="text-white rounded-[10px] bg-blue-600 mt-[100px] px-[20px] py-[10px] border-[2px] text-piccolo
 hover:bg-white hover:ease-in-out hover:text-black ">
      SHOP NOW
    </RouterLink>
  </section>



  <!-- container prodotti specifici -->
  <section class="px-[20px] mt-[50px]">

    <!-- box gaming-->
    <RouterLink to="/gaming" class=" text-white h-[400px] lg:h-[500px] bg-slate-400 flex flex-col justify-center items-center" style="background-image: url('../../src/assets/img/gaming\ tastiera.png' )"> 
      <h2 class="text-medioMobile lg:text-grande font-semibold hover:text-[25px] lg:hover:text-[80px]"> GAMING</h2>
    </RouterLink>




    <!-- container 2 -->
    <div class=" sm:gap-4 gap-2 w-full grid grid-cols-2 mt-2 sm:mt-4">

      <!--fotografia  -->
      <RouterLink to="/fotografia" class="lg:h-[600px] lg:p-6 p-3 h-[250px] bg-slate-400 flex justify-end items-start flex-col" style="background-image: url('../../src/assets/img/fotografia\ \(1\).png' )">
      
        <h2 class="text-medioMobile lg:text-grande font-semibold hover:text-[25px]  lg:hover:text-[55px]"> FOTOGRAFIA </h2>
    
      </RouterLink>

      <!-- elettronica -->
      <RouterLink to="/elettronica" class="lg:h-[600px] lg:p-6 p-3 h-[250px] bg-slate-400 flex justify-end items-start flex-col" style="background-image: url('../../src/assets/img/elettronica2.png' )">
        <h2 class="text-medioMobile lg:text-grande font-semibold hover:text-[25px] lg:hover:text-[55px]"> ELETTRONICA</h2>
      </RouterLink>

      <!-- elettrodomestici -->
      <RouterLink to="/elettrodomestici" class="lg:h-[600px] lg:p-6 p-3 h-[250px] bg-slate-400 flex justify-end items-start flex-col" style="background-image: url('../../src/assets/img/elettrodomestici\ .png' )">
        <h2 class="text-medioMobile lg:text-grande font-semibold hover:text-[25px] lg:hover:text-[55px]"> ELETTRODOMESTICI </h2>
      </RouterLink>

      <!-- casa -->
      <RouterLink to="/casa" class="lg:h-[600px] lg:p-6 p-3 h-[250px] bg-slate-400 flex justify-end items-start flex-col " style="background-image: url('../../src/assets/img/casa.png' )">
        <h2 class="text-medioMobile lg:text-grande font-semibold hover:text-[25px] lg:hover:text-[55px]"> CUCINA </h2>
      </RouterLink>
    </div>
  </section>

  

</template>

<script>
import { RouterLink } from 'vue-router';

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