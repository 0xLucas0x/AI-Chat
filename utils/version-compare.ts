/**
 * Compare two semantic version strings
 * @param current Current version (e.g., "0.1.0")
 * @param latest Latest version (e.g., "1.1.5")
 * @returns true if latest > current, false otherwise
 */
export function isUpdateAvailable(current: string, latest: string): boolean {
  // Remove 'v' prefix if present
  const cleanCurrent = current.replace(/^v/, "");
  const cleanLatest = latest.replace(/^v/, "");
  
  const currentParts = cleanCurrent.split(".").map(Number);
  const latestParts = cleanLatest.split(".").map(Number);
  
  // Ensure both arrays have the same length by padding with zeros
  const maxLength = Math.max(currentParts.length, latestParts.length);
  while (currentParts.length < maxLength) currentParts.push(0);
  while (latestParts.length < maxLength) latestParts.push(0);
  
  // Compare each part
  for (let i = 0; i < maxLength; i++) {
    if (latestParts[i] > currentParts[i]) {
      return true;
    } else if (latestParts[i] < currentParts[i]) {
      return false;
    }
  }
  
  return false;
}
