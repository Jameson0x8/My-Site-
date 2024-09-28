<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COMMUNA - Your Community Platform</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            height: 100%;
        }
        .container {
            min-height: 100vh;
            background-color: #f5f5e5;
            display: flex;
            flex-direction: column;
        }
        .top-banner {
            background-color: #8fbc8f;
            color: white;
            padding: 1rem;
        }
        .banner-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .button-group {
            display: flex;
            gap: 1rem;
        }
        .button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background-color: #7cac7c;
            color: white;
            border: none;
            border-radius: 9999px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #6b9b6b;
        }
        .main-content {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }
        .circle-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            aspect-ratio: 1 / 1;
        }
        .leaf-background {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
        }
        .central-circle {
            position: absolute;
            inset: 0;
            margin: auto;
            width: 33.33%;
            aspect-ratio: 1 / 1;
            background-color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .surrounding-circle {
            position: absolute;
            width: 25%;
            aspect-ratio: 1 / 1;
            background-color: white;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            text-align: center;
        }
        .living-button {
            position: absolute;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
        }
        h1 {
            font-size: 1.5rem;
            color: #2f4f4f;
            font-family: serif;
        }
        h2 {
            font-size: 1rem;
            color: #2f4f4f;
            font-family: serif;
            margin: 0;
        }
        p {
            font-size: 0.75rem;
            color: #5f9ea0;
            margin-top: 0.25rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="top-banner">
            <div class="banner-content">
                <div class="button-group">
                    <button class="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                        <span>Sign In</span>
                    </button>
                    <button class="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>
                        <span>Connect Wallet</span>
                    </button>
                </div>
                <div class="button-group">
                    <button class="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        <span>English</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    <button class="button">
                        <span>USD</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="main-content">
            <div class="circle-container">
                <svg class="leaf-background" viewBox="0 0 100 100">
                    <defs>
                        <radialGradient id="leafGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stop-color="#e6eee6" />
                            <stop offset="100%" stop-color="#f5f5e5" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="url(#leafGradient)" />
                    <g fill="none" stroke="#8fbc8f" stroke-width="0.2">
                        <path d="M50,50 Q80,50 95,50" />
                        <path d="M50,50 Q70.71,70.71 85.36,85.36" />
                        <path d="M50,50 Q50,80 50,95" />
                        <path d="M50,50 Q29.29,70.71 14.64,85.36" />
                        <path d="M50,50 Q20,50 5,50" />
                        <path d="M50,50 Q29.29,29.29 14.64,14.64" />
                        <path d="M50,50 Q50,20 50,5" />
                        <path d="M50,50 Q70.71,29.29 85.36,14.64" />
                    </g>
                </svg>
                <div class="central-circle">
                    <h1>COMMUNA</h1>
                </div>
                <div class="surrounding-circle" style="top: 12.5%; left: 62.5%;">
                    <h2>transact</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="surrounding-circle" style="top: 62.5%; left: 62.5%;">
                    <h2>invest</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="surrounding-circle" style="top: 62.5%; left: 12.5%;">
                    <h2>connect</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="living-button">
                    <button class="button">Living</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
