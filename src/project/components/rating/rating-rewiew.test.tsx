import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { RatingRewiew } from './rating-rewiew';
import { ERROR_MESSAGE } from '../../const/const';

describe('component: RatingRewiew', () => {
  it('should render correctly', () => {
    const expectedText = 'Рейтинг';

    const preparedComponent = withHistory(
      <RatingRewiew onChange={vi.fn()} error={ERROR_MESSAGE} />
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
