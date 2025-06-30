import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";

import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.jsx";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </div>
  );
}
