import { render, screen } from '@testing-library/react';
import HeroSlide from './HeroSlide';

describe('HeroSlide', () => {
  test('renders movie details', () => {
    // Mock the necessary dependencies
    jest.mock('react-redux', () => ({
      useDispatch: () => jest.fn(),
      useSelector: () => ({
        mediaType: 'movie',
        mediaCategory: 'popular'
      })
    }));

    jest.mock('../api/mediaApi', () => ({
      getList: jest.fn().mockResolvedValue({
        response: {
          results: [
            {
              title: 'Movie 1',
              backdrop_path: 'path/to/backdrop1.jpg',
              genre_ids: [1, 2],
              overview: 'Overview 1'
            },
            {
              title: 'Movie 2',
              backdrop_path: 'path/to/backdrop2.jpg',
              genre_ids: [3, 4],
              overview: 'Overview 2'
            }
          ]
        },
        err: null
      })
    }));

    jest.mock('../api/genreApi', () => ({
      getList: jest.fn().mockResolvedValue({
        response: {
          genres: [
            { id: 1, name: 'Genre 1' },
            { id: 2, name: 'Genre 2' },
            { id: 3, name: 'Genre 3' },
            { id: 4, name: 'Genre 4' }
          ]
        },
        err: null
      })
    }));

    // Render the component
    render(<HeroSlide />);

    // Assert that movie details are rendered
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Genre 1')).toBeInTheDocument();
    expect(screen.getByText('Genre 2')).toBeInTheDocument();
    expect(screen.getByText('Overview 1')).toBeInTheDocument();

    expect(screen.getByText('Movie 2')).toBeInTheDocument();
    expect(screen.getByText('Genre 3')).toBeInTheDocument();
    expect(screen.getByText('Genre 4')).toBeInTheDocument();
    expect(screen.getByText('Overview 2')).toBeInTheDocument();
  });

  // Add more tests as needed
});