import axios from "axios"
import { Dispatch } from "react"
import { Project } from "../../server/src/project/project.model"

export const fetchProjects = () => {
    return async (dispatch: Dispatch<Project>) => {
        try {
            const response = await axios.get('http://localhost:5000/projects')
        } catch (e) {
            
        }
    }
}