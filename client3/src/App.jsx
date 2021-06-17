import React from "react";
import {
  AppProvider,
  Card,
  Page,
  ColorPicker,
  TextField,
  hsbToRgb,
  rgbString,
  Button
} from "@shopify/polaris";

import "@shopify/polaris";
import Canvas from "./services/Canvas";
import { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {   

  const [ image, setImage ] = useState('')
  const [quote , setQuote] = useState('')
  const [rgbColorValue , setRgbColorValue] = useState('')
  const [color , setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.8
  })

  const [ dimension, ] = useState({
    height: 350,
    width: 500
  })
  
  
  const handleColorChange = (color) => {
    setColor(color)
  }

  const handleInputChange = (value) => {
    setQuote(value)
  }

  const handleDownload = async () => {

    const data = {
      quote: quote,
      color: rgbString(hsbToRgb(color)),
      dimension
    }

    try {
      const quoteImage = await axios.post(`/api/v1/quotes`, data)
      setImage(quoteImage.data) 
    
    } catch (error) {
      console.log(error)
    }

  }


  

  useEffect(() => {
    setRgbColorValue(rgbColorValue)
  }, [rgbColorValue])


  return (
    <AppProvider>
      <Page title="App Attic Test App">
        <Card title="Image Quote Generator" sectioned>
          <Card.Section>
            <div className="left">
              <TextField
                placeholder='Enter quote here'
                value={quote}
                onChange={handleInputChange} 
              />
              <br />
              <ColorPicker
                onChange={handleColorChange}
                color={color}
                allowAlpha
              />
            </div>
          </Card.Section>
          <Card.Section>
            <div className="right">
              <Canvas
                quote={quote}
                color={rgbString(hsbToRgb(color))}
                dimension={dimension}
              />
            </div>
            {
              quote &&
              <Button onClick={ handleDownload }>Download Image Quote</Button>
            }
            {
              image && 
              <>
                <br />
                <img src={`data:image/png;base64,${image}`} alt="Quote Card" />
              </>
            }
          </Card.Section>
        
          
        </Card>
      </Page>
    </AppProvider>
  );

}


export default App;
