import homeStyles from '../styles/Home.module.css';
import propertyCardStyles from '../styles/PropertyCard.module.css';

import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


function PropertyCard({ property }) {

    const showModal = () => {
        const { Modal } = require("bootstrap");
        const myModal = new Modal("#propDetails"+property._id);
        myModal.show();
      };

    const deleteProperty = () => {
    var url= process.env.BASE_URL || "http://localhost:8080/"
    axios.delete(url+'property/'+property._id).then(response => {
              console.log('--------------Response (deleteProperty)-------------\n',response.data);
              location.reload();

    }).catch(error => console.log(error));
    };

return (

    <div className={homeStyles.grid}>
 
        <div className={propertyCardStyles.card} >
            <img className="card-img-top" src={property.images} alt="Property Img"/>
            <div className="card-body">
                <br></br>
                <h3 className="card-title">{property.title}</h3>
                <h3> {property.price} EGP</h3>
                <hr></hr>

                <p style={{"textAlign":"center"}}><b>Project:</b> {property.project}  -  <b>Developer:</b> {property.developer}</p><br></br>

                <div style={{"textAlign":"center"}}>
					<i className="fa fa-home" aria-hidden="true"></i> {property.size} m<sup>2</sup> &nbsp; &nbsp; &nbsp; &nbsp;
                    <i className="fa fa-bed" aria-hidden="true"></i> {property.bedrooms}            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <i className="fa fa-bath" aria-hidden="true"></i> {property.bathrooms}          &nbsp; 
                </div>

                <br></br>
                {/* <a href={"/property/"+property._id+'/'} className="btn btn-primary">Details</a> */}
                <button type="button" className="btn btn-primary" onClick={() => {deleteProperty()}} >Delete</button>
                <button type="button" className="btn btn-btn-link m-2" onClick={showModal}>Details</button>

            </div>
        </div>

            <div className="modal fade p-5" id={'propDetails'+property._id} tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5>{property.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <img className="card-img-top" src={property.images} alt="Property Img"/>
                            <br></br><br></br>
                            <div style={{"textAlign":"center"}}>
                                <i className="fa fa-home" aria-hidden="true"></i> {property.size} m<sup>2</sup> &nbsp; &nbsp; &nbsp; &nbsp;
                                <i className="fa fa-bed" aria-hidden="true"></i> {property.bedrooms}            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <i className="fa fa-bath" aria-hidden="true"></i> {property.bathrooms}          &nbsp; 
                            </div>
                            <br></br>
                            <p><b>Project:</b> {property.project}  -  <b>Developer:</b> {property.developer}</p>
                            <p><b>Owner:</b> {property.owner.name}  -  <b>Number:</b> {property.owner.phone_number}</p>
                            <p><b>Property Type:</b> {property.type}</p>
                            <p><b>Delivery Date:</b> {property.delivery_date.substring(0,10)}</p>
                            <p><b>Details:</b> {property.details}</p>
                        </div>
                    </div>
                </div>
            </div>

    </div>

)
}


export default PropertyCard;