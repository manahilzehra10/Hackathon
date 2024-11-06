document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
      const github = (document.getElementById('github') as HTMLInputElement).value;
      const degree = (document.getElementById('degree') as HTMLInputElement).value;
      const institution = (document.getElementById('institution') as HTMLInputElement).value;
      const years = (document.getElementById('years') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;
  
      resumeContent.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>LinkedIn: ${linkedin}</p>
        <p>GitHub: ${github}</p>
        <h4>Education</h4>
        <p>Degree: ${degree}</p>
        <p>Institution: ${institution}</p>
        <p>Years Attended: ${years}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
      `;
  
      resumeOutput.classList.remove('hidden');
    });
  });
  