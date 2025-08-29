import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Component/Header"; 


export default function DetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-3xl mx-auto p-6">
  
      <Link
  to="/"
  className="inline-block mb-6 text-[#ba1615] font-bold text-lg px-4 py-2 rounded-lg border border-[#ba1615] 
             hover:bg-[#ba1615] hover:text-white transition-colors duration-300"
>
  ← Back to Home
</Link>


        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-t-[#ba1615] border-gray-300 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center gap-4">
       
            <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-[#ba1615] to-[#700e0f] 
                            flex items-center justify-center text-white font-bold text-4xl">
              {user.name[0].toUpperCase()}
            </div>

       
            <h1 className="text-3xl font-bold text-[#700e0f]">{user.name}</h1>

         
            <div className="w-full mt-4 grid grid-cols-1 gap-3 text-gray-700">
              <p>
                <span className="font-semibold text-[#ba1615]">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold text-[#ba1615]">Phone:</span> {user.phone}
              </p>
              <p>
                <span className="font-semibold text-[#ba1615]">Website:</span>{" "}
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {user.website}
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#ba1615]">Company:</span>{" "}
                {user.company?.name}
              </p>
              <p>
                <span className="font-semibold text-[#ba1615]">City:</span>{" "}
                {user.address?.city}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
