import React, { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import '../../Settings/settings.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };

    return (
        <div className="Tabs">
            {/* Tab nav */}
            <ul className="nav">
                <li key={"tab1"} className={activeTab === "tab1" ? "activeTab" : ""} onClick={handleTab1}>New Project</li>
                <li key={"tab2"} className={activeTab === "tab2" ? "activeTab" : ""} onClick={handleTab2}>Modify Old Project</li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
        </div>
    );
};
export default Tabs;