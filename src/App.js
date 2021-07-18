import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Wrapper from "./components/Wrapper";

function App() {
    return(
        <div className= "App">
            <Wrapper>
                <Header />
                <Dashboard />
            </Wrapper>
            
        </div>
    );
}

export default App;