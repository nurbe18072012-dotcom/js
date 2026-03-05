var method = prompt("Metod nomini yozing: length, toString, at, join, pop, push, shift, unshift, isArray, delete, concat.");

var arr = ["apple", "banana", "orange"];

if(method === "length"){
    console.log(arr.length);
}

else if(method === "toString"){
    console.log(arr.toString());
}

else if(method === "at"){
    let index = prompt("Index yozing:");
    console.log(arr.at(index));
}

else if(method === "join"){
    var belgi = prompt("Qaysi belgi bilan qushilsin?");
    console.log(arr.join(belgi));
}

else if(method === "pop"){
    arr.pop();
    console.log(arr);
}

else if(method === "push"){
    var item = prompt("Arrayga qushiladigan element yozing:");
    arr.push(item);
    console.log(arr);
}

else if(method === "shift"){
    arr.shift();
    console.log(arr);
}

else if(method === "unshift"){
    var item = prompt("Boshiga qushiladigan element yozing:");
    arr.unshift(item);
    console.log(arr);
}

else if(method === "isArray"){
    console.log(Array.isArray(arr));
}

else if(method === "delete"){
    var index = prompt("Qaysi indexni uchirish kerak?");
    delete arr[index];
    console.log(arr);
}

else if(method === "concat"){
    var item = prompt("Yangi element yozing:");
    var newArr = arr.concat(item);
    console.log(newArr);
}

/*else if(method === "flat"){
    var a = [1,[2,3],[4,5]];
    console.log(a.flat());
}

else if(method === "slice"){
    var start = prompt("Boshlanish index:");
    var end = prompt("Tugash index:");
    console.log(arr.slice(start,end));
}

else if(method === "splice"){
    var index = prompt("Qaysi indexdan uchirsin?");
    var count = prompt("Nechta ouchirsin?");
    arr.splice(index,count);
    console.log(arr);
}

else if(method === "toSpliced"){
    var index = prompt("Qaysi indexdan uchirsin?");
    var count = prompt("Nechta uchirsin?");
    console.log(arr.toSpliced(index,count));
}*/

else{
    console.log("Bunday metod yuq");
}