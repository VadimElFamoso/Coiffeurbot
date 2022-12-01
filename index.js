const { Client, GatewayIntentBits, inlineCode } = require('discord.js');

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on('ready', () => {
    console.log('Coiffeurbot - [ON]');
});

//Token à configurer :
client.login(token);

client.on('messageCreate', message =>{
   
    //Entrez les mots en "quoi" :
    const trigger_list = [
        'quoi',
        'qwa',
        'qoua',
        'coua',
        'koua',
    ];

    //Entre les réponses possibles du bot :
    const answers = [
        'Feur',
        'FeUrE',
        'Et feure',
        'FEURE LOL',
        'FEUR XD',
    ]

    //Configurez le pourcentage de chance, que le bot réponde "feur".
    //100 correspond à 100% de chance que le bot réponde "feur"
    let send_chance = 100 //Configurable (valeur en %)
    let send_chance_rate = send_chance / 100;
    
    function isValid(){
        let valid_int = Math.floor(Math.random() * 100) + 1;
        if(valid_int<=send_chance_rate * 100){
            return true;
            
        }
        else{
            return false;
        }
    }

    let i;
    for(i=0; i < trigger_list.length; i++){
        if(message.content.toLowerCase().includes(trigger_list[i]) && isValid()){
            let r = Math.floor(Math.random() * answers.length);
            message.reply(answers[r]);
            message.react('😂');
            message.react('🇫');
            message.react('🇪')
            message.react('🇺')
            message.react('🇷') 
        }
    }   
});