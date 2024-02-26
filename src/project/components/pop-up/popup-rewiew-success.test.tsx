import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopRewiewSuccess } from './index';

describe('component: PopRewiewSuccess', () => {
  it('should render correctly', () => {
    const expectedText = 'Спасибо за отзыв';
    const preparedComponent = withHistory(<PopRewiewSuccess />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
