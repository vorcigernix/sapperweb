import { writable } from 'svelte/store';
export const baseurl = writable(process.env.base_url || "https://sapperweb.prismic.io/api/v2/documents/search?ref=");

