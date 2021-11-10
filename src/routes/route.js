// const express = require('express');

// const router = express.Router();


// router.get('/movies', function (req, res) {
//     const movies = ["AVATAR","DUNE","LAST NIGHT IN SOHO","ARMY OF THIEVES"]
//     res.send(movies)

// });

"---------------------------------------------------------------------------------------"

// const express = require('express');

// const router= express.Router();


// router.get('/movies/:movieId', function (req, res) {
//     const movies = ["AVATAR","DUNE","LAST NIGHT IN SOHO","ARMY OF THIEVES"]
//     const index = req.params.movieId                         
//     res.send(movies[index])

// });

console.log("---------------------------------------------------------------------------------------")

// const express = require('express');

// const router= express.Router();


// router.get('/movies/:movieId', function (req, res) {
//     const movies = ["AVATAR","DUNE","LAST NIGHT IN SOHO","ARMY OF THIEVES"]
//     const index = req.params.movieId
//     if(index<movies.length){
//         res.send(movies[index])
//     }
//         else{
//             res.send("doesnot exist")
//         }
//     } );    
    

    console.log("---------------------------------------------------------------------------------------")

     const express = require('express');

     const router = express.Router();
    
    
        router.get('/films', function (req, res) {

            const movies = [{
               id: 1,
                name: "The Shining"
               }, {
                id: 2,
               name: "Incendies"
               }, {
                id: 3,
                name: "Rang de Basanti"
               }, {
                id: 4,
                name: "Finding Nemo"
               }]

        res.send(movies)
    
    });

    console.log("---------------------------------------------------------------------------------------")

//     const express = require('express');

// const router= express.Router();


// router.get('/films/:filmid', function (req, res) {
//     const movies = [{
//        id: 1,
//         name: "The Shining"
//        }, {
//         id: 2,
//        name: "Incendies"
//        }, {
//         id: 3,
//         name: "Rang de Basanti"
//        }, {
//         id: 4,
//         name: "Finding Nemo"
//        }]
//     const ids = req.params.filmid
//     if(ids<movies.length){
//         res.send(movies[ids])
//     }
//         else{
//             res.send("doesnot exist")
//         }
//     } );    

    console.log("---------------------------------------------------------------------------------------")
    
module.exports = router;


