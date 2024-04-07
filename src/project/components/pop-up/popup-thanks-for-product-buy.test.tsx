import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopupThanksForProductBuy } from './index';

describe('component: PopupThanksForProductBuy', () => {
  it('should render correctly', () => {
    const expectedText = 'Спасибо за покупку';
    const preparedComponent = withHistory(<PopupThanksForProductBuy sendingStatus={false} />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
