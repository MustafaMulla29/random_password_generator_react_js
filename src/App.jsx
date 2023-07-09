import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passLen, setPassLen] = useState(10);
  const [copied, setCopied] = useState(false);

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "1234567890";
  const symbolChars = "`!~@#$%^&*(_)+/?";

  const handleGeneratePass = () => {
    let characters = "";
    if (uppercase) {
      characters = characters + uppercaseLetters;
    }
    if (lowercase) {
      characters = characters + lowercaseLetters;
    }
    if (numbers) {
      characters = characters + numberChars;
    }
    if (symbols) {
      characters = characters + symbolChars;
    }

    setPassword(updatePass(characters));
    // return password;
  };

  const updatePass = (charsList) => {
    let pass = "";
    const charsListLength = charsList.length;
    for (let i = 0; i < passLen; i++) {
      const index = Math.round(Math.random() * charsListLength);
      pass = pass + charsList.charAt(index);
    }
    return pass;
  };

  const handleCopy = () => {
    setCopied((prevCopy) => !prevCopy);
    navigator.clipboard.writeText(password);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={password}
            onChange={(e) => e.target.value}
          />
          <button onClick={handleCopy}>
            {copied ? "Copied!" : "Copy Text!"}
          </button>
        </div>
        <div>
          <div>
            <label htmlFor="">Password length</label>
            <input
              type="number"
              value={passLen}
              onChange={(e) => setPassLen(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Include Uppercase letters</label>
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => {
                // setUppercase((prevCase) => !prevCase);
                setUppercase(e.target.checked);
              }}
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Include Lowercase letters</label>
            <input
              type="checkbox"
              name=""
              id=""
              checked={lowercase}
              onChange={(e) => {
                // setLowercase((prevLower) => !prevLower);
                setLowercase(e.target.checked);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Include Numbers</label>
            <input
              type="checkbox"
              name=""
              id=""
              checked={numbers}
              onChange={(e) => {
                // setNumbers((pervNum) => !pervNum)
                setNumbers(e.target.checked);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Include Symbols</label>
            <input
              type="checkbox"
              name=""
              id=""
              checked={symbols}
              onChange={(e) => {
                // setSymbols((prevSymbols) => !prevSymbols)
                setSymbols(e.target.checked);
              }}
            />
          </div>
        </div>
        <div>
          <button onClick={handleGeneratePass}>Generate password</button>
        </div>
      </div>
    </>
  );
}

export default App;
