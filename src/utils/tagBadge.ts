const TAG_BADGE_PALETTE = [
	{ bg: '#fef3d7', fg: '#c25f00', border: '#f8deb0' },
	{ bg: '#fff2cc', fg: '#a16207', border: '#f5e1a3' },
	{ bg: '#ecf9c6', fg: '#5b8f09', border: '#d8ef9a' },
	{ bg: '#daf6e3', fg: '#0c8a44', border: '#c0eecf' },
	{ bg: '#dbf1ea', fg: '#007f64', border: '#c4e7de' },
	{ bg: '#d8f1f1', fg: '#00798c', border: '#bee3e6' },
	{ bg: '#d6f2ff', fg: '#0075a8', border: '#b9e6fb' },
	{ bg: '#ddeefe', fg: '#1266b7', border: '#c8def9' },
	{ bg: '#e1e8fe', fg: '#2a53d8', border: '#ced8fb' },
	{ bg: '#e8e5ff', fg: '#4b4cd6', border: '#d6d1fb' },
	{ bg: '#efe1ff', fg: '#6a33f2', border: '#e0cdfd' },
	{ bg: '#f2e1ff', fg: '#8927df', border: '#e7cffb' },
	{ bg: '#f8e0f4', fg: '#b11cb7', border: '#f0cbe9' },
	{ bg: '#fde4ee', fg: '#cd165c', border: '#f8cfdf' },
	{ bg: '#fee2e7', fg: '#d70d3a', border: '#f9ccd6' },
	{ bg: '#efefef', fg: '#52525b', border: '#e2e2e2' },
] as const;

function hashString(input: string) {
	let hash = 0;

	for (let index = 0; index < input.length; index += 1) {
		hash = (hash << 5) - hash + input.charCodeAt(index);
		hash |= 0;
	}

	return Math.abs(hash);
}

export function getTagBadgePalette(tag: string) {
	return TAG_BADGE_PALETTE[hashString(tag) % TAG_BADGE_PALETTE.length];
}

export function getTagBadgeStyle(tag: string) {
	const palette = getTagBadgePalette(tag);

	return `--tag-badge-bg:${palette.bg}; --tag-badge-fg:${palette.fg}; --tag-badge-border:${palette.border};`;
}
