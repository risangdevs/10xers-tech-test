const fs = require('fs');
const read = JSON.parse(fs.readFileSync('sampel.json', 'utf-8'));

const data = read.map((e, i) => {
  return {
    id: e.id,
    external_id: e.external_id,
    image_url: e.image_url,
    name: e.name,
    token_id: e.token_id,
    description: e.description,
    collection: JSON.parse(e.collection_json),
  };
});

// console.log(data);
// fs.writeFileSync('hiji.json', JSON.stringify(data, null, 2), 'utf-8');

const groupByCategory = data.reduce((group, e) => {
  const {name} = e.collection;
  group[name] = group[name] ?? [];
  group[name].push(e);
  return group;
}, {});
// console.log(groupByCategory);

let result = [];
for (const key in groupByCategory) {
  result.push({[key]: groupByCategory[key]});
}
console.log(result);

fs.writeFileSync('tilu.json', JSON.stringify(result, null, 2), 'utf-8');

// const getUniqueId=(arr)=>{

//     let arrId = [];
//     for (let i = 0; i < arr.length; i++) {
//       arrId.push(arr[i].collection.id);
//     }
//     let uniqueId = arrId.filter((value, index, self) => {
//       return self.indexOf(value) === index;
//     });
//     return uniqueId
// }
// // console.log(getUniqueId(data));
// const uniqueId=getUniqueId(data)

// let res=[]
// for (let i = 0; i < uniqueId.length; i++) {

//     for (let j = 0; j < data.length; j++) {

//         if(uniqueId[i]===data[j].collection.id){
//             res.push()

//         }

//     }

// }
