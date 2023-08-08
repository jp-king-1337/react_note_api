function AuthForm(props) {
    return (
        <>
        <h1>Auth Form</h1>
        {props.name}
        {props.children}
        </>
    )
}

export default AuthForm;