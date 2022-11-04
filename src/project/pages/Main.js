import { Link } from "react-router-dom";
import React from "react";
import '../CSS/Style_Login.css';
function Main() {

    return(
<div className="Main-container">
    <div className="Main-container1">
        <div className="Main-box1">
            <div className="Main-font">MBTISOUR</div>
        </div>
        <div className="Main-box-font2">"인간들은 제각각 다른 성격을 가지고 있습니다."</div>
    </div>
    <div className="Main-container2">
        <div className="Main-box2">
        <div className="Main-box2-font1">?</div>
        <div className="Main-box2-font2">전부다 같을 수는 없지만</div>
        <div className="Main=box2-font3">성격이 잘 맞는다면 좋은 친구가 될 수 있죠!</div>
    </div>
    </div>
    <Link to="/login"><button className="Main-box-button2">START</button></Link>
</div>

    );
    
}
export default Main;