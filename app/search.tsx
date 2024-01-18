'use client'

var searchTxt : string = "";
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
    }
    function clearInput(e : any){
        e.target.parentNode.firstChild.value = "";
        e.target.style = "width:0px;padding-left:0px;padding-right:0px;border:0px;";
        e.target.innerHTML = "";
    }
    return (
        <div className="w-full my-6 grid text-left justify-items-center sticky top-20 max-w-5xl">
            <div className="w-full h-fit">
                <input onChange={onInput} type="search" placeholder="Browse for Devlogs / Games / Tools" className="globalSearch grid text-left lg:max-w-5xl w-full lg:grid-cols-1 p-5 dark:bg-gray-900 rounded-2xl border-transparent dark:border-gray-700 focus:dark:border-gray-500 focus:outline-none transition border-2 focus:dark:bg-gray-800" />
                <button onClick={clearInput} className="dark:bg-gray-900 p-3 z-10 h-full top-0 absolute right-0 rounded-2xl dark:border-gray-700 border-2 transition-all mb-3 text-4xl font-semibold text-gray-600"></button>
            </div>
        </div>
    );
}