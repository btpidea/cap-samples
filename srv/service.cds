using { sap.capire.bookshop as my } from '../db/schema';
service AdminService 
// @(requires:[
//     { grant: 'READ', to: 'authenticated-user' },
//     { grant: 'CREATE', to: 'content-maintainer' } ,
//     { grant: 'UPDATE', to: 'content-maintainer' } ,
//     { grant: 'DELETE', to: 'admin' } 
//    ]) 
   {

 //This operation will do readonly mode..also exclude additonap properties.   
  //  @readonly entity Books as projection on my.Books excluding { someadditionalfield, prices };
   @odata.draft.enabled
    entity Books as projection on my.Books excluding { someadditionalfield } order by title asc;

   entity Authors
    as projection on my.Authors;   


   action submitOrder(book: Integer, quantity: Integer );

    //Integer can create issue in code
    function printHello (input:String) returns String;

    action printBye (input:String) returns String;

    action doSomething(input:Integer) returns Integer;
}   
