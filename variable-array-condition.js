// var phoneColor = 'white';
// var phonePrice = 1000;
// var phoneName = 'mi xiaomi'
// var temparetureIsHot = true;

// array

var items = ['laptop', 'mog', 'bottle', 'phone'];
// items.indexOf(pen);  //-1 if the value not fonund it a array

items.push('paper');
items.push('headpone')

items.pop();

// conditional

if (items.length == 6){
    console.log('you have too items')
}
else if (items[1] == 'laptop'){
    console.log('keep coding');
}
else {
    console.log('wow , you have a clean desk');

}

var module = 10;
var finishedModule = 5;
var pacticedModule = 3;
var watchedTutorial = 12;

if (finishedModule >= module){
    console.log('take rest');
}
else if (pacticedModule >= module){
    console.log('watch tutorials')
}
else if(watchedTutorial >= module){
    console.log('You have did a great job')
}
else {
    console.log('keep coding');
}
