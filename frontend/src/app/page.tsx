"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [backendStatus, setBackendStatus] = useState<string>("Checking...");
  const [backendData, setBackendData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const testBackendConnection = async () => {
    setIsLoading(true);
    setBackendStatus("Testing connection...");
    
    try {
      const response = await fetch("http://localhost:8080/api/test");
      if (response.ok) {
        const data = await response.json();
        setBackendData(data);
        setBackendStatus("✅ Backend connected successfully!");
      } else {
        setBackendStatus(`❌ Backend error: ${response.status}`);
      }
    } catch (error) {
      setBackendStatus(`❌ Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testHealthCheck = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/health");
      if (response.ok) {
        const data = await response.json();
        setBackendData(data);
        setBackendStatus("✅ Health check passed!");
      } else {
        setBackendStatus(`❌ Health check failed: ${response.status}`);
      }
    } catch (error) {
      setBackendStatus(`❌ Health check failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    testBackendConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Learning Management System
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Frontend-Backend Connection Test
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Backend Connection Status
          </h2>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-gray-700">Status:</span>
              <span className={`text-lg font-semibold ${
                backendStatus.includes("✅") ? "text-green-600" : 
                backendStatus.includes("❌") ? "text-red-600" : 
                "text-yellow-600"
              }`}>
                {backendStatus}
              </span>
            </div>
            
            {isLoading && (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-gray-600">Loading...</span>
              </div>
            )}
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={testBackendConnection}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Test Connection
            </button>
            <button
              onClick={testHealthCheck}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Health Check
            </button>
          </div>

          {backendData && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Backend Response:</h3>
              <pre className="bg-white p-4 rounded border text-sm text-gray-700 overflow-x-auto">
                {JSON.stringify(backendData, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            System Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Frontend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Next.js 15.5.4</li>
                <li>• React 19.1.0</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Port: 3000</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Backend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Spring Boot 3.5.6</li>
                <li>• Java 17</li>
                <li>• PostgreSQL</li>
                <li>• Spring Security</li>
                <li>• Port: 8080</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
