import { useState } from "react";
import Button from "./components/Button";
import Items from "./components/Items";
import Input from "./components/Input";

function App() {
  let [newListData, setNewListData] = useState("");
  let [newDateData, setNewDateData] = useState("");
  let [newTimeData, setNewTimeData] = useState("");
  let [ErrMsg, setErrMsg] = useState("");
  let [listData, setListData] = useState([]);

  const addData = (txt, index) => {
    if (txt === "ADD") {
      if (!newListData.trim()) {
        return setErrMsg("Inter Your Task");
      } else if (!newDateData) {
        return setErrMsg("Inter Your Date");
      } else if (!newTimeData) {
        return setErrMsg("Inter Your Time");
      } else {
        setErrMsg("");
        let readyToAddData = [
          ...listData,
          { title: newListData, date: newDateData, time: newTimeData },
        ];
        setListData(readyToAddData);

        setNewDateData("");
        setNewListData("");
        setNewTimeData("");
      }
    } else if (txt === "Delete") {
      let updatedData = listData.filter((listItem, i) => {
        return i !== index;
      });

      setListData(updatedData);
    } else if (txt === "Clear") {
      setListData([]);
    }
  };

  return (
    <>
      <center className="welcome">🕓 Manage work and time 🕓</center>
      <div className="maincontainer">
        <div className="inputContainer">
          <Input type="text" value={newListData} fun={setNewListData} />
          <Input type="Date" value={newDateData} fun={setNewDateData} />
          <Input type="Time" value={newTimeData} fun={setNewTimeData} />
          {listData.length > 0 && (
            <Button txt="Clear" color="btn red bottom" fun={addData} />
          )}
          <Button txt="ADD" color="btn" fun={addData} />
        </div>

        {ErrMsg && <h2 className="Err">{ErrMsg}</h2>}

        <Items items={listData} fun={addData} />

        {listData.length === 0 && <center>Update Your TODO ✅</center>}
      </div>
    </>
  );
}

export default App;
