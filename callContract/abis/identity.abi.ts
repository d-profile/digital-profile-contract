const IdentityAbi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
      "constant": true,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "getKey",
      "outputs": [
        {
          "name": "purpose",
          "type": "uint256"
        },
        {
          "name": "keyType",
          "type": "uint256"
        },
        {
          "name": "key",
          "type": "bytes32"
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
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_purpose",
          "type": "uint256"
        },
        {
          "name": "_keyType",
          "type": "uint256"
        }
      ],
      "name": "addKey",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_claimType",
          "type": "uint256"
        }
      ],
      "name": "getClaimIdsByType",
      "outputs": [
        {
          "name": "claimIds",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
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
      "constant": false,
      "inputs": [
        {
          "name": "_claimId",
          "type": "bytes32"
        }
      ],
      "name": "removeClaim",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
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
      "constant": true,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "addrToKey",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "approved",
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
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_approve",
          "type": "bool"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "removeKey",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_purpose",
          "type": "uint256"
        }
      ],
      "name": "getKeysByPurpose",
      "outputs": [
        {
          "name": "keys",
          "type": "bytes32[]"
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
          "name": "_claimType",
          "type": "uint256"
        },
        {
          "name": "_scheme",
          "type": "uint256"
        },
        {
          "name": "_issuer",
          "type": "address"
        },
        {
          "name": "_signature",
          "type": "bytes"
        },
        {
          "name": "_data",
          "type": "bytes"
        },
        {
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "addClaim",
      "outputs": [
        {
          "name": "claimRequestId",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "name": "executionId",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_claimId",
          "type": "bytes32"
        }
      ],
      "name": "getClaim",
      "outputs": [
        {
          "name": "claimType",
          "type": "uint256"
        },
        {
          "name": "scheme",
          "type": "uint256"
        },
        {
          "name": "issuer",
          "type": "address"
        },
        {
          "name": "signature",
          "type": "bytes"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "numKeys",
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
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "purpose",
          "type": "uint256"
        }
      ],
      "name": "keyHasPurpose",
      "outputs": [
        {
          "name": "exists",
          "type": "bool"
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "executions",
      "outputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "approved",
          "type": "bool"
        },
        {
          "name": "executed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_keys",
          "type": "bytes32[]"
        },
        {
          "name": "_purposes",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "claimRequestId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "topic",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "scheme",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "issuer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "signature",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "ClaimRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "claimId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "topic",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "scheme",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "issuer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "signature",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "ClaimAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "claimId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "topic",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "scheme",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "issuer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "signature",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "ClaimRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "claimId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "topic",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "scheme",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "issuer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "signature",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "ClaimChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "purpose",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "keyType",
          "type": "uint256"
        }
      ],
      "name": "KeyAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "purpose",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "keyType",
          "type": "uint256"
        }
      ],
      "name": "KeyRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "executionId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "ExecutionRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "executionId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "Executed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "executionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "Approved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "purpose",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "number",
          "type": "uint256"
        }
      ],
      "name": "KeysRequiredChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "executionId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "ExecutionFailed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "LogPause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "LogUnpause",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_keys",
          "type": "bytes32[]"
        },
        {
          "name": "_purposes",
          "type": "uint256[]"
        },
        {
          "name": "_keyType",
          "type": "uint256"
        }
      ],
      "name": "addKeys",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tos",
          "type": "address[]"
        },
        {
          "name": "_values",
          "type": "uint256[]"
        },
        {
          "name": "_datas",
          "type": "bytes[]"
        }
      ],
      "name": "executeMany",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

export default IdentityAbi
