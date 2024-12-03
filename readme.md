# Modal Generator with Dynamic Content

This repository contains a JavaScript-based implementation for dynamically generating Bootstrap modal dialogs. The implementation allows the user to define modal parameters in JSON format, enabling flexible customization of modal content, buttons, forms, and other features.

---

## Features

- **Dynamic Modal Generation**: Automatically generate modals from JSON-defined parameters.
- **Customizable Inputs**: Define inputs and forms dynamically for modals.
- **Flexible Button Configurations**: Support for save, delete, and close buttons with customizable actions and styles.
- **Error Handling**: Logs JSON parsing errors for invalid modal parameters.
- **Bootstrap Compatible**: Built with Bootstrap 5 for a responsive, modern UI.

---

## Table of Contents

1. [Usage](#usage)
2. [Structure](#structure)
3. [Customization Options](#customization-options)
4. [Error Handling](#error-handling)
5. [Dependencies](#dependencies)

---

## Usage

### Initialization

To initialize the modals:

1. Define your modal parameters as a `modalParams` attribute on an element with the class `.generate-modal`.
2. Include the necessary JavaScript and Bootstrap dependencies in your HTML.

```html
<div class="generate-modal" modalParams='{
    "id": "exampleModal",
    "title": "Example Modal",
    "inputs": [
        {"id": "input1", "label": "Name", "placeholder": "Enter your name"},
        {"id": "input2", "type": "email", "label": "Email", "placeholder": "Enter your email"}
    ],
    "saveButton": {"text": "Submit", "class": "btn-success", "callback": "submitForm()"},
    "closeButton": {"text": "Cancel", "class": "btn-secondary"}
}'></div>
```

3. The script dynamically generates modals and appends them to the respective container.

---

### Structure

The code consists of multiple utility functions:

- `getHTMLContent(params)`: Generates the HTML structure of the modal.
- `getFooter(params)`: Builds the modal footer with buttons.
- `getSaveButton(params)`: Configures the "Save" button.
- `getNormalButton(params)`: Configures generic buttons like "Delete" or "Close".
- `getModalContent(params)`: Populates modal content, including forms and inputs.
- `getForm(params, inputs)`: Constructs a form.
- `getInputs(params)`: Adds input fields dynamically.
- `getInput(params)`: Creates individual input fields.

---

### Customization Options

#### Modal Parameters

Pass the following parameters via the `modalParams` attribute:

| Parameter       | Type       | Description                                       |
|-----------------|------------|---------------------------------------------------|
| `id`            | `string`   | Unique ID for the modal.                         |
| `title`         | `string`   | Title displayed in the modal header.             |
| `inputs`        | `Array`    | List of input configurations.                    |
| `form`          | `Object`   | Form configuration object (optional).            |
| `saveButton`    | `Object`   | Configuration for the save button (optional).    |
| `deleteButton`  | `Object`   | Configuration for the delete button (optional).  |
| `closeButton`   | `Object`   | Configuration for the close button (optional).   |
| `content`       | `string`   | Additional HTML content (optional).              |

---

#### Input Parameters

Define inputs in the `inputs` array:

| Parameter       | Type       | Default           | Description                      |
|-----------------|------------|-------------------|----------------------------------|
| `id`            | `string`   | `"input"`         | ID for the input element.        |
| `type`          | `string`   | `"text"`          | Input type (`text`, `email`, etc.). |
| `label`         | `string`   | `"Label"`         | Label for the input.             |
| `placeholder`   | `string`   | `"Enter text here"` | Placeholder text.                |

---

#### Button Parameters

Configure buttons with the following properties:

| Parameter       | Type       | Default           | Description                                    |
|-----------------|------------|-------------------|------------------------------------------------|
| `text`          | `string`   | `"Close"`         | Button text.                                   |
| `class`         | `string`   | `"btn-default"`   | Bootstrap CSS class for styling.              |
| `id`            | `string`   | `"closeButton"`   | Unique ID for the button.                     |
| `callback`      | `string`   | Warning message   | JavaScript function to execute on button click.|

---

### Error Handling

The script includes error handling for JSON parsing:

- Logs parsing errors to the console.
- Outputs the invalid JSON string for debugging.

Example:

```js
console.error("Error parsing JSON string: ", error);
console.error("Input JSON string: ", $(this).attr("modalParams"));
```

---

## Dependencies

- [Bootstrap 5](https://getbootstrap.com)
- jQuery

Ensure that these libraries are included in your project.

---

### Example Integration

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="modal-generator.js"></script>
```

---

### Contribution

Feel free to contribute enhancements or report issues. Fork the repository and submit a pull request for review.

--- 

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### **ESLint**
This project uses [ESLint](https://eslint.org/) to maintain consistent coding standards and enforce best practices.

**Install Dependencies:**

   Run the following command to install ESLint and its dependencies:

   ```bash
   npm install
   ```

   This will install all the required packages listed in `package.json`, including ESLint and its plugins.

#### **Usage:**

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

#### **Configuration**

The ESLint configuration is defined in the `eslint.config.mjs` file. It includes:

- Support for browser environments and jQuery.
- Recommended rules for best practices.
- Customizable rules to fit the project needs.