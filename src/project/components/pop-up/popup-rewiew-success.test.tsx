import userEvent from '@testing-library/user-event';
import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopRewiewSuccess } from './index';

describe('component: PopRewiewSuccess', () => {
  it('should render correctly', () => {
    const expectedText = 'Спасибо за отзыв';
    const preparedComponent = withHistory(<PopRewiewSuccess />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });

  it('when user clicked  button', async () => {
    const preparedComponent = withHistory(<PopRewiewSuccess />);
    await userEvent.click(screen.getByRole('button'));
    render(preparedComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});
