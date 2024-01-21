// const cds = require('@sap/cds');

// class AdminService extends cds.ApplicationService {
//   init(){
//      const { Books } = this.entities;
//     this.on('READ',Books, async(req) => {
//         console.log("<<<I am in `on`  handler")
//        // const result = cds.run(SELECT.from(Books));
//        //const result = cds.run(SELECT.from(Books).where({ID:201}));
//        const result = cds.run(SELECT.one(Books).where({ID:201}));
//         console.log(result)
//         return result;

//     }) 
//     this.before('READ',Books, (req) => {
//        // console.log("<<<I am  `before` handler")
//        const result = cds.run(UPDATE(Books).set({stock:500}).where({ID:201}));
//     })
//     this.after('READ',Books, (req) => {
//         console.log("<<<I am `after` before handler")
//     })
//   }
// }
// module.exports = AdminService







// module.exports = function() {
//     this.on('submitOrder', req => {}) //custom action
//     this.on('CREATE','Books', (req) => {})

//     this.on('READ','Books', (req) => {
//         console.log("<<<I am in `on`  handler")
//     }) //when you click on book entity and reading of data started
//     this.before('READ','Books', (req) => {
//         console.log("<<<I am  `before` handler")
//     })// when you clikc on book entyt and beofre the reading of book started
//     this.after('READ','Books', (req) => {
//         console.log("<<<I am `after` before handler")
//     }) //when you clikc on book entyt and after the reading of book has been done
// }


   // module.exports = (say) => {
    // //console.log("I am inside Service SAY")
    //  say.on( 'printHello', req => `Hello ${req.data.input}`)
    // }

    // NodeJS ES6 Classic Style

// module.exports = class say {
//     printHello(req) { return `Hello ${req.data.input}` }
//     printBye(req) { return `Hello ${req.data.input}` }
// }

