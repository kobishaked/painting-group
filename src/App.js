import React, { useState } from "react";
import Pixel from "./components/Pixel";
import ColorPicker from "./components/ColorPicker";
import { useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const pixels = new Array(400).fill("white");

const Get_Pixels = gql`
subscription GetPixels {
  pixels(order_by: {id: asc}) {
    color
    id
  }
}
`;

function App() {
  const [color, changeColor] = useState("white");
  const { loading, error, data } = useSubscription(Get_Pixels);

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div className="content">
      <div className="logo">Draw</div>
      <p>Pick a Color</p>
      <ColorPicker changeColor={changeColor} />
      <p>Click a Pixel</p>
      <div className="container">
        {data.pixels.map((pixel) => (
          <Pixel
            color={pixel.color}
            id={pixel.id}
            key={pixel.id}
            newColor={color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
