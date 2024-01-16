const book = function(name,writer, pages){
    gName = name,
    gWriter = writer,
    gPages = pages

    this.getName = function(){
        return gName
    }
    this.getWriter = function(){
        return gWriter
    }
    this.getPages = function(){
        return gPages
    }
}

const GraphQL = new book("GraphQL", "Hose of CODE", 143)

console.log(GraphQL.getName())
console.log(GraphQL.getWriter())
console.log(GraphQL.getPages())

const name = "Alura"