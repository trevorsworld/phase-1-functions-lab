function distanceFromHqInBlocks(someValue) {
     if (someValue >= 42) {
         return someValue - 42;
     } else {
         return 42 - someValue;
     }
 }
 
 function distanceFromHqInFeet(someValue) {
     let blocks = distanceFromHqInBlocks(someValue);
     return blocks * 264;
 }
 
 function distanceTravelledInFeet(start, destination) {
     let distance = Math.abs(destination - start) * 264;
     return distance;
 }
 
 function calculatesFarePrice(start, destination) {
     let distance = distanceTravelledInFeet(start, destination);
     let fare;
 
     if (distance <= 400) {
         fare = 0;
     } else if (distance > 400 && distance <= 2000) {
         fare = (distance - 400) * 0.02;
     } else if (distance > 2000 && distance <= 2500) {
         fare = 25;
     } else {
         return 'cannot travel that far';
     }
 
     return fare;
 }