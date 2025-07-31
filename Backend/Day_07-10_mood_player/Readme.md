# 😑🎵 Mood Player

- **A `mood player` is an intelligent music player application that automatically selects and plays songs based on the user's current mood, often detected using technologies like facial expression analysis or camera-based emotion detection. The main objective is to enhance the music listening experience by tailoring playlists to the listener's emotional state.**

# 🛠️ Tech Stack

## 🧑‍💻 Frontend Overview

- **Frontend Library:** React.js enables modular, component-based development for a dynamic and responsive application.

- **Styling:** Tailwind CSS provides a utility-first approach to styling, making it easy to create a modern, clean UI with minimal CSS code.

- **Emotion Detection:** face-api.js is an advanced JavaScript library that uses TensorFlow.js under the hood to detect faces and classify emotions using real-time webcam input, allowing the player to select music according to the user's current mood.

## 💻 Backend Overview

- **Server & App Setup:** You begin by setting up a backend server and structuring the core application, typically using Node.js and Express.

- **Routes:** You define RESTful routes to manage requests, such as uploading songs, fetching songs by mood, and handling user interactions.

- **Database Connection:** MongoDB is connected to persist music metadata and mood information.

- **Storing Music Data:**

  - Music files and their associated images are uploaded to ImageKit (a cloud media storage solution).

  - After uploading, you obtain a public link to each file/image from ImageKit.

  - You then save song details in MongoDB, including:

        -  Title

        - Artist

         -  Image Link (from ImageKit)

         - Mood

- **Mood-Based Retrieval:** Implements an API to fetch songs based on the mood field stored in the database, making responses tailored to user emotions.

## 🤝 Frontend & Integration

- **Axios for Communication:** The frontend utilizes Axios to send HTTP requests to the backend, retrieving song data (filtered by mood) and passing it into components via state and props.

- **Facial Expression Component:** Uses React with face-api.js to detect the user’s emotions in real time. When a mood is detected, it triggers a request to the backend to fetch corresponding songs.

- **MoodSong Component:** Receives the list of songs (as props or from state) and iterates over them to display recommendations to the user.

## 📈 Workflow Summary

- User’s facial expression is detected via webcam in the Facial Expression component (using face-api.js).

- The detected mood triggers an Axios call from the frontend to the backend.

- The backend queries MongoDB for songs matching the mood and responds with relevant details (title, artist, image link, etc.).

- The frontend’s MoodSong component receives and displays these songs, creating a seamless, mood-adaptive listening experience.

## 📦 Clone This Repository

- To get started locally, clone the repository using the following command in your terminal:

  ```
  git clone https://github.com/code-with-divyanshu/fullstack-dsa-mastery-cohort.git
  ```

- Then navigate to the appropriate subdirectory:

  ```
  cd fullstack-dsa-mastery-cohort/Backend/Day_07-10_mood_player
  ```

## ⭐ Star This Repository

- If you find this project interesting or helpful, please consider giving it a star on GitHub! This helps the project reach more users and encourages further development.

- On GitHub, click the ⭐ button at the top right of the repository page.

---
