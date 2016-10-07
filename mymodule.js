module.exports = {
  travelCity: "",
  travelCost: -1,

  // Stores the city and the maximum acceptable cost and tells you when you should fly
  travelAgency: function(travelCity, travelCost){
    console.log("A trip to " + travelCity + " will cost " + travelCost + ".");
    this.travelCity = travelCity;
    this.travelCost = travelCost;
    whichMonth("May");
  }
};


function whichMonth(month){
  console.log("Travel in " + month);
}
