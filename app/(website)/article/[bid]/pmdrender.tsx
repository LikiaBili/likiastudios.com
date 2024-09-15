"use client"

import React, {ReactNode} from "react";
import {string} from "prop-types";
import Image from "next/image";


interface CustomComponentProps {
    children: ReactNode; // ReactNode allows any valid JSX to be passed as children
}

export const ListElement: React.FC<CustomComponentProps> = ({ children }) => {
    if(children != null && children.toString().startsWith("/title ")){
        return (
            <div className={"group/uljsx mb-2 p-1 w-fit transition-transform"}>
                <span className={"text-gray-400 transition-all select-none text-2xl font-bold"}>{">"}</span>
                <span className={"text-gray-400 mr-2 group-hover/uljsx:ml-2 group-hover/uljsx:mr-4 transition-all select-none text-2xl font-bold"}>{">"}</span>
                <span className="font-semibold text-xl ">{children.toString().replace("/title ","")}</span>
            </div>
        );
    }
    return (
        <div className={"group/listjsx mb-2 bg-gray-800 p-1 w-fit hover:translate-x-2 hover:bg-gray-900 transition-transform border-2 rounded-md border-gray-700"}>
            <span className={"mr-3 text-gray-400 ml-1 group-hover/listjsx:mr-5 group-hover/listjsx:text-gray-500 transition-all select-none font-semibold text-l"}>|</span>
            <span className="mr-2">{children}</span>
        </div>
    );
}
export const UnorderedList: React.FC<CustomComponentProps> = ({ children }) => {
    return (
        <div className={"group/uljsx w-fit pl-4 pb-2 mb-4 mt-3 border-l-2 hover:ml-2 transition-all border-dashed border-neutral-400"}>
            {children}
        </div>
    );
}

export function parseCustomString(str : string){
    if(str != null && str.toString().startsWith("/")){
        if(str.toString().startsWith("/custom ")){
            return (<div dangerouslySetInnerHTML={{__html: str.toString().replace("/custom ","")}}/>);
        }
        if(str.toString().startsWith("/blank")){
            if(str.toString().startsWith("/blank-")){
                return (<div className={"h-"+str.toString().replace("/blank-","")+" w-full"}/>);
            }
            return (<div className={"h-3 w-full"}/>);
        }
    }
    return (<p className={"mb-2"}>{str}</p>);
}

export const CustomText: React.FC<CustomComponentProps> = ({ children }) => {
    let childArray = React.Children.toArray(children);
    let resultArray : React.JSX.Element[] = [];
    childArray.forEach((child, index) => {
        //console.log(child);
        if(child instanceof string){
            resultArray.push(parseCustomString(child.toString()));
        }else if(React.isValidElement(child)){
            resultArray.push(child);
        }
    });
    return resultArray;
}
export function DevlogImage({src,alt}:{src:string,alt:string}){
    return (
        <div className="flex justify-center items-center relative h-64">
            <Image src={src} alt={alt} fill={true} className={"object-contain"} onClick={() => {

            }}/>
        </div>
    );
}