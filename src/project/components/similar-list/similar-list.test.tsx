import { withHelmet } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { SimilarList } from './similar-list';
import { similarMocks } from '../../mocks/similar-mocks';

describe('component: ', () => {
  it('should render correctly', () => {
    const expectedTestId = 'similar';

    const preparedComponent = withHelmet(<SimilarList similarProducts={similarMocks} />);

    render(preparedComponent);

    expect(screen.getByText(expectedTestId)).toBeInTheDocument();
  });
});

