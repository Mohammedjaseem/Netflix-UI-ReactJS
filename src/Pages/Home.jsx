import { Container } from 'postcss';
import React from 'react'
import Main from '../components/Main'
import Footer from '../components/Footer';
import Row from '../components/Row'
import requests from "../Request";

const Home = () => {
  return (
    <>
    <Main />

    <Row rowID='1' title='Up Coming' fetchUrl={requests.requestUpcoming} />
    <Row rowID='3' title='Trending'  fetchUrl={requests.requestTrending} />
    <Row rowID='4' title='Horror' fetchUrl={requests.requestHorror} />
    <Row rowID='5' title='Romance' fetchUrl={requests.requestRomance} />
    <Row rowID='6' title='Mystery' fetchUrl={requests.requestMystery} />
    <Row rowID='7' title='SciFi' fetchUrl={requests.requestSciFi} />
    <Row rowID='2' title='Popular'   fetchUrl={requests.requestPopular} />
    <Row rowID='8' title='Western' fetchUrl={requests.requestWestern} />
    <Row rowID='9' title='Animation' fetchUrl={requests.requestAnimation} />
    <Row rowID='10' title='TV' fetchUrl={requests.requestTV} />

    </>

  )
}

export default Home


