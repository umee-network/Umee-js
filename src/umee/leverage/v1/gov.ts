import { Token } from "./leverage";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * UpdateRegistryProposal defines a governance proposal type where the token
 * registry can be updated in the Umee capital facility. Note, the registry
 * defined in the proposal replaces the current registry in its entirety.
 */
export interface UpdateRegistryProposal {
  title: string;
  description: string;
  registry: Token[];
}

function createBaseUpdateRegistryProposal(): UpdateRegistryProposal {
  return {
    title: "",
    description: "",
    registry: []
  };
}

export const UpdateRegistryProposal = {
  encode(message: UpdateRegistryProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.registry) {
      Token.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRegistryProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.registry.push(Token.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateRegistryProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      registry: Array.isArray(object?.registry) ? object.registry.map((e: any) => Token.fromJSON(e)) : []
    };
  },

  toJSON(message: UpdateRegistryProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Token.toJSON(e) : undefined);
    } else {
      obj.registry = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<UpdateRegistryProposal>): UpdateRegistryProposal {
    const message = createBaseUpdateRegistryProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.registry = object.registry?.map(e => Token.fromPartial(e)) || [];
    return message;
  }

};