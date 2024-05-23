import React from 'react'

function Aboutme() {
  return (
    <div class="w-100 h-auto flex flex-wrap flex-col items-center pt-11">
      <div class="w-full h-24 flex flex-wrap flex-col text-center items-center">
        <h3 class="text-white text-2xl font-bold mt-5">About me</h3>
        <div class="w-44 h-1 border-b-4 border-blue-500 mb-9"></div>
      </div>

      <div class="px-7">
        <p class="text-white text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          repellat dignissimos aperiam consequuntur ex, similique, nihil
          deleniti porro placeat omnis laborum cupiditate, in sapiente
          doloremque distinctio maxime natus amet eligendi! Eius harum
          accusantium beatae nam sed ad repudiandae eaque provident, voluptatum
          minus eveniet sapiente modi doloribus expedita quos quam officiis,
          quod magnam animi quo aperiam sit repellat impedit. Illum, cupiditate.
          A quasi incidunt eveniet eaque, assumenda impedit modi eos quod id
          corrupti doloribus odio ipsum ea beatae, ratione sapiente! Vel
          blanditiis, dolorum nihil officiis incidunt omnis error corrupti
          maiores qui.
        </p>
      </div>

      <div class="w-100 h-auto">
        <div class="w-full h-24 flex flex-col text-center items-center">
          <div class="text-2xl text-white font-bold mt-7">Skills</div>
          <div class="w-36 h-1 border-b-4 border-blue-500 mb-9"></div>
        </div>

        <div
          class="w-[100%] h-auto grid grid-cols-1 md:grid md:grid-cols-2 px-12 gap-4 md:px-28 py-5"
        >
          <div
            class="w-[300px] h-24 bg-white text-center flex flex-col justify-center items-center rounded-xl md:w-[600px]"
          >
            <p class="text-xl font-bold mt-0">Java</p>
            <div class="w-[70%] h-5 bg-[#24292d] rounded-2xl">
              <div class="w-[95%] h-5 bg-[#2fbb4f] rounded-2xl"></div>
            </div>
          </div>

          <div
            class="w-[300px] h-24 bg-white text-center flex flex-col justify-center items-center rounded-xl md:w-[600px]"
          >
            <p class="text-xl font-bold mt-0">HTML</p>
            <div class="w-[70%] h-5 bg-[#24292d] rounded-2xl">
              <div class="w-[98%] h-5 bg-[#d02e00] rounded-2xl"></div>
            </div>
          </div>

          <div
            class="w-[300px] h-24 bg-white text-center flex flex-col justify-center items-center rounded-xl md:w-[600px]"
          >
            <p class="text-xl font-bold mt-0">CSS (Tailwind)</p>
            <div class="w-[70%] h-5 bg-[#24292d] rounded-2xl">
              <div class="w-[98%] h-5 bg-[#2fbb4f] rounded-2xl"></div>
            </div>
          </div>

          <div
            class="w-[300px] h-24 bg-white text-center flex flex-col justify-center items-center rounded-xl md:w-[600px]"
          >
            <p class="text-xl font-bold mt-0">JavaScript (React)</p>
            <div class="w-[70%] h-5 bg-[#24292d] rounded-2xl">
              <div class="w-[90%] h-5 bg-[#d02e00] rounded-2xl"></div>
            </div>
          </div>

          <div
            class="w-[300px] h-24 bg-white text-center flex flex-col justify-center items-center rounded-xl md:w-[600px]"
          >
            <p class="text-xl font-bold mt-0">Java</p>
            <div class="w-[70%] h-5 bg-[#24292d] rounded-2xl">
              <div class="w-[95%] h-5 bg-[#0078d7] rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme