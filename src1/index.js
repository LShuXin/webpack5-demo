import _ from 'lodash';
import './style.css';
import './assets/less/less1.less'
import Icon from './icon.png';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.classList.add('test-class')


  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  //  element.innerHTML = _.join(['Hello', '哈哈哈'], ' ');
  //  element.classList.add('hello');

   // 将图像添加到我们已经存在的 div 中。
   const myIcon = new Image();
   myIcon.src = Icon;
   element.appendChild(myIcon);

   return element;
 }

 document.body.appendChild(component());