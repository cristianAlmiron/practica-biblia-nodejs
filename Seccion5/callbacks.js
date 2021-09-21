const booksDB = [
    {
        id: 1,
        title: 'CleanCode',
        authorId: 1
    },
    {
        id: 2,
        title: 'The pragmatic programmer',
        authorId: 2
    },
    {
        id: 3,
        title: 'Javascript pattern designs',
        authorId: 3
    },
    {
        id: 4,
        title: 'Fundamentals of Javascript',
        authorId: 4
    }
]

const authorsDB = [
    {
        id: 1,
        name: 'Robet Martin'
    },
    {
        id: 2,
        title: 'Steve Forest'
    },
]

const getBookById = (id,callback) => {
    const book = booksDB.find((book) => book.id === id);
    if(!book){
        const error = new Error();
        error.message = 'Book not found';
        return callback(error);
    }
    callback(null, book);
}

const getAuthorById = (id,callback) => {
    const author = authorsDB.find((author) => author.id === id);
    if(!author){
        const error = new Error();
        error.message = 'Author not found';
        return callback(error);
    }
    callback(null, author);
}

    getBookById(2,(err,book) => {
    if(err){
        return console.log(err.message)
    }
    getAuthorById(book.authorId,(err,author)=>{
        if(err){
            return console.log(err.message)
        }   
        return console.log('Author: ',author)
    })
    return console.log('Book: ',book)
}

);




