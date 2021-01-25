# Link-My-Ride
Decentralized Vehicle Rental Platform, with a Smart Contract accessing vehicle data &amp; modifying its state via Chainlink nodes &amp; a Chainlink external adapter


### Description

In the past, Smart Contracts have been integrated with electric vehicles via the use of specialized hardware that plugs directly into the vehicle to obtain real-time data. Not only were these examples restricted to just accessing data, but they also didn't scale well, as each vehicle requires special hardware installed. Tesla electric vehicles have a proper feature rich API that can be leveraged to obtain vehicle data & change the state of the vehicle, which then gives us the ability to create a custom external adapter to connect Smart Contracts to the vehicle via a Chainlink Oracle, giving the Smart Contract full access to the given vehicles data & ability to change its state.

This example demonstrates the design pattern described above, applying it to the use case of the peer to peer sharing economy. In traditional vehicle rental platforms, the vehicle renter relies on the 'brand power' of the company renting the vehicles, and trusts that the bond they submit will be returned if they adhered to the conditions. And as a vehicle owner/provider, going through a trusted centralized platform usually requires sacrificing approximately 30% of revenue earned. But in a peer to peer scenario, both renter and owner are strangers, there is no 'brand power', and there's no guarantee any bond paid will be returned fairly if agreement conditions are met. This is where a Smart contract connected to external data and events can be leveraged to facilitate a digital agreement between a Vehicle Owner & Vehicle Renter in a trust minimized & secure way.

