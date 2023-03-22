// Write your solution in this file!
const employee = {
    name: "Phillip Nzau",
    streetAddress: "Nairobi, kenya",

}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;    
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;    
}
function deleteFromEmployeeByKey(obj, key2) {
    const newObj = {...obj};
    for (const key in newObj) {
        if(key == key2) {
            delete newObj[key]
        }
    }
    return newObj;
  
}
function destructivelyDeleteFromEmployeeByKey(obj, key2) {
    for (const key in obj) {
        if(key == key2) {
            delete obj[key]
        }
    }
    return obj;
  
}