const publicClient = require('../publicClient');
const privateClient = require('../privateClient');
const userEndpoints = require('../userEndpoints');
const userApi = require('./user.api');

jest.mock('../publicClient');
jest.mock('../privateClient');

describe('User API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('signin', () => {
    it('should call publicClient.post with the correct arguments', async () => {
      const username = 'testuser';
      const password = 'testpassword';

      await userApi.signin({ username, password });

      expect(publicClient.post).toHaveBeenCalledWith(
        userEndpoints.signin,
        { username, password }
      );
    });

    it('should return the response if successful', async () => {
      const username = 'testuser';
      const password = 'testpassword';
      const response = { data: 'success' };
      publicClient.post.mockResolvedValue(response);

      const result = await userApi.signin({ username, password });

      expect(result).toEqual({ response });
    });

    it('should return the error if unsuccessful', async () => {
      const username = 'testuser';
      const password = 'testpassword';
      const error = new Error('Sign-in error');
      publicClient.post.mockRejectedValue(error);

      const result = await userApi.signin({ username, password });

      expect(result).toEqual({ err: error });
    });
  });

  // Add tests for other methods (signup, getInfo, passwordUpdate) in a similar manner
});