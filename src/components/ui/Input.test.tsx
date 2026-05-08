import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders correctly with a label', () => {
    render(<Input label="Username" id="username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('displays the placeholder text', () => {
    render(<Input placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  it('is required when the required prop is passed', () => {
    render(<Input label="Required Field" id="req" required />);
    expect(screen.getByLabelText('Required Field')).toBeRequired();
  });

  it('passes other native attributes to the input element', () => {
    render(<Input type="email" name="email_field" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'email_field');
  });
});
