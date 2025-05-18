"use client"

import Image from "next/image";
import {GetRootByKey} from "@/app/clientScripts";
import {ReactElement, useState} from "react";
import {element} from "prop-types";

export function Back(){
    return(
        <p className="cursor-pointer select-none inline-flex rounded-md bg-neutral-800 border border-neutral-700 text-gray-200 text-s p-1 m-2 font-semibold hover:bg-neutral-700 hover:border-neutral-600 transition-colors" onClick={()=>{window.history.back()}}>
            {"Back ->"}
        </p>
    );
}

export function ViewSource({pageText} : {pageText:string}){
    const [isViewing,setIsViewing] = useState(false);

    return(
        <div className="cursor-pointer select-none rounded-md inline-flex bg-neutral-800 border border-neutral-700 text-gray-200 text-s p-1 m-2 font-semibold hover:bg-neutral-700 hover:border-neutral-600 transition-colors" onClick={() => {
            const root = GetRootByKey("md-source",document);
            const rendered = document.getElementById("md-rendered");

            if(isViewing) {
                root.render(<div/>);
                if(rendered) rendered.classList.remove("opacity-0","h-0");
                setIsViewing(false);
                return;
            }

            setIsViewing(true);

            if(rendered) rendered.classList.add("opacity-0","h-0");
            root.render(<div>
                <h1 className={"text-2xl font-thin m-2"}>{"Markdown Source"}</h1>
                <p className={"whitespace-pre-line font-mono p-4 bg-neutral-900 border-neutral-700 border"}>{pageText}</p>
            </div>);

        }}>
            {"Source"}
            <Image src={"/icons/frame_source.svg"} alt={"View source"} width={24} height={24}/>
        </div>
    );
}