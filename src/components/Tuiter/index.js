import React from "react";
import {Outlet} from "react-router-dom";
import Navigationsidebar from "./NavigationSidebar";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList from "./WhoToFollowList";
import HomeScreen from "./home-screen";
import "./ExploreScreen/explore.css"
import Profile from "./Profile/index"

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer
});
const store = createStore(reducer);

const Index = () => {
    return(
        <>
            <Provider store={store}>
                <Outlet/>
            </Provider>
        </>
    );
};

export default Index;