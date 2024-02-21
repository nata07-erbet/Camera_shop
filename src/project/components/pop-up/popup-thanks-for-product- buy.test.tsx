import userEvent from '@testing-library/user-event';
import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopupThanksForProductBuy } from './index';

describe('component: PopupThanksForProductBuy', () => {
  it('should render correctly', () => {
    const expectedText = 'Спасибо за покупку';
    const preparedComponent = withHistory(<PopupThanksForProductBuy />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });

  it('when user clicked  button', async () => {
    const preparedComponent = withHistory(<PopupThanksForProductBuy />);
    await userEvent.click(screen.getByRole('button'));
    render(preparedComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});
