import React from 'react';
import Container from '../assets/container.jpg';

const styles = {
    card: {
        height: "100%",
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "0.5rem",
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.25rem",
    },
    icon: {
        color: "#98A2B3",
    },
    metricRow: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
    },
    metric: {
        flex: 1,
    },
    metricLabel: {
        fontSize: "1rem",
        color: "#98A2B3",
        marginBottom: "0.25rem",
    },
    metricValue: {
        fontSize: "1.75rem",
        fontWeight: "bold",
    },
    change: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1rem",
        color: "#17B26A",
    },
    imageContainer: {
        padding: "1rem",
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        maxWidth: "600px",
        height: "auto",
        borderRadius: "8px",
    },
};

const Visibility = () => {
    return (
        <div style={styles.card}>
            {/* Header with title and menu icon */}
            <div style={styles.header}>
                <div style={styles.title}>Visibility</div>
                <div style={styles.icon}>
                    <i className="bi bi-three-dots-vertical fs-5"></i>
                </div>
            </div>
            <hr className="mt-0 mb-4" />

            {/* Metrics row */}
            <div style={styles.metricRow}>
                {/* Impressions */}
                <div style={styles.metric}>
                    <div style={styles.metricLabel}>Impressions</div>
                    <div style={styles.metricValue}>4,862</div>
                    <div style={styles.change}>
                        <i className="bi bi-arrow-up-right pe-1"></i>
                        <span>9.2%</span>
                    </div>
                </div>

                {/* Views */}
                <div style={styles.metric}>
                    <div style={styles.metricLabel}>Views</div>
                    <div style={styles.metricValue}>2,671</div>
                    <div style={styles.change}>
                        <i className="bi bi-arrow-up-right pe-1"></i>
                        <span>6.6%</span>
                    </div>
                </div>

                {/* Clicks */}
                <div style={styles.metric}>
                    <div style={styles.metricLabel}>Clicks</div>
                    <div style={styles.metricValue}>822</div>
                    <div style={styles.change}>
                        <i className="bi bi-arrow-up-right pe-1"></i>
                        <span>8.1%</span>
                    </div>
                </div>
            </div>

            {/* Image section */}
            <div style={styles.imageContainer}>
                <img 
                    style={styles.image}
                    src={Container} 
                    alt="Visibility graph" 
                />
            </div>
        </div>
    );
};

export default Visibility;
