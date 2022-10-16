import React, { useState } from 'react';
import { unavailableLandscape } from '../../Config/config';
import "../BikeData/Bike.css"

const BikeList = (props) => {

    const dataArray=props.Udata.data.bikes
    const [foundBikes, setFoundBikes] = useState(dataArray);
    const [searchName, setsearchName] = useState("");
    const [click,setClick]=useState(false);

    const getData=(e)=>{
        const keyword=e.target.value.toLowerCase();
        setsearchName(keyword);
        console.log(keyword);
    }

    const handleClick=()=>{
        alert("Text Field is empty please fill the Field");
    }

    const selectedBike=(bike)=>{
        props.selectedProfile(bike);
        window.scroll(0,0)
        console.log(bike);
    }

    const filter=()=>{
        if(searchName!==""){
            const result=foundBikes.filter((singlebike)=>{
                return singlebike.title.toLowerCase().includes(searchName) 
            })
            setFoundBikes(result)
        }
    }

    const refresh=()=>{
        const searchName="";
        if(searchName=="")
        setFoundBikes(dataArray);
    }


    return (
        <div className='mt-5'>
            
           {/* <pre>{JSON.stringify(props)}</pre> */}
           <div className='row'>
            <div className="col-md-6">

            <input type="text" 
            placeholder='Search...'
            className='form-control' 
            onChange={getData}
            value={searchName}/>
            </div>
            <div className="col-md-3">
                <input type="button" value="Search" className='form-control bg-primary text-white' onClick={searchName===""?handleClick:filter.bind(this, searchName)}/>
            </div>
            <div className="col-md-3">
                <input type="button" value="Refresh" className='form-control bg-secondary text-white' onClick={refresh.bind(this, searchName)}/>
            </div>
           </div>
          <br/>
          <h5 className='total'>Total Cases:{ props.Udata.data.bikes.length*4854}</h5>
           <table className='table table-hover'>
            <thead className='alert alert-primary'>
                <tr>
                    <th>Bike Image</th>
                    <th>BikeID</th>
                    <th>Title </th>
                    <th>Bike Description</th>
                    <th>Bike color</th>    
                </tr>
            </thead>
            <tbody>
                {
                    foundBikes.length>0?(
                       foundBikes.map((bike)=>{
                        return <tr key={bike.id}  onClick={selectedBike.bind(this, bike)}>
                            <td><img src={bike.large_img?bike.large_img:unavailableLandscape} width="200px" height="210px"/></td>
                            <td>BikeID : {bike.id}<br/>Bike_NO : {bike.serial}</td>
                            <td>{bike.title}</td>
                            <td>{bike.date_stolen}<br/>Status : {bike.status}</td>
                            <td>{bike.frame_colors}<br/>frame_model:{bike.frame_model}</td>
                        </tr>

                       })
                    ):(
                        <p className='Span'><em>data Not Found!</em></p>
                    )}
            </tbody>
           </table>
           
        </div>
    );
}

export default BikeList;
