import Image from "next/image";
import { z } from "zod";
import { toast } from "sonner";

const newsletterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

const handleSubmit = async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;

  // Validate with Zod
  const result = newsletterSchema.safeParse({ name, email });
  if (!result.success) {
    // Show error (result.error.issues[0].message)
    toast({
      variant: "destructive",
      title: "Something went wrong.",
      description: "There was a problem with your request.",
    });
    alert(result.error.issues[0].message);
    return;
  }

  // Send to API
  const res = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  // Handle response
  if (res.ok) {
    alert("Thank you for signing up!");
  } else {
    alert("There was an error. Please try again.");
  }
};

export default function ComingSoon() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-dvh"
      style={{
        background: "url('/images/elements/bg-texture.webp')",
        fontFamily: "'AgudaBlack', 'Roboto', 'Arial', sans-serif",
      }}
    >
      <Image
        src="/images/logo/logo-primary.png"
        alt="Dreamland Athletics Gym"
        width={250}
        height={250}
        className="bg-logo object-cover rounded-xl"
        priority
      />
      <h1
        className="text-center"
        style={{
          fontFamily: "octinspray",
          fontSize: "92px",
          fontWeight: "bold",
          color: "#ffd700",
          marginBottom: "10px",
          letterSpacing: "2px",
        }}
      >
        Welcome to Dreamland
      </h1>
      <div className="w-full mt-10">
        <div className="grid grid-cols-12 justify-between items-center p-4 lg:p-12">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-2xl md:text-5xl leading-none font-bold mb-6">
              Your Hustle Starts Here.
            </h1>
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-11">
                <p className="leading-7 lg:pr-10 text-justify">
                  Join the movement. Be the first to know when we launch.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0">
            <form>
              <div className="form-group mb-6 mt-4">
                <input
                  type="text"
                  className="h-18 leading-10 bg-gray-950 bg-opacity-10 border border-transparent rounded-2xl focus:outline-none focus:border-[#ffd700] w-full placeholder:text-white pl-4"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-4 mt-3">
                <input
                  type="email"
                  className="h-18 leading-10 bg-gray-950 bg-opacity-10 border border-transparent rounded-2xl focus:outline-none focus:border-[#ffd700] w-full placeholder:text-white pl-4"
                  placeholder="Email"
                />
              </div>

              <button
                type="submit"
                className="cta-button px-7 py-3 w-full mt-2"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
