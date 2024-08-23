// find DataBase
db.movies.find()

// find specify Data
db.movies.find({"year" : 2018})
db.movies.find({"title" : "Dune"})
db.movies.find({"title" : "Maharaja"})

// Specify Conditions Using Query Operators
db.movies.find( { rated: { $in: [ "PG", "PG-13" ] } } )
db.movies.find( { year: { $in: [ 2018, 2020 ] } } )


// Specify Logical Operators (AND)
db.movies.find( { countries: "Mexico", "imdb.rating": { $gte: 7 } } )
db.movies.find( { cast: "Rebecca Ferguson", "runtime": { $gte: 121 } } )

// Specify Logical Operators (OR)
db.movies.find( {
    runtime: 100,
    $or: [ { "year": { $gte: 2019 } }, { genres: "Drama" } ]
} )






