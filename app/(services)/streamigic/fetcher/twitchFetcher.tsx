'use client'

const tmi = require("tmi.js");

export function init(channels: string[], handlers : fetchHandler[]){
    let client = new tmi.client({
        channels: channels
    })

    client.connect();

    for(let handlerInst of handlers){
        switch(handlerInst.handlerType){
            case fetchHandlerType.onChat:
                client.on('chat', (channel : string, userstate : object, message : string, self : boolean) => onTwitchMessage(channel,userstate,message,self,handlerInst.callFunction));
        }
    }
}

export function onTwitchMessage(channel : string, userstate : object, message : string, self : boolean, callFunc : Function){
    callFunc();
}