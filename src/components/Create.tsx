import React, { ReactNode, useState } from 'react';
import classes from "../Styles/components/modal.module.scss"
import { TfiClose } from "react-icons/tfi";
import UIInput from './UIInput';
import UIButton from './UIButton';
import axios from 'axios';
import { IProject } from '@/types/project';
import { error } from 'console';

interface CreateProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; // Обратите внимание на это свойство
}

const Create: React.FC<CreateProps> = ({ isOpen, onClose, children }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState<string | null>(null);
    const [skills, setSkills] = useState("")
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
  if (!isOpen) {
    return null;
  }


  const createProject = () => {
    setLoading(true);
    setError(null);

    const projectData = {
      p_name: name,
      description: description,
      skills: skills
    }

    axios
      .post("http://localhost:5000/projects", projectData)
      .then((response) => {
        setSuccessMessage('Мероприятие отправлено на проверку!');
        setName("");
        setDescription("");
        setSkills("");
      })
      .catch((error) => {
        console.error('Ошибка при создании мероприятия', error);
        setError('Ошибка при создании мероприятия. Пожалуйста, попробуйте еще раз.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={classes["modal-overlay"]}>
      <div className={classes["modal"]}>
        <TfiClose className={classes["modal-close"]} onClick={() => {onClose(); setSuccessMessage(null);}} />
        {successMessage ? (
          <div className={classes["modal-contentmess"]}>
            <div className={classes["success-message"]}>{successMessage}</div>
            </div>
          ) : (
            <>
            <div className={classes["modal-content"]}>
              <h2>Предложить мероприятие</h2>
              <UIInput
            text={"Название"}
            value={name}
            setValue={(e) => setName(e.currentTarget.value)}
            type={"name"}/>
            <UIInput
            text={"Описание"}
            value={description}
            setValue={(e) => setDescription(e.currentTarget.value)}
            type={"discription"}/>
            <UIInput
            text={"Конкурсы"}
            value={skills}
            setValue={(e) => setSkills(e.currentTarget.value)}
            type={"skills"}/>
            <div className={classes["Card__button"]}>
            <UIButton onClick={() => createProject()} type='number' children="Предложить"/>
            </div>
            </div>
            </>
          )}
            </div>
      </div>
  );
};

export default Create;
