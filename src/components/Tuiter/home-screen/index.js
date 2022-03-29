import React from "react";
import WhatsHappening from "../whats-happening/whats-happening";
import Navigationsidebar from ".././NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";

import TuitList from "../tuit-list"
const HomeScreen = () => {
    return(
        <>
        <div className="d-block d-sm-none">
            <div className="row mt-2">
                <div className="col-2">
                    <Navigationsidebar activeParam="home" size="xs"/>
                </div>
                <div className="col-10"
                     style={{"position": "relative"}}>
                    <WhatsHappening/>
                    <div className="wd-bg-color-black-twitter">
                        <TuitList/>
                    </div>
                </div>
            </div>
        </div>
    <div className="d-none d-sm-block d-md-none">
        <div className="row mt-2">
            <div className="col-2">
                <Navigationsidebar activeParam="home" size="sm"/>
            </div>
            <div className="col-10"
                 style={{"position": "relative"}}>
                <WhatsHappening/>
                <div className="wd-bg-color-black-twitter">
                    <TuitList/>
                </div>
            </div>
        </div>
    </div>
    <div className="d-none d-md-block d-lg-none">
        <div className="row mt-2">
            <div className="col-2">
                <Navigationsidebar activeParam="home" size="md"/>
            </div>
            <div className="col-10"
                 style={{"position": "relative"}}>
                <WhatsHappening/>
                <div className="wd-bg-color-black-twitter">
                    <TuitList/>
                </div>
            </div>
        </div>
    </div>
    <div className="d-none d-lg-block d-xl-none">
        <div className="row mt-2">
            <div className="col-1">
                <Navigationsidebar activeParam="home" size="lg"/>
            </div>
            <div className="col-7"
                 style={{"position": "relative"}}>
                <WhatsHappening/>
                <div className="wd-bg-color-black-twitter">
                    <TuitList/>
                </div>
            </div>
            <div className="col-4">
                <WhoToFollowList/>
            </div>
        </div>
    </div>
    <div className="d-none d-xl-block d-xxl-none">
        <div className="row mt-2">
            <div className="col-2">
                <Navigationsidebar activeParam="home" size="xxl"/>
            </div>
            <div className="col-6"
                 style={{"position": "relative"}}>
                <WhatsHappening/>
                <div className="wd-bg-color-black-twitter">
                    <TuitList/>
                </div>
            </div>
            <div className="col-4">
                <WhoToFollowList/>
            </div>
        </div>
    </div>
    <div className="d-none d-xxl-block">
        <div className="row mt-2">
            <div className="col-2">
                <Navigationsidebar activeParam="home" size="xxl"/>
            </div>
            <div className="col-6"
                 style={{"position": "relative"}}>
                <WhatsHappening/>
                <div className="wd-bg-color-black-twitter">
                    <TuitList/>
                </div>
            </div>
            <div className="col-4">
                <WhoToFollowList/>
            </div>
        </div>
    </div>
        </>
    )
}
export default HomeScreen;

