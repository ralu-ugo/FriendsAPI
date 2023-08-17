import express from "express"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"

const router = express.Router()

const swaggerJsDoc = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "friends api",
      version: "1.0.0",
      description: "a simple friends api",
      contact: {
        name: "API support",
        email: "ralu1@gmail.com",
        url: "https://github.com/ralu-ugo"
      },
      license: {
        name: "apache 2.0",
        definition: "https://www.apache.org/licenses/LICENSE-2.0.html"
      }
    }
  },
  servers: [
    {
      url: 'https://localhost:3000/',
      description: 'Developmenent server'
    },
    {
      url: 'https://friends-management-api.herokuapp.com/',
      description: 'Production server'
    }
  ],
  apis: ['./src/spec/*.yml', './src/spec/components/*.yml']

})


router.use('/', swaggerUI.serve)
router.get('/', swaggerUI.setup(swaggerJsDoc));
export default router
