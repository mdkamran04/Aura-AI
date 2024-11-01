"use client";
import React, { useContext } from "react";
import {
  User,
  
  SendHorizontal,
} from "lucide-react";
import { Context } from "@/context/ContextProvider";
const AuraBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput,
  } = useContext(Context);
  console.log(loading, "loading");
  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="flex items-center justify-between p-5 text-xl text-gray-400">
        <p>Aura AI</p>
        <User size={20} className="text-softTextColor" />
      </div>
      <div className="max-w-[900px] m-auto">
        {!displayResult ? (
          <>
            <div className="my-12 text-5xl font-medium p-5">
              <p>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-400">
                Define Your Aura ,
                </span>
              </p>
              <p>Because Ordinary is Not Your Style!</p>
            </div>
            
          </>
        ) : (
          <div className="result">
            <div className="my-10 flex items-center gap-5">
              <User size={20} className="text-softTextColor" />
              <p>{recentPrompts}</p>
            </div>
            <div className="flex items-start gap-5">
              <img src="/gemini.png" alt="" />
              <p
                className="text-md font-normal loading-6 text-gray-400"
                dangerouslySetInnerHTML={{ __html: result }}
              ></p>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 m-auto">
          <form action={submit}>
            <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-full">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
                placeholder="Ask Aura . . ."
              />
              <div className="flex cursor-pointer">
                <SendHorizontal type="submit" size={20} />
              </div>
            </div>
          </form>
          <p className="text-gray-400 text-sm text-center p-3">
            * Generative AI is experimental and can give inaccurate results !
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuraBody;
