const TAG_BADGE_PALETTE = [
	'#ef4444',
	'#eab308',
	'#22c55e',
	'#3b82f6',
	'#6366f1',
	'#a855f7',
	'#ec4899',
	'#f97316',
	'#14b8a6',
	'#84cc16',
	'#8b5cf6',
	'#06b6d4',
	'#f43f5e',
	'#10b981',
	'#d946ef',
	'#71717a',
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
	return `--tag-dot-color:${getTagBadgePalette(tag)};`;
}
