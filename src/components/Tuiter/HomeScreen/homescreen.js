import HomeComponent from "./homecomponent";
import Navigationsidebar from ".././NavigationSidebar";
import PostList from ".././PostList";
import PostSummaryList from "../PostSummaryList";
const HomeScreen = () => {
    return (
        <>
            <div className="d-none d-xxl-block">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="home"/>
                    </div>
                    <div className="col-6">
                        <HomeComponent/>
                    </div>
                    <div className="col-4">
                        <PostSummaryList/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HomeScreen;
