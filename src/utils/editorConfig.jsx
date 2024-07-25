// let registerConfig = createEditorConfig()
// registerConfig.register({label:"文本"，preview: () => '预览文本',render:() => '渲染文本',key:'text'})
import {ElButton} from 'element-plus'
function createEditorConfig () {

  const componentList = [] // 组件list用于left物料区
  const componentMap = {} // 中间区域，通过key对应的组件map映射关系

  return {
    componentList,
    componentMap,
    register: (component) => {
      
     componentList.push(component)
     componentMap[component.key] = component
    }
  }
}

export let registerConfig = createEditorConfig()

registerConfig.register({
  key:'text',
  label:"文本",
  preview: () => '预览文本',
  render:() => '渲染文本'
})

registerConfig.register({
  key:'button',
  label:"按钮",
  preview: () => <ElButton>预览按钮</ElButton>,
  render:() => <ElButton>渲染按钮</ElButton>
})