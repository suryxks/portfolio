import { projects ,blogs,socailProfiles} from "./data";
export const getProjectDetails = () => {
    return projects;
}
export const getProjectPaths = () => {
    return projects.map((project) => {
        return ({ params: { id:project.name } });
    })
}
export const getProject = (projectName) => projects.filter(project => project.name === projectName)

export const getBlogs = () => { return blogs };
export const getProfiles = () => { return socailProfiles };