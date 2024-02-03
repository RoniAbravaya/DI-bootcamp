function compareToTen(num){

    return new Promise((resolve,reject) =>{
        if (num < 10){

            resolve (' number is smaller than 10');
        } else {

            reject ('number is higher than 10');
        }

       

    })


}



compareToTen(5)

   .then((res) => conmsole.log(res) )
   .catch((err) => console.log(err));





//    Exercise 2


const promise = new promise ((resolve,reject) => {

    setTimeout(() => resolve("Succeess"), 4000);



})

promise.then(conslo.log).catch(console.error);



//    Exercise 3


const promise1 = promise.resolve(2);
const promise2 = promise.reject("boo");

promise2.then(conslo.log).catch(console.error);


//    Exercise 4





