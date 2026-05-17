import type { MyPost } from "./MyPost"
import type { MySkills } from "./MySkills"

export interface MyInfoType {
    id: number,
    email: string,
    nickname: string
    skills: MySkills[],
    post: MyPost[]
}