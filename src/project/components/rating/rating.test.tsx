import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { Rating } from './rating';

describe('component: Rating', () => {
  it('should render correctly', () => {
    const expectedTestId = 'rate';
    const preparedComponent = withHistory(<Rating rating={3} />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
