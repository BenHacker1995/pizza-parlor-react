import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxStoreToProps = (reduxStore) =>({
    reduxStore
})

class Select extends Component {
constructor(){
super();
this.state = {
    pizzaArray: []
    }
}
    
displayPizza = () => {
   
    axios.get('/api/pizza').then((response) => {
        console.log('response from  displayPizza', response);
        this.setState({pizzaArray: [...response.data]});
    }).catch((error) => {
        console.log('error in displayPizza', error);
    
    });
}





   
}
export default connect(mapReduxStoreToProps)(Select) ;