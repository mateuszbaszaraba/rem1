<template>
    <div>
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
            <div class="card border-warning" style="margin-top: 2vh">
                <h5 class="card-header bg-warning mb-3 text-white">{{ stock.name }}</h5>
                <div class="card-body">
                    <p class="card-text">Price: {{ stock.price }}</p>
                    <div class="row">
                        <div class="col">
                            <input type="number" class="form-control" v-model="quantity">
                        </div>
                        <div class="col">
                            <button
                                href="#"
                                class="btn btn-success"
                                @click="buyStock">BUY</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order)
            this.$store.dispatch('buyStock', order);
            this.quantity = 0
        }
    }
}
</script>