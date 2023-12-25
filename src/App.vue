<template>
  <header>
    <div class="cart-items" @click="router.push({ name: 'CartView'})"></div>
    <p class="favorites-info">Добавлено в избранные: {{ store.cart.length }}</p>
  </header>
  <main>
    <RouterView/>
  </main>
</template>


<script setup>


import {useRouter} from "vue-router";
import {productsStore} from "@/stores/products";

const router = useRouter()
const store = productsStore()


</script>


<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;

}

.favorites-info {

  position: running(); /* Фиксированное позиционирование */
  top: 20px;
  right: 10px;
  padding: 5px 10px;
  background-color: #e0e0e0;
  border: 1px solid #f5f5f5;


}


</style>
