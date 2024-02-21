import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('component: Footer', () => {
  it('should render correctly', () => {
    const expectedText = 'Интернет-магазин фото- и видеотехники';
    const preparedComponent = withHistory(<Footer />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
