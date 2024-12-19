import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Company: {company?.name}</p>
      <p className="text-gray-600">Address: {address?.street}, {address?.city}</p>
    </div>
  );
};

export default UserCard;
