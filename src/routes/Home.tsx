import {
    Grid,
} from "@chakra-ui/react";

import Room from "../components/RoomList.tsx";
import RoomSkeleton from "../components/RoomSkeleton.tsx";
import {useQuery} from "@tanstack/react-query";
import {getRooms} from "../api.ts";

interface IPhotos{
    pk:number;
    file:string;
    description:string;
}

// room이(API) 뭔지 모르기 때문에 여기에 따로 알려줘야함

interface IRoom{
    pk: number;
    name: string;
    country: string;
    city: string;
    price: number;
    review_rating: number;
    is_owner: boolean;
    photos: IPhotos[]
}

export default function Home(){
    // fetch한 결과물을 기억하는 작업의 키로 사용됨
    const {isLoading,data} = useQuery<IRoom[]>({
        queryKey:["rooms"],
        queryFn:getRooms,
    });
    // templateColumns 는 CSS 타입을 써야함
    // 서로의 gap 을 10rem 으로 줌
    // column 을 주는데 "200px","200px" 이런식으로 할 수도 있지만
    // mt top의 margindmf 10을 줌, px x축의 padding을 10씩 줌
    return <Grid
        mt={10}
        /* 반응형사이즈- 그냥 패딩을 을 줬을때 작은화면 기준의 경우 너무 넓은 패딩을 갖게되므로
        * 모바일화면의 경우는 10
        * 일반 큰화면은 40으로 크기로 설정 사용가능
        * 사이즈 별로 사용가능 sm~lx  */
        px={{
            base:10,
            lg:40,
        }}
        columnGap={4}
        rowGap={8}
        /*반응형 으로 만들기 위해
        * 작은화면의 경우는 1fr(단독으로 쓸경우 그 넓이를 혼자 다써라),
        * 일반 큰화면은 1fr 1fr 으로 설정 base(모바일),lg(큰화면) 사용가능
        * 사이즈 별로 사용가능 sm~lx
        * 5개를 1fr 비율로 (1fr,1fr,1fr...이런의미)*/
        templateColumns={{
            sm:"1fr",
            md:"repeat(2,1fr)",
            lg:"repeat(3,1fr)",
            xl:"repeat(4,1fr)",
            "2xl":"repeat(5,1fr)",
        }}
    >

        {isLoading ? (
            <>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
                <RoomSkeleton/>
            </>
        ):null}
        {data?.map((room)=>(
            <Room
            key={room.pk}
            pk={room.pk}
            imageUrl={room.photos[0].file}
            name={room.name}
            review_rating={room.review_rating}
            city={room.city}
            country={room.country}
            price={room.price}
            />
        ))}
    </Grid>
}