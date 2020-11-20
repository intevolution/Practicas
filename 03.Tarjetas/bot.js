// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const quizCard = require('./QuizCard');

const { ActivityHandler, CardFactory } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor(datosRecibidos, bandera) {
        super();
        
        this.onMessage(async (context, next) => {
            const inMessage = context.activity.text;
            const replyText = `Echo: ${ context.activity.text }`;
            await context.sendActivity(replyText);

            await context.sendActivity( {attachments: [CardFactory.adaptiveCard(quizCard)]} )

            // By calling next() you ensure that the next BotHandler is run.
            await next(); //Indicar que terminó el turno del Bot
        });
    }
}

module.exports.EchoBot = EchoBot;
