import { useContext } from "react";
import Button from "./Button";
import { ListDataContext } from "./../contexts/listDataContext";

export default function Items() {
  const { listData } = useContext(ListDataContext);

  return (
    <>
      <div className="items-container">
        {listData.map((item, index) => (
          <div key={index} className="item">
            <div className="details">
              <p>{item.title}</p>
              <p>DATE: {item.date}</p>
              <p>TIME: {item.time}</p>
            </div>
            <div className="btn-container">
              <Button txt="Delete" color="btn red" index={index} />
              <Button
                txt=""
                color={`btn done ${item.taskComplete ? "completed" : ""}`}
                index={index}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
