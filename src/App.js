import React, { useState, useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import { Paper } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import NewsCards from './components/NewsCards/NewsCards';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import wordsToNumbers from 'words-to-numbers';
import './App.css';
const APIkey = '6917ed5aebd1b49dc91f310fad260be92e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1); //article index

  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    },
  });

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
    <ThemeProvider theme={theme}>
      <Paper>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer newsArticles={newsArticles} />
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />


      </Paper>
    </ThemeProvider>
  );
}

export default App;
