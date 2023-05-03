import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';
import'./Image.css'
import { create } from './CustomerDetails';


export var Register1=()=>
{
    const[process,setprocess]=useState({
        "cusId":0,
        "cusName":"",
        "cusEmail":"",
        "cusBillno":"",
        "cusContact":0,
        "cusAddress":"",
        "cusDateofpurchase":""

    })
    const track=(agi)=>
    {
        const{name,value}=agi.target
        setprocess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }
    const reset=()=>
    {
        alert('Rejected successfully')
    }

    
    const register=()=>
    {
        alert('wellcome to bike rejestory'+JSON.stringify(process))
        create(process);
    }
    return(
        <>
        
         <div className="container mt-5" id="div">
                <span id='center1'></span>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 " id="center">
                <h4 className="text-center mt-5 mb-5" id='center2'><i class="bi bi-bicycle"></i> Bike Details Form</h4>
                    <div className="row justify-content-center " >
                        <div className="row">
                            <div className="col">
                                <label className="form-label" >CustomerID</label>
                                <input type="text" 
                                onChange={track}
                                value={process.cusId}
                                 name="cusId"
                                className="form-control" />
                           </div>
                            <div className="col">
                                <label className="form-label" >CustomerBillno</label>
                                <input type="text" 
                                name="cusBillno"
                                onChange={track}
                                value={process.cusBillno}
                                className="form-control" />
                            </div>
                        </div>
                        </div>  
                    <div className="mt-3">
                                <label className="form-label" >CustomerName</label>
                                <input type="text" 
                                name="cusName"
                                onChange={track}
                                value={process.cusName}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >CustomerContactNO</label>
                                <input type="tel" 
                                name="cusContact"
                                onChange={track}
                                value={process.cusContact}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >CustomerEmail</label>
                                <input type="email" 
                                name="cusEmail"
                                onChange={track}
                                value={process.cusEmail}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >DateofPurchase</label>
                                <input type="date"
                                name="cusDateofpurchase"
                                onChange={track}
                                value={process.cusDateofpurchase}
                                 className="form-control" />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Address</label>
                        <textarea onChange={track}
                        value={process.cusAddress}
                        className="form-control"></textarea>
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={register}  >Register</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >Reset</button>
                    </div>
                </div>
                </div>
                </div>
</>

    );
}