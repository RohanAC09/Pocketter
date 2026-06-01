# Pocketter: A Social Media Platform

- A Platform for sharing insightful thoughts, similar to the Twitter (currently "X") platform.
- Users can post their thoughts on the platform. Also, they can see other posts as a feed feature "timeline"
- People can follow/unfollow other users
- User can view profiles, edit their own profile

<img height="468" alt="Pocketter Application Demo" src="https://github.com/user-attachments/assets/15ab1eb8-5c02-467e-9bbc-d612c0ec0d01" />

## Table of Content
- [Features](#features)
- [Screen size Compatibility](#screen-size-compatibility)
- [Architecture Diagram](#architecture-diagram)
- [Trade-offs](#trade-offs)
- [Microservices](#microservices)
- [Tech Stack](#-tech-stack)
- [Deploying Containers](#deploying-containers)

## Features
- Microservice architecture
- Timelines fetched from Redis cache
- Fan-out-on-write while creating a post (non-celebrity accounts)
- Asynchronous processing of create-post & inject-to-timeline operation
- Centralised authentication with JWT
- Zero-trust authorisation at microservices

## Screen size Compatibility
- Mobile screen  
<div align="center">
  <img height="501" alt="Login screen on mobile" src="https://github.com/user-attachments/assets/bdbaf1b2-d6c5-4311-94bb-29cf58249d61" />
  <img height="500" alt="Register screen on mobile" src="https://github.com/user-attachments/assets/f1d3a95e-c253-4ccf-b212-9ba99a5651cc" />
  <img height="501" alt="Home screen on mobile" src="https://github.com/user-attachments/assets/34db73d0-b439-426d-89f6-19719caa8b43" />
</div>

- Laptop screen  
<div align="center">
<img width="900" alt="Login screen on Laptop" src="https://github.com/user-attachments/assets/759b8b74-6dc1-4c91-8724-bfde1dbf4db4" />
<img width="900" alt="Register screen on Laptop" src="https://github.com/user-attachments/assets/53d2760f-098a-4780-a897-989c33c3f3a6" />
<img width="900" alt="Home screen on Laptop" src="https://github.com/user-attachments/assets/44507473-7a14-4a1d-bea6-32b5d41948bd" />


</div>

## Architecture Diagram
</p>
<p align="center">
<a><img width="900" src="https://github.com/user-attachments/assets/9146c6f7-72e9-4f10-ab96-6874e8267fe9" alt="Architecture diagram of Pocketter project"/> </a>
</p>

## Trade-offs
- **Consistency vs Availability**  
  - Availability 99.99% & moderate Consistency
  - System must respond to every request.
  - It is fine if we show feed with older posts. Example, feed was generated based on post ids stored in cache. That cache is stored for 2hr (TTL).
  - Even though the post ids fetched from Redis cache, contents are fetched every time, so updated contents will be visible.
  - If any user posted a new post, their post may not be visible to followers whose feed was generated from cache. (Depends on Kafka event queue size)
  - User follows another user, feed is generated from cache may not have newly followed person's posts (till cache TTL)
 
- **Fan-out Strategies**
  - Read-heavy architecture, where feed is fetched quickly from cache (Followers & Followees <1000/user)
  - Used fan-out-on-write strategy (Push model for Non-Celebrity users)
  - For new post, Kafka pushes it to all the followers' feed considering low number of followers
  - For Celebrity model ( >10,000 followers), it would be suitable to use pull model (Writes are cheaper & Reads are expensive)
  - For user following >5000 people, it is suggested to use "Hybrid" model as push posts while writing and pull limited post/user while reading
  - Advanced logic for higher following count - get top active users & fetch limited posts/user while reading.

## Microservices
1. Authentication Service - [Code & related files](https://github.com/RohanAC09/Pocketter-backend/tree/main/authentication-service)
2. User Profile Service - [Code & related files](https://github.com/RohanAC09/Pocketter-backend/tree/main/user-backend)
3. Post Service - [Code & related files](https://github.com/RohanAC09/Pocketter-backend/tree/main/post-backend)
4. Timeline Service - [Code & related files](https://github.com/RohanAC09/Pocketter-backend/tree/main/timeline)

## Deploying Containers

- Follow these steps to run backend services using Docker.
  - Change directory to Pocketter-backend
    ```bash 
    cd Pocketter-backend/
    ```

  - Build & run all the images with Docker-Compose  
    ```bash
    sudo docker compose up -d --build
    ```

  - List down Docker containers  
    ```bash
    sudo docker container ls -a
    ```

  - Stopping the containers
    ```bash
    sudo docker compose down
    ```


- Follow these steps to run frontend React application using Node.
  - Change directory to Pocketter-frontend
    ```bash 
    cd Pocketter-backend/
    ```

  - Install dependencies using Node  
    ```bash
    npm install
    ```

  - Run the application locally & follow the link  
    ```bash
    npm run dev
    ```

  - Deploying React application on Github pages
    ```bash
    npm install --save-dev gh-pages
    gh-pages -d dist
    ```


## 🧩 Tech Stack

1. Java
2. Spring Boot
3. React
4. JavaScript
5. HTML
6. CSS
7. Docker (containerisation)
8. MySQL (DB)
9. Redis-cache
10. Kafka MQ
11. Spring-MVC
12. Spring-Security
