Personal Portfolio with EmailJS Contact Form

This project is a personal portfolio website designed to showcase skills, projects, certifications, and experiences. The contact form functionality has been integrated with EmailJS, enabling direct email communication without the need for a server-side backend.

Key Features

Portfolio Highlights

About Section:

Displays personal information and a brief professional summary.

Includes social media links to GitHub, LinkedIn, Telegram, and Gmail.

Education Section:

Showcases academic background with institution names, durations, and acquired skills.

Experience Section:

Details internships and roles held with organizations, along with responsibilities and achievements.

Skills Section:

Highlights technical skills grouped by categories like Web Development, Frameworks, Databases, and Tools.

Projects Section:

Lists personal and collaborative projects with descriptions, timelines, and GitHub/demo links.

Contact Section:

Includes a fully functional contact form powered by EmailJS for direct email communication.

Contact Form with EmailJS

Frontend-only Solution: No server-side setup is needed.

Dynamic Email Template: Captures and sends name, email, subject, and message to the configured email address.

User Feedback:

Displays success and error messages based on submission status.

How to Set Up the Project

1. Prerequisites

Basic knowledge of HTML, CSS, and JavaScript.

EmailJS account. (Sign up at EmailJS)

2. Clone the Repository

git clone <repository-url>
cd <repository-folder>

3. Configure EmailJS

Create an Account: Sign up and log in to EmailJS.

Add a Service:

Navigate to the Services tab and connect your email provider (e.g., Gmail, Outlook).

Create an Email Template:

Design a template with placeholders for name, email, subject, and message.

Retrieve User ID, Service ID, and Template ID:

Go to the Integration tab and copy the User ID.

Note the Service ID and Template ID from your configured service and template.

4. Update the Code

Open index.html and locate the EmailJS integration script:

emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
const serviceID = "YOUR_SERVICE_ID"; // Replace with your Service ID
const templateID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID

Replace YOUR_USER_ID, YOUR_SERVICE_ID, and YOUR_TEMPLATE_ID with your EmailJS credentials.

5. Run the Project

Open the index.html file in your browser to view the portfolio.

Technologies Used

HTML: Structure of the website.

CSS: Styling with responsiveness.

JavaScript: Interactivity and EmailJS integration.

EmailJS: Client-side email functionality.

Project Description

This portfolio is designed for professionals who want to create an impactful online presence. It is tailored for individuals like developers, designers, or freelancers seeking to showcase their credentials, projects, and skills effectively.

The EmailJS integration ensures that visitors can easily get in touch without needing a complex backend setup, making the portfolio lightweight and efficient. With its responsive design, the website provides an optimal viewing experience across devices.

Future Enhancements

Dynamic Content Loading:

Integrate with a CMS for easier updates to projects, skills, and experiences.

Blog Section:

Add a blog to share insights and articles.

Dark/Light Mode Toggle:

Improve user experience with a theme toggle feature.

Advanced Analytics:

Use tools like Google Analytics to track visitor interactions.

License

This project is open-source and available under the MIT License. Feel free to use and customize it as needed.

Contact

For any queries or suggestions, feel free to reach out via the contact form or through the following channels:

Email: nitishkamisetti123@gmail.com

GitHub: Nitish2773

LinkedIn: Sri Nitish Kamisetti



