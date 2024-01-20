namespace sap.capire.bookshop;
//in the database, the full name of entity wil change to sap.capire.bookshop.Books{}
entity Books {
    Key ID: Integer;
    title: String;
    descr: String;
    stock: Integer;
    prices: Integer;
}