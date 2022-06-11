/**
   * Made By Fandyyy 🕴️
   * Subscribe 
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['5511914297086', '0']
global.ownerName = 'Luan Pereira X All Creator'
global.packname = 'Izuku Bot'
global.author = 'Whatsapp Bot 2022'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'Voce nao e administrador!',
botAdmin: 'Bot nao e administrador!',
botOwner: 'Você não é meu dono!',
group: 'Apenas grupo!',
private: 'Apenas no privado',
wait: 'Aguarde...',
done: 'Pronto!'
}

//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
