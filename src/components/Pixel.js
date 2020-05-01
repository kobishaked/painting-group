import React, { useState } from "react";
import gql from 'graphql-tag';
import { useMutation } from "@apollo/react-hooks";






const Update_Color = gql`
mutation updatePixel($id: Int!, $color: String!) {
  update_pixels(where: {id: {_eq: $id}}, _set: {color: $color}) {
    returning {  
      id
      color
    }
  }
}
`;



const Pixel = ({ id, color, newColor }) => {
  const [pixelColor, changeColor] = useState(color);
  const [updatePixelColor] = useMutation(Update_Color);
  return (
    <span
      className="pixel"
      onClick={() => {
        changeColor(newColor);
        updatePixelColor({ variables: { id: id, color: newColor } });
      }}
      style={{ backgroundColor: pixelColor }}
    ></span>
  );
};

export default Pixel;

