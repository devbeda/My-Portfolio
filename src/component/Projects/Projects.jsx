import React from "react";

function Projects() {
  return (
    <div class="w-100 h-auto py-20 md:h-screen flex  flex-col bg-[#111827] items-center justify-center">
      <div class="w-full h-auto flex flex-wrap flex-col text-center items-center">
        <h3 class="text-white text-2xl font-bold">Projects</h3>
        <div class="w-44 h-1 border-b-4 border-blue-500 mb-9"></div>
      </div>
      <div class="flex flex-col md:flex-row gap-12">
        <div class="w-64 h-80 bg-white rounded-xl">
          <img class="bg-slate-800 w-full h-60 rounded-t-lg" src="" alt="" />
          <p class="text-lg font-bold text-center">Project 1</p>
          <p class="text-sm font-semibold text-center px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="w-64 h-80 bg-white rounded-xl">
          <img class="bg-slate-800 w-full h-60 rounded-t-lg" src="" alt="" />
          <p class="text-lg font-bold text-center">Project 2</p>
          <p class="text-sm font-semibold text-center px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="w-64 h-80 bg-white rounded-xl">
          <img class="bg-slate-800 w-full h-60 rounded-t-lg" src="" alt="" />
          <p class="text-lg font-bold text-center">Project 3</p>
          <p class="text-sm font-semibold text-center px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
