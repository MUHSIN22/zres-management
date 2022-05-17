import "./App.scss";
import Crm from "./components/CRM/Crm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import DeliveryManager from "./components/Delivery Manager/DeliveryManager";
import LoginPage from "./components/Login Section/LoginPage/LoginPage";
import OptionSelection from "./components/Login Section/optionSelection/OptionSelection";
import MainPage from "./components/POS/MainPage";
import Inventory from "./components/Inventory/Inventory";
import Accounts from "./components/Accounts/Accounts";
import KdcCoud from "./components/KDC CLOUD/KdcCoud";
import DashBoard from "./components/DashBoad/DashBoard";
import Walkin from "./components/Walkin/Walkin";
import Settings from "./components/Walkin/settengs/Settings";
import DineIn from "./components/DineIn/DineIn";
import FoodOrderPage from "./components/foodOrder/FoodOrderPage";
import PrintComponent from "./components/printing/PrintingComp";
import Billgenerated from "./components/Walkin/Bills/Billgenerated";
import { EssentialProvider } from "./Data manager/EssentialContext";
import KdcOrder from "./components/KDC CLOUD/KDC Order/KdcOrder";

function App() {
  return (
    <EssentialProvider>
      <div className="App">
        <div className="DeliveryManager__section">
          <Router>
            <Routes>
              <Route path="/printTest" element={<Billgenerated />} />
              <Route path="/deliveryManager" element={<DeliveryManager />}/>
              <Route path="/setting" element={<Settings />}/>
              <Route path="/foodOrder" element={<FoodOrderPage />}/>
              <Route path="/dinein" element={<DineIn />}/>
              <Route path="/walkin" element={<Walkin />}/>
              <Route path="/DashBoad" element={<DashBoard />}/>
              <Route path="/kdcCloud" element={<KdcCoud />}>
                <Route path="orders" element={<KdcOrder />}/>
              </Route>
              <Route path="/optionSection" element={ <OptionSelection />}/>
              <Route path="/mainPage/*" element={<MainPage />}/>
              <Route path="/crm" element={<Crm />}/>
              <Route path="/inventory" element={<Inventory />}/>
              <Route path="/accounts" element={<Accounts />}/>
              <Route path="/" element={<LoginPage />}/>
            </Routes>
          </Router>
        </div>      
      </div>
    </EssentialProvider>
  );
}

export default App;
