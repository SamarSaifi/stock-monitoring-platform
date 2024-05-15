# Stock Monitoring Platform

This is a web application that allows users to monitor and track stock information. Users can create an account, log in, and manage their watchlists of stocks. The platform displays real-time stock data, including the latest prices, historical data, and news updates.

## Features

- User authentication (registration, login, logout)
- Watchlist management (add, remove stocks)
- Real-time stock data updates
- Historical stock data and charts
- Stock news and analysis integration
- Portfolio management (coming soon)

## Technologies Used

### Backend

- **Django**: A high-level Python web framework for developing secure and maintainable applications.
- **Django REST Framework**: A powerful and flexible toolkit for building Web APIs.
- **django-rest-auth**: A package for authentication with Django REST Framework.
- **alpha_vantage**: A Python library for fetching stock data from the Alpha Vantage API.

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically-typed superset of JavaScript that adds optional static typing to the language.
- **Material-UI**: A popular React UI framework for building responsive and modern web applications.
- **axios**: A promise-based HTTP client for making API requests from the browser or Node.js.

## Installation

1. Navigate to the project directory:
cd stock-monitoring-platform
2. Set up the backend:
cd backend
python -m venv env
source env/bin/activate  # For Windows: env\Scripts\activate
pip install -r requirements.txt

3. Set up the frontend:
cd ../frontend
npm install

4. Start the development servers:
Backend
cd ../backend
python manage.py runserver
Frontend (in a separate terminal)
cd ../frontend
npm start

The backend server will run on `http://localhost:8000`, and the frontend development server will be accessible at `http://localhost:3000`.


## To run the stock monitoring platform project

# Running the Django Backend:

Navigate to the backend directory:

cd /path/to/stock_monitoring_platform/backend

Create and activate a virtual environment (recommended):

# On Windows
python -m venv env
env\Scripts\activate

# On Unix/macOS
python3 -m venv env
source env/bin/activate

Install the required Python packages:

pip install -r requirements.txt

Apply database migrations:

python manage.py migrate

Start the Django development server:

python manage.py runserver
The Django backend should now be running at http://127.0.0.1:8000/.

# Running the React Frontend:

Open a new terminal window or tab.
Navigate to the frontend directory:

cd /path/to/stock_monitoring_platform/stock_monitoring_frontend

Install the required Node.js packages:

npm install

Start the React development server:

npm start

The React frontend should now be running at http://localhost:3000/.





## Contributor

- Samar Saifi
- samar72saifi@gmail.com
"# stock-monitoring-platform" 
"# stock-monitoring-platform" 
"# stock-monitoring-platform" 
