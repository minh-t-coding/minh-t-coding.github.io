import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
    {
        img: 'assets/work/dashboard.PNG',
        alt: 'Project Management Dashboard Screenshot',
        title: 'Project Management Dashboard',
        url: 'https://github.com/minh-t-coding/project-management-dashboard',
        subtitle: 'Full-stack Dashboard Web App',
        description:
            'Company project management system built with Java Spring, PostgreSQL, and Angular. Implemented features for managing announcements, teams, projects, and users across multiple companies.',
        category: 'web',
    },
    {
        img: 'assets/work/whos-that-pokemon.PNG',
        alt: "Who's That Pokémon Screenshot",
        title: "Who's That Pokémon?",
        url: 'https://github.com/minh-t-coding/whos-that-pokemon',
        subtitle: 'Front End Guessing Game',
        description:
            'Interactive Pokémon guessing game built with Angular and NgRx. Developed core game logic, including hint system, scoring, and data retrieval from PokeAPI v2. Implemented settings modal to locally store user preferences for music and sound effects volume.',
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
    {
        img: 'assets/work/dryer-flyer.png',
        alt: 'Dryer FLyer Screenshot',
        title: 'Dryer Flyer',
        url: 'https://aaaalan.itch.io/dryer-flyer',
        subtitle: '3D Hair Dryer Obstacle Game',
        description:
            '3D movement game where players must reach the end while managing their cord length and prevailing against household obstacles. Personally worked on some of the obstacle scripting, revive/restart, and settings menu.',
        category: 'games',
    },
    {
        img: 'assets/work/sticko-mode.png',
        alt: 'Sticko Mode Screenshot',
        title: 'Sticko Mode',
        url: 'https://ogunasekara.itch.io/sticko-mode',
        subtitle: 'Strategic Rhythm Game',
        description:
            'Carefully plan your route in PREDICTO mode, then play a high-stakes rhythm game to execute your moves in STICKO mode. I worked on the movement, the tutorial modals, and designed some of the levels.',
        category: 'games',
    },
];
