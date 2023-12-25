<template>
  <div class="navigation-buttons">
    <router-link to="/header" class="btn">На начальную страницу</router-link>
    <router-link to="/cart" class="btn">В избранные</router-link>
  </div>
  <br>

  <div class="products-list">

    <div
        class="product"
        v-for="product in store.products"
        :key="product.id"
        @click="goToProductPage(product.id)"
    >


      <img :src="product.thumbnail" alt="">
      <h2>{{ '"' + product.name + '"' }}</h2>
      <p>Цена: ${{ product.price }}</p>


    </div>
  </div>

</template>

<script>

import ProductItem from '@/components/ProductItem.vue';
import {defineComponent} from "vue";
import {productsStore} from '@/stores/products';


export default defineComponent({
  name: 'CatalogView',
  components: {
    ProductItem
  },
  setup() {
    const store = productsStore();

    const handleAddToCart = (product) => {
      store.addToCart(product);
    };

    return {
      products: store.products,
      handleAddToCart
    };
  }
})

</script>

<script setup>
import {onMounted, computed} from "vue";
import {ref} from "vue";

import {productsStore} from "@/stores/products";
import {useRouter} from "vue-router";

const store = productsStore()
const router = useRouter()
const counter = ref(0);


const goToProductPage = (id) => {
  router.push({name: 'ProductView', params: {id}})
}


onMounted(async () => {
  await store.fetchProductsfromDB()

})

</script>
<style scoped>
.products-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

.product {
  flex-basis: 28%;
  margin: 8px;
  padding: 16px;
  box-shadow: 0px 0px 16px 1px;
  cursor: pointer;
}

.product img {
  width: 70%

}

.navigation-buttons {
  margin-bottom: 20px;
}

.btn {
  padding: 10px 15px;
  margin-right: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  color: black;
  border-radius: 3px;

}

.btn:hover {
  background-color: #778899;
  text-decoration: underline;
}

</style>


