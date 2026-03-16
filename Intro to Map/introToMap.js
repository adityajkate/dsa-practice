let map = new Map();

// Same like dictionary in python,
// key -> value {key,value} pair

map.set("Aditya", 19); // key-> create name as "Aditya" with value -> 19
map.set("Suman", 10);
console.log(map);

let isValue = map.has("Aditya"); // checks whether the key exists in the map, if yes returns true else returns false
console.log(isValue);

console.log(map.size); // returns size of the map data structure
console.log(map.keys()); // prints all keys
console.log(map.values()); // prints all values

// To print single-single key element :
for (let a of map.keys()) {
  console.log(a);
}

// To print single-single value element :
for (let a of map.values()) {
  console.log(a);
}

// To print single-single entries :
for (let a of map.entries()) {
  console.log(a);
}

// Enumerate using key,value pair
for (let [key, value] of map.entries()) {
  console.log(key + " -> " + value);
}

// To delete key from the map
map.delete("Aditya");

// To clear whole map
map.clear();
