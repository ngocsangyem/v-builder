
export type MenuChildrenTypes = 'card' | 'navigation' | 'notifications' | 'article' | 'author' | 'gallery' | 'mics' | 'plugin' | 'banner' | 'coming soon' | 'contact' | 'FAQ' | 'features' | 'hero' | 'into' | 'placeholder' | 'pricing' | 'sidebar' | 'team' | 'social' | 'testimonials' | 'accordion' | 'chart' | 'list' | 'progress' | 'table' | 'tabs' | 'timeline' | 'form elements' | 'templates' | 'controls' | 'page transition' | 'scroll' | 'text' | 'footer' | 'header' | 'intro' | 'side nav' | 'sub nav' | 'carousel' | ' slideshow';

export type MenuTitleTypes = 'app' | 'blog' | 'content and layout' | 'controls' | 'data display' | 'decorative background' | 'ecommerce' | 'effects' | 'feedback' | 'forms' | 'navigation' | 'overlays' | 'plugins' | 'typography';

export interface IComponentsMenu {
	title: Capitalize<MenuTitleTypes>;
	count: number;
	children: IComponentsMenuChildren[];
}

export interface IComponentsMenuChildren {
	title: Capitalize<MenuChildrenTypes>;
	count: number;
	type: MenuChildrenType;
}