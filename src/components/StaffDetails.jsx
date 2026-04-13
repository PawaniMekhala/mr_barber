import { useParams } from "react-router-dom";

export default function StaffDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl text-gold-700">Staff Details - ID: {id}</h1>

      <p className="mt-4">
        Here you will show appointments for this staff member.
      </p>
    </div>
  );
}
