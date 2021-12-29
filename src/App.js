import React,{ Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Header = React.lazy(() => import("./Components/Header/Header"));

const Shop = React.lazy(() => import("./Components2/Shop.js"));

const ShopConfirm = React.lazy(() => import("./Components2/ShopConfirm.js"));

const Review = React.lazy(() => import("./Components2/Review/Review"));
const Pay = React.lazy(() => import("./Components2/Pay/Pay"));

const MyOrder = React.lazy(() => import("./Components2/MyOrder/MyOrder"));

const Dashboard = React.lazy(() => import("./Components2/Dashboard/Dashboard"));

const AddProduct = React.lazy(() =>
  import("./Components3/AddProduct/AddProduct")
);

const MakeAdmin = React.lazy(() => import("./Components3/MakeAdmin/MakeAdmin"));
const ManageAllOrders = React.lazy(() =>
  import("./Components3/ManageAllOrders/ManageAllOrders")
);
const ManageProducts = React.lazy(() =>
  import("./Components3/ManageProducts/ManageProducts")
);

const Private = React.lazy(() =>
  import("./Components4/privateRoute/PrivateRoute")
);
const Login = React.lazy(() => import("./Components4/login/Login"));
const SignUp = React.lazy(() => import("./Components4/createAccount/SignUp"));





let user = JSON.parse(localStorage.getItem("user"));




function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Header></Header>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route exact path="/resort">
              <Shop></Shop>
            </Route>

            <Private exact path="/dashboard">
              <Dashboard></Dashboard>
            </Private>

            <Private exact path="/resortConfirm/:id">
              <ShopConfirm></ShopConfirm>
            </Private>

            <Dashboard>
              <Private exact path="/myOrder">
                <MyOrder></MyOrder>
              </Private>

              <Private exact path="/review">
                <Review></Review>
              </Private>

              <Private exact path="/pay">
                <Pay></Pay>
              </Private>

              <Private exact path="/addProduct">
                <AddProduct></AddProduct>
              </Private>

              <Private exact path="/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </Private>

              <Private exact path="/ManageAllOrders">
                <ManageAllOrders></ManageAllOrders>
              </Private>

              <Private exact path="/ManageProducts">
                <ManageProducts></ManageProducts>
              </Private>
            </Dashboard>
          </Switch>
        </div>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
