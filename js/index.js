// let search = document.querySelector('#search')

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('github-form').addEventListener('submit', (e) => {
        e.preventDefault()
        let search = document.querySelector('#search')
        fetch(`https://api.github.com/search/users?q=${search.value}`, {
            headers: {
                'Content-Type': "application/json",
                Accept: 'application/vnd.github.v3+json'
            }
        })
        .then(res => res.json())
        .then(object => {
            object.items.forEach(name => appendGitHubProfile(name))
        }
    )})
})

function appendGitHubProfile(name) {
    console.log(name)
    console.log("Test")
   let githubContainer = document.querySelector('#github-container')

let githubUser = `
<div>
    <h1>${name.login}</h1>
    <img src = ${name.avatar_url}</img> 
    <a href=${name.html_url}>Github Profile</a>
    <p> ${name.score} </p>
</div>`

   githubContainer.innerHTML += githubUser
}