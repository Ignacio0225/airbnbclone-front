import {Heading, VStack, Text,Button,} from "@chakra-ui/react";
import {Link} from "react-router-dom"

export default function NotFound () {
    return <VStack bgColor={"gray.100"} justifyContent={"center"} minHeight={"100vh"}>
        <Heading>Page not Found.</Heading>
        <Text>Is seems that you`re lost</Text>
        {/*Link는 react-router-dom의 링크로 실행 했음*/}
        <Link to={"/"}>
            <Button colorScheme={"red"} variant={"link"}>Go home &rarr; </Button>
        </Link>


    </VStack>;
};