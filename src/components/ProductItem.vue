<template>
  <div class="product-item">
    <img :src="productData.thumbnail" :alt="productData.name">
    <h3>{{ productData.name }}</h3>
    <p>{{ productData.description }}</p>
    <button @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  props: {
    productData: {
      type: Object,
      required: true
    }
  },
  emits: ['addToCart'],
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData);
    }
  }
}
</script>
