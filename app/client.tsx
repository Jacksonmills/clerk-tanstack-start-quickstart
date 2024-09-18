import { StartClient } from '@tanstack/start';
import { hydrateRoot } from 'react-dom/client';
import { createRouter } from './router';

const router = createRouter();

const rootElement = document.getElementById('root');
if (rootElement) {
  hydrateRoot(rootElement, <StartClient router={router} />);
} else {
  console.error('Root element not found');
}
