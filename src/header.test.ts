import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import seasonData from '../data/seasons.json';
import { Header } from './Header';

const years = seasonData.map((s) => s.year);
const render = (first: number, last: number) => renderToStaticMarkup(createElement(Header, { first, last }));

describe('page header', () => {
  const html = render(Math.min(...years), Math.max(...years));

  it('has one h1 with the product name, and the other lines are not headings', () => {
    expect(html.match(/<h[1-6]/g)).toEqual(['<h1']);
    expect(html).toContain('<h1>Championship Margins</h1>');
    expect(html).not.toMatch(/<h1>[^<]*(F1|Formula)/i);
  });

  it('carries the tagline', () => {
    expect(html).toContain('<p class="subtitle">How dominant was each Formula 1™ champion?</p>');
  });

  it('shows the full dataset span with an en dash', () => {
    expect(html).toContain(`<p class="meta">Drivers&#x27; titles · ${Math.min(...years)}–${Math.max(...years)}</p>`);
  });

  it('takes the span from its props, not from fixed years', () => {
    expect(render(1900, 1999)).toContain('Drivers&#x27; titles · 1900–1999');
  });
});
