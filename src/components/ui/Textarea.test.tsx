import React from 'react';
import { render, screen } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea Component', () => {
  it('associates label and input even when id is omitted', () => {
    render(<Textarea label="Auto ID Content" />);
    const textarea = screen.getByLabelText('Auto ID Content');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('id');
  });

  it('renders correctly with a label', () => {
    render(<Textarea label="Content" id="content" />);
    expect(screen.getByLabelText('Content')).toBeInTheDocument();
  });

  it('displays the placeholder text', () => {
    render(<Textarea placeholder="Type something..." />);
    expect(screen.getByPlaceholderText('Type something...')).toBeInTheDocument();
  });

  it('is required when the required prop is passed', () => {
    render(<Textarea label="Message" id="msg" required />);
    expect(screen.getByLabelText('Message')).toBeRequired();
  });

  it('passes other native attributes to the textarea element', () => {
    render(<Textarea name="bio" rows={5} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('name', 'bio');
    expect(textarea).toHaveAttribute('rows', '5');
  });
});
