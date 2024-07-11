enum fetchHandlerType{
    onChat = 100,
    onFollow = 101,
    onGift = 102,
    onSub = 103,
    onSuperchat = 104,
}

enum streamPlatform{
    restream = 99,
    twitch = 100,
    kick = 101,
    youtube = 102,
    steam = 103
}

type fetchHandler = {
    callFunction : Function,
    handlerType : fetchHandlerType
}

type universalUser = {
    userUuid : string,
    userPlatform : streamPlatform,
    displayName : string
}

type universalChat = {
    platform : streamPlatform,
    fromStream : string,
    message : string,
    user : universalUser,
    time : number
}