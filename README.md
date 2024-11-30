

# auto-init-cloudboy

`auto-init-cloudboy` is a command-line tool that simplifies setting up projects with common configurations for React, Tailwind CSS, Firebase, and GitHub Actions. This tool automates the process of creating React apps with Vite, installing Tailwind CSS, setting up Firebase, and configuring GitHub Actions for continuous integration and deployment (CI/CD).

### Features:
- Automatically creates a **React app** with **Vite** as the base.
- Installs and configures **Tailwind CSS** for styling.
- Optionally sets up **Firebase** for backend functionality.
- Optionally sets up **GitHub Actions** for CI/CD automation.
- Customizable options for frontend and backend directories.

## Installation

You can use `auto-init-cloudboy` directly without installing it globally by using `npx`. To create a new project, simply run the following command in your terminal:

```bash
npx auto-init-cloudboy
```

Alternatively, if you'd like to install it globally, you can run:

```bash
npm install -g auto-init-cloudboy
```

Then you can use the tool by simply running:

```bash
auto-init-cloudboy
```

## Usage

Once you run the command, `auto-init-cloudboy` will guide you through a series of prompts to help you configure your project. The tool will ask you questions like:

- Do you want to create a frontend project?
- Would you like to add **Tailwind CSS**?
- Would you like to set up **Firebase**?
- Would you like to configure **GitHub Actions** for CI/CD?

Based on your answers, it will automatically generate the required files, install dependencies, and set up the project structure.

## Example

After answering the prompts, the tool will:

1. Create a **React app** using Vite.
2. Install **Tailwind CSS** and initialize it.
3. Set up **Firebase** if selected.
4. Create a **GitHub Actions** workflow file for CI/CD.
5. Organize the project with a custom **frontend** and **backend** directory structure.

### Project Directory Structure

```
/my-new-project
  ├── /frontend         # Your frontend React app
  │   ├── /src
  │   ├── /public
  │   └── tailwind.config.js
  └── /backend          # Optional backend setup
```

## Development

If you'd like to contribute to `auto-init-cloudboy`, you can fork the repository and create a pull request. Here's how you can set up your local development environment:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/auto-init-cloudboy.git
    ```

2. Navigate to the project directory:
    ```bash
    cd auto-init-cloudboy
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the tool locally:
    ```bash
    npm link
    ```

Now, you can test your changes by running `auto-init-cloudboy` from any project folder.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by popular project initialization tools like `create-react-app` and `Vite`.
- Thanks to the community for making Tailwind CSS, Firebase, and GitHub Actions widely adopted tools.

