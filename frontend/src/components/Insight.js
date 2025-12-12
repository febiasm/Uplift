
import NavBar from "./NavBar";
const Insight = () => {

  const stats = [
    { title: "Donations Received", value: "$124,650", trend: "up", percentage: "18%" },
    { title: "Projects Funded", value: "32", trend: "up", percentage: "5%" },
    { title: "Volunteers Joined", value: "482", trend: "up", percentage: "12%" },
    { title: "Funds Remaining", value: "$24,320", trend: "down", percentage: "7%" },
  ];

  const recentDonations = [
    { donor: "Trevor Febias", amount: 500, method: "Paypal" },
    { donor: "Duke Baraka", amount: 200, method: "Credit Card" },
    { donor: "Anonymous", amount: 100, method: "Wallet" },
    { donor: "Terry Kinya", amount: 250, method: "Paypal" },
  ];

  const monthlyDonations = [
    { month: "Jan", amount: 5000 },
    { month: "Feb", amount: 8000 },
    { month: "Mar", amount: 7000 },
    { month: "Apr", amount: 10000 },
    { month: "May", amount: 8500 },
    { month: "Jun", amount: 9000 },
    { month: "Jul", amount: 12000 },
  ];

  return (
    <div> <NavBar/>
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
        Insights
      </h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-lg shadow p-5 flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm">{stat.title}</span>
            <span className="text-xl font-bold mt-2">{stat.value}</span>
            <span
              className={`text-sm mt-1 ${
                stat.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.trend === "up" ? "↑" : "↓"} {stat.percentage}
            </span>
          </div>
        ))}
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Donations Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4 text-green-600">Monthly Donations</h2>
          <div className="grid grid-cols-7 gap-2 items-end h-48">
            {monthlyDonations.map((m) => (
              <div key={m.month} className="flex flex-col items-center">
                <div
                  className="w-6 bg-green-400 rounded-t"
                  style={{ height: `${m.amount / 300}px` }}
                ></div>
                <span className="text-xs mt-1">{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Donations */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4 text-green-600">Recent Donations</h2>
          <ul>
            {recentDonations.map((donation, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2 border-b pb-1"
              >
                <span>{donation.donor}</span>
                <span className="font-bold">${donation.amount}</span>
                <span className="text-gray-400 text-sm">{donation.method}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Stats / Goals */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4 text-green-600">Impact Goals</h2>
          <div className="mb-4">
            <p className="text-sm">Funds Goal Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-green-400 h-4 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <p className="text-xs mt-1 text-gray-500">75% of $50,000 goal reached</p>
          </div>
          <div className="mb-4">
            <p className="text-sm">Volunteer Engagement</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-green-300 h-4 rounded-full" style={{ width: "60%" }}></div>
            </div>
            <p className="text-xs mt-1 text-gray-500">60% of target volunteers joined</p>
          </div>
          <div className="mb-4">
            <p className="text-sm">Projects Completed</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: "40%" }}></div>
            </div>
            <p className="text-xs mt-1 text-gray-500">40% of ongoing projects finished</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};



export default Insight;
