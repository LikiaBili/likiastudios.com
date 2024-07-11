"use client"

import {createRoot, Root} from "react-dom/client";

export function getUserLanguage() : "en_us" | "zh_cn"{
    //TODO: read user language from cookie
    return "en_us";
}

type stringRootPair = {
    [key:string] : Root
};
var object:stringRootPair = {}; //Stores all the root here

export function GetRootByKey(key: string,document : Document) : Root{
    if(key in object){
        return object[key];
    }else{
        object[key] = createRoot(document.getElementById(key));
        return object[key];
    }
}