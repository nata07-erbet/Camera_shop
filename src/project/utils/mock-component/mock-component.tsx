import { MemoryHistory, createMemoryHistory } from 'history';
import { HistoryRouter } from '../history-router/history-router';
import { HelmetProvider } from 'react-helmet-async';


function withHistory (component: JSX.Element, history?: MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
}
