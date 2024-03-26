import React from 'react'
import ton from '../assets/ton.jpeg'
export default function Profile() {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-8">
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-center p-8 border-b">
        <img className=" w-16 h-20 rounded-full border-4 border-white" src={ton} alt="Profile"></img>
        <div className="ml-4">
          <h1 className="text-lg font-bold text-gray-800">Chirawut Jinadat</h1>
          <p className="text-sm text-gray-600">Full Stack Developer</p>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-lg font-bold mb-4 text-gray-800">About Me</h2>
        <p className="text-gray-700">Passionate about creating beautiful and responsive web applications using React.</p>
      </div>
      <div className="p-8 border-t">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          <li>React</li>
          <li>Nextjs</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  </div>
  )
}
