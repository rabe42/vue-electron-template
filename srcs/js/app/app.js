var app = new Vue(
        {
          el: '#app',
          data: {
            message: 'Hello Vue!',
          },
          methods: {
            sayHello: () => {
              alert("Submitting " + app.message)
            }
          }
        }
      )
