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
    )}
    )
})

function appendGitHubProfile(name) {
   let githubUser = document.createElement('li')
   let userList = document.getElementById('user-list')
   let h1 = document.createElement('h1')
   let img = document.createElement('img')
   let a = document.createElement('a')

   h1.innerText = name.login
   a.href = name.html_url
   a.innerText = 'Github Profile'
   img.src = name.avatar_url
    let br = document.createElement('br')
    githubUser.append(h1, br, a, br, img,) 
    userList.appendChild(githubUser)
    h1.addEventListener('click', () => {
        fetch(`https://api.github.com/users/${name.login}/repos`, {
            headers: {
                'Content-Type': "application/json",
                Accept: 'application/vnd.github.v3+json'
            }
        })
        .then(res => res.json())
        .then(e => {
            console.log(e)
        })
    })
}