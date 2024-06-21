import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { useDispatch, useSelector } from "react-redux";
import { signupFailure, signupStart, signupSuccess } from "../slices/authSlice";

export default function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signupStart());
    try {
      // Send data to API
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      localStorage.setItem('token', data.token);

      dispatch(signupSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signupFailure(error.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-md">
        <h1 className="text-3xl text-center font-semibold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-600 rounded-lg text-white p-3 uppercase hover:bg-blue-500 disabled:opacity-80"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <OAuth />
        </form>
        <div className="flex justify-center gap-2 mt-5">
          <p>Don't have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-400 hover:underline">Sign Up</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
      </div>
    </div>
  );
}
