<template>
  <div class="d-flex teacher">
    <div class="teacher-meny bg1 p-5 d-flex flex-column justify-content-start align-items-start">
      <button class="btn btn1 border d-flex mb-3">
        <p class="m-0 me-3">+</p>
        <p class="m-0 text-nowrap">Новый курс</p>
      </button>
      <router-link to="/teacher/courses" class="mb-3 text-secondary-emphasis text-nowrap link-underline link-underline-opacity-0">
        Курсы
      </router-link>
      <div class="mb-3 cursor-pointer text-nowrap">Уроки</div>
      <router-link to="/teacher/homework" class="text-secondary-emphasis text-nowrap link-underline link-underline-opacity-0">
        Домашние задания
      </router-link>
    </div>
    <div class="teacher-corses p-5 w-100">
      <router-view/>
    </div>
  </div>  
</template>

<style lang="scss">
.teacher-meny{
  min-height: calc(100vh - 71px);
  max-width: 300px;
}
.teacher-corses{
  max-width: 1200px;
}

</style>



