import DrawCard from "./tools/weaponDrawer";
import Image from "next/image";
import {Gap} from "@/app/widgets";

export default function Home() {
    return(
        <main className={"flex min-h-screen flex-col items-center justify-between p-24"}>
            <Image src={"/tools/splatools/splatools.png"} alt={"Splatools Logo Title"} width={623} height={371}/>
            <DrawCard/>
        </main>
    );
}