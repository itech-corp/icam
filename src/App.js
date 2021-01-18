import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AdminLogin from "./views/Pages/Login/adminLogin";
import UserProfile from "./views/Pages/users/userDashboard";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";
import Admission from "./views/Pages/users/admission_form";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/profile"
              name="Profile"
              render={(props) => <UserProfile {...props} />}
            />
            <Route
              exact
              path="/submit"
              name="Profile"
              render={(props) => <Admission {...props} />}
            />

            <Route
              exact
              path="/admin-icam"
              name="Admin"
              render={(props) => <AdminLogin {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/Register"
              name="Page d'inscription"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/"
              name="Register Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />

            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
