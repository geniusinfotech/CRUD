// For Delete DataBase

// Delete First Document
db.teacher.deleteOne( { contry: "China" } )

//Delete all Selceted Documents
db.teacher.deleteMany({country: "China"})

//Clear Data From Collections
db.teacher.deleteMany({})