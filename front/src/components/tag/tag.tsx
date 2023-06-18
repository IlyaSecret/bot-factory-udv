import { ITag } from '../../types/ITag';
import './tag.scss';
import { useAppDispatch } from '../../app/hooks';

type Props = {
    tag: ITag,
    editable?: boolean
}

export default function Tag({ tag, editable = true }: Props) {
    const dispatch = useAppDispatch();

    return (
        <span className={`tag ${editable ? "editable" : "non-editable"}`}>
            {tag.name} 
            <button className='tag__delete'>
                <img src='/images/x-circle.png' width="18px" height="18px" alt='tag' className='delete-image'></img>
            </button>
        </span>
    )
}