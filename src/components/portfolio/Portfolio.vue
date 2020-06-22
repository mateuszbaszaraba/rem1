<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
import stock from './Stock'

export default {
    components: {
        appStock: stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stockPortfolio
        }
    }
}
</script>