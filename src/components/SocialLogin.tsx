import {Box, Button, Divider, HStack, Text, VStack} from "@chakra-ui/react";
import {FaComment, FaGithub} from "react-icons/fa";

export default function SocialLogin() {
    return (
        <Box mb={4}>
            <HStack my={8}>
                {/*줄을 가로,세로줄 가능   ------<Text>------이런식으로 사용됨*/}
                <Divider />
                {/*as={}를 쓰면 기본 HTML 태그 처럼 사용됨*/}
                <Text
                    textTransform={"uppercase"}
                    color={"gray.500"}
                    fontSize={"xs"}
                    as={"b"}>
                    Or
                </Text>
                <Divider />
            </HStack>
            <VStack>
                <Button w={"100%"} leftIcon={<FaGithub/>} colorScheme={"blue"}>Continue with Github</Button>
                <Button w={"100%"} leftIcon={<FaComment/>} colorScheme={"yellow"}>Continue with Github</Button>
            </VStack>
        </Box>
    )
}