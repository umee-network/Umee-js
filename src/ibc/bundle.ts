import * as _105 from "./applications/transfer/v1/genesis";
import * as _106 from "./applications/transfer/v1/query";
import * as _107 from "./applications/transfer/v1/transfer";
import * as _108 from "./applications/transfer/v1/tx";
import * as _109 from "./applications/transfer/v2/packet";
import * as _110 from "./core/channel/v1/channel";
import * as _111 from "./core/channel/v1/genesis";
import * as _112 from "./core/channel/v1/query";
import * as _113 from "./core/channel/v1/tx";
import * as _114 from "./core/client/v1/client";
import * as _115 from "./core/client/v1/genesis";
import * as _116 from "./core/client/v1/query";
import * as _117 from "./core/client/v1/tx";
import * as _118 from "./core/commitment/v1/commitment";
import * as _119 from "./core/connection/v1/connection";
import * as _120 from "./core/connection/v1/genesis";
import * as _121 from "./core/connection/v1/query";
import * as _122 from "./core/connection/v1/tx";
import * as _123 from "./core/port/v1/query";
import * as _124 from "./core/types/v1/genesis";
import * as _125 from "./lightclients/localhost/v1/localhost";
import * as _126 from "./lightclients/solomachine/v1/solomachine";
import * as _127 from "./lightclients/solomachine/v2/solomachine";
import * as _128 from "./lightclients/tendermint/v1/tendermint";
import * as _226 from "./applications/transfer/v1/tx.amino";
import * as _227 from "./core/channel/v1/tx.amino";
import * as _228 from "./core/client/v1/tx.amino";
import * as _229 from "./core/connection/v1/tx.amino";
import * as _230 from "./applications/transfer/v1/tx.registry";
import * as _231 from "./core/channel/v1/tx.registry";
import * as _232 from "./core/client/v1/tx.registry";
import * as _233 from "./core/connection/v1/tx.registry";
import * as _234 from "./applications/transfer/v1/query.lcd";
import * as _235 from "./core/channel/v1/query.lcd";
import * as _236 from "./core/client/v1/query.lcd";
import * as _237 from "./core/connection/v1/query.lcd";
import * as _238 from "./applications/transfer/v1/query.rpc.query";
import * as _239 from "./core/channel/v1/query.rpc.query";
import * as _240 from "./core/client/v1/query.rpc.query";
import * as _241 from "./core/connection/v1/query.rpc.query";
import * as _242 from "./core/port/v1/query.rpc.query";
import * as _243 from "./applications/transfer/v1/tx.rpc.msg";
import * as _244 from "./core/channel/v1/tx.rpc.msg";
import * as _245 from "./core/client/v1/tx.rpc.msg";
import * as _246 from "./core/connection/v1/tx.rpc.msg";
import * as _260 from "./lcd";
import * as _261 from "./rpc.query";
import * as _262 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._105,
        ..._106,
        ..._107,
        ..._108,
        ..._226,
        ..._230,
        ..._234,
        ..._238,
        ..._243
      };
      export const v2 = { ..._109
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._227,
        ..._231,
        ..._235,
        ..._239,
        ..._244
      };
    }
    export namespace client {
      export const v1 = { ..._114,
        ..._115,
        ..._116,
        ..._117,
        ..._228,
        ..._232,
        ..._236,
        ..._240,
        ..._245
      };
    }
    export namespace commitment {
      export const v1 = { ..._118
      };
    }
    export namespace connection {
      export const v1 = { ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._229,
        ..._233,
        ..._237,
        ..._241,
        ..._246
      };
    }
    export namespace port {
      export const v1 = { ..._123,
        ..._242
      };
    }
    export namespace types {
      export const v1 = { ..._124
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._125
      };
    }
    export namespace solomachine {
      export const v1 = { ..._126
      };
      export const v2 = { ..._127
      };
    }
    export namespace tendermint {
      export const v1 = { ..._128
      };
    }
  }
  export const ClientFactory = { ..._260,
    ..._261,
    ..._262
  };
}