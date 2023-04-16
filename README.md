# Twitter Clone Application

A Twitter clone application built with Next.js, Tailwind CSS, Prisma, and MongoDB.

![image](https://user-images.githubusercontent.com/86361885/232347293-8e42b734-8e72-4740-87fc-b92c542f25e9.png)

![image](https://user-images.githubusercontent.com/86361885/232347386-85ee04b4-cbcd-4c67-847a-73fd49b32716.png)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Authentication System](#authentication-system)
- [Notification System](#notification-system)
- [Image Upload](#image-upload)
- [Prisma ORM with MongoDB](#prisma-orm-with-mongodb)
- [Responsive Layout with Tailwind CSS](#responsive-layout-with-tailwind-css)
- [1 To Many Relations (User - Post)](#1-to-many-relations-user---post)
- [Many To Many Relations (Post - Comment)](#many-to-many-relations-post---comment)
- [Following Functionality](#following-functionality)
- [Comments / Replies](#comments--replies)
- [Likes Functionality](#likes-functionality)
- [Deployment](#deployment)


## Introduction

This project is a Twitter clone application that is built with Next.js, Tailwind CSS, Prisma, and MongoDB. The purpose of this project is to learn various functionalities that are commonly used in web development.

## Features

The Twitter clone application comes with the following features:

- Authentication system with next auth
- Notification system
- Image Upload using Base64 strings
- Prisma ORM with MongoDB
- Responsive Layout with Tailwind css
- 1 To Many Relations (User - Post)
- Many To Many Relations (Post - Comment)
- Following functionality
- Comments / Replies
- Likes functionality
- Vercel Deployment

## Technologies Used

- Next.js
- Tailwind CSS
- Prisma
- MongoDB

## Getting Started

To get started with this project, you need to:

1. Clone this repository to your local machine
2. Install dependencies by running `npm install`
3. Create a `.env.local` file and add the following environment variables:

MONGODB_URI=<your-mongodb-uri>
NEXTAUTH_URL=<your-nextauth-url>

4. Start the development server by running `npm run dev`
5. Open your browser and go to `http://localhost:3000`

## Authentication System

The authentication system in this project is implemented with next auth. Next auth is a complete authentication solution for Next.js applications.

## Notification System

The notification system in this project is implemented with the help of toast notifications. When a user follows or likes a post, a toast notification will be displayed to the user.

## Image Upload

The image upload functionality in this project is implemented using Base64 strings. Users can upload their profile picture and also add images to their posts.

## Prisma ORM with MongoDB

This project uses Prisma ORM with MongoDB as the database. Prisma is a modern database toolkit that makes it easy to work with databases.

## Responsive Layout with Tailwind CSS

The layout of this project is implemented with Tailwind CSS. Tailwind CSS is a utility-first CSS framework that provides pre-defined CSS classes that can be used to create responsive and scalable layouts.

## 1 To Many Relations (User - Post)

This project implements a 1 to many relation between the user and the post. A user can have multiple posts but a post can only belong to one user.

## Many To Many Relations (Post - Comment)

This project implements a many to many relation between the post and the comment. A post can have multiple comments and a comment can belong to multiple posts.

## Following Functionality

The following functionality in this project allows a user to follow another user. When a user

## Comments / Replies: 

Users can reply to comments, creating a nested comment structure.

## Likes Functionality: 

Users can like posts and comments.

## Deployment: 

The app is deployed to [Vercel](https://white-bird-nine.vercel.app/), making it easy to share with others.
