import axios from "axios";


const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/api/v1/"
})

// export async function getRooms(){
//     const response = await instance.get(`rooms/`);
//     return response.data;
// }

// 이렇게 쓰는게 더 간단함
export const getRooms = () => instance.get(`rooms/`).then(
    response=> response.data);

export const getRoom = (something) => {
    console.log(something);
    return instance.get(`rooms/10`).then((response)=> response.data);
};
