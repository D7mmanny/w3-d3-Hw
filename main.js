let books=[
{
    tital: "book1",
    author: "auther1",
    numberOfPages:500,
    borrowing:"",
    nameOfTheBorrower:" "



},
{
    tital: "book2",
    author: "auther2",
    numberOfPages:400,
    borrowing:"",
    nameOfTheBorrower:"kaled"



},
{
    tital: "book3",
    author: "auther3",
    numberOfPages:300,
    borrowing:"",
    nameOfTheBorrower:" "



},
{
    tital: "book4",
    author: "auther4",
    numberOfPages:200,
    borrowing:"",
    nameOfTheBorrower:"mhamd"



},
{
    tital: "book5",
    author: "auther5",
    numberOfPages:100,
    borrowing:"",
    nameOfTheBorrower:" "



},

];
console.log("=======================================================");
console.log("==========================q1============================");
let j=books.length;
for (let i = 0; i <j ; i++) {
    console.log("==========================="+ i +"============================");
    console.log(books[i].tital); 
    console.log(books[i].author);
    console.log(books[i].numberOfPages);
    console.log(books[i].borrowing);
    
}

console.log("=======================================================");
console.log("===========================q2===========================");

borrowBook=books.filter(function (value1) {
    if (value1.nameOfTheBorrower==" " ) {
        value1.borrowing="not available" ;
        value1.nameOfTheBorrower="ahmad";
         
    }else{
        console.log("=======================================================");
        console.log(value1.tital);
        value1.borrowing="not available" ;
        console.log("boock not available");
        console.log(value1.nameOfTheBorrower);
    }
})

console.log(borrowBook);


console.log("===========================q3===========================");

let books2=[
    {
        tital: "book1",
        author: "auther1",
        numberOfPages:500,
        borrowing:" available",
        nameOfTheBorrower:" "
    
    
    
    },
    {
        tital: "book2",
        author: "auther2",
        numberOfPages:400,
        borrowing:"not available",
        nameOfTheBorrower:"kaled"
    
    
    
    },
    {
        tital: "book3",
        author: "auther3",
        numberOfPages:300,
        borrowing:"available",
        nameOfTheBorrower:" "
    
    
    
    },
    {
        tital: "book4",
        author: "auther4",
        numberOfPages:200,
        borrowing:"not available",
        nameOfTheBorrower:"mhamd"
    
    
    
    },
    {
        tital: "book5",
        author: "auther5",
        numberOfPages:100,
        borrowing:"available",
        nameOfTheBorrower:" "
    
    
    
    },
];

returnBook=books2.filter(function (value) {
    if (value.borrowing=="not available" ) {
        value.borrowing="available" ;
        
         
    }else{
        console.log("=======================================================");
        console.log(value.tital);
        console.log("that the book was never borrowed.");
        
    }
    
})

console.log(returnBook);
console.log("===========================q4===========================");

let h=books2.length;
for (let i = 0; i <h ; i++) {
    console.log("==========================="+ i +"============================");
    console.log(books2[i].tital); 
    console.log(books2[i].author);
    console.log(books2[i].numberOfPages);
    console.log(books2[i].borrowing);
    console.log(books2[i].nameOfTheBorrower);
}

console.log("===========================q5===========================");


addbook=books2.push({
    tital: "book2",
    author: "auther2",
    numberOfPages:4100,
    borrowing:"",
    nameOfTheBorrower:"shaled"

});


console.log(addbook);
console.log(books2);

console.log("===========================q6===========================");

let surchru=[];
function searchBook (value1) {
    for (let i = 0; i <h ; i++) {
        let book = books2[i];

   if (book.tital.includes(value1)||
    book.nameOfTheBorrower.includes(value1)||
    book.author.includes(value1)  ) {
        surchru.push(book);
        return surchru;
   } 
}

}
console.log(searchBook("book2"));
console.log(searchBook("mhamd"));



