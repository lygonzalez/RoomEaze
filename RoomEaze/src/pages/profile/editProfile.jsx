import "./profile_color.jsx";
import "./styling.css";
import CircleChoice from "./profile_color"

const editPage = () => {
    const circleStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: "gray",
        left: "50px",
        borderRadius: "50%",
      };
    return (
        <div>
            <h1>Edit Profile</h1>
            <div>
                <div>
                    <h2>Change Name</h2>
                    <div className = "color-bar-wrapper" style = {{width: 500}}></div>
                </div>
                <div>
                    <h2>Change Roommate Group</h2>
                    <div className = "color-bar-wrapper" style = {{width: 300}}></div>
                </div>
                <div>
                    <h2>Change Profile Color</h2>
                    <CircleChoice/>
                </div>
                <div className = "color-bar-wrapper" style = {{width: 50, height: 30, textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center"}}>
                    <h4>Done</h4>
                </div>
            </div>
        </div>

    );

};

export default editPage;