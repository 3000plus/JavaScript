

/* kilometerToMeter function - Convert kilometer to meter */

function kilometerToMeter(n){

  var result;

  /* for any negative or error value, result returns "Error!" message */
  if(n < 0){
    result = "Error!";
  }

  /* for any positive value, result returns kilometer to meter */
  else{
    result = n * 1000;
  }

  return result;

}

// console.log(kilometerToMeter(3));   // 3000
// console.log(kilometerToMeter(-3));  // Error!




/* budgetCalculator function - How much money do you need for your watch, phone and laptop */

function budgetCalculator(watch, phone, laptop){

  var totalDollar = 0;

  if(watch < 0){  // for invalid watch value
    console.log("Invalid watch value!");
  }

  /* multiply total number of watch with 50 and assign total watch dollar value to totalDollar */
  else{
    var totalWatch = watch * 50;
    totalDollar += totalWatch;
  }

  if(phone < 0){  // for invalid phone value
    console.log("Invalid phone value!");
  }

  /* multiply total number of phone with 100 and assign total phone dollar value to totalDollar */
  else{
    var totalPhone = phone * 100;
    totalDollar += totalPhone;
  }
  if(laptop < 0){  // for invalid laptop value
    console.log("Invalid laptop value!");
  }

  /* multiply total number of laptop with 500 and assign total laptop dollar value to totalDollar */
  else{
    var totalLaptop = laptop * 500;
    totalDollar += totalLaptop;
  }

  return totalDollar;

}

// console.log(budgetCalculator(2, 3, 2));   // 1400
// console.log(budgetCalculator(-1, -1, -1));
                                       // Invalid watch value!
                                       // Invalid phone value!
                                       // Invalid laptop value!




/* hotelCost function - How much cost do you need for how many days will you have to stay in hotel room */

function hotelCost(days){

  var totalCost;

  /* for any negative or error value, result returns "Error!" message */
  if(days < 0){
    totalCost = "Error!";
  }

  /* when days are less or equal to 10 */
  else if(days <= 10){
    totalCost = days * 100;
  }

  /* when days are less or equal to 20 and greater then 10 */
  else if(days <=20){
    totalCost = 10 * 100 + (days - 10) * 80;
  }

  /* when days are greater or equal to 21 */
  else if(days > 20){
    totalCost = 10 * 100 + 10 * 80 + (days - 20) * 50;
  }

  return totalCost;

}

// console.log(hotelCost(17));    // 1560
// console.log(hotelCost(21));    // 1850
// console.log(hotelCost(7));     // 700
// console.log(hotelCost(-2));    // Error!




/* megaFriend function - Which friend's name has the most number of letters */

function megaFriend(friendsNameArray){

  var mostLetterNumber = 0;
  var mostLetterName = "";

  /* for no friends or empty array */
  if(friendsNameArray.length == 0){

    return "No friends name!";

  }

  /* loop for searching most numbers letter name */
  for(var i=0; i< friendsNameArray.length; i++){
    
    /* when name is invalid */
    if(isNaN(friendsNameArray[i])==false){

      console.log(friendsNameArray[i]," - Invalid name!");

    }

    /* check if the most numbers letter name found then store its length and index */
    else if(friendsNameArray[i].length > mostLetterNumber){

      mostLetterNumber = friendsNameArray[i].length;
      var largestNameIndex = i;

    }

  }

  mostLetterName = friendsNameArray[largestNameIndex];

  return mostLetterName;

}

// console.log(megaFriend(['rafik','Hridoy','kabil'])); //Hridoy
// console.log(megaFriend([]));               //No friends name!
// console.log(megaFriend([12, 'Remon']));
                                      // 12  - Invalid name!
                                      // Remon