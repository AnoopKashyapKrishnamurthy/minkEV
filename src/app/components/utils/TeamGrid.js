// app/components/TeamGrid.js
"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const teamMembers = [
  {
    name: "GOWTHAM SRIDHARMURTHY",
    title: "CEO, Founder",
    desc: "Obsessed With Music And The Outdoors",
    img: "/person1.png",
    linkedin: true,
  },
  {
    name: "MANOJ",
    title: "CTO, Founder",
    desc: "Obsessed With Music And The Outdoors",
    img: "/person2.png",
    linkedin: true,
  },
  {
    name: "ABHINEETH",
    title: "COO, Founder",
    desc: "Obsessed With Music And The Outdoors",
    img: "/person3.png",
    linkedin: true,
  },
  {
    name: "DEEPAK",
    title: "CPO, Founder",
    desc: "Obsessed With Music And The Outdoors",
    img: "/person4.png",
    linkedin: true,
  },
  {
    name: "GOWTHAM SRIDHARMURTHY",
    title: "CEO, Founder",
    desc: "Obsessed With Music And The Outdoors",
    img: "/person1.png",
    linkedin: true,
  },
  {
    name: "GOWTHAM SRIDHARMURTHY",
    title: "CEO, Founder",
    desc: "Obsessed With Music And The Outdoors",
    img: "/person2.png",
    linkedin: true,
  },
  {
    name: "GOWTHAM SRIDHARMURTHY",
    title: "CEO, Founder",
    desc: "Obsessed With Music And The Outdoors",
    img: "/person3.png",
    linkedin: true,
  },
];

export default function TeamGrid() {
  const router = useRouter();
  return (
    <div className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10 text-black">Our team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:bg-gray-50 transition duration-300"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <Image src={member.img} alt={member.name} width={96} height={96} className="object-cover w-full h-full" />
            </div>
            <h3 className="font-bold text-black text-sm mb-1">{member.name}</h3>
            <p className="text-sm text-gray-700 mb-1">{member.title}</p>
            <p className="text-xs text-gray-500 mb-4">{member.desc}</p>
            {member.linkedin && (
              <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
            )}
          </div>
        ))}

        {/* Join the Team Card */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col justify-center items-center text-center hover:shadow-lg hover:bg-gray-50 transition duration-300">
          <p className="text-lg font-medium text-black mb-2">Be Part Of Our Team</p>
          <p className="text-xs text-gray-500 mb-4">Obsessed With Music And The Outdoors</p>
          <button onClick={() => router.push('/about-us#contact')} className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded">
            JOIN THE TEAM
          </button>
        </div>
      </div>
    </div>
  );
}
