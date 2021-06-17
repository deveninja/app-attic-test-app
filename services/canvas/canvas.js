const { createCanvas } = require('canvas')
const fs = require('fs')

module.exports = async ({quote, color, dimension}) => {
   try {

      const filePath = `./assets/images/image-${Date.now()}.png`
      const width = dimension.width
      const height = dimension.height
      
      const canvas = createCanvas(width, height)
      const context = canvas.getContext('2d')
      
      context.fillStyle = '#000'
      context.fillRect(0, 0, width, height)
      
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      
      const text = quote
      
      let textWidth = context.measureText(text).width ? context.measureText(text).width : 4

      
      context.fillStyle = color
      context.font = `bold italic ${Math.ceil(dimension.width / (textWidth * .18))}px lato`

      context.fillText(text, dimension.width / 2, dimension.height / 2)
      const buffer = canvas.toBuffer('image/png')

      const returnData = Buffer.from(buffer).toString('base64')

      return returnData

   } catch (error) {
      return error
   }
}
