import { NavLink } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="row justify-between align-center">
            <h3>Note App</h3>

            <nav>
                <NavLink to="/">Home</NavLink>
                {props.state.user ? (
                    <NavLink to="/dashboard">Dashboard</NavLink>
                ) : (
                    <NavLink to="/auth">Login / Register</NavLink>
                )}
            </nav>
        </header>
    )
}