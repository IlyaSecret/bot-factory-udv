import "./tags-page.scss";
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllTagsAction } from "../../store/api-actions";
import Loader from "../../components/loader/loader";
import Tag from "../../components/tag/tag";

export default function TagsPage() {
    const dispatch = useAppDispatch();
    const {tags, isLoading} = useAppSelector(state => state.tags);
    
    useEffect(() => {
        dispatch(getAllTagsAction());
    }, [])

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="tags-page">
            <div className="tags-page__items">
                {tags ? tags.map(tag => <Tag tag={tag} key={tag.id}></Tag>) : null}
            </div>
        </div>
    )
}