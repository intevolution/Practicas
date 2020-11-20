quizCard = {
    "type": "AdaptiveCard",
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.2",
    "body": [
        {
            "type": "TextBlock",
            "text": 'Da clic para abrir la encuesta.',
            "height": "stretch",
            "wrap": true
        },
        {
            "type": "Image",
            "url": 'https://economipedia.com/wp-content/uploads/encuesta.jpg',
            "horizontalAlignment": "Center", 
            "selectAction": {
                "type": "Action.OpenUrl",
                "url": "https://docs.microsoft.com/es-es/dynamics365/customer-voice/plan-survey"
            }           
        },
        {
            "type": "TextBlock",
            "text": "Su opinón es de gran importancia para brindarle una mejor atención.",
            "wrap": true
        },
        {
            "type": "TextBlock",
            "text": "¡Gracias!",
            "horizontalAlignment": "Center"
        }
    ]
  }

//   quizCard = 
//   {
//     "type": "AdaptiveCard",
//     "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
//     "version": "1.2",
//     "body": [
//         {
//             "type": "TextBlock",
//             "text": "Hola, mi nombre es InteBot y me gustan los perritos",
//             "wrap": true,            
//             "size": "Medium",
//             "color": "Warning",
//             "weight": "Bolder"
//         },
//         {
//             "type": "ActionSet",
//             "actions": [
//                 {
//                     "type": "Action.Submit",
//                     "title": "Pedir mi nombre",
//                     "data": 'Hola'
//                 }
//             ]
//         },
//         {
//             "type": "Image",
//             "url": "https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg",
//             "size": "Large",
//             "style": "Person",
//             "horizontalAlignment": "Center"
//         },
//         {
//             "type": "Image",
//             "url": "https://media.tenor.com/images/d2d53ed3fbab71762790a7e95f6aae47/tenor.gif",
//             "horizontalAlignment": "Center"
//         }
//     ]
// }
  
  module.exports =  quizCard;