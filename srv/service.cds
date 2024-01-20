using { sap.capire.bookshop as my } from '../db/schema';
service AdminService {
   entity Books as projection on my.Books


    //Integer can create issue in code
    function printHello (input:String) returns String;

    action printBye (input:String) returns String;

    action doSomething(input:Integer) returns Integer;
}   
