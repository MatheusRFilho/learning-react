import { render } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
