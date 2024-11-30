

# **@jaiminbariya/auto-init**

`@jaiminbariya/auto-init` is a **CLI tool** designed to streamline project setup with modern web development technologies like **React**, **Vite**, **Tailwind CSS**, **Firebase**, and **GitHub Actions**. It automates the initialization process, making it easy to start a new project with minimal manual configuration.

## **Features**  
- **React + Vite**: Quickly create a React app using Vite.  
- **Tailwind CSS**: Automates Tailwind CSS installation and configuration.  
- **Firebase Integration**: Optionally set up Firebase for backend services.  
- **GitHub Actions**: Automatically configures CI/CD pipelines with GitHub Actions.  
- **Flexible Project Structure**: Supports customizable directory names for frontend and backend.

---

## **Installation**

### **Global Installation**  
Install the package globally for easy access:  
```bash
npm install -g @jaiminbariya/auto-init
```  
Then, run the tool using:  
```bash
auto-init
```

### **Using `npx` (No Global Installation Needed)**  
You can also use it without installing globally:  
```bash
npx @jaiminbariya/auto-init
```

---

## **Usage**

Once you run the command, `auto-init` will guide you through a series of interactive prompts:

1. **Frontend Setup**: Choose whether to create a React project.
2. **Tailwind CSS**: Optionally add Tailwind CSS for styling.
3. **Firebase**: Set up Firebase if needed.
4. **GitHub Actions**: Enable CI/CD for automated deployments.

### **Example Command**  
```bash
auto-init
```

### **Example Project Directory Structure**  
```
/my-new-project
  ├── /frontend         # React app with Tailwind CSS
  │   ├── /src
  │   └── tailwind.config.js
  └── /backend          # Firebase or backend setup (optional)
```

---

## **Alternative Installation via `auto-init-cloudboy`**  
If you prefer using an unscoped package:  
```bash
npm install -g auto-init-cloudboy
```  
This package wraps `@jaiminbariya/auto-init` and provides the same functionality with a simpler name.

---

## **Development**

### **Contributing**  
Contributions are welcome! Follow these steps to set up your local development environment:

1. Clone the repository:  
   ```bash
   git clone https://github.com/jaiminbariya/auto-init.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd auto-init
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Link the package globally for testing:  
   ```bash
   npm link
   ```
5. Run the CLI locally:  
   ```bash
   auto-init
   ```

---

## **License**

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## **Acknowledgments**

- Inspired by popular tools like `create-react-app`, `Vite`, and `Tailwind CSS`.
- Special thanks to the open-source community for Firebase and GitHub Actions support.  

