const postEl = document.querySelector('.postEl')


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
                <a class="guida" href="${post.link}" target="_blank">Guida ${post.titolo}</a>
                <div class="immagine"><img src="${post.immagine}" alt="" style="width:400px;"><br></div>
                <div class="tags"><strong>${post.tags.join('')}</strong></div><br>
            </ul>
        `
        myPost += markup
        })
        postEl.innerHTML = myPost
    })
