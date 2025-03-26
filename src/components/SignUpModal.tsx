import {
    Box, Button, Input,
    InputGroup, InputLeftElement, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    VStack
} from "@chakra-ui/react";
import {FaLock, FaUserAlt, FaEnvelope, FaUserSecret} from "react-icons/fa";
import SocialLogin from "./SocialLogin.tsx";

// 타입 스크립트로 인해 isOpen과 onClose가 뭔지 알려줘야함
interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// LoginModalPros를 넣어줌
export default function SignUpModal({isOpen:isSignUpOpen,onClose:isSignUpClose}:SignUpModalProps) {
    return (
        /*사용자에게 중요한 정보를 알리거나, 어떤 작업을 완료하도록 요구할 때 사용하는 팝업 창 (로그인 버튼으로 시작
            motionPreset은 이모션을 넣어줌 아래의 경우 오른쪽 방향으로 나타나고 사라짐)*/
        <Modal motionPreset={"slideInRight"} onClose={isSignUpClose} isOpen={isSignUpOpen}>
            {/*페이지를 조금 더 어둡게해서 Modal이 조금더 돋보이게 해줌 Modal이 뜰때 배경을 어둡게해줌*/}
            <ModalOverlay />
            {/*실제로 모달의 박스를 구성하고, 그 안에 Header, Body, Footer 등을 넣을 수 있는 컨테이너 역할*/}
            <ModalContent>
                {/*모달 창의 상단 제목 영역, 보통 여기에 텍스트나 아이콘 등을 넣어서 모달의 목적을 알려주는 역할 */}
                <ModalHeader>Sign Up</ModalHeader>
                {/*Modal을 끌 수 있게 해주는 버튼이 생김, 이게 없어도 다른 배경을 누르면 꺼짐*/}
                <ModalCloseButton/>
                {/*Modal안에 텍스트를 쓸 수 있음*/}
                <ModalBody>
                    {/*Input들이 서루 붙어 있기때문에 버티컬 로 조절(자동으로 여백이 어느정도 생김)*/}
                    <VStack>
                        <InputGroup>
                            {/*인풋 내부 왼쪽에 로고를 넣을 수 있고 여백도 자동으로 들어감*/}
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaUserSecret/>
                                </Box>} />
                            {/*variant = 클릭하기 전에는 회색 클릭하면 흰색으로 변함*/}
                            <Input variant={"filled"}  placeholder="Name" />

                        </InputGroup>

                        <InputGroup>
                            {/*인풋 내부 왼쪽에 로고를 넣을 수 있고 여백도 자동으로 들어감*/}
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaEnvelope/>
                                </Box>} />
                            {/*variant = 클릭하기 전에는 회색 클릭하면 흰색으로 변함*/}
                            <Input variant={"filled"}  placeholder="Email" />

                        </InputGroup>

                        <InputGroup>
                            {/*인풋 내부 왼쪽에 로고를 넣을 수 있고 여백도 자동으로 들어감*/}
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaUserAlt/>
                                </Box>} />
                            {/*variant = 클릭하기 전에는 회색 클릭하면 흰색으로 변함*/}
                            <Input variant={"filled"}  placeholder="Username" />

                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaLock/>
                                </Box>} />
                            {/*variant = 클릭하기 전에는 회색 클릭하면 흰색으로 변함*/}
                            <Input variant={"filled"}  placeholder="Password" />
                        </InputGroup>
                    </VStack>
                    <Button mt={4} colorScheme={"red"} width={"100%"}> Log in</Button>
                    <SocialLogin/>
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}