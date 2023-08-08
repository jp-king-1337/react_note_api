import { useEffect, useState } from "react";

// components
import Loading from "./components/Loading";
import Header from "./components/Header";

// pages
import AuthForm from "./pages/AuthForm";

function App() {
    const [state, setState] = useState({
        user: null,
        notes: [],
        loading: false
    });

    // useEffect(() => {
    //   fetch("/api/test")
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //     })
    // }, []);

    return (
        <>
            <Header state={state}/>

            {state.loading && <Loading />}
        </>
    );
}

export default App;