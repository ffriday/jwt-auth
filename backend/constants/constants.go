package constants

const API_NAME = "JWT-AUTH"
const STATUS_OK = "OK"

var Routes = routes{
	Root:   "/",
	Status: "status",
	Auth:   "auth",
}

var ServerHost = host{
	Host: "localhost",
	Port: "8080",
}

var ClientHost = host{
	Host: "localhost",
	Port: "5173",
}
