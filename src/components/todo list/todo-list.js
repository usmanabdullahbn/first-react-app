<<<<<<< HEAD
// import React, { useState } from "react";

// const TodoList = () => {
//   // All States Here:
//   const [inputValue, setInputValue] = useState("");
//   const [data, setdata] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [previvousData, setprevivousData] = useState(null);

//   // Added Item Handler
//   const addItemHandler = () => {
//     const clonedata = data.slice(0);
//     clonedata.push(inputValue);
//     setdata(clonedata);
//     setInputValue("");
//   };

//   // Delete Item Handler
//   const deleteItemHandler = (item, key) => {
//     const cloneData = data.slice(0);
//     cloneData.splice(key, 1);
//     setdata(cloneData);
//   };

//   // Edit Item Handler
//   const editItemHandler = (item, key) => {
//     setInputValue(data);
//     setIsEdit(true);

//     const obj = {
//       Item : data,
//       Index : key

//     }
//     setprevivousData(obj)
//   };

//   // Update Item Handler
//   const updateItemHandler = () => {
//     const cloneData = data.slice(0);
//     cloneData.splice(previvousData.Index, 1, inputValue);
//     setdata(cloneData);
//     setInputValue("");
//     setIsEdit(false)
//     setprevivousData(null)
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Write down something..."
//         value={inputValue}
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//       />
//       {isEdit ? (
//         <button onClick={updateItemHandler}>Update Item</button>
//       ) : (
//         <>
//         <button onClick={addItemHandler}>Add Item</button>
//         <button onClick={() => setdata([])}>Delete All</button>
//         </>
//       )}

//       <ul>
//         {data && data.length > 0
//           ? data.map((e, i) => {
//               return (
//                 <li key={i}>
//                   {e}
//                   <button onClick={() => deleteItemHandler(e, i)}>
//                     Delete Item
//                   </button>
//                   <button onClick={() => editItemHandler(e, i)}>
//                     Edit Item
//                   </button>
//                 </li>
//               )
//             })
//           : "No Data"}
//       </ul>
//     </>
//   );
// };

// export default TodoList;

import React, { useState } from "react";
import "./style.css";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";

const TodoList = () => {
  // All States Here:
  const [inputValue, setInputValue] = useState("");
  const [data, setdata] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [previvousData, setprevivousData] = useState(null);

  const [ text,setText] = useState("No Data")
  // Added Item Handler
  const addItemHandler = () => {
    if (inputValue.trim() !== "") {
    const clonedata = data.slice(0);
    clonedata.push(inputValue);
    setdata(clonedata);
    setInputValue("");
    }
    else {
      setText("Plesa fill input feild")

    }
  };
  // Delete Item Handler
  const deleteItemHandler = (items, key) => {
    const cloneData = data.slice(0);
    cloneData.splice(key, 1);
    setdata(cloneData);
  };

  // Edit Item Handler
  const editItemHandler = (data, key) => {
    setInputValue(data);
    setIsEdit(true);

    const obj = {
      Item: data,
      Index: key,
    };
    setprevivousData(obj);
  };

  // Update Item Handler
  const updateItemHandler = () => {
    const cloneData = data.slice(0);
    cloneData.splice(previvousData.Index, 1, inputValue);
    setdata(cloneData);
    setInputValue("");
    setIsEdit(false);
    setprevivousData(null);
  };

  // Submmit handler
  const summitHandler = (keyboard) => {
    if (keyboard.key == "Enter") {
      addItemHandler();
    }
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard
            id="list1"
            style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
          >
            <MDBCardBody className="py-4 px-4 px-md-5">
              <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <MDBIcon fas icon="check-square" className="me-1" />
                <u>My Todo-s</u>
              </p>
              <div className="pb-2">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex flex-row align-items-center">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Add new..."
                        autoFocus
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                        }}
                        onKeyPress={(e) => summitHandler(e)}
                      />
                      <MDBTooltip
                        tag="a"
                        wrapperProps={{ href: "#!" }}
                        title="Set due date"
                      ></MDBTooltip>
                      <div>
                        {isEdit ? (
                          <MDBBtn onClick={updateItemHandler}>
                            Update Item
                          </MDBBtn>
                        ) : (
                          <MDBBtn onClick={addItemHandler}>Add Item</MDBBtn>
                        )}
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <hr className="my-4" />

              <MDBListGroup>
                {data && data.length > 0 ? (
                  data.map((e, i) => {
                    return (
                      <MDBListGroupItem key={i}>
                        <p>{e}</p>
                        <div className="d-flex flex-row justify-content-end">
                          <MDBBtn
                            onClick={() => editItemHandler(e, i)}
                            color="info"
                          >
                           <MDBIcon
                        fas
                        icon="pencil-alt"
                        color="white"
                      />
                          </MDBBtn>
                          <MDBBtn
                            onClick={() => deleteItemHandler(e, i)}
                            color="danger"
                          >
                           <MDBIcon fas icon="trash-alt" color="white" />
                          </MDBBtn>
                        </div>
                      </MDBListGroupItem>
                    );
                  })
                ) : (
                  <MDBListGroupItem>{text}</MDBListGroupItem>
                )}
                {data && data.length > 0 ? (
                  <div align="center">
                    <MDBBtn onClick={() => setdata([])} id="del-btn">
                      Delete All
                    </MDBBtn>
                  </div>
                ) : null}
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TodoList;
=======
// import React, { useState } from "react";

// const TodoList = () => {
//   // All States Here:
//   const [inputValue, setInputValue] = useState("");
//   const [data, setdata] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [previvousData, setprevivousData] = useState(null);

//   // Added Item Handler
//   const addItemHandler = () => {
//     const clonedata = data.slice(0);
//     clonedata.push(inputValue);
//     setdata(clonedata);
//     setInputValue("");
//   };

//   // Delete Item Handler
//   const deleteItemHandler = (item, key) => {
//     const cloneData = data.slice(0);
//     cloneData.splice(key, 1);
//     setdata(cloneData);
//   };

//   // Edit Item Handler
//   const editItemHandler = (item, key) => {
//     setInputValue(data);
//     setIsEdit(true);

//     const obj = {
//       Item : data,
//       Index : key

//     }
//     setprevivousData(obj)
//   };

//   // Update Item Handler
//   const updateItemHandler = () => {
//     const cloneData = data.slice(0);
//     cloneData.splice(previvousData.Index, 1, inputValue);
//     setdata(cloneData);
//     setInputValue("");
//     setIsEdit(false)
//     setprevivousData(null)
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Write down something..."
//         value={inputValue}
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//       />
//       {isEdit ? (
//         <button onClick={updateItemHandler}>Update Item</button>
//       ) : (
//         <>
//         <button onClick={addItemHandler}>Add Item</button>
//         <button onClick={() => setdata([])}>Delete All</button>
//         </>
//       )}

//       <ul>
//         {data && data.length > 0
//           ? data.map((e, i) => {
//               return (
//                 <li key={i}>
//                   {e}
//                   <button onClick={() => deleteItemHandler(e, i)}>
//                     Delete Item
//                   </button>
//                   <button onClick={() => editItemHandler(e, i)}>
//                     Edit Item
//                   </button>
//                 </li>
//               )
//             })
//           : "No Data"}
//       </ul>
//     </>
//   );
// };

// export default TodoList;

import React, { useState } from "react";
import "./style.css";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";

const TodoList = () => {
  // All States Here:
  const [inputValue, setInputValue] = useState("");
  const [data, setdata] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [previvousData, setprevivousData] = useState(null);

  const [ text,setText] = useState("No Data")
  // Added Item Handler
  const addItemHandler = () => {
    if (inputValue.trim() !== "") {
    const clonedata = data.slice(0);
    clonedata.push(inputValue);
    setdata(clonedata);
    setInputValue("");
    }
    else {
      setText("Plesa fill input feild")

    }
  };
  // Delete Item Handler
  const deleteItemHandler = (items, key) => {
    const cloneData = data.slice(0);
    cloneData.splice(key, 1);
    setdata(cloneData);
  };

  // Edit Item Handler
  const editItemHandler = (data, key) => {
    setInputValue(data);
    setIsEdit(true);

    const obj = {
      Item: data,
      Index: key,
    };
    setprevivousData(obj);
  };

  // Update Item Handler
  const updateItemHandler = () => {
    const cloneData = data.slice(0);
    cloneData.splice(previvousData.Index, 1, inputValue);
    setdata(cloneData);
    setInputValue("");
    setIsEdit(false);
    setprevivousData(null);
  };

  // Submmit handler
  const summitHandler = (keyboard) => {
    if (keyboard.key == "Enter") {
      addItemHandler();
    }
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard
            id="list1"
            style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
          >
            <MDBCardBody className="py-4 px-4 px-md-5">
              <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <MDBIcon fas icon="check-square" className="me-1" />
                <u>My Todo-s</u>
              </p>
              <div className="pb-2">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex flex-row align-items-center">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Add new..."
                        autoFocus
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                        }}
                        onKeyPress={(e) => summitHandler(e)}
                      />
                      <MDBTooltip
                        tag="a"
                        wrapperProps={{ href: "#!" }}
                        title="Set due date"
                      ></MDBTooltip>
                      <div>
                        {isEdit ? (
                          <MDBBtn onClick={updateItemHandler}>
                            Update Item
                          </MDBBtn>
                        ) : (
                          <MDBBtn onClick={addItemHandler}>Add Item</MDBBtn>
                        )}
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <hr className="my-4" />

              <MDBListGroup>
                {data && data.length > 0 ? (
                  data.map((e, i) => {
                    return (
                      <MDBListGroupItem key={i}>
                        <p>{e}</p>
                        <div className="d-flex flex-row justify-content-end">
                          <MDBBtn
                            onClick={() => editItemHandler(e, i)}
                            color="info"
                          >
                           <MDBIcon
                        fas
                        icon="pencil-alt"
                        color="white"
                      />
                          </MDBBtn>
                          <MDBBtn
                            onClick={() => deleteItemHandler(e, i)}
                            color="danger"
                          >
                           <MDBIcon fas icon="trash-alt" color="white" />
                          </MDBBtn>
                        </div>
                      </MDBListGroupItem>
                    );
                  })
                ) : (
                  <MDBListGroupItem>{text}</MDBListGroupItem>
                )}
                {data && data.length > 0 ? (
                  <div align="center">
                    <MDBBtn onClick={() => setdata([])} id="del-btn">
                      Delete All
                    </MDBBtn>
                  </div>
                ) : null}
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TodoList;
>>>>>>> 118e9098287fac407b5b8180e046e848df28af51
