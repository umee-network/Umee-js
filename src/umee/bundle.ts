import * as _140 from "./leverage/v1/events";
import * as _141 from "./leverage/v1/genesis";
import * as _142 from "./leverage/v1/gov";
import * as _143 from "./leverage/v1/leverage";
import * as _144 from "./leverage/v1/query";
import * as _145 from "./leverage/v1/tx";
import * as _146 from "./oracle/v1/events";
import * as _147 from "./oracle/v1/genesis";
import * as _148 from "./oracle/v1/oracle";
import * as _149 from "./oracle/v1/query";
import * as _150 from "./oracle/v1/tx";
import * as _247 from "./leverage/v1/tx.amino";
import * as _248 from "./oracle/v1/tx.amino";
import * as _249 from "./leverage/v1/tx.registry";
import * as _250 from "./oracle/v1/tx.registry";
import * as _251 from "./leverage/v1/query.lcd";
import * as _252 from "./oracle/v1/query.lcd";
import * as _253 from "./leverage/v1/query.rpc.query";
import * as _254 from "./oracle/v1/query.rpc.query";
import * as _255 from "./leverage/v1/tx.rpc.msg";
import * as _256 from "./oracle/v1/tx.rpc.msg";
import * as _263 from "./lcd";
import * as _264 from "./rpc.query";
import * as _265 from "./rpc.tx";
export namespace umee {
  export namespace leverage {
    export const v1 = { ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._247,
      ..._249,
      ..._251,
      ..._253,
      ..._255
    };
  }
  export namespace oracle {
    export const v1 = { ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._248,
      ..._250,
      ..._252,
      ..._254,
      ..._256
    };
  }
  export const ClientFactory = { ..._263,
    ..._264,
    ..._265
  };
}