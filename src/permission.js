import router from "./router";
import { getToken, getRole } from "@/utils/auth"; // getToken from cooki
import store from "./store";
const whiteList = ["/login"]; // 不重定向白名单
router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === "/login") {
            next("/");
        } else {
            if (store.getters.menState === 0) {
                store.dispatch("GenerateRoutes", ['admin']).then(res => {
                    store.dispatch("GetMenuState", 1);
                    router.addRoutes(store.getters.addRouters);
                    if (to.redirectedFrom) {
                        next(to.redirectedFrom);
                    } else {
                        next({...to, replace: true });
                    }
                });
            } else {
                next();
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next("/login");
        }
    }
});

router.afterEach(() => {
    // console.log('aaaaaaa')
});