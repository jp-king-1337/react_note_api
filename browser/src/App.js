import { useEffect, useState } from "react";

// Components
import Loading from "./components/Loading";

// Pages
import AuthForm from "./pages/AuthForm";

function App() {
    const [state, setState] = useState({
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

            {state.loading && <Loading />}
        </>
    );
}

export default App;