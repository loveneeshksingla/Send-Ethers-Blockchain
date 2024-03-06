//https://eth-ropsten.alchemyapi.io/v2/V9TRLu7H6F-8tXVdXWehpw05uiIa-2Ve

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/3mvmL99nzZvm-aSCv-a_P0lCZRp6UxNI',
      accounts:['968c3d0f6e3cd2288ca3703323897f42e1d1b47f259654a0ac38162e5dc484d9'],  
    }
  }
}