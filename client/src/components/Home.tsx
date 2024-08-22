import { useState } from "react";

function Home() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>Count: {count}</button>
        </div>
    )
}

export default Home;