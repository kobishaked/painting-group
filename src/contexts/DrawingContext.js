import React, { createContext, useState, useContext, useEffect } from 'react'

const DrawingContext = createContext({});

export const DrawingContextProvider = (props) => {

    const [Drawing, setDrawing] = useState({
        isDrawing: false,
        setIsDrawing: function (state) {
          Drawing.isDrawing = state
        }
      })

    return (
        <DrawingContext.Provider value={Drawing}>
            {props.children}
        </DrawingContext.Provider>
    )
}

export default DrawingContext