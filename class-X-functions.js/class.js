class book{
    constructor(name,writer,pages){
        this.name = name
        this.writer = writer
        this.pages = pages
    }
    anunciateTitle(){
        console.log(`Title: ${this.name}`)
    }
    describeTitle(){
        console.log(`${this.name} is a book of the writer ${this.writer} and have ${this.pages}`)
    }
}

const nodeJS = new book("Firts book", "book of Code", 195)
nodeJS.anunciateTitle()
nodeJS.describeTitle()

class BookColection extends book {
    constructor(name, nameColection){
        super(name)
        this.nameColection = nameColection
    }

    describeColection(){
        console.log(`The book ${this.name} is into colection ${this.nameColection}`)
    }
}

const logicOfPrograming = new BookColection("Logic of programing", "stars programing")

logicOfPrograming.describeColection()