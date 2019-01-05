const fs = require('fs');
const ini = require('ini');

const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

console.log("Configurações padrão...");
console.log(config.producao);
console.log(config.desenvolvimento);

console.log("Alterando o arquivo e escrevendo um novo");

config.desenvolvimento.ip = '127.0.0.1';
config.producao.porta = '3308';
config.producao.novaChave = 'Esta é uma nova chave!'
fs.writeFileSync('./config_modified.ini', ini.stringify(config))

const animaisConfig = ini.parse(fs.readFileSync('./animais.ini', 'utf-8'));
const nomeAnimais = animaisConfig.animais.nomes;

console.log(nomeAnimais);
