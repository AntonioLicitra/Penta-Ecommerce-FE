<template>
    <Carousel>
        <Slide v-for="(slide, i) in item.imageURLs" :key="i">
            <RouterLink @click="reload" :to="{ path: '/detail/' + item.product_id }" class="flex justify-center items-center">
                <img :src="slide" alt="" class="w-[75%]">
            </RouterLink>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    props: ['item'],
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    methods: { 
        reload(){ 
             window.location.href="/detail/" + this.item.product_id 
            
        } 
    }
}
</script>

<style>
@media screen and (max-width: 600px){
.carousel__icon{ 

    display:none

}}
</style>