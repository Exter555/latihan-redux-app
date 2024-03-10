import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./features/Add";
function App() {
  const insert = useSelector((state) => state.add.cart);
  const dispatch = useDispatch();
  const [kirim, setKirim] = useState("");

  const handleClick = () => {
    const same = insert.filter((m) => m === kirim);
    if (kirim.trim() === "") {
      return;
    }
    if (same.length >= 1) {
      alert("same value  can't insert new value");
    } else {
      dispatch(addData(kirim));
      setKirim("");
    }
  };
  const key = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleChange = (e) => {
    const data = e.target.value;
    setKirim(data);
  };
  return (
    <>
      <input
        type="text"
        onKeyDown={(e) => key(e)}
        onChange={(e) => handleChange(e)}
        value={kirim}
      />
      <button onClick={handleClick}>addData</button>
      <ul>
        {insert.length === 0 ? "" : insert.map((m) => <li key={m}>{m}</li>)}
      </ul>
    </>
  );
}

export default App;
