// model-view-controller (MVC)

// }
// const arr = [2, 2, 2, 3, 5, 5, 5, 7, 9]

// let lb = lowerBound(arr.length, arr, 5);
// console.log('lb: ', lb);
// let up = uperBound(arr.length, arr, 5);
// console.log('up: ', up);
// function lowerBound(n, arr, key) {
//   let l = 0;
//   let r = n;
//   while (l < r) {
//     let mid = Math.floor(r + (l - r) / 2);
//     if (arr[mid] >= key) {
//       r = mid;
//     } else {
//       l = mid + 1;
//     }
//   }
//   if (l < n) {
//     return l;
//   } else {
//     return n;
//   }
// }
// function uperBound(n, arr, key) {
//   let l = 0;
//   let r = n;
//   while (l < r) {
//     let mid = Math.floor(r + (l - r) / 2);
//     if (arr[mid] > key) {
//       r = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }
//   if (l < n) {
//     return l;
//   } else {
//     return n;
//   }
// }
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/amareshcoding/node.git
// git push -u origin main

// 1> file upload from frontend
// 2> query filter
// const {title} = req.query
// const movie = Movie.find();
// let newMovie;
// if(title){

//   newMovie = movie.filter((m)=>{
//     return m.title === title
//   })
// }
// resizeBy.send(newMovie)

// 3> query search
// { name: { $regex: value from query } }
// const {title} = req.query
// Movies.find({ name: { $regex: title } })
// http://localhost:8000/movie?title=avn

// 4> auth middleware
// 5> basic redux

//
// const str = 'flexiple';
// const str2 = str.slice(1);
// console.log(str2);

var str = 'INDIA';
str = str.toLowerCase();
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log('str: ', str);
