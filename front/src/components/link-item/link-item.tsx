import { Link } from 'react-router-dom';
import { ILinkItem } from '../../types/linkItem';
import './link-item.scss';

type LinkItemProps = {
    info: ILinkItem
}

export default function LinkItem({ info }: LinkItemProps) {
    return (
        <Link to={info.pageLink}>
            <div className='link-item'>
                <img src={info.icon} alt={info.title} className='link-item_img'></img>
                <h2>{info.title}</h2>
            </div>
        </Link>
    )
}