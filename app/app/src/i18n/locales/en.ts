const defaultLocale =
[
	'What is {0}?',
	'Visit our website',
	'Join our Discord',
	'You want to understand 2GETHER references, know why the Posson exists, who leads the dance at the lighthouse, or even why barrels are well loaded?',
	'Well, dive into 2GETHER Universe!',
	'An interactive platform giving you access to several resources of the 2GETHER universe: animations, comics, pieces of stories from a lost journal, and much more!',
] as const

type Keys = typeof defaultLocale[number]
type Type = { [key in Keys]: key }

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Type>((acc, key) =>
		{
			(acc as any)[key] = key
			return acc
		},
		{} as Type,
	)

export default locale as Readonly<typeof locale>
