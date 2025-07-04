import { createRoot } from 'react-dom/client';
import App from './App';
import { restaurants } from './mock';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(<App restaurants={restaurants} />);
