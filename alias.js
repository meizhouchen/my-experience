import { resolve } from 'path'

const r = (p) => resolve(__dirname, p)

export const alias = {
	'css-allin-class': r('./packages/css-allin-class/src/'),
}
