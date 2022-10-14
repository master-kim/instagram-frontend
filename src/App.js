import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import { Layout } from "./components/Layout/layout.js";
import LoginPage from "./components/LoginPage/LoginPage";
import "./css/common/global.css";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      {/* <Layout /> */}
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        {/* <ProtectedRoute exact path="/" component={Home} /> */}
        {/* <ProtectedRoute exact path="/my-profile" component={MyProfile} /> */}
        {/* <ProtectedRoute
              exact
              path="/users/:userId"
              component={UserDetailsRoute}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" /> */}
      </Routes>
    </Router>
  );
}

export default App;
