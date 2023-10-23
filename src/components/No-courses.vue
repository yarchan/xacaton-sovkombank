<template>
  <div class="no-courses d-flex flex-column justify-content-start align-items-start">
    <h2 class="h2">Курсы</h2>
    <h3 class="h5 mb-4">У вас пока нет курсов, создайте первый</h3>
    <label class="mb-2">Название курса</label>
    <label v-if="error_title" class="text-danger" for="title_course">{{error_title}}</label>
    <input @input="error_title=''" v-model="course_title" id="title_course" class="form-control mb-4" placeholder="Название курса" type="text">
    <div class="d-flex justify-content-center w-100">
      <button @click="createCourse" class="btn btn2">Создайте курс</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.no-courses{
  max-width: 500px;
}

</style>

<script>
import {ref} from 'vue'

export default {
  setup(){
    let course_title = ref('')
    const courses= {
        position: 1,
        title:course_title,
        modules: [{
          title: 'Модуль1',
          description:'',
          date:'',
          is_module:true,
          lessons:[
            {
              title:'',
              teacher:'',
              is_saved:false,              
            },
          ]
        },
        ]
      }
    return{
      error_title:ref(''),
      course_title,
      courses
    }
  },
  methods:{
    createCourse(){
      if(!this.course_title){
        this.error_title = 'Введите название курса'
        return
      }
      this.$emit("createcourse",this.courses)
    }
  }
}
</script>