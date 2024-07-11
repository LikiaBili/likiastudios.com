export var devlogDictionary = [
    {
        id:"bid5",
        document: {
            en_us:"data/bid5/en_us.md",
            zh_cn:"data/bid5/zh_cn.md"
        },
        title:{
            en_us:"damn",
            zh_cn:"&V*uorjgT7"
        },
        desc:{
            en_us:"Watch Likia go insane online for free no credit card needed.",
            zh_cn:"在线观看Likia发疯免费不需要银行卡账号在线免费看"
        },
        time:"2023-12-2 9:19:38",
        author:"Likia",
        section:"General",
        edited:false
    },
    {
        id:"bid4",
        document: {
            en_us:"data/bid4/en_us.md",
            zh_cn:"data/bid4/zh_cn.md"
        },
        title:{
            en_us:"Splatool lol",
            zh_cn:"斯普拉工具?"
        },
        desc:{
            en_us:"ok i got 10 gold medals and 7 silver medals, i won 5 games, what do i get?",
            zh_cn:"所以我有10块金牌，和7块银牌，我赢了五把，我能获得多少真格点数？"
        },
        time:"2023-11-26 15:50:58",
        author:"Likia",
        section:"General",
        edited:false
    },
    {
        id:"bid3",
        document: {
            en_us:"data/bid3/en_us.md",
            zh_cn:"data/bid3/zh_cn.md"
        },
        title:{
            en_us:"Cookie Clicker & Localization!",
            zh_cn:"Cookie本地化！"
        },
        desc:{
            en_us:"Wo men shuo zhong wen, zhong guo ren bu pian zhong guo ren.",
            zh_cn:"为塔里克鞥历史，佛人格动态手残佛人格。"
        },
        time:"2023-11-11 21:24:08",
        author:"Likia",
        section:"General",
        edited:false
    },
    {
        id:"bid2",
        document: {
            en_us:"data/bid2/en_us.md",
            zh_cn:"data/bid2/zh_cn.md"
        },
        title:{
            en_us:"Javascript Blast!",
            zh_cn:"全是Javascript！"
        },
        desc:{
            en_us:"We've filled the whole website with javascript! (which is much cooler)",
            zh_cn:"我们把整个网站装满了Javascript！（当然酷多了）"
        },
        time:"2023-11-4 3:46:20",
        author:"Likia",
        section:"General",
        edited:true
    },
    {
        id:"bid1",
        document: {
            en_us:"data/bid1/en_us.md",
            zh_cn:"data/bid1/zh_cn.md"
        },
        title:{
            en_us:"Our Website is here!",
            zh_cn:"咱网站来辣！"
        },
        desc:{
            en_us:"Our Website v1 just dropped! made using pure HTML and CSS, with no frameworks!",
            zh_cn:"咱网站v1刚刚发布了！使用原生HTML和CSS开发，一点其他的都没有！"
        },
        time:"2023-10-31 10:30:00",
        author:"Likia",
        section:"General",
        edited:false
    }
]
export function getRecentDevlog({section,count}:{section : number,count : number}) :
    {
        id:string,
        document: {
            en_us:string,
            zh_cn:string
        },
        title:{
            en_us:string,
            zh_cn:string
        },
        desc:{
            en_us:string,
            zh_cn:string
        },
        time:string,
        author:string,
        section:string,
        edited:boolean
    }[]
{
    let retdata = [];

    for (let i = 0; i < count; i++) {
        if(section*count+i >= devlogDictionary.length){
            break;
        }
        retdata.push(devlogDictionary[section*count+i]);
    }
    return retdata;
}
export function findDevlog(id : string) :
    {
        id:string,
        document: {
            en_us:string,
            zh_cn:string
        },
        title:{
            en_us:string,
            zh_cn:string
        },
        desc:{
            en_us:string,
            zh_cn:string
        },
        time:string,
        author:string,
        section:string,
        edited:boolean
    }{
    //search for id in devlogDictionary, return the null statement if not found
    return devlogDictionary.find(obj => obj["id"] == id) ?? {
        id,
        document: {
            en_us: "data/404/en_us.md",
            zh_cn: "data/404/zh_cn.md"
        },
        title: {
            en_us: "404 Not Found",
            zh_cn: "404 未找到内容"
        },
        desc: {
            en_us: "The client requested article is not found found on our servers",
            zh_cn: "客户端请求的数据有错误，无法找到相应文章"
        },
        time: "NULL",
        author: "admin",
        section: "NULL",
        edited: false
    }
}