/*
*  作为组件列表元素的config属性，以及右侧配置面板的表单项
*  key： 对应./menu.js文件中的key属性
*  value： 用于config属性和配置面板
*/

const menuProps = {
  'Text':{
    content:'默认文本', // 文本内容
    style:{
      fontSize:'12', // 字号
      textAlign:'center', // 对齐方式
      color:'#000', // 字体颜色
      backgroundColor:'#fff', // 背景颜色
    }
  },
  "Button":{
    content:'按钮文本', // 文本内容
    style:{
      fontSize:'12', // 字号
      textAlign:'center', // 对齐方式
      color:'#000', // 字体颜色
      backgroundColor:'#fff', // 背景颜色
    }
  }
}

export default menuProps