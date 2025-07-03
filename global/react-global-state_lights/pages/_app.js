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

  function handleToggle(name) {
    setLight(
      lightsArr.map((light) => {
        return light.name === name ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} onToggle={handleToggle} lightsArr={lightsArr} />
    </Layout>
  );
}
