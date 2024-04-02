import DashboardCard from "@/components/DashboardCard";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard title="Sales" subtitle="desc" body="text"/>
    </div>
  );
};
export default AdminDashboard;
