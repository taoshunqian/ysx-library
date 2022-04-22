import { NodeKey, TreeNodeOptions } from "./types";
import { TypeWithUndefined } from "./utils/types";

export class BaseTreeNode {
  readonly key: NodeKey;
  readonly name: string;
  readonly level: number;
  loading = false;
  hasChildren = false;
  children: BaseTreeNode[] = [];
  parentKey: TypeWithUndefined<NodeKey>;
  parentKeys: NodeKey[] = [];
  constructor(options: TreeNodeOptions, parent?: BaseTreeNode) {
    this.key = options.nodeKey;
    this.name = options.name;
    this.parentKey = parent?.key;
    this.parentKeys = parent ? [...parent.parentKeys, parent.key] : [];
    this.level = parent ? parent.level + 1 : 0;
  }
}