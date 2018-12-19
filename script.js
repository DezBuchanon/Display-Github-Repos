'use strict';


function getUserRepo(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => console.log(error));
}

function displayResults(responseJson) {

  $( ".results" ).empty();

  for(let i = 0; i < responseJson.length; i++) {

    $('.results').append(`<h2>${responseJson[i].name}</h2>`);

    $('.results').append(`<a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>`);
   
    }

  }


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const username = $('#userInput').val() ;
    getUserRepo(username);
    console.log(username);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});