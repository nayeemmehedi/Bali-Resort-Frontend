import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import axios from "../../All_API/ALL_API"




const ManageAllOrders = () => {
    const history = useHistory()


  let user = JSON.parse(localStorage.getItem("user"));

    const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://shielded-basin-10438.herokuapp.com/Resortbuy`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, [user.email]);


  const deleteBtn =(id)=>{

     if (window.confirm("Do you want to buy it?") == true) {
      
      fetch(`https://shielded-basin-10438.herokuapp.com/Resortbuydelete/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Your item has been deleted SUCCESSFULLY");
        history.replace("/pay");
      })} else {
		alert("Cancel DELETE...");
		}
  }

   const proceesOder =(id)=>{
    fetch(`https://shielded-basin-10438.herokuapp.com/ResortProcess/${id}`, {
  method: 'PATCH',
})
  .then((response) => response.json())
  .then((data) => {
       
        window.location.reload();
       

      });
  }

  

  
    return (
        <div className="darkman">
           <h3 className="text-center star text-danger ">All Orderded Resort Here ....</h3>

            <div className="row  p-lg-3 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
                {
                    data.map(v =>

                        <div className="col-lg-4  col-md-12 col-sm-12 rounded " >

                            <div className="m-2" style={{ color: "black" }}>

                                <div className="rounded-3 shadow ">


                                    <div className="p-4 text-primary bg-info ">


                                        <img className="rounded" style={{ height: "220px", width: "300px" }} src={v.image} alt="" />
                                        
                                        <p className="mt-2 star"> {v.productName}</p>
                                        <p style={{ color: "red" }}>Amount : {v.price}</p>
                                        <p>Place : {v?.place}</p>
                                        <p>Email : {v?.email}</p>
                                        
                                        <p>{v?._id}</p>
                                        <p><span class="text-danger">Process status</span> : <span class="text-success">{v?.value}</span> </p>

                                        <div className="row">


                                          <div className="col">  <button onClick={()=>proceesOder(v._id)} className="btn btn-danger"><CheckCircleIcon/>{ v?.value}  </button></div>



                                          <div className="col"><button className="btn btn-danger" onClick={()=>deleteBtn(v._id)}>delete <DeleteForeverIcon/></button></div>
                                        </div>


                                      
                                      
                                      
                                        


                                    </div>

                                    <div>


                                    </div>


                                </div>



                            </div>

                        </div>


                    )
                }
            </div>
        </div>
    );

};

export default ManageAllOrders;