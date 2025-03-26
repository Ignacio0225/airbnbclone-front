// dark 모드를 쓸지 기본 모드를 쓸지 설정
// typescript를 쓰고있기 때문에 자동완성을 하려면 type ThemeConfig를 넣어줘야함,
import {extendTheme, type ThemeConfig} from "@chakra-ui/react";

const config:ThemeConfig = {
    initialColorMode: "dark",
    // default 테마 시스탬을 따를것인가 물어보는것
    useSystemColorMode: false,
};

// config object 를 실행하는 extendTheme
const theme =extendTheme ({config});

export default theme;