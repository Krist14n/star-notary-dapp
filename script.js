    if (typeof web3 != 'undefined') {
        web3 = new Web3(web3.currentProvider) // what Metamask injected 
    } else {
        // Instantiate and set Ganache as your provider
        web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/8f4c48b4f45548a497b318048b576c3d"));
    }

    // The default (top) wallet account from a list of test accounts 
    web3.eth.defaultAccount = web3.eth.accounts[0];

    // The interface definition for your smart contract (the ABI) 
    var StarNotary = web3.eth.contract(
        [{
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "_tokenId",
                    "type": "uint256"
                }],
                "name": "buyStar",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_story",
                        "type": "string"
                    },
                    {
                        "name": "_dec",
                        "type": "string"
                    },
                    {
                        "name": "_mag",
                        "type": "string"
                    },
                    {
                        "name": "_cent",
                        "type": "string"
                    },
                    {
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "createStar",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "_tokenId",
                        "type": "uint256"
                    },
                    {
                        "name": "_price",
                        "type": "uint256"
                    }
                ],
                "name": "putStarUpForSale",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [{
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
                        "indexed": true,
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "owner",
                    "type": "address"
                }],
                "name": "balanceOf",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "_concatenatedCoords",
                    "type": "string"
                }],
                "name": "checkIfStarExist",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "tokenId",
                    "type": "uint256"
                }],
                "name": "getApproved",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "tokenId",
                    "type": "uint256"
                }],
                "name": "ownerOf",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "name": "starsForSale",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "interfaceId",
                    "type": "bytes4"
                }],
                "name": "supportsInterface",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "name": "tokenIdToStarInfo",
                "outputs": [{
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "story",
                        "type": "string"
                    },
                    {
                        "name": "dec",
                        "type": "string"
                    },
                    {
                        "name": "mag",
                        "type": "string"
                    },
                    {
                        "name": "cent",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
    );
    // Grab the contract at specified deployed address with the interface defined by the ABI
    var starNotary = StarNotary.at('0x6d32d3d0ec43b8fafd8c396c60dcbf6952559885');

    // Enable claim button being clicked
    export function claimButtonClicked() {
        var starName = document.getElementById('star-name').value;
        var starDec = document.getElementById('star-dec').value;
        var starMag = document.getElementById('star-mag').value;
        var starCent = document.getElementById('star-cent').value;
        var starStory = document.getElementById('star-story').value;
        var tokenId = getRndInteger(1,1000000000);
        console.log(tokenId);
       
        web3.eth.getAccounts(function (error, accounts) {
            if (error) {
                console.log(error)
                return
            }
            var account = accounts[0]
            starNotary.createStar(starName, starStory, starDec, starMag, starCent, tokenId, function (error, result) {
                if (!error) {
                    console.log(result);
                } else {
                    console.log(error);
                }
            });
        })
    }

    export function searchButtonClicked() {
        var tokenId = document.getElementById('token-id').value;
        starNotary.tokenIdToStarInfo(tokenId, function (error, result) {
            if (!error) {
                console.log(result);
                document.getElementById('lookup-result').innerText = result
            } else {
                console.log(error);
            }
        });
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }