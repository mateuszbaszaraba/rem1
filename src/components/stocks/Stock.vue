<template>
    <div>
        <p>ID: {{stock.id}} | {{stock.name}} | {{stock.price}}</p>
    </div>
</template>

<script>
export default {
    props: ['stock']
}
</script>