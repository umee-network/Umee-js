# UmeeJs

TS library for interacting with Umee Blockchain

```
import { umee } from "umee-js";

const { createLCDClient } = umee.ClientFactory;

const client = await createLCDClient({
  restEndpoint: "https://api.dewey.bloom-beta-1.network.umee.cc",
});

// now you can query the modules
const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "umee1y7gaxd0rkfgeukwx728yray2hsv90q8nnr40up",
});

//retrieving the registered_tokens Query
const registeredTokens = await client.umee.leverage.v1.registeredTokens();


```

### IBC Messages

```
import { ibc } from 'umee-js';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

### Cosmos Messages

```
import { cosmos } from 'umee-js';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

Code built with the help of [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
