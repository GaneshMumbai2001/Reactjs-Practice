import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("The name you entered was: " + name);
    }

    return (
        <div>
            <p>{name}</p>
            <form onSubmit={handleSubmit}>
                <label>Enter Your Name:-</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="submit" />
            </form>
            <h1>{name}</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <MyForm/> 
);
