import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { Filter } from './filter';

describe('component: FilterListCards', () => {
  it('should render correctly', () => {
    const expectedText = 'Фильтр';
    const preparedComponent = withHistory(<Filter
      initFilters={{}}
      initPriceRange={[100, 1000]}
      onFeaturesChange={vi.fn()}
      onPricesChange={vi.fn()}
      onReset={vi.fn()}
      minPrice={100}
      maxPrice={1000}
    />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
