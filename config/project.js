/**
 * 项目相关配置
 */
module.exports = {
    // 是否将 jQuery 注入成全局变量
    useJqueryAsGlobal: true,
    // 开发环境服务器设置
    devServer: {
        host: 'localhost',
        port: 9000
    },
    // 开发阶段是否分离第三方打包插件
    useDllReferencePlugin: true,
    // 是否开启热加载
    useHotLoad: true,
    // 是否开启代理服务器
    useProxyServer: true
}
