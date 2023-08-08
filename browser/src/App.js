import { useEffect, useState } from "react";

// Components
import Loading from "./components/Loading";

// Pages
import AuthForm from "./pages/AuthForm";
import Header from "./components/Header";

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
            <Header />

            {state.loading && <Loading />}
        </>
    );
}

export default App;