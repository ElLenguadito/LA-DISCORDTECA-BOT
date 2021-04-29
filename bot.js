const Discord = require("discord.js");
const  client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
   client.user.setPresence({ activity: { name: 'desde el cielo ☁️', type: 'WATCHING'}, status: 'online'})
  //.then(console.log)
  .catch(console.error);
});

var prefix = config.prefix
//abajo de la línea 11, meto todo lo que sea referido a los mensajes y respuestas con el prefix
client.on("message", (message) => {


// OPCIÓN DE MENSAJE N°1

if (!message.content.startsWith(prefix)) return;
 if (message.author.bot) return;
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola, bienvenido a 💀LA DISCORDTECA💀!");
  } 
  else if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong! Adentro, seguí participando");}

if (message.content.startsWith(prefix + "1")){
    const embed = new Discord.MessageEmbed() 
   embed.setColor('#E67E22')
   //En setTitle: ahi pongo el título de mi mensaje.
   embed.setTitle('PRUEBA DE MENSAJE EMBED')
   // En setAuthor: ahi pongo el nombre y el url separado con coma de quien envía el mensaje y su avatar.
   embed.setAuthor('Lele', 'https://i.pinimg.com/originals/59/43/cd/5943cd28b3a20b433870d7480320ff8a.jpg')
   // En setDescription: pongo el contenido de mi mensaje
   embed.setDescription('Hola, que tal? Este es un mensaje para la comunidad. Se vienen cosas nuevas. En este momento se está creando un bot para que cumpla con todos nuestros caprichos, para informar y alertar a todos los que estemos aca presentes.')
   // En setThumbnail: pongo la imagen en miniatura a la derecha superior del embed
   embed.setThumbnail('')
   // En addFields: creo nuevos campos, parrafos aparte con texto descriptivo
   embed.addFields(
		{ name: '*LA CONSTITUCIÓN*', value: 'Respeto y diversión para todos dentro de la comunidad' },
		)

	embed.setImage('https://mir-s3-cdn-cf.behance.net/project_modules/disp/079f4818524751.5631014ada18d.png')
    embed.setTimestamp()
    embed.setFooter('💀LA DISCORDTECA💀')
    
     console.log(embed)
     //message.channel.send({embed});
     // Aca se colocan las reacciones que quiero que me aparezcan debajo de mi mensaje.
     message.channel.send({embed}).then(message => 
      	message.react('🍔')-message.react('❤️')-message.react('💣'))
//TODO LO QUE VA DESDE LA LINEA 53 HASTA LA 70 PERTENECE A LA ACCION DE DAR UN ROL AL CLIQUEAR EN LA REACCIÓN
     	client.on('messageReactionAdd', async (reaction, user) => {
  			if (reaction.message.partial) await reaction.message.fetch();
  			if (reaction.partial) await reaction.fetch();
  			if (user.bot) return;
  			if (!reaction.message.guild) return;
  			if (reaction.message.channel.id == '836662096737075233') {
    			if (reaction.emoji.name === '🍔') {
      				await reaction.message.guild.members.cache
        			.get(user.id)
        			.roles.add('836782595449946142');
   				 }
    			if (reaction.emoji.name === '❤️') {
      				await reaction.message.guild.members.cache
        			.get(user.id)
        			.roles.add('836816809277653022');
      			}
  } else return;
});
      //TODO LO QUE VA DESDE LA LINEA 72 HASTA LA 89 PERTENECE A LA ACCION DE QUITAR UN ROL AL CLIQUEAR EN LA REACCIÓN
      client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == '836662096737075233') {
          if (reaction.emoji.name === '🍔') {
            await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove('836782595449946142');
          }
        if (reaction.emoji.name === '❤️') {
            await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove('836816809277653022');
          }
  } else return;
});
     
     	//member = 701243741666541618;
     	//const member = guild.members.cache.find(member => member.id === userid);
     	//member = 701243741666541618;
     	//message.member.roles.add(836782595449946142);
    	//message.awaitReactions((reaction) => {
    		//if(reaction.emoji.name === '🍔') {
    			//const role = reaction.message.guild.roles.cache.find(r => r.id === 836782595449946142);
    			//const member = guild.members.cache.find(member => member.id === 701243741666541618);
    			//userid.addRole(836782595449946142)}
};




// OPCIÓN DE MENSAJE N°2


if (message.content.startsWith(prefix + "2")){
    const embed = new Discord.MessageEmbed() 
    
   embed.setColor('#E67E22')
   //En setTitle: ahi pongo el título de mi mensaje.
   embed.setTitle('PRUEBA DE MENSAJE EMBED')
   // En setAuthor: ahi pongo el nombre y el url separado con coma de quien envía el mensaje y su avatar.
   embed.setAuthor('Lele', 'https://i.pinimg.com/originals/59/43/cd/5943cd28b3a20b433870d7480320ff8a.jpg')
   // En setDescription: pongo el contenido de mi mensaje
   embed.setDescription('\nhola\ncomo estas?')
   // En setThumbnail: pongo la imagen en miniatura a la derecha superior del embed
   embed.setThumbnail('')
   // En addFields: creo nuevos campos, parrafos aparte con texto descriptivo
   embed.addFields(
		{ name: '*LA CONSTITUCIÓN*', value: 'Respeto y diversión para todos dentro de la comunidad' },
		)

	embed.setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qJ0FI6SA74SXiKQ-BsDh9A78V-vfbc9t-GXz70OpMZjYpPQW3QqBJvvdLwtcV_z4q2o&usqp=CAU')
    embed.setTimestamp()
    embed.setFooter('💀LA DISCORDTECA💀')
     console.log(embed)
    message.channel.send({embed});
}
     });


client.login(config.token);


