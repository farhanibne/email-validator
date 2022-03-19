import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="app">
      <div className="header">
        <h2>Email Validator</h2>
      </div>
      <div className="card">
        <label htmlFor="email" className="label">
   
        </label>
        <input
          id="email"
          className="input"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleOnChange}
        />
        <button onClick={emailValidation}>Check</button>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
