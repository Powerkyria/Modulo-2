'use strict';

const list = document.querySelector('ul')
const btn = document.querySelector('button');

function getListRepos() {
    const data = document.querySelector('input').value;
    fetch(`https://api.github.com/orgs/${data}`)
    .then(response => response.json())
    .then(data => {
        const reposUrl = data.repos_url;
         return fetch(reposUrl);
      })

.then(repositoryResponse => repositoryResponse.json())
.then (repoData => {
    
    let listContent = '';

    for (const repo of repoData) {
        const repoName = `<li>${repo.name}</li>`; 

        listContent += repoName;
    }

    list.innerHTML = listContent;
    
})
}
btn.addEventListener('click', getListRepos);
