# Blog Post Web App

This repository contains a blog post web app built using Next.js, TypeScript, Ant Design (antd), and Tailwind CSS. The app fetches data from the public API provided by [GoRest](https://gorest.co.in/).

---

## Features

- **Next.js**: A React-based framework for building server-rendered and static web applications.
- **TypeScript**: Strongly-typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Ant Design (antd)**: UI library for pre-styled components.
- **React Query**: Efficient data fetching and caching.
- **Axios**: Simplified HTTP client for API interactions.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- npm or [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
$ git clone https://github.com/iqbalr3000/blog-post.git
$ cd blog-post
```

### 2. Install Dependencies

```bash
# Using npm
$ npm install

# OR using Yarn
$ yarn install
```

### 3. Run the Development Server

```bash
# Using npm
$ npm run dev

# OR using Yarn
$ yarn dev
```

The development server will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```plaintext
.
├── .next/          # Next.js build output
├── cypress/        # Cypress end-to-end testing files
├── node_modules/   # Installed dependencies
├── public/         # Static assets (e.g., images, fonts)
├── src/
│   ├── api/        # API interaction logic (e.g., Axios setup)
│   │   ├── axiosInstance.ts
│   │   └── posts.ts
│   ├── hooks/      # Custom React hooks
│   │   ├── usePosts.ts
│   │   └── withAuth.tsx
│   ├── pages/      # Page routes for the application
│   │   ├── post/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── styles/     # Global styles and Tailwind CSS configuration
│   ├── types/      # TypeScript types and interfaces
│   └── utils/      # Utility functions and helpers
├── .env.local      # Environment variables (ignored in version control)
├── cypress.config.ts  # Cypress configuration
├── next-env.d.ts   # TypeScript types for Next.js
├── next.config.js  # Next.js configuration
├── package.json    # Project metadata and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json   # TypeScript configuration
└── README.md       # Project documentation
```

---

## Scripts

The following npm scripts are available:

- **`dev`**: Starts the development server
- **`build`**: Builds the application for production
- **`start`**: Runs the production build
- **`lint`**: Lints the codebase using ESLint

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)
- [React Query](https://react-query.tanstack.com/)
- [Axios](https://axios-http.com/)
- [GoRest API](https://gorest.co.in/)
