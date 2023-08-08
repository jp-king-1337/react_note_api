const styles = {
    toggleWrap: {
        marginTop: "15px"
    },
    label: {
        marginRight: "3px"
    },
    input: {
        marginRight: "10px"
    }
};

function AuthForm(props) {
    return (
        <>
            <h1 className="text-center">Log In</h1>
            <form>
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <button>Submit</button>
                <div className="toggle-wrap" styles={styles.toggleWrap}>
                    <label style={styles.label} htmlFor="login">Login</label>
                    <input style={styles.input} type="radio" id="login" value="login" checked={true} />
                    <label style={styles.label} htmlFor="register">Register</label>
                    <input style={styles.input} type="radio" id="register" value="register" checked={false} />
                </div>
            </form>
        </>
    )
}

export default AuthForm;