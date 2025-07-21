// Simple test script for the formatSize function
// This is just for verification and won't be part of the final codebase

// Mock implementation of the formatSize function (same as in utils.ts)
function formatSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Test cases
const testCases = [
  0,                  // 0 Bytes
  500,                // Bytes
  1023,               // Bytes (just under 1KB)
  1024,               // 1KB exactly
  1500,               // KB
  1048576,            // 1MB exactly
  2500000,            // MB
  1073741824,         // 1GB exactly
  4294967296          // 4GB
];

// Run tests
console.log("Testing formatSize function:");
console.log("----------------------------");
testCases.forEach(bytes => {
  console.log(`${bytes} bytes = ${formatSize(bytes)}`);
});