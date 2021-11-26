const request = require('supertest')
const server = require('./server').app // i don't know why JV's code doesnt require .app but i need to add .app for my app to run ???

//group the test relating to the GET method
describe('GET', () => {

test('send back kiaora', ( () =>{
    expect.assertions(1)
    return request (server)
    .get('/')
    .then(response => {
        expect(response.text).toEqual('kiaora')
    })
}))

test('will greet person by name', () =>{
    expect.assertions(1)
    return request (server)
    .get('/?name=jojo')
    .then (res =>{
        expect(res.text).toEqual('kiaora jojo')
    })

})
})

//test the POST route
describe ('POST', () =>{

    test('prints the name of person posted', () =>{
        expect.assertions(1)
        return request(server)
        .post('/postForm')
        .send('manamana=jojo')
        .then(res =>{
            expect(res.text).toEqual('Hi jojo')
        })
    }
    )
}
)