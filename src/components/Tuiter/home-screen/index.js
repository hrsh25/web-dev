import React from "react";
import WhatsHappening from "../whats-happening/whats-happening";
import TuitList from "../tuit-list"
const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <div className="wd-bg-color-black-twitter">
                <TuitList/>
            </div>
        </div>
    )
}
export default HomeScreen;

