// import 'element-plus/dist/index.css' // 引入element样式文件
// 按需引入element组件
import { ElButton } from 'element-plus'
// 按需引入elelment图标
// import { Edit, Tools, Location, Setting } from '@element-plus/icons-vue'

export default (app) => {
  app.use(ElButton)
}
