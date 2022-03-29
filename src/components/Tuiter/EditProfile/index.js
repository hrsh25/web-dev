import React from "react";
import profile from "../data/profile.json";
import EditProfileComponent from "../EditProfile/EditProfileComponent";
import Navigationsidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";

const EditProfile = () => {
    return(
        <>
            <div className="row mt-1">
                <div className="col-2 col-lg-2 col-xl-2">
                    <Navigationsidebar activeParam="profile" size="xxl"/>
                </div>
                <div className="col-6 col-lg-6 col-xl-6">
                    {
                        profile.map(id=>
                            <EditProfileComponent key={id.dateOfBirth} profile={id}/>
                        )
                    }
                </div>
                <div className="col-4 col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    );
};

export default EditProfile;