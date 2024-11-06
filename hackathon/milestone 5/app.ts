document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;
    const downloadPdfButton = document.getElementById('downloadPdfButton') as HTMLButtonElement;
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = (document.getElementById('username') as HTMLInputElement).value;
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
      const github = (document.getElementById('github') as HTMLInputElement).value;
      const website = (document.getElementById('website') as HTMLInputElement).value;
      const degree = (document.getElementById('degree') as HTMLInputElement).value;
      const institution = (document.getElementById('institution') as HTMLInputElement).value;
      const years = (document.getElementById('years') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;
  
      const resumeUrl = `https://${username}.vercel.app/resume`;
      
      resumeContent.innerHTML = `
        <h3 contenteditable="true">${name}</h3>
        <p contenteditable="true">Email: <a href="mailto:${email}">${email}</a></p>
        <p contenteditable="true">Phone: ${phone}</p>
        <p contenteditable="true">LinkedIn: <a href="${linkedin}" target="_blank" rel="noopener noreferrer">${linkedin}</a></p>
        <p contenteditable="true">GitHub: <a href="${github}" target="_blank" rel="noopener noreferrer">${github}</a></p>
        <p contenteditable="true">Website: <a href="${website}" target="_blank" rel="noopener noreferrer">${website}</a></p>
        <h4>Education</h4>
        <p contenteditable="true">Degree: ${degree}</p>
        <p contenteditable="true">Institution: ${institution} | ${years}</p>
        <h4>Skills</h4>
        <p contenteditable="true">${skills}</p>
        <h4>Resume URL</h4>
        <p contenteditable="true"><a href="${resumeUrl}" target="_blank" rel="noopener noreferrer">${resumeUrl}</a></p>
      `;
  
      resumeOutput.classList.remove('hidden');
    });
  
    if (downloadPdfButton) {
      downloadPdfButton.addEventListener('click', () => {
        const resumeElement = document.getElementById('resumeContent') as HTMLElement;
        const opt = {
          margin:       1,
          filename:     'Resume.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
  
        // Use html2pdf to generate PDF
        html2pdf().from(resumeElement).set(opt).save();
      });
    }
  });
  