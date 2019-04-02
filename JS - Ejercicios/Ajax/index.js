console.log('hola hola');

const gatitos = $.ajax('https://api.github.com/users/pameelafernandez').done(function(data) {
   console.log('Git hub', data.name)
   $('#photo').append('<img src="' + data.avatar_url + '"/>' )
   $('#blog').append(data.blog)
   $('#name').append(data.name)
   $('#reposs').append(data.public_repos)
  }) //si no le decimos que verbo tiene q ser, por defecto toma get

  const repos = $.ajax('https://api.github.com/users/pameelafernandez/repos').done(function(data){
      for(let i = 0; data.length; i++){
          $('#repos').append(`<div>${data[i].name} ${data[i].owner.login}<div>`)
      }
  })


console.log('Pame')