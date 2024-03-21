import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { Catalog } from './catalog';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedHeaderText = 'Каталог фото- и видеотехники';

    render(withHistory(<Catalog/>));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
  });
});
