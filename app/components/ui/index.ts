/*
 * Compatibility barrel: components were reorganized into common/forms/layout/modals,
 * but `~/components/ui` is still imported across the app. Re-export the real barrels.
 */
export * from '~/components/common';
export * from '~/components/forms';
export * from '~/components/layout';
export * from '~/components/modals';
