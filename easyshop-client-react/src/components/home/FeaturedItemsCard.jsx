import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
  } from "mdb-react-ui-kit";
import { Button } from '@mui/material';
import { useAuth } from '../context/AuthContext'
   
const FeaturedItemsCard = ( props ) => {
  const { currentUser, saveUser, isLoggedIn } = useAuth();

  const cardSyle = { 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin: '0 auto',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  // product categorys
  const categorys = {
    1: "Electronic's",
    2: "Fashion",
    3: "Home & Kitchen"
  }

  let imageUrl = "";
    try {
      imageUrl = require(`../../images/products/${props.imageUrl}`);
    } catch (error) {
      imageUrl = require(`../../images/products/no-image.jpg`); // Fallback to default image if the specific image is not found
    }

  return (
          <MDBCard style={cardSyle}>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Featured Item</p>
            </div>
            <MDBCardImage
              src={imageUrl}
              position="top"
              style={{width: '250px', height: '200px', borderRadius: '5px'}}
            />
            <MDBCardBody style={{width: '100%'}} >
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    {categorys[props.categoryId]}
                  </a>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{props.productName}</h5>
                <h5 className="text-dark mb-0">${props.price}</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">{props.quantity}</span>
                </p>
                <div class="ms-auto text-warning">
                  <Button variant="contained"  disabled={!isLoggedIn()} >Add to cart</Button>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>

  )
}

export default FeaturedItemsCard
