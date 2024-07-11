import Image from 'next/image'
import {Gap, HomeSection, SectionLink, SubBlockLink} from './widgets'
import {SearchBar} from "./search";
import {Devlog} from "@/app/article/widgets";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <Gap/>
        <Gap/>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2
       before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']
        after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200
         after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700
          before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]
          m-16
          ">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/StudiosSite.png"
          alt="LikiaStudios Logo"
          width={584}
          height={100}
          priority
        />
      </div>

      <Gap/>

      <SearchBar/>

      <Gap/>

      <div className="grid text-center lg:max-w-5xl max-w-screen-2xl w-full mb-0 lg:grid-cols-2 lg:text-left">
        <div className="grid text-center lg:max-w-5xl lg:w-full mb-0 lg:grid-cols-1 lg:text-left">
            <HomeSection title="Devlogs" desc={"What our experts been working on around the clock"} child={<div id={"devlogs_tab_root"}>
                <Devlog section={0}/>
            </div>}/>
        </div>
        <div className="grid text-center lg:max-w-5xl w-full mb-0 lg:grid-cols-1 lg:text-left">
          <SectionLink title="Code Clicker" link="https://likiastudios.com/codeclicker" desc="A incremental game inpired by Cookie Clicker">
          </SectionLink>
            <HomeSection title="Tools" desc="Plenty of useful (or not) tools for free" child={<div>
                    <SubBlockLink link={"https://likiastudios.com/splatools"} title={"Splatools"} desc={"Splatoon 3 Related calculators online"}/>
                </div>}
            />
        </div>
      </div>
    </main>
  )
}
