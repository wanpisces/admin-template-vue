/**
 * 路由同步路由与异步权限路由
 */
import { asyncRouterMap, constantRouterMap } from "../../router/index";

/*
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.indexOf(role) >= 0);
    } else {
        return true;
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles);
            }
            return true;
        }
        return false;
    });
    return accessedRouters;
}
const permission = {
    state: {
        routers: [],
        addRouters: [],
        menState: 0
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            // console.log("staterouters", constantRouterMap);
            state.addRouters = routers;
            state.routers = constantRouterMap.concat(routers);
        },
        SET_MENUSTATE: (state, menState) => {
            state.menState = menState;
        }
    },
    actions: {
        GenerateRoutes({ commit }, data) {
            const roles = data;
            return new Promise(resolve => {
                let accessedRouters = [];
                accessedRouters = filterAsyncRouter(
                    asyncRouterMap,
                    roles
                );
                commit("SET_ROUTERS", accessedRouters);
                resolve();
            });
        },
        GetMenuState({ commit }, data) {
            return new Promise(resolve => {
                commit("SET_MENUSTATE", data);
                resolve();
            });
        }
    }
};

export default permission;