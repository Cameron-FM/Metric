//<script src="https://unpkg.com/compromise@latest/builds/compromise.min.js"></script>

//One to One ratio
let oneCupToGrams = {
  flour : {
    plainFlour: "120",
    glutenFreeFlour : "156",
    Cornflour: "100", //Corn Starch
  },
  sugar: {
    brownSugar: "200", //Ligh Brown Sugar or Muscovado Sugar
    casterSugar : "225", //Superfine Sugar
    icingSugar: "100", //Confectioners Sugar or Powdered Sugar
    granulatedSugar: "100",
  },
  salt : "273",
  cocoaPowder : "100",
  chocolateChips : "150",
  butter : "255",
  honey : "340",
  treacle : "325", //Molasses
  goldenSyrup : "340", //Corn Syrup
  jam : "325", //Jelly
  peanutButter : "250",
  creamCheese: "120", //Soft Cheese
  buttermilk : "225",
  coconut : "100", //Shredded or Desiccated
  oats: "140",
  raisins: "150", //Sultanas
};

let ad = ["H1", "H2", "H3", "H4", "H5", "LI", "UL", "OL", "P", "SPAN", "B", "A", "DT", "I", "U"];

[...document.body.getElementsByTagName("*")].map( something => {
    if (
      something.innerText && ad.includes(something.tagName) && (
        ([...something.children].filter(a => ad.includes(a.tagName))).length > 0
      ) || (
        something.children.length === 0
      )
    ){

      let allowedChildren = ([...something.children].filter(a => ad.includes(a.tagName)))
      if (allowedChildren.length > 0){
        for (let n of allowedChildren){
          n.innerHTML = n.innerHTML.replace(/to/g, "YAY!")
        }
      }

      let innerText = something.innerHTML;
      newText = innerText.replace(/to/g, "YAY!");
      something.innerHTML = newText

    }
})
