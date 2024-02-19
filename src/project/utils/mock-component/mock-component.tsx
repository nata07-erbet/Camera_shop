import {HelmetProvider} from 'react-helmet-async';

export function withHelmet(component: JSX.Element) {
  return (
    <HelmetProvider>
      {component}
    </HelmetProvider>
  );
}
