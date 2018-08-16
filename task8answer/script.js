const app = new Vue({
  el: '#app',
  data: {
    input: '',
    todos: [],
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      fetch('http://127.0.0.1:9000/api/list')
        .then(data => data.json())
        .then(data => this.todos = data)
    },
    add() {
      fetch(`http://127.0.0.1:9000/api/add?content=${this.input}`, {method: 'POST'})
        .then(() => this.getData())
    },
    remove(id) {
      fetch(`http://127.0.0.1:9000/api/item/${id}`, {method: 'DELETE'})
        .then(() => this.getData())
    },
    complete(id) {
      fetch(`http://127.0.0.1:9000/api/item/${id}/marktocomplete`, {method: 'PUT'})
        .then(() => this.getData())
    }
  }
})
