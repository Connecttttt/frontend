// struct Transaction {
//     uint256 ID;
//     address from;
//     string fromUsername;
//     address to;
//     string toUsername;
//     address asset;
//     uint256 amount;
//     bytes32 claimCodeHash;
//     string description;
//     bool arbitration;
//     TimeDetails timeDetails;
//     ArbTransactionDetails arbDetails;
//     uint256 state;
//     // 1= unaccepted, 2=active, 3=pending, 3.5=completed, 4 = retracted
// }

// struct TimeDetails {
//     uint256 txEndTime;
//     uint256 toBeSetTime;
//     bool claimed;
// }

// struct ArbTransactionDetails {
//     uint256 successArbitersCount;
//     uint256 nullArbitersCount;
//     address[] fromArbiters;
//     address[] toArbiters;
//     uint256 arbOutcome; // 0 - nothing, 1 - succesful transaction, 2 - null transaction,
// }

// ACTIUVE TARNSACTIONS -> state == 2 and endTime hasnt been exceeded
// what data do i need for display on client for active trsnactions
export const ACTIVE_TRANSACTIONS = [
  {
    ID: 23,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: true,
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: false,
    },
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 1.34 * 10 ** 18,
    fromUsername: "franfran ",
    toUsername: "oma",
    status: 2,
    to: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",

    from: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    timeDetails: {
      txEndTime: "1688763790",
    },
  },
  {
    ID: 21,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: false,
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 7.34 * 10 ** 18,
    fromUsername: "kiddo ",
    toUsername: "oma",
    status: 2,
    to: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",

    from: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",
    timeDetails: {
      txEndTime: "1688083790",
    },
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: true,
    },
  },
  {
    ID: 45,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: true,
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: false,
    },
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 1.9 * 10 ** 18,
    fromUsername: "franfran ",
    toUsername: "jestin",
    status: 2,
    to: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",
    from: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    timeDetails: {
      txEndTime: "1688260990",
    },
  },
];

export const PENDING_TRANSACTIONS = [
  {
    ID: 23,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: true,
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: false,
      successArbitersCount: 2,
      nullArbitersCount: 1,
    },
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 1.34 * 10 ** 18,
    fromUsername: "franfran ",
    toUsername: "oma",
    status: 2,
    to: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",

    from: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    timeDetails: {
      txEndTime: "1688763790",
    },
  },
  {
    ID: 21,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: false,
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 7.34 * 10 ** 18,
    fromUsername: "kiddo ",
    toUsername: "oma",
    status: 2,
    to: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",

    from: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",
    timeDetails: {
      txEndTime: "1688083790",
    },
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: true,
      successArbitersCount: 2,
      nullArbitersCount: 1,
    },
  },
  {
    ID: 45,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: true,
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: false,
      successArbitersCount: 2,
      nullArbitersCount: 1,
    },
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 1.9 * 10 ** 18,
    fromUsername: "franfran ",
    toUsername: "jestin",
    status: 2,
    to: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",
    from: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    timeDetails: {
      txEndTime: "1688260990",
    },
  },
];

export const UNACCEPTED_TRANSACTIONS = [
  {
    ID: 23,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: true,
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: false,
      successArbitersCount: 2,
      nullArbitersCount: 1,
    },
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 1.34 * 10 ** 18,
    fromUsername: "franfran ",
    toUsername: "oma",
    status: 2,
    to: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",

    from: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    timeDetails: {
      txEndTime: "1688763790",
    },
  },
  {
    ID: 21,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: false,
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 7.34 * 10 ** 18,
    fromUsername: "kiddo ",
    toUsername: "oma",
    status: 2,
    to: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",

    from: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",
    timeDetails: {
      txEndTime: "1688083790",
    },
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: true,
      successArbitersCount: 2,
      nullArbitersCount: 1,
    },
  },
  {
    ID: 45,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: true,
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: false,
      successArbitersCount: 2,
      nullArbitersCount: 1,
    },
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 1.9 * 10 ** 18,
    fromUsername: "franfran ",
    toUsername: "jestin",
    status: 2,
    to: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",
    from: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    timeDetails: {
      txEndTime: "1688260990",
    },
  },
];

export const COMPLETED_TRANSACTIONS = [
  {
    ID: 23,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: true,
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: false,
      successArbitersCount: 2,
      nullArbitersCount: 1,
      claimed: false,
    },
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 1.34 * 10 ** 18,
    fromUsername: "franfran ",
    toUsername: "oma",
    status: 2,
    to: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",

    from: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    timeDetails: {
      txEndTime: "1688763790",
    },
  },
  {
    ID: 21,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: false,
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 7.34 * 10 ** 18,
    fromUsername: "kiddo ",
    toUsername: "oma",
    status: 2,
    to: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",

    from: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",
    timeDetails: {
      txEndTime: "1688083790",
    },
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: true,
      successArbitersCount: 2,
      nullArbitersCount: 1,
      claimed: true,
    },
  },
  {
    ID: 45,
    description:
      "Payment for your hackathon project forthe horizen bounty: Building a saclable escrow platform.",
    arbitration: true,
    arbDetails: {
      fromArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      toArbiters: [
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
        "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
      ],
      retracted: false,
      successArbitersCount: 2,
      nullArbitersCount: 1,
      claimed: false,
    },
    asset: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    amount: 1.9 * 10 ** 18,
    fromUsername: "franfran ",
    toUsername: "jestin",
    status: 2,
    to: "0x52047DE4458AfaaFF7C6B954C63033A21EfCD2E6",
    from: "0x5F7FbE4bf8987FA77Ec6C22FD3f3d558B3b68D4e",
    timeDetails: {
      txEndTime: "1688260990",
    },
  },
];
