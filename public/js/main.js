

const postEl = document.querySelector('.postEl')
const titoloEl = document.querySelector('.titolo')
const contenutoEl = document.querySelector('.contenuto')
const immagineEl = document.querySelector('.immagine')
const tagsEl = document.querySelector('.tags')

axios.get('http://127.0.0.1:3000/posts')
    .then(response => {
        const posts = response.data.posts.posts
        console.log(posts);
        
        let myPost = ''

        posts.forEach(post => {
            const markup = `
             <ul class="postEl">
                <div class="titolo"><strong>${post.titolo}</strong><br></div>
                <div class="contenuto">${post.contenuto}</div><br>
                <div class="immagine"><img src="${post.immagine}" alt="" style="width:400px;"><br></div>
                <div class="tags">${post.tags}</div><br>
            </ul>
        `
        myPost += markup
        })
        postEl.innerHTML = myPost
    })
