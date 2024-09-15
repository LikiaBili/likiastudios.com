"use client"

import Image from "next/image";
import exp from "constants";
import {SearchBar} from "@/app/search";
import Link from "next/link";
import {BannerLabel, Gap} from "@/app/widgets";
import {useState} from "react";

const headerColor = `70,70,70`;
var menuOpened = false;
var menuHorizPos = -300;
const fetchMenuStyle = () => {
    if(menuOpened){
        return "w-[300px] h-full bg-neutral-800 fixed top-0 transition-all bg-opacity-10 backdrop-blur-md transition-all pt-[130px] z-[60] border-r-neutral-600 border-r-2 overflow-y-contain";
    }
    return "w-[300px] h-full bg-neutral-800 fixed translate-x-[-300px] top-0 transition-all bg-opacity-10 backdrop-blur-md transition-all pt-[130px] z-[60] border-r-neutral-600 border-r-2 overflow-y-contain";
};

export function MenuButton(){
    return (
        <Image src={"/StudiosMini.png"} alt={"LikiaStudios"} width={70} height={70} className={"fixed left-[20px] top-[10px] p-[5px] border-2 border-neutral-700 bg-neutral-800 hover:border-neutral-600 rounded-3xl cursor-pointer transition-all z-[70]"} tabIndex={1}
               onClick={()=>{
                   menuOpened = !menuOpened;
                   const menu = document.getElementById("page-menu");
                   if(menu == null){
                       return;
                   }
                   if(menuOpened){
                       menuHorizPos = 0;
                   }else{
                       menuHorizPos = -300;
                   }
                   menu.className = fetchMenuStyle();
               }}
        />
    );
}

export function PageHeader({includeSearch} : {includeSearch : boolean}){
    let searchElement;
    if(includeSearch){
        searchElement = (<SearchBar/>);
    }
    return (
        <div className={"w-full bg-gray-800 h-[95px] fixed top-0 z-[50] bg-opacity-40 backdrop-blur-xl grid-rows-1 grid-cols-5 grid justify-items-center opacity-100"} id={"pageHeader"}>
            <div className={"ml-auto mr-auto top-3 fixed"}>{searchElement}</div>
        </div>
    );
}

export function SideMenu(){
    return (
        <div className={fetchMenuStyle()} id={"page-menu"}>
            <MenuTab href={"/"} text={"Home"} icon={"/icons/home.svg"}/>
            <Gap/>
            <Gap/>
            <Gap/>
            <Gap/>
            <Gap/>
            <MenuTab href={"https://likiastudios.com"} text={"Back to Stable"} icon={"/icons/undo.svg"}/>
        </div>
    );
}
export function MenuTab({href,text,icon}:{href:string,text:string,icon:string}){
    return (
        <Link href={href} className={"w-full flex font-semibold text-2xl bg-neutral-700 backdrop-blur-lg bg-opacity-20 pl-0 hover:pl-[30px] p-[15px] transition-all group/menutab"}>
            <div className={"group-hover/menutab:opacity-50 opacity-0 transition-all text-3xl pr-[5px]"}>{">"}</div>
            <Image src={icon} alt={text} width={40} height={40} className={"dark:invert"}/>
            <div className={"pl-[5px] pt-[4px]"}>
                {text}
            </div>
        </Link>
    );
}

export function HeaderTab({text,href} : {text : string,href : string}){
    return (
        <div className={"border-b-2 w-[99.5%] group/headtab relative border-gray-300 border-opacity-50"}>
            <div className={"w-full h-[150%]"}>
                <Link href={href}>
                    <div className={"w-full h-5 z-0 bg-gradient-to-b from-gray-900 group-hover/headtab:from-gray-800 to-transparent transition-all absolute group-hover/headtab:animate-bigwave"}></div>
                    <p className={"font-semibold text-2xl absolute bottom-0 text-center w-[100%] opacity-[4%] translate-y-10 transition-all z-0 animate-flashy"}>{text}</p>
                    <p className={"font-semibold text-2xl absolute bottom-0 text-center w-[100%] opacity-0 group-hover/headtab:opacity-100 group-hover/headtab:translate-y-10 transition-all z-0"}>{text}</p>
                </Link>
            </div>
        </div>
    );
}

export function PageBottom({alwaysShow}:{alwaysShow?:boolean}){
    if(alwaysShow == null){
        alwaysShow = true;
    }
    const [isShow,setShow] = useState(alwaysShow);
    const getTranslate = () => {
        if(isShow) return "";
        return "-translate-x-full";
    };

    var switcher = [];

    if(!alwaysShow){
        switcher.push(
            <div className={"motion-reduce:transform-non font-black absolute bottom-2 right-2 border-2 w-6 text-nowrap text-center pl-1 pr-5 select-none border-neutral-700 bg-neutral-800 hover:border-neutral-600 rounded-3xl cursor-pointer transition-all z-[70] "} onClick={() => {setShow(false)}}>
                {"<-"}
            </div>
        );
        switcher.push(<div className={"motion-reduce:transform-non font-black absolute bottom-2 -right-10 border-2 w-6 text-nowrap text-center pl-1 pr-5 select-none border-neutral-700 bg-neutral-800 hover:border-neutral-600 rounded-3xl cursor-pointer transition-all z-[70] "} onClick={() => {setShow(true)}}>
            {"->"}
        </div>
        );
    }

    return (
        <div className={"w-full bg-neutral-900 h-fit min-h-64 border-t-4 border-neutral-800 rounded-t-3xl transition-all relative "+ getTranslate()}>
            {switcher}
            <div className={"columns-3 h-fit grid grid-cols-5 gap-10 text-center p-6"}>
                <div className={"relative"}>
                    <BannerLabel text={"Beta"} offset={"top-0 -right-4"}/>
                    <Image src={"/StudiosSite.png"} alt={"LikiaStudios"} width={437.5} height={75} className={"row-span-1 ml-auto mr-auto mt-5"}/>
                    <p className={"row-span-2 font-bold text-right mt-3 text-xl"}>{"© LikiaStudios 2024"}</p>
                    <p className={"row-span-2 font-semibold text-right mt-1"}>{"Powered by Likia"}</p>
                    <p className={"row-span-2 font-semibold text-right mt-1"}>{"Running site Beta V0.2.0 Deployment 5"}</p>
                </div>
                <div>
                    <p className={"break-keep text-nowrap row-span-1 text-2xl font-semibold text-left lg:pl-5"}>{"Our Socials!"}</p>
                    <div className={"grid-cols-3 grid grid-rows-1"}>
                        <MiniLink text={"Likia琳卡"} imgsrc={"/icons/bilibili.svg"} dest={"https://space.bilibili.com/514993873"}/>
                        <MiniLink text={"Likia"} imgsrc={"/icons/itchio.svg"} dest={"https://likia.itch.io"}/>
                        <MiniLink text={"LikiaBili"} imgsrc={"/icons/github.svg"} dest={"https://github.com/LikiaBili"}/>
                        <MiniLink text={"LikiaBili"} imgsrc={"/icons/twitch.svg"} dest={"https://twitch.tv/likiabili"}/>
                        <MiniLink text={"Likia"} imgsrc={"/icons/youtube.svg"} dest={"https://www.youtube.com/channel/UC9gcwv4rzPYV2IHYaWwseAw"}/>
                        <MiniLink text={"Likia IKEA"} imgsrc={"/icons/discord.svg"} dest={"https://discord.com/invite/TawnmF5rkM"}/>
                    </div>
                    <p className={"break-keep text-nowrap row-span-1 text-2xl font-semibold text-left lg:pl-5 mt-3"}>{"Other Links"}</p>
                    <div className={"grid-cols-3 grid grid-rows-1"}>
                        <MiniLink text={"SkyLC"} imgsrc={"/icons/bilibili.svg"} dest={"https://space.bilibili.com/39496734"}/>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <p className={"font-semibold text-center mt-10 pb-3"}>{"Looks like you reached the end of time (*/ω＼*)"}</p>
        </div>
    );
}

export function MiniLink({text,imgsrc,dest} : {text:string,imgsrc:string,dest:string}){
    return (
        <a href={dest} className={"group/minilink"}>
            <Image src={imgsrc} alt={text} height={30} width={30} className={"inline-block invert"}/>
            <p className={"break-keep text-nowrap m-0 p-0 ml-1 inline-block pt-1 underline-offset-2 underline group-hover/minilink:underline-offset-4 transition-all opacity-0 lg:opacity-100 group-hover/minilink:opacity-100"}>{text}</p>
        </a>
    );
}