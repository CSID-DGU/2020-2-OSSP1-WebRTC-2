# 동국대학교 공개 SW 프로젝트 
> 2020-2-OSSP1-WebRTC-2
> WebRTC를 이용한 화상 회의 시스템 구현 프로젝트  
#

## 현재 사용중인 기술
* 프론트엔드 : React 기반 HTML, CSS, Javascript, Node.js
* 백엔드 : Node.js
* WebRTC 중계 서버 : ngrok (추후 Kutento나 mediasoup 도입 예정)  
#
 
 ## 사용법
 ### Git 저장소의 파일 clone (master branch 기준)
  ```
  $ git clone https://github.com/CSID-DGU/2020-2-OSSP1-WebRTC-2.git
 ```  
 #
 ### 서버 설정
 > ngrok 포트 실행
 ```
 $ ./ngrok http 8080
 ```  
 #
 > 실행 후 http 링크값을 Cam.js의 serviceIP로 변경
 ```
 // DONT FORGET TO CHANGE TO YOUR URL
 this.serviceIP = 'https://923f13505655.ngrok.io/webrtcPeer'
 ```   
 #
 ### 서버 실행  
 #
 > 경로 이동 후 npm 설치
 ```
 $ cd conference
 $ npm install  
 ```  
 #
 
 > 서버 빌드 
 ```
 $ npm run build
 ```  
 #
 
 ### 웹 페이지에서 serviceIP 입력하여 실행  
 #

 ## 팀원
 * 김민수
 * 이영서
 * 박지호
 * 이은영
 * 권지형
 * 이시은

https://scshim.tistory.com/6


![kurento localhost8443](https://user-images.githubusercontent.com/46514182/100539139-5efe9c80-3202-11eb-82da-04f855d4e118.png)

![kurento start](https://user-images.githubusercontent.com/46514182/100539142-6160f680-3202-11eb-86ed-a1e6ed6c8269.png)


##추가내용
```
npm 업데이트 방법 : sudo npm install npm@latest -g

srp 이용해서 서버에 올리기 scp -r -i pClass.pem /Users/rush-k/Desktop/pclass/build/* ubuntu@ec2-15-165-236-0.ap-northeast-2.compute.amazonaws.com:/var/www/html
```
![issue](https://user-images.githubusercontent.com/46514182/101172488-3ebe4b80-360f-11eb-970e-b67dbff55a0b.png)
![node server](https://user-images.githubusercontent.com/46514182/101172504-4120a580-360f-11eb-8184-a6c28476cb0a.png)
![npm install kurento-client](https://user-images.githubusercontent.com/46514182/101172537-4d0c6780-360f-11eb-8d49-e39290ee83e6.png)
