import { useEffect } from "react";

function App() {

    useEffect(() => {
        fetch("/api/test")
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, []);

    return (
        <>
            <h1>MERN App</h1>
        </>
    );
}

export default App;