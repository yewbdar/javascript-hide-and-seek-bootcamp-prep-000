function getFirstSelector(selector){
  document.querySelector(selector);

}
function nestedTarget(){
  document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      let children = firstList.children
      let start = 1
      for (let i = 0, i<children.length; i++) {
        parseInt(children[i].innerHTML)).to.equal(start + i + 3)
      }

}

function deepestChild(){
  document.querySelector('#grand-node div div div div')
}