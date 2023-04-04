import styles from '../styles/AddProperty.module.css';
import {useState} from 'react';
import axios from 'axios';

function AddProperty(){

    const [state, setState] = useState({
        title: "",
        developer: "testing developer",
        project: "testing project",
        city: "testing city",
        type: "apartment",
        price: 100,
        size: 100,
        details: "No more details",
        delivery_date: "2025-01-01",
        bathrooms: 0,
        bedrooms: 0,
        owner_name:"testing owner",
        owner_number:"00000000"
      })

    function handleChange(evt) {
        const value = evt.target.value;
        setState({ ...state,[evt.target.name]: value});

        console.log(state)
      }

    const showModal = () => {
        const { Modal } = require("bootstrap");
        const myModal = new Modal("#addModal");
        myModal.show();
      };

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        let jsonData= state;

        jsonData['owner']={name:jsonData['owner_name'],phone_number:jsonData['owner_number']}
        delete jsonData['owner_name'];
        delete jsonData['owner_number'];
        console.log(jsonData)
        var url= process.env.BASE_URL || "http://localhost:8080/"
        axios.post(url+'property/',jsonData).then(response => {
            alert('Property added successfully')
            if(response.status===200)               
                location.reload();
            
            else
            {   alert(res)   }}).catch(err =>{alert(err)})
    }

    return (
        <div>
        <button className={styles.addbutton} onClick={showModal}><h4>+</h4></button>
        <div className="modal fade p-5" id='addModal' tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5>Add New Property</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form id='addForm' className="modal-body" onSubmit={handleFormSubmit}>
                        <input style={{display:'none'}} type='submit'></input>

                          <label><b>Title: </b></label> <input name="title" onChange={handleChange} required type='text'></input>
                          <label><b>Project: </b></label> <input name="project" onChange={handleChange} type='text'></input>
                          <label><b>Developer: </b></label> <input name="developer" onChange={handleChange} type='text'></input>
                          <label><b>City: </b></label> <input name="city" onChange={handleChange} type='text'></input>
                          <label><b>Owner Name: </b></label> <input name="owner_name" onChange={handleChange} type='text'></input>
                          <label><b>Owner Number: </b></label> <input name="owner_number" onChange={handleChange} type='text'></input>
                          <label><b>Price: </b></label> <input name="price" onChange={handleChange} required type='number' min={1} max={100000000}></input>
                          <label><b>Size: </b></label> <input name="size" type='number' onChange={handleChange} min={10} max={100000}></input>
                          <label><b>Type:   </b></label>{' '}
                             <select name="type" onChange={handleChange}>
                                <option value="apartment">Apartment</option>
                                <option value="studio">Studio</option>
                                <option value="villa">Villa</option>
                                <option value="twin-house">Twin House</option>
                                <option value="duplex">Duplex</option>
                                <option value="shop">Shop</option>
                                <option value="mall">Mall</option>
                                <option value="school">School</option>
                            </select>
                          <label><b>Details: </b></label> <input name="details" onChange={handleChange} type='text'></input>
                          <label><b>Delivery Date: </b></label> <input name="delivery_date" onChange={handleChange} type='date'></input>
                          <label><b>Bathrooms:</b></label> <input name="bathrooms" required onChange={handleChange} type='number'  min={0} max={20} ></input>
                          <label><b>Bedrooms: </b></label> <input name="bedrooms" required onChange={handleChange} type='number' min={0} max={30}></input>
                          <button style={{margin:'20px auto',width:'100%'}} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                select{
                    border: 1px solid #DBDBDB ;
                    width: 200px;
                    heigth: 150px;
                }

                input{
                    border: 1px solid #DBDBDB ;
                    padding: 5px;
                    width: 200px ;
                }

                label {
                    width: 150px;
                    margin: 15px;
                }

                button
                {
                    border: 1px solid #DBDBDB ;
                    padding: 5px;
                }

            `}</style>

        </div>
    )
}

export default AddProperty
