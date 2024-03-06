<script>
import { RouterLink } from 'vue-router';
import SmallCartIcon from './SmallCartIcon.vue';

export default 
{
    components: { SmallCartIcon },
    data() {
        return {
            search: true,
            men: true
        }
    },
    methods: {
        fnSearch() {
            this.search = !this.search
        },
        fnMenu() {
            this.men = !this.men
        }
    }
}

</script>





<template>
    <!-- Nav Mobile -->
    <header id="query"
        class="text-grandeMobile font-bold query flex justify-between items-center h-[80px] bg-slate-400 p-[15px] lg:hidden">
        <RouterLink to="/">A<sup>5</sup></RouterLink>

        <div class="flex items-center">

            <!-- search -->
            <div v-if="search"> <input type="text" placeholder="Search..."
                    class="text-piccoloMobile pl-[15px] w-[200px] h-[45px] px-[10px] rounded-[30px] mb-[8px]"></div>


            <div @click="fnSearch" class="pl-[20px]"><svg class="w-[25px]" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg></div>

            <!-- shop -->
            <SmallCartIcon></SmallCartIcon>

            <!-- menù -->
            <div @click="fnMenu" v-if="men" class="ml-[23px] w-[28px]"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg></div>

            <div @click="fnMenu" v-else>


                <!-- x tendina -->
                <svg class="  w-[23px] ml-[20px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                        d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
                <!-- tendina -->
                <div id="transizione"
                    class=" flex flex-col p-[30px] position absolute top-[80px] right-0  bg-slate-600 w-[180px] h-[170px] transition ease-in-out duration-300 ">

                    <RouterLink to="./shop" class="text-medio hover:underline ">Shop </RouterLink>
                    <RouterLink to="./saldi" class="text-medio hover:underline ">Saldi </RouterLink>
                    <div class="text-medio hover:underline">Chi siamo </div>

                </div>


            </div>
        </div>
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
