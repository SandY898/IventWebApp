import classes from "../Styles/components/main.module.scss"
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import UIButton from "../components/UIButton";
import Card from "../components/Card";
import Modal from "../components/Create";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import router from "next/router";
import { IProject } from "@/types/project";
import ProjectList from "@/components/ProjectList";
import Create from "../components/Create";
import axios from "axios";


const Main =()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projects, setProjects] = useState<IProject[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      setSearchTerm(term);
  
      const filtered = projects.filter((project) =>
        project.p_name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProjects(filtered);
    };

    useEffect(() => {
      axios
        .get("http://localhost:5000/projects")
        .then((response) => {
          const fetchedProjects = response.data;
          setProjects(fetchedProjects);
          setFilteredProjects(fetchedProjects);
        })
        .catch((error) => console.error("Error:", error));
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const handleLogout = () => {
        // Логика выхода из аккаунта
        console.log('Logout');
      };

      const handlePortfolio = () => {
        // Логика перехода на страницу портфолио
        console.log('Go to portfolio');
      };

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      useEffect(() => {
        axios.get("http://localhost:5000/projects")
        .then(response => setProjects(response.data))
        .catch(error => console.error('Error:', error));
      }, []);

    return(
        <div className={classes["Main"]}>
            <header className={classes["Main__Header"]}>
                <img onClick={() => router.push("/")}/>
                <UIButton onClick={openModal} type="string" children='Организовать мероприятие'/>
                <input
                className={classes['Main__Header-input']} placeholder="Поиск мероприятия" type="text" onChange={handleSearchTermChange} />
                <IoNotificationsOutline style={{scale:"1.5"}}/>
                
                
                {
                   isLoggedIn ? (
                   <div className={classes["dropdown"]}>
                    <MdOutlineAccountCircle style={{ scale: "2" }} onMouseEnter={toggleMenu} />
                   {isMenuOpen && (
                     <div onMouseLeave={toggleMenu} className={classes["dropdown-menu"]}>
                        <div style={{ cursor: "pointer" }} onClick={() => router.push("/portfolio")}>
                           Портфолио
                         </div>
                        <div onClick={handleLogout}>Выход</div>
                      </div>
                    )}
                    </div>
  ) : (
    <UIButton onClick={() => router.push("/reg")} type="number" children="Войти" />
  )
}
                
            </header>
            
            <div className={classes['Main__Projects']}>
                  <ProjectList projects={searchTerm ? filteredProjects : projects}/>
            </div>
            <Create isOpen={isModalOpen} onClose={closeModal}>
            
            </Create>
        </div>
    )
}

export default Main

function setProjects(data: any): any {
  throw new Error("Function not implemented.");
}
