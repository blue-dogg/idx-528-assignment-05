let unser_input;
do{
    user_input=prompt("Give me an even number.")
    user_input=parseInt(user_input);
}while(user_input%2!=0)

do{
    user_input=prompt("Give me an odd number.")
    user_input=parseInt(user_input);
}while(user_input%2==0)

var fruits=[];
for (var i=0; i<10; i++){
    user_input=prompt("Give me a fruit nmae.");
    fruits.push(user_input);
}
console.log(fruits);

var find=prompt("search for fruits?");
for(var i=0; i<10; i++){
    if(fruits[i]==find){
        console.log(i);
        break;
    }else{
        console.log("it is not in the list");
        break;
    }
}