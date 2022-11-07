import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BikeList from '../BikeList/BikeList';
import BikeDetails from "../BikeDetails/BikeDetails";
import CustomPagination from '../../Pagination/CustomPagination';
import "./Bike.css";


const Bikes= () => {

    const [data, setData] = useState({});
    const [profile, setprofile] = useState({});
    const [page, setPage] = useState(1);

    const selectProfiles=(bike)=>{
        console.log(bike);
        setprofile({profile:bike})
    }

    const fetchData=async() => {
      await axios.get(`https://bikeindex.org/api/v3/search?page=${page}`)
      .then((res)=>{setData({data:res.data})})
      .catch((err)=>err)
    };

    useEffect(()=>{
    fetchData();
    },[page]);
    

    return (
        <div>
            <br/><br/>
            {/* <pre>{JSON.stringify(data)}</pre> */}
            <CustomPagination setPage={setPage}/>  
                <div className='row'>
                    <div className="col-md-6">
                        {
                            Object.keys(data).length>0?<>
                            {<BikeList Udata={data} selectedProfile={selectProfiles} />}
                            </>:<p className='Span'><em>Loading...</em></p>
                        }
                    </div>
                    <div className="col-md-6">
                        {
                            Object.keys(profile).length>0?<>
                            {<BikeDetails Profile={profile}/>}
                            </>:null
                        }
                    </div>
                </div>
            </div>
     
    );
}

export default Bikes;
