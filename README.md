# EZ frontend test

A responsive single-page React application for EZ Works with form validation and API integration.

## Features

- Responsive design for multiple screen sizes (480p, 720p, 1080p, iPad, MacBook)
- Form validation for email submissions
- API integration with error handling
- Grid layout for services

## API Integration

The application integrates with the API at https://test.ezworks.ai/api with the following use cases:
- Empty form submission validation
- Email format validation
- Error handling for emails ending with @ez.works
- Success message display on form submission

## Postman Collection

Postman collection and environment files are included in the `postman` folder:
- `FastAPI.postman_collection.json` - API endpoints collection
- `New Environment.postman_environment.json` - Environment variables

## Setup and Running

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Build for production: `npm run build`
