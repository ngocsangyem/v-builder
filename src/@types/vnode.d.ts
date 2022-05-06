/**
 * @author raozhanping
 */

export const TEXT = Symbol('Text');
export const COMMENT = Symbol('Comment');

export type VNodeTypes = string | typeof TEXT | typeof COMMENT;

export type Data = Record<string, unknown>;

export type NormalizedChildren = string | VNode[] | null;

export interface VNode {
	type: VNodeTypes;
	props?: Record<string, any> | null;
	children?: NormalizedChildren;
	shapeFlag?: number;
}