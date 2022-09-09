import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as umeeLeverageV1TxRegistry from "./leverage/v1/tx.registry";
import * as umeeOracleV1TxRegistry from "./oracle/v1/tx.registry";
import * as umeeLeverageV1TxAmino from "./leverage/v1/tx.amino";
import * as umeeOracleV1TxAmino from "./oracle/v1/tx.amino";
export const getSigningUmeeClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...umeeLeverageV1TxRegistry.registry, ...umeeOracleV1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...umeeLeverageV1TxAmino.AminoConverter,
    ...umeeOracleV1TxAmino.AminoConverter
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningUmeeClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningUmeeClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};