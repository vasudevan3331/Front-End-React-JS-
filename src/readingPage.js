import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect,useState } from 'react';
import { read } from './CustomerDetails';

export const Reading=(mypos)=>
{
    const [customervalue,setCustomervalues]=useState(
        {
            "cusId":0,
            "cusName":"",
            "cusEmail":"",
            "cusBillno":"",
            "cusContact":0,
            "cusAddress":"",
            "cusDateofbirth":""
        }
    )
    useEffect(()=>
    {
        callreadingvalues();
    })

    const callreadingvalues=()=>
    {
        setCustomervalues(read(mypos.who))
    }
    return(
        <>
        <div className='container row justify-content-center'>
            <div className='card col-lg-8 col-md-10 col-sm-12 bg-primary'>
                <div className='card-body'>
                    <h1>{customervalue.cusId}</h1>
                    <h1>{customervalue.cusName}</h1>
                    <h1>{customervalue.cusEmail}</h1>
                    <h1>{customervalue.cusBillno}</h1>
                    <h1>{customervalue.cusContact}</h1>
                    <h1>{customervalue.cusAddress}</h1>
                    <h1>{customervalue.cusDateofpurchase}</h1>
                
                
                </div>
            </div>
        </div>
        </>
    )
}