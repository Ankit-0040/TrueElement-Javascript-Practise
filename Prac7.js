const set = new Set();
set.add(5);
set.add('Hello');
set.add({ name: 'Scaler' });
for (let item of set) {
 console.log(item + 6);
}

// 11 HEllo5 object object 6  