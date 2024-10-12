/*
*  作为左侧物料区的物料数据
*  key： 物料唯一主键，和./props.js文件中的key属性名保持一致
*  label：物料名称
*  icon：物料图标
*  middleComp：对应中间编排区的组件名称
*  rightComp：对应右侧配置面板的组件名称
*/

const menuConfig = [
  {
    key: 'Img',
    label: '图片',
    icon: 'Picture',
    middleComp:'ImgEdit',
    rightComp:'ImgProp',
  },
  {
    key: 'Text',
    label: '文本',
    icon: 'EditPen',
    middleComp:'TextEdit',
    rightComp:'TextProp',
  }, {
    key: 'Form',
    label: '表单',
    icon: 'Document',
    middleComp:'FormEdit',
    rightComp:'FormProp',
  },{
    key: 'Button',
    label: '按钮',
    icon: 'Pointer',
    middleComp:'ButtonEdit',
    rightComp:'ButtonProp',
  }
]
export default menuConfig