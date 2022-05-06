import { VNode } from './vnode.d';
export interface IComponentItem {
	title: string;
	thumbnail: string;
	id: string;
	html?: VNode;
}