<template>
  <div class="">
    <h1 class="mb-5">Домашние работы</h1>
    <ul v-for="(homework,index) in homeworks" :key="index" class="homework-list d-flex justify-content-around p-3 custom-shadow-1 mb-3">
      <li class="d-flex flex-column">
        <div class="mb-2">Тема</div>
        <div class="">{{homework.title}}</div>
      </li>
      <li class="d-flex flex-column">
        <div class="mb-2">Студент</div>
        <div class="">{{homework.student}}</div>
      </li>
      <li class="d-flex flex-column">
        <div class="mb-2">Дата</div>
        <div class="">{{homework.date}}</div>
      </li>
      <li class="d-flex flex-column">
        <div class="mb-2">Файл</div>
        <div class="">{{homework.file}}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .homework-list{
    border-radius: 4px;
    transition: 0.3s ease;
    cursor: pointer;
  }
  .homework-list:hover{
    background-color: #00389120 !important;
  }
</style>

<script>
import axios from 'axios'

export default {
  mounted(){
    const body = JSON.stringify({ 
      username: 'portal', 
      password: 'P@ssw0rd' 
    }); 
     axios.post(`http://10.10.30.30:8081/login/api`, body, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(function (error) { 
        console.log(error);
      });
  },
  setup(){
    return{
      homeworks:[
      {
        title:'Лабораторная1',
        student:'Гришно Артем',
        date:'12.12.2000',
        file:'',
      },
      {
        title:'Лабораторная1',
        student:'Войченко Игорь',
        date:'12.12.2000',
        file:'',
      },
      {
        title:'Лабораторная1',
        student:'Стровойт Вячеслав',
        date:'12.12.2000',
        file:'',
      }
    ]
    }
  }
}
</script>