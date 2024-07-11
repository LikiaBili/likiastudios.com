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