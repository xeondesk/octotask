// `export *` does not forward the default export, and `api/chat` imports SwitchableStream as a default import.
export { default } from '@/services/ai/switchable-stream';
export * from '@/services/ai/switchable-stream';
