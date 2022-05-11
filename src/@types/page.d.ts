import { IComponentItem } from './component.d';

export interface IPage {
	name: string;
	components: IComponentItem[],
	id: string,
	clone_from?: string,
};