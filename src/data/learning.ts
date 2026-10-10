export const categorySlugs = [
	'fundamentos-poo',
	'principios',
	'solid',
	'patrones',
	'arquitectura',
	'practica',
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export const categories = [
	{
		slug: 'fundamentos-poo',
		title: 'Fundamentos de POO',
		navLabel: 'Fundamentos',
		description:
			'Comprende clases, objetos, encapsulamiento, abstracción, herencia y polimorfismo con ejemplos.',
		topics: 'Clases · Objetos · Pilares de POO',
		icon: 'layers',
	},
	{
		slug: 'principios',
		title: 'Principios de diseño',
		navLabel: 'Principios',
		description:
			'Escribe código más claro con buenas decisiones sobre cohesión, acoplamiento y refactorización.',
		topics: 'KISS · DRY · YAGNI',
		icon: 'compass',
	},
	{
		slug: 'solid',
		title: 'Principios SOLID',
		navLabel: 'SOLID',
		description:
			'Aprende los cinco principios SOLID con ejemplos para diseñar software flexible y mantenible.',
		topics: 'SRP · OCP · LSP · ISP · DIP',
		icon: 'blocks',
	},
	{
		slug: 'patrones',
		title: 'Patrones de diseño',
		navLabel: 'Patrones de diseño',
		description:
			'Explora patrones creacionales, estructurales y de comportamiento, y cuándo tiene sentido aplicarlos.',
		topics: 'Creacionales · Estructurales · Comportamiento',
		icon: 'nodes',
	},
	{
		slug: 'arquitectura',
		title: 'Arquitectura de software',
		navLabel: 'Arquitectura',
		description:
			'Estudia arquitectura por capas, MVC, arquitectura hexagonal y Clean Architecture.',
		topics: 'Capas · MVC · Hexagonal · Clean',
		icon: 'architecture',
	},
	{
		slug: 'practica',
		title: 'Práctica y proyectos',
		navLabel: 'Práctica',
		description:
			'Pon las ideas a prueba con ejercicios, análisis de código y proyectos integradores.',
		topics: 'Ejercicios · Proyectos',
		icon: 'terminal',
	},
] as const satisfies ReadonlyArray<{
	slug: CategorySlug;
	title: string;
	navLabel: string;
	description: string;
	topics: string;
	icon: string;
}>;

export function getCategory(slug: string) {
	return categories.find((category) => category.slug === slug);
}
