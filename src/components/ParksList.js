import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from 'react-bootstrap/ListGroup';

class ParksList extends React.Component {

  render(){


    return (

      // {this.state.books.length ? (
      //   <p>Book Carousel coming soon</p>
      // ) : (
      //   <h3>No Books Found :(</h3>
      // )}
               
      this.props.parksArray.length > 0 && 
        
      <div>
        <h2>Parks from your selection</h2>
        <ListGroup as="ul" numbered style={{ width: "30rem" }}> 
            {
              this.props.parksArray.map((park, idx) =>
                <ListGroup.Item as="li" key={idx} >{park.parks}</ListGroup.Item>
              )
            }
        </ListGroup> 
      </div>

      // {this.props.parksArray.length  ? (
        
      //   <div>
      //     <h2>Parks from your selection</h2>
      //     <ListGroup as="ul" numbered style={{ width: "30rem" }}> 
      //         {
      //           this.props.parksArray.map((park, idx) =>
      //             <ListGroup.Item as="li" key={idx}>{park.parks}</ListGroup.Item>
      //           )
      //         }
      //     </ListGroup> 
      //   </div>
      // ) : (
      // <h3>No match found - please try another selection</h3>
      // )}


     );
    }
 }
     
 export default ParksList;
   
