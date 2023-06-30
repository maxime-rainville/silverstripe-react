/* global jest, test, describe, it, expect, window */

import React from 'react';
import LeftAndMain from '../LeftAndMain';
import { render } from '@testing-library/react';

test('LeftAndMain render()', () => {
  const { container } = render(
    <LeftAndMain />
  );
  expect(container.querySelectorAll('.left-and-main').length).toBe(1);
});
