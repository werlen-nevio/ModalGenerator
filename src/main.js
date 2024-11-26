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

function getModalContent(params) {
    let HTML = ``;

    if (params.form != undefined){
        HTML += getForm(params.form);
    }
    return HTML;
}

function getForm(params) {
    
}