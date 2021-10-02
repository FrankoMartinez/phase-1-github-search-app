document.addEventListener('DOMContentLoaded', () => {
document.getElementById('github-form').addEventListener('submit', (e) => {
        e.preventDefault()
        let search = document.querySelector('#search')
        fetch(`https://api.github.com/search/users?q=${search.value}`, {
            headers: {
                'Content-Type': "application/json",
                accept: 'application/vnd.github.v3+json'
            }
        })
        .then(res => res.json())
        .then(name => {
            console.log(name.items)
            search.value
            let appendValues = name.items[0].login
            document.querySelector('#github-container').append(appendValues)
        }
    )})
})