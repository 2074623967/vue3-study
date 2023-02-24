module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/theme-chalk/${name}.css`
        },
        // 导入的名字去除el-
        customName: (name) => {
          return `element-plus/lib/components/${name.slice(3)}`
        }
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
————————————————
版权声明：本文为CSDN博主「YanzYan」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/YanzYan/article/details/123634849
