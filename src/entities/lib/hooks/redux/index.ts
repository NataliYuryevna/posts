import { useDispatch, useSelector } from 'react-redux'
import {typePosts} from "../../../../shared/lib/server";
import {store} from "../../store";
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<{posts:typePosts[]}>()
//export const useAppStore = useStore.withTypes<AppStore>()

