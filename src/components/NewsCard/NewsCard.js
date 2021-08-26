import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classnames from 'classnames';

import NewsImg from './news_img.jpeg'

import useStyles from './styles'
import classNames from 'classnames';

const NewsCard = ({ article: { description, url, urlToImage, source, title, publishedAt }, i, activeArticle }) => {
    const classes = useStyles();

    var date = (new Date(publishedAt)).toDateString();
    return (
        <Card className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)} >
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
