import API from "../api";
// import axios from "../request.js";
import { fetch } from "../requestTwo";
// 登录
export function UserLogin(obj) {
    return fetch(API.login, { tokenStatus: 0, data: obj, method: "POST" });
}