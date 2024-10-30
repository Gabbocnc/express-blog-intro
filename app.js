/* 
Esercizio:

-Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.

-Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!

-Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

-Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.

-La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )

-Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

-Testare nel browser.
*/

/* 
Bonus
-Spostiamo l’array dei post in un file separato da importare poi dentro il controller

-Creare una nuova rotta con cui stampare la lista in html come ul

-Create una pagina statica html da cui far partire una chiamata ajax per consumare il vostro enpoint json.
*/

const express = require('express')
const app = express()
const host = 'http://127.0.0.1'
const port = 3000
const postsController = require('./controllers/postsController.js')
const { posts } = require('./data/posts')

/* -Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post. */
app.use(express.static('public'))

//-Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>')
})


//-Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
/* const posts = [
    {
      titolo: "Viaggio a Roma",
      contenuto: "Esperienze e consigli su come visitare Roma in tre giorni.",
      immagine: "roma.jpg",
      tags: ["viaggi", "Roma", "Italia", "turismo"]
    },
    {
      titolo: "Introduzione al JavaScript",
      contenuto: "Concetti base del linguaggio JavaScript per principianti.",
      immagine: "js.webp",
      tags: ["programmazione", "JavaScript", "tutorial", "coding"]
    },
    {
      titolo: "10 Ricette Facili per Cucinare a Casa",
      contenuto: "Idee veloci e gustose per preparare piatti a casa.",
      immagine: "ricette.avif",
      tags: ["cucina", "ricette", "fai da te", "cibo"]
    },
    {
      titolo: "Guida alla Fotografia per Principianti",
      contenuto: "Suggerimenti e tecniche per migliorare le tue foto.",
      immagine: "fotografia.jpg",
      tags: ["fotografia", "tutorial", "arte", "hobby"]
    },
    {
      titolo: "Come Organizzare il Tuo Tempo",
      contenuto: "Metodi e consigli per una gestione del tempo più efficiente.",
      immagine: "tempo.webp",
      tags: ["produttività", "organizzazione", "lifestyle", "consigli"]
    }
  ]; */

//-Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
/*   app.get('/posts',(req,res)=>{
    res.json({
        count : posts.length,
        posts: posts
    })
  })
 */

//La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
app.get('/posts', postsController.index)


/*   -Creare una nuova rotta con cui stampare la lista in html come ul */
app.get('/posts-html', (req, res) => {
    const markup = ` 
                <h1>Lista dei Post</h1>
                <ul>
                    ${posts.map(post => `
                    
                            <div><strong>${post.titolo}</strong><br></div>
                            <div>${post.contenuto}</div><br>
                            <img src="${post.immagine}" alt="${post.titolo}" style="width:400px;"><br>
                            <div>Tags: ${post.tags}<br></div>
                        
                    `)}
                </ul>
        `
    res.send(markup)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${host}:${port}`)
})

