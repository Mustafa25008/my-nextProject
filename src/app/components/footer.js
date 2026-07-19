import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between p-8 text-white">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Quick links */}
        <div className="flex flex-col w-full md:w-1/2">
          <span className="text-[#CDC835] text-xl mb-4">Quick Links</span>
          <div className="flex flex-col gap-2">
            <Link href="/services">Services</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:border-l-2 md:pl-6">
          <span className="text-[#CDC835] text-xl mb-4">About Us</span>
          <div className="mt-4">
            <p>
              We are passionate travelers dedicated to creating meaningful
              journeys around the world. Our mission is to connect people with
              places through authentic experiences and exceptional service.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t-2 pt-4">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
