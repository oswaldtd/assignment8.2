var $sidebar = $('.sidebar');
var $main = $('.main');
var $image = $('.image');
var $name = $('.name');
var $bio = $('.bio');
var $follower = $('.follower')
var url = 'https://api.github.com/users/oswaldtd';
var repos = 'https://api.github.com/users/oswaldtd/repos';

var access_token = "8ddcd9564f20471202880f46aa6ba0f0d7341aaa"
$.ajax({
   url: "https://api.github.com/users/oswaldtd",
   method: "GET",
   data: {
     access_token: access_token
   },
})

 var access_token = "8ddcd9564f20471202880f46aa6ba0f0d7341aaa"
 $.ajax(repos,{
    url: "repos",
    method: "GET",
    data: {
      access_token: access_token
    },
})


$.ajax(url, {
  error: function(xhr, type, error){
    $sidebar.text("ooops! " + error);
  },
  success: function(data, textStatus, xhr){
    var profile = data;
    var avatar = profile.avatar_url;

    //github image
    $img = $('<img>').attr('src', avatar);
    $image.append($img);


    // github name
    $h3 = $('<h3>').text(profile.name);
    $name.append($h3);

    $h2 = $('<h2>').text(profile.login);
    $name.append($h2);

    // Personal github information
    $h4 = $('<p>').text(profile.company);
    $bio.append($h4);

    $p = $('<p>' + profile.location + '</p>');
    $bio.append($p);

    $p = $('<p><a href="'+'">' + profile.email + '</a></p>');
    $bio.append($p);

    $p = $('<p><a href="'+'">' + profile.blog + '</a></p>');
    $bio.append($p);

    $p = $('<p>' + "Joined on " + moment().format("MMM Do YYYY") + '</p>');
    $bio.append($p);


    console.log(profile);


  }
});



$.ajax(repos, {
  error: function(xhr, type, error){
    $main.text("ooops! " + error);
  },
  success: function(repos, textStatus, xhr){
    $repos = $('.repos');
    repos.forEach(function(repo){
      $repos.append('<h1><a href="'+ repo.html_url+'">' + repo.name + '</a></h1>');
      $repos.append('<p>' + 'Updated ' + moment(repo.updated_at).fromNow() + '</p>');
      console.log(repo);
    });

  }
});
