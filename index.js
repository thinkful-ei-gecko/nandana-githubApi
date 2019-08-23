'use strict';

function getGithubHandle(){
  
  fetch('https://api.github.com/users/nrrao/repos')
 .then (response =>response.json())
  .then(responseJson => updateRepoNames(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}

function updateRepoNames(responseJson){
  console.log(responseJson);
  for(let i=0;i<responseJson.length;i++){
    $('#results-list').append(`<li><span>${responseJson[i].name}</span>
    <span><a href="https://github.com/${responseJson[i].full_name}" style="color: blue">https://github.com/${responseJson[i].full_name}</span>
    </li>`);
  }
}
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();

    getGithubHandle();
  });
}

$(getGithubHandle);