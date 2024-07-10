import Button from "./Button";

export default function Items({ items, fun }) {
  return (
    <>
      <div className="items-container">
        {items.map((item, index) => (
          <div key={index} className="item">
            <p>{item.title}</p>
            <p>{item.date}</p>
            <p>{item.time}</p>
            <Button txt="Delete" color="btn red" fun={fun} index={index} />
          </div>
        ))}
      </div>
    </>
  );
}
