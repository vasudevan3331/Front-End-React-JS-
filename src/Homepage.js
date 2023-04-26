import { useEffect, useState } from "react";
import { Register } from "./BikeCustomerDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { FetchExact, list , remove } from "./CustomerDetails";
import { Reading } from "./readingPage";
import { Updating } from "./UpdatingPage";


export const Homepage=()=>
{
    const[temparray,setTemparray]=useState([]);  
  

    const[createview,setCreateview]=useState(false)
  

    const[readview,setReadview]=useState(false)
  

    const[pos,setPos]=useState(0)

    const[updateview,setUpdateview]=useState(false);

    const[obj,setObj]=useState({});

  
    const result=()=>
    {
        setTemparray(list)
    }

    useEffect(()=>
    {
        result()
    })

    return(
        <div className="container">
            {
                (createview)?
                <>
                <Register/>
                <button className="btn btn-outline-secondary"
                onClick={
                    ()=>
                    {
                        setCreateview(false)
                    }
                }
                >
                     Back</button>
                </>
                :
                (readview)?
                <>
                <Reading who={pos}/>
                <button className="btn btn-outline-secondary"
                onClick={
                    ()=>
                    {
                        setReadview(false)
                    }
                }> Back
                </button>
                </>
                :
                (updateview)?
                <>
                <Updating who={pos}mention={obj}/>
                <button className="btn btn-outline-secondary"
                onClick={()=>
                {
                    setUpdateview(false)
                }
             }
                >
                    Back
                </button>
                </>
                :
                <>
                <button className="btn btn-outline-success"
                onClick={
                    ()=>
                    {
                        setCreateview(true)
                    }
                }
                >create new details</button>
                <br></br>
                <h1 align="center">List all costomer</h1>
                <div className="row justify-content-center">
                    <table className="bg-info col-lg-8 col-md-10 col-sm-12 table table-striped p-3">
                        <thead>
                            <tr>
                                <th>CustomerID</th>
                                <th>CustomerName</th>
                                <th>CustomerEmail</th>
                                <th>CustomerBillno</th>
                                <th>CustomerContactNO</th>
                                <th>CustomerAddress</th>
                                <th>DateofPurchase</th>
                                <th>perforamce(Read,Update,Delete)</th>
                            </tr>
                        </thead>
                         
                        <tbody>
                            {
                                temparray.map((data,ind)=>
                                (
                                    <tr>
                                        <td>{data.cusId}</td>
                                        <td>{data.cusName}</td>
                                        <td>{data.cusEmail}</td>
                                        <td>{data.cusBillno}</td>
                                        <td>{data.cusContact}</td>
                                        <td>{data.cusAddress}</td>
                                        <td>{data.cusDateofpurchase }</td>
                                        <td>
                                            <button className="btn btn-outline-warning"
                                            onClick={
                                                ()=>
                                                {   
                                                    setReadview(true)
                                                    setPos(ind)
                                                }
                                            }
                                            >Read
                                            </button>
                                            <button className="btn btn-outline-primary"
                                            onClick={()=>
                                            {
                                                setUpdateview(true)
                                                setPos(ind)
                                                setObj(FetchExact(data.cusName))
                                            }}
                                            >UPDATE</button>
                                           
                                           
                                            <button className="btn btn-outline-danger"
                                            onClick={
                                                ()=>
                                                {
                                                    setTemparray(remove(ind))
                                                }}>Delete</button>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                </>
            }
        </div>
    );
}