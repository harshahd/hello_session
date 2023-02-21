import Head from "next/head";
import { useState } from "react";

const Login=() => {
const [email,setEmail]=useState("");
const [pass,setPass]=useState("");

return(
<div>
<Head>
    <title>Login to the session</title>
</Head>
<h1>Login to session</h1>
<form>
    <div>
<label htmlFor="user">Enter your email</label>
<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} id="user"/>
</div>
<div>
<label htmlFor="password">Enter your password</label>
<input type="password " value={pass} onChange={(e) => setPass(e.target.value)} id="password" required/>
</div>
<button type="submit">Login</button>
</form>
</div>
);
};

export default Login;