## Instalar
npm install -g truffle
## Validar  Componente
truffle version
## Estructurar Folders
truffle init
## Validar nuevas Folder
 ls -l     
 cd contracts  
 ## Crear Nuevo Contrato
 touch SimpleStorage.sol

 //////////////////////
 /////////////////////
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract SimpleStorage {
    uint data;
    function updateData(uint _data) external {
        data = _data;
    }
    function readData() external view returns (uint) {
        return data;
    }
}


 //////////////////////
 ////////////////////
 
## Compilar
 truffle compile

 ## Create file js into Test folder (SimpleSTorage)

 const SimpleSTorage = artifacts.require("SimpleStorage.sol");

contract('SimpleStorage',() => {
    it("should set the value", async () => {
        const storage = await SimpleSTorage.new()
        await storage.updateData(10);
        const data = await storage.readData();
        assert(data.toString() === '10');
        assert(data.toNumber() === 10);
    });
});

## Testear
 truffle test

 ## Move cd migrations.js
 ## Create file 2_deploy_contracts.js
 ## Copy

 const SimpleStorage =artifacts.require('SimpleStorage.sol');
module.exports = function (deployer){
  deployer.deploy(SimpleStorage);
}

cd ..

## Buscar  y recargar cuenta BSCTestnet
truffle develop
## Copia cuenta y ir
https://testnet.binance.org/faucet-smart 

## Deploy local
migrate --reset


## Adaptar  truffle-config 
Crear networks y instanciar lib

## Instalar npm pack

yarn add @truffle/hdwallet-provider


## Deploy en network Publica
truffle migrate --reset --network bscTestnet

## Interactuar

truffle console --network bscTestnet 
storage = await SimpleStorage.deployed()
storage.address
await storage.updateData(10)
//data = storage.readData()
data = await storage.readData()
data.toString()

^C = EXIT

## this is deploy local 
1- truffle develop 
2- migrate --reset
3- storage = await SimpleStorage.deployed()

truffle develop -> Local
truffle console -> Public







              