/* 
Nuxt配置文件
 */
module.exports = {
    router: {
        // 静态页面配置到github需要
        base: "/NuxtBaseTemplate/",
        // 修改选中路由的样式
        linkActiveClass: "active",
        // 自定义路由
        extendRoutes(routes, resolve) {
            // 清空Nuxt基于pages目录自动生成的路由表规则
            routes.splice(0);
            routes.push(
                ...[
                    {
                        path: "/",
                        component: resolve(__dirname, "pages/layout/"),
                        children: [
                            {
                                path: "", // 默认子路由
                                name: "home",
                                component: resolve(__dirname, "pages/home/")
                            },
                            {
                                path: "/login",
                                name: "login",
                                component: resolve(__dirname, "pages/login/")
                            },
                            {
                                path: "/register",
                                name: "register",
                                component: resolve(__dirname, "pages/login/")
                            },
                            {
                                path: "/profile/:username",
                                name: "profile",
                                component: resolve(__dirname, "pages/profile/")
                            },
                            {
                                path: "/settings",
                                name: "settings",
                                component: resolve(__dirname, "pages/settings/")
                            },
                            {
                                path: "/editor",
                                name: "editor",
                                component: resolve(__dirname, "pages/editor/")
                            },
                            {
                                path: "/article/:slug",
                                name: "article",
                                component: resolve(__dirname, "pages/article/")
                            }
                        ]
                    }
                ]
            );
        }
    },

    server: {
        host: "0.0.0.0",
        port: 3000
    },

    plugins: ["~/plugins/request.js", "~/plugins/dayjs.js"],

    generate: {
        dir: "docs",
        subFolders: false
    }
};
