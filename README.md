# 🎓 Learning Management System (LMS)

A modern full-stack Learning Management System built with **Spring Boot**, **Next.js**, and **PostgreSQL**.  
This project provides an end-to-end solution for managing courses, users, and online learning activities.

---

## 🏗️ Tech Stack

### 🖥️ Frontend
- **Framework:** Next.js (React, TypeScript)
- **Styling:** Tailwind CSS
- **State Management:** Context API / Zustand (optional)
- **API Communication:** Axios
- **Build Tool:** Vite / Next build system

### ⚙️ Backend
- **Framework:** Spring Boot 3
- **Language:** Java 17+
- **ORM:** Hibernate / JPA
- **Database:** PostgreSQL
- **Build Tool:** Maven
- **Security:** Spring Security (JWT / Basic Auth)

---

## 🗃️ Project Structure

LearningManagementSystem/
├── backend/ # Spring Boot API
│ ├── src/main/java/... # Java source code
│ ├── src/main/resources/ # application.yml / properties
│ └── pom.xml
│
├── frontend/ # Next.js client app
│ ├── src/ # React components, pages
│ ├── public/ # Static assets
│ └── package.json
│
└── .github/
└── workflows/ # CI/CD (GitHub Actions, Qodana)

---

## ⚡ Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/TruongDev24/LearningManagementSystem.git
cd LearningManagementSystem

2️⃣ Setup Database (PostgreSQL)

Install PostgreSQL and ensure it's running on port 5432.
Create a database named lms.
Update your credentials in:
backend/src/main/resources/application.properties

3️⃣ Run Backend
cd backend
./mvnw spring-boot:run

Server will start at 👉 http://localhost:8080

4️⃣ Run Frontend
cd frontend
npm install
npm run dev

Frontend will run at 👉 http://localhost:3000


🧩 Features

✅ User authentication & authorization
✅ Course management (CRUD)
✅ Enrollment system
✅ Progress tracking
✅ RESTful API integration
✅ Responsive UI

🚀 CI/CD - GitHub Actions

The project uses GitHub Actions for:
Code quality check via Qodana
Automated build for both frontend and backend
Test execution and deployment (future setup)
See workflow files in:
.github/workflows/

🧠 Qodana (Code Quality)

Qodana is integrated to automatically analyze your code for potential issues.
To run it locally:
docker run -it --rm \
  -v $(pwd):/data/project \
  jetbrains/qodana-jvm-community


🤝 Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/new-feature)
3. Commit your changes (git commit -m 'Add new feature')
4. Push to branch (git push origin feature/new-feature)
5. Open a Pull Request 🚀

📜 License

This project is licensed under the MIT License — see LICENSE
 for details.

💬 Author

👨‍💻 TruongDev24
🌐 GitHub Profile

📧 Contact: truonglevan496@gmail.com
