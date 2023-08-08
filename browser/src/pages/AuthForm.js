function AuthForm(props) {
    return (
        <>
            <h1 className="text-center">Log In</h1>
            <form>
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <button>Submit</button>
                <div className="toggle-wrap">
                    <label htmlFor="login">Login</label>
                    <input type="radio" id="login" value="login" />
                </div>
            </form>
        </>
    )
}

export default AuthForm;