import React, { useState } from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import Gallery from "./Gallery/Gallery";

const Snapshort = () => {
  const [input, setInput] = useState("")
  const [userSearch, setUserSearch] = useState("wall")

  const submit = () => {
    // console.log(input)
    setUserSearch(input)
    setInput("")
  }

  const summitHandler = (keyboard) => {
    if (keyboard.key == "Enter") {
      submit()
    }
  };
  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Lobster, "Josefin Sans", Helvetica, Arial, sans-serif', fontStyle: "italic", fontSize: '64px', fontWeight: 700, lineHeight: 'normal', color: 'rgb(5, 28, 51)' }}>
        Snapshot
      </h1>

      <MDBCol
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="input-group md-form form-sm form-1 pl-0"
          style={{ width: "50%" }}
        >
          <input
            className="form-control py-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={input}
            style={{ marginRight: 0 }} // Set margin-right to 0 for the input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyPress={(e) => summitHandler(e)}
          />
          <div
            className="input-group-text purple lighten-3"
            id="basic-text1"
            style={{ backgroundColor: "rgb(63, 72, 80)" }}
            onClick={submit}
          >
            <MDBIcon
              className="text-white"
              icon="search"
              style={{ margin: 0 }}
            />
          </div>
        </div>
      </MDBCol>

      <Gallery search={userSearch} />
    </div>
  );
};

export default Snapshort;
