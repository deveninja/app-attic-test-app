const canvas = require("../services/canvas/canvas")

exports.getQuote = async (req, res, next) => {
   try {
      const { quote, color, dimension } = req.query

      console.log(color)
      return res
        .status(200)
        .end(await canvas({quote, color, dimension}), 'binary')
   } catch (error) {
      return res
         .status(500)
         .json({
            success: false,
            error: error
         })
   }
}

exports.postQuote = async (req, res, next) => {
   try {
      const { quote, color, dimension } = req.body
      return res
        .status(200)
        .end(await canvas({quote, color, dimension}), 'binary')
   } catch (error) {
      return res
         .status(500)
         .json({
            success: false,
            error: error
         })
   }
}
  
