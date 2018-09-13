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
