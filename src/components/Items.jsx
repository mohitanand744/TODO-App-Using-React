import Button from "./Button";

export default function Items({ items, fun }) {
  return (
    <>
      <div className="items-container">
        {items.map((item, index) => (
          <div key={index} className="item">
            <div className="details">
              <p>{item.title}</p>
              <p>DATE: {item.date}</p>
              <p>TIME: {item.time}</p>
            </div>
            <Button txt="Delete" color="btn red" fun={fun} index={index} />
          </div>
        ))}
      </div>
    </>
  );
}
