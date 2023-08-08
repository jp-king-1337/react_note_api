import { useEffect } from "react";

import AuthForm from "./pages/AuthForm";

function App() {

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

            <AuthForm name={"name"}>
                <h3>Header Element</h3>
            </AuthForm>
        </>
    );
}

export default App;