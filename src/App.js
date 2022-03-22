import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.css';
import HelloWorld from "./components/hello-world"
import Labs from "./components/Labs/index";
import Index from "./components/Tuiter/index";
import HomeScreen from "./components/Tuiter/HomeScreen/homescreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/explorescreen"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Index/>}/>
                    <Route path="/tuiter/home"
                           exact={true}
                           element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore"
                           exact={true}
                           element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;
