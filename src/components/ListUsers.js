import React from "react";
import "./Users.css";

export const ListUsers = (data) => {
  const [format, setFormat] = React.useState(false);
  const changeFormat = () => {
    return format ? setFormat(false) : setFormat(true);
  } 
  return (
    <>
      <button className="button" onClick={changeFormat}>
        CHANGE FORMAT
      </button>
      <div>
        {format ? (
          <pre>{JSON.stringify(data.data, null, 1)}</pre>
        ) : (
          data.data.map((item, key) => (
            <>
              <div key={key} className="users">
                <div>Id: {item.id}</div>
                <div>Name: {item.name}</div>
                <div>Username: {item.username}</div>
                <div>Email: {item.email}</div>
                <div>
                  Address:{" "}
                  {item.address.street +
                    " " +
                    item.address.suite +
                    " " +
                    item.address.city}
                </div>
                <div>Phone: {item.phone}</div>
                <div>Website: {item.website}</div>
                <div>Company: {item.company.name}</div>
                <div>
                  Posts: <pre>{JSON.stringify(item.posts, null, 1)}</pre>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};
