const expandEle = document.getElementById('expand')
const navEle = document.getElementById('nav')

expandEle.onclick = function () {
  if (navEle.classList.contains('nav')) {
    navEle.classList.remove('nav')
  }
  navEle.classList.toggle('mobile-nav')
  navEle.classList.toggle('nav-none')
}

let activeNode = null
const labels = navEle.children
activeNode = labels[0]
navEle.onclick = function (e) {
  if (navEle !== e.target) {
    activeNode.classList.remove('nav-active')
    e.target.classList.add('nav-active')
    activeNode = e.target
    navEle.classList.remove('mobile-nav')
    navEle.classList.toggle('nav-none')
  }
}

// 产品中心的交互逻辑
const divEle = document.getElementsByClassName('two-select-cont')
const labelList = []
for (let i = 0; i < divEle.length; i++) {
  const labels = divEle[i].getElementsByTagName('label')
  labelList.push(...labels)
}
let activeLabel = labelList[0]

for (let i = 0; i < divEle.length; i++) {
  divEle[i].onclick = function (e) {
    activeLabel.classList.remove('nav-active')
    e.target.classList.add('nav-active')
    activeLabel = e.target
  }
}
