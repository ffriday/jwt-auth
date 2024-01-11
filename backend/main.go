package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"jwt-auth/api/constants"
	"jwt-auth/api/middlewares"
)

func main() {
	router := gin.New()
	router.Use(gin.Recovery())
	router.Use(gin.Logger())
	router.Use(middlewares.CorsMiddleware())

	routes := constants.Routes

	router.GET(routes.Root, rootHandler)
	router.GET(routes.Status, testHandler)

	router.Run(fmt.Sprintf("%s:%s", constants.ServerHost.Host, constants.ServerHost.Port))
}

func rootHandler(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, rootMessage)
}

func testHandler(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, testMessage)
}

type message struct {
	Name    string `json:"name"`
	Message string `json:"message"`
}

var rootMessage = message{Name: constants.API_NAME, Message: "ROOT"}
var testMessage = message{Name: constants.API_NAME, Message: constants.STATUS_OK}
