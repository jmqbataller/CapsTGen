<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $category = $_POST['category'];
    $titles = [];

    // Simulated AI-based title generation (you can replace this with an API call or more complex logic)
    switch ($category) {
        case 'IT':
            $titles = [
                "AI-based Web Development Frameworks",
                "Cloud Computing Security Protocols",
                "Data Analysis and Machine Learning in IT",
                "Blockchain Applications in Cybersecurity"
            ];
            break;
        case 'Business':
            $titles = [
                "Entrepreneurship in the Digital Age",
                "Impact of Social Media Marketing on Brands",
                "Business Analytics for Strategic Decision Making",
                "Sustainable Practices in Modern Business"
            ];
            break;
        case 'Engineering':
            $titles = [
                "Smart Manufacturing with IoT",
                "Renewable Energy Solutions for Urban Areas",
                "AI and Robotics in Industrial Engineering",
                "Advancements in Structural Engineering for Earthquake Resistance"
            ];
            break;
    }

    // Randomly select a title
    $selectedTitle = $titles[array_rand($titles)];
    echo json_encode(['title' => $selectedTitle]);
}
?>
