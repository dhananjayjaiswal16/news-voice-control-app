import React, { useState, useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import { Typography } from '@material-ui/core'
import NewsCards from './components/NewsCards/NewsCards';
import alanLogo from './alanLogo.svg'
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
      onCommand: ({ commandData, articles }) => {
        if (commandData === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (commandData === 'currentArticle') {
          setActiveArticle((prevArticle) => prevArticle + 1);
        }
      }
    });
  }, []);


  return (
    <div>
      <Typography gutterBottom className={classes.topBar} variant='h4'>News App Powered by <a href="https://alan.app/"> <img className={alanLogo} src={alanLogo} alt="Alan Logo" /></a> </Typography>

      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
