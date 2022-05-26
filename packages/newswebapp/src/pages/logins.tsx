import React, { useCallback, useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isSignup, setIsSignup] = useState(false);

  const attemptLogin = useCallback(() => {
    const data = {
      email,
      password,
    };
    fetch("http://localhost:3000/login", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("user login?", res);
    });
  }, [email, password]);

  const attemptSignup = useCallback(() => {
    const data = {
      email,
      password,
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("user signup?", res);
    });
  }, [email, password]);

  return (
    <div>
      <h1>{!isSignup ? "Login" : "Signup"} Here</h1>
      <p>
        Email:
        <input
          type="email"
          name="title"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        password:
        <input
          type="password"
          name="body"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      {!isSignup && <button onClick={attemptLogin}>Login</button>}
      {isSignup && <button onClick={attemptSignup}>Signup</button>}
      <br />
      <br />
      <button onClick={() => setIsSignup(!isSignup)}>
        Go to {isSignup ? "Login" : "Signup"}
      </button>

      <p>SHHH Secrect account dont look. user: qwerty@gmail.com pw: qwerp</p>
    </div>
  );
}

export default LoginPage;
