$.getJSON("https://reqres.in/api/users?page=2", function(data) {
  var app = new Vue({
    el: '#usuarios',
    data: {
      users: data.data 
    }
  });
});

