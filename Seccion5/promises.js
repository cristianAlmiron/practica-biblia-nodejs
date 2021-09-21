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

const getBookById = (id) => {
    return new Promise((resolve, reject) => {
        const book = booksDB.find((book) => book.id === id);
        if (!book) {
            const error = new Error();
            error.message = 'Book not found';
            reject(error);
        }
        resolve(book);
    });
}

const getAuthorById = (id) => {
    return new Promise((resolve, reject) => {
        const author = authorsDB.find((author) => author.id === id);
        if (!author) {
            const error = new Error();
            error.message = 'Author not found';
            reject(error);
        }
        resolve(author);
    });

}

//Main

getBookById(1).then(
    (book)=>{
         return getAuthorById(book.id)
    }
).then((author)=>{
    console.log('Autor: '.author)
}).catch( error => {
    console.log(error.message)
}
)





