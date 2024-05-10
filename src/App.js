import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import AuthPage from "./components/authPage";
import UserPage from "./components/UserPage";
import FaqPage from "./components/faqPage";
import { useSelector } from "react-redux";

function App() {
  const { loggedIn} = useSelector((state) => state.user);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={loggedIn ? <UserPage /> : <AuthPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
        <NotificationContainer />
      </div>
    </Router>
  );
}

export default App;
