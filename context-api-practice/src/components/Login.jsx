import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setValid(false)
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5"><input
          className="p-2 text-gray-900 font-semibold"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setValid(()=>{if(username!==""&&password!=="") setValid(true)});
          }}
        />
        <input
          className="p-2 text-gray-900 font-semibold"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setValid(()=>{if(username!==""&&password!=="") setValid(true)});
          }}
        /></div>
        <button
        className={`px-5 py-2 rounded-lg bg-gray-500 text-gray-100 ${valid?`cursor-pointer`:`cursor-not-allowed`}`}
          onClick={handleClick}
          disabled={!valid}
          >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
