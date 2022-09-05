import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from 'react-bootstrap/ListGroup';

class ActivitiesList extends React.Component {

  render(){


    return (
            
      this.props.parksArray.length > 0 && 
        
        <div>
          <h2>Activities from your selection</h2>
          <ListGroup as="ul" numbered style={{ width: "30rem" }}> 
              {
                this.props.parksArray.map((park, idx) =>
                  <ListGroup.Item as="li" key={idx}>{park.parks}</ListGroup.Item>
                )
              }
          </ListGroup> 
        </div>

     );
    }
 }
     
 export default ActivitiesList;
   
