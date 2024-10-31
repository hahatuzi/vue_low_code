/*
*  作为组件列表元素的config属性，以及右侧配置面板的表单项
*  key： 对应./menu.js文件中的key属性
*  value： 用于config属性和配置面板
*/

const menuConfig = {
  'Text':{
    content:'默认文本', // 文本内容
    style:{
      fontSize:12, // 字号
      textAlign:'center', // 对齐方式
      color:'#000', // 字体颜色
      backgroundColor:'#fff', // 背景颜色
    }
  },
  "Button":{
    content:'按钮文本', // 文本内容
    style:{
      isFullWidth: false,
      width: 80,
      height: 40,
      fontSize: 12, // 字号
      margin:'0 auto', // 对齐方式
      textAlign:'center',
      color:'#fff', // 字体颜色
      backgroundColor:'#409EFF', // 背景颜色
      borderRadius: 4, 
      borderColor:'#000' // 边框颜色
    }
  },
  "Form":{
    name:true,
    phone:true,
    code:true,
    style:{
      paddingTop: 12,
      paddingRight: 12,
      paddingBottom: 12,
      paddingLeft: 12,
    }
  },
  // ImgProp:{
  //   style:{
  //     isFullWidth: false,
  //     width: 80,
  //     height: 40,
  //     margin:'0 auto', // 对齐方式
  //   }
  // }
}

export default menuConfig