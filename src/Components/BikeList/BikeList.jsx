import React, { useState } from 'react';
import { noPicture} from '../../Config/config';
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
            <div className="col-md-8">
            <input type="text" 
            placeholder='Search By title wise...'
            className='form-control' 
            onChange={getData}
            value={searchName} required/>
            </div>
            <div className="col-md-2">
                <button className='form-control bg-success text-white ' onClick={searchName===""?handleClick:filter.bind(this, searchName)}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="col-md-2">
                <button className='form-control bg-warning text-white' onClick={refresh.bind(this, searchName)}><i class="fa-solid fa-arrows-rotate"></i></button>
            </div>
           </div><br/>    
           <h5 className='total alert alert-primary'>Total Cases:{ props.Udata.data.bikes.length*4854}</h5> 
          <h3 className='alert bg-primary text-white text-center mt-2'>List Of Bikes</h3>
           <table className='table table-hover alert alert-dark '>
            <tbody>
                {
                    foundBikes.length>0?(
                       foundBikes.map((bike)=>{
                        return <tr key={bike.id} className="Table-row" onClick={selectedBike.bind(this, bike)}>
                            <td><img src={bike.large_img?bike.large_img:noPicture} width="200px" height="210px"/></td>
                            <td></td>
                            <td>Bike-Title:{bike.title}<br/>Date Stolen:{bike.date_stolen}<br/>Bike Color:{bike.frame_colors}<br/>frame_model:{bike.frame_model}<br/>BikeID : {bike.id}<br/>Bike_NO : {bike.serial}</td>
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
