# React Accordion Component

Build an Accordion component that displays content as a list of headings that the user can click to collapse/expand the related content.

## Main Features

- Accordion component with expandable/collapsible items
- Receives a list of items with title and content props
- Each heading can be opened and closed individually
- Only one heading can be open at a time (exclusive behavior)
- Interactive FAQ-style interface

## Component Usage

```jsx
<Accordion
    items={[
       { title: "Title 1", content: "Content 1" },
       { title: "Title 2", content: "Content 2" },
    ]}
/>
```

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the server with the default script:
   ```sh
   npm start
   ```

3. Run tests:
   ```sh
   npm test
   ```

4. Build the project for production:
   ```sh
   npm run build
   ```
   This will generate optimized files in the `build` folder, ready for deployment.

## Testing

The project includes automated tests that verify the accordion functionality. Tests cover component rendering, user interactions, and exclusive behavior (only one item open at a time).

To run tests:
```sh
npm test              # Run tests in watch mode
npm test -- --watchAll=false  # Run tests once
```

## Project Structure

- `src/App.js`: Main component containing the Accordion
- `src/index.js`: React entry point
- `public/index.html`: HTML template
- `package.json`: Dependencies and scripts

## Purpose

The purpose of this project is to build an Accordion Component as a way to learn and practice React development, focusing on component interaction, state management, and dynamic content rendering.

---

**Author:** murti