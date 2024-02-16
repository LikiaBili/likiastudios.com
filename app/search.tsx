'use client'

import Image from "next/image";
import searchIcon from "./img/icons/search.svg"

var searchTxt : string = "";

function search(){

}

export function SearchBar(){
    function onInput(e : any){
        searchTxt = e.target.value;
        if(searchTxt == ""){
            e.target.parentNode.lastChild.style = "width:0px;padding-left:0px;padding-right:0px;border:0px;";
            e.target.parentNode.lastChild.innerHTML = "";
        }else{
            e.target.parentNode.lastChild.style = "width:unset;";
            e.target.parentNode.lastChild.innerHTML = "✖";
        }
        var results = search();
    }
    function clearInput(e : any){
        e.target.parentNode.childNodes[1].value = "";
        e.target.style = "width:0px;padding-left:0px;padding-right:0px;border:0px;";
        e.target.innerHTML = "";
    }
    return (
        <div className="w-full my-6 grid text-left justify-items-center sticky top-3 max-w-5xl z-50">
            <div className="w-full h-fit flex">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-3"
                    src={searchIcon}
                    alt="search icon"
                    height={50}
                    width={50}
                />
                <input onChange={onInput} disabled={true} type="search" placeholder="Coming Soon!" className="globalSearch grid text-left lg:max-w-5xl w-full lg:grid-cols-1 p-5 dark:bg-gray-900 rounded-2xl border-transparent dark:border-gray-700 focus:dark:border-gray-500 focus:outline-none transition border-2 focus:dark:bg-gray-800" />
                <button onClick={clearInput} className="dark:bg-gray-900 p-3 z-10 h-full top-0 absolute right-0 rounded-2xl dark:border-gray-700 border-2 transition-all mb-3 text-4xl font-semibold text-gray-600" style={{width:0+"px",paddingLeft:0+"px",paddingRight:0+"px",border:0+"px"}}></button>
            </div>
            <div></div>
        </div>
    );
}