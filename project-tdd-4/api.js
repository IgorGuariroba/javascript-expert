const http = require('http')
// const CarService = require('./src/service/carService')
const DEFALT_USER = {
    username: "igor",
    password: "123"
}

const routes = {
    '/carro:get': (request, response) => {

        // carService = new CarService({})
        response.write('carro')
        return response.end()
    },

    '/login:post': async (request, response) => {
        // response é um iterator!
        for await (const data of request) {
            const user = JSON.parse(data)
            if (
                user.username !== DEFALT_USER.username ||
                user.password !== DEFALT_USER.password
            ) {
                response.writeHead(401)
                response.write("Login falhou!")
                return response.end()
            }

            response.write("Logado com sucesso!")
            return response.end()
        }
        // response.write('Logado com sucesso!')
        // return response.end()
    },

    default: (request, response) => {
        response.write('Hello World!')
        return response.end();
    }
}

const handler = function (request, response) {
    const {url, method} = request
    const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    return chosen(request, response)
}


const app = http.createServer(handler)
    .listen(3000, () => console.log('app running at', 3000))

module.exports = app