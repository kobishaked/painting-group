import React, { useState, useEffect, useContext } from "react";
import gql from 'graphql-tag';
import { useMutation } from "@apollo/react-hooks";
import DrawingContext from '../contexts/DrawingContext'

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
  const { isDrawing, setIsDrawing } = useContext(DrawingContext);


  useEffect(() => {
    changeColor(color);
  }, [color])


  return (
    <span
      className="pixel"
      // onMouseDown={() => {
      //   changeColor(newColor);
      //   updatePixelColor({ variables: { id: id, color: newColor } });
      //   setIsDrawing(true)
      // }}
      onMouseMove={() => {
        if (isDrawing) {
          changeColor(newColor);
          updatePixelColor({ variables: { id: id, color: newColor } });
        }
      }}
      // onMouseUp={() => {
      //   // changeColor(newColor);
      //   // updatePixelColor({ variables: { id: id, color: newColor } });
      //   setDrawing(false)
      // }}
      onClick={() => {
        if (isDrawing) {
          setIsDrawing(false)
        }
        else {
          setIsDrawing(true)
        }
        changeColor(newColor);
        updatePixelColor({ variables: { id: id, color: newColor } });
      }}
      style={{ backgroundColor: pixelColor }}
    ></span>
  );
};

export default Pixel;
