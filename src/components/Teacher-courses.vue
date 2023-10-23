<template>
  <Nocourses v-on:createcourse="log($event)"  v-if="!new_course.length"/>
  <CourseModules v-if="new_course.length" :modules="new_course[0].modules"/>
</template>

<script>
import Nocourses from './No-courses.vue'
import CourseModules from './Course-modules.vue'
import {ref} from 'vue'

export default {
  components:{
    Nocourses,
    CourseModules
  },
  mounted(){
    sessionStorage.getItem('new_course')&&console.log(sessionStorage.getItem('new_course'));
  },
  methods:{
    log(e){
      this.new_course.push(e) 
      console.log("THIS",this.new_course[0].modules);
      sessionStorage.setItem('new_course', this.new_course[0].modules[0].title)
    }
  },
  setup() {
    return {
      new_course:ref([]),
      corses:ref([]),      
    }
  },
}
</script>