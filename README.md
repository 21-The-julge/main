##  더 줄게 웹사이트 만들기 
 
<br><br><br><br><br><br><br><br>

## 📚목차

<br><br><br><br><br><br><br><br>



- 팀원 소개
  
<br><br>

- 사용한 기술 스택
  
<br><br>

- 작업 과정
  
<br><br>

- 서비스 구성

<br><br><br><br><br><br><br><br>

### 팀원 소개

<br><br><br><br>

@suzinxix - 길수진
팀원: button, filter
공고 리스트 페이지 - 로그인, 로그아웃 구분

<br><br>

@bokeeeey - 김보경
조장: 컬러, 폰트, 폴더 구조, input
로그인, 회원가입 페이지
<br><br>

@changmin6362 - 김창민
팀원: GNB, Notification Modal, API 커스텀 훅 제작, zustand 커스텀훅 제작, 무한스크롤 구현
내 프로필 등록 , 공고 등록 페이지
<br><br>

@smb0123 - 심민보
팀원: post, Modal, toast-라이브러리 사용
가게 정보 상세, 내 프로필 상세 페이지
<br><br>

@smimdla0205 - 이상민
팀원: table, pagination, 공고 상세
공고 상세 페이지 - 로그아웃, 로그인, 사장님, 알바 구분
<br><br><br><br><br><br><br><br>


### 🏝 사용한 기술 스택

<br><br><br><br>


## 기술 스택
 - react
 - typescript
 - Next.js
 - tanstack-query
 - scss
 - className


<br><br><br><br>



## 라이브러리
 - react-hook-form
   - 폼을 편하게 다루기 위해 사용

 - zodResolver:
   - 훅폼에 조드를 적용하기 위해 사용

 - date-fns:
   - 날짜 인풋을 편하게 구현하기 위해 사용

 - react-toastify:
   - 토스트 구현을 편하게 하기 위해 사용

 - react-intersection-observer:
   -무한 스크롤 구현을 위해 사용

 - zustand:
   - state의 전역 관리를 위해 사용



<br><br><br><br><br><br><br><br>


## 작업 과정


### 로딩 처리
![Wondershare UniConverter 13_000001](https://github.com/21-The-julge/the_julge/assets/149885312/43abb389-5aa3-4db2-b428-f5b7de6d5923)

<br><br><br><br>

- ### 공고 리스트 페이지 (주소: /)
<br><br>
<img width="1440" alt="스크린샷 2024-04-30 오전 11 42 01" src="https://github.com/21-The-julge/the_julge/assets/149885312/a1da2d93-a1ec-408a-9f2e-6f65ced5de9d"><img width="1435" alt="스크린샷 2024-04-30 오전 11 33 26" src="https://github.com/21-The-julge/the_julge/assets/149885312/c1fc173b-8677-4dd5-acab-635f3544c35d">
<img width="1440" alt="스크린샷 2024-04-30 오전 11 33 43" src="https://github.com/21-The-julge/the_julge/assets/149885312/e9dcb690-7ebd-4834-9363-2c140de8b834">
<img width="1440" alt="스크린샷 2024-04-30 오전 11 42 53" src="https://github.com/21-The-julge/the_julge/assets/149885312/f43361f1-00a3-4856-b03f-e468e56b5bda">
GNB 조건부 렌더링
<img width="1440" alt="스크린샷 2024-04-30 오전 11 43 30" src="https://github.com/21-The-julge/the_julge/assets/149885312/f4508ffc-8275-49aa-b597-dfc01c220c15"><img width="1440" alt="스크린샷 2024-04-30 오전 11 44 35" src="https://github.com/21-The-julge/the_julge/assets/149885312/488bb4f0-6e09-4d6a-8190-35e398d0a5db">
<img width="1440" alt="스크린샷 2024-04-30 오전 11 45 00" src="https://github.com/21-The-julge/the_julge/assets/149885312/9859ebb2-429e-40fa-b9c8-512c99ec7439">
<img width="1439" alt="스크린샷 2024-04-30 오전 11 46 20" src="https://github.com/21-The-julge/the_julge/assets/149885312/064b71a2-2721-4a00-a719-d87a45caaaa5">
<img width="352" alt="스크린샷 2024-04-30 오전 11 36 51" src="https://github.com/21-The-julge/the_julge/assets/149885312/0c916b3e-404a-43ce-ba3d-7ceb64515a12">
<img width="396" alt="스크린샷 2024-04-30 오전 11 36 20" src="https://github.com/21-The-julge/the_julge/assets/149885312/c1b1ab5a-e7cf-460d-9797-d8f090c2d182">
<img width="816" alt="스크린샷 2024-04-30 오전 11 37 31" src="https://github.com/21-The-julge/the_julge/assets/149885312/b3a86ab8-de1c-403f-b649-06ff550bb541">




<br><br>
- ### 로그인 페이지 (주소: /login)
<br><br>
<img width="1440" alt="스크린샷 2024-04-30 오전 11 47 35" src="https://github.com/21-The-julge/the_julge/assets/149885312/5fb28b5e-27fa-4c7a-98a6-e121a2656403"><img width="467" alt="스크린샷 2024-04-30 오전 11 49 05" src="https://github.com/21-The-julge/the_julge/assets/149885312/28f7d872-fa76-4a17-ba85-6849d0c2f919">
![Wondershare UniConverter 13_000002](https://github.com/21-The-julge/the_julge/assets/149885312/580116b8-5158-4613-ac4c-90dcf175b9e9)





<br><br>
- ### 회원가입 페이지 (주소: /sign-up)
<br><br>
<img width="1440" alt="스크린샷 2024-04-30 오전 11 52 05" src="https://github.com/21-The-julge/the_julge/assets/149885312/0e6596c7-5fcd-4d8c-a441-d363f67d2bbb">
<img width="1437" alt="스크린샷 2024-04-30 오전 11 59 33" src="https://github.com/21-The-julge/the_julge/assets/149885312/34c0784c-b4e5-4135-ba58-2986b54d7032">


<br><br>
- ### 가게 정보 상세 페이지 (주소: /shops)
<br><br>

<img width="1440" alt="스크린샷 2024-04-30 오전 11 53 48" src="https://github.com/21-The-julge/the_julge/assets/149885312/9d4ff659-9de4-4b2b-959d-3cc8872af9d3">

![Wondershare UniConverter 13_000003](https://github.com/21-The-julge/the_julge/assets/149885312/746f7137-e5e0-4eb6-a582-c235e67b0438)


무한 스크롤


<br><br>
- ### 가게 정보 등록 페이지 (주소: /registor-my-shop)
<br><br>
<img width="1440" alt="스크린샷 2024-04-30 오후 12 01 50" src="https://github.com/21-The-julge/the_julge/assets/149885312/2f75a7de-f454-47c3-a953-648c98e20ab7">


<img width="1440" alt="스크린샷 2024-04-30 오후 12 04 31" src="https://github.com/21-The-julge/the_julge/assets/149885312/9ecb5a34-a6c2-4caf-bc4d-9fd30cd3a2e6">


<br><br>
- ### 가게 정보 변경 페이지 (주소: /edit-my-shop)
<img width="1440" alt="스크린샷 2024-04-30 오후 12 13 57" src="https://github.com/21-The-julge/the_julge/assets/149885312/a66dbb6b-44f7-4d49-999d-13a4b12b35c5">

<br><br><img width="1440" alt="스크린샷 2024-04-30 오후 12 07 18" src="https://github.com/21-The-julge/the_julge/assets/149885312/0b93c646-3f8b-463a-baa0-a6b5c5461f27">

<img width="1440" alt="스크린샷 2024-04-30 오후 12 07 32" src="https://github.com/21-The-julge/the_julge/assets/149885312/58ad7f08-69b5-4511-96cd-ebd51eff045f">



<br><br>
- ### 프로필 정보 상세 페이지 (주소: /users)
<br><br>
<img width="1440" alt="스크린샷 2024-04-30 오후 12 12 48" src="https://github.com/21-The-julge/the_julge/assets/149885312/fdb74ce9-624e-4e28-8fcb-fe05044be69a">

<img width="1440" alt="스크린샷 2024-04-30 오후 12 11 10" src="https://github.com/21-The-julge/the_julge/assets/149885312/9452c910-278b-46f0-a81c-c139de8c0a50">
<img width="1440" alt="스크린샷 2024-04-30 오후 12 11 29" src="https://github.com/21-The-julge/the_julge/assets/149885312/f379f0f8-647b-436d-a55a-06cf8b0a843f">



<br><br>
- ### 프로필 정보 등록 페이지 (주소: /users/post-profile)
<br><br>

<img width="1440" alt="스크린샷 2024-04-30 오후 12 18 23" src="https://github.com/21-The-julge/the_julge/assets/149885312/65f9ae92-f58f-4735-bc75-3d44f1c14fc7">


<br><br>
- ### 프로필 정보 변경 페이지 (주소: /users/{userId}/edit)
<br><br>
<img width="1440" alt="스크린샷 2024-04-30 오후 12 19 30" src="https://github.com/21-The-julge/the_julge/assets/149885312/479ac790-3e52-4ad6-924f-73f2bea4bde0">


<br><br>
- ### 공고 정보 상세 페이지 (주소: /shops/{shopId}/notices/{noticeId})
<br><br>
<img width="1440" alt="스크린샷 2024-04-30 오후 12 20 13" src="https://github.com/21-The-julge/the_julge/assets/149885312/12a49125-125a-4a4a-8aea-60015f625c3a">

<img width="1440" alt="스크린샷 2024-04-30 오후 12 20 23" src="https://github.com/21-The-julge/the_julge/assets/149885312/120db1c5-1cc2-4c58-9577-e7fe38e8c2a8">


<br><br>
- ### 공고 정보 등록 페이지 (주소: /shops/post-notice)
<br><br>
<img width="1440" alt="스크린샷 2024-04-30 오후 12 22 19" src="https://github.com/21-The-julge/the_julge/assets/149885312/d7c833c3-4aeb-447b-acd1-85823145f1af">



<br><br>
- ### 공고 정보 변경 페이지 (주소: /shops/{shopId}/notices/{noticeId}edit)
<br><br>

<img width="1440" alt="스크린샷 2024-04-30 오후 12 24 33" src="https://github.com/21-The-julge/the_julge/assets/149885312/3fa5b176-c91b-4c28-827d-7ff67f8c68b1">


<br><br><br><br>

  




