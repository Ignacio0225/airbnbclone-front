import {Box, Button, Grid,
    HStack, Image, Text,
    useColorModeValue, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaRegHeart, FaStar} from "react-icons/fa";

interface IRoomsProps {
    imageUrl: string;
    name: string;
    city: string;
    country: string;
    price: number;
    review_rating: number;
    pk: number;
}

export default function Room({
    pk,
    imageUrl,
    name,
    city,
    country,
    price,
    review_rating,
    }: IRoomsProps) {
    const gray = useColorModeValue("gray.600", "gray.300");
    return (
        // 이 Link 는 리엑트 라우트로 설정
        <Link to={`/rooms/${pk}/`}>
        {/*flex-start = 왼쪽부터 시작 (정렬됨)*/}
        {/*spacing = 위아래의 거리를 좁혀줌 여기서는 안씀 다같이 가까워짐*/}
        <VStack alignItems={"flex-start"}>
            {/*border-radius를 사용해도 되지만 rounded로 일관된 모양을줌, overflow를 꼭 써줘야 작동
            position relative를 쓰면 내 공간은 그대로지만 이동가능(부모를따라 움직임) */}
            <Box position={"relative"} overflow={"hidden"} mb={2} rounded={"3xl"}>
                <Image
                    minH={"280"}
                    src={imageUrl}
                />
                {/*cursor = {"pointer"}로 동일 하게 가능 , variant={"unstyled}스타일이 없다는것 */}
                <Button variant={"unstyled"} position={"absolute"} top={0} right={0} color={"white"}>
                    <FaRegHeart size={20}/>
                </Button>
            </Box>
            {/*VStack에서 spacing을 쓰지 않고 박스 안에 넣어서 가깝게만듬*/}
            <Box>
                {/*templateColumns을 통해서 heading과 HStack을  4:1로 비율을 조절
                repeat(5,1fr) 이런식으로 반복가능
                (5개씩,1fr(같은 크리고 가능한 많은공간)) = 1fr을 5번 반복 하라는말*/}
                <Grid gap={2} templateColumns={"4fr 1fr"}>
                    {/*noOfLine = 텍스트를 한줄로 설정*/}
                    <Text as={"b"} noOfLines={1} fontSize={"md"}>
                        {name}
                    </Text>
                    {/*마우스 오버 를 하면 색상이 변함*/}
                    <HStack _hover={{
                        color: "red.300"
                    }} spacing={1}>
                        <FaStar size={15}/>
                        <Text>{review_rating}</Text>
                    </HStack>
                </Grid>
                <Text fontSize={"sm"} color={gray}>
                    {city},{country}
                </Text>
            </Box>
            <Text fontSize={"sm"} color={gray}>
                {/*as={}를 쓰면 기본 HTML 태그 처럼 사용됨 b 는 볼드*/}
                <Text as={"b"}>${price}
                </Text>/ night
            </Text>
        </VStack>
        </Link>
    )
}