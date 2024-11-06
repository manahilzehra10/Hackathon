document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeContent = document.getElementById('resumeContent');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var linkedin = document.getElementById('linkedin').value;
        var github = document.getElementById('github').value;
        var degree = document.getElementById('degree').value;
        var institution = document.getElementById('institution').value;
        var years = document.getElementById('years').value;
        var skills = document.getElementById('skills').value;
        resumeContent.innerHTML = "\n        <h3 contenteditable=\"true\">".concat(name, "</h3>\n        <p contenteditable=\"true\">Email: <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n        <p contenteditable=\"true\">Phone: ").concat(phone, "</p>\n        <p contenteditable=\"true\">LinkedIn: <a href=\"").concat(linkedin, "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(linkedin, "</a></p>\n        <p contenteditable=\"true\">GitHub: <a href=\"").concat(github, "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(github, "</a></p>\n        <h4>Education</h4>\n        <p contenteditable=\"true\">Degree: ").concat(degree, "</p>\n        <p contenteditable=\"true\">Institution: ").concat(institution, " | ").concat(years, "</p>\n        <h4>Skills</h4>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n      ");
        resumeOutput.classList.remove('hidden');
    });
});
