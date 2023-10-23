<template>
  <div class="modules">
    <h2>Программа курса</h2>
    <draggable v-model="new_modules" :animation="300" tag="ul">
      <template #item="{ element: item, index: item_index }">
        <div class="mb-5">
          <li class="d-flex border rounded w-100  p-4 shadow-sm cursor-move">
            <div class="pt-2 me-3">{{item_index+1}}</div>
            <div class="d-flex flex-column">
              <input class="form-control mb-3" :value="item.title" type="text" name="" id="">
              <input class="form-control mb-3" :value="item.description" type="text" name="" id="">
              <div class="d-flex align-items-center p-0 w-100 mb-3 mb-sm-0 fw-normal fs-7">
                <VueDatePicker 
                  v-model="item.date" 
                  :range="false"
                  hide-input-icon
                  :enable-time-picker="false"
                  locale ="ru"
                  class="fs-7 px-0"
                  placeholder="Дата начала"
                  :format="dateFormat"
                />
              </div>
              <!-- <input class="form-control mb-3" :value="item.date" type="text" name="" id=""> -->
            </div>
          </li>
          <draggable v-model="item.lessons" :animation="300" tag="ul">
            <template #item="{ element: lesson, index: lesson_index }">
              <li class=" d-flex flex-column border rounded w-100 p-4 shadow-sm cursor-move" @click="log">
                <div class="d-flex">
                  <div class="pt-2 me-3">{{item_index+1}}.{{lesson_index+1}}</div>
                  <div class="d-flex flex-column">
                    <input class="form-control mb-3" :value="lesson.title" type="text" name="" id="">
                    <div class="text-start mb-3" >
                      {{lesson.teacher}}
                    </div>
                  </div>
                </div>
                <div v-if="lesson_index === item.lessons.length-1" class="">
                  <button @click="addLesson(item_index)" class="btn btn1 border">Добавить урок</button>
                </div>
              </li>
            </template>
          </draggable>
        </div>
      </template>
    </draggable>
    <button @click="addModule()" class="btn btn1 border">Добавить модуль</button>
  </div>
</template>

<style lang="scss" scoped>
.modules{
  max-width: 700px;
}
</style>

<script>
import draggable from 'vuedraggable';
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  props: {
    modules: Array,
  },
  components: {
    draggable,
    VueDatePicker
  },
  setup(props) {
    const new_modules = ref([]);
    console.log("In",props.modules); 
    props.modules.forEach((module=>{new_modules.value.push(module)}))

    return { new_modules };
  },
  methods:{
    addLesson(index){
      this.new_modules[index].lessons.push({title: '', teacher: '', is_saved: false})
    },
    addModule(){
      this.new_modules.push({
        title: 'Модуль'+(this.new_modules.length+1),
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
      })
    },
  }
};
</script>

