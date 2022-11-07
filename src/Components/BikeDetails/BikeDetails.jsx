import React from 'react';
import { noPicture } from '../../Config/config';

const BikeDetails = (props) => {
    return<>
    <div className='details'>
    <h3 className='alert bg-primary text-white text-center mt-5'>BikeDetails</h3>
    <div className="card">
        <div className="card-header">
            <img src={props.Profile.profile.large_img?props.Profile.profile.large_img:noPicture} width="590" height="350"/>
        </div>
        <div className="card-body alert alert-dark">
            <h5>Title:{props.Profile.profile.title}</h5>
            <p>Description : {props.Profile.profile.description}</p>
            <p>Stolen Location : {props.Profile.profile.stolen_location}</p>
            <p>Found Location : {props.Profile.profile.location_found}</p>
            <p>Stolen date: {props.Profile.profile.date_stolen}</p>
            <p>Year: {props.Profile.profile.year}</p>
        </div>
    </div>
    </div>
    </>

  
}

export default BikeDetails;
