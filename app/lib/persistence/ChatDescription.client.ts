/*
 * Named re-export (not `export *`): Remix stubs `*.client.*` modules in the SSR
 * build by re-declaring each export es-module-lexer can see, and `export *`
 * exposes no names, which breaks named imports from the server bundle.
 */
export { ChatDescription } from '@/services/storage/ChatDescription.client';
