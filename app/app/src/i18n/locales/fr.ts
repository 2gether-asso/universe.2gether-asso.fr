import type { I18n, Diff } from '../type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
	'You want to understand 2GETHER references, know why the Posson exists, who leads the dance at the lighthouse, or even why barrels are well loaded?':
		'Vous voulez comprendre les références de 2GETHER, savoir pourquoi le Posson existe, qui mène la danse au phare ou même pourquoi les tonneaux sont bien chargés ?',
	'Well, dive into 2GETHER Universe!':
		'Et bien, plongez dans 2GETHER Universe !',
	'An interactive platform giving you access to several resources of the 2GETHER universe: animations, comics, pieces of stories from a lost journal, and much more!':
		'Une plateforme interactive vous donnant accès à plusieurs ressources de l\'univers 2GETHER : des animations, des comics, des morceaux d\'histoires d\'un journal perdu, et bien plus encore !',
} as const

// Static type check
export default locale satisfies
	// Check for missing keys:
	Readonly<Record<Diff<keyof I18n, keyof typeof locale>, string>> &
	// Check for extra keys:
	Readonly<Record<Diff<keyof typeof locale, keyof I18n>, never>>
