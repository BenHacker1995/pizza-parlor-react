import React, { Component } from 'react';
import axios from 'axios';
import Customer from '../Customer/Customer';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import {connect} from 'react-redux';

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

class Select extends Component {
    constructor(props) {
        super(props);
        this.state ={
            pizzaList: [],  


        }

    }

    displayPizza = ()=> {
        console.log('in displayPizza()');
        axios.get = ('/api/pizza').then((response) => {

            this.setState({pizzaList: [...response.data]})
            // this.refreshPage();
        
        }).catch((error) => {
          console.log('error in displayPizza GET ', error);

        });

    }



    deletePizza = () => {
        console.log('in deletePizza');
    }

    displayTotalCost = () => {
        console.log('in displayTotalCost');
    }




    render(){
    return(

    <div>
     <ul>
         {this.state.pizzaList.map((list ,i ) => {

            return {list}
         })
        }
     </ul>
     <Router>
        <div>
          <Route exact path= '/customer' component={Customer} />
            <Link to='/customer'> Customer Page </Link>
        </div>
    </Router>
    </div>
    

        )
    }

};


export default connect(mapReduxStoreToProps)(Select);
