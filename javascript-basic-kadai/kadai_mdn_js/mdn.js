const today = new Date();

console.log(today.getFullYear() + '年');
console.log(today.getMonth()+1 + '月');
console.log(today.getDate() + '日');


const date = new Date();
const [month, day, year] = [ // MDNに書いてたものをそのままコピペしましたが、ここの行は必要ですか？
  console.log(date.getFullYear() + '年'),
  console.log(date.getMonth()+1 + '月'),
  console.log(date.getDate() + '日'),
];