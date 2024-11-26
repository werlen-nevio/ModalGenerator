## **ESLint**
This project uses [ESLint](https://eslint.org/) to maintain consistent coding standards and enforce best practices.

### **Installation**

**Install Dependencies:**

   Run the following command to install ESLint and its dependencies:

   ```bash
   npm install
   ```

   This will install all the required packages listed in `package.json`, including ESLint and its plugins.

---

### **Usage**

#### **1. Lint the Entire Project**

To lint all the JavaScript files in the project directory, run:

```bash
npx eslint .
```

This will analyze the code and report any errors or warnings.

#### **2. Lint a Specific File**

To lint a single file, specify the file path:

```bash
npx eslint src/main.js
```

#### **3. Fix Issues Automatically**

ESLint can fix certain issues automatically. To apply these fixes, use:

```bash
npx eslint . --fix
```

#### **4. Add ESLint to Your Workflow**

You can integrate ESLint into your workflow for easier usage:

- **NPM Script**: Add the following script to `package.json`:
  ```json
  "scripts": {
    "lint": "eslint ."
  }
  ```
  Run it with:
  ```bash
  npm run lint
  ```

---

### **Configuration**

The ESLint configuration is defined in the `eslint.config.mjs` file. It includes:

- Support for browser environments and jQuery.
- Recommended rules for best practices.
- Customizable rules to fit the project needs.

---