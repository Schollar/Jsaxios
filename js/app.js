// Function that takes in an API response and prints the random activity to the page
function random_activity(response) {
    console.log(response);
    var random_activity_tag = document.createElement('h1');
    random_activity_tag.innerText = response.data.activity;
    page_container.appendChild(random_activity_tag);
}
// Function to catch errors on API calls
function failed_activity(error) {
    var error_tag = document.createElement('h1');
    error_tag.innerText = "Something went wrong. Wait a minute and resfresh the page";
}
// Basic Function to get a truly random activity from API
function get_random_activity() {
    axios.request({
        url: 'http://www.boredapi.com/api/activity/'
    }).then(random_activity).catch(failed_activity);
}

// This function gets the value of the selected drop down item and uses it as a parameter in the API call
function button_clicked() {
    var value = form_select.value;
    axios.request({
        method: "GET",
        url: 'http://www.boredapi.com/api/activity/',
        params: {
            participants: value
        }
    }).then(random_activity).catch(failed_activity);
}
// Cannot seem to get this to work, need to pass the checked boxes in as parameters
function category_button_clicked() {
    var is_checked = document.querySelectorAll('input');
    var category_value = [];
    for (var i = 0; i < is_checked.length; i++) {

        if (is_checked[i].checked) {
            category_value.push(is_checked[i].value);
        }
    }
    axios.request({
        method: "GET",
        url: 'http://www.boredapi.com/api/activity/',
        params: {
            type: category_value
        }
    }).then(random_activity).catch(failed_activity);
}
// Function which injects my dropdown list and button onto the page
function dropdown_injection() {
    var random_activity_button = document.createElement('button');
    random_activity_button.innerText = "Pick a random activity!";
    random_activity_button.addEventListener('click', get_random_activity);
    var participents_container = document.createElement('section');
    var dropdown_form = document.createElement('form');
    var dropdown_label = document.createElement('label');
    dropdown_label.setAttribute('for', 'participents');
    dropdown_label.innerText = "Number of Participents: ";


    form_select.id = "participants_form";
    form_select.setAttribute('name', 'participents');
    var option1 = document.createElement('option');
    option1.setAttribute('value', 1);
    option1.innerText = "1";

    var option2 = document.createElement('option');
    option2.setAttribute('value', 2);
    option2.innerText = "2";
    var option3 = document.createElement('option');
    option3.setAttribute('value', 3);
    option3.innerText = "3";
    var option4 = document.createElement('option');
    option4.setAttribute('value', 4);
    option4.innerText = "4";

    var form_button = document.createElement('button');
    form_button.setAttribute('type', 'button');
    form_button.innerText = "Get Activity";
    form_button.addEventListener('click', button_clicked);
    form_select.appendChild(option1);
    form_select.appendChild(option2);
    form_select.appendChild(option3);
    form_select.appendChild(option4);
    dropdown_form.appendChild(dropdown_label);
    dropdown_form.appendChild(form_select);
    dropdown_form.appendChild(form_button);
    page_container.appendChild(random_activity_button);
    page_container.appendChild(participents_container);
    page_container.appendChild(dropdown_form);

}


// Function that injects the checkbox selection onto the page
function checkbox_injection() {

    var category_container = document.createElement('section');


    var education = document.createElement('input');
    education.setAttribute('type', 'checkbox');
    education.setAttribute('value', 'education');
    education.setAttribute('name', 'education');
    var education_label = document.createElement('label');
    education_label.setAttribute('for', 'education');
    education_label.innerText = "Education";
    checkbox_form.appendChild(education);
    checkbox_form.appendChild(education_label);


    var recreational = document.createElement('input');
    recreational.setAttribute('type', 'checkbox');
    recreational.setAttribute('value', 'recreational');
    recreational.setAttribute('name', 'recreational');
    var recreational_label = document.createElement('label');
    recreational_label.setAttribute('for', 'recreational');
    recreational_label.innerText = "Recreational";
    checkbox_form.appendChild(recreational);
    checkbox_form.appendChild(recreational_label);

    var social = document.createElement('input');
    social.setAttribute('type', 'checkbox');
    social.setAttribute('value', 'social');
    social.setAttribute('name', 'social');
    var social_label = document.createElement('label');
    social_label.setAttribute('for', 'social');
    social_label.innerText = "Social";
    checkbox_form.appendChild(social);
    checkbox_form.appendChild(social_label);

    var diy = document.createElement('input');
    diy.setAttribute('type', 'checkbox');
    diy.setAttribute('value', 'diy');
    diy.setAttribute('name', 'diy');
    var diy_label = document.createElement('label');
    diy_label.setAttribute('for', 'diy');
    diy_label.innerText = "Do it Yourself";
    checkbox_form.appendChild(diy);
    checkbox_form.appendChild(diy_label);

    var charity = document.createElement('input');
    charity.setAttribute('type', 'checkbox');
    charity.setAttribute('value', 'charity');
    charity.setAttribute('name', 'charity');
    var charity_label = document.createElement('label');
    charity_label.setAttribute('for', 'charity');
    charity_label.innerText = "Charity";
    checkbox_form.appendChild(charity);
    checkbox_form.appendChild(charity_label);

    var cooking = document.createElement('input');
    cooking.setAttribute('type', 'checkbox');
    cooking.setAttribute('value', 'cooking');
    cooking.setAttribute('name', 'cooking');
    var cooking_label = document.createElement('label');
    cooking_label.setAttribute('for', 'cooking');
    cooking_label.innerText = "Cooking";
    checkbox_form.appendChild(cooking);
    checkbox_form.appendChild(cooking_label);

    var relaxation = document.createElement('input');
    relaxation.setAttribute('type', 'checkbox');
    relaxation.setAttribute('value', 'relaxation');
    relaxation.setAttribute('name', 'relaxation');
    var relaxation_label = document.createElement('label');
    relaxation_label.setAttribute('for', 'relaxation');
    relaxation_label.innerText = "Relaxation";
    checkbox_form.appendChild(relaxation);
    checkbox_form.appendChild(relaxation_label);

    var music = document.createElement('input');
    music.setAttribute('type', 'checkbox');
    music.setAttribute('value', 'music');
    music.setAttribute('name', 'music');
    var music_label = document.createElement('label');
    music_label.setAttribute('for', 'music');
    music_label.innerText = "Music";
    checkbox_form.appendChild(music);
    checkbox_form.appendChild(music_label);

    var busywork = document.createElement('input');
    busywork.setAttribute('type', 'checkbox');
    busywork.setAttribute('value', 'busywork');
    busywork.setAttribute('name', 'busywork');
    var busywork_label = document.createElement('label');
    busywork_label.setAttribute('for', 'busywork');
    busywork_label.innerText = "busywork";
    checkbox_form.appendChild(busywork);
    checkbox_form.appendChild(busywork_label);

    var checkbox_form_button = document.createElement('button');
    checkbox_form_button.setAttribute('type', 'button');
    checkbox_form_button.innerText = "Get Activity";
    checkbox_form_button.addEventListener('click', category_button_clicked);
    checkbox_form.appendChild(checkbox_form_button);
    category_container.appendChild(checkbox_form);
    page_container.appendChild(category_container);

}

// Setting up variables to append to.
var page_container = document.getElementById('page_container');
var form_select = document.createElement('select');
var checkbox_form = document.createElement('form');

// calling our functions
dropdown_injection();
checkbox_injection();


