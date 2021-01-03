let person={
    name: "sel",
    age: 19,
    student:true
}

person= JSON.stringify(person);//it's already changed to a json file so not an object anymore
// person= JSON.parse(person);
//console.log(person);

fetch("./assets/json/first.json")
    .then(function(response){
        return response.json();
    })
    .then(function(obj){
        console.log(obj[0].name);
    }).catch(function(error){
        console.log(error);
    })
