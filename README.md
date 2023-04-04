# Nawy Property Finder App
## HOW TO RUN

### Frontend:
1. cd ./Front
2. npm run dev
3. Change the BASE_URL in the .env file with url of your backend server (by default it's on 'http://localhost:8080/')
4. Server will be live on http://localhost:3000

### Backend:
1. cd ./Back
2. npm run dev
3. By Default Server will be live on http://localhost:8080 or you can change port and Db url in the .env file

You can find a file called api-collection.rest in ./Back
that you can download VScode extension called 'REST CLIENT' that you can test the APIs easily with

### Mobile:
1. cd ./Mobile/nawypropfind
2. In the APP.tsx file change the variable 'serverURL' with your backend's server ip & port if needed
3. npx expo start
4. A QR code will be displayed on the terminal
5. Download Expo Go app on your mobile device
6. Open the app and scan the Qr code showing on the terminal