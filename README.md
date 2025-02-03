# AAKAAR AI


### Tech stack used:
React, Node, Express, Gemini AI

# Features

## FAQ Model
### Dynamic Language Support:
1. Supports any language code (e.g., es, fr, hi). You can include more languages by just simply adding the language code in environmental variables or in configuration file.
2. Base language: English (en) is required. You can change the base language through configuration file.
3. Additional languages is added to database automatically through translation API

### API
1. Supports language selection via ?lang= query parameter. If the provided language is not available in configuration file, the selected language fallbacks to base language.
2. Additional languages are automatically added with post method.
   
    Method | API | Request | Response 
   --- | --- | --- | --- |
   POST | /api/upload | form-data with single csv file | SUCCESS if file is saved on the backend side
   GET | /api/analyze | - | GoogleGenerativeAI response on successful analyse

# Installation steps

  ### Prerequisites
  1. Node.js v16+ (LTS recommended)
  2. npm v8+
  3. Docker v20.10+
  4. Docker Compose v2.4+
  5. Google Gemini API Key

  ### Steps
  ## 1. Clone repository
  ```
  git clone https://github.com/avi-3012/ad-analyzer-ai.git
  cd ad-analyzer-ai
  ```
  ## 2. Install Dependencies in both Frontend and Backend directory
  ```
  npm install
  ```
  ## 3. Environment Configuration

  Create ```.env``` file in both frontend and backend folder. Add following api keys and configuration.
  ```
  # In frontend:
  REACT_APP_API_URL=http://localhost:5000

  # In backend:
  API_KEY=<your gemini api key>
  ```

  ## 6. Go to root folder and then build & run with Docker
  ```
  docker-compose up --build
  ```

### Example APIs (Working)

* https://ads-dashboard-ai.netlify.app/
* https://ads-dashboard-ai.netlify.app/upload

Note: The backend is hosted on free render service which goes in sleep mode after 30 minutes. It will take about 1-2 minutes when making a request for the first time in a while.

* The dashboard is only supported in desktop mode as I have not worked on the responsiveness of frontend for now.
* Gemini API might be not generating the expected output. OpenAI doesn't provide any free API keys, so I couldn't test it on it.


<img width="1210" alt="Screenshot 2025-02-04 at 3 52 02 AM" src="https://github.com/user-attachments/assets/122cd50a-6059-4afe-a81f-845645bbdead" />
