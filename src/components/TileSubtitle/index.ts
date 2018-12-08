import component from './TileSubtitle.vue';
import { registerPlugin, installPlugin } from '@/utils';

export let install = installPlugin;
registerPlugin({ install });

export default component;