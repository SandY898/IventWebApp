import router from 'next/router';
import clasess from '../Styles/components/card.module.scss';
import UIButton from './UIButton';
import { IProject } from '@/types/project';

interface ICard {
    project: IProject;
}

const Card:React.FC<ICard> = ({project}: ICard) => {


    return(
        <div className={clasess['Card']}>
            <h1>{project.p_name}</h1>
            <p className={clasess['Card__description']}>{project.description}</p>
            <div className={clasess['Card__Skills']}>
            <h2>Конкурсы</h2>
            <p className={clasess['Card__Skills-list']}>
                {project.skills}
            </p>
            </div>
            <div className={clasess['Card__button']}>
                <UIButton onClick={() => router.push('/project/' + project.project_id)} type='number' children='Подробнее'/>
                </div>
        </div>
    )
}
export default Card;