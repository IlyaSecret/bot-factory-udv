import LinkItem from '../../components/link-item/link-item';
import '../main-page/main-page.scss';
import { MainPageItems } from './main-page-links';

export default function MainPage() {
    return (
        <div className="main-page">
            {MainPageItems.map(el => <LinkItem info={el} key={el.title}></LinkItem>)}
        </div>
    )
}