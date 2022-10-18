# Side-Project

애니메이션을 원하는 방식에 따라 검색하고 관련 정보를 얻을 수 있는 서비스

[기획 및 Task 관련 노션 링크](https://www.notion.so/qmit1201/2-9-28-10-18-c888bc2bd1084a9bb513e89ae38323b5)

## 실행 방법

```
  yarn install
  yarn dev
```

## 디렉토리 구조

```json
side-client
├─ pages // 라우터 및 API 로직 관리
├─ components
│ ├─ common // 공용으로 사용되는 컴포넌트 관리
│ ├─ detail
│ ├─ mainpage
├─ hooks // query 관리
├─ styles // 전역 스타일 관리
├─ utils // 유틸 함수 관리
```

## 사용 기술

- Language : [TypeScript](https://www.typescriptlang.org/)
- Data Fetching : [Apollo Client](http://apollographql.com/docs/react/)
- Libaray : [React(v17)](https://ko.reactjs.org/)
- Framework : [Next.js(v12)](https://nextjs.org/)
- Style : [Emotion](https://emotion.sh/docs/introduction)
- Chart : [Chart.js](https://www.chartjs.org/)
- Date : [Moment.js](https://momentjs.com/)
- Design Pattern : [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## 기능

- 메인 페이지

  - 각 애니메이션 카드 형태 UI로 제공
    - 각 애니메이션 카드는 스켈레톤 UI 적용
    - 각 애니별 이미지 + 제목 제공
    - hover시, 간략한 정보(제목, 장르, 평점)를 팝업으로 제공
  - 애니메이션 렌더링 : Infinity Scroll
    - page 당 per page(50) 고정
  - 필터 기능
    - 장르, 스트리밍 사이트, 방영 상태, 정렬 (컨텐츠 부분 상단에 고정)
  - 애니메이션 검색 기능

- 상세 페이지
  - 애니메이션 상세 정보 제공
    - 기본 정보 : 사진, 제목, 내용
    - 추가 정보 : 방영여부, 시작 및 종료 날짜, 에피소드 갯수, 장르, 평균 평점
    - 장르 선택 시 해당 장르로 필터링 되는 리스트로 이동
  - 연관 애니메이션 제공
    - 커버 이미지, 제목
    - hover시, 간략한 정보(제목, 장르, 평점)를 팝업으로 제공
  - 차트(평점, 상태 분포 차트)
    - 평점 : 막대 차트
    - 상태 : 도넛 차트
  - 추천 애니메이션 정보 제공
    - hover시, 간략한 정보(제목, 장르, 평점)를 팝업으로 제공

## Convention

```
Commit & PR Prefix
feat : 새로운 기능 개발에 대한 커밋
bug : 버그 수정에 대한 커밋
fix : 기능 및 UI 수정에 대한 커밋
refactor : 코드 리팩토링에 대한 커밋
config : 개발 환경 설정 및 패키지 설치에 대한 커밋
test : 테스트 코드 수정에 대한 커밋
build : 빌드 관련 파일 수정에 대한 커밋
docs : 문서 수정에 대한 커밋
style : 코드 스타일 혹은 포맷 등에 관한 커밋

Commit Rule
1. 커밋 prefix는 전체 대문자로 작성
2. 커밋 제목은 한글로 작성
ex)FEAT : add post

PR Rule
1. PR 제목의 prefix는 대괄호로 감싼다
2. PR 본문은 템플릿을 따른다
ex)[FEAT] : add post

Merge Rule
1. 모든 comment가 resolved된 경우 merge 한다.
2. merge시, 기존 branch는 삭제한다.

Review Rule
1. 구두로 이야기된 내용들에 대해서도 comment를 작성한다.
2. 변경사항에 대해 이해가지 않는 부분에 대해서 comment를 작성한다.
3. 리뷰 이후 반영된 변경사항에 대한 comment를 작성한다.

ETC Rule
1. 컴포넌트 파일 명은 kebab-case로 작성한다. -> product-list
2. 1개요소를 감싸면 ...Wrapper, 2개 이상의 요소를 감싸면 ...Container로 작성한다.

Branch Rule
main → develop → [prefix]/branch name
task 별로 branch 생성 후 작업
```

## PR Template

```markdown
## 개요

> <!-- 작업 목적 및 개요 작성 -->

## 작업 내용

- [ ] <!-- 작업 내용 작성 -->
- [ ] <!-- 작업 내용 작성 -->

## 참고사항

<!-- 참고사항 작성 -->
```

## 참고 자료

- https://anilist.co
- https://studio.apollographql.com/sandbox/explorer
- https://yrnana.dev/post/2022-02-04-enum-union-type
- https://github.com/remarkablemark/html-react-parser#readme
- https://github.com/cure53/DOMPurify
- https://blinders.tistory.com/m/93?category=636275
