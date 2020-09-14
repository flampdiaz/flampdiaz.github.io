import React from "react";
import Helmet from "react-helmet";

//import photo from './../asset/img/photo.jpg'
//this photo variable is just for testing purpose git a
const photo = 'https://flamperdm.github.io/FlamperDM.github.io/static/media/photo.8d3206ef.jpg'
const url = 'https://flamperdm.github.io/'
const description = "Take a look to my portfolio and get to know me"
const title = "Welcome to my portfolio"

export default () => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="image" content={photo}/>
      <meta name="description" content={description}/>
      <meta name="url" content={url}/>

      <meta property="og:image" content={photo}/>
      <meta property="og:description" content={description}/>
      <meta property="og:url" content={url}/>
      <meta property="og:title" content={title}/>

      <meta name="twitter:image" content={photo}/>
    </Helmet>
  )
}