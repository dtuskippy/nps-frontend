import React from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import ParksList from './components/ParksList.js';
import fifty from './data/states.json';
import activities from './data/states.json';



class Parks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkState: '',
      // showError: false,
      parks: []
    }
  }

  // handleChange = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     parkState: e.target.value
  //   })
  // };
    
  getParkData = async (e) => {
    e.preventDefault();
    let selectState = e.target.value;
    // this.setState({parkState: selectState});
         
    try {
          let parksUrl = `${process.env.REACT_APP_SERVER}/parks?state=${selectState}`
          let parksResponse = await axios.get(parksUrl);
          
          this.setState({
            parks: parksResponse.data,
            parkState: selectState
          });
        
    } catch (err) {
        console.log(err);
      }
  }

 

  render() {
    
    console.log(this.state);
    // let objArray = [{value: 'al', state: 'Alabama'}, {value: 'az', state: 'Arizona'}, {value: 'ca', state: 'California'}];
    let mapIt =  fifty.map((item, idx) =>
    <option value={item.value} key={idx}>{item.state}</option>
  );



    return (
      <>
        <h2>PARKPAL</h2>

        <h3>Choose a park to learn more!</h3>

        <Form>
         <Form.Control as='select' onChange={this.getParkData}>
          <option>Choose a state to learn more</option>
          {mapIt}
          {/* <option value='az'> Arizona </option>
          <option value='ar'> Arkansas </option>
          <option value='ca'> California </option>
          <option value='co'> Colorado </option>
          <option value='ct'> Connecticut </option>
          <option value='de'> Delaware </option>
          <option value='fl'> Florida </option>
          <option value='ga'> Georgia </option> */}
         </Form.Control>
      </Form>

      <Form>
         <Form.Control as='select' onChange={this.getParkData}>
          <option>Choose a state to learn more</option>
          {mapIt}
          {/* <option value='az'> Arizona </option>
          <option value='ar'> Arkansas </option>
          <option value='ca'> California </option>
          <option value='co'> Colorado </option>
          <option value='ct'> Connecticut </option>
          <option value='de'> Delaware </option>
          <option value='fl'> Florida </option>
          <option value='ga'> Georgia </option> */}
         </Form.Control>
      </Form>
     
            
      <div>
        <ParksList parksArray={this.state.parks} />
        {/* <ActivitiesList parksArray={this.state.parks} /> */}
      </div>


      </>
    )
  }
}

export default Parks;
