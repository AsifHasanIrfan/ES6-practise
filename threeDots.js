const ages = [11, 12, 13, 14, 15];
const ages2 = [55, 12, 13, 18, 15];

const allAges = ages.concat(ages2);
const allAges2 = [...ages, ...ages2, 5]
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
