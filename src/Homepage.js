import { useEffect, useState } from "react";
import { Register } from "./BikeCustomerDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FetchExact, list , remove } from "./CustomerDetails";
import { Reading } from "./readingPage";
import { Updating1 } from "./UpdatingPage";
import { Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import TwoWheelerSharpIcon from '@mui/icons-material/TwoWheelerSharp';
import './Image.css'


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
        <>
        <div id="bc1">
            <Navbar expand="lg" variant="light" >
                <Container>
                    <Navbar.Brand href="/" className="">TVS <TwoWheelerSharpIcon></TwoWheelerSharpIcon> Servicecenter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="vasu" />
                    <Navbar.Collapse id="vasu">
                        <Nav className="ms-5">   
                        <NavDropdown title="BikeDetails" id="basic-nav-dropdown">
                        <NavDropdown.Item href="createbikedetails">Create</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">ListAll(update & Read & Delete)</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="ServiceDetails" id="basic-nav-dropdown" className="ms-5">
                        <NavDropdown.Item href="createservicedetail">
                            Create
                        </NavDropdown.Item>
                        <NavDropdown.Item href="listallservicedetails">ListAll</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav className="ms-5">
                        <button className="btn btn-outline-dark me-5 "   >
                                Logout
                        </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
        



        // <div className="container">
        //     {
        //         (createview)?
        //         <>
        //         <Register/>
        //         <button className="btn btn-outline-secondary"
        //         onClick={
        //             ()=>
        //             {
        //                 setCreateview(false)
        //             }
        //         }
        //         >
        //              Back</button>
        //         </>
        //         :
        //         (readview)?
        //         <>
        //         <Reading who={pos}/>
        //         <button className="btn btn-outline-secondary"
        //         onClick={
        //             ()=>
        //             {
        //                 setReadview(false)
        //             }
        //         }> Back
        //         </button>
        //         </>
        //         :
        //         (updateview)?
        //         <>
        //         <Updating who={pos}mention={obj}/>
        //         <button className="btn btn-outline-secondary"
        //         onClick={()=>
        //         {
        //             setUpdateview(false)
        //         }
        //      }
        //         >
        //             Back
        //         </button>
        //         </>
        //         :
        //         <>
        //         <button className="btn btn-outline-success"
        //         onClick={
        //             ()=>
        //             {
        //                 setCreateview(true)
        //             }
        //         }
        //         >create new details</button>
        //         <br></br>
        //         <h1 align="center">List all costomer</h1>
        //         <div className="row justify-content-center">
        //             <table className="bg-info col-lg-8 col-md-10 col-sm-12 table table-striped p-3">
        //                 <thead>
        //                     <tr>
        //                         <th>CustomerID</th>
        //                         <th>CustomerName</th>
        //                         <th>CustomerEmail</th>
        //                         <th>CustomerBillno</th>
        //                         <th>CustomerContactNO</th>
        //                         <th>CustomerAddress</th>
        //                         <th>DateofPurchase</th>
        //                         <th>perforamce(Read,Update,Delete)</th>
        //                     </tr>
        //                 </thead>
                         
        //                 <tbody>
        //                     {
        //                         temparray.map((data,ind)=>
        //                         (
        //                             <tr>
        //                                 <td>{data.cusId}</td>
        //                                 <td>{data.cusName}</td>
        //                                 <td>{data.cusEmail}</td>
        //                                 <td>{data.cusBillno}</td>
        //                                 <td>{data.cusContact}</td>
        //                                 <td>{data.cusAddress}</td>
        //                                 <td>{data.cusDateofpurchase }</td>
        //                                 <td>
        //                                     <button className="btn btn-outline-warning"
        //                                     onClick={
        //                                         ()=>
        //                                         {   
        //                                             setReadview(true)
        //                                             setPos(ind)
        //                                         }
        //                                     }
        //                                     >Read
        //                                     </button>
        //                                     <button className="btn btn-outline-primary"
        //                                     onClick={()=>
        //                                     {
        //                                         setUpdateview(true)
        //                                         setPos(ind)
        //                                         setObj(FetchExact(data.cusName))
        //                                     }}
        //                                     >UPDATE</button>
                                           
                                           
        //                                     <button className="btn btn-outline-danger"
        //                                     onClick={
        //                                         ()=>
        //                                         {
        //                                             setTemparray(remove(ind))
        //                                         }}>Delete</button>
        //                                 </td>

        //                             </tr>
        //                         ))
        //                     }
        //                 </tbody>
        //             </table>
        //         </div>
        //         </>
        //     }
        // </div>
    );
}