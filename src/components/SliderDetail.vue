<template>
    <Carousel>
        <Slide v-for="(slide, i) in item.imageURLs" :key="i">
            <div class="flex justify-center items-center">
                <img :src="slide" alt="" class="w-[75%]">
            </div>
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
    }
}
</script>

<style>
</style>