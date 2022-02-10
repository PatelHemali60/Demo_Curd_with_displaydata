interface Skill{
    technicalSkills: string
}

interface Experience{ 
    companyName: string, 
    years: string, 
    post:string 
}

interface Eduction{
    schoolName: string, 
    major:string, 
    cgpa: number
}

export interface ResumeBuilder {
    username: String, 
    email: string,
    contactNo: string, 
    postname: string, 
    skills: Skill[], 
    experiences: Experience[],
    education: Eduction[]
}