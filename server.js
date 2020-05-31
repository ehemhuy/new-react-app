var fs = require('fs')
var obj = {
    table: []
};
obj.table.push({id: 1, square:2});
console.log(obj)
var json = JSON.stringify(obj);
fs.readFileSync('./offline.json', 'utf8', e =>{
    console.log(e)
})
fs.writeFileSync('offline.json', json, 'utf8', e => {
    console.log(e)
});