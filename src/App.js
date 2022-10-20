import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import { Layout } from "./components/Post/Layout/Layout";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import "./css/common/global.css";

/* 
 * 설명 : App.js
 * ------------------------------------------------------------- 
 * 작업일         작업자    작업내용
 * ------------------------------------------------------------- 
 * 2022.10.11    김요한    최초작성
 * 2022.10.14    김영일    메인페이지 , 로그인 페이지 , 개인페이지 추가
 * -------------------------------------------------------------
*/

function App() {
  return (
    <Router>
     {/* <Header /> 
      <Layout /> */}
      <Routes>

        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/personal-page" element={<PersonalPage />} />
        <Route exact path="/mainpage" element={<Layout />}/>
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
