let arr = []
let arr1 = []
var input3;
var input = document.getElementById("input").value;
var input2 = document.getElementById("input2").value;
var result = document.getElementById("result")
var result2 = document.getElementById("result2")

function push() {
    var input = document.getElementById("input").value;
    arr.push(input)
    result.value = (`[${arr}]`)
    document.getElementById("input").value =''
}
function pop() {
    arr.pop()
    result.value = (`[${arr}]`)
}
function reverse() {
    arr.reverse()
    result.value = (`[${arr}]`)
}
function unshift() {
    arr.unshift(input.value)
    result.value = (`[${arr}]`)
}
function shift() {
    arr.shift()
    result.value = (`[${arr}]`)
}
function bothsort() {
    sort1()
    sort2()
}
function sort2() {
    let sor = []
    sor = input3
    sor.sort()
    // console.log(sor);
    result.value = (`[${sor}]`)
}
function sort1() {
    arr.sort()
    result.value = (`[${arr}]`)
}
function tostring() {

result2.value = arr.toString()
}
function dele() {
    document.getElementById("result").value = ""
}
function dele() {
    result.value = ""
    result2.value=""
}
function slice() {
    var start = prompt("Enter the start number")
    var end = prompt("Enter the deleteCount")
    result2.value = arr.slice(start, end)
}
function splice() {
    var start1 = prompt("Enter the start number")
    var end2 = prompt("Enter the deleteCount")
    var content = prompt("Enter the Content")
    let splicedarray = arr.splice(start1, end2, content)
    result2.value = (`[${arr}]`)
}
function concat() {
    var input = document.getElementById("input").value;
    var input2 = document.getElementById("input2").value;
    input3 = input.concat(input2);
    result.value = (`[${input3}]`)
}
function filter() {
    let fill = arr.filter((word) => word.length > 6);
    result2.value = `${fill}`
    console.log(fill);
}
function find(){
    let found = arr.find((element)=>element>10);
    result2.value=found;
   
}
function includes(){
    let includes=arr.includes(prompt("Enter"))
    result2.value=includes
}
function copy(){
    index1=prompt("Enter the Index value to change")
    index2=prompt("Enter the element index value")
    copyvalue=arr.copyWithin(index1,index2)
    result2.value=copyvalue
}
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})