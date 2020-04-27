import React, { useState, useEffect, Fragment } from "react";

import { getUsers } from "../services";

import Page from "./../components/Page/index";

import { Counter } from "./../features/counter/Counter";

import FormLogin from "./../components/FormLogin/index";

import SwipperContainer from "./../components/SwipperContainer/index";
import DevicePreview from "./../components/DevicePreview/index";

import bankayaLogo from "./../assets/demo/bancaya_logo.svg";
import deviceDemoPreview from "./../assets/demo/device_demo_1.png";

function Home() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => {
      setUsers(data.users);
    });
  }, []);

  const copy = {
    title: "Estrena tu celular a crédito",
    text: "Obtén un préstamo personal",
    dissclaimer: "No necesitas historial crediticio, ni cuenta bancaria*",
    ctaPhone: "Quiero un celular",
    ctaCredit: "Quiero un crédito personal",
    ctaDissclaimer: "* Sujeto a aprobación crediticia",
    ctaSimulator: "Simulador de financiamiento",
  };

  const devices = [
    {
      id: 0,
      name: "Samsung Galaxy A20",
      thumbnail: deviceDemoPreview,
      promoType: "Enganche desde",
      promoQty: "$820",
      availableDate: "Hoy mismo",
    },
    {
      id: 1,
      name: "Samsung Galaxy A21",
      thumbnail: deviceDemoPreview,
      promoType: "Enganche desde",
      promoQty: "$821",
      availableDate: "Hoy mismo",
    },
    {
      id: 2,
      name: "Samsung Galaxy A22",
      thumbnail: deviceDemoPreview,
      promoType: "Enganche desde",
      promoQty: "$822",
      availableDate: "Hoy mismo",
    },
  ];

  const pricePlan = {
    price: {
      title: "Precio de tu Smartphone",
      value: 5000,
      min: 0,
      max: 7000,
      userSelect: false,
      decorator: ["$", ""],
    },
    time: {
      title: "Plazo",
      value: 9,
      min: 3,
      max: 12,
      userSelect: true,
      decorator: ["", " meses"],
    },
    deposit: {
      title: "Enganche",
      value: 50,
      min: 20,
      max: 70,
      userSelect: true,
      decorator: ["", "%"],
    },
  };

  return (
    <Fragment>
      {/* Page 1 */}

      <Page>
        <div className="Page__Body">
          <div className="Wrapper">
            <FormLogin />
          </div>
        </div>
      </Page>

      <Page>
        <div className="Page__Header Page__Header--Logo">
          <img src={bankayaLogo} alt="Bankaya" />
        </div>

        <div className="Page__Body Page__Body--rounded-bottom">
          <div className="Wrapper">
            <h1 className="Hero__Title">{copy.title}</h1>
            <p className="Hero__Text">{copy.text}</p>
            <p className="Hero__Dissclaimer">{copy.dissclaimer}</p>
          </div>

          <div className="Wrapper Wrapper--slim Wrapper--hidden">
            <SwipperContainer>
              {devices.map((device) => (
                <DevicePreview
                  device={device}
                  type="big"
                  key={`device-big-${device.id}`}
                />
              ))}
            </SwipperContainer>
          </div>

          <div className="Wrapper">
            {/* NavLinks */}
            <div className="ContainerButtons">
              <button className="Button Button--white">{copy.ctaPhone}</button>
              <button className="Button Button--orange">
                {copy.ctaCredit}
              </button>
              <span className="Dissclaimer Dissclaimer--small">
                {copy.ctaDissclaimer}
              </span>
            </div>
          </div>
        </div>

        <div className="Page__Footer Page__Footer--Arrow">
          {/* NavLinks */}
          {copy.ctaSimulator}
        </div>
      </Page>

      {/* Page 2 */}

      <Page>
        <div className="Page__Header Page__Header Page__Header--arrow">
          {/* NavLinks */}
        </div>

        <div className="Page__Body">
          <div className="Wrapper Wrapper--hidden"></div>

          <div className="Wrapper">
            <div className="DataTable">
              {Object.keys(pricePlan).map((section) => (
                <div
                  className="DataTable__Row DataTable__Row--slider"
                  key={`pricePlan-${section}`}
                >
                  <span className="DataTable__Row_Title">
                    {pricePlan[section].title}
                  </span>
                  <span className="DataTable__Row_Value">
                    {pricePlan[section].decorator[0]}
                    {pricePlan[section].value}
                    {pricePlan[section].decorator[1]}
                  </span>
                  <div className="DataTable__Row_Slider">
                    {pricePlan[section].value}
                    {pricePlan[section].decorator[0] +
                      pricePlan[section].min +
                      pricePlan[section].decorator[1]}
                    {pricePlan[section].decorator[0] +
                      pricePlan[section].max +
                      pricePlan[section].decorator[1]}
                    {pricePlan[section].userSelect}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="Wrapper">
            <div className="DataTable">
              <div className="DataTable__Row">
                <span className="DataTable__Row_Title">Monto financiado</span>{" "}
                <span className="DataTable__Row_Value">
                  {pricePlan["price"].value}
                </span>
              </div>

              <div className="DataTable__Row">
                <span className="DataTable__Row_Title">Pago semanal</span>
                <span className="DataTable__Row_Value">
                  {(pricePlan["price"].value *
                    ((100 - pricePlan["deposit"].value) / 100)) /
                    Math.floor(pricePlan["time"].value * 4.35)}
                </span>
              </div>

              <div className="DataTable__Row">
                <span className="DataTable__Row_Title">Plazo</span>{" "}
                <span className="DataTable__Row_Value">
                  {Math.ceil(pricePlan["time"].value * 4.35)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* Page 3 */}

      <Page>
        <div className="Page__Header Page__Header--white">
          <div className="Page__Header__Controls"></div>
        </div>

        <div className="Page__Body">
          <div className="Wrapper">
            <h1 className="Hero__Title">{copy.title}</h1>
            <p className="Hero__Text">{copy.text}</p>
            <p className="Hero__Dissclaimer">{copy.dissclaimer}</p>
          </div>

          <div className="Wrapper"></div>
        </div>
      </Page>

      {/* Mirage JS Demo */}

      <Page>
        <div className="Page__Body">
          <div className="Wrapper">
            <p>Mirage JS Demo</p>
            <br />
            <ul data-testid="users">
              {users.map((user) => (
                <li key={user.id} data-testid={`user-${user.id}`}>
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Page>

      {/* Redux Demo */}

      <Page>
        <div className="Page__Body">
          <div className="Wrapper">
            <p>Redux Demo</p>
            <br />

            <Counter />

            <br />

            <span>
              <span>Learn </span>
              <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className="App-link"
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </span>
          </div>
        </div>
      </Page>
    </Fragment>
  );
}

export default Home;
