import React from 'react'

const Skills = () => {
    const techSkills = ['JavaScript','React', 'HTML', 'CSS', 'mySql']
  return (
    <section>
        <h2>My Skills</h2>
        <ul>
            {techSkills.map((skill, index)=>(
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </section>
  )
}

export default Skills