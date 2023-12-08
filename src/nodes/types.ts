import { Dict } from 'epdoc-util';
import { Node, NodeDef } from 'node-red';

export interface NodeProperties extends NodeDef {
  debugEnabled?: boolean;
  version: number;
}

export interface BaseNodeConfig extends NodeProperties {
  version: number;
  debugEnabled?: boolean;
  // outputs?: number;
}

export interface BaseNode extends Node {
  config: BaseNodeConfig;
  controller: any;
}

export type SelectorType = 'id' | 'friendlyName';

export type NodeRed = {
  nodes: {
    createNode: (ctx: Node, config: Dict) => {};
  };
};

// export enum NodeType {
//   FanControl = 'fan-control',
//   LowerCase = 'lower-case'
// }
