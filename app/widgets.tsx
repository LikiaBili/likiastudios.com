'use client'

import {MouseEventHandler, ReactElement} from "react";
import Image from "next/image";
import articleIcon from "../public/icons/article.svg";

export function HomeSection({title, desc, child}: { title: string, desc : string , child : ReactElement}){
    return (
        <div
            className="text-left group/block rounded-lg border border-transparent px-5 py-4 mx-3 min-h-fit my-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:bg-neutral-900/30 bg-gray-100 border-gray-300 dark:border-neutral-800"
        >
            <h2 className={`mb-3 text-2xl font-semibold inline-block`}>
                {title}
            </h2>
            <h2 className="translate-x-1 mb-3 text-2xl font-semibold inline-block transition-transform group-hover/block:translate-x-3 motion-reduce:transform-none text-gray-400 dark:text-gray-600">/</h2>
            <h2 className="translate-x-1 mb-3 text-2xl font-semibold inline-block transition-transform group-hover/block:translate-x-5 motion-reduce:transform-none text-gray-400 dark:text-gray-600">/</h2>
            <h2 className="translate-x-1 mb-3 text-2xl font-semibold inline-block transition-transform group-hover/block:translate-x-7 motion-reduce:transform-none text-gray-400 dark:text-gray-600">/</h2>

            <p className="dark:text-gray-400 mb-5 text-gray-500 text-xs transition-transform group-hover/block:translate-x-1 lg:group-hover/block:translate-x-2 motion-reduce:transform-non">{desc}</p>

            {child}
        </div>
    );
}
export function SectionLink({link,title,desc}: { link : string ,title: string, desc : string}){
    return (
        <a
            href={link}
            className="group rounded-lg border border-transparent px-5 py-4 mx-3 my-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:bg-neutral-900/30 bg-gray-100 border-gray-300 dark:border-neutral-800"
            rel="noopener noreferrer"
        >
            <h2 className={`mb-3 text-2xl font-semibold inline-block`}>
                {title}
            </h2>
            <h2 className="mb-3 text-2xl font-semibold inline-block translate-x-1 transition-transform lg:group-hover:translate-x-3 motion-reduce:transform-non text-gray-850 dark:text-gray-150">{"->"}</h2>

            <p className="text-sm dark:text-gray-300 text-gray-800 group-hover:dark:text-gray-100 group-hover:text-gray-950 transition lg:group-hover:translate-x-2">{desc}</p>
        </a>
    );
}
export function SubBlockLink({link,title,desc}: { link : string ,title: string, desc : string}){
    return (
        <a href={link}>
        <div
            className="group/link rounded-2xl border p-4 my-2 w-full h-fit transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-800/30 dark:bg-neutral-900/30 bg-gray-100 border-gray-300 dark:border-neutral-800"
            rel="noopener noreferrer"
        >
            <h2 className={`mb-3 text-2xl font-semibold inline-block`}>
                {title}
            </h2>
            <h2 className="mb-3 text-2xl font-semibold inline-block translate-x-1 transition-transform lg:group-hover/link:translate-x-3 motion-reduce:transform-non text-gray-850 dark:text-gray-150">{"->"}</h2>

            <p className="text-sm dark:text-gray-300 text-gray-800 group-hover/link:dark:text-gray-100 group-hover/link:text-gray-950 transition lg:group-hover/link:translate-x-2">{desc}</p>
        </div>
        </a>
    );
}
export function ComingSoon(){
    return (<div className="group/soon p-4 bg-gray-900 hover:bg-gray-800 transition-all rounded-xl m-3 border-2 hover:border-gray-700 border-gray-800">
        <h2 className={`mb-3 text-2xl font-semibold inline-block`}>Coming Soon!</h2>
        <p className="group-hover/soon:h-fit h-0 opacity-0 group-hover/soon:opacity-100 transition-all">This website is currently under heavy development, this may be done in just a few days!</p>
    </div>);
}

export function Gap(){
    return (
        <div className="h-32 my-30 w-full"/>
    );
}

export function Button({text,onClick,disabled} : {text : string,onClick : MouseEventHandler<HTMLDivElement>,disabled : boolean}){
    if(disabled){
        return (
            <div className={"h-fit w-fit p-2 pl-3 pr-3 bg-neutral-800 border-neutral-900 hover:border-neutral-700 border rounded-xl font-semibold text-2xl select-none cursor-not-allowed transition-all"} onClick={onClick} rel="noopener noreferrer">
                {text}
            </div>
        );
    }
    return (
        <div className={"h-fit w-fit p-2 pl-3 pr-3 bg-neutral-900 border-neutral-800 hover:border-neutral-600 border rounded-xl font-semibold text-2xl select-none cursor-pointer transition-all"} onClick={onClick} rel="noopener noreferrer">
            {text}
        </div>
    );
}