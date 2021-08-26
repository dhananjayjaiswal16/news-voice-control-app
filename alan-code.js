var savedArticles = [];


//Latest News 

intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) (news|headlines) `, (p) => {

    //let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

    let NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8a9823850b0646289d5015cd7bebb111'

    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        console.log("JSON = " + JSON.parse(body));
        if (!articles.length) {
            p.play('Please try searching for a different term');
            return;
        }

        savedArticles = articles;

        p.play({ commandData: 'newHeadlines', articles });
        p.play(`Here are (latest|recent) news `);

        p.play('Would you like me to read the headlines for you?');
        p.then(confirmation);
    })
})

//News by Source
intent('(Give me | Show me | Get me | Tell me) the news from $(source* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

    if (p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(' ').join('-')}`
    }


    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);

        if (!articles.length) {
            p.play('Please try searching for news from a different source');
            return;
        }

        savedArticles = articles;

        p.play({ commandData: 'newHeadlines', articles });
        p.play(`Here are (latest|recent|breaking) news from ${p.source.value}.`);

        p.play('Would you like me to read the headlines for you?');
        p.then(confirmation);
    })
})

//News by Term
intent('What\'s up with $(term* (.*))', 'What\'s happening in the $(term* (.*)) world', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;

    if (p.term.value) {
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`
    }


    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);

        if (!articles.length) {
            p.play('Please try searching for a different term');
            return;
        }

        savedArticles = articles;

        p.play({ commandData: 'newHeadlines', articles });
        p.play(`Here are (latest|recent) news on ${p.term.value}.`);

        p.play('Would you like me to read the headlines for you?');
        p.then(confirmation);
    })
})


//News by Categories
const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}|`;

intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) (news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`, (p) => {

    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

    if (p.C.value) {
        NEWS_API_URL = `${NEWS_API_URL}&category=${p.C.value}`
    }


    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);

        if (!articles.length) {
            p.play('Please try searching for a different term');
            return;
        }

        savedArticles = articles;

        p.play({ commandData: 'newHeadlines', articles });
        p.play(`Here are (latest|recent) news on ${p.C.value}.`);

        p.play('Would you like me to read the headlines for you?');
        p.then(confirmation);
    })
})


const confirmation = context(() => {
    intent('yes', async (p) => {
        for (var i = 0; i < savedArticles.length; i++) {
            p.play({ commandData: 'currentArticle', articles: savedArticles[i] })
            p.play(`${savedArticles[i].title}`)
        }
    })

    intent('no', p => {
        p.play('Okay')
    })
})