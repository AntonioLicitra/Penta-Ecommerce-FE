<script>
import { RouterLink } from 'vue-router';
import SmallCartIcon from './SmallCartIcon.vue';
import CartIcon from './CartIcon.vue'
import CartView from '@/views/CartView.vue'

export default {
    components: { SmallCartIcon, CartIcon, CartView },
    data() {
        return {
            search: true,
            men: true,
            cartShow: false,
            searchTerm: '',
        }
    },
    methods: {
        fnSearch() {
            this.search = !this.search
        },
        fnMenu() {
            this.men = !this.men
        },
        showCart() {
            this.cartShow = !this.cartShow
        }
    },
    computed: {
        searchEvent() {
            window.location.href = `/search?term=${this.searchTerm}`
        }
    }
}

</script>

<template>
    <div>
        <!-- Nav Mobile
    <header id="query"
        class="text-grandeMobile font-bold query flex justify-between items-center h-[80px] bg-slate-400 p-[15px] lg:hidden">
        <RouterLink to="/">A<sup>5</sup></RouterLink>

        <div class="flex items-center">

            <!- search -->
        <!-- <div v-if="search"> <input type="text" placeholder="Search..."
                    class="text-piccoloMobile pl-[15px] w-[200px] h-[45px] px-[10px] rounded-[30px] mb-[8px]"></div>


            <div @click="fnSearch" class="pl-[20px]"><svg class="w-[25px]" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg></div> -->

        <!-- shop -->


        <!-- menù -->
        <!-- <div @click="fnMenu" v-if="men" class="ml-[23px] w-[28px]"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg></div>

            <div @click="fnMenu" v-else> -->


        <!-- x tendina -->
        <!-- <svg class="  w-[23px] ml-[20px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                        d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg> -->
        <!-- tendina -->
        <!-- <div id="transizione"
                    class=" flex flex-col p-[30px] position absolute top-[80px] right-0  bg-slate-600 w-[180px] h-[170px] transition ease-in-out duration-300 ">

                    <RouterLink to="/shop" class="text-medio hover:underline ">Shop </RouterLink>
                    <RouterLink to="/saldi" class="text-medio hover:underline ">Saldi </RouterLink>
                    <RouterLink to="/about" class="text-medio hover:underline">Chi siamo </RouterLink>

                </div> -->


        <!-- </div>
        </div>
    </header> -->

        <!-- Nav dekstop -->
        <!-- <div id class="hidden p-[40px] justify-between items-center bg-slate-400 h-[100px] lg:flex">

<!- Nav sx -->
        <!-- <div class="flex items-center">
    <RouterLink to="/" class="text-grande">A<sup>5</sup></RouterLink>
    <RouterLink to="/shop" class="text-medio ml-[80px] hover:underline">Shop </RouterLink>
    <RouterLink to="/saldi" class="text-medio ml-[20px] hover:underline">Saldi </RouterLink>
    <div class="text-medio ml-[20px] hover:underline">Chi siamo </div>
</div> 

         Nav dx -->
        <!-- <div class="flex items-center">
            <input type="text" placeholder="Search..."
                class="text-piccolo pl-[20px] w-[250px] h-[50px] px-[10px] rounded-[30px]">

            <button @click="showCart">
                <CartIcon></CartIcon>
            </button>
            <CartView v-if="cartShow" @close-cart="showCart" @checkout="showCart"></CartView>
        </div> -->
        <!-- </div>  -->
    </div>
    <header>



        <nav class="flex items-center w-[100vw] h-[100px] px-[25px] xl:px-[40px] justify-between ">
            <div class="flex items-center w-full justify-between">

                <div class="w-[80%] flex items-center">

                    <!-- LOGO -->

                    <RouterLink to="/" class="text-grande"><svg class="w-[60px]" viewBox="0 0 500 500" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_288_4)">
                                <path
                                    d="M320.6 383.3H159.5C153.2 383.3 147.3 386.8 144.3 392.3L106 461.6C103 467.1 105 474 110.5 477C112.2 477.9 114.1 478.4 116 478.4H321.7C346.9 478.4 367.7 458.8 369.2 433.6C370.7 406.1 348.4 383.3 320.6 383.3Z"
                                    fill="#294F94" />
                                <path
                                    d="M273 28.6999C250.6 14.8999 221.1 21.5999 207.3 43.9999C207.3 44.1999 207.1 44.4 206.9 44.4L7.2001 405.7C-6.6999 428.1 0.200104 457.5 22.5001 471.4C30.0001 476.1 38.8001 478.5 47.6001 478.4C64.2001 478.5 79.6001 469.9 88.1001 455.6L287.9 94.2999C301.9 72.0999 295.2 42.6999 273 28.6999Z"
                                    fill="#294F94" />
                                <path
                                    d="M493.1 406.1L408.6 253.6C394.6 231.5 365.2 224.5 343.1 238.5C321 252.1 314 281 327.2 303.3L411.7 455.8C420.2 469.9 435.5 478.5 452 478.5C474.1 478.6 493.4 463.4 498.7 441.9C501.6 429.3 499.7 416.7 493.1 406.1ZM315.8 137C289.7 137 268.6 158.1 268.6 184.2C268.6 210.3 289.7 231.4 315.8 231.4C341.9 231.4 363 210.3 363 184.2C363.4 158.2 342.2 137 315.8 137Z"
                                    fill="#294F94" />
                            </g>
                            <defs>
                                <clipPath id="clip0_288_4">
                                    <rect width="500" height="500" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </RouterLink>

                    <!-- MENU DESKTOP -->

                    <ul class="max-[1240px]:hidden max-xl:ml-[50px] flex gap-3 xl:gap-5  ml-[80px] ">
                        <RouterLink to="/shop" class="text-medio hover:underline">Shop </RouterLink>
                        <RouterLink to="/gaming" class="text-medio font-medium hover:underline">Gaming</RouterLink>
                        <RouterLink to="/fotografia" class="text-medio hover:underline">Fotografia</RouterLink>
                        <RouterLink to="/elettronica" class="text-medio hover:underline">Elettronica</RouterLink>
                        <RouterLink to="/elettrodomestici" class="text-medio hover:underline">Elettrodomestici</RouterLink>
                        <RouterLink to="/casa" class="text-medio hover:underline">Casa</RouterLink>
                        <RouterLink to="/about" class="text-medio hover:underline">Chi siamo </RouterLink>
                    </ul>
                </div>
                <div class=" flex justify-center items-center">


                    <!-- SEARCH -->
                    <div class="flex  ">
                        <div class="relative sm:w-60 flex items-center mr-[-20px] sm:mr-0">
                            <input v-model="searchTerm" @change="searchEvent" type="search"
                                class="hidden md:block w-full border h-12 shadow py-4 pr-12 pl-4 rounded-full"
                                placeholder="Ricerca...">

                            <svg class="text-black h-6 w-6 lg:h-5 lg:w-5 md:absolute md:top-3 md:right-3 fill-current"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966"
                                style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve">
                                <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                                </path>
                            </svg>

                        </div>

                        <button @click="showCart">
                            <CartIcon></CartIcon>
                        </button>
                        <CartView v-if="cartShow" @close-cart="showCart" @checkout="showCart"></CartView>
                        <!-- menù -->
                        <div @click="fnMenu" v-if="men" class="ml-[23px] w-[28px] min-[1240px]:hidden"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                            </svg></div>

                        <div @click="fnMenu" v-else>


                            <!-- x tendina -->
                            <svg class="w-[23px] ml-[20px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path
                                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                            </svg>
                            <!-- tendina -->
                            <div id="transizione"
                                class=" flex flex-col p-[30px] position absolute top-[100px] right-0  bg-slate-600 w-[180px] h-[170px] transition ease-in-out duration-300">

                                <RouterLink to="/shop" class="text-medio hover:underline ">Shop</RouterLink>
                                <RouterLink to="/saldi" class="text-medio hover:underline ">Saldi</RouterLink>
                                <RouterLink to="/about" class="text-medio hover:underline">Chi siamo</RouterLink>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style>
#transizione {
    animation-name: tran;
    animation-duration: 1s;
}

@keyframes tran {
    from {
        top: 0;
    }

    to {
        top: 80px;
    }
}
</style>
