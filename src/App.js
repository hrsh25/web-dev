import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.css';
import HelloWorld from "./components/hello-world"
import Labs from "./components/Labs/index";
import Index from "./components/Tuiter/index";
// import HomeScreen from "./components/Tuiter/HomeScreen/homescreen";
import HomeScreen from "./components/Tuiter/home-screen"
import ExploreScreen from "./components/Tuiter/ExploreScreen/explorescreen"
import Profile from "./components/Tuiter/Profile/index"
import EditProfile from "./components/Tuiter/EditProfile"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/">
                            <Route index
                                   element={<Labs/>}/>
                            <Route path="hello"
                                   element={<HelloWorld/>}/>
                            <Route path="tuiter"
                                   element={<Index/>}>
                                <Route path = "home"
                                       element = {<HomeScreen/>}/>
                                <Route path = "explore"
                                       element = {<ExploreScreen/>}/>
                                <Route path = "profile"
                                       element = {<Profile/>}>
                                    <Route path="edit-profile"
                                        element = {<EditProfile/>}/>
                                </Route>
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}


export default App;
