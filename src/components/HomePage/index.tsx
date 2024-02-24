// src/components/Home/index.tsx
import React from 'react';
import styles from './styles.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <h1>Welcome to Our Website</h1>
            <p>This is the home page of our magical realm. Here, you'll find links to explore our world, learn about our mages, and connect with our community.</p>
        </div>
    );
}

export default Home;