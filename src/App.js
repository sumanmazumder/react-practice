import logo from './logo.svg';
import './App.css';
import CustomHook from "./components/customHook/index";
import Context from "./components/context/index";
import ContextTwo from "./components/context-two/index";
// import CountRedux from "./components/redux";

function App() {
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
      </div> */}
        <CustomHook />
        <Context />
        <ContextTwo />
        {/* <CountRedux /> */}
    </>
  );
}

export default App;
