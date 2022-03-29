import React from "react";
import "../Profile/profile.css"

const EditProfileComponent = ({profile}) => {
    return (
        <>
            <div className="mt-2 row">
                <div className="col-1 ps-2">
                    <i className="fas fa-arrow-left wd-color-white"></i>
                </div>
                <div className="col-11 ps-2">
                    <label className="wd-color-white"><b>{profile.lastName}</b></label>
                    <button type="button" btn-primary>Save</button>
                </div>
            </div>
            <div className="wd-container">
                <img src={profile.bannerPicture} className="wd-main"></img>
                <img src={profile.profilePicture} className="rounded-pill wd-border-black wd-overlay"></img>
                <button type="button" className="btn rounded-pill wd-right border-secondary mt-3 me-3">Edit Profile
                </button>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="ms-3">
                <label className="wd-username-font wd-color-white"><b>{profile.firstName} {profile.lastName}</b></label>
                <br></br>
                <label>@{profile.handle}</label>
                <label className="wd-color-white">{profile.bio}</label>
                <i className="fas fa-map-marker-alt me-2"></i><label>{profile.location}</label>
                <i className="fas fa-golf-ball ms-2 me-2"></i><label>Born {profile.dateOfBirth}</label>
                <i className="fas fa-calendar-alt ms-2 me-2"></i><label>Joined {profile.dateJoined}</label>
                <br></br>
                <label className="wd-color-white me-2"><b>{profile.followingCount}</b></label>
                <label>Following</label>
                <label className="wd-color-white ms-2 me-2"><b>{profile.followersCount}</b></label>
                <label>Followers</label>
            </div>
        </>
    );
};

export default EditProfileComponent;