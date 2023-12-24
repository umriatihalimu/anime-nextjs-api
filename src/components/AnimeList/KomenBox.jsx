import React from "react";
import prisma from "@/libs/prisma";
import { FaStar } from "react-icons/fa";
const colors = {
  orange: "#F59E0B",
  grey: "#a3a8a8",
};

const KomenBox = async ({ anime_mal_id }) => {
  const stars = Array(5).fill(0);

  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  });

  return (
    <div>
      <div className="mt-5 bg-primary rounded">
        {comments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="text-slate-700 p-3 text-md flex flex-cols gap-3 "
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mt-1 hover:text-slate-400  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-bold">{comment.username} </p>
                <p>{comment.comment}</p>
                <p className="flex flex-row mt-1">
                  {stars.map((_, index) => (
                    <FaStar
                      key={index}
                      className="mx-0.5 "
                      size={16}
                      value={comment.rating}
                      color={
                        comment.rating > index ? colors.orange : colors.grey
                      }
                    />
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KomenBox;
