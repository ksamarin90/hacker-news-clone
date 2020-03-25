export default function Login() {
    const html = document.querySelector('html');
    html.innerHTML = 
        `<body class="login-page">
            <b>Login</b>
            <br>
            <br>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>username:</td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                        <tr>
                            <td>password:</td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <button>login</button>
            </form>
            <br>
            <a href="#" >Forgot you password?</a>
            <br>
            <br>
            <b>Create Account</b>
            <br>
            <br>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>username:</td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                        <tr>
                            <td>password:</td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <button>create account</button>
            </form>
            <br>
        </body>`
}