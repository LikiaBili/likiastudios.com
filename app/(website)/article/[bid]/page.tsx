
import { promises as fs } from 'fs';
import {findDevlog} from "../devlog";
import {getUserLanguage} from "@/app/clientScripts";
import Markdown from "markdown-to-jsx";
import {ListElement, CustomText, UnorderedList, DevlogImage} from "./pmdrender";
import Image from "next/image";
import {Back, ViewSource} from "./widgets";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: Params) {
    const params = await props.params;
    let devlog = findDevlog(params.slug);
    let userLanguage : "en_us" | "zh_cn" = "en_us";
    let pageText = await fs.readFile(process.cwd()+'/_articles/'+devlog['id']+'/' + devlog["document"][userLanguage], 'utf8');
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
                        img: ({ src , alt }) => <DevlogImage alt={alt} src={src}/>,
                        p: ({ children }) => <CustomText>{children}</CustomText>,
                        ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
                        li: ({ children }) => <ListElement>{children}</ListElement>
                    }
                }}>{pageText}</Markdown>
        );
    }
    return (
        <main className="flex min-h-screen flex-col items-center gap-20 p-24 pt-48">
            <div className={"w-full text-center"}>
                <h1 className="text-6xl my-5 w-full font-black">
                    {devlog["title"][userLanguage]}
                </h1>
                <span className="text-m font-bold inline-block text-neutral-400 mx-2 mb-3">
                    {devlog["author"]}
                </span>
                <span className="text-m font-bold inline-block text-neutral-400 mx-2 mb-3">
                    {devlog["time"]}
                </span>
                <p className="text-m font-semibold text-neutral-300 mx-2">
                    {devlog["desc"][userLanguage]}
                </p>
            </div>
            <div className="p-4 bg-neutral-900 rounded-2xl border border-neutral-700 w-full text-center">
                <div className={""}>
                    <Back/>
                    <ViewSource pageText={pageText}/>
                </div>
                <div className="text-left p-3 rounded-xl mt-6">
                    <div id={"md-source"}></div>
                    <div id={"md-rendered"}>{render()}</div>
                </div>
            </div>
        </main>
    );
}