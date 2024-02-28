import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { Rewiews } from './rewiews';
import { getRewiewsMock } from '../../mocks/get-rewiews-mock';

describe('component: ', () => {
  it('should render correctly', () => {
    const expectedText = 'Отзывы';

    const preparedComponent = withHistory(
      <Rewiews
        rewiews={getRewiewsMock}
        onButtonAddRewiewClick={function (): void {}}
      />
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
