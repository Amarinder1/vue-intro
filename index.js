var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue World'
  }
})

//When you hover over this message, will show date and time it was loaded on the webpage
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

//when you click the reverse button, will reverse the message
var app3 = new Vue({
  el: '#app-3',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

//using text boxes in this examples
//text box already has a default value
//but user can change the value
//and the webpage will update automatically to the new value

var app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'Hello Vue!'
  }
})

// sets a show property to true
//this will set the string to visible
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
