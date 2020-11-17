# 동국대학교 공개 SW 프로젝트 
> 2020-2-OSSP1-WebRTC-2
> WebRTC를 이용한 화상 회의 시스템 구현 프로젝트

## 현재 사용중인 기술
* 프론트엔드 : React 기반 HTML, CSS, Javascript, Node.js
* 백엔드 : Node.js
* WebRTC 중계 서버 : ngrok (추후 Kutento나 mediasoup 도입 예정)
 
 ## 사용법
 > Git 저장소의 파일 clone (master branch 기준)
  ```
  $ git clone https://github.com/CSID-DGU/2020-2-OSSP1-WebRTC-2.git
 ```
 > 서버 설정
 ### ngrok 포트 실행
 ```
 $ ./ngrok http 8080
 ```
 ### 실행 후 http 링크값을 Cam.js의 serviceIP로 변경
 ```
 // DONT FORGET TO CHANGE TO YOUR URL
 this.serviceIP = 'https://923f13505655.ngrok.io/webrtcPeer'
 ``` 
 > 서버 실행
 ### 경로 이동 후 npm 설치
 ```
 $ cd conference
 $ npm install  
 ```
 ### 서버 
 ```
 npm run build
 ```
 
 ### 웹 페이지에서 serviceIP 입력하여 실행

 ## 팀원
 * 김민수
 * 이영서
 * 박지호
 * 이은영
 * 권지형
 * 이시은
