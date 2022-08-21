import { useSelector } from "react-redux";
import { Decrypt, Encrypt, getCookie } from "./utils";
const _ = require("lodash");



export const set_handleLogout = (dic) => {
  document.cookie =
    "VBID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=vikncodes.in";

  // ==================RECENT USERS==================
  let recent_login_users = getCookie("ACCOUNT_CHOOSER");
  let data = [];
  let data_exists = {};
  if (recent_login_users) {
    data = Decrypt(JSON.parse(recent_login_users));
    data_exists = _.find(data, function (o) {
      return o.username == dic["username"];
    });
  }

  if (_.isEmpty(data_exists)) {
    data.push(dic);
    console.group("^^^^^IFFF^^^^^^^^^^^&*");
  } else {
    console.group("^^^^^ELSE^^^^^^^^^^^&*");
  }

  data = data.slice(-2);
};



export function CheckUserName(users,username) {
  if(_.find(users, {username: username})) {
    return true
  }else {
    return false
  }
}

export function CheckAuthentication(users,username,password) {
  if(_.find(users, {username: username})) {
    let user = users.filter((i) => i.username === username)[0]
    let user_pswd = user.password
    let response = {}
    if(Decrypt(user_pswd) === password){
      response = {StatusCode: 6000,message: "success"}
    }else {
      response = {StatusCode: 6002,message: "incorrect password"}
    }
    return response
  }else {
    return {StatusCode: 6001,message: "user not found"}
  }
}