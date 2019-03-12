export const ERC20Basic = 
{
  "contractName": "ERC20Basic",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  function totalSupply() public view returns (uint256);\n  function balanceOf(address who) public view returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
      "exportedSymbols": {
        "ERC20Basic": [
          14370
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 14340,
        "name": "PragmaDirective",
        "src": "0:24:42"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            14370
          ],
          "name": "ERC20Basic",
          "scope": 14371
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 14370,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14341,
                "name": "ParameterList",
                "src": "199:2:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14345,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14342,
                        "name": "ElementaryTypeName",
                        "src": "223:7:42"
                      }
                    ],
                    "id": 14343,
                    "name": "VariableDeclaration",
                    "src": "223:7:42"
                  }
                ],
                "id": 14344,
                "name": "ParameterList",
                "src": "222:9:42"
              }
            ],
            "id": 14345,
            "name": "FunctionDefinition",
            "src": "179:53:42"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 14370,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "who",
                      "scope": 14352,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 14346,
                        "name": "ElementaryTypeName",
                        "src": "254:7:42"
                      }
                    ],
                    "id": 14347,
                    "name": "VariableDeclaration",
                    "src": "254:11:42"
                  }
                ],
                "id": 14348,
                "name": "ParameterList",
                "src": "253:13:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14352,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14349,
                        "name": "ElementaryTypeName",
                        "src": "288:7:42"
                      }
                    ],
                    "id": 14350,
                    "name": "VariableDeclaration",
                    "src": "288:7:42"
                  }
                ],
                "id": 14351,
                "name": "ParameterList",
                "src": "287:9:42"
              }
            ],
            "id": 14352,
            "name": "FunctionDefinition",
            "src": "235:62:42"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 14370,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 14361,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 14353,
                        "name": "ElementaryTypeName",
                        "src": "318:7:42"
                      }
                    ],
                    "id": 14354,
                    "name": "VariableDeclaration",
                    "src": "318:10:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 14361,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14355,
                        "name": "ElementaryTypeName",
                        "src": "330:7:42"
                      }
                    ],
                    "id": 14356,
                    "name": "VariableDeclaration",
                    "src": "330:13:42"
                  }
                ],
                "id": 14357,
                "name": "ParameterList",
                "src": "317:27:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14361,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 14358,
                        "name": "ElementaryTypeName",
                        "src": "361:4:42"
                      }
                    ],
                    "id": 14359,
                    "name": "VariableDeclaration",
                    "src": "361:4:42"
                  }
                ],
                "id": 14360,
                "name": "ParameterList",
                "src": "360:6:42"
              }
            ],
            "id": 14361,
            "name": "FunctionDefinition",
            "src": "300:67:42"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "from",
                      "scope": 14369,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 14362,
                        "name": "ElementaryTypeName",
                        "src": "385:7:42"
                      }
                    ],
                    "id": 14363,
                    "name": "VariableDeclaration",
                    "src": "385:20:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 14369,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 14364,
                        "name": "ElementaryTypeName",
                        "src": "407:7:42"
                      }
                    ],
                    "id": 14365,
                    "name": "VariableDeclaration",
                    "src": "407:18:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 14369,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14366,
                        "name": "ElementaryTypeName",
                        "src": "427:7:42"
                      }
                    ],
                    "id": 14367,
                    "name": "VariableDeclaration",
                    "src": "427:13:42"
                  }
                ],
                "id": 14368,
                "name": "ParameterList",
                "src": "384:57:42"
              }
            ],
            "id": 14369,
            "name": "EventDefinition",
            "src": "370:72:42"
          }
        ],
        "id": 14370,
        "name": "ContractDefinition",
        "src": "155:289:42"
      }
    ],
    "id": 14371,
    "name": "SourceUnit",
    "src": "0:445:42"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2019-03-12T22:10:45.891Z"
}