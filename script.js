document.addEventListener('DOMContentLoaded', () => {
      const data = {
        "personalInformation": {
          "name": "Sourabh Soni",
          "email": "Sourabhs701@gmail.com",
          "github": "Sourabhs701",
          "linkedin": "Sourabhs701",
          "portfolio": "Sourabh-work"
        },
        "education": [
          {
            "university": "Rajasthan Technical University",
            "degree": "Masters in Computer Application (MCA)",
            "location": "Kota, Rajasthan",
            "dates": "May 2023-June 2025",
            "cgpa": "8.21/10"
          },
          {
            "university": "University of Rajasthan",
            "degree": "Bachelors in Computer Application (BCA)",
            "location": "Jaipur, Rajasthan",
            "dates": "May 2019-June 2022",
            "cgpa": "7.09/10"
          }
        ],
        "workHistory": [
          {
            "title": "Python Developer Intern",
            "company": "NeuroNexus Innovations",
            "location": "Remote, Jaipur",
            "dates": "Dec 2023-Feb 2024",
            "description": [
              "Enhanced code quality with rigorous unit testing and debugging.",
              "Developed user-friendly, accessible interfaces, boosting engagement.",
              "Utilized version control (Git) for streamlined collaborative workflows."
            ]
          }
        ],
        "projects": [
          {
            "name": "Blog Application",
            "technologies": ["SpringBoot", "MySQL", "JWT"],
            "description": [
              "Developed APIs with SpringBoot, integrating SpringSecurity for user Authentication and Authorization.",
              "Implemented a payment gateway for seamless transaction processing within the application.",
              "Ensured secure and scalable APIs, leveraging best practices in security and payment integration."
            ]
          },
          {
            "name": "Image Recommendation System",
            "technologies": ["Python", "Tensorflow", "Keras", "Numpy", "Streamlit"],
            "description": [
              "Implemented a transfer learning model (ResNet50) to achieve a 74.9% accuracy in a fashion recommendation system.",
              "Uses Nearest Neighbor (Euclidean Distance) to Recommend the Fashion Clothing."
            ]
          }
        ],
        "achievements": [
          {
            "name": "HackerRank",
            "details": "Sourabhs701 (5⭐) Problem solving Certificate and 420+ points in Python."
          },
          {
            "name": "Certified in Excel Fundamentals – Formulas for Finance",
            "details": "from (CFI, 2023), proficient in utilizing Excel functions tailored for financial calculations and modeling."
          },
          {
            "name": "Analyzing and Visualizing using R Programming",
            "details": "-(DataScienceLab, 2023), 7 Days Workshop going through Data Cleaning, Data Transformation, ETL process and Visualizing it using R."
          }
        ],
        "technicalSkills": {
          "languages": ["C++", "Java", "Python"],
          "courses": ["RESTful APIs", "Microservices Architecture", "SpringBoot", "Swagger", "AWS (EC2, S3 Bucket)", "GitHub", "Git", "TCP/IP", "WebSockets", "Nginx", "Maven", "Excel", "JWT", "OpenAI Api", "MySql", "Redis"]
        }
      };

      // Personal Information
      document.getElementById('name').textContent = data.personalInformation.name;
      document.getElementById('email').href = `mailto:${data.personalInformation.email}`;
      document.getElementById('email').setAttribute('title', data.personalInformation.email);
      document.getElementById('github').href = `https://github.com/${data.personalInformation.github}`;
      document.getElementById('linkedin').href = `https://linkedin.com/in/${data.personalInformation.linkedin}`;
      document.getElementById('portfolio').href = `https://${data.personalInformation.github}.github.io/${data.personalInformation.portfolio}/`;

      // Education
      const educationList = document.getElementById('education-list');
      data.education.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.innerHTML = `
          <h3>${edu.degree}</h3>
          <p>${edu.university}, ${edu.location}</p>
          <p>Dates: ${edu.dates} | CGPA: ${edu.cgpa}</p>
        `;
        educationList.appendChild(eduElement);
      });

      // Work History
      const workList = document.getElementById('work-list');
      data.workHistory.forEach(work => {
        const workElement = document.createElement('div');
        workElement.innerHTML = `
          <h3>${work.title} at ${work.company}</h3>
          <p>${work.location} | ${work.dates}</p>
          <ul>${work.description.map(desc => `<li>${desc}</li>`).join('')}</ul>
        `;
        workList.appendChild(workElement);
      });

      // Projects
      const projectsList = document.getElementById('projects-list');
      data.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
          <h3>${project.name}</h3>
          <p>Technologies: ${project.technologies.join(', ')}</p>
          <ul>${project.description.map(desc => `<li>${desc}</li>`).join('')}</ul>
        `;
        projectsList.appendChild(projectElement);
      });

      // Achievements
      const achievementsList = document.getElementById('achievements-list');
      data.achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.innerHTML = `
          <h3>${achievement.name}</h3>
          <p>${achievement.details}</p>
        `;
        achievementsList.appendChild(achievementElement);
      });

      // Technical Skills
      const languagesList = document.getElementById('languages');
      languagesList.innerHTML = '<h3>Languages</h3>';
      data.technicalSkills.languages.forEach(lang => {
        const langElement = document.createElement('span');
        langElement.textContent = lang;
        languagesList.appendChild(langElement);
      });

      const coursesList = document.getElementById('courses');
      coursesList.innerHTML = '<h3>Skills & Tools</h3>';
      data.technicalSkills.courses.forEach(course => {
        const courseElement = document.createElement('span');
        courseElement.textContent = course;
        coursesList.appendChild(courseElement);
      });

      // Initialize AOS
      AOS.init();
    });