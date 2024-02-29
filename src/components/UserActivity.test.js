import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import UserActivityData from './UserActivityData';

// Mock fetchuserData function
jest.mock('../utils/api', () => ({
  fetchuserData: jest.fn(() => Promise.resolve([
    { month: 'January', value: 100 },
    { month: 'February', value: 200 },
    { month: 'March', value: 150 },
  ])),
}));

test('renders user activity data pie chart correctly', async () => {
  // Render the component
  const { getByText, getByLabelText } = render(<UserActivityData />);

  // Check if "Loading..." text is initially present
  expect(getByText('Loading...')).toBeInTheDocument();

  // Wait for the data to be loaded
  await waitFor(() => expect(getByText('January')).toBeInTheDocument());

  // Check if the pie chart is rendered correctly
  expect(getByText('User Activity')).toBeInTheDocument();
  expect(getByText('Select Year')).toBeInTheDocument();
  expect(getByLabelText('Select Year')).toBeInTheDocument();
  expect(getByText('January')).toBeInTheDocument();
  expect(getByText('February')).toBeInTheDocument();
  expect(getByText('March')).toBeInTheDocument();
});

test('changes year and updates pie chart accordingly', async () => {
  // Render the component
  const { getByLabelText, getByText } = render(<UserActivityData />);

  // Wait for the data to be loaded
  await waitFor(() => expect(getByText('January')).toBeInTheDocument());

  // Change the year
  fireEvent.change(getByLabelText('Select Year'), { target: { value: '2023' } });

  // Wait for the pie chart to update with new data
  await waitFor(() => expect(getByText('Loading...')).toBeInTheDocument());
  await waitFor(() => expect(getByText('April')).toBeInTheDocument());
});
