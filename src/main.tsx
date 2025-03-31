import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import {RouterProvider} from "react-router-dom";
import router from "./router.tsx";
import theme from "./theme.ts";
import{QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client=new QueryClient();

// 기본 테마

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ChakraProvider theme={theme}>
                    {/* 사용자가 어플리케이션을 이전에 로드 했을때 어떤 색상 테마를 골랐는지---
                    알아야하기 때문에, 그래야 사용자가 고른 색상 테마를 우리 어플리케이션에 표시할 수 있음---
                    (Chakra 가 세팅을 페이지의 로컬 저장소로 자동저장, 사용자가 새로고침이나---
                    페이지를 다시 불러왔을때는 사용자가 다시 설정 해줘야함)*/}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                {/*ColorModeScript 를 실행항후 RouterProvider 가 실행됨 화면이 로드됐을때는---
                이미 사용자의 선택이 뭐였는지 알고 있음*/}
                <RouterProvider router={router} />
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
);