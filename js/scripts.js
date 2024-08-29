const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!'
      
    }
  }
}).mount('#app')



createApp({
    data() {
      return {
        url:'https://unsplash.it/600/300?image=171'
      }
    }
  }).mount('#img')