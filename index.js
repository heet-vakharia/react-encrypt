import hashEncrypt from "./Encrypt";
import hashDecrypt from "./Decrypt";
export const Encrypt = (str) => {
        let pass = ""
        for(let i = 0;i<str.length;i++){
          pass = pass + hashEncrypt[str[i]];
        }
        return pass;
}
export const Decrypt = (hash) => {
        const hashArr = hash.match(/.{7}/g)
        const strArr= [];
        hashArr.map(str => {
          strArr.push(data1[str])
        })
        return strArr.join("");
} 