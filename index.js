// console.log("Request data");

// setTimeout( () => {
//     console.log("Preparing data...")

//     const backendData = {
//         server : "aws",
//         port : 2000,
//         status : "working"
//     }

    // setTimeout( () => {
    //     backendData.wasPrepared = true
    //     console.log("Data received:", backendData)
    // }, 3000)
// },3000)


// const vladPromise = new Promise(function(resolve, reject){
//     setTimeout( function () {
//             console.log("Preparing data...");

//             const backendData = {
//                 server: "aws",
//                 port: 2000,
//                 status: "working"
//             };
//             resolve(backendData);
//         }, 2000)
// })

// vladPromise.then((data) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             data.wasPrepared = true
//             resolve(data)
//         }, 3000)
//     })
// })  
//     .then((modifiedData) => {
//         modifiedData.fromPromise = "Yes"
//         return modifiedData
// })  .then( (thirdData) => {
//      console.log("Again modified:", thirdData)
// })  .catch( err => console.error("Error: ", err))
//     .finally( () => console.log("Finally"))


// const sleep = ms => {
//    return new Promise(resolve => {
//         setTimeout( () => resolve(), ms)
//     })
// }

// // sleep(5000).then( () => console.log("after 2 seconds"))


// Promise.all([sleep(2000), sleep(5000)])
//     .then( () => {
//         console.log("All promises")
//     })
//           //                                    Promise.all = зручно використовувати, якщо потрібно дочекатись від серверу декілька відповідей, а потім вже їх скомбінувати

// Promise.race([sleep(2000), sleep(5000)])
//     .then( () => {
//         console.log("Race promises")
//     })
//         //                                      Promise.race = дочекається відповіді від сервеву і виконає проміс, як тільки хоча б одна відповідь прийде






// console.log("Request data");

// const vladPromise = new Promise(function(resolve, reject){
//     setTimeout( function () {
//             console.log("Preparing data...  after 2 secs");
//             const backendData = {
//                 server: "aws",
//                 port: 2000,
//                 status: "working"
//             };
//             resolve(backendData);
//         }, 2000)
// })

// vladPromise.then((data) => {
//     return new Promise ( (resolve, reject) => {
//         setTimeout( () => {
//          console.log("Data is beeing worked on") 
//          resolve(data)   
//         }, 2000)
//     }).then( (vladTest) => {
//         return new Promise( (resolve, reject) => {
//             setTimeout( () => {
//                 console.log("wasPrepared beeing aded")
//                 vladTest.wasPrepared = true
//                 resolve(vladTest)
//             }, 3000)
//         })
//     })
// })  .then( (data2) => {
//         console.log("Data modified:", data2)
//         return new Promise ( (resolve, reject) => {
//             setTimeout( () => {
//                 data2.Yes = "Yes";
//                 resolve(data2)
//             }, 3000)
//         })
//     }).then ( (data3) => {
//         console.log("Last data:", data3)
//     })


//                                            Трохи додав і модифікував чейн промісів, все працює справно! Ось логіка:
//  1. реквест дата
// 2. через 2 секунди "Preparing data
// 3. через 2 секунди "Data is beeing worked on"
// 4. ще через 3 секунди wasPrepared beeing aded"+ "Data modified:", data2
// 5. ще через 3 секунди "Last data:", data3