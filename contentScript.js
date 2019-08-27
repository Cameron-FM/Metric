import plugin from './nlpPlugin.js';
import conv from './conv.js'
nlp.plugin(plugin)

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
      //For children tags
      if (allowedChildren.length > 0){
        for (let n of allowedChildren){
          n.innerHTML = findReplaceableText(n.innerHTML)
        }
      }

      //For non children
      something.innerHTML = findReplaceableText(something.innerHTML)
      //let innerText = something.innerHTML;
      //newText = innerText.replace(/to/g, "YAY!");
    }
})

function findReplaceableText(text){
  var sentences = text.sentences().data('array')
  for (let i=0; i < sentences.length; i++){
    if (nlp(sentences[i].normal).match('#Value a? (cup|cups) * #Noun').found){
      let terms = nlp(sentences[i].normal).terms().data()
      for (let j=0; j < terms.length; j++){
        if (terms[j].tags.includes("Value")){
          if (terms[j+1].normal.toLowerCase() === "cup" || terms[j+1].normal.toLowerCase() === "cups"){
            var oldValue = new RegExp(parseInt(terms[j].normal, 10))
            var oldUnit = new RegExp((value === 1) ? "cup" : "cups")
            var newUnit = (value === 1) ? "gram" : "grams"
          }
        }

      //Get Ingredient and equivalent in grams
        if (terms[j].tags.includes("metricFoodItem")){
          var ingredient = terms[j].normal
          var check = ""
          if (terms[j].tags.includes("metricPrefixItem")){
            var check = (Object.keys(conv[ingredient]).includes(terms[j-1].normal)) ? terms[j-1].normal : "default"
          }else if (terms[j].tags.includes("metricSuffixItem") && terms.length > j){
            var check = (Object.keys(conv[ingredient]).includes(terms[j+1].normal)) ? terms[j+1].normal : "default"
          }
          if (check === "default"){
            var newValue = conv[ingredient].default * value
          }else if (check !== "" && check !== "default"){
            for (let type in conv[ingredient]){
              if (check.includes(type)){
                var newValue = conv[ingredient][type] * value
              }
            }
          }

        }
      }
      //REGEX REPLACE HERE!
      let newText = text.replace(oldValue, newValue)
      let newText = text.replace(oldUnit, newUnit)
      return newText

    }else{
      console.log('Error! Not a nice sentence')
    }
  }
}
