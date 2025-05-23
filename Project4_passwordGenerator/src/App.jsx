import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [char, setChar] = useState(false);
  const [number, setNumber] = useState(false);
  const [length, setlength] = useState(8);

  // useRef
  const passwordRef = useRef(null); // for showing that user has select it

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += 12345676890;
    if (char) str += "!@#$%^&*()_{}";

    for (let i = 1; i <= length; i++) {
      let select = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(select);
    }
    setPassword(pass);
  }, [char, length, number, setPassword]);

  useEffect(() => {
    passwordGenerator(); //use for run the passwordGenerator
  }, [length, number, char, passwordGenerator]);

  const copyPassClip = useCallback(() => {
    passwordRef.current?.select(); // it help to select
    passwordRef.current?.setSelectionRange(0, 8); // help to range the selection
    window.navigator.clipboard.writeText(password); //  to get the pass copy
  }, [password]);

  return (
    <>
      <div className="flex flex-col items-center py-4 bg-amber-300 px-6">
        <h1 className="text-4xl text-center w-3xl">Password Generator</h1>
        <div className="py-4 bg-amber-300 px-6">
          <input
            type="text"
            placeholder="password"
            className="outline-2 py-2 px-2 w-3xs"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            onClick={copyPassClip}
            className="bg-amber-950 text-amber-100 px-2 py-2 cursor-pointer active:text-amber-300 outline-2 outline-black"
          >
            Copy
          </button>
          <div className="py-2 flex gap-1.5">
            <input
              defaultValue={length}
              type="range"
              className="cursor-pointer"
              min={8}
              max={100}
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length: {length}</label>
            <input
              type="checkbox"
              className=""
              defaultChecked={char}
              onChange={() => setChar((prev) => !prev)}
            />
            <label>Character</label>
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <label>Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
