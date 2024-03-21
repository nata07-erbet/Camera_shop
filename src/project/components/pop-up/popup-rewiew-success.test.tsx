import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopupRewiewSuccess } from './index';

describe('component: PopupRewiewSuccess', () => {
  it('should render correctly', () => {
    const expectedText = 'Спасибо за отзыв';
    const preparedComponent = withHistory(<PopupRewiewSuccess />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
