import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css';



function NewProject(){
    
    const history = useNavigate()

     function creatPost(project){
    
     //initialize cost and services

    project.costs = 0
    project.services = []
   
    fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
    }) 
    .then((resp) => resp.json())
    .then(data => {
        console.log(data)
        //redirect 
        history('/projects', {mensage: 'Projeto criado com sucesso!'}) 
       
    }
    ).catch(err => console.log(err))
    
}
    return(
            <div className={styles.newproject_container} >
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={creatPost} btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject