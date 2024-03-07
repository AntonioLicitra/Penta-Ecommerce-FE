<template>
  <div v-if="items.length > 0">
    <!-- RIEPILOGO ORDINE -->
    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div class="px-4 pt-8">
        <p class="text-xl font-medium">Riepilogo ordine</p>

        <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          <div class="flex flex-col rounded-lg bg-white sm:flex-row" v-for="item in items">

            <span class="bg-slate-400 m-2 h-auto w-28 rounded-md border object-cover object-center">
              <img :src="item.product.imageURLs[0]" :alt="item.product.title">
            </span>
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold">{{ item.product.title }}</span>
              <p class="text-lg font-bold">{{ item.product.price }}€ x {{ item.quantity }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- INFORMAZIONI DI PAGAMENTO -->
      
      <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0" >
        <p class="text-xl font-medium">Informazioni di pagamento</p>
        <p class="text-gray-400">Completa l'ordine fornendo i tuoi dati di pagamento.</p>
        <form>
        <div class="">
          <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
          <div class="relative">     
            <input v-model="email" type="text"id="email" name="email"  
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="inserisci la tua mail" required  />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
          </div>   
          <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Intestatario carta</label>
          <div class="relative">
            <input v-model="nome" type="text" id="card-holder" name="card-holder"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Inserisci il tuo nome" required />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            </div>
          </div>
          <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Dettagli carta</label>
          <div class="flex">
            <div class="relative w-7/12 flex-shrink-0">
              <input v-model="carta" type="text" id="card-no" name="card-no"
                class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="xxxx-xxxx-xxxx-xxxx" required />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path
                    d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
            <input v-model="MMYY" type="text" name="credit-expiry"
              class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="MM/YY" />
            <input v-model="cvc" type="text" name="credit-cvc"
              class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="CVC" required/>
          </div>
          <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Indirizzo di spedizione</label>
          <div class="flex flex-col sm:flex-row">
            <div class="relative flex-shrink-0 sm:w-7/12">
              <input v-model="indirizzo" type="text" id="billing-address" name="billing-address"
                class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Via/piazza e numero civico" required />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

              </div>
            </div>
            <select type="text" name="billing-state"
              class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
              <option value="State">Regione</option>
            </select>
            <input v-model='zip' type="text" name="billing-zip"
              class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="ZIP" required />
          </div>


          <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Subtotale</p>
              <p class="font-semibold text-gray-900">{{ total }}€</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Spese di spedizione</p>
              <p class="font-semibold text-gray-900">{{ shipping }}€</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Totale</p>
            <p class="text-2xl font-semibold text-gray-900">{{ parseFloat(total) + parseFloat(shipping) }}€</p>
          </div>
        </div>
        <button @click="checkout" class="h-14 flex flex-col items-center justify-center mt-4 mb-8 w-full rounded-md bg-gray-900 py-3 font-medium text-white">
          <span v-if="!loading">Effettua ordine</span>
          <img v-else src="https://i.gifer.com/ZKZg.gif" alt="Loading GIF" class="h-8">
        </button>
      </form>
      </div>
    </div>
  </div>
  <div v-else class="text-center p-4 text-xl my-[10%] flex flex-col justify-center items-center">
    <div>Il tuo carello è vuoto, non dovresti essere qui</div>
    <div class="bg-blue-500 text-white border border-blue-500 mt-5 p-4 hover:bg-white hover:text-blue-500 transition duration-300">
      <RouterLink @click="this.$emit('close-cart')" to="/shop">Torna allo shop</RouterLink>
    </div>
  </div>

</template>

<script>
import { useCartStore } from '@/stores/cart'
import { mapStores, mapActions } from 'pinia'
import CartItemCheckout from './CartItemCheckout.vue'

export default {
  components: {
    CartItemCheckout
  },
  data() {
    return {
      items: [], // [{product:{}, quantity: number}]
      total: 0.00.toFixed(2),
      shipping: 8.00.toFixed(2),
      loading: false,
      email:'',
      nome:'',
      carta:'',
      MMYY:'',
      cvc:'',
      indirizzo:'',
      zip:''
    }
  },
  computed: {
    ...mapStores(useCartStore)
  },
  mounted() {
    this.payButton = "Paga"
    this.items = this.cartStore.items
    this.retrieveItems()
    this.calculateTotal()
    this.cartStore.$subscribe(() => {
      this.retrieveItems()
      this.calculateTotal()
      this.items = this.cartStore.items
    })
  },
  methods: {
    ...mapActions(useCartStore, ['empty']),
    closeCart() {
      this.$emit('close-cart')
    },
    retrieveItems() {
      this.items = this.cartStore.items
    },
    calculateTotal() {
      let total = 0;

      this.items.forEach(item => {
        total += item.product.price * item.quantity
      });

      this.total = total.toFixed(2);
    },
    checkout(e) {
      
      if(this.email != '' && this.nome != '' &&
         this.carta != '' && this.MMYY != '' &&
         this.cvc != '' &&  this.indirizzo !='' &&
         this.zip !=''){
        this.loading = true
        e.preventDefault();
      
      setTimeout(() => {
        window.location.href = '/confirm'
        this.cartView = this.cartStore.items
      }, 2000);
      }
     

    }
  }
}
</script>