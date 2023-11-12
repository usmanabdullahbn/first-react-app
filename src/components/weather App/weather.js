<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBInput,
} from "mdb-react-ui-kit";

const WeatherApp = () => {
  // state are Here
  const [areaName, setareaName] = useState("");
  const [temp, settemp] = useState("");
  const [feelsLike, setfeelsLike] = useState("");
  const [weatherCondition, setweatherCondition] = useState("");
  // const [weatherIcon, setweatherIcon] = useState("");
  const [input, setinput] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [apiCallSucess, setapiCallSucess] = useState(false);

  const weatherHandler = () => {
    let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=06c3882403ab0d2583d6dbb45339c5cb`;
    fetch(apiCall)
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);

        let name = data.name;
        let temperature = data.main.temp;
        let feels = data.main.feels_like;
        let condition = data.weather[0].main;
        // let icon = data.weather[0].icon;

        setapiCallSucess(true);

        setareaName(name);
        settemp(temperature);
        setfeelsLike(feels);
        setweatherCondition(condition);
        // setweatherIcon(icon);
        // console.log(temperature, name);
        axios
          .get(
            `https://api.unsplash.com/photos/random?query=${condition}&client_id=eNLr8GoNztorjQy3Hn319e4VO1GqQwV_bDgz_6GFQOU`
          )
          .then((response) => {
            setBackgroundImage(response.data.urls.regular);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        setareaName("City Not Found");
        settemp("");
        setBackgroundImage("");
        setapiCallSucess(false);
        console.log(err);
      });
  };

  const summitHandler = (keyboard) => {
    if (keyboard.key == "Enter") {
      weatherHandler();
      setinput("");
    }
  };

  return (
    <>
      {/* <input
        type="text"
        placeholder="choose a city"
        onChange={(e) => {
          setinput(e.target.value);
        }}
        onKeyPress={(e) => summitHandler(e)}
        autoFocus
        value={input}
      /> */}

      <div
        style={{
          backgroundColor: "#F5F6F7",
          // width: "100vw",
          // height: "100%"
        }}
      >
        <div
          style={{
            width: "30%",
            margin: "auto",
            paddingTop: "10px",
          }}
        >
          <MDBInput
            type="text"
            label="choose a city"
            onChange={(e) => {
              setinput(e.target.value);
            }}
            onKeyPress={(e) => summitHandler(e)}
            autoFocus
            value={input}
            id="form1"
            style={{
              backgroundColor: "white",
            }}
          />
        </div>

        {apiCallSucess ? (
          <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
            <MDBContainer className="h-100">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol md="10" lg="8" xl="6">
                  <MDBCard
                    className="bg-dark text-white"
                    style={{ borderRadius: "40px" }}
                  >
                    <div className="bg-image" style={{ borderRadius: "35px" }}>
                      <MDBCardImage
                        src={backgroundImage}
                        className="card-img"
                        alt="weather"
                      />
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                      ></div>
                    </div>
                    <div className="card-img-overlay text-dark p-5">
                      <MDBTypography tag="h4" className="mb-0">
                        {areaName}
                      </MDBTypography>
                      <p className="display-2 my-3">{temp}°C</p>
                      <p className="mb-2">
                        Feels Like: <strong>{feelsLike}</strong>
                      </p>
                      <MDBTypography tag="h5">{weatherCondition}</MDBTypography>
                    </div>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        ) : (
          <MDBContainer className="h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <h1>No data</h1>
            </MDBRow>
          </MDBContainer>
        )}
      </div>
      {/*
      <h1>{areaName} </h1>
      {temp != "" ? <h3>{temp} &#x2103;</h3> : null}
      {weatherCondition && <h6>{weatherCondition}</h6>}
      {weatherIcon && (
        <img
          src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
          alt="Weather Icon"
        />
      )}
      {backgroundImage && <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
      
      </div>}
       */}
    </>
  );
};

export default WeatherApp;
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBInput,
} from "mdb-react-ui-kit";

const WeatherApp = () => {
  // state are Here
  const [areaName, setareaName] = useState("");
  const [temp, settemp] = useState("");
  const [feelsLike, setfeelsLike] = useState("");
  const [weatherCondition, setweatherCondition] = useState("");
  // const [weatherIcon, setweatherIcon] = useState("");
  const [input, setinput] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [apiCallSucess, setapiCallSucess] = useState(false);

  const weatherHandler = () => {
    let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=06c3882403ab0d2583d6dbb45339c5cb`;
    fetch(apiCall)
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);

        let name = data.name;
        let temperature = data.main.temp;
        let feels = data.main.feels_like;
        let condition = data.weather[0].main;
        // let icon = data.weather[0].icon;

        setapiCallSucess(true);

        setareaName(name);
        settemp(temperature);
        setfeelsLike(feels);
        setweatherCondition(condition);
        // setweatherIcon(icon);
        // console.log(temperature, name);
        axios
          .get(
            `https://api.unsplash.com/photos/random?query=${condition}&client_id=eNLr8GoNztorjQy3Hn319e4VO1GqQwV_bDgz_6GFQOU`
          )
          .then((response) => {
            setBackgroundImage(response.data.urls.regular);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        setareaName("City Not Found");
        settemp("");
        setBackgroundImage("");
        setapiCallSucess(false);
        console.log(err);
      });
  };

  const summitHandler = (keyboard) => {
    if (keyboard.key == "Enter") {
      weatherHandler();
      setinput("");
    }
  };

  return (
    <>
      {/* <input
        type="text"
        placeholder="choose a city"
        onChange={(e) => {
          setinput(e.target.value);
        }}
        onKeyPress={(e) => summitHandler(e)}
        autoFocus
        value={input}
      /> */}

      <div
        style={{
          backgroundColor: "#F5F6F7",
          // width: "100vw",
          // height: "100%"
        }}
      >
        <div
          style={{
            width: "30%",
            margin: "auto",
            paddingTop: "10px",
          }}
        >
          <MDBInput
            type="text"
            label="choose a city"
            onChange={(e) => {
              setinput(e.target.value);
            }}
            onKeyPress={(e) => summitHandler(e)}
            autoFocus
            value={input}
            id="form1"
            style={{
              backgroundColor: "white",
            }}
          />
        </div>

        {apiCallSucess ? (
          <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
            <MDBContainer className="h-100">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol md="10" lg="8" xl="6">
                  <MDBCard
                    className="bg-dark text-white"
                    style={{ borderRadius: "40px" }}
                  >
                    <div className="bg-image" style={{ borderRadius: "35px" }}>
                      <MDBCardImage
                        src={backgroundImage}
                        className="card-img"
                        alt="weather"
                      />
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                      ></div>
                    </div>
                    <div className="card-img-overlay text-dark p-5">
                      <MDBTypography tag="h4" className="mb-0">
                        {areaName}
                      </MDBTypography>
                      <p className="display-2 my-3">{temp}°C</p>
                      <p className="mb-2">
                        Feels Like: <strong>{feelsLike}</strong>
                      </p>
                      <MDBTypography tag="h5">{weatherCondition}</MDBTypography>
                    </div>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        ) : (
          <MDBContainer className="h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <h1>No data</h1>
            </MDBRow>
          </MDBContainer>
        )}
      </div>
      {/*
      <h1>{areaName} </h1>
      {temp != "" ? <h3>{temp} &#x2103;</h3> : null}
      {weatherCondition && <h6>{weatherCondition}</h6>}
      {weatherIcon && (
        <img
          src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
          alt="Weather Icon"
        />
      )}
      {backgroundImage && <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
      
      </div>}
       */}
    </>
  );
};

export default WeatherApp;
>>>>>>> 118e9098287fac407b5b8180e046e848df28af51
