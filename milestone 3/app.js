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
        resumeContent.innerHTML = "\n        <h3>".concat(name, "</h3>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <p>LinkedIn: ").concat(linkedin, "</p>\n        <p>GitHub: ").concat(github, "</p>\n        <h4>Education</h4>\n        <p>Degree: ").concat(degree, "</p>\n        <p>Institution: ").concat(institution, "</p>\n        <p>Years Attended: ").concat(years, "</p>\n        <h4>Skills</h4>\n        <p>").concat(skills, "</p>\n      ");
        resumeOutput.classList.remove('hidden');
    });
});
