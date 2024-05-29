import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from './SigninForm';

describe('SignupForm', () => {
  test('renders form fields and buttons', () => {
    render(<SignupForm />);
    
    // Assert that form fields are rendered
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('display name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('confirm password')).toBeInTheDocument();
    
    // Assert that buttons are rendered
    expect(screen.getByRole('button', { name: 'sign up' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'sign in' })).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    render(<SignupForm />);
    
    // Fill in form fields
    fireEvent.change(screen.getByPlaceholderText('username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('display name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText('password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('confirm password'), { target: { value: 'password123' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'sign up' }));
    
    // Assert that form submission is successful
    expect(await screen.findByText('Sign in success')).toBeInTheDocument();
  });
});