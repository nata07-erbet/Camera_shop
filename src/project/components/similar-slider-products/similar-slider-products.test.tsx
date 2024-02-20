import { withHelmet } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { SimilarSliderProducts } from './similar-list';
import { similarMocks } from '../../mocks/similar-mocks';

describe('component: SimilarSliderProducts', () => {
  it('should render correctly', () => {
    const expectedTestId = 'slider';

    const preparedComponent = withHelmet(<SimilarSliderProducts />);

    render(preparedComponent);

    expect(screen.getAllByTestId(expectedTestId)).toBeInTheDocument();
  });
});

