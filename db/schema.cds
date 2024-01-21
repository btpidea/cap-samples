namespace sap.capire.bookshop;
using { cuid,managed } from '@sap/cds/common';
//LCNC

//aspect cuid{ key ID: UUID}
aspect stocks{ stock: Integer}
// entity Books: cuid, stocks,managed {
//     title : String;
//     descr : String;
//     prices : Integer;
// }


entity Books
{ 
    key ID: Integer;
    title : String @mandatory;
    author: Association to Authors;
    stock:Integer;
    prices : Integer;
}

extend Books with {
    someadditionalfield: String
}

entity Authors {
    key ID: Integer;
    name : String(100);
    books: Association to many Books on books.author = $self;
}


// entity Orders {
//     OrderID: Integer;
//     items: Composition of many OrderItems on items.parent = $self;

// }

// entity OrderItems {
//     key parent: Association to Orders;
//     Key pos: Integer;
//     quantity: Integer;

// }

entity Orders {
    key OrderID: Integer;
    items: Composition of many {
        key pos: Integer;
        quantity: Integer;
    };
}