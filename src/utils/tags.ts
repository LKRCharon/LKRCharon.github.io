export function normalizeTag(tag: string): string {
	return tag.trim();
}

export function tagToSlug(tag: string): string {
	return normalizeTag(tag).toLowerCase().replace(/\s+/g, '-');
}

export { getTagBadgeStyle } from './tagBadge';
