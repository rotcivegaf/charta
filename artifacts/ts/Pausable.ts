export const Pausable = 
{
  "contractName": "Pausable",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061048e8061006d6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a146100725780635c975abb146100875780638456cb59146100b45780638da5cb5b146100c9578063f2fde38b1461011e575b600080fd5b341561007d57600080fd5b610085610157565b005b341561009257600080fd5b61009a610215565b604051808215151515815260200191505060405180910390f35b34156100bf57600080fd5b6100c7610228565b005b34156100d457600080fd5b6100dc6102e8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b610155600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061030d565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101b257600080fd5b600060149054906101000a900460ff1615156101cd57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028357600080fd5b600060149054906101000a900460ff1615151561029f57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561036857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156103a457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205be24b61a066a10bfd0a9eb94e9d155ec538fc2596b84750ec438cd11151a0970029",
  "deployedBytecode": "0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a146100725780635c975abb146100875780638456cb59146100b45780638da5cb5b146100c9578063f2fde38b1461011e575b600080fd5b341561007d57600080fd5b610085610157565b005b341561009257600080fd5b61009a610215565b604051808215151515815260200191505060405180910390f35b34156100bf57600080fd5b6100c7610228565b005b34156100d457600080fd5b6100dc6102e8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b610155600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061030d565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101b257600080fd5b600060149054906101000a900460ff1615156101cd57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028357600080fd5b600060149054906101000a900460ff1615151561029f57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561036857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156103a457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205be24b61a066a10bfd0a9eb94e9d155ec538fc2596b84750ec438cd11151a0970029",
  "sourceMap": "177:745:35:-;;;268:5;247:26;;;;;;;;;;;;;;;;;;;;509:10:37;501:5;;:18;;;;;;;;;;;;;;;;;;177:745:35;;;;;;",
  "deployedSourceMap": "177:745:35:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:35;653:5:37;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:35;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:37;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:35;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:37:-;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\nimport \"../ownership/Ownable.sol\";\n\n\n/**\n * @title Pausable\n * @dev Base contract which allows children to implement an emergency stop mechanism.\n */\ncontract Pausable is Ownable {\n  event Pause();\n  event Unpause();\n\n  bool public paused = false;\n\n\n  /**\n   * @dev Modifier to make a function callable only when the contract is not paused.\n   */\n  modifier whenNotPaused() {\n    require(!paused);\n    _;\n  }\n\n  /**\n   * @dev Modifier to make a function callable only when the contract is paused.\n   */\n  modifier whenPaused() {\n    require(paused);\n    _;\n  }\n\n  /**\n   * @dev called by the owner to pause, triggers stopped state\n   */\n  function pause() onlyOwner whenNotPaused public {\n    paused = true;\n    Pause();\n  }\n\n  /**\n   * @dev called by the owner to unpause, returns to normal state\n   */\n  function unpause() onlyOwner whenPaused public {\n    paused = false;\n    Unpause();\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
      "exportedSymbols": {
        "Pausable": [
          13248
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
        "id": 13190,
        "name": "PragmaDirective",
        "src": "0:24:35"
      },
      {
        "attributes": {
          "SourceUnit": 13403,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "../ownership/Ownable.sol",
          "scope": 13249,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 13191,
        "name": "ImportDirective",
        "src": "27:34:35"
      },
      {
        "attributes": {
          "contractDependencies": [
            13402
          ],
          "contractKind": "contract",
          "documentation": "@title Pausable\n@dev Base contract which allows children to implement an emergency stop mechanism.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            13248,
            13402
          ],
          "name": "Pausable",
          "scope": 13249
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 13402,
                  "type": "contract Ownable"
                },
                "id": 13192,
                "name": "UserDefinedTypeName",
                "src": "198:7:35"
              }
            ],
            "id": 13193,
            "name": "InheritanceSpecifier",
            "src": "198:7:35"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Pause"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 13194,
                "name": "ParameterList",
                "src": "221:2:35"
              }
            ],
            "id": 13195,
            "name": "EventDefinition",
            "src": "210:14:35"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Unpause"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 13196,
                "name": "ParameterList",
                "src": "240:2:35"
              }
            ],
            "id": 13197,
            "name": "EventDefinition",
            "src": "227:16:35"
          },
          {
            "attributes": {
              "constant": false,
              "name": "paused",
              "scope": 13248,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bool",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bool",
                  "type": "bool"
                },
                "id": 13198,
                "name": "ElementaryTypeName",
                "src": "247:4:35"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "66616c7365",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "bool",
                  "type": "bool",
                  "value": "false"
                },
                "id": 13199,
                "name": "Literal",
                "src": "268:5:35"
              }
            ],
            "id": 13200,
            "name": "VariableDeclaration",
            "src": "247:26:35"
          },
          {
            "attributes": {
              "name": "whenNotPaused",
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
                "id": 13201,
                "name": "ParameterList",
                "src": "398:2:35"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15087,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 13202,
                            "name": "Identifier",
                            "src": "407:7:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13200,
                                  "type": "bool",
                                  "value": "paused"
                                },
                                "id": 13203,
                                "name": "Identifier",
                                "src": "416:6:35"
                              }
                            ],
                            "id": 13204,
                            "name": "UnaryOperation",
                            "src": "415:7:35"
                          }
                        ],
                        "id": 13205,
                        "name": "FunctionCall",
                        "src": "407:16:35"
                      }
                    ],
                    "id": 13206,
                    "name": "ExpressionStatement",
                    "src": "407:16:35"
                  },
                  {
                    "id": 13207,
                    "name": "PlaceholderStatement",
                    "src": "429:1:35"
                  }
                ],
                "id": 13208,
                "name": "Block",
                "src": "401:34:35"
              }
            ],
            "id": 13209,
            "name": "ModifierDefinition",
            "src": "376:59:35"
          },
          {
            "attributes": {
              "name": "whenPaused",
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
                "id": 13210,
                "name": "ParameterList",
                "src": "551:2:35"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15087,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 13211,
                            "name": "Identifier",
                            "src": "560:7:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13200,
                              "type": "bool",
                              "value": "paused"
                            },
                            "id": 13212,
                            "name": "Identifier",
                            "src": "568:6:35"
                          }
                        ],
                        "id": 13213,
                        "name": "FunctionCall",
                        "src": "560:15:35"
                      }
                    ],
                    "id": 13214,
                    "name": "ExpressionStatement",
                    "src": "560:15:35"
                  },
                  {
                    "id": 13215,
                    "name": "PlaceholderStatement",
                    "src": "581:1:35"
                  }
                ],
                "id": 13216,
                "name": "Block",
                "src": "554:33:35"
              }
            ],
            "id": 13217,
            "name": "ModifierDefinition",
            "src": "532:55:35"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "pause",
              "payable": false,
              "scope": 13248,
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
                "id": 13218,
                "name": "ParameterList",
                "src": "680:2:35"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 13223,
                "name": "ParameterList",
                "src": "714:0:35"
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
                      "referencedDeclaration": 13376,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 13219,
                    "name": "Identifier",
                    "src": "683:9:35"
                  }
                ],
                "id": 13220,
                "name": "ModifierInvocation",
                "src": "683:9:35"
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
                      "referencedDeclaration": 13209,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 13221,
                    "name": "Identifier",
                    "src": "693:13:35"
                  }
                ],
                "id": 13222,
                "name": "ModifierInvocation",
                "src": "693:13:35"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13200,
                              "type": "bool",
                              "value": "paused"
                            },
                            "id": 13224,
                            "name": "Identifier",
                            "src": "720:6:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 13225,
                            "name": "Literal",
                            "src": "729:4:35"
                          }
                        ],
                        "id": 13226,
                        "name": "Assignment",
                        "src": "720:13:35"
                      }
                    ],
                    "id": 13227,
                    "name": "ExpressionStatement",
                    "src": "720:13:35"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
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
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13195,
                              "type": "function ()",
                              "value": "Pause"
                            },
                            "id": 13228,
                            "name": "Identifier",
                            "src": "739:5:35"
                          }
                        ],
                        "id": 13229,
                        "name": "FunctionCall",
                        "src": "739:7:35"
                      }
                    ],
                    "id": 13230,
                    "name": "ExpressionStatement",
                    "src": "739:7:35"
                  }
                ],
                "id": 13231,
                "name": "Block",
                "src": "714:37:35"
              }
            ],
            "id": 13232,
            "name": "FunctionDefinition",
            "src": "666:85:35"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "unpause",
              "payable": false,
              "scope": 13248,
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
                "id": 13233,
                "name": "ParameterList",
                "src": "849:2:35"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 13238,
                "name": "ParameterList",
                "src": "880:0:35"
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
                      "referencedDeclaration": 13376,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 13234,
                    "name": "Identifier",
                    "src": "852:9:35"
                  }
                ],
                "id": 13235,
                "name": "ModifierInvocation",
                "src": "852:9:35"
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
                      "referencedDeclaration": 13217,
                      "type": "modifier ()",
                      "value": "whenPaused"
                    },
                    "id": 13236,
                    "name": "Identifier",
                    "src": "862:10:35"
                  }
                ],
                "id": 13237,
                "name": "ModifierInvocation",
                "src": "862:10:35"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13200,
                              "type": "bool",
                              "value": "paused"
                            },
                            "id": 13239,
                            "name": "Identifier",
                            "src": "886:6:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 13240,
                            "name": "Literal",
                            "src": "895:5:35"
                          }
                        ],
                        "id": 13241,
                        "name": "Assignment",
                        "src": "886:14:35"
                      }
                    ],
                    "id": 13242,
                    "name": "ExpressionStatement",
                    "src": "886:14:35"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
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
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13197,
                              "type": "function ()",
                              "value": "Unpause"
                            },
                            "id": 13243,
                            "name": "Identifier",
                            "src": "906:7:35"
                          }
                        ],
                        "id": 13244,
                        "name": "FunctionCall",
                        "src": "906:9:35"
                      }
                    ],
                    "id": 13245,
                    "name": "ExpressionStatement",
                    "src": "906:9:35"
                  }
                ],
                "id": 13246,
                "name": "Block",
                "src": "880:40:35"
              }
            ],
            "id": 13247,
            "name": "FunctionDefinition",
            "src": "833:87:35"
          }
        ],
        "id": 13248,
        "name": "ContractDefinition",
        "src": "177:745:35"
      }
    ],
    "id": 13249,
    "name": "SourceUnit",
    "src": "0:923:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-09-07T18:09:37.700Z"
}