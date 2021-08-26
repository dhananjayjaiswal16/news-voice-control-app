import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classnames from 'classnames';

import NewsImg from './news_img.jpeg'

import useStyles from './styles'

const NewsCard = ({ article: { description, url, urlToImage, source, title, publishedAt }, i, activeArticle }) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    var scrollToRef = ref => (
        window.scroll(0, ref.current.offsetTop - 50)
    );

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if (i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);

    var date = (new Date(publishedAt)).toDateString();
    return (
        <Card className={classnames(classes.card, activeArticle === i ? classes.activeCard : null)} ref={elRefs[i]} >
            <CardActionArea target='_blank' href={url}>
                <CardMedia className={classes.media} image={urlToImage || NewsImg} />
                <div className={classes.details}>
                    <Typography component='h2' variant='body2' color='textSecondary'>{date}</Typography>
                    <Typography component='h2' variant='body2' color='textSecondary'>{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography component='p' variant='body2' color='textSecondary'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions} >
                <Button color='primary' size='small'>Learn More</Button>
                <Typography variant='h5' color='textSecondary' >{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
