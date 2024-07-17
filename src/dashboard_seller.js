import React from 'react';
import { useNavigate } from 'react-router-dom';


const DashboardSeller = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
    };

    return (
        <div className="dashboard_us-body">
            <header className="dashboard_us-header">
                <div className="dashboard_us-welcome-message">
                    <h2>Welcome back, <span id="username">Khajira</span>!</h2>
                </div>
                <div className="dashboard_us-logout-button">
                    <button onClick={logout}>Logout</button>
                </div>
            </header>
            <main>
                <h1 className="dashboard_us-h1">Dashboard</h1>
                <div className="dashboard_us-date">
                    <input type="date" />
                </div>
                <div className="dashboard_us-insights">
                    <Sales />
                    <Expenses />
                    <Income />
                </div>
                <RecentOrders />
            </main>
        </div>
    );
}

const Sales = () => {
    return (
        <div className="dashboard_us-sales">
            <span className="material-symbols-outlined">analytics</span>
            <div className="dashboard_us-middle">
                <div className="dashboard_us-left">
                    <h3 className="dashboard_us-h3">Total Sales</h3>
                    <h1>ksh. 45,900</h1>
                </div>
                <div className="dashboard_us-progress">
                    <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                    </svg>
                    <div className="dashboard_us-number">
                        <p>81%</p>
                    </div>
                </div>
            </div>
            <small className="dashboard_us-small-subscript">Last 24 Hours</small>
        </div>
    );
}

const Expenses = () => {
    return (
        <div className="dashboard_us-expenses">
            <span className="material-symbols-outlined">bar_chart</span>
            <div className="dashboard_us-middle">
                <div className="dashboard_us-left">
                    <h3 className="dashboard_us-h3">Total Expenses</h3>
                    <h1>ksh. 76,900</h1>
                </div>
                <div className="dashboard_us-progress">
                    <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                    </svg>
                    <div className="dashboard_us-number">
                        <p>61%</p>
                    </div>
                </div>
            </div>
            <small className="dashboard_us-small-subscript">Last 24 Hours</small>
        </div>
    );
}

const Income = () => {
    return (
        <div className="dashboard_us-income">
            <span className="material-symbols-outlined">stacked_line_chart</span>
            <div className="dashboard_us-middle">
                <div className="dashboard_us-left">
                    <h3 className="dashboard_us-h3">Total Sales</h3>
                    <h1 className="dashboard_us-h1">ksh. 32,100</h1>
                </div>
                <div className="dashboard_us-progress">
                    <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                    </svg>
                    <div className="dashboard_us-number">
                        <p className="dashboard_us-p">31%</p>
                    </div>
                </div>
            </div>
            <small className="dashboard_us-small-subscript">Last 24 Hours</small>
        </div>
    );
}

const RecentOrders = () => {
    return (
        <div className="dashboard_us-recent-order">
            <h2 className="dashboard_us-h2">Recent Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Order Total</th>
                        <th>Order Payment</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>04/07/2024</td>
                        <td>ksh.4,400</td>
                        <td>Successful</td>
                        <td className="dashboard_us-warning">Pending</td>
                        <td className="dashboard_us-primary">Details</td>
                    </tr>
                    {/* Repeat other rows similarly */}
                </tbody>
            </table>
            <a className="dashboard_us-link" href="#">Show All</a>
        </div>
    );
}

export default DashboardSeller;
