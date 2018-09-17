// function driversWithRevenueOver(drivers, number){
//   return drivers.filter(function(driver){
//     return driver.revenue > number;
//   })
// }

function driversWithRevenueOver(drivers, number){
  return drivers.filter(driver => driver.revenue > number);
}

// function driverNamesWithRevenueOver(drivers, number){
//   return driversWithRevenueOver(drivers, number).map(function(driver){
//     return driver.name;
//   });
// }

function driverNamesWithRevenueOver(drivers, number){
  return driversWithRevenueOver(drivers, number).map(driver => driver.name);
}

// function exactMatch(drivers, attribute){
//   const key = Object.keys(attribute)[0];
//   const value = attribute[key];
//   return drivers.filter(function(driver){
//     return driver[key] === value;
//   });
// }

function exactMatch(drivers, attribute){
  const key = Object.keys(attribute)[0];
  const value = attribute[key];
  return drivers.filter(driver => driver[key] === value);
}

// function exactMatchToList(drivers, attribute){
//   return exactMatch(drivers, attribute).map(function(driver){
//     return driver.name;
//   });
// }

function exactMatchToList(drivers, attribute){
  return exactMatch(drivers, attribute).map(driver => driver.name);
}
