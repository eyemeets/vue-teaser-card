# Teaser Card Component

## Project Overview
This project implements a teaser card component that accommodates four different use cases. The component is designed to be reusable, flexible, and easy to maintain. It serves as part of a frontend technical task for DN Media Group.

## Objective
The objective is to create a teaser card component that meets the following requirements:

- Includes a title and an ingress (brief introduction).
  - Title length limited to 30 characters.
  - Ingress length limited to 120 characters.
  - Full ingress text should be displayed on mouse hover.
- Trigger specific events:
  - Clicking on media: send title and ID with action name `action_media`.
  - Clicking on the title: send title and ID with action name `action_content`.

## Tech Stack
- **Vue 3**: Main framework used to build the teaser card component.
- **Storybook**: Used to document the component and provide usage examples.
- **Vite**: Development server and bundler.
- **TypeScript**: Provides type safety for the codebase.
- **UnoCSS**: Used for styling with flexibility and responsiveness.
- **Vitest**: Used for unit testing with flexibility and responsiveness.

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- PNPM (preferred package manager for the project)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vue-teaser-card
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Project
To run the project locally:
```bash
pnpm dev
```

To run Storybook:
```bash
pnpm storybook
```

To build Storybook:
```bash
pnpm build-storybook
```

### Scripts
The `package.json` file contains the following scripts for managing the project:
- **dev**: `vite` (Run the development server)
- **build**: `vue-tsc -b && vite build` (Build the project for production)
- **preview**: `vite preview` (Preview the built project)
- **storybook**: `sb dev` (Run Storybook)
- **build-storybook**: `sb build` (Build the Storybook documentation)
- **test**: `vitest` (Run unit tests)

### Project Structure
```
vue-teaser-card/
├── .storybook/          # Storybook configuration files
├── node_modules/        # Node.js modules
├── public/              # Public assets
├── src/
│   ├── assets/          # Static assets for the components
│   └── components/      # Vue components including TeaserCard.vue
├── storybook-static/    # Built Storybook for deployment
├── uno.config.ts        # UnoCSS configuration
├── package.json         # Project metadata and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── vercel.json          # Vercel deployment configuration
```

## Features
- **Title and Ingress**: The teaser card has a title (max 30 characters) and an ingress (max 120 characters).
- **Event Handling**: Clicking the media or title triggers specific events, sending relevant data (`title` and `ID`).
- **Hover Effect**: Displays the full ingress text on mouse hover.
- **Storybook Documentation**: Provides usage examples and testing coverage of the teaser card component.

## Deployment
This project includes deployment via Vercel. Ensure that the `storybook-static` directory, which contains the built Storybook, is properly configured for deployment. To deploy the built Storybook:

```bash
vercel --prod
```
Make sure you have a `vercel.json` in the root directory:

```json
{
  "public": "storybook-static",
  "cleanUrls": true,
  "trailingSlash": false
}
```

## Development Notes
- Ensure that the code follows best practices for readability, efficiency, and maintainability.
- Utilize CSS variables to enable easy theme adjustments and flexible styling.
- Be prepared to extend or modify event handling if requirements change.

## Future Improvements
- **Extend Event Structure**: Adapt the current event structure to accommodate future changes.
- **Styling Enhancements**: Improve the responsiveness and visual effects of the teaser card.
- **Additional Tests**: Enhance test coverage for more comprehensive testing.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
