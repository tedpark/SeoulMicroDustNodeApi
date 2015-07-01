# SeoulMicroDustNodeApi
서울시 미세먼지 홈페이지
#http://cleanair.seoul.go.kr/air_city.htm?method=measure

## 기상 데이터는 민감한 자료이니 공개된 곳에 공개해야 한다면 관련 라이센스를 확인 하셔야 합니다. 주의 바랍니다. 

1. 서울시 미세먼지 홈페이지를 node 용 npm 'cheerio' 를 이용 파싱하는 node app 입니다.

2. clone 하신 후 npm install 하시고 iojs app.js 로 실행하시면 됩니다.

3. routes 폴더안의 index.js 의 //eq(0) 괄호안의 숫자를 0~5 까지 순차적으로 지역, 미세먼지, 초미세먼지 순으로 받아오게 됩니다.

4. 'use strict' 모드로 구동하는 iojs 혹은 node 최신버전으로 구동하셔야 합니다.

-이것은 스크린샷!

![MacDown Screenshot](https://github.com/tedpark/tedpark.github.io/blob/master/img/Dust/1.png?raw=true)
