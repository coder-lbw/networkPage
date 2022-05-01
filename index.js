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
console.log(labels);
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