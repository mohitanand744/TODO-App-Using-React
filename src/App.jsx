import { useState, useRef } from "react";
import Button from "./components/Button";
import Items from "./components/Items";
import Input from "./components/Input";

function App() {
  let newListData = useRef("");
  let newDateData = useRef("");
  let newTimeData = useRef("");
  let [ErrMsg, setErrMsg] = useState("");
  let [listData, setListData] = useState([]);

  const addData = (e, txt, index) => {
    if (txt === "ADD") {
      if (!newListData.current.value) {
        return setErrMsg("Inter Your Task");
      } else if (!newDateData.current.value) {
        return setErrMsg("Inter Your Date");
      } else if (!newTimeData.current.value) {
        return setErrMsg("Inter Your Time");
      } else {
        setErrMsg("");
        let ListData = newListData.current.value;
        let NewDate = newDateData.current.value;
        let NewTime = newTimeData.current.value;

        setListData((listData) => [
          ...listData,
          {
            title: ListData,
            date: NewDate,
            time: NewTime,
          },
        ]);

        newListData.current.value = "";
        newDateData.current.value = "";
        newTimeData.current.value = "";
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
      <center className="welcome">🕓 Manage work and time</center>
      <div className="maincontainer">
        <div className="inputContainer">
          <Input type="text" refData={newListData} />
          <Input type="Date" refData={newDateData} />
          <Input type="Time" refData={newTimeData} />
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
