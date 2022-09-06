import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import ParksList from './components/ParksList.js';
import fifty from './data/states.json';
import activities from './data/activities.json';
import './parks.css';


class Parks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkState: '',
      parkActivity: '',
      // showError: false,
      parks: []
    }
  }

  handleState = (e) => {
    e.preventDefault();
    this.setState({
      parkState: e.target.value
    })
  };
  

  handleActivity = (e) => {
    e.preventDefault();
    this.setState({
      parkActivity: e.target.value
    })
  };
    
  getParkData = async (e) => {
    e.preventDefault();
    // let selectState = e.target.value;
    // this.setState({parkState: selectState});
         
    try {
          let parksUrl = `${process.env.REACT_APP_SERVER}/parks?state=${this.state.parkState}&activities=${this.state.parkActivity}`
          let parksResponse = await axios.get(parksUrl);
          
          this.setState({
            parks: parksResponse.data
            // parkState: selectState
          });
        
    } catch (err) {
        console.log(err);
      }
  }

 

  render() {
    
    console.log(this.state);
    // let objArray = [{value: 'al', state: 'Alabama'}, {value: 'az', state: 'Arizona'}, {value: 'ca', state: 'California'}];
    let mapFifty =  fifty.map((item, idx) =>
    <option value={item.value} key={idx}>{item.state}</option>
    );

    let mapActivities =  activities.map((item, idx) =>
    <option value={item.value} key={idx}>{item.activity}</option>
    );

    return (
      <>
        <h2>PARKPAL</h2>

        <h3>Choose a park to learn more!</h3>

        {/* <Form>
         <Form.Control as='select' onChange={this.getParkData}>
          <option>Choose a state to learn more</option>
          {mapFifty}
         </Form.Control>
        </Form> */}

        <Form onSubmit={this.getParkData}>
         <Form.Control as='select' onChange={this.handleState}>
          <option>Choose a state to learn more</option>
          {mapFifty}
         </Form.Control>
         <Form.Control as='select' onChange={this.handleActivity}>
          <option>Choose an activity to learn more</option>
          {mapActivities}
         </Form.Control>
         <Button id="homeButton" variant="primary" type="submit">Submit!</Button>
        </Form>

        

                      
      <div>
        <ParksList parksArray={this.state.parks} />
      </div>


      </>
    )
  }
}

export default Parks;
