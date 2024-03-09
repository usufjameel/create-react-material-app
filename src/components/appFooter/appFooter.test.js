import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppFooter from './appFooter';

describe('AppFooter Component', () => {
  test('renders without errors', () => {
    render(
      <BrowserRouter>
        <AppFooter />
      </BrowserRouter>
    );
    const footerElement = screen.getByText(/Copyright \(c\) \d{4}\. All Rights Reserved\./i);
    expect(footerElement).toBeInTheDocument();
  });

  test('displays the correct copyright year', () => {
    render(
      <BrowserRouter>
        <AppFooter />
      </BrowserRouter>
    );
    const currentYear = new Date().getFullYear();

    const findCopyrightText = () => {
      const elements = screen.getAllByText((content, element) => {
        return element && new RegExp(`Copyright \\(c\\) ${currentYear}. All Rights Reserved`).test(content);
      });

      if (elements.length > 0) {
        return elements[0];
      }

      return null;
    };

    const copyrightText = findCopyrightText();
    expect(copyrightText).toBeInTheDocument();
  });

  test('contains links to specific pages with correct href attributes', () => {
    render(
      <BrowserRouter>
        <AppFooter />
      </BrowserRouter>
    );
    const termsLink = screen.getByText('Terms of Services');
    const privacyLink = screen.getByText('Privacy Policy');
    const cookiesLink = screen.getByText('Cookies Policy');
    const disclaimerLink = screen.getByText('Disclaimer');

    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '/termsofservices');

    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/privacypolicy');

    expect(cookiesLink).toBeInTheDocument();
    expect(cookiesLink).toHaveAttribute('href', '/cookiespolicy');

    expect(disclaimerLink).toBeInTheDocument();
    expect(disclaimerLink).toHaveAttribute('href', '/disclaimer');
  });
});
