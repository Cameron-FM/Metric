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
          n.innerHTML = n.innerHTML.replace(/to/g, "FUCK!")
        }
      }

      let innerText = something.innerHTML;
      newText = innerText.replace(/to/g, "FUCK!");
      something.innerHTML = newText

    }
})
