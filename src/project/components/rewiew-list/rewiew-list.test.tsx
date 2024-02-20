import { withHelmet } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { RewiewList } from './rewiew-list';
import { INITAL_COUNT_COMMENTS } from '../../const/const';
import { getRewiewsMock } from '../../mocks/get-rewiews-mock';

describe('component: ', () => {
  it('should render correctly', () => {
    const expectedTestId = 'rewiew';

    const preparedComponent = withHelmet(< RewiewList rewiews={getRewiewsMock} rewiewCount={INITAL_COUNT_COMMENTS} />);

    render(preparedComponent);

    expect(screen.getAllByTestId(expectedTestId)).toBeInTheDocument();
  });
});

