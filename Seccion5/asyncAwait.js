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

const getBookById = async (id) => {
    const book = booksDB.find((book) => book.id === id);
    if (!book) {
        const error = new Error();
        error.message = 'Book not found';
        throw error;
    }
    return book;
}

const getAuthorById = async (id) => {
    const author = authorsDB.find((author) => author.id === id);
    if (!author) {
        const error = new Error();
        error.message = 'Author not found';
        throw error;
    }
    return author;
}

//Main

const main = async () => {
    try {
        const book = await getBookById(2);
        const author = await getAuthorById(book.authorId)
        console.log(`This book ${book.title} was written by ${author.name}`)
    } catch (error) {
        console.log(error.message);
    }

}

main();