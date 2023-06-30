export const BRIDGE_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "ID",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "string",
            name: "fromUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "toUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "claimCodeHash",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "arbitration",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "txEndTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "toBeSetTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "claimed",
                type: "bool",
              },
            ],
            internalType: "struct Bridge.TimeDetails",
            name: "timeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "retracted",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "successArbitersCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nullArbitersCount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "fromArbiters",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "toArbiters",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "arbOutcome",
                type: "uint256",
              },
            ],
            internalType: "struct Bridge.ArbTransactionDetails",
            name: "arbDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "state",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Bridge.Transaction",
        name: "tx",
        type: "tuple",
      },
    ],
    name: "ArbitrateTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "ID",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "string",
            name: "fromUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "toUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "claimCodeHash",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "arbitration",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "txEndTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "toBeSetTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "claimed",
                type: "bool",
              },
            ],
            internalType: "struct Bridge.TimeDetails",
            name: "timeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "retracted",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "successArbitersCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nullArbitersCount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "fromArbiters",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "toArbiters",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "arbOutcome",
                type: "uint256",
              },
            ],
            internalType: "struct Bridge.ArbTransactionDetails",
            name: "arbDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "state",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Bridge.Transaction",
        name: "tx",
        type: "tuple",
      },
    ],
    name: "BetClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "username",
        type: "string",
      },
    ],
    name: "SignedUp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "ID",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "string",
            name: "fromUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "toUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "claimCodeHash",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "arbitration",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "txEndTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "toBeSetTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "claimed",
                type: "bool",
              },
            ],
            internalType: "struct Bridge.TimeDetails",
            name: "timeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "retracted",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "successArbitersCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nullArbitersCount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "fromArbiters",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "toArbiters",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "arbOutcome",
                type: "uint256",
              },
            ],
            internalType: "struct Bridge.ArbTransactionDetails",
            name: "arbDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "state",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Bridge.Transaction",
        name: "tx",
        type: "tuple",
      },
    ],
    name: "TransactionAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "ID",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "string",
            name: "fromUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "toUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "claimCodeHash",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "arbitration",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "txEndTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "toBeSetTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "claimed",
                type: "bool",
              },
            ],
            internalType: "struct Bridge.TimeDetails",
            name: "timeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "retracted",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "successArbitersCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nullArbitersCount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "fromArbiters",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "toArbiters",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "arbOutcome",
                type: "uint256",
              },
            ],
            internalType: "struct Bridge.ArbTransactionDetails",
            name: "arbDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "state",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Bridge.Transaction",
        name: "tx",
        type: "tuple",
      },
    ],
    name: "TransactionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "ID",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "string",
            name: "fromUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "toUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "claimCodeHash",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "arbitration",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "txEndTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "toBeSetTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "claimed",
                type: "bool",
              },
            ],
            internalType: "struct Bridge.TimeDetails",
            name: "timeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "retracted",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "successArbitersCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nullArbitersCount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "fromArbiters",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "toArbiters",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "arbOutcome",
                type: "uint256",
              },
            ],
            internalType: "struct Bridge.ArbTransactionDetails",
            name: "arbDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "state",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Bridge.Transaction",
        name: "tx",
        type: "tuple",
      },
    ],
    name: "TransactionRetracted",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_USERNAME_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_hasMadeDecision",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_fromArbiters",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_toArbiters",
        type: "address[]",
      },
    ],
    name: "_isUserAnArbiter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_userDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "totalTransactions",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "succesfullTransactions",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nulllTransactions",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bridgeTokenBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_userSignedUp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_username",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "_usernameTaken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "_usernameToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_toArbiters",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_transactionID",
        type: "uint256",
      },
    ],
    name: "acceptTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_transactionID",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_choice",
        type: "bool",
      },
    ],
    name: "arbitrateTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bridgeTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_transactionID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_claimCode",
        type: "string",
      },
    ],
    name: "claimTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_toUserName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_txEndTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_arbitration",
        type: "bool",
      },
      {
        internalType: "address[]",
        name: "_fromArbiters",
        type: "address[]",
      },
      {
        internalType: "bytes32",
        name: "_claimCodeHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "createTransaction",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "fundAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getActiveTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "string",
            name: "fromUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "toUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "claimCodeHash",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "arbitration",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "txEndTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "toBeSetTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "claimed",
                type: "bool",
              },
            ],
            internalType: "struct Bridge.TimeDetails",
            name: "timeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "retracted",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "successArbitersCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nullArbitersCount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "fromArbiters",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "toArbiters",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "arbOutcome",
                type: "uint256",
              },
            ],
            internalType: "struct Bridge.ArbTransactionDetails",
            name: "arbDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "state",
            type: "uint256",
          },
        ],
        internalType: "struct Bridge.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getCompletedTransctions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "string",
            name: "fromUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "toUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "claimCodeHash",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "arbitration",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "txEndTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "toBeSetTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "claimed",
                type: "bool",
              },
            ],
            internalType: "struct Bridge.TimeDetails",
            name: "timeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "retracted",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "successArbitersCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nullArbitersCount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "fromArbiters",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "toArbiters",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "arbOutcome",
                type: "uint256",
              },
            ],
            internalType: "struct Bridge.ArbTransactionDetails",
            name: "arbDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "state",
            type: "uint256",
          },
        ],
        internalType: "struct Bridge.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_transactionID",
        type: "uint256",
      },
    ],
    name: "getIsRecipient",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_transactionID",
        type: "uint256",
      },
    ],
    name: "getIsSender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getPendingTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "string",
            name: "fromUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "toUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "claimCodeHash",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "arbitration",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "txEndTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "toBeSetTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "claimed",
                type: "bool",
              },
            ],
            internalType: "struct Bridge.TimeDetails",
            name: "timeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "retracted",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "successArbitersCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nullArbitersCount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "fromArbiters",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "toArbiters",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "arbOutcome",
                type: "uint256",
              },
            ],
            internalType: "struct Bridge.ArbTransactionDetails",
            name: "arbDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "state",
            type: "uint256",
          },
        ],
        internalType: "struct Bridge.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUnacceptedTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "string",
            name: "fromUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "toUsername",
            type: "string",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "claimCodeHash",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "arbitration",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "txEndTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "toBeSetTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "claimed",
                type: "bool",
              },
            ],
            internalType: "struct Bridge.TimeDetails",
            name: "timeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "retracted",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "successArbitersCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nullArbitersCount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "fromArbiters",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "toArbiters",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "arbOutcome",
                type: "uint256",
              },
            ],
            internalType: "struct Bridge.ArbTransactionDetails",
            name: "arbDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "state",
            type: "uint256",
          },
        ],
        internalType: "struct Bridge.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_userName",
        type: "string",
      },
    ],
    name: "getUserAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalTransactions",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "succesfullTransactions",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nulllTransactions",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bridgeTokenBalance",
            type: "uint256",
          },
        ],
        internalType: "struct Bridge.UserDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUsername",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_transactionID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isArbiterForTransaction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_transactionID",
        type: "uint256",
      },
    ],
    name: "retractTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_userName",
        type: "string",
      },
    ],
    name: "signUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionIDCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "uint256",
        name: "ID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "string",
        name: "fromUsername",
        type: "string",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "toUsername",
        type: "string",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "claimCodeHash",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "bool",
        name: "arbitration",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "txEndTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "toBeSetTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "claimed",
            type: "bool",
          },
        ],
        internalType: "struct Bridge.TimeDetails",
        name: "timeDetails",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "retracted",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "successArbitersCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nullArbitersCount",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "fromArbiters",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "toArbiters",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "arbOutcome",
            type: "uint256",
          },
        ],
        internalType: "struct Bridge.ArbTransactionDetails",
        name: "arbDetails",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "state",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFromAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const BRIDGE_TOKEN_aBI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintFree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
