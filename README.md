# 📱 Phonebook App (Final Project)

![React](https://img.shields.io/badge/React-18.2.0-blue) ![Redux](https://img.shields.io/badge/Redux-latest-purple) ![Material-UI](https://img.shields.io/badge/MUI-latest-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 🌟 Overview

A modern, feature-rich contact management application built with React and Redux. This application provides a secure and intuitive interface for managing your contacts with real-time search and filtering capabilities.

## ✨ Features

### 🔐 Authentication

- Secure user registration and login
- Protected routes for authenticated users
- Persistent authentication state

### 📋 Contact Management

- Add new contacts with name and phone number
- Edit existing contact information
- Delete contacts
- View contact list with beautiful card layout

### 🔍 Advanced Search & Filtering

- Real-time search by name or phone number
- Sort contacts by:
  - Creation date
  - Name
  - Phone number
- Case-insensitive search

### 💅 Modern UI/UX

- Material-UI components
- Responsive design
- Beautiful card-based layout
- Loading states and animations
- Toast notifications for actions

## 🛠 Technical Stack

- **Frontend**: React 18
- **State Management**: Redux Toolkit
- **UI Framework**: Material-UI
- **Form Handling**: Formik + Yup
- **Routing**: React Router
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

## 🔧 Installation

1. Clone the repository

```bash
git clone [repository-url]
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## 🚀 Usage

1. Register a new account or login with existing credentials
2. Navigate to the contacts page
3. Use the "Add Contact" button to create new contacts
4. Search contacts using the search bar
5. Sort contacts using the sort dropdown
6. Edit or delete contacts using the respective buttons

## 🔒 Security

- JWT-based authentication
- Protected routes
- Secure API endpoints
- No sensitive data exposure

## 🌐 API Integration

The application integrates with a RESTful API at `https://connections-api.goit.global` for:

- User authentication
- Contact CRUD operations
- Data persistence
