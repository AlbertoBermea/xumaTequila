$('#register_button').on('click',function(){
    console.log("simon")
    user = $('#email').val()
    name = $('#username').val()
	  password = $('#password').val()
	
	json_to_send = {
		"email": user,
    "password": password,
    "name": name
	}
    console.log(json_to_send)

    json_to_send = JSON.stringify(json_to_send);

    $.ajax({
      url: 'https://apixuma.herokuapp.com/users',
      headers: {
          'Content-Type':'application/json'
      },
      method: 'POST',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        console.log('success: '+ data);
        //localStorage.setItem('user', data.user._id);
        window.location = '/login'
      },
      error: function(error_msg) {
        alert((error_msg['responseText']));
      }
    });
    
})
