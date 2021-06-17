import React, { useEffect, useRef, useState } from 'react'

const Canvas = ({quote, color, dimension}) => {

   const [ canvas, setCanvas ] = useState(null)

   const canvasRef = useRef(null)
  


   useEffect(() => {
      (() => {
         setCanvas(canvasRef.current)
      })()
   }, [canvas])

   if(canvas) {
     
         
      const context = canvas.getContext('2d')
      context.fillStyle = '#000'
      context.fillRect(0, 0, dimension.width, dimension.height)
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      const text = quote
      let textWidth = context.measureText(text).width ? context.measureText(text).width : 4

      
      context.fillStyle = color
      context.font = `bold italic ${Math.ceil(dimension.width / (textWidth * .5))}px lato`

      context.fillText(text, dimension.width / 2, dimension.height / 2)

   }



   const renderCanvas = () => {
      return (
         <canvas
            ref={canvasRef}
            width={dimension.width}
            height={dimension.height}
            style={{ wordWrap: 'wrap' }}
         />
      )
   }   
   
   return renderCanvas()
}

export default Canvas