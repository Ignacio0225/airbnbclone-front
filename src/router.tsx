import {createBrowserRouter} from "react-router-dom"
import Root from "./components/Root"
import Home from "./routes/Home"
import NotFound from "./routes/NotFound.tsx";

const router = createBrowserRouter([{
    // 어떻게든 /만 있으면 기본적으로 Root를 가져옴
    path: "/",
    element: <Root/>,
    errorElement:<NotFound/>,

    children:[
        {
            // Root 뒤에 아무것도 안붙이면  Root Home이 랜더링됨
            path:"",
            element:<Home/>,
        },
    ]
},
]);

export default router;
