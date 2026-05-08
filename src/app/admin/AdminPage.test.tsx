import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminPage from './page';

// Mock Server Actions
jest.mock('./actions', () => ({
  submitPost: jest.fn(),
}));

// Mock Next.js Link component (since it might need a router context)
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('AdminPage', () => {
  it('renders the form with all required fields', () => {
    render(<AdminPage />);

    expect(screen.getByText('Create New Post')).toBeInTheDocument();
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Slug')).toBeInTheDocument();
    expect(screen.getByLabelText('Content')).toBeInTheDocument();
    expect(screen.getByLabelText('Publish immediately')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create Post' })).toBeInTheDocument();
  });

  it('has required attributes on necessary fields', () => {
    render(<AdminPage />);

    expect(screen.getByLabelText('Title')).toBeRequired();
    expect(screen.getByLabelText('Slug')).toBeRequired();
    expect(screen.getByLabelText('Content')).toBeRequired();
  });

  it('renders the Cancel button with correct link', () => {
    render(<AdminPage />);
    // In our component, Button with href renders a Link. 
    // We mocked Link to be an <a> tag.
    const cancelButton = screen.getByRole('link', { name: 'Cancel' });
    expect(cancelButton).toHaveAttribute('href', '/');
  });
});
