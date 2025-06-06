import { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [length, setLenght] = useState(8);
  const [char, setChar] = useState(false);
  const [number, setNumber] = useState();

  const useReference = useRef(null);

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(char) str+= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    if(number)str+= 12345678901234
    for (let index = 1; index < length; index++) {
      let element = Math.floor(Math.random()*str.length +1 )
      pass += str.charAt(element)
    }

    setPassword(pass)
  },[length,char,number,setPassword])

  useEffect(()=>{
    generatePassword()  
  },[length,char,number,generatePassword])

  const copyToClipBoard =useCallback(()=>{
    useReference.current?.select() // to show the selected item
    useReference.current?.setSelectionRange(0,10) // for select the range
    window.navigator.clipboard.writeText(password) // copy to the clipboard

  },[password])

  return (
    <div className="flex items-center justify-center text-white h-60">
      <div className="w-2xl h-auto bg-gray-700 rounded-2xl px-5 p-10 mt-20">
        <h1 className="text-3xl flex justify-center items-center">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-5">
          <input
            ref={useReference}
            type="text"
            className="outline-none  w-full py-1 px-2 bg-white text-black placeholder-gray-600"
            placeholder="password"
            value={password}
            readOnly
          />
          <button className="bg-blue-600 px-2 py-3 cursor-pointer hover:bg-blue-700 active:bg-blue-900"
          onClick={copyToClipBoard}
          >Copy</button>
        </div>
        <div className="flex flex-row gap-x-1 items-center">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLenght(e.target.value)}
          />
          <label className="w-22">Lenght: {length}</label>

          <input
            type="checkbox"
            value={char}
            defaultChecked={char}
            onChange={() => {
              setChar((pre) => !pre);
            }}
          />

          <label>Add Character</label>

          <input
            type="checkbox"
            value={number}
            defaultChecked={number}
            onChange={() => {
              setNumber((pre) => !pre);
            }}
          />
          <label>Add Number</label>
        </div>
      </div>
    </div>
  );
}
