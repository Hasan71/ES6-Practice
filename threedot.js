const ages = [23, 45, 32, 64, 87];
const ages2 = [27, 26, 42, 62, 85];
const ages3 = [25, 40, 36, 60, 90];

const allAges = ages.concat(ages2).concat([100]).concat(ages3);

console.log(allAges);


const allAges2 = [...ages, ...ages2, ...ages3];

console.log(allAges2);

console.log(Math.max(...allAges2));

