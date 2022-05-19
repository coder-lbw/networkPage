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


// // 图片懒加载
// let img = document.getElementsByTagName("img"); 
// let num = img.length; 
// let count = 0;//计数器，从第一张图片开始计 
// lazyload();//首次加载别忘了显示图片 
// window.addEventListener('scroll', lazyload);
// function lazyload() { 
//   let viewHeight = document.documentElement.clientHeight;//视口高度 
//   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滚动条卷去的高度 
//   for(let i = count; i <num; i++) { 
//     // 元素现在已经出现在视口中 
//     if(img[i].offsetTop < scrollTop + viewHeight) { 
//       if(img[i].getAttribute("src") !== "default.jpg") continue; img[i].src = img[i].getAttribute("data-src"); 
//       count ++;
//     } 
//   } 
// }