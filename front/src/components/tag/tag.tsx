import { ITag } from '../../types/ITag';
import './tag.scss';

type Props = {
    tag: ITag
}

export default function Tag({tag}: Props) {
    return (
        <span className='tag'>
            {tag.name} 
            <button className='tag__delete'>
                <img src='/images/x-circle.png' width="18px" height="18px" alt='tag' className='delete-image'></img>
            </button>
        </span>
    )
}