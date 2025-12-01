import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
    {
        img: 'assets/work/twitter-api.PNG',
        alt: 'Twitter API Screenshot',
        title: 'Project Management Dashboard',
        url: 'https://github.com/minh-t-coding/project-management-dashboard',
        subtitle: 'Full-stack project management dashboard',
        description: 'Project management dashboard',
        category: 'web',
    },
    {
        img: 'assets/work/twitter-api.PNG',
        alt: 'Twitter API Screenshot',
        title: 'Pokemon Guessing Game',
        url: 'https://github.com/minh-t-coding/whos-that-pokemon',
        subtitle: 'Pokemon Guessing Game',
        description: "Who's that pokemon?",
        category: 'web',
    },
    {
        img: 'assets/work/twitter-api.PNG',
        alt: 'Twitter API Screenshot',
        title: 'Twitter Spring API',
        url: 'https://github.com/minh-t-coding/twitter-spring-api',
        subtitle: 'RESTful Web Service',
        description:
            'Social media backend built with Spring Boot, JPA, and PostgreSQL. Implemented endpoints for users, tweets, hashtags, likes, reposts, replies, and follower relationships. Features include account validation, feed generation, hashtag and mention parsing, and "soft delete" handling to maintain relational integrity.',
        category: 'web',
    },
    {
        img: 'assets/work/code-racer-screenshot.PNG',
        alt: 'Code Racer Screenshot',
        title: 'Code Racer',
        url: 'https://github.com/minh-t-coding/code-racer',
        subtitle: 'Multiplayer Competitive Web App',
        description:
            'Real-time competitive coding web app inspired by TypeRacer, but using algorithm challenges from LeetCode. I implemented a multi-user lobby system with Socket.io and developed the back-end using Node.js and the Express framework.',
        category: 'web',
    },
    {
        img: 'assets/work/giuseppe-long.png',
        alt: "Giuseppe's Mission Screenshot",
        title: "Giuseppe's Mission",
        url: 'https://rosunestudios.itch.io/giuseppes-mission',
        subtitle: 'Casual Run & Draw Browser Game',
        description:
            'A fast-paced arcade game where players shadow a moving target while navigating obstacles and casting alchemical spells. I implemented procedural level generation by linking generated room sections, real-time spellcasting using the $1 gesture recognizer, and resource management mechanics.',
        category: 'games',
    },
    {
        img: 'assets/work/beat-drop.png',
        alt: 'BeatDrop Screenshot',
        title: 'BeatDrop',
        url: 'https://github.com/minh-t-coding/music-game',
        subtitle: 'Physics-based Music Sandbox',
        description:
            'Solo developed Unity physics-based sandbox music game. Players draw notes on a canvas and release a ball to play music based on the surfaces it hits. Maps can be saved, shared, and imported, letting players create and explore intricate musical creations.',
        category: 'games',
    },
];
