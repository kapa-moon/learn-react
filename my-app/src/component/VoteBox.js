import React, { useState, useEffect } from "react";

function VoteBox() {
    const [count, setCount] = useState(0);
    const voted = false;
    function Vote() {
        if (!this.voted) {
            setCount(count + 1);
            this.voted = !this.voted;
        } else {
            setCount(count - 1);
            this.voted = !this.voted;
        }
    }

    return (
        <div>
            <p>You clicked the button {count} times</p>
            <button onClick={Vote()}>Click me</button>
        </div>
    );

}

export default VoteBox;