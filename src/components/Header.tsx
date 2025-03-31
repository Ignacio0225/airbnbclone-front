import {
    Box,
    Button,
    HStack,Stack,
    IconButton,
    useDisclosure,
    useColorMode,
    LightMode,
    useColorModeValue,
} from "@chakra-ui/react";
import {FaAirbnb, FaMoon, FaSun} from "react-icons/fa";
import LoginModal from "./LoginModal.tsx";
import {Link} from "react-router-dom";
import SignUpModal from "./SignUpModal.tsx";

export default function Header(){
    // 모달끼리 구분하기 쉽게 이름을 지어줌
    const {isOpen:isLoginOpen,onClose:onLoginClose,onOpen:onLoginOpen} = useDisclosure();
    const {isOpen:isSignUpOpen,onClose:isSignUpClose,onOpen:onSignUpOpen} = useDisclosure();
    // colorMode 는 밑에서 값을 주고 toggleColorMode는 그 값을 반전 시켜줌
    // const {colorMode,toggleColorMode} =useColorMode();
    // useColorModeValue 를 쓰기 때문에 위에 있는 colorMode 는 필요 없어짐
    const {toggleColorMode} =useColorMode();
    // 두개의 인자를 받음, 라이트모드일때 => , 다크모드일때 => ,
    // 다크모드 설정 아이콘에 설정한 colorMode와 같은기능인데 chakra ui의 short cut으로 가능
    const logoColor = useColorModeValue("red.500","red.200");
    // 컴포넌트 이름은 반드시 대문자로 시작해야함,
    // 컬러가 아니더라도 아이콘으로 if 문처럼 사용 가능함 (light mode, dark mode)
    const Icon =useColorModeValue(FaMoon,FaSun);
    return (
        /*py == padding y축 , px == padding x축
        * HStack,VStack 은 수평수직 고정이지면 유동적으로 사용할땐 그냥 Stack*/
    <Stack
        justifyContent={"space-between"}
        alignItems="center"
        py={"5"}
        px={"40"}
        // 작을땐 위아래로, 클때는 box들이 앙옆으로 이동
        direction={{
            sm:"column",
            md:"row",

        }}
        // 작을땐 거리를 벌리고, 클때는
        spacing={{
            sm:4,
            md:0,
        }}
        borderBottomWidth={1}>
        {/*chakra ui 컬러는 chakra iu에서만 변경 가능 bnb로고는 chakra ui가 아님
        또한 useColorModeValue로 다크모드,라이트모드 변경 할때마다 설정 해놓은 색상으로 설정변경*/}
        <Box color={logoColor}>
            <Link to={"/"}>
            <FaAirbnb size={"48"}/>
            </Link>
        </Box>
        {/*spacing <-사이의거리 16px == 1re*/}
        <HStack spacing={2}>
            {/* aria-label = 스크린 리더가 읽어주는 텍스트, 앞을 잘 볼 수 없는사람이 쓰는기능*/}
            <IconButton
                // 클릭 하면 colorMode 가 반전됨
                onClick={toggleColorMode}
                variant={"ghost"}
                aria-label ="Toggle dark mode"
                 // colorMode 가 "light"면 FaMoon 아니면 FaSun 을 보여줌
                // icon={colorMode==="light" ? <FaMoon/>:<FaSun/>}/>
                // 위의 코드와 동일한 효과를 줌(useColorModeValue) 를 만들어야함
                icon = {<Icon/>}/>
            {/* LogIn 버튼이 클릭되면 Modal 실행*/}
            <Button onClick={onLoginOpen} >Log In</Button>
            {/*강제적으로 Light Mode로 설정 해놓음(Dark Mode도 가능)*/}
            <LightMode>
            <Button onClick={onSignUpOpen} colorScheme={"red"} >Sign Up</Button>
            </LightMode>
        </HStack>
        <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        <SignUpModal isOpen={isSignUpOpen} onClose={isSignUpClose} />
    </Stack>
    )

}