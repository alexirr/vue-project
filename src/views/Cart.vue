<template>
  <LayoutHeader/>

  <div v-if="!store.cart.length" style=" text-align: center">
    <h1>Пусто в избранных :( </h1>
  </div>
  <div class="cart-items" v-else>
    <div
        class="cart-item"
        v-for="item in store.cart"
        :key="item.id"
    >
      <div class="item-details">
        <img :src="item.thumbnail" alt="">
        <span> Название: {{ item.name }}</span>
        <span> Цена: ${{ item.price }}</span>
        <button @click="removeFromCart(item.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/layout-header/LayoutHeader.vue'; // Убедитесь, что путь к компоненту верный
import {defineComponent} from "vue";

export default defineComponent({
  name: 'CartView',
  components: {
    LayoutHeader
  }
})
</script>

<script setup>
import {productsStore} from "@/stores/products";
import {useRouter} from "vue-router";

const router = useRouter()
const store = productsStore()
const removeFromCart = (id) => {
  store.removeFromCart(id)
}
</script>

<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}

.item-details img {
  width: 20%;
}

</style>
