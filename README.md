Install Dependencies:

```bash
npm install
#or
yarn install
```

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Data Visualization Choices and Design Decisions:
Recharts Library:

Recharts is chosen for data visualization due to its simplicity, flexibility, and compatibility with React.
It provides various types of charts such as line charts, bar charts, and pie charts, which are suitable for displaying e-commerce metrics.
Responsive Design:

The project follows a mobile-first approach, ensuring that the visualizations are optimized for mobile devices.
Utilizing responsive design principles to ensure compatibility with various screen sizes and devices.
Chart Types:

Line Chart: Used to visualize trends over time, such as sales or revenue trends.
Bar Chart: Suitable for comparing different categories of data, like user activity across different periods.
Pie Chart: Represents proportions of total data, for instance, the distribution of revenue from different product categories.

Color Palette:
Selected a cohesive color palette to enhance readability and visual appeal.
Ensured that colors are chosen considering accessibility guidelines for better user experience.

Unit Tests:
Critical components and functions are thoroughly tested using Jest, a popular testing library for JavaScript applications.
Unit tests ensure the reliability and correctness of the codebase, reducing the risk of bugs and errors.

Libraries Used:
Next.js: Used as the framework for building the React application, providing server-side rendering, routing, and other utilities.
Recharts: React charting library used for creating data visualizations like line charts, bar charts, and pie charts.
Jest: JavaScript testing framework used for writing unit tests to ensure the robustness of critical components and functions.
