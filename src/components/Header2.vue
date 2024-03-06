<script>
import { RouterLink } from "vue-router";
import CartIcon from './CartIcon.vue'

export default {
    components: {
        CartIcon
    }
}

</script>




<template>


    <!-- Nav dekstop -->
    <div id class="hidden p-[40px] justify-between items-center bg-slate-400 h-[100px] lg:flex">

        <!-- Nav sx -->
        <div class="flex items-center">
            <RouterLink to="/" class="text-grande">A<sup>5</sup></RouterLink>
            <RouterLink to="./shop" class="text-medio ml-[80px] hover:underline">Shop </RouterLink>
            <RouterLink to="./saldi" class="text-medio ml-[20px] hover:underline">Saldi </RouterLink>
            <div class="text-medio ml-[20px] hover:underline">Chi siamo </div>
        </div>

        <!-- Nav dx -->
        <div class="flex items-center">
            <input type="text" placeholder="Search..."
                class="text-piccolo pl-[20px] w-[250px] h-[50px] px-[10px] rounded-[30px]">

            <CartIcon></CartIcon>
        </div>
    </div>


</template>





<style></style>
