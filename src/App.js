import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomHook from "./components/customHook/index";
import Context from "./components/context/index";
import ContextTwo from "./components/context-two/index";
import ProtectedRouter from "./components/hoc/ProtectedRouter";
import Counter from "./components/memorization/Counter";
import ParentComponent from "./components/passdata/ParentComponent";

import { Provider } from 'react-redux';
import {Store} from "./components/redux/Store";
import CountRedux from "./components/redux";



function App() {
  // localStorage.setItem("auth_token", "auth_token");
  localStorage.removeItem("auth_token")
  return (
    <>
      <div style={{padding:"40px"}}>
        <CustomHook />
        <Context />
        <ContextTwo />
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<ProtectedRouter />} />
          </Routes>
        </BrowserRouter>
        <br></br>
        <Counter />
      </div>
      <ParentComponent />
      <br></br>
      <Provider store={Store}>
        <CountRedux />
      </Provider>
    </>
  );
}

export default App;
