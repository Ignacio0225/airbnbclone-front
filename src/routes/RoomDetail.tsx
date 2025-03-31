
import {useParams, } from "react-router-dom";
import {useQuery} from "@tanstack/react-query"
import {getRoom} from "../api.ts";

export default function RoomDetail(){
    // URL에 있는 파라미터를 router에 있는 path를 통해 받아옴
    // router 에있는  ( path:"rooms/:roomPk",
    //             element:<RoomDetail/>,) 이걸 받아옴
    const {roomPk} = useParams();
    const {isLoading,data} = useQuery({
        queryKey:[`rooms`,roomPk],
        queryFn:() =>getRoom(),
    })
    return <h1>Hello</h1>
}