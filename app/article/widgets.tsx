"use client"

import {getRecentDevlog,devlogDictionary} from "./devlog"
import {GetRootByKey, getUserLanguage} from "@/app/clientScripts";
import Image from "next/image";
import articleIcon from "@/public/icons/article.svg";
import React, {ReactNode, useState} from "react";
import {renderToString} from "react-dom/server";
import Markdown from "markdown-to-jsx";
import {createRoot} from "react-dom/client";
import {Button, Gap} from "@/app/widgets";
import {className} from "postcss-selector-parser";
import {element, object, string} from "prop-types";
import {log} from "util";

export function Devlog({section}:{section:number}){

    let logsdata = getRecentDevlog({section:section,count:4});
    console.log(logsdata);

    let buffer = [];
    for(let i = 0;i < 4;i++){
        if(i < logsdata.length){
            buffer.push(
                <ArticleBlock title={logsdata[i]["title"][getUserLanguage()]}
                              subtitle={logsdata[i]["time"]+" "+logsdata[i]["author"]}
                              desc={logsdata[i]["desc"][getUserLanguage()]}
                              link={"article/"+logsdata[i]["id"]}/>
            );
        }else {
            buffer.push(<Gap></Gap>);
        }
    }

    let switcherBuffer = [];

    if(section <= 0){
        switcherBuffer.push(
            <div className={"col-start-1"}><Button text={"<-"} onClick={() => {}} disabled={true}></Button></div>
        );
    }else{
        switcherBuffer.push(
            <div className={"col-start-1"}><Button text={"<-"} onClick={() => {
                const nextElement = <Devlog section={section-1}/>;
                GetRootByKey("devlogs_tab_root",document).render(nextElement);
            }} disabled={false}></Button></div>
        );
    }

    if(devlogDictionary.length > (section+1)*4) {
        switcherBuffer.push(
            <div className={"col-start-9"}><Button text={"->"} onClick={() => {
                const nextElement = <Devlog section={section+1}/>;
                GetRootByKey("devlogs_tab_root",document).render(nextElement);
            }} disabled={false}></Button></div>
        );
    }else{
        switcherBuffer.push(
            <div className={"col-start-9"}><Button text={"->"} onClick={() => {}} disabled={true}></Button></div>
        );
    }
    buffer.push(
        <div className={"w-full h-fit grid grid-cols-9 grid-rows-1 transition-all"} id={"devlogsList"}>
            {switcherBuffer}
        </div>
    );

    return (
        buffer
    );
}
export function ArticleBlock({link,title,desc,subtitle}: { link : string ,title: string, desc : string,subtitle:string}){
    return (
        <a href={link}>
            <div
                className="group/link rounded-2xl border p-4 my-2 w-full h-fit transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-800/30 dark:bg-neutral-900/30 bg-gray-100 border-gray-300 dark:border-neutral-800"
                rel="noopener noreferrer"
            >
                <Image
                    src={articleIcon}
                    alt="Article icon"
                    className="dark:invert inline-block -translate-y-1"
                    width={30}
                    height={30}
                />
                <h2 className={`ml-1 text-2xl font-semibold inline-block transition lg:group-hover/link:translate-x-2`}>
                    {title}
                </h2>
                <br></br>
                <h2 className={`translate-x-2 -translate-y-1 text-sm font-semibold inline-block transition lg:group-hover/link:translate-x-6 dark:text-gray-400 text-gray-600`}>
                    {subtitle}
                </h2>

                <p className="text-sm dark:text-gray-400 text-gray-600">{desc}</p>
            </div>
        </a>
    );
}

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
        console.log(child);
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