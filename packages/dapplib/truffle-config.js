require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan return mad modify guess armed equal ghost'; 
let testAccounts = [
"0x44a298c76aa06dca596a3988db59ec6051b5f2ea50f5517d3f23f261907b0439",
"0xb8c89c95954ee2d9327ceb734b1f18f3275972aee2c229ed3e8568851fc4fc6b",
"0x442b7945982d3e2b3183f01b93a2c0432364301b4b347f225ff52257d3e930fa",
"0xf5025b05b5106e4ed7a4e3921ea6860a8eb70dd4e9d1776d29212f39b25c9f2b",
"0xdad6f03ece916a5d5b88b30ae1b2cbc75a9e6d65e17e8daf1efe239a2fcd9034",
"0xb4cd8e81fbab756d2398d6273c6dc36edc27e71ce381d96b73e7702d02b0520a",
"0x594f2bce9b025dbf1b7482b70665d494720f028ce512c6db733a2fdefcc0dad3",
"0xc518a515799ffbc2fc305fe34586299d39a9ec74c15546a9a19d54a92cd3639d",
"0x16e0d34ac125d2c6de72a590cbed95fbb919c650f01db9d82af8ed5f4be7f176",
"0x2e035c0489fb43e5fd50e94a2cd105fa113770f35218b5c236ff0d5f1e2be182"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

