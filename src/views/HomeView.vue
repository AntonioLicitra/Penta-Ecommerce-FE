<template>

  <!-- INIZIO HERO -->
  <section class="h-[80vh] bg-slate-300 flex flex-col justify-center items-center bg-url bg-cover bg-no-repeat" style="background-image: url('../../src/assets/img/telefonia3.png' )">

    <h1 class="text-grande text-black">

      TITOLO GRANDE

    </h1>

    <button class="text-white rounded-sm bg-blue-600 mt-[100px] px-[20px] py-[10px] border-[2px] text-piccolo
 hover:bg-white hover:ease-in-out hover:text-black ">

      SHOP NOW

    </button>

  </section>

  <!-- FINE HERO -->


  <!-- INIZIO SEZIONE -->


  <!-- PRIMO QUADRATO -->



  <section class="px-[20px] mt-[50px]">

    <div class="h-[400px] lg:h-[500px] bg-slate-400 flex flex-col justify-center items-center bg-cover bg-no-repeat" style="background-image: url('../../src/assets/img/gaming\ tastiera.png' )">

      <h2 class="text-medioMobile"> GAMING </h2>

      <button class="text-white rounded-sm bg-blue-600 mt-[200px] px-[20px] py-[10px] border-[2px] text-piccoloMobile
 hover:bg-white hover:ease-in-out hover:text-black ">

        SHOP NOW

      </button>

    </div>


    <!-- TABELLA -->


    <div class=" sm:gap-4 gap-2 w-full grid grid-cols-2 mt-2 sm:mt-4">

      <div class="lg:h-[600px] lg:p-6 p-3 h-[250px] bg-slate-400 flex justify-end items-start flex-col"style="background-image: url('../../src/assets/img/fotografia\ \(1\).png' )">

        <h2 class="text-medioMobile lg:text-grande font-semibold"> FOTOGRAFIA</h2>

      </div>

      <div class="lg:h-[600px] lg:p-6 p-3 h-[250px] bg-slate-400 flex justify-end items-start flex-col" style="background-image: url('../../src/assets/img/casa.png' )">

        <h2 class="text-medioMobile lg:text-grande font-semibold"> CASA </h2>

      </div>

      <div class="lg:h-[600px] lg:p-6 p-3 h-[250px] bg-slate-400 flex justify-end items-start flex-col"style="background-image: url('../../src/assets/img/elettronica2.png' )">

        <h2 class="text-medioMobile lg:text-grande font-semibold"> ELETTRONICA </h2>

      </div>

      <div class="lg:h-[600px] lg:p-6 p-3 h-[250px] bg-slate-400 flex justify-end items-start flex-col" style="background-image: url('../../src/assets/img/elettrodomestici\ .png' )">

        <h2 class="text-medioMobile lg:text-grande font-semibold"> ELETTRODOMESTICI</h2>

      </div>
    </div>
  </section>

  <!-- TEST PRODOTTI -->
  <!-- <div class="h-[400px] lg:h-[500px] bg-slate-400 flex flex-col justify-center items-center">

    <h2 class="text-medioMobile"> TUTTI I PRODOTTI </h2>

     SINGOLO PRODOTTO 
    Prodotti per cucina
    <div v-for="product in productsByCategory('cucina')" class="grid grid-cols-4">
      Titolo: {{ product.title }}
      Immagini:
      <img class="w-[100px]" v-for="imageURL in product.imageURLs" :src="imageURL" alt="">
    </div>


    Prodotti elettronica
    <div v-for="product in productsByCategory('elettronica')" class="grid grid-cols-4">
      Titolo: {{ product.title }}
      Immagini:
      <img class="w-[100px]" v-for="imageURL in product.imageURLs" :src="imageURL" alt="">
    </div>

  </div> 

   FINE SEZIONE -->

</template>

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