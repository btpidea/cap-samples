// module.exports = (say) => {
// //console.log("I am inside Service SAY")
//  say.on( 'printHello', req => `Hello ${req.data.input}`)
// }

// NodeJS ES6 Classic Style

module.exports = class say {
    printHello(req) { return `Hello ${req.data.input}` }

    printBye(req) { return `Hello ${req.data.input}` }

}