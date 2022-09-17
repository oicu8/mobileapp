class Clients {
	constructor() {
		this.coin = "bitcoin";
		this.mainClient = {
			bitcoin: false,
			litecoin: false,
			bitcoinTestnet: false,
			litecoinTestnet: false,
			moneybyte: false
		};
		this.peer = {
			bitcoin: { port: 0, host: "", protocol: "" },
			litecoin: { port: 0, host: "", protocol: "" },
			bitcoinTestnet: { port: 0, host: "", protocol: "" },
			litecoinTestnet: { port: 0, host: "", protocol: "" },
			moneybyte: { port: 0, host: "", protocol: "" }
		};
		this.peers = {
			bitcoin: [],
			litecoin: [],
			bitcoinTestnet: [],
			litecoinTestnet: [],
			moneybyte: []
		};
		this.subscribedAddresses = {
			bitcoin: [],
			litecoin: [],
			bitcoinTestnet: [],
			litecoinTestnet: [],
			moneybyte: []
		};
		this.subscribedHeaders = {
			bitcoin: false,
			litecoin: false,
			bitcoinTestnet: false,
			litecoinTestnet: false,
			moneybyte: false
		};
	}

	updateCoin(coin) {
		this.coin = coin;
	}

	updateMainClient(mainClient) {
		this.mainClient = mainClient;
	}

	updatePeer(peer) {
		this.peer = peer;
	}

}

module.exports = new Clients();
