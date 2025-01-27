import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";
import RegisterForm from "./components/RegisterForm";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Main />
            </>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
