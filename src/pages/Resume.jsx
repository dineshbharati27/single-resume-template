import React from 'react';

const Resume = ({
  name,
  title,
  contact,
  education,
  skills,
  workExperience,
  projects
}) => {

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-5">
      <div className="bg-white max-w-4xl w-full shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-teal-600">
          {name.toUpperCase()}
        </h1>
        <h2 className="text-center text-gray-600 mb-8">{title.toUpperCase()}</h2>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            {/* Contact */}
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              CONTACT
            </h3>
            <p className="text-gray-700">{contact.email}</p>
            <p className="text-gray-700">{contact.phone}</p>
            <p className="text-gray-700">{contact.location}</p>
            <a
              href={contact.linkedin}
              className="text-teal-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <a
              href={contact.github}
              className="text-teal-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>

            {/* Education */}
            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              EDUCATION
            </h3>
            <p className="text-gray-700 font-semibold">{education.degree}</p>
            <p className="text-gray-700">{education.institution}</p>
            <p className="text-gray-700">{education.year}</p>
            <p className="text-gray-700">{education.location}</p>

            {/* Skills */}
            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              SKILLS
            </h3>
            <ul className="text-gray-700 list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-span-2">

            {/* Project Section */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              PROJECTS
            </h3>
            {projects.map((project, index) => (
              <div className="mb-4" key={index}>
                <h4 className="text-gray-800 font-semibold">{project.title}</h4>
                <div className="flex items-center space-x-4 mt-1">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      <i className="fab fa-github"></i> Github link
                    </a>
                  )}
                  {project.deployment && (
                    <a href={project.deployment} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      <i className="fas fa-external-link-alt"></i> Deployment link
                    </a>
                  )}
                </div>
                <ul className="list-disc list-inside text-gray-700 mt-1">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Work Experience */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              WORK EXPERIENCE
            </h3>
            {workExperience.map((job, index) => (
              <div className="mb-4" key={index}>
                <h4 className="text-gray-800 font-semibold">{job.title}</h4>
                <p className="text-gray-600">{`${job.company} / ${job.dates}`}</p>
                <ul className="list-disc list-inside text-gray-700 mt-1">
                  {`${job.responsibility}`}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500">download resume</button>
      </div>
      
    </div>
  );
};

export default Resume;
