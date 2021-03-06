// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor(datosRecibidos, bandera) {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            const inMessage = context.activity.text;
            const replyText = `Echo: ${ context.activity.text }`;
            await context.sendActivity(replyText);

            // By calling next() you ensure that the next BotHandler is run.
            await next(); //Indicar que terminó el turno del Bot
        });

        // this.onMembersAdded(async (context, next) => {
        //     const membersAdded = context.activity.membersAdded;
        //     const welcomeText = 'Hola, bienvenido a las practicas de Intevolution!';
        //     for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
        //         if (membersAdded[cnt].id !== context.activity.recipient.id) {
        //             await context.sendActivity(welcomeText);
        //         }
        //     }

        //     // By calling next() you ensure that the next BotHandler is run.
        //     await next();
        // });
    }
}

module.exports.EchoBot = EchoBot;
