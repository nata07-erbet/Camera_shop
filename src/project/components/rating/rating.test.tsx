import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { Rating } from './rating';
import { INITAL_RATING } from '../../const/const';

describe('component: Rating', () => {
  it('should render correctly', () => {
    const expectedText = 'Рейтинг';
    const preparedComponent = withHistory(<Rating rating={INITAL_RATING} />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
