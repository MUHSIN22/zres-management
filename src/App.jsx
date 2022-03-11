import "./App.scss";
import Crm from "./components/CRM/Crm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/printTest">
            <div className="DeliveryManager__section">
              <Billgenerated />
            </div>
          </Route>

          <Route path="/deliveryManager">
            <div className="DeliveryManager__section">
              <DeliveryManager />
            </div>
          </Route>

          <Route path="/setting">
            <div className="DeliveryManager__section">
              <Settings />
            </div>
          </Route>

          <Route path="/foodOrder">
            <div className="DeliveryManager__section">
              <FoodOrderPage />
            </div>
          </Route>

          <Route path="/dinein">
            <div className="DeliveryManager__section">
              <DineIn />
            </div>
          </Route>

          <Route path="/walkin">
            <div className="DeliveryManager__section">
              <Walkin />
            </div>
          </Route>

          <Route path="/DashBoad">
            <div className="DeliveryManager__section">
              <DashBoard />
            </div>
          </Route>

          <Route path="/kdcCloud">
            <div className="DeliveryManager__section">
              <KdcCoud />
            </div>
          </Route>

          <Route path="/optionSection">
            <div className="option__section">
              <OptionSelection />
            </div>
          </Route>

          <Route path="/mainPage">
            <div className="Login__section">
              <MainPage />
            </div>
          </Route>

          <Route path="/crm">
            <div className="Crm__section">
              <Crm />
            </div>
          </Route>

          <Route path="/inventory">
            <div className="Login__section">
              <Inventory />
            </div>
          </Route>

          <Route path="/accounts">
            <div className="Login__section">
              <Accounts />
            </div>
          </Route>

          <Route path="/">
            <div className="Login__section">
              <LoginPage />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
