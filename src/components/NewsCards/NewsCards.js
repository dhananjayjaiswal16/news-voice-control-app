import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'

import useStyles from './styles'

import NewsCard from '../NewsCard/NewsCard'

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Show me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'Business Insider, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from BBC News' },
];


const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();

    if (articles.length === 0) {
        return (

            <Grid className={classes.container1} spacing={3} container alignItems="stretch">
                {infoCards.map((infoCard) => (
                    <Grid item className={classes.infoCard} xs={12} sm={6} md={4} lg={3}>
                        <div className={classes.card} style={{ backgroundColor: infoCard.color }} >
                            <Typography variant='h5' component='h5'>{infoCard.title}</Typography>
                            {infoCard.info ?
                                (<Typography variant='h6' component='h6'>
                                    <strong>{infoCard.title.split(' ')[2]}</strong>
                                    <br />
                                    {infoCard.info}
                                </Typography>) : null
                            }
                            <Typography variant='h6'>Try Saying : <i>{infoCard.text}</i></Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        );
    }

    return (

        <Grow in >
            <Grid className={classes.container} spacing={3} container alignItems="stretch" >
                {articles.map((article, i) => (
                    <Grid item style={{ display: 'flex' }} xs={12} sm={6} md={4} lg={3}>
                        <NewsCard article={article} i={i} activeArticle={activeArticle} />
                    </Grid>
                ))}
            </Grid>
        </Grow>


    )
}

export default NewsCards;
