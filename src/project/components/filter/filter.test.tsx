import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { Filter } from './filter';

describe('component: FilterListCards', () => {
  it('should render correctly', () => {
    const expectedText = 'Фильтр';
    const preparedComponent = withHistory(<Filter />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
