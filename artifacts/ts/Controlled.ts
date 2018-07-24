export const Controlled = 
{
  "contractName": "Controlled",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newController",
          "type": "address"
        }
      ],
      "name": "changeController",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "controller",
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
      "inputs": [
        {
          "name": "_controller",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b60405160208061024983398101604052808051906020019091905050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101ce8061007b6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633cebb82314610051578063f77c47911461008a575b600080fd5b341561005c57600080fd5b610088600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506100df565b005b341561009557600080fd5b61009d61017d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561013a57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058207dcdcfb941c07069c849b2a40162d4bd2b89db03160a0ea031113354212dd1ce0029",
  "deployedBytecode": "0x60606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633cebb82314610051578063f77c47911461008a575b600080fd5b341561005c57600080fd5b610088600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506100df565b005b341561009557600080fd5b61009d61017d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561013a57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058207dcdcfb941c07069c849b2a40162d4bd2b89db03160a0ea031113354212dd1ce0029",
  "sourceMap": "96:607:11:-;;;344:115;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;441:11;428:10;;:24;;;;;;;;;;;;;;;;;;344:115;96:607;;;;;;",
  "deployedSourceMap": "96:607:11:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;585:116;;;;;;;;;;;;;;;;;;;;;;;;;;;;312:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;585:116;289:10;;;;;;;;;;;275:24;;:10;:24;;;267:33;;;;;;;;680:14;667:10;;:27;;;;;;;;;;;;;;;;;;585:116;:::o;312:25::-;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\n/// Taken from Giveth's MiniMeToken: https://github.com/Giveth/minime\ncontract Controlled {\n    /// @notice The address of the controller is the only address that can call\n    ///  a function with this modifier\n    modifier onlyController { require(msg.sender == controller); _; }\n\n    address public controller;\n\n    function Controlled(\n        address _controller\n    )\n        public\n    {\n        controller = _controller;\n    }\n\n    /// @notice Changes the controller of the contract\n    /// @param _newController The new controller of the contract\n    function changeController(address _newController) public onlyController {\n        controller = _newController;\n    }\n}\n",
  "sourcePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/crowdfunding/Controlled.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/crowdfunding/Controlled.sol",
      "exportedSymbols": {
        "Controlled": [
          3769
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
        "id": 3733,
        "name": "PragmaDirective",
        "src": "0:24:11"
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
          "documentation": "Taken from Giveth's MiniMeToken: https://github.com/Giveth/minime",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3769
          ],
          "name": "Controlled",
          "scope": 3770
        },
        "children": [
          {
            "attributes": {
              "name": "onlyController",
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
                "id": 3734,
                "name": "ParameterList",
                "src": "265:0:11"
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
                              "referencedDeclaration": 11810,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3735,
                            "name": "Identifier",
                            "src": "267:7:11"
                          },
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
                                      "referencedDeclaration": 11807,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 3736,
                                    "name": "Identifier",
                                    "src": "275:3:11"
                                  }
                                ],
                                "id": 3737,
                                "name": "MemberAccess",
                                "src": "275:10:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3746,
                                  "type": "address",
                                  "value": "controller"
                                },
                                "id": 3738,
                                "name": "Identifier",
                                "src": "289:10:11"
                              }
                            ],
                            "id": 3739,
                            "name": "BinaryOperation",
                            "src": "275:24:11"
                          }
                        ],
                        "id": 3740,
                        "name": "FunctionCall",
                        "src": "267:33:11"
                      }
                    ],
                    "id": 3741,
                    "name": "ExpressionStatement",
                    "src": "267:33:11"
                  },
                  {
                    "id": 3742,
                    "name": "PlaceholderStatement",
                    "src": "302:1:11"
                  }
                ],
                "id": 3743,
                "name": "Block",
                "src": "265:41:11"
              }
            ],
            "id": 3744,
            "name": "ModifierDefinition",
            "src": "241:65:11"
          },
          {
            "attributes": {
              "constant": false,
              "name": "controller",
              "scope": 3769,
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
                "id": 3745,
                "name": "ElementaryTypeName",
                "src": "312:7:11"
              }
            ],
            "id": 3746,
            "name": "VariableDeclaration",
            "src": "312:25:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "Controlled",
              "payable": false,
              "scope": 3769,
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
                      "name": "_controller",
                      "scope": 3756,
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
                        "id": 3747,
                        "name": "ElementaryTypeName",
                        "src": "373:7:11"
                      }
                    ],
                    "id": 3748,
                    "name": "VariableDeclaration",
                    "src": "373:19:11"
                  }
                ],
                "id": 3749,
                "name": "ParameterList",
                "src": "363:35:11"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3750,
                "name": "ParameterList",
                "src": "418:0:11"
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
                              "referencedDeclaration": 3746,
                              "type": "address",
                              "value": "controller"
                            },
                            "id": 3751,
                            "name": "Identifier",
                            "src": "428:10:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3748,
                              "type": "address",
                              "value": "_controller"
                            },
                            "id": 3752,
                            "name": "Identifier",
                            "src": "441:11:11"
                          }
                        ],
                        "id": 3753,
                        "name": "Assignment",
                        "src": "428:24:11"
                      }
                    ],
                    "id": 3754,
                    "name": "ExpressionStatement",
                    "src": "428:24:11"
                  }
                ],
                "id": 3755,
                "name": "Block",
                "src": "418:41:11"
              }
            ],
            "id": 3756,
            "name": "FunctionDefinition",
            "src": "344:115:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "changeController",
              "payable": false,
              "scope": 3769,
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
                      "name": "_newController",
                      "scope": 3768,
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
                        "id": 3757,
                        "name": "ElementaryTypeName",
                        "src": "611:7:11"
                      }
                    ],
                    "id": 3758,
                    "name": "VariableDeclaration",
                    "src": "611:22:11"
                  }
                ],
                "id": 3759,
                "name": "ParameterList",
                "src": "610:24:11"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3762,
                "name": "ParameterList",
                "src": "657:0:11"
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
                      "referencedDeclaration": 3744,
                      "type": "modifier ()",
                      "value": "onlyController"
                    },
                    "id": 3760,
                    "name": "Identifier",
                    "src": "642:14:11"
                  }
                ],
                "id": 3761,
                "name": "ModifierInvocation",
                "src": "642:14:11"
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
                              "referencedDeclaration": 3746,
                              "type": "address",
                              "value": "controller"
                            },
                            "id": 3763,
                            "name": "Identifier",
                            "src": "667:10:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3758,
                              "type": "address",
                              "value": "_newController"
                            },
                            "id": 3764,
                            "name": "Identifier",
                            "src": "680:14:11"
                          }
                        ],
                        "id": 3765,
                        "name": "Assignment",
                        "src": "667:27:11"
                      }
                    ],
                    "id": 3766,
                    "name": "ExpressionStatement",
                    "src": "667:27:11"
                  }
                ],
                "id": 3767,
                "name": "Block",
                "src": "657:44:11"
              }
            ],
            "id": 3768,
            "name": "FunctionDefinition",
            "src": "585:116:11"
          }
        ],
        "id": 3769,
        "name": "ContractDefinition",
        "src": "96:607:11"
      }
    ],
    "id": 3770,
    "name": "SourceUnit",
    "src": "0:704:11"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-24T01:55:44.948Z"
}