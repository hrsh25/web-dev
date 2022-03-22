import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
const WhoToFollowList = () => {
    return (
        <>
            <div className="d-none d-xxl-block">
                <ul className="list-group">
                    <li className="list-group-item"><label className="h6">Who to Follow</label></li>
                    {
                        who.map(item => {
                            return(
                                <WhoToFollowListItem key = {item.handle} who = {item}/>
                            );
                        })
                    }
                </ul>
            </div>
        </>    
    );
}

export default WhoToFollowList;
