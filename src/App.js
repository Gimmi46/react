import "./App.css"
import Header from "./components/Header/Header";
import Leftbar from "./components/LeftSidebar/Leftbar";
import Home from "./components/Home/Home"
import Rightbar from "./components/RightSidebar/Rightbar";



function App() {
  return (
    <div className="App">
       <Header/>
       <div className='container'>
                <div className='row main-bg'>
                    <div className='col-3 '>
                        <Leftbar />
                    </div>

                    <div className='col-6 d-flex flex-col'>
                    <Home/>
                    </div>
                
                <div className='col-3 d-flex'>
                    <Rightbar />
                </div>
                </div>
                </div>

    </div>
  );
}

export default App;
