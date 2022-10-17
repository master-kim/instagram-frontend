import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import { Layout } from "./components/Layout/layout.js";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import "./css/common/global.css";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      {/* <Layout /> */}
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/personal-page" element={<PersonalPage />} />
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
