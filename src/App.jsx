import { useState, useRef, useReducer } from "react";
import Button from "./components/Button";
import Items from "./components/Items";
import Input from "./components/Input";
import { ListDataContext } from "./contexts/listDataContext";

// pure Function
let reducerFun = (currState, action) => {
  let newData = currState;

  if (action.type === "ADD_DATA") {
    newData = [
      ...currState,
      {
        title: action.payload.ListData,
        date: action.payload.NewDate,
        time: action.payload.NewTime,
      },
    ];
  } else if (action.type === "DELETE_DATA") {
    let filterData = currState.filter((data, i) => i !== action.payload.index);
    newData = filterData;
  } else if (action.type === "CLEAR_DATA") {
    newData = [];
  }

  return newData;
};

function App() {
  let newListData = useRef("");
  let newDateData = useRef("");
  let newTimeData = useRef("");

  let [ErrMsg, setErrMsg] = useState("");
  let [listData, dispatchListData] = useReducer(reducerFun, []);

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

        let actionAddData = {
          type: "ADD_DATA",
          payload: {
            ListData,
            NewDate,
            NewTime,
          },
        };

        dispatchListData(actionAddData);
        newListData.current.value = "";
        newDateData.current.value = "";
        newTimeData.current.value = "";
      }
    } else if (txt === "Delete") {
      let actionDeleteData = {
        type: "DELETE_DATA",
        payload: {
          index,
        },
      };

      dispatchListData(actionDeleteData);
    } else if (txt === "Clear") {
      let actionClearData = {
        type: "CLEAR_DATA",
      };

      dispatchListData(actionClearData);
    }
  };

  return (
    <>
      <center className="welcome">🕓 Manage work and time</center>
      <div className="maincontainer">
        <ListDataContext.Provider
          value={{
            listData,
            fun: addData,
          }}
        >
          <div className="inputContainer">
            <Input type="text" refData={newListData} />
            <Input type="Date" refData={newDateData} />
            <Input type="Time" refData={newTimeData} />
            {listData.length > 0 && (
              <Button txt="Clear" color="btn red bottom" />
            )}
            <Button txt="ADD" color="btn" />
          </div>

          {ErrMsg && <h2 className="Err">{ErrMsg}</h2>}
          <Items />
        </ListDataContext.Provider>
        {listData.length === 0 && <center>Update Your TODO ✅</center>}
      </div>
    </>
  );
}

export default App;
