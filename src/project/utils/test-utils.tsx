import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { AppRoute } from '../const/const';
import { routesConfig } from '../routes/routes';

const renderWithRouter = (initialRoute: string = AppRoute.Main) => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [initialRoute],
  });
  return render(<RouterProvider router={router} />);
};

export { renderWithRouter };
