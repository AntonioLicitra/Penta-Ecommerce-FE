<template>
    <div class="flex flex-col justify-evenly items-center p-10">
        <h1 class="text-2xl font-bold p-10">
            Grazie per aver comprato da noi
        </h1>

        <img class="w-[200px]"
            src="https://camo.githubusercontent.com/525dafac7785a35b476e3ec23feab02010e7029257daa28c50345dbc6ec3992f/68747470733a2f2f632e74656e6f722e636f6d2f46336b5254394f426f664541414141692f7075736865656e2d68656c6c6f2e676966"
            alt="">

        <RouterLink class="hover:underline text-xl p-14" to="/home">Clicca qui per tornare alla <span
                class="font-bold">Home</span> o aspetta {{ x }} secondi</RouterLink>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { mapStores, mapActions } from 'pinia'

export default {
    data() {
        return {
            x: 5
        }
    },
    computed: {
        ...mapStores(useCartStore)
    },
    methods: {
        ...mapActions(useCartStore, ['empty']),
    },
    mounted() {
        this.empty();
        setTimeout(() => {
            window.location.href = '/'
        }, 5000);
    }
}

</script>