$(".generate-modal").each(function() {
    let Params = {};

    try {
        let modalParamsString = $(this).attr("modalParams");
        Params = JSON.parse(modalParamsString);
    } catch (error) {
        console.error("Error parsing JSON string: ", error);
        console.error("Input JSON string: ", $(this).attr("modalParams"));
    }
    

    const HTMLContent = getHTMLContent(Params);

    $(this).append(HTMLContent);
});

/**
 * Generates the HTML content for a modal dialog.
 *
 * @param {Object} params - The parameters for the modal.
 * @param {string} params.id - The ID of the modal.
 * @param {string} params.title - The title of the modal.
 * @returns {string} The HTML string for the modal.
 */
function getHTMLContent(params) {
    const content = getModalContent(params);
    const footer = getFooter(params);

    const HTML = `
        <div class="modal fade" id="${params.id}" aria-labelledby="${params.id}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${params.id}Label">${params.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                    <div class="modal-footer">
                        ${footer}
                    </div>
                </div>
            </div>
        </div>
        `;

    return HTML;
}

/**
 * Generates the footer content based on the provided parameters.
 * 
 * @param {Object} params - The parameters for generating the footer.
 * @param {Object} [params.saveButton] - The configuration for the save button.
 * @param {Object} [params.deleteButton] - The configuration for the delete button.
 * @param {Object} [params.closeButton] - The configuration for the close button.
 * @returns {string} The generated footer content as an HTML string.
 */
function getFooter(params) {
    let footerContent = ``;

    if (params.saveButton != undefined){
        footerContent += getSaveButton(params.saveButton);
    };

    if (params.deleteButton != undefined){
        footerContent += getNormalButton(params.deleteButton);
    };

    if (params.closeButton != undefined){
        footerContent += getNormalButton(params.closeButton);
    };

    return footerContent;
}

/**
 * Generates an HTML string for a save button with customizable parameters.
 *
 * @param {Object} params - The parameters for the save button.
 * @param {string} [params.text="Save Changes"] - The text to display on the button.
 * @param {string} [params.class="btn-primary"] - The CSS class to apply to the button.
 * @param {string} [params.id="saveButton"] - The ID to assign to the button.
 * @param {boolean} [params.submit=false] - Whether the button is a submit button.
 * @param {string} [params.callback=""] - The JavaScript function to call on button click.
 * 
 * @returns {string} The HTML string for the save button.
 */
function getSaveButton(params) {
    let type = "button";

    if (params.text == undefined){
        params.text = "Save Changes";
    }

    if (params.class == undefined){
        params.class = "btn-primary";
    }

    if (params.id == undefined){
        params.id = "saveButton";
    }

    if (params.submit == undefined){
        params.submit = false;
        type = "button";
    }else{
        type = "submit";
    }

    if (params.callback == undefined){
        params.callback = "";
    }

    if (params.callback == "" && params.submit == false){
        params.callback = "console.warn('No callback function defined for save button')";
    }

    const saveButton = `
        <button type="${type}" class="btn ${params.class}" id="${params.id}" onclick="${params.callback}" ${params.submit ? "" : "data-bs-dismiss='modal'"}>${params.text}</button>
    `;

    return saveButton;
}

/**
 * Generates a normal button HTML string with the given parameters.
 *
 * @param {Object} params - The parameters for the button.
 * @param {string} [params.text="Close"] - The text to display on the button.
 * @param {string} [params.class="btn-default"] - The CSS class to apply to the button.
 * @param {string} [params.id="closeButton"] - The ID to assign to the button.
 * @param {string} [params.callback="console.warn('No callback function defined for normal button')"] - The JavaScript function to call when the button is clicked.
 *
 * @returns {string} The HTML string for the button.
 */
function getNormalButton(params) {
    if (params.text == undefined){
        params.text = "Close";
    }

    if (params.class == undefined){
        params.class = "btn-default";
    }

    if (params.id == undefined){
        params.id = "closeButton";
    }

    if (params.callback == undefined){
        params.callback = "console.warn('No callback function defined for normal button')";
    }

    const deleteButton = `
        <button type="button" class="btn ${params.class}" id="${params.id}" onclick="${params.callback}" data-bs-dismiss='modal'">${params.text}</button>
    `;

    return deleteButton;
}

/**
 * Generates the HTML content for a modal based on the provided parameters.
 *
 * @param {Object} params - The parameters for generating the modal content.
 * @param {Object} [params.form] - The form configuration object. If provided, a form will be generated.
 * @param {Array} params.inputs - An array of input configurations to be included in the modal.
 * @param {string} [params.content] - Additional HTML content to be included in the modal.
 * @returns {string} The generated HTML content for the modal.
 */
function getModalContent(params) {
    let HTML = ``;

    if (params.form != undefined){
        HTML += getForm(params.form, params.inputs);
    }else{
        HTML += getInputs(params.inputs);
    }

    if (params.content != undefined){
        HTML += `<hr>`;
        HTML += params.content;
    };

    return HTML;
}

/**
 * Generates an HTML form string based on the provided parameters and inputs.
 *
 * @param {Object} params - The parameters for the form.
 * @param {string} [params.id="form"] - The ID of the form.
 * @param {string} [params.action="#"] - The action URL of the form.
 * @param {string} [params.method="POST"] - The HTTP method of the form.
 * @param {Array} inputs - An array of input elements to be included in the form.
 * @returns {string} The generated HTML form string.
 */
function getForm(params, inputs) {
    if (params.id == undefined){
        params.id = "form";
    }

    if (params.action == undefined){
        params.action = "#";
    }

    if (params.method == undefined){
        params.method = "POST";
    }

    const form = `
        <form id="${params.id}" action="${params.action}" method="${params.method}">
            ${getInputs(inputs)}
        </form>
    `;

    return form;
}

/**
 * Generates HTML for a list of input parameters.
 *
 * @param {Array} [params] - An array of input parameters. Each parameter is expected to be an object that can be processed by the `getInput` function.
 * @returns {string} The generated HTML string. If no parameters are provided, returns a message indicating no inputs were provided.
 */
function getInputs(params) {
    var HTML = ``;

    if (params == undefined){
        HTML = `No inputs provided.`;
    }else{
        for (let i = 0; i < params.length; i++) {
            const input = params[i];
            HTML += getInput(input);
        }
    }

    return HTML;
}

/**
 * Generates an HTML input element with the specified parameters.
 *
 * @param {Object} params - The parameters for the input element.
 * @param {string} [params.id="input"] - The id of the input element.
 * @param {string} [params.type="text"] - The type of the input element.
 * @param {string} [params.label="Label"] - The label for the input element.
 * @param {string} [params.placeholder="Enter text here"] - The placeholder text for the input element.
 * @returns {string} The HTML string for the input element.
 */
function getInput(params) {
    if (params.id == undefined){
        params.id = "input";
    }

    if (params.type == undefined){
        params.type = "text";
    }

    if (params.label == undefined){
        params.label = "Label";
    }

    if (params.placeholder == undefined){
        params.placeholder = "Enter text here";
    }


    const input = `
        <div class="mb-3">
            <label for="${params.id}" class="form-label">${params.label}</label>
            <input type="${params.type}" class="form-control" id="${params.id}" placeholder="${params.placeholder}">
        </div>
    `;

    return input;
}