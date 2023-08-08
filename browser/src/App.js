import { useEffect, useState } from "react";

import AuthForm from "./pages/AuthForm";

function App() {
    const [appData, setAppData] = useState({

    })
    // useEffect(() => {
    //     fetch("/api/test")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, []);

    return (
        <>
            <h1>Note App</h1>

            <AuthForm />
        </>
    );
}

export default App;