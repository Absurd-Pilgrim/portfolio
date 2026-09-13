# Rohit Mistry - Developer Portfolio

A modern, responsive portfolio website for [Rohit Mistry](https://github.com/Absurd-Pilgrim), a Python-focused software developer working across web, mobile, offline-first applications, APIs, and data analytics.

The site is built with plain HTML, CSS, and JavaScript. It has no build step and can be hosted on GitHub Pages, Vercel, Netlify, or any static web server.

**Live website:** [rohit-mistry-portfolio.vercel.app](https://rohit-mistry-portfolio.vercel.app)

## Features

- Responsive layout for desktop, tablet, and mobile
- Dark and light themes with saved preference and theme-colored sweep transitions
- CV-based experience, education, and technical skills
- Five featured projects linked to the `Absurd-Pilgrim` GitHub account
- Personal portrait photography from the local `Images` directory
- Accessible semantic markup, keyboard navigation, and reduced-motion support
- Scroll-based reveal animations using the Intersection Observer API
- Contact form delivered through FormSubmit
- No framework, package installation, or compilation required

## Technology

- HTML5
- Modern CSS with custom properties, Grid, and Flexbox
- Vanilla JavaScript
- Google Fonts: DM Sans and Space Grotesk
- FormSubmit for contact-form delivery

## Project structure

```text
portfolio/
|-- Images/
|   |-- RohitMistry.png
|   |-- RohitMistry_Favicon.png
|   `-- RohitMistry_Image_1.png
|-- CV_Rohit_Mistry.pdf
|-- index.html
|-- tooplate-style.css
|-- custom.js
`-- README.md
```

These are all the files required by the website. An internet connection is only needed to load Google Fonts and submit the contact form.

## Run locally

No dependencies need to be installed. Clone the repository and start any static file server.

```bash
git clone https://github.com/Absurd-Pilgrim/portfolio.git
cd portfolio
python -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173) in a browser.

On Windows, if `python` is not available as a command, use:

```powershell
py -m http.server 4173
```

You can also open `index.html` directly, but a local server provides behavior closer to the deployed website.

## Customize the template

You are welcome to use this project as the starting point for your own portfolio.

### 1. Update your identity

Open `index.html` and replace:

- Name and professional title
- Introduction and About copy
- Email address, telephone number, and location
- GitHub and LinkedIn URLs
- Experience, education, skills, and project information

### 2. Replace the photographs

Add your images to `Images/` and update the corresponding `src`, `alt`, `width`, and `height` attributes in `index.html`.

The current design uses:

- `Images/RohitMistry.png` for the hero portrait
- `Images/RohitMistry_Favicon.png` for the browser icon and navigation avatar
- `Images/RohitMistry_Image_1.png` for the About section

For good results, use a square hero image and a portrait-oriented About image. Keep the files compressed to improve page-loading speed.

### 3. Replace the resume

Put your PDF in the project root and update the resume link in `index.html`:

```html
<a href="your-resume.pdf" target="_blank" rel="noopener">View resume</a>
```

### 4. Add or edit projects

Each project is an `<article class="project-card">` inside `.projects-grid` in `index.html`. Duplicate an existing card and update its:

- Project number and category
- Title and description
- Technology tags
- GitHub and live-demo links
- Visual class and matching styles in `tooplate-style.css`

Remember to update the featured-project count in the metrics section.

### 5. Change the visual theme

The main design tokens are at the beginning of `tooplate-style.css`:

```css
:root {
  --bg: #08111f;
  --text: #eef6ff;
  --accent: #4de2bd;
}
```

Light-theme values are defined under `[data-theme="light"]`. Changing the accent and surface variables is the quickest way to give the template a different personality.

### 6. Configure the contact form

The form action in `index.html` contains the destination email address:

```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```

Replace it with your address and update the visible `mailto:` link as well. After deployment, submit the form once and approve the activation message sent by FormSubmit. Messages will not be delivered until this one-time confirmation is completed.

Do not add passwords, API keys, or private credentials to this repository. Everything in a static website is visible to visitors.

## Deploy

### GitHub Pages

1. Push the project to a GitHub repository.
2. Open **Settings > Pages** in that repository.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the desired branch and the `/ (root)` directory.
5. Save and wait for GitHub to publish the site.

### Vercel

1. Import the GitHub repository into Vercel.
2. Select **Other** as the framework preset if prompted.
3. Leave the build command empty.
4. Use the repository root as the output directory and deploy.

The same files can also be uploaded directly to Netlify or another static hosting provider.

## Use it as your own template

You can either fork this repository or create a clean copy:

```bash
git clone https://github.com/Absurd-Pilgrim/portfolio.git my-portfolio
cd my-portfolio
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Then replace all personal content, images, contact information, resume files, and project details before publishing.

Repository owners can also enable GitHub's **Template repository** option under **Settings > General** to display a **Use this template** button.

## Reuse permission

You may use and adapt the HTML, CSS, and JavaScript in this repository for your own personal portfolio. Attribution with a link back to this repository is appreciated.

Rohit Mistry's name, contact details, resume, photographs, and personal project content are not part of that permission and must be replaced before redistribution or publication.

## Author

**Rohit Mistry**

- GitHub: [@Absurd-Pilgrim](https://github.com/Absurd-Pilgrim)
- LinkedIn: [mr-rohit-mistry](https://www.linkedin.com/in/mr-rohit-mistry)
- Email: [mr.mistryrohit@gmail.com](mailto:mr.mistryrohit@gmail.com)
