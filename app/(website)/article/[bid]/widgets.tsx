"use client"

import Image from "next/image";
import {GetRootByKey} from "@/app/clientScripts";
import {ReactElement, useState} from "react";
import {element} from "prop-types";

export function Back(){
    return(
        <p className="cursor-pointer inline-flex rounded-md bg-neutral-800 border border-neutral-700 text-gray-200 text-s p-1 m-2 font-semibold hover:bg-neutral-700 hover:border-neutral-600 transition-colors" onClick={()=>{window.history.back()}}>
            {"Back ->"}
        </p>
    );
}

export function ViewSource({pageText} : {pageText:string}){
    const [isViewing,setIsViewing] = useState(false);

    return(
        <div className="cursor-pointer rounded-md inline-flex bg-neutral-800 border border-neutral-700 text-gray-200 text-s p-1 m-2 font-semibold hover:bg-neutral-700 hover:border-neutral-600 transition-colors" onClick={() => {
            const root = GetRootByKey("devlog-source",document);

            if(isViewing) {
                root.render(<div/>);
                setIsViewing(false);
                return;
            }

            setIsViewing(true);
            let pageSource:ReactElement[] = [];
            let spiltText = pageText.split("\n");
            for (let idx in spiltText) {
                pageSource.push(<p key={`${idx}`}>{spiltText[idx]}</p>);
            }

            root.render(<div className={"bg-neutral-900 border-neutral-800 p-5 rounded-3xl border-2"}>
                <div className={"border-b-4 border-b-neutral-700 pb-2 mb-2"}>
                    <p className={"font-semibold text-2xl"}>{"Page Source"}</p>
                </div>
                {pageSource}
            </div>);
        }}>
            {"Source"}
            <Image src={"/icons/frame_source.svg"} alt={"View source"} width={24} height={24}/>
        </div>
    );
}