//import vue from 'Vue'
const vue = require('Vue')
const Hello = require('./hello')
//import Hello from 'hello'

describe('Hello component', () => {
    it('has a created block', () => {
        expect(typeof Hello.created).toBe('function')
    })

    it('has a vueMessage in data', () => {
        expect(typeof Hello.data).toBe('function')
        let defaultData = Hello.data()
        expect(defaultData.vueMessage).toBe('Vue component')
    })
})