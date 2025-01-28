
import React, {useState} from 'react';
import Resume from './pages/Resume';

const App = () => {

  const [isTrue, setIsTrue] = useState(false)
  const [FormData, setFormData] = useState({
    name: '',
    title: '',
    contact: {
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
    },
    education: {
      degree: '',
      institution: '',
      year: '',
      location: '',
    },
    skills: [],
    projects : [{
      title: '',
      github: '',
      deployment: '',
      description: [],
    }],
    workExperience: [{
      title: '',
      company: '',
      dates: '',
      responsibility: ''
    }],
  });

  const handleAddProject = () => {
    const newProject = {
      title: '',
      github: '',
      deployment: '',
      description: [],
    };
    setFormData((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
    }));
  };
  
  const handleRemoveProject = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((_, i) => i !== index),
    }));
  };
  
  const handleProjectChange = (index, field, value) => {
    setFormData((prevState) => {
      const updatedProjects = [...prevState.projects];
      updatedProjects[index] = {
        ...updatedProjects[index],
        [field]: value,
      };
      return { ...prevState, projects: updatedProjects };
    });
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // For nested fields like contact and education
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...FormData.skills];
    updatedSkills[index] = value;
    setFormData({ ...FormData, skills: updatedSkills });
  };

  const handleAddSkill = () => {
    setFormData({
      ...FormData,
      skills: [...FormData.skills, ''],
    });
  };

    // Handle input change for work experience fields
    const handleWorkExperienceChange = (index, field, value) => {
      const updatedWorkExperience = [...FormData.workExperience];
      updatedWorkExperience[index][field] = value;
      setFormData({ ...FormData, workExperience: updatedWorkExperience });
    };
  
    // Add a new work experience entry
    const handleAddWorkExperience = () => {
      setFormData({
        ...FormData,
        workExperience: [
          ...FormData.workExperience,
          { title: '', company: '', dates: '', responsibility: '' },
        ],
      });
    };
  
    // Remove a specific work experience entry
    const handleRemoveWorkExperience = (index) => {
      const updatedWorkExperience = FormData.workExperience.filter(
        (_, i) => i !== index
      );
      setFormData({ ...FormData, workExperience: updatedWorkExperience });
    };

  return (
  <div>
    <div className='bg-gray-100 py-10'>
    <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6">Form</h1>

    <form action="#" method="POST" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" value={FormData.name} onChange={handleInputChange} placeholder="Enter your name" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>

      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" id="title" name="title" value={FormData.title} onChange={handleInputChange} placeholder="Enter your title" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>

      <fieldset>
        <legend class="text-lg font-medium text-gray-900">Contact</legend>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="contact.email" name="contact.email" value={FormData.contact.email} onChange={handleInputChange} placeholder="Enter your email" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
            <input type="text" id="contact.phone" name="contact.phone" value={FormData.contact.phone} onChange={handleInputChange} placeholder="Enter your phone number" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="contact.location" value={FormData.contact.location} onChange={handleInputChange} name="contact.location" placeholder="Enter your location" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label for="linkedin" class="block text-sm font-medium text-gray-700">LinkedIn</label>
            <input type="text" id="contact.linkedin" name="contact.linkedin" value={FormData.contact.linkedin} onChange={handleInputChange} placeholder="Enter your LinkedIn URL" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label for="github" class="block text-sm font-medium text-gray-700">GitHub</label>
            <input type="text" id="contact.github" name="contact.github" value={FormData.contact.github} onChange={handleInputChange} placeholder="Enter your GitHub URL" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend class="text-lg font-medium text-gray-900">Education</legend>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label for="degree" class="block text-sm font-medium text-gray-700">Degree</label>
            <input type="text" id="education.degree" name="education.degree" value={FormData.education.degree} onChange={handleInputChange} placeholder="Enter your degree" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label for="institution" class="block text-sm font-medium text-gray-700">Institution</label>
            <input type="text" id="education.institution" name="education.institution" value={FormData.education.institution} onChange={handleInputChange} placeholder="Enter your institution name" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label for="year" class="block text-sm font-medium text-gray-700">Year</label>
            <input type="text" id="education.year" name="education.year" value={FormData.education.year} onChange={handleInputChange} placeholder="Enter year of graduation" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label for="edu-location" classname="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="education.location" name="education.location" value={FormData.education.location} onChange={handleInputChange} placeholder="Enter location" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
        </div>
      </fieldset>

      
      <div >
        <label for="skills" class="block text-sm font-medium text-gray-700">Skills</label>
        {
          FormData.skills.map((skill, index) => (
            <input key={index} id="skills" name="skills" value={skill} onChange={(e) => handleSkillChange(index, e.target.value)} rows="3" placeholder="Enter your skills" autoFocus class="w-full my-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></input>
          ))
        }
        <button
          type="button"
          onClick={handleAddSkill}
          className="mt-2 bg-indigo-500 text-white py-1 px-4 rounded-md shadow-sm hover:bg-indigo-600">Add Skill</button>
      </div>

        {/* projects section */}
        <fieldset>
          <legend className="text-lg font-medium text-gray-900">Projects</legend>
          {FormData.projects.map((project, index) => (
            <div key={index}>
              <p className="w-full font-medium">Project {index + 1}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {/* Project Title */}
                <div>
                  <label
                    htmlFor={`project-title-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id={`project-title-${index}`}
                    name={`project-title-${index}`}
                    value={project.title}
                    onChange={(e) =>
                      handleProjectChange(index, 'title', e.target.value)
                    }
                    placeholder="Enter project title"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* GitHub Link */}
                <div>
                  <label
                    htmlFor={`project-github-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    GitHub Link
                  </label>
                  <input
                    type="url"
                    id={`project-github-${index}`}
                    name={`project-github-${index}`}
                    value={project.github}
                    onChange={(e) =>
                      handleProjectChange(index, 'github', e.target.value)
                    }
                    placeholder="Enter GitHub URL"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Deployment Link */}
                <div>
                  <label
                    htmlFor={`project-deployment-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Deployment Link
                  </label>
                  <input
                    type="url"
                    id={`project-deployment-${index}`}
                    name={`project-deployment-${index}`}
                    value={project.deployment}
                    onChange={(e) =>
                      handleProjectChange(index, 'deployment', e.target.value)
                    }
                    placeholder="Enter Deployment URL"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Description */}
                <div className="col-span-2">
                  <label
                    htmlFor={`project-description-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id={`project-description-${index}`}
                    name={`project-description-${index}`}
                    rows="3"
                    value={project.description.join('\n')}
                    onChange={(e) =>
                      handleProjectChange(index, 'description', e.target.value.split('\n'))
                    }
                    placeholder="Enter description bullet points, one per line"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveProject(index)}
                className="mt-2 bg-red-500 text-white py-1 px-4 rounded-md shadow-sm hover:bg-red-600"
              >
                Remove Project
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddProject}
            className="mt-2 bg-indigo-500 text-white py-1 px-4 rounded-md shadow-sm hover:bg-indigo-600"
          >
            Add Project
          </button>
        </fieldset>


      
        {/* work experience */}
      <fieldset>
              <legend className="text-lg font-medium text-gray-900">
                Work Experience
              </legend>
              {FormData.workExperience.map((work, index) => (
                <div key={index}>
                  <p className="w-full font-medium">
                    Work Experience {index + 1}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor={`work-title-${index}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id={`work-title-${index}`}
                        name={`work-title-${index}`}
                        value={work.title}
                        onChange={(e) =>
                          handleWorkExperienceChange(
                            index,
                            'title',
                            e.target.value
                          )
                        }
                        placeholder="Enter your work title"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`company-${index}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id={`company-${index}`}
                        name={`company-${index}`}
                        value={work.company}
                        onChange={(e) =>
                          handleWorkExperienceChange(
                            index,
                            'company',
                            e.target.value
                          )
                        }
                        placeholder="Enter company name"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`dates-${index}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Dates
                      </label>
                      <input
                        type="text"
                        id={`dates-${index}`}
                        name={`dates-${index}`}
                        value={work.dates}
                        onChange={(e) =>
                          handleWorkExperienceChange(index, 'dates', e.target.value)
                        }
                        placeholder="Enter work dates"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`responsibility-${index}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Responsibility
                      </label>
                      <textarea
                        id={`responsibility-${index}`}
                        name={`responsibility-${index}`}
                        rows="3"
                        value={work.responsibility}
                        onChange={(e) =>
                          handleWorkExperienceChange(
                            index,
                            'responsibility',
                            e.target.value
                          )
                        }
                        placeholder="Enter your responsibilities"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveWorkExperience(index)}
                    className="mt-2 bg-red-500 text-white py-1 px-4 rounded-md shadow-sm hover:bg-red-600"
                  >
                    Remove Work
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddWorkExperience}
                className="mt-2 bg-indigo-500 text-white py-1 px-4 rounded-md shadow-sm hover:bg-indigo-600"
              >
                Add Work
              </button>
            </fieldset>

      <div>
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500" onClick={(e) => {
          e.preventDefault();
          setIsTrue(true);}}>Preview</button>
      </div>
    </form>
  </div>
    </div>
    
    {isTrue ? <Resume {...FormData} /> : null}
    
  </div>
  );
   
};

export default App;