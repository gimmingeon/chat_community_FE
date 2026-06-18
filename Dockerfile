# node22 이미지 사용
FROM node:22

# 컨테이너 내부에 app 폴더를 만들어서 복사한 내용들을 넣는다
WORKDIR /app

# package.json 복사
COPY package*.json ./

# 필요한 패키지들 설치
RUN npm install

# 프로젝트들을 복사한다.
COPY . .

# npm run build 실행
RUN npm run build

# vite의 기본 포트
EXPOSE 5173

# 프론트엔드 실행
# npm run dev를 하면 localhost에서 열린다 docker 밖에서는 접근 불가
# 때문에 npm run dev -- --host를 사용해서 docker 밖에서 사용이 가능하도록 한다.
CMD [ "npm", "run", "dev", "--", "--host" ]