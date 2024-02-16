
import { promises as fs } from 'fs';
import {findDevlog} from "@/app/article/devlog";
import {getUserLanguage} from "@/app/clientScripts";
import Markdown from "markdown-to-jsx";
import {ListElement, CustomText, UnorderedList} from "@/app/article/widgets";

export default async function Page({params} : {params : {bid : string}}){
    let devlog = findDevlog(params.bid);
    let userLanguage : "en_us" | "zh_cn" = "en_us";
    let pageText = await fs.readFile(process.cwd() + '/app/article/' + devlog["document"][userLanguage], 'utf8');
    function render(){
        return (
                <Markdown options={{
                    overrides: {
                        h1: {
                            component: "h1",
                            props:{
                                className: 'text-3xl font-semibold my-5 w-full mb-4'
                            }
                        },
                        p: ({ children }) => <CustomText>{children}</CustomText>,
                        ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
                        li: ({ children }) => <ListElement>{children}</ListElement>
                    }
                }}>{pageText}</Markdown>
        );
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="p-4 bg-neutral-800 rounded-2xl border border-neutral-600 w-full text-center">
                <h1 className="text-3xl font-semibold my-5 w-full">
                    {devlog["title"][userLanguage]}
                </h1>
                <p className="text-m font-semibold inline-block text-neutral-400 mx-2 mb-3">
                    {devlog["author"]}
                </p>
                <p className="text-m font-semibold inline-block text-neutral-400 mx-2 mb-3">
                    {devlog["time"]}
                </p>
                <a className="rounded-md bg-neutral-700 border border-neutral-500 text-s p-1 font-semibold my-5 mx-2 mb-3 hover:bg-neutral-600 hover:border-neutral-400 transition-colors" href="../..">
                    {"Back ->"}
                </a>
                <p className="text-m font-semibold text-neutral-300 mx-2">
                    {devlog["desc"][userLanguage]}
                </p>
                <div className="text-left bg-gray-800 border-gray-700 border-2 p-3 rounded-xl mt-6">
                    {render()}
                </div>
            </div>
        </main>
    );
}