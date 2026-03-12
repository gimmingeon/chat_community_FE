// 1. 영어 → 한글 변환 테이블
export const PostTypeLabel = {
    nomal: "자유",
    question: "질문",
    project: "프로젝트",
    tip: "팁",
} as const

// 2. postType이 가질 수 있는 값의 타입
export type PostType = keyof typeof PostTypeLabel