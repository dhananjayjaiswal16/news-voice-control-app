import React from 'react'
import useStyles from './styles'
import reactLogo from '../../react-logo.svg'
const Footer = ({ newsArticles }) => {
    const classes = useStyles();
    return (
        <>
            {!newsArticles.length ? (
                <div className={classes.footer}>
                    <h4>
                        Ⓒ Created using <img src={reactLogo} alt="react-svg" height='30px' style={{ position: 'relative', top: '9px' }} /> by
                  <a className={classes.link} href="https://github.com/dhananjayjaiswal16"> DJ</a>
                    </h4>
                </div>
            ) : null}
        </>
    )
}

export default Footer;
