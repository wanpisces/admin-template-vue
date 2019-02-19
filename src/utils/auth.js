import Cookies from "js-cookie";

const TokenKey = "token";
const RoleType = "role_type";

export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: 1 });
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}
//获取角色
export function getRole() {
    return Cookies.get(RoleType);
}
export function setRole(role_type) {
    return Cookies.set(RoleType, role_type);
}

export function removeRole() {
    return Cookies.remove(RoleType);
}