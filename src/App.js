import React, { useState, useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import { Typography } from '@material-ui/core'
import NewsCards from './components/NewsCards/NewsCards';
import alanLogo from './alanLogo.svg';
import wordsToNumbers from 'words-to-numbers';
import reactLogo from './react-logo.svg';
import './App.css';
import useStyles from './styles'
const APIkey = '6917ed5aebd1b49dc91f310fad260be92e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1); //article index

  useEffect(() => {
    alanBtn({
      key: APIkey,
      onCommand: ({ commandData, articles, number }) => {
        if (commandData === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (commandData === 'currentArticle') {
          setActiveArticle((prevArticle) => prevArticle + 1);
        } else if (commandData === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      }
    });
  }, []);


  return (
    <div>
      <Typography gutterBottom className={classes.topBar} variant='h4'><a href="https://alan.app/"><img src={alanLogo} alt="Alan Logo" style={{ position: 'relative', top: '20px' }} height='60px' /></a> powered news app</Typography>

      <NewsCards articles={newsArticles} activeArticle={activeArticle} />

      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Ⓒ Created using <img src={reactLogo} alt="react-svg" height='30px' style={{ position: 'relative', top: '9px' }} /> by
            <a className={classes.link} href="https://github.com/dhananjayjaiswal16"> DJ</a>
          </Typography>
          <img src={alanLogo} height="50px" alt="JSMastery logo" />
        </div>
      ) : null}
    </div>
  );
}

export default App;
