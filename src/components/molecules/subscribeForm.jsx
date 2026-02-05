import { useState } from "react";
import Swal from "sweetalert2";
import { postCtaSubscription } from "@/api/furniture.api";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await postCtaSubscription(email);

      Swal.fire({
        icon: "success",
        title: "Subscribed 🎉",
        text: "You have successfully subscribed",
      });

      setEmail("");
    } catch (error) {
      console.error("Failed to subscribe:", error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong, please input a valid email!!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex md:flex-row gap-3">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-52 md:w-72 px-4 py-3  rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#26938e]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-28 md:w-32 md:px-6 px-3 py-3 bg-[#23262F] text-white rounded-lg hover:bg-[#1a1b22] disabled:opacity-50"
        >
          {loading ? "Loading..." : "Shop Now"}
        </button>
      </div>
    </form>
  );
}
