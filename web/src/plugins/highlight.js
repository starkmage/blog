//代码高亮
import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow-night-eighties.css' //样式文件

//自定义指令，在标签里加入v-highlight就会执行回调函数
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
