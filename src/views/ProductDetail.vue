<template>

  <button class="btn" @click="router.push({name: 'Catalog'})">Вернуться на главную</button>
  <div class="product">
    <div class="product-header">
      <span class="product-name">{{ '"' + selectedProduct.name + '"' + "  " }}</span>
      <button class="btn-heart" @click="addToCart">&#10084;</button>
    </div>

    <div class="product-image">
      <img :src="selectedProduct.img_path" alt="">
    </div>
    <div class="product-details">


      <p>{{ selectedProduct.description }}</p>
      <h2>Цена: ${{ selectedProduct.price }}</h2>


    </div>
  </div>

</template>

<script>


import {defineComponent} from "vue";

export default defineComponent({
  name: 'ProductDetails'
})

</script>
<script setup>
import {computed} from "vue";
import {productsStore} from "@/stores/products";
import {useRoute, useRouter} from "vue-router";

const store = productsStore()
const router = useRouter()
const route = useRoute()

const selectedProduct = computed(() => {
  let obj = store.products.find((item) => item.id === Number(route.params.id))
  obj.img_path = "../" + obj.thumbnail
  return obj
})

// const img_path = computed(() => {
//   return "../" + selectedProduct.thumbnail
// })

const addToCart = () => {
  store.addToCart(selectedProduct.value)
  router.push({name: 'CartView'})

}


</script>
<style scoped>

.product {
  text-align: center;
  max-width: 300px; /* Максимальная ширина контейнера */
  margin: 0 auto; /* Центрирование контейнера */
  justify-content: center;


}

.product-image img {
  max-width: 100%; /* Изображение будет занимать всю ширину контейнера */
  border: 3px solid #a68b81; /* Пастельно-коричневая рамка */
  margin-top: 20px; /* Отступ сверху */
  margin-bottom: 20px; /* Отступ снизу */
}

.btn-heart {
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 1.5rem;

}


.product-image {
  margin-right: 24px;
  margin-left: 24px;
}


.btn-1 {
  display: flex;
  margin-left: 0px;
  text-align: center;


}

.btn {
  display: flex;
  margin-left: 780px;


}

</style>