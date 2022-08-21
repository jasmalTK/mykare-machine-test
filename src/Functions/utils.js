import { useEffect } from "react";
import SimpleCrypto from "simple-crypto-js";




export function stringCamelCase(string) {
  var split_string = string.split(" ");

  let final_arr = [];
  let final_name = "";

  for (let index = 0; index < split_string.length; index++) {
    const element = split_string[index];
    let name = element.charAt(0).toUpperCase() + element.slice(1);
    console.log(name);
    if (final_name) {
      final_name += " " + String(name);
    } else {
      final_name = String(name);
    }
    final_arr.push(final_name);
  }
  var lastItem = final_arr.pop();
  return lastItem;
}
// truncate number of words by passing the paragraph and number
export function truncate(str, num = 12) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
// to check the list of values is present in the array
export const listChecker = (arr, target) =>
  target.every((v) => arr.includes(v));


// to get index value from a array by passing array by passing the list of values and number
export const get_index = (list, id) => {
  let index = null;
  if (list) {
    // index = list.findIndex((i) => console.log(i.id, "FIXING BUG", id));
    index = list.findIndex((i) => i.id === id);
  }
  return index;
};



// just pass the id to show the password
export const showPassword = (id) => {
  var x = document.getElementById(id);
  console.log(x);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};

// to get avatar images just pass a value you will get a random image
export const getAvatar = (value = "1", imageType = "identicon", res = 46) => {
  const hashCode = (s) =>
    s.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return Math.abs(a & a);
    }, 0);

  // Create an hash of the string
  const hash = hashCode(value);
  // Grab the actual image URL

  // return `https://avatars.dicebear.com/api/${imageType}/${hash}.svg`;
  return `https://www.gravatar.com/avatar/${hash}?s=${res}&d=${imageType}&r=PG&f=1`;
};



export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};


export const getDecryptedData = (ciphertext) => {
  let decryptedData = Decrypt(ciphertext);
  console.log("typeof", ciphertext, "ULLIL>>>>>>>>>>");
  return decryptedData;
};

export function Encrypt(word, key = "share") {
  var CryptoJS = require("crypto-js");
  let encJson = CryptoJS.AES.encrypt(JSON.stringify(word), key).toString();
  let encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson));
  return encData;
}
export function Decrypt(word, key = "share") {
  var CryptoJS = require("crypto-js");
  let decData = CryptoJS.enc.Base64.parse(word).toString(CryptoJS.enc.Utf8);
  let bytes = CryptoJS.AES.decrypt(decData, key).toString(CryptoJS.enc.Utf8);
  return JSON.parse(bytes);
}


export function containsWhitespace(str) {
  return /\s/.test(str);
}

export function EncryptBase64(data) {
  var encoded = btoa(JSON.stringify(data));
  return encoded;
}

