<template>
  <div class="d-flex justify-content-between p-3 border-bottom custom-shadow ">
    <div class="d-flex align-items-center ">
      <div class="me-4"> <img src="../assets/SovkomBank.svg" alt=""></div>
      <ul class="d-flex p-0 m-0">
        <li class="text-secondary-emphasis me-2 cursor-pointer">Каталог</li>
        <li class="text-secondary-emphasis me-2 cursor-pointer">Обучение</li>
        <li class="cursor-pointer">
          <router-link to="/teacher/courses" class="text-secondary-emphasis link-underline link-underline-opacity-0">
           Преподавание
          </router-link>
        </li>
      </ul>
    </div>
    <div class="d-flex">
      <input class="input-header form-control me-3" placeholder="Поиск" type="text">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#thanksforquestion">Вход</button>
    </div>
    <Login/>
  </div>
</template>

<style lang="scss">

  .input-header{
    max-width: 250px;
  }

</style>

<script>
import Login from'../components/Login.vue'
export default {
  components:{
    Login
  },

}
</script>