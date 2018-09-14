Vue.component('to-do', {
  props: ['item','id'],
  template: `<li class="collection-item" v-bind:class="{grey: item.done, 'lighten-3': item.done}">
    <label class="primary-content">
      <input type="checkbox" v-model="item.done">
      <span></span>
    </label>
    <div>
      <label class="notDone" v-bind:class="{done : item.done}">{{ item.description }}</label>
      <a class="secondary-content" href="#" v-on:click="removeThis()">
        <i class="material-icons">remove_circle</i>
      </a>
    </div>
  </li>`,
  methods: {
    removeThis: function(){
      toDoApp.remove(this.id)
    }
  }
})

var toDoApp = new Vue({
  el: '#toDoApp',
  data: {
    title: 'My ToDo´s',
    toDos: [
      {description: "Follow @MiniCoding", done: false},
      {description: "RT this", done: false},
      {description: "Check our codes on GitHub", done: false}
    ],
    newToDo: ''
  },
  methods: {
    add: function(){
      if(this.newToDo){
        this.toDos.push({description: this.newToDo, done: false})
        this.newToDo = ''
      }
    },
    remove: function(element){
      this.toDos.splice(element,1)
    }
  }
})
