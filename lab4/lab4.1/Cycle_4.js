let a = parseInt(prompt("Початок списку : "));
let b = parseInt(prompt("Кінець списку : "));
var arr = new Array();
c = 0;

for (var i = a; i < b; i++){
        arr[i] = i;
}

for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 1){
        c += 1;
    }
}
alert(c);