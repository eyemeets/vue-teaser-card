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
- **CSS Variables**: Used for flexibility in styling.

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
The `package.json` file has been updated to accommodate Storybook 7 changes:
- **storybook**: `sb dev` (previously `start-storybook`)
- **build-storybook**: `sb build`

## Project Structure
- **src/components**: Contains Vue components including the teaser card (`TeaserCard.vue`).
- **src/assets**: Static assets for the components.
- **.storybook**: Storybook configuration files for documenting components.

## Features
- **Title and Ingress**: The teaser card has a title (max 30 characters) and an ingress (max 120 characters).
- **Event Handling**: Clicking the media or title triggers specific events, sending relevant data (`title` and `ID`).
- **Hover Effect**: Displays the full ingress text on mouse hover.
- **Storybook Documentation**: Provides usage examples and testing coverage of the teaser card component.

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

## Contact
For technical questions, reach out to Daniel Hendricks at [daniel@eyemeets.com](mailto:daniel@eyemeets.com).

---

We hope you find this project interesting and look forward to your feedback during the interview. Good luck!
