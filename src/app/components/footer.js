export default function Footer(){
    return (
        <div className="flex justify-between p-8">
            {/* Quick links */}
            <div className="w-1/2">
                <span className="text-[#CDC835] text-xl">Quick Links</span>
                <div></div>
            </div>
            <div className="w-1/2 border-l-2 pl-6">
                <span className="text-[#CDC835] text-xl">About Us</span>
                <div>
                    <p>We are passionate travelers dedicated to creating meaningful journeys around the world. Our mission is to connect people with places through authentic experiences and exceptional service.</p>
                </div>
            </div>
        </div>
    );
}