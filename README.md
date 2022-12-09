# Getting Started with Today's Cook App

This project was refactored from [Today's Cook](https://github.com/kiziri/OSS-TeamProject1)\
This refactoring is featured by Kiziri.
To migrate React, Spring Boot from old project.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

### History

최초의 서비스는 웹 서비스로 특정 식품에 대한 정보를 검색할 수 있으며, 메뉴/레시피에 대해 검색 조건을 선택하여
추천을 받을 수 있는 서비스였습니다.\
해당 서비스는 사용 조건이 넓지 않았으며, 메뉴와 레시피, 식품에 대한 정보량이 적어 이용할 수 있는 정보가 적었습니다.
따라서 이를 개선하고자 우선적으로 직장인의 점심 메뉴 추천에 대한 서비스를 우선적으로 개선하고, 이후 저녁을 위한 레시피
추천 서비스를 개선하고 합니다.

### Main Service(1.0)
- 식품 검색 기능
    1. 알고자하는 식품의 이름을 정확하게 기입하여 검색
    2. 데이터베이스에서 검색하여 이름, 단위 칼로리, 맛, 대분류 정보를 사진과 함계 출력
    3. 검색한 식품에 대한 정보를 결과 페이지(result)로 이동하여 결과 출력
- 오늘의 추천 메뉴/레시피 기능
    1. 페이지를 호출 시, 데이터베이스에서 자동적으로 데이터 요정
    2. 요청하여 받아온 데이터를 카드 타이틀 형태로 하여금 페이지에 출력
- 메뉴 조건 검색 추천 기능
    1. 선택 조건을 라디오 박스로 구현하여 단일 선택하도록 함
    2. 선택 조건을 가지고 SQL문을 사용하여 데이터베이스에서 검색
    3. 검색하여 나온 결과를 결과 페이지를 호출하여 출력
- 레시피 조건 검색 추천 기능
    1. 선택 조건을 체크 박스로 구현하여 복수 선택 가능하도록 함
    2. 최대 8개까지의 선택만을 허용하도록 하였으며, 9개 이상 선택 시 경고창 출력하도록 함
    3. 선택한 조건을 데이터로 추출하여 SQL문을 사용하여 데이터베이스에서 검색
    4. 검색하여 나온 결과를 결과 페이지를 호출하여 출력

### Referenced By
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).