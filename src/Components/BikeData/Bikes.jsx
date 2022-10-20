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
            
            {/* <pre>{JSON.stringify(data)}</pre> */}
            
                <div className='row'>
                    <div className="col-md-8">
                        {
                            Object.keys(data).length>0?<>
                            {<BikeList Udata={data} selectedProfile={selectProfiles} />}
                            </>:<p className='Span'><em>Data is loading..</em></p>
                        }
                    </div>
                    <div className="col-md-3">
                        {
                            Object.keys(profile).length>0?<>
                            {<BikeDetails Profile={profile}/>}
                            </>:null
                        }
                    </div>
                </div>
                <p>1. When your going to change the page please refresh the page using refresh button.</p>
                <p>2. When your going to search the item in the search label and also search it in another page means do refresh and once again click on search button.</p>
                <CustomPagination setPage={setPage}/>  
            </div>
     
    );
}

export default Bikes;
