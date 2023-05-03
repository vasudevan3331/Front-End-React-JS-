
import { Register1 } from './BikeCustomerDetails';
import { Homepage } from './Homepage';
import './Image.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Updating1 } from './UpdatingPage';
import { ListallServiceDetails } from './ListallServiceDetails';
import { ListallbikeDetails } from './ListallBikeValues';
import { Newservicedetail } from './NewserviceDetails';

function App() {
  return (
   <>
   <BrowserRouter>
   <Homepage/>
   <Routes>
    {/* //<Route path="create" exact element={<Register/>}/>
     //<Route path="update" exact element={<Updating1/>}></Route> */}
     <Route path="createbikedetails" exact element={<Register1/>}/>
     <Route path="listallbikedetails" exact element={<ListallbikeDetails/>}/>
      <Route path="createservicedetail" exact element={<Newservicedetail/>} />
      <Route path="listallservicedetails" exact element={<ListallServiceDetails/>}/>
   </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
