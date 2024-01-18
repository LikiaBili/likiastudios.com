'use client'

export function HomeSection({title, desc}: { title: string, desc : string }){
    return (
        <div
            className="text-left group rounded-lg border border-transparent px-5 py-4 mx-3 my-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:bg-neutral-900/30 bg-gray-100 border-gray-300 dark:border-neutral-800"
            rel="noopener noreferrer"
        >
            <h2 className={`mb-3 text-2xl font-semibold inline-block`}>
                {title}
            </h2>
            <h2 className="translate-x-1 mb-3 text-2xl font-semibold inline-block transition-transform group-hover:translate-x-3 motion-reduce:transform-none text-gray-400 dark:text-gray-600">/</h2>
            <h2 className="translate-x-1 mb-3 text-2xl font-semibold inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none text-gray-400 dark:text-gray-600">/</h2>
            <h2 className="translate-x-1 mb-3 text-2xl font-semibold inline-block transition-transform group-hover:translate-x-7 motion-reduce:transform-none text-gray-400 dark:text-gray-600">/</h2>

            <p className="dark:text-gray-400 text-gray-500 text-xs transition-transform group-hover:translate-x-1 lg:group-hover:translate-x-2 motion-reduce:transform-non">{desc}</p>
        </div>
    );
}
export function SectionLink({link,title,desc}: { link : string ,title: string, desc : string}){
    return (
        <a
            href={link}
            className="group rounded-lg border border-transparent px-5 py-4 mx-3 my-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:bg-neutral-900/30 bg-gray-100 border-gray-300 dark:border-neutral-800"
            target="_blank"
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