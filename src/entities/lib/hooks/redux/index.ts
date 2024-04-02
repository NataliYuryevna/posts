import {useDispatch, useSelector} from 'react-redux'
import {typePosts, typeUsers} from "../../../../shared/lib/server";
import {store} from "../../store";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const usePostsSelector = useSelector.withTypes<{ posts: typePosts[] }>();
export const useUsersSelector = useSelector.withTypes<{ users: typeUsers[] }>()
//export const useAppStore = useStore.withTypes<AppStore>()

