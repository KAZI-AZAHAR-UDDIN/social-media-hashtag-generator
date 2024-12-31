<h1 align="center">Social Media Hashtag Generator 🏷️</h1>

![Demo App](/screenshots/hashtag-generator-demo.png)

---

## **About the Project**  
The **Social Media Hashtag Generator** is a web application designed to help users create relevant and engaging hashtags for their social media posts. This project demonstrates expertise in full-stack development, showcasing clean, modern UI design and efficient backend architecture.

---

## **Screenshots**

### Input Form
![Input Form](/frontend/public/input-form.png)

### Generated Hashtags
![Generated Hashtags](/frontend/public/generated-hashtags.png)

---

## **Features**  

### **Core Functionality**
🚀 **Dynamic Hashtag Generation**: Enter a post description and instantly generate hashtags.  
📋 **Copy to Clipboard**: Click any hashtag to copy it for easy use.  
📱 **Responsive Design**: Works seamlessly on desktops and mobile devices.  
🎨 **Modern UI**: Built with TailwindCSS for a professional look and feel.

---

### **Backend Features**
🔌 **RESTful API**: Efficient endpoints for hashtag generation.  
🛡️ **Secure Backend**: Handles user input validation with error handling.  
📦 **MongoDB Integration**: Can be extended to store user-generated hashtags.

---

### **Frontend Features**
🎨 **React with Vite**: Fast and lightweight frontend for smooth user experience.  
✨ **Interactive Design**: Includes hover effects and animations for better UX.  
📱 **Mobile-Friendly**: Optimized for all screen sizes.

---

## **Technologies Used**  

| **Technology**        | **Purpose**                        |
|------------------------|------------------------------------|
| **React & Vite**       | Frontend framework and build tool |
| **TailwindCSS**        | Styling for a modern, responsive UI |
| **Node.js & Express**  | Backend framework for API development |
| **MongoDB**            | Database for potential data storage |
| **RESTful API**        | Communication between frontend and backend |

---

## **Resume-Worthy Skills Demonstrated**  
- **Full-Stack Development**: Built a complete MERN stack application.  
- **Responsive UI Design**: TailwindCSS for clean and professional layouts.  
- **REST API Design**: Developed robust and secure API endpoints.  
- **Problem-Solving**: Designed efficient hashtag generation logic.

---

## **API Documentation**

### **Base URL**: `http://localhost:5000/api/hashtags`

1. **POST `/generate`**  
   - **Description**: Generate hashtags based on input text.  
   - **Request Body**:
     ```json
     {
       "text": "Your post description here"
     }
     ```
   - **Response**:
     ```json
     {
       "hashtags": ["#your", "#post", "#description", "#here"]
     }
     ```

---

## **Project Setup**

### **Backend Setup**
1. Navigate to the backend folder:
   ```
   cd backend
   ```
Install dependencies:
  ``` 
      npm install
  ```

Start the backend server:
  ```
     nodemon server.js
  ```
    
### **Frontend  Setup**
1. Navigate to the frontend folder:
   ```  
   cd frontend
   ```
 Install dependencies:
    ```
      npm install
    ```
 Start the development server:
    ```  
      npm run dev
    ```
Open the app in your browser:
Visit the following URL:
    ```
      http://localhost:5173
    ```  
        
### Future Enhancements
💡 Dark Mode: Add support for light and dark themes.
💡 Trending Hashtags: Fetch popular hashtags from APIs like Twitter.
💡 User Authentication: Allow users to save and reuse their hashtags.
💡 Real-time Suggestions: Provide live hashtag suggestions while typing.

### Key Highlights
🚀 Dynamic Features: Real-time hashtag generation with modern UI.
🛠️ Tech Expertise: MERN stack implementation showcasing full-stack skills.
📈 Scalable Design: Built with extensibility and real-world use cases in mind.


### Author
👤 Kazi Azahar Uddin
Full-Stack Developer | Open to work

📧 Email: kazirimo123@gmail.com
📂 GitHub: [KAZI-AZAHAR-UDDIN](https://github.com/KAZI-AZAHAR-UDDIN)
🌐 LinkedIn: [Kazi Azahar Uddin](https://www.linkedin.com/in/kazi-azahar-uddin-8b879b205/)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


