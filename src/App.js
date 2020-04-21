import React, { Component } from 'react'
import CountryPicker from './components/CountryPicker/CountryPicker';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import styles from "./App.module.css"
import {fetchData} from "./api";

import coronaImage from './images/covid19.png'

export default class App extends Component {

state = {
  data: {},
  country: ''
}


async componentDidMount() {
  const fetchedData = await fetchData();
  this.setState({
    data: fetchedData
  })
}

handleCountryChange = async (country) => {
  const fetchedData = await fetchData(country)
  
  this.setState({ data: fetchedData, country: country});
}



  render() {
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid-19"/>
      <Cards data = {data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data = {data} country={country}/>
    </div>
    )
  }
}
