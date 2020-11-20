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
  
  module.exports =  quizCard;