import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initalLightArr = [
    { id: 1, name: "Living Room", isOn: true },
    { id: 2, name: "Kitchen", isOn: true },
    { id: 3, name: "Bedroom", isOn: true },
    { id: 4, name: "Bathroom", isOn: true },
    { id: 5, name: "Garage", isOn: true },
    { id: 6, name: "Porch", isOn: true },
    { id: 7, name: "Garden", isOn: true },
    { id: 8, name: "Office", isOn: true },
  ];

  const [lightsArr, setLight] = useState(initalLightArr);

  const noTurnedOnLights = lightsArr.map((light) => {
    return light.isOn === true && 1;
  });

  const sumTurnedOnLights = noTurnedOnLights.reduce((a, b) => a + b);

  console.log(sumTurnedOnLights);

  console.log(noTurnedOnLights);

  function handleToggle(name) {
    setLight(
      lightsArr.map((light) => {
        return light.name === name ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  const [isDimmed, setIsDimmed] = useState(false);

  function handleAllTurnOff() {
    setLight(
      lightsArr.map((light) => {
        return { ...light, isOn: false };
      })
    );
    setIsDimmed(!isDimmed);
  }

  function handleAllTurnOn() {
    setLight(
      lightsArr.map((light) => {
        return { ...light, isOn: true };
      })
    );
    setIsDimmed(!isDimmed);
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        onToggle={handleToggle}
        lightsArr={lightsArr}
        sumTurnedOnLights={sumTurnedOnLights}
        onAllTurnOn={handleAllTurnOn}
        onAllTurnOff={handleAllTurnOff}
      />
    </Layout>
  );
}
