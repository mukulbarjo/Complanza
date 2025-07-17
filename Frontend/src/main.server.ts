import 'zone.js/node'; // ✅ Required for SSR with zone support

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(App, config);

export default bootstrap;
