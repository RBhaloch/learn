const rawData=require ('./data/dummyData.json')

// var request = require('request');
 
//  var options = {
//   'method': 'GET',
//   'url': 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=110001&date=31-03-2021',
//   'headers': {
//   }
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

console.clear()
//const data=JSON.parse(rawData.centers.length)
const centres=rawData.centers
const centresWithlots=centres
.filter(t=>
  t.sessions
  .some(s=> s.available_capacity>0 &&  parseInt(s.min_age_limit)>=18)
)


 //console.log(centresWithlots)


