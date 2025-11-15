import React from "react";
import Image from "next/image";

interface UserCardProps {
  dias: number;
  nome?: string;
  avatar?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ dias, nome = "Gonçalo Maueze", avatar = "/images/avatarGamez.jpg" }) => {
  return (
    <div className="user-card flex flex-col items-center bg-white border border-gray-200 p-6 rounded-xl shadow-md w-60">
      <Image
        src={avatar}
        alt="Gonçalo Maueze"
        width={120}
        height={120}
        className="rounded-md mb-2"
      />
      <p className="user-name text-sm text-gray-700">{nome}</p>
      <p className="user-label text-xs text-gray-500 mt-1">DIAS PASSADOS</p>
      <div className="user-days text-5xl font-bold text-green-600 mt-2">{dias}</div>
    </div>
  );
};
