import { useEffect, useState } from "react";

// Components
import Loading from "./components/Loading";

// Pages
import AuthForm from "./pages/AuthForm";

function App() {
    const [appData, setAppData] = useState({
        user: null,
        notes: [],
        loading: true
    });
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

            {appData.loading && <Loading />}
        </>
    );
}

export default App;