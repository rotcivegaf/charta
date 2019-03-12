export const Migrations = 
{
  "contractName": "Migrations",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "last_completed_migration",
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
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "completed",
          "type": "uint256"
        }
      ],
      "name": "setCompleted",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102db8061005e6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100a05780638da5cb5b146100c9578063fdacd5761461011e575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610141565b005b34156100ab57600080fd5b6100b3610224565b6040518082815260200191505060405180910390f35b34156100d457600080fd5b6100dc61022a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b61013f600480803590602001909190505061024f565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610220578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561020b57600080fd5b6102c65a03f1151561021c57600080fd5b5050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102ac57806001819055505b505600a165627a7a72305820c0e6a2e7e2d527b35613c7dc24b6c3eaf83bd970fa54a8003ef5daa23a011bd40029",
  "deployedBytecode": "0x606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100a05780638da5cb5b146100c9578063fdacd5761461011e575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610141565b005b34156100ab57600080fd5b6100b3610224565b6040518082815260200191505060405180910390f35b34156100d457600080fd5b6100dc61022a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b61013f600480803590602001909190505061024f565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610220578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561020b57600080fd5b6102c65a03f1151561021c57600080fd5b5050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102ac57806001819055505b505600a165627a7a72305820c0e6a2e7e2d527b35613c7dc24b6c3eaf83bd970fa54a8003ef5daa23a011bd40029",
  "sourceMap": "26:579:9:-;;;245:64;;;;;;;;292:10;284:5;;:18;;;;;;;;;;;;;;;;;;26:579;;;;;;",
  "deployedSourceMap": "26:579:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;430:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;131:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;315:109;;;;;;;;;;;;;;;;;;;;;;;;;;430:173;495:19;224:5;;;;;;;;;;;210:19;;:10;:19;;;206:26;;;528:10;495:44;;549:8;:21;;;571:24;;549:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;206:26;430:173;;:::o;131:36::-;;;;:::o;52:20::-;;;;;;;;;;;;;:::o;315:109::-;224:5;;;;;;;;;;;210:19;;:10;:19;;;206:26;;;408:9;381:24;:36;;;;206:26;315:109;:::o",
  "source": "pragma solidity 0.4.18;\n\n\ncontract Migrations {\n    address public owner;\n\n    // solhint-disable-next-line var-name-mixedcase\n    uint public last_completed_migration;\n\n    modifier restricted() {\n        if (msg.sender == owner) _;\n    }\n\n    function Migrations() public {\n        owner = msg.sender;\n    }\n\n    function setCompleted(uint completed) public restricted {\n        last_completed_migration = completed;\n    }\n\n    function upgrade(address newAddress) public restricted {\n        Migrations upgraded = Migrations(newAddress);\n        upgraded.setCompleted(last_completed_migration);\n    }\n}\n",
  "sourcePath": "/Users/chris/dev/dharma/charta/contracts/Migrations.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/chris/dev/dharma/charta/contracts/Migrations.sol",
      "exportedSymbols": {
        "Migrations": [
          4562
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 4507,
        "name": "PragmaDirective",
        "src": "0:23:9"
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
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            4562
          ],
          "name": "Migrations",
          "scope": 4563
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "owner",
              "scope": 4562,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 4508,
                "name": "ElementaryTypeName",
                "src": "52:7:9"
              }
            ],
            "id": 4509,
            "name": "VariableDeclaration",
            "src": "52:20:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "last_completed_migration",
              "scope": 4562,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 4510,
                "name": "ElementaryTypeName",
                "src": "131:4:9"
              }
            ],
            "id": 4511,
            "name": "VariableDeclaration",
            "src": "131:36:9"
          },
          {
            "attributes": {
              "name": "restricted",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4512,
                "name": "ParameterList",
                "src": "193:2:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15881,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 4513,
                                "name": "Identifier",
                                "src": "210:3:9"
                              }
                            ],
                            "id": 4514,
                            "name": "MemberAccess",
                            "src": "210:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4509,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 4515,
                            "name": "Identifier",
                            "src": "224:5:9"
                          }
                        ],
                        "id": 4516,
                        "name": "BinaryOperation",
                        "src": "210:19:9"
                      },
                      {
                        "id": 4517,
                        "name": "PlaceholderStatement",
                        "src": "231:1:9"
                      }
                    ],
                    "id": 4518,
                    "name": "IfStatement",
                    "src": "206:26:9"
                  }
                ],
                "id": 4519,
                "name": "Block",
                "src": "196:43:9"
              }
            ],
            "id": 4520,
            "name": "ModifierDefinition",
            "src": "174:65:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "Migrations",
              "payable": false,
              "scope": 4562,
              "stateMutability": "nonpayable",
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
                "id": 4521,
                "name": "ParameterList",
                "src": "264:2:9"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4522,
                "name": "ParameterList",
                "src": "274:0:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4509,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 4523,
                            "name": "Identifier",
                            "src": "284:5:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15881,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 4524,
                                "name": "Identifier",
                                "src": "292:3:9"
                              }
                            ],
                            "id": 4525,
                            "name": "MemberAccess",
                            "src": "292:10:9"
                          }
                        ],
                        "id": 4526,
                        "name": "Assignment",
                        "src": "284:18:9"
                      }
                    ],
                    "id": 4527,
                    "name": "ExpressionStatement",
                    "src": "284:18:9"
                  }
                ],
                "id": 4528,
                "name": "Block",
                "src": "274:35:9"
              }
            ],
            "id": 4529,
            "name": "FunctionDefinition",
            "src": "245:64:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setCompleted",
              "payable": false,
              "scope": 4562,
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
                      "name": "completed",
                      "scope": 4541,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4530,
                        "name": "ElementaryTypeName",
                        "src": "337:4:9"
                      }
                    ],
                    "id": 4531,
                    "name": "VariableDeclaration",
                    "src": "337:14:9"
                  }
                ],
                "id": 4532,
                "name": "ParameterList",
                "src": "336:16:9"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4535,
                "name": "ParameterList",
                "src": "371:0:9"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 4520,
                      "type": "modifier ()",
                      "value": "restricted"
                    },
                    "id": 4533,
                    "name": "Identifier",
                    "src": "360:10:9"
                  }
                ],
                "id": 4534,
                "name": "ModifierInvocation",
                "src": "360:10:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4511,
                              "type": "uint256",
                              "value": "last_completed_migration"
                            },
                            "id": 4536,
                            "name": "Identifier",
                            "src": "381:24:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4531,
                              "type": "uint256",
                              "value": "completed"
                            },
                            "id": 4537,
                            "name": "Identifier",
                            "src": "408:9:9"
                          }
                        ],
                        "id": 4538,
                        "name": "Assignment",
                        "src": "381:36:9"
                      }
                    ],
                    "id": 4539,
                    "name": "ExpressionStatement",
                    "src": "381:36:9"
                  }
                ],
                "id": 4540,
                "name": "Block",
                "src": "371:53:9"
              }
            ],
            "id": 4541,
            "name": "FunctionDefinition",
            "src": "315:109:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "upgrade",
              "payable": false,
              "scope": 4562,
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
                      "name": "newAddress",
                      "scope": 4561,
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
                        "id": 4542,
                        "name": "ElementaryTypeName",
                        "src": "447:7:9"
                      }
                    ],
                    "id": 4543,
                    "name": "VariableDeclaration",
                    "src": "447:18:9"
                  }
                ],
                "id": 4544,
                "name": "ParameterList",
                "src": "446:20:9"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4547,
                "name": "ParameterList",
                "src": "485:0:9"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 4520,
                      "type": "modifier ()",
                      "value": "restricted"
                    },
                    "id": 4545,
                    "name": "Identifier",
                    "src": "474:10:9"
                  }
                ],
                "id": 4546,
                "name": "ModifierInvocation",
                "src": "474:10:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        4549
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "upgraded",
                          "scope": 4561,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract Migrations",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Migrations",
                              "referencedDeclaration": 4562,
                              "type": "contract Migrations"
                            },
                            "id": 4548,
                            "name": "UserDefinedTypeName",
                            "src": "495:10:9"
                          }
                        ],
                        "id": 4549,
                        "name": "VariableDeclaration",
                        "src": "495:19:9"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "contract Migrations",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4562,
                              "type": "type(contract Migrations)",
                              "value": "Migrations"
                            },
                            "id": 4550,
                            "name": "Identifier",
                            "src": "517:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4543,
                              "type": "address",
                              "value": "newAddress"
                            },
                            "id": 4551,
                            "name": "Identifier",
                            "src": "528:10:9"
                          }
                        ],
                        "id": 4552,
                        "name": "FunctionCall",
                        "src": "517:22:9"
                      }
                    ],
                    "id": 4553,
                    "name": "VariableDeclarationStatement",
                    "src": "495:44:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "setCompleted",
                              "referencedDeclaration": 4541,
                              "type": "function (uint256) external"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4549,
                                  "type": "contract Migrations",
                                  "value": "upgraded"
                                },
                                "id": 4554,
                                "name": "Identifier",
                                "src": "549:8:9"
                              }
                            ],
                            "id": 4556,
                            "name": "MemberAccess",
                            "src": "549:21:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4511,
                              "type": "uint256",
                              "value": "last_completed_migration"
                            },
                            "id": 4557,
                            "name": "Identifier",
                            "src": "571:24:9"
                          }
                        ],
                        "id": 4558,
                        "name": "FunctionCall",
                        "src": "549:47:9"
                      }
                    ],
                    "id": 4559,
                    "name": "ExpressionStatement",
                    "src": "549:47:9"
                  }
                ],
                "id": 4560,
                "name": "Block",
                "src": "485:118:9"
              }
            ],
            "id": 4561,
            "name": "FunctionDefinition",
            "src": "430:173:9"
          }
        ],
        "id": 4562,
        "name": "ContractDefinition",
        "src": "26:579:9"
      }
    ],
    "id": 4563,
    "name": "SourceUnit",
    "src": "0:606:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x95fde0e37d774c086a8efe92fc6e154caec28677"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xce5d7e5af1f73499db6045b12cfb15e1253ea5b5"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2019-03-12T22:10:52.363Z"
}