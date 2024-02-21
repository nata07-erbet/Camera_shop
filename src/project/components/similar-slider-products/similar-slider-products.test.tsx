import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { SimilarSliderProducts } from './similar-slider-products';
import { similarMocks } from '../../mocks/similar-mocks';

describe('component: SimilarSliderProducts', () => {
  it('should render correctly', () => {
    const expectedTestId = 'slider';

    const preparedComponent = withHistory(
      <SimilarSliderProducts similarProducts={similarMocks} />
    );

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
